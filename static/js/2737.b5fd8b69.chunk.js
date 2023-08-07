"use strict";(self.webpackChunkdrop_in_ui=self.webpackChunkdrop_in_ui||[]).push([[2737],{5919:function(n,t,e){e.d(t,{Z:function(){return v}});var r=e(1413),i=e(9439),a=e(2791),c=e(5568),o=e(5048),l=e(9916),d=e(5798),u=e(5304),s=function(n,t){return n.find((function(n){return n.types.includes(t)}))},f=e(184),v=function(n){var t=n.address,e=n.onChange,v=n.googleApiKey,h=n.placeholder,g=n.restrictedCountry,y=n.international,p=(0,a.useState)((0,r.Z)({},t)),m=(0,i.Z)(p,2),_=m[0],Z=m[1],b=(0,a.useState)((null===t||void 0===t?void 0:t.line1)||""),x=(0,i.Z)(b,2),A=x[0],C=x[1],j=(0,a.useRef)(null),I=(0,u.CG)((function(n){return n.user.personDetails}),o.wU),w=(0,a.useMemo)((function(){if(g)return g;if(null!==I&&void 0!==I&&I.phone)try{var n=(0,l.SR)(null===I||void 0===I?void 0:I.phone);return(null===n||void 0===n?void 0:n.country)||"US"}catch(t){return"US"}return"US"}),[I,g]);(0,a.useEffect)((function(){window.gm_authFailure=function(){return j.current.disabled=!1,j.current.placeholder="",j.current.style.backgroundImage="",j.current.focus(),!1}}),[]),(0,a.useEffect)((function(){t&&(Z(t),C(t.line1))}),[t]);return(0,f.jsx)(d.II,{variant:"primary","data-testid":"address-line1",as:c.default,ref:j,apiKey:v,onPlaceSelected:function(n){if(n){var t=function(n){var t=n.address_components,e=n.geometry,r={},i=t,a=s(i,"premise"),c=s(i,"street_number"),o=s(i,"route"),l=s(i,"locality"),d=s(i,"sublocality_level_1"),u=s(i,"postal_town"),f=s(i,"administrative_area_level_1"),v=s(i,"country"),h=s(i,"postal_code"),g=[c,a,o];return l||(l=u||d),r.line1=g.filter((function(n){return n})).map((function(n){return n.long_name})).join(" "),r.line2=null,r.city=l?l.long_name:null,r.postalCode=h?h.long_name:null,r.state=f?f.short_name:null,r.country=v?v.short_name:null,r.latitude=e.location.lat,r.longitude=e.location.lng,r}(n),i=t.line1,a=t.line2,c=t.city,o=t.state,l=t.postalCode,d=t.country,u=(0,r.Z)((0,r.Z)({},_),{},{line1:i,line2:a,city:c,state:o,country:d,postalCode:l});Z(u),e(u),C(i)}},value:A,placeholder:h||"",onChange:function(n){C(n.target.value);var t=(0,r.Z)((0,r.Z)({},_),{},{line1:n.target.value});y||(t.country=w),e(t)},options:{types:["address"],componentRestrictions:y?void 0:{country:w}}})}},7208:function(n,t,e){e.d(t,{LH:function(){return d},M_:function(){return m},OV:function(){return f},P1:function(){return p},QZ:function(){return u},XN:function(){return h},e:function(){return y},ms:function(){return v},nO:function(){return s},on:function(){return l},zp:function(){return g}});var r=e(3433),i=e(1413),a=e(80),c=e(286),o=e(3746),l=function(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:25,e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,a=arguments.length>3?arguments[3]:void 0;return function(l,d){return new Promise((function(u,s){l((0,o.IT)(!0));var f="/v1/card?accountId=".concat(n,"&limit=").concat(t,"&offset=").concat(e);a&&(f+="&query=".concat(a,"&last4=").concat(a)),c.Z.get(f).then((function(n){var t=n.data,a=d().card,c={total:0,data:[]};if(0===e)c=t;else{var s=(0,i.Z)({},a.cards);c={data:[].concat((0,r.Z)(s.data),(0,r.Z)(t.data)),total:t.total}}l((0,o.YF)(c)),u(c)})).catch((function(n){s(n)})).finally((function(){l((0,o.IT)(!1))}))}))}},d=function(n){return function(t){return(0,a.V_)(!0),new Promise((function(e,r){c.Z.post("/v1/card",n).then((function(n){var r=n.data;t((0,o.Vf)(r)),e(r)})).catch((function(n){r(n)})).finally((function(){(0,a.V_)(!1)}))}))}},u=function(n,t){return function(e,r){return new Promise((function(i,o){(0,a.V_)(!0),c.Z.patch("/v1/card/".concat(n,"/activate"),t).then((function(n){var t=n.data,a=r().account.selectedAccount;a&&setTimeout((function(){e(l(a.id))}),0),i(t)})).catch((function(n){o(n)})).finally((function(){(0,a.V_)(!1)}))}))}},s=function(n){return function(){return new Promise((function(t,e){(0,a.V_)(!0),c.Z.get("/v1/card/".concat(n)).then((function(n){var e=n.data;t(e)})).catch((function(n){e(n)})).finally((function(){(0,a.V_)(!1)}))}))}},f=function(n,t){return function(){return new Promise((function(e,r){(0,a.V_)(!0),c.Z.patch("v1/card/".concat(n),t).then((function(n){var t=n.data;e(t)})).catch((function(n){r(n)})).finally((function(){(0,a.V_)(!1)}))}))}},v=function(n){return function(){return new Promise((function(t,e){c.Z.post("v1/card/".concat(n,"/show-token")).then((function(n){var e=n.data;t(e)})).catch((function(n){e(n)}))}))}},h=function(n){return function(){return new Promise((function(t,e){(0,a.V_)(!0),c.Z.delete("/v1/card/".concat(n)).then((function(n){var e=n.data;t(e)})).catch((function(n){e(n)})).finally((function(){(0,a.V_)(!1)}))}))}},g=function(n){var t=n.cardId,e=n.lat,r=n.long,i=n.limit,a=void 0===i?25:i,l=n.page,d=void 0===l?1:l;return function(n){return new Promise((function(i,l){n((0,o.b)(!0));var u=a*(d-1);c.Z.get("v1/card/atm?cardId=".concat(t,"&limit=").concat(a,"&offset=").concat(u,"&latitude=").concat(e,"&longitude=").concat(r,"&radius=5")).then((function(t){var e=t.data;n((0,o.oE)(e)),i(e)})).catch((function(n){l(n)})).finally((function(){n((0,o.b)(!1))}))}))}},y=function(n){return function(){return new Promise((function(t,e){(0,a.V_)(!0),c.Z.post("v1/card/".concat(n,"/pintoken")).then((function(n){var e=n.data;t(e)})).catch((function(n){e(n)})).finally((function(){return(0,a.V_)(!1)}))}))}},p=function(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:25,e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,a=arguments.length>3?arguments[3]:void 0;return function(l,d){return new Promise((function(u,s){l((0,o.IT)(!0));var f="/v1/send/card?accountId=".concat(n,"&limit=").concat(t,"&offset=").concat(e);a&&(f+="&query=".concat(a)),c.Z.get(f).then((function(n){var t=n.data,a=d().card,c=t.data.filter((function(n){return null!==n.card})),s={total:0,data:[]};if(0===e)s={data:c,total:c.length};else{var f=(0,i.Z)({},a.sentCards);s={data:[].concat((0,r.Z)(f.data),(0,r.Z)(c)),total:c.length}}l((0,o.yW)(s)),u(s)})).catch((function(n){s(n)})).finally((function(){l((0,o.IT)(!1))}))}))}},m=function(n){return function(){return new Promise((function(t,e){(0,a.V_)(!0),c.Z.post("/v1/send/card/cancel",{cardId:n}).then((function(n){var e=n.data;t(e)})).catch((function(n){e(n)})).finally((function(){(0,a.V_)(!1)}))}))}}},2252:function(n,t,e){e.r(t);var r=e(4942),i=e(1413),a=e(9439),c=e(2791),o=e(1938),l=e(2504),d=e(8735),u=e(9743),s=e(3393),f=e(5798),v=e(2020),h=e(5048),g=e(5649),y=e(5919),p=e(5304),m=e(80),_=e(3746),Z=e(7208),b=e(4661),x=e(184),A=c.lazy((function(){return e.e(1330).then(e.bind(e,2637))})),C=c.lazy((function(){return Promise.all([e.e(7625),e.e(3054)]).then(e.bind(e,3054))}));t.default=function(){var n,t,e,j,I=(0,v.$)().t,w=(0,p.Qo)(),V=(0,b.y)(),k=V.open,P=V.goBack,S=(0,o.mq)("FormControl",{variant:"primary"}),N=(0,c.useState)(!0),T=(0,a.Z)(N,2),U=T[0],X=T[1],z=(0,p.CG)((function(n){return n.card.cardPayload}),h.wU),B=(0,p.CG)((function(n){return n.card.replaceCardId})),H=(0,c.useCallback)((function(n,t){if(z){var e=(0,i.Z)((0,i.Z)({},z),{},(0,r.Z)({},n,t));w((0,_.Qr)(e))}}),[z]),D=(0,c.useMemo)((function(){return z&&!!z.billingAddress&&!!z.billingAddress.line1&&!!z.billingAddress.city&&!!z.billingAddress.state&&!!z.billingAddress.country&&!!z.billingAddress.postalCode&&0!==z.billingAddress.line1.length&&0!==z.billingAddress.city.length&&0!==z.billingAddress.state.length&&0!==z.billingAddress.country.length&&0!==z.billingAddress.postalCode.length}),[z]),F=(0,c.useCallback)((function(){D&&z&&(U?(z.shipping={shippingAddress:z.billingAddress},w((0,Z.LH)(z)).then((function(){B?w((0,Z.XN)(B)).catch(m.WH).finally((function(){k(C)})):k(C)})).catch(m.WH)):k(A))}),[D,B,U,z]);return(0,x.jsx)("div",{className:"page",children:(0,x.jsx)("form",{onSubmit:function(n){n.preventDefault(),F()},children:(0,x.jsx)(g.Z,{heading:I("create_card_info.title_".concat(null===z||void 0===z?void 0:z.cardType)),onBack:P,footer:(0,x.jsx)(l.zx,{width:"100%",variant:"primary",disabled:!D,onClick:F,children:I("create_card_address.ctaText")}),children:(0,x.jsxs)(d.xu,{width:"100%",children:["physical"===(null===z||void 0===z?void 0:z.cardType)?(0,x.jsxs)(d.kC,{alignItems:"center",justifyContent:"space-between",children:[(0,x.jsxs)(d.xu,{children:[(0,x.jsx)(d.xv,{variant:"large",textAlign:"left",children:I("create_card_address.confirmBillingAddressTitle")}),(0,x.jsx)(d.xv,{variant:"regular",className:"text-light",textAlign:"left",children:I("create_card_address.confirmBillingAddressDesc")})]}),(0,x.jsx)(u.r,{variant:"primary",defaultChecked:U,onChange:function(){X(!U)}})]}):null,(0,x.jsx)(d.xv,{variant:"large",mt:3,children:I("create_card_address.confirmMailingAddress")}),(0,x.jsxs)(s.NI,{variant:"primary",style:S,children:[(0,x.jsx)(s.lX,{variant:"primary",children:I("create_card_address.address1")}),(0,x.jsx)(y.Z,{placeholder:I("create_card_address.address1"),googleApiKey:"AIzaSyDcW61NFxklslLuuUxNw0SzoBmHyC4Zhh4",address:(null===z||void 0===z?void 0:z.billingAddress)||void 0,restrictedCountry:"physical"===(null===z||void 0===z?void 0:z.cardType)?"US":void 0,onChange:function(n){H("billingAddress",(0,i.Z)((0,i.Z)({},n),{},{addressType:"mailing"}))}})]}),(0,x.jsxs)(s.NI,{variant:"primary",style:S,children:[(0,x.jsx)(s.lX,{variant:"primary",children:I("create_card_address.address2")}),(0,x.jsx)(f.II,{variant:"primary",placeholder:I("create_card_address.address2"),value:null===z||void 0===z||null===(n=z.billingAddress)||void 0===n?void 0:n.line2,onChange:function(n){H("billingAddress",(0,i.Z)((0,i.Z)({},(null===z||void 0===z?void 0:z.billingAddress)||{}),{},{line2:n.target.value}))}})]}),(0,x.jsxs)(s.NI,{variant:"primary",style:S,children:[(0,x.jsx)(s.lX,{variant:"primary",children:I("create_card_address.addressCity")}),(0,x.jsx)(f.II,{variant:"primary",placeholder:I("create_card_address.addressCity"),value:null===z||void 0===z||null===(t=z.billingAddress)||void 0===t?void 0:t.city,onChange:function(n){H("billingAddress",(0,i.Z)((0,i.Z)({},(null===z||void 0===z?void 0:z.billingAddress)||{}),{},{city:n.target.value}))}})]}),(0,x.jsxs)(s.NI,{variant:"primary",style:S,children:[(0,x.jsx)(s.lX,{variant:"primary",children:I("create_card_address.addressState")}),(0,x.jsx)(f.II,{variant:"primary",placeholder:I("create_card_address.addressState"),value:null===z||void 0===z||null===(e=z.billingAddress)||void 0===e?void 0:e.state,onChange:function(n){H("billingAddress",(0,i.Z)((0,i.Z)({},(null===z||void 0===z?void 0:z.billingAddress)||{}),{},{state:n.target.value}))}})]}),(0,x.jsxs)(s.NI,{variant:"primary",style:S,children:[(0,x.jsx)(s.lX,{variant:"primary",children:I("create_card_address.addressZipcode")}),(0,x.jsx)(f.II,{variant:"primary",placeholder:I("create_card_address.addressZipcode"),value:null===z||void 0===z||null===(j=z.billingAddress)||void 0===j?void 0:j.postalCode,onChange:function(n){H("billingAddress",(0,i.Z)((0,i.Z)({},(null===z||void 0===z?void 0:z.billingAddress)||{}),{},{postalCode:n.target.value}))}})]})]})})})})}}}]);
//# sourceMappingURL=2737.b5fd8b69.chunk.js.map