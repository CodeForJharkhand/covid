<template>
    

      <div class="container fade">
          <div class="columns is-multiline  is-desktop is-mobile" v-if="this.$parent.state.quarantine">

              <div class="column is-12-desktop is-12-mobile">
                    <div class="is-size-6 has-text-weight-bold">Quarantine Stats</div>
              </div>  

                 <div class="column is-3-desktop is-6-mobile">
              
                  <div class="box has-text-centered has-text-info has-text-weight-bold">
                     <div class="is-size-6 is-capitalized">surveillance</div>
                      <div class="is-size-4">
                          {{this.$parent.state.quarantine.surveillance |formatNumber}}
                      </div>
                  </div>

              </div>

                 <div class="column is-3-desktop is-6-mobile">
              
                  <div class="box has-text-centered  has-text-weight-bold">
                     <div class="is-size-6 is-capitalized">Off Observation </div>
                      <div class="is-size-4">
                          {{this.$parent.state.quarantine.completedObservation |formatNumber}}
                      </div>
                  </div>

              </div>
            <div class="column is-3-desktop is-6-mobile">
              
                  <div class="box has-text-centered has-text-danger has-text-weight-bold">
                     <div class="is-size-6 is-capitalized">home</div>
                      <div class="is-size-4">
                          {{this.$parent.state.quarantine.home |formatNumber}}
                      </div>
                  </div>

              </div>

                 <div class="column is-3-desktop is-6-mobile">
              
                  <div class="box has-text-centered has-text-success has-text-weight-bold">
                     <div class="is-size-6 is-capitalized">centre</div>
                      <div class="is-size-4">
                          {{this.$parent.state.quarantine.centre |formatNumber}}
                      </div>
                  </div>

              </div>

             



          </div>

      </div>
</template>