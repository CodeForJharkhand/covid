<template>

     		
<section> 
  <div class="is-size-2 has-font-weight-bold">Hospital Feed</div>

  

  <div class="field">
    <div class="labe">Search Hospital</div>
   
    <b-autocomplete
              
                ref="autocomplete" 
                v-model="name"
                :data="filteredHospitalArray"
                field="name"

                placeholder="e.g. Sadar Hospital"
                @select="onSelect($event)"
             
      
                >
                <!-- <template slot="footer">
                    <a @click="addHospital">
                        <span> Add new... </span>
                    </a> 
                </template> -->
                <template slot="empty">No results for {{name}}</template>
            </b-autocomplete>


  <!-- <input type="text" class="input" placeholder="Select Hospital"> -->
</div>


<form @submit="$event.preventDefault(),postInfo()"  v-if="selected!=''">


<div class="is-size-">Services</div>


  <div class="box">
    <div class="field">
      <label for="">Is Emergency Services working? </label>

         <b-field>
            <b-radio-button v-model="form.services.emergency"
                native-value="No"
                type="is-danger">
                <b-icon icon="close"></b-icon>
                <span>No</span>
            </b-radio-button>

            <b-radio-button v-model="form.services.emergency"
                native-value="Yes"
                type="is-success">
                <b-icon icon="check"></b-icon>
                <span>Yes</span>
            </b-radio-button>

            <b-radio-button v-model="form.services.emergency"
                native-value="not sure"
                  type="is-warning">
                Not Sure
            </b-radio-button>
        </b-field>


    </div>

        <div class="field">
      <label for="">OPD Services working?</label>
      <div class="control">
              <b-field>
            <b-radio-button v-model="form.services.opd"
                native-value="No"
                type="is-danger">
                <b-icon icon="close"></b-icon>
                <span>No</span>
            </b-radio-button>

           <b-radio-button v-model="form.services.opd"
                native-value="Yes"
                type="is-success">
                <b-icon icon="check"></b-icon>
                <span>Yes</span>
            </b-radio-button>

            <b-radio-button v-model="form.services.opd"
                native-value="not sure"
                  type="is-warning">
                Not Sure
            </b-radio-button>
        </b-field>
      </div>
    </div>
      <div class="field">
      <label for="">Inpatient Services working?</label>
         <div class="control">
              <b-field>
            <b-radio-button v-model="form.services.inpatient"
                native-value="No"
                type="is-danger">
                <b-icon icon="close"></b-icon>
                <span>No</span>
            </b-radio-button>

            <b-radio-button v-model="form.services.inpatient"
                native-value="Yes"
                type="is-success">
                <b-icon icon="check"></b-icon>
                <span>Yes</span>
            </b-radio-button>

            <b-radio-button v-model="form.services.inpatient"
                native-value="not sure"
                  type="is-warning">
                Not Sure
            </b-radio-button>
        </b-field>
      </div>
    </div>
        <div class="field">
      <label for="">Symptomatic screening of Covid patients?</label>
      <div class="control">
    <div class="control">
              <b-field>
            <b-radio-button v-model="form.services.screening"
                native-value="No"
                type="is-danger">
                <b-icon icon="close"></b-icon>
                <span>No</span>
            </b-radio-button>

            <b-radio-button v-model="form.services.screening"
                native-value="Yes"
                type="is-success">
                <b-icon icon="check"></b-icon>
                <span>Yes</span>
            </b-radio-button>

            <b-radio-button v-model="form.services.screening"
                native-value="not sure"
                  type="is-warning">
                Not Sure
            </b-radio-button>
        </b-field>
      </div>      </div>
    </div>
     <div class="field">
      <label for="">Ambulance Service?</label>
      <div class="control">
    <div class="control">
              <b-field>
            <b-radio-button v-model="form.services.ambulance"
                native-value="No"
                type="is-danger">
                <b-icon icon="close"></b-icon>
                <span>No</span>
            </b-radio-button>

            <b-radio-button v-model="form.services.ambulance"
                native-value="Yes"
                type="is-success">
                <b-icon icon="check"></b-icon>
                <span>Yes</span>
            </b-radio-button>

            <b-radio-button v-model="form.services.ambulance"
                native-value="not sure"
                  type="is-warning">
                Not Sure
            </b-radio-button>
        </b-field>
      </div>      </div>
    </div>

  


  </div>

  <hr>

  <div class="box">
    <div class="is-size-6 has-text-weight-bold">Covid Preparedness</div> <hr>

    <div class="field">
        <label for="">Awareness amoung staff?</label>      
        <div class="control">
     <b-field>
            <b-radio-button v-model="form.preparedness.awareness"
                native-value="No"
                type="is-danger">
                <b-icon icon="close"></b-icon>
                <span>No</span>
            </b-radio-button>

            <b-radio-button v-model="form.preparedness.awareness"
                native-value="Yes"
                type="is-success">
                <b-icon icon="check"></b-icon>
                <span>Yes</span>
            </b-radio-button>

            <b-radio-button v-model="form.preparedness.awareness"
                native-value="not sure"
                  type="is-warning">
                Not Sure
            </b-radio-button>
        </b-field>       
         </div>
    </div>

       <div class="field">
        <label for="">Staff Trained?</label>      
        <div class="control">

              <b-field>
            <b-radio-button v-model="form.preparedness.trained"
                native-value="No"
                type="is-danger">
                <b-icon icon="close"></b-icon>
                <span>No</span>
            </b-radio-button>

            <b-radio-button v-model="form.preparedness.trained"
                native-value="Yes"
                type="is-success">
                <b-icon icon="check"></b-icon>
                <span>Yes</span>
            </b-radio-button>

            <b-radio-button v-model="form.preparedness.trained"
                native-value="not sure"
                  type="is-warning">
                Not Sure
            </b-radio-button>
        </b-field>      


        </div>
    </div>

       <div class="field">
        <label for="">Safety Gears?</label>      
        <div class="control">
  
  
          
              <b-field>
            <b-radio-button v-model="form.preparedness.safety"
                native-value="No"
                type="is-danger">
                <b-icon icon="close"></b-icon>
                <span>No</span>
            </b-radio-button>

            <b-radio-button v-model="form.preparedness.safety"
                native-value="Yes"
                type="is-success">
                <b-icon icon="check"></b-icon>
                <span>Yes</span>
            </b-radio-button>

            <b-radio-button v-model="form.preparedness.safety"
                native-value="not sure"
                  type="is-warning">
                Not Sure
            </b-radio-button>
        </b-field>      


          </div>
    </div>

       <div class="field">
        <label for="">Sanitization</label>      
        <div class="control"> 


              <b-field>
            <b-radio-button v-model="form.preparedness.sanitization"
                native-value="No"
                type="is-danger">
                <b-icon icon="close"></b-icon>
                <span>No</span>
            </b-radio-button>

            <b-radio-button v-model="form.preparedness.sanitization"
                native-value="Yes"
                type="is-success">
                <b-icon icon="check"></b-icon>
                <span>Yes</span>
            </b-radio-button>

            <b-radio-button v-model="form.preparedness.sanitization"
                native-value="not sure"
                  type="is-warning">
                Not Sure
            </b-radio-button>
        </b-field>      


        </div>
    </div>
  <div class="field">
        <label for="">Thermal Screening / Other Measures</label>      
        <div class="control">

              <b-field>
            <b-radio-button v-model="form.preparedness.measures"
                native-value="No"
                type="is-danger">
                <b-icon icon="close"></b-icon>
                <span>No</span>
            </b-radio-button>

            <b-radio-button v-model="form.preparedness.measures"
                native-value="Yes"
                type="is-success">
                <b-icon icon="check"></b-icon>
                <span>Yes</span>
            </b-radio-button>

            <b-radio-button v-model="form.preparedness.measures"
                native-value="not sure"
                  type="is-warning">
                Not Sure
            </b-radio-button>
        </b-field>      

        </div>
    </div>
  </div>

  <hr>

  <div class="box">
    <div class="is-size-6 has-text-weight-bold">Specialties</div> <hr>

    <div class="field">
        <label for="">What Specialties does this hospital has?</label>      
        <div class="control">
           <b-taginput
                v-model="form.specialties"
                :data="tags"
                autocomplete
                :allow-new='true'
                :open-on-focus="true"



                ellipsis
                icon="label"
                placeholder="Add a speciality">
            </b-taginput>
        </div>
    </div>

   <div class="field">
        <label for="">Contact Name</label>      
        <div class="control">
          <input type="text" class="input"  v-model="form.contact.name" required>
        </div>
    </div>

     <div class="field">
        <label for="">Contact Number</label>      
        <div class="control">

            <b-taginput
                v-model="form.contact.number"
                :allow-new='true'
                :open-on-focus="true"
                icon="phone"
                placeholder="Add a number">
            </b-taginput>

        </div>
    </div>


  <div class="field">
        <label for="">Password</label>      
        <div class="control">
          <input type="text" class="input"  v-model="form.password" required>
        </div>
    </div>



  </div>

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

        form:{
            services:{},
            specialties:[],
            preparedness:{},
            contact:{},
        },
        hospitals:[],
        selected:"",
        name:"",
        tags:[
  "Orthopaedics",
  "Cardiology",
  "Urology",
  "Gastroenterology",
  "Gynaecology",
  "Otorhinolaryngology",
  "Nephrology",
  "General surgery",
  "Pulmonology",
  "Neurosurgery",
  "Obstetrics",
  "Emergency medicine",
  "Obstetrics and gynaecology",
  "Ophthalmology",
  "Intensive Care Medicine",
  "Vascular surgery",
  "Rheumatology",
  "Cardiothoracic surgery",
  "Psychiatry",
  "Bariatric surgery",
  "Neonatology",
  "Joint replacement",
  "Anesthesiology",
  "Geriatrics",
  "Reconstructive surgery",
  "Pediatric surgery",
  "Colorectal surgery",
  "Nuclear medicine",
  "Acute care",
  "Hospital medicine",
  "Occupational Therapy",
  "Infection prevention and control",
  "Andrology",
  "Hepatology",
  "Mammography",
  "Diabetology",
  "Urgent care centre",
  "Emergency medical services",
  "Brain Injury Medicine",
  "Child Abuse Pediatrics",
  "Pediatric Transplant Hepatology"
],

    }
  },
  methods:{
      onSelect:function(option){

        this.form={
            services:{},
            specialties:[],
            preparedness:{},
            contact:{},
          
        }

        this.selected=option;
        this.getData();


      },
      postInfo:function(){
        // console.log()
        self=this;
        // alert("i am being posted");
        // this.$axios.post('https://covidtrace.xyz/v2/api/entry',this.form).then(function(resp){

var url='http://localhost:1337/v2/api/hentry?id='+self.selected.id;

        this.$axios.post(url,self.form).then(function(resp){
          
            alert("data uploaded sucessfully..");

        }).catch(function(err){
            console.log(err);
          alert("there was an error");
        })
      },
      addHospital:function() {
                this.$buefy.dialog.prompt({
                    message: `Hospital`,
                    inputAttrs: {
                        placeholder: 'e.g. Guru Nanak Hospital',
                        maxlength: 20,
                        value: this.name
                    },
                    confirmText: 'Add',
                    onConfirm: (value) => {
                        this.data.push(value)
                        this.$refs.autocomplete.setSelected(value)
                    }
                })
            },
             
      getHospital:function(){

            var self=this;
            this.$axios.get('http://localhost:1337/v2/api/hospitals').then(function(resp){

             
                  self.hospitals=resp.data;

            }).catch(function(err){
              console.log(err)
              alert("there was an error loading data");
            })
      }, 

      getData:function(){

            var self=this;
            this.$axios.get('http://localhost:1337/v2/api/hdata?id='+self.selected.id).then(function(resp){

                self.form.specialties=resp.data.specialties;
                self.form.preparedness=resp.data.preparedness;
                self.form.services=resp.data.services;
                if(resp.data.contact){
                                  self.form.contact=resp.data.contact;
                }


              // self.form={
              //   services:resp.data.services,
              //   opd:resp.data.opd,
              //   inpatient:resp.data.inpatient,
              //   screening:resp.data.screening,
              //   ambulance:resp.data.ambulance,
              //   awareness:resp.data.awareness,
              //   trained:resp.data.trained,
              //   safety:resp.data.safety,
              //   sanitization:resp.data.Sanitization,
              //   measures:resp.data.measures,
                
              // }

            }).catch(function(err){
              console.log(err)
              alert("there was an error loading data");
            })
      }
  },
   computed: {
            filteredHospitalArray(option) {

                return this.hospitals.filter((option) => {

                    return option.name 
                        .toString()
                        .toLowerCase()
                        .indexOf(this.name.toLowerCase()) >= 0
                })
            }
        },

  mounted(){

    // this.getData();
    this.getHospital();
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
