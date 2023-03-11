const itemsArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : []
console.log(itemsArray);

document.querySelector("#enter").addEventListener("click", () => {
    const item = document.querySelector("#item")
    createItem(item) //fonction createItem
})
//? => si ça existe
//: => si ça existe pas alors 

function displateItems(){
    let items = ""
    for(let i = 0 ; i < itemsArray.length; i++){ //loop the itemArray grâce au fait que tu peux pas être inférieur à 0 donc infini = alors il incrémente
        items += `    <div class="item">
        <div class="input-controller">

            <textarea disabled>${itemsArray[i]}</textarea>

            <div class="edit-controller">
                <i class="fa-solid fa-check deleteBtn"></i>
                <i class="fa-solid fa-pen-to-square editBtn"></i>
            </div>

        </div>

        <div class="update-controller">
            <button class="save">Save</button>
            <button class="CancelBtn">Cancel</button>
        </div>
    </div>`
    }
    document.querySelector(".to-do-list").innerHTML = items

    activateDeleteListeners() //k
    activateEditListeners() //k
    activateSaveListeners()
    ActivateCancelListeners()
}

function activateDeleteListeners() {
    let deleteBtn = document.querySelectorAll(".deleteBtn")
    deleteBtn.forEach((deleteBtn, i) => {
        deleteBtn.addEventListener("click", () => {deleteItem(i)})
    })
}

function activateEditListeners() {
    const editButton = document.querySelectorAll(".editBtn")
    const updateController = document.querySelectorAll('.update-controller')
    const inputController = document.querySelectorAll(".input-controller textarea")
    editButton.forEach((editButton, i) => {
        editButton.addEventListener("click", () => {
            updateController[i].style.display = "block" //dans le css c'était en display:none
            inputController[i].disabled = false})
    })
}

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

function activateSaveListeners() {
    const saveBtn = document.querySelectorAll(".update-controller  .saveBtn")
    const inputs = document.querySelectorAll(".input-controller textarea")
    const updateController = document.querySelectorAll(".update-controller")
    saveBtn.forEach((sb, i) => {
        sb.addEventListener("click", () => {
            updateItem(inputs[i].value)
            inputs[i].disabled = false
            console.log("Has clicked");
        })  
    })
}

function ActivateCancelListeners() {
    const CancelBtn = document.querySelectorAll(".update-controller  .CancelBtn")
    const updateController = document.querySelectorAll(".update-controller")
    const inputs = document.querySelectorAll(".input-controller textarea")
    CancelBtn.forEach((cb, i) => {
        cb.addEventListener("click", () => {
            updateController[i].style.display = "none"
            inputs[i].disabled = true
        })
    })
}

function updateItem(txt, i) {
    itemsArray[i] = txt
    localStorage.setItem('items', JSON.stringify(itemsArray))
    location.reload()
}
function deleteItem(i) {
    itemsArray.splice(i, 1)
    localStorage.setItem("items", JSON.stringify(itemsArray))
    location.reload()
}
//innerHTML = insérer un élement dans la page ou modifier le contenu d'une balise

window.onload = function(){ //quand le window est chargé on execute la fonction displayDate
    displayDate()
    displateItems()
}

