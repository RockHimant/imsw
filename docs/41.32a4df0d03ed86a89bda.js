(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{"JC+x":function(e,t,n){"use strict";n.r(t);var r=n("Valr"),o=n("DUip"),a=n("Ujtm"),l=n("cUzu"),i=n("rXAn"),s=n("TYT/"),m=n("QJY3"),p=n("1PnN"),c=n("MnXN"),d=n("3rkx");function u(e,t){1&e&&(s["\u0275\u0275elementStart"](0,"span"),s["\u0275\u0275element"](1,"i",23),s["\u0275\u0275elementEnd"]())}function f(e,t){if(1&e&&(s["\u0275\u0275elementStart"](0,"tr"),s["\u0275\u0275elementStart"](1,"td"),s["\u0275\u0275text"](2),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](3,"td"),s["\u0275\u0275text"](4),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](5,"td"),s["\u0275\u0275text"](6),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](7,"td"),s["\u0275\u0275text"](8),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](9,"td"),s["\u0275\u0275text"](10),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](11,"td"),s["\u0275\u0275text"](12),s["\u0275\u0275pipe"](13,"date"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](14,"td"),s["\u0275\u0275template"](15,u,2,0,"span",16),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"]()),2&e){var n=t.$implicit,r=t.index;s["\u0275\u0275advance"](2),s["\u0275\u0275textInterpolate1"](" ",r+1," "),s["\u0275\u0275advance"](2),s["\u0275\u0275textInterpolate1"](" ",n.name," "),s["\u0275\u0275advance"](2),s["\u0275\u0275textInterpolate1"](" ",n.templateName," "),s["\u0275\u0275advance"](2),s["\u0275\u0275textInterpolate1"](" ",n.format," "),s["\u0275\u0275advance"](2),s["\u0275\u0275textInterpolate1"](" ",n.status," "),s["\u0275\u0275advance"](2),s["\u0275\u0275textInterpolate1"](" ",s["\u0275\u0275pipeBind1"](13,7,n.generatedOn)," "),s["\u0275\u0275advance"](3),s["\u0275\u0275property"]("ngIf","SUCCESS"==n.status)}}function g(e,t){if(1&e){var n=s["\u0275\u0275getCurrentView"]();s["\u0275\u0275elementStart"](0,"div",17),s["\u0275\u0275elementStart"](1,"table",18),s["\u0275\u0275elementStart"](2,"thead"),s["\u0275\u0275elementStart"](3,"tr"),s["\u0275\u0275elementStart"](4,"th",19),s["\u0275\u0275text"](5,"#"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](6,"th",19),s["\u0275\u0275text"](7,"Reference"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](8,"th",19),s["\u0275\u0275text"](9,"Report type"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](10,"th",19),s["\u0275\u0275text"](11,"Format"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](12,"th",19),s["\u0275\u0275text"](13,"Status"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](14,"th",19),s["\u0275\u0275text"](15,"Generated on"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](16,"th",19),s["\u0275\u0275text"](17,"Action"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](18,"tbody"),s["\u0275\u0275template"](19,f,16,9,"tr",20),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275element"](20,"div",2),s["\u0275\u0275elementStart"](21,"div",21),s["\u0275\u0275elementStart"](22,"ngb-pagination",22),s["\u0275\u0275listener"]("pageChange",(function(e){return s["\u0275\u0275restoreView"](n),s["\u0275\u0275nextContext"]().page=e}))("pageChange",(function(e){return s["\u0275\u0275restoreView"](n),s["\u0275\u0275nextContext"]().getPageFromService(e)})),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"]()}if(2&e){var r=s["\u0275\u0275nextContext"]();s["\u0275\u0275advance"](19),s["\u0275\u0275property"]("ngForOf",r.reports),s["\u0275\u0275advance"](3),s["\u0275\u0275property"]("collectionSize",r.collectionSize)("page",r.page)("pageSize",r.pageSize)("maxSize",4)("ellipses",!0)("boundaryLinks",!0)}}function S(e,t){if(1&e&&(s["\u0275\u0275elementStart"](0,"div"),s["\u0275\u0275element"](1,"app-spinner-wrapper",24),s["\u0275\u0275elementEnd"]()),2&e){var n=s["\u0275\u0275nextContext"]();s["\u0275\u0275advance"](1),s["\u0275\u0275property"]("showSpinner",n.showProgress)}}var h=function(){return{"w-100":!0}},v=[{path:"",component:function(){function e(e,t){this.fb=e,this.reportService=t,this.reports=[],this.formats=[{value:"XLS",display:"XLS"},{value:"PDF",display:"PDF"},{value:"DOC",display:"DOC"},{value:"HTML",display:"HTML"}],this.showProgress=!1,this.page=1,this.pageSize=8}return e.prototype.ngOnInit=function(){this.setUpForm(),this.loadGeneratedReports()},e.prototype.setUpForm=function(){this.genReportsForm=this.fb.group({format:null,reportName:null,reportType:null})},e.prototype.loadGeneratedReports=function(){var e=this;this.showProgress=!0,this.reportService.getGeneratedReports(this.page-1,this.pageSize).subscribe((function(t){e.reports=t.content,e.collectionSize=t.totalElements,e.showProgress=!1}),(function(t){e.showProgress=!1}))},Object.defineProperty(e.prototype,"f",{get:function(){return this.genReportsForm.controls},enumerable:!0,configurable:!0}),e.prototype.performAdvancedSearch=function(){var e=this;this.showProgress=!0;var t=this.genReportsForm.value;if(t){console.log(t);var n={params:(new l.f).set("format",t.format?t.format:"").set("reporName",t.reportName?t.reportName:"").set("reportType",t.reportType?t.reportType:"")};this.reportService.searchReports(0,8,n).subscribe((function(t){e.reports=t.content,e.collectionSize=t.totalElements,e.showProgress=!1}),(function(t){console.log(t.error),e.showProgress=!1}))}},e.prototype.getPageFromService=function(e){var t=this;this.showProgress=!0;var n=this.genReportsForm.value,r={params:(new l.f).set("format",n.format?n.format:"").set("reporName",n.reporName?n.reporName:"").set("reportType",n.toDate?n.toDate.toString():"")};this.reportService.searchReports(e-1,this.pageSize,r).subscribe((function(e){t.reports=e.content,t.collectionSize=e.totalElements,t.showProgress=!1}),(function(e){console.log(e.error),t.showProgress=!1}))},e.prototype.clear=function(){this.genReportsForm.get("format").setValue(null),this.genReportsForm.get("reporName").setValue(null),this.genReportsForm.get("reportType").setValue(null)},e.\u0275fac=function(t){return new(t||e)(s["\u0275\u0275directiveInject"](m.FormBuilder),s["\u0275\u0275directiveInject"](a.a))},e.\u0275cmp=s["\u0275\u0275defineComponent"]({type:e,selectors:[["app-gen-reports"]],decls:30,vars:7,consts:[[1,""],[1,"breadcrumb"],[1,"separator-breadcrumb","border-top"],[1,"card","card-body","row","no-margin"],[3,"formGroup"],[1,"form-group","row","space-between"],[1,"col-3","p-1"],["type","text","formControlName","reportName",1,"form-control"],[1,"input-group"],["type","text","formControlName","reportType",1,"form-control"],["bindLabel","display","bindValue","value","placeholder","Select format","formControlName","format",3,"items","multiple","ngClass"],[1,"col-3","p-1","float-right","d-flex","align-items-center","mt-4"],[1,"btn","btn-primary",3,"click"],[1,"btn","ml-2",3,"click"],[1,"row","no-margin","mt-3"],["class","card card-body",4,"ngIf"],[4,"ngIf"],[1,"card","card-body"],[1,"table","table-striped"],["scope","col"],[4,"ngFor","ngForOf"],[1,"row","no-margin","pagination-div","border-rightr","justify-content-center"],["aria-label","Default pagination",3,"collectionSize","page","pageSize","maxSize","ellipses","boundaryLinks","pageChange"],[1,"fa","fa-download"],[3,"showSpinner"]],template:function(e,t){1&e&&(s["\u0275\u0275elementStart"](0,"div",0),s["\u0275\u0275elementStart"](1,"div",1),s["\u0275\u0275elementStart"](2,"h1"),s["\u0275\u0275text"](3,"Generated reports"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275element"](4,"div",2),s["\u0275\u0275elementStart"](5,"div",3),s["\u0275\u0275elementStart"](6,"form",4),s["\u0275\u0275elementStart"](7,"div",5),s["\u0275\u0275elementStart"](8,"div",6),s["\u0275\u0275elementStart"](9,"label"),s["\u0275\u0275text"](10,"Report name"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275element"](11,"input",7),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](12,"div",6),s["\u0275\u0275elementStart"](13,"label"),s["\u0275\u0275text"](14,"Report type"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](15,"div",8),s["\u0275\u0275element"](16,"input",9),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](17,"div",6),s["\u0275\u0275elementStart"](18,"label"),s["\u0275\u0275text"](19,"Format"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](20,"div",8),s["\u0275\u0275element"](21,"ng-select",10),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](22,"div",11),s["\u0275\u0275elementStart"](23,"button",12),s["\u0275\u0275listener"]("click",(function(){return t.performAdvancedSearch()})),s["\u0275\u0275text"](24,"Search"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](25,"button",13),s["\u0275\u0275listener"]("click",(function(){return t.clear()})),s["\u0275\u0275text"](26,"Clear"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](27,"div",14),s["\u0275\u0275template"](28,g,23,7,"div",15),s["\u0275\u0275elementEnd"](),s["\u0275\u0275template"](29,S,2,1,"div",16),s["\u0275\u0275elementEnd"]()),2&e&&(s["\u0275\u0275advance"](6),s["\u0275\u0275property"]("formGroup",t.genReportsForm),s["\u0275\u0275advance"](15),s["\u0275\u0275property"]("items",t.formats)("multiple",!1)("ngClass",s["\u0275\u0275pureFunction0"](6,h)),s["\u0275\u0275advance"](7),s["\u0275\u0275property"]("ngIf",t.reports),s["\u0275\u0275advance"](1),s["\u0275\u0275property"]("ngIf",t.showProgress))},directives:[m["\u0275angular_packages_forms_forms_y"],m.NgControlStatusGroup,m.FormGroupDirective,m.DefaultValueAccessor,m.NgControlStatus,m.FormControlName,p.a,r.n,r.p,r.o,c.o,d.a],pipes:[r.f],styles:[".dropdown-menu.show[_ngcontent-%COMP%]{transform:translateY(33px)!important;will-change:auto!important}.justify-content-space-between[_ngcontent-%COMP%]{width:100%;justify-content:space-between}.font1em[_ngcontent-%COMP%]{font-size:1em}"],data:{animation:[i.a]}}),e}()}],b=function(){function e(){}return e.\u0275mod=s["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=s["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[o.l.forChild(v)],o.l]}),e}(),y=n("jgPy"),E=n("oOf3");n.d(t,"GenReportsModule",(function(){return x}));var x=function(){function e(){}return e.\u0275mod=s["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=s["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[r.c,b,p.b,m.FormsModule,m.ReactiveFormsModule,c.n,y.a,E.a]]}),e}()},rXAn:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n("2WDa"),o=Object(r.f)([Object(r.j)({opacity:"{{opacity}}",transform:"scale({{scale}}) translate3d({{x}}, {{y}}, {{z}})"}),Object(r.e)("{{duration}} {{delay}} cubic-bezier(0.0, 0.0, 0.2, 1)",Object(r.j)("*"))],{params:{duration:"200ms",delay:"0ms",opacity:"0",scale:"1",x:"0",y:"0",z:"0"}}),a=[Object(r.l)("animate",[Object(r.k)("void => *",[Object(r.m)(o)])]),Object(r.l)("fadeInOut",[Object(r.i)("0",Object(r.j)({opacity:0,display:"none"})),Object(r.i)("1",Object(r.j)({opacity:1,display:"block"})),Object(r.k)("0 => 1",Object(r.e)("300ms")),Object(r.k)("1 => 0",Object(r.e)("300ms"))])]}}]);