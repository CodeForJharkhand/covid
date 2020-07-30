<template>


<section>
    <a href="#" @click="$event.preventDefault(),toggle=!toggle" class="button is-fullwidth has-text-weight-bold is-hidden-desktop  
" style="padding:20px"> 

 <span class="icon">
      <i class="fab fa-github"></i>
    </span>

    Menu</a>

   <aside class="menu"   :class="{'is-hidden-touch':toggle}"  style="padding:20px;">

    
  <p class="menu-label">
    Daily Report
  </p>
  <ul class="menu-list">
      <nuxt-link to="/" :class="{'is-active':this.$parent.$route.path=='/'}"> Cases</nuxt-link>
      <!-- <nuxt-link to="/tests" :class="{'is-active':this.$parent.$route.path=='/tests'}">Tests</nuxt-link> -->
      <!-- <nuxt-link to="/quarantine"  :class="{'is-active':this.$parent.$route.path=='/quarantine'}"> Quarantine</nuxt-link> -->
         <!-- <nuxt-link to="/hospitals">Hospitals</nuxt-link> -->

  </ul>
  <p class="menu-label">
    Covid Help
  </p>
    <ul class="menu-list">
            <!-- <nuxt-link to="/migrants"  :class="{'is-active':this.$parent.$route.path=='/migrants'}"> एक पहल | Migrants</nuxt-link> -->

        <!-- <nuxt-link to="/migrants">Migrants</nuxt-link> -->
          <!-- <nuxt-link to="/sos">S.O.S</nuxt-link> -->
          <!-- <a href="https://www.google.com/maps/d/u/0/viewer?mid=124Nzwc-DyOAsLE4qMeyxtmQ5mR_yJ9v5&shorturl=1" target="_blank">Community Kitchen</a> -->
            <nuxt-link to="/kitchen"  :class="{'is-active':this.$parent.$route.path=='/kitchen'}"> Community Kitchen</nuxt-link>
                        <!-- <nuxt-link to="/milk"  :class="{'is-active':this.$parent.$route.path=='/milk'}"> Milk</nuxt-link> -->
            <nuxt-link to="/hospitals"  :class="{'is-active':this.$parent.$route.path=='/hospitals'}"> Hospitals</nuxt-link>


  </ul>

</aside>

</section>
</template>


<script>
export default {
  data:function(){
    return {
        toggle:true,
    }
  }
}
</script>

<style >

</style>