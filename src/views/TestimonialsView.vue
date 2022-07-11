<template>
  <section id="testimonials" class="py-16">
   <div class="row">
        <span class="subheading">FeedBacks</span>
        <h2 class="heading">My satisfied Clients says</h2>
   </div>
   <!--Slider-->
  <div class="slider">

    <div class="card">
      <div class="pic">
      <img v-bind:src="require('../assets/images/person_5.jpg')"
      class="img" >
      </div>
      <div class="content">
        <div class="details">
        <h2>Darshana Shinde<br><span>Bodiour Client</span></h2>
        <div class="data">
          <p>Most professional man I've ever seen. His photos are a work of art. Just amazing photos and now I am like a queen in my Instagram profile.</p>
        </div>      
        </div>
      </div>
    </div>

    <div class="card">
      <div class="pic">
      <img v-bind:src="require('../assets/images/person_4.jpg')"
      class="img" >
      </div>
      <div class="content">
        <div class="details">
        <h2>Sailaja<br><span>Wedding Client</span></h2>
        <div class="data">
          <p>Sravan was our wedding photographer. He captured our brightest moment of life in fantastic photos! Thank you, Sravan! You are the best!</p></div>      
        </div>
      </div>
    </div>

    <div class="card">
      <div class="pic">
      <img v-bind:src="require('../assets/images/person_3.jpg')"
      class="img" >
      </div>
      <div class="content">
        <div class="details">
        <h2>Vishwajit Nerkar<br><span>Bussiness Client</span></h2>
        <div class="data">
          <p>One day I have ordered a clipart for my new project and works of Sravan are fit. Thank you, Sravan, for your work! 5 stars without a doubt!</p>
        </div>      
        </div>
      </div>
    </div>

    <div class="card">
      <div class="pic">
      <img v-bind:src="require('../assets/images/person_2.jpg')"
      class="img" >
      </div>
      <div class="content">
        <div class="details">
        <h2>Kalyan Naidu<br><span>Lifestyle Client</span></h2>
        <div class="data">
          <p>If you are a beginner model, I recommend Sravan for you. Sravan can create your professional portfolio within no time.</p>
        </div>      
        </div>
      </div>
    </div>

    <div class="card">
      <div class="pic">
      <img v-bind:src="require('../assets/images/person_1.jpg')"
      class="img" >
      </div>
      <div class="content">
        <div class="details">
        <h2>Vinay Muthareddy<br><span>Portrait client</span></h2>
        <div class="data">
          <p>Sravan's works are just amazing!They are brilliant quality! Light, shadows, skin - all are perfect. Very good kind of man. Thanks!</p>
        </div>      
        </div>
      </div>
    </div>

  </div>
  </section>
</template>

<script>
export default {
  data() {
    return {

    }
  }
}
      
</script>

<style scoped>
.row{
  position: relative;
  background-color: transparent;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin:2rem;
  
}
.subheading{
font-size: 14px;
color: #c3c3c3;
transition-duration: 1s;
}
.subheading:hover {
  font-size: 18px;
  color: rgb(255, 255, 255);
  
}

.heading{
  font-size: 14px;
  color: #c3c3c3;
  margin: 0rem;
  transition-duration: 1s;
  text-transform: uppercase;
}
.heading:hover{
  font-size: 18px;
  color: rgb(255, 255, 255);
  
}

.slider{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  position: relative;
  height: auto;
  width: auto;
  background-color:transparent;
  margin: 7rem 1rem;
  padding: 1rem 0rem;
}
/* Cards */
.card{
  border-left: 1px solid #4d4d4d;
  position: relative;
  width: 275px;
  height: 200px;
  background: rgb(58,59,62);
  border-radius: 20px;
  box-shadow: 0 35px 80px rgba(0,0,0,0.15);
  transition: 0.5s;
  margin: 1rem 1px;
  justify-content: space-evenly;
}
.card:hover{
  height: 400px;
}

.pic{
  position: absolute;
  left: 50%;
  top: -15%;
  transform: translateX(-50%);
  width: 150px;
  height: 150px;
  background: #fff;
  border-radius: 20px;
  box-shadow: 0 15px 50px rgba(0,0,0,0.35);
  overflow: hidden;
  transition: 1s;
}

.pic img {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  object-fit: cover;
  transition: 1s;
}
.card:hover .pic{
  height: 175px;
  width: 175px ;
  margin-top: 1rem
  
}

.card .content{
position: absolute;
width: 100%;
height: 100%;
display: flex;
justify-content: center;
align-items: flex-end;
overflow: hidden;
}

.card .content .details{
  font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  padding: 25px;
  text-align: center;
  widows: 100%;
  transition: 0.5s;
  transform: translateY(160px);
}

.card:hover .content .details{
  transform: translateY(0px);
}

.card .content .details h2{
  font-size: 1.2rem;
  font-weight: 100;
  color:#fff ;
  line-height: 1.5rem;
}

.card .content .details h2 span{
  font-size: 1rem;
  font-weight: 50;
  color: #c3c3c3;
}

.card .content .details .data {
display: flex;
font-family: "Noto Serif", serif;
font-size: 1.1rem;
font-style: italic;  
font-weight: 100;
color:rgb(255, 255, 255);
line-height: 1.5rem;
}


</style>