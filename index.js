const input = document.querySelector(".input");
const btn = document.querySelector(".btn");
const div = document.querySelector("div");
const totoList = document.querySelector(".todo-list") 

btn.addEventListener("click",function () {
     let p = document.createElement("p");
     p.classList.add("todo-item");
     p.innerText = input.value;
     div.appendChild(p);
     input.value = "";

     p.addEventListener("click",function(){
         p.remove();
     })


});