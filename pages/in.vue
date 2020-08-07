<template>

     		
<section>

<form @submit="$event.preventDefault(),postInfo()"> 

  <div class="box">
    <div class="is-size-6 has-text-weight-bold">Testing</div> <hr>
    <div class="field">
      <label for="">Collected</label>
      <div class="control">
                  <input type="number" class="input" v-model="form.collected">

      </div>
    </div>

        <div class="field">
      <label for="">Tested</label>
      <div class="control">
          <input type="number" class="input" v-model="form.tested">
      </div>
    </div>
      <div class="field">
      <label for="">Positive</label>
      <div class="control">
                 <input type="number" class="input" v-model="form.positive">

      </div>
    </div>
        <div class="field">
      <label for="">Negetive</label>
      <div class="control">
          <input type="number" class="input" v-model="form.negative">
      </div>
    </div>

  


  </div>

  <hr>

  <div class="box">
    <div class="is-size-6 has-text-weight-bold">Status</div> <hr>

    <div class="field">
        <label for="">Active</label>      
        <div class="control">
          <input type="number" class="input" v-model="form.active">
        </div>
    </div>

       <div class="field">
        <label for="">Confirmed</label>      
        <div class="control">
          <input type="number" class="input"  v-model="form.positive">
        </div>
    </div>

       <div class="field">
        <label for="">Deaths</label>      
        <div class="control">
          <input type="number" class="input"  v-model="form.deaths">
        </div>
    </div>

       <div class="field">
        <label for="">Recovered</label>      
        <div class="control">
          <input type="number" class="input"  v-model="form.recovered">
        </div>
    </div>

     <div class="field">
        <label for="">Password</label>      
        <div class="control">
          <input type="text" class="input"  v-model="form.password" required>
        </div>
    </div>


  </div>

  <hr>


  <input type="submit" class="button is-info has-text-weight-bold is-fullwidth" value="Publish">

</form>

</section>


</template>

<script>
import Logo from '~/components/Logo.vue'
import Nav from '~/components/Nav.vue'
import Sidenav from '~/components/Sidenav.vue'
import Footer from '~/components/Footer.vue'
var swal=require('sweetalert2');





export default {

  components: {
    Logo,
    Nav,
    Footer,
    Sidenav
  },
  data:function(){
    return {

        form:{},

    }
  },
  methods:{

      postInfo:function(){

        // alert("i am being posted");
        this.$axios.post('https://covidtrace.xyz/v2/api/entry',this.form).then(function(resp){
          
            alert("data uploaded sucessfully..");
        }).catch(function(err){
          
          alert("there was an error");
        })
      },
      getData:function(){

            var self=this;
            this.$axios.get('https://covidtrace.xyz/v2/api/data').then(function(resp){

                  var main=resp.data[0];

                  var str={
                    
                    collected:main.testing.collected,
                    tested:main.testing.tested,
                    positive:main.testing.positive,
                    negative:main.testing.negative,

                    active:main.status.active,
                    confirmed:main.status.positive,
                    deaths:main.status.deaths,
                    recovered:main.status.recovered,

                    surveillance:main.quarantine.surveillance,
                    completedObservation:main.quarantine.completedObservation,
                    centre:main.quarantine.centre,
                    home:main.quarantine.home,
                  };
                  self.form=str;

            }).catch(function(err){
              console.log(err)
              alert("there was an error loading data");
            })
      }
  },
  mounted(){

    this.getData();
  }

 

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
