(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"4iqE":function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return a}));var r=function(e){return e[e.ADD=0]="ADD",e[e.EDIT=1]="EDIT",e[e.READ_ONLY=2]="READ_ONLY",e[e.CLONE=3]="CLONE",e}({}),a=function(e){return e[e.CREATE=0]="CREATE",e[e.UPDATE=1]="UPDATE",e[e.SUBMIT=2]="SUBMIT",e[e.APPROVE=3]="APPROVE",e[e.REJECT=4]="REJECT",e[e.DELETE=5]="DELETE",e[e.CANCEL=6]="CANCEL",e[e.DISCARD=7]="DISCARD",e}({})},EbFV:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n("0o5J"),a=n("TYT/"),o=function(){function e(e){this.webApiProvier=e}return e.prototype.getProductTypes=function(){return this.webApiProvier.get("product/v1/list",!0)},e.\u0275fac=function(t){return new(t||e)(a["\u0275\u0275inject"](r.c))},e.\u0275prov=a["\u0275\u0275defineInjectable"]({token:e,factory:e.\u0275fac,providedIn:"root"}),e}()},H2Tg:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var r=n("Valr"),a=n("jgPy"),o=n("QJY3"),i=n("oOf3"),l=n("X2FZ"),s=n("MnXN"),p=n("o8Qb"),c=n("1PnN"),d=n("TYT/"),u=function(){function e(){}return e.\u0275mod=d["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=d["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[r.c,a.a,o.FormsModule,o.ReactiveFormsModule,i.a,l.e,s.n,p.b,c.b]]}),e}()},Iab2:function(e,t,n){var r,a;void 0===(a="function"==typeof(r=function(){"use strict";function t(e,t,n){var r=new XMLHttpRequest;r.open("GET",e),r.responseType="blob",r.onload=function(){o(r.response,t,n)},r.onerror=function(){console.error("could not download file")},r.send()}function n(e){var t=new XMLHttpRequest;t.open("HEAD",e,!1);try{t.send()}catch(e){}return 200<=t.status&&299>=t.status}function r(e){try{e.dispatchEvent(new MouseEvent("click"))}catch(t){var n=document.createEvent("MouseEvents");n.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),e.dispatchEvent(n)}}var a="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof global&&global.global===global?global:void 0,o=a.saveAs||("object"!=typeof window||window!==a?function(){}:"download"in HTMLAnchorElement.prototype?function(e,o,i){var l=a.URL||a.webkitURL,s=document.createElement("a");s.download=o=o||e.name||"download",s.rel="noopener","string"==typeof e?(s.href=e,s.origin===location.origin?r(s):n(s.href)?t(e,o,i):r(s,s.target="_blank")):(s.href=l.createObjectURL(e),setTimeout((function(){l.revokeObjectURL(s.href)}),4e4),setTimeout((function(){r(s)}),0))}:"msSaveOrOpenBlob"in navigator?function(e,a,o){if(a=a||e.name||"download","string"!=typeof e)navigator.msSaveOrOpenBlob(function(e,t){return void 0===t?t={autoBom:!1}:"object"!=typeof t&&(console.warn("Deprecated: Expected third argument to be a object"),t={autoBom:!t}),t.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type)?new Blob(["\ufeff",e],{type:e.type}):e}(e,o),a);else if(n(e))t(e,a,o);else{var i=document.createElement("a");i.href=e,i.target="_blank",setTimeout((function(){r(i)}))}}:function(e,n,r,o){if((o=o||open("","_blank"))&&(o.document.title=o.document.body.innerText="downloading..."),"string"==typeof e)return t(e,n,r);var i="application/octet-stream"===e.type,l=/constructor/i.test(a.HTMLElement)||a.safari,s=/CriOS\/[\d]+/.test(navigator.userAgent);if((s||i&&l)&&"object"==typeof FileReader){var p=new FileReader;p.onloadend=function(){var e=p.result;e=s?e:e.replace(/^data:[^;]*;/,"data:attachment/file;"),o?o.location.href=e:location=e,o=null},p.readAsDataURL(e)}else{var c=a.URL||a.webkitURL,d=c.createObjectURL(e);o?o.location=d:location.href=d,o=null,setTimeout((function(){c.revokeObjectURL(d)}),4e4)}});a.saveAs=o.saveAs=o,e.exports=o})?r.apply(t,[]):r)||(e.exports=a)},VAD1:function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));var r=n("26FU"),a=n("67Y/"),o=n("0o5J"),i=n("TYT/"),l=n("cUzu"),s=n("qT8p"),p=function(){function e(e,t,n){this.http=e,this.toastr=t,this.webApiProvider=n,this.onTransporterSelected=new r.a(null),this.onAdvancedSearchApplied=new r.a(null),this.onClearSearchApplied=new r.a(null),this.onTransporterUpdated=new r.a(null),this.onTransporterDataLoaded=new r.a(null)}return e.prototype.loadTransporterData=function(e,t){return this.getAllTransporter(e-1,t)},e.prototype.create=function(e){return this.webApiProvider.post("transporter/v1/",e,!0)},e.prototype.update=function(e){return this.webApiProvider.put("transporter/v1/"+e.id,e)},e.prototype.delete=function(e){return this.webApiProvider.delete("transporter/v1/"+e,!0)},e.prototype.getAllTransporter=function(e,t){return this.webApiProvider.get("transporter/v1/list/"+e+"/"+t,!0)},e.prototype.getTransporterById=function(e){var t=this;return this.loadingData=!0,this.getAllTransporterById(e).pipe(Object(a.a)((function(e){return t.onTransporterSelected.next({transporter:e}),t.loadingData=!1,e})))},e.prototype.refresh=function(e,t){var n=this;this.loadingCollection=!0,this.getAllTransporter(e,t).subscribe((function(e){n.onTransporterDataLoaded.next({transporters:e}),n.loadingCollection=!1}),(function(e){n.loadingCollection=!1}))},e.prototype.getAllTransporterById=function(e){return this.webApiProvider.get("transporter/v1/"+e)},e.prototype.getAllTransporterNoPagination=function(){return this.webApiProvider.get("transporter/v1/list")},e.prototype.performAdvancedSearch=function(e){var t=this;this.loadingCollection=!0,this.webApiProvider.getwithSearchParam("transporter/v1/list/0/6",e.params).subscribe((function(e){e&&(t.onAdvancedSearchApplied.next({transporters:e}),t.loadingCollection=!1)}),(function(e){t.toastr.error(e.errorMessage,"Failed"),t.loadingCollection=!1}))},e.\u0275fac=function(t){return new(t||e)(i["\u0275\u0275inject"](l.c),i["\u0275\u0275inject"](s.b),i["\u0275\u0275inject"](o.c))},e.\u0275prov=i["\u0275\u0275defineInjectable"]({token:e,factory:e.\u0275fac,providedIn:"root"}),e}()},WlhN:function(e,t,n){"use strict";var r=n("TYT/"),a=n("0o5J"),o=function(){function e(e){this.webApiProvider=e}return e.prototype.getComments=function(e,t){return this.webApiProvider.get("comment/v1/"+e+"/"+t+"/",!0)},e.\u0275fac=function(t){return new(t||e)(r["\u0275\u0275inject"](a.c))},e.\u0275prov=r["\u0275\u0275defineInjectable"]({token:e,factory:e.\u0275fac,providedIn:"root"}),e}(),i=n("Valr"),l=n("3rkx");function s(e,t){1&e&&(r["\u0275\u0275elementStart"](0,"div",6),r["\u0275\u0275text"](1,"Comments"),r["\u0275\u0275elementEnd"]())}function p(e,t){if(1&e){var n=r["\u0275\u0275getCurrentView"]();r["\u0275\u0275elementStart"](0,"div",7),r["\u0275\u0275elementStart"](1,"button",8),r["\u0275\u0275listener"]("click",(function(){return r["\u0275\u0275restoreView"](n),r["\u0275\u0275nextContext"]().toggleShowAudit()})),r["\u0275\u0275element"](2,"i",9),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"]()}}function c(e,t){if(1&e&&(r["\u0275\u0275elementStart"](0,"div",10),r["\u0275\u0275elementStart"](1,"div",11),r["\u0275\u0275elementStart"](2,"div",12),r["\u0275\u0275elementStart"](3,"div",13),r["\u0275\u0275text"](4,"\xa0"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](5,"div",14),r["\u0275\u0275text"](6,"\xa0"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](7,"h5",15),r["\u0275\u0275elementStart"](8,"span",16),r["\u0275\u0275text"](9,"\xa0"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](10,"div",12),r["\u0275\u0275elementStart"](11,"div",13),r["\u0275\u0275text"](12,"\xa0"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](13,"div",14),r["\u0275\u0275text"](14,"\xa0"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](15,"div",17),r["\u0275\u0275elementStart"](16,"div",18),r["\u0275\u0275elementStart"](17,"div",0),r["\u0275\u0275elementStart"](18,"div",19),r["\u0275\u0275elementStart"](19,"strong",20),r["\u0275\u0275text"](20),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](21,"p",21),r["\u0275\u0275text"](22),r["\u0275\u0275pipe"](23,"date"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](24,"p",22),r["\u0275\u0275text"](25),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"]()),2&e){var n=t.$implicit;r["\u0275\u0275advance"](20),r["\u0275\u0275textInterpolate"](n.createdBy),r["\u0275\u0275advance"](2),r["\u0275\u0275textInterpolate"](r["\u0275\u0275pipeBind1"](23,3,n.createdOn)),r["\u0275\u0275advance"](3),r["\u0275\u0275textInterpolate"](n.comment)}}function d(e,t){if(1&e&&(r["\u0275\u0275elementStart"](0,"div"),r["\u0275\u0275element"](1,"app-spinner-wrapper",23),r["\u0275\u0275elementEnd"]()),2&e){var n=r["\u0275\u0275nextContext"]();r["\u0275\u0275advance"](1),r["\u0275\u0275property"]("showSpinner",n.showCommentProgress)}}n.d(t,"a",(function(){return u}));var u=function(){function e(e){this.service=e,this.showHeader=!0,this.closeIt=new r.EventEmitter,this.show=!0}return e.prototype.ngOnInit=function(){var e=this;this.showCommentProgress=!0,this.service.getComments(this.resourceType,this.resourceId).subscribe((function(t){e.comments=t,e.showCommentProgress=!1}))},e.prototype.toggleShowAudit=function(){this.closeIt.emit(!0)},e.\u0275fac=function(t){return new(t||e)(r["\u0275\u0275directiveInject"](o))},e.\u0275cmp=r["\u0275\u0275defineComponent"]({type:e,selectors:[["app-comment-history"]],inputs:{resourceType:"resourceType",resourceId:"resourceId",showHeader:"showHeader"},outputs:{closeIt:"closeIt"},decls:6,vars:4,consts:[[1,"card-body"],[1,"row","no-margin"],["class","card-title col-sm-6",4,"ngIf"],["class","col-sm-6 align-items-center justify-content-center",4,"ngIf"],["class","row",4,"ngFor","ngForOf"],[4,"ngIf"],[1,"card-title","col-sm-6"],[1,"col-sm-6","align-items-center","justify-content-center"],[1,"btn","float-right","pt-1","bg-transparent",3,"click"],[1,"fas","fa-times"],[1,"row"],[1,"col-auto","text-center","flex-column","d-none","d-sm-flex"],[1,"row","h-50"],[1,"col","border-right"],[1,"col"],[1,"m-2"],[1,"badge","badge-pill","bg-primary"],[1,"col","py-2"],[1,"card","border-success","shadow"],[1,"mb-1"],["_ngcontent-qsh-c199","",1,"mr-1"],[1,"text-muted"],[1,"card-text"],[3,"showSpinner"]],template:function(e,t){1&e&&(r["\u0275\u0275elementStart"](0,"div",0),r["\u0275\u0275elementStart"](1,"div",1),r["\u0275\u0275template"](2,s,2,0,"div",2),r["\u0275\u0275template"](3,p,3,0,"div",3),r["\u0275\u0275elementEnd"](),r["\u0275\u0275template"](4,c,26,5,"div",4),r["\u0275\u0275template"](5,d,2,1,"div",5),r["\u0275\u0275elementEnd"]()),2&e&&(r["\u0275\u0275advance"](2),r["\u0275\u0275property"]("ngIf",t.showHeader),r["\u0275\u0275advance"](1),r["\u0275\u0275property"]("ngIf",t.showHeader),r["\u0275\u0275advance"](1),r["\u0275\u0275property"]("ngForOf",t.comments),r["\u0275\u0275advance"](1),r["\u0275\u0275property"]("ngIf",t.showCommentProgress))},directives:[i.p,i.o,l.a],pipes:[i.f],styles:[""]}),e}()},XW6F:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n("TYT/"),a=n("QJY3"),o=n("MnXN"),i=function(){function e(e,t){this.fb=e,this.activeModal=t,this.modalTitle="",this.modalHeader="",this.modalMessage="",this.commentForm=this.fb.group({comment:""})}return e.prototype.ngOnInit=function(){},e.prototype.confirm=function(){this.activeModal.close({status:!0,comment:this.commentForm.get("comment").value})},e.prototype.cancel=function(){this.activeModal.close({status:!1})},e.\u0275fac=function(t){return new(t||e)(r["\u0275\u0275directiveInject"](a.FormBuilder),r["\u0275\u0275directiveInject"](o.b))},e.\u0275cmp=r["\u0275\u0275defineComponent"]({type:e,selectors:[["app-comment-component"]],decls:17,vars:5,consts:[[1,"modal-header"],["id","modal-title",1,"modal-title"],[1,"modal-body"],[1,"form-group"],[3,"formGroup"],["placeholder","Provide comment","formControlName","comment","required","",1,"form-control"],[1,"modal-footer"],["type","button",1,"btn","btn-outline-secondary","btn-rounded",3,"click"],["type","button","ngbAutofocus","",1,"btn","btn-danger","btn-rounded",3,"disabled","click"]],template:function(e,t){1&e&&(r["\u0275\u0275elementStart"](0,"div",0),r["\u0275\u0275elementStart"](1,"h4",1),r["\u0275\u0275text"](2),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](3,"div",2),r["\u0275\u0275elementStart"](4,"p"),r["\u0275\u0275elementStart"](5,"strong"),r["\u0275\u0275text"](6),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](7,"p"),r["\u0275\u0275text"](8),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](9,"div",3),r["\u0275\u0275elementStart"](10,"form",4),r["\u0275\u0275element"](11,"textarea",5),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](12,"div",6),r["\u0275\u0275elementStart"](13,"button",7),r["\u0275\u0275listener"]("click",(function(){return t.cancel()})),r["\u0275\u0275text"](14,"Cancel"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](15,"button",8),r["\u0275\u0275listener"]("click",(function(){return t.confirm()})),r["\u0275\u0275text"](16,"Ok"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"]()),2&e&&(r["\u0275\u0275advance"](2),r["\u0275\u0275textInterpolate"](t.modalTitle),r["\u0275\u0275advance"](4),r["\u0275\u0275textInterpolate"](t.modalHeader),r["\u0275\u0275advance"](2),r["\u0275\u0275textInterpolate"](t.modalMessage),r["\u0275\u0275advance"](2),r["\u0275\u0275property"]("formGroup",t.commentForm),r["\u0275\u0275advance"](5),r["\u0275\u0275property"]("disabled",t.commentForm.invalid))},directives:[a["\u0275angular_packages_forms_forms_y"],a.NgControlStatusGroup,a.FormGroupDirective,a.DefaultValueAccessor,a.NgControlStatus,a.FormControlName,a.RequiredValidator],styles:[""]}),e}()},he9t:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n("TYT/"),a=function(){function e(){this.crudStatus=[{code:"ACTIVE",display:"Active"},{code:"INACTIVE",display:"Inactive"}],this.clientTypes=[{code:"MAIN_CLIENT",display:"Main client"},{code:"SUB_CLIENT",display:"Sub client"},{code:"MAIN_SUB_CLIENT",display:"Main and sub client"}],this.yesNoConstants=[{code:!0,display:"Yes"},{code:!1,display:"No"}],this.waybillStatus=[{code:"CREATED",display:"Created"},{code:"CANCELED",display:"Cancelled"},{code:"DELIVERED ",display:"Delivered"}],this.filterAction=[{value:"ALL",display:"All"},{value:"OPEN",display:"Open"},{value:"SUBMITTED",display:"Submitted"},{value:"APPROVED",display:"Approved"},{value:"REJECTED",display:"Rejected"},{value:"CANCELLED",display:"Cancelled"},{value:"PARTIALLY_EXECUTED",display:"Partially Executed"},{value:"EXECUTED",display:"Executed"},{value:"DISCARDED",display:"Discarded"},{value:"REOPENED",display:"Reopened"},{value:"SUBMIT_SYS_CANCELLED",display:"Submit sys cancelled"},{value:"APPROVE_SYS_CANCELLED",display:"Approve sys cancelled"},{value:"PARTIAL_SYS_CANCELLED",display:"Partial sys cancelled"}],this.transferTypes=[{value:"SWAP",display:"Inter Depot Swap"},{value:"INTRASWAP",display:"Intra Depot Swap"},{value:"RELEASE",display:"Release"}],this.eodJobTypes=[{value:"BALANCEUPDATE",display:"Update Actual Balances"},{value:"RESETBALANCE",display:"Reset Available Balances"},{value:"DISPATCHSTATUS",display:"Update Dispatch Status"},{value:"DAILYTXNBALANCE",display:"Capture Daily Txn Balances"}],this.weekDays=[{value:"MONDAY",display:"Monday"},{value:"TUESDAY",display:"Tuesday"},{value:"WEDNESDAY",display:"Wednesday"},{value:"THURSDAY",display:"Thursday"},{value:"FRIDAY",display:"Friday"},{value:"SATURDAY",display:"Saturday"},{value:"SUNDAY",display:"Sunday"}],this.monthsOfYear=[{value:"JANUARY",display:"January"},{value:"FEBRUARY",display:"February"},{value:"MARCH",display:"March"},{value:"APRIL",display:"April"},{value:"MAY",display:"May"},{value:"JUNE",display:"June"},{value:"JULY",display:"July"},{value:"AUGUST",display:"August"},{value:"SEPTEMBER",display:"September"},{value:"OCTOBER",display:"October"},{value:"NOVEMBER",display:"November"},{value:"DECEMBER",display:"December"}],this.transferStatus=[{value:"OPEN",display:"Open"},{value:"SUBMITTED",display:"Submitted"},{value:"APPROVED",display:"Approved"},{value:"REJECTED",display:"Rejected"},{value:"CANCELLED",display:"Cancelled"},{value:"EXECUTED",display:"Executed"},{value:"DISCARDED",display:"Discarded"},{value:"REOPENED",display:"Reopened"}],this.depotDates=[{value:0,display:"Same Day"},{value:1,display:"Next Day"}],this.vesselTypes=[{value:"UNSPECIFIEDSHIPS",display:"Unspecified Ships"},{value:"NAVIDATION_AIDS",display:"Navigation Aids"},{value:"FISHING",display:"Fishing"},{value:"TUGS_SPECIAL_CRAFT",display:"Tugs And Special Craft"},{value:"HIGHSPEED_CRAFT",display:"High Speed Craft"},{value:"CARGO_VESSEL",display:"Cargo Vessel"},{value:"TANKERS_PLESURE_CRAFT",display:"Tankers And Pleasure Craft"}],this.vesselStatus=[{value:"EN_ROUTE_TO_PORT",display:"En route to port"},{value:"DOCKED_AT_PORT",display:"Docked At Port"},{value:"ANCHORED",display:"At Anchorage"},{value:"LEFT_DEPOT",display:"Left Depot"}],this.receiptTypes=[{value:"BARGE",display:"Barge"},{value:"PIPELINE",display:"Pipeline"},{value:"TRUCK",display:"Truck"},{value:"VESSEL",display:"Vessel"}],this.receiptVesselCountry=[{value:1,display:"Nigeria"},{value:2,display:"Ghana"}],this.receiptGhanaPorts=[{value:7,display:"Tema Port"},{value:8,display:"Tarkoradi Port"}],this.receiptNigeriaPorts=[{value:1,display:"Lagos Port"},{value:2,display:"Tin Can Port"},{value:3,display:"Delta Port"},{value:4,display:"Calabar Port"},{value:5,display:"Onne Port"},{value:6,display:"Rivers Port"}],this.receiptTankFields=[{label:"Gross Dip in MM",appendText:"MM",beforeFormControlName:"grossDipMMBeforeReceipt",aftrFormControlName:"grossDipMMAfterReceipt",type:"number"},{label:"Gross Volume in Liters",appendText:"Litre",beforeFormControlName:"grossDipBeforeReceipt",aftrFormControlName:"grossDipAfterReceipt",type:"number"},{label:"Water Dip in MM",appendText:"MM",beforeFormControlName:"waterDipMMBeforeReceipt",aftrFormControlName:"waterDipMMAfterReceipt",type:"number"},{label:"Water Volume in Litres",appendText:"Litre",beforeFormControlName:"waterDipBeforeReceipt",aftrFormControlName:"waterDipAfterReceipt",type:"number"},{label:"Net Volume",appendText:"Litre",beforeFormControlName:"netVolumeBeforeReceipt",aftrFormControlName:"netVolumeAfterReceipt",type:"number"},{label:"Tank Temperature",appendText:"Deg Cel",beforeFormControlName:"tankTemperatureBeforeReceipt",aftrFormControlName:"tankTemperatureAfterReceipt",type:"number"},{label:"Product Sample Temperature",appendText:"Deg Cel",beforeFormControlName:"sampleTemperatureBeforeReceipt",aftrFormControlName:"sampleTemperatureAfterReceipt",type:"number"},{label:"Product Sample Density",appendText:null,beforeFormControlName:"sampleDenistyBeforeReceipt",aftrFormControlName:"sampleDenistyAfterReceipt",type:"number"},{label:"Roof Weight",appendText:"KGs",beforeFormControlName:"roofWeightBeforeReceipt",aftrFormControlName:"roofWeightAfterReceipt",type:"number"},{label:"Density at 15\xb0C",appendText:null,beforeFormControlName:"densityAt15CBeforeReceipt",aftrFormControlName:"densityAt15CAfterReceipt",type:"number"},{label:"VCF54B",appendText:null,beforeFormControlName:"vcf54BBeforeReceipt",aftrFormControlName:"vcf54BAfterReceipt",type:"number"},{label:"WRF",appendText:null,beforeFormControlName:"wrfbeforeReceipt",aftrFormControlName:"wrfafterReceipt",type:"number"},{label:"Volume at Natural",appendText:"Litre",beforeFormControlName:"volumeAtNaturalBeforeReceipt",aftrFormControlName:"volumeAtNaturalAfterReceipt",type:"number"},{label:"Volume at 15\xb0C",appendText:"Litre",beforeFormControlName:"volumeAt15CBeforeReceipt",aftrFormControlName:"volumeAt15CAfterReceipt",type:"number"},{label:"Weight in Air",appendText:"Metric Ton",beforeFormControlName:"metricTonBeforeReceipt",aftrFormControlName:"metricTonAfterReceipt",type:"number"},{label:"Weight in Vacuum",appendText:"Metric Ton",beforeFormControlName:"metricTonVaccBeforeReceipt",aftrFormControlName:"metricTonVaccAfterReceipt",type:"number"},{label:"Roof Displacement",appendText:"Litre",beforeFormControlName:"roofDisplacementBeforeReceipt",aftrFormControlName:"roofDisplacementAfterReceipt",type:"number"}],this.receiptWorkFlowStatus=[{value:"OPEN",display:"Open"},{value:"SUBMITTED",display:"Submitted"},{value:"APPROVED",display:"Approved"},{value:"REJECTED",display:"Rejected"},{value:"CANCELLED",display:"Cancelled"},{value:"EXECUTED",display:"Executed"},{value:"DISCARDED",display:"Discarded"},{value:"REOPENED",display:"Reopened"}],this.readingPerfromed=[{value:"BEGIN_OF_DAY",display:"Beginning of the day"},{value:"END_OF_DAY",display:"End of day"},{value:"INTERMIDIATE",display:"Intraday"}],this.userTypes=[{value:"INTERNAL",display:"Internal User"},{value:"FINANCIAL",display:"Financier User"},{value:"CLIENT",display:"Client User"},{value:"SERVICE",display:"Service User"},{value:"TRANSPORTER",display:"Transporter User"}],this.languages=[{value:"en",display:"English"},{value:"fr",display:"French"}],this.pageSize=8,this.dispatchPageSize=8}return e.\u0275prov=r["\u0275\u0275defineInjectable"]({token:e,factory:e.\u0275fac=function(t){return new(t||e)},providedIn:"root"}),e}()},kJ0Q:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var r,a=n("MnXN"),o=n("TYT/"),i=(r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),l=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.DELIMITER="/",t}return i(t,e),t.prototype.fromModel=function(e){if(e){var t=e.split(this.DELIMITER);return{month:parseInt(t[0],10),day:parseInt(t[1],10),year:parseInt(t[2],10)}}return null},t.prototype.toModel=function(e){return e?e.month+this.DELIMITER+e.day+this.DELIMITER+e.year:null},t.\u0275prov=o["\u0275\u0275defineInjectable"]({token:t,factory:t.\u0275fac=function(e){return s(e||t)}}),t}(a.g),s=o["\u0275\u0275getInheritedFactory"](l)},rXAn:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n("2WDa"),a=Object(r.f)([Object(r.j)({opacity:"{{opacity}}",transform:"scale({{scale}}) translate3d({{x}}, {{y}}, {{z}})"}),Object(r.e)("{{duration}} {{delay}} cubic-bezier(0.0, 0.0, 0.2, 1)",Object(r.j)("*"))],{params:{duration:"200ms",delay:"0ms",opacity:"0",scale:"1",x:"0",y:"0",z:"0"}}),o=[Object(r.l)("animate",[Object(r.k)("void => *",[Object(r.m)(a)])]),Object(r.l)("fadeInOut",[Object(r.i)("0",Object(r.j)({opacity:0,display:"none"})),Object(r.i)("1",Object(r.j)({opacity:1,display:"block"})),Object(r.k)("0 => 1",Object(r.e)("300ms")),Object(r.k)("1 => 0",Object(r.e)("300ms"))])]},"y/l7":function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n("0o5J"),a=n("TYT/"),o=function(){function e(e){this.webApiProvider=e}return e.prototype.download=function(e){return this.webApiProvider.get("attachment/v1/"+e)},e.\u0275fac=function(t){return new(t||e)(a["\u0275\u0275inject"](r.c))},e.\u0275prov=a["\u0275\u0275defineInjectable"]({token:e,factory:e.\u0275fac,providedIn:"root"}),e}()}}]);