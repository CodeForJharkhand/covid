
<template>
<section class="fade">
  <!-- <Nav/> -->
  <!-- <hr class="mt-1 mb-1"> -->
  <div class="containerx">
    <div class="columns is-multiline">
      <div class="column is-3 box" style="height:100vh;position: sticky; top: 0;">
  <div class="has-text-centered">
          <Logo/>
             <!-- <div class="column is-12-desktop is-12-mobile">
                  <div class="is-size-7 has-font-weight-bold has-text-grey-light">Updated On <br>
                  {{state.date}}</div>
              </div> -->
  </div>
        <Sidenav/>
      </div>
      <div class="column is-9">
    <section class="hero ">
        <div class="hero-body fade">
        <router-view></router-view>
        </div>
</section>
</div>
    </div>

  </div>

  <Footer/>

</section>
</template>

<script>
import Logo from '~/components/Logo.vue'
import Nav from '~/components/Nav.vue'
import Sidenav from '~/components/Sidenav.vue'
import Footer from '~/components/Footer.vue'
var swal=require('sweetalert2');
// var x=require('moment');
const moment = require('moment');



export default {

  data:function(){
    return {
      state:{},
      data:{

        tested:[],
      },
      sel:0,
    }
  },
  
  components: {
    Logo,
    Nav,
    Footer,
    Sidenav
  },
  methods:{
      getStats(state){
      	var self=this;
      	this.$axios.$get('https://covidtrace.xyz/v2/api/data').then(function(data){
      		// console.log(data);  
          self.state=data[0];

        //   self.state=self.data.statewise.filter(function(fil) {
        //     // if(params.state==state)
        //     return fil.state==state[0];
        // })

        // self.sel=self.data.tested.length-1;
      			// self.state=data;

      	}).catch(function(err){

      			console.log(err);
      	})
        // this.state=data.statewise.filter(function(fil) {
        //     // if(params.state==state)
        //     return fil.state==state;
        // })

      }
  },


  mounted(){
    this.getStats('Jharkhand');
  },

}
</script>

<style >
.box20{
  border-radius:20px;
}

@media(max-width: 767px) { /* <== You can change this break point as per your  needs */
  .reverse-columns {
    flex-direction: column-reverse;
    display: flex;
  }
}

</style>



