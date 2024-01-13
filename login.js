function Login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username === "usuario" && password === "senha") {
        alert("Login bem-sucedido!");
    } else {
        document.getElementById("error-message").innerText = "Credenciais inválidas. Tente novamente.";
    }
}
