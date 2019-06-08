<template>
    
 <section>
     <div class="container">
         <div class="row" id="row1">
             <h4 class="center-align">Categories</h4>
             <div class="col s12 m4 l4" id="container">
                 <a href="allsubject.html">
                     <img src="../../images/children-cute-drawing-159823.jpg" id="unrespond"  class="responsive-img" alt="">
                <div class="overlay">
                    <div class="text">Nursery</div>
                </div> 
                 </a>
                
             </div>
            <div class="col s12 m4 l4" id="container">
                <a href="allsubject.html">
                    <img src="../../images/children-class-classroom-1720186.jpg" id="unrespond"  class="responsive-img" alt="">
                <div class="overlay">
                    <div class="text">Lower Primary</div>
                </div>
                </a>
                
            </div>
            <div class="col s12 m4 l4" id="container">
                <a href="allsubject.html">
                   <img src="../../images/daydreaming-desk-hair-6384.jpg" id="unrespond"  class="responsive-img" alt="">
                <div class="overlay">
                    <div class="text">Upper Primary</div>
                </div> 
                </a>
                
            </div>
         </div>
        <div class="row">
            <div class="col s12 m4 l4" id="container">
                <a href="allsubject.html">
                   <img src="../../images/archive-beautiful-book-stack-256455.jpg" class="responsive-img" id="unrespond"  alt="">
                <div class="overlay">
                    <div class="text">Junior Primary</div>
                </div> 
                </a>
                
            </div>
            <div class="col s12 m4 l4" id="container">
                <a href="allsubject.html">
                    <img src="../../images/beautiful-beauty-carefree-1458318.jpg" class="responsive-img" id="unrespond" alt="">
                <div class="overlay">
                    <div class="text">Check Point Exams</div>
                </div> 
                </a>
               
            </div>
            <div class="col s12 m4 l4" id="container">
                <a href="allsubject.html">
                <img src="../../images/children-cute-drawing-159823.jpg" class="responsive-img" id="unrespond"  alt="">
                <div class="overlay">
                    <div class="text">View All Catergory</div>
                </div>  
                </a>
                
            </div>
        </div>
     </div>
 </section> 
</template>

<script>
export default {

}
</script>

<style scoped>
 #row1 {
       margin-top:50px;
   }  
    #container {
  position: relative;
}
.image {
  display: block;
  width: 100% !important;
  height: auto !important;
}
.overlay {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
  opacity: 0;
  transition: .5s ease;
  background-color: rgb(74, 83, 255, 0.6);
}
#container:hover .overlay {
  opacity: 1;
}
.text {
  color: white;
  font-size: 20px;
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  text-align: center;
}
  #unrespond {
       height:257px !important;
       width:auto !important;
   }
</style>
