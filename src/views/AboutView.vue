<template>
<section class="ftco-section">
  <div class="container">
    <div class="row d-flex no-gutters">
      <div class="col-md-6 col-lg-6 d-flex">
        <div class="img-about img d-flex align-items-stretch">

          <div class="img img-video d-flex w-100 align-self-stretch align-items-center">
            <img v-bind:src="require('../assets/images/about-2.jpg')" class="img d-flex align-self-stretch align-items-center"/>
            <div class="video justify-content-center">
              <a href="https://www.youtube.com/watch?v=ZD101DSHUE0" target="_blank" class="fa fa-video icon-video popup d-flex justify-content-center align-items-center" title="Youtube"><span class="ion-ios-play"><i class="fa fa-play"></i></span></a>
            </div>
          </div>

        </div>
      </div>
      <div class="col-md-6 col-lg-6 pl-md-5">
        <div class="heading-section   ">
          <h2 class="mb-4">Sravan<br>Photography Agency</h2>
          <p>I offer my clients a wide range of services in various directions. Someone thinks that a professional photographer should be focused on one type of photography, but for my practice I have gained enough experience to feel confident in several different directions.</p>

          <div class="counter-wrap d-flex my-md-4">
            <div class="text">
              <p class="mb-4">
                <span class="number" data-number="59">59 </span>
                <span>Projects completed</span>
              </p>
            </div>
          </div>
          
         <img v-bind:src="require('../assets/images/about-3.jpg')"
            class="img img-about-2 ml-2"
         />
          </div>
          <blockquote class="blockquote mt-5">
            <p class="mb-2">“When words become unclear, I shall focus with photographs. When images become inadequate, I shall be content with silence.”</p>
            <span>&mdash; Sravan Photography</span>
          </blockquote>
        </div>
      </div>
    </div>
  
</section>
</template>

<style >
@media (min-width: 375px) {
    .container {
      max-width: 337px; } }
@media (min-width: 425px) {
    .container {
      max-width: 387px; } }

  @media (min-width: 768px) {
    .container {
      max-width: 730px; } }

  @media (min-width: 1024px) {
    .container {
      max-width: 986px; } }

  @media (min-width: 1200px) { 
.container {
  max-width: 1100px; }}

.ftco-section {
    padding: 7em 0;
}
section, div{
  display: block;
}

.img {
  height:fit-content;
  width:100%;
  position: relative;
  align-items: center;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
}
.container {
    width: 100%;
    padding-left:15px ;
    padding-right:15px ;
    margin: auto;
}
.d-flex{
    display: flex !important;
}
.no-gutters {
    margin-right: 0;
    margin-left: 0;
}
.row {
    flex-wrap: wrap;
}
.no-gutters > [class*="col-"] {
    padding-right: 0;
    padding-left: 0;
}
.col-md-6, .col-lg-6{
    -webkit-box-flex: 0;
    flex: 0 0 50%;
    max-width: 50%;
    position: relative;
    width: 100%;
}
.ftco-about .img-about {
    height: 750px;
    margin-bottom: 20px;
    position: relative;
    z-index: 1;
 
}
.align-items-stretch {
    -webkit-box-align: stretch !important;
    align-items: stretch !important;
}
.align-self-stretch {
  align-self: stretch !important;
}
.video {
    width: 100%;
    padding-top:1rem ;
    position: absolute;
}
.justify-content-center {
    -webkit-box-pack: center !important;
    justify-content: center !important;
}
.icon-video {
    width: 80px;
    height: 80px;
    background: rgba(255, 255, 255, 0.2);
    box-shadow: 0px 0px 34px -8px rgb(0 0 0 / 10%);
    z-index: 1;
    margin: 0 auto;
    border-radius: 50%;
    align-items:center ;
}
a {
  transition: .3s all ease;
    color: #9d8f8f;
  text-decoration: none;
  cursor: pointer;
}
.icon-video span {
    font-size: 30px;
    color: #fff;
}
<!--Right-->
.pl-md-5 {
    padding-left: 3rem !important;
}
.heading-section h2 {
    font-size: 16px;
    color: #fff;
    line-height: 1.4;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 2px;
    margin-top: 0;
}
.mb-4 {
    margin-bottom: 1.5rem !important;
}

 p {
    margin-top: 0;
    margin-bottom: 1rem;
}
.my-md-4 {
  margin-top: 1.5rem !important;
  margin-bottom: 1.5rem !important;
}
.ftco-about .counter-wrap .text p {
    font-size: 10px;
    text-transform: uppercase;
    letter-spacing: 2px;
}
.ftco-about .counter-wrap .text p span  {
    font-weight: 700;
    color: #fff;
}
.w-100 {
    width: 100% !important;
}
.ftco-about .img-about-2 {
    height: 100%;
    width: 100%;
}
.ml-2{
    margin-left: 0.5rem !important;
}
.mt-5, .my-5 {
    margin-top: 3rem !important;
}
.blockquote {
    margin: 0 0 1rem;
    font-size: 1.25rem;
}
.blockquote p {
    font-size: 18px;
    font-weight: 400;
    font-family: "Noto Serif", serif;
    color: #fff;
    font-style: italic;
}
.blockquote span {
    font-size: 13px;
    font-family: "Noto Serif", serif;
    font-style: italic;
}
.icoPlay{
  font-size: 100px;
  opacity: 50%;
  overflow: hidden;
}
</style>
