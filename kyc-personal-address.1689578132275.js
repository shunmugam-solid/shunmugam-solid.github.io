"use strict";(self["webpackChunkSolid"]=self["webpackChunkSolid"]||[]).push([[8458],{7124:function(e,t,s){s.r(t),s.d(t,{default:function(){return m}});var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"widgetContainer widgetContainer--center widgetContainer--scrollable personAddress"},[s("div",{staticClass:"navigationHeader"},[s("div",{staticClass:"navigationHeader__inner"},[s("span",{staticClass:"icon-Arrow-big-left cancel",on:{click:e.goToPreviousScreen}}),s("p",{staticClass:"title"},[e._v(" "+e._s(e.$t("kyc_address_NavTitle"))+" ")])])]),s("div",{staticClass:"widgetContainer__body"},[s("el-form",{ref:"personAddress",staticClass:"wise-form",attrs:{model:e.formData,rules:e.formRules}},[s("div",{staticClass:"el-input--full-width el-input"},[s("el-form-item",{staticClass:"is-no-asterisk",attrs:{prop:"address.line1",rules:e.formRules.line1,label:e.$t("address_1")}},[s("el-input",{staticStyle:{display:"none"}}),s("el-input",{staticStyle:{display:"none"},model:{value:e.formData.address.line1,callback:function(t){e.$set(e.formData.address,"line1",t)},expression:"formData.address.line1"}}),s("div",{staticClass:"el-input"},[s("gmap-autocomplete",{staticClass:"el-input__inner",attrs:{placeholder:e.$t("address_1"),autocomplete:"disabled",value:e.formData.address.line1,options:{componentRestrictions:{country:e.country}},"select-first-on-enter":!0},on:{place_changed:function(t){return e.updateAddress(t)}},nativeOn:{change:function(t){e.formData.address.line1=t.target.value}}})],1)],1)],1),s("el-form-item",{attrs:{prop:"address.line2",label:e.$t("address_2")}},[s("el-input",{attrs:{placeholder:e.$t("address_2")},model:{value:e.formData.address.line2,callback:function(t){e.$set(e.formData.address,"line2",t)},expression:"formData.address.line2"}})],1),s("div",{staticClass:"wise-form__inline"},[s("el-form-item",{staticClass:"is-no-asterisk",attrs:{prop:"address.city",rules:e.formRules.city,label:e.$t("address_City")}},[s("el-input",{staticStyle:{flex:"2"},attrs:{placeholder:e.$t("address_City")},model:{value:e.formData.address.city,callback:function(t){e.$set(e.formData.address,"city",t)},expression:"formData.address.city"}})],1),s("el-form-item",{staticClass:"is-no-asterisk",attrs:{prop:"address.country",rules:e.formRules.state,label:e.$t("address_State")}},[s("el-input",{staticStyle:{flex:"1"},attrs:{placeholder:e.$t("address_State")},model:{value:e.formData.address.state,callback:function(t){e.$set(e.formData.address,"state",t)},expression:"formData.address.state"}})],1),s("el-form-item",{staticClass:"is-no-asterisk",attrs:{prop:"address.postalCode",rules:e.formRules.postalCode,label:e.$t("address_Zipcode")}},[s("el-input",{staticStyle:{flex:"1"},attrs:{placeholder:e.$t("address_Zipcode")},model:{value:e.formData.address.postalCode,callback:function(t){e.$set(e.formData.address,"postalCode",t)},expression:"formData.address.postalCode"}})],1)],1)],1),s("div",{staticClass:"widgetContainer__footer--fixed"},[s("el-button",{staticClass:"el-button__brand brand",attrs:{type:"primary",disabled:e.isFormValid},on:{click:function(t){return e.next()}}},[e._v(" "+e._s(e.$t("kyc_NavRightButton_Title"))+" ")])],1)],1)])},r=[],i=s(7041),l=s(629),o=s(5545),n=s(9896),d={name:"PersonAddress",mixins:[o.Z],data(){return{formData:{address:{line1:null,line2:null,city:null,postalCode:null,country:"US",addressType:"mailing",state:null}},formRules:{line1:[{required:!0,message:"Address 1 is required"}],city:[{required:!1}],state:[{required:!1}],postalCode:[{required:!0,message:"Zip Code is required"}]}}},computed:{...(0,l.Se)("user",["getPersonDetails"]),isFormValid(){let e="";e=!this.formRules.city[0].required||this.formData.address.city;let t="";return t=!this.formRules.city[0].required||this.formData.address.state,!(this.formData.address.line1&&e&&t&&this.formData.address.postalCode)},country(){const e=this.getPersonDetails,t=(0,n.em)(e.phone);return t&&t.code?t.code:"US"}},created(){const e=this.getPersonDetails;if(e&&e.id){const t=this.country;if(this.setCityStateRequired(t),e.address){const{line1:s,line2:a,city:r,postalCode:i,state:l}=e.address;this.formData.address={line1:s,line2:a,city:r,postalCode:i,country:t,addressType:"mailing",state:l}}}},methods:{...(0,l.nv)("user",["updatePerson"]),setCityStateRequired(e){"US"===e&&(this.formRules.city=[{required:!0,message:"City is required"}],this.formRules.state=[{required:!0,message:"State is required"}])},updateAddress(e){const t=(0,i.A)(e);this.formData.address=t},next(){this.$refs.personAddress.validate((e=>{if(!e)return;const t={...this.getPersonDetails},{line1:s,line2:a,city:r,postalCode:i,state:l}=this.formData.address,o=this.country,n={personId:t.id,person:{address:{line1:s,line2:a,city:r,postalCode:i,country:o,addressType:"mailing",state:l}}},d=this.showLoader();this.updatePerson(n).then((()=>{this.$router.push("/kyc/verify")})).catch((e=>{console.log(e),this.apiErrorMessage(e)})).finally((()=>{d.close()}))}))}},watch:{country:function(e){this.setCityStateRequired(e)}}},c=d,u=s(3736),p=(0,u.Z)(c,a,r,!1,null,null,null),m=p.exports},5545:function(e,t,s){var a=s(629);t["Z"]={methods:{...(0,a.OI)(["updateLogoutPopupStatus"]),...(0,a.nv)("user",["logout"]),logoutAndRedirect(){this.updateLogoutPopupStatus(!0)}}}},7041:function(e,t,s){s.d(t,{A:function(){return a}});const a=e=>{const{address_components:t,geometry:s}=e;let a={};const i=t,l=r(i,"premise"),o=r(i,"street_number"),n=r(i,"route");let d=r(i,"locality"),c=r(i,"sublocality_level_1");const u=r(i,"postal_town"),p=r(i,"administrative_area_level_1"),m=r(i,"country"),f=r(i,"postal_code"),y=r(i,"neighborhood"),h=[o,l,n];return d||(d=u||c),a.line1=h.filter((e=>e)).map((e=>e.long_name)).join(" "),a.line2=y?y.long_name:null,a.city=d?d.long_name:null,a.postalCode=f?f.long_name:null,a.state=p?p.short_name:null,a.country=m?m.short_name:null,a.latitude=s.location.lat(),a.longitude=s.location.lng(),a},r=(e,t)=>e.find((e=>e.types.includes(t)))}}]);
//# sourceMappingURL=kyc-personal-address.1689578132275.js.map