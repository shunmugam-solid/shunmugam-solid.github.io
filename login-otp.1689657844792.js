"use strict";(self["webpackChunkSolid"]=self["webpackChunkSolid"]||[]).push([[6413],{6986:function(e,t,s){s.r(t),s.d(t,{default:function(){return y}});var i=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"widgetContainer widgetContainer--center bg-white loginOtp"},[s("div",{staticClass:"navigationHeader"},[s("div",{staticClass:"navigationHeader__inner"},[s("span",{staticClass:"icon-Arrow-big-left cancel",on:{click:e.cancel}}),s("p",{staticClass:"title"},[e._v(" "+e._s(e.$t("tfa_NavTitle"))+" ")])])]),s("div",{staticClass:"widgetContainer__body"},[s("el-form",{ref:"user",staticClass:"wise-form",attrs:{model:e.user,rules:e.rules},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.submitForm()},submit:function(e){e.preventDefault()}}},[s("el-form-item",{attrs:{prop:"otp",label:e.$t("tfa_Title")}},[s("MobileOtp",{attrs:{autofocus:!0},model:{value:e.user.otp,callback:function(t){e.$set(e.user,"otp",t)},expression:"user.otp"}})],1),s("p",{staticClass:"loginOtp__resend-text"},[s("span",{directives:[{name:"show",rawName:"v-show",value:e.timer>0,expression:"timer > 0"}],staticClass:"loginOtp__resend-timer"},[e._v("00:"+e._s(1===(""+this.timer).length?"0"+this.timer:this.timer))]),s("span",{staticClass:"loginOtp__resend-btn",class:{"is-disabled":e.timer>0||e.isDisabled},on:{click:e.resendOtp}},[e._v(e._s(e.$t("tfa_Resend")))])])],1),s("div",{staticClass:"widgetContainer__footer--fixed border-0"},[s("el-button",{staticClass:"el-button__brand brand",attrs:{"data-testid":"submit",type:"primary",disabled:e.isFormInValid||e.isDisabled},on:{click:function(t){return e.submitForm()}}},[e._v(" "+e._s(e.$t("next"))+" ")])],1)],1)])},a=[],r=s(144),n=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"el-input"},[s("the-mask",{ref:"otpNumber",staticClass:"el-input__inner",attrs:{mask:"######",type:"tel",autocomplete:"off",name:"otp",masked:!0,value:e.value},nativeOn:{input:function(t){return e.updateInput(t)}}})],1)},o=[],l=s(2982),u={components:{TheMask:l.TheMask},props:{value:{type:String,default:""},autofocus:{type:Boolean,default:!1}},mounted(){this.autofocus&&this.$refs.otpNumber.$el.focus()},methods:{updateInput(e){let t=e.target.value;t?this.$emit("input",t.replace(/\D+/g,"")):this.$emit("input",null)}}},c=u,h=s(3736),p=(0,h.Z)(c,n,o,!1,null,"1f5c6868",null),d=p.exports,m=s(629),f=s(2424),g=s(9896),b=s(7936);r["default"].use(b.VueReCaptcha,{siteKey:"6LevbxUgAAAAAPl0JdfiTn67NBho9j69LuhWxiRX"});var _={name:"Login",mixins:[f.Z],components:{MobileOtp:d},data(){return{timer:60,isDisabled:!1,recaptchaToken:"",sitekey:"6LevbxUgAAAAAPl0JdfiTn67NBho9j69LuhWxiRX",user:{otp:""},rules:{otp:"required"}}},computed:{...(0,m.Se)("user",["getUserDetails"]),isFormInValid(){return!this.user.otp||6!=this.user.otp.length}},created(){this.timerStart();const e=this.getUserDetails;e&&e.phone||this.$router.push("/user/login")},mounted(){const e=this.$recaptchaInstance;e&&e.showBadge()},methods:{...(0,m.nv)("user",["verifyOtp","getPerson","login"]),...(0,m.OI)("user",["updateUserOtp","setUserDetails"]),async loginWithRecaptcha(){this.isDisabled=!0,await this.$recaptchaLoaded();const e=await this.$recaptcha("login"),t=this.getUserDetails,s=this.showLoader();this.login({mobileNumber:t.phone,recaptchaToken:e}).then((()=>{this.lastResendTime=new Date,this.$notify({title:"Success",message:this.$t("tfa_ResendSuccess"),type:"success"})})).catch((e=>{this.apiErrorMessage(e)})).finally((()=>{this.isDisabled=!1,s.close(),this.timerStart(),this.isDisabled=!1}))},submitForm(){if(this.isFormInValid)return;this.isDisabled=!0;const e=this.getUserDetails,t=(0,g._7)("programCode")||(0,g.Eb)("programCode");if(e&&e.phone)if(!0!==e.programCodeRequired||t)if(!0===e.idNumberLast4Required)this.updateUserOtp(this.user.otp),this.$router.push("/user/loginSSN");else{const s=this.showLoader(),i={otp:this.user.otp};t&&!0===e.programCodeRequired&&(i.programCode=t),this.verifyOtp(i).then((()=>{setTimeout((()=>{const e=this.showLoader();this.getPerson().then((()=>{setTimeout((()=>{this.loginSuccess()}),0)})).catch((e=>{this.apiErrorMessage(e),console.log(e)})).finally((()=>{e.close()}))}),0)})).catch((e=>{this.apiErrorMessage(e),"EC_Identity_ERROR"===e.code&&(this.user.otp=""),console.log(e)})).finally((()=>{this.isDisabled=!1,s.close()}))}else this.updateUserOtp(this.user.otp),this.$router.push("/user/loginProgramCode")},resendOtp(){if(0===this.timer){const e=this.getUserDetails;e&&e.phone&&this.loginWithRecaptcha()}},cancel(){this.setUserDetails({phone:null,idNumberLast4Required:null,otp:null}),setTimeout((()=>{this.$router.push("/user/login")}),0)},timerStart(){this.timer=60;let e=setInterval((()=>{this.timer=this.timer-1,0===this.timer&&clearInterval(e)}),1e3)}},destroyed(){const e=this.$recaptchaInstance;e&&e.hideBadge()}},v=_,C=(0,h.Z)(v,i,a,!1,null,null,null),y=C.exports}}]);
//# sourceMappingURL=login-otp.1689657844792.js.map