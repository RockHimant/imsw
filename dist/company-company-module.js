(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["company-company-module"],{

/***/ "./src/app/views/entities/company/add/add.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/views/entities/company/add/add.component.ts ***!
  \*************************************************************/
/*! exports provided: AddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddComponent", function() { return AddComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var src_app_shared_common_action__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/common/action */ "./src/app/shared/common/action.ts");
/* harmony import */ var _forms_company_editor_company_editor_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../forms/company-editor/company-editor.component */ "./src/app/views/forms/company-editor/company-editor.component.ts");




var AddComponent = /** @class */ (function () {
    function AddComponent() {
        this.action = src_app_shared_common_action__WEBPACK_IMPORTED_MODULE_1__["Action"].ADD;
    }
    AddComponent.prototype.ngOnInit = function () {
    };
    AddComponent.ɵfac = function AddComponent_Factory(t) { return new (t || AddComponent)(); };
    AddComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AddComponent, selectors: [["app-add"]], decls: 1, vars: 1, consts: [[3, "action"]], template: function AddComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-company-editor", 0);
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("action", ctx.action);
        } }, directives: [_forms_company_editor_company_editor_component__WEBPACK_IMPORTED_MODULE_2__["CompanyEditorComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2VudGl0aWVzL2NvbXBhbnkvYWRkL2FkZC5jb21wb25lbnQuc2NzcyJ9 */"] });
    return AddComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-add',
                templateUrl: './add.component.html',
                styleUrls: ['./add.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/views/entities/company/clone/clone.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/views/entities/company/clone/clone.component.ts ***!
  \*****************************************************************/
/*! exports provided: CloneComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CloneComponent", function() { return CloneComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _shared_common_action__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../shared/common/action */ "./src/app/shared/common/action.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _forms_company_editor_company_editor_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../forms/company-editor/company-editor.component */ "./src/app/views/forms/company-editor/company-editor.component.ts");






var CloneComponent = /** @class */ (function () {
    function CloneComponent(router, route) {
        this.router = router;
        this.route = route;
        this.action = _shared_common_action__WEBPACK_IMPORTED_MODULE_1__["Action"].CLONE;
    }
    CloneComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) { return _this.companyId = params['id']; });
    };
    CloneComponent.ɵfac = function CloneComponent_Factory(t) { return new (t || CloneComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"])); };
    CloneComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CloneComponent, selectors: [["app-clone"]], decls: 1, vars: 2, consts: [[3, "action", "companyId"]], template: function CloneComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-company-editor", 0);
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("action", ctx.action)("companyId", ctx.companyId);
        } }, directives: [_forms_company_editor_company_editor_component__WEBPACK_IMPORTED_MODULE_3__["CompanyEditorComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2VudGl0aWVzL2NvbXBhbnkvY2xvbmUvY2xvbmUuY29tcG9uZW50LnNjc3MifQ== */"] });
    return CloneComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CloneComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-clone',
                templateUrl: './clone.component.html',
                styleUrls: ['./clone.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "./src/app/views/entities/company/company-content/company-content.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/views/entities/company/company-content/company-content.component.ts ***!
  \*************************************************************************************/
/*! exports provided: CompanyContentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyContentComponent", function() { return CompanyContentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "./node_modules/ngx-perfect-scrollbar/__ivy_ngcc__/fesm5/ngx-perfect-scrollbar.js");
/* harmony import */ var _chat_chat_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../chat/chat.service */ "./src/app/views/chat/chat.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _shared_animations_shared_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/animations/shared-animations */ "./src/app/shared/animations/shared-animations.ts");
/* harmony import */ var _company_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../company.service */ "./src/app/views/entities/company/company.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _shared_services_audit_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../shared/services/audit.service */ "./src/app/shared/services/audit.service.ts");
/* harmony import */ var _shared_services_attachment_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../shared/services/attachment.service */ "./src/app/shared/services/attachment.service.ts");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! file-saver */ "./node_modules/file-saver/dist/FileSaver.min.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm5/ng-bootstrap.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm5/ngx-toastr.js");
/* harmony import */ var _shared_directives_sidebar_directive__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../shared/directives/sidebar.directive */ "./src/app/shared/directives/sidebar.directive.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _shared_components_app_spinner_wrapper_app_spinner_wrapper_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../shared/components/app-spinner-wrapper/app-spinner-wrapper.component */ "./src/app/shared/components/app-spinner-wrapper/app-spinner-wrapper.component.ts");






















var _c0 = ["msgForm"];
var _c1 = ["msgInput"];
function CompanyContentComponent_div_4_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Active");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CompanyContentComponent_div_4_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Inactive");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CompanyContentComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CompanyContentComponent_div_4_span_3_Template, 2, 0, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CompanyContentComponent_div_4_span_4_Template, 2, 0, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r283 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r283.activeCompany == null ? null : ctx_r283.activeCompany.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r283.activeCompany.status == "ACTIVE");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r283.activeCompany.status != "ACTIVE");
} }
function CompanyContentComponent_div_5_button_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Mark Inactive");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CompanyContentComponent_div_5_button_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Mark Active");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CompanyContentComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    var _r297 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CompanyContentComponent_div_5_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r297); var ctx_r296 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r296.edit(ctx_r296.activeCompany); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "More");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CompanyContentComponent_div_5_Template_button_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r297); var ctx_r298 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r298.clone(ctx_r298.activeCompany); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Clone");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, CompanyContentComponent_div_5_button_10_Template, 2, 0, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, CompanyContentComponent_div_5_button_11_Template, 2, 0, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CompanyContentComponent_div_5_Template_button_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r297); var ctx_r299 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); var _r290 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](12); return ctx_r299.confirm(_r290); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r284 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r284.activeCompany.status == "ACTIVE");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r284.activeCompany.status != "ACTIVE");
} }
function CompanyContentComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-spinner-wrapper", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("showSpinner", true);
} }
var _c2 = function () { return { scale: ".2", delay: "400ms", duration: "400ms" }; };
var _c3 = function (a1) { return { value: "*", params: a1 }; };
var _c4 = function () { return { y: "120px", delay: "600ms", duration: "400ms" }; };
function CompanyContentComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Select a company to view details.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@animate", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c2)));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@animate", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c4)));
} }
function CompanyContentComponent_div_8_div_13_Template(rf, ctx) { if (rf & 1) {
    var _r307 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CompanyContentComponent_div_8_div_13_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r307); var ctx_r306 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r306.download(ctx_r306.activeCompany == null ? null : ctx_r306.activeCompany.attachment.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Registration attachment");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CompanyContentComponent_div_8_span_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var service_r308 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](service_r308);
} }
function CompanyContentComponent_div_8_div_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r302 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u00A0 \u00A0", ctx_r302.activeCompany.primaryPhoneNo, "");
} }
function CompanyContentComponent_div_8_div_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-spinner-wrapper", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("showSpinner", true);
} }
function CompanyContentComponent_div_8_div_42_Template(rf, ctx) { if (rf & 1) {
    var _r310 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CompanyContentComponent_div_8_div_42_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r310); var ctx_r309 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r309.toggleShowAudit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Show audit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CompanyContentComponent_div_8_div_43_div_8_Template(rf, ctx) { if (rf & 1) {
    var _r315 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h6", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CompanyContentComponent_div_8_div_43_div_8_Template_button_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r315); var audit_r313 = ctx.$implicit; var ctx_r314 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); var _r288 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](10); return ctx_r314.open(_r288, audit_r313.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Detail");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var audit_r313 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](audit_r313.activity);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](audit_r313.message);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 3, audit_r313.timestamp));
} }
function CompanyContentComponent_div_8_div_43_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-spinner-wrapper", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("showSpinner", true);
} }
function CompanyContentComponent_div_8_div_43_Template(rf, ctx) { if (rf & 1) {
    var _r317 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Audit History");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CompanyContentComponent_div_8_div_43_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r317); var ctx_r316 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r316.toggleShowAudit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "i", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, CompanyContentComponent_div_8_div_43_div_8_Template, 13, 5, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, CompanyContentComponent_div_8_div_43_div_9_Template, 2, 1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r305 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r305.audits);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r305.showAuditProgress);
} }
function CompanyContentComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, CompanyContentComponent_div_8_div_13_Template, 4, 0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, CompanyContentComponent_div_8_span_29_Template, 2, 1, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "i", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](39, CompanyContentComponent_div_8_div_39_Template, 4, 1, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](40, CompanyContentComponent_div_8_div_40_Template, 2, 1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](42, CompanyContentComponent_div_8_div_42_Template, 3, 0, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](43, CompanyContentComponent_div_8_div_43_Template, 10, 2, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r287 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r287.activeCompany.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r287.activeCompany.registrationNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r287.activeCompany == null ? null : ctx_r287.activeCompany.attachment);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r287.activeCompany.address.addressLine);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx_r287.activeCompany.address.city, ", \u00A0 ", ctx_r287.activeCompany.address.state, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx_r287.activeCompany.address.country, ", \u00A0 ", ctx_r287.activeCompany.address.postCode, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r287.activeCompany.companyServices);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r287.activeCompany.contactPersonName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u00A0 \u00A0 ", ctx_r287.activeCompany.email, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r287.activeCompany.primaryPhoneNo);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r287.companyService.loadingData);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r287.showHistory);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r287.showHistory);
} }
function CompanyContentComponent_ng_template_9_p_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var change_r320 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](change_r320);
} }
function CompanyContentComponent_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Audit history");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CompanyContentComponent_ng_template_9_Template_button_click_3_listener() { var modal_r318 = ctx.$implicit; return modal_r318.dismiss("Cross click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, CompanyContentComponent_ng_template_9_p_7_Template, 2, 1, "p", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CompanyContentComponent_ng_template_9_Template_button_click_9_listener() { var modal_r318 = ctx.$implicit; return modal_r318.close("ok"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Ok");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r289 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r289.auditEventDetail);
} }
function CompanyContentComponent_ng_template_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Company deletion");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CompanyContentComponent_ng_template_11_Template_button_click_3_listener() { var modal_r323 = ctx.$implicit; return modal_r323.dismiss("Cross click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Are you sure you want to delete ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " company?");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "All information associated to this company will be permanently deleted. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "This operation can not be undone.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CompanyContentComponent_ng_template_11_Template_button_click_18_listener() { var modal_r323 = ctx.$implicit; return modal_r323.dismiss("cancel"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CompanyContentComponent_ng_template_11_Template_button_click_20_listener() { var modal_r323 = ctx.$implicit; return modal_r323.close("Ok"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Ok");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r291 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r291.activeCompany.name);
} }
var CompanyContentComponent = /** @class */ (function () {
    function CompanyContentComponent(companyService, auditService, router, modalService, attachmentService, toastr, route) {
        this.companyService = companyService;
        this.auditService = auditService;
        this.router = router;
        this.modalService = modalService;
        this.attachmentService = attachmentService;
        this.toastr = toastr;
        this.route = route;
        this.user = new _chat_chat_service__WEBPACK_IMPORTED_MODULE_2__["User"]();
        this.activeContact = new _chat_chat_service__WEBPACK_IMPORTED_MODULE_2__["User"]();
        this.activeCompany = new _company_service__WEBPACK_IMPORTED_MODULE_5__["Company"]();
        this.showHistory = true;
        this.loadingData = false;
    }
    CompanyContentComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) { return _this.companyId = params['id']; });
        this.activeCompany = null;
        this.chatSelectSub = this.companyService.onCompanySelected.subscribe(function (res) {
            if (res) {
                _this.activeCompany = res.company;
                _this.showHistory = false;
                _this.audits = [];
                _this.loadingData = false;
            }
        });
    };
    CompanyContentComponent.prototype.ngOnDestroy = function () {
        if (this.userUpdateSub) {
            this.userUpdateSub.unsubscribe();
        }
        if (this.chatSelectSub) {
            this.chatSelectSub.unsubscribe();
        }
        if (this.chatUpdateSub) {
            this.chatUpdateSub.unsubscribe();
        }
        if (this.companySelectSub) {
            this.companySelectSub.unsubscribe();
        }
    };
    CompanyContentComponent.prototype.edit = function (company) {
        this.router.navigate(['edit', company.id], { relativeTo: this.route });
    };
    CompanyContentComponent.prototype.toggleShowAudit = function () {
        var _this = this;
        debugger;
        this.showAuditProgress = true;
        this.showHistory = !this.showHistory;
        if (this.showHistory) {
            this.loadAuditDataSub = this.auditService.getAuditTrails('company', this.activeCompany.id)
                .subscribe(function (res) {
                _this.audits = res.events;
                _this.showAuditProgress = false;
            });
        }
    };
    CompanyContentComponent.prototype.clone = function (company) {
        this.router.navigate(['clone', company.id], { relativeTo: this.route });
    };
    CompanyContentComponent.prototype.open = function (content, eventId) {
        var _this = this;
        this.auditService.getAuditEventDetail(eventId).subscribe(function (response) {
            debugger;
            _this.auditEventDetail = response.changeDetails;
            _this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' })
                .result.then(function (result) {
                console.log(result);
            }, function (reason) {
                console.log('Err!', reason);
            });
        }, function (error) {
            console.log(error);
        });
    };
    CompanyContentComponent.prototype.confirm = function (content) {
        var _this = this;
        this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title', centered: true })
            .result.then(function (result) {
            _this.loadingData = true;
            _this.companyService.delete(_this.activeCompany.id)
                .subscribe(function (res) {
                if (res) {
                    _this.companyService.loadCompanyData(0, 6);
                    _this.toastr.success('Company successfully deleted !', 'Success', { timeOut: 4000 });
                }
                else {
                    _this.toastr.error(res.errorMessage, 'Failed', { timeOut: 4000 });
                }
                _this.loadingData = false;
            }, function (error) {
                _this.toastr.error(error.errorMessage, 'Failed', { timeOut: 30000 });
                _this.loadingData = false;
            });
        }, function (reason) {
            console.log("model reason : " + reason);
        });
    };
    CompanyContentComponent.prototype.download = function (id) {
        this.attachmentService.download(id).subscribe(function (res) {
            if (res) {
                Object(file_saver__WEBPACK_IMPORTED_MODULE_9__["saveAs"])('data:application/text;base64,' + res.content, res.name);
            }
        });
    };
    CompanyContentComponent.ɵfac = function CompanyContentComponent_Factory(t) { return new (t || CompanyContentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_company_service__WEBPACK_IMPORTED_MODULE_5__["CompanyService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_audit_service__WEBPACK_IMPORTED_MODULE_7__["AuditService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_attachment_service__WEBPACK_IMPORTED_MODULE_8__["AttachmentService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_11__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"])); };
    CompanyContentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CompanyContentComponent, selectors: [["app-company-content"]], viewQuery: function CompanyContentComponent_Query(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_1__["PerfectScrollbarDirective"], true);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, true);
        } if (rf & 2) {
            var _t;
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.psContainer = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.msgForm = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.msgInput = _t);
        } }, inputs: { matSidenav: "matSidenav" }, decls: 13, vars: 5, consts: [[1, "d-flex", "pl-3", "pr-3", "pt-2", "pb-2", "box-shadow-1", "chat-topbar"], ["appSidebarToggler", "company-sidebar", 1, "link-icon", "d-md-none"], [1, "icon-regular", "i-Right", "ml-0", "mr-3"], ["class", "d-flex align-items-center col-6", 4, "ngIf"], ["class", "col-6", 4, "ngIf"], [4, "ngIf"], ["class", "app-inro-circle", 4, "ngIf"], ["class", "company-details-page", 4, "ngIf"], ["eventDetail", ""], ["modalConfirm", ""], [1, "d-flex", "align-items-center", "col-6"], [1, "m-0", "text-title", "text-16", "flex-grow-1"], ["class", "badge badge-pill badge-success mr-1", 4, "ngIf"], ["class", "badge badge-pill badge-light mr-1", 4, "ngIf"], [1, "badge", "badge-pill", "badge-success", "mr-1"], [1, "badge", "badge-pill", "badge-light", "mr-1"], [1, "col-6"], [1, "float-right"], ["type", "buttton", 1, "btn", "btn-primary", "m-1", 3, "click"], ["ngbDropdown", "", "role", "group", "aria-label", "Select all", "placement", "bottom", 1, "btn-group"], ["ngbDropdownToggle", "", 1, "btn", "btn-outline-light", "btn-rounded"], ["ngbDropdownMenu", "", 1, "dropdown-menu"], [1, "dropdown-item", 3, "click"], ["class", "dropdown-item", 4, "ngIf"], [1, "dropdown-item"], [3, "showSpinner"], [1, "app-inro-circle"], [1, "border", "rounded-circle", "big-bubble"], [1, "i-Building"], [1, "text-16"], [1, "company-details-page"], [1, "row", "no-margin"], [1, "col-md-4"], [1, "card", "mb-4"], [1, "card-header", "text-center", "text-16"], [1, "card-body"], [1, "padding-10"], [1, "group"], [1, "row", "text-center"], [1, "text-dark", "text-15", "font-weight-500", "w-100"], ["class", "row w-100 align-item-center no-margin justify-content-center", 4, "ngIf"], [1, "border-top", "mb-3"], [1, "row", "no-margin", "justify-content-center"], [1, "text-dark", "text-13", "font-weight-500"], [1, "row", "no-margin", "justify-content-center", "text-center"], [1, "text-dark", "text-13", "font-weight-500", "w-100"], ["class", "badge badge-pill badge-light p-2 mr-1 mb-1", 4, "ngFor", "ngForOf"], [1, "fa", "fa-envelope"], ["class", "row no-margin justify-content-center w-100", 4, "ngIf"], ["class", "row no-margin justify-content-end", 4, "ngIf"], ["class", "card mb-4", 4, "ngIf"], [1, "row", "w-100", "align-item-center", "no-margin", "justify-content-center"], [1, "btn", "btn-sm", "btn-success", 3, "click"], [1, "fa", "fa-download"], [1, "badge", "badge-pill", "badge-light", "p-2", "mr-1", "mb-1"], [1, "row", "no-margin", "justify-content-center", "w-100"], ["aria-hidden", "true", 1, "fa", "fa-phone"], [1, "row", "no-margin", "justify-content-end"], [1, "btn", 3, "click"], [1, "card-title", "col-sm-6"], [1, "col-sm-6", "align-items-center", "justify-content-center"], [1, "btn", "float-right", "pt-1", "bg-transparent", 3, "click"], [1, "fas", "fa-times"], ["class", "d-flex align-items-center border-bottom-dotted-dim pb-3 mb-3", 4, "ngFor", "ngForOf"], [1, "d-flex", "align-items-center", "border-bottom-dotted-dim", "pb-3", "mb-3"], ["src", "./assets/images/faces/2.jpg", "alt", "", 1, "avatar-md", "rounded", "mr-3"], [1, "flex-grow-1"], [1, "m-0"], [1, "m-0", "text-small", "text-muted"], [1, "btn", "btn-outline-primary", "btn-rounded", "btn-sm", 3, "click"], [1, "modal-header"], ["id", "modal-basic-title", 1, "modal-title"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], [4, "ngFor", "ngForOf"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-outline-dark", "btn-rounded", 3, "click"], ["id", "modal-title", 1, "modal-title"], ["type", "button", "aria-label", "Close button", "aria-describedby", "modal-title", 1, "close", 3, "click"], [1, "text-primary"], [1, "text-danger"], ["type", "button", 1, "btn", "btn-outline-secondary", "btn-rounded", 3, "click"], ["type", "button", "ngbAutofocus", "", 1, "btn", "btn-danger", "btn-rounded", 3, "click"]], template: function CompanyContentComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CompanyContentComponent_div_4_Template, 5, 3, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, CompanyContentComponent_div_5_Template, 14, 2, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, CompanyContentComponent_div_6_Template, 2, 1, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, CompanyContentComponent_div_7_Template, 5, 8, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, CompanyContentComponent_div_8_Template, 44, 15, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, CompanyContentComponent_ng_template_9_Template, 11, 1, "ng-template", null, 8, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, CompanyContentComponent_ng_template_11_Template, 22, 1, "ng-template", null, 9, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.activeCompany == null ? null : ctx.activeCompany.id);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.activeCompany == null ? null : ctx.activeCompany.id);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loadingData);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !(ctx.activeCompany == null ? null : ctx.activeCompany.id) && !ctx.companyService.loadingCollection);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.activeCompany == null ? null : ctx.activeCompany.id);
        } }, directives: [_shared_directives_sidebar_directive__WEBPACK_IMPORTED_MODULE_12__["SidebarTogglerDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgIf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbDropdown"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbDropdownToggle"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbDropdownMenu"], _shared_components_app_spinner_wrapper_app_spinner_wrapper_component__WEBPACK_IMPORTED_MODULE_14__["AppSpinnerWrapperComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgForOf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_13__["DatePipe"]], styles: [".dropdown-menu.show[_ngcontent-%COMP%] {\n  transform: translate(-65px, 33px) !important;\n  will-change: auto !important;\n}\n\n.company-details-page[_ngcontent-%COMP%] {\n  padding-top: 30px;\n}\n\n.item-details-page.items-label[_ngcontent-%COMP%] {\n  font-weight: 300;\n  color: #777;\n}\n\n.text-black[_ngcontent-%COMP%] {\n  color: #0000;\n}\n\n.group[_ngcontent-%COMP%] {\n  padding-bottom: 10px;\n}\n\n.no-margin[_ngcontent-%COMP%] {\n  margin-left: 0px !important;\n  margin-right: 0px !important;\n}\n\n.app-inro-circle[_ngcontent-%COMP%] {\n  top: calc(40vh - 150px) !important;\n}\n\n.on-top[_ngcontent-%COMP%] {\n  z-index: 1000 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvZW50aXRpZXMvY29tcGFueS9jb21wYW55LWNvbnRlbnQvRTpcXE1ZV09SS1xcUm9ja0hpbWFudC1XZXRHb29kXFx3ZXRnb29kLXVpL3NyY1xcYXBwXFx2aWV3c1xcZW50aXRpZXNcXGNvbXBhbnlcXGNvbXBhbnktY29udGVudFxcY29tcGFueS1jb250ZW50LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC92aWV3cy9lbnRpdGllcy9jb21wYW55L2NvbXBhbnktY29udGVudC9jb21wYW55LWNvbnRlbnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSw0Q0FBMkM7RUFDM0MsNEJBQTJCO0FDQy9COztBREVBO0VBQ0ksaUJBQWlCO0FDQ3JCOztBREVBO0VBQ0ksZ0JBQWdCO0VBQ2hCLFdBQVc7QUNDZjs7QURFQTtFQUNJLFlBQVk7QUNDaEI7O0FERUE7RUFDSSxvQkFBb0I7QUNDeEI7O0FERUE7RUFDSSwyQkFBMEI7RUFDMUIsNEJBQTJCO0FDQy9COztBREVBO0VBQ0ksa0NBQWlDO0FDQ3JDOztBREVBO0VBQ0ksd0JBQXVCO0FDQzNCIiwiZmlsZSI6InNyYy9hcHAvdmlld3MvZW50aXRpZXMvY29tcGFueS9jb21wYW55LWNvbnRlbnQvY29tcGFueS1jb250ZW50LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRyb3Bkb3duLW1lbnUuc2hvd3tcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC02NXB4LCAzM3B4KSFpbXBvcnRhbnQ7XHJcbiAgICB3aWxsLWNoYW5nZTogYXV0byFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5jb21wYW55LWRldGFpbHMtcGFnZSB7XHJcbiAgICBwYWRkaW5nLXRvcDogMzBweDtcclxufVxyXG5cclxuLml0ZW0tZGV0YWlscy1wYWdlLml0ZW1zLWxhYmVsIHtcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICBjb2xvcjogIzc3NztcclxufVxyXG5cclxuLnRleHQtYmxhY2sge1xyXG4gICAgY29sb3I6ICMwMDAwO1xyXG59XHJcblxyXG4uZ3JvdXAge1xyXG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbn1cclxuXHJcbi5uby1tYXJnaW4ge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDBweCFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDBweCFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5hcHAtaW5yby1jaXJjbGUge1xyXG4gICAgdG9wOiBjYWxjKDQwdmggLSAxNTBweCkhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ub24tdG9wIHtcclxuICAgIHotaW5kZXg6IDEwMDAhaW1wb3J0YW50O1xyXG59IiwiLmRyb3Bkb3duLW1lbnUuc2hvdyB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC02NXB4LCAzM3B4KSAhaW1wb3J0YW50O1xuICB3aWxsLWNoYW5nZTogYXV0byAhaW1wb3J0YW50O1xufVxuXG4uY29tcGFueS1kZXRhaWxzLXBhZ2Uge1xuICBwYWRkaW5nLXRvcDogMzBweDtcbn1cblxuLml0ZW0tZGV0YWlscy1wYWdlLml0ZW1zLWxhYmVsIHtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgY29sb3I6ICM3Nzc7XG59XG5cbi50ZXh0LWJsYWNrIHtcbiAgY29sb3I6ICMwMDAwO1xufVxuXG4uZ3JvdXAge1xuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbn1cblxuLm5vLW1hcmdpbiB7XG4gIG1hcmdpbi1sZWZ0OiAwcHggIWltcG9ydGFudDtcbiAgbWFyZ2luLXJpZ2h0OiAwcHggIWltcG9ydGFudDtcbn1cblxuLmFwcC1pbnJvLWNpcmNsZSB7XG4gIHRvcDogY2FsYyg0MHZoIC0gMTUwcHgpICFpbXBvcnRhbnQ7XG59XG5cbi5vbi10b3Age1xuICB6LWluZGV4OiAxMDAwICFpbXBvcnRhbnQ7XG59XG4iXX0= */"], data: { animation: [_shared_animations_shared_animations__WEBPACK_IMPORTED_MODULE_4__["SharedAnimations"]] } });
    return CompanyContentComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CompanyContentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-company-content',
                templateUrl: './company-content.component.html',
                styleUrls: ['./company-content.component.scss'],
                animations: [_shared_animations_shared_animations__WEBPACK_IMPORTED_MODULE_4__["SharedAnimations"]]
            }]
    }], function () { return [{ type: _company_service__WEBPACK_IMPORTED_MODULE_5__["CompanyService"] }, { type: _shared_services_audit_service__WEBPACK_IMPORTED_MODULE_7__["AuditService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }, { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbModal"] }, { type: _shared_services_attachment_service__WEBPACK_IMPORTED_MODULE_8__["AttachmentService"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_11__["ToastrService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] }]; }, { matSidenav: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['matSidenav']
        }], psContainer: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_1__["PerfectScrollbarDirective"]]
        }], msgInput: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"],
            args: ['msgInput']
        }], msgForm: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['msgForm']
        }] }); })();


/***/ }),

/***/ "./src/app/views/entities/company/company-left-pane/company-left-pane.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/views/entities/company/company-left-pane/company-left-pane.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: CompanyLeftPaneComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyLeftPaneComponent", function() { return CompanyLeftPaneComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _company_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../company.service */ "./src/app/views/entities/company/company.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _shared_directives_sidebar_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../shared/directives/sidebar.directive */ "./src/app/shared/directives/sidebar.directive.ts");
/* harmony import */ var _shared_components_app_spinner_wrapper_app_spinner_wrapper_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../shared/components/app-spinner-wrapper/app-spinner-wrapper.component */ "./src/app/shared/components/app-spinner-wrapper/app-spinner-wrapper.component.ts");














function CompanyLeftPaneComponent_button_7_Template(rf, ctx) { if (rf & 1) {
    var _r279 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CompanyLeftPaneComponent_button_7_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r279); var action_r277 = ctx.$implicit; var ctx_r278 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r278.filter(action_r277); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var action_r277 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](action_r277);
} }
function CompanyLeftPaneComponent_div_19_Template(rf, ctx) { if (rf & 1) {
    var _r282 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CompanyLeftPaneComponent_div_19_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r282); var company_r280 = ctx.$implicit; var ctx_r281 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r281.getCompanyByid(company_r280.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h6", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var company_r280 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](company_r280.name);
} }
function CompanyLeftPaneComponent_div_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-spinner-wrapper", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("showSpinner", true);
} }
var CompanyLeftPaneComponent = /** @class */ (function () {
    function CompanyLeftPaneComponent(companyService, router, route, modalService, fb) {
        this.companyService = companyService;
        this.router = router;
        this.route = route;
        this.modalService = modalService;
        this.fb = fb;
        this.selectedAction = 'All';
        this.loadingCollection = false;
        this.advancedSearchApplied = false;
        this.page = 1;
        this.pageSize = 6;
        this.searchControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]();
        this.filterAction = ['All', 'Active', 'Inactive'];
        this.userInput = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]();
    }
    CompanyLeftPaneComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loadingCollection = true;
        this.setAdvancedSearchForm();
        this.loadDataSub = this.companyService.loadCompanyData(this.page, this.pageSize)
            .subscribe(function (res) {
            _this.companies = res.content;
            _this.filteredCompanies = _this.companies;
            _this.collectionSize = res.totalElements;
            _this.loadingCollection = false;
        });
        this.searchControl.valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["debounceTime"])(200))
            .subscribe(function (value) {
            _this.filerData(value);
        });
        // Listen for company change
        this.advancedSearchSub = this.companyService.onAdvancedSearchApplied.subscribe(function (res) {
            if (res) {
                debugger;
                _this.companies = res.companies.content;
                _this.filteredCompanies = _this.companies;
                _this.collectionSize = res.companies.totalElements;
            }
        });
    };
    CompanyLeftPaneComponent.prototype.filerData = function (val) {
        var query = '?name=' + val;
        if (this.selectedAction.toLocaleLowerCase() != 'all') {
            query = query + '&status=' + this.selectedAction.toUpperCase();
        }
        this.companyService.performAdvancedSearch(query);
    };
    CompanyLeftPaneComponent.prototype.filerDataWithStatus = function (val) {
        var query = '';
        if (this.selectedAction.toLocaleLowerCase() != 'all') {
            query = query + '?status=' + this.selectedAction.toUpperCase();
        }
        this.companyService.performAdvancedSearch(query);
    };
    CompanyLeftPaneComponent.prototype.getCompanyByid = function (companyId) {
        this.companyService.getCompanyById(companyId)
            .subscribe(function (res) {
        }, function (err) {
            console.log(err);
        });
    };
    CompanyLeftPaneComponent.prototype.getPageFromService = function (page) {
        var _this = this;
        this.loadingCollection = true;
        this.companyService.loadCompanyData(page, this.pageSize)
            .subscribe(function (res) {
            _this.companies = res.content;
            _this.filteredCompanies = _this.companies;
            _this.collectionSize = res.totalElements;
            _this.loadingCollection = false;
            _this.page = page;
        });
    };
    CompanyLeftPaneComponent.prototype.filter = function (action) {
        this.selectedAction = action;
        this.filerDataWithStatus(action.toString());
    };
    CompanyLeftPaneComponent.prototype.add = function () {
        this.router.navigate(['add'], { relativeTo: this.route });
    };
    CompanyLeftPaneComponent.prototype.setAdvancedSearchForm = function () {
        this.advancedSearchForm = this.fb.group({
            name: '',
            registrationNumber: '',
            status: ''
        });
    };
    CompanyLeftPaneComponent.prototype.open = function (content) {
        this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' })
            .result.then(function (result) {
            console.log(result);
        }, function (reason) {
            console.log('Err!', reason);
        });
    };
    CompanyLeftPaneComponent.prototype.performAdvancedSearch = function (event) {
        this.loadingCollection = true;
        this.modalService.dismissAll('close clicked');
        this.advancedSearchApplied = true;
    };
    CompanyLeftPaneComponent.prototype.clearSearchCriteria = function () {
        this.advancedSearchApplied = false;
        this.filerData('');
    };
    CompanyLeftPaneComponent.prototype.showPagination = function () {
        if (this.filteredCompanies) {
            return this.filteredCompanies.length > 5 ? true : false;
        }
        return false;
    };
    CompanyLeftPaneComponent.ɵfac = function CompanyLeftPaneComponent_Factory(t) { return new (t || CompanyLeftPaneComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_company_service__WEBPACK_IMPORTED_MODULE_1__["CompanyService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"])); };
    CompanyLeftPaneComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CompanyLeftPaneComponent, selectors: [["app-company-left-pane"]], decls: 23, vars: 9, consts: [[1, "border-right"], [1, "pt-2", "pb-2", "pl-3", "pr-3", "d-flex", "align-items-center", "box-shadow-1", "chat-topbar"], [1, "col-sm-6", "pl-0", "pr-0"], ["ngbDropdown", "", "role", "group", "placement", "bottom", 1, "btn-group"], ["ngbDropdownToggle", "", 1, "btn", "btn-outline-light", "btn-rounded"], ["ngbDropdownMenu", "", 1, "dropdown-menu"], ["class", "dropdown-item", 3, "click", 4, "ngFor", "ngForOf"], [1, "d-flex", "align-items-center", "float-right"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], [1, "pt-2", "pb-2", "pl-3", "pr-3", "d-flex", "o-hidden", "align-items-center", "box-shadow-1", "chat-topbar"], ["appSidebarToggler", "company-sidebar", 1, "link-icon", "d-md-none"], [1, "icon-regular", "ml-0", "mr-3", "i-Left"], [1, "form-group", "m-0", "flex-grow-1"], ["id", "search", "placeholder", "Search company", 1, "form-control", "form-control-rounded", 3, "formControl"], [1, "left-pane-container"], [1, "mt-3", "pb-2", "pl-3", "pr-3", "font-weight-bold", "text-muted", "border-bottom"], ["class", "p-3 d-flex border-bottom align-items-center contact no-dot list-item", 3, "click", 4, "ngFor", "ngForOf"], [1, "row", "no-margin", "pagination-div", "card-footer"], ["aria-label", "Default pagination", 3, "collectionSize", "page", "pageSize", "boundaryLinks", "pageChange"], [4, "ngIf"], [1, "dropdown-item", 3, "click"], [1, "p-3", "d-flex", "border-bottom", "align-items-center", "contact", "no-dot", "list-item", 3, "click"], [1, ""], [3, "showSpinner"]], template: function CompanyLeftPaneComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, CompanyLeftPaneComponent_button_7_Template, 2, 1, "button", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CompanyLeftPaneComponent_Template_button_click_10_listener() { return ctx.add(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "New");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "i", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "div", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, CompanyLeftPaneComponent_div_19_Template, 3, 1, "div", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "ngb-pagination", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("pageChange", function CompanyLeftPaneComponent_Template_ngb_pagination_pageChange_21_listener($event) { return ctx.page = $event; })("pageChange", function CompanyLeftPaneComponent_Template_ngb_pagination_pageChange_21_listener($event) { return ctx.getPageFromService($event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, CompanyLeftPaneComponent_div_22_Template, 2, 1, "div", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.selectedAction);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.filterAction);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.searchControl);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.filteredCompanies);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("collectionSize", ctx.collectionSize)("page", ctx.page)("pageSize", 6)("boundaryLinks", true);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loadingCollection);
        } }, directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbDropdown"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbDropdownToggle"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbDropdownMenu"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _shared_directives_sidebar_directive__WEBPACK_IMPORTED_MODULE_7__["SidebarTogglerDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlDirective"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbPagination"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _shared_components_app_spinner_wrapper_app_spinner_wrapper_component__WEBPACK_IMPORTED_MODULE_8__["AppSpinnerWrapperComponent"]], styles: [".no-dot[_ngcontent-%COMP%]::before {\n  background: none !important;\n}\n\n.dropdown-menu.show[_ngcontent-%COMP%] {\n  transform: translate(0px, 33px) !important;\n}\n\n.btn-group[_ngcontent-%COMP%]    > .btn[_ngcontent-%COMP%] {\n  margin-left: 5px;\n}\n\n.show-on-top[_ngcontent-%COMP%] {\n  z-index: 1000;\n  position: absolute;\n  top: 200px;\n  left: 80px;\n}\n\n.left-pane-container[_ngcontent-%COMP%] {\n  height: calc(100vh - 260px);\n}\n\n.pagination-div[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0px;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvZW50aXRpZXMvY29tcGFueS9jb21wYW55LWxlZnQtcGFuZS9FOlxcTVlXT1JLXFxSb2NrSGltYW50LVdldEdvb2RcXHdldGdvb2QtdWkvc3JjXFxhcHBcXHZpZXdzXFxlbnRpdGllc1xcY29tcGFueVxcY29tcGFueS1sZWZ0LXBhbmVcXGNvbXBhbnktbGVmdC1wYW5lLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC92aWV3cy9lbnRpdGllcy9jb21wYW55L2NvbXBhbnktbGVmdC1wYW5lL2NvbXBhbnktbGVmdC1wYW5lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksMkJBQTBCO0FDQTlCOztBREdBO0VBQ0ksMENBQXlDO0FDQTdDOztBREdBO0VBQWdCLGdCQUFlO0FDQy9COztBRENBO0VBQ0ksYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsVUFBVTtBQ0VkOztBRENBO0VBQ0ksMkJBQTJCO0FDRS9COztBRENBO0VBQ0ksa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLFdBQVc7QUNFZiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2VudGl0aWVzL2NvbXBhbnkvY29tcGFueS1sZWZ0LXBhbmUvY29tcGFueS1sZWZ0LXBhbmUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLm5vLWRvdDo6YmVmb3JlIHtcclxuICAgIGJhY2tncm91bmQ6IG5vbmUhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZHJvcGRvd24tbWVudS5zaG93IHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDBweCwgMzNweCkhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uYnRuLWdyb3VwPi5idG57bWFyZ2luLWxlZnQ6NXB4fVxyXG5cclxuLnNob3ctb24tdG9wICB7XHJcbiAgICB6LWluZGV4OiAxMDAwO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAyMDBweDtcclxuICAgIGxlZnQ6IDgwcHg7XHJcbn1cclxuXHJcbi5sZWZ0LXBhbmUtY29udGFpbmVyIHtcclxuICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDI2MHB4KTtcclxufVxyXG5cclxuLnBhZ2luYXRpb24tZGl2IHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogMHB4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbiIsIi5uby1kb3Q6OmJlZm9yZSB7XG4gIGJhY2tncm91bmQ6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuLmRyb3Bkb3duLW1lbnUuc2hvdyB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDBweCwgMzNweCkgIWltcG9ydGFudDtcbn1cblxuLmJ0bi1ncm91cCA+IC5idG4ge1xuICBtYXJnaW4tbGVmdDogNXB4O1xufVxuXG4uc2hvdy1vbi10b3Age1xuICB6LWluZGV4OiAxMDAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMjAwcHg7XG4gIGxlZnQ6IDgwcHg7XG59XG5cbi5sZWZ0LXBhbmUtY29udGFpbmVyIHtcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMjYwcHgpO1xufVxuXG4ucGFnaW5hdGlvbi1kaXYge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMHB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG59XG4iXX0= */"] });
    return CompanyLeftPaneComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CompanyLeftPaneComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-company-left-pane',
                templateUrl: './company-left-pane.component.html',
                styleUrls: ['./company-left-pane.component.scss']
            }]
    }], function () { return [{ type: _company_service__WEBPACK_IMPORTED_MODULE_1__["CompanyService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModal"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] }]; }, null); })();


/***/ }),

/***/ "./src/app/views/entities/company/company-routing.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/views/entities/company/company-routing.module.ts ***!
  \******************************************************************/
/*! exports provided: CompanyRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyRoutingModule", function() { return CompanyRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _company_company_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./company/company.component */ "./src/app/views/entities/company/company/company.component.ts");
/* harmony import */ var _add_add_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add/add.component */ "./src/app/views/entities/company/add/add.component.ts");
/* harmony import */ var _edit_edit_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./edit/edit.component */ "./src/app/views/entities/company/edit/edit.component.ts");
/* harmony import */ var _clone_clone_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./clone/clone.component */ "./src/app/views/entities/company/clone/clone.component.ts");








var routes = [
    {
        path: '',
        component: _company_company_component__WEBPACK_IMPORTED_MODULE_2__["CompanyComponent"]
    },
    {
        path: 'add',
        component: _add_add_component__WEBPACK_IMPORTED_MODULE_3__["AddComponent"]
    },
    {
        path: 'edit/:id',
        component: _edit_edit_component__WEBPACK_IMPORTED_MODULE_4__["EditComponent"]
    },
    {
        path: 'clone/:id',
        component: _clone_clone_component__WEBPACK_IMPORTED_MODULE_5__["CloneComponent"]
    }
];
var CompanyRoutingModule = /** @class */ (function () {
    function CompanyRoutingModule() {
    }
    CompanyRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: CompanyRoutingModule });
    CompanyRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function CompanyRoutingModule_Factory(t) { return new (t || CompanyRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
    return CompanyRoutingModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CompanyRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CompanyRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/views/entities/company/company.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/views/entities/company/company.module.ts ***!
  \**********************************************************/
/*! exports provided: CompanyModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyModule", function() { return CompanyModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "./node_modules/ngx-perfect-scrollbar/__ivy_ngcc__/fesm5/ngx-perfect-scrollbar.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm5/ng-bootstrap.js");
/* harmony import */ var _company_company_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./company/company.component */ "./src/app/views/entities/company/company/company.component.ts");
/* harmony import */ var _company_left_pane_company_left_pane_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./company-left-pane/company-left-pane.component */ "./src/app/views/entities/company/company-left-pane/company-left-pane.component.ts");
/* harmony import */ var _company_content_company_content_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./company-content/company-content.component */ "./src/app/views/entities/company/company-content/company-content.component.ts");
/* harmony import */ var _company_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./company-routing.module */ "./src/app/views/entities/company/company-routing.module.ts");
/* harmony import */ var _shared_directives_shared_directives_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/directives/shared-directives.module */ "./src/app/shared/directives/shared-directives.module.ts");
/* harmony import */ var _shared_pipes_shared_pipes_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shared/pipes/shared-pipes.module */ "./src/app/shared/pipes/shared-pipes.module.ts");
/* harmony import */ var _add_add_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./add/add.component */ "./src/app/views/entities/company/add/add.component.ts");
/* harmony import */ var _edit_edit_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./edit/edit.component */ "./src/app/views/entities/company/edit/edit.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _forms_forms_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../forms/forms.module */ "./src/app/views/forms/forms.module.ts");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/__ivy_ngcc__/dist/ngx-pagination.js");
/* harmony import */ var _shared_components_shared_components_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../shared/components/shared-components.module */ "./src/app/shared/components/shared-components.module.ts");
/* harmony import */ var _clone_clone_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./clone/clone.component */ "./src/app/views/entities/company/clone/clone.component.ts");


















var CompanyModule = /** @class */ (function () {
    function CompanyModule() {
    }
    CompanyModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: CompanyModule });
    CompanyModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function CompanyModule_Factory(t) { return new (t || CompanyModule)(); }, imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _company_routing_module__WEBPACK_IMPORTED_MODULE_7__["CompanyRoutingModule"],
                ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_2__["PerfectScrollbarModule"],
                _shared_directives_shared_directives_module__WEBPACK_IMPORTED_MODULE_8__["SharedDirectivesModule"],
                _shared_pipes_shared_pipes_module__WEBPACK_IMPORTED_MODULE_9__["SharedPipesModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ReactiveFormsModule"], _forms_forms_module__WEBPACK_IMPORTED_MODULE_13__["AppFormsModule"],
                ngx_pagination__WEBPACK_IMPORTED_MODULE_14__["NgxPaginationModule"], _shared_components_shared_components_module__WEBPACK_IMPORTED_MODULE_15__["SharedComponentsModule"]
            ]] });
    return CompanyModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CompanyModule, { declarations: [_company_company_component__WEBPACK_IMPORTED_MODULE_4__["CompanyComponent"], _company_left_pane_company_left_pane_component__WEBPACK_IMPORTED_MODULE_5__["CompanyLeftPaneComponent"], _company_content_company_content_component__WEBPACK_IMPORTED_MODULE_6__["CompanyContentComponent"], _add_add_component__WEBPACK_IMPORTED_MODULE_10__["AddComponent"], _edit_edit_component__WEBPACK_IMPORTED_MODULE_11__["EditComponent"], _clone_clone_component__WEBPACK_IMPORTED_MODULE_16__["CloneComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _company_routing_module__WEBPACK_IMPORTED_MODULE_7__["CompanyRoutingModule"],
        ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_2__["PerfectScrollbarModule"],
        _shared_directives_shared_directives_module__WEBPACK_IMPORTED_MODULE_8__["SharedDirectivesModule"],
        _shared_pipes_shared_pipes_module__WEBPACK_IMPORTED_MODULE_9__["SharedPipesModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ReactiveFormsModule"], _forms_forms_module__WEBPACK_IMPORTED_MODULE_13__["AppFormsModule"],
        ngx_pagination__WEBPACK_IMPORTED_MODULE_14__["NgxPaginationModule"], _shared_components_shared_components_module__WEBPACK_IMPORTED_MODULE_15__["SharedComponentsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CompanyModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_company_company_component__WEBPACK_IMPORTED_MODULE_4__["CompanyComponent"], _company_left_pane_company_left_pane_component__WEBPACK_IMPORTED_MODULE_5__["CompanyLeftPaneComponent"], _company_content_company_content_component__WEBPACK_IMPORTED_MODULE_6__["CompanyContentComponent"], _add_add_component__WEBPACK_IMPORTED_MODULE_10__["AddComponent"], _edit_edit_component__WEBPACK_IMPORTED_MODULE_11__["EditComponent"], _clone_clone_component__WEBPACK_IMPORTED_MODULE_16__["CloneComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _company_routing_module__WEBPACK_IMPORTED_MODULE_7__["CompanyRoutingModule"],
                    ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_2__["PerfectScrollbarModule"],
                    _shared_directives_shared_directives_module__WEBPACK_IMPORTED_MODULE_8__["SharedDirectivesModule"],
                    _shared_pipes_shared_pipes_module__WEBPACK_IMPORTED_MODULE_9__["SharedPipesModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ReactiveFormsModule"], _forms_forms_module__WEBPACK_IMPORTED_MODULE_13__["AppFormsModule"],
                    ngx_pagination__WEBPACK_IMPORTED_MODULE_14__["NgxPaginationModule"], _shared_components_shared_components_module__WEBPACK_IMPORTED_MODULE_15__["SharedComponentsModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/views/entities/company/company/company.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/views/entities/company/company/company.component.ts ***!
  \*********************************************************************/
/*! exports provided: CompanyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyComponent", function() { return CompanyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _company_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../company.service */ "./src/app/views/entities/company/company.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm5/ng-bootstrap.js");
/* harmony import */ var _shared_directives_sidebar_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/directives/sidebar.directive */ "./src/app/shared/directives/sidebar.directive.ts");
/* harmony import */ var _company_content_company_content_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../company-content/company-content.component */ "./src/app/views/entities/company/company-content/company-content.component.ts");
/* harmony import */ var _company_left_pane_company_left_pane_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../company-left-pane/company-left-pane.component */ "./src/app/views/entities/company/company-left-pane/company-left-pane.component.ts");










var CompanyComponent = /** @class */ (function () {
    function CompanyComponent(fb, companyService) {
        this.fb = fb;
        this.companyService = companyService;
        this.isCollapsed = true;
    }
    CompanyComponent.prototype.ngOnInit = function () {
        this.setAdvancedSearchForm();
    };
    CompanyComponent.prototype.setAdvancedSearchForm = function () {
        this.advancedSearchForm = this.fb.group({
            name: '',
            registrationNumber: '',
            status: ''
        });
    };
    CompanyComponent.prototype.clear = function () {
        this.advancedSearchForm.controls['name'].setValue('');
        this.advancedSearchForm.controls['registrationNumber'].setValue('');
        this.advancedSearchForm.controls['status'].setValue('');
        this.companyService.performAdvancedSearch('');
    };
    CompanyComponent.prototype.performAdvancedSearch = function () {
        var comp = this.advancedSearchForm.value;
        var compSearch = new _company_service__WEBPACK_IMPORTED_MODULE_2__["CompanySearch"]();
        var query = '?name=' + comp.name + '&registrationNumber=' + comp.registrationNumber + '&status=';
        if (comp.status && comp.status != 'ALL') {
            query = query + comp.status;
        }
        if (comp) {
            this.companyService.performAdvancedSearch(query);
        }
    };
    CompanyComponent.ɵfac = function CompanyComponent_Factory(t) { return new (t || CompanyComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_company_service__WEBPACK_IMPORTED_MODULE_2__["CompanyService"])); };
    CompanyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CompanyComponent, selectors: [["app-company"]], decls: 36, vars: 3, consts: [[1, "breadcrumb", "space-between"], ["type", "button", "aria-controls", "collapseExample", 1, "btn", "btn-outline-primary", 3, "click"], [1, "fas", "fa-search", "mr-2"], ["id", "collapseExample", 1, "row", "no-margin", "mb-2", 3, "ngbCollapse"], [1, "card", "card-body"], [3, "formGroup"], [1, "form-group", "row", "space-between"], [1, "col-3", "p-1"], ["formControlName", "name", 1, "form-control"], ["formControlName", "registrationNumber", 1, "form-control"], ["formControlName", "status", 1, "form-control"], ["value", "ACTIVE"], ["value", "INACTIVE"], [1, "col-3", "p-1", "float-right", "d-flex", "align-items-center", "mt-4"], [1, "btn", "btn-primary", 3, "click"], [1, "btn", "ml-2", 3, "click"], ["appSidebarContainer", "", 1, "card", "chat-sidebar-container"], ["appSidebarContent", "", 1, "chat-content-wrap"], ["appSidebar", "company-sidebar", 1, "chat-sidebar-wrap"]], template: function CompanyComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Companies");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CompanyComponent_Template_button_click_3_listener() { return ctx.isCollapsed = !ctx.isCollapsed; });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Advance Search ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "form", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Name");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Registration number");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "input", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "label");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Status");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "select", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "option", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Active");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "option", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Inactive");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "button", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CompanyComponent_Template_button_click_27_listener() { return ctx.performAdvancedSearch(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Search");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "button", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CompanyComponent_Template_button_click_29_listener() { return ctx.clear(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Clear");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "app-company-content");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "app-company-left-pane");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-expanded", !ctx.isCollapsed);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngbCollapse", ctx.isCollapsed);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.advancedSearchForm);
        } }, directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbCollapse"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"], _shared_directives_sidebar_directive__WEBPACK_IMPORTED_MODULE_4__["SidebarContainerDirective"], _shared_directives_sidebar_directive__WEBPACK_IMPORTED_MODULE_4__["SidebarContentDirective"], _company_content_company_content_component__WEBPACK_IMPORTED_MODULE_5__["CompanyContentComponent"], _shared_directives_sidebar_directive__WEBPACK_IMPORTED_MODULE_4__["SidebarDirective"], _company_left_pane_company_left_pane_component__WEBPACK_IMPORTED_MODULE_6__["CompanyLeftPaneComponent"]], styles: [".space-between[_ngcontent-%COMP%] {\n  justify-content: space-between;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvZW50aXRpZXMvY29tcGFueS9jb21wYW55L0U6XFxNWVdPUktcXFJvY2tIaW1hbnQtV2V0R29vZFxcd2V0Z29vZC11aS9zcmNcXGFwcFxcdmlld3NcXGVudGl0aWVzXFxjb21wYW55XFxjb21wYW55XFxjb21wYW55LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC92aWV3cy9lbnRpdGllcy9jb21wYW55L2NvbXBhbnkvY29tcGFueS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDhCQUE4QjtBQ0NsQyIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2VudGl0aWVzL2NvbXBhbnkvY29tcGFueS9jb21wYW55LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNwYWNlLWJldHdlZW4ge1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcbiIsIi5zcGFjZS1iZXR3ZWVuIHtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuIl19 */"] });
    return CompanyComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CompanyComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-company',
                templateUrl: './company.component.html',
                styleUrls: ['./company.component.scss']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _company_service__WEBPACK_IMPORTED_MODULE_2__["CompanyService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/views/entities/company/edit/edit.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/views/entities/company/edit/edit.component.ts ***!
  \***************************************************************/
/*! exports provided: EditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditComponent", function() { return EditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _company_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../company.service */ "./src/app/views/entities/company/company.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _shared_common_action__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/common/action */ "./src/app/shared/common/action.ts");
/* harmony import */ var _forms_company_editor_company_editor_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../forms/company-editor/company-editor.component */ "./src/app/views/forms/company-editor/company-editor.component.ts");








var EditComponent = /** @class */ (function () {
    function EditComponent(companyService, router, route) {
        this.companyService = companyService;
        this.router = router;
        this.route = route;
        this.action = _shared_common_action__WEBPACK_IMPORTED_MODULE_3__["Action"].EDIT;
    }
    EditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) { return _this.companyId = params['id']; });
    };
    EditComponent.ɵfac = function EditComponent_Factory(t) { return new (t || EditComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_company_service__WEBPACK_IMPORTED_MODULE_1__["CompanyService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"])); };
    EditComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EditComponent, selectors: [["app-edit"]], decls: 1, vars: 2, consts: [[3, "action", "companyId"]], template: function EditComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-company-editor", 0);
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("action", ctx.action)("companyId", ctx.companyId);
        } }, directives: [_forms_company_editor_company_editor_component__WEBPACK_IMPORTED_MODULE_4__["CompanyEditorComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2VudGl0aWVzL2NvbXBhbnkvZWRpdC9lZGl0LmNvbXBvbmVudC5zY3NzIn0= */"] });
    return EditComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EditComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-edit',
                templateUrl: './edit.component.html',
                styleUrls: ['./edit.component.scss']
            }]
    }], function () { return [{ type: _company_service__WEBPACK_IMPORTED_MODULE_1__["CompanyService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=company-company-module.js.map