<template>
    
<div>
   <div class="columns">
       <div class="column">

            <div class="is-size-3 has-text-weight-bold">झारखण्ड हेल्पडेस्क</div>
            <div class="is-size-7 is-uppercase has-text-grey-light"> an innitative by Ranchi Updates &amp; in collaboration with Made In Ranchi</div>
   
            <div class="columns is-multiline">

                    <div class="column is-12">
                    <div class="box">
                    <div class="is-size-3 has-text-weight-bold">एक पहल</div>
                
            
                <p>
                    देश में जब से लॉकडाउन लगा है हर दिन हमे कई लोग मैसेज भेजते रहते हैं कि हम इस शहर में फंसे हुए हैं, हम उस शहर में फंसे हुए हैं और वापस झारखण्ड आना चाहते हैं। ऐसे लोगों की संख्या कल से काफी बढ़ गयी जब सरकार की पहल पर हैदराबाद और कोटा से झारखंडवासी वापस आये।

                </p> <br>
                    <p>
                        इसी को ध्यान में रखते हुए हमलोगों सोचा कि क्यों न एक "Database" बनाया जाए जिससे कि पता चल सके कि कहाँ कहाँ हमारे राज्य के लोग अबतक फंसे हुए हैं ये बात हमने शेयर की रांची के ही एक और पेज <a href="https://facebook.com/madeinranchi" target="_blank">Made In Ranchi</a> के साथ और इस पुनीत कार्य में उन्होंने हमारा साथ दिया और उनकी टीम ने हमारी इस कल्पना को यथार्थ का रूप दिया।  

                    </p> <br>
                <p>
                    और अब आपके सामने है "झारखण्ड हेल्पडेस्क" आप इसमें अपना डिटेल भर सकते हैं। हमारा प्रयास रहेगा कि हम सम्बंधित अधिकारीयों तक ये डाटा पहुंचा सकें जिससे उन्हें भी पता चल जाए कि किस राज्य में कितने झारखंडवासी अबतक फंसे हुए हैं और अगर वो उनको वापस लाने की योजना बनाते हैं तो सीधे संपर्क कर सकें।

                </p>
                 <br>
                    <p>
 धन्यवाद टीम <a href="https://facebook.com/madeinranchi" target="_blank">Made In Ranchi</a> को।  <br> <br>

आभार <br>
<strong>   टीम रांची अपडेट्स </strong>
                    </p>
                    </div>   

                    </div>

                <div class="column is-6">

                     <form class="box" @submit="$event.preventDefault(),addDetails()">
              <div class="field">
                  <label for="">आपका नाम  (Your Name)</label>
                  <div class="control">
                      
                        <input type="text" class="input is-capitalized" v-model="form.name" required placeholder="Eg: नीरज/Neeraj">
                  </div>
              </div>
                <div class="field">
                  <label for="">अभिभावक का नाम (Parent/Guardian's Name) </label>
                  <div class="control">
                      
                        <input type="text" class="input is-capitalized" v-model="form.gname" required placeholder="Eg: धीराज/Dhiraj">
                  </div>
              </div>
              <div class="field">
                  <label for="">आपका पेशा / काम  क्या है ? (Select the following)</label>
                  <div class="control">
                      <div class="select is-fullwidth">
                          <select name="" id="" v-model="form.type" required>
                              <option value="student">छात्र  (Student)</option>
                              <option value="professional">कर्मचारी (Employeed Professional)</option>
                              <option value="worker">मजदूर (Worker)</option>
                                <option value="tourist">पर्यटक (Tourist)</option>
                                     <option value="other">Other</option>
                          </select>
                      </div>
                      
                  </div>
              </div>
                <div class="field">
                  <label for="">आपका मोबाइल नंबर (Contact Number)</label>
                  <div class="control">
                      
                        <input type="text" class="input" pattern="[6789][0-9]{9}" v-model="form.number" required placeholder="9876543210"> 
                  </div>
              </div>
                <div class="field">
                  <label for="">आप किस राज्य में फसे हुए हैं ? (State) </label>
                <div class="control">
                     <div class="select is-fullwidth">
                          <select name="" id="" v-model="form.state" required  @change="filter.selected=$event.target.value,getState()">
                              <option :value="item" v-for="(item,index) in filter.state" :key="index">{{item}}</option>
                          </select>
                      </div>
                </div>
              </div>
                    <div class="field">
                  <label for="">शहर (Select City)</label>
                <div class="control">
                     <div class="select is-fullwidth">
                          <select name="" id="" v-model="form.city" required>
                              <option :value="item.name" v-for="(item,index) in filter.city" :key="index">{{item.name}}</option>
                          </select>
                      </div>
                </div>
              </div>

                 <div class="field">
                  <label for="">आपको झारखण्ड के किस जिले में जाना है? (Your district in Jharkhand?)</label>
                <div class="control">
                     <div class="select is-fullwidth">
                          <select name="" id="" v-model="form.jhcity" required>
                              <option :value="item.name" v-for="(item,index) in filter.jhdistrict" :key="index">{{item.name}}</option>
                          </select>
                      </div>
                </div>
              </div>
                <input type="hidden" v-model='form.ltime=Date()'>
          
              <div class="field">
                  <input type="submit" class="button is-info is-fullwidth has-text-weight-bold" :disabled='isLoading' value="Submit">
              </div>

            <div v-if="isLoading" class="has-text-centered has-text-info">
                Adding ... 
            </div>

           </form>

                </div>

 
                <div class="column is-12">

          <div class="box">
            <div class="is-size-6 is-uppercase has-text-grey-light " style="margin-bottom:20px"> a joint innitative by Ranchi Updates &amp;  Made In Ranchi</div>
            <div class="media">
                <div class="media-left">
                   <a href="https://www.facebook.com/RanchiUpdates/" target="_blank">
                         <div class="image is-128x128">
                         <img class="is-square" src="https://secureservercdn.net/166.62.107.20/290.15f.myftpupload.com/wp-content/uploads/2020/04/Graphic1-1-300x300.jpg" alt="">
                     </div>
      
                   </a>
                </div>
                <div class="media-right">
                        <a href="https://www.facebook.com/MadeInRanchi/" target="_blank">

                              <div class="image is-128x128">
                                <img src="https://scontent.fpat3-1.fna.fbcdn.net/v/t1.0-9/69684810_2893849143960798_4459993545968713728_n.jpg?_nc_cat=100&_nc_sid=7aed08&_nc_ohc=9o5U02g1B5YAX-l2XY9&_nc_ht=scontent.fpat3-1.fna&oh=85546816d43761a946912beb1c891ba6&oe=5ED4F7E0" alt="">

                            </div>

                        </a>
                </div>
            </div>
         
           
       </div>
                </div>

   
            </div>
       </div>
   </div>
</div>
</template>

<script>

import data from '~/assets/data/city.json'; 

export default {
    data:function(){

        return {
                isLoading:false,
                filter:{
                    state:[
                            "Andaman and Nicobar Islands",
                            "Andhra Pradesh",
                            "Arunachal Pradesh",
                            "Assam",
                            "Bihar",
                            "Chandigarh",
                            "Chhattisgarh",
                            "Dadra and Nagar Haveli",
                            "Daman and Diu",
                            "Delhi",
                            "Goa",
                            "Gujarat",
                            "Haryana",
                            "Himachal Pradesh",
                            "Jammu and Kashmir",
                            "Jharkhand",
                            "Karnataka",
                            "Kerala",
                            "Ladakh",
                            "Lakshadweep",
                            "Madhya Pradesh",
                            "Maharashtra",
                            "Manipur",
                            "Meghalaya",
                            "Mizoram",
                            "Nagaland",
                            "Odisha",
                            "Puducherry",
                            "Punjab",
                            "Rajasthan",
                            "Sikkim",
                            "Tamil Nadu",
                            "Telangana",
                            "Tripura",
                            "Uttar Pradesh",
                            "Uttarakhand",
                            "West Bengal"],
                    city:[],
                    selected:'Gujarat',
                    jhdistrict:[],
                },
                data:data,
                form:{},
        }
    },
    methods:{
// let addDoc = db.collection('cities').add({
//   name: 'Tokyo',
//   country: 'Japan'
// }).then(ref => {
//   console.log('Added document with ID: ', ref.id);
// });

    addDetails:function() {
    
        var self=this;
        var db = this.$fireStore;
        self.isLoading=true;
        self.form.rtime=Date();

db.collection("entry").add(self.form)
.then(function(docRef) {
    console.log("Document written with ID: ",);
    // alert("Request id - "+docRef.id)
       self.$swal.fire(
                        'सफल ( success)',
                        'पंजीकरण सफल (Record Added Sucessfully) id - '+ docRef.id,
                        'success'
                        )


    self.form={};
    self.isLoading=false;
})
.catch(function(error) {
    console.error("Error adding document: ", error);
    // alert("Error. Google is Down")
    //   self.$swal.fire(
    //                     'असफल (success)',
    //                     'पंजीकरण सफल (Record Added Sucessfully) id - '+ docRef.id,
    //                     'success'
    //                     )

self.$swal.fire({
  icon: 'error',
  title: 'Oops...',
  text: 'गूगल का सर्वर डाउन है कृपया थोड़ी देर बाद प्रयास करें ',
})


    self.isLoading=false;
    
});



    },

     getState:function(){
                // console.log("i am being trig");
                var self=this;

            this.filter.city=data.filter(function(value){

                    if(value.state==self.filter.selected){
                        return value;
                    }
                    // return value

            });

     },
    getState:function(){
                // console.log("i am being trig");
                var self=this;

            this.filter.city=data.filter(function(value){

                    if(value.state==self.filter.selected){
                        return value;
                    }
                    // return value

            });

     },
         getJhState:function(){
                // console.log("i am being trig");
                var self=this;

            this.filter.jhdistrict=data.filter(function(value){

                    if(value.state=='Jharkhand'){
                        return value;
                    }
                    // return value

            });

     }

    },
  
    mounted(){

                        this.getState(this.filter.selected);
                        this.getJhState();

                     


    }


    
}
</script>


