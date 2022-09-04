function AddNewWEField() {
    let newNode=document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add("weField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows",1);
    newNode.setAttribute("placeholder", "Enter Here");

    let weOb = document.getElementById("we");
    let weAddButtonOb = document.getElementById("weAddButton");

    weOb.insertBefore(newNode, weAddButtonOb);
}

function AddNewAQField() {
    let newNode=document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add("eqField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows",1);
    newNode.setAttribute("placeholder", "Enter Here");

    let aqOb = document.getElementById("eq");
    let aqAddButtonOb = document.getElementById("aqAddButton");

    aqOb.insertBefore(newNode, aqAddButtonOb);
}

function Language() {
    let newNode=document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add("langfield");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows",1);
    newNode.setAttribute("placeholder", "Enter Here");

    let lngOb = document.getElementById("lng");
    let LanguageOb = document.getElementById("Lang");
    lngOb.insertBefore(newNode, LanguageOb);
}


function generateCV(){
    let namefield=document.getElementById('namefield').value;
    let nameT1=document.getElementById('nameT1');
    nameT1.innerHTML=namefield;

    document.getElementById("nameT2").innerHTML = namefield;

    document.getElementById('contactT').innerHTML=document.getElementById('contactfield').value;

    document.getElementById('mailT').innerHTML=document.getElementById('mailfield').value;

    document.getElementById("addressT").innerHTML = document.getElementById('addressfield').value;

    document.getElementById("fbT").innerHTML = document.getElementById("fbfield").value;

    document.getElementById("instaT").innerHTML = document.getElementById("instafield").value;

    document.getElementById("LinkedT").innerHTML = document.getElementById('linkedinfield').value;

    document.getElementById("objectiveT").innerHTML = document.getElementById('objectivefield').value;


    let wes = document.getElementsByClassName("weField");

    let str ="";

    for (let e of wes) {
    str = str + `<li> ${e.value} </li>`;
    }
    
    document.getElementById("weT").innerHTML = str;

    //acdmic

    let aqs = document.getElementsByClassName("eqField");

    let str1 ="";

    for (let e of aqs) {
    str1 += `<li> ${e.value} </li>`;
    }
    
    document.getElementById("aqT").innerHTML=str1;

//language
    let lns = document.getElementsByClassName("langfield");

    let str2 ="";

    for (let e of lns) {
    str2 += `<li> ${e.value} </li>`;
    }
    
    document.getElementById("lgT").innerHTML=str2;
    
    //photo 

    let file = document.getElementById("imgfield").files[0];

    console.log(file);

    let reader = new FileReader();

    reader.readAsDataURL(file);

    console.log(reader.result);
  
    reader.onloadend = function (){
    document.getElementById('imgTemplate').src = reader.result;
    };

    document.getElementById("cv-form").style.display="none";
    document.getElementById("CV-template").style.display="block";

}

function printCV() {
    window.print();
}