(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{EbFV:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n("0o5J"),o=n("TYT/"),i=function(){function e(e){this.webApiProvier=e}return e.prototype.getProductTypes=function(){return this.webApiProvier.get("product/v1/list",!0)},e.\u0275fac=function(t){return new(t||e)(o["\u0275\u0275inject"](r.c))},e.\u0275prov=o["\u0275\u0275defineInjectable"]({token:e,factory:e.\u0275fac,providedIn:"root"}),e}()},H2Tg:function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));var r=n("Valr"),o=n("jgPy"),i=n("QJY3"),l=n("oOf3"),a=n("X2FZ"),c=n("MnXN"),s=n("TYT/"),p=function(){function e(){}return e.\u0275mod=s["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=s["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[r.c,o.a,i.FormsModule,i.ReactiveFormsModule,l.a,a.e,c.n]]}),e}()},"Jq/4":function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n("26FU"),o=n("67Y/"),i=n("0o5J"),l=n("TYT/"),a=n("qT8p"),c=function(){function e(e,t){this.toastr=e,this.webApiProvider=t,this.onDepotSelected=new r.a(null),this.onAdvancedSearchApplied=new r.a(null),this.onClearSearchApplied=new r.a(null)}return e.prototype.loadDepotData=function(e,t){return this.loadDepotDataNoPagination(e,t)},e.prototype.loadDepotDataNoPagination=function(e,t){return this.getAllDepotsNoPagination()},e.prototype.create=function(e){return this.webApiProvider.post("depot/v1/",e,!0)},e.prototype.update=function(e){return this.webApiProvider.put("depot/v1/"+e.id,e)},e.prototype.delete=function(e){return this.webApiProvider.delete("depot/v1/"+e,!0)},e.prototype.getAllDepots=function(e,t){return this.webApiProvider.get("depot/v1/allDepots/",!0)},e.prototype.getAllDepotsPaginated=function(e,t){return this.webApiProvider.get("depot/v1/list/"+e+"/"+t,!0)},e.prototype.getAllDepotsNoPagination=function(){return this.webApiProvider.get("depot/v1/allDepots",!0)},e.prototype.getAllTanksForDepot=function(e){return this.webApiProvider.post("depot/v1/depottanks/"+e,null,!0)},e.prototype.selectDepot=function(e){this.loadingCollection=!0,this.loadingData=!0,this.delay(500),this.onDepotSelected.next({depot:e}),this.loadingData=!1},e.prototype.delay=function(e){return new Promise((function(t){return setTimeout(t,e)}))},e.prototype.loadDepotById=function(e){var t=this;return this.loadingData=!0,this.getDepotById(e).pipe(Object(o.a)((function(e){return t.onDepotSelected.next({depot:e}),t.loadingData=!1,e})))},e.prototype.getDepotById=function(e){return this.webApiProvider.get("depot/v1/"+e)},e.prototype.performAdvancedSearch=function(e){var t=this;this.loadingCollection=!0,this.webApiProvider.get("depot/v1/list/0/6"+e,!0).subscribe((function(e){e&&(t.onAdvancedSearchApplied.next({depots:e}),t.loadingCollection=!1)}),(function(e){t.toastr.error(e.errorMessage,"Failed"),t.loadingCollection=!1}))},e.prototype.performAdvancedSearchPost=function(e){var t=this;this.loadingCollection=!0,this.webApiProvider.postwithSearchParam("depot/v1/depots",e.params).subscribe((function(e){e&&(t.onAdvancedSearchApplied.next({depots:e}),t.loadingCollection=!1)}),(function(e){t.toastr.error(e.errorMessage,"Failed"),t.loadingCollection=!1}))},e.prototype.getProductsForDepot=function(e){return this.webApiProvider.post("depot/v1/depotprods?depotId="+e,null,!0)},e.\u0275fac=function(t){return new(t||e)(l["\u0275\u0275inject"](a.b),l["\u0275\u0275inject"](i.c))},e.\u0275prov=l["\u0275\u0275defineInjectable"]({token:e,factory:e.\u0275fac,providedIn:"root"}),e}()},hxnD:function(e,t,n){"use strict";n.r(t);var r=n("Valr"),o=n("DUip"),i=n("TYT/"),l=n("goBR"),a=n("ceE6"),c=n("Ujtm"),s=n("EbFV"),p=n("oR8h"),d=n("Jq/4"),u=n("MnXN"),m=n("kJ0Q"),f=n("QJY3"),v=n("qT8p"),h=n("1PnN"),g=function(){return{"w-100":!0}},b=function(){function e(e,t,n,r,o,i,l){this.fb=e,this.router=t,this.clientService=n,this.depotService=r,this.service=o,this.toastr=i,this.productService=l,this.templateName="DailyDispSummaryReport",this.formats=[{value:"XLS",display:"XLS"},{value:"PDF",display:"PDF"},{value:"DOC",display:"DOC"},{value:"HTML",display:"HTML"}],this.setForm()}return e.prototype.ngOnInit=function(){this.loadBasicDetails()},e.prototype.setForm=function(){this.dispatchForm=this.fb.group({clientId:null,productId:null,depotId:null,date:null,userReference:null,format:null})},e.prototype.reset=function(){this.dispatchForm.controls.clientId.setValue(null),this.dispatchForm.controls.depotId.setValue(null),this.dispatchForm.controls.productId.setValue(null),this.dispatchForm.controls.date.setValue(""),this.dispatchForm.controls.userReference.setValue(""),this.dispatchForm.controls.format.setValue(null)},e.prototype.generate=function(){var e=this,t=this.dispatchForm.value;this.service.generateReport({format:t.format,userReference:t.userReference,templateName:this.templateName,params:{clientId:t.clientId,depotId:t.depotId,productId:t.productId,date:t.date}}).subscribe((function(t){e.toastr.success("Successfully generated the report","Success",{timeOut:4e3})}),(function(t){var n=JSON.parse(t.error);e.toastr.error(n.errorMessage,"Failed",{timeOut:4e3})}))},e.prototype.loadBasicDetails=function(){var e=this;this.clientService.getMainAndSubClientsNoPagination().subscribe((function(t){e.clients=t})),this.depotService.getAllDepotsNoPagination().subscribe((function(t){e.depots=t.data.depots})),this.productService.getProductTypes().subscribe((function(t){e.products=t}))},e.\u0275fac=function(t){return new(t||e)(i["\u0275\u0275directiveInject"](f.FormBuilder),i["\u0275\u0275directiveInject"](o.h),i["\u0275\u0275directiveInject"](p.a),i["\u0275\u0275directiveInject"](d.a),i["\u0275\u0275directiveInject"](c.a),i["\u0275\u0275directiveInject"](v.b),i["\u0275\u0275directiveInject"](s.a))},e.\u0275cmp=i["\u0275\u0275defineComponent"]({type:e,selectors:[["app-daily-disp-summary-report"]],features:[i["\u0275\u0275ProvidersFeature"]([{provide:u.g,useClass:m.a}])],decls:45,vars:17,consts:[[1,"row","p-5"],[1,"col-lg-6"],[3,"formGroup"],[1,"form-group","row"],["for","client",1,"col-md-6","col-form-label","required"],[1,"col-md-6","input-group"],["bindLabel","name","bindValue","id","placeholder","Select client","formControlName","clientId",3,"items","multiple","ngClass"],["for","depot",1,"col-md-6","col-form-label","required"],["bindLabel","name","bindValue","id","placeholder","Select depot","formControlName","depotId",3,"items","multiple","ngClass"],["bindLabel","name","bindValue","id","placeholder","Select product type","formControlName","productId",3,"items","multiple","ngClass"],["for","fromDate",1,"col-md-6","col-form-label","required"],[1,"col-md-6"],[1,"input-group"],["id","picker1","placeholder","yyyy-mm-dd","name","dp1","ngbDatepicker","","formControlName","date",1,"form-control"],["dp1","ngbDatepicker"],[1,"input-group-append"],["type","button",1,"btn","btn-secondary",3,"click"],[1,"icon-regular","i-Calendar-4"],["for","nameGenerated",1,"col-md-6","col-form-label","required"],["type","text","id","nameGenerated","formControlName","userReference",1,"form-control"],[1,"form-group","row","mb-5"],["for","formats",1,"col-md-6","col-form-label","required"],["bindLabel","display","bindValue","value","placeholder","Select format","formControlName","format","required","",3,"items","multiple","ngClass"],[1,"border-top","mb-5"],[1,"col-sm-10","btn-toolbar"],["type","submit",1,"btn","btn-primary",3,"click"],["type","button",1,"btn","btn-outline-secondary",3,"click"]],template:function(e,t){if(1&e){var n=i["\u0275\u0275getCurrentView"]();i["\u0275\u0275elementStart"](0,"div",0),i["\u0275\u0275elementStart"](1,"div",1),i["\u0275\u0275elementStart"](2,"form",2),i["\u0275\u0275elementStart"](3,"div",3),i["\u0275\u0275elementStart"](4,"label",4),i["\u0275\u0275text"](5,"Client"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](6,"div",5),i["\u0275\u0275element"](7,"ng-select",6),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](8,"div",3),i["\u0275\u0275elementStart"](9,"label",7),i["\u0275\u0275text"](10,"Depot"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](11,"div",5),i["\u0275\u0275element"](12,"ng-select",8),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](13,"div",3),i["\u0275\u0275elementStart"](14,"label",4),i["\u0275\u0275text"](15,"Product type"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](16,"div",5),i["\u0275\u0275element"](17,"ng-select",9),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](18,"div",3),i["\u0275\u0275elementStart"](19,"label",10),i["\u0275\u0275text"](20,"Date *"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](21,"div",11),i["\u0275\u0275elementStart"](22,"div",12),i["\u0275\u0275element"](23,"input",13,14),i["\u0275\u0275elementStart"](25,"div",15),i["\u0275\u0275elementStart"](26,"button",16),i["\u0275\u0275listener"]("click",(function(){return i["\u0275\u0275restoreView"](n),i["\u0275\u0275reference"](24).toggle()})),i["\u0275\u0275element"](27,"i",17),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](28,"div",3),i["\u0275\u0275elementStart"](29,"label",18),i["\u0275\u0275text"](30,"Name of the generated report *"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](31,"div",1),i["\u0275\u0275element"](32,"input",19),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](33,"div",20),i["\u0275\u0275elementStart"](34,"label",21),i["\u0275\u0275text"](35,"Format *"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](36,"div",5),i["\u0275\u0275element"](37,"ng-select",22),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275element"](38,"div",23),i["\u0275\u0275elementStart"](39,"div",3),i["\u0275\u0275elementStart"](40,"div",24),i["\u0275\u0275elementStart"](41,"button",25),i["\u0275\u0275listener"]("click",(function(){return t.generate()})),i["\u0275\u0275text"](42,"Generate"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](43,"button",26),i["\u0275\u0275listener"]("click",(function(){return t.reset()})),i["\u0275\u0275text"](44,"Reset"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"]()}2&e&&(i["\u0275\u0275advance"](2),i["\u0275\u0275property"]("formGroup",t.dispatchForm),i["\u0275\u0275advance"](5),i["\u0275\u0275property"]("items",t.clients)("multiple",!1)("ngClass",i["\u0275\u0275pureFunction0"](13,g)),i["\u0275\u0275advance"](5),i["\u0275\u0275property"]("items",t.depots)("multiple",!1)("ngClass",i["\u0275\u0275pureFunction0"](14,g)),i["\u0275\u0275advance"](5),i["\u0275\u0275property"]("items",t.products)("multiple",!1)("ngClass",i["\u0275\u0275pureFunction0"](15,g)),i["\u0275\u0275advance"](20),i["\u0275\u0275property"]("items",t.formats)("multiple",!1)("ngClass",i["\u0275\u0275pureFunction0"](16,g)))},directives:[f["\u0275angular_packages_forms_forms_y"],f.NgControlStatusGroup,f.FormGroupDirective,h.a,f.NgControlStatus,f.FormControlName,r.n,u.l,f.DefaultValueAccessor,f.RequiredValidator],styles:[".btn-toolbar[_ngcontent-%COMP%] > .btn[_ngcontent-%COMP%] + .btn[_ngcontent-%COMP%]{margin-left:10px}.cover-spin[_ngcontent-%COMP%]{position:fixed;width:100%;left:0;right:0;top:0;bottom:0;background-color:hsla(0,0%,100%,.7);z-index:9999}.show[_ngcontent-%COMP%]{display:block!important}.font1em[_ngcontent-%COMP%]{font-size:1em}"]}),e}(),y=function(){return{"w-100":!0}},S=function(){function e(e,t,n,r){this.fb=e,this.service=t,this.toastr=n,this.router=r,this.templateName="BowserSalesReport",this.formats=[{value:"XLS",display:"XLS"},{value:"PDF",display:"PDF"}],this.setForm()}return e.prototype.ngOnInit=function(){},e.prototype.setForm=function(){this.salesForm=this.fb.group({fromDate:null,toDate:null,userReference:null,format:null})},e.prototype.reset=function(){this.salesForm.controls.fromDate.setValue(""),this.salesForm.controls.toDate.setValue(""),this.salesForm.controls.userReference.setValue(""),this.salesForm.controls.format.setValue(null)},e.prototype.generate=function(){var e=this,t=this.salesForm.value;this.service.generateReport({format:t.format,userReference:t.userReference,templateName:this.templateName,params:{fromDate:t.fromDate,toDate:t.toDate}}).subscribe((function(t){e.toastr.success("Successfully generated the report","Success",{timeOut:4e3})}),(function(t){var n=JSON.parse(t.error);e.toastr.error(n.errorMessage,"Failed",{timeOut:4e3})}))},e.\u0275fac=function(t){return new(t||e)(i["\u0275\u0275directiveInject"](f.FormBuilder),i["\u0275\u0275directiveInject"](c.a),i["\u0275\u0275directiveInject"](v.b),i["\u0275\u0275directiveInject"](o.h))},e.\u0275cmp=i["\u0275\u0275defineComponent"]({type:e,selectors:[["app-browser-sales-report-report"]],features:[i["\u0275\u0275ProvidersFeature"]([{provide:u.g,useClass:m.a}])],decls:40,vars:5,consts:[[1,"row","p-5"],[1,"col-lg-6"],[3,"formGroup"],[1,"form-group","row"],["for","fromDate",1,"col-md-6","col-form-label","required"],[1,"col-md-6"],[1,"input-group"],["id","picker1","placeholder","yyyy-mm-dd","name","dp1","ngbDatepicker","","formControlName","fromDate",1,"form-control"],["dp1","ngbDatepicker"],[1,"input-group-append"],["type","button",1,"btn","btn-secondary",3,"click"],[1,"icon-regular","i-Calendar-4"],["for","toDate",1,"col-md-6","col-form-label","required"],["id","picker2","placeholder","yyyy-mm-dd","name","dp2","ngbDatepicker","","formControlName","toDate",1,"form-control"],["dp2","ngbDatepicker"],["for","nameGenerated",1,"col-md-6","col-form-label","required"],["type","text","id","nameGenerated","formControlName","userReference",1,"form-control"],[1,"form-group","row","mb-5"],["for","formats",1,"col-md-6","col-form-label","required"],[1,"col-md-6","input-group"],["bindLabel","display","bindValue","value","placeholder","Select format","formControlName","format","required","",3,"items","multiple","ngClass"],[1,"border-top","mb-5"],[1,"col-sm-10","btn-toolbar"],["type","submit",1,"btn","btn-primary",3,"click"],["type","button",1,"btn","btn-outline-secondary",3,"click"]],template:function(e,t){if(1&e){var n=i["\u0275\u0275getCurrentView"]();i["\u0275\u0275elementStart"](0,"div",0),i["\u0275\u0275elementStart"](1,"div",1),i["\u0275\u0275elementStart"](2,"form",2),i["\u0275\u0275elementStart"](3,"div",3),i["\u0275\u0275elementStart"](4,"label",4),i["\u0275\u0275text"](5,"From date *"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](6,"div",5),i["\u0275\u0275elementStart"](7,"div",6),i["\u0275\u0275element"](8,"input",7,8),i["\u0275\u0275elementStart"](10,"div",9),i["\u0275\u0275elementStart"](11,"button",10),i["\u0275\u0275listener"]("click",(function(){return i["\u0275\u0275restoreView"](n),i["\u0275\u0275reference"](9).toggle()})),i["\u0275\u0275element"](12,"i",11),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](13,"div",3),i["\u0275\u0275elementStart"](14,"label",12),i["\u0275\u0275text"](15,"To date *"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](16,"div",5),i["\u0275\u0275elementStart"](17,"div",6),i["\u0275\u0275element"](18,"input",13,14),i["\u0275\u0275elementStart"](20,"div",9),i["\u0275\u0275elementStart"](21,"button",10),i["\u0275\u0275listener"]("click",(function(){return i["\u0275\u0275restoreView"](n),i["\u0275\u0275reference"](19).toggle()})),i["\u0275\u0275element"](22,"i",11),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](23,"div",3),i["\u0275\u0275elementStart"](24,"label",15),i["\u0275\u0275text"](25,"Name of the generated report *"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](26,"div",1),i["\u0275\u0275element"](27,"input",16),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](28,"div",17),i["\u0275\u0275elementStart"](29,"label",18),i["\u0275\u0275text"](30,"Format *"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](31,"div",19),i["\u0275\u0275element"](32,"ng-select",20),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275element"](33,"div",21),i["\u0275\u0275elementStart"](34,"div",3),i["\u0275\u0275elementStart"](35,"div",22),i["\u0275\u0275elementStart"](36,"button",23),i["\u0275\u0275listener"]("click",(function(){return t.generate()})),i["\u0275\u0275text"](37,"Generate"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](38,"button",24),i["\u0275\u0275listener"]("click",(function(){return t.reset()})),i["\u0275\u0275text"](39,"Reset"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"]()}2&e&&(i["\u0275\u0275advance"](2),i["\u0275\u0275property"]("formGroup",t.salesForm),i["\u0275\u0275advance"](30),i["\u0275\u0275property"]("items",t.formats)("multiple",!1)("ngClass",i["\u0275\u0275pureFunction0"](4,y)))},directives:[f["\u0275angular_packages_forms_forms_y"],f.NgControlStatusGroup,f.FormGroupDirective,u.l,f.DefaultValueAccessor,f.NgControlStatus,f.FormControlName,h.a,f.RequiredValidator,r.n],styles:[".btn-toolbar[_ngcontent-%COMP%] > .btn[_ngcontent-%COMP%] + .btn[_ngcontent-%COMP%]{margin-left:10px}.cover-spin[_ngcontent-%COMP%]{position:fixed;width:100%;left:0;right:0;top:0;bottom:0;background-color:hsla(0,0%,100%,.7);z-index:9999}.show[_ngcontent-%COMP%]{display:block!important}.font1em[_ngcontent-%COMP%]{font-size:1em}"]}),e}(),C=function(){function e(e,t){this.resolver=e,this.reportService=t}return e.prototype.ngOnInit=function(){},e.prototype.ngAfterContentInit=function(){var e=this;this.templatedSelectedSub=this.reportService.onTemplateSelected.subscribe((function(t){if(e.reportHost.viewContainerRef.clear(),t){e.templateName=t.template.templateName;var n=void 0;switch(t.template.id){case 1:n=b;break;case 14:n=S}if(n){var r=e.resolver.resolveComponentFactory(n);e.reportHost.viewContainerRef.createComponent(r)}}}))},e.\u0275fac=function(t){return new(t||e)(i["\u0275\u0275directiveInject"](i.ComponentFactoryResolver),i["\u0275\u0275directiveInject"](c.a))},e.\u0275cmp=i["\u0275\u0275defineComponent"]({type:e,selectors:[["report-template-content"]],viewQuery:function(e,t){var n;1&e&&i["\u0275\u0275staticViewQuery"](a.a,!0),2&e&&i["\u0275\u0275queryRefresh"](n=i["\u0275\u0275loadQuery"]())&&(t.reportHost=n.first)},decls:9,vars:1,consts:[[1,"d-flex","pl-3","pr-3","pt-2","pb-2","box-shadow-1","chat-topbar","content-header"],["appSidebarToggler","company-sidebar",1,"link-icon","d-md-none"],[1,"icon-regular","i-Right","ml-0","mr-3"],[1,"d-flex","align-items-center","col-6"],[1,"m-0","text-title","text-16","flex-grow-1"],["clas","row"],["reportHostDirective",""]],template:function(e,t){1&e&&(i["\u0275\u0275elementStart"](0,"div"),i["\u0275\u0275elementStart"](1,"div",0),i["\u0275\u0275elementStart"](2,"a",1),i["\u0275\u0275element"](3,"i",2),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](4,"div",3),i["\u0275\u0275elementStart"](5,"p",4),i["\u0275\u0275text"](6),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](7,"div",5),i["\u0275\u0275element"](8,"ng-component",6),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"]()),2&e&&(i["\u0275\u0275advance"](6),i["\u0275\u0275textInterpolate"](t.templateName?t.templateName:""))},directives:[l.d,o.n,a.a],styles:[".content-header[_ngcontent-%COMP%]{background:#dee2e6!important;color:#fff!important}"]}),e}(),w=n("Gi3i"),E=n("3rkx");function D(e,t){if(1&e){var n=i["\u0275\u0275getCurrentView"]();i["\u0275\u0275elementStart"](0,"div",12),i["\u0275\u0275listener"]("click",(function(){i["\u0275\u0275restoreView"](n);var e=t.$implicit;return i["\u0275\u0275nextContext"]().selectTemplate(e)})),i["\u0275\u0275elementStart"](1,"div",13),i["\u0275\u0275elementStart"](2,"h6"),i["\u0275\u0275text"](3),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"]()}if(2&e){var r=t.$implicit;i["\u0275\u0275advance"](3),i["\u0275\u0275textInterpolate"](r.templateName)}}function P(e,t){1&e&&(i["\u0275\u0275elementStart"](0,"div"),i["\u0275\u0275element"](1,"app-spinner-wrapper",14),i["\u0275\u0275elementEnd"]()),2&e&&(i["\u0275\u0275advance"](1),i["\u0275\u0275property"]("showSpinner",!0))}var A=function(){function e(e,t,n,r,o){this.service=e,this.router=t,this.route=n,this.modalService=r,this.fb=o,this.selectedAction="All",this.loadingCollection=!1,this.advancedSearchApplied=!1,this.page=1,this.pageSize=8,this.searchControl=new f.FormControl}return e.prototype.ngOnInit=function(){var e=this;this.loadingCollection=!0,this.loadDataSub=this.service.loadTemplateData(this.page,this.pageSize).subscribe((function(t){e.templates=t.content,e.collectionSize=t.totalElements,e.loadingCollection=!1})),this.searchControl.valueChanges.pipe(Object(w.a)(200)).subscribe((function(t){e.filerData(t)}))},e.prototype.filerData=function(e){var t=this;this.loadingCollection=!0,this.service.performAdvancedSearch("?templateName="+e,this.page-1,this.pageSize).subscribe((function(e){t.templates=e.content,t.collectionSize=e.totalElements,t.loadingCollection=!1}),(function(e){JSON.parse(e.error)}))},e.prototype.selectTemplate=function(e){this.service.selectTemplate(e)},e.prototype.getPageFromService=function(e){var t=this;this.loadingCollection=!0,this.service.loadTemplateData(e,this.pageSize).subscribe((function(n){t.templates=n.content,t.collectionSize=n.totalElements,t.loadingCollection=!1,t.page=e}))},e.prototype.open=function(e){this.modalService.open(e,{ariaLabelledBy:"modal-basic-title"}).result.then((function(e){console.log(e)}),(function(e){console.log("Err!",e)}))},e.prototype.performAdvancedSearch=function(e){this.loadingCollection=!0,this.modalService.dismissAll("close clicked"),this.advancedSearchApplied=!0},e.prototype.clearSearchCriteria=function(){this.advancedSearchApplied=!1,this.filerData("")},e.\u0275fac=function(t){return new(t||e)(i["\u0275\u0275directiveInject"](c.a),i["\u0275\u0275directiveInject"](o.h),i["\u0275\u0275directiveInject"](o.a),i["\u0275\u0275directiveInject"](u.m),i["\u0275\u0275directiveInject"](f.FormBuilder))},e.\u0275cmp=i["\u0275\u0275defineComponent"]({type:e,selectors:[["report-template-left-pane"]],decls:12,vars:8,consts:[[1,"border-right"],[1,"pt-2","pb-2","pl-3","pr-3","d-flex","o-hidden","align-items-center","box-shadow-1","chat-topbar"],["appSidebarToggler","company-sidebar",1,"link-icon","d-md-none"],[1,"icon-regular","ml-0","mr-3","i-Left"],[1,"form-group","m-0","flex-grow-1"],["id","search","placeholder","Search template",1,"form-control","form-control-rounded",3,"formControl"],[1,"left-pane-container"],[1,"mt-3","pb-2","pl-3","pr-3","font-weight-bold","text-muted","border-bottom"],["class","p-3 pb-0 border-bottom align-items-center contact no-dot list-item",3,"click",4,"ngFor","ngForOf"],[1,"row","no-margin","pagination-div","card-footer","border-rightr"],["aria-label","Default pagination",3,"collectionSize","page","pageSize","maxSize","ellipses","pageChange"],[4,"ngIf"],[1,"p-3","pb-0","border-bottom","align-items-center","contact","no-dot","list-item",3,"click"],[1,"row","no-margin","mb-3"],[3,"showSpinner"]],template:function(e,t){1&e&&(i["\u0275\u0275elementStart"](0,"div",0),i["\u0275\u0275elementStart"](1,"div",1),i["\u0275\u0275elementStart"](2,"a",2),i["\u0275\u0275element"](3,"i",3),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](4,"div",4),i["\u0275\u0275element"](5,"input",5),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](6,"div",6),i["\u0275\u0275element"](7,"div",7),i["\u0275\u0275template"](8,D,4,1,"div",8),i["\u0275\u0275elementStart"](9,"div",9),i["\u0275\u0275elementStart"](10,"ngb-pagination",10),i["\u0275\u0275listener"]("pageChange",(function(e){return t.page=e}))("pageChange",(function(e){return t.getPageFromService(e)})),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275template"](11,P,2,1,"div",11),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"]()),2&e&&(i["\u0275\u0275advance"](5),i["\u0275\u0275property"]("formControl",t.searchControl),i["\u0275\u0275advance"](3),i["\u0275\u0275property"]("ngForOf",t.templates),i["\u0275\u0275advance"](2),i["\u0275\u0275property"]("collectionSize",t.collectionSize)("page",t.page)("pageSize",t.pageSize)("maxSize",2)("ellipses",!0),i["\u0275\u0275advance"](1),i["\u0275\u0275property"]("ngIf",t.loadingCollection))},directives:[l.d,f.DefaultValueAccessor,f.NgControlStatus,f.FormControlDirective,r.o,u.o,r.p,E.a],styles:[".no-dot[_ngcontent-%COMP%]:before{background:none!important}.dropdown-menu.show[_ngcontent-%COMP%]{transform:translateY(33px)!important}.btn-group[_ngcontent-%COMP%] > .btn[_ngcontent-%COMP%]{margin-left:5px}.show-on-top[_ngcontent-%COMP%]{z-index:1000;position:absolute;top:200px;left:80px}.left-pane-container[_ngcontent-%COMP%]{height:calc(100vh - 210px)}.pagination-div[_ngcontent-%COMP%]{position:absolute;bottom:0;align-items:center;justify-content:center;width:100%}.sidebar-container[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%]{bottom:0!important}"]}),e}(),I=[{path:"",component:function(){function e(){}return e.prototype.ngOnInit=function(){},e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=i["\u0275\u0275defineComponent"]({type:e,selectors:[["app-report-template"]],decls:8,vars:0,consts:[[1,"breadcrumb","space-between"],["appSidebarContainer","",1,"card","chat-sidebar-container"],["appSidebarContent","",1,"chat-content-wrap"],["appSidebar","company-sidebar",1,"chat-sidebar-wrap","bottom-0"]],template:function(e,t){1&e&&(i["\u0275\u0275elementStart"](0,"div",0),i["\u0275\u0275elementStart"](1,"h1"),i["\u0275\u0275text"](2,"Report Template"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](3,"div",1),i["\u0275\u0275elementStart"](4,"div",2),i["\u0275\u0275element"](5,"report-template-content"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](6,"div",3),i["\u0275\u0275element"](7,"report-template-left-pane"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"]())},directives:[l.a,l.b,C,l.c,A],styles:[""]}),e}()}],F=function(){function e(){}return e.\u0275mod=i["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=i["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[o.l.forChild(I)],o.l]}),e}(),x=n("h2Ha"),k=n("mnDI"),M=n("aYsj"),N=n("jASi"),O=n("H2Tg"),j=n("jgPy"),T=n("oOf3");n.d(t,"ReportTemplateModule",(function(){return _}));var _=function(){function e(){}return e.\u0275mod=i["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=i["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[r.c,F,x.b,k.a,M.a,f.FormsModule,u.n,f.ReactiveFormsModule,N.AppFormsModule,T.a,j.a,O.a]]}),e}()},kJ0Q:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r,o=n("MnXN"),i=n("TYT/"),l=(r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),a=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.DELIMITER="/",t}return l(t,e),t.prototype.fromModel=function(e){if(e){var t=e.split(this.DELIMITER);return{day:parseInt(t[0],10),month:parseInt(t[1],10),year:parseInt(t[2],10)}}return null},t.prototype.toModel=function(e){return e?e.day+this.DELIMITER+e.month+this.DELIMITER+e.year:null},t.\u0275prov=i["\u0275\u0275defineInjectable"]({token:t,factory:t.\u0275fac=function(e){return c(e||t)}}),t}(o.g),c=i["\u0275\u0275getInheritedFactory"](a)},oR8h:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n("26FU"),o=n("67Y/"),i=n("0o5J"),l=n("TYT/"),a=n("qT8p"),c=function(){function e(e,t){this.toastr=e,this.webApiProvider=t,this.onClientSelected=new r.a(null),this.onAdvancedSearchApplied=new r.a(null),this.onClearSearchApplied=new r.a(null)}return e.prototype.loadClientData=function(e,t){return this.getAllClients(e-1,t)},e.prototype.create=function(e){return this.webApiProvider.post("client/v1/",e,!0)},e.prototype.update=function(e){return this.webApiProvider.put("client/v1/"+e.id,e)},e.prototype.delete=function(e){return this.webApiProvider.delete("client/v1/"+e,!0)},e.prototype.getAllClients=function(e,t){return this.webApiProvider.get("client/v1/list/"+e+"/"+t,!0)},e.prototype.getMainAndSubClientsNoPagination=function(){return this.webApiProvider.get("client/v1/list?includeSubClients=true",!0)},e.prototype.getAllClientsNoPagination=function(){return this.webApiProvider.get("client/v1/list",!0)},e.prototype.getAllSubClientsForGivenMainClient=function(e){return this.webApiProvider.get("client/v1/list/"+e)},e.prototype.getDepotForClient=function(e){return this.webApiProvider.post("depot/v1/userdepots?clientId="+e,null,!0)},e.prototype.getClientLedger=function(e,t,n){return this.webApiProvider.getwithSearchParam("client/ledger/v1/list/"+e+"/"+t,n.params)},e.prototype.getClientById=function(e){var t=this;return this.loadingData=!0,this.getAllClienById(e).pipe(Object(o.a)((function(e){return t.onClientSelected.next({client:e}),t.loadingData=!1,e})))},e.prototype.selectClient=function(e){return t=this,void 0,r=function(){return function(e,t){var n,r,o,i,l={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(i){return function(a){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;l;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return l.label++,{value:i[1],done:!1};case 5:l.label++,r=i[1],i=[0];continue;case 7:i=l.ops.pop(),l.trys.pop();continue;default:if(!(o=(o=l.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){l=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){l.label=i[1];break}if(6===i[0]&&l.label<o[1]){l.label=o[1],o=i;break}if(o&&l.label<o[2]){l.label=o[2],l.ops.push(i);break}o[2]&&l.ops.pop(),l.trys.pop();continue}i=t.call(e,l)}catch(a){i=[6,a],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,a])}}}(this,(function(t){switch(t.label){case 0:return this.loadingCollection=!0,this.loadingData=!0,[4,this.delay(1e3)];case 1:return t.sent(),this.onClientSelected.next({client:e}),this.loadingData=!1,[2]}}))},new((n=void 0)||(n=Promise))((function(e,o){function i(e){try{a(r.next(e))}catch(t){o(t)}}function l(e){try{a(r.throw(e))}catch(t){o(t)}}function a(t){var r;t.done?e(t.value):(r=t.value,r instanceof n?r:new n((function(e){e(r)}))).then(i,l)}a((r=r.apply(t,[])).next())}));var t,n,r},e.prototype.delay=function(e){return new Promise((function(t){return setTimeout(t,e)}))},e.prototype.getAllClienById=function(e){return this.webApiProvider.get("client/v1/"+e)},e.prototype.getAllClientAssociationGroup=function(){return this.webApiProvider.get("client-assoc-grp/v1/list")},e.prototype.performAdvancedSearch=function(e){var t=this;this.loadingCollection=!0,this.webApiProvider.getwithSearchParam("client/v1/list/0/6",e.params).subscribe((function(e){e&&(t.onAdvancedSearchApplied.next({clients:e}),t.loadingCollection=!1)}),(function(e){t.toastr.error(e.errorMessage,"Failed"),t.loadingCollection=!1}))},e.prototype.search=function(e,t,n){return this.webApiProvider.get("client/v1/list/"+(t-1)+"/"+n+e)},e.prototype.getAllMainClients=function(){return this.webApiProvider.get("client/v1/list",!0)},e.\u0275fac=function(t){return new(t||e)(l["\u0275\u0275inject"](a.b),l["\u0275\u0275inject"](i.c))},e.\u0275prov=l["\u0275\u0275defineInjectable"]({token:e,factory:e.\u0275fac,providedIn:"root"}),e}()}}]);