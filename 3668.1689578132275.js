"use strict";(self["webpackChunkSolid"]=self["webpackChunkSolid"]||[]).push([[3668],{3668:function(t,a,s){s.r(a),s.d(a,{default:function(){return C}});var i=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"widgetContainer cardManagement bg-white"},[s("div",{staticClass:"navigationHeader"},[s("div",{staticClass:"navigationHeader__inner"},[s("span",{staticClass:"icon-Arrow-big-left cancel",on:{click:t.drawerBack}}),s("p",{staticClass:"title"},[t._v(" "+t._s(t.$t("info_ATM"))+" ")])])]),s("div",{staticClass:"widgetContainer__body"},[s("div",{staticClass:"cardInfo"},[s("div",{staticClass:"cardInfo__card"},[s("div",{staticClass:"card-front"},[s("Card",{key:t.getSelectedCard.id,attrs:{card:t.getSelectedCard,"show-logo":!1,"show-secret-data":!1,"show-activation-switch":!0}})],1)])]),s("div",{staticClass:"listWithActionsv2"},[s("ul",[s("li",{staticClass:"cursor-auto",on:{click:t.atmPin}},[s("div",{staticClass:"details"},[s("p",{staticClass:"label"},[t._v(" "+t._s(t.$t("set_ATM_Pin"))+" ")])]),t._m(0)]),"physical"===t.getSelectedCard.cardType?s("li",{staticClass:"cursor-auto",on:{click:t.findATM}},[s("div",{staticClass:"details"},[s("p",{staticClass:"label"},[t._v(" "+t._s(t.$t("find_ATM"))+" ")])]),t._m(1)]):t._e()])])])])},e=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"action"},[s("span",{staticClass:"icon-arrow-right"})])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"action"},[s("span",{staticClass:"icon-arrow-right"})])}],c=s(629),r=s(714),n={name:"AtmInfo",computed:{...(0,c.Se)("card",["getSelectedCard"])},components:{Card:r.Z},methods:{atmPin(){"inactive"===this.getSelectedCard.cardStatus?this.$notify({title:"Error",message:this.$t("set_pin_freezeCard_error"),type:"error"}):this.drawerPush("SetATMPin")},findATM(){this.drawerPush("findATM")}}},l=n,d=s(3736),o=(0,d.Z)(l,i,e,!1,null,null,null),C=o.exports}}]);
//# sourceMappingURL=3668.1689578132275.js.map