<template>
    <section id="header">
        <navbar/>
    <div class="container">
        <div class="row">

            <form class="col s12" id="input">
                <div class="input-field col s12 m8 l8 offset-l2">
                    <input id="text" type="text" class="validate search" >
                    <label for="text" class="white-text">Tell Us What You Want To Learn Today</label>
                </div>
            </form>
        </div>
    </div>
    </section>
</template>

<script>
import navbar from '@/components/navbar.vue'
export default {
    components: {
        navbar
    }
}
</script>

<style>
#header {
    background-image:linear-gradient(rgba(0, 0, 34, 0.55), rgba(0, 0, 34, 0.55)), url('../../images/adolescent-attractive-backpack-1462630.jpg');
    height:690px;
    background-size:contain;
    background-position:center center;
}
@media(max-width:800px) { 
    #header {
    background-image:linear-gradient(rgba(0, 0, 34, 0.55), rgba(0, 0, 34, 0.55)), url('../../images/adolescent-attractive-backpack-1462630.jpg');
    height:650px;
    background-size:cover;
    background-position:center center;
}
 #input {
     margin-top:150px !important;
 }

}
 #input {
     margin-top:250px;
 }
</style>
