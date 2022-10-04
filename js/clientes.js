class Cliente {
    constructor(nombre, direccion, localidad, telefono) {
        this.nombre = nombre;
        this.direccion = direccion;
        this.localidad = localidad;
        this.telefono = telefono;
    }
}
//inicialización variables
let codCli= 0;
let cliente ='';
let estaCliente="";
let listCli="";
let elementobuscado="";
let ubicacion=0;
let nombreCliente="";
let opc="";
let pase=0;

const listacliente = [];

// Traemos de un archivo .json los datos

fetch("./js/clientes.json")
.then(response=>response.json())
.then( data => {
    data.forEach(basecliente => {
        listacliente.push(new Cliente(basecliente.nombre, basecliente.direccion,basecliente.localidad,basecliente.telefono));
    });
})

function agregarCliente(nomb,dir,loc,tel) {
    listacliente.push({nombre: nomb, direccion: dir, localidad: loc, telefono: tel});
}

function buscoCliente(cliente, listacliente){
    codCli = listacliente.find(item => item.nombre.toUpperCase() === cliente.toUpperCase());
    return codCli;
}

function borroCliente(ubicacion){
    listacliente.splice(ubicacion,1);
    console.log(listacliente);
    Swal.fire(
        'Se eliminó el Cliente',
        '',
        'success'
    )
}

function preguntaEliminar(ubicacion) {
    Swal.fire({
        title: 'Eliminación',
        text: "Está seguro que quiere eliminarlo",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, Eliminarlo'
    }).then((result) => {
        if (result.isConfirmed) {
        confirma="S";
        borroCliente(ubicacion);
        listadoClientes();
        Swal.fire(
            'Borrado',
            'El Cliente fue eliminado',
            'success'
        )
        }
    })
}

function borrarCliente(cliente,listacliente){
    elementobuscado = buscoCliente(cliente.nombre,listacliente);
    ubicacion = listacliente.indexOf(elementobuscado);
    console.log(listacliente);
    preguntaEliminar(ubicacion);
}

function bajaCliente(){
    borrarElemento("listadoCompletoClientes");
    borrarElemento("datosAltaCliente");
    opc = "b";
    pase=0;
    listadoClientes();
    botonClientes("b");
    document.getElementById('botonCliente');
    botonCliente.innerHTML=etiquetaBoton;
    nombreCliente = document.getElementById('ingresoCli').value;
    return nombreCliente;
}

function clienteBaja(){
    nombreCliente=bajaCliente();
    estaCliente= buscoCliente(nombreCliente,listacliente);
    (estaCliente === undefined) ? Swal.fire('Ese Cliente no existe','','error') : borrarCliente(estaCliente,listacliente);
    borrarElemento("listadoCompletoClientes");
    }

function veoCliente() {
    (opc==="b") ? clienteBaja() : clienteAlta();
}

function altaCliente(){
    borrarElemento("listadoCompletoClientes");
    pase=0;
    opc = "a";
    listadoClientes();
    botonClientes("a");
    document.getElementById('botonCliente');
    botonCliente.innerHTML=etiquetaBoton;
    nombreCliente = document.getElementById('ingresoCli').value;
    return nombreCliente;
}

function datosClienteNuevo() {
    let item = document.createElement("div");
    item.innerHTML=`
        <form  id="datosAltaCliente">
            <label class="color_marron_sm">Dirección: </label>
            <input type="text" id="direccionCliente">
            <label class="color_marron_sm">Localidad: </label>
            <input type="text" id="localidadCliente">
            <label class="color_marron_sm">Teléfono: </label>
            <input type="text" id="telefonoCliente">
            <button type="button" class="form-button" onclick="actualizoNvoCliente()">Ingresar</button>
        </form>`;
        datosAltaCliente.append(item);
}

function actualizoNvoCliente() {
    borrarElemento("listadoCompletoClientes");
    let dir = document.querySelector("#direccionCliente").value;
    let loc = document.querySelector("#localidadCliente").value;
    let tel = document.querySelector("#telefonoCliente").value;
    agregarCliente(cliente,dir,loc,tel);
    Swal.fire(
        'Actualización',
        'El Cliente se agregó correctamente',
        'success'
    );
    pase=0;
    listadoClientes();
}

function clienteAlta() {
    cliente=altaCliente();
    estaCliente= buscoCliente(cliente,listacliente);
    (estaCliente === undefined) ? datosClienteNuevo() : Swal.fire('Ese Cliente ya existe','','error');
}

function listaCompletoCLientes(listacliente){
    if (pase ===0) {
        for (const lista of listacliente) {
            let item = document.createElement("div");
            item.innerHTML = `<h3 class="color_marron_sm">Nombre: ${lista.nombre}</h3> 
                            <p>Dirección: ${lista.direccion} \n Localidad: ${lista.localidad}</p> \n  Teléfono: ${lista.telefono}</p>`;
            listadoCompletoClientes.append(item);
            pase++ ;
        }
    } else { 
        borrarElemento("listadoCompletoClientes");
    }
}

function borrarElemento(elementID) { 
    document.getElementById(elementID).innerHTML = "";
}

function listadoClientes() {
    borrarElemento("listadoCompletoClientes");
    pase=0;
    listaCompletoCLientes(listacliente);
}

function botonClientes(opcion) {
    (opcion==="a") ? etiquetaBoton ="Alta" : etiquetaBoton ="Baja";
}