import{g as y}from"./react-Bjzu39jn.js";function s(e){var t,o,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e)){var n=e.length;for(t=0;t<n;t++)e[t]&&(o=s(e[t]))&&(r&&(r+=" "),r+=o)}else for(o in e)e[o]&&(r&&(r+=" "),r+=o);return r}function _(){for(var e,t,o=0,r="",n=arguments.length;o<n;o++)(e=arguments[o])&&(t=s(e))&&(r&&(r+=" "),r+=t);return r}function p(){return p=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var r in o)({}).hasOwnProperty.call(o,r)&&(e[r]=o[r])}return e},p.apply(null,arguments)}function R(e,t){if(e==null)return{};var o={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.includes(r))continue;o[r]=e[r]}return o}var i={exports:{}},l="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",m=l,h=m;function c(){}function u(){}u.resetWarningCache=c;var g=function(){function e(r,n,T,P,b,f){if(f!==h){var a=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw a.name="Invariant Violation",a}}e.isRequired=e;function t(){return e}var o={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:u,resetWarningCache:c};return o.PropTypes=o,o};i.exports=g();var v=i.exports;const d=y(v);export{d as P,R as _,p as a,_ as c};
