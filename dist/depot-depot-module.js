(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["depot-depot-module"],{

/***/ "./src/app/views/depot/depot/depot.component.ts":
/*!******************************************************!*\
  !*** ./src/app/views/depot/depot/depot.component.ts ***!
  \******************************************************/
/*! exports provided: DepotComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DepotComponent", function() { return DepotComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");


var DepotComponent = /** @class */ (function () {
    function DepotComponent() {
    }
    DepotComponent.prototype.ngOnInit = function () {
    };
    DepotComponent.ɵfac = function DepotComponent_Factory(t) { return new (t || DepotComponent)(); };
    DepotComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DepotComponent, selectors: [["app-depot"]], decls: 2, vars: 0, template: function DepotComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "depot works!");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2RlcG90L2RlcG90L2RlcG90LmNvbXBvbmVudC5zY3NzIn0= */"] });
    return DepotComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DepotComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-depot',
                templateUrl: './depot.component.html',
                styleUrls: ['./depot.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/views/depot/depot/depot.module.ts":
/*!***************************************************!*\
  !*** ./src/app/views/depot/depot/depot.module.ts ***!
  \***************************************************/
/*! exports provided: DepotModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DepotModule", function() { return DepotModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _depot_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./depot.component */ "./src/app/views/depot/depot/depot.component.ts");




var DepotModule = /** @class */ (function () {
    function DepotModule() {
    }
    DepotModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: DepotModule });
    DepotModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function DepotModule_Factory(t) { return new (t || DepotModule)(); }, imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
            ]] });
    return DepotModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DepotModule, { declarations: [_depot_component__WEBPACK_IMPORTED_MODULE_2__["DepotComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DepotModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_depot_component__WEBPACK_IMPORTED_MODULE_2__["DepotComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
                ]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=depot-depot-module.js.map