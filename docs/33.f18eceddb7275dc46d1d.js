(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{"2MDl":function(e,t,n){"use strict";n.r(t);var r=n("Valr"),o=n("DUip"),a=n("QJY3"),i=n("bngh"),l=n("cUzu"),c=n("MnXN"),d=n("kJ0Q"),s=n("TYT/"),m=n("1PnN"),u=n("3rkx");function p(e,t){if(1&e&&(s["\u0275\u0275elementStart"](0,"tr"),s["\u0275\u0275elementStart"](1,"td"),s["\u0275\u0275text"](2),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](3,"td"),s["\u0275\u0275text"](4),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](5,"td"),s["\u0275\u0275text"](6),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](7,"td"),s["\u0275\u0275text"](8),s["\u0275\u0275pipe"](9,"date"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](10,"td"),s["\u0275\u0275text"](11),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](12,"td"),s["\u0275\u0275text"](13),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"]()),2&e){var n=t.$implicit,r=t.index;s["\u0275\u0275advance"](2),s["\u0275\u0275textInterpolate1"](" ",r+1," "),s["\u0275\u0275advance"](2),s["\u0275\u0275textInterpolate1"](" ",n.truck," "),s["\u0275\u0275advance"](2),s["\u0275\u0275textInterpolate1"](" ",n.product," "),s["\u0275\u0275advance"](2),s["\u0275\u0275textInterpolate1"](" ",s["\u0275\u0275pipeBind1"](9,6,n.createdDate)," "),s["\u0275\u0275advance"](3),s["\u0275\u0275textInterpolate1"](" ",n.description," "),s["\u0275\u0275advance"](2),s["\u0275\u0275textInterpolate1"](" ",n.transactionVolume," ")}}function g(e,t){if(1&e){var n=s["\u0275\u0275getCurrentView"]();s["\u0275\u0275elementStart"](0,"div",22),s["\u0275\u0275elementStart"](1,"div",23),s["\u0275\u0275elementStart"](2,"button",24),s["\u0275\u0275text"](3," Export "),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](4,"div",25),s["\u0275\u0275elementStart"](5,"button",26),s["\u0275\u0275text"](6,"PDF"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](7,"button",26),s["\u0275\u0275text"](8,"Excel"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](9,"button",26),s["\u0275\u0275text"](10,"HTML"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](11,"table",27),s["\u0275\u0275elementStart"](12,"thead"),s["\u0275\u0275elementStart"](13,"tr"),s["\u0275\u0275elementStart"](14,"th",28),s["\u0275\u0275text"](15,"#"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](16,"th",28),s["\u0275\u0275text"](17,"Truck"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](18,"th",28),s["\u0275\u0275text"](19,"Product"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](20,"th",28),s["\u0275\u0275text"](21,"Date"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](22,"th",28),s["\u0275\u0275text"](23,"Description"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](24,"th",28),s["\u0275\u0275text"](25,"Volume"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](26,"tbody"),s["\u0275\u0275template"](27,p,14,8,"tr",29),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](28,"div",30),s["\u0275\u0275elementStart"](29,"ngb-pagination",31),s["\u0275\u0275listener"]("pageChange",(function(e){return s["\u0275\u0275restoreView"](n),s["\u0275\u0275nextContext"]().page=e}))("pageChange",(function(e){return s["\u0275\u0275restoreView"](n),s["\u0275\u0275nextContext"]().getPageFromService(e)})),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"]()}if(2&e){var r=s["\u0275\u0275nextContext"]();s["\u0275\u0275advance"](27),s["\u0275\u0275property"]("ngForOf",r.truckLedgers),s["\u0275\u0275advance"](2),s["\u0275\u0275property"]("collectionSize",r.collectionSize)("page",r.page)("pageSize",r.pageSize)("maxSize",4)("ellipses",!0)("boundaryLinks",!0)}}function f(e,t){if(1&e&&(s["\u0275\u0275elementStart"](0,"div"),s["\u0275\u0275element"](1,"app-spinner-wrapper",32),s["\u0275\u0275elementEnd"]()),2&e){var n=s["\u0275\u0275nextContext"]();s["\u0275\u0275advance"](1),s["\u0275\u0275property"]("showSpinner",n.showProgress)}}var h=function(e){return{"is-invalid":e}},v=[{path:"",component:function(){function e(e,t){this.fb=e,this.truckService=t,this.trucks=[],this.showProgress=!1,this.page=1,this.pageSize=8}return e.prototype.ngOnInit=function(){this.setUpForm(),this.loadClients()},e.prototype.setUpForm=function(){this.clientLedgerForm=this.fb.group({truck:[null,[a.Validators.required]],fromDate:[null,[a.Validators.required]],toDate:[null,[a.Validators.required]]})},e.prototype.loadClients=function(){var e=this;this.showProgress=!0,this.truckService.getAllTrucksNoPagination().subscribe((function(t){e.trucks=t,e.showProgress=!1}),(function(t){e.showProgress=!1}))},Object.defineProperty(e.prototype,"f",{get:function(){return this.clientLedgerForm.controls},enumerable:!0,configurable:!0}),e.prototype.performAdvancedSearch=function(){var e=this;if(!this.clientLedgerForm.invalid){this.showProgress=!0;var t=this.clientLedgerForm.value;if(t){console.log(t);var n={params:(new l.f).set("truckId",t.truck?t.truck.id:"").set("fromDate",t.fromDate).set("toDate",t.toDate).set("page","0").set("size","8")};this.truckService.getTruckLedger(0,8,n).subscribe((function(t){e.truckLedgers=t.content,e.collectionSize=t.totalElements,e.showProgress=!1}),(function(t){console.log(t.error),e.showProgress=!1}))}}},e.prototype.getPageFromService=function(e){var t=this;this.showProgress=!0;var n=this.clientLedgerForm.value,r={params:(new l.f).set("truckId",n.client?n.client.id:"").set("fromDate",n.fromDate).set("toDate",n.toDate)};this.truckService.getTruckLedger(e-1,this.pageSize,r).subscribe((function(e){t.truckLedgers=e.content,t.collectionSize=e.totalElements,t.showProgress=!1}),(function(e){console.log(e.error),t.showProgress=!1}))},e.prototype.clear=function(){this.clientLedgerForm.get("truck").setValue(null),this.clientLedgerForm.get("fromDate").setValue(null),this.clientLedgerForm.get("toDate").setValue(null),this.truckLedgers=void 0},e.\u0275fac=function(t){return new(t||e)(s["\u0275\u0275directiveInject"](a.FormBuilder),s["\u0275\u0275directiveInject"](i.a))},e.\u0275cmp=s["\u0275\u0275defineComponent"]({type:e,selectors:[["app-truck-ledger"]],features:[s["\u0275\u0275ProvidersFeature"]([{provide:c.g,useClass:d.a}])],decls:38,vars:14,consts:[[1,""],[1,"breadcrumb"],[1,"separator-breadcrumb","border-top"],[1,"card","card-body","row","no-margin"],[3,"formGroup"],[1,"form-group","row","space-between"],[1,"col-3","p-1"],["bindLabel","truckNumber","placeholder","Select truck","formControlName","truck","required","",3,"items","multiple","ngClass"],[1,"input-group"],["id","picker1","placeholder","yyyy-mm-dd","name","dp1","ngbDatepicker","","formControlName","fromDate","required","",1,"form-control",3,"ngClass"],["dp1","ngbDatepicker"],[1,"input-group-append"],["type","button",1,"btn","btn-secondary",3,"click"],[1,"icon-regular","i-Calendar-4"],["id","picker1","placeholder","yyyy-mm-dd","name","dp2","ngbDatepicker","","formControlName","toDate","required","",1,"form-control",3,"ngClass"],["dp2","ngbDatepicker"],[1,"col-3","p-1","float-right","d-flex","align-items-center","mt-4"],[1,"btn","btn-primary",3,"click"],[1,"btn","ml-2",3,"click"],[1,"row","no-margin","mt-3"],["class","card card-body",4,"ngIf"],[4,"ngIf"],[1,"card","card-body"],[1,"row","no-margin","float-right","btn-group","mb-3"],["type","button","data-toggle","dropdown","aria-haspopup","true","aria-expanded","false",1,"btn","btn-outline-primary","dropdown-toggle"],[1,"dropdown-menu"],[1,"dropdown-item"],[1,"table","table-striped"],["scope","col"],[4,"ngFor","ngForOf"],[1,"row","no-margin","pagination-div","border-rightr","justify-content-center"],["aria-label","Default pagination",3,"collectionSize","page","pageSize","maxSize","ellipses","boundaryLinks","pageChange"],[3,"showSpinner"]],template:function(e,t){if(1&e){var n=s["\u0275\u0275getCurrentView"]();s["\u0275\u0275elementStart"](0,"div",0),s["\u0275\u0275elementStart"](1,"div",1),s["\u0275\u0275elementStart"](2,"h1"),s["\u0275\u0275text"](3,"Truck ledger"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275element"](4,"div",2),s["\u0275\u0275elementStart"](5,"div",3),s["\u0275\u0275elementStart"](6,"form",4),s["\u0275\u0275elementStart"](7,"div",5),s["\u0275\u0275elementStart"](8,"div",6),s["\u0275\u0275elementStart"](9,"label"),s["\u0275\u0275text"](10,"Client"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275element"](11,"ng-select",7),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](12,"div",6),s["\u0275\u0275elementStart"](13,"label"),s["\u0275\u0275text"](14,"From date"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](15,"div",8),s["\u0275\u0275element"](16,"input",9,10),s["\u0275\u0275elementStart"](18,"div",11),s["\u0275\u0275elementStart"](19,"button",12),s["\u0275\u0275listener"]("click",(function(){return s["\u0275\u0275restoreView"](n),s["\u0275\u0275reference"](17).toggle()})),s["\u0275\u0275element"](20,"i",13),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](21,"div",6),s["\u0275\u0275elementStart"](22,"label"),s["\u0275\u0275text"](23,"To date"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](24,"div",8),s["\u0275\u0275element"](25,"input",14,15),s["\u0275\u0275elementStart"](27,"div",11),s["\u0275\u0275elementStart"](28,"button",12),s["\u0275\u0275listener"]("click",(function(){return s["\u0275\u0275restoreView"](n),s["\u0275\u0275reference"](26).toggle()})),s["\u0275\u0275element"](29,"i",13),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](30,"div",16),s["\u0275\u0275elementStart"](31,"button",17),s["\u0275\u0275listener"]("click",(function(){return t.performAdvancedSearch()})),s["\u0275\u0275text"](32,"Search"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](33,"button",18),s["\u0275\u0275listener"]("click",(function(){return t.clear()})),s["\u0275\u0275text"](34,"Clear"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](35,"div",19),s["\u0275\u0275template"](36,g,30,7,"div",20),s["\u0275\u0275elementEnd"](),s["\u0275\u0275template"](37,f,2,1,"div",21),s["\u0275\u0275elementEnd"]()}2&e&&(s["\u0275\u0275advance"](6),s["\u0275\u0275property"]("formGroup",t.clientLedgerForm),s["\u0275\u0275advance"](5),s["\u0275\u0275property"]("items",t.trucks)("multiple",!1)("ngClass",s["\u0275\u0275pureFunction1"](8,h,t.f.truck.errors)),s["\u0275\u0275advance"](5),s["\u0275\u0275property"]("ngClass",s["\u0275\u0275pureFunction1"](10,h,t.f.fromDate.errors)),s["\u0275\u0275advance"](9),s["\u0275\u0275property"]("ngClass",s["\u0275\u0275pureFunction1"](12,h,t.f.fromDate.errors)),s["\u0275\u0275advance"](11),s["\u0275\u0275property"]("ngIf",t.truckLedgers),s["\u0275\u0275advance"](1),s["\u0275\u0275property"]("ngIf",t.showProgress))},directives:[a["\u0275angular_packages_forms_forms_y"],a.NgControlStatusGroup,a.FormGroupDirective,m.a,a.NgControlStatus,a.FormControlName,a.RequiredValidator,r.n,c.l,a.DefaultValueAccessor,r.p,r.o,c.o,u.a],pipes:[r.f],styles:[".dropdown-menu.show[_ngcontent-%COMP%]{transform:translateY(33px)!important;will-change:auto!important}.justify-content-space-between[_ngcontent-%COMP%]{width:100%;justify-content:space-between}.font1em[_ngcontent-%COMP%]{font-size:1em}"]}),e}()}],S=function(){function e(){}return e.\u0275mod=s["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=s["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[o.l.forChild(v)],o.l]}),e}(),b=n("jgPy");n.d(t,"TruckLedgerModule",(function(){return y}));var y=function(){function e(){}return e.\u0275mod=s["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=s["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[r.c,S,c.h,m.b,a.FormsModule,a.ReactiveFormsModule,c.n,b.a]]}),e}()},kJ0Q:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var r,o=n("MnXN"),a=n("TYT/"),i=(r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),l=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.DELIMITER="/",t}return i(t,e),t.prototype.fromModel=function(e){if(e){var t=e.split(this.DELIMITER);return{month:parseInt(t[0],10),day:parseInt(t[1],10),year:parseInt(t[2],10)}}return null},t.prototype.toModel=function(e){return e?e.month+this.DELIMITER+e.day+this.DELIMITER+e.year:null},t.\u0275prov=a["\u0275\u0275defineInjectable"]({token:t,factory:t.\u0275fac=function(e){return c(e||t)}}),t}(o.g),c=a["\u0275\u0275getInheritedFactory"](l)}}]);