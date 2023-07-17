"use strict";(self["webpackChunkSolid"]=self["webpackChunkSolid"]||[]).push([[1730],{6963:function(t,e,s){s.r(e),s.d(e,{default:function(){return h}});var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.getKycData?s("div",{staticClass:"kycStatus"},["approved"===t.getKycData.status?s("div",{staticClass:"widgetContainer widgetContainer--center widgetContainer--scrollable widgetContainer--full-screen approved"},[s("div",{staticClass:"widgetContainer__body"},[s("LottieAnimation",{attrs:{"animation-name":"success",reference:"kyc-status-success",loop:!0}}),s("p",{staticClass:"title"},[t._v(" "+t._s(t.$t("kycStatus_approved_title"))+" ")]),s("p",{staticClass:"description"},[t._v(" "+t._s(t.$t(!0===t.$businessChecking&&!0===t.$personalChecking||!1===t.$businessChecking&&!0===t.$personalChecking?"kycStatus_approved_description_personalChecking":"kycStatus_approved_description"))+" ")]),s("div",{staticClass:"widgetContainer__footer--fixed"},[!0===t.$businessChecking?s("el-button",{staticClass:"welcome__get-started el-button__brand brand",attrs:{type:"primary"},on:{click:t.proceedToBusiness}},[t._v(" "+t._s(t.$t(!0===t.$businessChecking&&!0===t.$personalChecking?"done":"kycStatus_approved_buttonTitle"))+" ")]):!0===t.$personalChecking?s("el-button",{staticClass:"welcome__get-started el-button__brand brand",attrs:{type:"primary"},on:{click:t.accountSetup}},[t._v(" "+t._s(t.$t("done"))+" ")]):t._e()],1)],1)]):"declined"===t.getKycData.status?s("div",{staticClass:"\n      widgetContainer widgetContainer--center widgetContainer--scrollable widgetContainer--full-screen\n      declined\n    \n    "},[s("div",{staticClass:"widgetContainer__body"},[s("LottieAnimation",{attrs:{"animation-name":"failure",reference:"kyc-status-failure-1",loop:!0}}),s("p",{staticClass:"title"},[t._v(" "+t._s(t.$t("kycStatus_declined_title"))+" ")]),s("p",{staticClass:"description"},[t._v(" "+t._s(t.$t("kycStatus_declined_description"))+" ")]),s("div",{staticClass:"widgetContainer__footer--fixed"},[s("el-button",{staticClass:"welcome__get-started el-button__brand brand",attrs:{type:"primary"},on:{click:t.logoutUser}},[t._v(" "+t._s(t.$t("kycStatus_declined_buttonTitle"))+" ")])],1)],1)]):"submitted"===t.getKycData.status&&t.isLoading?s("div",{staticClass:"widgetContainer widgetContainer--center widgetContainer--full-screen verifying"},[s("div",{staticClass:"widgetContainer__body"},[s("LottieAnimation",{attrs:{"animation-name":"searching",reference:"kyc-status-review-1",loop:!0}}),s("p",{staticClass:"title"},[t._v(" "+t._s(t.$t("kycStatus_waiting_title"))+" ")]),s("div",{staticClass:"widgetContainer__footer--fixed"})],1)]):s("div",{staticClass:"\n      widgetContainer widgetContainer--center widgetContainer--scrollable widgetContainer--full-screen\n      review\n    \n    "},[s("div",{staticClass:"widgetContainer__body"},[s("LottieAnimation",{attrs:{"animation-name":"searching",reference:"kyc-status-review-2",loop:!0}}),s("p",{staticClass:"title"},[t._v(" "+t._s(t.$t("kycStatus_inReview_title"))+" ")]),s("p",{staticClass:"description"},[t._v(" "+t._s(t.$t("kycStatus_inReview_description"))+" ")]),s("div",{staticClass:"widgetContainer__footer--fixed"},[s("el-button",{staticClass:"welcome__get-started el-button__brand brand",attrs:{type:"primary"},on:{click:t.openHelp}},[t._v(" "+t._s(t.$t("kycStatus_inReview_buttonTitle"))+" ")])],1)],1)])]):t._e()},n=[],a=s(629),o=s(6537),c=s(9896),r={name:"KycStatus",components:{LottieAnimation:o.Z},created(){const t=this.getKycData;null===t||null===t.id?this.getPersonKYC():this.accountCreationForPersonalChecking()},data(){return{isLoading:!0,retryCount:0}},computed:{...(0,a.Se)("kyc",["getKycData"]),...(0,a.Se)("kyb",["getBusinessList","getBussinessDetailsFetchedStatus"]),...(0,a.Se)("user",["getPersonDetails"])},methods:{...(0,a.nv)("kyc",["fetchKyc"]),...(0,a.nv)("kyb",["listAllBusiness"]),...(0,a.OI)("kyb",["setSelectedBusiness"]),...(0,a.OI)("account",["updateCreateAccountData"]),...(0,a.nv)("user",["logout"]),getPersonKYC(t=!0){const e=t?this.showLoader():{},s=this.getPersonDetails;s&&s.id&&this.fetchKyc(s.id).then((t=>{const e=t;if("submitted"===e.status||"inReview"===e.status)if(this.retryCount<3)this.isLoading=!0,this.retryCount++,setTimeout((()=>{this.getPersonKYC()}),1e3);else{const t=(0,c._7)("kycReviewRedirectUrl");t&&(window.location.href=t),this.isLoading=!1,setTimeout((()=>{this.getPersonKYC(!1)}),5e3)}else this.accountCreationForPersonalChecking()})).catch((t=>{console.log(t),this.apiErrorMessage(t)})).finally((()=>{t&&e.close&&e.close()}))},accountCreationForPersonalChecking(){this.getKycData&&"approved"===this.getKycData.status?this.isLoading=!1:(this.isLoading=!1,setTimeout((()=>{this.getPersonKYC(!1)}),5e3))},proceedToBusiness(){if(window.analytics&&window.analytics.track("proceedBusiness"),"fetched"===this.getBussinessDetailsFetchedStatus){const t=this.getBusinessList;0===t.length?!0===this.$businessChecking&&!0===this.$personalChecking?this.$router.push("/kyc/accountType"):this.$router.push("/kyb/businessDetails"):this.setSelectedBusiness(t[0])}else{const t=this.showLoader();this.$store.dispatch("kyb/listAllBusiness").then((t=>{if(0===t.total)!0===this.$businessChecking&&!0===this.$personalChecking?this.$router.push("/kyc/accountType"):this.$router.push("/kyb/businessDetails");else{const e=t.data;this.setSelectedBusiness(e[0])}})).catch((t=>{this.apiErrorMessage(t)})).finally((()=>{t.close()}))}},accountSetup(){this.updateCreateAccountData({businessId:null,type:"personalChecking"}),this.$router.push("/account/setup")},kybRedirect(t){if(t&&t.kyb&&t.kyb.status)switch(t.kyb.status){case"approved":break;case"notStarted":this.$router.push("/kyb/businessDetails");break}},logoutUser(){const t=this.showLoader();this.logout().then((()=>{this.goToWelcomeScreen()})).catch((t=>{console.log(t),this.apiErrorMessage(t)})).finally((()=>{t.close()}))}}},l=r,u=s(3736),d=(0,u.Z)(l,i,n,!1,null,null,null),h=d.exports}}]);
//# sourceMappingURL=kyc-status.1689578132275.js.map