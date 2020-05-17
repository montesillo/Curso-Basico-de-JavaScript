function auto(marca, modelo, annio){
    this.marca = marca;
    this.modelo = modelo;
    this.annio = annio;
}

var marcas = ["Ford", "Toyota", "Nissan", "Tesla"];
var modelos = ["Fiesta", "Corolla", "Urvan", "Model 3"];
var annios = [2017, 2018, 2019, 2020];
var auto;

for (var i = 0; i < 30; i++){
    var random = [];
    for(var j = 0; j < 3; j++){
        random[j] = Math.floor(Math.random() * (4 - 0)) + 0;
    }
    auto[i] = new auto (marcas[random[0]], modelos[random[1]], annios[random[2]] );
    console.log(auto[i]);
}
 //Este código lo tome en una respuesta de platzi y lo mejore
var carros=[];
var marcas=["Tesla","Toyota","Audi"];
var modelos=["Model 3","Corolla","Q5"];
var anios=[2018,2019,2020];

for (var i = 0; i < 30; i++){
  carros.push(new auto(marcas[aleatorio(marcas.length)],modelos[aleatorio(modelos.length)],anios[aleatorio(anios.length)]));
console.log(carros[i]);
}

function aleatorio(max) 
{
  return Math.floor(Math.random() * (max - 0)) + 0;
}