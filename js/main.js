

var requestLogIn = ( () => {
    var email = this.verificarEmail(document.form.femail.value);
    var senha = this.verificarSenha(document.form.fsenha.value);
    console.log(email);
    console.log(senha);
    var params = { "email": email, "senha": senha };
    console.log(params);

    var url = "http://localhost:8080/ApiCadastros/login/";
    var xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var myArr = JSON.parse(this.responseText);
            console.log(myArr);
            location.replace("../views/lista.html")
        }
    };
    xmlhttp.open('POST', url, true);
    xmlhttp.setRequestHeader('Content-Type', 'application/json');
    xmlhttp.setRequestHeader('Accept', 'application/json;charset=UTF-8');
    xmlhttp.send(JSON.stringify(params));
});

var verificarEmail = ((email) =>{
    return email;
});

var verificarSenha = ((senha) =>{
    return senha;
});