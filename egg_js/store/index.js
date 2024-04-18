/*
const cantidadProductos=Number(prompt("¿Qué numero de productos distintos deseas comprar?"))


let totalApagar=0
let nombresProductos="";

for (let index=1;index<=cantidadProductos;index++){
const nombre=prompt("¿Qué producto desea llevar?");
nombresProductos=nombresProductos+nombre+".";
const cantidad= Number(prompt("¿Cuántas unidades?"));
const precio= Number(prompt("¿Cuánto sale cada unidad?"));
const subtotal=cantidad*precio;

totalApagar=totalApagar+subtotal;}
nombresProductos=nombresProductos.substring(0,nombresProductos.length-1);

const mensaje=
'Productos: '+
nombresProductos+
' El total de la sumatoria es: '+totalApagar;
alert(mensaje);*/

/*Practica funciones*/

const comprar=()=>{

const cantidadProductos=Number(prompt("¿Qué numero de productos distintos deseas comprar?"))


let totalApagar=0
let nombresProductos="";

for (let index=1;index<=cantidadProductos;index++){
const nombre=prompt("¿Qué producto desea llevar?");
nombresProductos=nombresProductos+nombre+".";
const cantidad= Number(prompt("¿Cuántas unidades?"));
const precio= Number(prompt("¿Cuánto sale cada unidad?"));
const subtotal=cantidad*precio;

totalApagar=totalApagar+subtotal;}


console.log(nombresProductos);
console.log(totalApagar);
return totalApagar;
}

const total1 = comprar();
const total2 = comprar();
const total3 = comprar();
const total = total1 + total2;

console.log("Monto total ingreso : "+ total);

alert("Monto total ingreso : "+ total);




