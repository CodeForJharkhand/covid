(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{246:function(e,t,r){var content=r(252);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(57).default)("19574a61",content,!0,{sourceMap:!1})},251:function(e,t,r){"use strict";var o=r(246);r.n(o).a},252:function(e,t,r){(t=r(56)(!1)).push([e.i,".box20{border-radius:20px}@media(max-width:767px){.reverse-columns{flex-direction:column-reverse;display:flex}}",""]),e.exports=t},265:function(e,t,r){"use strict";r.r(t);r(59),r(60),r(41),r(61);var o=r(129),n=r(126),c=r(127),l=r(128),v=(r(172),{components:{Logo:o.a,Nav:n.a,Footer:l.a,Sidenav:c.a},data:function(){return{form:{services:{},specialties:[],preparedness:{},contact:{}},hospitals:[],selected:"",name:"",tags:["Orthopaedics","Cardiology","Urology","Gastroenterology","Gynaecology","Otorhinolaryngology","Nephrology","General surgery","Pulmonology","Neurosurgery","Obstetrics","Emergency medicine","Obstetrics and gynaecology","Ophthalmology","Intensive Care Medicine","Vascular surgery","Rheumatology","Cardiothoracic surgery","Psychiatry","Bariatric surgery","Neonatology","Joint replacement","Anesthesiology","Geriatrics","Reconstructive surgery","Pediatric surgery","Colorectal surgery","Nuclear medicine","Acute care","Hospital medicine","Occupational Therapy","Infection prevention and control","Andrology","Hepatology","Mammography","Diabetology","Urgent care centre","Emergency medical services","Brain Injury Medicine","Child Abuse Pediatrics","Pediatric Transplant Hepatology"]}},methods:{onSelect:function(option){this.form={services:{},specialties:[],preparedness:{},contact:{}},this.selected=option,this.getData()},postInfo:function(){self=this;var e="http://localhost:1337/v2/api/hentry?id="+self.selected.id;this.$axios.post(e,self.form).then((function(e){alert("data uploaded sucessfully..")})).catch((function(e){console.log(e),alert("there was an error")}))},addHospital:function(){var e=this;this.$buefy.dialog.prompt({message:"Hospital",inputAttrs:{placeholder:"e.g. Guru Nanak Hospital",maxlength:20,value:this.name},confirmText:"Add",onConfirm:function(t){e.data.push(t),e.$refs.autocomplete.setSelected(t)}})},getHospital:function(){var e=this;this.$axios.get("http://localhost:1337/v2/api/hospitals").then((function(t){e.hospitals=t.data})).catch((function(e){console.log(e),alert("there was an error loading data")}))},getData:function(){var e=this;this.$axios.get("http://localhost:1337/v2/api/hdata?id="+e.selected.id).then((function(t){e.form.specialties=t.data.specialties,e.form.preparedness=t.data.preparedness,e.form.services=t.data.services,t.data.contact&&(e.form.contact=t.data.contact)})).catch((function(e){console.log(e),alert("there was an error loading data")}))}},computed:{filteredHospitalArray:function(option){var e=this;return this.hospitals.filter((function(option){return option.name.toString().toLowerCase().indexOf(e.name.toLowerCase())>=0}))}},mounted:function(){this.getHospital()}}),d=(r(251),r(31)),component=Object(d.a)(v,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("section",[r("div",{staticClass:"is-size-2 has-font-weight-bold"},[e._v("Hospital Feed")]),e._v(" "),r("div",{staticClass:"field"},[r("div",{staticClass:"labe"},[e._v("Search Hospital")]),e._v(" "),r("b-autocomplete",{ref:"autocomplete",attrs:{data:e.filteredHospitalArray,field:"name",placeholder:"e.g. Sadar Hospital"},on:{select:function(t){return e.onSelect(t)}},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}},[r("template",{slot:"empty"},[e._v("No results for "+e._s(e.name))])],2)],1),e._v(" "),""!=e.selected?r("form",{on:{submit:function(t){t.preventDefault(),e.postInfo()}}},[r("div",{staticClass:"is-size-"},[e._v("Services")]),e._v(" "),r("div",{staticClass:"box"},[r("div",{staticClass:"field"},[r("label",{attrs:{for:""}},[e._v("Is Emergency Services working? ")]),e._v(" "),r("b-field",[r("b-radio-button",{attrs:{"native-value":"No",type:"is-danger"},model:{value:e.form.services.emergency,callback:function(t){e.$set(e.form.services,"emergency",t)},expression:"form.services.emergency"}},[r("b-icon",{attrs:{icon:"close"}}),e._v(" "),r("span",[e._v("No")])],1),e._v(" "),r("b-radio-button",{attrs:{"native-value":"Yes",type:"is-success"},model:{value:e.form.services.emergency,callback:function(t){e.$set(e.form.services,"emergency",t)},expression:"form.services.emergency"}},[r("b-icon",{attrs:{icon:"check"}}),e._v(" "),r("span",[e._v("Yes")])],1),e._v(" "),r("b-radio-button",{attrs:{"native-value":"not sure",type:"is-warning"},model:{value:e.form.services.emergency,callback:function(t){e.$set(e.form.services,"emergency",t)},expression:"form.services.emergency"}},[e._v("\n                Not Sure\n            ")])],1)],1),e._v(" "),r("div",{staticClass:"field"},[r("label",{attrs:{for:""}},[e._v("OPD Services working?")]),e._v(" "),r("div",{staticClass:"control"},[r("b-field",[r("b-radio-button",{attrs:{"native-value":"No",type:"is-danger"},model:{value:e.form.services.opd,callback:function(t){e.$set(e.form.services,"opd",t)},expression:"form.services.opd"}},[r("b-icon",{attrs:{icon:"close"}}),e._v(" "),r("span",[e._v("No")])],1),e._v(" "),r("b-radio-button",{attrs:{"native-value":"Yes",type:"is-success"},model:{value:e.form.services.opd,callback:function(t){e.$set(e.form.services,"opd",t)},expression:"form.services.opd"}},[r("b-icon",{attrs:{icon:"check"}}),e._v(" "),r("span",[e._v("Yes")])],1),e._v(" "),r("b-radio-button",{attrs:{"native-value":"not sure",type:"is-warning"},model:{value:e.form.services.opd,callback:function(t){e.$set(e.form.services,"opd",t)},expression:"form.services.opd"}},[e._v("\n                Not Sure\n            ")])],1)],1)]),e._v(" "),r("div",{staticClass:"field"},[r("label",{attrs:{for:""}},[e._v("Inpatient Services working?")]),e._v(" "),r("div",{staticClass:"control"},[r("b-field",[r("b-radio-button",{attrs:{"native-value":"No",type:"is-danger"},model:{value:e.form.services.inpatient,callback:function(t){e.$set(e.form.services,"inpatient",t)},expression:"form.services.inpatient"}},[r("b-icon",{attrs:{icon:"close"}}),e._v(" "),r("span",[e._v("No")])],1),e._v(" "),r("b-radio-button",{attrs:{"native-value":"Yes",type:"is-success"},model:{value:e.form.services.inpatient,callback:function(t){e.$set(e.form.services,"inpatient",t)},expression:"form.services.inpatient"}},[r("b-icon",{attrs:{icon:"check"}}),e._v(" "),r("span",[e._v("Yes")])],1),e._v(" "),r("b-radio-button",{attrs:{"native-value":"not sure",type:"is-warning"},model:{value:e.form.services.inpatient,callback:function(t){e.$set(e.form.services,"inpatient",t)},expression:"form.services.inpatient"}},[e._v("\n                Not Sure\n            ")])],1)],1)]),e._v(" "),r("div",{staticClass:"field"},[r("label",{attrs:{for:""}},[e._v("Symptomatic screening of Covid patients?")]),e._v(" "),r("div",{staticClass:"control"},[r("div",{staticClass:"control"},[r("b-field",[r("b-radio-button",{attrs:{"native-value":"No",type:"is-danger"},model:{value:e.form.services.screening,callback:function(t){e.$set(e.form.services,"screening",t)},expression:"form.services.screening"}},[r("b-icon",{attrs:{icon:"close"}}),e._v(" "),r("span",[e._v("No")])],1),e._v(" "),r("b-radio-button",{attrs:{"native-value":"Yes",type:"is-success"},model:{value:e.form.services.screening,callback:function(t){e.$set(e.form.services,"screening",t)},expression:"form.services.screening"}},[r("b-icon",{attrs:{icon:"check"}}),e._v(" "),r("span",[e._v("Yes")])],1),e._v(" "),r("b-radio-button",{attrs:{"native-value":"not sure",type:"is-warning"},model:{value:e.form.services.screening,callback:function(t){e.$set(e.form.services,"screening",t)},expression:"form.services.screening"}},[e._v("\n                Not Sure\n            ")])],1)],1)])]),e._v(" "),r("div",{staticClass:"field"},[r("label",{attrs:{for:""}},[e._v("Ambulance Service?")]),e._v(" "),r("div",{staticClass:"control"},[r("div",{staticClass:"control"},[r("b-field",[r("b-radio-button",{attrs:{"native-value":"No",type:"is-danger"},model:{value:e.form.services.ambulance,callback:function(t){e.$set(e.form.services,"ambulance",t)},expression:"form.services.ambulance"}},[r("b-icon",{attrs:{icon:"close"}}),e._v(" "),r("span",[e._v("No")])],1),e._v(" "),r("b-radio-button",{attrs:{"native-value":"Yes",type:"is-success"},model:{value:e.form.services.ambulance,callback:function(t){e.$set(e.form.services,"ambulance",t)},expression:"form.services.ambulance"}},[r("b-icon",{attrs:{icon:"check"}}),e._v(" "),r("span",[e._v("Yes")])],1),e._v(" "),r("b-radio-button",{attrs:{"native-value":"not sure",type:"is-warning"},model:{value:e.form.services.ambulance,callback:function(t){e.$set(e.form.services,"ambulance",t)},expression:"form.services.ambulance"}},[e._v("\n                Not Sure\n            ")])],1)],1)])])]),e._v(" "),r("hr"),e._v(" "),r("div",{staticClass:"box"},[r("div",{staticClass:"is-size-6 has-text-weight-bold"},[e._v("Covid Preparedness")]),e._v(" "),r("hr"),e._v(" "),r("div",{staticClass:"field"},[r("label",{attrs:{for:""}},[e._v("Awareness amoung staff?")]),e._v(" "),r("div",{staticClass:"control"},[r("b-field",[r("b-radio-button",{attrs:{"native-value":"No",type:"is-danger"},model:{value:e.form.preparedness.awareness,callback:function(t){e.$set(e.form.preparedness,"awareness",t)},expression:"form.preparedness.awareness"}},[r("b-icon",{attrs:{icon:"close"}}),e._v(" "),r("span",[e._v("No")])],1),e._v(" "),r("b-radio-button",{attrs:{"native-value":"Yes",type:"is-success"},model:{value:e.form.preparedness.awareness,callback:function(t){e.$set(e.form.preparedness,"awareness",t)},expression:"form.preparedness.awareness"}},[r("b-icon",{attrs:{icon:"check"}}),e._v(" "),r("span",[e._v("Yes")])],1),e._v(" "),r("b-radio-button",{attrs:{"native-value":"not sure",type:"is-warning"},model:{value:e.form.preparedness.awareness,callback:function(t){e.$set(e.form.preparedness,"awareness",t)},expression:"form.preparedness.awareness"}},[e._v("\n                Not Sure\n            ")])],1)],1)]),e._v(" "),r("div",{staticClass:"field"},[r("label",{attrs:{for:""}},[e._v("Staff Trained?")]),e._v(" "),r("div",{staticClass:"control"},[r("b-field",[r("b-radio-button",{attrs:{"native-value":"No",type:"is-danger"},model:{value:e.form.preparedness.trained,callback:function(t){e.$set(e.form.preparedness,"trained",t)},expression:"form.preparedness.trained"}},[r("b-icon",{attrs:{icon:"close"}}),e._v(" "),r("span",[e._v("No")])],1),e._v(" "),r("b-radio-button",{attrs:{"native-value":"Yes",type:"is-success"},model:{value:e.form.preparedness.trained,callback:function(t){e.$set(e.form.preparedness,"trained",t)},expression:"form.preparedness.trained"}},[r("b-icon",{attrs:{icon:"check"}}),e._v(" "),r("span",[e._v("Yes")])],1),e._v(" "),r("b-radio-button",{attrs:{"native-value":"not sure",type:"is-warning"},model:{value:e.form.preparedness.trained,callback:function(t){e.$set(e.form.preparedness,"trained",t)},expression:"form.preparedness.trained"}},[e._v("\n                Not Sure\n            ")])],1)],1)]),e._v(" "),r("div",{staticClass:"field"},[r("label",{attrs:{for:""}},[e._v("Safety Gears?")]),e._v(" "),r("div",{staticClass:"control"},[r("b-field",[r("b-radio-button",{attrs:{"native-value":"No",type:"is-danger"},model:{value:e.form.preparedness.safety,callback:function(t){e.$set(e.form.preparedness,"safety",t)},expression:"form.preparedness.safety"}},[r("b-icon",{attrs:{icon:"close"}}),e._v(" "),r("span",[e._v("No")])],1),e._v(" "),r("b-radio-button",{attrs:{"native-value":"Yes",type:"is-success"},model:{value:e.form.preparedness.safety,callback:function(t){e.$set(e.form.preparedness,"safety",t)},expression:"form.preparedness.safety"}},[r("b-icon",{attrs:{icon:"check"}}),e._v(" "),r("span",[e._v("Yes")])],1),e._v(" "),r("b-radio-button",{attrs:{"native-value":"not sure",type:"is-warning"},model:{value:e.form.preparedness.safety,callback:function(t){e.$set(e.form.preparedness,"safety",t)},expression:"form.preparedness.safety"}},[e._v("\n                Not Sure\n            ")])],1)],1)]),e._v(" "),r("div",{staticClass:"field"},[r("label",{attrs:{for:""}},[e._v("Sanitization")]),e._v(" "),r("div",{staticClass:"control"},[r("b-field",[r("b-radio-button",{attrs:{"native-value":"No",type:"is-danger"},model:{value:e.form.preparedness.sanitization,callback:function(t){e.$set(e.form.preparedness,"sanitization",t)},expression:"form.preparedness.sanitization"}},[r("b-icon",{attrs:{icon:"close"}}),e._v(" "),r("span",[e._v("No")])],1),e._v(" "),r("b-radio-button",{attrs:{"native-value":"Yes",type:"is-success"},model:{value:e.form.preparedness.sanitization,callback:function(t){e.$set(e.form.preparedness,"sanitization",t)},expression:"form.preparedness.sanitization"}},[r("b-icon",{attrs:{icon:"check"}}),e._v(" "),r("span",[e._v("Yes")])],1),e._v(" "),r("b-radio-button",{attrs:{"native-value":"not sure",type:"is-warning"},model:{value:e.form.preparedness.sanitization,callback:function(t){e.$set(e.form.preparedness,"sanitization",t)},expression:"form.preparedness.sanitization"}},[e._v("\n                Not Sure\n            ")])],1)],1)]),e._v(" "),r("div",{staticClass:"field"},[r("label",{attrs:{for:""}},[e._v("Thermal Screening / Other Measures")]),e._v(" "),r("div",{staticClass:"control"},[r("b-field",[r("b-radio-button",{attrs:{"native-value":"No",type:"is-danger"},model:{value:e.form.preparedness.measures,callback:function(t){e.$set(e.form.preparedness,"measures",t)},expression:"form.preparedness.measures"}},[r("b-icon",{attrs:{icon:"close"}}),e._v(" "),r("span",[e._v("No")])],1),e._v(" "),r("b-radio-button",{attrs:{"native-value":"Yes",type:"is-success"},model:{value:e.form.preparedness.measures,callback:function(t){e.$set(e.form.preparedness,"measures",t)},expression:"form.preparedness.measures"}},[r("b-icon",{attrs:{icon:"check"}}),e._v(" "),r("span",[e._v("Yes")])],1),e._v(" "),r("b-radio-button",{attrs:{"native-value":"not sure",type:"is-warning"},model:{value:e.form.preparedness.measures,callback:function(t){e.$set(e.form.preparedness,"measures",t)},expression:"form.preparedness.measures"}},[e._v("\n                Not Sure\n            ")])],1)],1)])]),e._v(" "),r("hr"),e._v(" "),r("div",{staticClass:"box"},[r("div",{staticClass:"is-size-6 has-text-weight-bold"},[e._v("Specialties")]),e._v(" "),r("hr"),e._v(" "),r("div",{staticClass:"field"},[r("label",{attrs:{for:""}},[e._v("What Specialties does this hospital has?")]),e._v(" "),r("div",{staticClass:"control"},[r("b-taginput",{attrs:{data:e.tags,autocomplete:"","allow-new":!0,"open-on-focus":!0,ellipsis:"",icon:"label",placeholder:"Add a speciality"},model:{value:e.form.specialties,callback:function(t){e.$set(e.form,"specialties",t)},expression:"form.specialties"}})],1)]),e._v(" "),r("div",{staticClass:"field"},[r("label",{attrs:{for:""}},[e._v("Contact Name")]),e._v(" "),r("div",{staticClass:"control"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.form.contact.name,expression:"form.contact.name"}],staticClass:"input",attrs:{type:"text",required:""},domProps:{value:e.form.contact.name},on:{input:function(t){t.target.composing||e.$set(e.form.contact,"name",t.target.value)}}})])]),e._v(" "),r("div",{staticClass:"field"},[r("label",{attrs:{for:""}},[e._v("Contact Number")]),e._v(" "),r("div",{staticClass:"control"},[r("b-taginput",{attrs:{"allow-new":!0,"open-on-focus":!0,icon:"phone",placeholder:"Add a number"},model:{value:e.form.contact.number,callback:function(t){e.$set(e.form.contact,"number",t)},expression:"form.contact.number"}})],1)]),e._v(" "),r("div",{staticClass:"field"},[r("label",{attrs:{for:""}},[e._v("Password")]),e._v(" "),r("div",{staticClass:"control"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.form.password,expression:"form.password"}],staticClass:"input",attrs:{type:"text",required:""},domProps:{value:e.form.password},on:{input:function(t){t.target.composing||e.$set(e.form,"password",t.target.value)}}})])])]),e._v(" "),r("input",{staticClass:"button is-info has-text-weight-bold is-fullwidth",attrs:{type:"submit",value:"Publish"}})]):e._e()])}),[],!1,null,null,null);t.default=component.exports}}]);