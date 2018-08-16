function statusChangeCallback(response) {
    localStorage.setItem('token', response.authResponse.accessToken)
    FB.api('/me',{fields: ["id", "name", "email"]} , function(response) {
      localStorage.setItem('name', response.name)
    });

    if (response.status === 'connected') {
      testAPI();
    } else {
    }
  }

  function checkLoginState() {
    FB.getLoginStatus(function(response) {
      statusChangeCallback(response);
    });
  }

  window.fbAsyncInit = function() {
    FB.init({
      appId      : '1783427051770530',
      cookie     : true,
      xfbml      : true,
      version    : 'v2.8'
    });

    FB.getLoginStatus(function(response) {
    });

  };
  (function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = "https://connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'facebook-jssdk'));

  function testAPI() {
    FB.api('/me',{fields: ["id", "name", "email"]} , function(response) {
      window.location = 'home.html'
      axios.post('http://localhost:3000/users/register', {
        name: response.name,
        email: response.email,
        password: response.id
      })
      .then(user => {
        console.log('ini user-----',user);
      })
      .catch(function (error) {
        alert('Email already registered!')
      });
    });
  }


  function logout(){
    localStorage.removeItem('token')
    window.location='login.html'
    FB.logout(function(response){
      statusChangeCallback(response)
    })
  }
 