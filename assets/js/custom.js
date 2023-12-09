function myFunction() {
    if (document.getElementById("demo").innerHTML === "Hello World"){
        document.getElementById("demo").innerHTML = "";
    } 
    else{
        document.getElementById("demo").innerHTML = "Hello World";
    }
}
  
function showElement(id) {
    var x = document.getElementById(id);
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function toggleElement(id1,id2,clicked) {
    var x = document.getElementById(id1);
    var y = document.getElementById(id2);
    if (clicked === id1){
        x.style.display = "block";
        y.style.display = "none";
    } else {
        x.style.display = "none";
        y.style.display = "block;
    }
}
