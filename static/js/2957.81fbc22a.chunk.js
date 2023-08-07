"use strict";(self.webpackChunkdrop_in_ui=self.webpackChunkdrop_in_ui||[]).push([[2957],{9458:function(e,n,a){var l=a(2791),i=a(9275);n.Z=function(e){var n={token:e.token,onSuccess:e.onSuccess,onExit:e.onExit},a=(0,i.usePlaidLink)(n),o=a.open,r=a.ready;return(0,l.useEffect)((function(){r&&o()}),[r,o]),null}},2957:function(e,n,a){a.r(n),a.d(n,{default:function(){return F}});var l=a(9439),i=a(2791),o=a(2020),r=a(2504),s=a(8735),u=a(3445),t=a(5048),c=a(5649),d=a(4144),v="PullFrom_bankList__BcX8Q",f="PullFrom_pullFrom__lOm6n",h="PullFrom_bankInfo__bgAPf",m="PullFrom_removeBank__xdtyG",p="PullFrom_linkAccount__zroSx",b="PullFrom_transferType__JdFmJ",k=a(5304),g=a(3741),x=a(80),_=a(9458),C=a(4661),P=a(184),y=i.lazy((function(){return Promise.all([a.e(4398),a.e(870)]).then(a.bind(a,870))})),j=i.lazy((function(){return Promise.all([a.e(7551),a.e(7860)]).then(a.bind(a,7551))})),F=function(){var e=(0,o.$)().t,n=(0,k.Qo)(),a=(0,C.y)(),F=a.open,N=a.close,B=(a.data||{}).option,D=void 0===B?"bank":B,S=(0,k.CG)((function(e){return e.account}),t.wU),X=S.selectedAccount,R=S.selfBankAccounts,E=S.linkedCards,w=(0,i.useState)(null),A=(0,l.Z)(w,2),M=A[0],O=A[1],I=(0,i.useState)(""),q=(0,l.Z)(I,2),z=q[0],L=q[1],T=(0,i.useCallback)((function(){X&&n((0,g.MI)(null===X||void 0===X?void 0:X.id)).then((function(e){O(e.linkToken)})).catch(x.WH)}),[X]),G=(0,i.useCallback)((function(e,a){var l;(O(null),null!==X&&void 0!==X&&X.id)&&n((0,g.GS)({accountId:X.id,plaidAccountId:null===(l=a.accounts[0])||void 0===l?void 0:l.id,plaidToken:e})).catch((function(){(0,x.c0)("An error occurred.","Unable to verify plaid account","error")}))}),[X]);return(0,i.useEffect)((function(){X&&n("bank"===D?(0,g.CB)(X.id):(0,g.WO)(X.id))}),[D,X]),(0,P.jsx)("div",{className:"page",children:(0,P.jsx)(c.Z,{heading:e("pull_funds_from.title"),showBack:!0,footer:(0,P.jsx)(r.zx,{width:"100%",variant:"primary",disabled:""===z,onClick:function(){F(y,{option:D,contactId:z})},children:e("pull_funds_from.ctaText")}),onBack:function(){N()},children:(0,P.jsxs)(s.xu,{width:"100%",children:[0!==R.length&&"bank"===D?(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(s.xv,{variant:"large",className:f,children:e("pull_funds_from.pullFundsFrom")}),(0,P.jsx)(s.xu,{className:v,children:(0,P.jsx)(u.Ee,{onChange:L,value:z,children:R.map((function(a){return(0,P.jsxs)(s.xu,{className:h,children:[(0,P.jsx)(u.Y8,{value:a.id,children:(0,P.jsxs)(s.xv,{variant:"regular",className:"text-dark",children:[a.ach.bankName," ","XXXXXX"," ",a.ach.accountNumber.slice(a.ach.accountNumber.length-4)]})}),(0,P.jsx)(s.xv,{className:m,onClick:function(){n((0,g.d8)(a.id))},children:e("pull_funds_from.remove")})]},a.id)}))})})]}):null,0!==E.data.length&&"card"===D?(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(s.xv,{variant:"large",className:f,children:e("pull_funds_from.pullFundsFrom")}),(0,P.jsx)(s.xu,{className:v,children:(0,P.jsx)(u.Ee,{onChange:L,value:z,children:E.data.map((function(a){var l;return(0,P.jsxs)(s.xu,{className:h,children:[(0,P.jsx)(u.Y8,{value:a.id,children:(0,P.jsxs)(s.xv,{variant:"regular",className:"text-dark",children:["XXXX XXXX XXXX"," ",null===(l=a.debitCard)||void 0===l?void 0:l.last4]})}),(0,P.jsx)(s.xv,{className:m,onClick:function(){n((0,g.d8)(a.id,"card"))},children:e("pull_funds_from.remove")})]},a.id)}))})})]}):null,(0,P.jsx)(s.xv,{variant:"large",className:p,children:e("bank"===D?"pull_funds_from.linkAccount":"pull_funds_from.linkCard")}),(0,P.jsx)(r.zx,{width:"100%",variant:"unstyled",onClick:function(){"bank"===D?T():F(j)},children:(0,P.jsxs)(s.Ug,{className:b,children:[(0,P.jsx)(s.xu,{children:(0,P.jsx)(s.xv,{variant:"regular",children:e("bank"===D?"pull_funds_from.linkAnotherAccount":"pull_funds_from.linkAnotherCard")})}),(0,P.jsx)(d.Z,{icon:"Arrow-small-right",size:8,className:"svg-light-grey-1"})]})}),M?(0,P.jsx)(_.Z,{token:M,onSuccess:G,onExit:function(){O(null)}}):null]})})})}},3445:function(e,n,a){a.d(n,{Ee:function(){return k},Y8:function(){return C}});var l=a(1938),i=a(7160),o=a(6831),r=a(2791),s=a(9611),u=a(5223),t=a(3393),c=a(1212);function d(e,n){if(null==e)return{};var a,l,i={},o=Object.keys(e);for(l=0;l<o.length;l++)a=o[l],n.indexOf(a)>=0||(i[a]=e[a]);return i}function v(){return v=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var a=arguments[n];for(var l in a)Object.prototype.hasOwnProperty.call(a,l)&&(e[l]=a[l])}return e},v.apply(this,arguments)}var f=["onChange","value","defaultValue","name","isDisabled","isFocusable","isNative"];var h=["colorScheme","size","variant","children","className","isDisabled","isFocusable"],m=(0,s.kr)({name:"RadioGroupContext",strict:!1}),p=m[0],b=m[1],k=(0,l.Gp)((function(e,n){var a=e.colorScheme,i=e.size,t=e.variant,c=e.children,m=e.className,b=e.isDisabled,k=e.isFocusable,g=function(e){void 0===e&&(e={});var n=e,a=n.onChange,l=n.value,i=n.defaultValue,t=n.name,c=n.isDisabled,h=n.isFocusable,m=n.isNative,p=d(n,f),b=r.useState(i||""),k=b[0],g=b[1],x=(0,u.pY)(l,k),_=x[0],C=x[1],P=r.useRef(null),y=r.useCallback((function(){var e=P.current;if(e){var n="input:not(:disabled):checked",a=e.querySelector(n);if(a)a.focus();else{n="input:not(:disabled)";var l=e.querySelector(n);null==l||l.focus()}}}),[]),j=(0,u.Me)(void 0,"radio"),F=t||j,N=r.useCallback((function(e){var n=(0,o.kA)(e)?e.target.value:e;_||g(n),null==a||a(String(n))}),[a,_]),B=r.useCallback((function(e,n){return void 0===e&&(e={}),void 0===n&&(n=null),v({},e,{ref:(0,s.lq)(n,P),role:"radiogroup"})}),[]),D=r.useCallback((function(e,n){var a;return void 0===e&&(e={}),void 0===n&&(n=null),v({},e,((a={ref:n,name:F})[m?"checked":"isChecked"]=null!=C?e.value===C:void 0,a.onChange=N,a["data-radiogroup"]=!0,a))}),[m,F,N,C]);return{getRootProps:B,getRadioProps:D,name:F,ref:P,focus:y,setValue:g,value:C,onChange:N,isDisabled:c,isFocusable:h,htmlProps:p}}(d(e,h)),x=g.value,_=g.onChange,C=g.getRootProps,P=g.name,y=g.htmlProps,j=r.useMemo((function(){return{name:P,size:i,onChange:_,colorScheme:a,value:x,variant:t,isDisabled:b,isFocusable:k}}),[P,i,_,a,x,t,b,k]),F=C(y,n),N=(0,o.cx)("chakra-radio-group",m);return r.createElement(p,{value:j},r.createElement(l.m$.div,v({},F,{className:N}),c))}));o.Ts&&(k.displayName="RadioGroup");var g=["defaultChecked","isChecked","isFocusable","isDisabled","isReadOnly","isRequired","onChange","isInvalid","name","value","id","data-radiogroup","aria-describedby"];function x(e){e.preventDefault(),e.stopPropagation()}var _=["spacing","children","isDisabled","isFocusable","inputProps"],C=(0,l.Gp)((function(e,n){var a,s=b(),f=e.onChange,h=e.value,m=(0,l.jC)("Radio",v({},s,e)),p=(0,l.Lr)(e),k=p.spacing,C=void 0===k?"0.5rem":k,P=p.children,y=p.isDisabled,j=void 0===y?null==s?void 0:s.isDisabled:y,F=p.isFocusable,N=void 0===F?null==s?void 0:s.isFocusable:F,B=p.inputProps,D=d(p,_),S=e.isChecked;null!=(null==s?void 0:s.value)&&null!=h&&(S=s.value===h);var X=f;null!=s&&s.onChange&&null!=h&&(X=(0,o.PP)(s.onChange,f));var R=function(e){void 0===e&&(e={});var n=e,a=n.defaultChecked,l=n.isChecked,i=n.isFocusable,s=n.isDisabled,f=n.isReadOnly,h=n.isRequired,m=n.onChange,p=n.isInvalid,k=n.name,_=n.value,C=n.id,P=n["data-radiogroup"],y=n["aria-describedby"],j=d(n,g),F=(0,u.Me)(void 0,"radio"),N=(0,t.NJ)(),B=b(),D=!N||B||P?F:N.id;D=null!=C?C:D;var S=null!=s?s:null==N?void 0:N.isDisabled,X=null!=f?f:null==N?void 0:N.isReadOnly,R=null!=h?h:null==N?void 0:N.isRequired,E=null!=p?p:null==N?void 0:N.isInvalid,w=(0,u.kt)(),A=w[0],M=w[1],O=(0,u.kt)(),I=O[0],q=O[1],z=(0,u.kt)(),L=z[0],T=z[1],G=(0,r.useState)(Boolean(a)),U=G[0],Z=G[1],Q=(0,u.pY)(l,U),Y=Q[0],$=Q[1],K=(0,r.useCallback)((function(e){X||S?e.preventDefault():(Y||Z(e.target.checked),null==m||m(e))}),[Y,S,X,m]),V=(0,r.useCallback)((function(e){" "===e.key&&T.on()}),[T]),J=(0,r.useCallback)((function(e){" "===e.key&&T.off()}),[T]),H=(0,r.useCallback)((function(e,n){return void 0===e&&(e={}),void 0===n&&(n=null),v({},e,{ref:n,"data-active":(0,o.PB)(L),"data-hover":(0,o.PB)(I),"data-disabled":(0,o.PB)(S),"data-invalid":(0,o.PB)(E),"data-checked":(0,o.PB)($),"data-focus":(0,o.PB)(A),"data-readonly":(0,o.PB)(X),"aria-hidden":!0,onMouseDown:(0,o.v0)(e.onMouseDown,T.on),onMouseUp:(0,o.v0)(e.onMouseUp,T.off),onMouseEnter:(0,o.v0)(e.onMouseEnter,q.on),onMouseLeave:(0,o.v0)(e.onMouseLeave,q.off)})}),[L,I,S,E,$,A,X,T.on,T.off,q.on,q.off]),W=null!=N?N:{},ee=W.onFocus,ne=W.onBlur,ae=(0,r.useCallback)((function(e,n){void 0===e&&(e={}),void 0===n&&(n=null);var a=S&&!i;return v({},e,{id:D,ref:n,type:"radio",name:k,value:_,onChange:(0,o.v0)(e.onChange,K),onBlur:(0,o.v0)(ne,e.onBlur,M.off),onFocus:(0,o.v0)(ee,e.onFocus,M.on),onKeyDown:(0,o.v0)(e.onKeyDown,V),onKeyUp:(0,o.v0)(e.onKeyUp,J),checked:$,disabled:a,readOnly:X,required:R,"aria-invalid":(0,o.Qm)(E),"aria-disabled":(0,o.Qm)(a),"aria-required":(0,o.Qm)(R),"data-readonly":(0,o.PB)(X),"aria-describedby":y,style:c.NL})}),[S,i,D,k,_,K,ne,M,ee,V,J,$,X,R,E,y]);return{state:{isInvalid:E,isFocused:A,isChecked:$,isActive:L,isHovered:I,isDisabled:S,isReadOnly:X,isRequired:R},getCheckboxProps:H,getInputProps:ae,getLabelProps:function(e,n){return void 0===e&&(e={}),void 0===n&&(n=null),v({},e,{ref:n,onMouseDown:(0,o.v0)(e.onMouseDown,x),onTouchStart:(0,o.v0)(e.onTouchStart,x),"data-disabled":(0,o.PB)(S),"data-checked":(0,o.PB)($),"data-invalid":(0,o.PB)(E)})},getRootProps:function(e,n){return void 0===n&&(n=null),v({},e,{ref:n,"data-disabled":(0,o.PB)(S),"data-checked":(0,o.PB)($),"data-invalid":(0,o.PB)(E)})},htmlProps:j}}(v({},D,{isChecked:S,isFocusable:N,isDisabled:j,onChange:X,name:null!=(a=null==e?void 0:e.name)?a:null==s?void 0:s.name})),E=R.getInputProps,w=R.getCheckboxProps,A=R.getLabelProps,M=R.getRootProps,O=R.htmlProps,I=(0,o.Vl)(O,i.oE),q=I[0],z=w(I[1]),L=E(B,n),T=A(),G=Object.assign({},q,M()),U=v({display:"inline-flex",alignItems:"center",verticalAlign:"top",cursor:"pointer",position:"relative"},m.container),Z=v({display:"inline-flex",alignItems:"center",justifyContent:"center",flexShrink:0},m.control),Q=v({userSelect:"none",marginStart:C},m.label);return r.createElement(l.m$.label,v({className:"chakra-radio"},G,{__css:U}),r.createElement("input",v({className:"chakra-radio__input"},L)),r.createElement(l.m$.span,v({className:"chakra-radio__control"},z,{__css:Z})),P&&r.createElement(l.m$.span,v({className:"chakra-radio__label"},T,{__css:Q}),P))}));o.Ts&&(C.displayName="Radio")}}]);
//# sourceMappingURL=2957.81fbc22a.chunk.js.map