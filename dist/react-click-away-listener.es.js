import e,{useRef as t,useEffect as r}from"react";function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}export default function(u){var i=u.as,f=void 0===i?"div":i,a=u.onClickAway,l=u.mouseEvent,O=void 0===l?"click":l,b=u.touchEvent,p=void 0===b?"touchend":b,s=c(u,["as","onClickAway","mouseEvent","touchEvent"]),v=t(null);return r((function(){var e=function(e){v.current&&v.current.contains(e.target)||a(e)};return document.addEventListener(O,e),document.addEventListener(p,e),function(){document.removeEventListener(O,e),document.removeEventListener(p,e)}}),[O,a,p]),e.createElement(f,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({ref:v},s))}
//# sourceMappingURL=react-click-away-listener.es.js.map