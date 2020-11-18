let button = document.getElementById("hamburger")
let navigation = document.getElementById("list")
button.addEventListener("click",function(){
    button.classList.toggle("change");
    navigation.classList.toggle("open")
    console.log(navigation)
})
