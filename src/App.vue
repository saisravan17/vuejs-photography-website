
<template>

  <nav id="navbar">
    <router-link to="/">
    <div class="navlogo">
      <img alt="logo1" src="./assets/images/logo.svg"/>
    </div>
    </router-link>
    <ul v-show="!mobile" class="navigation">
    <li><button><router-link to="/services">Services</router-link></button></li>
    <li><button><router-link to="/gallery">Gallery</router-link></button></li>
    <li><button><router-link to="/about-me">About Us</router-link></button></li>
    <li><button><router-link to="/contact-me">Contact Us</router-link></button></li>
    <li><button><router-link to="/testimonials">Testimonials</router-link></button></li>
    <li><button><router-link to="/Login">Login</router-link></button></li>
    </ul>
    <div class="icon">
      <i @click="toggleMobileNav" v-show="mobile" class="fa fa-bars" :class="{'icon-active':mobileNav}"></i>
    </div>
    <transition name="mobile-nav">
      <ul v-show="mobileNav" class="dropdown-nav">
        <router-link to="/"><img class="navlogodown" alt="Logo" src="./assets/images/logo.svg"/></router-link>
    <li><button><router-link to="/services">Services</router-link></button></li>
    <li><button><router-link to="/gallery">Gallery</router-link></button></li>
    <li><button><router-link to="/about-me">About Us</router-link></button></li>
    <li><button><router-link to="/contact-me">Contact Us</router-link></button></li>
    <li><button><router-link to="/testimonials">Testimonials</router-link></button></li>
    <li><button><router-link to="/login">Login</router-link></button></li>
    </ul>
    </transition>
  </nav>
  <router-view/>

  <footer class="py-5">
    <div class="copy">
  <div class="text-center">
    <div class="row">
      <div class="col-md-12 text-center">
        <p>
        Thanks For Visiting <a>Srijan: Technologies </a
          ><i class="icon-heart" aria-hidden="true"></i>
        </p>
        <ul class="social-network social-circle">
            <li><a href="https://www.linkedin.com/in/saisravan663/" class="icoLinkedin" title="Linkedin"><i class="fa fa-linkedin"></i></a></li>
            <li><a href="https://www.instagram.com/sai._.sravan/" class="icoInstagram" title="Instagram"><i class="fa fa-instagram"></i></a></li>
            <li><a href="https://www.facebook.com/saisravan.duggi" class="icoFacebook" title="Facebook"><i class="fa fa-facebook"></i></a></li>
            </ul>
      </div>
    </div>
  </div>
  <div class="row">
		
			<p class="copyright">&copy; Copyright 2022 - Srijan: Technologies.  All rights reserved.</p>
		</div>
	</div>
  </footer>

</template>

<script>

export default {
  name:"App",
  data(){
    return{
      mobile:null,
      mobileNav:null,
      windowWidth:null,
    };
  },
  created() {
window.addEventListener("resize",this.checkScreen)
this.checkScreen;
  },
  methods:{
    toggleMobileNav() {
      this.mobileNav = !this.mobileNav;
    },

    checkScreen() {
      this.windowWidth = window.innerWidth;
      if(this.windowWidth<=1024){
        this.mobile = true;
        return;
      }
      this.mobile = false;
      this.mobileNav = false;
      return;
    },
  },
};
</script>


<style>

@import url("https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css");
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #ffffff; 
   
}

#navbar {
  display:flex;
  flex-direction: row;
  justify-content:fixed space-evenly;
  align-items: center;
  background-color:#3A3B3E;
}




.navlogo{ 
  display: flex;
  height: auto;
  width: auto;
  margin: 0.7rem 3rem;
  filter: invert(100%);
}
.navlogodown{
display: flex;
text-align:center;
height: auto;
width: 115px;
}
#navbar a {
  text-decoration: none;
  color: #ffffff;
}

#navbar a.router-link-exact-active {
  color: #fff;
  font-size: 13px;
}
.icon{
  display: flex;
  align-items: center;
  position: absolute;
  right: 50px;
  height: 100%;
}
i{
  cursor: pointer;
  font-size: 24px;
  transition: .8s ease all;
} 

.icon-active{
  transform: rotate(270deg);
}
button{
  display: inline-block;
  font-size: 0.7rem;
  text-transform: uppercase;
  font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  height: 2rem;
  width: 6rem;
  margin-right: 1rem;
  border-radius: 11rem;
  background-color: #2c2c2c;
  border-style: none;
}
/*sidebar*/
ul{
  display:row;
  list-style-type: none;  
}
li{
  padding: 1px;
  margin-left: 1px;
  justify-content: space-evenly;
}
.navigation{
  margin:0.7rem 1rem;
  display: flex;
  align-items: center;
  flex: 1;
  justify-content: flex-end;
}
.dropdown-nav{
  display: flex;
  flex-direction: column;
  position: absolute;
  padding: 100px;
  width: 100%;
  max-width: 100px;
  height: 100%;
  max-height: 570px;
  background-color: #3A3B3E;
  top: 0;
  left: 1;
  z-index: 1;
  

}

.moile-nav-enter-active{
  transition: 5s ease all;
} 
.moile-nav-leave-active {
  transition: 5s ease all;
}
.moile-nav-enter-from, .moile-nav-enter-to{
  transform: translateX(-250px);
}
.moile-nav-enter-to{
  transform: translateX(0px);
}

body {
  
  font-family: "Noto Sans", Arial, sans-serif;
  font-size: 14px;
  line-height: 1.8;
  font-weight: 400;
  color: #9da1a5;
  background-size: cover;
  background-repeat: no-repeat;
  background: #191a1c; }
  
/*FOOTER*/
.py-5 {
  padding-top: 1rem !important;}
   
.text-center {
  text-align: center !important; 
}
footer a {
  color: #c3c3c3;
  font-size: 14px;
  transition-duration: 1s;
}

footer a:hover {
  color: #ffffff;
  font-size: 17px;
  text-decoration: none;
}

.copy {
  font-size: 12px;
  padding: 1rem;
  border-top: 1px solid #3A3B3E;
}

/* footer social icons */

ul.social-network {
  list-style: none;
  display: inline;
  margin-left: 0 !important;
  padding: 0;
}

ul.social-network li {
  display: inline;
  margin: 0 8px;
}


/* footer social icons */

.social-network a.icoFacebook:hover {
  background-color: #3B5998;
}

.social-network a.icoLinkedin:hover {
  background-color: #007bb7;
}
.social-network a.icoInstagram:hover {
  background: radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%);
}
.social-network a.icoFacebook:hover i,
.social-network a.icoLinkedin:hover i,
.social-network a.icoInstagram:hover i {
  color: #fff;
}

.social-network a.socialIcon:hover,
.socialHoverClass {
  color: #44BCDD;
}

.social-circle li a {
  display: inline-block;
  position: relative;
  margin: 0 auto 0 auto;
  border-radius: 50%;
  text-align: center;
  width: 50px;
  height: 50px;
  font-size: 25px;
}

.social-circle li i {
  margin: 0;
  line-height: 50px;
  text-align: center;
}

.social-circle li a:hover i,
.triggeredHover {
  transform: rotate(360deg);
  transition: all 0.5s;
}

.social-circle i {
  color: #595959;
  transition: all 1s;
}

.social-network a {
  background-color: #F9F9F9;
}
.copyright{
  text-align: center !important; 
  margin-top: 1rem;
  margin-bottom: 0rem;
}
</style>




