(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{tPw2:function(t,e,i){"use strict";i.d(e,"a",function(){return D}),i.d(e,"d",function(){return T}),i.d(e,"e",function(){return L}),i.d(e,"b",function(){return P}),i.d(e,"c",function(){return N});var a=i("Ji7U"),r=i("LK+K"),n=i("vuIU"),o=i("1OyB"),l=i("8Y7J"),s=i("MCLT"),d=i("SVse"),c=function(t,e,i,a,r,n,o){return{vertical:t,horizontal:e,small:i,"large-filled":a,"large-filled-symbols":r,"large-empty":n,"large-empty-symbols":o}};function p(t,e){if(1&t&&l.Sb(0,"aw-wizard-navigation-bar",2),2&t){var i=l.kc();l.rc("direction",i.navBarDirection)("ngClass",l.Cc(2,c,"left"==i.navBarLocation,"top"==i.navBarLocation,"small"==i.navBarLayout,"large-filled"==i.navBarLayout,"large-filled-symbols"==i.navBarLayout,"large-empty"==i.navBarLayout,"large-empty-symbols"==i.navBarLayout))}}function u(t,e){if(1&t&&l.Sb(0,"aw-wizard-navigation-bar",2),2&t){var i=l.kc();l.rc("direction",i.navBarDirection)("ngClass",l.Cc(2,c,"right"==i.navBarLocation,"bottom"==i.navBarLocation,"small"==i.navBarLayout,"large-filled"==i.navBarLayout,"large-filled-symbols"==i.navBarLayout,"large-empty"==i.navBarLayout,"large-empty-symbols"==i.navBarLayout))}}var w=function(t,e){return{"wizard-steps":!0,vertical:t,horizontal:e}},g=["*"];function h(t,e){if(1&t&&l.Tb(0,5),2&t){var i=l.kc().$implicit;l.rc("ngTemplateOutlet",i.stepTitleTemplate.templateRef)}}function f(t,e){if(1&t&&(l.Vb(0),l.Uc(1),l.Ub()),2&t){var i=l.kc().$implicit;l.Db(1),l.Vc(i.stepTitle)}}var b=function(t){return{"font-family":t}},v=function(t,e,i,a,r,n){return{default:t,current:e,done:i,editing:a,optional:r,navigable:n}};function z(t,e){if(1&t&&(l.Xb(0,"li",1),l.Xb(1,"div"),l.Xb(2,"a",2),l.Sc(3,h,1,1,"ng-container",3),l.Sc(4,f,2,1,"ng-container",4),l.Wb(),l.Wb(),l.Wb()),2&t){var i=e.$implicit,a=l.kc();l.rc("ngStyle",l.wc(6,b,i.navigationSymbol.fontFamily))("ngClass",l.Bc(8,v,a.isDefault(i),a.isCurrent(i),a.isDone(i),a.isEditing(i),a.isOptional(i),a.isNavigable(i))),l.Eb("step-symbol",i.navigationSymbol.symbol),l.Db(2),l.rc("awGoToStep",i),l.Db(1),l.rc("ngIf",i.stepTitleTemplate),l.Db(1),l.rc("ngIf",!i.stepTitleTemplate)}}var x=function(){var t=function t(e){Object(o.a)(this,t),this.templateRef=e};return t.\u0275fac=function(e){return new(e||t)(l.Rb(l.N))},t.\u0275dir=l.Mb({type:t,selectors:[["ng-template","awStepTitle",""],["ng-template","awWizardStepTitle",""]]}),t}(),S=function(){var t=function(){function t(){Object(o.a)(this,t),this.navigationSymbol={symbol:""},this.completed=!1,this.selected=!1,this.defaultSelected=!1,this.optional=!1,this.canEnter=!0,this.canExit=!0,this.stepEnter=new l.o,this.stepExit=new l.o}return Object(n.a)(t,[{key:"enter",value:function(t){this.stepEnter.emit(t)}},{key:"exit",value:function(t){this.stepExit.emit(t)}},{key:"canEnterStep",value:function(e){return t.canTransitionStep(this.canEnter,e)}},{key:"canExitStep",value:function(e){return t.canTransitionStep(this.canExit,e)}},{key:"hidden",get:function(){return!this.selected}}],[{key:"canTransitionStep",value:function(t,e){return Object(s.isBoolean)(t)?Promise.resolve(t):t instanceof Function?Promise.resolve(t(e)):Promise.reject(new Error("Input value '".concat(t,"' is neither a boolean nor a function")))}}]),t}();return t.\u0275fac=function(e){return new(e||t)},t.\u0275dir=l.Mb({type:t,contentQueries:function(t,e,i){var a;1&t&&l.Kb(i,x,!0),2&t&&l.Ec(a=l.ic())&&(e.stepTitleTemplate=a.first)},hostVars:1,hostBindings:function(t,e){2&t&&l.ac("hidden",e.hidden)},inputs:{navigationSymbol:"navigationSymbol",canEnter:"canEnter",canExit:"canExit",stepId:"stepId",stepTitle:"stepTitle"},outputs:{stepEnter:"stepEnter",stepExit:"stepExit"}}),t}(),m={Forwards:0,Backwards:1,Stay:2};m[m.Forwards]="Forwards",m[m.Backwards]="Backwards",m[m.Stay]="Stay";var y=function(){function t(e){Object(o.a)(this,t),this.wizardState=e}return Object(n.a)(t,[{key:"goToPreviousStep",value:function(t,e){this.wizardState.hasPreviousStep()&&this.goToStep(this.wizardState.currentStepIndex-1,t,e)}},{key:"goToNextStep",value:function(t,e){this.wizardState.hasNextStep()&&this.goToStep(this.wizardState.currentStepIndex+1,t,e)}}]),t}(),k=function(t){Object(a.a)(i,t);var e=Object(r.a)(i);function i(t){return Object(o.a)(this,i),e.call(this,t)}return Object(n.a)(i,[{key:"canGoToStep",value:function(t){var e=this,i=this.wizardState.hasStep(t),a=this.wizardState.getMovingDirection(t);return Promise.resolve(i).then(function(t){return t?e.wizardState.currentStep.canExitStep(a):Promise.resolve(!1)}).then(function(i){return i?e.wizardState.getStepAtIndex(t).canEnterStep(a):Promise.resolve(!1)})}},{key:"goToStep",value:function(t,e,i){var a=this;this.canGoToStep(t).then(function(r){if(r){var n=a.wizardState.getMovingDirection(t);e&&e.emit(),a.wizardState.currentStep.completed=!0,a.wizardState.currentStep.exit(n),a.wizardState.currentStep.selected=!1,a.wizardState.currentStepIndex=t,a.wizardState.currentStep.enter(n),a.wizardState.currentStep.selected=!0,i&&i.emit()}else a.wizardState.currentStep.exit(m.Stay),a.wizardState.currentStep.enter(m.Stay)})}},{key:"isNavigable",value:function(t){return!0}},{key:"reset",value:function(){if(!this.wizardState.hasStep(this.wizardState.defaultStepIndex))throw new Error("The wizard doesn't contain a step with index ".concat(this.wizardState.defaultStepIndex));this.wizardState.wizardSteps.forEach(function(t){t.completed=!1,t.selected=!1}),this.wizardState.currentStepIndex=this.wizardState.defaultStepIndex,this.wizardState.currentStep.selected=!0,this.wizardState.currentStep.enter(m.Forwards)}}]),i}(y),I=function(){var t=function(t){Object(a.a)(i,t);var e=Object(r.a)(i);function i(){var t;return Object(o.a)(this,i),(t=e.apply(this,arguments)).stepExit=new l.o,t.canExit=!1,t}return Object(n.a)(i,[{key:"enter",value:function(t){this.completed=!0,this.stepEnter.emit(t)}},{key:"exit",value:function(t){this.completed=!1,this.stepExit.emit(t)}}]),i}(S);return t.\u0275fac=function(e){return O(e||t)},t.\u0275dir=l.Mb({type:t,features:[l.Ab]}),t}(),O=l.Zb(I),B=function(t){Object(a.a)(i,t);var e=Object(r.a)(i);function i(t){return Object(o.a)(this,i),e.call(this,t)}return Object(n.a)(i,[{key:"canGoToStep",value:function(t){var e=this,i=this.wizardState.hasStep(t),a=this.wizardState.getMovingDirection(t);return Promise.resolve(i).then(function(t){return t?e.wizardState.currentStep.canExitStep(a):Promise.resolve(!1)}).then(function(i){return i?e.wizardState.getStepAtIndex(t).canEnterStep(a):Promise.resolve(!1)}).then(function(i){if(i){var a=e.wizardState.wizardSteps.filter(function(e,i){return i<t}).every(function(t){return t.completed||t.optional||t.selected});return Promise.resolve(!(e.wizardState.getStepAtIndex(t)instanceof I)||a)}return Promise.resolve(!1)})}},{key:"goToStep",value:function(t,e,i){var a=this;this.canGoToStep(t).then(function(r){if(r){var n=a.wizardState.getMovingDirection(t);e&&e.emit(),a.wizardState.currentStep.completed=!0,a.wizardState.currentStep.exit(n),a.wizardState.currentStep.selected=!1,a.wizardState.currentStepIndex=t,a.wizardState.currentStep.enter(n),a.wizardState.currentStep.selected=!0,i&&i.emit()}else a.wizardState.currentStep.exit(m.Stay),a.wizardState.currentStep.enter(m.Stay)})}},{key:"isNavigable",value:function(t){return!(this.wizardState.getStepAtIndex(t)instanceof I)||this.wizardState.wizardSteps.filter(function(e,i){return i<t}).every(function(t){return t.completed||t.optional||t.selected})}},{key:"reset",value:function(){if(!this.wizardState.hasStep(this.wizardState.defaultStepIndex))throw new Error("The wizard doesn't contain a step with index ".concat(this.wizardState.defaultStepIndex));if(this.wizardState.getStepAtIndex(this.wizardState.defaultStepIndex)instanceof I&&1!==this.wizardState.wizardSteps.length)throw new Error("The default step index ".concat(this.wizardState.defaultStepIndex," references a completion step"));this.wizardState.wizardSteps.forEach(function(t){t.completed=!1,t.selected=!1}),this.wizardState.currentStepIndex=this.wizardState.defaultStepIndex,this.wizardState.currentStep.selected=!0,this.wizardState.currentStep.enter(m.Forwards)}}]),i}(y),E=function(t){Object(a.a)(i,t);var e=Object(r.a)(i);function i(t){return Object(o.a)(this,i),e.call(this,t)}return Object(n.a)(i,[{key:"canGoToStep",value:function(t){var e=this,i=this.wizardState.hasStep(t),a=this.wizardState.getMovingDirection(t);return Promise.resolve(i).then(function(t){return t?e.wizardState.currentStep.canExitStep(a):Promise.resolve(!1)}).then(function(i){return i?e.wizardState.getStepAtIndex(t).canEnterStep(a):Promise.resolve(!1)}).then(function(i){return Promise.resolve(!!i&&e.wizardState.wizardSteps.filter(function(i,a){return a<t&&a!==e.wizardState.currentStepIndex}).every(function(t){return t.completed||t.optional}))})}},{key:"goToStep",value:function(t,e,i){var a=this;this.canGoToStep(t).then(function(r){if(r){var n=a.wizardState.getMovingDirection(t);e&&e.emit(),a.wizardState.currentStep.completed=!0,a.wizardState.currentStep.exit(n),a.wizardState.currentStep.selected=!1,a.wizardState.wizardSteps.filter(function(e,i){return a.wizardState.currentStepIndex>t&&i>t}).forEach(function(t){return t.completed=!1}),a.wizardState.currentStepIndex=t,a.wizardState.currentStep.enter(n),a.wizardState.currentStep.selected=!0,i&&i.emit()}else a.wizardState.currentStep.exit(m.Stay),a.wizardState.currentStep.enter(m.Stay)})}},{key:"isNavigable",value:function(t){return t<this.wizardState.currentStepIndex}},{key:"reset",value:function(){var t=this;if(!this.wizardState.hasStep(this.wizardState.defaultStepIndex))throw new Error("The wizard doesn't contain a step with index ".concat(this.wizardState.defaultStepIndex));if(this.wizardState.wizardSteps.filter(function(e,i){return i<t.wizardState.defaultStepIndex}).some(function(t){return!t.optional}))throw new Error("The default step index ".concat(this.wizardState.defaultStepIndex," is located after a non optional step"));this.wizardState.wizardSteps.forEach(function(t){t.completed=!1,t.selected=!1}),this.wizardState.currentStepIndex=this.wizardState.defaultStepIndex,this.wizardState.currentStep.selected=!0,this.wizardState.currentStep.enter(m.Forwards)}}]),i}(y),j=function(){var t=function(){function t(){Object(o.a)(this,t),this._defaultStepIndex=0,this.wizardSteps=[],this.currentStepIndex=-1}return Object(n.a)(t,[{key:"updateNavigationMode",value:function(t){this.navigationMode=function(t,e){switch(t){case"free":return new k(e);case"semi-strict":return new B(e);case"strict":default:return new E(e)}}(t,this)}},{key:"updateWizardSteps",value:function(t){this.wizardSteps.length>0&&this.currentStepIndex>-1&&(this.currentStepIndex=t.indexOf(this.wizardSteps[this.currentStepIndex])),this.wizardSteps=t}},{key:"hasStep",value:function(t){return this.wizardSteps.length>0&&0<=t&&t<this.wizardSteps.length}},{key:"hasPreviousStep",value:function(){return this.hasStep(this.currentStepIndex-1)}},{key:"hasNextStep",value:function(){return this.hasStep(this.currentStepIndex+1)}},{key:"isLastStep",value:function(){return this.wizardSteps.length>0&&this.currentStepIndex===this.wizardSteps.length-1}},{key:"getStepAtIndex",value:function(t){if(!this.hasStep(t))throw new Error("Expected a known step, but got stepIndex: ".concat(t,"."));return this.wizardSteps[t]}},{key:"getIndexOfStepWithId",value:function(t){return this.wizardSteps.findIndex(function(e){return e.stepId===t})}},{key:"getIndexOfStep",value:function(t){return this.wizardSteps.indexOf(t)}},{key:"getMovingDirection",value:function(t){return t>this.currentStepIndex?m.Forwards:t<this.currentStepIndex?m.Backwards:m.Stay}},{key:"defaultStepIndex",set:function(t){this._defaultStepIndex=t},get:function(){var t=this.wizardSteps.find(function(t){return t.defaultSelected});return t?this.getIndexOfStep(t):this._defaultStepIndex}},{key:"currentStep",get:function(){return this.hasStep(this.currentStepIndex)?this.wizardSteps[this.currentStepIndex]:null}},{key:"completed",get:function(){return this.wizardSteps.every(function(t){return t.completed||t.optional})}}]),t}();return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=l.Nb({token:t,factory:t.\u0275fac}),t}(),T=function(){var t=function(){function t(e){Object(o.a)(this,t),this.model=e,this.navBarLocation="top",this.navBarLayout="small",this.navBarDirection="left-to-right",this.navigationMode="strict",this.defaultStepIndex=0,this.disableNavigationBar=!1}return Object(n.a)(t,[{key:"ngOnChanges",value:function(t){for(var e=0,i=Object.keys(t);e<i.length;e++){var a=i[e],r=t[a];if(!r.firstChange)switch(a){case"defaultStepIndex":this.model.defaultStepIndex=parseInt(r.currentValue,10);break;case"disableNavigationBar":this.model.disableNavigationBar=r.currentValue;break;case"navigationMode":this.model.updateNavigationMode(r.currentValue)}}}},{key:"ngAfterContentInit",value:function(){var t=this;this.wizardSteps.changes.subscribe(function(e){t.model.updateWizardSteps(e.toArray())}),this.model.disableNavigationBar=this.disableNavigationBar,this.model.defaultStepIndex=this.defaultStepIndex,this.model.updateWizardSteps(this.wizardSteps.toArray()),this.model.updateNavigationMode(this.navigationMode),this.navigation.reset()}},{key:"horizontalOrientation",get:function(){return"top"===this.navBarLocation||"bottom"===this.navBarLocation}},{key:"verticalOrientation",get:function(){return"left"===this.navBarLocation||"right"===this.navBarLocation}},{key:"navigation",get:function(){return this.model.navigationMode}}]),t}();return t.\u0275fac=function(e){return new(e||t)(l.Rb(j))},t.\u0275cmp=l.Lb({type:t,selectors:[["aw-wizard"]],contentQueries:function(t,e,i){var a;1&t&&l.Kb(i,S,!1),2&t&&l.Ec(a=l.ic())&&(e.wizardSteps=a)},hostVars:4,hostBindings:function(t,e){2&t&&l.Jb("horizontal",e.horizontalOrientation)("vertical",e.verticalOrientation)},inputs:{navBarLocation:"navBarLocation",navBarLayout:"navBarLayout",navBarDirection:"navBarDirection",navigationMode:"navigationMode",defaultStepIndex:"defaultStepIndex",disableNavigationBar:"disableNavigationBar"},features:[l.Cb([j]),l.Bb],ngContentSelectors:g,decls:4,vars:6,consts:[[3,"direction","ngClass",4,"ngIf"],[3,"ngClass"],[3,"direction","ngClass"]],template:function(t,e){1&t&&(l.qc(),l.Sc(0,p,1,10,"aw-wizard-navigation-bar",0),l.Xb(1,"div",1),l.pc(2),l.Wb(),l.Sc(3,u,1,10,"aw-wizard-navigation-bar",0)),2&t&&(l.rc("ngIf","top"==e.navBarLocation||"left"==e.navBarLocation),l.Db(1),l.rc("ngClass",l.xc(3,w,"left"==e.navBarLocation||"right"==e.navBarLocation,"top"==e.navBarLocation||"bottom"==e.navBarLocation)),l.Db(2),l.rc("ngIf","bottom"==e.navBarLocation||"right"==e.navBarLocation))},directives:function(){return[d.u,d.r,F]},styles:["aw-wizard{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start}aw-wizard.vertical{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row}aw-wizard.horizontal{-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}aw-wizard .wizard-steps{top:0;display:-webkit-box;display:-ms-flexbox;display:flex}aw-wizard .wizard-steps.vertical{min-width:calc(100% - 280px);width:80%;height:100%;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}aw-wizard .wizard-steps.horizontal{width:100%;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row}"],encapsulation:2}),t}(),F=function(){var t=function(){function t(e){Object(o.a)(this,t),this.wizardState=e,this.direction="left-to-right"}return Object(n.a)(t,[{key:"isCurrent",value:function(t){return t.selected&&!t.completed&&!this.wizardState.completed}},{key:"isDone",value:function(t){return t.completed&&!t.selected||this.wizardState.completed}},{key:"isDefault",value:function(t){return!(t.optional||t.completed||t.selected||this.wizardState.completed)}},{key:"isEditing",value:function(t){return t.selected&&t.completed&&!this.wizardState.completed}},{key:"isOptional",value:function(t){return t.optional&&!t.completed&&!t.selected&&!this.wizardState.completed}},{key:"isNavigable",value:function(t){return!t.selected&&!this.wizardState.disableNavigationBar&&this.navigationMode.isNavigable(this.wizardState.getIndexOfStep(t))}},{key:"navigationMode",get:function(){return this.wizardState.navigationMode}},{key:"wizardSteps",get:function(){switch(this.direction){case"right-to-left":return this.wizardState.wizardSteps.slice().reverse();case"left-to-right":default:return this.wizardState.wizardSteps}}},{key:"numberOfWizardSteps",get:function(){return this.wizardState.wizardSteps.length}}]),t}();return t.\u0275fac=function(e){return new(e||t)(l.Rb(j))},t.\u0275cmp=l.Lb({type:t,selectors:[["aw-wizard-navigation-bar"]],inputs:{direction:"direction"},decls:2,vars:4,consts:[[3,"ngStyle","ngClass",4,"ngFor","ngForOf"],[3,"ngStyle","ngClass"],[3,"awGoToStep"],[3,"ngTemplateOutlet",4,"ngIf"],[4,"ngIf"],[3,"ngTemplateOutlet"]],template:function(t,e){1&t&&(l.Xb(0,"ul"),l.Sc(1,z,5,15,"li",0),l.Wb()),2&t&&(l.Gb("steps-indicator steps-",e.numberOfWizardSteps,""),l.Db(1),l.rc("ngForOf",e.wizardSteps))},directives:function(){return[d.t,d.x,d.r,C,d.u,d.B]},styles:["aw-wizard-navigation-bar.horizontal.small ul.steps-indicator{padding:24px 0 10px}aw-wizard-navigation-bar.horizontal.small ul.steps-indicator li:not(:last-child):before{background-color:#e6e6e6;content:'';position:absolute;height:1px;width:calc(100% - 14px);top:-7px;left:calc(50% + 7px)}aw-wizard-navigation-bar.horizontal.small ul.steps-indicator li:after{position:absolute;top:-14px;left:calc(50% - 7px);width:14px;height:14px;content:'';text-align:center;vertical-align:middle;line-height:14px;-webkit-transition:.25s;transition:.25s;border-radius:100%;background-color:#e6e6e6}aw-wizard-navigation-bar.horizontal.small ul.steps-indicator li.default a:hover{color:grey}aw-wizard-navigation-bar.horizontal.small ul.steps-indicator li.current:after{background-color:grey}aw-wizard-navigation-bar.horizontal.small ul.steps-indicator li.done:after{background-color:#393}aw-wizard-navigation-bar.horizontal.small ul.steps-indicator li.optional:after{background-color:#38ef38}aw-wizard-navigation-bar.horizontal.small ul.steps-indicator li.editing:after{background-color:red}aw-wizard-navigation-bar.horizontal.large-filled ul.steps-indicator{padding:60px 0 10px}aw-wizard-navigation-bar.horizontal.large-filled ul.steps-indicator li:not(:last-child):before{background-color:#e6e6e6;content:'';position:absolute;height:1px;width:calc(100% - 50px);top:-25px;left:calc(50% + 25px)}aw-wizard-navigation-bar.horizontal.large-filled ul.steps-indicator li:after{position:absolute;top:-50px;left:calc(50% - 25px);width:50px;height:50px;content:'';text-align:center;vertical-align:middle;line-height:50px;-webkit-transition:.25s;transition:.25s;border-radius:100%;background-color:#e6e6e6}aw-wizard-navigation-bar.horizontal.large-filled ul.steps-indicator li.default a:hover{color:grey}aw-wizard-navigation-bar.horizontal.large-filled ul.steps-indicator li.current:after{background-color:grey}aw-wizard-navigation-bar.horizontal.large-filled ul.steps-indicator li.done:after{background-color:#393}aw-wizard-navigation-bar.horizontal.large-filled ul.steps-indicator li.optional:after{background-color:#38ef38}aw-wizard-navigation-bar.horizontal.large-filled ul.steps-indicator li.editing:after{background-color:red}aw-wizard-navigation-bar.horizontal.large-empty ul.steps-indicator{padding:60px 0 10px}aw-wizard-navigation-bar.horizontal.large-empty ul.steps-indicator li:not(:last-child):before{background-color:#e6e6e6;content:'';position:absolute;height:1px;width:calc(100% - 50px);top:-25px;left:calc(50% + 25px)}aw-wizard-navigation-bar.horizontal.large-empty ul.steps-indicator li:after{position:absolute;top:-50px;left:calc(50% - 25px);width:50px;height:50px;content:'';text-align:center;vertical-align:middle;line-height:46px;-webkit-transition:.25s;transition:.25s;border-radius:100%;border:2px solid #e6e6e6}aw-wizard-navigation-bar.horizontal.large-empty ul.steps-indicator li.default a:hover{color:grey}aw-wizard-navigation-bar.horizontal.large-empty ul.steps-indicator li.current:after{border:2px solid grey}aw-wizard-navigation-bar.horizontal.large-empty ul.steps-indicator li.done:after{border:2px solid #393}aw-wizard-navigation-bar.horizontal.large-empty ul.steps-indicator li.optional:after{border:2px solid #38ef38}aw-wizard-navigation-bar.horizontal.large-empty ul.steps-indicator li.editing:after{border:2px solid red}aw-wizard-navigation-bar.horizontal.large-filled-symbols ul.steps-indicator{padding:60px 0 10px}aw-wizard-navigation-bar.horizontal.large-filled-symbols ul.steps-indicator li:not(:last-child):before{background-color:#e6e6e6;content:'';position:absolute;height:1px;width:calc(100% - 50px);top:-25px;left:calc(50% + 25px)}aw-wizard-navigation-bar.horizontal.large-filled-symbols ul.steps-indicator li:after{position:absolute;top:-50px;left:calc(50% - 25px);width:50px;height:50px;content:'';text-align:center;vertical-align:middle;line-height:50px;-webkit-transition:.25s;transition:.25s;border-radius:100%;background-color:#e6e6e6;color:#000;content:attr(step-symbol)}aw-wizard-navigation-bar.horizontal.large-filled-symbols ul.steps-indicator li.default a:hover{color:grey}aw-wizard-navigation-bar.horizontal.large-filled-symbols ul.steps-indicator li.current:after{background-color:grey;color:#000}aw-wizard-navigation-bar.horizontal.large-filled-symbols ul.steps-indicator li.done:after{background-color:#393;color:#000}aw-wizard-navigation-bar.horizontal.large-filled-symbols ul.steps-indicator li.optional:after{background-color:#38ef38;color:#000}aw-wizard-navigation-bar.horizontal.large-filled-symbols ul.steps-indicator li.editing:after{background-color:red;color:#000}aw-wizard-navigation-bar.horizontal.large-empty-symbols ul.steps-indicator{padding:60px 0 10px}aw-wizard-navigation-bar.horizontal.large-empty-symbols ul.steps-indicator li:not(:last-child):before{background-color:#e6e6e6;content:'';position:absolute;height:1px;width:calc(100% - 50px);top:-25px;left:calc(50% + 25px)}aw-wizard-navigation-bar.horizontal.large-empty-symbols ul.steps-indicator li:after{position:absolute;top:-50px;left:calc(50% - 25px);width:50px;height:50px;content:'';text-align:center;vertical-align:middle;line-height:46px;-webkit-transition:.25s;transition:.25s;border-radius:100%;color:#e6e6e6;content:attr(step-symbol);border:2px solid #e6e6e6}aw-wizard-navigation-bar.horizontal.large-empty-symbols ul.steps-indicator li.default a:hover{color:grey}aw-wizard-navigation-bar.horizontal.large-empty-symbols ul.steps-indicator li.current:after{color:grey;border:2px solid grey}aw-wizard-navigation-bar.horizontal.large-empty-symbols ul.steps-indicator li.done:after{color:#393;border:2px solid #393}aw-wizard-navigation-bar.horizontal.large-empty-symbols ul.steps-indicator li.optional:after{color:#38ef38;border:2px solid #38ef38}aw-wizard-navigation-bar.horizontal.large-empty-symbols ul.steps-indicator li.editing:after{color:red;border:2px solid red}aw-wizard-navigation-bar.horizontal ul.steps-indicator{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;right:0;bottom:0;left:0;margin:0;width:100%;list-style:none}aw-wizard-navigation-bar.horizontal ul.steps-indicator.steps-2:before{left:25%;right:25%}aw-wizard-navigation-bar.horizontal ul.steps-indicator.steps-2 li{width:50%}aw-wizard-navigation-bar.horizontal ul.steps-indicator.steps-3:before{left:16.66666667%;right:16.66666667%}aw-wizard-navigation-bar.horizontal ul.steps-indicator.steps-3 li{width:33.33333333%}aw-wizard-navigation-bar.horizontal ul.steps-indicator.steps-4:before{left:12.5%;right:12.5%}aw-wizard-navigation-bar.horizontal ul.steps-indicator.steps-4 li{width:25%}aw-wizard-navigation-bar.horizontal ul.steps-indicator.steps-5:before{left:10%;right:10%}aw-wizard-navigation-bar.horizontal ul.steps-indicator.steps-5 li{width:20%}aw-wizard-navigation-bar.horizontal ul.steps-indicator.steps-6:before{left:8.33333333%;right:8.33333333%}aw-wizard-navigation-bar.horizontal ul.steps-indicator.steps-6 li{width:16.66666667%}aw-wizard-navigation-bar.horizontal ul.steps-indicator.steps-7:before{left:7.14285714%;right:7.14285714%}aw-wizard-navigation-bar.horizontal ul.steps-indicator.steps-7 li{width:14.28571429%}aw-wizard-navigation-bar.horizontal ul.steps-indicator.steps-8:before{left:6.25%;right:6.25%}aw-wizard-navigation-bar.horizontal ul.steps-indicator.steps-8 li{width:12.5%}aw-wizard-navigation-bar.horizontal ul.steps-indicator.steps-9:before{left:5.55555556%;right:5.55555556%}aw-wizard-navigation-bar.horizontal ul.steps-indicator.steps-9 li{width:11.11111111%}aw-wizard-navigation-bar.horizontal ul.steps-indicator.steps-10:before{left:5%;right:5%}aw-wizard-navigation-bar.horizontal ul.steps-indicator.steps-10 li{width:10%}aw-wizard-navigation-bar.horizontal ul.steps-indicator *{-webkit-box-sizing:border-box;box-sizing:border-box}aw-wizard-navigation-bar.horizontal ul.steps-indicator li{position:relative;margin:0;padding:10px 0 0;pointer-events:none}aw-wizard-navigation-bar.horizontal ul.steps-indicator li div{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-ms-flex-align:center;align-items:center}aw-wizard-navigation-bar.horizontal ul.steps-indicator li div a{color:grey;line-height:14px;font-size:14px;text-decoration:none;text-transform:uppercase;text-align:center;font-weight:700;-webkit-transition:.25s;transition:.25s;cursor:pointer}aw-wizard-navigation-bar.horizontal ul.steps-indicator li div a:hover{color:#4d4d4d}aw-wizard-navigation-bar.horizontal ul.steps-indicator li.navigable{pointer-events:auto}","aw-wizard-navigation-bar.vertical{max-width:280px;width:20%;height:100%;position:-webkit-sticky;position:sticky;top:0}aw-wizard-navigation-bar.vertical.small ul.steps-indicator{padding:5px 5px 5px 19px}aw-wizard-navigation-bar.vertical.small ul.steps-indicator li:not(:last-child):before{background-color:#e6e6e6;content:'';position:absolute;left:-7px;top:14px;height:calc(100% - 14px);width:1px}aw-wizard-navigation-bar.vertical.small ul.steps-indicator li:after{position:absolute;top:0;left:-14px;width:14px;height:14px;content:'';text-align:center;vertical-align:middle;line-height:14px;-webkit-transition:.25s;transition:.25s;border-radius:100%;background-color:#e6e6e6}aw-wizard-navigation-bar.vertical.small ul.steps-indicator li div{min-height:14px}aw-wizard-navigation-bar.vertical.small ul.steps-indicator li.default a:hover{color:grey}aw-wizard-navigation-bar.vertical.small ul.steps-indicator li.current:after{background-color:grey}aw-wizard-navigation-bar.vertical.small ul.steps-indicator li.done:after{background-color:#393}aw-wizard-navigation-bar.vertical.small ul.steps-indicator li.optional:after{background-color:#38ef38}aw-wizard-navigation-bar.vertical.small ul.steps-indicator li.editing:after{background-color:red}aw-wizard-navigation-bar.vertical.large-filled ul.steps-indicator{padding:5px 5px 5px 55px}aw-wizard-navigation-bar.vertical.large-filled ul.steps-indicator li:not(:last-child):before{background-color:#e6e6e6;content:'';position:absolute;left:-25px;top:50px;height:calc(100% - 50px);width:1px}aw-wizard-navigation-bar.vertical.large-filled ul.steps-indicator li:after{position:absolute;top:0;left:-50px;width:50px;height:50px;content:'';text-align:center;vertical-align:middle;line-height:50px;-webkit-transition:.25s;transition:.25s;border-radius:100%;background-color:#e6e6e6}aw-wizard-navigation-bar.vertical.large-filled ul.steps-indicator li div{min-height:50px}aw-wizard-navigation-bar.vertical.large-filled ul.steps-indicator li.default a:hover{color:grey}aw-wizard-navigation-bar.vertical.large-filled ul.steps-indicator li.current:after{background-color:grey}aw-wizard-navigation-bar.vertical.large-filled ul.steps-indicator li.done:after{background-color:#393}aw-wizard-navigation-bar.vertical.large-filled ul.steps-indicator li.optional:after{background-color:#38ef38}aw-wizard-navigation-bar.vertical.large-filled ul.steps-indicator li.editing:after{background-color:red}aw-wizard-navigation-bar.vertical.large-empty ul.steps-indicator{padding:5px 5px 5px 55px}aw-wizard-navigation-bar.vertical.large-empty ul.steps-indicator li:not(:last-child):before{background-color:#e6e6e6;content:'';position:absolute;left:-25px;top:50px;height:calc(100% - 50px);width:1px}aw-wizard-navigation-bar.vertical.large-empty ul.steps-indicator li:after{position:absolute;top:0;left:-50px;width:50px;height:50px;content:'';text-align:center;vertical-align:middle;line-height:46px;-webkit-transition:.25s;transition:.25s;border-radius:100%;border:2px solid #e6e6e6}aw-wizard-navigation-bar.vertical.large-empty ul.steps-indicator li div{min-height:54px}aw-wizard-navigation-bar.vertical.large-empty ul.steps-indicator li.default a:hover{color:grey}aw-wizard-navigation-bar.vertical.large-empty ul.steps-indicator li.current:after{border:2px solid grey}aw-wizard-navigation-bar.vertical.large-empty ul.steps-indicator li.done:after{border:2px solid #393}aw-wizard-navigation-bar.vertical.large-empty ul.steps-indicator li.optional:after{border:2px solid #38ef38}aw-wizard-navigation-bar.vertical.large-empty ul.steps-indicator li.editing:after{border:2px solid red}aw-wizard-navigation-bar.vertical.large-filled-symbols ul.steps-indicator{padding:5px 5px 5px 55px}aw-wizard-navigation-bar.vertical.large-filled-symbols ul.steps-indicator li:not(:last-child):before{background-color:#e6e6e6;content:'';position:absolute;left:-25px;top:50px;height:calc(100% - 50px);width:1px}aw-wizard-navigation-bar.vertical.large-filled-symbols ul.steps-indicator li:after{position:absolute;top:0;left:-50px;width:50px;height:50px;content:'';text-align:center;vertical-align:middle;line-height:50px;-webkit-transition:.25s;transition:.25s;border-radius:100%;background-color:#e6e6e6;color:#000;content:attr(step-symbol)}aw-wizard-navigation-bar.vertical.large-filled-symbols ul.steps-indicator li div{min-height:50px}aw-wizard-navigation-bar.vertical.large-filled-symbols ul.steps-indicator li.default a:hover{color:grey}aw-wizard-navigation-bar.vertical.large-filled-symbols ul.steps-indicator li.current:after{background-color:grey;color:#000}aw-wizard-navigation-bar.vertical.large-filled-symbols ul.steps-indicator li.done:after{background-color:#393;color:#000}aw-wizard-navigation-bar.vertical.large-filled-symbols ul.steps-indicator li.optional:after{background-color:#38ef38;color:#000}aw-wizard-navigation-bar.vertical.large-filled-symbols ul.steps-indicator li.editing:after{background-color:red;color:#000}aw-wizard-navigation-bar.vertical.large-empty-symbols ul.steps-indicator{padding:5px 5px 5px 55px}aw-wizard-navigation-bar.vertical.large-empty-symbols ul.steps-indicator li:not(:last-child):before{background-color:#e6e6e6;content:'';position:absolute;left:-25px;top:50px;height:calc(100% - 50px);width:1px}aw-wizard-navigation-bar.vertical.large-empty-symbols ul.steps-indicator li:after{position:absolute;top:0;left:-50px;width:50px;height:50px;content:'';text-align:center;vertical-align:middle;line-height:46px;-webkit-transition:.25s;transition:.25s;border-radius:100%;color:#e6e6e6;content:attr(step-symbol);border:2px solid #e6e6e6}aw-wizard-navigation-bar.vertical.large-empty-symbols ul.steps-indicator li div{min-height:54px}aw-wizard-navigation-bar.vertical.large-empty-symbols ul.steps-indicator li.default a:hover{color:grey}aw-wizard-navigation-bar.vertical.large-empty-symbols ul.steps-indicator li.current:after{color:grey;border:2px solid grey}aw-wizard-navigation-bar.vertical.large-empty-symbols ul.steps-indicator li.done:after{color:#393;border:2px solid #393}aw-wizard-navigation-bar.vertical.large-empty-symbols ul.steps-indicator li.optional:after{color:#38ef38;border:2px solid #38ef38}aw-wizard-navigation-bar.vertical.large-empty-symbols ul.steps-indicator li.editing:after{color:red;border:2px solid red}aw-wizard-navigation-bar.vertical ul.steps-indicator{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;list-style:none;margin:auto}aw-wizard-navigation-bar.vertical ul.steps-indicator *{-webkit-box-sizing:border-box;box-sizing:border-box}aw-wizard-navigation-bar.vertical ul.steps-indicator li{position:relative;pointer-events:none}aw-wizard-navigation-bar.vertical ul.steps-indicator li:not(:last-child){margin-bottom:0;padding-bottom:10px}aw-wizard-navigation-bar.vertical ul.steps-indicator li div{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-align:center;-ms-flex-align:center;align-items:center}aw-wizard-navigation-bar.vertical ul.steps-indicator li div a{color:grey;margin-left:15px;line-height:14px;font-size:14px;text-decoration:none;text-transform:uppercase;text-align:left;font-weight:700;-webkit-transition:.25s;transition:.25s;cursor:pointer}aw-wizard-navigation-bar.vertical ul.steps-indicator li div a:hover{color:#4d4d4d}aw-wizard-navigation-bar.vertical ul.steps-indicator li.navigable{pointer-events:auto}"],encapsulation:2}),t}(),L=function(){var t=function(t){Object(a.a)(i,t);var e=Object(r.a)(i);function i(){return Object(o.a)(this,i),e.apply(this,arguments)}return i}(S);return t.\u0275fac=function(e){return M(e||t)},t.\u0275cmp=l.Lb({type:t,selectors:[["aw-wizard-step"]],features:[l.Cb([{provide:S,useExisting:Object(l.X)(function(){return t})}]),l.Ab],ngContentSelectors:g,decls:1,vars:0,template:function(t,e){1&t&&(l.qc(),l.pc(0))},styles:["aw-wizard-step{height:auto;width:100%}"],encapsulation:2}),t}(),M=l.Zb(L),C=function(){var t=function(){function t(e,i){Object(o.a)(this,t),this.wizardState=e,this.wizardStep=i,this.preFinalize=new l.o,this.postFinalize=new l.o}return Object(n.a)(t,[{key:"onClick",value:function(t){this.navigationMode.goToStep(this.destinationStep,this.preFinalize,this.postFinalize)}},{key:"finalize",set:function(t){this.preFinalize=t},get:function(){return this.preFinalize}},{key:"navigationMode",get:function(){return this.wizardState.navigationMode}},{key:"destinationStep",get:function(){var t,e;if(this.targetStep.hasOwnProperty("stepIndex"))t=this.targetStep.stepIndex;else if(!(e=this.targetStep).hasOwnProperty("stepId")||e instanceof S)if(function(t){return t.hasOwnProperty("stepOffset")}(this.targetStep)&&null!==this.wizardStep)t=this.wizardState.getIndexOfStep(this.wizardStep)+this.targetStep.stepOffset;else{if(!(this.targetStep instanceof S))throw new Error("Input 'targetStep' is neither a WizardStep, StepOffset, StepIndex or StepId");t=this.wizardState.getIndexOfStep(this.targetStep)}else t=this.wizardState.getIndexOfStepWithId(this.targetStep.stepId);return t}}]),t}();return t.\u0275fac=function(e){return new(e||t)(l.Rb(j),l.Rb(S,8))},t.\u0275dir=l.Mb({type:t,selectors:[["","awGoToStep",""]],hostBindings:function(t,e){1&t&&l.hc("click",function(t){return e.onClick(t)})},inputs:{targetStep:["awGoToStep","targetStep"]},outputs:{preFinalize:"preFinalize",postFinalize:"postFinalize",finalize:"finalize"}}),t}(),P=function(){var t=function(){function t(e){Object(o.a)(this,t),this.wizardState=e,this.preFinalize=new l.o,this.postFinalize=new l.o}return Object(n.a)(t,[{key:"onClick",value:function(t){this.navigationMode.goToNextStep(this.preFinalize,this.postFinalize)}},{key:"finalize",set:function(t){this.preFinalize=t},get:function(){return this.preFinalize}},{key:"navigationMode",get:function(){return this.wizardState.navigationMode}}]),t}();return t.\u0275fac=function(e){return new(e||t)(l.Rb(j))},t.\u0275dir=l.Mb({type:t,selectors:[["","awNextStep",""]],hostBindings:function(t,e){1&t&&l.hc("click",function(t){return e.onClick(t)})},outputs:{preFinalize:"preFinalize",postFinalize:"postFinalize",finalize:"finalize"}}),t}(),N=function(){var t=function(){function t(e){Object(o.a)(this,t),this.wizardState=e,this.preFinalize=new l.o,this.postFinalize=new l.o}return Object(n.a)(t,[{key:"onClick",value:function(t){this.navigationMode.goToPreviousStep(this.preFinalize,this.postFinalize)}},{key:"finalize",set:function(t){this.preFinalize=t},get:function(){return this.preFinalize}},{key:"navigationMode",get:function(){return this.wizardState.navigationMode}}]),t}();return t.\u0275fac=function(e){return new(e||t)(l.Rb(j))},t.\u0275dir=l.Mb({type:t,selectors:[["","awPreviousStep",""]],hostBindings:function(t,e){1&t&&l.hc("click",function(t){return e.onClick(t)})},outputs:{preFinalize:"preFinalize",postFinalize:"postFinalize",finalize:"finalize"}}),t}(),D=function(){var t=function(){function t(){Object(o.a)(this,t)}return Object(n.a)(t,null,[{key:"forRoot",value:function(){return{ngModule:t,providers:[]}}}]),t}();return t.\u0275mod=l.Pb({type:t}),t.\u0275inj=l.Ob({factory:function(e){return new(e||t)},imports:[[d.c]]}),t}()}}]);