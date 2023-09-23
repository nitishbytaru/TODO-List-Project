let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let inp = document.querySelector("input");

btn.addEventListener("click", function () {
  let temp = document.createElement("li");
  temp.innerText = inp.value;

  let delBtn = document.createElement("button");
  delBtn.classList.add("btn-close");
  delBtn.classList.add("splBtn");
  temp.classList.add("splLi");

  ul.appendChild(temp);
  temp.appendChild(delBtn);
  inp.value = "";
});

ul.addEventListener("click", function(event){
  if(event.target.nodeName=="BUTTON"){
    let out =event.target.parentElement;
    out.remove();
  }
  
});
