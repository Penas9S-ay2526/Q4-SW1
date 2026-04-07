function toSubmit(){
    const user = "SP_Admin";
    const pass = "1892mtmghrer";

    let userInput = document.getElementById("username").value;
    let passInput = document.getElementById("password").value;

    if (user === userInput && pass === passInput) {document.getElementById("feedback").innerHTML="Access granted! Welcome.";}
    else; {document.getElementById("feedback").innerHTML="Access Denied. Please try again."};
}