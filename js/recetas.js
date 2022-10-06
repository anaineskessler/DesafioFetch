//clase recetas

class Recetas {
    constructor(principal,titulo,imagen,ingredientes,proceso) {
        this.principal=principal;
        this.titulo = titulo;
        this.imagen = imagen;
        this.ingredientes = ingredientes;
        this.proceso = proceso;
    }
}

const listaRecetas = [];

// CREACIÓN DEL ARRAY DE LAS RECETAS

listaRecetas.push (new Recetas("Ñoquis","Ñoquis de papa con salsa Chedar, panceta crocante y verdeo",'./imagenes/nioquis-receta1.jpg',`1 paquete de Ñoquis de Papa La Italiana x 500 gr // 120 gr de panceta ahumada // 2 plantas de cebolla de verdeo // 400 gr de crema de leche // 200 gr de queso tipo cheddar // Aceite de oliva // Sal y pimienta`,"Dorar la panceta cortada en bastones finos en un poco de aceite y reservar. Lavar y picar en rodajas muy finas la cebolla de verdeo. Llevar a fuego fuerte la crema, una vez que rompe hervor  apagar el fuego, agregar el queso picado, dejar unos minutos que se funda y revolver bien para integrar todo el queso a la crema. Cocinar los Ñoquis de Papa La Italiana siguiendo las indicaciones del envase, colar y juntar con la salsa de cheddar y la panceta, servir y terminar por arriba con la cebolla de verdeo picada en crudo. VARIANTE: siguiendo el mismo proceso pero reemplazando el queso cheddar por queso gruyere obtenemos una crema de queso picante muy interesante."));
listaRecetas.push (new Recetas("Ñoquis",`Ñoquis de papa con crema de parmesano, jamón crudo y rúcula`,'./imagenes/nioquis-receta2.jpg','1 paquete de Ñoquis de Papa La Italiana x 500 gr // 400 gr de crema // 200 gr de parmesano  // 100 gr de jamón crudo // ½ atado de rúcula lavada // Aceite de oliva // Sal y pimienta',"Llevar a hervor la crema, apagar el fuego y sumar el queso rallado, dejar reposar unos minutos y mixear para homogeneizar la salsa. Cocinar los Ñoquis de Papa La Italiana siguiendo las indicaciones del envase, colar y unir en la olla donde tenemos la crema de queso. Sumar a la olla la mitad del jamón crudo desmenuzado y la mitad de las hojas de rúcula, cocinar dos minutos y servir. Terminar por arriba con el resto del jamón crudo y la rúcula fresca, condimentar con pimienta recién molida y aceite de oliva."));
listaRecetas.push (new Recetas("Ñoquis","Alitas de pollo al jengibre con ñoquis al pesto",'./imagenes/nioquis-receta3.jpg',"Ñoquis de papa La Italiana x 500 gr. // Miel 2 cdas // Jugo de naranja 50cc // Ralladura de naranja 1 cda // / Salsa de soja 4 cdas // Aceite de oliva 3 chas // Jengibre Fresco Rallado 2 cda // Ajo Picados 3 dientes // Cebollas moradas 2 unidades // Pimienta Negra Molida // Alas De pollo 12 unidades // Perejil picado // Ajo 1 diente // Aceite de oliva // Maní tostado 40 gr.","En un bow , batir la miel, el jugo de naranja, la ralladura de la cáscara, la salsa de soja, el aceite , el jengibre rallado, el ajo, y las cebollas picadas bien pequeñas, con ¼ de cucharadita de sal y ¼ de cucharadita de pimienta. Verter la marinada en una bolsa para horno. Poner las alitas en la bolsa y cerrar.  Marinar en el refrigerador durante al menos 2 horas, pero preferiblemente durante toda la noche. Retira las alas de pollo del refrigerador y colocarlas en una bandeja de horno. Cocinar a 200° hasta que se vean doradas aproximadamente 45 min. En un mixer colocar el perejil, el ajo y el aceite. Mixear y luego añadir esta salsa a los ñoquis cocidos y calientes. Por ultimo esparcir los maníes tostados y picados."));

listaRecetas.push(new Recetas("Fideos","Tallarines al huevo salteados con atún, tomate y albahaca",'./imagenes/fideos-receta2.jpg',"1 paquete de Tallarines al Huevo La Italiana x 500 gr //6 tomates  perita // 200 gr de atún en trozos al natural // 1 taza de hojas de albahaca // 2 dientes de ajo // Aceite de oliva // Sal y pimienta","Pelar los tomates pasándolos 10 segundos por agua hirviendo, retirar la piel tirando de la misma con ayuda de la punta de un cuchillo, la piel se desprenderá sola. Retirar las semillas y cortar los tomates en cubos pequeños Cortar en láminas muy finas los dientes de ajo. En una olla con aceite de oliva tibio dorar las láminas de dientes de ajo sin que se quemen, agregar los tomates cubeteados, salpimentar  y cocinar unos minutos. Cocinar los Tallarines al Huevo La Italiana siguiendo las indicaciones del envase, colar y saltear con la salsa. Agregar el atún bien escurrido y las hojas de albahaca cortadas bien finitas. Saltear unos segundos y servir. VARIANTE: se puede optar por reemplazar las hojas de albahaca frescas por 2 cucharadas de pesto de albahaca que le aportará al plato mayor intensidad de sabores."));
listaRecetas.push(new Recetas("Fideos","Fideúa","./imagenes/fideos-receta1.jpg","Tallarines finos La Italiana x 500 gr. // Langostinos 4 unidades // Tubo calamar 1 unidad // Mejillones 8 unidades // Caldo de ave // Tomate triturado 2 unidades // Cebolla 1 unidad // Ajo 3 dientes // Pimiento rojo 1 unidad // Pimentón dulce 1/2 cdita // Colorante amarillo o unas hebras de azafrán c/n // Aceite de oliva // Sal","Picar la cebolla y el ajo. Cortar en tiras parejas el pimiento. En una paellera colocar aceite y sofreír los vegetales hasta que estén dorados, agregar el tubo de calamar cortado en aros, añadir el tomate triturado y el caldo hasta cubrir. Dejar cocinar 10 a 12 min. Añadir los mejillones limpios y los condimentos, cocinar 5 min más. Agregar los fideos y por encima los langostinos. Dejar nuevamente hervir por 10 min. y apagar el fuego. Dejando reposar tapado. Servir bien caliente."));
listaRecetas.push(new Recetas("Fideos","Tallarines al huevo con salsa Siciliana",'./imagenes/fideos-receta3.jpg',"1 paquete de Tallarines al Huevo La Italiana x 500 gr // 1 cebolla // 1/2 zuchini // 1/2 berenjena chica // 1/2 hinojo pequeño // 400 gr de puré de tomates // 200 cc de caldo de vegetales // 2 cucharada de alcaparras // 10 aceitunas negras descarozadas // 2 filetes de anchoas // 1 diente de ajo // 2 cucharada perejil fresco picado // Aceite de oliva // Sal y pimienta","Cortar todos los vegetales en cubos de 1 cm de lado, aparte picar el ajo junto con las anchoas. En un sartén con aceite de oliva dorar los vegetales cortados en cubos junto con la pasta de ajo y anchoas. Agregar el puré de tomates y el caldo, cocinar a fuego bajo hasta espesar la salsa. Agregar las alcaparras y las aceitunas. Cocinar los Tallarines al Huevo La Italiana siguiendo las indicaciones del envase, colar y servir con la salsa, terminar con perejil fresco picado. OPCIONAL: si les gustan las salsas con carácter agregar durante la cocción una cucharadita de ají molido o lo ideal una cucharadita de nduja (pasta de cerdo untable muy picante y ahumada)"));
listaRecetas.push(new Recetas("Sorrentinos","Sorrentinos de ricotta con crema de frutos de mar","./imagenes/sorrentinos-receta1.jpg","1 paquete de Sorrentinos de Ricotta La Italiana x 600 gr //200 gr crema de leche // 200 cc leche // 1 cebolla // 1 diente de ajo // ½ hinojo chico // 1 taza de vino blanco // 200 gr mix de mariscos (camarones, langostinos, mejillones, berberechos, etc.) // 1 cápsula de azafrán // 1 hoja de laurel // 1 ralladura de 1 limón // 1 cucharada de almidón de maíz // ½ atado de ciboulette // Aceite de oliva // Sal y pimienta","Dorar la cebolla, el ajo y el hinojo picados en un poco de aceite de oliva. Agregar el azafrán, la ralladura de limón, el laurel y el vino blanco, evaporar el alcohol. Sumar la crema y la leche, llevar a hervor, sumar los mariscos y ligar con almidón de maíz disuelto en agua fría. Cocinar los Sorrentinos de Ricotta La Italiana siguiendo las indicaciones del envase, colar y mezclar con la salsa. Servir y terminar con ciboulette picado por arriba VARIANTE: su puede sumar a esta preparación un sobre de tinta de calamar para lograr una salsa con mayor intensidad de sabor y de color negro."));
listaRecetas.push(new Recetas("Sorrentinos","Sorrentinos de ricota con salsa Marinara","./imagenes/sorrentinos-receta2.jpg","1 paquete Sorrentinos de ricota La Italiana x 600gr. // Aceite de oliva 2 cdas. // Ajo 3 dientes. // Cebolla 1/2 unidad. // Tomates al natural 1 lata. // Concentrado de tomate  2 cdas. (opcional). // Orégano seco 1 cda. // Sal 1 cdita. // Pimienta negra molida c/n. // Albahaca fresca c/n.","Poner el aceite a calentar en una olla, luego añadir los ajos picados y la cebolla. Sofreír a fuego medio-alto hasta que se doren, removiendo de vez en cuando. Añadir, un poco de agua si fuera necesario. Añadir el resto de ingredientes (tomates de lata, concentrado de tomate, sal, pimienta y orégano), reservando la albahaca fresca. Remover y cocinar durante 10 minutos tapado y luego otros 10 minutos sin la tapa. Servir la pasta y agregar la salsa. Decorar con albahaca."));
listaRecetas.push(new Recetas("Sorrentinos","Sorrentinos de Pollo y Verdura con crema de brócoli y jamón","./imagenes/sorrentinos-receta3.jpg","1 paquete de Sorrentinos de Pollo y Verdura La Italiana x 700 gr // ½  planta de brócoli // 1 cebolla // 300 gr  leche // 300 gr crema de leche // 10 hojas  limpias de espinaca // 150 gr jamón cocido // Aceite de oliva // 1 cucharada de almidón de maíz // Sal y pimienta","Separar las flores de brócoli del tallo central, pelar el tallo con un pelapapas para retirar todo la parte exterior que es muy fibrosa. Cortar en cubos pequeños el tallo. En abundante agua hirviendo con sal blanquear las flores de brócoli 1 o 2 minutos, hasta que estén apenas tiernas en el tallo y mantengan el color verde vivo. En la misma agua blanquear el tallo cortado en cubitos hasta que esté tierno. Dorar la cebolla picada en un poco de aceite de oliva, salpimentar, agregar la crema y la leche, llevar a hervor y sumar los cubos de tallo y las flores blanqueadas, cocinar 3 minutos. Mixear o licuar la salsa junto con las hojas de espinaca crudas y volver a la olla donde cocinamos la salsa, llevar a hervor, si la salsa estuviera muy líquida ligar con almidón disuelto en agua fría. Cocinar los Sorrentinos de Pollo y Verdura La Italiana siguiendo las indicaciones del envase, colar y sumar a la salsa, agregar las flores de brócoli reservadas y el jamón en tiritas y servir. SECRETO: el brócoli va muy bien con cualquier carne de cerdo, por lo que se puede reemplazar el jamón cocido por jamón crudo, lomito ahumado, chorizo, salchicha parrillera o incluso algo de carré o bondiola previamente salteados."));

// carrusel

let recetaTitulo=document.querySelector("#recetaTitulo");
let recetaImagen=document.querySelector("#recetaImagen");
let recetaIngredientes=document.querySelector("#recetaIngredientes");
let recetaPasoaPaso=document.querySelector("#recetaPasoaPaso");

function buscoRecetas(tipoPasta,listaRecetas) {
    let listadoRecetas = [];
    // console.log(listaRecetas);
    // console.log(tipoPasta);
    switch(tipoPasta) {
        case 1:
            listadoRecetas=listaRecetas.filter(item => item.principal ==="Ñoquis");
            break;
        case 2:
            listadoRecetas=listaRecetas.filter(item => item.principal === "Fideos");
            console.log(listadoRecetas);
            break;
        case 3:
            listadoRecetas=listaRecetas.filter(item => item.principal === "Sorrentinos");
            break;
        default:
            break;
    } return listadoRecetas;
}

function elijoReceta(nro,pastaTipo,listar){
    // console.log(listar);
    const listadoReceta=buscoRecetas(parseInt(pastaTipo),listar);
    switch(nro) {
        case 1:
            recetaTitulo.innerHTML=`<h3 class="color_marron"> ${listadoReceta[0].titulo}</h3> <br> <hr>`;
            recetaImagen.innerHTML=`<img class="receta_Imagen" src= ${listadoReceta[0].imagen}  alt='receta1'>`;
            recetaIngredientes.innerHTML=`<h2 class="color_marron">Ingredientes</h2> <br> <p class="texto_recetas"> ${listadoReceta[0].ingredientes}</p>`;
            recetaPasoaPaso.innerHTML=`<br> <h2 class="color_marron">Procedimiento</h2> <br><p class="texto_recetas"> ${listadoReceta[0].proceso}</p>`;
            document.getElementById("buttonUno").style.backgroundColor ="#cc3300";
            document.getElementById("buttonDos").style.backgroundColor="#b9b9b9";
            document.getElementById("buttonTres").style.backgroundColor="#b9b9b9";
            break;
        case 2:
            recetaTitulo.innerHTML=`<h3 class="color_marron"> ${listadoReceta[1].titulo}</h3> <br> <hr>`;
            recetaImagen.innerHTML=`<img class="receta_Imagen" src= ${listadoReceta[1].imagen}  alt='receta2'>`;
            recetaIngredientes.innerHTML=`<h2 class="color_marron">Ingredientes</h2> <br> <p class="texto_recetas"> ${listadoReceta[1].ingredientes}</p>`;
            recetaPasoaPaso.innerHTML=`<br> <h2 class="color_marron">Procedimiento</h2> <br><p class="texto_recetas"> ${listadoReceta[1].proceso}</p>`;
            document.getElementById('buttonUno').style.backgroundColor="#b9b9b9";
            document.getElementById('buttonDos').style.backgroundColor="#cc3300";
            document.getElementById('buttonTres').style.backgroundColor="#b9b9b9";
            break;
        case 3:
            recetaTitulo.innerHTML=`<h3 class="color_marron"> ${listadoReceta[2].titulo}</h3> <br> <hr>`;
            recetaImagen.innerHTML=`<img class="receta_Imagen" src= ${listadoReceta[2].imagen}  alt='receta3'>`;
            recetaIngredientes.innerHTML=`<h2 class="color_marron">Ingredientes</h2> <br> <p class="texto_recetas"> ${listadoReceta[2].ingredientes}</p>`;
            recetaPasoaPaso.innerHTML=`<br> <h2 class="color_marron">Procedimiento</h2> <br><p class="texto_recetas"> ${listadoReceta[2].proceso}</p>`;
            document.getElementById('buttonUno').style.backgroundColor="#b9b9b9";
            document.getElementById('buttonDos').style.backgroundColor="#b9b9b9";
            document.getElementById('buttonTres').style.backgroundColor="#cc3300";
            break;
        default:
            break;
    }
}

// SELECCIÓN DEL TIPO DE PASTA PARA HABILITAR BOTONES ESPECÍFICOS

function fnPastas(nro) {
    switch (parseInt(nro)) {
        case 1:
            //console.log("pasta1");
            botones.innerHTML= `<button id="buttonUno" class="boton active color_claro" onclick="elijoReceta(1,${nro},listaRecetas)">Ñoquis Receta Nro 1</button>
            <button id="buttonDos" class="boton color_claro" onclick="elijoReceta(2,${nro},listaRecetas)">Ñoquis Receta Nro 2</button>
            <button id="buttonTres" class="boton color_claro"  onclick="elijoReceta(3,${nro},listaRecetas)">Ñoquis Receta Nro 3</button>`;
            break;
        case 2:
            //console.log("pasta2");
            botones.innerHTML= `<button id="buttonUno" class="boton active color_claro" onclick="elijoReceta(1,${nro},listaRecetas)">Fideos Receta Nro 1</button>
            <button id="buttonDos" class="boton color_claro" onclick="elijoReceta(2,${nro},listaRecetas)">Fideos Receta Nro 2</button>
            <button id="buttonTres" class="boton color_claro"  onclick="elijoReceta(3,${nro},listaRecetas)">Fideos Receta Nro 3</button>`;
            break;
        case 3:
            //console.log("pasta3");
            botones.innerHTML= `<button id="buttonUno" class="boton active color_claro" onclick="elijoReceta(1,${nro},listaRecetas)">Sorrentinos Receta Nro 1</button>
            <button id="buttonDos" class="boton color_claro" onclick="elijoReceta(2,${nro},listaRecetas)">Sorrentinos Receta Nro 2</button>
            <button id="buttonTres" class="boton color_claro"  onclick="elijoReceta(3,${nro},listaRecetas)">Sorrentinos Receta Nro 3</button>`;
            break;
        default:
            break;
    }
}

function recogeDatos(evento,listaRecetas) {
    evento.preventDefault();
    let tipoPasta = document.querySelector("#tipoPasta").value;
    //console.log(tipoPasta);
    fnPastas(tipoPasta,listaRecetas);
}

let botones=document.querySelector("#botones");
let miForm=document.querySelector("#elijoPasta");

miForm.addEventListener("submit",recogeDatos);
