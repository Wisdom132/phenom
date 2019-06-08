<template>
    <section id="how-to">
         <div class="container">
        <div class="row center-align white-text" style="padding-top:80px; margin:auto">
            <h4>How To Become A Tutor</h4>
            <div class="col s1"></div>
            <div class="col s12 m2 l2">
                <div class="row center">
                    <div class="col s12 m2 l2">
                       <router-link to="/becomeatutor"> <div class="card-panel blue darken-4 process" style="height:250px;width:140px;">
                            <i class="fas fa-file-image icon white-text" style="padding-bottom:30px "></i>
                            <br>
                            <span class="white-text" style="font-size:13px;text-align:center !important;">1.Sign up and create a free profile
                            </span>
                        </div></router-link>
                    </div>
                </div>
            </div>
            <div class="col s12 m2 l2">
                <div class="row">
                    <div class="col s12 m2 l2">
                        <div class="card-panel process" style="height:250px;width:140px;">
                            <i class="fas fa-calendar icon" style="padding-bottom:30px "></i><br>
                            <span class="white-text" style="font-size:13px;text-align:center !important;">2. Message students to arrange lessons
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col s12 m2 l2">
                <div class="row">
                    <div class="col s12 m2 l2">
                        <div class="card-panel process" style="height:250px;width:140px;">
                            <i class="fas fa-pen icon" style="padding-bottom:30px "></i><br>
                            <span class="white-text" style="font-size:13px;text-align:center !important;">3. Book in sessions to match your timetable
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col s12 m2 l2">
                <div class="row">
                    <div class="col s12 m2 l2">
                        <div class="card-panel process" style="height:250px;width:140px;">
                            <i class="fas fa-shopping-cart icon" style="padding-bottom:30px " ></i><br>
                            <span class="white-text" style="font-size:13px;text-align:center !important;">4.Teach! Enjoy helping students progress
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col s12 m2 l2">
                <div class="row">
                    <div class="col s12 m2 l2">
                        <div class="card-panel z-depth-5 process" style="height:250px;width:140px;">
                            <i class="fas fa-star icon" style="padding-bottom:30px "></i><br>
                            <span class="white-text" style="font-size:13px;text-align:center !important;">5. Get paid straight into your bank account
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
     </div>
 </section>
</template>

<script>
export default {

}
</script>

<style>
    #how-to {
  background-image:linear-gradient(rgba(0, 0, 34, 0.55), rgba(0, 0, 34, 0.55)), url('../../images/children-class-classroom-1720186.jpg');
  height:auto;
  background-size:cover;
  background-position: center center;
}
.card-panel {
  background-color:rgba(255, 255, 255, .7) !important;
}
.icon {
     font-size:40px;
   }
</style>
