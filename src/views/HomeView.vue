
<template>
	<section id="home" class="hero-wrap ">
    <div class="container">
      <div class="row  slider-text align-items-center justify-content-center">
        <div class="col-lg-7 d-flex align-items-center">
          <div class="text text-center">
            <h1 class="logo"><router-link to="/services">Srijan Creative Hub<i class="fa fa-camera-retro" aria-hidden="true"></i><small>Imagination Reaccelerated</small></router-link></h1>
            <h1 class="mb-4">An Engineering Company<br> a Creative Pulse</h1>
            <h2 class="mb-5">Innovative Midsets<br>Part of Deloitte’s Technology Fast 50<br> Certified Great Place to Work for the 5th Time</h2>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>

#home{
  background-image: url('@/assets/images/bg-1.jpg');
  height:700px;
  background-size: cover; 
}
hero-wrap {
  width: 100%;
  position: relative;
  background-size: cover;
  background-repeat:repeat;
  background-position: top center;
  z-index: 0; 
  }
@media (max-width: 900px) {
  .hero-wrap {
    background-position: top center !important; } }

.container {
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  padding-right: 0px;
  padding-left: 0px;
}

.row {
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap; 
}

.justify-content-center {
    justify-content: flex-end !important;
}

.col-lg-7{
  padding-top:7rem;
  justify-content: flex-end;
  position: relative;
  width: 100%;
  flex: 0 0 75%;
  max-width: 75%; 
}

.d-flex {
  display: flex !important;
  position: unset;
}

.mb-4{
  margin-bottom: 2rem !important; 
}

.mb-5{
  font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

}

h1{
  line-height: 1.5;
  color: #fff;
  text-align: center;
  padding: 10px;
  font-size: 25px;
  color: #ffffff;
  font-weight: 1000;
  text-transform: uppercase;
  letter-spacing: 2px; 
  box-sizing: border-box;
  margin-bottom: 0.5rem;
  margin-top: 0;
  
}


.slider-text h1{
    font-size: 30px;
    font-family: "Noto Sans", Arial, sans-serif;
    text-transform: uppercase;
    line-height: 1.2;
    font-weight: 700;
    color: #fff; }
    @media (max-width: 767px) {
      .slider-text h1 {
        font-size: 25px; } 
}

h2 {
  text-align: center;
  line-height: 2.5rem;
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  margin-bottom: 1rem; }
  @media (max-width: 900px) {
  h2{
    font-size: 15px;
    line-height: 2rem;} }

.slider-text .logo {
    position: unset;
    display: inline-block;
    font-size: 30px;
    margin-bottom: 2em;}
    @media (max-width: 767px) {
    .slider-text .logo {
    font-size: 25px; } 
}

.slider-text .logo a {
      text-decoration: none;
      position: unset;
      z-index: 0;
      color: #fff;
      border: 1px solid rgba(255, 255, 255, 0.2);
      border-top: none;
      padding: 0 10px;
      display: block; 
}
@media (max-width: 767px) {
    .slider-text .logo a{
       width: 15rem;} 
}

.slider-text .logo a small {
        display: block;
        font-size: 14px;
        font-style: italic;
        text-transform: capitalize;
        font-weight: 400;
        padding-bottom: 5px;
        font-family: "Noto Serif", serif; 
}
</style>

<script>

</script>