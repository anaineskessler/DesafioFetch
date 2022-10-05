let recetasInternac = document.getElementById("recetasInternac");

const listaTragos = async () => {
try {
    let response = await fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita");
    let data = await response.json();
    let tragosElegidos = data.drinks;

    console.log(tragosElegidos);
    console.log(data);
    
    tragosElegidos.forEach(tragos => {
        const div = document.createElement("div");

        div.innerHTML = `
        <h3 class= "color_marron_sm">Código: ${tragos.idDrink}</h3>
        <p><b>Categoría:</b> ${tragos.strCategory}</p>        
        <p><b>Nombre:</b> ${tragos.strDrink}</p>    
        <img class= "imagenTragos" src="${tragos.strDrinkThumb}">
        <p><b>Ingredientes:</b> ${tragos.strIngredient1}, ${tragos.strIngredient2}, ${tragos.strIngredient3}, ${tragos.strIngredient4}, ${tragos.strIngredient5}, ${tragos.strIngredient6}, ${tragos.strIngredient7} </p>
        <br>
        <hr/>
        `;
        recetasInternac.append(div);
        });
    } catch(error) {
        
        let div =document.createElement("div");
        div.innerHTML=`
        <h1>Ha ocurrido un error, por favor intentar luego!</h1>`;
        recetasInternac.append(div);
    }
};

listaTragos();