function validate() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if (username == "dpkbhatt863@gmail.com" && password == "deepak") {
        alert("Login Successful");
        return false;

    } else {
        alert("login failed")
    }

}