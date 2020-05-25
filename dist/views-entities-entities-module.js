(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-entities-entities-module"],{

/***/ "./src/app/views/entities/entities-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/views/entities/entities-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: EntitiesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntitiesRoutingModule", function() { return EntitiesRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");




var routes = [
    {
        path: 'company',
        loadChildren: function () { return Promise.all(/*! import() | company-company-module */[__webpack_require__.e("common"), __webpack_require__.e("company-company-module")]).then(__webpack_require__.bind(null, /*! ./company/company.module */ "./src/app/views/entities/company/company.module.ts")).then(function (m) { return m.CompanyModule; }); }
    },
    {
        path: 'retailer-company',
        loadChildren: function () { return __webpack_require__.e(/*! import() | retailer-company-retailer-company-module */ "retailer-company-retailer-company-module").then(__webpack_require__.bind(null, /*! ./retailer-company/retailer-company.module */ "./src/app/views/entities/retailer-company/retailer-company.module.ts")).then(function (m) { return m.RetailerCompanyModule; }); }
    },
    {
        path: 'retailer',
        loadChildren: function () { return Promise.all(/*! import() | retailer-retailer-module */[__webpack_require__.e("common"), __webpack_require__.e("retailer-retailer-module")]).then(__webpack_require__.bind(null, /*! ./retailer/retailer.module */ "./src/app/views/entities/retailer/retailer.module.ts")).then(function (m) { return m.RetailerModule; }); }
    },
    {
        path: 'financial',
        loadChildren: function () { return __webpack_require__.e(/*! import() | fin-ins-fin-ins-module */ "fin-ins-fin-ins-module").then(__webpack_require__.bind(null, /*! ./fin-ins/fin-ins.module */ "./src/app/views/entities/fin-ins/fin-ins.module.ts")).then(function (m) { return m.FinInsModule; }); }
    },
    {
        path: 'transporter',
        loadChildren: function () { return __webpack_require__.e(/*! import() | transporter-transporter-module */ "transporter-transporter-module").then(__webpack_require__.bind(null, /*! ./transporter/transporter.module */ "./src/app/views/entities/transporter/transporter.module.ts")).then(function (m) { return m.TransporterModule; }); }
    }
    // },
    // {
    //   path: 'truck',
    //   loadChildren: () => import('./truck/truck.module').then(m => m.TruckModule)
    // }
];
var EntitiesRoutingModule = /** @class */ (function () {
    function EntitiesRoutingModule() {
    }
    EntitiesRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: EntitiesRoutingModule });
    EntitiesRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function EntitiesRoutingModule_Factory(t) { return new (t || EntitiesRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
    return EntitiesRoutingModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](EntitiesRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EntitiesRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/views/entities/entities.module.ts":
/*!***************************************************!*\
  !*** ./src/app/views/entities/entities.module.ts ***!
  \***************************************************/
/*! exports provided: EntitiesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntitiesModule", function() { return EntitiesModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _forms_forms_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../forms/forms.module */ "./src/app/views/forms/forms.module.ts");
/* harmony import */ var _entities_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./entities-routing.module */ "./src/app/views/entities/entities-routing.module.ts");





var EntitiesModule = /** @class */ (function () {
    function EntitiesModule() {
    }
    EntitiesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: EntitiesModule });
    EntitiesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function EntitiesModule_Factory(t) { return new (t || EntitiesModule)(); }, imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _entities_routing_module__WEBPACK_IMPORTED_MODULE_3__["EntitiesRoutingModule"], _forms_forms_module__WEBPACK_IMPORTED_MODULE_2__["AppFormsModule"]
            ]] });
    return EntitiesModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](EntitiesModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _entities_routing_module__WEBPACK_IMPORTED_MODULE_3__["EntitiesRoutingModule"], _forms_forms_module__WEBPACK_IMPORTED_MODULE_2__["AppFormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](EntitiesModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _entities_routing_module__WEBPACK_IMPORTED_MODULE_3__["EntitiesRoutingModule"], _forms_forms_module__WEBPACK_IMPORTED_MODULE_2__["AppFormsModule"]
                ]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=views-entities-entities-module.js.map