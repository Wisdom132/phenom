<template>
     <section id="allCategory">
        <navbar/>
        <div class="container">
            <div class="row">
                <div class="col s12 l12 m12 center-align white-text" style="margin-top:80px;">
                    <h5>Browse Our Subject</h5>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import navbar from '@/components/navbar.vue'
export default {
    name:'subjectheader',
    components: {
        navbar
    }
}
</script>

<style scoped>
    /* all category */
#allCategory {
    background-image: url('../../images/apple-beautiful-blond-hair-1326947.jpg');
    background-size:cover;
     height:350px;
    background-position:center center;
}
</style>
