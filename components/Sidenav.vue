<template>


<section>
    <a href="#" @click="$event.preventDefault(),toggle=!toggle" class="button is-fullwidth has-text-weight-bold is-hidden-desktop  
" style="padding:20px"> 

 <span class="icon">
      <i class="fab fa-github"></i>
    </span>

    Menu</a>


   <aside class="menu"   :class="{'is-hidden-touch':toggle}"  style="padding:20px">

    
  <p class="menu-label">
    General
  </p>
  <ul class="menu-list">
    <li><a>Cases</a></li>
    <li><a>Hospitals</a></li>
    <li><a>Tests</a></li>
    <li><a>Quarantined</a></li>

  </ul>
  <p class="menu-label">
    Covid Help
  </p>
    <ul class="menu-list">
    <li><a>Immigrants</a></li>
    <li><a>S.O.S</a></li>
    <li><a>Community Kitchen</a></li>
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