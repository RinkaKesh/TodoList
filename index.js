let myForm=document.querySelector("form");
let Task=document.getElementById("task");
let Priority=document.getElementById("priority");
let Tbody=document.querySelector("tbody");

let AllData=[];

myForm.addEventListener("submit",function(e){
     e.preventDefault();
     let Data={
      TASK:Task.value,
      PRIORITY:Priority.value,  
     }
    AllData.push(Data)
    Tbody.innerHTML="";


AllData.map((ele,i)=>{
    tr=document.createElement("tr");
     td1=document.createElement("td");
     td2=document.createElement("td");

    td1.innerText=ele.TASK;
    td2.innerText=ele.PRIORITY;

    if(ele.PRIORITY=="High"){
        td2.style.colour="red";
    }
    else{
        td2.style.colour="green";
    }

    tr.append(td1,td2);
    Tbody.append(tr);
})

})