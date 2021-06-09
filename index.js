
button.onclick=function(){
 fetch('https://fakerestapi.azurewebsites.net/api/v1/Authors').then(response=>response.json()).
then(data=>{for(let i=0;i<10;i++){
    authors.insertAdjacentHTML("beforeend",`<div class="author">
    <h3>
     ${data[i].firstName} ${data[i].lastName}
    </h3>
    <h4>
        ${data[i].idBook}
    </h4>
    </div>`)
    }
});}

//we need loop to enter for each one of them map or ..
