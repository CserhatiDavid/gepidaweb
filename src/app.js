/*
* File: app.js
* Author: Cserhati David
* Copyright: 2023, Cserhati David
* Group: Szoft I-2 N
* Date: 2023-05-11
* Github: https://github.com/CserhatiDavid/
* Licenc: GNU GPL
* Nem vállalunk felelősséget a rossz jegyekért
*/
const doc={
    tbody:document.querySelector("#tbody")
};
const state={
    host:"http://localhost:8000/",
    bikes:[]
};
window.addEventListener("load",()=>{
    init();
});
function init() {
    getBikes();
}
function getBikes() {
    let endpoint="bikes";
    let url=state.host+endpoint;
    fetch(url)
    .then(response=>response.json())
    .then(result=>{
        // console.log(result)
        state.bikes=result;
        renderBikes();
    })
}
function renderBikes() {
    var rows="";
    state.bikes.forEach(bike=>{
        var row=`
            <tr>
                <td>${bike.id}</td>
                <td>${bike.name}</td>
                <td>${bike.wheel}</td>
                <td>${bike.usage}</td>
                <td>${bike.price}</td>
            </tr>
        `;
        rows+=row;
        console.log(bike.name)    
    })
    doc.tbody.innerHTML=rows;
}