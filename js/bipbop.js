// Toggle Navigation for Mobile:

var isItOpen = 0;

function toggleNavigation() {
    if (isItOpen == 1) {
        document.getElementById("navigation").className = "navigation collapsed";
        isItOpen = 0;
    } else {
        document.getElementById("navigation").className = "navigation expanded";
        isItOpen = 1;
    }
}

/*
function closeSubscribeDialog() {
    document.getElementById("subscribe-dialog").style.display = "none";
}
function showSubscribeDialog() {
    document.getElementById("subscribe-dialog").style.display = "block";
}
*/
