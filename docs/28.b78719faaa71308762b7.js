(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{kJ0Q:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r,o=n("MnXN"),i=n("TYT/"),l=(r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),a=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.DELIMITER="/",t}return l(t,e),t.prototype.fromModel=function(e){if(e){var t=e.split(this.DELIMITER);return{month:parseInt(t[0],10),day:parseInt(t[1],10),year:parseInt(t[2],10)}}return null},t.prototype.toModel=function(e){return e?e.month+this.DELIMITER+e.day+this.DELIMITER+e.year:null},t.\u0275prov=i["\u0275\u0275defineInjectable"]({token:t,factory:t.\u0275fac=function(e){return c(e||t)}}),t}(o.g),c=i["\u0275\u0275getInheritedFactory"](a)},oR8h:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n("26FU"),o=n("67Y/"),i=n("0o5J"),l=n("TYT/"),a=n("qT8p"),c=function(){function e(e,t){this.toastr=e,this.webApiProvider=t,this.onClientSelected=new r.a(null),this.onAdvancedSearchApplied=new r.a(null),this.onClearSearchApplied=new r.a(null)}return e.prototype.loadClientData=function(e,t){return this.getAllClients(e-1,t)},e.prototype.create=function(e){return this.webApiProvider.post("client/v1/",e,!0)},e.prototype.update=function(e){return this.webApiProvider.put("client/v1/"+e.id,e)},e.prototype.delete=function(e){return this.webApiProvider.delete("client/v1/"+e,!0)},e.prototype.getAllClients=function(e,t){return this.webApiProvider.get("client/v1/list/"+e+"/"+t,!0)},e.prototype.getMainAndSubClientsNoPagination=function(){return this.webApiProvider.get("client/v1/list?includeSubClients=true",!0)},e.prototype.getAllClientsNoPagination=function(){return this.webApiProvider.get("client/v1/list",!0)},e.prototype.getAllSubClientsForGivenMainClient=function(e){return this.webApiProvider.get("client/v1/list/"+e)},e.prototype.getDepotForClient=function(e){return this.webApiProvider.post("depot/v1/userdepots?clientId="+e,null,!0)},e.prototype.getClientLedger=function(e,t,n){return this.webApiProvider.getwithSearchParam("client/ledger/v1/list/"+e+"/"+t,n.params)},e.prototype.getClientById=function(e){var t=this;return this.loadingData=!0,this.getAllClienById(e).pipe(Object(o.a)((function(e){return t.onClientSelected.next({client:e}),t.loadingData=!1,e})))},e.prototype.selectClient=function(e){return t=this,void 0,r=function(){var t=this;return function(e,t){var n,r,o,i,l={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(i){return function(a){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;l;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return l.label++,{value:i[1],done:!1};case 5:l.label++,r=i[1],i=[0];continue;case 7:i=l.ops.pop(),l.trys.pop();continue;default:if(!(o=(o=l.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){l=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){l.label=i[1];break}if(6===i[0]&&l.label<o[1]){l.label=o[1],o=i;break}if(o&&l.label<o[2]){l.label=o[2],l.ops.push(i);break}o[2]&&l.ops.pop(),l.trys.pop();continue}i=t.call(e,l)}catch(a){i=[6,a],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,a])}}}(this,(function(n){return this.loadingData=!0,this.getAllClienById(e.id).subscribe((function(e){t.onClientSelected.next({client:e}),t.loadingData=!1})),[2]}))},new((n=void 0)||(n=Promise))((function(e,o){function i(e){try{a(r.next(e))}catch(t){o(t)}}function l(e){try{a(r.throw(e))}catch(t){o(t)}}function a(t){var r;t.done?e(t.value):(r=t.value,r instanceof n?r:new n((function(e){e(r)}))).then(i,l)}a((r=r.apply(t,[])).next())}));var t,n,r},e.prototype.delay=function(e){return new Promise((function(t){return setTimeout(t,e)}))},e.prototype.getAllClienById=function(e){return this.webApiProvider.get("client/v1/"+e)},e.prototype.getAllClientAssociationGroup=function(){return this.webApiProvider.get("client-assoc-grp/v1/list")},e.prototype.performAdvancedSearch=function(e){var t=this;this.loadingCollection=!0,this.webApiProvider.getwithSearchParam("client/v1/list/0/6",e.params).subscribe((function(e){e&&(t.onAdvancedSearchApplied.next({clients:e}),t.loadingCollection=!1)}),(function(e){t.toastr.error(e.errorMessage,"Failed"),t.loadingCollection=!1}))},e.prototype.performAdvancedSearchWithQuery=function(e,t,n){var r=this;this.loadingCollection=!0,this.webApiProvider.get("client/v1/list/"+e+"/"+t+n,!0).subscribe((function(e){e&&(r.onAdvancedSearchApplied.next({clients:e}),r.loadingCollection=!1)}),(function(e){r.toastr.error(e.errorMessage,"Failed"),r.loadingCollection=!1}))},e.prototype.search=function(e,t,n){return this.webApiProvider.get("client/v1/list/"+(t-1)+"/"+n+e)},e.prototype.getAllMainClients=function(){return this.webApiProvider.get("client/v1/list",!0)},e.\u0275fac=function(t){return new(t||e)(l["\u0275\u0275inject"](a.b),l["\u0275\u0275inject"](i.c))},e.\u0275prov=l["\u0275\u0275defineInjectable"]({token:e,factory:e.\u0275fac,providedIn:"root"}),e}()},z0nd:function(e,t,n){"use strict";n.r(t);var r=n("oOf3"),o=n("Valr"),i=n("MnXN"),l=n("1PnN"),a=n("QJY3"),c=n("DUip"),s=n("oR8h"),d=n("cUzu"),p=n("kJ0Q"),u=n("TYT/"),m=n("3rkx");function f(e,t){if(1&e&&(u["\u0275\u0275elementStart"](0,"tr"),u["\u0275\u0275elementStart"](1,"td"),u["\u0275\u0275text"](2),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](3,"td"),u["\u0275\u0275text"](4),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](5,"td"),u["\u0275\u0275text"](6),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](7,"td"),u["\u0275\u0275text"](8),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](9,"td"),u["\u0275\u0275text"](10),u["\u0275\u0275pipe"](11,"date"),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](12,"td"),u["\u0275\u0275text"](13),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](14,"td"),u["\u0275\u0275text"](15),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"]()),2&e){var n=t.$implicit,r=t.index;u["\u0275\u0275advance"](2),u["\u0275\u0275textInterpolate1"](" ",r+1," "),u["\u0275\u0275advance"](2),u["\u0275\u0275textInterpolate1"](" ",n.client," "),u["\u0275\u0275advance"](2),u["\u0275\u0275textInterpolate1"](" ",n.depot," "),u["\u0275\u0275advance"](2),u["\u0275\u0275textInterpolate1"](" ",n.product," "),u["\u0275\u0275advance"](2),u["\u0275\u0275textInterpolate1"](" ",u["\u0275\u0275pipeBind1"](11,7,n.createdDate)," "),u["\u0275\u0275advance"](3),u["\u0275\u0275textInterpolate1"](" ",n.description," "),u["\u0275\u0275advance"](2),u["\u0275\u0275textInterpolate1"](" ",n.transactionVolume,"\xa0 Liters ")}}function g(e,t){if(1&e){var n=u["\u0275\u0275getCurrentView"]();u["\u0275\u0275elementStart"](0,"div",22),u["\u0275\u0275elementStart"](1,"div",23),u["\u0275\u0275elementStart"](2,"button",24),u["\u0275\u0275text"](3," Export "),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](4,"div",25),u["\u0275\u0275elementStart"](5,"button",26),u["\u0275\u0275text"](6,"PDF"),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](7,"button",26),u["\u0275\u0275text"](8,"Excel"),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](9,"button",26),u["\u0275\u0275text"](10,"HTML"),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](11,"table",27),u["\u0275\u0275elementStart"](12,"thead"),u["\u0275\u0275elementStart"](13,"tr"),u["\u0275\u0275elementStart"](14,"th",28),u["\u0275\u0275text"](15,"#"),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](16,"th",28),u["\u0275\u0275text"](17,"Client"),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](18,"th",28),u["\u0275\u0275text"](19,"Depot"),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](20,"th",28),u["\u0275\u0275text"](21,"Product"),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](22,"th",28),u["\u0275\u0275text"](23,"Date"),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](24,"th",28),u["\u0275\u0275text"](25,"Description"),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](26,"th",28),u["\u0275\u0275text"](27,"Volume"),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](28,"tbody"),u["\u0275\u0275template"](29,f,16,9,"tr",29),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](30,"div",30),u["\u0275\u0275elementStart"](31,"ngb-pagination",31),u["\u0275\u0275listener"]("pageChange",(function(e){return u["\u0275\u0275restoreView"](n),u["\u0275\u0275nextContext"]().page=e}))("pageChange",(function(e){return u["\u0275\u0275restoreView"](n),u["\u0275\u0275nextContext"]().getPageFromService(e)})),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"]()}if(2&e){var r=u["\u0275\u0275nextContext"]();u["\u0275\u0275advance"](29),u["\u0275\u0275property"]("ngForOf",r.clientLedgers),u["\u0275\u0275advance"](2),u["\u0275\u0275property"]("collectionSize",r.collectionSize)("page",r.page)("pageSize",r.pageSize)("maxSize",4)("ellipses",!0)("boundaryLinks",!0)}}function h(e,t){if(1&e&&(u["\u0275\u0275elementStart"](0,"div"),u["\u0275\u0275element"](1,"app-spinner-wrapper",32),u["\u0275\u0275elementEnd"]()),2&e){var n=u["\u0275\u0275nextContext"]();u["\u0275\u0275advance"](1),u["\u0275\u0275property"]("showSpinner",n.showProgress)}}var v=function(e){return{"is-invalid":e}},b=[{path:"",component:function(){function e(e,t){this.fb=e,this.clientService=t,this.clients=[],this.showProgress=!1,this.page=1,this.pageSize=8}return e.prototype.ngOnInit=function(){this.setUpForm(),this.loadClients()},e.prototype.setUpForm=function(){this.clientLedgerForm=this.fb.group({client:[null,[a.Validators.required]],fromDate:[null,[a.Validators.required]],toDate:[null,[a.Validators.required]]})},e.prototype.loadClients=function(){var e=this;this.showProgress=!0,this.clientService.getMainAndSubClientsNoPagination().subscribe((function(t){e.clients=t,e.showProgress=!1}),(function(t){e.showProgress=!1}))},Object.defineProperty(e.prototype,"f",{get:function(){return this.clientLedgerForm.controls},enumerable:!0,configurable:!0}),e.prototype.performAdvancedSearch=function(){var e=this;if(!this.clientLedgerForm.invalid){this.showProgress=!0;var t=this.clientLedgerForm.value;if(t){console.log(t);var n={params:(new d.f).set("clientId",t.client?t.client.id:"").set("fromDate",t.fromDate).set("toDate",t.toDate).set("page","0").set("size","8")};this.clientService.getClientLedger(0,8,n).subscribe((function(t){e.clientLedgers=t.content,e.collectionSize=t.totalElements,e.showProgress=!1}),(function(t){console.log(t.error),e.showProgress=!1}))}}},e.prototype.getPageFromService=function(e){var t=this;this.showProgress=!0;var n=this.clientLedgerForm.value,r={params:(new d.f).set("clientId",n.client?n.client.id:"").set("fromDate",n.fromDate).set("toDate",n.toDate).set("page",e.toString()).set("size","8")};this.clientService.getClientLedger(e-1,this.pageSize,r).subscribe((function(e){t.clientLedgers=e.content,t.collectionSize=e.totalElements,t.showProgress=!1}),(function(e){console.log(e.error),t.showProgress=!1}))},e.prototype.clear=function(){this.clientLedgerForm.get("client").setValue(null),this.clientLedgerForm.get("fromDate").setValue(null),this.clientLedgerForm.get("toDate").setValue(null),this.clientLedgers=void 0},e.\u0275fac=function(t){return new(t||e)(u["\u0275\u0275directiveInject"](a.FormBuilder),u["\u0275\u0275directiveInject"](s.a))},e.\u0275cmp=u["\u0275\u0275defineComponent"]({type:e,selectors:[["app-client-ledger"]],features:[u["\u0275\u0275ProvidersFeature"]([{provide:i.g,useClass:p.a}])],decls:38,vars:14,consts:[[1,""],[1,"breadcrumb"],[1,"separator-breadcrumb","border-top"],[1,"card","card-body","row","no-margin"],[3,"formGroup"],[1,"form-group","row","space-between"],[1,"col-3","p-1"],["bindLabel","name","placeholder","Select client","formControlName","client","required","",3,"items","multiple","ngClass"],[1,"input-group"],["id","picker1","placeholder","yyyy-mm-dd","name","dp1","ngbDatepicker","","formControlName","fromDate","required","",1,"form-control",3,"ngClass"],["dp1","ngbDatepicker"],[1,"input-group-append"],["type","button",1,"btn","btn-secondary",3,"click"],[1,"icon-regular","i-Calendar-4"],["id","picker1","placeholder","yyyy-mm-dd","name","dp2","ngbDatepicker","","formControlName","toDate","required","",1,"form-control",3,"ngClass"],["dp2","ngbDatepicker"],[1,"col-3","p-1","float-right","d-flex","align-items-center","mt-4"],[1,"btn","btn-primary",3,"click"],[1,"btn","ml-2",3,"click"],[1,"row","no-margin","mt-3"],["class","card card-body",4,"ngIf"],[4,"ngIf"],[1,"card","card-body"],[1,"row","no-margin","float-right","btn-group","mb-3"],["type","button","data-toggle","dropdown","aria-haspopup","true","aria-expanded","false",1,"btn","btn-outline-primary","dropdown-toggle"],[1,"dropdown-menu"],[1,"dropdown-item"],[1,"table","table-striped"],["scope","col"],[4,"ngFor","ngForOf"],[1,"row","no-margin","pagination-div","border-rightr","justify-content-center"],["aria-label","Default pagination",3,"collectionSize","page","pageSize","maxSize","ellipses","boundaryLinks","pageChange"],[3,"showSpinner"]],template:function(e,t){if(1&e){var n=u["\u0275\u0275getCurrentView"]();u["\u0275\u0275elementStart"](0,"div",0),u["\u0275\u0275elementStart"](1,"div",1),u["\u0275\u0275elementStart"](2,"h1"),u["\u0275\u0275text"](3,"Client ledger"),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275element"](4,"div",2),u["\u0275\u0275elementStart"](5,"div",3),u["\u0275\u0275elementStart"](6,"form",4),u["\u0275\u0275elementStart"](7,"div",5),u["\u0275\u0275elementStart"](8,"div",6),u["\u0275\u0275elementStart"](9,"label"),u["\u0275\u0275text"](10,"Client"),u["\u0275\u0275elementEnd"](),u["\u0275\u0275element"](11,"ng-select",7),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](12,"div",6),u["\u0275\u0275elementStart"](13,"label"),u["\u0275\u0275text"](14,"From date"),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](15,"div",8),u["\u0275\u0275element"](16,"input",9,10),u["\u0275\u0275elementStart"](18,"div",11),u["\u0275\u0275elementStart"](19,"button",12),u["\u0275\u0275listener"]("click",(function(){return u["\u0275\u0275restoreView"](n),u["\u0275\u0275reference"](17).toggle()})),u["\u0275\u0275element"](20,"i",13),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](21,"div",6),u["\u0275\u0275elementStart"](22,"label"),u["\u0275\u0275text"](23,"To date"),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](24,"div",8),u["\u0275\u0275element"](25,"input",14,15),u["\u0275\u0275elementStart"](27,"div",11),u["\u0275\u0275elementStart"](28,"button",12),u["\u0275\u0275listener"]("click",(function(){return u["\u0275\u0275restoreView"](n),u["\u0275\u0275reference"](26).toggle()})),u["\u0275\u0275element"](29,"i",13),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](30,"div",16),u["\u0275\u0275elementStart"](31,"button",17),u["\u0275\u0275listener"]("click",(function(){return t.performAdvancedSearch()})),u["\u0275\u0275text"](32,"Search"),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](33,"button",18),u["\u0275\u0275listener"]("click",(function(){return t.clear()})),u["\u0275\u0275text"](34,"Clear"),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](35,"div",19),u["\u0275\u0275template"](36,g,32,7,"div",20),u["\u0275\u0275elementEnd"](),u["\u0275\u0275template"](37,h,2,1,"div",21),u["\u0275\u0275elementEnd"]()}2&e&&(u["\u0275\u0275advance"](6),u["\u0275\u0275property"]("formGroup",t.clientLedgerForm),u["\u0275\u0275advance"](5),u["\u0275\u0275property"]("items",t.clients)("multiple",!1)("ngClass",u["\u0275\u0275pureFunction1"](8,v,t.f.client.errors)),u["\u0275\u0275advance"](5),u["\u0275\u0275property"]("ngClass",u["\u0275\u0275pureFunction1"](10,v,t.f.fromDate.errors)),u["\u0275\u0275advance"](9),u["\u0275\u0275property"]("ngClass",u["\u0275\u0275pureFunction1"](12,v,t.f.toDate.errors)),u["\u0275\u0275advance"](11),u["\u0275\u0275property"]("ngIf",t.clientLedgers),u["\u0275\u0275advance"](1),u["\u0275\u0275property"]("ngIf",t.showProgress))},directives:[a["\u0275angular_packages_forms_forms_y"],a.NgControlStatusGroup,a.FormGroupDirective,l.a,a.NgControlStatus,a.FormControlName,a.RequiredValidator,o.n,i.l,a.DefaultValueAccessor,o.p,o.o,i.o,m.a],pipes:[o.f],styles:[".dropdown-menu.show[_ngcontent-%COMP%]{transform:translateY(33px)!important;will-change:auto!important}.justify-content-space-between[_ngcontent-%COMP%]{width:100%;justify-content:space-between}.font1em[_ngcontent-%COMP%]{font-size:1em}"]}),e}()}],y=function(){function e(){}return e.\u0275mod=u["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=u["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[c.l.forChild(b)],c.l]}),e}(),S=n("jgPy");n.d(t,"ClientLedgerModule",(function(){return w}));var w=function(){function e(){}return e.\u0275mod=u["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=u["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[o.c,y,i.h,l.b,a.FormsModule,a.ReactiveFormsModule,i.n,S.a,r.a]]}),e}()}}]);