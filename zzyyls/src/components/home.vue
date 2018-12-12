<template>
<div class="home">
    <!-- <doctor2></doctor2> -->
    <doctor3></doctor3>
    <!-- <doctor4></doctor4> -->



</div>
</template>

<script>
import doctor2 from '~/components/doctor2.vue';
import doctor3 from '~/components/doctor3.vue';
import doctor4 from '~/components/doctor4.vue';


export default {
  name: 'home',
  data() {
    return {
       
    }
  },
  components: {
      doctor2,
      doctor3,
      doctor4
  },
  methods: {
     

  },
  watch: {

  },
  created() {

  },
}
</script>

<style scoped lang="scss">
@media screen and (max-width:900px) {
  .home{
        background: #fff;
        border-radius: 2px;
        padding: 15px 10px;
    }
}
@media screen and (min-width:900px) {
    
}
</style>


