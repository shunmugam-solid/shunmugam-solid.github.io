"use strict";(self["webpackChunkSolid"]=self["webpackChunkSolid"]||[]).push([[2768],{2768:function(e,s,t){t.r(s),t.d(s,{default:function(){return m}});var a=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"widgetContainer"},[t("div",{staticClass:"navigationHeader"},[t("div",{staticClass:"navigationHeader__inner"},[t("span",{staticClass:"icon-Arrow-big-left cancel",on:{click:e.drawerBack}}),t("p",{staticClass:"title"},[e._v(" "+e._s(e.$t("editAddress"))+" ")]),t("span",{staticClass:"el-icon-close",on:{click:e.drawerClose}})])]),t("div",{staticClass:"widgetContainer__body"},[t("el-form",{ref:"personAddress",staticClass:"wise-form",attrs:{model:e.formData,rules:e.formRules}},[t("div",{staticClass:"el-input--full-width el-input"},[t("el-form-item",{staticClass:"is-no-asterisk",attrs:{prop:"address.line1",rules:e.formRules.line1,label:e.$t("address_1")}},[t("el-input",{staticStyle:{display:"none"}}),t("el-input",{staticStyle:{display:"none"},model:{value:e.formData.address.line1,callback:function(s){e.$set(e.formData.address,"line1",s)},expression:"formData.address.line1"}}),t("div",{staticClass:"el-input"},[t("gmap-autocomplete",{staticClass:"el-input__inner",attrs:{placeholder:e.$t("address_1"),autocomplete:"disabled",value:e.formData.address.line1,options:{componentRestrictions:{country:e.country}},"select-first-on-enter":!0},on:{place_changed:function(s){return e.updateAddress(s)}},nativeOn:{change:function(s){e.formData.address.line1=s.target.value}}})],1)],1)],1),t("el-form-item",{attrs:{prop:"address.line2",label:e.$t("address_2")}},[t("el-input",{attrs:{placeholder:e.$t("address_2")},model:{value:e.formData.address.line2,callback:function(s){e.$set(e.formData.address,"line2",s)},expression:"formData.address.line2"}})],1),t("div",{staticClass:"wise-form__inline"},[t("el-form-item",{staticClass:"is-no-asterisk",attrs:{prop:"address.city",rules:e.formRules.city,label:e.$t("address_City")}},[t("el-input",{staticStyle:{flex:"2"},attrs:{placeholder:e.$t("address_City")},model:{value:e.formData.address.city,callback:function(s){e.$set(e.formData.address,"city",s)},expression:"formData.address.city"}})],1),t("el-form-item",{staticClass:"is-no-asterisk",attrs:{prop:"address.country",rules:e.formRules.state,label:e.$t("address_State")}},[t("el-input",{staticStyle:{flex:"1"},attrs:{placeholder:e.$t("address_State")},model:{value:e.formData.address.state,callback:function(s){e.$set(e.formData.address,"state",s)},expression:"formData.address.state"}})],1),t("el-form-item",{staticClass:"is-no-asterisk",attrs:{prop:"address.postalCode",rules:e.formRules.postalCode,label:e.$t("address_Zipcode")}},[t("el-input",{staticStyle:{flex:"1"},attrs:{placeholder:e.$t("address_Zipcode")},model:{value:e.formData.address.postalCode,callback:function(s){e.$set(e.formData.address,"postalCode",s)},expression:"formData.address.postalCode"}})],1)],1)],1)],1),t("div",{staticClass:"el-drawer__footer el-drawer__footer--multiple-buttons"},[t("el-button",{staticClass:"width-50",on:{click:e.drawerBack}},[e._v(" "+e._s(e.$t("cancel"))+" ")]),t("el-button",{staticClass:"width-50 el-button__brand brand",attrs:{type:"primary"},on:{click:function(s){return e.next()}}},[e._v(" "+e._s(e.$t("confirm"))+" ")])],1)])},i=[],l=t(7041),r=t(629),o=t(9896),d={name:"EditBusinessAddress",data(){return{formData:{address:{line1:null,line2:null,city:null,postalCode:null,country:"US",addressType:"mailing",state:null}},formRules:{line1:[{required:!0,message:"Address 1 is required"}],city:[{required:!1}],state:[{required:!1}],postalCode:[{required:!0,message:"Zip Code is required"}]}}},computed:{...(0,r.Se)("user",["getPersonDetails"]),...(0,r.Se)("kyb",["getSelectedBusiness"]),isFormValid(){let e="";e=!this.formRules.city[0].required||this.formData.address.city;let s="";return s=!this.formRules.city[0].required||this.formData.address.state,!(this.formData.address.line1&&e&&s&&this.formData.address.postalCode)},country(){const e=this.getPersonDetails,s=(0,o.em)(e.phone);return s&&s.code?s.code:"US"}},created(){const e=this.getSelectedBusiness;if(e&&e.id){const s=this.country;if(this.setCityStateRequired(s),e.address){const{line1:t,line2:a,city:i,postalCode:l,state:r}=e.address;this.formData.address={line1:t,line2:a,city:i,postalCode:l,country:s,addressType:"legal",state:r}}}else{const e=this.showLoader();this.listAllBusiness().then((e=>{if(0!==e.total){const s=e.data;this.setSelectedBusiness(s[0])}})).catch((e=>{console.log(e),this.apiErrorMessage(e)})).finally((()=>{e.close()}))}},methods:{...(0,r.nv)("kyb",["updateBusiness","listAllBusiness"]),...(0,r.OI)("kyb",["setSelectedBusiness"]),setCityStateRequired(e){"US"===e&&(this.formRules.city=[{required:!0,message:"City is required"}],this.formRules.state=[{required:!0,message:"State is required"}])},updateAddress(e){const s=(0,l.A)(e);this.formData.address=s},next(){this.$refs.personAddress.validate((e=>{if(!e)return;const s={...this.getSelectedBusiness},{id:t,legalName:a,entityType:i,dba:l,idNumber:r,idType:o}=s,{line1:d,line2:n,city:c,postalCode:u,state:m}=this.formData.address,p=this.country,f={businessId:t,business:{legalName:a,entityType:i,dba:l,idNumber:r,idType:o,address:{line1:d,line2:n,city:c,postalCode:u,country:p,addressType:"legal",state:m}}},y=this.showLoader();this.updateBusiness(f).then((e=>{this.setSelectedBusiness(e),setTimeout((()=>{this.drawerBack()}),0)})).catch((e=>{console.log(e),this.apiErrorMessage(e)})).finally((()=>{y.close()}))}))}},watch:{country:function(e){this.setCityStateRequired(e)}}},n=d,c=t(3736),u=(0,c.Z)(n,a,i,!1,null,null,null),m=u.exports},7041:function(e,s,t){t.d(s,{A:function(){return a}});const a=e=>{const{address_components:s,geometry:t}=e;let a={};const l=s,r=i(l,"premise"),o=i(l,"street_number"),d=i(l,"route");let n=i(l,"locality"),c=i(l,"sublocality_level_1");const u=i(l,"postal_town"),m=i(l,"administrative_area_level_1"),p=i(l,"country"),f=i(l,"postal_code"),y=i(l,"neighborhood"),h=[o,r,d];return n||(n=u||c),a.line1=h.filter((e=>e)).map((e=>e.long_name)).join(" "),a.line2=y?y.long_name:null,a.city=n?n.long_name:null,a.postalCode=f?f.long_name:null,a.state=m?m.short_name:null,a.country=p?p.short_name:null,a.latitude=t.location.lat(),a.longitude=t.location.lng(),a},i=(e,s)=>e.find((e=>e.types.includes(s)))}}]);
//# sourceMappingURL=2768.1689578132275.js.map