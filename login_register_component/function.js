function register() {
    var name = $("#name").val();
    var email = $("#email").val();
    var password = $("#password").val();
    axios.post('http://localhost:3000/users/register', {
        name: name,
        email: email,
        password: password
      })
      .then(user => {
        window.location='index.html'
      })
      .catch(function (error) {
        console.log(error);
      });
}
  
function manualLogin(){
var email = $("#email").val();
var password = $("#password").val();
axios.post('http://localhost:3000/users/login', {
    email: email,
    password: password
    })
    .then(user => {
    localStorage.setItem('name', user.data.name)
    localStorage.setItem('token', user.data.token)
    window.location='home.html'
    })
    .catch(function (error) {
    console.log(error);
    });
}
