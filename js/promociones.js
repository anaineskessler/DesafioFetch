let fecha = new Date();
let haypromo =0;
let diasemana= fecha.getDay();

switch (diasemana) {
    case 1:
        haypromo = document.createElement("div");
        haypromo.innerHTML = "<h3>Las promociones del día Lunes son: </h3>";
        promocionValida.append(haypromo);
        break;
    case 2:
        haypromo = document.createElement("div");
        haypromo.innerHTML = "<h3>Las promociones del día Martes son: </h3>";
        promocionValida.append(haypromo);
        break;        
    case 3:
        haypromo = document.createElement("div");
        haypromo.innerHTML = "<h3>Las promociones del día Miércoles son: </h3>";
        tipo
        promocionValida.append(haypromo);
        break;        
    case 4:
        haypromo = document.createElement("div");
        haypromo.innerHTML = "<h3>Las promociones del día Jueves son: </h3>";
        promocionValida.append(haypromo);
        break;        
    case 5:
        haypromo = document.createElement("div");
        haypromo.innerHTML = "<h3>Las promociones del día Viernes son: </h3>";
        promocionValida.append(haypromo);
        break;        
    case 6:
        haypromo = document.createElement("div");
        haypromo.innerHTML = "<h3>Las promociones del día Sábado son: </h3>";
        promocionValida.append(haypromo);
        break;    
    case 0:
        haypromo = document.createElement("div");
        haypromo.innerHTML = "<h3>Las promociones del día Domingo son: </h3>";
        promocionValida.append(haypromo);
        break;                                    
    default:
        break;
}
