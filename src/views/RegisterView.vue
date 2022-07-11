<template>
<div class="authcontainer">
	<div class="screen">
		<div class="screen__content">
            <form class="login">
                <h1>Sign Up Here!! <i class="fa fa-unlock"></i></h1>

                <div class="login__field">
                <i class="login__icon fa fa-user"></i>
                <input type="email" class="login__input" placeholder="Email" v-model="email" required>
                </div>

                <div class="login__field">
                <i class="login__icon fa fa-lock"></i>
                <input type="password" class="login__input" placeholder="Password" v-model="password" required>
                </div>

                <button v-on:click="signup" class="button login__submit">
                <span class="button__text">Sign Up Now</span>
                <font-awesome-icon icon="fa-regular fa-envelope" />
                <i class="button__icon fa fa-chevron-right"></i>
                </button>
                <p>Already have account yet? <router-link to="/login">Log me in</router-link></p>
            </form>
        </div>
    </div>
</div>
</template>

<script>
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

export default {
    name:"SignUp",
    data() {
        return{
            email:"",
            password:"",
        };
    },
    methods: {
        signup() {
            firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(
                (user) => {
                    console.log(user)
                },
                (err) => {
                    alert(err);

                }
            )
        },
    },
};
</script>

<style>

</style>