(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-depot-depot-module"],{

/***/ "./src/app/views/depot/depot-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/views/depot/depot-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: DepotRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DepotRoutingModule", function() { return DepotRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");




var routes = [
    {
        path: 'depot',
        loadChildren: function () { return __webpack_require__.e(/*! import() | depot-depot-module */ "depot-depot-module").then(__webpack_require__.bind(null, /*! ./depot/depot.module */ "./src/app/views/depot/depot/depot.module.ts")).then(function (m) { return m.DepotModule; }); }
    },
    {
        path: 'tank',
        loadChildren: function () { return Promise.all(/*! import() | tank-tank-module */[__webpack_require__.e("common"), __webpack_require__.e("tank-tank-module")]).then(__webpack_require__.bind(null, /*! ./tank/tank.module */ "./src/app/views/depot/tank/tank.module.ts")).then(function (m) { return m.TankModule; }); }
    }
];
var DepotRoutingModule = /** @class */ (function () {
    function DepotRoutingModule() {
    }
    DepotRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: DepotRoutingModule });
    DepotRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function DepotRoutingModule_Factory(t) { return new (t || DepotRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
    return DepotRoutingModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DepotRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DepotRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/views/depot/depot.module.ts":
/*!*********************************************!*\
  !*** ./src/app/views/depot/depot.module.ts ***!
  \*********************************************/
/*! exports provided: DepotModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DepotModule", function() { return DepotModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _depot_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./depot-routing.module */ "./src/app/views/depot/depot-routing.module.ts");




var DepotModule = /** @class */ (function () {
    function DepotModule() {
    }
    DepotModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: DepotModule });
    DepotModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function DepotModule_Factory(t) { return new (t || DepotModule)(); }, imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _depot_routing_module__WEBPACK_IMPORTED_MODULE_2__["DepotRoutingModule"]
            ]] });
    return DepotModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DepotModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _depot_routing_module__WEBPACK_IMPORTED_MODULE_2__["DepotRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DepotModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _depot_routing_module__WEBPACK_IMPORTED_MODULE_2__["DepotRoutingModule"]
                ]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=views-depot-depot-module.js.map