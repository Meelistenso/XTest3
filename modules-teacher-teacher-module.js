(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-teacher-teacher-module"],{

/***/ "./src/app/modules/teacher/pages/teacher-group/teacher-group.component.css":
/*!*********************************************************************************!*\
  !*** ./src/app/modules/teacher/pages/teacher-group/teacher-group.component.css ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modules/teacher/pages/teacher-group/teacher-group.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/modules/teacher/pages/teacher-group/teacher-group.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  teacher-group works!\n</p>\n"

/***/ }),

/***/ "./src/app/modules/teacher/pages/teacher-group/teacher-group.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/modules/teacher/pages/teacher-group/teacher-group.component.ts ***!
  \********************************************************************************/
/*! exports provided: TeacherGroupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeacherGroupComponent", function() { return TeacherGroupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TeacherGroupComponent = /** @class */ (function () {
    function TeacherGroupComponent() {
    }
    TeacherGroupComponent.prototype.ngOnInit = function () {
    };
    TeacherGroupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-teacher-group',
            template: __webpack_require__(/*! ./teacher-group.component.html */ "./src/app/modules/teacher/pages/teacher-group/teacher-group.component.html"),
            styles: [__webpack_require__(/*! ./teacher-group.component.css */ "./src/app/modules/teacher/pages/teacher-group/teacher-group.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TeacherGroupComponent);
    return TeacherGroupComponent;
}());



/***/ }),

/***/ "./src/app/modules/teacher/pages/teacher-groups/group-database.ts":
/*!************************************************************************!*\
  !*** ./src/app/modules/teacher/pages/teacher-groups/group-database.ts ***!
  \************************************************************************/
/*! exports provided: GroupFlatNode, GroupNode, GroupDatabase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupFlatNode", function() { return GroupFlatNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupNode", function() { return GroupNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupDatabase", function() { return GroupDatabase; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_teacher_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/teacher.service */ "./src/app/modules/teacher/shared/teacher.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GroupFlatNode = /** @class */ (function () {
    function GroupFlatNode(expandable, groupname, level, id) {
        this.expandable = expandable;
        this.groupname = groupname;
        this.level = level;
        this.id = id;
    }
    return GroupFlatNode;
}());

var GroupNode = /** @class */ (function () {
    function GroupNode() {
    }
    return GroupNode;
}());

var GroupDatabase = /** @class */ (function () {
    function GroupDatabase(teacherService) {
        this.teacherService = teacherService;
        this.dataChange = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"]([]);
        this.initialize();
    }
    Object.defineProperty(GroupDatabase.prototype, "data", {
        get: function () { return this.dataChange.value; },
        enumerable: true,
        configurable: true
    });
    GroupDatabase.prototype.initialize = function () {
        var _this = this;
        this.teacherService.getGroups().subscribe(function (dataObject) {
            var data = _this.buildFileTree(dataObject, 0);
            _this.dataChange.next(data);
            console.log(data);
        });
    };
    /**
     * Build the file structure tree. The `value` is the Json object, or a sub-tree of a Json object.
     * The return value is the list of `FileNode`.
     */
    GroupDatabase.prototype.buildFileTree = function (obj, level) {
        var _this = this;
        return Object.keys(obj).reduce(function (accumulator, key) {
            var value = obj[key];
            var node = new GroupNode();
            node.groupname = key;
            if (value != null) {
                if (typeof value === 'object') {
                    node.children = _this.buildFileTree(value, level + 1);
                }
                else {
                    node.id = value;
                }
            }
            return accumulator.concat(node);
        }, []);
    };
    GroupDatabase = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_shared_teacher_service__WEBPACK_IMPORTED_MODULE_2__["TeacherService"]])
    ], GroupDatabase);
    return GroupDatabase;
}());



/***/ }),

/***/ "./src/app/modules/teacher/pages/teacher-groups/teacher-groups.component.css":
/*!***********************************************************************************!*\
  !*** ./src/app/modules/teacher/pages/teacher-groups/teacher-groups.component.css ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".tree-progress-bar {\n  margin-left: 30px;\n}\n\na {\n  text-decoration: none;\n  color: #3f51b5;\n  font-size: 16px;\n  line-height: 28px;\n}"

/***/ }),

/***/ "./src/app/modules/teacher/pages/teacher-groups/teacher-groups.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/modules/teacher/pages/teacher-groups/teacher-groups.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-tree [dataSource]=\"dataSource\" [treeControl]=\"treeControl\">\n  <mat-tree-node *matTreeNodeDef=\"let node\" matTreeNodePadding>\n    <button mat-icon-button disabled></button>\n    <a [routerLink]=\"['/teacher/groups', node.id]\">{{node.groupname}}</a>\n  </mat-tree-node>\n  <mat-tree-node *matTreeNodeDef=\"let node; when: hasChild\" matTreeNodePadding>\n    <button mat-icon-button [attr.aria-label]=\"'toggle ' + node.groupname\" matTreeNodeToggle>\n      <mat-icon class=\"mat-icon-rtl-mirror\">\n        {{treeControl.isExpanded(node) ? 'expand_more' : 'chevron_right'}}\n      </mat-icon>\n    </button>\n    <a [routerLink]=\"['/teacher/groups', node.id]\">{{node.groupname}}</a>\n    <mat-progress-bar *ngIf=\"node.isLoading\" mode=\"indeterminate\" class=\"tree-progress-bar\"></mat-progress-bar>\n  </mat-tree-node>\n</mat-tree>\n"

/***/ }),

/***/ "./src/app/modules/teacher/pages/teacher-groups/teacher-groups.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/modules/teacher/pages/teacher-groups/teacher-groups.component.ts ***!
  \**********************************************************************************/
/*! exports provided: TeacherGroupsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeacherGroupsComponent", function() { return TeacherGroupsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/tree */ "./node_modules/@angular/cdk/esm5/tree.es5.js");
/* harmony import */ var _angular_material_tree__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/tree */ "./node_modules/@angular/material/esm5/tree.es5.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _group_database__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./group-database */ "./src/app/modules/teacher/pages/teacher-groups/group-database.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TeacherGroupsComponent = /** @class */ (function () {
    function TeacherGroupsComponent(database) {
        var _this = this;
        this.transformer = function (node, level) {
            return new _group_database__WEBPACK_IMPORTED_MODULE_4__["GroupFlatNode"](!!node.children, node.groupname, level, node.id);
        };
        this._getLevel = function (node) { return node.level; };
        this._isExpandable = function (node) { return node.expandable; };
        this._getChildren = function (node) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(node.children); };
        this.hasChild = function (_, _nodeData) { return _nodeData.expandable; };
        this.treeFlattener = new _angular_material_tree__WEBPACK_IMPORTED_MODULE_2__["MatTreeFlattener"](this.transformer, this._getLevel, this._isExpandable, this._getChildren);
        this.treeControl = new _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_1__["FlatTreeControl"](this._getLevel, this._isExpandable);
        this.dataSource = new _angular_material_tree__WEBPACK_IMPORTED_MODULE_2__["MatTreeFlatDataSource"](this.treeControl, this.treeFlattener);
        database.dataChange.subscribe(function (data) { return _this.dataSource.data = data; });
    }
    TeacherGroupsComponent.prototype.ngOnInit = function () { };
    TeacherGroupsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-teacher-groups',
            template: __webpack_require__(/*! ./teacher-groups.component.html */ "./src/app/modules/teacher/pages/teacher-groups/teacher-groups.component.html"),
            styles: [__webpack_require__(/*! ./teacher-groups.component.css */ "./src/app/modules/teacher/pages/teacher-groups/teacher-groups.component.css")]
        }),
        __metadata("design:paramtypes", [_group_database__WEBPACK_IMPORTED_MODULE_4__["GroupDatabase"]])
    ], TeacherGroupsComponent);
    return TeacherGroupsComponent;
}());



/***/ }),

/***/ "./src/app/modules/teacher/pages/teacher/teacher.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/modules/teacher/pages/teacher/teacher.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: contents;\n}\n\n.component-viewer {\n  padding: 20px 50px 50px 18px;\n}\n\n.sidebar-nav {\n  display: -ms-flexbox;\n  display: flex;\n  width: 100%;\n  -ms-flex-direction: column;\n      flex-direction: column;\n}\n\na.active {\n  background: #ffd740;\n}\n\n/* === === === */\n\n.circle {\n  border-radius: 50%;\n}\n\n.with-bg {\n  background: url('https://www.intheblack.com/~/media/intheblack/allimages/sponsored-content/2018/dexus-office-space.jpg') no-repeat center;\n  overflow: hidden;\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: -1;\n  max-height: 130px;\n}\n\n/* .header-box-shadow {\n  box-shadow: 0 3px 5px -1px rgba(0,0,0,.2), 0 6px 10px 0 rgba(0,0,0,.14), 0 1px 18px 0 rgba(0,0,0,.12);\n} */\n\n/* .bottom-to-top {\n  border: 0px;\n  border-right: 1px;\n  border-style: solid;\n  border-image:\n  linear-gradient(to top, #c1c1c1, rgba(0, 0, 0, 0)) 1 100%\n} */\n\n.sidebar-header {\n  padding: 30px 0;\n}\n"

/***/ }),

/***/ "./src/app/modules/teacher/pages/teacher/teacher.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/modules/teacher/pages/teacher/teacher.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-drawer>\n  <div header>\n    <span>Groups</span>\n  </div>\n  <div sidenav>\n    <div class=\"sidebar-header\" fxLayout=\"column\" fxLayoutAlign=\"center center\" fxLayoutGap=\"10px\">\n      <div class=\"with-bg\"></div>\n      <div>\n        <a>\n          <img class=\"circle\" src=\"https://static1.squarespace.com/static/590224f13e00bedff63281b3/t/5a3a94600d929714447c463b/1513788516065/Cap.png?format=500w\"\n            width=\"100\">\n        </a>\n      </div>\n    </div>\n    <mat-nav-list class=\"sidebar-nav\">\n      <a mat-list-item routerLink=\"/teacher/groups\" routerLinkActive=\"active\">Groups</a>\n      <a mat-list-item routerLink=\"/teacher/none\" routerLinkActive=\"active\" color=\"primary\">None</a>\n      <a mat-list-item routerLink=\"/teacher/none\" routerLinkActive=\"active\" color=\"accent\">None</a>\n    </mat-nav-list>\n  </div>\n  <div content>\n    <div class=\"component-viewer\">\n      <router-outlet></router-outlet>\n    </div>\n  </div>\n</app-drawer>\n"

/***/ }),

/***/ "./src/app/modules/teacher/pages/teacher/teacher.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/modules/teacher/pages/teacher/teacher.component.ts ***!
  \********************************************************************/
/*! exports provided: TeacherComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeacherComponent", function() { return TeacherComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var TeacherComponent = /** @class */ (function () {
    function TeacherComponent() {
    }
    TeacherComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-teacher',
            template: __webpack_require__(/*! ./teacher.component.html */ "./src/app/modules/teacher/pages/teacher/teacher.component.html"),
            styles: [__webpack_require__(/*! ./teacher.component.css */ "./src/app/modules/teacher/pages/teacher/teacher.component.css")]
        })
    ], TeacherComponent);
    return TeacherComponent;
}());



/***/ }),

/***/ "./src/app/modules/teacher/shared/teacher.service.ts":
/*!***********************************************************!*\
  !*** ./src/app/modules/teacher/shared/teacher.service.ts ***!
  \***********************************************************/
/*! exports provided: TeacherService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeacherService", function() { return TeacherService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_core_services_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/core/services/api.service */ "./src/app/core/services/api.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TeacherService = /** @class */ (function () {
    function TeacherService(apiService) {
        this.apiService = apiService;
    }
    TeacherService.prototype.getGroups = function () {
        return this.apiService.get('/teacher/groups').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) { return response.data; }));
    };
    TeacherService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]])
    ], TeacherService);
    return TeacherService;
}());



/***/ }),

/***/ "./src/app/modules/teacher/teacher-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/modules/teacher/teacher-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: TeacherRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeacherRoutingModule", function() { return TeacherRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _pages_teacher_teacher_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/teacher/teacher.component */ "./src/app/modules/teacher/pages/teacher/teacher.component.ts");
/* harmony import */ var _pages_teacher_groups_teacher_groups_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/teacher-groups/teacher-groups.component */ "./src/app/modules/teacher/pages/teacher-groups/teacher-groups.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    {
        path: '',
        component: _pages_teacher_teacher_component__WEBPACK_IMPORTED_MODULE_2__["TeacherComponent"],
        children: [
            {
                path: '',
                redirectTo: 'groups',
                pathMatch: 'full'
            },
            {
                path: 'groups',
                component: _pages_teacher_groups_teacher_groups_component__WEBPACK_IMPORTED_MODULE_3__["TeacherGroupsComponent"]
            },
            {
                path: 'groups/:id',
                component: _pages_teacher_groups_teacher_groups_component__WEBPACK_IMPORTED_MODULE_3__["TeacherGroupsComponent"]
            }
        ]
    },
];
var TeacherRoutingModule = /** @class */ (function () {
    function TeacherRoutingModule() {
    }
    TeacherRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], TeacherRoutingModule);
    return TeacherRoutingModule;
}());



/***/ }),

/***/ "./src/app/modules/teacher/teacher.module.ts":
/*!***************************************************!*\
  !*** ./src/app/modules/teacher/teacher.module.ts ***!
  \***************************************************/
/*! exports provided: TeacherModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeacherModule", function() { return TeacherModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _pages_teacher_teacher_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/teacher/teacher.component */ "./src/app/modules/teacher/pages/teacher/teacher.component.ts");
/* harmony import */ var _teacher_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./teacher-routing.module */ "./src/app/modules/teacher/teacher-routing.module.ts");
/* harmony import */ var _pages_teacher_groups_teacher_groups_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/teacher-groups/teacher-groups.component */ "./src/app/modules/teacher/pages/teacher-groups/teacher-groups.component.ts");
/* harmony import */ var _pages_teacher_group_teacher_group_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/teacher-group/teacher-group.component */ "./src/app/modules/teacher/pages/teacher-group/teacher-group.component.ts");
/* harmony import */ var _app_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _shared_teacher_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared/teacher.service */ "./src/app/modules/teacher/shared/teacher.service.ts");
/* harmony import */ var _pages_teacher_groups_group_database__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/teacher-groups/group-database */ "./src/app/modules/teacher/pages/teacher-groups/group-database.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var TeacherModule = /** @class */ (function () {
    function TeacherModule() {
    }
    TeacherModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _app_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _teacher_routing_module__WEBPACK_IMPORTED_MODULE_3__["TeacherRoutingModule"]
            ],
            providers: [_shared_teacher_service__WEBPACK_IMPORTED_MODULE_7__["TeacherService"], _pages_teacher_groups_group_database__WEBPACK_IMPORTED_MODULE_8__["GroupDatabase"]],
            declarations: [_pages_teacher_teacher_component__WEBPACK_IMPORTED_MODULE_2__["TeacherComponent"], _pages_teacher_groups_teacher_groups_component__WEBPACK_IMPORTED_MODULE_4__["TeacherGroupsComponent"], _pages_teacher_group_teacher_group_component__WEBPACK_IMPORTED_MODULE_5__["TeacherGroupComponent"]]
        })
    ], TeacherModule);
    return TeacherModule;
}());



/***/ })

}]);
//# sourceMappingURL=modules-teacher-teacher-module.js.map