(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./home/home.module": [
		"./src/app/home/home.module.ts"
	],
	"./modules/admin/admin.module": [
		"./src/app/modules/admin/admin.module.ts",
		"modules-admin-admin-module"
	],
	"./modules/student/student.module": [
		"./src/app/modules/student/student.module.ts",
		"modules-student-student-module"
	],
	"./modules/teacher/teacher.module": [
		"./src/app/modules/teacher/teacher.module.ts",
		"modules-teacher-teacher-module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		var module = __webpack_require__(ids[0]);
		return module;
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _config_app_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./config/app.config */ "./src/app/config/app.config.ts");
/* harmony import */ var _core_pages_error404_error404_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./core/pages/error404/error404.component */ "./src/app/core/pages/error404/error404.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



// import { HomePage } from './core/pages/home/home.page';

var routes = [
    { path: '', redirectTo: '/' + _config_app_config__WEBPACK_IMPORTED_MODULE_2__["AppConfig"].routes.home, pathMatch: 'full' },
    { path: _config_app_config__WEBPACK_IMPORTED_MODULE_2__["AppConfig"].routes.home, loadChildren: './home/home.module#HomeModule' },
    { path: _config_app_config__WEBPACK_IMPORTED_MODULE_2__["AppConfig"].routes.error404, component: _core_pages_error404_error404_component__WEBPACK_IMPORTED_MODULE_3__["Error404Component"] },
    { path: _config_app_config__WEBPACK_IMPORTED_MODULE_2__["AppConfig"].routes.teacher.teacher, loadChildren: './modules/teacher/teacher.module#TeacherModule' },
    { path: _config_app_config__WEBPACK_IMPORTED_MODULE_2__["AppConfig"].routes.student.student, loadChildren: './modules/student/student.module#StudentModule' },
    { path: _config_app_config__WEBPACK_IMPORTED_MODULE_2__["AppConfig"].routes.admin.admin, loadChildren: './modules/admin/admin.module#AdminModule' },
    // otherwise redirect to 404
    { path: '**', redirectTo: '/' + _config_app_config__WEBPACK_IMPORTED_MODULE_2__["AppConfig"].routes.error404 }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, {
                    scrollPositionRestoration: 'enabled',
                    anchorScrolling: 'enabled'
                })
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]
            ]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column\" style=\"height: 100%\">\n  <app-header fxFlex=\"0 0 auto\" class=\"mat-elevation-z6\"></app-header>\n  <div fxLayout=\"column\" fxFlex=\"1 1 auto\" style=\"overflow: auto\">\n    <div fxFlex=\"1 0 auto\" fxLayout=\"column\">\n      <router-outlet *ngIf=\"isOnline;else isOffline\"></router-outlet>\n    </div>\n    <ng-template #isOffline>\n      <div>\n        <p class=\"offline-error\">{{'offlineMessage' | translate}}&nbsp;&nbsp;&nbsp;<span>:&nbsp;)</span></p>\n      </div>\n    </ng-template>\n    <app-footer></app-footer>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _biesbjerg_ngx_translate_extract_dist_utils_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @biesbjerg/ngx-translate-extract/dist/utils/utils */ "./node_modules/@biesbjerg/ngx-translate-extract/dist/utils/utils.js");
/* harmony import */ var _biesbjerg_ngx_translate_extract_dist_utils_utils__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_biesbjerg_ngx_translate_extract_dist_utils_utils__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _app_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/core */ "./src/app/core/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AppComponent = /** @class */ (function () {
    function AppComponent(translateService, userService, title, meta, snackBar, router) {
        this.translateService = translateService;
        this.userService = userService;
        this.title = title;
        this.meta = meta;
        this.snackBar = snackBar;
        this.router = router;
        this.isOnline = navigator.onLine;
    }
    AppComponent.prototype.ngOnInit = function () {
        this.userService.populate();
        this.translateService.setDefaultLang('en');
        this.translateService.use('en');
        // With this we load the default language in the main bundle (cache busting)
        this.translateService.setTranslation('en', __webpack_require__(/*! ../assets/i18n/en.json */ "./src/assets/i18n/en.json"));
        this.title.setTitle('XTest 3');
        this.router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationEnd"]) {
                // switch (event.urlAfterRedirects) {
                //   case '/':
                //     this.meta.updateTag({
                //       name: 'description',
                //       content: 'Angular Example app with Angular CLI, Angular Material and more'
                //     });
                //     break;
                //   case '/' + AppConfig.routes.heroes:
                //     this.title.setTitle('Heroes list');
                //     this.meta.updateTag({
                //       name: 'description',
                //       content: 'List of super-heroes'
                //     });
                //     break;
                // }
            }
        });
        this.checkBrowserFeatures();
    };
    AppComponent.prototype.checkBrowserFeatures = function () {
        var _this = this;
        var supported = true;
        for (var feature in Modernizr) {
            if (Modernizr.hasOwnProperty(feature) &&
                typeof Modernizr[feature] === 'boolean' && Modernizr[feature] === false) {
                supported = false;
                break;
            }
        }
        if (!supported) {
            this.translateService.get([String(Object(_biesbjerg_ngx_translate_extract_dist_utils_utils__WEBPACK_IMPORTED_MODULE_5__["_"])('updateBrowser'))]).subscribe(function (texts) {
                _this.snackBar.open(texts['updateBrowser'], 'OK');
            });
        }
        return supported;
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html")
        }),
        __metadata("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"],
            _app_core__WEBPACK_IMPORTED_MODULE_6__["UserService"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Meta"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _config_app_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./config/app.config */ "./src/app/config/app.config.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./core/core.module */ "./src/app/core/core.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _shared_interceptors_progress_interceptor__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shared/interceptors/progress.interceptor */ "./src/app/shared/interceptors/progress.interceptor.ts");
/* harmony import */ var _shared_interceptors_timing_interceptor__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./shared/interceptors/timing.interceptor */ "./src/app/shared/interceptors/timing.interceptor.ts");
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/service-worker */ "./node_modules/@angular/service-worker/fesm5/service-worker.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _core_services_progress_bar_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./core/services/progress-bar.service */ "./src/app/core/services/progress-bar.service.ts");
/* harmony import */ var _home_home_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./home/home.module */ "./src/app/home/home.module.ts");
/* harmony import */ var _auth_auth_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./auth/auth.module */ "./src/app/auth/auth.module.ts");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./shared */ "./src/app/shared/index.ts");
/* harmony import */ var _webpack_translate_loader__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./webpack-translate-loader */ "./src/app/webpack-translate-loader.ts");
/* harmony import */ var _app_core_pages_error404_error404_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @app/core/pages/error404/error404.component */ "./src/app/core/pages/error404/error404.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _auth_auth_module__WEBPACK_IMPORTED_MODULE_15__["AuthModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
                _angular_service_worker__WEBPACK_IMPORTED_MODULE_11__["ServiceWorkerModule"].register('/ngsw-worker.js', {
                    enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_12__["environment"].production
                }),
                _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateModule"].forRoot({
                    loader: {
                        provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateLoader"],
                        useClass: _webpack_translate_loader__WEBPACK_IMPORTED_MODULE_17__["WebpackTranslateLoader"]
                    }
                }),
                _core_core_module__WEBPACK_IMPORTED_MODULE_4__["CoreModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _home_home_module__WEBPACK_IMPORTED_MODULE_14__["HomeModule"],
                _shared__WEBPACK_IMPORTED_MODULE_16__["SharedModule"],
            ],
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _shared__WEBPACK_IMPORTED_MODULE_16__["FooterComponent"],
                _shared__WEBPACK_IMPORTED_MODULE_16__["HeaderComponent"],
                _app_core_pages_error404_error404_component__WEBPACK_IMPORTED_MODULE_18__["Error404Component"],
            ],
            providers: [
                { provide: _config_app_config__WEBPACK_IMPORTED_MODULE_2__["APP_CONFIG"], useValue: _config_app_config__WEBPACK_IMPORTED_MODULE_2__["AppConfig"] },
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HTTP_INTERCEPTORS"],
                    useClass: _shared_interceptors_progress_interceptor__WEBPACK_IMPORTED_MODULE_9__["ProgressInterceptor"],
                    multi: true,
                    deps: [_core_services_progress_bar_service__WEBPACK_IMPORTED_MODULE_13__["ProgressBarService"]]
                },
                { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HTTP_INTERCEPTORS"], useClass: _shared_interceptors_timing_interceptor__WEBPACK_IMPORTED_MODULE_10__["TimingInterceptor"], multi: true },
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth/auth-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/auth/auth-routing.module.ts ***!
  \*********************************************/
/*! exports provided: AuthRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthRoutingModule", function() { return AuthRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login/login.component */ "./src/app/auth/login/login.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./register/register.component */ "./src/app/auth/register/register.component.ts");
/* harmony import */ var _no_auth_guard_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./no-auth-guard.service */ "./src/app/auth/no-auth-guard.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    {
        path: 'login',
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"],
        canActivate: [_no_auth_guard_service__WEBPACK_IMPORTED_MODULE_4__["NoAuthGuard"]]
    },
    {
        path: 'register',
        component: _register_register_component__WEBPACK_IMPORTED_MODULE_3__["RegisterComponent"],
        canActivate: [_no_auth_guard_service__WEBPACK_IMPORTED_MODULE_4__["NoAuthGuard"]]
    }
];
var AuthRoutingModule = /** @class */ (function () {
    function AuthRoutingModule() {
    }
    AuthRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AuthRoutingModule);
    return AuthRoutingModule;
}());



/***/ }),

/***/ "./src/app/auth/auth.module.ts":
/*!*************************************!*\
  !*** ./src/app/auth/auth.module.ts ***!
  \*************************************/
/*! exports provided: AuthModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthModule", function() { return AuthModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _no_auth_guard_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./no-auth-guard.service */ "./src/app/auth/no-auth-guard.service.ts");
/* harmony import */ var _app_shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/shared */ "./src/app/shared/index.ts");
/* harmony import */ var _auth_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth-routing.module */ "./src/app/auth/auth-routing.module.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login/login.component */ "./src/app/auth/login/login.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./register/register.component */ "./src/app/auth/register/register.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var AuthModule = /** @class */ (function () {
    function AuthModule() {
    }
    AuthModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _app_shared__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
                _auth_routing_module__WEBPACK_IMPORTED_MODULE_3__["AuthRoutingModule"]
            ],
            declarations: [
                _login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"],
                _register_register_component__WEBPACK_IMPORTED_MODULE_5__["RegisterComponent"]
            ],
            providers: [
                _no_auth_guard_service__WEBPACK_IMPORTED_MODULE_1__["NoAuthGuard"]
            ]
        })
    ], AuthModule);
    return AuthModule;
}());



/***/ }),

/***/ "./src/app/auth/login/login.component.css":
/*!************************************************!*\
  !*** ./src/app/auth/login/login.component.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  max-width: 300px;\n  display: block;\n  margin: 0 auto;\n  margin-top: 50px;\n}\n\ntable {\n  width: 100%;\n}\n\n.content-center {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: center;\n      justify-content: center;\n}\n\nmat-form-field {\n  width: 100%;\n}\n\nmat-icon {\n  cursor: default;\n}\n"

/***/ }),

/***/ "./src/app/auth/login/login.component.html":
/*!*************************************************!*\
  !*** ./src/app/auth/login/login.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Card container that binds all togather -->\n<mat-card>\n  <!-- Title of an Card -->\n  <mat-card-title>\n    {{ 'login' | translate }}\n  </mat-card-title>\n\n  <!-- Actual content starts from here -->\n  <mat-card-content>\n    <form [formGroup]=\"authForm\" class=\"authForm\" (ngSubmit)=\"onFormSubmit(authForm.value)\">\n      <fieldset [disabled]=\"isSubmitting\">\n      <table>\n        <tr>\n          <td colspan=\"2\">\n            <mat-form-field>\n              <input formControlName=\"Email\" matInput [placeholder]=\"'email' | translate\" required>\n              <!-- <mat-hint>use like : demo@demo.com</mat-hint> -->\n              <mat-error>\n                <span *ngIf=\"!authForm.get('Email').valid && authForm.get('Email').touched\">\n                  {{ 'invalidEmail' | translate }}\n                </span>\n              </mat-error>\n            </mat-form-field>\n          </td>\n        </tr>\n        <tr>\n          <td colspan=\"2\">\n            <mat-form-field>\n              <input matInput formControlName=\"Password\" [placeholder]=\"'password' | translate\" [type]=\"hidePassword ? 'password' : 'text'\">\n              <mat-icon matSuffix (click)=\"hidePassword = !hidePassword\">\n                {{hidePassword ? 'visibility_off' : 'visibility'}}\n              </mat-icon>\n              <mat-error>\n                <span *ngIf=\"!authForm.get('Password').valid && authForm.get('Password').touched\">\n                    {{'invalidPassword' | translate }}\n                </span>\n              </mat-error>\n            </mat-form-field>\n          </td>\n        </tr>\n        <tr>\n          <td colspan=\"2\" class=\"content-center\">\n            <button mat-raised-button color=\"accent\" [disabled]=\"!authForm.valid || IsAccepted==0\">{{'submit' | translate}}</button>\n          </td>\n        </tr>\n        <tr>\n          <td colspan=\"2\">\n              <p class=\"text-xs-center\">\n                <br>\n                <a [routerLink]=\"['/register']\">Need an account?</a>\n              </p>\n          </td>\n        </tr>\n        <tr>\n          <td></td>\n        </tr>\n      </table>\n    </fieldset>\n    </form>\n  </mat-card-content>\n</mat-card>\n<br><a (click)=\"setUser(1)\">student</a>\n<br><a (click)=\"setUser(2)\">teacher</a>\n<br><a (click)=\"setUser(3)\">admin</a>"

/***/ }),

/***/ "./src/app/auth/login/login.component.ts":
/*!***********************************************!*\
  !*** ./src/app/auth/login/login.component.ts ***!
  \***********************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/core */ "./src/app/core/index.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// Must import to use Forms functionality



var LoginComponent = /** @class */ (function () {
    function LoginComponent(fb, translateService, userService, route, router) {
        this.fb = fb;
        this.translateService = translateService;
        this.userService = userService;
        this.route = route;
        this.router = router;
        this.Password = '';
        this.Email = '';
        this.hidePassword = true;
        this.isSubmitting = false;
        this.errors = {};
        // To initialize FormGroup
        this.authForm = fb.group({
            Password: [
                null,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(50)
                ])
            ],
            Email: [
                null,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email])
            ]
        });
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.currentLang = this.translateService.currentLang;
    };
    LoginComponent.prototype.submitForm = function () {
        var _this = this;
        this.isSubmitting = true;
        this.errors = { errors: {} };
        var credentials = this.authForm.value;
        this.userService
            .attemptAuth('login', credentials)
            .subscribe(function (data) {
            switch (data.role) {
                case 0:
                    _this.router.navigate(['/student']);
                    break;
                case 1:
                    _this.router.navigate(['/teacher']);
                    break;
                case 2:
                    _this.router.navigate(['/admin']);
                    break;
                default: break;
            }
        }, function (err) {
            _this.errors = err;
            _this.isSubmitting = false;
        });
    };
    // Executed When Form Is Submitted
    LoginComponent.prototype.onFormSubmit = function (form) {
        console.log(form);
        this.submitForm();
    };
    // For dev purposes
    LoginComponent.prototype.setUser = function (role) {
        this.userService.setAuth({
            email: 'mail.gmail.com',
            token: '123123123123123',
            username: 'Meelistenso',
            bio: '- Ping! - Pong!',
            image: 'https://image.flaticon.com/icons/png/512/149/149071.png',
            role: role
        });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/auth/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/auth/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"],
            _app_core__WEBPACK_IMPORTED_MODULE_3__["UserService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/auth/no-auth-guard.service.ts":
/*!***********************************************!*\
  !*** ./src/app/auth/no-auth-guard.service.ts ***!
  \***********************************************/
/*! exports provided: NoAuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoAuthGuard", function() { return NoAuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core */ "./src/app/core/index.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NoAuthGuard = /** @class */ (function () {
    function NoAuthGuard(router, userService) {
        this.router = router;
        this.userService = userService;
    }
    NoAuthGuard.prototype.canActivate = function (route, state) {
        return this.userService.isAuthenticated.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (isAuth) { return !isAuth; }));
    };
    NoAuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _core__WEBPACK_IMPORTED_MODULE_2__["UserService"]])
    ], NoAuthGuard);
    return NoAuthGuard;
}());



/***/ }),

/***/ "./src/app/auth/register/register.component.css":
/*!******************************************************!*\
  !*** ./src/app/auth/register/register.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  max-width: 500px;\n  display: block;\n  margin: 0 auto;\n  margin-top: 50px;\n}\n\ntable {\n  width: 100%;\n}\n\n.content-center {\n  width: 100%;\n  text-align: center;\n  vertical-align: middle;\n}\n\nmat-form-field {\n  width: 100%;\n}\n\nmat-icon {\n  cursor: default;\n}\n\nmat-radio-button {\n  margin-right: 10px;\n}"

/***/ }),

/***/ "./src/app/auth/register/register.component.html":
/*!*******************************************************!*\
  !*** ./src/app/auth/register/register.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Card container that binds all togather -->\n<mat-card>\n  <!-- Title of an Card -->\n  <mat-card-title>\n    {{'register' | translate}}\n  </mat-card-title>\n\n  <!-- Actual content starts from here -->\n  <mat-card-content>\n    <form [formGroup]=\"regiForm\" (ngSubmit)=\"onFormSubmit(regiForm.value)\">\n      <fieldset [disabled]=\"isSubmitting\">\n        <table>\n          <tr>\n            <td>\n              <mat-form-field class=\"demo-full-width\">\n                <input formControlName=\"FirstName\" matInput [placeholder]=\"'firstName' | translate\">\n                <mat-error>\n                  <span *ngIf=\"!regiForm.get('FirstName').valid && regiForm.get('FirstName').touched\">Please enter\n                    First\n                    Name !!!</span>\n                </mat-error>\n              </mat-form-field>\n\n            </td>\n            <td>\n              <mat-form-field class=\"demo-full-width\">\n                <input formControlName=\"LastName\" matInput [placeholder]=\"'lastName' | translate\">\n\n                <mat-error>\n                  <span *ngIf=\"!regiForm.get('LastName').valid && regiForm.get('LastName').touched\">Please enter Last\n                    Name\n                    !!!</span>\n                </mat-error>\n              </mat-form-field>\n            </td>\n          </tr>\n          <tr>\n            <td colspan=\"2\">\n              <mat-form-field class=\"demo-full-width\">\n                <input formControlName=\"DOB\" matInput [matDatepicker]=\"picker\" placeholder=\"Date of birth\">\n                <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n                <mat-datepicker touchUi=\"true\" #picker></mat-datepicker>\n\n                <mat-error>\n                  <span *ngIf=\"!regiForm.get('DOB').valid && regiForm.get('DOB').touched\">Please select any Date !!!</span>\n                </mat-error>\n              </mat-form-field>\n            </td>\n          </tr>\n          <tr>\n            <td>\n              <mat-radio-group formControlName=\"Gender\">\n\n                <span>Gender</span><br><br>\n                <mat-radio-button value=\"Male\">Male</mat-radio-button>\n                <mat-radio-button value=\"Female\">Female</mat-radio-button>\n                <br><br>\n                <mat-error>\n                  <span *ngIf=\"!regiForm.get('Gender').valid && regiForm.get('Gender').touched\">Please select any\n                    gender\n                    !!!</span>\n                </mat-error>\n              </mat-radio-group>\n            </td>\n          </tr>\n          <tr>\n            <td colspan=\"2\">\n              <mat-form-field class=\"demo-full-width\">\n                <input formControlName=\"Email\" matInput placeholder=\"Email\">\n                <mat-hint>use like : demo@demo.com</mat-hint>\n                <mat-error>\n                  <span *ngIf=\"!regiForm.get('Email').valid && regiForm.get('Email').touched\">Enter proper Email !!!</span>\n                </mat-error>\n              </mat-form-field>\n            </td>\n          </tr>\n          <tr>\n            <td colspan=\"2\">\n              <mat-form-field>\n                <input matInput formControlName=\"Password\" [placeholder]=\"'password' | translate\" [type]=\"hidePassword ? 'password' : 'text'\">\n                <mat-icon matSuffix (click)=\"hidePassword = !hidePassword\">\n                  {{hidePassword ? 'visibility_off' : 'visibility'}}\n                </mat-icon>\n                <mat-error>\n                  <span *ngIf=\"!regiForm.get('Password').valid && regiForm.get('Password').touched\">\n                    {{'invalidPassword' | translate }}\n                  </span>\n                </mat-error>\n              </mat-form-field>\n            </td>\n          </tr>\n          <tr>\n            <td colspan=\"2\">\n              <mat-form-field>\n                <input matInput formControlName=\"ConfirmPassword\" [placeholder]=\"'confirmPassword' | translate\"\n                  [errorStateMatcher]=\"matcher\" [type]=\"hidePassword ? 'password' : 'text'\">\n                <mat-error>\n                  <span *ngIf=\"regiForm.hasError('notSame')\">\n                    {{'passwordNotSame' | translate }}\n                  </span>\n                </mat-error>\n              </mat-form-field>\n            </td>\n          </tr>\n          <tr>\n            <td colspan=\"2\">\n              <mat-slide-toggle formControlName=\"IsAccepted\" (change)=\"onChange($event)\">Accept Terms & Conditions</mat-slide-toggle><br><br>\n            </td>\n          </tr>\n          <tr>\n            <td colspan=\"2\" class=\"content-center\">\n              <button mat-raised-button color=\"accent\" [disabled]=\"!regiForm.valid || IsAccepted==0\">Submit</button>\n            </td>\n          </tr>\n          <tr>\n            <td colspan=\"2\">\n              <p class=\"text-xs-center\">\n                <br>\n                <a [routerLink]=\"['/login']\">Have an account?</a>\n              </p>\n            </td>\n          </tr>\n        </table>\n      </fieldset>\n    </form>\n  </mat-card-content>\n</mat-card>\n"

/***/ }),

/***/ "./src/app/auth/register/register.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/auth/register/register.component.ts ***!
  \*****************************************************/
/*! exports provided: PasswordErrorStateMatcher, RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PasswordErrorStateMatcher", function() { return PasswordErrorStateMatcher; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _app_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/core */ "./src/app/core/index.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// Must import to use Forms functionality


// Must import to use Forms functionality

var PasswordErrorStateMatcher = /** @class */ (function () {
    function PasswordErrorStateMatcher() {
    }
    PasswordErrorStateMatcher.prototype.isErrorState = function (control, form) {
        var invalidCtrl = !!(control && control.invalid && control.parent.dirty);
        var invalidParent = !!(control &&
            control.parent &&
            control.parent.invalid &&
            control.parent.hasError('notSame') &&
            control.parent.dirty);
        return invalidCtrl || invalidParent;
    };
    return PasswordErrorStateMatcher;
}());

var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(fb, translateService, userService, route, router) {
        this.fb = fb;
        this.translateService = translateService;
        this.userService = userService;
        this.route = route;
        this.router = router;
        this.FirstName = '';
        this.LastName = '';
        this.DOB = null;
        this.Gender = '';
        this.Email = '';
        this.Password = '';
        this.IsAccepted = 0;
        this.Login = '';
        this.hidePassword = true;
        this.isSubmitting = false;
        this.errors = {};
        this.matcher = new PasswordErrorStateMatcher();
        // To initialize FormGroup
        this.regiForm = fb.group({
            FirstName: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            LastName: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            DOB: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            Gender: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            Password: [
                null,
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(6),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(50)
                ])
            ],
            ConfirmPassword: [null],
            Email: [
                null,
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].email])
            ],
            IsAccepted: [null]
        }, { validator: this.checkPasswords });
    }
    RegisterComponent.prototype.checkPasswords = function (group) {
        // here we have the 'passwords' group
        var pass = group.controls.Password.value;
        var confirmPass = group.controls.ConfirmPassword.value;
        return pass === confirmPass ? null : { notSame: true };
    };
    // On Change event of Toggle Button
    RegisterComponent.prototype.onChange = function (event) {
        if (event.checked) {
            this.IsAccepted = 1;
        }
        else {
            this.IsAccepted = 0;
        }
    };
    RegisterComponent.prototype.submitForm = function () {
        var _this = this;
        this.isSubmitting = true;
        this.errors = { errors: {} };
        var _a = this.regiForm.value, FirstName = _a.FirstName, LastName = _a.LastName, DOB = _a.DOB, Gender = _a.Gender, Password = _a.Password, Email = _a.Email;
        var credentials = { FirstName: FirstName, LastName: LastName, DOB: DOB, Gender: Gender, Password: Password, Email: Email };
        this.userService.attemptAuth('', credentials).subscribe(function (data) { return _this.router.navigateByUrl('/'); }, function (err) {
            _this.errors = err;
            _this.isSubmitting = false;
        });
    };
    // Executed When Form Is Submitted
    RegisterComponent.prototype.onFormSubmit = function (form) {
        console.log(form);
        this.submitForm();
    };
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/auth/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/auth/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"],
            _app_core__WEBPACK_IMPORTED_MODULE_2__["UserService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/config/app.config.ts":
/*!**************************************!*\
  !*** ./src/app/config/app.config.ts ***!
  \**************************************/
/*! exports provided: APP_CONFIG, AppConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APP_CONFIG", function() { return APP_CONFIG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppConfig", function() { return AppConfig; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

var APP_CONFIG = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('app.config');
var AppConfig = {
    routes: {
        error404: '404',
        login: 'login',
        register: 'register',
        teacher: {
            teacher: 'teacher',
        },
        student: {
            student: 'student',
            labs: 'labs',
            lab: 'lab',
        },
        admin: {
            admin: 'admin',
        },
        dashboard: 'dashboard',
        code: 'code',
        test: 'test',
        home: 'home'
    },
    endpoints: {},
    snackBarDuration: 3000,
    repositoryURL: 'https://github.com/Meelistenso/XTest3'
};


/***/ }),

/***/ "./src/app/core/core.module.ts":
/*!*************************************!*\
  !*** ./src/app/core/core.module.ts ***!
  \*************************************/
/*! exports provided: CoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return CoreModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _module_import_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./module-import-guard */ "./src/app/core/module-import-guard.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_progress_bar_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/progress-bar.service */ "./src/app/core/services/progress-bar.service.ts");
/* harmony import */ var _services_logger_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/logger.service */ "./src/app/core/services/logger.service.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/user.service */ "./src/app/core/services/user.service.ts");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/api.service */ "./src/app/core/services/api.service.ts");
/* harmony import */ var _services_auth_guard_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/auth-guard.service */ "./src/app/core/services/auth-guard.service.ts");
/* harmony import */ var _services_jwt_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/jwt.service */ "./src/app/core/services/jwt.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};









var CoreModule = /** @class */ (function () {
    function CoreModule(parentModule) {
        Object(_module_import_guard__WEBPACK_IMPORTED_MODULE_1__["throwIfAlreadyLoaded"])(parentModule, 'CoreModule');
    }
    CoreModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
            ],
            providers: [
                _services_logger_service__WEBPACK_IMPORTED_MODULE_4__["LoggerService"],
                _services_progress_bar_service__WEBPACK_IMPORTED_MODULE_3__["ProgressBarService"],
                _services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"],
                _services_auth_guard_service__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"],
                _services_api_service__WEBPACK_IMPORTED_MODULE_6__["ApiService"],
                _services_jwt_service__WEBPACK_IMPORTED_MODULE_8__["JwtService"],
            ],
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"])()), __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"])()),
        __metadata("design:paramtypes", [CoreModule])
    ], CoreModule);
    return CoreModule;
}());



/***/ }),

/***/ "./src/app/core/index.ts":
/*!*******************************!*\
  !*** ./src/app/core/index.ts ***!
  \*******************************/
/*! exports provided: CoreModule, ApiService, AuthGuard, JwtService, LoggerService, ProgressBarService, UserService, UserRole, HttpTokenInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core.module */ "./src/app/core/core.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return _core_module__WEBPACK_IMPORTED_MODULE_0__["CoreModule"]; });

/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services */ "./src/app/core/services/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return _services__WEBPACK_IMPORTED_MODULE_1__["ApiService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return _services__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "JwtService", function() { return _services__WEBPACK_IMPORTED_MODULE_1__["JwtService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoggerService", function() { return _services__WEBPACK_IMPORTED_MODULE_1__["LoggerService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProgressBarService", function() { return _services__WEBPACK_IMPORTED_MODULE_1__["ProgressBarService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return _services__WEBPACK_IMPORTED_MODULE_1__["UserService"]; });

/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./models */ "./src/app/core/models/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserRole", function() { return _models__WEBPACK_IMPORTED_MODULE_2__["UserRole"]; });

/* harmony import */ var _interceptors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./interceptors */ "./src/app/core/interceptors/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HttpTokenInterceptor", function() { return _interceptors__WEBPACK_IMPORTED_MODULE_3__["HttpTokenInterceptor"]; });







/***/ }),

/***/ "./src/app/core/interceptors/http.token.interceptor.ts":
/*!*************************************************************!*\
  !*** ./src/app/core/interceptors/http.token.interceptor.ts ***!
  \*************************************************************/
/*! exports provided: HttpTokenInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpTokenInterceptor", function() { return HttpTokenInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services */ "./src/app/core/services/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HttpTokenInterceptor = /** @class */ (function () {
    function HttpTokenInterceptor(jwtService) {
        this.jwtService = jwtService;
    }
    HttpTokenInterceptor.prototype.intercept = function (req, next) {
        var headersConfig = {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        };
        var token = this.jwtService.getToken();
        if (token) {
            headersConfig['Authorization'] = "Token " + token;
        }
        var request = req.clone({ setHeaders: headersConfig });
        return next.handle(request);
    };
    HttpTokenInterceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_services__WEBPACK_IMPORTED_MODULE_1__["JwtService"]])
    ], HttpTokenInterceptor);
    return HttpTokenInterceptor;
}());



/***/ }),

/***/ "./src/app/core/interceptors/index.ts":
/*!********************************************!*\
  !*** ./src/app/core/interceptors/index.ts ***!
  \********************************************/
/*! exports provided: HttpTokenInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _http_token_interceptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./http.token.interceptor */ "./src/app/core/interceptors/http.token.interceptor.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HttpTokenInterceptor", function() { return _http_token_interceptor__WEBPACK_IMPORTED_MODULE_0__["HttpTokenInterceptor"]; });




/***/ }),

/***/ "./src/app/core/models/index.ts":
/*!**************************************!*\
  !*** ./src/app/core/models/index.ts ***!
  \**************************************/
/*! exports provided: UserRole */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user */ "./src/app/core/models/user.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserRole", function() { return _user__WEBPACK_IMPORTED_MODULE_0__["UserRole"]; });




/***/ }),

/***/ "./src/app/core/models/user.ts":
/*!*************************************!*\
  !*** ./src/app/core/models/user.ts ***!
  \*************************************/
/*! exports provided: UserRole */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserRole", function() { return UserRole; });
var UserRole;
(function (UserRole) {
    UserRole[UserRole["Admin"] = 0] = "Admin";
    UserRole[UserRole["Teacher"] = 1] = "Teacher";
    UserRole[UserRole["Student"] = 2] = "Student";
})(UserRole || (UserRole = {}));


/***/ }),

/***/ "./src/app/core/module-import-guard.ts":
/*!*********************************************!*\
  !*** ./src/app/core/module-import-guard.ts ***!
  \*********************************************/
/*! exports provided: throwIfAlreadyLoaded */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "throwIfAlreadyLoaded", function() { return throwIfAlreadyLoaded; });
function throwIfAlreadyLoaded(parentModule, moduleName) {
    if (parentModule) {
        throw new Error(moduleName + " has already been loaded. Import Core modules in the AppModule only.");
    }
}


/***/ }),

/***/ "./src/app/core/pages/error404/error404.component.html":
/*!*************************************************************!*\
  !*** ./src/app/core/pages/error404/error404.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 class=\"header__title\">{{'error404' | translate}}</h1>\n<p class=\"explanation\">{{'mayTheForce' | translate}}</p>\n<img src=\"assets/images/404.gif\">\n"

/***/ }),

/***/ "./src/app/core/pages/error404/error404.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/core/pages/error404/error404.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "img {\n  margin-left: auto;\n  margin-right: auto;\n  display: block; }\n\n.explanation {\n  margin: 1rem 0;\n  text-align: center;\n  font-size: 1.2rem;\n  font-weight: 300; }\n"

/***/ }),

/***/ "./src/app/core/pages/error404/error404.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/core/pages/error404/error404.component.ts ***!
  \***********************************************************/
/*! exports provided: Error404Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Error404Component", function() { return Error404Component; });
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

var Error404Component = /** @class */ (function () {
    function Error404Component() {
    }
    Error404Component.prototype.ngOnInit = function () {
    };
    Error404Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-error404',
            template: __webpack_require__(/*! ./error404.component.html */ "./src/app/core/pages/error404/error404.component.html"),
            styles: [__webpack_require__(/*! ./error404.component.scss */ "./src/app/core/pages/error404/error404.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], Error404Component);
    return Error404Component;
}());



/***/ }),

/***/ "./src/app/core/services/api.service.ts":
/*!**********************************************!*\
  !*** ./src/app/core/services/api.service.ts ***!
  \**********************************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _jwt_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./jwt.service */ "./src/app/core/services/jwt.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ApiService = /** @class */ (function () {
    function ApiService(http, jwtService) {
        this.http = http;
        this.jwtService = jwtService;
    }
    ApiService.prototype.formatErrors = function (error) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(error.error);
    };
    ApiService.prototype.get = function (path, params) {
        if (params === void 0) { params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"](); }
        return this.http.get("" + _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].api_url + path, { params: params })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.formatErrors));
    };
    ApiService.prototype.put = function (path, body) {
        if (body === void 0) { body = {}; }
        return this.http.put("" + _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].api_url + path, JSON.stringify(body)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.formatErrors));
    };
    ApiService.prototype.post = function (path, body) {
        if (body === void 0) { body = {}; }
        return this.http.post("" + _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].api_url + path, JSON.stringify(body)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.formatErrors));
    };
    ApiService.prototype.delete = function (path) {
        return this.http.delete("" + _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].api_url + path).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.formatErrors));
    };
    ApiService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _jwt_service__WEBPACK_IMPORTED_MODULE_3__["JwtService"]])
    ], ApiService);
    return ApiService;
}());



/***/ }),

/***/ "./src/app/core/services/auth-guard.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/core/services/auth-guard.service.ts ***!
  \*****************************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user.service */ "./src/app/core/services/user.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthGuard = /** @class */ (function () {
    function AuthGuard(router, userService) {
        this.router = router;
        this.userService = userService;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        return this.userService.isAuthenticated.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/core/services/index.ts":
/*!****************************************!*\
  !*** ./src/app/core/services/index.ts ***!
  \****************************************/
/*! exports provided: ApiService, AuthGuard, JwtService, LoggerService, ProgressBarService, UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api.service */ "./src/app/core/services/api.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return _api_service__WEBPACK_IMPORTED_MODULE_0__["ApiService"]; });

/* harmony import */ var _auth_guard_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth-guard.service */ "./src/app/core/services/auth-guard.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return _auth_guard_service__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"]; });

/* harmony import */ var _jwt_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./jwt.service */ "./src/app/core/services/jwt.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "JwtService", function() { return _jwt_service__WEBPACK_IMPORTED_MODULE_2__["JwtService"]; });

/* harmony import */ var _logger_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./logger.service */ "./src/app/core/services/logger.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoggerService", function() { return _logger_service__WEBPACK_IMPORTED_MODULE_3__["LoggerService"]; });

/* harmony import */ var _progress_bar_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./progress-bar.service */ "./src/app/core/services/progress-bar.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProgressBarService", function() { return _progress_bar_service__WEBPACK_IMPORTED_MODULE_4__["ProgressBarService"]; });

/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user.service */ "./src/app/core/services/user.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return _user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]; });









/***/ }),

/***/ "./src/app/core/services/jwt.service.ts":
/*!**********************************************!*\
  !*** ./src/app/core/services/jwt.service.ts ***!
  \**********************************************/
/*! exports provided: JwtService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JwtService", function() { return JwtService; });
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

var JwtService = /** @class */ (function () {
    function JwtService() {
    }
    JwtService.prototype.getToken = function () {
        return window.localStorage['jwtToken'];
    };
    JwtService.prototype.saveToken = function (token) {
        window.localStorage['jwtToken'] = token;
    };
    JwtService.prototype.destroyToken = function () {
        window.localStorage.removeItem('jwtToken');
    };
    JwtService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], JwtService);
    return JwtService;
}());



/***/ }),

/***/ "./src/app/core/services/logger.service.ts":
/*!*************************************************!*\
  !*** ./src/app/core/services/logger.service.ts ***!
  \*************************************************/
/*! exports provided: LoggerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoggerService", function() { return LoggerService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var LoggerService = /** @class */ (function () {
    function LoggerService() {
    }
    LoggerService.log = function (msg) {
        console.log(msg);
    };
    LoggerService.error = function (msg, obj) {
        if (obj === void 0) { obj = {}; }
        console.error(msg, obj);
    };
    LoggerService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], LoggerService);
    return LoggerService;
}());



/***/ }),

/***/ "./src/app/core/services/progress-bar.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/core/services/progress-bar.service.ts ***!
  \*******************************************************/
/*! exports provided: ProgressBarService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgressBarService", function() { return ProgressBarService; });
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

var ProgressBarService = /** @class */ (function () {
    function ProgressBarService() {
        this.requestsRunning = 0;
        this.updateProgressBar$ = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ProgressBarService.prototype.list = function () {
        return this.requestsRunning;
    };
    ProgressBarService.prototype.increase = function () {
        this.requestsRunning++;
        if (this.requestsRunning === 1) {
            this.updateProgressBar$.emit('query');
        }
    };
    ProgressBarService.prototype.decrease = function () {
        if (this.requestsRunning > 0) {
            this.requestsRunning--;
            if (this.requestsRunning === 0) {
                this.updateProgressBar$.emit('none');
            }
        }
    };
    ProgressBarService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], ProgressBarService);
    return ProgressBarService;
}());



/***/ }),

/***/ "./src/app/core/services/user.service.ts":
/*!***********************************************!*\
  !*** ./src/app/core/services/user.service.ts ***!
  \***********************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./api.service */ "./src/app/core/services/api.service.ts");
/* harmony import */ var _jwt_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./jwt.service */ "./src/app/core/services/jwt.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var UserService = /** @class */ (function () {
    function UserService(apiService, http, jwtService) {
        this.apiService = apiService;
        this.http = http;
        this.jwtService = jwtService;
        this.currentUserSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]({});
        this.currentUser = this.currentUserSubject.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["distinctUntilChanged"])());
        this.isAuthenticatedSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["ReplaySubject"](1);
        this.isAuthenticated = this.isAuthenticatedSubject.asObservable();
    }
    // Verify JWT in localstorage with server & load user's info.
    // This runs once on application startup.
    UserService.prototype.populate = function () {
        var _this = this;
        // If JWT detected, attempt to get & store user's info
        if (this.jwtService.getToken()) {
            this.apiService.get('/user')
                .subscribe(function (data) { return _this.setAuth(data.user); }, function (err) { return _this.purgeAuth(); });
        }
        else {
            // Remove any potential remnants of previous auth states
            this.purgeAuth();
        }
    };
    UserService.prototype.setAuth = function (user) {
        // Save JWT sent from server in localstorage
        this.jwtService.saveToken(user.token);
        // Set current user data into observable
        this.currentUserSubject.next(user);
        // Set isAuthenticated to true
        this.isAuthenticatedSubject.next(true);
    };
    UserService.prototype.purgeAuth = function () {
        // Remove JWT from localstorage
        this.jwtService.destroyToken();
        // Set current user to an empty object
        this.currentUserSubject.next({});
        // Set auth status to false
        this.isAuthenticatedSubject.next(false);
    };
    UserService.prototype.attemptAuth = function (type, credentials) {
        var _this = this;
        var route = (type === 'login') ? '/login' : '';
        return this.apiService.post('/users' + route, { user: credentials })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (response) {
            _this.setAuth(response.data.user);
            return response.data.user;
        }));
    };
    UserService.prototype.getCurrentUser = function () {
        return this.currentUserSubject.value;
    };
    // Update the user on the server (email, pass, etc)
    UserService.prototype.update = function (user) {
        var _this = this;
        return this.apiService
            .put('/user', { user: user })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (data) {
            // Update the currentUser observable
            _this.currentUserSubject.next(data.user);
            return data.user;
        }));
    };
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _jwt_service__WEBPACK_IMPORTED_MODULE_4__["JwtService"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/home/home-auth-resolver.service.ts":
/*!****************************************************!*\
  !*** ./src/app/home/home-auth-resolver.service.ts ***!
  \****************************************************/
/*! exports provided: HomeAuthResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeAuthResolver", function() { return HomeAuthResolver; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core */ "./src/app/core/index.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomeAuthResolver = /** @class */ (function () {
    function HomeAuthResolver(router, userService) {
        this.router = router;
        this.userService = userService;
    }
    HomeAuthResolver.prototype.resolve = function (route, state) {
        return this.userService.isAuthenticated.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
    };
    HomeAuthResolver = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _core__WEBPACK_IMPORTED_MODULE_2__["UserService"]])
    ], HomeAuthResolver);
    return HomeAuthResolver;
}());



/***/ }),

/***/ "./src/app/home/home-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/home/home-routing.module.ts ***!
  \*********************************************/
/*! exports provided: HomeRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeRoutingModule", function() { return HomeRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home/home.component.ts");
/* harmony import */ var _home_auth_resolver_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home-auth-resolver.service */ "./src/app/home/home-auth-resolver.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    {
        path: '',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"],
        resolve: {
            isAuthenticated: _home_auth_resolver_service__WEBPACK_IMPORTED_MODULE_3__["HomeAuthResolver"]
        }
    }
];
var HomeRoutingModule = /** @class */ (function () {
    function HomeRoutingModule() {
    }
    HomeRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], HomeRoutingModule);
    return HomeRoutingModule;
}());



/***/ }),

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home/home.component.ts");
/* harmony import */ var _home_auth_resolver_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home-auth-resolver.service */ "./src/app/home/home-auth-resolver.service.ts");
/* harmony import */ var _app_shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/shared */ "./src/app/shared/index.ts");
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home-routing.module */ "./src/app/home/home-routing.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var HomeModule = /** @class */ (function () {
    function HomeModule() {
    }
    HomeModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _app_shared__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
                _home_routing_module__WEBPACK_IMPORTED_MODULE_4__["HomeRoutingModule"],
            ],
            declarations: [
                _home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"]
            ],
            providers: [
                _home_auth_resolver_service__WEBPACK_IMPORTED_MODULE_2__["HomeAuthResolver"]
            ]
        })
    ], HomeModule);
    return HomeModule;
}());



/***/ }),

/***/ "./src/app/home/home/home.component.css":
/*!**********************************************!*\
  !*** ./src/app/home/home/home.component.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1 {\n  font-size: 56px;\n  font-weight: 300;\n  line-height: 56px;\n  margin: 15px 5px;\n}\n\nh2 {\n  font-size: 18px;\n  font-weight: 300;\n  line-height: 28px;\n  margin: 15px 0 25px;\n}\n\n.header-headline {\n  color: #fff;\n  text-align: center;\n}\n\n.banner {\n  padding-top: 60px;\n  background: #3f51b5;\n  text-align: center;\n  overflow: hidden;\n}\n\n.init {\n  margin: 60px 0;\n  text-align: center;\n}\n\n.init-button {\n  font-weight: 600;\n}\n"

/***/ }),

/***/ "./src/app/home/home/home.component.html":
/*!***********************************************!*\
  !*** ./src/app/home/home/home.component.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"home-page\">\n    <!-- *appShowAuthed=\"false\" -->\n  <div class=\"banner\" >\n    <div class=\"header-headline\">\n      <h1 class=\"logo-font mat-h1\">XTest 3</h1>\n      <p>A place to improove your <i>code</i> knowledge.</p>\n      <div class=\"init\">\n        <button class=\"init-button\" mat-raised-button>Get started</button>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"container page\">\n\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/home/home/home.component.ts":
/*!*********************************************!*\
  !*** ./src/app/home/home/home.component.ts ***!
  \*********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core */ "./src/app/core/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomeComponent = /** @class */ (function () {
    function HomeComponent(router, userService) {
        this.router = router;
        this.userService = userService;
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.isAuthenticated.subscribe(function (authenticated) {
            _this.isAuthenticated = authenticated;
        });
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home-page',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _core__WEBPACK_IMPORTED_MODULE_2__["UserService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/list-errors/list-errors.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/shared/components/list-errors/list-errors.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/shared/components/list-errors/list-errors.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/shared/components/list-errors/list-errors.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul class=\"error-messages\" *ngIf=\"errorList\">\n  <li *ngFor=\"let error of errorList\">\n    {{ error }}\n  </li>\n</ul>\n"

/***/ }),

/***/ "./src/app/shared/components/list-errors/list-errors.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/shared/components/list-errors/list-errors.component.ts ***!
  \************************************************************************/
/*! exports provided: ListErrorsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListErrorsComponent", function() { return ListErrorsComponent; });
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

var ListErrorsComponent = /** @class */ (function () {
    function ListErrorsComponent() {
        this.formattedErrors = [];
    }
    Object.defineProperty(ListErrorsComponent.prototype, "errors", {
        set: function (errorList) {
            this.formattedErrors = Object.keys(errorList.errors || {})
                .map(function (key) { return key + " " + errorList.errors[key]; });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ListErrorsComponent.prototype, "errorList", {
        get: function () { return this.formattedErrors; },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], ListErrorsComponent.prototype, "errors", null);
    ListErrorsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-list-errors',
            template: __webpack_require__(/*! ./list-errors.component.html */ "./src/app/shared/components/list-errors/list-errors.component.html"),
            styles: [__webpack_require__(/*! ./list-errors.component.css */ "./src/app/shared/components/list-errors/list-errors.component.css")]
        })
    ], ListErrorsComponent);
    return ListErrorsComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/search-bar/search-bar.component.html":
/*!************************************************************************!*\
  !*** ./src/app/shared/components/search-bar/search-bar.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "search bar\n"

/***/ }),

/***/ "./src/app/shared/components/search-bar/search-bar.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/shared/components/search-bar/search-bar.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/shared/components/search-bar/search-bar.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/shared/components/search-bar/search-bar.component.ts ***!
  \**********************************************************************/
/*! exports provided: SearchBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchBarComponent", function() { return SearchBarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_core_services_logger_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/core/services/logger.service */ "./src/app/core/services/logger.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SearchBarComponent = /** @class */ (function () {
    function SearchBarComponent(router) {
        this.router = router;
    }
    SearchBarComponent.prototype.ngOnInit = function () {
    };
    SearchBarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-search-bar',
            template: __webpack_require__(/*! ./search-bar.component.html */ "./src/app/shared/components/search-bar/search-bar.component.html"),
            styles: [__webpack_require__(/*! ./search-bar.component.scss */ "./src/app/shared/components/search-bar/search-bar.component.scss")],
            providers: [
                _app_core_services_logger_service__WEBPACK_IMPORTED_MODULE_2__["LoggerService"],
            ]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], SearchBarComponent);
    return SearchBarComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/spinner/spinner.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/shared/components/spinner/spinner.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".spinner {\n  width: 40px;\n  height: 40px;\n  background-color: #333;\n\n  border-radius: 100%;\n  -webkit-animation: sk-scaleout 1.0s infinite ease-in-out;\n  animation: sk-scaleout 1.0s infinite ease-in-out;\n\n  -webkit-transform: translate(-50%, -50%);\n\n          transform: translate(-50%, -50%);\n  position: absolute;\n  left: 50%;\n  top: 48%;\n}\n\n@-webkit-keyframes sk-scaleout {\n  0% { -webkit-transform: scale(0) }\n  100% {\n    -webkit-transform: scale(1.0);\n    opacity: 0;\n  }\n}\n\n@keyframes sk-scaleout {\n  0% {\n    -webkit-transform: scale(0);\n    transform: scale(0);\n  } 100% {\n      -webkit-transform: scale(1.0);\n      transform: scale(1.0);\n      opacity: 0;\n    }\n}\n"

/***/ }),

/***/ "./src/app/shared/components/spinner/spinner.component.html":
/*!******************************************************************!*\
  !*** ./src/app/shared/components/spinner/spinner.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"spinner\"></div>\n"

/***/ }),

/***/ "./src/app/shared/components/spinner/spinner.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/shared/components/spinner/spinner.component.ts ***!
  \****************************************************************/
/*! exports provided: SpinnerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpinnerComponent", function() { return SpinnerComponent; });
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

var SpinnerComponent = /** @class */ (function () {
    function SpinnerComponent() {
    }
    SpinnerComponent.prototype.ngOnInit = function () {
    };
    SpinnerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-spinner',
            template: __webpack_require__(/*! ./spinner.component.html */ "./src/app/shared/components/spinner/spinner.component.html"),
            styles: [__webpack_require__(/*! ./spinner.component.css */ "./src/app/shared/components/spinner/spinner.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SpinnerComponent);
    return SpinnerComponent;
}());



/***/ }),

/***/ "./src/app/shared/directives/show-authed.directive.ts":
/*!************************************************************!*\
  !*** ./src/app/shared/directives/show-authed.directive.ts ***!
  \************************************************************/
/*! exports provided: ShowAuthedDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowAuthedDirective", function() { return ShowAuthedDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/core */ "./src/app/core/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ShowAuthedDirective = /** @class */ (function () {
    function ShowAuthedDirective(templateRef, userService, viewContainer) {
        this.templateRef = templateRef;
        this.userService = userService;
        this.viewContainer = viewContainer;
    }
    ShowAuthedDirective.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.isAuthenticated.subscribe(function (isAuthenticated) {
            if (isAuthenticated && _this.condition || !isAuthenticated && !_this.condition) {
                _this.viewContainer.createEmbeddedView(_this.templateRef);
            }
            else {
                _this.viewContainer.clear();
            }
        });
    };
    Object.defineProperty(ShowAuthedDirective.prototype, "appShowAuthed", {
        set: function (condition) {
            this.condition = condition;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], ShowAuthedDirective.prototype, "appShowAuthed", null);
    ShowAuthedDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({ selector: '[appShowAuthed]' }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"],
            _app_core__WEBPACK_IMPORTED_MODULE_1__["UserService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]])
    ], ShowAuthedDirective);
    return ShowAuthedDirective;
}());



/***/ }),

/***/ "./src/app/shared/index.ts":
/*!*********************************!*\
  !*** ./src/app/shared/index.ts ***!
  \*********************************/
/*! exports provided: SharedModule, FooterComponent, HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shared.module */ "./src/app/shared/shared.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return _shared_module__WEBPACK_IMPORTED_MODULE_0__["SharedModule"]; });

/* harmony import */ var _layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./layout */ "./src/app/shared/layout/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return _layout__WEBPACK_IMPORTED_MODULE_1__["FooterComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return _layout__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"]; });





/***/ }),

/***/ "./src/app/shared/interceptors/progress.interceptor.ts":
/*!*************************************************************!*\
  !*** ./src/app/shared/interceptors/progress.interceptor.ts ***!
  \*************************************************************/
/*! exports provided: ProgressInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgressInterceptor", function() { return ProgressInterceptor; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");


var ProgressInterceptor = /** @class */ (function () {
    function ProgressInterceptor(progressBarService) {
        this.progressBarService = progressBarService;
    }
    ProgressInterceptor.prototype.intercept = function (req, next) {
        var _this = this;
        this.progressBarService.increase();
        return next
            .handle(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["tap"])(function (event) {
            if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]) {
                _this.progressBarService.decrease();
            }
        }));
    };
    return ProgressInterceptor;
}());



/***/ }),

/***/ "./src/app/shared/interceptors/timing.interceptor.ts":
/*!***********************************************************!*\
  !*** ./src/app/shared/interceptors/timing.interceptor.ts ***!
  \***********************************************************/
/*! exports provided: TimingInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimingInterceptor", function() { return TimingInterceptor; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _core_services_logger_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/services/logger.service */ "./src/app/core/services/logger.service.ts");



var TimingInterceptor = /** @class */ (function () {
    function TimingInterceptor() {
    }
    TimingInterceptor.prototype.intercept = function (req, next) {
        var started = Date.now();
        return next
            .handle(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["tap"])(function (event) {
            if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]) {
                var elapsed = Date.now() - started;
                _core_services_logger_service__WEBPACK_IMPORTED_MODULE_2__["LoggerService"].log("Request for " + req.urlWithParams + " took " + elapsed + " ms.");
            }
        }));
    };
    return TimingInterceptor;
}());



/***/ }),

/***/ "./src/app/shared/layout/footer/footer.component.html":
/*!************************************************************!*\
  !*** ./src/app/shared/layout/footer/footer.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer>\n    <div fxFlex fxLayout=\"row\" fxLayout.xs=\"column\" fxLayoutAlign=\"center center\"\n         class.xs=\"footer-xs\">\n        <div fxFlex=\"33\">\n            <span>{{ 'app-name' | translate }} 2018</span>\n        </div>\n        <div fxFlex=\"33\" class=\"text--center\" *ngIf=\"currentLang\">\n\n        </div>\n        <div fxFlex class=\"text--right\" class.xs=\"footer-xs\">\n            <a href=\"https://angular.io/\" target=\"_blank\"><img src=\"assets/images/angular.svg\"></a>\n        </div>\n    </div>\n</footer>\n"

/***/ }),

/***/ "./src/app/shared/layout/footer/footer.component.scss":
/*!************************************************************!*\
  !*** ./src/app/shared/layout/footer/footer.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "footer {\n  padding: 0.5rem 1rem;\n  color: #ffffff;\n  background: #3f51b5;\n  position: -webkit-sticky;\n  position: sticky;\n  top: 100%; }\n  footer img {\n    width: 25%; }\n  .footer-xs {\n  text-align: center;\n  padding-top: 1rem; }\n"

/***/ }),

/***/ "./src/app/shared/layout/footer/footer.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/shared/layout/footer/footer.component.ts ***!
  \**********************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FooterComponent = /** @class */ (function () {
    function FooterComponent(translateService) {
        this.translateService = translateService;
    }
    FooterComponent.prototype.ngOnInit = function () {
        this.currentLang = this.translateService.currentLang;
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/shared/layout/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/shared/layout/footer/footer.component.scss")]
        }),
        __metadata("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"]])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/shared/layout/header/header.component.html":
/*!************************************************************!*\
  !*** ./src/app/shared/layout/header/header.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header>\n  <nav>\n    <div fxFlex fxLayout=\"row\" fxLayout.xs=\"column\" fxLayoutAlign=\"center center\">\n      <div fxFlex=\"40\" *appShowAuthed=\"false\">\n        <a mat-raised-button *ngFor=\"let item of menuItems\" routerLink=\"{{item.link}}\">\n          {{item.name | translate | uppercase}}\n        </a>\n      </div>\n      <div fxFlex=\"40\" *appShowAuthed=\"true\">\n        <a mat-raised-button *ngFor=\"let item of menuItemsAuthed\" routerLink=\"{{item.link}}\">\n          {{item.name | translate | uppercase}}\n        </a>\n        <a mat-button routerLink=\"/teacher\" class=\"current-user\"><img [src]=\"(currentUser | async).image\">{{(currentUser | async).username}}</a>\n      </div>\n      <div fxFlex class=\"text--right\">\n        <app-search-bar></app-search-bar>\n        <button mat-icon-button [matMenuTriggerFor]=\"matmenu\">\n          <mat-icon>public</mat-icon>\n        </button>\n        <mat-menu #matmenu=\"matMenu\">\n          <button mat-menu-item (click)=\"changeLanguage('en')\">\n            <mat-icon>flag</mat-icon>\n            <span>\n              English\n            </span>\n          </button>\n          <button mat-menu-item (click)=\"changeLanguage('ru')\">\n            <mat-icon>flag</mat-icon>\n            <span>\n              Russian\n            </span>\n          </button>\n          <button mat-menu-item (click)=\"changeLanguage('uk')\">\n            <mat-icon>flag</mat-icon>\n            <span>\n              Ukrainian\n            </span>\n          </button>\n        </mat-menu>\n        <a class=\"icon__image\" href=\"{{appConfig.repositoryURL}}\" target=\"_blank\">\n          <img src=\"assets/images/github-circle-white-transparent.svg\">\n        </a>\n      </div>\n    </div>\n  </nav>\n  <section class=\"progress-bar\">\n    <mat-progress-bar [color]=\"'primary'\" [mode]=\"progressBarMode\">\n    </mat-progress-bar>\n  </section>\n</header>\n"

/***/ }),

/***/ "./src/app/shared/layout/header/header.component.scss":
/*!************************************************************!*\
  !*** ./src/app/shared/layout/header/header.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host(app-header) {\n  padding-top: 0;\n  padding-bottom: 69px;\n  display: -ms-grid;\n  display: grid; }\n  :host(app-header) header {\n    position: fixed;\n    z-index: 999;\n    width: 100%; }\n  :host(app-header) header .current-user {\n      display: -ms-inline-flexbox;\n      display: inline-flex; }\n  :host(app-header) header .current-user img {\n        height: 1.5rem;\n        margin-right: 15px; }\n  :host(app-header) header nav {\n      display: -ms-flexbox;\n      display: flex;\n      -ms-flex-wrap: wrap;\n          flex-wrap: wrap;\n      -ms-flex-align: center;\n          align-items: center;\n      padding: 0.5rem 1rem;\n      color: #ffffff;\n      height: 4rem;\n      background: #3f51b5; }\n  :host(app-header) header nav .mat-raised-button {\n        color: #3f51b5;\n        margin-right: 1rem; }\n  :host(app-header) header nav .progress-bar {\n        display: -ms-flexbox;\n        display: flex;\n        -ms-flex-line-pack: center;\n            align-content: center;\n        -ms-flex-align: center;\n            align-items: center;\n        height: 0.3125rem; }\n  :host(app-header) header nav .icon__image {\n        width: 1.25rem;\n        height: 1.25rem; }\n  :host(app-header) header nav img {\n        vertical-align: middle; }\n  :host(app-header) header nav #today {\n        font-size: 0.7rem; }\n  @media (max-width: 807px) {\n  #today {\n    width: 50%; } }\n  @media (max-width: 680px) {\n  :host(app-header) {\n    padding-top: 0;\n    padding-bottom: 1rem; }\n    :host(app-header) header {\n      position: relative; }\n      :host(app-header) header nav {\n        height: 7rem;\n        display: -ms-flexbox;\n        display: flex;\n        padding: 1rem 2rem 0; }\n        :host(app-header) header nav > div {\n          margin-top: 1rem; }\n        :host(app-header) header nav #today {\n          margin-top: 1rem; } }\n  @media (max-width: 425px) {\n  :host(app-header) {\n    padding-bottom: 0; }\n    :host(app-header) header nav app-search-bar {\n      width: 75%; } }\n"

/***/ }),

/***/ "./src/app/shared/layout/header/header.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/shared/layout/header/header.component.ts ***!
  \**********************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _app_config_app_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/config/app.config */ "./src/app/config/app.config.ts");
/* harmony import */ var _biesbjerg_ngx_translate_extract_dist_utils_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @biesbjerg/ngx-translate-extract/dist/utils/utils */ "./node_modules/@biesbjerg/ngx-translate-extract/dist/utils/utils.js");
/* harmony import */ var _biesbjerg_ngx_translate_extract_dist_utils_utils__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_biesbjerg_ngx_translate_extract_dist_utils_utils__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _app_core_services_progress_bar_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/core/services/progress-bar.service */ "./src/app/core/services/progress-bar.service.ts");
/* harmony import */ var _app_core_services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/core/services/user.service */ "./src/app/core/services/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};






var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(appConfig, progressBarService, translateService, userService) {
        this.progressBarService = progressBarService;
        this.translateService = translateService;
        this.userService = userService;
        this.currentUser = this.userService.currentUser;
        this.appConfig = appConfig;
    }
    HeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.currentLang = this.translateService.currentLang;
        this.loadMenus();
        this.progressBarService.updateProgressBar$.subscribe(function (mode) {
            _this.progressBarMode = mode;
        });
        this.userService.currentUser.subscribe(function (data) { return console.log(data); });
    };
    HeaderComponent.prototype.changeLanguage = function (language) {
        var _this = this;
        this.translateService.use(language).subscribe(function () {
            _this.loadMenus();
        });
    };
    HeaderComponent.prototype.loadMenus = function () {
        this.menuItems = [
            { link: '/', name: Object(_biesbjerg_ngx_translate_extract_dist_utils_utils__WEBPACK_IMPORTED_MODULE_3__["_"])('home') },
            // {link: '/' + AppConfig.routes.heroes, name: _('heroesList')}
            { link: '/' + _app_config_app_config__WEBPACK_IMPORTED_MODULE_2__["AppConfig"].routes.login, name: Object(_biesbjerg_ngx_translate_extract_dist_utils_utils__WEBPACK_IMPORTED_MODULE_3__["_"])('login') },
            { link: '/' + _app_config_app_config__WEBPACK_IMPORTED_MODULE_2__["AppConfig"].routes.register, name: Object(_biesbjerg_ngx_translate_extract_dist_utils_utils__WEBPACK_IMPORTED_MODULE_3__["_"])('register') }
        ];
        this.menuItemsAuthed = [
            { link: '/', name: Object(_biesbjerg_ngx_translate_extract_dist_utils_utils__WEBPACK_IMPORTED_MODULE_3__["_"])('home') },
        ];
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/shared/layout/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/shared/layout/header/header.component.scss")]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_app_config_app_config__WEBPACK_IMPORTED_MODULE_2__["APP_CONFIG"])),
        __metadata("design:paramtypes", [Object, _app_core_services_progress_bar_service__WEBPACK_IMPORTED_MODULE_4__["ProgressBarService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"],
            _app_core_services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/shared/layout/index.ts":
/*!****************************************!*\
  !*** ./src/app/shared/layout/index.ts ***!
  \****************************************/
/*! exports provided: FooterComponent, HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/shared/layout/footer/footer.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return _footer_footer_component__WEBPACK_IMPORTED_MODULE_0__["FooterComponent"]; });

/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header/header.component */ "./src/app/shared/layout/header/header.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return _header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"]; });





/***/ }),

/***/ "./src/app/shared/modules/material.module.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/modules/material.module.ts ***!
  \***************************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_0__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_0__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_0__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_0__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_0__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_0__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_0__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_0__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_0__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_0__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_0__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_0__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_0__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_0__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_0__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_0__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_0__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_0__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_0__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_0__["MatTreeModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_0__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_0__["MatToolbarModule"]
            ],
            exports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_0__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_0__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_0__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_0__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_0__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_0__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_0__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_0__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_0__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_0__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_0__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_0__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_0__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_0__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_0__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_0__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_0__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_0__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_0__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_0__["MatTreeModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_0__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_0__["MatToolbarModule"]
            ],
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _components_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/spinner/spinner.component */ "./src/app/shared/components/spinner/spinner.component.ts");
/* harmony import */ var _components_list_errors_list_errors_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/list-errors/list-errors.component */ "./src/app/shared/components/list-errors/list-errors.component.ts");
/* harmony import */ var _directives_show_authed_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./directives/show-authed.directive */ "./src/app/shared/directives/show-authed.directive.ts");
/* harmony import */ var _components_search_bar_search_bar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/search-bar/search-bar.component */ "./src/app/shared/components/search-bar/search-bar.component.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _modules_material_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/material.module */ "./src/app/shared/modules/material.module.ts");
/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./ui */ "./src/app/shared/ui/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_1__["FlexLayoutModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
                _modules_material_module__WEBPACK_IMPORTED_MODULE_9__["MaterialModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"].forChild(),
            ],
            declarations: [
                _ui__WEBPACK_IMPORTED_MODULE_10__["DrawerComponent"],
                _components_list_errors_list_errors_component__WEBPACK_IMPORTED_MODULE_4__["ListErrorsComponent"],
                _components_search_bar_search_bar_component__WEBPACK_IMPORTED_MODULE_6__["SearchBarComponent"],
                _directives_show_authed_directive__WEBPACK_IMPORTED_MODULE_5__["ShowAuthedDirective"],
                _components_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_3__["SpinnerComponent"],
            ],
            exports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _ui__WEBPACK_IMPORTED_MODULE_10__["DrawerComponent"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_1__["FlexLayoutModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
                _components_list_errors_list_errors_component__WEBPACK_IMPORTED_MODULE_4__["ListErrorsComponent"],
                _modules_material_module__WEBPACK_IMPORTED_MODULE_9__["MaterialModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
                _components_search_bar_search_bar_component__WEBPACK_IMPORTED_MODULE_6__["SearchBarComponent"],
                _directives_show_authed_directive__WEBPACK_IMPORTED_MODULE_5__["ShowAuthedDirective"],
                _components_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_3__["SpinnerComponent"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"],
            ]
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./src/app/shared/ui/drawer/drawer.component.css":
/*!*******************************************************!*\
  !*** ./src/app/shared/ui/drawer/drawer.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: contents;\n}\n\nmat-sidenav {\n  width: 250px;\n}\n\n.container {\n  -ms-flex: 1 1 auto;\n      flex: 1 1 auto;\n}\n\n.sidenav-sticky {\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n}\n"

/***/ }),

/***/ "./src/app/shared/ui/drawer/drawer.component.html":
/*!********************************************************!*\
  !*** ./src/app/shared/ui/drawer/drawer.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\">\n  <mat-toolbar-row>\n    <button (click)=\"sidenav.toggle()\" mat-icon-button>\n      <mat-icon>{{opened ? 'arrow_back_ios' : 'arrow_forward_ios'}}</mat-icon>\n    </button>\n    <ng-content select=\"[header]\"></ng-content>\n  </mat-toolbar-row>\n</mat-toolbar>\n\n<mat-sidenav-container class=\"container\" fxLayout=\"row\">\n  <mat-sidenav #sidenav [mode]=\"over\" [(opened)]=\"opened\" [fixedInViewport]=\"false\" [fixedTopGap]=\"0\" [fixedBottomGap]=\"0\"\n    fxFlex=\"0 0 auto\" role=\"navigation\" (scroll)=\"checkSidebarScroll(this)\">\n    <div class=\"sidenav-sticky\" [ngStyle]=\"{'margin-top': sidebarOffsetTop + 'px'}\">\n      <ng-content select=\"[sidenav]\"></ng-content>\n    </div>\n  </mat-sidenav>\n\n  <mat-sidenav-content fxFlex=\"1 1 auto\">\n    <ng-content select=\"[content]\"></ng-content>\n  </mat-sidenav-content>\n</mat-sidenav-container>\n"

/***/ }),

/***/ "./src/app/shared/ui/drawer/drawer.component.ts":
/*!******************************************************!*\
  !*** ./src/app/shared/ui/drawer/drawer.component.ts ***!
  \******************************************************/
/*! exports provided: DrawerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DrawerComponent", function() { return DrawerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/flex-layout/core */ "./node_modules/@angular/flex-layout/esm5/core.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DrawerComponent = /** @class */ (function () {
    function DrawerComponent(media) {
        var _this = this;
        this.opened = true;
        this.over = 'side';
        this.watcher = media.subscribe(function (change) {
            if (change.mqAlias === 'sm' || change.mqAlias === 'xs') {
                _this.opened = false;
                _this.over = 'over';
            }
            else {
                _this.opened = true;
                _this.over = 'side';
            }
        });
    }
    DrawerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-drawer',
            template: __webpack_require__(/*! ./drawer.component.html */ "./src/app/shared/ui/drawer/drawer.component.html"),
            styles: [__webpack_require__(/*! ./drawer.component.css */ "./src/app/shared/ui/drawer/drawer.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["ObservableMedia"]])
    ], DrawerComponent);
    return DrawerComponent;
}());



/***/ }),

/***/ "./src/app/shared/ui/index.ts":
/*!************************************!*\
  !*** ./src/app/shared/ui/index.ts ***!
  \************************************/
/*! exports provided: DrawerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _drawer_drawer_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./drawer/drawer.component */ "./src/app/shared/ui/drawer/drawer.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DrawerComponent", function() { return _drawer_drawer_component__WEBPACK_IMPORTED_MODULE_0__["DrawerComponent"]; });




/***/ }),

/***/ "./src/app/webpack-translate-loader.ts":
/*!*********************************************!*\
  !*** ./src/app/webpack-translate-loader.ts ***!
  \*********************************************/
/*! exports provided: WebpackTranslateLoader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebpackTranslateLoader", function() { return WebpackTranslateLoader; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");

var WebpackTranslateLoader = /** @class */ (function () {
    function WebpackTranslateLoader() {
    }
    WebpackTranslateLoader.prototype.getTranslation = function (lang) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["from"])(__webpack_require__("./src/assets/i18n lazy recursive ^\\.\\/.*\\.json$")("./" + lang + ".json"));
    };
    return WebpackTranslateLoader;
}());



/***/ }),

/***/ "./src/assets/i18n lazy recursive ^\\.\\/.*\\.json$":
/*!**************************************************************!*\
  !*** ./src/assets/i18n lazy ^\.\/.*\.json$ namespace object ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./en.json": [
		"./src/assets/i18n/en.json"
	],
	"./ru.json": [
		"./src/assets/i18n/ru.json",
		0
	],
	"./uk.json": [
		"./src/assets/i18n/uk.json",
		1
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		var module = __webpack_require__(ids[0]);
		return Object.assign({/* fake namespace object */}, typeof module === "object" && module, { "default": module });
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/assets/i18n lazy recursive ^\\.\\/.*\\.json$";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/assets/i18n/en.json":
/*!*********************************!*\
  !*** ./src/assets/i18n/en.json ***!
  \*********************************/
/*! exports provided: alert, app-name, areYouSure, back, canVote, cancel, cannotVote, create, createHero, createNewHero, cyan, details, error404, errorHasOcurred, findHero, firstTwoHeroesById, goBack, hero-create-new, hero-top, heroCreated, heroDefault, heroDetail, heroDuplicated, heroLikeMaximum, heroPower, heroRemoved, heroesList, language, mayTheForce, name, nameRequired, no, noHero, offlineMessage, orange, realName, realNameRequired, remove, removeHero, saveHero, saved, snapshot, sureRemoveHero, topHeroes, updateBrowser, yellow, yes, home, login, register, passwordNotSame, confirmPassword, invalidPassword, invalidEmail, password, email, submit, firstName, lastName, default */
/***/ (function(module) {

module.exports = {"alert":"Alert","app-name":"XTest 3","areYouSure":"Are you sure?","back":"Back","canVote":"Can vote :)","cancel":"Cancel","cannotVote":"Cannot vote anymore :(","create":"Create","createHero":"Create a hero","createNewHero":"Create new hero","cyan":"Cyan","details":"details","error404":"404 Error","errorHasOcurred":"An error has ocurred","findHero":"Look for a hero","firstTwoHeroesById":"Heroes (1-2)","goBack":"Go back","hero-create-new":{"newHero":"New hero"},"hero-top":{"title":"Top Heroes"},"heroCreated":"Hero created!","heroDefault":"It's a default hero, you cannot delete it","heroDetail":"Hero detail","heroDuplicated":"Hero id is already taken","heroLikeMaximum":"The limit of votes is {{value}}!","heroPower":"Hero power","heroRemoved":"Hero has gone :(","heroesList":"Heroes list","language":"Language","mayTheForce":"May the force be with you","name":"Name","nameRequired":"Name is required","no":"No","noHero":"There is no hero!","offlineMessage":"Without connection we can not load anything!","orange":"Orange","realName":"Real name","realNameRequired":"Real name is required","remove":"Remove","removeHero":"Delete hero","saveHero":"Save hero","saved":"Saved!","snapshot":"Snapshot","sureRemoveHero":"Do you want to remove the hero?","topHeroes":"Heroes most liked","updateBrowser":"You are using an old browser, please update it and reload the page.","yellow":"Yellow","yes":"Yes","home":"Home","login":"Login","register":"Register","passwordNotSame":"Passwords not same","confirmPassword":"Confirm password","invalidPassword":"Please enter proper password","invalidEmail":"Enter proper Email!","password":"Password","email":"Email","submit":"Submit","firstName":"First Name","lastName":"Last Name"};

/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
var environment = {
    production: false,
    api_url: 'https://xtestapp.herokuapp.com',
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/travis/build/Meelistenso/XTest3/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map