        <div class="container">

         <div class="columns is-multiline">
   
           <div class="column is-3">

             <div class="field is-left">

                    <div class="label">Select Day</div>
                        <div class="control">
                            <div class="select is-fullwidth">
                            <select name="" id="" v-model='sel'>
                            <option :value="item" v-for="(item,index) in data.tested" :key="index">{{item.updatetimestamp}}</option>
                            </select>
                            </div>
                          </div>

             </div>
       
           </div>

                   <div class="column" v-if="data.tested">
                      <div class="box">
                        {{sel}}
                      </div>
                   </div>

            <!-- <div class="column is-3" v-for="(item,index) in data.tested" :key='index'> -->
                <!-- {{item}} -->

             <!-- <div class="box">
              <div class="box">
                  <div class="is-size-6 has-text-success has-text-weight-bold"> Individual Tested </div>
                <div class="is-size-5 has-text-weight-semibold">    {{item.totalindividualstested}}</div>
              </div>

             <div class="box">
                <div class="is-size-6">
                Sample Tested
              </div>

              <div class="is-size-5">
                 {{item.totalsamplestested}}
              </div>
             </div>
           <div class="is-size-7 is-uppercase has-text-grey-light"> Updated on : {{item.updatetimestamp}}</div>
             </div>
               -->
            <!-- </div> -->

         </div>
         </div>