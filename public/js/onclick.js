function myFunction1() {
    var x = document.getElementById("accurate");
    var y = document.getElementById("fast");
    if (x.style.display === "none" && y.style.display == 'none') {
        x.style.display = "block";
    }
    if (x.style.display === "none" && y.style.display == 'block') {
        x.style.display = "block";
        y.style.display = "none";
    }


}

function myFunction2() {
    var x = document.getElementById("accurate");
    var y = document.getElementById("fast");
    if (x.style.display === "none" && y.style.display == 'none') {
        y.style.display = "block";
    }
    if (x.style.display === "block" && y.style.display == 'none') {
        x.style.display = "none";
        y.style.display = "block";
    }
    if (x.style.display === "none" && y.style.display == 'block') {
        y.style.display == 'none';
        x.style.display == 'block'
    }
}









