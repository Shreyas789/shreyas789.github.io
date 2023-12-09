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
