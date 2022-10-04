(async () => {
    const {value: opci} = await Swal.fire({
        title:'Productos',
        // text:
        // html:
        // icon:
        confirmButtonText: 'Seleccionar',
        footer:'<span class="colormarron_sm">La Cucina de Anush</span>',
        // width:
        // padding:
        // background:
        // grow:
        // backdrop:
        // timer:
        // timerProgressBar:
        // toast:
        // position:
        // allowOutsideClick:
        // allowEscapeKey:
        // allowEnterKey:
        // stopKeydownPropagation:
    
        input: 'select',
        inputPlaceholder: 'Elija una Opción',
        inputValue: '',
        inputOptions: {
            alta:'Agregar un Producto',
            baja:'Eliminar un Producto',
            // modificar:'Modificar un Producto',
            listar:'Listado de Productos'
            }
        
        //  customClass:
        // 	container:
        // 	popup:
        // 	header:
        // 	title:
        // 	closeButton:
        // 	icon:
        // 	image:
        // 	content:
        // 	input:
        // 	actions:
        // 	confirmButton:
        // 	cancelButton:
        // 	footer:	
    
        // showConfirmButton:
        // confirmButtonColor:
        // confirmButtonAriaLabel:
    
        // showCancelButton:
        // cancelButtonText:
        // cancelButtonColor:
        // cancelButtonAriaLabel:
        
        // buttonsStyling:
        // showCloseButton:
        // closeButtonAriaLabel:
    
    
        // imageUrl:
        // imageWidth:
        // imageHeight:
        // imageAlt:
    });
    cargarCatalogo();
    switch (opci) {
    case "alta":
        altaProducto();
        break;
    case "baja":
        bajaProducto();
        break;
/*     case "modificar":
        modificoProducto();
        break; */
    case "listar":
        miroProductos();
        break;
    default:
        break;
}
})()


function pedirProd() {
    Swal.fire({        
        title:'Producto a Eliminar',
        input: "text",
        inputPlaceholder: 'Escriba el nombre',
        showCancelButton: true,
        confirmButtonText: "Guardar",
        cancelButtonText: "Cancelar",
        footer:'La Cucina de Anush',
    })
    .then(resultado => {
        if (resultado.value) {
            let nombreProducto = resultado.value;
            console.log("Hola, " + nombreProducto);
        }
    });
    return nombreProducto
}

//Swal.fire({
	//title:
	// text:
	// html:
	// icon:
	// confirmButtonText:
	// footer:
	// width:
	// padding:
	// background:
	// grow:
	// backdrop:
	// timer:
	// timerProgressBar:
	// toast:
	// position:
	// allowOutsideClick:
	// allowEscapeKey:
	// allowEnterKey:
	// stopKeydownPropagation:

	// input:
	// inputPlaceholder:
	// inputValue:
	// inputOptions:
	
	//  customClass:
	// 	container:
	// 	popup:
	// 	header:
	// 	title:
	// 	closeButton:
	// 	icon:
	// 	image:
	// 	content:
	// 	input:
	// 	actions:
	// 	confirmButton:
	// 	cancelButton:
	// 	footer:	

	// showConfirmButton:
	// confirmButtonColor:
	// confirmButtonAriaLabel:

	// showCancelButton:
	// cancelButtonText:
	// cancelButtonColor:
	// cancelButtonAriaLabel:
	
	// buttonsStyling:
	// showCloseButton:
	// closeButtonAriaLabel:


	// imageUrl:
	// imageWidth:
	// imageHeight:
	// imageAlt:
//});
