/*! e1ba7a7 */
(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"./src/components/contact-me/contact-me.css":function(e,t,n){},"./src/components/creation/creation.css":function(e,t,n){},"./src/components/home.js":function(e,t,n){"use strict";n("./node_modules/core-js/modules/es7.symbol.async-iterator.js"),n("./node_modules/core-js/modules/es6.symbol.js"),n("./node_modules/core-js/modules/es6.object.define-property.js"),n("./node_modules/core-js/modules/es6.object.create.js"),n("./node_modules/core-js/modules/es6.object.set-prototype-of.js"),n("./src/components/welcome/welcome.css"),n("./src/components/main/main.css"),n("./src/components/portfolio/portfolio.css"),n("./node_modules/core-js/modules/es6.array.map.js"),n("./src/components/creation/creation.css"),n("./src/components/horizontal-tags/horizontal-tags.css"),n("./src/components/tag/tag.css");function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function r(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function c(e,t){return!t||"object"!==o(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function i(e){return(i=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function a(e,t){return(a=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var s=n("./node_modules/react/index.js"),u=function(e){function t(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),c(this,i(t).call(this,e))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&a(e,t)}(t,s.Component),function(e,t,n){t&&r(e.prototype,t),n&&r(e,n)}(t,[{key:"render",value:function(){return s.createElement("div",{className:"tag"},this.props.tag)}}]),t}();function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function f(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function p(e,t){return!t||"object"!==l(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function y(e,t){return(y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var b=n("./node_modules/react/index.js"),d=function(e){function t(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),p(this,m(t).call(this,e))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&y(e,t)}(t,b.Component),function(e,t,n){t&&f(e.prototype,t),n&&f(e,n)}(t,[{key:"render",value:function(){return b.createElement("div",{className:"tags",style:{justifyContent:this.props.tagsAlign}},this.props.tags.map(function(e){return b.createElement(u,{key:e,tag:e})}))}}]),t}(),h=n("./node_modules/react-textfit/lib/index.js");function g(e){return(g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function v(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function j(e,t){return!t||"object"!==g(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function w(e){return(w=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function _(e,t){return(_=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var O=n("./node_modules/react/index.js"),E=function(e){function t(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),j(this,w(t).call(this,e))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_(e,t)}(t,O.Component),function(e,t,n){t&&v(e.prototype,t),n&&v(e,n)}(t,[{key:"render",value:function(){return O.createElement("div",{className:"creation-details"},O.createElement("div",{className:"creation-title"},this.props.creation.title.map(function(e,t){return O.createElement(h.Textfit,{key:t,mode:"single"},e)})),O.createElement("p",null,this.props.creation.summary),O.createElement(d,{tagsAlign:"center",tags:this.props.creation.tags}),O.createElement("div",{className:"creation-github-link"},O.createElement("a",{href:this.props.creation.githubLink},O.createElement("img",{src:"http://icons-for-free.com/free-icons/png/512/1220319.png"}))))}}]),t}(),S={bittorrent:{title:["BitTorrent Protocol","Implementation"],summary:"Fully functional and reactive implementation of the p2p protocol.",githubLink:"https://github.com/stavalfi/TorrentX",tags:["Java","Project Reactor","Networking","Cucumber","GIT","CircleCI","TravisCI"]},webpackStarter:{title:["Webpack Starter"],summary:"Configured starter project with Webpack visual analyzers and documentation.",githubLink:"https://github.com/stavalfi/webpack-starter",tags:["Javascript","Webpack 4","Babel 7","NPM","React 16","HMR","ES6"]},more:{}};function k(e){return(k="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function P(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function N(e,t){return!t||"object"!==k(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function x(e){return(x=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function C(e,t){return(C=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var T=n("./node_modules/react/index.js"),I=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=N(this,x(t).call(this,e))).state={creations:S},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&C(e,t)}(t,T.Component),function(e,t,n){t&&P(e.prototype,t),n&&P(e,n)}(t,[{key:"render",value:function(){return T.createElement("div",{className:"portfolio-grid"},T.createElement("div",{className:"portfolio-column"},T.createElement("div",{className:"left-column top-left-corner"},T.createElement(E,{creation:this.state.creations.bittorrent})),T.createElement("div",{className:"background-height image2"})),T.createElement("div",{className:"portfolio-column"},T.createElement("div",{className:"background-height image1"}),T.createElement("div",{className:"right-column bottom-right-corner"},T.createElement(E,{creation:this.state.creations.webpackStarter}))))}}]),t}();n("./src/components/papers/papers.css"),n("./src/components/paper/paper.css");n("./node_modules/react/index.js");n("./node_modules/react/index.js"),n("./src/components/contact-me/contact-me.css");var A=[{type:"GitHub",iconLinkAddress:"https://github.com/stavalfi",iconImageAddress:"http://icons-for-free.com/free-icons/png/512/1220319.png"},{type:"linkedin",iconLinkAddress:"https://www.linkedin.com/in/stav-alfi-553201a3/",iconImageAddress:"https://image.flaticon.com/icons/svg/34/34227.svg"},{type:"StackOverFlow",iconLinkAddress:"https://stackoverflow.com/users/806963/stav-alfi?tab=answers",iconImageAddress:"http://icons-for-free.com/free-icons/png/512/287650.png"}];function R(e){return(R="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function L(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function z(e,t){return!t||"object"!==R(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function B(e){return(B=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function J(e,t){return(J=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var F=n("./node_modules/react/index.js"),H=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=z(this,B(t).call(this,e))).state={additionalLinks:A},n.moreInfoSentence="If you're interested in working with me, please get in touch using one of the methods below. Or feel free to just say hi. I like that too.",n.myEmail="stavalfi@gmail.com",n.personalImageAddress="https://idanktv.com/wp-content/uploads/2015/06/pojo-placeholder-1.png",n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&J(e,t)}(t,F.Component),function(e,t,n){t&&L(e.prototype,t),n&&L(e,n)}(t,[{key:"render",value:function(){return F.createElement("div",{className:"contact-me-container"},F.createElement("img",{src:this.personalImageAddress,className:"personal-image"}),F.createElement("div",{className:"more-information"},F.createElement("div",{className:"ending-sentence"},this.moreInfoSentence),F.createElement("div",{className:"my-email"},this.myEmail),F.createElement("div",{className:"additional-links"},this.state.additionalLinks.map(function(e,t){return F.createElement("a",{key:t,href:e.iconLinkAddress},F.createElement("img",{src:e.iconImageAddress,className:"additional-links-icon"}))}))))}}]),t}();function W(e){return(W="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function G(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function M(e,t){return!t||"object"!==W(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function V(e){return(V=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function X(e,t){return(X=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var q=n("./node_modules/react/index.js"),D=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),M(this,V(t).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&X(e,t)}(t,q.Component),function(e,t,n){t&&G(e.prototype,t),n&&G(e,n)}(t,[{key:"render",value:function(){return q.createElement("div",{className:"page-container"},q.createElement("div",{className:"page-content"},q.createElement("div",{className:"website-title"},"STAV ALFI"),q.createElement("div",{className:"menu"},q.createElement("span",null,"Portfolio"),q.createElement("span",null,"Papers"),q.createElement("span",null,"Experience"),q.createElement("span",null,"Contact me")),q.createElement("div",{className:"content"},q.createElement(H,null),q.createElement(I,null)),q.createElement("div",{className:"website-header"},"all rights reserved | Stav Alfi 2018 © | stavalfi@gmail.com")))}}]),t}();function K(e){return(K="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function Q(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function U(e,t){return!t||"object"!==K(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function Y(e){return(Y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function Z(e,t){return(Z=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var $=n("./node_modules/react/index.js"),ee=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),U(this,Y(t).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Z(e,t)}(t,$.Component),function(e,t,n){t&&Q(e.prototype,t),n&&Q(e,n)}(t,[{key:"render",value:function(){return $.createElement("div",null,$.createElement("div",{className:"my-image center-text"},$.createElement("div",{className:"group"},$.createElement("div",{className:"sentence"},"Hey, my name is"),$.createElement("div",{className:"my-name"},"--- Stav Alfi ---"))),$.createElement(D,null))}}]),t}();function te(e){return(te="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function ne(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function oe(e,t){return!t||"object"!==te(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function re(e){return(re=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function ce(e,t){return(ce=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}n.d(t,"a",function(){return ae});var ie=n("./node_modules/react/index.js"),ae=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),oe(this,re(t).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&ce(e,t)}(t,ie.Component),function(e,t,n){t&&ne(e.prototype,t),n&&ne(e,n)}(t,[{key:"render",value:function(){return ie.createElement(ee,null)}}]),t}()},"./src/components/horizontal-tags/horizontal-tags.css":function(e,t,n){},"./src/components/main/main.css":function(e,t,n){},"./src/components/paper/paper.css":function(e,t,n){},"./src/components/papers/papers.css":function(e,t,n){},"./src/components/portfolio/portfolio.css":function(e,t,n){},"./src/components/tag/tag.css":function(e,t,n){},"./src/components/welcome/welcome.css":function(e,t,n){},"./src/index.js":function(e,t,n){"use strict";n.r(t),function(e){var t=n("./node_modules/react-dom/index.js"),o=n("./src/components/home.js"),r=n("./node_modules/react/index.js");n("./node_modules/react-dom/index.js").render(r.createElement(o.a,null),document.getElementById("root")),e.hot.accept("./components/home.js",function(){Object(t.render)(r.createElement(o.a,null),document.getElementById("root"))})}.call(this,n("./node_modules/webpack/buildin/harmony-module.js")(e))}},[["./src/index.js",2,1]]]);
//# sourceMappingURL=0.7457964bc6cbb94326dc.bundle.js.map