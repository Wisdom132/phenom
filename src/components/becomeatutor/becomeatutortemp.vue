<template>
     <section id="become_tutor">
        <navbar/>
        <div class="container">
            <div class="row ">
                    <form class="col s12 m8 l8 offset-l4 getTutor">
                        <div class="row">
                            <div class="input-field col s12 m12 l12">
                                <input id="name" type="text" class="validate">
                                <label for="name">Enter Your Name</label>
                            </div>
                        </div>
                        <div class="row">
                            <div class="input-field col  s12 m6 l6">
                                <input id="phone" type="number" class="validate">
                                <label for="phone">Phone</label>
                            </div>
                            <div class="input-field col  s12 m6 l6">
                                <input id="email" type="email" class="validate">
                                <label for="email">Email</label>
                            </div>
                        </div>
                        <div class="row">
                        <div class="input-field col s12 m6 l6 search">
                            <select class="search" type="select">
                                <option value="" disabled selected>Choose your option</option>
                                <option value="1">Option 1</option>
                                <option value="2">Option 2</option>
                                <option value="3">Option 3</option>
                            </select>
                            <label>State</label>
                        </div>
                            <div class="input-field col  s12 m6 l6">
                                <input id="last_name" type="text">
                                <label for="last_name">Loaction</label>
                            </div>
                        </div>
                        <div class="row">
                            <div class="input-field col  s12 m6 l6">
                                <input id="first_name" type="text" class="datepicker" >
                                <label for="first_name">Lesson Starts?</label>
                            </div>
                        <div class="input-field col s12 m6 l6 search">
                            <select class="search" type="select">
                                <option value="" disabled selected>Choose your option</option>
                                <option value="1">Male</option>
                                <option value="2">Female</option>
                            </select>
                            <label>Gender</label>
                        </div>
                        </div>
                       <a href="TutorVerification.html" class="btn blue darken-4">Become A Tutor</a>
                        
                    </form>
                </div>
        </div>
    </section>
</template>

<script>
import navbar from "@/components/navbar.vue";
export default {
  components: {
    navbar
  },
  mounted() {
    var elems = document.querySelectorAll("select");
    var instances = M.FormSelect.init(elems);
  }
}
</script>

<style>
#become_tutor {
    background-image: url('../../images/apple-class-conference-7102.jpg');
    /* height:690px; */
    background-size:cover;
    background-position:center center;
}
.getTutor {
    margin-top:80px !important;
    padding:50px 50px 80px 50px !important;
    box-sizing: border-box;
   background-color: rgba(255, 255, 255, .7);
}
.input-field label {
  color: #000;
}
.input-field search[type="select"]:focus {
  color: #ffff;
  /* font-weight:700; */
  border-bottom: 1px solid white;
  /* text-align: center */
}
.input-field select[type="select"]:focus {
  border-bottom: 1px solid #ffff;
  box-shadow: 0 1px 0 0 #ffff;
}
.search {
  color: #ffff !important;
}
/* valid color */
.input-field input[type="text"].valid {
  border-bottom: 1px solid #000;
  box-shadow: 0 1px 0 0 #000;
}
/* invalid color */
.input-field input[type="text"].invalid {
  border-bottom: 1px solid #000;
  box-shadow: 0 1px 0 0 #000;
}
/* icon prefix focus color */
.input-field .prefix.active {
  color: #000;
}

</style>
