parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"ZCKn":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.initial=exports.keep=exports.remove=exports.drag=exports.controls=exports.iframe=void 0,exports.iframe={width:"100%",height:"100%",border:"none",margin:"0"},exports.controls={position:"fixed",top:"50px",right:"50px",width:"320px",height:"200px",zIndex:"999999999",boxShadow:"gray 5px 5px 10px"},exports.drag={position:"absolute",top:"0",left:"0",width:"90%",height:"2em",cursor:"move"},exports.remove={background:"orange",border:"2px dashed red",cursor:"crosshair"},exports.keep={background:"greenyellow",border:"2px dashed green",cursor:"crosshair"},exports.initial={background:"initial",border:"initial",cursor:"initial"};
},{}],"dXWg":[function(require,module,exports) {
"use strict";var e=this&&this.__createBinding||(Object.create?function(e,t,o,n){void 0===n&&(n=o),Object.defineProperty(e,n,{enumerable:!0,get:function(){return t[o]}})}:function(e,t,o,n){void 0===n&&(n=o),e[n]=t[o]}),t=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),o=this&&this.__importStar||function(o){if(o&&o.__esModule)return o;var n={};if(null!=o)for(var i in o)"default"!==i&&Object.prototype.hasOwnProperty.call(o,i)&&e(n,o,i);return t(n,o),n},n=this&&this.__awaiter||function(e,t,o,n){return new(o||(o=Promise))(function(i,r){function s(e){try{a(n.next(e))}catch(t){r(t)}}function c(e){try{a(n.throw(e))}catch(t){r(t)}}function a(e){var t;e.done?i(e.value):(t=e.value,t instanceof o?t:new o(function(e){e(t)})).then(s,c)}a((n=n.apply(e,t||[])).next())})},i=this&&this.__generator||function(e,t){var o,n,i,r,s={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return r={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(r[Symbol.iterator]=function(){return this}),r;function c(r){return function(c){return function(r){if(o)throw new TypeError("Generator is already executing.");for(;s;)try{if(o=1,n&&(i=2&r[0]?n.return:r[0]?n.throw||((i=n.return)&&i.call(n),0):n.next)&&!(i=i.call(n,r[1])).done)return i;switch(n=0,i&&(r=[2&r[0],i.value]),r[0]){case 0:case 1:i=r;break;case 4:return s.label++,{value:r[1],done:!1};case 5:s.label++,n=r[1],r=[0];continue;case 7:r=s.ops.pop(),s.trys.pop();continue;default:if(!(i=(i=s.trys).length>0&&i[i.length-1])&&(6===r[0]||2===r[0])){s=0;continue}if(3===r[0]&&(!i||r[1]>i[0]&&r[1]<i[3])){s.label=r[1];break}if(6===r[0]&&s.label<i[1]){s.label=i[1],i=r;break}if(i&&s.label<i[2]){s.label=i[2],s.ops.push(r);break}i[2]&&s.ops.pop(),s.trys.pop();continue}r=t.call(e,s)}catch(c){r=[6,c],n=0}finally{o=i=0}if(5&r[0])throw r[1];return{value:r[0]?r[1]:void 0,done:!0}}([r,c])}}};Object.defineProperty(exports,"__esModule",{value:!0});var r=o(require("./styles")),s=function(e){return function(t){t.cancelBubble=!0,t.stopPropagation(),t.preventDefault();e(this,t)}},c=function(e,t){Object.assign(e.style,t.ctrlKey?r.keep:r.remove)},a=function(e){Object.assign(e.style,r.initial)},l=function(){function e(){this.doc=document,this.history=[]}return e.prototype.clickElement=function(e,t){var o=this;if(a(e),t.ctrlKey)this.doc.body.childNodes.forEach(function(e){if(e.nodeType===Node.ELEMENT_NODE&&"SCRIPT"!==e.nodeName&&e!==o.controls){var t=o.doc.createTextNode("");o.history.push({parent:o.doc.body,element:e,placeholder:t}),e.parentNode.replaceChild(t,e)}}),this.doc.body.appendChild(e);else{var n=this.doc.createTextNode("");this.history.push({parent:e.parentNode,element:e,placeholder:n}),e.parentNode.replaceChild(n,e)}},e.prototype.undo=function(){if(this.history.length){var e=this.history.pop();e.parent.replaceChild(e.element,e.placeholder)}},e.prototype.registerEventsListeners=function(){var e=s(c),t=s(a),o=s(this.clickElement.bind(this));this.doc.body.querySelectorAll("*").forEach(function(n){n.onmouseover=e,n.onmouseout=t,n.onclick=o})},e.prototype.registerKeyboardShortcuts=function(){var e=this;this.doc.body.addEventListener("keydown",function(t){t.ctrlKey&&"KeyZ"===t.code&&e.undo()})},e.prototype.getContent=function(){var e=this,t="";return this.doc.body.childNodes.forEach(function(o){o.nodeType===Node.ELEMENT_NODE&&"SCRIPT"!==o.nodeName&&o!==e.controls&&(t+=o.outerHTML,console.log(o))}),t},e.prototype.addControls=function(){var e=this.doc.createElement("div");Object.assign(e.style,r.controls);var t=this.doc.createElement("iframe");t.setAttribute("src",this.ui),Object.assign(t.style,r.iframe);var o=this.doc.createElement("div");Object.assign(o.style,r.drag);var n=!1,i=[0,0];o.onmousedown=function(t){n=!0,i[0]=e.offsetLeft-t.clientX,i[1]=e.offsetTop-t.clientY},this.doc.onmouseup=function(){return n=!1},this.doc.onmousemove=function(t){t.preventDefault(),n&&(e.style.left=t.clientX+i[0]+"px",e.style.top=t.clientY+i[1]+"px")},e.appendChild(t),e.appendChild(o),this.controls=this.doc.body.appendChild(e),this.popup=t.contentWindow},e.prototype.post=function(e){return n(this,void 0,void 0,function(){var t,o,n;return i(this,function(i){switch(i.label){case 0:return t=new Request(this.endpoint),o=new Headers({Accept:"application/json",Authorization:"Basic "+this.key,"Content-Type":"application/json"}),[4,fetch(t,{method:"POST",headers:o,mode:"cors",body:JSON.stringify(e)})];case 1:if(!(n=i.sent()).ok)throw"unable to send article: "+n.statusText;return console.debug("article added to readflow"),[2]}})})},e.prototype.onMessage=function(e){var t=e.data;switch(t){case"content":case"page":console.debug("sending "+t+"..."),this.popup.postMessage("loading","*"),this.post({title:document.title,url:document.location.href,html:"content"===t?this.getContent():void 0}).then(function(){alert("Article successfully put in your reaflow!"),document.location.reload()},function(e){alert(e)});break;case"close":this.close();break;default:console.warn("unknown message event:",t)}},e.prototype.boot=function(e,t,o){this.endpoint=t+"/articles",this.ui=e+"/bookmarklet.html",this.key=o,this.registerEventsListeners(),this.registerKeyboardShortcuts(),this.addControls(),window.addEventListener("message",this.onMessage.bind(this)),console.debug("bookmarklet up and running...")},e.prototype.close=function(){this.doc.location.reload()},e}();window.rfB=new l;
},{"./styles":"ZCKn"}]},{},["dXWg"], null)
//# sourceMappingURL=/bookmarklet.568f62d3.js.map