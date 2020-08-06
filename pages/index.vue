<template>

     			<div class="container">
   		
   				         <div class="columns is-desktop is-mobile is-multiline" v-if="this.$parent.state.status">
              <div class="column is-12-desktop is-12-mobile">
                  <div class="is-size-4 has-text-weight-bold has-text-centered-mobile">Status</div>
              </div>


                  <div class="column is-3-desktop is-6-mobile">
              
                  <div class="box has-text-centered has-text-info has-text-weight-bold	">
                     <div class="is-size-6 is-capitalized ">confirmed</div>
                      <div class="is-size-4">
                    {{this.$parent.state.status.confirmed |formatNumber}}
                      </div>
                  </div>

              </div>

               <div class="column is-3-desktop is-6-mobile">
              
                  <div class="box has-text-centered has-text-danger has-text-weight-bold">
                     <div class="is-size-6 is-capitalized ">active</div>
                      <div class="is-size-4">
                                 {{this.$parent.state.status.active |formatNumber}}
                      </div>
                  </div>

              </div>


			 
               <div class="column is-3-desktop is-6-mobile">
              
                  <div class="box has-text-centered has-text-weight-bold">
                     <div class="is-size-6 is-capitalized">Fatals</div>
                      <div class="is-size-4">
                               {{this.$parent.state.status.deaths |formatNumber}}
                      </div>
                  </div>

              </div>
               <div class="column is-3-desktop is-6-mobile">
              
                  <div class="box has-text-centered has-text-success has-text-weight-bold">
                     <div class="is-size-6 is-capitalized">recovered</div>
                      <div class="is-size-4">
                               {{this.$parent.state.status.recovered |formatNumber}}
                      </div>
                  </div>

              </div>
  




           
    </div>
    

     
      <div class="columns is-multiline  is-desktop is-mobile">

              <div class="column is-12-desktop is-12-mobile">
                                    <div class="is-size-4 has-text-weight-bold has-text-centered-mobile">Testing</div>

              </div>  

                 <div class="column is-3-desktop is-6-mobile">
              
                  <div class="box has-text-centered has-text-info has-text-weight-bold">
                     <div class="is-size-6 is-capitalized">collected</div>
                      <div class="is-size-4">
                          {{this.$parent.state.testing.collected |formatNumber}}
                      </div>
                  </div>

              </div>

                 <div class="column is-3-desktop is-6-mobile">
              
                  <div class="box has-text-centered  has-text-weight-bold">
                     <div class="is-size-6 is-capitalized">tested</div>
                      <div class="is-size-4">
                          {{this.$parent.state.testing.tested |formatNumber}}
                      </div>
                  </div>

              </div>
            <div class="column is-3-desktop is-6-mobile">
              
                  <div class="box has-text-centered has-text-danger has-text-weight-bold">
                     <div class="is-size-6 is-capitalized">positive</div>
                      <div class="is-size-4">
                          {{this.$parent.state.testing.positive |formatNumber}}
                      </div>
                  </div>

              </div>

                 <div class="column is-3-desktop is-6-mobile">
              
                  <div class="box has-text-centered has-text-success has-text-weight-bold">
                     <div class="is-size-6 is-capitalized">negative</div>
                      <div class="is-size-4">
                          {{this.$parent.state.testing.negative |formatNumber}}
                      </div>
                  </div>

              </div>

             



          </div>
          <!-- tests ends -->
      <div class="columns">
              <div class="column">
                          <div class="is-size-7 has-text-grey has-text-centered">        Last Updated on {{this.$parent.updatedOn}}
</div>

 <div class="is-size-7 has-text-grey has-text-centered is-capitalized">   
     Quarantine Stats has been removed from Jharkhand Government Bulletin on 6th August 2020 onwards
</div>

              </div>
          </div>
      </div>
  

         


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

  components: {
    Logo,
    Nav,
    Footer,
    Sidenav
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
