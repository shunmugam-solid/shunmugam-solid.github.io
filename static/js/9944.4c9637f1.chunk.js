"use strict";(self.webpackChunkdrop_in_ui=self.webpackChunkdrop_in_ui||[]).push([[9944],{6864:function(e,a,t){t.d(a,{Z:function(){return u}});t(2791);var n=t(4946),r=t(8735),c=t(2504),i="ConfirmModal_modal__fS-v4",l="ConfirmModal_modalHeader__M3BcQ",s="ConfirmModal_modalBody__uHbgc",o="ConfirmModal_modalClose__Xh2Cs",d=t(184),u=function(e){var a=e.title,t=e.description,u=e.cancelButton,h=e.submitButton,x=e.showModal,m=e.onCancel,f=e.onOk;return(0,d.jsxs)(n.u_,{isOpen:x,size:"sm",isCentered:!0,onClose:function(){return m},children:[(0,d.jsx)(n.ZA,{}),(0,d.jsxs)(n.hz,{className:"".concat(i),children:[(0,d.jsx)(n.xB,{className:"".concat(l),children:a}),(0,d.jsx)(n.ol,{onClick:m,className:"".concat(o)}),(0,d.jsx)(n.fe,{className:"".concat(s),children:(0,d.jsx)(r.xv,{children:t})}),(0,d.jsxs)(n.mz,{children:[(0,d.jsx)(c.zx,{colorScheme:"branding",variant:"outline",mr:3,onClick:m,children:u||"Cancel"}),(0,d.jsx)(c.zx,{onClick:f,variant:"primary",children:h||"Submit"})]})]})]})}},9944:function(e,a,t){t.r(a),t.d(a,{default:function(){return B}});var n=t(9439),r=t(2791),c=t(2020),i=t(967),l=t(5223),s=t(8735),o=t(9743),d=t(7689),u=t(4144),h="CardDetails_pointer__wpB4y",x="CardDetails_cardDetails__action_in_list__-IbkW",m="CardDetails_iconCopy__8Jl5g",f="CardDetails_cardNumber__tiHE-",p="CardDetails_cardDetails__cardNo__BOpAt",_=t(6864),g=t(5304),v=t(7208),j=t(80),C=t(8819),b=t(3746),k=t(5649),y=t(4661),N=t(7514),w=t(184),S=r.lazy((function(){return Promise.all([t.e(4398),t.e(3787)]).then(t.bind(t,9935))})),z=r.lazy((function(){return t.e(9355).then(t.bind(t,9355))})),B=function(){var e=(0,c.$)().t,a=(0,g.Qo)(),t=(0,i.pm)(),B=(0,d.s0)(),Z=(0,y.y)(),A=Z.open,D=Z.close,I=Z.data,O=(null===I||void 0===I?void 0:I.id)||"",M=(0,r.useState)(null),E=(0,n.Z)(M,2),P=E[0],H=E[1],$=(0,l.kt)(),W=(0,n.Z)($,2),T=W[0],R=W[1],L=(0,r.useState)(!1),V=(0,n.Z)(L,2),F=V[0],Q=V[1],G=(0,r.useState)(!1),X=(0,n.Z)(G,2),q=X[0],J=X[1],U=(0,r.useState)(!1),K=(0,n.Z)(U,2),Y=K[0],ee=K[1],ae=(0,r.useState)(!1),te=(0,n.Z)(ae,2),ne=te[0],re=te[1],ce=(0,r.useRef)(null),ie=(0,r.useRef)(null);(0,r.useEffect)((function(){O&&a((0,v.nO)(O)).then((function(e){H(e),a((0,b.Vf)(e)),"inactive"===e.cardStatus&&R.on()})).catch(j.WH)}),[O]);var le=(0,r.useCallback)((function(){null!==P&&void 0!==P&&P.id&&a((0,v.OV)(P.id,{cardStatus:T?"inactive":"active"})).then((function(e){H(e),a((0,b.Vf)(e))})).catch((function(e){R.toggle(),(0,j.WH)(e)})).finally((function(){Q(!1),J(!1)}))}),[null===P||void 0===P?void 0:P.id,T]),se=(0,r.useCallback)((function(){null!==P&&void 0!==P&&P.id&&(ee(!1),a((0,v.XN)(P.id)).then((function(){})).catch(j.WH))}),[P]),oe=(0,r.useCallback)((function(){P&&(a((0,N.L5)({data:{cardId:P.id},tmpStates:{transactionType:{credits:!1,debits:!1,cardTransactions:!1},amount:{min:"",max:""},timePeriod:void 0,startDate:new Date,endDate:new Date,cardId:P.id}})),setTimeout((function(){B("/transactions")}),0))}),[P]),de=(0,r.useCallback)((function(e){var a=e.show,n=e.headers;if(P){var r=a.request({name:"cardNoIframe2",method:"GET",headers:n,path:"/v1/card/".concat(P.id,"/show"),jsonPathSelector:"cardNumber",serializers:[a.SERIALIZERS.replace("(\\d{4})(\\d{4})(\\d{4})(\\d{4})","$1 $2 $3 $4")]});r.render(ce.current,{color:"#767676",fontSize:"16px",display:"block",height:"16px",fontWeight:500,letterSpacing:.5,lineHeight:"24px"}),a.copyFrom(r,{text:'<svg width="13" height="13" viewBox="0 0 30 30" style=""><g transform="scale(0.03125 0.03125)"><path d="M373.336 832c-99.969 0-181.336-81.374-181.336-181.338v-437.328h-74.664c-64.726 0-117.336 52.601-117.336 117.328v575.997c0 64.734 52.61 117.342 117.336 117.342h533.331c64.725 0 117.333-52.608 117.333-117.342v-74.658h-394.664z"></path><path d="M938.667 117.336c0-64.812-52.523-117.336-117.333-117.336h-447.997c-64.812 0-117.336 52.524-117.336 117.336v533.328c0 64.813 52.524 117.336 117.336 117.336h447.997c64.811 0 117.333-52.523 117.333-117.336v-533.328z"></path></g></svg>'},(function(e){"success"===e&&t({title:"Card Number copied.",status:"success",duration:9e3,isClosable:!0,position:"top-right"})})).render(ie.current,{cursor:"pointer",overflow:"hidden",left:"auto",right:"0",width:"auto",fill:getComputedStyle(document.documentElement).getPropertyValue("--icon-color")})}}),[P]);return null===P?null:(0,w.jsx)(s.xu,{className:"page",children:(0,w.jsxs)(k.Z,{showBack:!0,onBack:function(){D()},heading:e("card_details.title"),children:[(0,w.jsxs)(s.xu,{width:"100%",children:[(0,w.jsx)(C.Z,{data:P,showSecrets:!0,onReady:de},P.id),(0,w.jsxs)(s.xu,{className:"".concat(x," ").concat(p),children:[(0,w.jsx)(s.xv,{variant:"regular",pr:"2px",textAlign:"left",children:e("card_details.cardNo")}),(0,w.jsx)(s.xv,{className:"".concat(f," cardIframeWrapper cardIframeWrapper__number"),ref:ce,variant:"regular text-light"}),(0,w.jsx)("span",{className:"".concat(m," cardIframeWrapper cardIframeWrapper__copy"),ref:ie})]}),(0,w.jsxs)(s.xu,{onClick:oe,className:"".concat(x," ").concat(h),children:[(0,w.jsx)(s.xv,{variant:"regular",mr:"auto",textAlign:"left",children:e("card_details.transactions")}),(0,w.jsx)(u.Z,{icon:"Arrow-small-right",size:12,className:"svg-light-grey-1"})]}),(0,w.jsx)(s.xv,{variant:"large",pt:"20px",pb:"16px",children:e("card_details.actions")}),(0,w.jsxs)(s.xu,{rounded:"4px",pb:"20px",children:[(0,w.jsxs)(s.xu,{className:x,children:[(0,w.jsx)(s.xv,{variant:"regular",mr:"auto",textAlign:"left",children:e("card_details.freezeCard")}),(0,w.jsx)(o.r,{variant:"primary",id:"send-by-email",isChecked:T,onChange:function(e){return e.target.checked?Q(!0):J(!0),void R.toggle()}})]}),(0,w.jsxs)(s.xu,{className:x,children:[(0,w.jsxs)(s.xv,{variant:"regular",textAlign:"left",children:[e("card_details.cardLabel"),":"]}),(0,w.jsx)(s.xv,{variant:"regular",pl:"8px",mr:"auto",className:"text-light",children:P.label}),(0,w.jsx)(s.xv,{variant:"small",className:"".concat(h," text-dark"),fontSize:"14px",textDecor:"underline",onClick:function(){return A(S)},children:e("card_details.edit")})]}),(0,w.jsxs)(s.xu,{className:x,children:[(0,w.jsx)(s.xv,{variant:"regular",textAlign:"left",children:e("card_details.spendingLimit")}),(0,w.jsxs)(s.xv,{variant:"regular",color:"#2EC193",pl:"8px",mr:"auto",textAlign:"left",children:["$"," ",P.limitAmount]}),(0,w.jsx)(s.xv,{variant:"small",className:"".concat(h," text-dark"),fontSize:"14px",textDecor:"underline",onClick:function(){return A(S)},children:e("card_details.edit")})]}),"active"===P.cardStatus?(0,w.jsxs)(s.xu,{className:"".concat(x," ").concat(h),onClick:function(){return A(z)},children:[(0,w.jsx)(s.xv,{variant:"regular",mr:"auto",textAlign:"left",children:e("card_details.atmInfo")}),(0,w.jsx)(u.Z,{icon:"Arrow-small-right",size:12,className:"svg-light-grey-1"})]}):null,(0,w.jsxs)(s.xu,{className:"".concat(x," ").concat(h),onClick:function(){return ee(!0)},children:[(0,w.jsx)(s.xv,{variant:"regular",mr:"auto",textAlign:"left",children:e("card_details.cancelCard")}),(0,w.jsx)(u.Z,{icon:"Arrow-small-right",size:12,className:"svg-light-grey-1"})]}),(0,w.jsxs)(s.xu,{className:"".concat(x," ").concat(h),onClick:j.Z4,children:[(0,w.jsx)(s.xv,{variant:"regular",mr:"auto",textAlign:"left",children:e("card_details.getHelp")}),(0,w.jsx)(s.xv,{variant:"small",fontSize:"14px",textDecor:"underline",className:"".concat(h," text-dark"),children:e("card_details.chat")})]})]})]}),(0,w.jsx)(_.Z,{showModal:F,submitButton:e("card_details.cardInfo_freeze_button"),cancelButton:e("card_details.cancel"),title:e("card_details.freezeCard"),description:e("card_details.freezeDescription"),onCancel:function(){Q(!1),R.toggle()},onOk:le}),(0,w.jsx)(_.Z,{showModal:q,submitButton:e("card_details.cardInfo_unfreeze_button"),cancelButton:e("card_details.cancel"),title:e("card_details.unFreezeCard"),description:e("card_details.unFreezeDescription"),onCancel:function(){J(!1),Q(!1),R.toggle()},onOk:le}),(0,w.jsx)(_.Z,{showModal:Y,submitButton:e("card_details.yes"),cancelButton:e("card_details.no"),title:e("card_details.cancelCard"),description:e("card_details.cardInfo_cancel_alert_messsage"),onCancel:function(){return ee(!1)},onOk:se}),(0,w.jsx)(_.Z,{showModal:ne,submitButton:e("card_details.yes"),cancelButton:e("card_details.no"),title:e("card_details.replaceCard"),description:"Replacing your card will discard your exisiting card information and a new card will be issued with a different card number",onOk:function(){a((0,b.Py)(P.id)),re(!1),a((0,b.Qr)({cardType:P.cardType,accountId:P.accountId,currency:"USD"})),setTimeout((function(){A(S)}),0)},onCancel:function(){re(!1)}})]})})}},9743:function(e,a,t){t.d(a,{r:function(){return o}});var n=t(5420),r=t(1938),c=t(6831),i=t(2791);function l(){return l=Object.assign?Object.assign.bind():function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},l.apply(this,arguments)}var s=["spacing","children"],o=(0,r.Gp)((function(e,a){var t=(0,r.jC)("Switch",e),o=(0,r.Lr)(e),d=o.spacing,u=void 0===d?"0.5rem":d,h=o.children,x=function(e,a){if(null==e)return{};var t,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)t=c[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(o,s),m=(0,n.O)(x),f=m.state,p=m.getInputProps,_=m.getCheckboxProps,g=m.getRootProps,v=m.getLabelProps,j=i.useMemo((function(){return l({display:"inline-block",position:"relative",verticalAlign:"middle",lineHeight:0},t.container)}),[t.container]),C=i.useMemo((function(){return l({display:"inline-flex",flexShrink:0,justifyContent:"flex-start",boxSizing:"content-box",cursor:"pointer"},t.track)}),[t.track]),b=i.useMemo((function(){return l({userSelect:"none",marginStart:u},t.label)}),[u,t.label]);return i.createElement(r.m$.label,l({},g(),{className:(0,c.cx)("chakra-switch",e.className),__css:j}),i.createElement("input",l({className:"chakra-switch__input"},p({},a))),i.createElement(r.m$.span,l({},_(),{className:"chakra-switch__track",__css:C}),i.createElement(r.m$.span,{__css:t.thumb,className:"chakra-switch__thumb","data-checked":(0,c.PB)(f.isChecked),"data-hover":(0,c.PB)(f.isHovered)})),h&&i.createElement(r.m$.span,l({className:"chakra-switch__label"},v(),{__css:b}),h))}));c.Ts&&(o.displayName="Switch")}}]);
//# sourceMappingURL=9944.4c9637f1.chunk.js.map