"use strict";(self["webpackChunkSolid"]=self["webpackChunkSolid"]||[]).push([[5749],{7522:function(e,t,a){a.r(t),a.d(t,{default:function(){return m}});var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"widgetContainer bg-white widgetContainer--scrollable billingAddress"},[a("div",{staticClass:"navigationHeader"},[a("div",{staticClass:"navigationHeader__inner"},[a("p",{staticClass:"title"},[e._v(" "+e._s(e.$t(e.getCreateCardData.id?"physical"===e.getCreateCardData.cardType?"physicalCard_edit_NavTitle":"virtualCard_edit_NavTitle":"physical"===e.getCreateCardData.cardType?"physicalCard_Create_NavTitle":"virtualCard_Create_NavTitle"))+" ")]),a("span",{staticClass:"el-icon-close cancel",on:{click:e.drawerClose}})])]),a("div",{staticClass:"widgetContainer__body"},[a("el-form",{ref:"personAddress",staticClass:"wise-form",attrs:{model:e.formData,rules:e.formRules}},[a("div",{staticClass:"el-input--full-width el-input"},[a("p",{staticClass:"wise-form__header"},[e._v(" "+e._s(e.$t("card_BillingAddress_HeaderTitle"))+" ")]),"physical"===e.getCreateCardData.cardType?a("div",{staticClass:"sameAddress"},[a("p",[e._v(e._s(e.$t("card_BillingAddress_HeaderDesc")))]),a("el-switch",{attrs:{"active-color":"var(--branding)","inactive-color":"#dfdfe4"},model:{value:e.sameAddress,callback:function(t){e.sameAddress=t},expression:"sameAddress"}})],1):e._e(),"physical"===e.getCreateCardData.cardType?a("p",{staticClass:"wise-form__header"},[e._v(" "+e._s(e.$t("card_ShippingAddress_HeaderTitle"))+" ")]):e._e(),a("el-form-item",{staticClass:"is-no-asterisk",attrs:{prop:"address.line1",rules:e.formRules.line1,label:e.$t("address_1")}},[a("el-input",{staticStyle:{display:"none"}}),a("el-input",{staticStyle:{display:"none"},model:{value:e.formData.address.line1,callback:function(t){e.$set(e.formData.address,"line1",t)},expression:"formData.address.line1"}}),a("div",{staticClass:"el-input"},[a("gmap-autocomplete",{staticClass:"el-input__inner",attrs:{placeholder:e.$t("address_1"),autocomplete:"disabled",value:e.formData.address.line1,options:{componentRestrictions:{country:e.country}},"select-first-on-enter":!0},on:{place_changed:function(t){return e.updateAddress(t)}},nativeOn:{change:function(t){e.formData.address.line1=t.target.value}}})],1)],1)],1),a("el-form-item",{attrs:{prop:"address.line2",label:e.$t("address_2")}},[a("el-input",{attrs:{placeholder:e.$t("address_2")},model:{value:e.formData.address.line2,callback:function(t){e.$set(e.formData.address,"line2",t)},expression:"formData.address.line2"}})],1),a("div",{staticClass:"wise-form__inline"},[a("el-form-item",{staticClass:"is-no-asterisk",attrs:{prop:"address.city",rules:e.formRules.city,label:e.$t("address_City")}},[a("el-input",{staticStyle:{flex:"2"},attrs:{placeholder:e.$t("address_City")},model:{value:e.formData.address.city,callback:function(t){e.$set(e.formData.address,"city",t)},expression:"formData.address.city"}})],1),a("el-form-item",{staticClass:"is-no-asterisk",attrs:{prop:"address.country",rules:e.formRules.state,label:e.$t("address_State")}},[a("el-input",{staticStyle:{flex:"1"},attrs:{placeholder:e.$t("address_State")},model:{value:e.formData.address.state,callback:function(t){e.$set(e.formData.address,"state",t)},expression:"formData.address.state"}})],1),a("el-form-item",{staticClass:"is-no-asterisk",attrs:{prop:"address.postalCode",rules:e.formRules.postalCode,label:e.$t("address_Zipcode")}},[a("el-input",{staticStyle:{flex:"1"},attrs:{placeholder:e.$t("address_Zipcode")},model:{value:e.formData.address.postalCode,callback:function(t){e.$set(e.formData.address,"postalCode",t)},expression:"formData.address.postalCode"}})],1)],1)],1)],1),a("div",{staticClass:"el-drawer__footer"},[a("el-button",{staticClass:"el-button__brand brand width-100",attrs:{"data-testid":"submit",type:"primary",disabled:e.isFormValid},on:{click:e.next}},[e._v(" "+e._s(e.$t("done"))+" ")])],1)])},r=[],i=a(7041),d=a(629),l=a(9896),o=a(8663),n={name:"ContactAddressForm",mixins:[o.Z],data(){return{formData:{address:{line1:null,line2:null,city:null,postalCode:null,country:"US",addressType:"billing",state:null}},sameAddress:!0,formRules:{line1:[{required:!0,message:"Address 1 is required"}],city:[{required:!0,message:"City is required"}],state:[{required:!0,message:"State is required"}],postalCode:[{required:!0,message:"Zip Code is required"}]}}},computed:{...(0,d.Se)("user",["getPersonDetails"]),...(0,d.Se)("card",["getCreateCardData"]),isFormValid(){return!(this.formData.address.line1&&this.formData.address.city&&this.formData.address.postalCode)},country(){if("physical"===this.getCreateCardData.cardType)return"US";const e=this.getPersonDetails,t=(0,l.em)(e.phone);return t&&t.code?t.code:"US"}},created(){const e=this.getCreateCardData;if(e&&e.id&&e.billingAddress){const{line1:t,line2:a,city:s,postalCode:r,state:i}=e.address,d=this.country;this.formData.address={line1:t,line2:a,city:s,postalCode:r,country:d,addressType:"billing",state:i}}},methods:{...(0,d.OI)("card",["updateCreateCardData"]),...(0,d.nv)("card",["createCard"]),updateAddress(e){const t=(0,i.A)(e);this.formData.address=t},next(){this.$refs.personAddress.validate((e=>{if(!e)return;const t={...this.getCreateCardData},{line1:a,line2:s,city:r,postalCode:i,state:d}=this.formData.address,l=this.country,o={...t,billingAddress:{line1:a,line2:s,city:r,postalCode:i,country:l,addressType:"billing",state:d}};"physical"===t.cardType?!0===this.sameAddress?(o.shipping={shippingAddress:o.billingAddress},this.update(o)):(this.updateCreateCardData(o),setTimeout((()=>{this.drawerPush("CardShippingAddressForm")}),0)):this.update(o)}))},update(e){this.updateCreateCardData(e);const t=this.showLoader();this.createCard(e).then((()=>{this.drawerPush("CreatedSuccess")})).catch((e=>{console.log(e),this.apiErrorMessage(e)})).finally((()=>{t.close()}))},cancel(){this.drawerClose()}}},c=n,u=a(3736),p=(0,u.Z)(c,s,r,!1,null,"2a140fd4",null),m=p.exports},7041:function(e,t,a){a.d(t,{A:function(){return s}});const s=e=>{const{address_components:t,geometry:a}=e;let s={};const i=t,d=r(i,"premise"),l=r(i,"street_number"),o=r(i,"route");let n=r(i,"locality"),c=r(i,"sublocality_level_1");const u=r(i,"postal_town"),p=r(i,"administrative_area_level_1"),m=r(i,"country"),C=r(i,"postal_code"),f=r(i,"neighborhood"),_=[l,d,o];return n||(n=u||c),s.line1=_.filter((e=>e)).map((e=>e.long_name)).join(" "),s.line2=f?f.long_name:null,s.city=n?n.long_name:null,s.postalCode=C?C.long_name:null,s.state=p?p.short_name:null,s.country=m?m.short_name:null,s.latitude=a.location.lat(),s.longitude=a.location.lng(),s},r=(e,t)=>e.find((e=>e.types.includes(t)))}}]);
//# sourceMappingURL=5749.1689578132275.js.map