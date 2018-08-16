Vue.component('login-page', {
    template: `
    <div class="row" id="pwd-container">
            <div class="col-md-4"></div>
            <div class="col-md-4">
                <div id="formLogin">
                    <div class="container">
                        <div id="loginForm" class="shadow-lg p-3 mb-5 rounded" style="background: white">
                            <div class="text-center">
                                <h3 style="font-family: 'Courier New', Courier, monospace">BagiBagiDong</h3>
                            </div>
                            <div class="form-group">
                                <label for="email">Email address</label>
                                <input v-bind:a= ""type="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email">
                            </div>
                            <div class="form-group">
                                <label for="password">Password</label>
                                <input type="password" class="form-control" id="password" placeholder="Password">
                            </div>
                            <div class="text-center">
                                <button type="submit" class="btn btn-primary" onclick="manualLogin()">Login</button>
                            </div>
                            <br>
                            <small>Don't have any account?
                                <a href="register.html">Register</a> or login with
                                <fb:login-button scope="public_profile,email" onlogin="checkLoginState();">
                                </fb:login-button>
                            </small>
                        </div>
                    </div>
                </div>
            </div>
    `,
    data: function(){
        return {
            a: '',
            b: ''
        }
    },

    methods: {
        manualLogin(){
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
        },

        logout(){
            localStorage.removeItem('token')
            window.location='login.html'
            FB.logout(function(response){
              statusChangeCallback(response)
            })
        },

        checkLoginState() {
            FB.getLoginStatus(function(response) {
                statusChangeCallback(response);
            });
        },

        
    }
})