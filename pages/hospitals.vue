<template>
    <div class="columns">

        <div class="column is-8">
                <!-- <div class="box">
                        <div class="field">
                            <label for="">Search Hospital Name</label>
                            <div class="control">
                            <input type="text" class="input" placeholder="Gurunank">
                            </div>
                        </div>
                </div> -->
            <div class="box" v-for="(item,index) in data" :key="index">
                  <div class="is-size-5 is-capitalized ">  {{item.name}}</div>
                    <hr>
                  <div class="is-size-6"> Address: {{item.vicinity}}</div>
                  <a :href="'https://www.google.com/maps/place/'+item.geometry.location.lat+','+item.geometry.location.lng" target="_new" class="button is-fullwidth is-link has-text-weight-bold" style="margin-top:10px;">Direction</a>

            </div>
        </div>
    </div>
</template>


<script>

import data from '~/assets/data/hospital.json'; 


export default {
   data:function(){

       return {
            data:data,
       }
   },
}
</script>