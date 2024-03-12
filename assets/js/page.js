



function copyToClipboard(text) {
    var textarea = document.createElement("textarea");
    textarea.textContent = text;
    document.body.appendChild(textarea);

    textarea.select();
    document.execCommand("copy");

    document.body.removeChild(textarea);
    alert("Address copied to clipboard!");
}

function searchFunction() {
    var input, filter, div, txtValue;
    input = document.getElementById('search');
    filter = input.value.toUpperCase();
    div = document.getElementsByClassName('address');
    for (i = 0; i < div.length; i++) {
        txtValue = div[i].textContent || div[i].innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            div[i].style.display = "";
        } else {
            div[i].style.display = "none";
        }
    }
}





window.onload = function() {
    var tokens = document.getElementsByClassName('token');
    for (var i = 0; i < tokens.length; i++) {
        var token = tokens[i];
        var text = token.textContent;
        var start = text.substr(0, 10);
        var end = text.substr(-10); 
        token.textContent = start + '...' + end;
    }
};
