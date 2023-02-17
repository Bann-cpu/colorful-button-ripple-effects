function displayDate() {
    let date = new Date()
    date = date.toString().split(" ")
    console.log(date);
}


window.onload = function(){ //quand le window est chargé on execute la fonction displayDate
    displayDate()
}