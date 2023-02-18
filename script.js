const itemsArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : []
console.log(itemsArray);

document.querySelector("#enter").addEventListener("click", () => {
    const item = document.querySelector("#item")
    createItem(item) //fonction createItem
})
//? => si ça existe
//: => si ça existe pas alors 

function createItem(item) {
     itemsArray.push(item.value) //Dans itemsArray on push la valeur de l'item
     localStorage.setItem("items", JSON.stringify(itemsArray)) //stringify car itemsArray contient item.value
     location.reload()
}

function displayDate() {
    let date = new Date()
    date = date.toString().split(" ") //Separe tout car espace
    document.querySelector('#date').innerHTML = date[1] + " " + date[2] + " " + date[3]
}

//innerHTML = insérer un élement dans la page ou modifier le contenu d'une balise

window.onload = function(){ //quand le window est chargé on execute la fonction displayDate
    displayDate()
}