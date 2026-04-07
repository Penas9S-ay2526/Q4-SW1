function toSubmit(){
    u = "SP_Admin";
    p = "1892mtmghrer";

    let userInput = document.getElementById("username").value;
    let passInput = document.getElementById("password").value;
    let f = document.getElementById("feedback").value;

    if (u === userInput && p === passInput) {
        document.getElementById("feedback").innerHTML='Access Granted! Welcome, SP_Admin';}
    else (u != userInput && p != passInput); {
        document.getElementById("feedback").innerHTML='Access Denied. Please try again.'};
}