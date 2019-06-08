<template>
  <div>
     <nav class="transparent z-depth-2">
        <div class="nav-wrapper">
            <div class="container">            
            <a href="index.html" class="brand-logo">Logo</a>
            <a href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">menu</i></a>
            <ul class="right hide-on-med-and-down">
                <li><router-link to="/">Home</router-link></li>
                <li><router-link to="/allsubjects">Subjects</router-link></li>
                <li><a href="#">Store</a></li>
                <li><router-link to='/getatutor'>Get a Tutor</router-link></li>
                <li><a href="#">Contact</a></li>
                
            </ul>
        </div>
    </div>
    </nav>
    <!-- sidenav -->
    <ul class="sidenav" id="mobile-demo">
    <li><a>Home</a></li>
    <li><a>Store</a></li>
    <li><a>Get a Tutor</a></li>
    <li><a>Contact</a></li>
    </ul>
    <!-- sidenav closing -->
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
li {
    font-weight:500;
}
</style>
