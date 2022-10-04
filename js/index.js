const listaproductos = [
    {producto:'ravioles', precio: 1200},
    {producto:'sorrentinos', precio: 1500},
    {producto:'agnolotis', precio: 1800},
    {producto:'fideos', precio: 650},
    {producto:'ñoquis',precio: 750},
];

const listacliente = [
    {nombre: "Mariana Perez", direccion: "Rivadavia 45"},
    {nombre: "Gonzalo Rodriguez", direccion: "Concordia 432"},
    {nombre: "Sandra Bertolo", direccion: "Leones 344"},
    {nombre: "Andres Suarez", direccion: "Figueroa 424"},
];

//inicialización variables
let pedidoproducto =[];
let listadopedido =[];
let nroart = 0;
let costo = 0;
let totalpedido = 0;
let promo =false;
let nropromo = 0;
let total=0;
let pedidofinal='';
let cod= 0;
let cliente ='';

function agregarProducto(prod,cant,prec){
    pedidoproducto.push({producto: prod,cantidad: cant, costo: prec});
} 

function agregarCliente(nomb,dir) {
    listacliente.push({nombre: nomb, direccion: dir});
}

function calculocosto(precio, cantidad) {
    costo = precio * cantidad; 
//    alert(`${costo}`);
    return costo;
}

function buscoProducto(producto, listaproductos){
    cod = listaproductos.find(listaproductos => listaproductos.producto === producto);
    return cod;
}

function buscoCliente(cliente, listacliente){
    codCli = listacliente.find(listacliente => listacliente.nombre === cliente);
    return codCli;
}

function borrarelemento(elemento,lista){
    let elementobuscado = buscoProducto(elemento,lista);
    let ubicacion = lista.indexOf(elementobuscado);
    let confirma = prompt("Confirma la eliminación de: "+JSON.stringify(elementobuscado) + "? (S/N)");
    if (confirma.toUpperCase() ==="S") {
        lista.splice(ubicacion,1);
        alert("Se eliminó el artículo del pedido");
    } else {
        alert("No se eliminó el artículo del pedido");
    }
}

function calculototal() {
    totalpedido=0;
    //alert(JSON.stringify(pedidoproducto));
    //alert(pedidoproducto.costo);
    for (let index = 0; index < pedidoproducto.length; index++) {
        totalpedido = totalpedido + pedidoproducto[index].costo;
        //alert(totalpedido);
    }
    return totalpedido;
}

function porcentaje(valor,porc) {
    let importe = valor*porc/100;
    return importe;
}

// Mediodía: 25% Descuento, Efectivo: 15% Descuento, Tarjeta 1 pago: 10% Descuento
function calculopromo(total,nropromo) {
    switch (nropromo) {
        case 1:
            total = total - porcentaje(total,25);
//            alert("promo1");
            break;
        case 2:
            total = total - porcentaje(total,15);
//            alert("promo2");
            break;
        case 3:
            total = total - porcentaje(total,10);   
//            alert("promo3");     
            break;
        default:
            break;
    }
    return total;
}

function verlistado(listado){
    alert(JSON.stringify(listado));
}
