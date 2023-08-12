
DATA_URL= "json/data.json";
var container= document.getElementById("container")




function showData(dataArray) {
  for (const item of dataArray) {
    container.innerHTML += `<p> ${item.name} ${item.lastname} </p>`; 
  }
}

function mostrar_nombres(){
  fetch(DATA_URL)
  .then(data => data.json())
  .then(data2 => {
    console.log(data2.students);
    showData(data2.students);
  })
}
  window.addEventListener("load", mostrar_nombres);