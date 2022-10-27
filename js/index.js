let list =document.querySelector("#list")
let button =document.querySelector("#btn")
let img= document.querySelector(".corusel_item");
let left_btn = document.querySelector(".left_btn");
let right_btn = document.querySelector(".right_btn");
let corusel_item = document.querySelector(".corusel_item");
let images= ["https://i.ytimg.com/vi/FAg8JZwFM2U/maxresdefault.jpg", 
"https://peoplenews.uz/wp-content/uploads/2021/07/image-72.jpeg",
"https://uzreport.news/fotobank/image/aa6ce48e83ad2885b47825b9942048ab.jpeg",
"https://i.pinimg.com/736x/18/bd/41/18bd4134927a899db79cb9ea64643838.jpg"]

button.addEventListener("click" , ()=>{
   if(list.classList[1]==="toggle-list"){
    list.classList.remove("toggle-list")
   }else{
    list.classList.add("toggle-list")
   }
})
