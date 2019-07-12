$( document ).ready(function() {
    var url = "http://localhost:8080/ApiCadastros/user/";
    var xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var myArr = JSON.parse(this.responseText);
            console.log(myArr);
            
                document.getElementById("linha_lista_email").innerHTML = myArr[0].email;
                document.getElementById("linha_lista_pontos").innerHTML = myArr[0].pontos;
                document.getElementById("linha_lista_nome").innerHTML = myArr[0].nome;

                document.getElementById("linha_lista_email_2").innerHTML = myArr[1].email;
                document.getElementById("linha_lista_pontos_2").innerHTML = myArr[1].pontos;
                document.getElementById("linha_lista_nome_2").innerHTML = myArr[1].nome;

                document.getElementById("linha_lista_email_3").innerHTML = myArr[2].email;
                document.getElementById("linha_lista_pontos_3").innerHTML = myArr[2].pontos;
                document.getElementById("linha_lista_nome_3").innerHTML = myArr[2].nome;

                document.getElementById("linha_lista_email_4").innerHTML = myArr[3].email;
                document.getElementById("linha_lista_pontos_4").innerHTML = myArr[3].pontos;
                document.getElementById("linha_lista_nome_4").innerHTML = myArr[3].nome;
        }
    };
    xmlhttp.open('GET', url, true);
    xmlhttp.send();
});