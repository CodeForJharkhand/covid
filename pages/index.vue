<template>
<section>
  <!-- <Nav/> -->
  <!-- <hr class="mt-1 mb-1"> -->
  <div class="containerx">
    <div class="columns is-multiline">
      <div class="column is-2">
  <div class="has-text-centered">
          <Logo/>
  </div>
        <!-- <Sidenav/> -->
      </div>
      <div class="column is-10">
   			<div class="container">
   				
   				         <div class="columns is-desktop is-mobile is-multiline" v-if="state[0]" style="padding:30px">
            

               <div class="column is-3-desktop is-6-mobile">
              
                  <div class="box has-text-centered has-text-info has-text-weight-bold	">
                     <div class="is-size-6 is-capitalized ">confirmed</div>
                      <div class="is-size-4">
                          {{state[0].confirmed}}
                      </div>
                  </div>

              </div>

               <div class="column is-3-desktop is-6-mobile">
              
                  <div class="box has-text-centered has-text-danger has-text-weight-bold">
                     <div class="is-size-6 is-capitalized ">active</div>
                      <div class="is-size-4">
                          {{state[0].active}}
                      </div>
                  </div>

              </div>


			 
               <div class="column is-3-desktop is-6-mobile">
              
                  <div class="box has-text-centered has-text-weight-bold">
                     <div class="is-size-6 is-capitalized">Fatals</div>
                      <div class="is-size-4">
                          {{state[0].deaths}}
                      </div>
                  </div>

              </div>
               <div class="column is-3-desktop is-6-mobile">
              
                  <div class="box has-text-centered has-text-success has-text-weight-bold">
                     <div class="is-size-6 is-capitalized">recovered</div>
                      <div class="is-size-4">
                          {{state[0].recovered}}
                      </div>
                  </div>

              </div>

           
    </div>
    
   			</div>
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



export default {

  data:function(){
    return {
      state:{}
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
      	this.$axios.$get('https://covidtrace.xyz/api/jharkhand').then(function(data){
      		console.log(data);
      			self.state=data;

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
  }
}
</script>

<style >
.box{
  border-radius:20px;
}

@media(max-width: 767px) { /* <== You can change this break point as per your  needs */
  .reverse-columns {
    flex-direction: column-reverse;
    display: flex;
  }
}

</style>
