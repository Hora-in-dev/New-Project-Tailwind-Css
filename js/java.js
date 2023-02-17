
function openNav(){
    document.getElementById("outer_sile_bar").style.width = "100%"
    document.getElementById("side_nav_bar").style.width = "65%"
}

function closeNav(){
    document.getElementById("outer_sile_bar").style.width = "0"
    document.getElementById("side_nav_bar").style.width = "0"
}

function formAnswer(){
    var name = document.getElementById("name").value
    var mail = document.getElementById("email_in").value
    var textArea = document.getElementById("text_in").value
    if(String(name).length && String(mail).length && String(textArea).length){
        alert("Successful");
    }
} 