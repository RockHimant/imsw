(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{jykL:function(e,t,n){"use strict";n.r(t);var a=n("Valr"),r=n("DUip"),i=n("TYT/"),o=n("goBR"),c=n("h2Ha"),l=n("aKbQ"),s=n("rXAn"),d=n("QJY3"),u=function(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var a,r,i=n.call(e),o=[];try{for(;(void 0===t||t-- >0)&&!(a=i.next()).done;)o.push(a.value)}catch(c){r={error:c}}finally{try{a&&!a.done&&(n=i.return)&&n.call(i)}finally{if(r)throw r.error}}return o},p=["msgForm"],m=["msgInput"];function f(e,t){if(1&e&&(i["\u0275\u0275elementStart"](0,"div",8),i["\u0275\u0275element"](1,"img",9),i["\u0275\u0275elementStart"](2,"p",10),i["\u0275\u0275text"](3),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"]()),2&e){var n=i["\u0275\u0275nextContext"]();i["\u0275\u0275advance"](1),i["\u0275\u0275property"]("src",null==n.activeContact?null:n.activeContact.avatar,i["\u0275\u0275sanitizeUrl"])("alt",null==n.activeContact?null:n.activeContact.name),i["\u0275\u0275advance"](2),i["\u0275\u0275textInterpolate"](null==n.activeContact?null:n.activeContact.name)}}function v(e,t){if(1&e&&(i["\u0275\u0275elementStart"](0,"div",16),i["\u0275\u0275element"](1,"img",17),i["\u0275\u0275elementStart"](2,"div",18),i["\u0275\u0275elementStart"](3,"div",19),i["\u0275\u0275elementStart"](4,"p",20),i["\u0275\u0275text"](5),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](6,"span",21),i["\u0275\u0275text"](7),i["\u0275\u0275pipe"](8,"date"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](9,"p",22),i["\u0275\u0275text"](10),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"]()),2&e){var n=i["\u0275\u0275nextContext"]().$implicit,a=i["\u0275\u0275nextContext"](2);i["\u0275\u0275advance"](1),i["\u0275\u0275property"]("src",null==a.user?null:a.user.avatar,i["\u0275\u0275sanitizeUrl"])("alt",null==a.user?null:a.user.name),i["\u0275\u0275advance"](4),i["\u0275\u0275textInterpolate"](null==a.user?null:a.user.name),i["\u0275\u0275advance"](2),i["\u0275\u0275textInterpolate"](i["\u0275\u0275pipeBind1"](8,5,n.time)),i["\u0275\u0275advance"](3),i["\u0275\u0275textInterpolate"](n.text)}}function h(e,t){if(1&e&&(i["\u0275\u0275elementStart"](0,"div",19),i["\u0275\u0275elementStart"](1,"div",18),i["\u0275\u0275elementStart"](2,"div",19),i["\u0275\u0275elementStart"](3,"p",20),i["\u0275\u0275text"](4),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](5,"span",21),i["\u0275\u0275text"](6),i["\u0275\u0275pipe"](7,"date"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](8,"p",22),i["\u0275\u0275text"](9),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275element"](10,"img",23),i["\u0275\u0275elementEnd"]()),2&e){var n=i["\u0275\u0275nextContext"]().$implicit,a=i["\u0275\u0275nextContext"](2);i["\u0275\u0275advance"](4),i["\u0275\u0275textInterpolate"](null==a.activeContact?null:a.activeContact.name),i["\u0275\u0275advance"](2),i["\u0275\u0275textInterpolate"](i["\u0275\u0275pipeBind1"](7,5,n.time)),i["\u0275\u0275advance"](3),i["\u0275\u0275textInterpolate"](n.text),i["\u0275\u0275advance"](1),i["\u0275\u0275property"]("src",null==a.activeContact?null:a.activeContact.avatar,i["\u0275\u0275sanitizeUrl"])("alt",null==a.activeContact?null:a.activeContact.name)}}function g(e,t){if(1&e&&(i["\u0275\u0275elementStart"](0,"div",13),i["\u0275\u0275template"](1,v,11,7,"div",14),i["\u0275\u0275template"](2,h,11,7,"div",15),i["\u0275\u0275elementEnd"]()),2&e){var n=t.$implicit,a=i["\u0275\u0275nextContext"](2);i["\u0275\u0275advance"](1),i["\u0275\u0275property"]("ngIf",n.contactId!==a.activeContact.id),i["\u0275\u0275advance"](1),i["\u0275\u0275property"]("ngIf",n.contactId===a.activeContact.id)}}var b=function(){return{suppressScrollX:!0}};function S(e,t){if(1&e&&(i["\u0275\u0275elementStart"](0,"div",11),i["\u0275\u0275template"](1,g,3,2,"div",12),i["\u0275\u0275elementEnd"]()),2&e){var n=i["\u0275\u0275nextContext"]();i["\u0275\u0275property"]("perfectScrollbar",i["\u0275\u0275pureFunction0"](2,b)),i["\u0275\u0275advance"](1),i["\u0275\u0275property"]("ngForOf",null==n.chatCollection?null:n.chatCollection.chats)}}function x(e,t){if(1&e){var n=i["\u0275\u0275getCurrentView"]();i["\u0275\u0275elementStart"](0,"div",24),i["\u0275\u0275elementStart"](1,"form",25,26),i["\u0275\u0275listener"]("ngSubmit",(function(e){return i["\u0275\u0275restoreView"](n),i["\u0275\u0275nextContext"]().sendMessage(e)}))("keyup.enter",(function(e){return i["\u0275\u0275restoreView"](n),i["\u0275\u0275nextContext"]().sendMessage(e)})),i["\u0275\u0275elementStart"](3,"div",27),i["\u0275\u0275element"](4,"textarea",28,29),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](6,"div",19),i["\u0275\u0275element"](7,"div",30),i["\u0275\u0275elementStart"](8,"button",31),i["\u0275\u0275element"](9,"i",32),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](10,"button",33),i["\u0275\u0275element"](11,"i",34),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"]()}}function y(e,t){1&e&&i["\u0275\u0275element"](0,"div",35)}var C=function(){return{scale:".2",delay:"400ms",duration:"400ms"}},w=function(e){return{value:"*",params:e}},I=function(){return{y:"120px",delay:"600ms",duration:"400ms"}};function E(e,t){1&e&&(i["\u0275\u0275elementStart"](0,"div",36),i["\u0275\u0275elementStart"](1,"div",37),i["\u0275\u0275element"](2,"i",38),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](3,"p",39),i["\u0275\u0275text"](4,"Select a contact and start chat."),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"]()),2&e&&(i["\u0275\u0275advance"](1),i["\u0275\u0275property"]("@animate",i["\u0275\u0275pureFunction1"](3,w,i["\u0275\u0275pureFunction0"](2,C))),i["\u0275\u0275advance"](2),i["\u0275\u0275property"]("@animate",i["\u0275\u0275pureFunction1"](6,w,i["\u0275\u0275pureFunction0"](5,I))))}var F=function(){function e(e){this.chatService=e,this.user=new l.b,this.activeContact=new l.b}return e.prototype.ngOnInit=function(){var e=this;this.userUpdateSub=this.chatService.onUserUpdated.subscribe((function(t){console.log(t),e.user=t})),this.chatSelectSub=this.chatService.onChatSelected.subscribe((function(t){t&&(e.chatCollection=t.chatCollection,e.activeContact=t.contact,e.initMsgForm())})),this.chatUpdateSub=this.chatService.onChatsUpdated.subscribe((function(t){e.chatCollection.chats.push(t),e.scrollToBottom()}))},e.prototype.ngOnDestroy=function(){this.userUpdateSub&&this.userUpdateSub.unsubscribe(),this.chatSelectSub&&this.chatSelectSub.unsubscribe(),this.chatUpdateSub&&this.chatUpdateSub.unsubscribe()},e.prototype.sendMessage=function(e){var t=this,n={contactId:this.chatService.user.id,text:this.msgForm.form.value.message,time:(new Date).toISOString()};this.chatCollection.chats.push(n),this.chatService.updateChats(this.chatCollection.id,function(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(u(arguments[t]));return e}(this.chatCollection.chats)).subscribe((function(e){t.initMsgForm()})),this.chatService.autoReply({contactId:this.activeContact.id,text:"Hi, I'm "+this.activeContact.name+". Your imaginary friend.",time:(new Date).toISOString()})},e.prototype.initMsgForm=function(){var e=this;setTimeout((function(){e.msgForm.reset(),e.msgInput.first.nativeElement.focus(),e.scrollToBottom()}))},e.prototype.scrollToBottom=function(){var e=this;setTimeout((function(){e.psContainer.update(),e.psContainer.scrollToBottom(0,400)}))},e.\u0275fac=function(t){return new(t||e)(i["\u0275\u0275directiveInject"](l.a))},e.\u0275cmp=i["\u0275\u0275defineComponent"]({type:e,selectors:[["app-chat-contents"]],viewQuery:function(e,t){var n;1&e&&(i["\u0275\u0275viewQuery"](c.a,!0),i["\u0275\u0275viewQuery"](p,!0),i["\u0275\u0275viewQuery"](m,!0)),2&e&&(i["\u0275\u0275queryRefresh"](n=i["\u0275\u0275loadQuery"]())&&(t.psContainer=n.first),i["\u0275\u0275queryRefresh"](n=i["\u0275\u0275loadQuery"]())&&(t.msgForm=n.first),i["\u0275\u0275queryRefresh"](n=i["\u0275\u0275loadQuery"]())&&(t.msgInput=n))},inputs:{matSidenav:"matSidenav"},decls:9,vars:5,consts:[[1,"d-flex","pl-3","pr-3","pt-2","pb-2","o-hidden","box-shadow-1","chat-topbar"],["appSidebarToggler","chat-sidebar",1,"link-icon","d-md-none"],[1,"icon-regular","i-Right","ml-0","mr-3"],["class","d-flex align-items-center",4,"ngIf"],["class","chat-content rtl-ps-none",3,"perfectScrollbar",4,"ngIf"],["class","pl-3 pr-3 pt-3 pb-3 box-shadow-1 chat-input-area",4,"ngIf"],["class","spinner-glow spinner-glow-warning",4,"ngIf"],["class","app-inro-circle",4,"ngIf"],[1,"d-flex","align-items-center"],[1,"avatar-sm","rounded-circle","mr-2",3,"src","alt"],[1,"m-0","text-title","text-16","flex-grow-1"],[1,"chat-content","rtl-ps-none",3,"perfectScrollbar"],["class","mb-4",4,"ngFor","ngForOf"],[1,"mb-4"],["class","d-flex user",4,"ngIf"],["class","d-flex",4,"ngIf"],[1,"d-flex","user"],[1,"avatar-sm","rounded-circle","mr-3",3,"src","alt"],[1,"message","flex-grow-1"],[1,"d-flex"],[1,"mb-1","text-title","text-16","flex-grow-1"],[1,"text-small","text-muted"],[1,"m-0"],[1,"avatar-sm","rounded-circle","ml-3",3,"src","alt"],[1,"pl-3","pr-3","pt-3","pb-3","box-shadow-1","chat-input-area"],[1,"inputForm",3,"ngSubmit","keyup.enter"],["msgForm","ngForm"],[1,"form-group"],["ngModel","","placeholder","Type your message","name","message","id","message","cols","30","rows","3",1,"form-control","form-control-rounded"],["msgInput",""],[1,"flex-grow-1"],[1,"btn","btn-icon","btn-rounded","btn-primary","mr-2"],[1,"i-Paper-Plane"],["type","button",1,"btn","btn-icon","btn-rounded","btn-outline-primary"],[1,"i-Add-File"],[1,"spinner-glow","spinner-glow-warning"],[1,"app-inro-circle"],[1,"border","rounded-circle","big-bubble"],[1,"i-Speach-Bubbles"],[1,"text-16"]],template:function(e,t){1&e&&(i["\u0275\u0275elementStart"](0,"div"),i["\u0275\u0275elementStart"](1,"div",0),i["\u0275\u0275elementStart"](2,"a",1),i["\u0275\u0275element"](3,"i",2),i["\u0275\u0275elementEnd"](),i["\u0275\u0275template"](4,f,4,3,"div",3),i["\u0275\u0275elementEnd"](),i["\u0275\u0275template"](5,S,2,3,"div",4),i["\u0275\u0275template"](6,x,12,0,"div",5),i["\u0275\u0275template"](7,y,1,0,"div",6),i["\u0275\u0275template"](8,E,5,8,"div",7),i["\u0275\u0275elementEnd"]()),2&e&&(i["\u0275\u0275advance"](4),i["\u0275\u0275property"]("ngIf",null==t.activeContact?null:t.activeContact.id),i["\u0275\u0275advance"](1),i["\u0275\u0275property"]("ngIf",!t.chatService.loadingCollection&&t.chatCollection),i["\u0275\u0275advance"](1),i["\u0275\u0275property"]("ngIf",t.chatCollection&&!t.chatService.loadingCollection),i["\u0275\u0275advance"](1),i["\u0275\u0275property"]("ngIf",t.chatService.loadingCollection),i["\u0275\u0275advance"](1),i["\u0275\u0275property"]("ngIf",!t.chatCollection&&!t.chatService.loadingCollection))},directives:[o.d,a.p,c.a,a.o,d["\u0275angular_packages_forms_forms_y"],d.NgControlStatusGroup,d.NgForm,d.DefaultValueAccessor,d.NgControlStatus,d.NgModel],pipes:[a.f],styles:[""],data:{animation:[s.a]}}),e}(),U=n("YyUd"),B=function(e,t){return{"border-bottom":e,online:t}};function k(e,t){if(1&e){var n=i["\u0275\u0275getCurrentView"]();i["\u0275\u0275elementStart"](0,"div",11),i["\u0275\u0275listener"]("click",(function(){i["\u0275\u0275restoreView"](n);var e=t.$implicit;return i["\u0275\u0275nextContext"]().getChatByContact(e.contactId)})),i["\u0275\u0275pipe"](1,"getValueByKey"),i["\u0275\u0275element"](2,"img",12),i["\u0275\u0275pipe"](3,"getValueByKey"),i["\u0275\u0275elementStart"](4,"div"),i["\u0275\u0275elementStart"](5,"h6",13),i["\u0275\u0275text"](6),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](7,"span",14),i["\u0275\u0275text"](8),i["\u0275\u0275pipe"](9,"date"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"]()}if(2&e){var a=t.$implicit,r=t.index,o=i["\u0275\u0275nextContext"]();i["\u0275\u0275property"]("ngClass",i["\u0275\u0275pureFunction2"](14,B,r!=(null==o.currentUser?null:o.currentUser.chatInfo.length)-1,"online"===i["\u0275\u0275pipeBind3"](1,4,o.contacts,a.contactId,"status"))),i["\u0275\u0275advance"](2),i["\u0275\u0275property"]("src",i["\u0275\u0275pipeBind3"](3,8,o.contacts,a.contactId,"avatar"),i["\u0275\u0275sanitizeUrl"]),i["\u0275\u0275advance"](4),i["\u0275\u0275textInterpolate"](a.contactName),i["\u0275\u0275advance"](2),i["\u0275\u0275textInterpolate"](i["\u0275\u0275pipeBind1"](9,12,a.lastChatTime))}}var O=function(e){return{online:e}};function M(e,t){if(1&e){var n=i["\u0275\u0275getCurrentView"]();i["\u0275\u0275elementStart"](0,"div",15),i["\u0275\u0275listener"]("click",(function(){i["\u0275\u0275restoreView"](n);var e=t.$implicit;return i["\u0275\u0275nextContext"]().getChatByContact(e.id)})),i["\u0275\u0275element"](1,"img",12),i["\u0275\u0275elementStart"](2,"h6",16),i["\u0275\u0275text"](3),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"]()}if(2&e){var a=t.$implicit;i["\u0275\u0275property"]("ngClass",i["\u0275\u0275pureFunction1"](3,O,"online"===a.status)),i["\u0275\u0275advance"](1),i["\u0275\u0275property"]("src",a.avatar,i["\u0275\u0275sanitizeUrl"]),i["\u0275\u0275advance"](2),i["\u0275\u0275textInterpolate"](a.name)}}var T=function(){return{suppressScrollX:!0}},D=function(){function e(e){this.chatService=e,this.isSidenavOpen=!0,this.currentUser=new l.b}return e.prototype.ngOnInit=function(){var e=this;this.userUpdateSub=this.chatService.onUserUpdated.subscribe((function(t){e.currentUser=t})),this.loadDataSub=this.chatService.loadChatData().subscribe((function(t){e.currentUser=e.chatService.user,e.contacts=e.chatService.contacts}))},e.prototype.ngOnDestroy=function(){this.userUpdateSub&&this.userUpdateSub.unsubscribe(),this.loadDataSub&&this.loadDataSub.unsubscribe()},e.prototype.getChatByContact=function(e){this.chatService.getChatByContact(e).subscribe((function(e){console.log("from sub",e)}),(function(e){console.log(e)}))},e.\u0275fac=function(t){return new(t||e)(i["\u0275\u0275directiveInject"](l.a))},e.\u0275cmp=i["\u0275\u0275defineComponent"]({type:e,selectors:[["app-chat-left-sidebar"]],decls:13,vars:4,consts:[[1,"border-right"],[1,"pt-2","pb-2","pl-3","pr-3","d-flex","align-items-center","o-hidden","box-shadow-1","chat-topbar"],["appSidebarToggler","chat-sidebar",1,"link-icon","d-md-none"],[1,"icon-regular","ml-0","mr-3","i-Left"],[1,"form-group","m-0","flex-grow-1"],["type","text","id","search","placeholder","Search contacts",1,"form-control","form-control-rounded"],[1,"contacts-scrollable","rtl-ps-none",3,"perfectScrollbar"],[1,"mt-4","pb-2","pl-3","pr-3","font-weight-bold","text-muted","border-bottom"],["class","p-3 d-flex align-items-center contact",3,"ngClass","click",4,"ngFor","ngForOf"],[1,"mt-3","pb-2","pl-3","pr-3","font-weight-bold","text-muted","border-bottom"],["class","p-3 d-flex border-bottom align-items-center contact",3,"ngClass","click",4,"ngFor","ngForOf"],[1,"p-3","d-flex","align-items-center","contact",3,"ngClass","click"],["alt","",1,"avatar-sm","rounded-circle","mr-3",3,"src"],[1,"m-0"],[1,"text-muted","text-small"],[1,"p-3","d-flex","border-bottom","align-items-center","contact",3,"ngClass","click"],[1,""]],template:function(e,t){1&e&&(i["\u0275\u0275elementStart"](0,"div",0),i["\u0275\u0275elementStart"](1,"div",1),i["\u0275\u0275elementStart"](2,"a",2),i["\u0275\u0275element"](3,"i",3),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](4,"div",4),i["\u0275\u0275element"](5,"input",5),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](6,"div",6),i["\u0275\u0275elementStart"](7,"div",7),i["\u0275\u0275text"](8,"Recent"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275template"](9,k,10,17,"div",8),i["\u0275\u0275elementStart"](10,"div",9),i["\u0275\u0275text"](11,"Contacts"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275template"](12,M,4,5,"div",10),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"]()),2&e&&(i["\u0275\u0275advance"](6),i["\u0275\u0275property"]("perfectScrollbar",i["\u0275\u0275pureFunction0"](3,T)),i["\u0275\u0275advance"](3),i["\u0275\u0275property"]("ngForOf",null==t.currentUser?null:t.currentUser.chatInfo),i["\u0275\u0275advance"](3),i["\u0275\u0275property"]("ngForOf",t.contacts))},directives:[o.d,c.a,a.o,a.n],pipes:[U.a,a.f],styles:[""]}),e}(),V=[{path:"",component:function(){function e(){}return e.prototype.ngOnInit=function(){},e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=i["\u0275\u0275defineComponent"]({type:e,selectors:[["app-chat"]],decls:5,vars:0,consts:[["appSidebarContainer","",1,"card","chat-sidebar-container"],["appSidebarContent","",1,"chat-content-wrap"],["appSidebar","chat-sidebar",1,"chat-sidebar-wrap"]],template:function(e,t){1&e&&(i["\u0275\u0275elementStart"](0,"div",0),i["\u0275\u0275elementStart"](1,"div",1),i["\u0275\u0275element"](2,"app-chat-contents"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](3,"div",2),i["\u0275\u0275element"](4,"app-chat-left-sidebar"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"]())},directives:[o.a,o.b,F,o.c,D],styles:[""]}),e}()}],Q=function(){function e(){}return e.\u0275mod=i["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=i["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[r.l.forChild(V)],r.l]}),e}(),j=n("mnDI"),N=n("aYsj");n.d(t,"ChatModule",(function(){return R}));var R=function(){function e(){}return e.\u0275mod=i["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=i["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[a.c,j.a,N.a,d.FormsModule,c.b,Q]]}),e}()}}]);