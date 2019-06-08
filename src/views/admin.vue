<template>
    <div>
     <nav class="blue darken-3">
    <div class="nav-wrapper">
        <div class="container">
            <a href="#!" class="brand-logo center">Logo</a>
  <a href="#" data-target="slide-out" class="sidenav-trigger"><i class="material-icons">menu</i></a>
        <ul class="right hide-on-med-and-down">
            <a href="index.html" class="btn transparent">Back to home</a>
            <!-- <li><a href="sass.html">Sass</a></li>
            <li><a href="badges.html">Components</a></li>
            <li><a href="collapsible.html">Javascript</a></li>
            <li><a href="mobile.html">Mobile</a></li> -->
        </ul> 
        </div>
       
    </div>
</nav>

<!-- side nav starts here -->
<ul id="slide-out" class="sidenav sidenav-fixed">
    <li>
        <div class="user-view">
            <div class="background">
                <img src="../images/download.png" class="responsive-img">
            </div>
            <a href="#"><img class="circle" src="../images/profile_user.jpg"></a>
            <a href="#"><span class="white-text name">Bason Umoh</span></a>
            <a href="#"><span class="white-text email">Basonumoh@gmail.com</span></a>
        </div>
    </li>
    <li><router-link to="/admin/dashboard" disabled><i class="material-icons blue-text text-darken-3">dashboard</i>Dashboard</router-link></li>
    <li><router-link to="/admin/tutorrequest" href="#!"><i class="material-icons blue-text text-darken-3">person_pin</i>Tutor Request<span class="new badge blue darken-3">2</span></router-link></li>
    <li><router-link to="/admin/tutors"><i class="material-icons blue-text text-darken-3">person</i>Tutors</router-link></li>
    <li><router-link to="/admin/becometutor"><i class="material-icons blue-text text-darken-3">person_add</i>Become Tutor<span class="new badge blue darken-3">55</span></router-link></li>
    <li><router-link to="/admin/store"><i class="material-icons blue-text text-darken-3">images</i>Store</router-link></li>
    <li><router-link to="/admin/comment"><i class="material-icons blue-text text-darken-3">question_answer</i>Comments</router-link></li>
    <li><div class="divider"></div></li>
    <li><router-link to="/admin/help"><i class="material-icons blue-text text-darken-3">help</i>Help</router-link></li>
    <li><router-link to="/"><i class="material-icons blue-text text-darken-3">exit_to_app</i>Log Out</router-link></li>
    
</ul>
<div class="container">
     <main>
      <router-view></router-view>
  </main>
</div>
 
    </div>
</template>

<script>
export default {
    mounted() {
         var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems);
    }
}
</script>

<style>
    header, main, footer {
      padding-left: 300px;
    }

    @media only screen and (max-width : 992px) {
      header, main, footer {
        padding-left: 0;
      }
    }
</style>
