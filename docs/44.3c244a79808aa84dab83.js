(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{YBVt:function(e,t,n){"use strict";n.r(t);var r=n("Valr"),o=n("oOf3"),a=n("DUip"),i=n("TYT/"),c=n("cUzu"),l=function(){function e(e){this.http=e}return e.prototype.ngOnInit=function(){this.getContacts()},e.prototype.getContacts=function(){return this.http.get("api/users")},e.\u0275fac=function(t){return new(t||e)(i["\u0275\u0275inject"](c.c))},e.\u0275prov=i["\u0275\u0275defineInjectable"]({token:e,factory:e.\u0275fac,providedIn:"root"}),e}();function d(e,t){if(1&e&&(i["\u0275\u0275elementStart"](0,"div",6),i["\u0275\u0275elementStart"](1,"div",7),i["\u0275\u0275elementStart"](2,"div",8),i["\u0275\u0275elementStart"](3,"div",9),i["\u0275\u0275elementStart"](4,"div",10),i["\u0275\u0275element"](5,"img",11),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](6,"div",12),i["\u0275\u0275elementStart"](7,"p",13),i["\u0275\u0275text"](8),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](9,"p",14),i["\u0275\u0275text"](10,"Web Developer"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](11,"p",15),i["\u0275\u0275text"](12),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](13,"p",15),i["\u0275\u0275text"](14,"NO: 234-987-665-340"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"]()),2&e){var n=t.$implicit;i["\u0275\u0275advance"](5),i["\u0275\u0275property"]("src",n.avatar,i["\u0275\u0275sanitizeUrl"]),i["\u0275\u0275advance"](3),i["\u0275\u0275textInterpolate"](n.name),i["\u0275\u0275advance"](4),i["\u0275\u0275textInterpolate1"](" ",n.address," ")}}function p(e,t){if(1&e){var n=i["\u0275\u0275getCurrentView"]();i["\u0275\u0275elementStart"](0,"div",16),i["\u0275\u0275elementStart"](1,"pagination-controls",17),i["\u0275\u0275listener"]("pageChange",(function(e){return i["\u0275\u0275restoreView"](n),i["\u0275\u0275nextContext"]().page=e})),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"]()}}var m=function(e){return{itemsPerPage:9,currentPage:e}},u=[{path:"grid",component:function(){function e(e){this.contactService=e,this.page=1,this.contacts=[]}return e.prototype.ngOnInit=function(){var e=this;this.contactService.getContacts().subscribe((function(t){e.contacts=t}))},e.\u0275fac=function(t){return new(t||e)(i["\u0275\u0275directiveInject"](l))},e.\u0275cmp=i["\u0275\u0275defineComponent"]({type:e,selectors:[["app-contact-grid"]],decls:14,vars:7,consts:[[1,"breadcrumb"],["href",""],[1,"separator-breadcrumb","border-top"],[1,"row"],["class","col-lg-4 col-xl-4  mb-3",4,"ngFor","ngForOf"],["class","col-md-12 mt-3",4,"ngIf"],[1,"col-lg-4","col-xl-4","mb-3"],[1,"card"],[1,"card-body"],[1,"ul-contact-page__profile"],[1,"user-profile"],["alt","",1,"profile-picture","mb-2",3,"src"],[1,"ul-contact-page__info"],[1,"m-0","text-24"],[1,"text-muted","m-0"],[1,"text-muted","mt-3"],[1,"col-md-12","mt-3"],["previousLabel","","nextLabel","",3,"pageChange"]],template:function(e,t){1&e&&(i["\u0275\u0275elementStart"](0,"div",0),i["\u0275\u0275elementStart"](1,"h1"),i["\u0275\u0275text"](2,"Grid"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](3,"ul"),i["\u0275\u0275elementStart"](4,"li"),i["\u0275\u0275elementStart"](5,"a",1),i["\u0275\u0275text"](6,"Contacts"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](7,"li"),i["\u0275\u0275text"](8,"Grid"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275element"](9,"div",2),i["\u0275\u0275elementStart"](10,"div",3),i["\u0275\u0275template"](11,d,15,3,"div",4),i["\u0275\u0275pipe"](12,"paginate"),i["\u0275\u0275template"](13,p,2,0,"div",5),i["\u0275\u0275elementEnd"]()),2&e&&(i["\u0275\u0275advance"](11),i["\u0275\u0275property"]("ngForOf",i["\u0275\u0275pipeBind2"](12,2,t.contacts,i["\u0275\u0275pureFunction1"](5,m,t.page))),i["\u0275\u0275advance"](2),i["\u0275\u0275property"]("ngIf",null==t.contacts?null:t.contacts.length))},directives:[r.o,r.p,o.c],pipes:[o.b],styles:[""]}),e}()}],s=function(){function e(){}return e.\u0275mod=i["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=i["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[a.l.forChild(u)],a.l]}),e}();n.d(t,"ContactsModule",(function(){return f}));var f=function(){function e(){}return e.\u0275mod=i["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=i["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[r.c,o.a,s]]}),e}()}}]);