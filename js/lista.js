$( document ).ready(function() {
    var url = "http://localhost:8080/ApiCadastros/user/";
    var xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var myArr = JSON.parse(this.responseText);
            console.log(myArr);
            document.getElementById("linha_lista_email").innerHTML = myArr[0].email;
        }
    };
    xmlhttp.open('GET', url, true);
    xmlhttp.send();
});