
<template>
<section class="ftco-section contact-section" id="contact">
  <div class="container">
    <div class="row justify-content-center mb-5 pb-3">
      <div class="col-md-4 heading-section text-center   ">
        <h2 class="mb-4">Contact Me</h2>
        <p>Feel Free To Contact Anytime</p>
      </div>
    </div>

    <div class="row mb-5">
      <div class="col-md-3 d-flex">
        <div class="align-self-stretch box text-center p-4">
          <div class="icon d-flex align-items-center justify-content-center">
          </div>
          <div>
            <i class="fa fa-globe"></i>
            <h3 class="mb-4">Address</h3>
            <p>20-121,Dayanand Nagar <br>Secunderabad<br>Hyderabad</p>
          </div>
        </div>
      </div>
      <div class="col-md-3 d-flex">
        <div class="align-self-stretch box text-center p-4">
          <div class="icon d-flex align-items-center justify-content-center">
            <span class="icon-phone2"></span>
          </div>
          <div>
            <i class="fa fa-phone"></i>
            <h3 class="mb-4">Contact Number</h3>
            <p><a href="tel://1234567920">+91 8328501259</a></p>
          </div>
        </div>
      </div>
      <div class="col-md-3 d-flex   ">
        <div class="align-self-stretch box text-center p-4">
          <div class="icon d-flex align-items-center justify-content-center">
            <span class="icon-paper-plane"></span>
          </div>
          <div>
            <i class="fa fa-envelope"></i>
            <h3 class="mb-4">Email Address</h3>
            <p><a href="mailto:info@yoursite.com">saisravan663@gmail.com</a></p>
          </div>
        </div>
      </div>
      <div class="col-md-3 d-flex   ">
        <div class="align-self-stretch box text-center p-4">
          <div class="icon d-flex align-items-center justify-content-center">
            <span class="icon-globe"></span>
          </div>
          <div>
            <i class="fa fa-laptop"></i>
            <h3 class="mb-4">Works</h3>
            <p><i class="fa fa-linkedin"></i> <a href="https://www.linkedin.com/in/saisravan663/">LinkedIn</a></p>
            <p><i class="fa fa-twitter"></i> <a href="https://www.linkedin.com/in/saisravan663/">Twitter</a></p>
          </div>
        </div>
      </div>
    </div>

    <div class="row block-9">
      <div class="col-md-6 contact-form p-4 p-md-5 py-md-5">
        <form @submit.prevent="handleSubmit">
          
          <div class="form-group">
            <input type="text" class="form-control" placeholder="Your Name"  v-model="name" required>
          </div>
          <div class="form-group">
            <input type="text" class="form-control" placeholder="Your Email" v-model="email" required>
          </div>
          <div class="form-group">
            <input type="text" class="form-control" placeholder="Subject" v-model="subject" required>
          </div>
          <div class="form-group">
            <textarea name="" id="" cols="30" rows="7" class="form-control" placeholder="Message" v-model="message" required></textarea>
          </div>
          <div class="form-group">
            <button class="glow-on-hover" type="submit">Send Message</button>
          </div>

        </form>

      </div>
    </div>
  </div>
</section>


</template>

<script>
import { projectFirestore } from '../main.ts'
export default {
  data(){
    return{
      name:'',
      email:'',
      subject:'',
      message:''
      }
  },
  methods:{
    handleSubmit() {
      let userMessage= {
        name: this.name,
        email: this.email,
        subject: this.subject,
        message: this.message
      }
      projectFirestore.collection('userMessages').add(userMessage)
    }
  }
}
</script>



<style lang="scss" scoped>
*{
    box-sizing: border-box;
}
body {
    font-family: "Noto Sans", Arial, sans-serif;
    font-size: 14px;
    line-height: 1.8;
    font-weight: 400;
    color: #9da1a5;
    background: #191a1c;
}
div {
    display: block;
    overflow: hidden;
}
.row {
    display: -webkit-box;
    display: flex;
    flex-wrap: wrap;
    margin-right: -15px;
    margin-left: -15px;
}
.d-flex {
    display: flex !important;
}
.justify-content-center {
    -webkit-box-pack: center !important;
    justify-content: center !important;
}
.align-items-center {
    -webkit-box-align: center !important;
    align-items: center !important;
}
/*styling*/
.ftco-section {
    padding: 7em 0;
}
.contact-section {
    width: 100%;
}
section {
    display: block;
}
.align-self-stretch {
    align-self: stretch !important;
}
.container {
    width: 100%;
    max-width: 1200px;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
}
/*contact me*/
.mb-5 {
    margin-bottom: 3rem !important;
}
.pb-3, .py-3 {
    padding-bottom: 1rem !important;
}

.text-center {
    text-align: center !important;
}
.col-md-4 {
    position: relative;
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    -webkit-box-flex: 0;
    flex: 0 0 33.33333%;
    max-width: 33.33333%;
}
.heading-section h2 {
    font-size: 16px;
    color: #9da1a5;
    line-height: 1.4;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 2px;
}
.mb-4, .my-4 {
    margin-bottom: 1.5rem !important;
    overflow: hidden;
}
h2{
  margin-top: 0;
}
p {
    display: block;
    margin-top: 0;
    margin-bottom: 1rem;
}


/*boxes*/
.col-md-3 {
    position: relative;
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    -webkit-box-flex: 0;
    flex: 0 0 25%;
    max-width: 25%;
}
.contact-section .box {
    background: #202224;
    width: 100%;
}
.p-4 {
    padding: 1.5rem !important;
}
/*icon*/
.contact-section .box .icon  {
    margin-bottom: 20px;
}
.contact-section .box .icon span {
    font-size: 30px;
}
.contact-section .box h3 {
    line-height: 1.5;
    color: #fff;
    font-weight: normal;
    font-size: 16px;
    margin-top: 0;
}
a {
    transition: .3s all ease;
    color: #9d8f8f;
    text-decoration: none;
    background-color: transparent;
}
/*contact*/
.col-md-6{
  -webkit-box-flex: 0;
   
    flex: 0 0 100%;
    max-width: 100%;
  position: relative;
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
}
.contact-form {
    background: #202224;
}
  .py-md-5 {
    padding-top: 3rem !important;
    padding-bottom: 3rem !important;
}
.p-md-5 {
    padding: 3rem !important;
}
form {
    display: block;
    margin-top: 0em;
}
.form-group {
    margin-bottom: 1rem;
}
.block-9 .form-control {
    outline: none !important;
    box-shadow: none !important;
}
.form-control {
  height: 52px !important;
  background: transparent !important;
  color: #9da1a5 !important;
  font-size: 13px !important;
  border-radius: 0px;
  border: 1px solid rgba(255, 255, 255, 0.1) !important;
  display: block;
  width: 100%;
  padding: 0.375rem 0.75rem;
  font-weight: 400;
  line-height: 1.5;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out;
}
textarea.form-control {
   height: inherit !important;
   overflow: auto;
   resize: vertical;
}
.glow-on-hover {
    text-align: center;
    width: -webkit-fill-available;
    height: 50px;
    border: none;
    outline: none;
    color: #fff;
    background: #111;
    cursor: pointer;
    position: relative;
    
    border-radius: 10px;
}
h1{
    line-height: 1.5;
    color: #fff;
    font-weight: normal;
    text-align: center;
    font-size: 25px;
    text-transform: uppercase;
    letter-spacing: 2px;
    box-sizing: border-box;
}
</style>