<template>
<div class="authcontainer">
	<div class="screen">
		<div class="screen__content">
            <form class="login">
            <h1>Login Here!! <i class="fa fa-lock"></i></h1>
    
                <div class="login__field">
                <i class="login__icon fa fa-user"></i>
                <input type="email" class="login__input" placeholder="Email" v-model="email" required>
                </div>

                <div class="login__field">
                <i class="login__icon fa fa-lock"></i>
                <input type="password" class="login__input" placeholder="Password" v-model="password" required>
                </div>

                <button @click="login" class="button login__submit">
                <span class="button__text">Log In Now</span>
                <i class="button__icon fa fa-chevron-right"></i>
                </button>
                <p>Don't have account yet? <router-link to="/register">Take me in</router-link></p>
            </form>
        </div>
    </div>
</div>
</template>

<script>
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

export default {
    name:"LogIn",
    data() {
        return{
            email:"",
            password:"",
        };
    },
    methods: {
        login() {
            firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(
                (user) => {
                    console.log(user.user)
                },
                (err) => {
                    alert(err)
				
                }
            );
        },
    },
};

</script>

<style >
@import url('https://fonts.googleapis.com/css?family=Raleway:400,700');

.authcontainer {
	display: flex;
	align-items: center;
	justify-content: center;
	min-height: 35rem;
}
.screen {		
	background: linear-gradient(90deg, #2c2c2c, #3A3B3C);	
	position: relative;	
	height: auto;
	width: auto;	
	box-shadow: 0px 0px 24px #b8e3f2;
}

.login {
	width: 320px;
	padding: 50px 40px;
}
.login__field {
	padding: 20px 0px;	
	position: relative;	
}
.login__icon {
	position: absolute;
	top: 30px;
	color: #ffffff;
}
.login__input {
	border: none;
	border-bottom: 2px solid #D1D1D4;
	background: none;
	padding: 10px;
	padding-left: 24px;
	font-weight: 700;
	width: 100%;
	transition: .2s;
}
.login__submit {
	background: #fff;
	font-size: 14px;
	margin: 20px 25px;
	padding: 16px 20px;
	border-radius: 26px;
	border: 1px solid #D4D3E8;
	text-transform: uppercase;
	font-weight: 700;
	display: flex;
	align-items: center;
	width: 75%;
	color: #4C489D;
	box-shadow: 0px 2px 2px #5C5696;
	cursor: pointer;
	transition: .2s;
}
.login__input:active,
.login__input:focus,
.login__input:hover {
	outline: none;
	border-bottom-color: #6A679E;
    color: #fff;
}
.button__icon {
	font-size: 24px;
	margin-left: auto;
	color: #3e3e3e;
}
</style>