(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{"4ysu":function(t,e,n){"use strict";(function(t){n.d(e,"a",(function(){return ut})),n.d(e,"b",(function(){return z})),n.d(e,"c",(function(){return m}));var r=n("MP1E"),i=n("3U8n"),o=n("eP1p"),a=n("0esZ"),u=n("aurelia-event-aggregator"),s=function(t,e){return(s=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)};var c=function(){function e(t){this.plan=null,this.options={},Object.assign(this,t),this.params=this.params||{},this.viewPortInstructions={};var e=[],n=this;do{var r=Object.assign({},n.params);n.config&&n.config.hasChildRouter&&delete r[n.getWildCardName()],e.unshift(r),n=n.parentInstruction}while(n);var i=Object.assign.apply(Object,[{},this.queryParams].concat(e));this.lifecycleArgs=[i,this.config,this]}return e.prototype.getAllInstructions=function(){var t=[this],e=this.viewPortInstructions;for(var n in e){var r=e[n].childNavigationInstruction;r&&t.push.apply(t,r.getAllInstructions())}return t},e.prototype.getAllPreviousInstructions=function(){return this.getAllInstructions().map((function(t){return t.previousInstruction})).filter((function(t){return t}))},e.prototype.addViewPortInstruction=function(t,e,n,r){var i,o="string"==typeof t?t:t.name,a=this.lifecycleArgs,u=Object.assign({},a[1],{currentViewPort:o});return i="string"==typeof t?{name:t,strategy:e,moduleId:n,component:r,childRouter:r.childRouter,lifecycleArgs:[a[0],u,a[2]]}:{name:o,strategy:t.strategy,component:t.component,moduleId:t.moduleId,childRouter:t.component.childRouter,lifecycleArgs:[a[0],u,a[2]]},this.viewPortInstructions[o]=i},e.prototype.getWildCardName=function(){var t=this.config.route,e=t.lastIndexOf("*");return t.substr(e+1)},e.prototype.getWildcardPath=function(){var t=this.getWildCardName(),e=this.params[t]||"",n=this.queryString;return n&&(e+="?"+n),e},e.prototype.getBaseUrl=function(){var t=this,e=encodeURI,n=decodeURI(this.fragment);if(""===n){var r=this.router.routes.find((function(e){return e.name===t.config.name&&""!==e.route}));r&&(n=r.route)}if(!this.params)return e(n);var i=this.getWildCardName(),o=this.params[i]||"";return e(o?n.substr(0,n.lastIndexOf(o)):n)},e.prototype._commitChanges=function(e){var n=this,r=this.router;r.currentInstruction=this;var i=this.previousInstruction;i&&(i.config.navModel.isActive=!1),this.config.navModel.isActive=!0,r.refreshNavigation();var o=[],a=[],u=this.viewPortInstructions,s=function(n){var i=u[n],s=r.viewPorts[n];if(!s)throw new Error("There was no router-view found in the view for "+i.moduleId+".");var c=i.childNavigationInstruction;"replace"===i.strategy?c&&c.parentCatchHandler?o.push(c._commitChanges(e)):(e&&a.push({viewPort:s,viewPortInstruction:i}),o.push(s.process(i,e).then((function(){return c?c._commitChanges(e):t.resolve()})))):c&&o.push(c._commitChanges(e))};for(var c in u)s(c);return t.all(o).then((function(){return a.forEach((function(t){return t.viewPort.swap(t.viewPortInstruction)})),null})).then((function(){return l(n)}))},e.prototype._updateTitle=function(){var t=this.router,e=this._buildTitle(t.titleSeparator);e&&t.history.setTitle(e)},e.prototype._buildTitle=function(t){void 0===t&&(t=" | ");var e="",n=[],r=this.config.navModel.title,i=this.router,o=this.viewPortInstructions;for(var a in r&&(e=i.transformTitle(r)),o){var u=o[a].childNavigationInstruction;if(u){var s=u._buildTitle(t);s&&n.push(s)}}return n.length&&(e=n.join(t)+(e?t:"")+e),i.title&&(e+=(e?t:"")+i.transformTitle(i.title)),e},e}(),l=function(t){t.previousInstruction=null,t.plan=null},f=function(){function t(t,e){this.isActive=!1,this.title=null,this.href=null,this.relativeHref=null,this.settings={},this.config=null,this.router=t,this.relativeHref=e}return t.prototype.setTitle=function(t){this.title=t,this.isActive&&this.router.updateTitle()},t}();function h(t,e,n){return void 0===n&&(n=!1),e||"#"===t[0]||(t="#"+t),e&&n&&(t=t.substring(1,t.length)),t}function p(t,e,n,r){if(g.test(t))return t;var i="";return e.length&&"/"!==e[0]&&(i+="/"),(i+=e).length&&"/"===i[i.length-1]||"/"===t[0]||(i+="/"),i.length&&"/"===i[i.length-1]&&"/"===t[0]&&(i=i.substring(0,i.length-1)),h(i+t,n,r)}function v(t){var e=[];if(Array.isArray(t.route))for(var n=0,r=t.route.length;n<r;++n){var i=Object.assign({},t);i.route=t.route[n],e.push(i)}else e.push(Object.assign({},t));return e}var d=/^#?\//,g=/^([a-z][a-z0-9+\-.]*:)?\/\//i,y=function(){function t(){this.instructions=[],this.options={},this.pipelineSteps=[]}return t.prototype.addPipelineStep=function(t,e){if(null==e)throw new Error("Pipeline step cannot be null or undefined.");return this.pipelineSteps.push({name:t,step:e}),this},t.prototype.addAuthorizeStep=function(t){return this.addPipelineStep("authorize",t)},t.prototype.addPreActivateStep=function(t){return this.addPipelineStep("preActivate",t)},t.prototype.addPreRenderStep=function(t){return this.addPipelineStep("preRender",t)},t.prototype.addPostRenderStep=function(t){return this.addPipelineStep("postRender",t)},t.prototype.fallbackRoute=function(t){return this._fallbackRoute=t,this},t.prototype.map=function(t){var e=this;return Array.isArray(t)?(t.forEach((function(t){return e.map(t)})),this):this.mapRoute(t)},t.prototype.useViewPortDefaults=function(t){return this.viewPortDefaults=t,this},t.prototype.mapRoute=function(t){return this.instructions.push((function(e){for(var n,r=v(t),i=0,o=r.length;i<o;++i){var a=r[i];a.settings=a.settings||{},n||(n=e.createNavModel(a)),e.addRoute(a,n)}})),this},t.prototype.mapUnknownRoutes=function(t){return this.unknownRouteConfig=t,this},t.prototype.exportToRouter=function(t){for(var e=this.instructions,n=0,r=e.length;n<r;++n)e[n](t);var i=this,o=i.title,a=i.titleSeparator,u=i.unknownRouteConfig,s=i._fallbackRoute,c=i.viewPortDefaults;o&&(t.title=o),a&&(t.titleSeparator=a),u&&t.handleUnknownRoutes(u),s&&(t.fallbackRoute=s),c&&t.useViewPortDefaults(c),Object.assign(t.options,this.options);var l=this.pipelineSteps,f=l.length;if(f){if(!t.isRoot)throw new Error("Pipeline steps can only be added to the root router");var h=t.pipelineProvider;for(n=0,r=f;n<r;++n){var p=l[n],v=p.name,d=p.step;h.addStep(v,d)}}},t}(),m=function(){function e(t,e){var n=this;this.parent=null,this.options={},this.viewPortDefaults={},this.transformTitle=function(t){return n.parent?n.parent.transformTitle(t):t},this.container=t,this.history=e,this.reset()}return e.prototype.reset=function(){var e=this;this.viewPorts={},this.routes=[],this.baseUrl="",this.isConfigured=!1,this.isNavigating=!1,this.isExplicitNavigation=!1,this.isExplicitNavigationBack=!1,this.isNavigatingFirst=!1,this.isNavigatingNew=!1,this.isNavigatingRefresh=!1,this.isNavigatingForward=!1,this.isNavigatingBack=!1,this.couldDeactivate=!1,this.navigation=[],this.currentInstruction=null,this.viewPortDefaults={},this._fallbackOrder=100,this._recognizer=new a.a,this._childRecognizer=new a.a,this._configuredPromise=new t((function(t){e._resolveConfiguredPromise=t}))},Object.defineProperty(e.prototype,"isRoot",{get:function(){return!this.parent},enumerable:!0,configurable:!0}),e.prototype.registerViewPort=function(t,e){e=e||"default",this.viewPorts[e]=t},e.prototype.ensureConfigured=function(){return this._configuredPromise},e.prototype.configure=function(e){var n=this;this.isConfigured=!0;var r,i=e;return"function"==typeof e&&(i=e(r=new y)),t.resolve(i).then((function(t){t&&t.exportToRouter&&(r=t),r.exportToRouter(n),n.isConfigured=!0,n._resolveConfiguredPromise()}))},e.prototype.navigate=function(t,e){return!this.isConfigured&&this.parent?this.parent.navigate(t,e):(this.isExplicitNavigation=!0,this.history.navigate(function(t,e,n){return d.test(t)?h(t,n):p(t,e,n)}(t,this.baseUrl,this.history._hasPushState),e))},e.prototype.navigateToRoute=function(t,e,n){var r=this.generate(t,e);return this.navigate(r,n)},e.prototype.navigateBack=function(){this.isExplicitNavigationBack=!0,this.history.navigateBack()},e.prototype.createChild=function(t){var n=new e(t||this.container.createChild(),this.history);return n.parent=this,n},e.prototype.generate=function(t,e,n){void 0===e&&(e={}),void 0===n&&(n={});var r="childRoute"in e?this._childRecognizer:this._recognizer;if(!r.hasRoute(t)){if(this.parent)return this.parent.generate(t,e,n);throw new Error("A route with name '"+t+"' could not be found. Check that `name: '"+t+"'` was specified in the route's config.")}var i=p(r.generate(t,e),this.baseUrl,this.history._hasPushState,n.absolute);return n.absolute?""+this.history.getAbsoluteRoot()+i:i},e.prototype.createNavModel=function(t){var e=new f(this,"href"in t?t.href:t.route);return e.title=t.title,e.order=t.nav,e.href=t.href,e.settings=t.settings,e.config=t,e},e.prototype.addRoute=function(t,e){if(Array.isArray(t.route)){v(t).forEach(this.addRoute.bind(this))}else{b(t),"viewPorts"in t||t.navigationStrategy||(t.viewPorts={default:{moduleId:t.moduleId,view:t.view}}),e||(e=this.createNavModel(t)),this.routes.push(t);var n=t.route;"/"===n.charAt(0)&&(n=n.substr(1));var r=!0===t.caseSensitive,i=this._recognizer.add({path:n,handler:t,caseSensitive:r});if(n){var o=t.settings;delete t.settings;var a=JSON.parse(JSON.stringify(t));t.settings=o,a.route=n+"/*childRoute",a.hasChildRouter=!0,this._childRecognizer.add({path:a.route,handler:a,caseSensitive:r}),a.navModel=e,a.settings=t.settings,a.navigationStrategy=t.navigationStrategy}t.navModel=e;var u=this.navigation;if((e.order||0===e.order)&&-1===u.indexOf(e)){if(!e.href&&""!==e.href&&(i.types.dynamics||i.types.stars))throw new Error('Invalid route config for "'+t.route+'" : dynamic routes must specify an "href:" to be included in the navigation model.');"number"!=typeof e.order&&(e.order=++this._fallbackOrder),u.push(e),u.sort((function(t,e){return t.order-e.order}))}}},e.prototype.hasRoute=function(t){return!!(this._recognizer.hasRoute(t)||this.parent&&this.parent.hasRoute(t))},e.prototype.hasOwnRoute=function(t){return this._recognizer.hasRoute(t)},e.prototype.handleUnknownRoutes=function(t){var e=this;if(!t)throw new Error("Invalid unknown route handler");this.catchAllHandler=function(n){return e._createRouteConfig(t,n).then((function(t){return n.config=t,n}))}},e.prototype.updateTitle=function(){var t=this.parent;if(t)return t.updateTitle();var e=this.currentInstruction;e&&e._updateTitle()},e.prototype.refreshNavigation=function(){for(var t=this.navigation,e=0,n=t.length;e<n;e++){var r=t[e];r.config.href?r.href=h(r.config.href,this.history._hasPushState):r.href=p(r.relativeHref,this.baseUrl,this.history._hasPushState)}},e.prototype.useViewPortDefaults=function(t){var e=t;for(var n in e){var r=e[n];this.viewPortDefaults[n]={moduleId:r.moduleId}}},e.prototype._refreshBaseUrl=function(){var t=this.parent;t&&(this.baseUrl=w(t,t.currentInstruction))},e.prototype._createNavigationInstruction=function(e,n){void 0===e&&(e=""),void 0===n&&(n=null);var r=e,i="",o=e.indexOf("?");-1!==o&&(r=e.substr(0,o),i=e.substr(o+1));var a=this._recognizer.recognize(e);a&&a.length||(a=this._childRecognizer.recognize(e));var u,s={fragment:r,queryString:i,config:null,parentInstruction:n,previousInstruction:this.currentInstruction,router:this,options:{compareQueryParams:this.options.compareQueryParams}};if(a&&a.length){var l=a[0],f=new c(Object.assign({},s,{params:l.params,queryParams:l.queryParams||a.queryParams,config:l.config||l.handler}));u="function"==typeof l.handler?I(f,l.handler,l):l.handler&&"function"==typeof l.handler.navigationStrategy?I(f,l.handler.navigationStrategy,l.handler):t.resolve(f)}else if(this.catchAllHandler){f=new c(Object.assign({},s,{params:{path:r},queryParams:a?a.queryParams:{},config:null}));u=I(f,this.catchAllHandler)}else if(this.parent){var h=this._parentCatchAllHandler(this.parent);if(h){var p=this._findParentInstructionFromRouter(h,n);f=new c(Object.assign({},s,{params:{path:r},queryParams:a?a.queryParams:{},router:h,parentInstruction:p,parentCatchHandler:!0,config:null}));u=I(f,h.catchAllHandler)}}return u&&n&&(this.baseUrl=w(this.parent,n)),u||t.reject(new Error("Route not found: "+e))},e.prototype._findParentInstructionFromRouter=function(t,e){return e.router===t?(e.fragment=t.baseUrl,e):e.parentInstruction?this._findParentInstructionFromRouter(t,e.parentInstruction):void 0},e.prototype._parentCatchAllHandler=function(t){return t.catchAllHandler?t:!!t.parent&&this._parentCatchAllHandler(t.parent)},e.prototype._createRouteConfig=function(e,n){var r=this;return t.resolve(e).then((function(t){return"string"==typeof t?{moduleId:t}:"function"==typeof t?t(n):t})).then((function(t){return"string"==typeof t?{moduleId:t}:t})).then((function(t){return t.route=n.params.path,b(t),t.navModel||(t.navModel=r.createNavModel(t)),t}))},e}(),w=function(t,e){return""+(t.baseUrl||"")+(e.getBaseUrl()||"")},b=function(t){if("object"!=typeof t)throw new Error("Invalid Route Config");if("string"!=typeof t.route){var e=t.name||"(no name)";throw new Error('Invalid Route Config for "'+e+'": You must specify a "route:" pattern.')}if(!("redirect"in t||t.moduleId||t.navigationStrategy||t.viewPorts))throw new Error('Invalid Route Config for "'+t.route+'": You must specify a "moduleId:", "redirect:", "navigationStrategy:", or "viewPorts:".')},I=function(e,n,r){return t.resolve(n.call(r,e)).then((function(){return"viewPorts"in e.config||(e.config.viewPorts={default:{moduleId:e.config.moduleId}}),e}))},P=function(e,n){return function(e){return t.resolve({status:n,output:e,completed:"completed"===n})}},R=function(){function t(){this.steps=[]}return t.prototype.addStep=function(t){var e;if("function"==typeof t)e=t;else{if("function"==typeof t.getSteps){for(var n=t.getSteps(),r=0,i=n.length;r<i;r++)this.addStep(n[r]);return this}e=t.run.bind(t)}return this.steps.push(e),this},t.prototype.run=function(t){return function(t,e){var n=-1,r=function(){if(!(++n<e.length))return r.complete();var i=e[n];try{return i(t,r)}catch(t){return r.reject(t)}};return r.complete=P(r,"completed"),r.cancel=P(r,"canceled"),r.reject=P(r,"rejected"),r}(t,this.steps)()},t}();function _(t){return t&&"function"==typeof t.navigate}var N=function(){function t(t,e){void 0===e&&(e={}),this.url=t,this.options=Object.assign({trigger:!0,replace:!0},e),this.shouldContinueProcessing=!1}return t.prototype.setRouter=function(t){this.router=t},t.prototype.navigate=function(t){(this.options.useAppRouter?t:this.router||t).navigate(this.url,this.options)},t}();!function(){function t(t,e,n){void 0===e&&(e={}),void 0===n&&(n={}),this.route=t,this.params=e,this.options=Object.assign({trigger:!0,replace:!0},n),this.shouldContinueProcessing=!1}t.prototype.setRouter=function(t){this.router=t},t.prototype.navigate=function(t){(this.options.useAppRouter?t:this.router||t).navigateToRoute(this.route,this.params,this.options)}}();function S(e,n){var r=e.config;if("redirect"in r)return A(e);var i=e.previousInstruction,o=e.router.viewPortDefaults;if(i)return k(e,i,o,n);var a={},u=r.viewPorts;for(var s in u){var c=u[s];null===c.moduleId&&s in o&&(c=o[s]),a[s]={name:s,strategy:"replace",config:c}}return t.resolve(a)}var C,A=function(e){var n=e.config,r=e.router;return r._createNavigationInstruction(n.redirect).then((function(n){var i={},o=e.params,a=n.params;for(var u in a){var s=a[u];"string"==typeof s&&":"===s[0]?(s=s.slice(1))in o&&(i[u]=o[s]):i[u]=a[u]}var c=r.generate(n.config,i,e.options);for(var u in o)c=c.replace(":"+u,o[u]);var l=e.queryString;return l&&(c+="?"+l),t.resolve(new N(c))}))},k=function(e,n,r,i){var o={},a=e.config,u=E(n,e),s=[],c=n.viewPortInstructions,l=function(n){var l=c[n],f=l.component,h=a.viewPorts,p=n in h?h[n]:l;null===p.moduleId&&n in r&&(p=r[n]);var v=j(e,l,p,u,i),d=o[n]={name:n,config:p,prevComponent:f,prevModuleId:l.moduleId,strategy:v};if("replace"!==v&&l.childRouter){var g=e.getWildcardPath(),y=l.childRouter._createNavigationInstruction(g,e).then((function(e){return d.childNavigationInstruction=e,S(e,"invoke-lifecycle"===d.strategy).then((function(n){return n instanceof N?t.reject(n):(e.plan=n,null)}))}));s.push(y)}};for(var f in c)l(f);return t.all(s).then((function(){return o}))},j=function(t,e,n,r,i){var o=t.config,a=e.component.viewModel;return e.moduleId!==n.moduleId?"replace":"determineActivationStrategy"in a?a.determineActivationStrategy.apply(a,t.lifecycleArgs):o.activationStrategy?o.activationStrategy:r||i?"invoke-lifecycle":"no-change"},E=function(t,e){var n=t.params,r=e.params,i=e.config.hasChildRouter?e.getWildCardName():null;for(var o in r)if(o!==i&&n[o]!==r[o])return!0;for(var o in n)if(o!==i&&n[o]!==r[o])return!0;if(!e.options.compareQueryParams)return!1;var a=t.queryParams,u=e.queryParams;for(var o in u)if(a[o]!==u[o])return!0;for(var o in a)if(a[o]!==u[o])return!0;return!1},O=function(){function t(){}return t.prototype.run=function(t,e){return S(t).then((function(n){return n instanceof N?e.cancel(n):(t.plan=n,e())})).catch(e.cancel)},t}(),M=function(e,n){var r=q(n).map((function(t){return T(e,t.navigationInstruction,t.viewPortPlan)}));return t.all(r)},q=function(t,e){void 0===e&&(e=[]);var n=t.plan;for(var r in n){var i=n[r],o=i.childNavigationInstruction;if("replace"===i.strategy)e.push({viewPortPlan:i,navigationInstruction:t}),o&&q(o,e);else{var a=t.addViewPortInstruction({name:r,strategy:i.strategy,moduleId:i.prevModuleId,component:i.prevComponent});o&&(a.childNavigationInstruction=o,q(o,e))}}return e},T=function(e,n,r){var i=r.config,o=i?i.moduleId:null;return x(e,n,i).then((function(i){var a=n.addViewPortInstruction({name:r.name,strategy:r.strategy,moduleId:o,component:i}),u=i.childRouter;if(u){var s=n.getWildcardPath();return u._createNavigationInstruction(s,n).then((function(n){return r.childNavigationInstruction=n,S(n).then((function(r){return r instanceof N?t.reject(r):(n.plan=r,a.childNavigationInstruction=n,M(e,n))}))}))}}))},x=function(e,n,r){var i=n.router,o=n.lifecycleArgs;return t.resolve().then((function(){return e.loadRoute(i,r,n)})).then((function(t){var e=t.viewModel,n=t.childContainer;if(t.router=i,t.config=r,"configureRouter"in e){var a=n.getChildRouter();return t.childRouter=a,a.configure((function(t){return e.configureRouter(t,a,o[0],o[1],o[2])})).then((function(){return t}))}return t}))},z=function(){function t(){}return t.prototype.loadRoute=function(t,e,n){throw new Error('Route loaders must implement "loadRoute(router, config, navigationInstruction)".')},t}(),U=function(){function t(t){this.routeLoader=t}return t.inject=function(){return[z]},t.prototype.run=function(t,e){return M(this.routeLoader,t).then(e,e.cancel)},t}(),D=function(){function t(){}return t.prototype.run=function(t,e){return t._commitChanges(!0).then((function(){return t._updateTitle(),e()}))},t}();!function(t){t.NoChange="no-change",t.InvokeLifecycle="invoke-lifecycle",t.Replace="replace"}(C||(C={}));var H,B,V,F="invoke-lifecycle",W="replace",L=function(t,e,n,r){var i=t.plan,o=J(i,e),a=o.length;function u(t){return r||Z(t)?s():n.cancel(t)}function s(){if(a--)try{var r=o[a][e](t);return X(r,u,n.cancel)}catch(t){return n.cancel(t)}return t.router.couldDeactivate=!0,n()}return s()},J=function(t,e,n){for(var r in void 0===n&&(n=[]),t){var i=t[r],o=i.prevComponent;if((i.strategy===F||i.strategy===W)&&o){var a=o.viewModel;e in a&&n.push(a)}i.strategy===W&&o?Q(o,e,n):i.childNavigationInstruction&&J(i.childNavigationInstruction.plan,e,n)}return n},Q=function(t,e,n){var r=t.childRouter;if(r&&r.currentInstruction){var i=r.currentInstruction.viewPortInstructions;for(var o in i){var a=i[o].component,u=a.viewModel;e in u&&n.push(u),Q(a,e,n)}}},G=function(t,e,n,r){var i=Y(t,e),o=i.length,a=-1;function u(){var t;if(++a<o)try{var s=i[a],c=(t=s.viewModel)[e].apply(t,s.lifecycleArgs);return X(c,(function(t){return function(t,e){return r||Z(t,e)?u():n.cancel(t)}(t,s.router)}),n.cancel)}catch(t){return n.cancel(t)}return n()}return u()},Y=function(t,e,n,r){void 0===n&&(n=[]);var i=t.plan;return Object.keys(i).forEach((function(o){var a=i[o],u=t.viewPortInstructions[o],s=u.component,c=s.viewModel;(a.strategy===F||a.strategy===W)&&e in c&&n.push({viewModel:c,lifecycleArgs:u.lifecycleArgs,router:r});var l=a.childNavigationInstruction;l&&Y(l,e,n,s.childRouter||r)})),n},Z=function(t,e){return!(t instanceof Error)&&(_(t)?("function"==typeof t.setRouter&&t.setRouter(e),!!t.shouldContinueProcessing):void 0===t||t)},K=function(){function t(t){this._subscribed=!0,this._subscription=t(this),this._subscribed||this.unsubscribe()}return Object.defineProperty(t.prototype,"subscribed",{get:function(){return this._subscribed},enumerable:!0,configurable:!0}),t.prototype.unsubscribe=function(){this._subscribed&&this._subscription&&this._subscription.unsubscribe(),this._subscribed=!1},t}(),X=function(e,n,r){if(e&&"function"==typeof e.then)return t.resolve(e).then(n).catch(r);if(e&&"function"==typeof e.subscribe){var i=e;return new K((function(t){return i.subscribe({next:function(){t.subscribed&&(t.unsubscribe(),n(e))},error:function(e){t.subscribed&&(t.unsubscribe(),r(e))},complete:function(){t.subscribed&&(t.unsubscribe(),n(e))}})}))}try{return n(e)}catch(t){return r(t)}},$=function(){function t(){}return t.prototype.run=function(t,e){return L(t,"canDeactivate",e)},t}(),tt=function(){function t(){}return t.prototype.run=function(t,e){return G(t,"canActivate",e)},t}(),et=function(){function t(){}return t.prototype.run=function(t,e){return L(t,"deactivate",e,!0)},t}(),nt=function(){function t(){}return t.prototype.run=function(t,e){return G(t,"activate",e,!0)},t}(),rt=function(){function t(t,e,n){this.steps=[],this.container=t,this.slotName=e,this.slotAlias=n}return t.prototype.getSteps=function(){var t=this;return this.steps.map((function(e){return t.container.get(e)}))},t}(),it=function(){function t(t){this.container=t,this.steps=[O,$,U,ot(t,"authorize"),tt,ot(t,"preActivate","modelbind"),et,nt,ot(t,"preRender","precommit"),D,ot(t,"postRender","postcomplete")]}return t.inject=function(){return[i.a]},t.prototype.createPipeline=function(t){var e=this;void 0===t&&(t=!0);var n=new R;return this.steps.forEach((function(r){(t||r!==$)&&n.addStep(e.container.get(r))})),n},t.prototype._findStep=function(t){return this.steps.find((function(e){return e.slotName===t||e.slotAlias===t}))},t.prototype.addStep=function(t,e){var n=this._findStep(t);if(!n)throw new Error("Invalid pipeline slot name: "+t+".");var r=n.steps;r.includes(e)||r.push(e)},t.prototype.removeStep=function(t,e){var n=this._findStep(t);if(n){var r=n.steps;r.splice(r.indexOf(e),1)}},t.prototype._clearSteps=function(t){void 0===t&&(t="");var e=this._findStep(t);e&&(e.steps=[])},t.prototype.reset=function(){this._clearSteps("authorize"),this._clearSteps("preActivate"),this._clearSteps("preRender"),this._clearSteps("postRender")},t}(),ot=function(t,e,n){return new rt(t,e,n)},at=Object(r.getLogger)("app-router"),ut=function(e){function n(t,n,r,i){var o=e.call(this,t,n)||this;return o.pipelineProvider=r,o.events=i,o}return function(t,e){function n(){this.constructor=t}s(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}(n,e),n.inject=function(){return[i.a,o.a,it,u.a]},n.prototype.reset=function(){e.prototype.reset.call(this),this.maxInstructionCount=10,this._queue?this._queue.length=0:this._queue=[]},n.prototype.loadUrl=function(t){var e=this;return this._createNavigationInstruction(t).then((function(t){return e._queueInstruction(t)})).catch((function(t){at.error(t),lt(e)}))},n.prototype.registerViewPort=function(n,r){var i=this,o=n;if(e.prototype.registerViewPort.call(this,o,r),this.isActive)this._dequeueInstruction();else{var a=this._findViewModel(o);if("configureRouter"in a){if(!this.isConfigured){var u=this._resolveConfiguredPromise;return this._resolveConfiguredPromise=function(){},this.configure((function(e){return t.resolve(a.configureRouter(e,i)).then((function(){return e}))})).then((function(){i.activate(),u()}))}}else this.activate()}return t.resolve()},n.prototype.activate=function(t){this.isActive||(this.isActive=!0,this.options=Object.assign({routeHandler:this.loadUrl.bind(this)},this.options,t),this.history.activate(this.options),this._dequeueInstruction())},n.prototype.deactivate=function(){this.isActive=!1,this.history.deactivate()},n.prototype._queueInstruction=function(e){var n=this;return new t((function(t){e.resolve=t,n._queue.unshift(e),n._dequeueInstruction()}))},n.prototype._dequeueInstruction=function(e){var n=this;return void 0===e&&(e=0),t.resolve().then((function(){if(!n.isNavigating||e){var t=n._queue.shift();if(n._queue.length=0,t){n.isNavigating=!0;var r=n.history.getState("NavigationTracker"),i=n.currentNavigationTracker;r||i?r?i?i<r?n.isNavigatingForward=!0:i>r&&(n.isNavigatingBack=!0):n.isNavigatingRefresh=!0:n.isNavigatingNew=!0:(n.isNavigatingFirst=!0,n.isNavigatingNew=!0),r||(r=Date.now(),n.history.setState("NavigationTracker",r)),n.currentNavigationTracker=r,t.previousInstruction=n.currentInstruction;var o=n.maxInstructionCount;if(e){if(e===o-1)return at.error(e+1+" navigation instructions have been attempted without success. Restoring last known good location."),lt(n),n._dequeueInstruction(e+1);if(e>o)throw new Error("Maximum navigation attempts exceeded. Giving up.")}else n.events.publish("router:navigation:processing",{instruction:t});return n.pipelineProvider.createPipeline(!n.couldDeactivate).run(t).then((function(r){return st(t,r,e,n)})).catch((function(t){return{output:t instanceof Error?t:new Error(t)}})).then((function(r){return ct(t,r,!!e,n)}))}}}))},n.prototype._findViewModel=function(t){if(this.container.viewModel)return this.container.viewModel;if(t.container)for(var e=t.container;e;){if(e.viewModel)return this.container.viewModel=e.viewModel,e.viewModel;e=e.parent}},n}(m),st=function(e,n,r,i){n&&"completed"in n&&"output"in n||((n=n||{}).output=new Error("Expected router pipeline to return a navigation result, but got ["+JSON.stringify(n)+"] instead."));var o=null,a=null;return _(n.output)?a=n.output.navigate(i):(o=n,n.completed||(n.output instanceof Error&&at.error(n.output.toString()),lt(i))),t.resolve(a).then((function(t){return i._dequeueInstruction(r+1)})).then((function(t){return o||t||n}))},ct=function(t,e,n,r){t.resolve(e);var i=r.events,o={instruction:t,result:e};if(n)i.publish("router:navigation:child:complete",o);else{r.isNavigating=!1,r.isExplicitNavigation=!1,r.isExplicitNavigationBack=!1,r.isNavigatingFirst=!1,r.isNavigatingNew=!1,r.isNavigatingRefresh=!1,r.isNavigatingForward=!1,r.isNavigatingBack=!1,r.couldDeactivate=!1;var a=void 0;if(e.output instanceof Error)a="router:navigation:error";else if(e.completed){var u=t.queryString?"?"+t.queryString:"";r.history.previousLocation=t.fragment+u,a="router:navigation:success"}else a="router:navigation:canceled";i.publish(a,o),i.publish("router:navigation:complete",o)}return e},lt=function(t){var e=t.history.previousLocation;e?t.navigate(e,{trigger:!1,replace:!0}):t.fallbackRoute?t.navigate(t.fallbackRoute,{trigger:!0,replace:!0}):at.error("Router navigation failed, and no previous location or fallbackRoute could be restored.")};!function(t){t.Completed="completed",t.Canceled="canceled",t.Rejected="rejected",t.Running="running"}(H||(H={})),function(t){t.Processing="router:navigation:processing",t.Error="router:navigation:error",t.Canceled="router:navigation:canceled",t.Complete="router:navigation:complete",t.Success="router:navigation:success",t.ChildComplete="router:navigation:child:complete"}(B||(B={})),function(t){t.Authorize="authorize",t.PreActivate="preActivate",t.PreRender="preRender",t.PostRender="postRender"}(V||(V={}))}).call(this,n("B/eG").default)}}]);
//# sourceMappingURL=vendors~ae38da23.586194b39d7e017e34da.bundle.map