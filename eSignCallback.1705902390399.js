"use strict";(self["webpackChunkSolid"]=self["webpackChunkSolid"]||[]).push([[7785],{7088:function(e,t,s){s.r(t),s.d(t,{default:function(){return u}});var n=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[e._v(" Loading... ")])},o=[],i=s(629),r=s(2424),a=s(9896),h={mixins:[r.Z],created(){try{const e=window.sessionStorage.getItem("user_auth_tokens"),t=window.sessionStorage.getItem("app_env");if(e&&t){(0,a.Nb)(t);const s=JSON.parse(e);this.setUserAuthToken(s),this.$http.defaults.headers.common.AUTHORIZATION="Bearer "+s.accessToken,this.verifyToken(),window.sessionStorage.removeItem("user_auth_tokens"),window.sessionStorage.removeItem("app_env")}else this.goToWelcomeScreen()}catch{this.goToWelcomeScreen()}},methods:{...(0,i.nv)("user",["verifyOtp","getPerson","login"]),...(0,i.OI)("user",["setUserAuthToken"]),...(0,i.nv)("kyb",["submitKyb"]),verifyToken(){const e=this.showLoader();this.getPerson().then((e=>{setTimeout((()=>{this.startKYC(e)}),0)})).catch((e=>{this.apiErrorMessage(e),console.log(e)})).finally((()=>{e.close()}))},startKYC(e){if(e&&e.id){const t=this.showLoader();this.submitKyb(e.id).then((()=>{setTimeout((()=>{this.loginSuccess((()=>{const e=this.$route.query.event;if("signing_complete"===e)this.$router.push("/kyb/businessStatus");else{const t={access_code_failed:"Something went wrong, please try again.",cancel:"Something went wrong, please try again.",decline:"Something went wrong, please try again.",exception:"Something went wrong, please try again.",fax_pending:"Something went wrong, please try again.",id_check_failed:"Something went wrong, please try again.",session_timeout:"Session timeout, please try again.",ttl_expired:"Session timeout, please try again."};this.$apiErrorMessage(t[e]||"Something went wrong, please try again."),this.$router.push("/kyb/ownership")}}))}),0)})).catch((e=>{console.log(e),this.apiErrorMessage(e)})).finally((()=>{t.close()}))}}}},l=h,c=s(3736),g=(0,c.Z)(l,n,o,!1,null,null,null),u=g.exports}}]);
//# sourceMappingURL=eSignCallback.1705902390399.js.map