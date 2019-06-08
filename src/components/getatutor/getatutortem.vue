<template>
  <section id="get_tutor">
    <navbar/>
    <div class="container">
      <div class="row">
        <form class="col s12 m8 l8 getTutor">
          <div class="row">
            <div class="input-field col s12 m12 l12">
              <input id="name" type="text" class="validate">
              <label for="name">Enter Your Name</label>
            </div>
          </div>
          <div class="row">
            <div class="input-field col s12 m6 l6">
              <input id="phone" type="number" class="validate">
              <label for="phone">Phone</label>
            </div>
            <div class="input-field col s12 m6 l6">
              <input id="email" type="email" class="validate">
              <label for="email">Email</label>
            </div>
          </div>
          <div class="row">
            <div class="input-field col s12 m6 l6">
              <input id="name" type="text" class="validate">
              <label for="name">What do you want to learn</label>
            </div>
            <div class="input-field col s12 m6 l6">
              <select>
                <option value disabled selected>Choose your option</option>
                <option value disabled selected>Choose your option</option>
                <option value disabled selected>Choose your option</option>
                <option value disabled selected>Choose your option</option>

                <label>Materialize Select</label>
              </select>
              <!-- <label>Your prefered method of learning</label> -->
            </div>
          </div>
          <div class="row" style="margin-top:30px">
            <div class="input-field col s12 m6 l6">
              <select>
                <option value disabled selected>Choose your option</option>
                <option value="1">solo(one)</option>
                <option value="2">2-4</option>
                <option value="3">4-8</option>
                <option value="3">8 or more</option>
              </select>
              <label>Number of students</label>
            </div>
            <!-- </div> -->
            <div class="input-field col s12 m6 l6">
              <select>
                <option value disabled selected>Choose your option</option>
                <option value="1">1 time a week</option>
                <option value="2">2 time a week</option>
                <option value="3">3 times a week</option>
                <option value="3">4 times a week</option>
                <option value="3">5 times a week</option>
              </select>
              <label>Number of times a week</label>
            </div>
          </div>
          <div class="row">
            <div class="input-field col s12 m6 l6 search">
              <select class="search" type="select">
                <option value disabled selected>Choose your option</option>
                <option value="1">Option 1</option>
                <option value="2">Option 2</option>
                <option value="3">Option 3</option>
              </select>
              <label>State</label>
            </div>
            <div class="input-field col s12 m6 l6">
              <input id="last_name" type="text">
              <label for="last_name">Your Study Loaction</label>
            </div>
          </div>
          <div class="row">
            <div class="input-field col s12 m6 l6">
              <input id="text" type="text" class="datepicker">
              <label for="text">Lesson Starts?</label>
            </div>
            <div class="input-field col s12 m6 l6 search">
              <select class="search" type="select">
                <option value disabled selected>Choose your option</option>
                <option value="1">Male</option>
                <option value="2">Female</option>
              </select>
              <label>Gender</label>
            </div>
          </div>
          <router-link to="/requestemail" class="btn right">Get A Tutor</router-link>
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
};
</script>

<style scoped>
/* get tutor */
#get_tutor {
  background-image: url("../../images/apple-book-business-301943.jpg");
  /* height:658px; */
  background-size: cover;
  background-position: center center;
}
.getTutor {
  margin-top: 80px !important;
  padding: 50px 50px 80px 50px !important;
  box-sizing: border-box;
  background-color: rgba(255, 255, 255, 0.7);
  /* background: transparent !important; */
}
@media (max-width: 800px) {
  #get_tutor {
    background-image: url("../../images/apple-book-business-301943.jpg");
    /* height:658px; */
    background-size: cover;
    background-position: center center;
  }
  #input {
    margin-top: 150px !important;
  }
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
