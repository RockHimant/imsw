(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{AdzO:function(e,t,n){"use strict";n.r(t);var r=n("Valr"),l=n("DUip"),o=n("hqYv"),i=n("TYT/"),a=n("MnXN"),m=n("qT8p"),d=n("X2FZ");function c(e,t){1&e&&i["\u0275\u0275text"](0," Number ")}function u(e,t){1&e&&i["\u0275\u0275text"](0),2&e&&i["\u0275\u0275textInterpolate1"](" ",t.row.orderNumber," ")}function s(e,t){1&e&&i["\u0275\u0275text"](0," Bill From ")}function p(e,t){1&e&&i["\u0275\u0275text"](0),2&e&&i["\u0275\u0275textInterpolate1"](" ",t.row.billFrom.name," ")}function v(e,t){1&e&&i["\u0275\u0275text"](0," Bill To ")}function b(e,t){1&e&&i["\u0275\u0275text"](0),2&e&&i["\u0275\u0275textInterpolate1"](" ",t.row.billTo.name," ")}function f(e,t){1&e&&i["\u0275\u0275text"](0," Status ")}var S=function(e,t,n){return{"badge-success":e,"badge-warning":t,"badge-danger":n}};function x(e,t){if(1&e&&(i["\u0275\u0275elementStart"](0,"div",16),i["\u0275\u0275text"](1),i["\u0275\u0275elementEnd"]()),2&e){var n=t.row;i["\u0275\u0275property"]("ngClass",i["\u0275\u0275pureFunction3"](2,S,"Delivered"===n.orderStatus,"Processing"===n.orderStatus,"Pending"===n.orderStatus)),i["\u0275\u0275advance"](1),i["\u0275\u0275textInterpolate1"](" ",n.orderStatus," ")}}function E(e,t){1&e&&i["\u0275\u0275text"](0," Actions ")}var h=function(e){return["/invoice/edit",e]};function g(e,t){if(1&e){var n=i["\u0275\u0275getCurrentView"]();i["\u0275\u0275elementStart"](0,"button",17),i["\u0275\u0275text"](1,"View"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](2,"button",18),i["\u0275\u0275listener"]("click",(function(){i["\u0275\u0275restoreView"](n);var e=t.row,r=i["\u0275\u0275nextContext"](2),l=i["\u0275\u0275reference"](18);return r.deleteInvoice(e.id,l)})),i["\u0275\u0275text"](3," Delete "),i["\u0275\u0275elementEnd"]()}2&e&&i["\u0275\u0275property"]("routerLink",i["\u0275\u0275pureFunction1"](1,h,t.row.id))}function y(e,t){if(1&e&&(i["\u0275\u0275elementStart"](0,"ngx-datatable",10),i["\u0275\u0275elementStart"](1,"ngx-datatable-column",11),i["\u0275\u0275template"](2,c,1,0,"ng-template",12),i["\u0275\u0275template"](3,u,1,1,"ng-template",13),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](4,"ngx-datatable-column"),i["\u0275\u0275template"](5,s,1,0,"ng-template",12),i["\u0275\u0275template"](6,p,1,1,"ng-template",13),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](7,"ngx-datatable-column"),i["\u0275\u0275template"](8,v,1,0,"ng-template",12),i["\u0275\u0275template"](9,b,1,1,"ng-template",13),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](10,"ngx-datatable-column",14),i["\u0275\u0275template"](11,f,1,0,"ng-template",12),i["\u0275\u0275template"](12,x,2,6,"ng-template",13),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](13,"ngx-datatable-column",15),i["\u0275\u0275template"](14,E,1,0,"ng-template",12),i["\u0275\u0275template"](15,g,4,3,"ng-template",13),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"]()),2&e){var n=i["\u0275\u0275nextContext"]();i["\u0275\u0275styleProp"]("height",60*n.invoices.length+60+"px"),i["\u0275\u0275property"]("columnMode","force")("headerHeight",50)("footerHeight",0)("rowHeight",60)("scrollbarV",!0)("scrollbarH",!0)("rows",n.invoices),i["\u0275\u0275advance"](1),i["\u0275\u0275property"]("maxWidth",100),i["\u0275\u0275advance"](9),i["\u0275\u0275property"]("flexGrow",1),i["\u0275\u0275advance"](3),i["\u0275\u0275property"]("width",120)}}function I(e,t){1&e&&(i["\u0275\u0275elementStart"](0,"div",19),i["\u0275\u0275elementStart"](1,"h4",20),i["\u0275\u0275text"](2,"Invoice deletion"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](3,"button",21),i["\u0275\u0275listener"]("click",(function(){return t.$implicit.dismiss("Cross click")})),i["\u0275\u0275elementStart"](4,"span",22),i["\u0275\u0275text"](5,"\xd7"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](6,"div",23),i["\u0275\u0275elementStart"](7,"p"),i["\u0275\u0275elementStart"](8,"strong"),i["\u0275\u0275text"](9,"Are you sure?"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](10,"div",24),i["\u0275\u0275elementStart"](11,"button",25),i["\u0275\u0275listener"]("click",(function(){return t.$implicit.dismiss("cancel")})),i["\u0275\u0275text"](12,"Cancel"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](13,"button",26),i["\u0275\u0275listener"]("click",(function(){return t.$implicit.close("Ok")})),i["\u0275\u0275text"](14,"Ok"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"]())}var w=function(){return["/invoice/new"]},F=function(){function e(e,t,n){this.dl=e,this.modalService=t,this.toastr=n}return e.prototype.ngOnInit=function(){this.loadInvoices()},e.prototype.loadInvoices=function(){var e=this;this.dl.getInvoices().subscribe((function(t){e.invoices=t}))},e.prototype.deleteInvoice=function(e,t){var n=this;this.modalService.open(t,{ariaLabelledBy:"modal-basic-title",centered:!0}).result.then((function(t){n.dl.deleteInvoice(e).subscribe((function(e){n.toastr.success("Invoice Deleted!","Success!",{timeOut:3e3}),n.loadInvoices()}))}),(function(e){}))},e.\u0275fac=function(t){return new(t||e)(i["\u0275\u0275directiveInject"](o.a),i["\u0275\u0275directiveInject"](a.l),i["\u0275\u0275directiveInject"](m.b))},e.\u0275cmp=i["\u0275\u0275defineComponent"]({type:e,selectors:[["app-invoice-list"]],decls:19,vars:3,consts:[[1,"breadcrumb"],["href",""],[1,"separator-breadcrumb","border-top"],[1,"row","mb-3"],[1,"col-md-12","mb-3"],[1,"btn","btn-primary","float-right",3,"routerLink"],[1,"col-md-12"],[1,"card","o-hidden"],["style","box-shadow: none","class","material fullscreen",3,"height","columnMode","headerHeight","footerHeight","rowHeight","scrollbarV","scrollbarH","rows",4,"ngIf"],["deleteConfirmModal",""],[1,"material","fullscreen",2,"box-shadow","none",3,"columnMode","headerHeight","footerHeight","rowHeight","scrollbarV","scrollbarH","rows"],["name","photo",3,"maxWidth"],["ngx-datatable-header-template",""],["ngx-datatable-cell-template",""],[3,"flexGrow"],[3,"width"],[1,"badge",3,"ngClass"],[1,"btn","btn-wide","btn-outline-secondary","mr-3",3,"routerLink"],[1,"btn","btn-outline-danger",3,"click"],[1,"modal-header"],["id","modal-title",1,"modal-title"],["type","button","aria-label","Close button","aria-describedby","modal-title",1,"close",3,"click"],["aria-hidden","true"],[1,"modal-body"],[1,"modal-footer"],["type","button",1,"btn","btn-outline-secondary","btn-rounded",3,"click"],["type","button","ngbAutofocus","",1,"btn","btn-wide","btn-danger","btn-rounded",3,"click"]],template:function(e,t){1&e&&(i["\u0275\u0275elementStart"](0,"div",0),i["\u0275\u0275elementStart"](1,"h1"),i["\u0275\u0275text"](2,"Invoice"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](3,"ul"),i["\u0275\u0275elementStart"](4,"li"),i["\u0275\u0275elementStart"](5,"a",1),i["\u0275\u0275text"](6,"Apps"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](7,"li"),i["\u0275\u0275text"](8,"Invoice"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275element"](9,"div",2),i["\u0275\u0275elementStart"](10,"div",3),i["\u0275\u0275elementStart"](11,"div",4),i["\u0275\u0275elementStart"](12,"button",5),i["\u0275\u0275text"](13,"Create New Invoice"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](14,"div",6),i["\u0275\u0275elementStart"](15,"div",7),i["\u0275\u0275template"](16,y,16,12,"ngx-datatable",8),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275template"](17,I,15,0,"ng-template",null,9,i["\u0275\u0275templateRefExtractor"])),2&e&&(i["\u0275\u0275advance"](12),i["\u0275\u0275property"]("routerLink",i["\u0275\u0275pureFunction0"](2,w)),i["\u0275\u0275advance"](4),i["\u0275\u0275property"]("ngIf",null==t.invoices?null:t.invoices.length))},directives:[l.i,r.p,d.d,d.b,d.c,d.a,r.n],styles:[""]}),e}(),C=n("9uVP"),k=n("QJY3"),N=n("vMEl");function T(e,t){if(1&e){var n=i["\u0275\u0275getCurrentView"]();i["\u0275\u0275elementStart"](0,"div",8),i["\u0275\u0275element"](1,"span",9),i["\u0275\u0275elementStart"](2,"button",10),i["\u0275\u0275listener"]("click",(function(){return i["\u0275\u0275restoreView"](n),i["\u0275\u0275nextContext"]().viewMode="print"})),i["\u0275\u0275text"](3,"Cancel"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](4,"btn-loading",11),i["\u0275\u0275listener"]("click",(function(){return i["\u0275\u0275restoreView"](n),i["\u0275\u0275nextContext"]().saveInvoice()})),i["\u0275\u0275text"](5,"Save"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"]()}if(2&e){var r=i["\u0275\u0275nextContext"]();i["\u0275\u0275advance"](4),i["\u0275\u0275property"]("loading",r.saving)}}function V(e,t){if(1&e){var n=i["\u0275\u0275getCurrentView"]();i["\u0275\u0275elementStart"](0,"div",12),i["\u0275\u0275element"](1,"span",9),i["\u0275\u0275elementStart"](2,"button",13),i["\u0275\u0275text"](3,"Back To Invoices"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](4,"button",14),i["\u0275\u0275listener"]("click",(function(){return i["\u0275\u0275restoreView"](n),i["\u0275\u0275nextContext"]().viewMode="edit"})),i["\u0275\u0275text"](5,"Edit Invoice"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](6,"button",15),i["\u0275\u0275listener"]("click",(function(){return i["\u0275\u0275restoreView"](n),i["\u0275\u0275nextContext"]().print()})),i["\u0275\u0275text"](7,"Print Invoice"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"]()}}function D(e,t){if(1&e&&(i["\u0275\u0275elementStart"](0,"tr"),i["\u0275\u0275elementStart"](1,"th",29),i["\u0275\u0275text"](2),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](3,"td"),i["\u0275\u0275text"](4),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](5,"td"),i["\u0275\u0275text"](6),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](7,"td"),i["\u0275\u0275text"](8),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](9,"td"),i["\u0275\u0275text"](10),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"]()),2&e){var n=t.$implicit,r=t.index;i["\u0275\u0275advance"](2),i["\u0275\u0275textInterpolate"](r+1),i["\u0275\u0275advance"](2),i["\u0275\u0275textInterpolate"](n.name),i["\u0275\u0275advance"](2),i["\u0275\u0275textInterpolate"](n.unitPrice),i["\u0275\u0275advance"](2),i["\u0275\u0275textInterpolate"](n.unit),i["\u0275\u0275advance"](2),i["\u0275\u0275textInterpolate"](n.unit*n.unitPrice)}}function P(e,t){if(1&e&&(i["\u0275\u0275elementStart"](0,"div",16),i["\u0275\u0275elementStart"](1,"div",0),i["\u0275\u0275elementStart"](2,"div",17),i["\u0275\u0275elementStart"](3,"h4",18),i["\u0275\u0275text"](4,"Order Info"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](5,"p"),i["\u0275\u0275text"](6),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](7,"div",19),i["\u0275\u0275elementStart"](8,"p"),i["\u0275\u0275elementStart"](9,"strong"),i["\u0275\u0275text"](10,"Order status: "),i["\u0275\u0275elementEnd"](),i["\u0275\u0275text"](11),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](12,"p"),i["\u0275\u0275elementStart"](13,"strong"),i["\u0275\u0275text"](14,"Order date: "),i["\u0275\u0275elementEnd"](),i["\u0275\u0275text"](15),i["\u0275\u0275pipe"](16,"date"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275element"](17,"div",20),i["\u0275\u0275elementStart"](18,"div",21),i["\u0275\u0275elementStart"](19,"div",22),i["\u0275\u0275elementStart"](20,"h5",18),i["\u0275\u0275text"](21,"Bill From"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](22,"p"),i["\u0275\u0275text"](23),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](24,"span",23),i["\u0275\u0275text"](25),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](26,"div",19),i["\u0275\u0275elementStart"](27,"h5",18),i["\u0275\u0275text"](28,"Bill To"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](29,"p"),i["\u0275\u0275text"](30),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](31,"span",23),i["\u0275\u0275text"](32),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](33,"div",0),i["\u0275\u0275elementStart"](34,"div",1),i["\u0275\u0275elementStart"](35,"table",24),i["\u0275\u0275elementStart"](36,"thead",25),i["\u0275\u0275elementStart"](37,"tr"),i["\u0275\u0275elementStart"](38,"th",26),i["\u0275\u0275text"](39,"#"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](40,"th",26),i["\u0275\u0275text"](41,"Item Name"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](42,"th",26),i["\u0275\u0275text"](43,"Unit Price"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](44,"th",26),i["\u0275\u0275text"](45,"Unit"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](46,"th",26),i["\u0275\u0275text"](47,"Cost"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](48,"tbody"),i["\u0275\u0275template"](49,D,11,5,"tr",27),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](50,"div",1),i["\u0275\u0275elementStart"](51,"div",28),i["\u0275\u0275elementStart"](52,"p"),i["\u0275\u0275text"](53,"Sub total: "),i["\u0275\u0275elementStart"](54,"span"),i["\u0275\u0275text"](55),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](56,"p"),i["\u0275\u0275text"](57,"Vat: "),i["\u0275\u0275elementStart"](58,"span"),i["\u0275\u0275text"](59),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](60,"h5",18),i["\u0275\u0275text"](61,"Grand Total: "),i["\u0275\u0275elementStart"](62,"span"),i["\u0275\u0275text"](63),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"]()),2&e){var n=i["\u0275\u0275nextContext"]();i["\u0275\u0275advance"](6),i["\u0275\u0275textInterpolate1"]("#",n.invoice.orderNumber,""),i["\u0275\u0275advance"](5),i["\u0275\u0275textInterpolate1"](" ",null==n.invoice?null:n.invoice.orderStatus,""),i["\u0275\u0275advance"](4),i["\u0275\u0275textInterpolate1"](" ",i["\u0275\u0275pipeBind1"](16,14,null==n.invoice?null:n.invoice.orderDate),""),i["\u0275\u0275advance"](8),i["\u0275\u0275textInterpolate"](null==n.invoice?null:null==n.invoice.billFrom?null:n.invoice.billFrom.name),i["\u0275\u0275advance"](2),i["\u0275\u0275textInterpolate1"](" ",null==n.invoice?null:null==n.invoice.billFrom?null:n.invoice.billFrom.address," "),i["\u0275\u0275advance"](5),i["\u0275\u0275textInterpolate"](null==n.invoice?null:null==n.invoice.billTo?null:n.invoice.billTo.name),i["\u0275\u0275advance"](2),i["\u0275\u0275textInterpolate1"](" ",null==n.invoice?null:null==n.invoice.billTo?null:n.invoice.billTo.address," "),i["\u0275\u0275advance"](17),i["\u0275\u0275property"]("ngForOf",null==n.invoice?null:n.invoice.items),i["\u0275\u0275advance"](6),i["\u0275\u0275textInterpolate2"]("",n.invoice.currency,"",n.subTotal,""),i["\u0275\u0275advance"](4),i["\u0275\u0275textInterpolate2"](" ",n.invoice.currency,"",(n.invoice.vat/100*n.subTotal).toFixed(2)," "),i["\u0275\u0275advance"](4),i["\u0275\u0275textInterpolate2"](" ",n.invoice.currency,"",n.invoice.vat/100*n.subTotal+n.subTotal," ")}}function M(e,t){if(1&e){var n=i["\u0275\u0275getCurrentView"]();i["\u0275\u0275elementStart"](0,"tr",71),i["\u0275\u0275elementStart"](1,"th",29),i["\u0275\u0275text"](2),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](3,"td"),i["\u0275\u0275element"](4,"input",72),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](5,"td"),i["\u0275\u0275element"](6,"input",73),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](7,"td"),i["\u0275\u0275element"](8,"input",74),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](9,"td"),i["\u0275\u0275text"](10),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](11,"td"),i["\u0275\u0275elementStart"](12,"button",75),i["\u0275\u0275listener"]("click",(function(){i["\u0275\u0275restoreView"](n);var e=t.index;return i["\u0275\u0275nextContext"](2).removeItem(e)})),i["\u0275\u0275text"](13,"Delete"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"]()}if(2&e){var r=t.index,l=i["\u0275\u0275nextContext"](2);i["\u0275\u0275property"]("formGroupName",r),i["\u0275\u0275advance"](2),i["\u0275\u0275textInterpolate"](r+1),i["\u0275\u0275advance"](8),i["\u0275\u0275textInterpolate1"](" ",l.invoiceForm.controls.items.controls[r].controls.unitPrice.value*l.invoiceForm.controls.items.controls[r].controls.unit.value," ")}}function O(e,t){if(1&e){var n=i["\u0275\u0275getCurrentView"]();i["\u0275\u0275elementStart"](0,"div"),i["\u0275\u0275elementStart"](1,"form",30),i["\u0275\u0275elementStart"](2,"div",31),i["\u0275\u0275elementStart"](3,"div",17),i["\u0275\u0275elementStart"](4,"h4",18),i["\u0275\u0275text"](5,"Order Info"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](6,"div",32),i["\u0275\u0275elementStart"](7,"label",33),i["\u0275\u0275text"](8,"Order Number"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275element"](9,"input",34),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](10,"div",35),i["\u0275\u0275elementStart"](11,"label",36),i["\u0275\u0275text"](12,"Order Status"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](13,"div",37),i["\u0275\u0275elementStart"](14,"label",38),i["\u0275\u0275element"](15,"input",39),i["\u0275\u0275elementStart"](16,"span"),i["\u0275\u0275text"](17,"Pending"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275element"](18,"span",40),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](19,"label",41),i["\u0275\u0275element"](20,"input",42),i["\u0275\u0275elementStart"](21,"span"),i["\u0275\u0275text"](22,"Processing"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275element"](23,"span",40),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](24,"label",43),i["\u0275\u0275element"](25,"input",44),i["\u0275\u0275elementStart"](26,"span"),i["\u0275\u0275text"](27,"Delivered"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275element"](28,"span",40),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](29,"div",45),i["\u0275\u0275elementStart"](30,"label",46),i["\u0275\u0275text"](31,"Order Date"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](32,"div",47),i["\u0275\u0275element"](33,"input",48,49),i["\u0275\u0275elementStart"](35,"div",50),i["\u0275\u0275elementStart"](36,"button",51),i["\u0275\u0275listener"]("click",(function(){return i["\u0275\u0275restoreView"](n),i["\u0275\u0275reference"](34).toggle()})),i["\u0275\u0275element"](37,"i",52),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275element"](38,"div",20),i["\u0275\u0275elementStart"](39,"div",21),i["\u0275\u0275elementStart"](40,"div",53),i["\u0275\u0275elementStart"](41,"h5",18),i["\u0275\u0275text"](42,"Bill From"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](43,"div",54),i["\u0275\u0275element"](44,"input",55),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](45,"div",54),i["\u0275\u0275element"](46,"textarea",56),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](47,"div",57),i["\u0275\u0275elementStart"](48,"h5",18),i["\u0275\u0275text"](49,"Bill To"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](50,"div",58),i["\u0275\u0275element"](51,"input",59),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](52,"div",58),i["\u0275\u0275element"](53,"textarea",60),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](54,"div",0),i["\u0275\u0275elementStart"](55,"div",61),i["\u0275\u0275elementStart"](56,"table",62),i["\u0275\u0275elementStart"](57,"thead",25),i["\u0275\u0275elementStart"](58,"tr"),i["\u0275\u0275elementStart"](59,"th",26),i["\u0275\u0275text"](60,"#"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](61,"th",26),i["\u0275\u0275text"](62,"Item Name"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](63,"th",26),i["\u0275\u0275text"](64,"Unit Price"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](65,"th",26),i["\u0275\u0275text"](66,"Unit"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](67,"th",26),i["\u0275\u0275text"](68,"Cost"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275element"](69,"th",26),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](70,"tbody",63),i["\u0275\u0275template"](71,M,14,3,"tr",64),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](72,"button",65),i["\u0275\u0275listener"]("click",(function(){return i["\u0275\u0275restoreView"](n),i["\u0275\u0275nextContext"]().addItem()})),i["\u0275\u0275text"](73,"Add Item"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](74,"div",1),i["\u0275\u0275elementStart"](75,"div",66),i["\u0275\u0275elementStart"](76,"p"),i["\u0275\u0275text"](77,"Sub total: "),i["\u0275\u0275elementStart"](78,"span"),i["\u0275\u0275text"](79),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](80,"p",67),i["\u0275\u0275text"](81,"Vat(%):"),i["\u0275\u0275elementStart"](82,"span"),i["\u0275\u0275element"](83,"input",68),i["\u0275\u0275text"](84),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](85,"h5",69),i["\u0275\u0275text"](86,"Grand Total: "),i["\u0275\u0275elementStart"](87,"span"),i["\u0275\u0275element"](88,"input",70),i["\u0275\u0275text"](89),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"]()}if(2&e){var r=i["\u0275\u0275nextContext"]();i["\u0275\u0275advance"](1),i["\u0275\u0275property"]("formGroup",r.invoiceForm),i["\u0275\u0275advance"](39),i["\u0275\u0275property"]("formGroup",r.invoiceForm.controls.billFrom),i["\u0275\u0275advance"](7),i["\u0275\u0275property"]("formGroup",r.invoiceForm.controls.billTo),i["\u0275\u0275advance"](24),i["\u0275\u0275property"]("ngForOf",r.invoiceForm.controls.items.controls),i["\u0275\u0275advance"](8),i["\u0275\u0275textInterpolate2"]("",r.invoiceForm.controls.currency.value,"",r.subTotal,""),i["\u0275\u0275advance"](5),i["\u0275\u0275textInterpolate2"](" ",r.invoiceForm.controls.currency.value," ",(r.invoiceForm.controls.vat.value/100*r.subTotal).toFixed(2)," "),i["\u0275\u0275advance"](5),i["\u0275\u0275textInterpolate2"](" ",r.invoiceForm.controls.currency.value," ",r.invoiceForm.controls.vat.value/100*r.subTotal+r.subTotal," ")}}var G=function(){function e(e,t,n,r,l){this.route=e,this.router=t,this.fb=n,this.dl=r,this.toastr=l,this.viewMode="edit",this.invoice={}}return e.prototype.ngOnInit=function(){var e=this;this.id=this.route.snapshot.params.id,this.isNew=!this.id,this.buildInvoiceForm(this.invoice),this.id&&(this.viewMode="print",this.dl.getInvoice(this.id).subscribe((function(t){e.invoice=t,e.buildInvoiceForm(e.invoice),e.subTotal=e.calculateSubtotal(e.invoiceForm.value)})))},e.prototype.buildInvoiceForm=function(e){var t=this;void 0===e&&(e={}),this.invoiceForm=this.fb.group({id:[e.id],orderNumber:[e.orderNumber],orderStatus:[e.orderStatus],currency:[e.currency],vat:[e.vat],orderDate:[e.orderDate?C.a.dateToNgbDate(e.orderDate):{}],billFrom:this.fb.group({name:[e.billFrom?e.billFrom.name:""],address:[e.billFrom?e.billFrom.address:""]}),billTo:this.fb.group({name:[e.billTo?e.billTo.name:""],address:[e.billTo?e.billTo.address:""]}),items:this.fb.array(e.items?e.items.map((function(e){return t.createItem(e)})):[])}),this.invoiceFormSub&&this.invoiceFormSub.unsubscribe(),this.invoiceFormSub=this.invoiceForm.valueChanges.subscribe((function(e){t.subTotal=t.calculateSubtotal(e)}))},e.prototype.createItem=function(e){return void 0===e&&(e={}),this.fb.group({name:[e.name],unit:[e.unit],unitPrice:[e.unitPrice]})},e.prototype.addItem=function(){this.invoiceForm.controls.items.push(this.createItem())},e.prototype.removeItem=function(e){this.invoiceForm.controls.items.removeAt(e)},e.prototype.saveInvoice=function(){var e=this;this.saving=!0,this.invoice=this.invoiceForm.value,this.invoice.orderDate=C.a.ngbDateToDate(this.invoiceForm.value.orderDate),this.dl.saveInvoice(this.invoiceForm.value).subscribe((function(t){e.viewMode="print",e.saving=!1,e.toastr.success("Invoice Saved!","Success!",{timeOut:3e3}),e.isNew&&e.router.navigateByUrl("/invoice/edit/"+t.id)}))},e.prototype.calculateSubtotal=function(e){var t=0;return e.items.forEach((function(e){t+=e.unit*e.unitPrice})),t},e.prototype.print=function(){window&&window.print()},e.\u0275fac=function(t){return new(t||e)(i["\u0275\u0275directiveInject"](l.a),i["\u0275\u0275directiveInject"](l.h),i["\u0275\u0275directiveInject"](k.FormBuilder),i["\u0275\u0275directiveInject"](o.a),i["\u0275\u0275directiveInject"](m.b))},e.\u0275cmp=i["\u0275\u0275defineComponent"]({type:e,selectors:[["app-invoice-detail"]],decls:8,vars:4,consts:[[1,"row"],[1,"col-md-12"],[1,"card"],[1,"card-body"],["class","d-flex mb-5",4,"ngIf"],["class","d-sm-flex mb-5",4,"ngIf"],["id","print-area",4,"ngIf"],[4,"ngIf"],[1,"d-flex","mb-5"],[1,"m-auto"],[1,"btn","btn-outline-secondary","mr-3",3,"click"],["btnClass","btn-primary",3,"loading","click"],[1,"d-sm-flex","mb-5"],["routerLink","/invoice",1,"btn","btn-outline-secondary","mr-3","mb-sm-0","mb-3"],[1,"btn","btn-outline-secondary","mr-3","mb-sm-0","mb-3",3,"click"],[1,"btn","btn-primary","mb-sm-0","mb-3",3,"click"],["id","print-area"],[1,"col-md-6"],[1,"font-weight-bold"],[1,"col-md-6","text-sm-right"],[1,"mt-3","mb-4","border-top"],[1,"row","mb-5"],[1,"col-md-6","mb-3","mb-sm-0"],[2,"white-space","pre-line"],[1,"table","table-hover","mb-4"],[1,"bg-gray-300"],["scope","col"],[4,"ngFor","ngForOf"],[1,"invoice-summary","float-right"],["scope","row"],[3,"formGroup"],[1,"row","justify-content-between"],[1,"col-sm-4","form-group","mb-3","pl-0"],["for","orderNo"],["formControlName","orderNumber","type","text","id","orderNo","placeholder","Enter order number",1,"form-control"],[1,"col-md-3","text-right"],[1,"d-block","text-12","text-muted"],[1,"pr-0","mb-4"],[1,"radio","radio-reverse","radio-danger"],["type","radio","name","orderStatus","value","Pending","formControlName","orderStatus"],[1,"checkmark"],[1,"radio","radio-reverse","radio-warning"],["type","radio","name","orderStatus","value","Processing","formControlName","orderStatus"],[1,"radio","radio-reverse","radio-success"],["type","radio","name","orderStatus","value","Delivered","formControlName","orderStatus"],[1,"form-group","mb-3"],["for","picker1"],[1,"input-group"],["formControlName","orderDate","id","picker1","placeholder","yyyy-mm-dd","name","dp","ngbDatepicker","",1,"form-control","text-right"],["orderDatePicker","ngbDatepicker"],[1,"input-group-append"],["type","button",1,"btn","btn-secondary",3,"click"],[1,"icon-regular","i-Calendar-4"],[1,"col-md-6",3,"formGroup"],[1,"col-md-10","form-group","mb-3","pl-0"],["formControlName","name","type","text","id","billFrom","placeholder","Bill From",1,"form-control"],["formControlName","address","id","","placeholder","Bill From Address",1,"form-control"],[1,"col-md-6","text-right",3,"formGroup"],[1,"col-md-10","offset-md-2","form-group","mb-3","pr-0"],["formControlName","name","type","text","id","billFrom","placeholder","Bill From",1,"form-control","text-right"],["formControlName","address","id","","placeholder","Bill From Address",1,"form-control","text-right"],[1,"col-md-12","table-responsive"],[1,"table","table-hover","mb-3"],["formArrayName","items"],[3,"formGroupName",4,"ngFor","ngForOf"],[1,"btn","btn-primary","float-right","mb-4",3,"click"],[1,"invoice-summary","invoice-summary-input","float-right"],[1,"d-flex","align-items-center"],["type","text","formControlName","vat",1,"form-control","small-input"],[1,"font-weight-bold","d-flex","align-items-center"],["type","text","formControlName","currency",1,"form-control","small-input"],[3,"formGroupName"],["formControlName","name","type","text","placeholder","Item Name",1,"form-control"],["formControlName","unitPrice","type","number","placeholder","Unit Price",1,"form-control"],["formControlName","unit","type","number","placeholder","Unit",1,"form-control"],[1,"btn","btn-outline-secondary","float-right",3,"click"]],template:function(e,t){1&e&&(i["\u0275\u0275elementStart"](0,"div",0),i["\u0275\u0275elementStart"](1,"div",1),i["\u0275\u0275elementStart"](2,"div",2),i["\u0275\u0275elementStart"](3,"div",3),i["\u0275\u0275template"](4,T,6,1,"div",4),i["\u0275\u0275template"](5,V,8,0,"div",5),i["\u0275\u0275template"](6,P,64,16,"div",6),i["\u0275\u0275template"](7,O,90,10,"div",7),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"]()),2&e&&(i["\u0275\u0275advance"](4),i["\u0275\u0275property"]("ngIf","edit"===t.viewMode),i["\u0275\u0275advance"](1),i["\u0275\u0275property"]("ngIf","edit"!==t.viewMode),i["\u0275\u0275advance"](1),i["\u0275\u0275property"]("ngIf","edit"!==t.viewMode),i["\u0275\u0275advance"](1),i["\u0275\u0275property"]("ngIf","edit"===t.viewMode))},directives:[r.p,N.a,l.i,r.o,k["\u0275angular_packages_forms_forms_y"],k.NgControlStatusGroup,k.FormGroupDirective,k.DefaultValueAccessor,k.NgControlStatus,k.FormControlName,k.RadioControlValueAccessor,a.k,k.FormArrayName,k.FormGroupName,k.NumberValueAccessor],pipes:[r.f],styles:[""]}),e}(),B=[{path:"",component:F},{path:"new",component:G},{path:"edit/:id",component:G}],j=function(){function e(){}return e.\u0275mod=i["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=i["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[l.l.forChild(B)],l.l]}),e}(),A=n("jgPy");n.d(t,"InvoiceModule",(function(){return H}));var H=function(){function e(){}return e.\u0275mod=i["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=i["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[r.c,k.FormsModule,d.e,k.ReactiveFormsModule,A.a,a.m,j]]}),e}()}}]);