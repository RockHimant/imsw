(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"11UF":function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var r=function(){return function(t){Object.assign(this,t)}}()},"2q/H":function(t,e,n){"use strict";n.d(e,"a",(function(){return u})),n.d(e,"b",(function(){return p}));var r=n("26FU"),i=n("K9Ia"),o=n("dzgT"),a=n("67Y/"),c=n("4cXr"),l=n("TYT/"),s=n("cUzu"),u=function(){return function(t){Object.assign(this,t)}}(),p=function(){function t(t,e){this.http=t,this.webApiProvider=e,this.onContactSelected=new r.a(null),this.onChatSelected=new r.a(null),this.onRetailerSelected=new r.a(null),this.onAdvancedSearchApplied=new r.a(null),this.onChatsUpdated=new i.a}return t.prototype.loadRetailerData=function(){var t=this;return Object(o.a)(this.getAllRetailers(),(function(e){t.retailers=e.content}))},t.prototype.searchRetailer=function(t){var e=this;return Object(o.a)(this.getAllRetailers(),(function(t){e.retailers=t.content}))},t.prototype.getAllRetailers=function(){return this.webApiProvider.get("retailer/v1/list/0/6")},t.prototype.getRetailerById=function(t){var e=this;return this.loadingCollection=!0,this.getRetailerbyId(t).pipe(Object(a.a)((function(t){return e.onRetailerSelected.next({retailer:t}),e.loadingCollection=!1,console.log("service - ",t),t})))},t.prototype.autoReply=function(t){var e=this;setTimeout((function(){e.onChatsUpdated.next(t)}),1500)},t.prototype.getRetailerbyId=function(t){return this.webApiProvider.get("retailer/v1/"+t)},t.prototype.performAdvancedSearch=function(t){var e=this;return this.loadingCollection=!0,this.http.post("api/retailer/search",t).pipe(Object(a.a)((function(t){return e.onAdvancedSearchApplied.next({companies:t}),e.loadingCollection=!1,t})))},t.prototype.getRetailerForClient=function(t){return this.webApiProvider.get("retailer/v1/list/client"+t,!0)},t.\u0275fac=function(e){return new(e||t)(l["\u0275\u0275inject"](s.c),l["\u0275\u0275inject"](c.a))},t.\u0275prov=l["\u0275\u0275defineInjectable"]({token:t,factory:t.\u0275fac,providedIn:"root"}),t}()},"3b8F":function(t,e,n){"use strict";n.d(e,"a",(function(){return m}));var r=n("TYT/"),i=n("Np2A"),o=n("7o2P"),a=n("MnXN"),c=n("Valr"),l=n("3rkx");function s(t,e){1&t&&(r["\u0275\u0275elementStart"](0,"div",7),r["\u0275\u0275text"](1,"Audit History"),r["\u0275\u0275elementEnd"]())}function u(t,e){if(1&t){var n=r["\u0275\u0275getCurrentView"]();r["\u0275\u0275elementStart"](0,"div",8),r["\u0275\u0275elementStart"](1,"button",9),r["\u0275\u0275listener"]("click",(function(){return r["\u0275\u0275restoreView"](n),r["\u0275\u0275nextContext"]().toggleShowAudit()})),r["\u0275\u0275element"](2,"i",10),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"]()}}function p(t,e){if(1&t){var n=r["\u0275\u0275getCurrentView"]();r["\u0275\u0275elementStart"](0,"div",11),r["\u0275\u0275elementStart"](1,"div",12),r["\u0275\u0275elementStart"](2,"div",13),r["\u0275\u0275elementStart"](3,"div",14),r["\u0275\u0275text"](4,"\xa0"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](5,"div",15),r["\u0275\u0275text"](6,"\xa0"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](7,"h5",16),r["\u0275\u0275elementStart"](8,"span",17),r["\u0275\u0275text"](9,"\xa0"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](10,"div",13),r["\u0275\u0275elementStart"](11,"div",14),r["\u0275\u0275text"](12,"\xa0"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](13,"div",15),r["\u0275\u0275text"](14,"\xa0"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](15,"div",18),r["\u0275\u0275elementStart"](16,"div",19),r["\u0275\u0275elementStart"](17,"div",0),r["\u0275\u0275elementStart"](18,"div",20),r["\u0275\u0275elementStart"](19,"strong",21),r["\u0275\u0275text"](20),r["\u0275\u0275elementEnd"](),r["\u0275\u0275text"](21),r["\u0275\u0275elementStart"](22,"p",22),r["\u0275\u0275text"](23),r["\u0275\u0275pipe"](24,"date"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](25,"p",23),r["\u0275\u0275text"](26),r["\u0275\u0275elementStart"](27,"span",24),r["\u0275\u0275listener"]("click",(function(){r["\u0275\u0275restoreView"](n);var t=e.$implicit,i=r["\u0275\u0275nextContext"](),o=r["\u0275\u0275reference"](7);return i.open(o,t.id)})),r["\u0275\u0275text"](28,"Details.."),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"]()}if(2&t){var i=e.$implicit;r["\u0275\u0275advance"](20),r["\u0275\u0275textInterpolate"](i.user),r["\u0275\u0275advance"](1),r["\u0275\u0275textInterpolate1"](" ",i.activity," "),r["\u0275\u0275advance"](2),r["\u0275\u0275textInterpolate"](r["\u0275\u0275pipeBind1"](24,4,i.timestamp)),r["\u0275\u0275advance"](3),r["\u0275\u0275textInterpolate1"]("",i.message," ")}}function d(t,e){if(1&t&&(r["\u0275\u0275elementStart"](0,"div"),r["\u0275\u0275element"](1,"app-spinner-wrapper",25),r["\u0275\u0275elementEnd"]()),2&t){var n=r["\u0275\u0275nextContext"]();r["\u0275\u0275advance"](1),r["\u0275\u0275property"]("showSpinner",n.showAuditProgress)}}function f(t,e){if(1&t&&(r["\u0275\u0275elementStart"](0,"p"),r["\u0275\u0275text"](1),r["\u0275\u0275elementEnd"]()),2&t){var n=e.$implicit;r["\u0275\u0275advance"](1),r["\u0275\u0275textInterpolate"](n)}}function h(t,e){if(1&t&&(r["\u0275\u0275elementStart"](0,"div",26),r["\u0275\u0275elementStart"](1,"h4",27),r["\u0275\u0275text"](2,"Audit history"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](3,"button",28),r["\u0275\u0275listener"]("click",(function(){return e.$implicit.dismiss("Cross click")})),r["\u0275\u0275elementStart"](4,"span",29),r["\u0275\u0275text"](5,"\xd7"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](6,"div",30),r["\u0275\u0275template"](7,f,2,1,"p",31),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](8,"div",32),r["\u0275\u0275elementStart"](9,"button",33),r["\u0275\u0275listener"]("click",(function(){return e.$implicit.close("ok")})),r["\u0275\u0275text"](10,"Ok"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"]()),2&t){var n=r["\u0275\u0275nextContext"]();r["\u0275\u0275advance"](7),r["\u0275\u0275property"]("ngForOf",n.auditEventDetail)}}var m=function(){function t(t,e,n){this.auditService=t,this.commonService=e,this.modalService=n,this.showHeader=!0,this.closeIt=new r.EventEmitter,this.show=!0}return t.prototype.ngOnInit=function(){var t=this;this.showAuditProgress=!0,this.auditService.getAuditTrails(this.resourceType,this.resourceId).subscribe((function(e){t.audits=e.events,t.showAuditProgress=!1}))},t.prototype.open=function(t,e){var n=this;this.commonService.loadingData=!0,this.auditService.getAuditEventDetail(e).subscribe((function(e){n.auditEventDetail=e.changeDetails,n.commonService.loadingData=!1,n.modalService.open(t,{ariaLabelledBy:"modal-basic-title"}).result.then((function(t){console.log(t)}),(function(t){console.log("Err!",t)}))}),(function(t){console.log(t)}))},t.prototype.toggleShowAudit=function(){this.closeIt.emit(!0)},t.\u0275fac=function(e){return new(e||t)(r["\u0275\u0275directiveInject"](i.a),r["\u0275\u0275directiveInject"](o.a),r["\u0275\u0275directiveInject"](a.m))},t.\u0275cmp=r["\u0275\u0275defineComponent"]({type:t,selectors:[["app-audit-history"]],inputs:{resourceType:"resourceType",resourceId:"resourceId",showHeader:"showHeader"},outputs:{closeIt:"closeIt"},decls:8,vars:4,consts:[[1,"card-body"],[1,"row","no-margin"],["class","card-title col-sm-6",4,"ngIf"],["class","col-sm-6 align-items-center justify-content-center",4,"ngIf"],["class","row",4,"ngFor","ngForOf"],[4,"ngIf"],["eventDetail",""],[1,"card-title","col-sm-6"],[1,"col-sm-6","align-items-center","justify-content-center"],[1,"btn","float-right","pt-1","bg-transparent",3,"click"],[1,"fas","fa-times"],[1,"row"],[1,"col-auto","text-center","flex-column","d-none","d-sm-flex"],[1,"row","h-50"],[1,"col","border-right"],[1,"col"],[1,"m-2"],[1,"badge","badge-pill","bg-primary"],[1,"col","py-2"],[1,"card","border-success","shadow"],[1,"mb-1"],["_ngcontent-qsh-c199","",1,"mr-1"],[1,"text-muted"],[1,"card-text"],[1,"text-primary","pointer",3,"click"],[3,"showSpinner"],[1,"modal-header"],["id","modal-basic-title",1,"modal-title"],["type","button","aria-label","Close",1,"close",3,"click"],["aria-hidden","true"],[1,"modal-body"],[4,"ngFor","ngForOf"],[1,"modal-footer"],["type","button",1,"btn","btn-outline-dark","btn-rounded",3,"click"]],template:function(t,e){1&t&&(r["\u0275\u0275elementStart"](0,"div",0),r["\u0275\u0275elementStart"](1,"div",1),r["\u0275\u0275template"](2,s,2,0,"div",2),r["\u0275\u0275template"](3,u,3,0,"div",3),r["\u0275\u0275elementEnd"](),r["\u0275\u0275template"](4,p,29,6,"div",4),r["\u0275\u0275template"](5,d,2,1,"div",5),r["\u0275\u0275elementEnd"](),r["\u0275\u0275template"](6,h,11,1,"ng-template",null,6,r["\u0275\u0275templateRefExtractor"])),2&t&&(r["\u0275\u0275advance"](2),r["\u0275\u0275property"]("ngIf",e.showHeader),r["\u0275\u0275advance"](1),r["\u0275\u0275property"]("ngIf",e.showHeader),r["\u0275\u0275advance"](1),r["\u0275\u0275property"]("ngForOf",e.audits),r["\u0275\u0275advance"](1),r["\u0275\u0275property"]("ngIf",e.showAuditProgress))},directives:[c.p,c.o,l.a],pipes:[c.f],styles:[""]}),t}()},"7o2P":function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var r=n("TYT/"),i=function(){function t(){}return t.\u0275prov=r["\u0275\u0275defineInjectable"]({token:t,factory:t.\u0275fac=function(e){return new(e||t)},providedIn:"root"}),t}()},BxdS:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var r=n("26FU"),i=n("0o5J"),o=n("67Y/"),a=n("TYT/"),c=function(){function t(t){this.webApiProvider=t,this.onRetailerCompanySelected=new r.a(null)}return t.prototype.saveCompany=function(t){return this.webApiProvider.post("retailer-company/v1",t,!0)},t.prototype.updateCompany=function(t,e){return this.webApiProvider.put("retailer-company/v1/"+t,e)},t.prototype.deleteCompany=function(t){return this.webApiProvider.delete("retailer-company/v1/"+t,null)},t.prototype.getAllWithPagination=function(t,e){return this.webApiProvider.get("retailer-company/v1/list/"+t+"/"+e,null)},t.prototype.getById=function(t){return this.webApiProvider.get("retailer-company/v1/"+t)},t.prototype.getAll=function(){return this.webApiProvider.get("retailer-company/v1/list",null)},t.prototype.getRetailerCompanyById=function(t){var e=this;return this.loadingCollection=!0,this.getById(t).pipe(Object(o.a)((function(t){return e.onRetailerCompanySelected.next({company:t}),e.loadingCollection=!1,t})))},t.prototype.loadRetailerCompanyData=function(t,e){return this.getAllWithPagination(t-1,e)},t.\u0275fac=function(e){return new(e||t)(a["\u0275\u0275inject"](i.c))},t.\u0275prov=a["\u0275\u0275defineInjectable"]({token:t,factory:t.\u0275fac,providedIn:"root"}),t}()},Np2A:function(t,e,n){"use strict";n.d(e,"a",(function(){return l}));var r=n("dzgT"),i=n("F/XL"),o=n("0o5J"),a=n("TYT/"),c=n("cUzu"),l=function(){function t(t,e){this.http=t,this.webApiProvider=e}return t.prototype.loadAuditData=function(){var t=this;return Object(r.a)(this.getAllAudits(),(function(e){t.audits=e}))},t.prototype.checkAuth=function(){},t.prototype.getuser=function(){return Object(i.a)({})},t.prototype.getAllAudits=function(){return this.http.get("api/audits")},t.prototype.getAuditTrails=function(t,e){return this.webApiProvider.get("audit-trail/v1/"+t+"/"+e)},t.prototype.getAuditEventDetail=function(t){return this.webApiProvider.get("audit-trail/v1/"+t)},t.\u0275fac=function(e){return new(e||t)(a["\u0275\u0275inject"](c.c),a["\u0275\u0275inject"](o.c))},t.\u0275prov=a["\u0275\u0275defineInjectable"]({token:t,factory:t.\u0275fac,providedIn:"root"}),t}()},RDlK:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var r,i=n("no7+"),o=(r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),a=function(t){function e(e){var n=t.call(this)||this;return Object.assign(n,e),n}return o(e,t),e}(i.b)},Ujtm:function(t,e,n){"use strict";n.d(e,"a",(function(){return l}));var r=n("4cXr"),i=n("26FU"),o=n("67Y/"),a=(n("11UF"),n("TYT/")),c=n("qT8p"),l=function(){function t(t,e){this.toastr=t,this.webApiProvider=e,this.onTemplateSelected=new i.a(null),this.onAdvancedSearchApplied=new i.a(null)}return t.prototype.loadTemplateData=function(t,e){return this.getAllTemplates(t-1,e)},t.prototype.generateReport=function(t){return this.webApiProvider.post("report/v1/",t,!0)},t.prototype.getGeneratedReports=function(t,e){return this.webApiProvider.get("report/v1/list/"+t+"/"+e,!0)},t.prototype.getAllTemplates=function(t,e){return this.webApiProvider.post("report/template/v1/list/"+t+"/"+e,null,!0)},t.prototype.performAdvancedSearch=function(t,e,n){return this.webApiProvider.post("report/template/v1/list/"+ +e+"/"+n+t,null,!0)},t.prototype.getAirlineById=function(t){var e=this;return this.loadingCollection=!0,this.getAllFinanancialById(t).pipe(Object(o.a)((function(t){return e.onTemplateSelected.next({airline:t}),e.loadingCollection=!1,t})))},t.prototype.getAllFinanancialById=function(t){return this.webApiProvider.get("fi/v1/"+t)},t.prototype.selectTemplate=function(t){return e=this,void 0,r=function(){return function(t,e){var n,r,i,o,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function c(o){return function(c){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(i=2&o[0]?r.return:o[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,o[1])).done)return i;switch(r=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return a.label++,{value:o[1],done:!1};case 5:a.label++,r=o[1],o=[0];continue;case 7:o=a.ops.pop(),a.trys.pop();continue;default:if(!(i=(i=a.trys).length>0&&i[i.length-1])&&(6===o[0]||2===o[0])){a=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){a.label=o[1];break}if(6===o[0]&&a.label<i[1]){a.label=i[1],i=o;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(o);break}i[2]&&a.ops.pop(),a.trys.pop();continue}o=e.call(t,a)}catch(c){o=[6,c],r=0}finally{n=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,c])}}}(this,(function(e){return this.loadingCollection=!0,this.loadingData=!0,this.delay(500),this.onTemplateSelected.next({template:t}),this.loadingData=!1,[2]}))},new((n=void 0)||(n=Promise))((function(t,i){function o(t){try{c(r.next(t))}catch(e){i(e)}}function a(t){try{c(r.throw(t))}catch(e){i(e)}}function c(e){var r;e.done?t(e.value):(r=e.value,r instanceof n?r:new n((function(t){t(r)}))).then(o,a)}c((r=r.apply(e,[])).next())}));var e,n,r},t.prototype.delay=function(t){return new Promise((function(e){return setTimeout(e,t)}))},t.prototype.searchReports=function(t,e,n){return this.webApiProvider.getwithSearchParam("report/v1/list/"+ +t+"/"+e,n.params)},t.\u0275fac=function(e){return new(e||t)(a["\u0275\u0275inject"](c.b),a["\u0275\u0275inject"](r.a))},t.\u0275prov=a["\u0275\u0275defineInjectable"]({token:t,factory:t.\u0275fac,providedIn:"root"}),t}()},WlhN:function(t,e,n){"use strict";var r=n("TYT/"),i=n("0o5J"),o=function(){function t(t){this.webApiProvider=t}return t.prototype.getComments=function(t,e){return this.webApiProvider.get("comment/v1/"+t+"/"+e+"/",!0)},t.\u0275fac=function(e){return new(e||t)(r["\u0275\u0275inject"](i.c))},t.\u0275prov=r["\u0275\u0275defineInjectable"]({token:t,factory:t.\u0275fac,providedIn:"root"}),t}(),a=n("Valr"),c=n("3rkx");function l(t,e){1&t&&(r["\u0275\u0275elementStart"](0,"div",6),r["\u0275\u0275text"](1,"Comments"),r["\u0275\u0275elementEnd"]())}function s(t,e){if(1&t){var n=r["\u0275\u0275getCurrentView"]();r["\u0275\u0275elementStart"](0,"div",7),r["\u0275\u0275elementStart"](1,"button",8),r["\u0275\u0275listener"]("click",(function(){return r["\u0275\u0275restoreView"](n),r["\u0275\u0275nextContext"]().toggleShowAudit()})),r["\u0275\u0275element"](2,"i",9),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"]()}}function u(t,e){if(1&t&&(r["\u0275\u0275elementStart"](0,"div",10),r["\u0275\u0275elementStart"](1,"div",11),r["\u0275\u0275elementStart"](2,"div",12),r["\u0275\u0275elementStart"](3,"div",13),r["\u0275\u0275text"](4,"\xa0"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](5,"div",14),r["\u0275\u0275text"](6,"\xa0"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](7,"h5",15),r["\u0275\u0275elementStart"](8,"span",16),r["\u0275\u0275text"](9,"\xa0"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](10,"div",12),r["\u0275\u0275elementStart"](11,"div",13),r["\u0275\u0275text"](12,"\xa0"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](13,"div",14),r["\u0275\u0275text"](14,"\xa0"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](15,"div",17),r["\u0275\u0275elementStart"](16,"div",18),r["\u0275\u0275elementStart"](17,"div",0),r["\u0275\u0275elementStart"](18,"div",19),r["\u0275\u0275elementStart"](19,"strong",20),r["\u0275\u0275text"](20),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](21,"p",21),r["\u0275\u0275text"](22),r["\u0275\u0275pipe"](23,"date"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](24,"p",22),r["\u0275\u0275text"](25),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"]()),2&t){var n=e.$implicit;r["\u0275\u0275advance"](20),r["\u0275\u0275textInterpolate"](n.createdBy),r["\u0275\u0275advance"](2),r["\u0275\u0275textInterpolate"](r["\u0275\u0275pipeBind1"](23,3,n.createdOn)),r["\u0275\u0275advance"](3),r["\u0275\u0275textInterpolate"](n.comment)}}function p(t,e){if(1&t&&(r["\u0275\u0275elementStart"](0,"div"),r["\u0275\u0275element"](1,"app-spinner-wrapper",23),r["\u0275\u0275elementEnd"]()),2&t){var n=r["\u0275\u0275nextContext"]();r["\u0275\u0275advance"](1),r["\u0275\u0275property"]("showSpinner",n.showCommentProgress)}}n.d(e,"a",(function(){return d}));var d=function(){function t(t){this.service=t,this.showHeader=!0,this.closeIt=new r.EventEmitter,this.show=!0}return t.prototype.ngOnInit=function(){var t=this;this.showCommentProgress=!0,this.service.getComments(this.resourceType,this.resourceId).subscribe((function(e){t.comments=e,t.showCommentProgress=!1}))},t.prototype.toggleShowAudit=function(){this.closeIt.emit(!0)},t.\u0275fac=function(e){return new(e||t)(r["\u0275\u0275directiveInject"](o))},t.\u0275cmp=r["\u0275\u0275defineComponent"]({type:t,selectors:[["app-comment-history"]],inputs:{resourceType:"resourceType",resourceId:"resourceId",showHeader:"showHeader"},outputs:{closeIt:"closeIt"},decls:6,vars:4,consts:[[1,"card-body"],[1,"row","no-margin"],["class","card-title col-sm-6",4,"ngIf"],["class","col-sm-6 align-items-center justify-content-center",4,"ngIf"],["class","row",4,"ngFor","ngForOf"],[4,"ngIf"],[1,"card-title","col-sm-6"],[1,"col-sm-6","align-items-center","justify-content-center"],[1,"btn","float-right","pt-1","bg-transparent",3,"click"],[1,"fas","fa-times"],[1,"row"],[1,"col-auto","text-center","flex-column","d-none","d-sm-flex"],[1,"row","h-50"],[1,"col","border-right"],[1,"col"],[1,"m-2"],[1,"badge","badge-pill","bg-primary"],[1,"col","py-2"],[1,"card","border-success","shadow"],[1,"mb-1"],["_ngcontent-qsh-c199","",1,"mr-1"],[1,"text-muted"],[1,"card-text"],[3,"showSpinner"]],template:function(t,e){1&t&&(r["\u0275\u0275elementStart"](0,"div",0),r["\u0275\u0275elementStart"](1,"div",1),r["\u0275\u0275template"](2,l,2,0,"div",2),r["\u0275\u0275template"](3,s,3,0,"div",3),r["\u0275\u0275elementEnd"](),r["\u0275\u0275template"](4,u,26,5,"div",4),r["\u0275\u0275template"](5,p,2,1,"div",5),r["\u0275\u0275elementEnd"]()),2&t&&(r["\u0275\u0275advance"](2),r["\u0275\u0275property"]("ngIf",e.showHeader),r["\u0275\u0275advance"](1),r["\u0275\u0275property"]("ngIf",e.showHeader),r["\u0275\u0275advance"](1),r["\u0275\u0275property"]("ngForOf",e.comments),r["\u0275\u0275advance"](1),r["\u0275\u0275property"]("ngIf",e.showCommentProgress))},directives:[a.p,a.o,c.a],pipes:[a.f],styles:[""]}),t}()},aKbQ:function(t,e,n){"use strict";n.d(e,"b",(function(){return d})),n.d(e,"a",(function(){return f}));var r=n("26FU"),i=n("K9Ia"),o=n("dzgT"),a=n("F/XL"),c=n("15JJ"),l=n("67Y/"),s=n("TYT/"),u=n("cUzu"),p=function(){return(p=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var i in e=arguments[n])Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t}).apply(this,arguments)},d=function(){return function(){}}(),f=function(){function t(t){this.http=t,this.onContactSelected=new r.a(null),this.onUserUpdated=new i.a,this.onChatSelected=new r.a(null),this.onChatsUpdated=new i.a}return t.prototype.loadChatData=function(){var t=this;return Object(o.a)(this.getAllContacts(),this.getAllChats(),this.getCurrentUser(),(function(e,n,r){t.contacts=e,t.chats=n,t.user=r,t.onUserUpdated.next(r)}))},t.prototype.getChatByContact=function(t){var e=this;this.loadingCollection=!0;var n=this.user.chatInfo.find((function(e){return e.contactId===t}));return n?this.getAllChats().pipe(Object(c.a)((function(r){var i=r.find((function(t){return t.id===n.chatId})),o=e.contacts.find((function(e){return e.id===t}));return e.onChatSelected.next({chatCollection:i,contact:o}),e.loadingCollection=!1,Object(a.a)(i)}))):this.createChatCollection(t).pipe(Object(c.a)((function(n){return e.getChatByContact(t)})))},t.prototype.createChatCollection=function(t){var e=this,n=this.contacts.find((function(e){return e.id===t})),r=(1e9*Math.random()).toString(),i={id:r,chats:[]},o={chatId:r,lastChatTime:new Date,contactId:n.id,contactName:n.name,unread:null};return this.http.post("api/chat-collections",p({},i)).pipe(Object(c.a)((function(t){return e.user.chatInfo.push(o),e.updateUser(e.user).pipe(Object(c.a)((function(t){return e.getCurrentUser().pipe(Object(l.a)((function(t){e.user=t,e.onUserUpdated.next(t)})))})))})))},t.prototype.getAllContacts=function(){return this.http.get("api/contacts")},t.prototype.getAllChats=function(){return this.http.get("api/chat-collections")},t.prototype.getCurrentUser=function(){return this.http.get("api/chat-user").pipe(Object(l.a)((function(t){return t[0]})))},t.prototype.updateUser=function(t){return this.http.put("api/chat-user/"+t.id,p({},t))},t.prototype.updateChats=function(t,e){return this.http.put("api/chat-collections",{id:t,chats:e})},t.prototype.autoReply=function(t){var e=this;setTimeout((function(){e.onChatsUpdated.next(t)}),1500)},t.\u0275fac=function(e){return new(e||t)(s["\u0275\u0275inject"](u.c))},t.\u0275prov=s["\u0275\u0275defineInjectable"]({token:t,factory:t.\u0275fac,providedIn:"root"}),t}()},bngh:function(t,e,n){"use strict";n.d(e,"a",(function(){return l}));var r=n("26FU"),i=n("67Y/"),o=n("0o5J"),a=n("TYT/"),c=n("qT8p"),l=function(){function t(t,e){this.toastr=t,this.webApiProvider=e,this.onTruckSelected=new r.a(null),this.onAdvancedSearchApplied=new r.a(null),this.onClearSearchApplied=new r.a(null)}return t.prototype.loadTruckData=function(t,e){return this.getAllTrucks(t-1,e)},t.prototype.create=function(t){return this.webApiProvider.post("truck/v1/",t,!0)},t.prototype.update=function(t){return this.webApiProvider.put("truck/v1/"+t.id,t)},t.prototype.delete=function(t){return this.webApiProvider.delete("truck/v1/"+t,!0)},t.prototype.getAllTrucks=function(t,e){return this.webApiProvider.get("truck/v1/list/"+t+"/"+e,!0)},t.prototype.getAllTrucksNoPagination=function(){return this.webApiProvider.get("truck/v1/list",!0)},t.prototype.selectTruck=function(t){return e=this,void 0,r=function(){return function(t,e){var n,r,i,o,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function c(o){return function(c){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(i=2&o[0]?r.return:o[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,o[1])).done)return i;switch(r=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return a.label++,{value:o[1],done:!1};case 5:a.label++,r=o[1],o=[0];continue;case 7:o=a.ops.pop(),a.trys.pop();continue;default:if(!(i=(i=a.trys).length>0&&i[i.length-1])&&(6===o[0]||2===o[0])){a=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){a.label=o[1];break}if(6===o[0]&&a.label<i[1]){a.label=i[1],i=o;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(o);break}i[2]&&a.ops.pop(),a.trys.pop();continue}o=e.call(t,a)}catch(c){o=[6,c],r=0}finally{n=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,c])}}}(this,(function(e){switch(e.label){case 0:return this.loadingData=!0,[4,this.delay(1e3)];case 1:return e.sent(),this.onTruckSelected.next({truck:t}),this.loadingData=!1,[2]}}))},new((n=void 0)||(n=Promise))((function(t,i){function o(t){try{c(r.next(t))}catch(e){i(e)}}function a(t){try{c(r.throw(t))}catch(e){i(e)}}function c(e){var r;e.done?t(e.value):(r=e.value,r instanceof n?r:new n((function(t){t(r)}))).then(o,a)}c((r=r.apply(e,[])).next())}));var e,n,r},t.prototype.delay=function(t){return new Promise((function(e){return setTimeout(e,t)}))},t.prototype.getTankConfigurationById=function(t){var e=this;return this.loadingData=!0,this.getTruckById(t).pipe(Object(i.a)((function(t){return e.onTruckSelected.next({Truck:t}),e.loadingData=!1,t})))},t.prototype.getTruckById=function(t){return this.webApiProvider.get("truck/v1/"+t)},t.prototype.performAdvancedSearch=function(t){var e=this;this.loadingCollection=!0,this.webApiProvider.get("truck/v1/list/0/8"+t,!0).subscribe((function(t){t&&(e.onAdvancedSearchApplied.next({financials:t}),e.loadingCollection=!1)}),(function(t){e.toastr.error(t.errorMessage,"Failed"),e.loadingCollection=!1}))},t.prototype.getProductsForDepot=function(t){return this.webApiProvider.post("truck/v1/depotprods?depotId="+t,null,!0)},t.prototype.search=function(t,e,n){return this.webApiProvider.get("truck/v1/list/"+(e-1)+"/"+n+"/"+t)},t.prototype.getTruckLedger=function(t,e,n){return this.webApiProvider.getwithSearchParam("truck/ledger/v1/list/"+t+"/"+e,n.params)},t.\u0275fac=function(e){return new(e||t)(a["\u0275\u0275inject"](c.b),a["\u0275\u0275inject"](o.c))},t.\u0275prov=a["\u0275\u0275defineInjectable"]({token:t,factory:t.\u0275fac,providedIn:"root"}),t}()},mB2O:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var r=n("TYT/"),i=n("cUzu"),o=function(){function t(t){this.http=t}return t.prototype.getProducts=function(){return this.http.get("api/products")},t.\u0275fac=function(e){return new(e||t)(r["\u0275\u0275inject"](i.c))},t.\u0275prov=r["\u0275\u0275defineInjectable"]({token:t,factory:t.\u0275fac,providedIn:"root"}),t}()},zDFo:function(t,e,n){"use strict";n.d(e,"a",(function(){return f}));var r=n("QJY3"),i=n("Gi3i"),o=n("oR8h"),a=n("he9t"),c=n("TYT/"),l=n("MnXN"),s=n("Valr"),u=n("3rkx");function p(t,e){if(1&t){var n=c["\u0275\u0275getCurrentView"]();c["\u0275\u0275elementStart"](0,"div",12),c["\u0275\u0275listener"]("click",(function(){c["\u0275\u0275restoreView"](n);var t=e.$implicit;return c["\u0275\u0275nextContext"]().select(t)})),c["\u0275\u0275elementStart"](1,"h6",13),c["\u0275\u0275text"](2),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"]()}if(2&t){var r=e.$implicit;c["\u0275\u0275advance"](2),c["\u0275\u0275textInterpolate"](r.name)}}function d(t,e){1&t&&(c["\u0275\u0275elementStart"](0,"div",14),c["\u0275\u0275element"](1,"app-spinner-wrapper",15),c["\u0275\u0275elementEnd"]()),2&t&&(c["\u0275\u0275advance"](1),c["\u0275\u0275property"]("showSpinner",!0))}var f=function(){function t(t,e,n){this.service=t,this.activeModal=e,this.constant=n,this.searchControl=new r.FormControl,this.modalTitle="",this.modalHeader="",this.modalMessage="",this.loadingCollection=!1,this.clientType="",this.clients=[],this.page=1,this.pageSize=this.constant.pageSize}return t.prototype.ngOnInit=function(){var t=this;this.loadingCollection=!0,this.service.search("?status=ACTIVE&clientType="+this.clientType,this.page,this.pageSize).subscribe((function(e){t.clients=e.content.map((function(t){return{id:t.id,name:t.name}})),t.collectionSize=e.totalElements,t.loadingCollection=!1})),this.searchControl.valueChanges.pipe(Object(i.a)(200)).subscribe((function(e){t.filerData(e)}))},t.prototype.filerData=function(t){var e=this;this.loadingCollection=!0;var n="?name="+t;this.service.search(n=n+"&status=ACTIVE&clientType="+this.clientType,this.page,this.pageSize).subscribe((function(t){e.clients=t.content,e.collectionSize=t.totalElements,e.loadingCollection=!1}))},t.prototype.getPageFromService=function(t){var e=this;this.loadingCollection=!0,this.service.loadClientData(t,this.pageSize).subscribe((function(n){e.clients=n.content,e.collectionSize=n.totalElements,e.loadingCollection=!1,e.page=t}))},t.prototype.select=function(t){this.activeModal.close({status:!0,client:t})},t.\u0275fac=function(e){return new(e||t)(c["\u0275\u0275directiveInject"](o.a),c["\u0275\u0275directiveInject"](l.b),c["\u0275\u0275directiveInject"](a.a))},t.\u0275cmp=c["\u0275\u0275defineComponent"]({type:t,selectors:[["app-client-search"]],decls:13,vars:8,consts:[[1,"modal-header"],["id","modal-title",1,"modal-title"],[1,"modal-body"],[1,"form-group","m-0","flex-grow-1"],["id","search","placeholder","Search client name",1,"form-control","form-control-rounded",3,"formControl"],[1,"row"],[1,"col-md-12"],[1,"card","o-hidden","mt-3","left-pane-container"],["class","p-3 d-flex border-bottom align-items-center contact no-dot list-item",3,"click",4,"ngFor","ngForOf"],[1,"row","no-margin","pagination-div","card-footer"],["aria-label","Default pagination",3,"collectionSize","page","pageSize","boundaryLinks","pageChange"],["class","border-right",4,"ngIf"],[1,"p-3","d-flex","border-bottom","align-items-center","contact","no-dot","list-item",3,"click"],[1,""],[1,"border-right"],[3,"showSpinner"]],template:function(t,e){1&t&&(c["\u0275\u0275elementStart"](0,"div",0),c["\u0275\u0275elementStart"](1,"h4",1),c["\u0275\u0275text"](2),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](3,"div",2),c["\u0275\u0275elementStart"](4,"div",3),c["\u0275\u0275element"](5,"input",4),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](6,"div",5),c["\u0275\u0275elementStart"](7,"div",6),c["\u0275\u0275elementStart"](8,"div",7),c["\u0275\u0275template"](9,p,3,1,"div",8),c["\u0275\u0275elementStart"](10,"div",9),c["\u0275\u0275elementStart"](11,"ngb-pagination",10),c["\u0275\u0275listener"]("pageChange",(function(t){return e.page=t}))("pageChange",(function(t){return e.getPageFromService(t)})),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275template"](12,d,2,1,"div",11),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"]()),2&t&&(c["\u0275\u0275advance"](2),c["\u0275\u0275textInterpolate"](e.modalTitle),c["\u0275\u0275advance"](3),c["\u0275\u0275property"]("formControl",e.searchControl),c["\u0275\u0275advance"](4),c["\u0275\u0275property"]("ngForOf",e.clients),c["\u0275\u0275advance"](2),c["\u0275\u0275property"]("collectionSize",e.collectionSize)("page",e.page)("pageSize",e.pageSize)("boundaryLinks",!0),c["\u0275\u0275advance"](1),c["\u0275\u0275property"]("ngIf",e.loadingCollection))},directives:[r.DefaultValueAccessor,r.NgControlStatus,r.FormControlDirective,s.o,l.o,s.p,u.a],styles:[".no-dot[_ngcontent-%COMP%]:before{background:none!important}.dropdown-menu.show[_ngcontent-%COMP%]{transform:translateY(33px)!important}.btn-group[_ngcontent-%COMP%] > .btn[_ngcontent-%COMP%]{margin-left:5px}.show-on-top[_ngcontent-%COMP%]{z-index:1000;position:absolute;top:200px;left:80px}.left-pane-container[_ngcontent-%COMP%]{height:calc(100vh - 400px)}.pagination-div[_ngcontent-%COMP%]{position:absolute;bottom:0;align-items:center;justify-content:center;width:100%}"]}),t}()}}]);