<template>
    

      <div class="container fade" v-if="this.$parent.state.testing">
          <div class="columns is-multiline  is-desktop is-mobile">

              <div class="column is-12-desktop is-12-mobile">
                    <div class="is-size-6 has-text-weight-bold">Testing</div>
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

      </div>
      

</template>



