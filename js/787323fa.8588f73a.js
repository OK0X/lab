(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["787323fa"],{"3ac5":function(t,e,n){"use strict";var r=n("6ae6"),o=n.n(r);o.a},"6ae6":function(t,e,n){},7350:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"mypage"},[n("TitleBar",{attrs:{titleTx:"ETH"===t.$route.query.p1?"ETH":"OK0X"}}),n("div",{staticClass:"address-panel"},[n("span",{staticStyle:{color:"dodgerblue","align-self":"center","font-size":"25px"}},[t._v(t._s(t.global.ensname))]),n("span",{staticClass:"adrs-text"},[t._v(t._s(t.address))]),n("div",{staticClass:"qrcode",attrs:{id:"eth-adress-qrcode"}}),n("q-btn",{staticClass:"copy-address",attrs:{label:t.$t("copyaddress"),"data-clipboard-text":t.address,color:"primary"}})],1)],1)},o=[];r._withStripped=!0;var i,a=n("9bfb"),s=n("d044"),l=n.n(s),u=n("b311"),c=n.n(u),h={components:{TitleBar:a["a"]},data:function(){return{title:"ETH"+this.$t("receive"),address:""}},mounted:function(){this.address=this.global.wallet.ethAddress;new l.a(document.getElementById("eth-adress-qrcode"),{text:this.address,width:128,height:128,colorDark:"#000000",colorLight:"#ffffff",correctLevel:l.a.CorrectLevel.H});i=new c.a(".copy-address"),i.on("success",function(t){toast(_this.$t("alreadycpoy"))}),i.on("error",function(t){})},destroyed:function(){i.destroy()}},f=h,d=(n("3ac5"),n("2877")),p=Object(d["a"])(f,r,o,!1,null,null,null);p.options.__file="ReceiptEth.vue";e["default"]=p.exports},"9bfb":function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"title-bar"},[n("q-icon",{staticClass:"title-back-icon",attrs:{name:"navigate_before"},nativeOn:{click:function(e){return t.goBack(e)}}}),n("div",{staticClass:"title-tx"},[t._v(t._s(t.titleTx))])],1)},o=[];r._withStripped=!0;var i={props:["titleTx"],methods:{goBack:function(){this.$router.go(-1)}}},a=i,s=(n("a675"),n("2877")),l=Object(s["a"])(a,r,o,!1,null,null,null);l.options.__file="TitleBar.vue";e["a"]=l.exports},a675:function(t,e,n){"use strict";var r=n("ca51"),o=n.n(r);o.a},b311:function(t,e,n){
/*!
 * clipboard.js v2.0.4
 * https://zenorocha.github.io/clipboard.js
 * 
 * Licensed MIT © Zeno Rocha
 */
(function(e,n){t.exports=n()})(0,function(){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){"use strict";var r="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),i=n(1),a=h(i),s=n(3),l=h(s),u=n(4),c=h(u);function h(t){return t&&t.__esModule?t:{default:t}}function f(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function d(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!==typeof e&&"function"!==typeof e?t:e}function p(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var g=function(t){function e(t,n){f(this,e);var r=d(this,(e.__proto__||Object.getPrototypeOf(e)).call(this));return r.resolveOptions(n),r.listenClick(t),r}return p(e,t),o(e,[{key:"resolveOptions",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.action="function"===typeof t.action?t.action:this.defaultAction,this.target="function"===typeof t.target?t.target:this.defaultTarget,this.text="function"===typeof t.text?t.text:this.defaultText,this.container="object"===r(t.container)?t.container:document.body}},{key:"listenClick",value:function(t){var e=this;this.listener=(0,c.default)(t,"click",function(t){return e.onClick(t)})}},{key:"onClick",value:function(t){var e=t.delegateTarget||t.currentTarget;this.clipboardAction&&(this.clipboardAction=null),this.clipboardAction=new a.default({action:this.action(e),target:this.target(e),text:this.text(e),container:this.container,trigger:e,emitter:this})}},{key:"defaultAction",value:function(t){return m("action",t)}},{key:"defaultTarget",value:function(t){var e=m("target",t);if(e)return document.querySelector(e)}},{key:"defaultText",value:function(t){return m("text",t)}},{key:"destroy",value:function(){this.listener.destroy(),this.clipboardAction&&(this.clipboardAction.destroy(),this.clipboardAction=null)}}],[{key:"isSupported",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:["copy","cut"],e="string"===typeof t?[t]:t,n=!!document.queryCommandSupported;return e.forEach(function(t){n=n&&!!document.queryCommandSupported(t)}),n}}]),e}(l.default);function m(t,e){var n="data-clipboard-"+t;if(e.hasAttribute(n))return e.getAttribute(n)}t.exports=g},function(t,e,n){"use strict";var r="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),i=n(2),a=s(i);function s(t){return t&&t.__esModule?t:{default:t}}function l(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var u=function(){function t(e){l(this,t),this.resolveOptions(e),this.initSelection()}return o(t,[{key:"resolveOptions",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.action=t.action,this.container=t.container,this.emitter=t.emitter,this.target=t.target,this.text=t.text,this.trigger=t.trigger,this.selectedText=""}},{key:"initSelection",value:function(){this.text?this.selectFake():this.target&&this.selectTarget()}},{key:"selectFake",value:function(){var t=this,e="rtl"==document.documentElement.getAttribute("dir");this.removeFake(),this.fakeHandlerCallback=function(){return t.removeFake()},this.fakeHandler=this.container.addEventListener("click",this.fakeHandlerCallback)||!0,this.fakeElem=document.createElement("textarea"),this.fakeElem.style.fontSize="12pt",this.fakeElem.style.border="0",this.fakeElem.style.padding="0",this.fakeElem.style.margin="0",this.fakeElem.style.position="absolute",this.fakeElem.style[e?"right":"left"]="-9999px";var n=window.pageYOffset||document.documentElement.scrollTop;this.fakeElem.style.top=n+"px",this.fakeElem.setAttribute("readonly",""),this.fakeElem.value=this.text,this.container.appendChild(this.fakeElem),this.selectedText=(0,a.default)(this.fakeElem),this.copyText()}},{key:"removeFake",value:function(){this.fakeHandler&&(this.container.removeEventListener("click",this.fakeHandlerCallback),this.fakeHandler=null,this.fakeHandlerCallback=null),this.fakeElem&&(this.container.removeChild(this.fakeElem),this.fakeElem=null)}},{key:"selectTarget",value:function(){this.selectedText=(0,a.default)(this.target),this.copyText()}},{key:"copyText",value:function(){var t=void 0;try{t=document.execCommand(this.action)}catch(e){t=!1}this.handleResult(t)}},{key:"handleResult",value:function(t){this.emitter.emit(t?"success":"error",{action:this.action,text:this.selectedText,trigger:this.trigger,clearSelection:this.clearSelection.bind(this)})}},{key:"clearSelection",value:function(){this.trigger&&this.trigger.focus(),window.getSelection().removeAllRanges()}},{key:"destroy",value:function(){this.removeFake()}},{key:"action",set:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"copy";if(this._action=t,"copy"!==this._action&&"cut"!==this._action)throw new Error('Invalid "action" value, use either "copy" or "cut"')},get:function(){return this._action}},{key:"target",set:function(t){if(void 0!==t){if(!t||"object"!==("undefined"===typeof t?"undefined":r(t))||1!==t.nodeType)throw new Error('Invalid "target" value, use a valid Element');if("copy"===this.action&&t.hasAttribute("disabled"))throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');if("cut"===this.action&&(t.hasAttribute("readonly")||t.hasAttribute("disabled")))throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');this._target=t}},get:function(){return this._target}}]),t}();t.exports=u},function(t,e){function n(t){var e;if("SELECT"===t.nodeName)t.focus(),e=t.value;else if("INPUT"===t.nodeName||"TEXTAREA"===t.nodeName){var n=t.hasAttribute("readonly");n||t.setAttribute("readonly",""),t.select(),t.setSelectionRange(0,t.value.length),n||t.removeAttribute("readonly"),e=t.value}else{t.hasAttribute("contenteditable")&&t.focus();var r=window.getSelection(),o=document.createRange();o.selectNodeContents(t),r.removeAllRanges(),r.addRange(o),e=r.toString()}return e}t.exports=n},function(t,e){function n(){}n.prototype={on:function(t,e,n){var r=this.e||(this.e={});return(r[t]||(r[t]=[])).push({fn:e,ctx:n}),this},once:function(t,e,n){var r=this;function o(){r.off(t,o),e.apply(n,arguments)}return o._=e,this.on(t,o,n)},emit:function(t){var e=[].slice.call(arguments,1),n=((this.e||(this.e={}))[t]||[]).slice(),r=0,o=n.length;for(r;r<o;r++)n[r].fn.apply(n[r].ctx,e);return this},off:function(t,e){var n=this.e||(this.e={}),r=n[t],o=[];if(r&&e)for(var i=0,a=r.length;i<a;i++)r[i].fn!==e&&r[i].fn._!==e&&o.push(r[i]);return o.length?n[t]=o:delete n[t],this}},t.exports=n},function(t,e,n){var r=n(5),o=n(6);function i(t,e,n){if(!t&&!e&&!n)throw new Error("Missing required arguments");if(!r.string(e))throw new TypeError("Second argument must be a String");if(!r.fn(n))throw new TypeError("Third argument must be a Function");if(r.node(t))return a(t,e,n);if(r.nodeList(t))return s(t,e,n);if(r.string(t))return l(t,e,n);throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")}function a(t,e,n){return t.addEventListener(e,n),{destroy:function(){t.removeEventListener(e,n)}}}function s(t,e,n){return Array.prototype.forEach.call(t,function(t){t.addEventListener(e,n)}),{destroy:function(){Array.prototype.forEach.call(t,function(t){t.removeEventListener(e,n)})}}}function l(t,e,n){return o(document.body,t,e,n)}t.exports=i},function(t,e){e.node=function(t){return void 0!==t&&t instanceof HTMLElement&&1===t.nodeType},e.nodeList=function(t){var n=Object.prototype.toString.call(t);return void 0!==t&&("[object NodeList]"===n||"[object HTMLCollection]"===n)&&"length"in t&&(0===t.length||e.node(t[0]))},e.string=function(t){return"string"===typeof t||t instanceof String},e.fn=function(t){var e=Object.prototype.toString.call(t);return"[object Function]"===e}},function(t,e,n){var r=n(7);function o(t,e,n,r,o){var i=a.apply(this,arguments);return t.addEventListener(n,i,o),{destroy:function(){t.removeEventListener(n,i,o)}}}function i(t,e,n,r,i){return"function"===typeof t.addEventListener?o.apply(null,arguments):"function"===typeof n?o.bind(null,document).apply(null,arguments):("string"===typeof t&&(t=document.querySelectorAll(t)),Array.prototype.map.call(t,function(t){return o(t,e,n,r,i)}))}function a(t,e,n,o){return function(n){n.delegateTarget=r(n.target,e),n.delegateTarget&&o.call(t,n)}}t.exports=i},function(t,e){var n=9;if("undefined"!==typeof Element&&!Element.prototype.matches){var r=Element.prototype;r.matches=r.matchesSelector||r.mozMatchesSelector||r.msMatchesSelector||r.oMatchesSelector||r.webkitMatchesSelector}function o(t,e){while(t&&t.nodeType!==n){if("function"===typeof t.matches&&t.matches(e))return t;t=t.parentNode}}t.exports=o}])})},ca51:function(t,e,n){},d044:function(t,e,n){var r;(function(e,n){t.exports=n()})(0,function(){function t(t){this.mode=n.MODE_8BIT_BYTE,this.data=t,this.parsedData=[];for(var e=0,r=this.data.length;e<r;e++){var o=[],i=this.data.charCodeAt(e);i>65536?(o[0]=240|(1835008&i)>>>18,o[1]=128|(258048&i)>>>12,o[2]=128|(4032&i)>>>6,o[3]=128|63&i):i>2048?(o[0]=224|(61440&i)>>>12,o[1]=128|(4032&i)>>>6,o[2]=128|63&i):i>128?(o[0]=192|(1984&i)>>>6,o[1]=128|63&i):o[0]=i,this.parsedData.push(o)}this.parsedData=Array.prototype.concat.apply([],this.parsedData),this.parsedData.length!=this.data.length&&(this.parsedData.unshift(191),this.parsedData.unshift(187),this.parsedData.unshift(239))}function e(t,e){this.typeNumber=t,this.errorCorrectLevel=e,this.modules=null,this.moduleCount=0,this.dataCache=null,this.dataList=[]}t.prototype={getLength:function(t){return this.parsedData.length},write:function(t){for(var e=0,n=this.parsedData.length;e<n;e++)t.put(this.parsedData[e],8)}},e.prototype={addData:function(e){var n=new t(e);this.dataList.push(n),this.dataCache=null},isDark:function(t,e){if(t<0||this.moduleCount<=t||e<0||this.moduleCount<=e)throw new Error(t+","+e);return this.modules[t][e]},getModuleCount:function(){return this.moduleCount},make:function(){this.makeImpl(!1,this.getBestMaskPattern())},makeImpl:function(t,n){this.moduleCount=4*this.typeNumber+17,this.modules=new Array(this.moduleCount);for(var r=0;r<this.moduleCount;r++){this.modules[r]=new Array(this.moduleCount);for(var o=0;o<this.moduleCount;o++)this.modules[r][o]=null}this.setupPositionProbePattern(0,0),this.setupPositionProbePattern(this.moduleCount-7,0),this.setupPositionProbePattern(0,this.moduleCount-7),this.setupPositionAdjustPattern(),this.setupTimingPattern(),this.setupTypeInfo(t,n),this.typeNumber>=7&&this.setupTypeNumber(t),null==this.dataCache&&(this.dataCache=e.createData(this.typeNumber,this.errorCorrectLevel,this.dataList)),this.mapData(this.dataCache,n)},setupPositionProbePattern:function(t,e){for(var n=-1;n<=7;n++)if(!(t+n<=-1||this.moduleCount<=t+n))for(var r=-1;r<=7;r++)e+r<=-1||this.moduleCount<=e+r||(this.modules[t+n][e+r]=0<=n&&n<=6&&(0==r||6==r)||0<=r&&r<=6&&(0==n||6==n)||2<=n&&n<=4&&2<=r&&r<=4)},getBestMaskPattern:function(){for(var t=0,e=0,n=0;n<8;n++){this.makeImpl(!0,n);var r=a.getLostPoint(this);(0==n||t>r)&&(t=r,e=n)}return e},createMovieClip:function(t,e,n){var r=t.createEmptyMovieClip(e,n),o=1;this.make();for(var i=0;i<this.modules.length;i++)for(var a=i*o,s=0;s<this.modules[i].length;s++){var l=s*o,u=this.modules[i][s];u&&(r.beginFill(0,100),r.moveTo(l,a),r.lineTo(l+o,a),r.lineTo(l+o,a+o),r.lineTo(l,a+o),r.endFill())}return r},setupTimingPattern:function(){for(var t=8;t<this.moduleCount-8;t++)null==this.modules[t][6]&&(this.modules[t][6]=t%2==0);for(var e=8;e<this.moduleCount-8;e++)null==this.modules[6][e]&&(this.modules[6][e]=e%2==0)},setupPositionAdjustPattern:function(){for(var t=a.getPatternPosition(this.typeNumber),e=0;e<t.length;e++)for(var n=0;n<t.length;n++){var r=t[e],o=t[n];if(null==this.modules[r][o])for(var i=-2;i<=2;i++)for(var s=-2;s<=2;s++)this.modules[r+i][o+s]=-2==i||2==i||-2==s||2==s||0==i&&0==s}},setupTypeNumber:function(t){for(var e=a.getBCHTypeNumber(this.typeNumber),n=0;n<18;n++){var r=!t&&1==(e>>n&1);this.modules[Math.floor(n/3)][n%3+this.moduleCount-8-3]=r}for(n=0;n<18;n++){r=!t&&1==(e>>n&1);this.modules[n%3+this.moduleCount-8-3][Math.floor(n/3)]=r}},setupTypeInfo:function(t,e){for(var n=this.errorCorrectLevel<<3|e,r=a.getBCHTypeInfo(n),o=0;o<15;o++){var i=!t&&1==(r>>o&1);o<6?this.modules[o][8]=i:o<8?this.modules[o+1][8]=i:this.modules[this.moduleCount-15+o][8]=i}for(o=0;o<15;o++){i=!t&&1==(r>>o&1);o<8?this.modules[8][this.moduleCount-o-1]=i:o<9?this.modules[8][15-o-1+1]=i:this.modules[8][15-o-1]=i}this.modules[this.moduleCount-8][8]=!t},mapData:function(t,e){for(var n=-1,r=this.moduleCount-1,o=7,i=0,s=this.moduleCount-1;s>0;s-=2){6==s&&s--;while(1){for(var l=0;l<2;l++)if(null==this.modules[r][s-l]){var u=!1;i<t.length&&(u=1==(t[i]>>>o&1));var c=a.getMask(e,r,s-l);c&&(u=!u),this.modules[r][s-l]=u,o--,-1==o&&(i++,o=7)}if(r+=n,r<0||this.moduleCount<=r){r-=n,n=-n;break}}}}},e.PAD0=236,e.PAD1=17,e.createData=function(t,n,r){for(var o=c.getRSBlocks(t,n),i=new h,s=0;s<r.length;s++){var l=r[s];i.put(l.mode,4),i.put(l.getLength(),a.getLengthInBits(l.mode,t)),l.write(i)}var u=0;for(s=0;s<o.length;s++)u+=o[s].dataCount;if(i.getLengthInBits()>8*u)throw new Error("code length overflow. ("+i.getLengthInBits()+">"+8*u+")");i.getLengthInBits()+4<=8*u&&i.put(0,4);while(i.getLengthInBits()%8!=0)i.putBit(!1);while(1){if(i.getLengthInBits()>=8*u)break;if(i.put(e.PAD0,8),i.getLengthInBits()>=8*u)break;i.put(e.PAD1,8)}return e.createBytes(i,o)},e.createBytes=function(t,e){for(var n=0,r=0,o=0,i=new Array(e.length),s=new Array(e.length),l=0;l<e.length;l++){var c=e[l].dataCount,h=e[l].totalCount-c;r=Math.max(r,c),o=Math.max(o,h),i[l]=new Array(c);for(var f=0;f<i[l].length;f++)i[l][f]=255&t.buffer[f+n];n+=c;var d=a.getErrorCorrectPolynomial(h),p=new u(i[l],d.getLength()-1),g=p.mod(d);s[l]=new Array(d.getLength()-1);for(f=0;f<s[l].length;f++){var m=f+g.getLength()-s[l].length;s[l][f]=m>=0?g.get(m):0}}var v=0;for(f=0;f<e.length;f++)v+=e[f].totalCount;var y=new Array(v),_=0;for(f=0;f<r;f++)for(l=0;l<e.length;l++)f<i[l].length&&(y[_++]=i[l][f]);for(f=0;f<o;f++)for(l=0;l<e.length;l++)f<s[l].length&&(y[_++]=s[l][f]);return y};for(var n={MODE_NUMBER:1,MODE_ALPHA_NUM:2,MODE_8BIT_BYTE:4,MODE_KANJI:8},o={L:1,M:0,Q:3,H:2},i={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7},a={PATTERN_POSITION_TABLE:[[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],[6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90],[6,28,50,72,94],[6,26,50,74,98],[6,30,54,78,102],[6,28,54,80,106],[6,32,58,84,110],[6,30,58,86,114],[6,34,62,90,118],[6,26,50,74,98,122],[6,30,54,78,102,126],[6,26,52,78,104,130],[6,30,56,82,108,134],[6,34,60,86,112,138],[6,30,58,86,114,142],[6,34,62,90,118,146],[6,30,54,78,102,126,150],[6,24,50,76,102,128,154],[6,28,54,80,106,132,158],[6,32,58,84,110,136,162],[6,26,54,82,110,138,166],[6,30,58,86,114,142,170]],G15:1335,G18:7973,G15_MASK:21522,getBCHTypeInfo:function(t){var e=t<<10;while(a.getBCHDigit(e)-a.getBCHDigit(a.G15)>=0)e^=a.G15<<a.getBCHDigit(e)-a.getBCHDigit(a.G15);return(t<<10|e)^a.G15_MASK},getBCHTypeNumber:function(t){var e=t<<12;while(a.getBCHDigit(e)-a.getBCHDigit(a.G18)>=0)e^=a.G18<<a.getBCHDigit(e)-a.getBCHDigit(a.G18);return t<<12|e},getBCHDigit:function(t){var e=0;while(0!=t)e++,t>>>=1;return e},getPatternPosition:function(t){return a.PATTERN_POSITION_TABLE[t-1]},getMask:function(t,e,n){switch(t){case i.PATTERN000:return(e+n)%2==0;case i.PATTERN001:return e%2==0;case i.PATTERN010:return n%3==0;case i.PATTERN011:return(e+n)%3==0;case i.PATTERN100:return(Math.floor(e/2)+Math.floor(n/3))%2==0;case i.PATTERN101:return e*n%2+e*n%3==0;case i.PATTERN110:return(e*n%2+e*n%3)%2==0;case i.PATTERN111:return(e*n%3+(e+n)%2)%2==0;default:throw new Error("bad maskPattern:"+t)}},getErrorCorrectPolynomial:function(t){for(var e=new u([1],0),n=0;n<t;n++)e=e.multiply(new u([1,s.gexp(n)],0));return e},getLengthInBits:function(t,e){if(1<=e&&e<10)switch(t){case n.MODE_NUMBER:return 10;case n.MODE_ALPHA_NUM:return 9;case n.MODE_8BIT_BYTE:return 8;case n.MODE_KANJI:return 8;default:throw new Error("mode:"+t)}else if(e<27)switch(t){case n.MODE_NUMBER:return 12;case n.MODE_ALPHA_NUM:return 11;case n.MODE_8BIT_BYTE:return 16;case n.MODE_KANJI:return 10;default:throw new Error("mode:"+t)}else{if(!(e<41))throw new Error("type:"+e);switch(t){case n.MODE_NUMBER:return 14;case n.MODE_ALPHA_NUM:return 13;case n.MODE_8BIT_BYTE:return 16;case n.MODE_KANJI:return 12;default:throw new Error("mode:"+t)}}},getLostPoint:function(t){for(var e=t.getModuleCount(),n=0,r=0;r<e;r++)for(var o=0;o<e;o++){for(var i=0,a=t.isDark(r,o),s=-1;s<=1;s++)if(!(r+s<0||e<=r+s))for(var l=-1;l<=1;l++)o+l<0||e<=o+l||0==s&&0==l||a==t.isDark(r+s,o+l)&&i++;i>5&&(n+=3+i-5)}for(r=0;r<e-1;r++)for(o=0;o<e-1;o++){var u=0;t.isDark(r,o)&&u++,t.isDark(r+1,o)&&u++,t.isDark(r,o+1)&&u++,t.isDark(r+1,o+1)&&u++,0!=u&&4!=u||(n+=3)}for(r=0;r<e;r++)for(o=0;o<e-6;o++)t.isDark(r,o)&&!t.isDark(r,o+1)&&t.isDark(r,o+2)&&t.isDark(r,o+3)&&t.isDark(r,o+4)&&!t.isDark(r,o+5)&&t.isDark(r,o+6)&&(n+=40);for(o=0;o<e;o++)for(r=0;r<e-6;r++)t.isDark(r,o)&&!t.isDark(r+1,o)&&t.isDark(r+2,o)&&t.isDark(r+3,o)&&t.isDark(r+4,o)&&!t.isDark(r+5,o)&&t.isDark(r+6,o)&&(n+=40);var c=0;for(o=0;o<e;o++)for(r=0;r<e;r++)t.isDark(r,o)&&c++;var h=Math.abs(100*c/e/e-50)/5;return n+=10*h,n}},s={glog:function(t){if(t<1)throw new Error("glog("+t+")");return s.LOG_TABLE[t]},gexp:function(t){while(t<0)t+=255;while(t>=256)t-=255;return s.EXP_TABLE[t]},EXP_TABLE:new Array(256),LOG_TABLE:new Array(256)},l=0;l<8;l++)s.EXP_TABLE[l]=1<<l;for(l=8;l<256;l++)s.EXP_TABLE[l]=s.EXP_TABLE[l-4]^s.EXP_TABLE[l-5]^s.EXP_TABLE[l-6]^s.EXP_TABLE[l-8];for(l=0;l<255;l++)s.LOG_TABLE[s.EXP_TABLE[l]]=l;function u(t,e){if(void 0==t.length)throw new Error(t.length+"/"+e);var n=0;while(n<t.length&&0==t[n])n++;this.num=new Array(t.length-n+e);for(var r=0;r<t.length-n;r++)this.num[r]=t[r+n]}function c(t,e){this.totalCount=t,this.dataCount=e}function h(){this.buffer=[],this.length=0}u.prototype={get:function(t){return this.num[t]},getLength:function(){return this.num.length},multiply:function(t){for(var e=new Array(this.getLength()+t.getLength()-1),n=0;n<this.getLength();n++)for(var r=0;r<t.getLength();r++)e[n+r]^=s.gexp(s.glog(this.get(n))+s.glog(t.get(r)));return new u(e,0)},mod:function(t){if(this.getLength()-t.getLength()<0)return this;for(var e=s.glog(this.get(0))-s.glog(t.get(0)),n=new Array(this.getLength()),r=0;r<this.getLength();r++)n[r]=this.get(r);for(r=0;r<t.getLength();r++)n[r]^=s.gexp(s.glog(t.get(r))+e);return new u(n,0).mod(t)}},c.RS_BLOCK_TABLE=[[1,26,19],[1,26,16],[1,26,13],[1,26,9],[1,44,34],[1,44,28],[1,44,22],[1,44,16],[1,70,55],[1,70,44],[2,35,17],[2,35,13],[1,100,80],[2,50,32],[2,50,24],[4,25,9],[1,134,108],[2,67,43],[2,33,15,2,34,16],[2,33,11,2,34,12],[2,86,68],[4,43,27],[4,43,19],[4,43,15],[2,98,78],[4,49,31],[2,32,14,4,33,15],[4,39,13,1,40,14],[2,121,97],[2,60,38,2,61,39],[4,40,18,2,41,19],[4,40,14,2,41,15],[2,146,116],[3,58,36,2,59,37],[4,36,16,4,37,17],[4,36,12,4,37,13],[2,86,68,2,87,69],[4,69,43,1,70,44],[6,43,19,2,44,20],[6,43,15,2,44,16],[4,101,81],[1,80,50,4,81,51],[4,50,22,4,51,23],[3,36,12,8,37,13],[2,116,92,2,117,93],[6,58,36,2,59,37],[4,46,20,6,47,21],[7,42,14,4,43,15],[4,133,107],[8,59,37,1,60,38],[8,44,20,4,45,21],[12,33,11,4,34,12],[3,145,115,1,146,116],[4,64,40,5,65,41],[11,36,16,5,37,17],[11,36,12,5,37,13],[5,109,87,1,110,88],[5,65,41,5,66,42],[5,54,24,7,55,25],[11,36,12],[5,122,98,1,123,99],[7,73,45,3,74,46],[15,43,19,2,44,20],[3,45,15,13,46,16],[1,135,107,5,136,108],[10,74,46,1,75,47],[1,50,22,15,51,23],[2,42,14,17,43,15],[5,150,120,1,151,121],[9,69,43,4,70,44],[17,50,22,1,51,23],[2,42,14,19,43,15],[3,141,113,4,142,114],[3,70,44,11,71,45],[17,47,21,4,48,22],[9,39,13,16,40,14],[3,135,107,5,136,108],[3,67,41,13,68,42],[15,54,24,5,55,25],[15,43,15,10,44,16],[4,144,116,4,145,117],[17,68,42],[17,50,22,6,51,23],[19,46,16,6,47,17],[2,139,111,7,140,112],[17,74,46],[7,54,24,16,55,25],[34,37,13],[4,151,121,5,152,122],[4,75,47,14,76,48],[11,54,24,14,55,25],[16,45,15,14,46,16],[6,147,117,4,148,118],[6,73,45,14,74,46],[11,54,24,16,55,25],[30,46,16,2,47,17],[8,132,106,4,133,107],[8,75,47,13,76,48],[7,54,24,22,55,25],[22,45,15,13,46,16],[10,142,114,2,143,115],[19,74,46,4,75,47],[28,50,22,6,51,23],[33,46,16,4,47,17],[8,152,122,4,153,123],[22,73,45,3,74,46],[8,53,23,26,54,24],[12,45,15,28,46,16],[3,147,117,10,148,118],[3,73,45,23,74,46],[4,54,24,31,55,25],[11,45,15,31,46,16],[7,146,116,7,147,117],[21,73,45,7,74,46],[1,53,23,37,54,24],[19,45,15,26,46,16],[5,145,115,10,146,116],[19,75,47,10,76,48],[15,54,24,25,55,25],[23,45,15,25,46,16],[13,145,115,3,146,116],[2,74,46,29,75,47],[42,54,24,1,55,25],[23,45,15,28,46,16],[17,145,115],[10,74,46,23,75,47],[10,54,24,35,55,25],[19,45,15,35,46,16],[17,145,115,1,146,116],[14,74,46,21,75,47],[29,54,24,19,55,25],[11,45,15,46,46,16],[13,145,115,6,146,116],[14,74,46,23,75,47],[44,54,24,7,55,25],[59,46,16,1,47,17],[12,151,121,7,152,122],[12,75,47,26,76,48],[39,54,24,14,55,25],[22,45,15,41,46,16],[6,151,121,14,152,122],[6,75,47,34,76,48],[46,54,24,10,55,25],[2,45,15,64,46,16],[17,152,122,4,153,123],[29,74,46,14,75,47],[49,54,24,10,55,25],[24,45,15,46,46,16],[4,152,122,18,153,123],[13,74,46,32,75,47],[48,54,24,14,55,25],[42,45,15,32,46,16],[20,147,117,4,148,118],[40,75,47,7,76,48],[43,54,24,22,55,25],[10,45,15,67,46,16],[19,148,118,6,149,119],[18,75,47,31,76,48],[34,54,24,34,55,25],[20,45,15,61,46,16]],c.getRSBlocks=function(t,e){var n=c.getRsBlockTable(t,e);if(void 0==n)throw new Error("bad rs block @ typeNumber:"+t+"/errorCorrectLevel:"+e);for(var r=n.length/3,o=[],i=0;i<r;i++)for(var a=n[3*i+0],s=n[3*i+1],l=n[3*i+2],u=0;u<a;u++)o.push(new c(s,l));return o},c.getRsBlockTable=function(t,e){switch(e){case o.L:return c.RS_BLOCK_TABLE[4*(t-1)+0];case o.M:return c.RS_BLOCK_TABLE[4*(t-1)+1];case o.Q:return c.RS_BLOCK_TABLE[4*(t-1)+2];case o.H:return c.RS_BLOCK_TABLE[4*(t-1)+3];default:return}},h.prototype={get:function(t){var e=Math.floor(t/8);return 1==(this.buffer[e]>>>7-t%8&1)},put:function(t,e){for(var n=0;n<e;n++)this.putBit(1==(t>>>e-n-1&1))},getLengthInBits:function(){return this.length},putBit:function(t){var e=Math.floor(this.length/8);this.buffer.length<=e&&this.buffer.push(0),t&&(this.buffer[e]|=128>>>this.length%8),this.length++}};var f=[[17,14,11,7],[32,26,20,14],[53,42,32,24],[78,62,46,34],[106,84,60,44],[134,106,74,58],[154,122,86,64],[192,152,108,84],[230,180,130,98],[271,213,151,119],[321,251,177,137],[367,287,203,155],[425,331,241,177],[458,362,258,194],[520,412,292,220],[586,450,322,250],[644,504,364,280],[718,560,394,310],[792,624,442,338],[858,666,482,382],[929,711,509,403],[1003,779,565,439],[1091,857,611,461],[1171,911,661,511],[1273,997,715,535],[1367,1059,751,593],[1465,1125,805,625],[1528,1190,868,658],[1628,1264,908,698],[1732,1370,982,742],[1840,1452,1030,790],[1952,1538,1112,842],[2068,1628,1168,898],[2188,1722,1228,958],[2303,1809,1283,983],[2431,1911,1351,1051],[2563,1989,1423,1093],[2699,2099,1499,1139],[2809,2213,1579,1219],[2953,2331,1663,1273]];function d(){return"undefined"!=typeof CanvasRenderingContext2D}function p(){var t=!1,e=navigator.userAgent;if(/android/i.test(e)){t=!0;var n=e.toString().match(/android ([0-9]\.[0-9])/i);n&&n[1]&&(t=parseFloat(n[1]))}return t}var g=function(){var t=function(t,e){this._el=t,this._htOption=e};return t.prototype.draw=function(t){var e=this._htOption,n=this._el,r=t.getModuleCount();Math.floor(e.width/r),Math.floor(e.height/r);function o(t,e){var n=document.createElementNS("http://www.w3.org/2000/svg",t);for(var r in e)e.hasOwnProperty(r)&&n.setAttribute(r,e[r]);return n}this.clear();var i=o("svg",{viewBox:"0 0 "+String(r)+" "+String(r),width:"100%",height:"100%",fill:e.colorLight});i.setAttributeNS("http://www.w3.org/2000/xmlns/","xmlns:xlink","http://www.w3.org/1999/xlink"),n.appendChild(i),i.appendChild(o("rect",{fill:e.colorLight,width:"100%",height:"100%"})),i.appendChild(o("rect",{fill:e.colorDark,width:"1",height:"1",id:"template"}));for(var a=0;a<r;a++)for(var s=0;s<r;s++)if(t.isDark(a,s)){var l=o("use",{x:String(s),y:String(a)});l.setAttributeNS("http://www.w3.org/1999/xlink","href","#template"),i.appendChild(l)}},t.prototype.clear=function(){while(this._el.hasChildNodes())this._el.removeChild(this._el.lastChild)},t}(),m="svg"===document.documentElement.tagName.toLowerCase(),v=m?g:d()?function(){function t(){this._elImage.src=this._elCanvas.toDataURL("image/png"),this._elImage.style.display="block",this._elCanvas.style.display="none"}if(this._android&&this._android<=2.1){var e=1/window.devicePixelRatio,n=CanvasRenderingContext2D.prototype.drawImage;CanvasRenderingContext2D.prototype.drawImage=function(t,r,o,i,a,s,l,u,c){if("nodeName"in t&&/img/i.test(t.nodeName))for(var h=arguments.length-1;h>=1;h--)arguments[h]=arguments[h]*e;else"undefined"==typeof u&&(arguments[1]*=e,arguments[2]*=e,arguments[3]*=e,arguments[4]*=e);n.apply(this,arguments)}}function r(t,e){var n=this;if(n._fFail=e,n._fSuccess=t,null===n._bSupportDataURI){var r=document.createElement("img"),o=function(){n._bSupportDataURI=!1,n._fFail&&n._fFail.call(n)},i=function(){n._bSupportDataURI=!0,n._fSuccess&&n._fSuccess.call(n)};return r.onabort=o,r.onerror=o,r.onload=i,void(r.src="data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg==")}!0===n._bSupportDataURI&&n._fSuccess?n._fSuccess.call(n):!1===n._bSupportDataURI&&n._fFail&&n._fFail.call(n)}var o=function(t,e){this._bIsPainted=!1,this._android=p(),this._htOption=e,this._elCanvas=document.createElement("canvas"),this._elCanvas.width=e.width,this._elCanvas.height=e.height,t.appendChild(this._elCanvas),this._el=t,this._oContext=this._elCanvas.getContext("2d"),this._bIsPainted=!1,this._elImage=document.createElement("img"),this._elImage.alt="Scan me!",this._elImage.style.display="none",this._el.appendChild(this._elImage),this._bSupportDataURI=null};return o.prototype.draw=function(t){var e=this._elImage,n=this._oContext,r=this._htOption,o=t.getModuleCount(),i=r.width/o,a=r.height/o,s=Math.round(i),l=Math.round(a);e.style.display="none",this.clear();for(var u=0;u<o;u++)for(var c=0;c<o;c++){var h=t.isDark(u,c),f=c*i,d=u*a;n.strokeStyle=h?r.colorDark:r.colorLight,n.lineWidth=1,n.fillStyle=h?r.colorDark:r.colorLight,n.fillRect(f,d,i,a),n.strokeRect(Math.floor(f)+.5,Math.floor(d)+.5,s,l),n.strokeRect(Math.ceil(f)-.5,Math.ceil(d)-.5,s,l)}this._bIsPainted=!0},o.prototype.makeImage=function(){this._bIsPainted&&r.call(this,t)},o.prototype.isPainted=function(){return this._bIsPainted},o.prototype.clear=function(){this._oContext.clearRect(0,0,this._elCanvas.width,this._elCanvas.height),this._bIsPainted=!1},o.prototype.round=function(t){return t?Math.floor(1e3*t)/1e3:t},o}():function(){var t=function(t,e){this._el=t,this._htOption=e};return t.prototype.draw=function(t){for(var e=this._htOption,n=this._el,r=t.getModuleCount(),o=Math.floor(e.width/r),i=Math.floor(e.height/r),a=['<table style="border:0;border-collapse:collapse;">'],s=0;s<r;s++){a.push("<tr>");for(var l=0;l<r;l++)a.push('<td style="border:0;border-collapse:collapse;padding:0;margin:0;width:'+o+"px;height:"+i+"px;background-color:"+(t.isDark(s,l)?e.colorDark:e.colorLight)+';"></td>');a.push("</tr>")}a.push("</table>"),n.innerHTML=a.join("");var u=n.childNodes[0],c=(e.width-u.offsetWidth)/2,h=(e.height-u.offsetHeight)/2;c>0&&h>0&&(u.style.margin=h+"px "+c+"px")},t.prototype.clear=function(){this._el.innerHTML=""},t}();function y(t,e){for(var n=1,r=_(t),i=0,a=f.length;i<=a;i++){var s=0;switch(e){case o.L:s=f[i][0];break;case o.M:s=f[i][1];break;case o.Q:s=f[i][2];break;case o.H:s=f[i][3];break}if(r<=s)break;n++}if(n>f.length)throw new Error("Too long data");return n}function _(t){var e=encodeURI(t).toString().replace(/\%[0-9a-fA-F]{2}/g,"a");return e.length+(e.length!=t?3:0)}return r=function(t,e){if(this._htOption={width:256,height:256,typeNumber:4,colorDark:"#000000",colorLight:"#ffffff",correctLevel:o.H},"string"===typeof e&&(e={text:e}),e)for(var n in e)this._htOption[n]=e[n];"string"==typeof t&&(t=document.getElementById(t)),this._htOption.useSVG&&(v=g),this._android=p(),this._el=t,this._oQRCode=null,this._oDrawing=new v(this._el,this._htOption),this._htOption.text&&this.makeCode(this._htOption.text)},r.prototype.makeCode=function(t){this._oQRCode=new e(y(t,this._htOption.correctLevel),this._htOption.correctLevel),this._oQRCode.addData(t),this._oQRCode.make(),this._el.title=t,this._oDrawing.draw(this._oQRCode),this.makeImage()},r.prototype.makeImage=function(){"function"==typeof this._oDrawing.makeImage&&(!this._android||this._android>=3)&&this._oDrawing.makeImage()},r.prototype.clear=function(){this._oDrawing.clear()},r.CorrectLevel=o,r})}}]);