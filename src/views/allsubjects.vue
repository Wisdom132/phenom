<template>
    <div>
        <subjectheader />
        <subjects />
    </div>
</template>

<script>
import subjectheader from '@/components/subjects/subjectheader.vue'
import subjects from '@/components/subjects/subjects.vue'
export default {
    name:'all-subjects',
    components: {
        subjectheader,
        subjects
    }
}
</script>

<style>

</style>
