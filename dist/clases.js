"use strict";
function CodigoProducto(newUID) {
    newUID = Math.random().toString(36).slice(2);
    return newUID;
}
function CatalogoProductos(codigoProd, nombreProducto, precioProducto, cantidad, canXProd) {
    codigoProd = CodigoProducto('');
    console.log('Codigo: ', codigoProd, "El nombre del producto es: ", nombreProducto, "Precio: ", precioProducto, "Cantidad: ", cantidad);
    canXProd = precioProducto * cantidad;
    let list;
    return list = [codigoProd, nombreProducto, precioProducto, cantidad, canXProd];
}
//let list: [string,string,number,number];
var list = CatalogoProductos('', 'Computadora i5', 900.25, 3, 0);
var list1 = CatalogoProductos('', 'Celular Samsung', 400.25, 5, 0);
var list2 = CatalogoProductos('', 'Tablet', 250.25, 5, 0);
var list3 = CatalogoProductos('', 'Television LG', 450.25, 10, 0);
var calcularCantidad = list[3] + list1[3] + list2[3] + list3[3];
var calcularTotal = list[2] + list1[2] + list2[2] + list3[2];
var totalPagar = calcularTotal * 1.12;
console.log("Total factura =>{" + "Total Items: " + calcularCantidad + " Subtotal: " + calcularTotal + " Total: " + totalPagar);
