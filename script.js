info=[
    {
        id : 1,
        name: "Getun",
        score:6.5,
        gender: true
    },
    {
        id: 2,
        name: "VVA",
        score: 10,
        gender: true
    },
    {
        id: 3,
        name: "Rover",
        score: 10,
        gender: true
    }
];
function showinfo(data = info){
    document.getElementById("info").innerHTML = "";
    for(i of data){
        document.getElementById("info").innerHTML += `<tr>
                                                      <td>${i.id}</td>
                                                      <td>${i.name}</td>
                                                      <td>${i.score}</td>
                                                      <td>${i.gender ? "Male" : "Female"}</td>
                                                      <td><i class = 'fa fa-trash'></i></td>
        </tr>
        `
    }
}
showinfo();
document.getElementById("btn").addEventListener("click",e=>{
    e.preventDefault();
    add={
        id:document.getElementById("stuid").value,
        name:document.getElementById("name").value,
        score: document.getElementById("score").value,
        gender:document.getElementById("gender").checked
    };
    if(isNaN(add.score)){
        alert("please type number");
        return;

    }
    add.score = Number(add.score)
    if(add.score<0 || add.score>10){
        alert("please type number from 1 to 10 ");
        return;
    }
    info.push(add);
    showinfo();
})
document.getElementById("btn-search").addEventListener("click",e=>{
    e.preventDefault();

    let keyword= prompt("Type student name to search : ");

    let result = info.find(item=> item.name == keyword)

    if(result==undefined){
        alert("Don't mess with me");
    }
    else{
        alert(`Id of search student : ${result.id}`)
    }
});
document.getElementById("chk-filter").addEventListener("click",e=>{
    if(document.getElementById("chk-filter").checked){
        let result = info.filter(item=> item.score >= 5);
        showinfo(result);
    }
    else{
        showinfo();
    }

})
