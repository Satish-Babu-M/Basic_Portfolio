((self||this).webpackJsonp=(self||this).webpackJsonp||[]).push([[33],{1033:function(e,t,r){e.exports={root:"SearchControls_root-qReX2",control:"SearchControls_control-XJgKF"}},1094:function(e,t,r){e.exports={root:"SearchAd-module_root-X3+xi",searchAd:"SearchAd-module_searchAd-GLReS",image:"SearchAd-module_image-ItRO+",text:"SearchAd-module_text-cqtp0",adDisclosure:"SearchAd-module_adDisclosure-k9jbj"}},1095:function(e,t,r){e.exports={root:"SearchControlsType_root-SnoPW","type-pens":"SearchControlsType_type-pens-tJF-A","type-projects":"SearchControlsType_type-projects-E7n+Z","type-collections":"SearchControlsType_type-collections-b2b4n","type-posts":"SearchControlsType_type-posts--lL+f",filter:"SearchControlsType_filter-dwTDf",icon:"SearchControlsType_icon-ZKqgb",active:"SearchControlsType_active-qMGF5",selected:"SearchControlsType_selected-yqOW4","icon-check":"SearchControlsType_icon-check-3xDHn"}},1096:function(e,t,r){e.exports={root:"SearchResultsAnonRestricted-module_root-P701W",loadingGrid:"SearchResultsAnonRestricted-module_loadingGrid-JR+uR","grid-fade-out":"SearchResultsAnonRestricted-module_grid-fade-out-hcHKY",message:"SearchResultsAnonRestricted-module_message-ElESf","message-fade-in":"SearchResultsAnonRestricted-module_message-fade-in-4XVrS"}},1097:function(e,t,r){e.exports={root:"Search_root-9UPWB"}},1258:function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return ae}));var n=r(0),a=r.n(n),o=r(77),l=r(1),i=r.n(l),c=r(6),E=r(453),s=r(1094),u=r.n(s);function f(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,a,o,l,i=[],c=!0,E=!1;try{if(o=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;c=!1}else for(;!(c=(n=o.call(r)).done)&&(i.push(n.value),i.length!==t);c=!0);}catch(e){E=!0,a=e}finally{try{if(!c&&null!=r.return&&(l=r.return(),Object(l)!==l))return}finally{if(E)throw a}}return i}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return _(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return _(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var p=function(e){var t=e.searchTerm,r=f(Object(n.useState)(!1),2),o=r[0],l=r[1];return Object(n.useEffect)((function(){var e=!1;function t(e){l(e),delete window._cpbsadata}return window._cpbsadata?t(window._cpbsadata):Object(E.a)({url:"https://srv.buysellads.com/ads/".concat("CESIC23J",".json"),onSuccess:function(r){try{var n=r.ads[0];if(window._cpbsadata=n,e)return;t(n)}catch(e){}}}),function(){e=!0}}),[t]),o&&o.statlink?a.a.createElement("div",{className:u.a.root},a.a.createElement("a",{href:o.statlink,className:u.a.searchAd,rel:"noopener sponsored",target:"_blank"},a.a.createElement("div",{className:u.a.image,style:{backgroundColor:o.backgroundColor}},a.a.createElement("img",{src:o.logo,alt:"",width:"125",height:"50"})),a.a.createElement("div",{className:u.a.text},a.a.createElement("strong",null,o.company,":")," ",o.companyTagline||o.description)),a.a.createElement("a",{href:"/advertise",className:u.a.adDisclosure},"Ad"),o.pixel&&a.a.createElement("img",{src:o.pixel,alt:"",className:u.a.pixel})):null};p.propTypes={searchTerm:i.a.string};var m=p;function h(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,a,o,l,i=[],c=!0,E=!1;try{if(o=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;c=!1}else for(;!(c=(n=o.call(r)).done)&&(i.push(n.value),i.length!==t);c=!0);}catch(e){E=!0,a=e}finally{try{if(!c&&null!=r.return&&(l=r.return(),Object(l)!==l))return}finally{if(E)throw a}}return i}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return S(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return S(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function S(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var d=function(e){return h(Object(c.ub)(),1)[0]?null:a.a.createElement(m,e)},T=r(2),y=r(4),O=r(34),A=r(5),L=r.n(A),R=r(3),I=r(8),g=r(1095),v=r.n(g);function C(e){return C="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},C(e)}function D(e,t,r){var n;return n=function(e,t){if("object"!=C(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!=C(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(t,"string"),(t="symbol"==C(n)?n:String(n))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function P(e){var t=e.searchTerm,r=e.selectedFilter,n=void 0===r?"pens":r;return a.a.createElement(T.B,{className:L()(v.a.root,v.a["type-".concat(n)])},R.I.TYPES.map((function(e){var r=n===e.id,o="/search/".concat(e.id);e.link?o=e.link(t):t&&(o+="?q=".concat(encodeURIComponent(t)));var l=L()(v.a.filter,v.a["type-".concat(e.id)],D({},v.a.active,r));return a.a.createElement(O.b,{to:o,key:e.id,onClick:function(e){r&&e.preventDefault()}},a.a.createElement(T.g,{component:"span",className:l,icon:!0},"icon-person"===e.icon&&a.a.createElement(I.pb,{className:v.a.icon}),"icon-new-pen"===e.icon&&a.a.createElement(I.kb,{className:v.a.icon}),"icon-new-project"===e.icon&&a.a.createElement(I.lb,{className:v.a.icon}),"icon-new-collection"===e.icon&&a.a.createElement(I.jb,{className:v.a.icon}),e.title))})))}P.propTypes={className:i.a.any,onChange:i.a.func,searchTerm:i.a.string,selectedFilter:i.a.string};var b=P,N=r(1033),w=r.n(N);function U(e){var t=e.params,r=e.updateSearchParams;return a.a.createElement(T.B,{className:"advanced-options",id:"advanced-options"},a.a.createElement("div",{className:w.a.control},a.a.createElement(T.A,{htmlFor:"searchControlsSortBy"},"Sort By"),a.a.createElement(T.D,{id:"searchControlsSortBy",onChange:function(e){return r({searchSortBy:e})},value:t.searchSortBy,options:[{label:"Relevance & Popularity",value:R.I.SORT_BYS.RELEVANCE},{label:"Newest First",value:R.I.SORT_BYS.CREATED_DESC}]})),a.a.createElement("div",{className:w.a.control},a.a.createElement(T.A,{htmlFor:"searchControlsSearchDepth"},"Search Depth"),a.a.createElement(T.D,{id:"searchControlsSearchDepth",onChange:function(e){return r({searchDepth:e})},value:t.searchDepth,options:[{value:R.I.DEPTHS.EVERYTHING,label:"Everything"},{value:R.I.DEPTHS.TITLE_DESC_TAGS,label:"Title & Description"},{value:R.I.DEPTHS.CODE,label:"Code Only"}]})),a.a.createElement("div",{className:w.a.control},a.a.createElement(T.A,{htmlFor:"includeForks"},"Include Forks?"),a.a.createElement(T.z,{className:w.a.input,id:"includeForks",type:"checkbox",checked:t.searchIncludeForks,onChange:function(){r({searchIncludeForks:!t.searchIncludeForks})}})))}U.propTypes={params:i.a.shape({itemType:i.a.string,searchSortBy:i.a.string,searchDepth:i.a.string,searchIncludeForks:i.a.bool}),updateSearchParams:i.a.func};var F=U;function G(e){return e.params.itemType===R.D.Pen?a.a.createElement(F,e):null}G.propTypes={params:i.a.shape({itemType:i.a.string,searchSortBy:i.a.string,searchDepth:i.a.string,searchIncludeForks:i.a.bool}),updateSearchParams:i.a.func};var j=G;function k(e){var t=e.params,r=e.updateSearchParams;return a.a.createElement(T.v,{className:w.a.root},a.a.createElement(b,{selectedFilter:Object(y.O)(t.itemType),searchTerm:t.searchTerm}),a.a.createElement(j,{params:t,updateSearchParams:r}))}k.propTypes={params:i.a.shape({itemType:i.a.string,searchDepth:i.a.string,searchIncludeForks:i.a.bool,searchSortBy:i.a.string,searchTerm:i.a.string}),updateSearchParams:i.a.func};var x=k,V=r(24),M=r(1096),B=r.n(M);var J=function(){return a.a.createElement("div",{className:B.a.root},a.a.createElement(V.n,{limit:R.B.GRID,className:B.a.loadingGrid}),a.a.createElement("div",{className:L()("module center",B.a.message)},a.a.createElement("h1",null,"Want more?"),a.a.createElement("p",null,a.a.createElement("a",{href:"/signup"},"Create an account")," or ",a.a.createElement("a",{href:"/login"},"log in")," ","to see additional search results, add your favorites to Collections, and save changes."),a.a.createElement(T.g,{href:"/signup",color:"green"},"Sign Up")," ",a.a.createElement(T.g,{href:"/login"},"Log In")))},Y=function(e){var t=e.searchTerm,r=e.itemType;return a.a.createElement("div",{className:"module center full-width"},"No ",r?Object(y.p)(Object(y.X)(r)):"results",' found for "',a.a.createElement("strong",null,t),'"')};Y.propTypes={searchTerm:i.a.string.isRequired,itemType:i.a.string};var W=Y,H={error:a.a.createElement("p",null,"Our bad. Our team has been alerted and we're working to restore it. If you need help right now, ",a.a.createElement("a",{href:"/support/"},"contact us in support"),".")};var q=function(){return a.a.createElement("div",{className:"module center full-width"},a.a.createElement("div",{className:"warning-icon-bar"},a.a.createElement("span",null,"!")),a.a.createElement("h1",null,"Search is overloaded"),H.error)},K=["itemType"];function X(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,a,o,l,i=[],c=!0,E=!1;try{if(o=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;c=!1}else for(;!(c=(n=o.call(r)).done)&&(i.push(n.value),i.length!==t);c=!0);}catch(e){E=!0,a=e}finally{try{if(!c&&null!=r.return&&(l=r.return(),Object(l)!==l))return}finally{if(E)throw a}}return i}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return Q(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return Q(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Q(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function $(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var z=R.B.GRID;function Z(e){var t=e.itemType,r=$(e,K),n={filters:{searchInput:{term:r.searchTerm}},pagination:{limit:z}};["sortBy","includeForks","depth"].map((function(e){var t="search".concat(Object(y.p)(e,!1));r[t]&&(n.filters.searchInput[e]=r[t])}));var o=Object(c.L)({itemType:t,queryVariables:n}),l=o.loading,i=o.error,E=o.items,s=o.pageInfo,u=o.refetchPage,f=X(Object(c.tb)(),1)[0]&&(null==s?void 0:s.hasPreviousPage);return l?a.a.createElement(V.n,{itemType:t,limit:z}):i?a.a.createElement(q,null):f?a.a.createElement(J,null):E&&0!==E.length?a.a.createElement(V.L,{pageInfo:s},a.a.createElement(V.i,null,E.map((function(e){return a.a.createElement(V.j,{key:e.id,item:e,refetchPage:u})})))):a.a.createElement(W,{searchTerm:r.searchTerm,itemType:t})}Z.propTypes={itemType:y.j,searchType:i.a.string};var ee=Z,te=r(1097),re=r.n(te);function ne(){var e=Object(o.j)().searchType,t=Object(c.Sb)(),r=t.params,n=t.updateSearchParams;return e?a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{className:re.a.root},a.a.createElement(x,{params:r,updateSearchParams:n}),a.a.createElement("div",{className:"width-wrapper"},a.a.createElement(d,{searchTerm:r.searchTerm,searchType:e}),r.searchTerm?a.a.createElement(ee,r):a.a.createElement("div",{className:"module center full-width"},"Enter a search term above.")))):a.a.createElement(o.a,{to:"/search/pens"})}ne.propTypes={location:i.a.object,match:i.a.object};var ae=ne},13:function(e,t,r){"use strict";t.a={ADD_NEW_FILE:"ADD_NEW_FILE",ADD_NEW_FILES_AND_FOLDERS:"ADD_NEW_FILES_AND_FOLDERS",DUPLICATE_FILE:"DUPLICATE_FILE",UPDATE_NEWEST_FILE:"UPDATE_NEWEST_FILE",UPDATE_FILE_NAME:"UPDATE_FILE_NAME",UPDATE_FILE_CONTENT:"UPDATE_FILE_CONTENT",RESET_FILE_CONTENT:"RESET_FILE_CONTENT",UPDATE_FILE_ERRORS:"UPDATE_FILE_ERRORS",FLUSH_FILES_CONTENT:"FLUSH_FILES_CONTENT",ADD_FILE_ERROR:"ADD_FILE_ERROR",BABEL_ENTRY_FILE_ERROR:"BABEL_ENTRY_FILE_ERROR",CLEAR_FILE_ERRORS:"CLEAR_FILE_ERRORS",SET_FILE_CONTENT_TO_LOADING:"SET_FILE_CONTENT_TO_LOADING",SET_FILE_CONTENT_LOAD_ERROR:"SET_FILE_CONTENT_LOAD_ERROR",UPDATE_DRAGGED_FILE_LOCATION:"UPDATE_DRAGGED_FILE_LOCATION",RECEIVE_FILES_SAVE_SUCCESS:"RECEIVE_FILES_SAVE_SUCCESS",RELOAD_OPEN_PROCESSED_FILES:"RELOAD_OPEN_PROCESSED_FILES",DELETE_FILE:"DELETE_FILE",DELETE_FILES:"DELETE_FILES",CREATE_NEW_FILE:"CREATE_NEW_FILE",UPDATE_NEW_FILE_NAME:"UPDATE_NEW_FILE_NAME",CANCEL_NEW_FILE_NAME:"CANCEL_NEW_FILE_NAME",FINISHED_CREATING_NEW_FILE:"FINISHED_CREATING_NEW_FILE",ADD_OPEN_FILE:"ADD_OPEN_FILE",SET_OPEN_FILES:"SET_OPEN_FILES",UPDATE_FILE_DRAGGING_STATE:"UPDATE_FILE_DRAGGING_STATE",UPDATE_FILE_DRAGGING_OVER_STATE:"UPDATE_FILE_DRAGGING_OVER_STATE",MANUAL_FILE_UPLOAD:"MANUAL_FILE_UPLOAD",TOGGLE_FOLDER_OPEN_STATE:"TOGGLE_FOLDER_OPEN_STATE",SET_EDITING:"SET_EDITING",SET_EDITING_WITH_FILE_NAME:"SET_EDITING_WITH_FILE_NAME",SET_RENAMING_FILE:"SET_RENAMING_FILE",SET_SIDEBAR_SELECTED:"SET_SIDEBAR_SELECTED",REFRESH_PROCESSED_FILES_CONTENT:"REFRESH_PROCESSED_FILES_CONTENT",SET_PROJECT_TITLE_EDITING_STATE:"SET_PROJECT_TITLE_EDITING_STATE",SET_LAYOUT_STATE:"SET_LAYOUT_STATE",SET_RENDERING_FILE:"SET_RENDERING_FILE",TRIGGER_RENDER:"TRIGGER_RENDER",SET_CANCELLED_RENDER:"SET_CANCELLED_RENDER",ADD_PROCESSING_LOG:"ADD_PROCESSING_LOG",SET_LOG_CONSOLE_OPEN_STATE:"SET_LOG_CONSOLE_OPEN_STATE",CLEAR_LOG_CONSOLE:"CLEAR_LOG_CONSOLE",UPDATE_PROCESSING_QUEUE:"UPDATE_PROCESSING_QUEUE",UPDATE_PROCESSING_SAVE_STATUS:"UPDATE_PROCESSING_SAVE_STATUS",CLEAR_ALL_PROCESSING_INDICATORS:"CLEAR_ALL_PROCESSING_INDICATORS",TOGGLE_DIALOG:"TOGGLE_DIALOG",CLOSE_THIS_DIALOG:"CLOSE_THIS_DIALOG",CLOSE_ALL_POPUPS:"CLOSE_ALL_POPUPS",SET_PROJECT_DELETE_DIALOG_INPUT:"SET_PROJECT_DELETE_DIALOG_INPUT",OPEN_MODAL:"OPEN_MODAL",CLOSE_ALL_MODALS:"CLOSE_ALL_MODALS",ADD_MESSAGE:"ADD_MESSAGE",CLEAR_MESSAGES:"CLEAR_MESSAGES",RECEIVE_PROJECT_UI_STATE_SAVE_SUCCESS:"RECEIVE_PROJECT_UI_STATE_SAVE_SUCCESS",DEPLOYMENT_IN_PROGRESS:"DEPLOYMENT_IN_PROGRESS",FAILED_TO_DEPLOY:"FAILED_TO_DEPLOY",UPDATE_CNAME_STATUS:"UPDATE_CNAME_STATUS",OPEN_CONTEXT_MENU:"OPEN_CONTEXT_MENU",CLOSE_CONTEXT_MENU:"CLOSE_CONTEXT_MENU",UPDATE_EXPORT_STATUS:"UPDATE_EXPORT_STATUS",RECEIVE_PROJECT_SAVE_SUCCESS:"RECEIVE_PROJECT_SAVE_SUCCESS",RECEIVE_PROJECT_SAVE_FAILURE:"RECEIVE_PROJECT_SAVE_FAILURE",RECEIVE_UPLOADS_SAVE_SUCCESS:"RECEIVE_UPLOADS_SAVE_SUCCESS",ROLLBACK_STATE:"ROLLBACK_STATE",ROLLBACK_UPLOAD_STATE:"ROLLBACK_UPLOAD_STATE",RECEIVE_PROJECT_DELETE_FAILURE:"RECEIVE_PROJECT_DELETE_FAILURE",UPDATE_PROJECT:"UPDATE_PROJECT",UPDATE_PROJECT_EDITOR_SETTINGS:"UPDATE_PROJECT_EDITOR_SETTINGS",UPDATE_PROJECT_USER:"UPDATE_PROJECT_USER",UPDATE_PROCESSED_PROJECT:"UPDATE_PROCESSED_PROJECT",UPDATE_USER_TEAM:"UPDATE_USER_TEAM",UPDATE_READONLY:"UPDATE_READONLY",UPDATE_OTHER_EDITORS_OPEN:"UPDATE_OTHER_EDITORS_OPEN",RECEIVE_UPDATE_USER_TEAM_FAILURE:"RECEIVE_UPDATE_USER_TEAM_FAILURE",RECEIVE_BOILERPLATES_SUCCESS:"RECEIVE_BOILERPLATES_SUCCESS",RECEIVE_BOILERPLATES_FAILURE:"RECEIVE_BOILERPLATES_FAILURE",RECEIVE_CLONE_SUCCESS:"RECEIVE_CLONE_SUCCESS",RECEIVE_CLONE_FAILURE:"RECEIVE_CLONE_FAILURE",ADD_TO_SAVES:"ADD_TO_SAVES",REMOVE_FROM_SAVES:"REMOVE_FROM_SAVES",UPDATE_PROJECT_UPLOADS_QUEUE:"UPDATE_PROJECT_UPLOADS_QUEUE",UPDATE_PROJECT_DEPLOY_STATUS:"UPDATE_PROJECT_DEPLOY_STATUS",UPDATE_SCREENSHOT_STATUS:"UPDATE_SCREENSHOT_STATUS",UPDATE_PROJECT_UPLOADS_STATE:"UPDATE_PROJECT_UPLOADS_STATE",UPLOADS_PROCESS_COMPLETE:"UPLOADS_PROCESS_COMPLETE",RECEIVE_GLOBAL_ASSET_DELETE_FAILURE:"RECEIVE_GLOBAL_ASSET_DELETE_FAILURE",REMOVE_GLOBAL_ASSET_DATA_FROM_LIST:"REMOVE_GLOBAL_ASSET_DATA_FROM_LIST",UPDATE_FILE_SEARCH:"UPDATE_FILE_SEARCH",SET_FILE_SEARCH:"SET_FILE_SEARCH",UPDATE_FILES_ACTIVE_FILE:"UPDATE_FILES_ACTIVE_FILE",SET_SPINNING_STATE:"SET_SPINNING_STATE",SEND_REQUEST:"SEND_REQUEST",RECEIVE_REQUEST:"RECEIVE_REQUEST",USER_HAS_LOGGED_OUT:"USER_HAS_LOGGED_OUT"}},156:function(e,t,r){"use strict";r.d(t,"h",(function(){return c})),r.d(t,"b",(function(){return E})),r.d(t,"a",(function(){return s})),r.d(t,"c",(function(){return u})),r.d(t,"g",(function(){return f})),r.d(t,"f",(function(){return p})),r.d(t,"d",(function(){return m})),r.d(t,"e",(function(){return h}));var n=r(13);function a(e){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(e)}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t,r){var n;return n=function(e,t){if("object"!=a(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!=a(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(t,"string"),(t="symbol"==a(n)?n:String(n))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var c=function(e){return{type:n.a.TOGGLE_DIALOG,payload:{dialog:e}}},E=function(){return{type:n.a.CLOSE_ALL_POPUPS}},s=function(){return{type:n.a.CLOSE_ALL_MODALS}},u=function(e){return{type:n.a.CLOSE_THIS_DIALOG,payload:{dialog:e}}},f=function(e){return{type:n.a.ADD_MESSAGE,payload:{text:e}}},_=function(e,t){return{type:n.a.OPEN_MODAL,payload:l(l({},t),{},{onConfirm:t.onConfirm,onAlternate:t.onAlternate,onCancel:t.onCancel,type:e})}},p=function(e){return _("message",e)},m=function(e){return _("confirm",e)},h=function(e){return _("message",l(l({},e),{},{style:"error"}))}},198:function(e,t,r){"use strict";function n(e){return function(e){if(Array.isArray(e))return a(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return a(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return a(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}r.d(t,"c",(function(){return o})),r.d(t,"a",(function(){return l})),r.d(t,"d",(function(){return i})),r.d(t,"b",(function(){return c}));var o="processed",l={media:[],text:[],all:[]},i=function(e){e&&(l.media=e.media||[],l.text=e.text||[],l.all=[].concat(n(l.text),n(l.media)))},c=function(e){return!l.all.includes(e)}},43:function(e,t,r){"use strict";r.d(t,"a",(function(){return i}));var n=r(0),a=r.n(n),o=r(2),l=r(198),i={copy:{DELETE_FOLDER:function(e){return{title:"Are you sure you want to delete the folder ".concat(e,"?"),message:a.a.createElement("p",null,"Deleting a folder will also delete all the files within it"),confirm:"Yes, delete the folder",cancel:"Cancel"}},DELETE_FILE:function(e){return{title:"Are you sure you want to delete the file ".concat(e,"?"),confirm:"Yes, delete the file",cancel:"Cancel"}},DUPLICATE_FILE:function(e,t){return{title:"Unable to name this ".concat(t," ").concat(e),message:a.a.createElement("p",null,"There is already a file of the same type, or folder with this name. Please try a different name."),confirm:"Okay"}},DUPLICATE_FILE_MOVE:function(e,t){return{title:"Unable to move the ".concat(t," ").concat(e),message:a.a.createElement("p",null,"There is already a file of the same type, or folder with that name in that location."),confirm:"Okay"}},DISALLOWED_FILE_MOVE:function(e,t){return{title:"Unable to move the ".concat(t," ").concat(e),message:a.a.createElement("p",null,"Sadly, this would make a file tree too deep for us to store and serve up. You could use shorter folder names, or simplify a little."),confirm:"Okay"}},OVERWRITE_DUPLICATE_FILE:function(e,t){return{title:"Overwrite ".concat(e,"?"),message:a.a.createElement("p",null,"There is already a file or folder with that name. Would you like to overwrite the file with new content, or create a new uniquely named file?"),confirm:"Overwrite ".concat(e),alternate:"Create ".concat(t),cancel:"Skip"}},NO_COPY_SUPPORT:function(e){return{title:"Can't copy, sorry :(",message:a.a.createElement("div",null,a.a.createElement("p",null,"Your browser doesn't support auto-copying of text. Here's the text for you to copy:"),a.a.createElement("input",{type:"text",style:"width: 100%",value:e})),confirm:"Done"}},UNSAVED_FILE:function(e){return{title:"Are you sure you want to close ".concat(e),message:a.a.createElement("p",null,"This file has unsaved changes which you will lose if you close the file."),confirm:"Close file",alternate:"Save and Close file",cancel:"Cancel"}},FILE_TOO_LONG:function(e){return{title:"The file ending with ...".concat(e.slice(-40),"'s name is too long."),message:a.a.createElement("p",null,"Sadly, we have to limit these to 190 characters for our static deploys to work."),confirm:"Okay"}},PATH_TOO_LONG:function(){return{title:"File path is too long.",message:a.a.createElement("p",null,"This file path (file name + directories) is too long. Amazon keeps these < 1024 characters... you might have to re-arrange the directories a little bit, or pick smaller file names."),confirm:"Okay"}},BAD_FILE_NAME:function(e){return{title:"This file name is not allowed (".concat(e,")"),message:a.a.createElement("p",null,"Sadly, our file names need to be vanilla (for deploys!) ... Gotta stick with letters, numbers, dashes, underscores and dots"),confirm:"Okay"}},BAD_FILE_EXTENSION:function(e){return{title:'Unsupported file type: "'.concat(e,'"'),message:a.a.createElement("p",null,"Looks like we don't support this file type. Our supported file types are:",a.a.createElement("br",null),l.a.text.map((function(e){return a.a.createElement("code",{key:e},e," ")})),a.a.createElement("br",null),a.a.createElement("br",null),"And our supported media files are:",a.a.createElement("br",null),l.a.media.map((function(e){return a.a.createElement("code",{key:e},e," ")}))),confirm:"Okay"}},NO_PROCESSED_FILES:function(e){return{title:"Edge case alert! (".concat(e,")"),message:a.a.createElement("p",null,'Sorry, we\'ve reserved the "processed" string in file names as our own, so we can manage processed scss, css... and everything, really'),confirm:"Okay"}},RENAME_MEDIA_ERROR:function(e){return{title:"Sorry, you can't change media file types from ".concat(e),message:a.a.createElement("p",null,"We don't support changing of media file types (sorry) you can change these on your desktop, and re-upload, if need be!"),confirm:"Okay"}},COULDNT_FIND_FILE:function(e){return{title:"Sorry, we can't find the file",message:a.a.createElement("p",null,"Could ",a.a.createElement("em",null,e)," be an older file, or could this be an older log?"),confirm:"Okay"}},TOO_MANY_GLOBAL_UPLOADS:{title:"Too Many Files",message:a.a.createElement("p",null,"We only allow 25 files to be uploaded at a time. Feel free to try again in groups of 25."),confirm:"OK"},UPLOAD_TOO_LARGE:{title:"Uploaded file is too large",message:a.a.createElement("p",null,"One or more of the files is over our limit of 5 MB. Feel free to try again with a smaller file."),confirm:"OK"},UPLOADS_TOO_LARGE:{title:"This upload is too large",message:a.a.createElement("p",null,"Combined, these files are over our limit of 5 MB. Feel free to try again with less files."),confirm:"OK"},SAVE_TOO_LARGE:{title:"Save too large.",message:a.a.createElement("p",null,"Wow, looks like you are trying to save some big text files, or a lot of files at once. Please try saving files individually, and then hitting save all and run afterwards."),confirm:"OK"},INVALID_UPLOAD_EXTENSION:{title:"Bad File Name",message:a.a.createElement("p",null,"One or more of the files either 1) has an invalid file extension like .exe 2) doesnt have a file extension or 3) starts with a period. Feel free to fix this issue an upload again."),confirm:"OK"},INVALID_FOLDER_DROP:{title:"Oops",message:a.a.createElement("p",null,"It looks like you tried to drop a folder. Your browser only supports file drop. Please try again with files only."),confirm:"OK"},ALL_FILES_REMOVED:{title:"Oh no!",message:a.a.createElement("p",null,"Looks like youve tried to upload .processed. or dotfiles (eg .gitignore) ... We don't these file types in uploads, sorry."),confirm:"OK"},UPGRADE_TO_USE_MEDIA:{title:"Media uploads are a PRO Feature",message:a.a.createElement("p",null,"Your current CodePen plan only allows you to upload text files in the Project Editor. Upgrade to a PRO plan to upload images and other media."),upgrade:!0,support:!1},PROJECT_IS_RESTRICTED:function(e,t){return{title:"This project is restricted",message:a.a.createElement("div",null,a.a.createElement("p",null,"This project has been restricted because your current plan only allows ",e," projects and you have ",t," saved."),a.a.createElement("p",null,"A restricted project is:"),a.a.createElement("ul",null,a.a.createElement("li",null,"not editable by you"),a.a.createElement("li",null,"not viewable by other people")),a.a.createElement("p",null,"You can instantly restore this project back to normal by upgrading your plan.")),upgrade:!0,support:!1}},OVERWRITE_ASSETS:function(e){return{title:"Overwrite or Rename?",message:a.a.createElement("div",null,a.a.createElement("p",null,"The file name(s) below already exist. Would you like to overwrite them or would you like to create a new asset with a unique name?"),e.forEach((function(e){return a.a.createElement("p",null,"$",e)}))),confirm:"Overwrite file",alternate:"Create unique names",cancel:"Cancel"}},DELETE_ASSET:function(e){return{title:"Are you sure you want to delete the asset ".concat(e,"?"),confirm:"Yes, delete the asset",cancel:"Cancel"}},ERROR_SAVING:function(e){return{title:"Error while saving Project",message:a.a.createElement("p",null,e),confirm:"Close"}},ERROR_SAVING_TRY_AGAIN:{title:"Error",message:a.a.createElement("p",null,"Unable to save Project. Please try again."),confirm:"Close"},ERROR_SAVING_CONTACT_SUPPORT:function(e,t){var r="Error",n=a.a.createElement("p",null),l=a.a.createElement(a.a.Fragment,null,a.a.createElement("p",{className:"error-details"},"CODE: ",e),a.a.createElement("p",{className:"error-details"},"PATH: ",t));switch(e){case 502:case 503:r="Unable to make network request.",n=a.a.createElement(a.a.Fragment,null,l,a.a.createElement("p",null,"A network request has failed to reach our servers. Please try again in a few minutes or email support at ",a.a.createElement(o.Bb,null)," ","and we'll help."));break;case 429:r="Request Limit Reached.",n=a.a.createElement(a.a.Fragment,null,l,a.a.createElement("p",null,"It looks like you're hitting a request limit we have in place to protect us against a current DDoS attack. This should not have happened, please contact us at ",a.a.createElement(o.Bb,null)," so we can fix this for you."));break;default:n=a.a.createElement(a.a.Fragment,null,l,a.a.createElement("p",null,"Something has gone wrong. Please contact us at"," ",a.a.createElement(o.Bb,null)," so we can fix this for you."))}return{title:r,message:n,confirm:"Close",support:!1}},ERROR_UPLOADING_PROJECT_FILE:function(e){return{title:"Upload Error",message:a.a.createElement("p",null,"Unable to upload the file ",e,". Please try again. If the issue persists please contact ",a.a.createElement(o.Bb,null)),confirm:"Close",support:!1}},LIMIT_PROJECTS:function(e){return{title:"You're at your Project limit.",message:a.a.createElement("p",null,"You have used ",e," projects and have none left on your current plan. The good news is you can upgrade your plan to get more."),alternate:"Go to Your Work",alternateUrl:"/your-work",upgrade:!0,support:!1}},ANON_PROJECTS:{title:"The CodePen Project Editor is for logged in users.",message:a.a.createElement("p",null,"The Project Editor enables you to build web development projects online and share them instantly."," ",a.a.createElement("a",{href:"/features/projects"},"Find out more"),"."),login:!0,support:!1},PROJECTS_OFFLINE:{title:"You appear to be offline.",message:a.a.createElement("p",null,"The Project Editor works best if you've got internet! Check your connection and browser extensions and try again.")},DOMAIN_UNAVAILABLE:function(e){return{title:"A necessary domain is unavailable",message:a.a.createElement(a.a.Fragment,null,a.a.createElement("p",null,"The Project Editor can't connect to the following domains. Without this connection the Editor will not work properly. To fix this you may need to turn off a Browser Extension or whitelist the domains in your Firewall."),a.a.createElement("ul",null,e.map((function(e){return a.a.createElement("li",{key:e},e)}))),a.a.createElement("p",null,a.a.createElement("a",{href:"https://blog.codepen.io/troubleshooting-files-fail-to-load-in-the-projects-editor/"},"Read more in the docs"),".")),confirm:"Close"}}}}},453:function(e,t,r){"use strict";r.d(t,"b",(function(){return m})),r.d(t,"a",(function(){return h})),r.d(t,"c",(function(){return S}));var n=r(13),a=function(e){return{type:n.a.SEND_REQUEST,payload:{requestKey:e}}},o=function(e){return{type:n.a.RECEIVE_REQUEST,payload:{requestKey:e}}},l=r(4),i=r(156),c=r(43),E=function(e,t){return function(){(t.url.includes("projects/project")||t.url.indexOf("container"))&&e(Object(i.e)({copy:c.a.copy.ERROR_SAVING_TRY_AGAIN})),t.onFail&&t.onFail(e)}};function s(e){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s(e)}function u(){u=function(){return t};var e,t={},r=Object.prototype,n=r.hasOwnProperty,a=Object.defineProperty||function(e,t,r){e[t]=r.value},o="function"==typeof Symbol?Symbol:{},l=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function E(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{E({},"")}catch(e){E=function(e,t,r){return e[t]=r}}function f(e,t,r,n){var o=t&&t.prototype instanceof d?t:d,l=Object.create(o.prototype),i=new b(n||[]);return a(l,"_invoke",{value:v(e,r,i)}),l}function _(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}t.wrap=f;var p="suspendedStart",m="executing",h="completed",S={};function d(){}function T(){}function y(){}var O={};E(O,l,(function(){return this}));var A=Object.getPrototypeOf,L=A&&A(A(N([])));L&&L!==r&&n.call(L,l)&&(O=L);var R=y.prototype=d.prototype=Object.create(O);function I(e){["next","throw","return"].forEach((function(t){E(e,t,(function(e){return this._invoke(t,e)}))}))}function g(e,t){function r(a,o,l,i){var c=_(e[a],e,o);if("throw"!==c.type){var E=c.arg,u=E.value;return u&&"object"==s(u)&&n.call(u,"__await")?t.resolve(u.__await).then((function(e){r("next",e,l,i)}),(function(e){r("throw",e,l,i)})):t.resolve(u).then((function(e){E.value=e,l(E)}),(function(e){return r("throw",e,l,i)}))}i(c.arg)}var o;a(this,"_invoke",{value:function(e,n){function a(){return new t((function(t,a){r(e,n,t,a)}))}return o=o?o.then(a,a):a()}})}function v(t,r,n){var a=p;return function(o,l){if(a===m)throw new Error("Generator is already running");if(a===h){if("throw"===o)throw l;return{value:e,done:!0}}for(n.method=o,n.arg=l;;){var i=n.delegate;if(i){var c=C(i,n);if(c){if(c===S)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(a===p)throw a=h,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);a=m;var E=_(t,r,n);if("normal"===E.type){if(a=n.done?h:"suspendedYield",E.arg===S)continue;return{value:E.arg,done:n.done}}"throw"===E.type&&(a=h,n.method="throw",n.arg=E.arg)}}}function C(t,r){var n=r.method,a=t.iterator[n];if(a===e)return r.delegate=null,"throw"===n&&t.iterator.return&&(r.method="return",r.arg=e,C(t,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),S;var o=_(a,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,S;var l=o.arg;return l?l.done?(r[t.resultName]=l.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,S):l:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,S)}function D(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function P(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function b(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(D,this),this.reset(!0)}function N(t){if(t||""===t){var r=t[l];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var a=-1,o=function r(){for(;++a<t.length;)if(n.call(t,a))return r.value=t[a],r.done=!1,r;return r.value=e,r.done=!0,r};return o.next=o}}throw new TypeError(s(t)+" is not iterable")}return T.prototype=y,a(R,"constructor",{value:y,configurable:!0}),a(y,"constructor",{value:T,configurable:!0}),T.displayName=E(y,c,"GeneratorFunction"),t.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===T||"GeneratorFunction"===(t.displayName||t.name))},t.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,y):(e.__proto__=y,E(e,c,"GeneratorFunction")),e.prototype=Object.create(R),e},t.awrap=function(e){return{__await:e}},I(g.prototype),E(g.prototype,i,(function(){return this})),t.AsyncIterator=g,t.async=function(e,r,n,a,o){void 0===o&&(o=Promise);var l=new g(f(e,r,n,a),o);return t.isGeneratorFunction(r)?l:l.next().then((function(e){return e.done?e.value:l.next()}))},I(R),E(R,c,"Generator"),E(R,l,(function(){return this})),E(R,"toString",(function(){return"[object Generator]"})),t.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},t.values=N,b.prototype={constructor:b,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(P),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function a(n,a){return i.type="throw",i.arg=t,r.next=n,a&&(r.method="next",r.arg=e),!!a}for(var o=this.tryEntries.length-1;o>=0;--o){var l=this.tryEntries[o],i=l.completion;if("root"===l.tryLoc)return a("end");if(l.tryLoc<=this.prev){var c=n.call(l,"catchLoc"),E=n.call(l,"finallyLoc");if(c&&E){if(this.prev<l.catchLoc)return a(l.catchLoc,!0);if(this.prev<l.finallyLoc)return a(l.finallyLoc)}else if(c){if(this.prev<l.catchLoc)return a(l.catchLoc,!0)}else{if(!E)throw new Error("try statement without catch or finally");if(this.prev<l.finallyLoc)return a(l.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var a=this.tryEntries[r];if(a.tryLoc<=this.prev&&n.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var l=o?o.completion:{};return l.type=e,l.arg=t,o?(this.method="next",this.next=o.finallyLoc,S):this.complete(l)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),S},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),P(r),S}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var a=n.arg;P(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:N(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),S}},t}function f(e,t,r,n,a,o,l){try{var i=e[o](l),c=i.value}catch(e){return void r(e)}i.done?t(c):Promise.resolve(c).then(n,a)}function _(e){return function(){var t=this,r=arguments;return new Promise((function(n,a){var o=e.apply(t,r);function l(e){f(o,n,a,l,i,"next",e)}function i(e){f(o,n,a,l,i,"throw",e)}l(void 0)}))}}var p=function(){},m=function(){var e=_(u().mark((function e(t){var r,n,i,c,s,f,_,m,h,S,d;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=t.dispatch,n=t.getState,i=t.method,c=t.url,s=t.params,f=n().requests,_="".concat(i,"_").concat(c),m=Object(l.U)(t.customFailHandler,E(r,t)),h=Object(l.U)(t.onSuccess,p),!f[_]){e.next=8;break}return e.abrupt("return",!1);case 8:return r(a(_)),e.prev=9,e.next=12,Object(l.cb)(i,c,s);case 12:return S=e.sent,e.next=15,S.json();case 15:d=e.sent,r(o(_)),200===S.status?h(d):m(d),e.next=25;break;case 20:e.prev=20,e.t0=e.catch(9),console.error(e.t0),m(e.t0),r(o(_));case 25:case"end":return e.stop()}}),e,null,[[9,20]])})));return function(t){return e.apply(this,arguments)}}();window.simpleServerPostAsync=l.fb,window.__jsonpCallbacks||(window.__jsonpCallbacks=[]),window.customJSONPCallback=function(e){var t=window.__jsonpCallbacks.pop();do{"function"==typeof t&&t(e),t=window.__jsonpCallbacks.pop()}while(t)};var h=function(e){var t=e.onSuccess,r=e.url;window.__jsonpCallbacks.push(t);var n=document.createElement("script");n.src="".concat(r,"?callback=customJSONPCallback"),document.querySelector("head").append(n)},S=function(){var e=_(u().mark((function e(t,r){var n,a,o,l,i;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(n=new FormData,a=0,o=Object.keys(r);a<o.length;a++)l=o[a],n.append(l,r[l]);return e.next=4,fetch(t,{body:n,method:"POST",mode:"cors",redirect:"follow",referrerPolicy:"unsafe-url"});case 4:return i=e.sent,e.next=7,i.json();case 7:return e.abrupt("return",e.sent);case 8:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}()}}]);