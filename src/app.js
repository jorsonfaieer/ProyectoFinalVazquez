// crear un array de objetos tipo productos, con nombre string, imagen, precio float, si esta en oferta bool y stock int
class Producto {
    constructor(categoria, nombre, precio, codigo, enOferta, imagen) {
      this.categoria = categoria.toUpperCase();
      this.nombre = nombre;
  
      // Si el producto esta en oferta, se le aplica un descuento del 10%
      if(enOferta){
          let precioDescuento = precio * 0.1;
          this.precio = parseFloat(precio - precioDescuento);
      }else{
          this.precio = parseFloat(precio);
      }
      
      this.codigo = codigo;
      this.enOferta = enOferta;
      this.imagen = imagen;
    }
  
    //metodo para agergar un codigo al producto aleatoriamente   
    generarCodigo(array) {  
        this.codigo = array.length + 1000;
    }
}
  
const ropa = [
    new Producto("Buzos", "Buzo Kongo Slime Pink", 1000, 1000, false, "/src/img/Buzo Kongo Slime Pink.webp"),
    new Producto("Buzos", "Buzo Kongo Slime Sky Blue", 1500, 1001, true, "/src/img/BuzoKongoSlimeSkyBlue.webp"),
    new Producto("Buzos", "Buzo Kongo Tour", 1000, 1002, true, "/src/img/Buzo Kongo Tour.webp"),
    new Producto("Buzos", "Buzo Summer Lime", 1000, 1009, false, "/src/img/Buzo Summer Lime.webp"),
    new Producto("Remera", "Remeron Kongo Blanco", 1500, 1010, true, "/src/img/Remeron Kongo Blanco.webp"),
    new Producto("Remera", "Remeron Kongo Negro", 1000, 1011, false, "/src/img/Remeron Kongo Negro.webp"),
    new Producto("Pantalon", "Pantalon Parachute Pink", 1000, 1016, false, "/src/img/Pantalon Parachute Pink.webp"),
    new Producto("Pantalon", "Pantalon Cargo Black", 1500, 1017, true, "/src/img/Pantalon Cargo Black.webp"),
];

// Agregando al Dom las cards de los productos en oferta
const cardsOnsaleContainer = document.querySelector('#cardsOnsaleContainer');
const productosOnsale = ropa.filter(producto => producto.enOferta === true);

// por cada producto en oferta se crea una card y se agrega al cardsOnsaleContainer
cardsOnsaleContainer.innerHTML = '';

productosOnsale.forEach(producto => {
    const card = document.createElement('div');
    card.classList.add("w-full", "p-4", "lg:w-1/4", "md:w-1/2");
    card.innerHTML = `
    <div class="relative block overflow-hidden rounded h-80">
        <img alt="${producto.nombre}" class="block object-cover object-center w-full h-full" src="${producto.imagen}">
    </div>
    <div class="mt-4">
        <h3 class="mb-1 text-xs tracking-widest text-gray-500 title-font">${producto.categoria}</h3>
        <h2 class="text-lg font-medium text-gray-900 title-font">${producto.nombre}</h2>
        <p class="mt-1 font-bold text-red-700">$${producto.precio}</p>
        <button class="flex w-auto px-8 py-2 mt-2 text-lg text-white bg-gray-900 border-0 rounded focus:outline-none hover:bg-gray-600">Agregar al carrito</button>
    </div>
    `;
    cardsOnsaleContainer.appendChild(card);
});

// PINTANDO TODOS LOS PRODUCTOS EN EL DOM
// Agregando al Dom las cards de todos los productos que no estan en oferta
const cardsProductosContainer = document.querySelector('#cardsProductosContainer');
const productosSinOferta = ropa.filter(producto => producto.enOferta === false);
console.log(productosSinOferta);

// por cada producto se crea una card y se agrega al cardsProdutosContainer
cardsProductosContainer.innerHTML = '';

productosSinOferta.forEach(producto => {
    const card = document.createElement('div');
    card.classList.add("w-full", "p-4", "lg:w-1/4", "md:w-1/2");
    card.innerHTML = `
    <div class="relative block overflow-hidden rounded h-80">
        <img alt="${producto.nombre}" class="block object-cover object-center w-full h-full" src="${producto.imagen}">
    </div>
    <div class="mt-4">
        <h3 class="mb-1 text-xs tracking-widest text-gray-500 title-font">${producto.categoria}</h3>
        <h2 class="text-lg font-medium text-gray-900 title-font">${producto.nombre}</h2>
        <p class="mt-1 font-bold">$${producto.precio}</p>
        <button class="flex w-auto px-8 py-2 mt-2 text-lg text-white bg-gray-900 border-0 rounded focus:outline-none hover:bg-gray-600">Agregar al carrito</button>
    </div>
    `;
    cardsProductosContainer.appendChild(card);
});

// FUNCIONALIDAD CARRITO DE COMPRAS
// crear carrito de compras vacio y total de la compra en 0
let cart = [];
let total = 0;

// Si el carrito esta vacion se oculta el icono de notificacion, si tiene productos se muestra en rojo
const notificacionCarrito = document.querySelector('#notificacionCarrito');
if (cart.length <= 0) {
    notificacionCarrito.classList.add('hidden');
}

// variables para el carrito
const btnCarrito = document.querySelector('#btnCarrito');
const btnCerrarCarrito = document.querySelector('#btnCerrarCarrito');

// si se hace click al boton de carrito se muestra el carrito
btnCarrito.addEventListener('click', () => {
    carrito.classList.remove('right-[-100vw]');
    carrito.classList.add('right-0');    
});

// si se hace click al boton de cerrar carrito se oculta el carrito
btnCerrarCarrito.addEventListener('click', () => {
    carrito.classList.remove('right-0');
    carrito.classList.add('right-[-100vw]');
});