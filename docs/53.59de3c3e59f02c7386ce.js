(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{"JC+x":function(e,t,n){"use strict";n.r(t);var r=n("Valr"),o=n("DUip"),a=n("Ujtm"),l=n("cUzu"),i=n("rXAn"),m=n("TYT/"),p=n("QJY3"),s=n("1PnN"),c=n("MnXN"),d=n("3rkx");function u(e,t){1&e&&(m["\u0275\u0275elementStart"](0,"span"),m["\u0275\u0275element"](1,"i",23),m["\u0275\u0275elementEnd"]())}function f(e,t){if(1&e&&(m["\u0275\u0275elementStart"](0,"tr"),m["\u0275\u0275elementStart"](1,"td"),m["\u0275\u0275text"](2),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](3,"td"),m["\u0275\u0275text"](4),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](5,"td"),m["\u0275\u0275text"](6),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](7,"td"),m["\u0275\u0275text"](8),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](9,"td"),m["\u0275\u0275text"](10),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](11,"td"),m["\u0275\u0275text"](12),m["\u0275\u0275pipe"](13,"date"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](14,"td"),m["\u0275\u0275template"](15,u,2,0,"span",16),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"]()),2&e){var n=t.$implicit,r=t.index;m["\u0275\u0275advance"](2),m["\u0275\u0275textInterpolate1"](" ",r+1," "),m["\u0275\u0275advance"](2),m["\u0275\u0275textInterpolate1"](" ",n.name," "),m["\u0275\u0275advance"](2),m["\u0275\u0275textInterpolate1"](" ",n.templateName," "),m["\u0275\u0275advance"](2),m["\u0275\u0275textInterpolate1"](" ",n.format," "),m["\u0275\u0275advance"](2),m["\u0275\u0275textInterpolate1"](" ",n.status," "),m["\u0275\u0275advance"](2),m["\u0275\u0275textInterpolate1"](" ",m["\u0275\u0275pipeBind1"](13,7,n.generatedOn)," "),m["\u0275\u0275advance"](3),m["\u0275\u0275property"]("ngIf","SUCCESS"==n.status)}}function g(e,t){if(1&e){var n=m["\u0275\u0275getCurrentView"]();m["\u0275\u0275elementStart"](0,"div",17),m["\u0275\u0275elementStart"](1,"table",18),m["\u0275\u0275elementStart"](2,"thead"),m["\u0275\u0275elementStart"](3,"tr"),m["\u0275\u0275elementStart"](4,"th",19),m["\u0275\u0275text"](5,"#"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](6,"th",19),m["\u0275\u0275text"](7,"Reference"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](8,"th",19),m["\u0275\u0275text"](9,"Report type"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](10,"th",19),m["\u0275\u0275text"](11,"Format"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](12,"th",19),m["\u0275\u0275text"](13,"Status"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](14,"th",19),m["\u0275\u0275text"](15,"Generated on"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](16,"th",19),m["\u0275\u0275text"](17,"Action"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](18,"tbody"),m["\u0275\u0275template"](19,f,16,9,"tr",20),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275element"](20,"div",2),m["\u0275\u0275elementStart"](21,"div",21),m["\u0275\u0275elementStart"](22,"ngb-pagination",22),m["\u0275\u0275listener"]("pageChange",(function(e){return m["\u0275\u0275restoreView"](n),m["\u0275\u0275nextContext"]().page=e}))("pageChange",(function(e){return m["\u0275\u0275restoreView"](n),m["\u0275\u0275nextContext"]().getPageFromService(e)})),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"]()}if(2&e){var r=m["\u0275\u0275nextContext"]();m["\u0275\u0275advance"](19),m["\u0275\u0275property"]("ngForOf",r.reports),m["\u0275\u0275advance"](3),m["\u0275\u0275property"]("collectionSize",r.collectionSize)("page",r.page)("pageSize",r.pageSize)("maxSize",4)("ellipses",!0)("boundaryLinks",!0)}}function S(e,t){if(1&e&&(m["\u0275\u0275elementStart"](0,"div"),m["\u0275\u0275element"](1,"app-spinner-wrapper",24),m["\u0275\u0275elementEnd"]()),2&e){var n=m["\u0275\u0275nextContext"]();m["\u0275\u0275advance"](1),m["\u0275\u0275property"]("showSpinner",n.showProgress)}}var h=function(){return{"w-100":!0}},v=[{path:"",component:function(){function e(e,t){this.fb=e,this.reportService=t,this.reports=[],this.formats=[{value:"XLS",display:"XLS"},{value:"PDF",display:"PDF"},{value:"DOC",display:"DOC"},{value:"HTML",display:"HTML"}],this.showProgress=!1,this.page=1,this.pageSize=8}return e.prototype.ngOnInit=function(){this.setUpForm(),this.loadGeneratedReports()},e.prototype.setUpForm=function(){this.genReportsForm=this.fb.group({format:null,reportName:null,reportType:null})},e.prototype.loadGeneratedReports=function(){var e=this;this.showProgress=!0,this.reportService.getGeneratedReports(this.page-1,this.pageSize).subscribe((function(t){e.reports=t.content,e.collectionSize=t.totalElements,e.showProgress=!1}),(function(t){e.showProgress=!1}))},Object.defineProperty(e.prototype,"f",{get:function(){return this.genReportsForm.controls},enumerable:!0,configurable:!0}),e.prototype.performAdvancedSearch=function(){var e=this;this.showProgress=!0;var t=this.genReportsForm.value;if(t){console.log(t);var n={params:(new l.f).set("format",t.format?t.format:"").set("reporName",t.reportName?t.reportName:"").set("reportType",t.reportType?t.reportType:"")};this.reportService.searchReports(0,8,n).subscribe((function(t){e.reports=t.content,e.collectionSize=t.totalElements,e.showProgress=!1}),(function(t){console.log(t.error),e.showProgress=!1}))}},e.prototype.getPageFromService=function(e){var t=this;this.showProgress=!0;var n=this.genReportsForm.value,r={params:(new l.f).set("format",n.format?n.format:"").set("reporName",n.reporName?n.reporName:"").set("reportType",n.toDate?n.toDate.toString():"")};this.reportService.searchReports(e-1,this.pageSize,r).subscribe((function(e){t.reports=e.content,t.collectionSize=e.totalElements,t.showProgress=!1}),(function(e){console.log(e.error),t.showProgress=!1}))},e.prototype.clear=function(){this.genReportsForm.get("format").setValue(null),this.genReportsForm.get("reporName").setValue(null),this.genReportsForm.get("reportType").setValue(null)},e.\u0275fac=function(t){return new(t||e)(m["\u0275\u0275directiveInject"](p.FormBuilder),m["\u0275\u0275directiveInject"](a.a))},e.\u0275cmp=m["\u0275\u0275defineComponent"]({type:e,selectors:[["app-gen-reports"]],decls:30,vars:7,consts:[[1,""],[1,"breadcrumb"],[1,"separator-breadcrumb","border-top"],[1,"card","card-body","row","no-margin"],[3,"formGroup"],[1,"form-group","row","space-between"],[1,"col-3","p-1"],["type","text","formControlName","reportName",1,"form-control"],[1,"input-group"],["type","text","formControlName","reportType",1,"form-control"],["bindLabel","display","bindValue","value","placeholder","Select format","formControlName","format",3,"items","multiple","ngClass"],[1,"col-3","p-1","float-right","d-flex","align-items-center","mt-4"],[1,"btn","btn-primary",3,"click"],[1,"btn","ml-2",3,"click"],[1,"row","no-margin","mt-3"],["class","card card-body",4,"ngIf"],[4,"ngIf"],[1,"card","card-body"],[1,"table","table-striped"],["scope","col"],[4,"ngFor","ngForOf"],[1,"row","no-margin","pagination-div","border-rightr","justify-content-center"],["aria-label","Default pagination",3,"collectionSize","page","pageSize","maxSize","ellipses","boundaryLinks","pageChange"],[1,"fa","fa-download"],[3,"showSpinner"]],template:function(e,t){1&e&&(m["\u0275\u0275elementStart"](0,"div",0),m["\u0275\u0275elementStart"](1,"div",1),m["\u0275\u0275elementStart"](2,"h1"),m["\u0275\u0275text"](3,"Generated reports"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275element"](4,"div",2),m["\u0275\u0275elementStart"](5,"div",3),m["\u0275\u0275elementStart"](6,"form",4),m["\u0275\u0275elementStart"](7,"div",5),m["\u0275\u0275elementStart"](8,"div",6),m["\u0275\u0275elementStart"](9,"label"),m["\u0275\u0275text"](10,"Report name"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275element"](11,"input",7),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](12,"div",6),m["\u0275\u0275elementStart"](13,"label"),m["\u0275\u0275text"](14,"Report type"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](15,"div",8),m["\u0275\u0275element"](16,"input",9),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](17,"div",6),m["\u0275\u0275elementStart"](18,"label"),m["\u0275\u0275text"](19,"Format"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](20,"div",8),m["\u0275\u0275element"](21,"ng-select",10),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](22,"div",11),m["\u0275\u0275elementStart"](23,"button",12),m["\u0275\u0275listener"]("click",(function(){return t.performAdvancedSearch()})),m["\u0275\u0275text"](24,"Search"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](25,"button",13),m["\u0275\u0275listener"]("click",(function(){return t.clear()})),m["\u0275\u0275text"](26,"Clear"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](27,"div",14),m["\u0275\u0275template"](28,g,23,7,"div",15),m["\u0275\u0275elementEnd"](),m["\u0275\u0275template"](29,S,2,1,"div",16),m["\u0275\u0275elementEnd"]()),2&e&&(m["\u0275\u0275advance"](6),m["\u0275\u0275property"]("formGroup",t.genReportsForm),m["\u0275\u0275advance"](15),m["\u0275\u0275property"]("items",t.formats)("multiple",!1)("ngClass",m["\u0275\u0275pureFunction0"](6,h)),m["\u0275\u0275advance"](7),m["\u0275\u0275property"]("ngIf",t.reports),m["\u0275\u0275advance"](1),m["\u0275\u0275property"]("ngIf",t.showProgress))},directives:[p["\u0275angular_packages_forms_forms_y"],p.NgControlStatusGroup,p.FormGroupDirective,p.DefaultValueAccessor,p.NgControlStatus,p.FormControlName,s.a,r.n,r.p,r.o,c.o,d.a],pipes:[r.f],styles:[".dropdown-menu.show[_ngcontent-%COMP%]{transform:translateY(33px)!important;will-change:auto!important}.justify-content-space-between[_ngcontent-%COMP%]{width:100%;justify-content:space-between}.font1em[_ngcontent-%COMP%]{font-size:1em}"],data:{animation:[i.a]}}),e}()}],y=function(){function e(){}return e.\u0275mod=m["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=m["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[o.l.forChild(v)],o.l]}),e}(),E=n("jgPy"),b=n("oOf3");n.d(t,"GenReportsModule",(function(){return w}));var w=function(){function e(){}return e.\u0275mod=m["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=m["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[r.c,y,s.b,p.FormsModule,p.ReactiveFormsModule,c.n,E.a,b.a]]}),e}()}}]);