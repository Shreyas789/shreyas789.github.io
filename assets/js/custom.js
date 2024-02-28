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

function toggleElement(clicked, ids) {
    let n = ids.length;
    let idx = 0;
    for (let i = 0; i < n; i++){
        if (ids[i] === clicked){
            idx = i;
        }
    }
    for (let i = 0; i < n; i++){
        if (i === idx){
            var x = document.getElementById(ids[i]);
            if (x.style.display === "block"){
                x.style.display = "none"
            }
            else{
                x.style.display = "block";
            }
        }    
        else{
            document.getElementById(ids[i]).style.display = "none";
        }
    }
}

function dropdown(span_id, block_id){
    var x = document.getElementById(span_id);
    if (x.innerHTML.charAt(0) == '▷'){
        x.innerHTML = '▽';
    }else{
        x.innerHTML = '▷';
    }
    showElement(block_id);
}