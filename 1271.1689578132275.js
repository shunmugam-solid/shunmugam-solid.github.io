"use strict";(self["webpackChunkSolid"]=self["webpackChunkSolid"]||[]).push([[1271],{1271:function(t,e,a){a.r(e),a.d(e,{default:function(){return r}});var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"\n    widgetContainer\n    header-white\n    widgetContainer--scrollable\n    statementDetail\n  "},[a("div",{staticClass:"navigationHeader"},[a("div",{staticClass:"navigationHeader__inner"},[a("span",{staticClass:"icon-Arrow-big-left cancel",on:{click:t.drawerBack}}),a("p",{staticClass:"title"},[t._v(" "+t._s(t.$t("statements"))+" ")]),a("span",{staticClass:"el-icon-close",on:{click:t.drawerClose}})])]),a("div",{staticClass:"widgetContainer__body"},[t.hasNoStatement?a("div",{staticClass:"statementDetail__blank"},[a("p",[t._v(t._s(t.$t("no_statement_text")))])]):a("div",{staticClass:"statementDetail__actions"},[a("ul",t._l(t.getStatements.data,(function(e,s){return a("li",{key:s},[a("div",{staticClass:"info"},[a("p",{staticClass:"title"},[t._v(" "+t._s(t._f("date")(e.year+"-"+(1==(""+e.month).length?"0"+e.month:e.month)+"-01 00:00:00","MMM yyyy"))+" ")]),a("p",{staticClass:"description"},[t._v(" Generated on "+t._s(t._f("date")(e.createdAt,"MMM d, yyyy"))+" ")])]),a("div",{staticClass:"action",on:{click:function(a){return t.download(e.year,e.month)}}},[a("p",{staticClass:"select"},[t._v(" "+t._s(t.$t("statement_view"))+" ")])])])})),0)])])])},n=[],c=a(629),i={created(){if(this.getSelectedAccount){const t=this.showLoader();this.fetchStatements(this.getSelectedAccount.id).then((()=>{})).catch((t=>{console.log(t),this.apiErrorMessage(t)})).finally((()=>{t.close()}))}},computed:{...(0,c.Se)("account",["getSelectedAccount","getStatements"]),hasNoStatement(){return!this.getStatements.data.length}},methods:{...(0,c.nv)("account",["fetchStatements","getStatementByMonth"]),download(t,e){const a=this.showLoader();this.getStatementByMonth({year:t,month:e,accountId:this.getSelectedAccount.id,format:"pdf"}).then((a=>{const s=window.URL.createObjectURL(a),n=document.createElement("a");n.href=s,n.download=`${t}-${e}-statement.pdf`,n.click(),n.remove()})).catch((t=>{console.log(t),this.apiErrorMessage(t)})).finally((()=>{a.close()}))},goBack(){this.$emit("back")},close(){this.$emit("close")}}},o=i,l=a(3736),d=(0,l.Z)(o,s,n,!1,null,"36d6d705",null),r=d.exports}}]);
//# sourceMappingURL=1271.1689578132275.js.map