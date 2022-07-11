<template>
<section>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-4 heading-section text-center pb-5">
        <h2 class="mb-4"><br>Glimpse Of My Work</h2>
        <p>Below are Some Samples of my work in past Couple of Months</p>
      </div>
    </div>
  </div> 

<!--Carousels-->
<div class="images">
<img v-bind:src="require('../assets/images/model-1.jpg')"
  class="imgl"/>
<img v-bind:src="require('../assets/images/model-2.jpg')"
  class="imgm"/>
<img v-bind:src="require('../assets/images/model-3.jpg')"
  class="imgr"/>
<img v-bind:src="require('../assets/images/model-4.jpg')"
  class="imgl"/>
<img v-bind:src="require('../assets/images/model-5.jpg')"
  class="imgm"/>
<img v-bind:src="require('../assets/images/model-6.jpg')"
  class="imgr"/>
<img v-bind:src="require('../assets/images/model-7.jpg')"
  class="imgl"/>
<img v-bind:src="require('../assets/images/model-8.jpg')"
  class="imgm"/>
<img v-bind:src="require('../assets/images/model-9.jpg')"
  class="imgr"/>
<img v-bind:src="require('../assets/images/model-10.jpg')"
  class="imgl"/>
<img v-bind:src="require('../assets/images/model-11.jpg')"
  class="imgm"/>
<img v-bind:src="require('../assets/images/model-12.jpg')"
  class="imgr"/>
</div>
</section>
</template>

<style lang="scss" scoped>

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


.imgl{
  height: 100%;
  width: 25%;
  margin-left: 2rem;
  margin-bottom: 1rem;
  transition: 1s;
  
}
.imgm{
  height: 100%;
  width: 35%;
  margin-left: 4.5rem;
  margin-bottom: 7rem;
  transition: 1s;
}
.imgr{
  height: 100%;
  width: 25%;
  margin-left:4.5rem;
  transition: 1s;
}
.imgl:hover{
  height: 103%;
  width: 27%;
  margin-left: 1rem;
   margin-bottom: 0rem;
  
}
.imgm:hover{
  height: 103%;
  width: 37%;
  margin-left: 4rem;
 margin-right: -1.2rem;
}
.imgr:hover{
   height: 103%;
  width: 27%;
   margin-bottom: 1rem;
   margin-left: 3rem;
}
</style>