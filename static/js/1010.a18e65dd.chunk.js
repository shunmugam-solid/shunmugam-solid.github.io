"use strict";(self.webpackChunkdrop_in_ui=self.webpackChunkdrop_in_ui||[]).push([[1010],{5919:function(e,t,n){n.d(t,{Z:function(){return p}});var r=n(1413),o=n(9439),a=n(2791),i=n(5568),u=n(5048),c=n(9916),l=n(5798),s=n(5304),d=function(e,t){return e.find((function(e){return e.types.includes(t)}))},f=n(184),p=function(e){var t=e.address,n=e.onChange,p=e.googleApiKey,y=e.placeholder,v=e.restrictedCountry,m=e.international,g=(0,a.useState)((0,r.Z)({},t)),h=(0,o.Z)(g,2),b=h[0],_=h[1],O=(0,a.useState)((null===t||void 0===t?void 0:t.line1)||""),j=(0,o.Z)(O,2),w=j[0],P=j[1],S=(0,a.useRef)(null),Z=(0,s.CG)((function(e){return e.user.personDetails}),u.wU),C=(0,a.useMemo)((function(){if(v)return v;if(null!==Z&&void 0!==Z&&Z.phone)try{var e=(0,c.SR)(null===Z||void 0===Z?void 0:Z.phone);return(null===e||void 0===e?void 0:e.country)||"US"}catch(t){return"US"}return"US"}),[Z,v]);(0,a.useEffect)((function(){window.gm_authFailure=function(){return S.current.disabled=!1,S.current.placeholder="",S.current.style.backgroundImage="",S.current.focus(),!1}}),[]),(0,a.useEffect)((function(){t&&(_(t),P(t.line1))}),[t]);return(0,f.jsx)(l.II,{variant:"primary","data-testid":"address-line1",as:i.default,ref:S,apiKey:p,onPlaceSelected:function(e){if(e){var t=function(e){var t=e.address_components,n=e.geometry,r={},o=t,a=d(o,"premise"),i=d(o,"street_number"),u=d(o,"route"),c=d(o,"locality"),l=d(o,"sublocality_level_1"),s=d(o,"postal_town"),f=d(o,"administrative_area_level_1"),p=d(o,"country"),y=d(o,"postal_code"),v=[i,a,u];return c||(c=s||l),r.line1=v.filter((function(e){return e})).map((function(e){return e.long_name})).join(" "),r.line2=null,r.city=c?c.long_name:null,r.postalCode=y?y.long_name:null,r.state=f?f.short_name:null,r.country=p?p.short_name:null,r.latitude=n.location.lat,r.longitude=n.location.lng,r}(e),o=t.line1,a=t.line2,i=t.city,u=t.state,c=t.postalCode,l=t.country,s=(0,r.Z)((0,r.Z)({},b),{},{line1:o,line2:a,city:i,state:u,country:l,postalCode:c});_(s),n(s),P(o)}},value:w,placeholder:y||"",onChange:function(e){P(e.target.value);var t=(0,r.Z)((0,r.Z)({},b),{},{line1:e.target.value});m||(t.country=C),n(t)},options:{types:["address"],componentRestrictions:m?void 0:{country:C}}})}},1023:function(e,t,n){var r=n(2791),o=n(5798),a=n(4398),i=n.n(a),u=n(184);t.Z=function(e){var t=e.onChange,n=e.value,a=e.placeholder,c=e.prefix,l=e.digits,s=(0,r.useRef)(null);return(0,r.useLayoutEffect)((function(){s.current&&i()("currency",{autoUnmask:!0,allowMinus:!1,prefix:null!==c&&void 0!==c?c:"$ ",placeholder:a,rightAlign:!1,digits:l,numericInput:!0}).mask(s.current)}),[c,l,a]),(0,u.jsx)(o.II,{"data-testid":"currency-input",variant:"primary",placeholder:a||"$ 0.00",ref:s,onChange:function(e){var n=e.target.value;t(n)},value:n})}},5694:function(e,t,n){n.d(t,{V:function(){return o}});var r=n(2560),o=function(e){return{type:r.Q,payload:e}}},4785:function(e,t,n){n.d(t,{DN:function(){return l},ee:function(){return i},nc:function(){return s},rc:function(){return u},zt:function(){return c}});var r=n(286),o=n(80),a=n(5694),i=function(e){return function(t){return new Promise((function(n,i){(0,o.V_)(!0),r.Z.post("v1/send/intrabank",e).then((function(e){var r=e.data;t((0,a.V)(r)),n(r)})).catch(i).finally((function(){(0,o.V_)(!1)}))}))}},u=function(e){return function(t){return new Promise((function(n,i){(0,o.V_)(!0),r.Z.post("v1/send/ach",e).then((function(e){var r=e.data;t((0,a.V)(r)),n(r)})).catch(i).finally((function(){(0,o.V_)(!1)}))}))}},c=function(e){return function(t){return new Promise((function(n,i){(0,o.V_)(!0),r.Z.post("v1/send/wire",e).then((function(e){var r=e.data;t((0,a.V)(r)),n(r)})).catch(i).finally((function(){(0,o.V_)(!1)}))}))}},l=function(e){return function(t){return new Promise((function(n,i){(0,o.V_)(!0),r.Z.post("v1/send/card",e).then((function(e){var r=e.data;t((0,a.V)(r)),n(r)})).catch(i).finally((function(){(0,o.V_)(!1)}))}))}},s=function(e){return function(t){return new Promise((function(n,i){(0,o.V_)(!0),r.Z.post("v1/send/check",e).then((function(e){var r=e.data;t((0,a.V)(r)),n(r)})).catch(i).finally((function(){(0,o.V_)(!1)}))}))}}},1010:function(e,t,n){n.r(t);var r=n(1413),o=n(9439),a=n(2791),i=n(2504),u=n(8735),c=n(3393),l=n(5798),s=n(5048),d=n(2020),f=n(5304),p=n(5649),y=n(5919),v=n(7770),m=n(80),g=n(4785),h=n(1023),b=n(4661),_=n(184),O=a.lazy((function(){return Promise.all([n.e(7625),n.e(3189)]).then(n.bind(n,3189))}));t.default=function(){var e,t,n,j,w,P=(0,d.$)().t,S=(0,f.Qo)(),Z=(0,b.y)().open,C=(0,f.CG)((function(e){return e.contact.selectedContact}),s.wU),k=(0,f.CG)((function(e){return e.account.selectedAccount}),s.wU),x=(0,a.useState)({name:(null===C||void 0===C?void 0:C.name)||"",address:(null===C||void 0===C||null===(e=C.check)||void 0===e?void 0:e.address)||{line1:"",line2:"",city:"",state:"",country:"US",postalCode:"",addressType:"legal"}}),I=(0,o.Z)(x,2),M=I[0],E=I[1],A=(0,a.useState)({amount:"",description:""}),R=(0,o.Z)(A,2),L=R[0],U=R[1],V=(0,a.useMemo)((function(){return M&&!!M.address&&!!M.address.line1&&!!M.address.city&&!!M.address.state&&!!M.address.country&&!!M.address.postalCode&&0!==M.address.line1.length&&0!==M.address.city.length&&0!==M.address.state.length&&0!==M.address.country.length&&0!==M.address.postalCode.length&&0!==L.amount.length&&0!==L.description.length}),[M,L]),T=(0,a.useCallback)((function(){V&&C&&C.id&&M.address&&k&&S((0,v.Tk)(C.id,{accountId:C.accountId,check:{address:M.address}})).then((function(){S((0,g.nc)({accountId:k.id,contactId:C.id||"",type:"physical",amount:L.amount,description:L.description})).then((function(){Z(O)})).catch(m.WH)})).catch(m.WH)}),[M,C,V,k,L]);return(0,_.jsx)("div",{className:"page",children:(0,_.jsx)("form",{onSubmit:function(e){e.preventDefault(),T()},children:(0,_.jsx)(p.Z,{heading:P("payments_check.title"),footer:(0,_.jsx)(i.zx,{width:"100%",variant:"primary",disabled:!V,onClick:T,children:P("payments_check.ctaText")}),children:(0,_.jsxs)(u.xu,{width:"100%",paddingTop:"15px",children:[(0,_.jsxs)(c.NI,{variant:"primary",children:[(0,_.jsx)(c.lX,{variant:"primary",children:P("payments_check.name")}),(0,_.jsx)(l.II,{variant:"primary",value:(null===M||void 0===M?void 0:M.name)||"",onChange:function(e){E((0,r.Z)((0,r.Z)({},M),{},{name:e.target.value}))}})]}),(0,_.jsxs)(c.NI,{variant:"primary",children:[(0,_.jsx)(c.lX,{variant:"primary",children:P("payments_check.address1")}),(0,_.jsx)(y.Z,{restrictedCountry:"US",placeholder:P("payments_check.address1"),googleApiKey:"AIzaSyDcW61NFxklslLuuUxNw0SzoBmHyC4Zhh4",address:(null===M||void 0===M?void 0:M.address)||void 0,onChange:function(e){E((0,r.Z)((0,r.Z)({},M),{},{address:(0,r.Z)((0,r.Z)((0,r.Z)({},M.address),e),{},{addressType:"legal"})}))}})]}),(0,_.jsxs)(c.NI,{variant:"primary",children:[(0,_.jsx)(c.lX,{variant:"primary",children:P("payments_check.address2")}),(0,_.jsx)(l.II,{variant:"primary",placeholder:P("payments_check.address2"),value:null===M||void 0===M||null===(t=M.address)||void 0===t?void 0:t.line2,onChange:function(e){E((0,r.Z)((0,r.Z)({},M),{},{address:(0,r.Z)((0,r.Z)({},M.address),{},{line2:e.target.value})}))}})]}),(0,_.jsxs)(c.NI,{variant:"primary",children:[(0,_.jsx)(c.lX,{variant:"primary",children:P("payments_check.addressCity")}),(0,_.jsx)(l.II,{variant:"primary",placeholder:P("payments_check.addressCity"),value:null===M||void 0===M||null===(n=M.address)||void 0===n?void 0:n.city,onChange:function(e){E((0,r.Z)((0,r.Z)({},M),{},{address:(0,r.Z)((0,r.Z)({},M.address),{},{city:e.target.value})}))}})]}),(0,_.jsxs)(c.NI,{variant:"primary",children:[(0,_.jsx)(c.lX,{variant:"primary",children:P("payments_check.addressState")}),(0,_.jsx)(l.II,{variant:"primary",placeholder:P("payments_check.addressState"),value:null===M||void 0===M||null===(j=M.address)||void 0===j?void 0:j.state,onChange:function(e){E((0,r.Z)((0,r.Z)({},M),{},{address:(0,r.Z)((0,r.Z)({},M.address),{},{state:e.target.value})}))}})]}),(0,_.jsxs)(c.NI,{variant:"primary",children:[(0,_.jsx)(c.lX,{variant:"primary",children:P("payments_check.addressZipcode")}),(0,_.jsx)(l.II,{variant:"primary",placeholder:P("payments_check.addressZipcode"),value:null===M||void 0===M||null===(w=M.address)||void 0===w?void 0:w.postalCode,onChange:function(e){E((0,r.Z)((0,r.Z)({},M),{},{address:(0,r.Z)((0,r.Z)({},M.address),{},{postalCode:e.target.value})}))}})]}),(0,_.jsxs)(c.NI,{variant:"primary",children:[(0,_.jsx)(c.lX,{variant:"primary",children:P("payments_check.amount")}),(0,_.jsx)(h.Z,{value:L.amount,onChange:function(e){U((0,r.Z)((0,r.Z)({},L),{},{amount:e||""}))}})]}),(0,_.jsxs)(c.NI,{variant:"primary",children:[(0,_.jsx)(c.lX,{variant:"primary",children:P("payments_check.purpose")}),(0,_.jsx)(l.II,{variant:"primary",value:L.description,onChange:function(e){U((0,r.Z)((0,r.Z)({},L),{},{description:e.target.value}))}})]})]})})})})}},5568:function(e,t,n){e.exports=n(3984)},7802:function(e,t,n){function r(e){return r="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==r(e)&&"function"!==typeof e)return{default:e};var n=c(t);if(n&&n.has(e))return n.get(e);var o={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){var u=a?Object.getOwnPropertyDescriptor(e,i):null;u&&(u.get||u.set)?Object.defineProperty(o,i,u):o[i]=e[i]}o.default=e,n&&n.set(e,o);return o}(n(2791)),a=u(n(2007)),i=u(n(9476));function u(e){return e&&e.__esModule?e:{default:e}}function c(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(c=function(e){return e?n:t})(e)}function l(){return l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},l.apply(this,arguments)}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function d(e){var t=e.onPlaceSelected,n=e.apiKey,r=e.libraries,a=e.inputAutocompleteValue,u=e.options,c=e.googleMapsScriptBaseUrl,d=e.refProp,f=e.language,p=s(e,["onPlaceSelected","apiKey","libraries","inputAutocompleteValue","options","googleMapsScriptBaseUrl","refProp","language"]),y=(0,i.default)({ref:d,googleMapsScriptBaseUrl:c,onPlaceSelected:t,apiKey:n,libraries:r,inputAutocompleteValue:a,options:u,language:f}).ref;return o.default.createElement("input",l({ref:y},p))}d.propTypes={apiKey:a.default.string,libraries:a.default.arrayOf(a.default.string),ref:a.default.oneOfType([a.default.func,a.default.shape({current:a.default.any})]),googleMapsScriptBaseUrl:a.default.string,onPlaceSelected:a.default.func,inputAutocompleteValue:a.default.string,options:a.default.shape({componentRestrictions:a.default.object,bounds:a.default.object,location:a.default.object,offset:a.default.number,origin:a.default.object,radius:a.default.number,sessionToken:a.default.object,types:a.default.arrayOf(a.default.string)}),language:a.default.string};var f=(0,o.forwardRef)((function(e,t){return o.default.createElement(d,l({},e,{refProp:t}))}));t.default=f},6615:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.GOOGLE_MAP_SCRIPT_BASE_URL=void 0;t.GOOGLE_MAP_SCRIPT_BASE_URL="https://maps.googleapis.com/maps/api/js"},3984:function(e,t,n){Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r.default}});var r=a(n(7802)),o=a(n(9476));function a(e){return e&&e.__esModule?e:{default:e}}},9476:function(e,t,n){function r(e){return r="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=e.ref,n=e.onPlaceSelected,r=e.apiKey,u=e.libraries,c=void 0===u?"places":u,s=e.inputAutocompleteValue,d=void 0===s?"new-password":s,f=e.options,p=(f=void 0===f?{}:f).types,y=void 0===p?["(cities)"]:p,v=f.componentRestrictions,m=f.fields,g=void 0===m?["address_components","geometry.location","place_id","formatted_address"]:m,h=f.bounds,b=function(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}(f,["types","componentRestrictions","fields","bounds"]),_=e.googleMapsScriptBaseUrl,O=void 0===_?i.GOOGLE_MAP_SCRIPT_BASE_URL:_,j=e.language,w=(0,o.useRef)(null),P=(0,o.useRef)(null),S=(0,o.useRef)(null),Z=(0,o.useRef)(null),C=j?"&language=".concat(j):"",k="".concat(O,"?libraries=").concat(c,"&key=").concat(r).concat(C),x=(0,o.useCallback)((function(){return(0,a.loadGoogleMapScript)(O,k)}),[O,k]);return(0,o.useEffect)((function(){var e=l(l({},b),{},{fields:g,types:y,bounds:h});if(v&&(e.componentRestrictions=v),!S.current&&w.current&&a.isBrowser){t&&!t.current&&(t.current=w.current);var o=function(){var t;return"undefined"===typeof google?console.error("Google has not been found. Make sure your provide apiKey prop."):null!==(t=google.maps)&&void 0!==t&&t.places?!w.current instanceof HTMLInputElement?console.error("Input ref must be HTMLInputElement."):(S.current=new google.maps.places.Autocomplete(w.current,e),void(S.current&&(P.current=S.current.addListener("place_changed",(function(){n&&S&&S.current&&n(S.current.getPlace(),w.current,S.current)}))))):console.error("Google maps places API must be loaded.")};return r?x().then((function(){return o()})):o(),function(){return P.current?P.current.remove():void 0}}}),[]),(0,o.useEffect)((function(){var e;(null===o.default||void 0===o.default||null===(e=o.default.version)||void 0===e||!e.startsWith("18"))&&a.isBrowser&&window.MutationObserver&&w.current&&w.current instanceof HTMLInputElement&&(Z.current=new MutationObserver((function(){Z.current.disconnect(),w.current&&(w.current.autocomplete=d)})),Z.current.observe(w.current,{attributes:!0,attributeFilter:["autocomplete"]}))}),[d]),(0,o.useEffect)((function(){S.current&&S.current.setFields(g)}),[g]),(0,o.useEffect)((function(){S.current&&S.current.setBounds(h)}),[h]),(0,o.useEffect)((function(){S.current&&S.current.setComponentRestrictions(v)}),[v]),(0,o.useEffect)((function(){S.current&&S.current.setOptions(b)}),[b]),{ref:w,autocompleteRef:S}};var o=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==r(e)&&"function"!==typeof e)return{default:e};var n=u(t);if(n&&n.has(e))return n.get(e);var o={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){var c=a?Object.getOwnPropertyDescriptor(e,i):null;c&&(c.get||c.set)?Object.defineProperty(o,i,c):o[i]=e[i]}o.default=e,n&&n.set(e,o);return o}(n(2791)),a=n(2170),i=n(6615);function u(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(u=function(e){return e?n:t})(e)}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},2170:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.loadGoogleMapScript=t.isBrowser=void 0;var n="undefined"!==typeof window&&window.document;t.isBrowser=n;t.loadGoogleMapScript=function(e,t){if(!n)return Promise.resolve();if("undefined"!==typeof google&&google.maps&&google.maps.api)return Promise.resolve();var r=document.querySelectorAll('script[src*="'.concat(e,'"]'));if(r&&r.length)return new Promise((function(e){if("undefined"!==typeof google)return e();r[0].addEventListener("load",(function(){return e()}))}));var o=new URL(t);o.searchParams.set("callback","__REACT_GOOGLE_AUTOCOMPLETE_CALLBACK__");var a=document.createElement("script");return a.src=o.toString(),new Promise((function(e){window.__REACT_GOOGLE_AUTOCOMPLETE_CALLBACK__=e,document.body.appendChild(a)}))}}}]);
//# sourceMappingURL=1010.a18e65dd.chunk.js.map