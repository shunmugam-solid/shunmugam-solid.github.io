(self["webpackChunkSolid"]=self["webpackChunkSolid"]||[]).push([[1358],{1548:function(e,t,n){"use strict";n.d(t,{Z:function(){return d}});var s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"el-input"},[n("the-mask",{ref:"ssnNumber",staticClass:"el-input__inner",attrs:{mask:e.mask,autocomplete:"off",name:"ssn",masked:!0,value:e.value},nativeOn:{input:function(t){return e.updateInput(t)}}})],1)},r=[],i=n(9896),a=n(2982),o={name:"SSNInput",components:{TheMask:a.TheMask},props:{value:{type:String,default:""},idType:{type:String,default:"ssn"},autofocus:{type:Boolean,default:!1},isLast4:{type:Boolean,default:!1},country:{type:String,default:"US"}},mounted(){this.autofocus&&this.$refs.ssnNumber.$el.focus()},computed:{selectedCountry(){const e=(0,i.oE)();return e.find((e=>e.code===this.country))},selectedDocumentType(){const e=(0,i.Qj)(),t=this.idType||"ssn";return e.find((e=>e.type===t))},mask(){const e=this.selectedDocumentType;return this.isLast4?"XXXX":e.full}},methods:{updateInput(e){let t=e.target.value;if(t){const e=Array.isArray(this.mask)?this.mask.map((e=>e.length)):[this.mask.length],n={rawValue:t,value:t.replace(/[^0-9a-zA-Z]/g,""),isValid:e.includes(t.length),country:this.selectedCountry,documentType:this.selectedDocumentType};this.$emit("input",n)}else this.$emit("input",null)}}},u=o,c=n(3736),l=(0,c.Z)(u,s,r,!1,null,"5d46ea55",null),d=l.exports},5712:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return p}});var s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"widgetContainer widgetContainer--center widgetContainer--scrollable bg-white login"},[n("div",{staticClass:"navigationHeader"},[n("div",{staticClass:"navigationHeader__inner"},[n("span",{staticClass:"icon-Arrow-big-left cancel",on:{click:e.goToPreviousScreen}}),n("p",{staticClass:"title"},[e._v(" "+e._s(e.$t("ssn_NavTitle"))+" ")])])]),n("div",{staticClass:"widgetContainer__body"},[n("el-form",{ref:"user",staticClass:"wise-form",attrs:{model:e.user,rules:e.rules},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.submitForm()},submit:function(e){e.preventDefault()}}},[n("el-form-item",{attrs:{prop:"otp",label:e.$t("ssn_Title")}},[n("SSNInput",{attrs:{"is-last4":!0,autofocus:!0,country:e.countryCode},on:{input:e.ssnChange}})],1),n("p",{staticClass:"wise-form__info"},[e._v(" "+e._s(e.$t("ssn_Desc"))+" ")])],1),n("div",{staticClass:"widgetContainer__footer--fixed"},[n("el-button",{staticClass:"el-button__brand brand",attrs:{type:"primary",disabled:e.isDisabled},on:{click:function(t){return e.submitForm()}}},[e._v(" "+e._s(e.$t("ssn_NavRightButton_Title"))+" ")])],1)],1)])},r=[],i=n(1548),a=n(629),o=n(2424),u=n(9896),c={name:"Login",mixins:[o.Z],components:{SSNInput:i.Z},computed:{...(0,a.Se)("user",["getUserDetails"]),isDisabled(){return!this.user.ssn||4!=this.user.ssn.length},selectedCountry(){const e=(0,u.oE)();return e.find((e=>e.code===this.countryCode))}},data(){return{user:{ssn:""},rules:{ssn:"required"},countryCode:"US"}},created(){const e=this.getUserDetails;if(e&&e.phone)if(e.idNumberLast4Required){const t=(0,u.em)(e.phone);t&&t.code&&(this.countryCode=t.code)}else this.goToWelcomeScreen();else this.goToWelcomeScreen()},methods:{...(0,a.nv)("user",["verifyOtp","getPerson"]),submitForm(){if(this.isDisabled)return;const e=this.getUserDetails;if(e&&e.phone){const t=this.showLoader(),n=(0,u._7)("programCode"),s={otp:e.otp,idNumberLast4:this.user.ssn};n&&!0===e.programCodeRequired&&(s.programCode=n),this.verifyOtp(s).then((e=>{setTimeout((()=>{console.log(e);const t=this.showLoader();this.getPerson().then((()=>{setTimeout((()=>{this.loginSuccess()}),0)})).catch((e=>{console.log(e),this.apiErrorMessage(e)})).finally((()=>{t.close()}))}),0)})).catch((e=>{console.log(e),this.apiErrorMessage(e)})).finally((()=>{t.close()}))}},ssnChange(e){this.user.ssn=e.value}}},l=c,d=n(3736),f=(0,d.Z)(l,s,r,!1,null,null,null),p=f.exports},2982:function(e){(function(t,n){e.exports=n()})(0,(function(){return function(e){function t(s){if(n[s])return n[s].exports;var r=n[s]={i:s,l:!1,exports:{}};return e[s].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var n={};return t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,s){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:s})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p=".",t(t.s=10)}([function(e,t){e.exports={"#":{pattern:/\d/},X:{pattern:/[0-9a-zA-Z]/},S:{pattern:/[a-zA-Z]/},A:{pattern:/[a-zA-Z]/,transform:function(e){return e.toLocaleUpperCase()}},a:{pattern:/[a-zA-Z]/,transform:function(e){return e.toLocaleLowerCase()}},"!":{escape:!0}}},function(e,t,n){"use strict";function s(e){var t=document.createEvent("Event");return t.initEvent(e,!0,!0),t}var r=n(2),i=n(0),a=n.n(i);t.a=function(e,t){var i=t.value;if((Array.isArray(i)||"string"==typeof i)&&(i={mask:i,tokens:a.a}),"INPUT"!==e.tagName.toLocaleUpperCase()){var o=e.getElementsByTagName("input");if(1!==o.length)throw new Error("v-mask directive requires 1 input, found "+o.length);e=o[0]}e.oninput=function(t){if(t.isTrusted){var a=e.selectionEnd,o=e.value[a-1];for(e.value=n.i(r.a)(e.value,i.mask,!0,i.tokens);a<e.value.length&&e.value.charAt(a-1)!==o;)a++;e===document.activeElement&&(e.setSelectionRange(a,a),setTimeout((function(){e.setSelectionRange(a,a)}),0)),e.dispatchEvent(s("input"))}};var u=n.i(r.a)(e.value,i.mask,!0,i.tokens);u!==e.value&&(e.value=u,e.dispatchEvent(s("input")))}},function(e,t,n){"use strict";var s=n(6),r=n(5);t.a=function(e,t){var i=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],a=arguments[3];return Array.isArray(t)?n.i(r.a)(s.a,t,a)(e,t,i,a):n.i(s.a)(e,t,i,a)}},function(e,t,n){"use strict";function s(e){e.component(u.a.name,u.a),e.directive("mask",a.a)}Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),i=n.n(r),a=n(1),o=n(7),u=n.n(o);n.d(t,"TheMask",(function(){return u.a})),n.d(t,"mask",(function(){return a.a})),n.d(t,"tokens",(function(){return i.a})),n.d(t,"version",(function(){return c}));var c="0.11.1";t.default=s,"undefined"!=typeof window&&window.Vue&&window.Vue.use(s)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=n(1),r=n(0),i=n.n(r),a=n(2);t.default={name:"TheMask",props:{value:[String,Number],mask:{type:[String,Array],required:!0},masked:{type:Boolean,default:!1},tokens:{type:Object,default:function(){return i.a}}},directives:{mask:s.a},data:function(){return{lastValue:null,display:this.value}},watch:{value:function(e){e!==this.lastValue&&(this.display=e)},masked:function(){this.refresh(this.display)}},computed:{config:function(){return{mask:this.mask,tokens:this.tokens,masked:this.masked}}},methods:{onInput:function(e){e.isTrusted||this.refresh(e.target.value)},refresh:function(e){this.display=e;e=n.i(a.a)(e,this.mask,this.masked,this.tokens);e!==this.lastValue&&(this.lastValue=e,this.$emit("input",e))}}}},function(e,t,n){"use strict";function s(e,t,n){return t=t.sort((function(e,t){return e.length-t.length})),function(s,r){for(var i=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],a=0;a<t.length;){var o=t[a];a++;var u=t[a];if(!(u&&e(s,u,!0,n).length>o.length))return e(s,o,i,n)}return""}}t.a=s},function(e,t,n){"use strict";function s(e,t){var n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],s=arguments[3];e=e||"",t=t||"";for(var r=0,i=0,a="";r<t.length&&i<e.length;){var o=t[r],u=s[o],c=e[i];u&&!u.escape?(u.pattern.test(c)&&(a+=u.transform?u.transform(c):c,r++),i++):(u&&u.escape&&(r++,o=t[r]),n&&(a+=o),c===o&&i++,r++)}for(var l="";r<t.length&&n;){o=t[r];if(s[o]){l="";break}l+=o,r++}return a+l}t.a=s},function(e,t,n){var s=n(8)(n(4),n(9),null,null);e.exports=s.exports},function(e,t){e.exports=function(e,t,n,s){var r,i=e=e||{},a=typeof e.default;"object"!==a&&"function"!==a||(r=e,i=e.default);var o="function"==typeof i?i.options:i;if(t&&(o.render=t.render,o.staticRenderFns=t.staticRenderFns),n&&(o._scopeId=n),s){var u=o.computed||(o.computed={});Object.keys(s).forEach((function(e){var t=s[e];u[e]=function(){return t}}))}return{esModule:r,exports:i,options:o}}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("input",{directives:[{name:"mask",rawName:"v-mask",value:e.config,expression:"config"}],attrs:{type:"text"},domProps:{value:e.display},on:{input:e.onInput}})},staticRenderFns:[]}},function(e,t,n){e.exports=n(3)}])}))}}]);
//# sourceMappingURL=login-ssn.1689657844792.js.map