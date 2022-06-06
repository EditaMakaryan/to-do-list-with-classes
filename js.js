class ToDo{
    constructor(obj){
        this.input = document.querySelector(".input-task");
        this.add = document.querySelector(".add");
        this.tasksarea=document.querySelector(".tasksarea");
        this.searchText=document.querySelector(".search-text");
        this.searchButton=document.querySelector(".search-button");
        this.arr=[];


        this.createInput();
        this.createAdd();
    }
    createInput(){
        this.input.addEventListener('input', (evt) =>{
            this.inputValue=evt.target.value;
            console.log( this.inputValue)
           
        })
}
    createAdd(){
        this.add.addEventListener("click", (e)=>{
            if(this.input.value){
                this.arr.push(this.input.value);
            this.newDiv=document.createElement("div");
            this.newDiv.classList.add("newdiv");
            this.textarea=document.createElement("textarea");
            // this.li=document.createElement("li")
            // this.li.classList.add("allli")
            // this.textarea.appendChild(this.li)
            // this.li.innerHTML=`${this.inputValue}`
            // console.log(this.li)
            this.newDiv.appendChild(this.textarea);
            this.tasksarea.appendChild(this.newDiv)
            this.textarea.innerHTML=`${this.input.value}`
           
            this.input.value="";
            this.createDone() 
            this.createSearch()
            console.log(this.arr);
            }
           
        })
           
    }
    createDone(){
    this.allDives=document.querySelectorAll(".newdiv")
    for(let i = 0; i<this.allDives.length ; i++){
        if(i==this.allDives.length-1){
        this.donebtn=document.createElement("button")
        this.donebtn.innerHTML=`Done`
        this.donebtn.classList.add("done")
        this.allDives[i].appendChild(this.donebtn)
        }
    }
    this.deleteBtnsCount = document.querySelectorAll(".done");
            for (let i = 0; i < this.deleteBtnsCount.length; i++) {
                this.deleteBtnsCount[i].addEventListener('click',(evt)=>{
                    const x = this.deleteBtnsCount[i].parentElement;
                    this.arr.splice(this.arr.indexOf(this.inputValue),1)
                    x.remove();
                    console.log(this.arr)
                })
            }
}
  
createSearch(){
// this.txtValue;
// this.li=this.li.innerHTML;


// this.filter = this.searchValue.toUpperCase();
// this.searchButton.addEventListener("click",(e)=>{
// for(let i= 0; i<this.li.length; i++){
//     this.txtValue=this.li;
//     if (this.txtValue.toUpperCase().indexOf(this.filter) > -1) {
//         this.li[i].style.display = "";
//       } else {
//         this.li[i].style.display = "none";
//       }
// }
// })

// }

this.searchText.addEventListener("input", (evt)=>{
this.searchValue=evt.target.value;
console.log(this.searchValue)
})
this.searchButton.addEventListener("click",(e)=>{
    this.filteredData=this.arr.filter((item,index)=>{
    return item.includes(this.searchValue);
    
})
console.log(this.filteredData)
this.tasksarea.innerHTML="";
this.arr=this.filteredData;
this.createAdd()

})



}
}
const ToDoList= new ToDo({

})