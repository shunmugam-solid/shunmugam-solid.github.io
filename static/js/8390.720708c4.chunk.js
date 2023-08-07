"use strict";(self.webpackChunkdrop_in_ui=self.webpackChunkdrop_in_ui||[]).push([[8390],{6864:function(t,n,a){a.d(n,{Z:function(){return u}});a(2791);var e=a(4946),i=a(8735),s=a(2504),r="ConfirmModal_modal__fS-v4",o="ConfirmModal_modalHeader__M3BcQ",c="ConfirmModal_modalBody__uHbgc",l="ConfirmModal_modalClose__Xh2Cs",d=a(184),u=function(t){var n=t.title,a=t.description,u=t.cancelButton,x=t.submitButton,m=t.showModal,h=t.showClose,_=t.onCancel,p=t.onOk;return(0,d.jsxs)(e.u_,{isOpen:m,size:"sm",isCentered:!0,onClose:function(){return _},children:[(0,d.jsx)(e.ZA,{}),(0,d.jsxs)(e.hz,{className:"".concat(r),children:[(0,d.jsx)(e.xB,{className:"".concat(o),children:n}),!1!==h&&(0,d.jsx)(e.ol,{onClick:_,className:"".concat(l)}),(0,d.jsx)(e.fe,{className:"".concat(c),children:(0,d.jsx)(i.xv,{children:a})}),(0,d.jsxs)(e.mz,{children:[(0,d.jsx)(s.zx,{colorScheme:"branding",variant:"outline",mr:3,onClick:_,children:u||"Cancel"}),(0,d.jsx)(s.zx,{onClick:p,variant:"primary",children:x||"Submit"})]})]})]})}},7427:function(t,n,a){a.d(n,{a:function(){return l},f:function(){return c}});var e=a(9831),i=a(1951),s=a(80),r=a(286),o=a(7514),c=function(t,n,a,c,l,d,u){return function(x,m){return new Promise((function(h,_){var p="cash"===n?"v1/account/".concat(t,"/transaction?limit=").concat(a,"&offset=").concat(c):"v1/crypto/".concat(t,"/transaction?limit=").concat(a,"&offset=").concat(c);if(u&&(p+="&export=".concat(u)),l&&l.length>0&&(p+="&query=".concat(encodeURIComponent(l))),d){var f=d;Object.keys(d).forEach((function(t){f[t]&&(p+="crypto"===n&&"startDate"===t?"&startTime=".concat(f[t]):"crypto"===n&&"endDate"===t?"&endTime=".concat(f[t]):"&".concat(t,"=").concat(f[t]))}))}setTimeout((function(){"pdf"===u?(0,s.V_)(!0):x((0,o.Rn)(!0))}),0),r.Z.get(p,{responseType:"pdf"===u?"blob":"json"}).then((function(t){var n=t.data;if("pdf"!==u){var a=m().transaction.txnList,s=m().transaction.transactions;0===c&&(a={},s=[]),n.data.forEach((function(t){var n=(0,e.default)(t.txnDate),r=(0,i.default)(n,"MMMM yyyy");a[r]?a[r].push(t):a[r]=[t],s.push(t)})),x((0,o.XI)({transactions:s,txnList:a,total:n.total}))}h(n)})).catch(_).finally((function(){"pdf"===u?(0,s.V_)(!1):x((0,o.Rn)(!1))}))}))}},l=function(t,n,a){var e=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"json";return function(i){return new Promise((function(c,l){(0,s.V_)(!0);var d="crypto"===n?"v1/crypto/".concat(t,"/transaction/").concat(a):"v1/account/".concat(t,"/transaction/").concat(a,"?export=").concat(e);r.Z.get(d,{responseType:"pdf"===e?"blob":"json"}).then((function(t){var n=t.data;"pdf"!==e&&i((0,o.IR)(n)),c(n)})).catch((function(t){t.response&&t.response.data?l(t.response.data):l(t)})).finally((function(){(0,s.V_)(!1)}))}))}}},6903:function(t,n,a){a.r(n),a.d(n,{default:function(){return C}});var e=a(9439),i=a(2791),s=a(5223),r=a(8735),o=a(5048),c=a(2020),l=a(7689),d=a(5304),u=a(80),x=a(4144),m=a(680),h=a(9336),_=a(2559),p="Dashboard_hideItInMobile__6wcqm",f="Dashboard_showItInMobile__BlcTM",v="Dashboard_accountLabel__BRzeD",g=a(4661),j=a(6864),b=a(184),w=i.lazy((function(){return a.e(5756).then(a.bind(a,5756))})),y=i.lazy((function(){return Promise.all([a.e(9259),a.e(8421)]).then(a.bind(a,8421))})),C=function(){var t=(0,c.$)().t,n=(0,g.y)(),a=n.open,C=n.isOpen,T=(0,l.s0)(),A=(0,i.useState)(!1),k=(0,e.Z)(A,2),D=k[0],N=k[1],S=(0,i.useState)(C),L=(0,e.Z)(S,2),z=L[0],M=L[1],Z=(0,d.CG)((function(t){return t.user.personDetails}),o.wU),O=(0,d.CG)((function(t){return t.account}),o.wU),V=O.selectedAccount,U=O.selectedAccountType,P=(0,d.CG)((function(t){return t.business.selectedBusiness}),o.wU),H=(0,d.CG)((function(t){return t.card}),o.wU),R=H.cardLoading,B=H.cards,F=(0,s.VP)((null===V||void 0===V?void 0:V.accountNumber)||"",2e3),E=F.hasCopied,I=F.onCopy,G=(0,i.useRef)(null),J=(0,i.useMemo)((function(){return P?P.legalName:"".concat(null===Z||void 0===Z?void 0:Z.firstName," ").concat(null===Z||void 0===Z?void 0:Z.lastName)}),[Z,P]),X=(0,i.useCallback)((function(){a(w)}),[]),W=(0,i.useCallback)((function(){a(y,{id:null===P||void 0===P?void 0:P.id})}),[P]),q=(0,i.useCallback)((function(){T("/fund")}),[]),Q=(0,i.useCallback)((function(){T("/contacts")}),[]);(0,i.useEffect)((function(){setTimeout((function(){"cardAccount"!==(null===V||void 0===V?void 0:V.type)||R||0!==B.total||N(!0)}),0)}),[V,B,R]);return(0,i.useEffect)((function(){C||"cardAccount"!==(null===V||void 0===V?void 0:V.type)?C&&M(!0):function(){var t;z?(null===G||void 0===G||null===(t=G.current)||void 0===t||t.cardListRefresh(),M(!1)):M(!0)}()}),[(null===V||void 0===V?void 0:V.type)&&C]),(0,b.jsxs)("div",{className:"page",id:"dashboard-page",children:[(0,b.jsx)(r.xu,{mb:"24px",children:(0,b.jsxs)(r.kC,{children:[(0,b.jsx)(r.xv,{"data-testid":"heading",variant:"large",mr:"auto",children:J}),P&&"personChecking"!==P.id?(0,b.jsx)(r.xv,{variant:"small",cursor:"pointer",className:"text-light",onClick:W,children:"View Details"}):null]})}),(0,b.jsx)(r.xu,{mb:"24px",children:(0,b.jsxs)(r.kC,{gap:"24px",flexWrap:{base:"wrap",md:"nowrap"},children:[(0,b.jsxs)(r.xu,{width:{base:"100%",md:"cardAccount"!==(null===V||void 0===V?void 0:V.type)?"50%":"100%"},borderRadius:"4px",backgroundColor:"var(--dashboard-card-background-color)",color:"var(--dashboard-card-text-color)",padding:"24px",children:[(0,b.jsxs)(r.kC,{mb:"12px",justifyContent:"space-between",children:[(0,b.jsx)(r.xv,{className:v,lineHeight:"24px",fontSize:"20px",children:null===V||void 0===V?void 0:V.label}),(0,b.jsx)(r.xv,{cursor:"pointer",fontSize:"14px",textDecoration:"underline",onClick:X,className:p,children:"View Details"}),(0,b.jsx)(r.xv,{display:"none",fontWeight:"bold",textAlign:"left",mb:"8px",fontSize:"14px",className:f,children:V?(0,u.OH)(V.availableBalance,V.currency):null})]}),(0,b.jsx)(r.xv,{fontWeight:"bold",textAlign:"left",mb:"34px",fontSize:"30px",className:p,children:V?(0,u.OH)(V.availableBalance,V.currency):null}),(0,b.jsxs)(r.kC,{justify:"space-between",children:[(0,b.jsxs)(r.kC,{gap:"21px",alignItems:"center",children:[(0,b.jsxs)(r.xv,{color:"var(--dashboard-card-text-color)",variant:"regular",children:[t("dashboard.dashboard_accNo_title")," ",null===V||void 0===V?void 0:V.accountNumber]}),E?(0,b.jsx)(x.Z,{icon:"tick",cursor:"pointer",size:12}):(0,b.jsx)(x.Z,{onClick:I,icon:"copy",cursor:"pointer",size:12})]}),(0,b.jsx)(r.xv,{display:"none",cursor:"pointer",fontSize:"14px",textDecoration:"underline",color:"var(--dashboard-card-text-color)",onClick:X,className:f,children:"View Details"})]})]}),"cardAccount"!==(null===V||void 0===V?void 0:V.type)?(0,b.jsxs)(r.gC,{width:{base:"100%",md:"50%"},children:[(0,b.jsx)(r.xu,{cursor:"pointer",width:"100%",padding:"16px 24px 16px 16px",backgroundColor:"var(--list-item-background)",onClick:q,children:(0,b.jsxs)(r.Ug,{justifyContent:"space-between",children:[(0,b.jsxs)("div",{className:"details",children:[(0,b.jsx)(r.xv,{fontSize:"20px",lineHeight:"24px",paddingBottom:"12px",variant:"regular",textAlign:"left",children:t("dashboard.dashboard_row_fund_title")}),(0,b.jsx)(r.xv,{variant:"small",textAlign:"left",children:t("dashboard.dashboard_row_fund_desc",{value:null===V||void 0===V?void 0:V.label})})]}),(0,b.jsx)(x.Z,{style:{marginLeft:"8px"},icon:"Arrow-small-right",size:12,className:"svg-light-grey-1"})]})}),(0,b.jsx)(r.xu,{cursor:"pointer",width:"100%",padding:"16px 24px 16px 16px",backgroundColor:"var(--list-item-background)",onClick:Q,children:(0,b.jsxs)(r.Ug,{justifyContent:"space-between",children:[(0,b.jsxs)("div",{className:"details",children:[(0,b.jsx)(r.xv,{fontSize:"20px",lineHeight:"24px",paddingBottom:"12px",variant:"regular",textAlign:"left",children:t("dashboard.dashboard_row_pay_title")}),(0,b.jsx)(r.xv,{variant:"small",textAlign:"left",children:t("dashboard.dashboard_row_pay_desc",{value:null===V||void 0===V?void 0:V.label})})]}),(0,b.jsx)(x.Z,{style:{marginLeft:"8px"},icon:"Arrow-small-right",size:12,className:"svg-light-grey-1"})]})})]}):null]})}),(0,b.jsx)(r.xu,{children:(0,b.jsx)(m.Z,{showSearch:!1,showAdd:!1,showEmptyState:!1,showCompactView:!0,pagination:!1,contactsPerView:10,showBack:!1})}),(0,b.jsx)(r.xu,{mt:"24px",mb:"24px",children:(0,b.jsx)(h.Z,{accountType:U,filterRequest:void 0,showFilter:!1,showExport:!1,showMonth:!1,showSearch:!1,showCompactView:!0,transactionsPerView:20,dateFormat:"MMM d, yyyy 'at' h:mm aa"})}),(0,b.jsx)(r.xu,{children:(0,b.jsx)(_.Z,{ref:G,showSearch:!1,showAddCard:!0,cardsPerView:20,pagination:!1,showExtendedDetails:!1,showCompactView:!0})}),(0,b.jsx)(j.Z,{showClose:!1,showModal:D,submitButton:t("dashboard.add_card_alert_cta"),cancelButton:t("dashboard.add_card_alert_cancel"),title:t("dashboard.add_card_alert_title"),description:t("dashboard.add_card_alert_message"),onCancel:function(){N(!1),T("/ao/account/list")},onOk:function(){var t;N(!1),null===(t=G.current)||void 0===t||t.addCard()}})]})}},9336:function(t,n,a){a.d(n,{Z:function(){return D}});var e=a(1413),i=a(9439),s=a(2791),r=a(2020),o=a(8735),c=a(5798),l=a(6450),d=a(5048),u=a(4771),x=a(1951),m=a(7689),h=a(4144),_={bodyStyles:"TransactionsList_bodyStyles__DV1tn",transaction__box:"TransactionsList_transaction__box__rlmOM",scrollableDiv:"TransactionsList_scrollableDiv__lUBu3",transactions__search:"TransactionsList_transactions__search__X7iW3",transactions__search__icon:"TransactionsList_transactions__search__icon__rJTxm",transactions__search__input:"TransactionsList_transactions__search__input__YC3Vr",transactions__filter:"TransactionsList_transactions__filter__U5l+w",transactions__list_month:"TransactionsList_transactions__list_month__7mtUP",transactions__month_header:"TransactionsList_transactions__month_header__6369R",transactions__list_item:"TransactionsList_transactions__list_item__elp8k",tag:"TransactionsList_tag__vt8SQ",tag__intrabank:"TransactionsList_tag__intrabank__rkOgY",tag__card:"TransactionsList_tag__card__I1gKw",transaction__description:"TransactionsList_transaction__description__XrkJ8",transaction__received:"TransactionsList_transaction__received__k9ILX",transaction__sent:"TransactionsList_transaction__sent__HFnJf"},p=a(5304),f=a(729),v=a(80),g=a(6559),j=a(1605),b=a(7427),w=a(7514),y=a(4661),C=a(3692),T=a(184),A=s.lazy((function(){return Promise.all([a.e(4398),a.e(4044),a.e(7696)]).then(a.bind(a,219))})),k=s.memo((function(t){var n=t.transactionData,e=t.dateFormat,i=(0,r.$)().t,c=(0,y.y)().open,l=(0,s.useMemo)((function(){return(0,x.default)(new Date(n.createdAt),e)}),[e,n.createdAt]),d=(0,s.useMemo)((function(){var t=n.walletId?n.amount:(0,v.OH)(n.amount);return parseFloat(n.amount)>0?"+".concat(t):t}),[n]),u=(0,s.useMemo)((function(){return"pending"===n.status?"#FFAC4A":"canceled"===n.status?"#FF4A4A":"".concat("debit"===n.txnType?"#FF4A4A":"#2EC193")}),[n]);return(0,T.jsxs)(o.HC,{backgroundColor:"var(--bg-white)","data-class":"transaction-list-item","data-testid":"transaction-item-".concat(n.id),onClick:function(){c(s.lazy((function(){return Promise.all([a.e(9259),a.e(714)]).then(a.bind(a,714))})),{id:n.id})},className:_.transactions__list_item,children:[(0,T.jsx)(o.xu,{className:"".concat(_.tag," ").concat(_["tag__".concat(n.transferType)]),children:(0,T.jsx)(o.xv,{textTransform:"capitalize",variant:"small",textAlign:"center",color:"inherit",textOverflow:"ellipsis",overflow:"hidden",children:i(["transactions_list.".concat(n.transferType),n.transferType||""])})}),(0,T.jsxs)(o.xu,{className:_.transaction__description,children:[(0,T.jsx)(o.xv,{variant:"regular",className:"text-dark",textAlign:"left",children:n.title}),(0,T.jsx)(o.xv,{variant:"small",className:"text-light",textAlign:"left",children:"pending"===n.status?"Pending":l})]}),(0,T.jsx)(o.xv,{variant:"small",title:"".concat((0,v.OH)(n.amount)),textAlign:"right",color:u,children:d})]})})),D=function(t){var n=t.showFilter,a=t.showExport,x=t.showMonth,D=t.showSearch,N=t.showCompactView,S=t.accountType,L=t.filterRequest,z=t.transactionsPerView,M=void 0===z?20:z,Z=t.dateFormat,O=(0,r.$)().t,V=(0,y.y)().open,U=(0,m.s0)(),P=(0,s.useState)(""),H=(0,i.Z)(P,2),R=H[0],B=H[1],F=(0,s.useState)(""),E=(0,i.Z)(F,2),I=E[0],G=E[1],J=(0,s.useRef)(0),X=(0,s.useRef)(!1),W=(0,p.Qo)(),q=(0,p.CG)((function(t){return t.transaction.transactionLoading}),d.wU),Q=(0,p.CG)((function(t){return t.transaction.transactions}),d.wU),Y=(0,p.CG)((function(t){return t.transaction.txnList}),d.wU),$=(0,p.CG)((function(t){return t.transaction.total}),d.wU),K=(0,p.CG)((function(t){return t.account.selectedAccount}),d.wU),tt=(0,p.CG)((function(t){return t.crypto.selectedAccount}),d.wU),nt=(0,p.CG)((function(t){return t.transaction.filters}),d.wU),at=Q.length,et=(0,s.useMemo)((function(){return(0,e.Z)((0,e.Z)({},nt.data),{},{timePeriod:nt.tmpStates.timePeriod})}),[nt]),it=J.current/M+1;(0,f.bX)((function(){J.current=0,G(R)}),1e3,[R]);var st=(0,s.useRef)(1),rt=(0,s.useCallback)((function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"json",a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:(0,e.Z)({},et),i="cash"===S&&K?K.id:"crypto"===S&&tt?tt.id:"";if(""!==i){var s=JSON.parse(JSON.stringify(a));"card"===s.txnType&&(s.txnType=void 0,s.transferType="card"),"0.00"!==s.maxAmount&&"0"!==s.maxAmount||delete s.maxAmount,W((0,b.f)(i,S,"pdf"===t?100:M,"pdf"===t?0:J.current,I,n?s:void 0,t)).then((function(n){if("pdf"===t){var a=window.URL.createObjectURL(n),e=document.createElement("a");e.href=a,e.download="statement.pdf",e.click(),e.remove()}})).catch(v.WH)}}),[K,I,J,M,et,L,st,n]);(0,s.useEffect)((function(){rt()}),[I,K]),(0,s.useEffect)((function(){return C.T.subscribe(C.z.TRANSACTION_REFRESH,(function(){J.current=0,rt()}))}),[et,rt]);var ot=(0,s.useCallback)((function(){W((0,w.L5)({data:{},tmpStates:{transactionType:{credits:!1,debits:!1,cardTransactions:!1},amount:{min:"",max:""},timePeriod:void 0,startDate:new Date,endDate:new Date}})),setTimeout((function(){U("/transactions")}),0)}),[]),ct=(0,s.useCallback)((function(t){var n=JSON.parse(JSON.stringify((0,e.Z)({},nt))),a=n.data,i=n.tmpStates;"txnType"===t?(a.txnType=void 0,a.transferType=void 0,i.transactionType=void 0):"amount"===t?(a.minAmount=void 0,a.maxAmount=void 0,i.amount={min:"",max:""}):"timePeriod"===t&&(a.startDate=void 0,a.endDate=void 0,i.startDate=void 0,i.endDate=void 0,i.timePeriod=void 0),W((0,w.L5)({data:a,tmpStates:i})),setTimeout((function(){rt("json",a)}),0)}),[nt]),lt=function(){return Object.keys(Y).map((function(t){return(0,T.jsxs)(o.xu,{"data-testid":"month-group-".concat(t.replace(/ /g,"_")),children:[x&&(0,T.jsx)(o.xv,{"data-testid":"month-name-text",variant:"large",className:_.transactions__month_header,children:t}),(0,T.jsx)(o.aV,{className:_.transactions__list_month,"data-class":"transaction-list",children:Y[t].map((function(t){return(0,T.jsx)(k,{transactionData:t,dateFormat:Z},t.id)}))})]},"tr-".concat(t))}))},dt=(0,s.useMemo)((function(){return{credit:O("filter.credits"),debit:O("filter.debits"),card:O("filter.cardTransactions")}}),[]);return(0,T.jsx)(o.xu,{className:_.bodyStyles,children:q&&1===it&&!X.current?(0,T.jsx)(g.Z,{name:"TransactionListView",showHeader:!N}):(0,T.jsxs)(o.xu,{width:"100%",height:"100%",className:_.transaction__box,children:[(0,T.jsxs)("div",{children:[(0,T.jsxs)(o.Ug,{width:"100%",children:[(0,T.jsx)(o.xv,{"data-testid":"heading",variant:"large",mr:"auto",children:O("transactions_list.title")}),N&&0!==$?(0,T.jsxs)(o.xv,{variant:"regular",className:"text-light",fontSize:"16px",cursor:"pointer",onClick:ot,children:[O("transactions_list.viewAll"),(0,T.jsx)(h.Z,{style:{marginLeft:"8px"},icon:"Arrow-small-right",size:12,className:"svg-light-grey-1"})]}):null,a?(0,T.jsxs)(o.Ug,{ml:"auto",cursor:"pointer",onClick:function(){return rt("pdf")},"data-testid":"export-icon",children:[(0,T.jsx)(h.Z,{icon:"icon-export",size:16}),(0,T.jsx)(o.xv,{variant:"regular",className:"transactions__export-title",children:O("transactions_list.exportTitle")}),(0,T.jsx)(h.Z,{icon:"Arrow-small-right",size:12,className:"svg-light-grey-1"})]}):null]}),(0,T.jsxs)(o.Ug,{my:D||n?"16px":"0px",children:[D?(0,T.jsxs)(o.xu,{className:_.transactions__search,children:[(0,T.jsx)(h.Z,{icon:"icon-search",className:_.transactions__search__icon,size:18}),(0,T.jsx)(c.II,{"data-testid":"search-input",placeholder:O("transactions_list.searchTransactions"),variant:"primary",className:_.transactions__search__input,value:R,onChange:function(t){X.current=!0,B(t.target.value)}})]}):null,n?(0,T.jsx)(o.M5,{className:"".concat(_.transactions__filter),"data-testid":"filter-handler",onClick:function(){V(A)},children:(0,T.jsx)(h.Z,{icon:"icon-filter",size:20})}):null]})]}),(0,T.jsx)(o.Ug,{spacing:4,marginBottom:"16px",children:n&&(0,T.jsxs)(T.Fragment,{children:[et.txnType?(0,T.jsxs)(l.Vp,{variant:"primary",padding:"10px","data-testid":"filter-tag-txnType",children:[(0,T.jsx)(l.Sn,{fontSize:"12px",textTransform:"uppercase",children:dt[et.txnType]}),(0,T.jsx)(l.SD,{onClick:function(){ct&&ct("txnType")}})]}):null,et.minAmount&&"0.00"!==et.minAmount||et.maxAmount&&"0.00"!==et.maxAmount?(0,T.jsxs)(l.Vp,{variant:"primary",padding:"10px","data-testid":"filter-tag-amount",children:[(0,T.jsx)(l.Sn,{fontSize:"12px",textTransform:"uppercase",children:et.minAmount&&et.maxAmount&&"0.00"!==et.minAmount&&"0.00"!==et.maxAmount?"".concat((0,v.OH)(et.minAmount)," - ").concat((0,v.OH)(et.maxAmount)):et.minAmount&&"0.00"!==et.minAmount?(0,v.OH)(et.minAmount):"".concat((0,v.OH)("0.00")," - ").concat((0,v.OH)(et.maxAmount||""))}),(0,T.jsx)(l.SD,{onClick:function(){ct&&ct("amount")}})]}):null,et.timePeriod&&("custom"!==et.timePeriod||et.startDate&&""!==et.startDate||et.endDate&&""!==et.endDate)?(0,T.jsxs)(l.Vp,{variant:"primary",padding:"10px","data-testid":"filter-tag-time",children:[(0,T.jsx)(l.Sn,{fontSize:"12px",textTransform:"uppercase",children:"custom"===et.timePeriod?et.startDate&&et.endDate&&""!==et.startDate&&""!==et.endDate?"".concat(et.startDate," - ").concat(et.endDate):et.startDate&&""!==et.startDate?et.startDate:et.endDate:O("filter.".concat(et.timePeriod))}),(0,T.jsx)(l.SD,{onClick:function(){ct&&ct("timePeriod")}})]}):null]})}),q&&X.current?(0,T.jsx)(g.Z,{name:"TransactionListView",showHeader:!1}):(0,T.jsx)("div",{style:{height:"100%",overflowY:"scroll"},className:_.scrollableDiv,id:"scrollableDiv",children:N?lt():(0,T.jsx)(u.Z,{scrollThreshold:.6,dataLength:at,next:function(){J.current=it*M,setTimeout((function(){rt()}),0)},hasMore:at<$&&0!==$,loader:(0,T.jsx)(o.M5,{my:3,children:(0,T.jsx)(j.Z,{showModal:!1,show:!0})}),endMessage:q?null:(0,T.jsxs)(T.Fragment,{children:[0!==$?(0,T.jsx)(o.iz,{className:"no_transaction"}):null,(0,T.jsx)(o.M5,{py:2,children:(0,T.jsx)(o.xv,{variant:"regular",textAlign:"center",className:"text-light",children:O(0===$?"transactions_list.noData":"transactions_list.noMoreTransactions")})})]}),scrollableTarget:"scrollableDiv",children:lt()})})]})})}}}]);
//# sourceMappingURL=8390.720708c4.chunk.js.map