let recetasInternac = document.getElementById("recetasInternac");


const listaTragos = async () => {
try {
    let response = await fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita");
    cocktail = await response.json();
    let tragosElegidos = cocktail.results;
    console.log("HOLA");
    console.log(cocktail);
    console.log("HOLA2");
    
tragosElegidos.forEach(tragos => {
        console.log("hola");
        const div = document.createElement("div");

        div.innerHTML = `
        <h1>Código: ${tragos.idDrink}</h2>
        <p>Categoría: ${tragos.strCategory}</p>        
        <p>Nombre: ${tragos.strDrink}</p>        
        <img src"${tragos.strDrinkThumb}">
        <hr/>
        `;
        recetasInternac.append(div);
        });
    } catch(error) {
        
        let div =document.createElement("div");
        div.innerHTML=`
        <h1>Próximamente!</h1>`;
        recetasInternac.append(div);
    }
};
listaTragos()