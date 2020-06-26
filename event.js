const b =document.querySelector(".btn")
b.setAttribute("style" , " width:70px")
b.setAttribute("style" , " font-size:19px")
b.style.height="30px";

const place=document.querySelector("#task");
place.setAttribute("style","height:27px")

let head=document.querySelector("label")
head.setAttribute("style" , "font-size:23px")

let headd=document.querySelector("h1")
headd.setAttribute("style" , "font-size:22px")


const button = document.querySelector(".btn")
const holdder=document.querySelector(".holdder")
const taskName=document.querySelector("#task")

let todoz= [] ;

button.addEventListener("click" ,(e)=>{
    e.stopPropagation();
    const aim = taskName.value ;
    todoz.push(aim)
    renderTodoz()
    taskName.value="";
})

const renderTodoz=() =>{
holdder.innerHTML="" ;
todoz.forEach((todo)=>{
const listname=document.createElement("li")
listname.innerHTML= todo ;
holdder.appendChild(listname);
//listname.addEventListener("click" ,(e)=>removeitem(listname));

listname.addEventListener("click" , (e)=>{setTimeout(function conf(){
    let meg = confirm("confirm delete this item?")
    if( meg==true){
       return removeitem(listname)
    }
} ,1000)})
});
};

const removeitem = (listname)=>{
    const newitem= todoz.filter((todo)=>todo!==listname.innerHTML )
    todoz =newitem ;
    renderTodoz();
};

