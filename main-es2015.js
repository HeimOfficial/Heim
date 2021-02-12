(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class AppComponent {
    constructor() {
        this.title = 'revamped-website';
        this.linkText = "What's Botchain ?";
        this.shownav = false;
    }
    showNav() {
        this.shownav = !this.shownav;
    }
    changeText(e) {
        this.linkText = e.innerHTML;
    }
    closeNav() {
        this.shownav = false;
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 409, vars: 0, consts: [[1, "container"], [1, "main-section"], ["autoplay", "", "loop", "true", "muted", "", "id", "videoId"], ["type", "video/mp4", "src", "../assets/images/bgvideo.mp4"], [1, "content"], ["id", "block1", 1, "box-section", "what-section"], [1, "heading_block"], [1, "bullet_points"], [1, "img-class", "mod-img"], ["src", "../assets/images/quantum_computer.png", "alt", ""], ["src", "../assets/images/automated_software_techno.png", "alt", ""], ["src", "../assets/images/photo6134262774403017371.jpg", "alt", ""], ["id", "block2", 1, "box-section", "why-section"], [1, "bullet_two"], [1, "img-class"], ["src", "../assets/images/provably_fair.png", "alt", ""], ["src", "../assets/images/blockchain_search_engine.png", "alt", ""], ["src", "../assets/images/decentralised_financial_operation.png", "alt", ""], ["src", "../assets/images/turing_complete.png", "alt", ""], ["src", "../assets/images/cosmic.png", "alt", ""], [1, "box-section", "godel-sec"], ["src", "../assets/images/photo6082165559836912550.jpg", "alt", ""], [1, "btn-container"], ["href", "#", 1, "diff-btn"], ["href", "#"], ["id", "block3", 1, "box-section", "team_section"], [1, "team-main"], [1, "team_head"], [1, "level-one"], ["src", "../assets/images/photo6075421224231611405.jpg", "alt", ""], [1, "level-two"], [1, "left-level"], [1, "team-members"], [1, "wrapper"], [1, "carousel"], [1, "carousel__item"], [1, "carousel__item-head"], ["src", "../assets/images/team/ace-of-diamonds.svg", "alt", ""], [1, "carousel__item-body"], [1, "title"], ["src", "../assets/images/team/ace-of-spades.svg", "alt", ""], ["src", "../assets/images/team/ace-of-hearts.svg", "alt", ""], ["src", "../assets/images/team/playing-card.svg", "alt", ""], ["src", "../assets/images/team/king-of-diamonds-card.svg", "alt", ""], ["src", "../assets/images/team/icons8-joker-100.png", "alt", ""], ["src", "../assets/images/team/icons8-queen-of-spades-100.png", "alt", ""], ["src", "../assets/images/team/icons8-jack-of-clubs-100.png", "alt", ""], ["src", "../assets/images/team/icons8-king-of-clubs-100.png", "alt", ""], ["id", "roadmap", 1, "box-section", "rm-section"], [1, "roadmap-block"], [1, "rblock-inside"], ["id", "block4", 1, "box-section", "investor-deck"], [1, "right-boxx"], ["href", "../assets/downloads/HeimLitepaper.pdf", "download", "HeimLitepaper.pdf"], [1, "bg"], ["href", "../assets/downloads/HeimTokenEconomics.pdf", "download", "HeimTokenEconomics.pdf"], ["href", "#contact"], ["id", "block5", 1, "box-section", "developer-sec"], [1, "deve-box"], [1, "left-box"], [1, "dev-box"], [1, "img-box"], ["src", "../assets/images/developers/img_one.png", "alt", ""], [1, "text-box"], ["src", "../assets/images/developers/img_two.png", "alt", ""], ["src", "../assets/images/developers/img_three.png", "alt", ""], ["src", "../assets/images/developers/img_four.png", "alt", ""], ["src", "../assets/images/developers/img_five.png", "alt", ""], ["src", "../assets/images/developers/img_six.png", "alt", ""], [1, "img-box", 2, "background-color", "black"], ["src", "../assets/images/developers/img_seven.png", "alt", ""], [1, "dev-box", "link-box"], [1, "box-section", "killer-apps"], [1, "killer-points", 2, "margin-top", "50px"], ["x", "0px", "y", "0px", "width", "70px", "height", "70px", "viewBox", "0 0 100 100", 1, "pulse"], ["cx", "50", "cy", "50", "r", "6"], ["cx", "50", "cy", "50", "r", "4", "stroke-width", "2", 1, "pulse-circle"], ["cx", "50", "cy", "50", "r", "4", "stroke-width", "2", 1, "pulse-circle-2"], [1, "killer-points"], [1, "img-class", 2, "margin-top", "0px"], ["src", "../assets/images/offline_crypto.png", "alt", ""], ["src", "../assets/images/decentralised_social_media.png", "alt", ""], ["src", "../assets/images/wireless.png", "alt", ""], ["src", "../assets/images/decentralised_payment_gateway.png", "alt", ""], ["src", "../assets/images/dappstore.png", "alt", ""], ["src", "../assets/images/Encrypted cloud.jpg", "alt", ""], ["id", "videoId1", "autoplay", "", "muted", "", "loop", "", "preload", "auto", 2, "width", "100%", "max-height", "100%"], ["src", "../assets/images/earth_f.mp4", "type", "video/mp4"], ["id", "contact"], ["id", "JotFormIFrame-203490927031451", "title", "General Inquiry Contact Form", "onload", "window.parent.scrollTo(0,0)", "allowtransparency", "true", "allowfullscreen", "true", "allow", "geolocation; microphone; camera", "src", "https://form.jotform.com/203490927031451", "frameborder", "0", "scrolling", "no", 2, "min-width", "100%", "height", "750px", "border", "none"], [1, "footer-sec"], ["src", "../assets/images/Heim_logo.png", "alt", ""], [1, "links-sec"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "section", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "video", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "source", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "What is Heim?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Heim is an anonymity-centric post-quantum fully autonomous and infinitely-scalable decentralized technology for building the internet of infinitely scalable blockchains(ledger-like chains) and to power goal-driven long-running decentralized autonomous organizations as well as self-evolving sensor-actor nodes without human bias, malice and intervention. Heim is minerless as far its mainnet operation is concerned. Total addressable marketsize of Heim ecosystem will be more than USD10 trillion by 2025. That includes marketcap of legacy cryptocurrencies and decentralized platforms as well as sizeable share of USD832.1 billion global cloud computing market.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "section", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "What is it for?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Financial Operations with an infinitely divisible currency and monetary unit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Self-organizing autonomous distributed operating system for DAOs, Autononomous Drones, Cars and Vehicles ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " Sensor-Actor networks and Internet of Things ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " Computational and Execution Engine for digital assets and digital avatars of cyber-physical systems, sensor-actor networks, drones, self-driven cars and robots");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Provably fair lotteries, betting, gaming and traditionally unfathomable supraturing beyond Von-Neumann hypercomputing tasks ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " DeFi Yield mining and AI mining ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Automated metaprograming and distribution of non-clonable modular plug-n-play distributed software and software components endowed with global statefulness without involving any human agents.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Seamless non-custodial value transfers from legacy blockchains to Heim and vice versa via zkSNARKed privacy-preserving drivechains without requiring any centralized (CEXes) and decentralized (DEXes) exchanges. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Godel hyperchip of Heim ecosystem enables instantaneous quantum energy transportation from space-based solar energy farms directly to end-user devices, EV cars, autonomous EVcars and drones on-the-fly without requiring any charging points and charging station infrastructure.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Heim and Godel engine enable searchable tracking of Digital Avatars of all sensors, robots, physical/digital objects and even cybernetic networked humans(via Brain-Machine Interface) aka Cyborgs with real-time one-to-one control flows.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Irreversible offline transactions without internet connection and realization of physical cryptocurrency bills/notes.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "section", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Why Heim?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, " With emerging quantum computing machines such as Google\u2019s and that of China\u2019s Photonic quantum chip apparently more than billion times more powerful than Google\u2019s will make cryptographic security of all public blockchains including Bitcoin and Ethereum vulnerable to brute force and key collision attacks thereby putting hundreds of billions of dollar(soon trillions of dollar) of public value at extreme risk of sabotage . ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Truly autonomous and intelligent drones and self-driven cars are not technologically feasible without having the background consciousness and associated self-awareness of human-level or suprahuman-level due to uncertain nature of the real physical world. All algorithmic systems will fail even the so called reinforcement learner algorithms eventually. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Decentralized organizations comprising of human miners and token holders running public blockchains are susceptible to darkest tendencies of human nature e.g. jealousy, anger, greed, malice, conscious/unconscious bias and so on. Hence they can\u2019t truly govern decentralized autonomous organizations in a way that would be fair to all parties and stakeholders including token-hodlers/holders and miners at all times. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Truly decentralized gaming such as lotteries and betting apps require quantum sources of randomness to make them provably fair. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Realtime blockchain search engine, distributed AI engine and an IoT track and execute engine are urgently required for growth of both decentralized economy and IoT infrastructure.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Decentralized Finance-DeFi or Open Finance can\u2019t grow much without a robust privacy solution. Native Heim token of Heim ensures anonymity of the sender and receiver as well as protects the privacy of both account balances and code. Any tokens/ contracts/protocols/dapps built on Heim will have the same anonymous privacy preserving property by default. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "Turing-completeness of smart contracts makes is far too easier for malicious criminal-minded hackers to find bugs, exploits and 0days and steal tens of millions of dollar often in DeFi space.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "Swapping a pair of cryptos or transferring crypto values one-way during face-to-face meetings between reasonably trusted parties should not require an Internet connection. Simple P2P networks like Bluetooth connection should be able to validate such transaction irreversibly. This can be done by engineering some non-clonable primitives both logically and electronically or phonically or physically. This will give birth to a new type of physical crypto notes/bills that does not require an internet connection for validation.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "Feeless essential services like processing of realtime queries and searches will drive up adoption of Heim technology ecosystem and price appreciation of Heim token");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "section", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](77, "img", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "Godel Hyperchip ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "World\u2019 first USB4 compatible multipurpose hypercomputing chip compatible with Windows, Linux(Ubunut), MacOS, RIOT, HarmonyOS and PureOS ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "Learn more");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "Pre - order now");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "section", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "Our Team");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "Howard Wu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](96, "img", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "Executive Adviser at Huawei Technologies.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, "Bellevue, Washington, United States.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, "LinkedIn");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](110, "img", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "p", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, "SpaceEagle ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](116, "img", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "p", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, "Subbies ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](122, "img", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "p", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](125, "Rehn");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](128, "img", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "p", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](131, "Danny");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](134, "img", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "p", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](137, "Eightdim");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](140, "img", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "p", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](143, "Kinster");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](146, "img", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "p", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](149, "Twitchell");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](152, "img", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "p", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](155, "Rector");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](158, "img", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "p", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](161, "Yoshioka");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "section", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](165, "Roadmap");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](169, "Q1 - 2021");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](171, "Development & testing of Godel Hyperchip technologies . Hiring full-time Chief Software and Hardware project managers . Godel Alpha Digital Asset & Avatar search engine Release .");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](173, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](174, "Q2 - 2021");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](176, "Selecting & rewarding grants to independent R&D labs/companies to commericalize productions and distribution of open source Godel Hyperchip and Godel-powered devices including wearable mind-machine interfaces(BMIs) . ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](177, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](178, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](179, "Q3 - 2021");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](180, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](181, "Alpha Heim Testnet released Heim Foundation incorporated in Liechtenstein Announcing strategic partnerships and engagements .");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](182, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](183, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](184, "Q4 - 2021");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](185, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](186, "Beta testnet of Heim Release First batch of Godel hyperchips release .");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](187, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](188, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](189, "Q1 - 2022");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](190, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](191, "Beta testnet of Godel Engine Release Rewarding farther grants to R&D labs and qualified Heim ecosystem developers .");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](192, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](193, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](194, "Q2 - 2022");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](195, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](196, "Heim Core 1.0 Release Drivechains interface released for legacy blockchains .");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](197, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](198, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](199, "Q3 - 2022");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](200, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](201, " Fully functional Godel engine released Decentralized distribution of second batch of Godel hyperchips .");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](202, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](203, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](204, "Q4 - 2022");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](205, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](206, " Debugged Heim Core 1.1 Release . Standalone Heim Mainnet Wallet Release .");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](207, "section", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](208, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](209, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](210, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](211, "Investor Deck");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](212, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](213, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](214, "a", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](215, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](216, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](217, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](218, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](219, "span", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](220, "Heim Litepaper");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](221, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](222, "a", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](223, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](224, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](225, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](226, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](227, "span", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](228, "Token Economics");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](229, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](230, "a", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](231, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](232, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](233, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](234, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](235, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](236, "Heim Whitepaper (Available on request)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](237, "section", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](238, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](239, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](240, "Developers");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](241, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](242, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](243, "div", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](244, "div", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](245, "img", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](246, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](247, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](248, " Build cross-platform privacy-preserving scalable decentralized autonomous DAOs and applications as well as parachains of legacy blockchain protocols at lightning speed. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](249, "div", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](250, "div", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](251, "img", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](252, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](253, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](254, " Leverage Godel Hyperchip to propel your embedded IoT applications to Andromeda at tachyonic FTL speed ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](255, "div", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](256, "div", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](257, "img", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](258, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](259, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](260, " Regain complete control over your software and content by hosting your Dapps on a censorship-proof DappStore targeting end-users with blockchain-powered Linux and HarmonyOS-based smartphones and smartwatches ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](261, "div", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](262, "div", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](263, "img", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](264, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](265, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](266, " Access the God-like power of Godel hyperchip and blockchain analyzer engine to launch digital avatars and tokens functionally representing real-world objects, devices, agents , aggregates and people ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](267, "div", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](268, "div", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](269, "img", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](270, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](271, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](272, " Deploy censorship-proof secure encrypted messenger and social media apps that don\u2019t require an army of programmers and coders for building and maintenance. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](273, "div", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](274, "div", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](275, "img", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](276, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](277, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](278, " Get total protection from attack vectors of external data oracles with built-in minerless data integrity provided by on-chain automorphic decision agents internally. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](279, "div", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](280, "div", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](281, "img", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](282, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](283, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](284, " Assert your self-sovereignty while destroying the legacy finance and big-tech monopolies by root ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](285, "div", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](286, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](287, "BUILD NOW");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](288, "div", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](289, "a", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](290, "CONTACT US");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](291, "section", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](292, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](293, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](294, "Decentralized Applications powered by Heim");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](295, "div", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](296, "svg", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](297, "circle", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](298, "circle", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](299, "circle", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](300, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](301, "Hack-proof distributed autonomous operating system for DAOs, autonomous cars and drones. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](302, "div", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](303, "svg", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](304, "circle", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](305, "circle", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](306, "circle", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](307, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](308, " Searchable collaborative Digital Avatars of real world devices,autonomous cars, sensors, bots , drones and individuals with globally unique zero-knowledge identifiers extending working time and capacities of individuals and organizations ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](309, "div", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](310, "svg", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](311, "circle", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](312, "circle", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](313, "circle", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](314, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](315, " Human Readable Anonymous agreements and guarantees known as zkSAGs to replace smart contracts ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](316, "div", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](317, "svg", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](318, "circle", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](319, "circle", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](320, "circle", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](321, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](322, " Irreversible offline transactions without internet connection and realization of physical cryptocurrency bills ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](323, "div", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](324, "img", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](325, "div", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](326, "svg", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](327, "circle", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](328, "circle", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](329, "circle", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](330, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](331, " Seamless non-custodial value transfers from legacy blockchains to Heim and vice versa by implementing recursive zkSNARKed privacy-preserving drivechains without requiring any centralized (CEXes)and decentralized (DEXes) exchanges or 3rd party wallets ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](332, "div", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](333, "svg", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](334, "circle", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](335, "circle", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](336, "circle", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](337, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](338, " Decentralized censorship-proof secure encrypted messenger and social media apps that don\u2019t require an army of programmers and coders for building and maintenance. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](339, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](340, "img", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](341, "div", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](342, "svg", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](343, "circle", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](344, "circle", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](345, "circle", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](346, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](347, " Godel hyperchip of Heim ecosystem will enable secure wireless energy distribution and trading via instantaneous quantum energy teleportation from space-based and terrestrial solar energy farms and small nuclear \u2622\uFE0F fusion reactors directly to end-user devices, EV cars, autonomous EVcars, drones, satellites \uD83D\uDEF0 and spacestations as well as space colonies in the near future. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](348, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](349, "img", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](350, "div", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](351, "svg", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](352, "circle", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](353, "circle", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](354, "circle", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](355, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](356, " KYC-free Universal Decentralized Payment Processor for more than 100 cryptocurrencies and stablecoins besides Heim enabled via recursive zkSNARKed drivechains ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](357, "div", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](358, "img", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](359, "div", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](360, "svg", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](361, "circle", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](362, "circle", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](363, "circle", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](364, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](365, " Censorship-proof Botverse DappStore allowing developers to list their Dapps for easy end-user access and marketing based on keyphrases and keywords ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](366, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](367, "img", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](368, "div", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](369, "svg", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](370, "circle", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](371, "circle", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](372, "circle", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](373, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](374, " Censorship-proof secure cloud hosting protected by functional encryption of Heim technology ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](375, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](376, "img", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](377, "div", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](378, "svg", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](379, "circle", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](380, "circle", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](381, "circle", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](382, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](383, " Realtime financial intelligence mapped on a 3D avatar of rotating planet Earth ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](384, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](385, "video", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](386, "source", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](387, "Your browser does not support the video tag. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](388, "section", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](389, "iframe", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](390, "section", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](391, "img", 91);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](392, "div", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](393, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](394, " Email ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](395, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](396, "info@heim.technology");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](397, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](398, "Telegram ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](399, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](400, "https://t.me/heimtechnology");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](401, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](402, "Brax.Me ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](403, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](404, "#heimtech");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](405, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](406, "Discord");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](407, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](408, "https://discord.gg/Z4vQrvnHv2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".container[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\n  background-color: #F5F5F5;\n}\n\n.container[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 10px;\n  background-color: #F5F5F5;\n}\n\n.container[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background-color: blue;\n}\n\n.container[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 88vh;\n  scroll-behavior: smooth;\n  overflow-y: auto;\n}\n\n.box-section[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 100px;\n}\n\n.rm-section[_ngcontent-%COMP%] {\n  background-color: black;\n  color: #fff;\n}\n\n.rm-section[_ngcontent-%COMP%]   .roadmap-block[_ngcontent-%COMP%] {\n  width: 500px;\n  margin: 40px auto;\n  display: flex;\n  position: relative;\n  flex-direction: column;\n}\n\n.rm-section[_ngcontent-%COMP%]   .roadmap-block[_ngcontent-%COMP%]::after {\n  content: \"\";\n  position: absolute;\n  width: 10px;\n  top: 0;\n  bottom: 0;\n  border-radius: 40px;\n  left: 0;\n  background-color: #333;\n}\n\n.rm-section[_ngcontent-%COMP%]   .roadmap-block[_ngcontent-%COMP%]   .rblock-inside[_ngcontent-%COMP%]:last-child {\n  border: none;\n}\n\n.rm-section[_ngcontent-%COMP%]   .roadmap-block[_ngcontent-%COMP%]   .rblock-inside[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  padding-top: 30px;\n  padding-bottom: 50px;\n  padding-left: 30px;\n  border-bottom: 1px solid #333;\n  flex-direction: column;\n  cursor: pointer;\n  position: relative;\n}\n\n.rm-section[_ngcontent-%COMP%]   .roadmap-block[_ngcontent-%COMP%]   .rblock-inside[_ngcontent-%COMP%]:hover   h2[_ngcontent-%COMP%] {\n  color: #fff;\n  transform: translateX(10px);\n}\n\n.rm-section[_ngcontent-%COMP%]   .roadmap-block[_ngcontent-%COMP%]   .rblock-inside[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-family: \"Poiret One\", cursive;\n  letter-spacing: 1px;\n  font-size: 20px;\n  color: #fff;\n  transition: transform 0.3s ease;\n}\n\n.rm-section[_ngcontent-%COMP%]   .roadmap-block[_ngcontent-%COMP%]   .rblock-inside[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  background-color: #333;\n  padding: 10px;\n  font-size: 14px;\n  line-height: 24px;\n  border-radius: 4px;\n  font-family: \"Open Sans\", sans-serif;\n}\n\n.rm-section[_ngcontent-%COMP%]   .roadmap-block[_ngcontent-%COMP%]   .rblock-inside[_ngcontent-%COMP%]::after {\n  content: \"\";\n  position: absolute;\n  left: 0px;\n  width: 16px;\n  height: 16px;\n  border: 4px solid #5050f3;\n  top: 30px;\n  transform: translateX(-32%);\n  border-radius: 50%;\n  z-index: 11111;\n  background: #000;\n  transition: all 0.3s ease;\n}\n\n.heading_block[_ngcontent-%COMP%] {\n  color: #fff;\n  position: relative;\n}\n\n.heading_block[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 32px;\n  font-family: \"Poiret One\", cursive;\n  font-weight: bolder;\n  letter-spacing: 0.5px;\n}\n\n.heading_block[_ngcontent-%COMP%]::after {\n  content: \"\";\n  position: absolute;\n  height: 5px;\n  top: -15px;\n  left: 0px;\n  width: 50px;\n  background-color: #5050f3;\n  border-radius: 20px;\n}\n\n.para_block[_ngcontent-%COMP%] {\n  color: #fff;\n  width: 50%;\n  border-bottom: 1px solid blue;\n  font-size: 16px;\n  font-family: \"Open Sans\", sans-serif;\n  text-align: right;\n  padding-bottom: 2px;\n}\n\n.investor-deck[_ngcontent-%COMP%] {\n  height: 100vh;\n  background-color: #0f0f0f;\n  display: flex;\n  position: relative;\n  flex-direction: column;\n}\n\nul[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  transform: rotate(-25deg) skew(25deg);\n  transform-style: preserve-3d;\n}\n\nul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  position: relative;\n  list-style: none;\n  width: 120px;\n  font-family: \"Open Sans\", sans-serif;\n  height: 120px;\n  margin: 0px 20px;\n}\n\nul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:before {\n  content: \"\";\n  position: absolute;\n  bottom: -10px;\n  left: -5px;\n  width: 100%;\n  height: 10px;\n  background: blue;\n  trnasform-origin: top;\n  transform: skewX(-41deg);\n}\n\nul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:after {\n  content: \"\";\n  position: absolute;\n  top: 5px;\n  left: -9px;\n  width: 9px;\n  height: 100%;\n  background: blue;\n  trasform-origin: right;\n  transform: skewY(-49deg);\n}\n\nul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  display: flex !important;\n  background: blue;\n  justify-content: center;\n  align-items: center;\n  text-align: Center;\n  color: #fff;\n  font-size: 18px !important;\n  transition: 1.5s ease-out;\n}\n\n.bg[_ngcontent-%COMP%]::after {\n  content: \"\";\n  position: absolute;\n  height: 25px;\n  width: 25px;\n  bottom: 2px;\n  z-index: 11111111;\n  left: 50%;\n  transform: translateX(-50%);\n  background-image: url('download-icon.png');\n  background-repeat: no-repeat;\n  background-position: center center;\n  background-size: cover;\n}\n\nul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%] {\n  z-index: 1000;\n  transition: 0.3s;\n  color: #fff;\n  box-shadw: -1px 1px 1px rgba(0, 0, 0, 0.5);\n}\n\nul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%]:nth-child(5) {\n  transform: translate(40px, -40px);\n  opacity: 1;\n}\n\nul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%]:nth-child(4) {\n  transform: translate(30px, -30px);\n  opacity: 0.8;\n}\n\nul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%]:nth-child(3) {\n  transform: translate(20px, -20px);\n  opacity: 0.6;\n}\n\nul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%]:nth-child(2) {\n  transform: translate(10px, -10px);\n  opacity: 0.4;\n}\n\nul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%]:nth-child(1) {\n  transform: translate(0px, 0px);\n  opacity: 0.2;\n}\n\nul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(1):hover   span[_ngcontent-%COMP%] {\n  background: #D69A38 !important;\n}\n\nul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(2):hover   span[_ngcontent-%COMP%] {\n  background: #085754 !important;\n}\n\nul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(3):hover   span[_ngcontent-%COMP%] {\n  background: #DA2A2A !important;\n}\n\n.wrapper[_ngcontent-%COMP%] {\n  background: transparent;\n  height: 300px;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n}\n\n.carousel[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  max-width: 300px;\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n}\n\n.carousel__item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  position: absolute;\n  width: 100%;\n  padding: 0 12px;\n  opacity: 0;\n  filter: drop-shadow(0 2px 2px #555);\n  will-change: transform, opacity;\n  -webkit-animation: carousel-animate-vertical 27s linear infinite;\n          animation: carousel-animate-vertical 27s linear infinite;\n}\n\n.carousel__item[_ngcontent-%COMP%]:nth-child(1) {\n  -webkit-animation-delay: calc(3s * -1);\n          animation-delay: calc(3s * -1);\n}\n\n.carousel__item[_ngcontent-%COMP%]:nth-child(2) {\n  -webkit-animation-delay: calc(3s * 0);\n          animation-delay: calc(3s * 0);\n}\n\n.carousel__item[_ngcontent-%COMP%]:nth-child(3) {\n  -webkit-animation-delay: calc(3s * 1);\n          animation-delay: calc(3s * 1);\n}\n\n.carousel__item[_ngcontent-%COMP%]:nth-child(4) {\n  -webkit-animation-delay: calc(3s * 2);\n          animation-delay: calc(3s * 2);\n}\n\n.carousel__item[_ngcontent-%COMP%]:nth-child(5) {\n  -webkit-animation-delay: calc(3s * 3);\n          animation-delay: calc(3s * 3);\n}\n\n.carousel__item[_ngcontent-%COMP%]:nth-child(6) {\n  -webkit-animation-delay: calc(3s * 4);\n          animation-delay: calc(3s * 4);\n}\n\n.carousel__item[_ngcontent-%COMP%]:nth-child(7) {\n  -webkit-animation-delay: calc(3s * 5);\n          animation-delay: calc(3s * 5);\n}\n\n.carousel__item[_ngcontent-%COMP%]:nth-child(8) {\n  -webkit-animation-delay: calc(3s * 6);\n          animation-delay: calc(3s * 6);\n}\n\n.carousel__item[_ngcontent-%COMP%]:last-child {\n  -webkit-animation-delay: calc(-3s * 2);\n          animation-delay: calc(-3s * 2);\n}\n\n.carousel__item-head[_ngcontent-%COMP%] {\n  border-radius: 50%;\n  background-color: #f1f1f1;\n  width: 120px;\n  height: 120px;\n  padding: 5px;\n  position: relative;\n  margin-right: -45px;\n  flex-shrink: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 50px;\n}\n\n.carousel__item-head[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 80%;\n  width: 80%;\n  -o-object-fit: contain;\n     object-fit: contain;\n}\n\n.carousel__item-body[_ngcontent-%COMP%] {\n  width: 100%;\n  background-color: #fff;\n  padding: 16px 20px 16px 70px;\n}\n\n.title[_ngcontent-%COMP%] {\n  font-family: \"Open Sans\", sans-serif;\n  font-size: 18px;\n  font-weight: bolder;\n  color: blue;\n}\n\n@-webkit-keyframes carousel-animate-vertical {\n  0% {\n    transform: translateY(100%) scale(0.5);\n    opacity: 0;\n    visibility: hidden;\n  }\n  3%, 11.1111111111% {\n    transform: translateY(100%) scale(0.7);\n    opacity: 0.4;\n    visibility: visible;\n  }\n  14.1111111111%, 22.2222222222% {\n    transform: translateY(0) scale(1);\n    opacity: 1;\n    visibility: visible;\n  }\n  25.2222222222%, 33.3333333333% {\n    transform: translateY(-100%) scale(0.7);\n    opacity: 0.4;\n    visibility: visible;\n  }\n  36.3333333333% {\n    transform: translateY(-100%) scale(0.5);\n    opacity: 0;\n    visibility: visible;\n  }\n  100% {\n    transform: translateY(-100%) scale(0.5);\n    opacity: 0;\n    visibility: hidden;\n  }\n}\n\n@keyframes carousel-animate-vertical {\n  0% {\n    transform: translateY(100%) scale(0.5);\n    opacity: 0;\n    visibility: hidden;\n  }\n  3%, 11.1111111111% {\n    transform: translateY(100%) scale(0.7);\n    opacity: 0.4;\n    visibility: visible;\n  }\n  14.1111111111%, 22.2222222222% {\n    transform: translateY(0) scale(1);\n    opacity: 1;\n    visibility: visible;\n  }\n  25.2222222222%, 33.3333333333% {\n    transform: translateY(-100%) scale(0.7);\n    opacity: 0.4;\n    visibility: visible;\n  }\n  36.3333333333% {\n    transform: translateY(-100%) scale(0.5);\n    opacity: 0;\n    visibility: visible;\n  }\n  100% {\n    transform: translateY(-100%) scale(0.5);\n    opacity: 0;\n    visibility: hidden;\n  }\n}\n\n.team_section[_ngcontent-%COMP%] {\n  background-color: #0f0f0f;\n  position: relative;\n}\n\n.team_section[_ngcontent-%COMP%]::after {\n  content: \"\";\n  position: absolute;\n  height: 100px;\n  width: 100px;\n  background-color: #000;\n  right: 50px;\n  top: -50px;\n  transform: rotateZ(45deg);\n}\n\n.team_section[_ngcontent-%COMP%]   .team-main[_ngcontent-%COMP%] {\n  display: flex;\n  height: 400px;\n  align-items: center;\n}\n\n.team_section[_ngcontent-%COMP%]   .team-main[_ngcontent-%COMP%]   .team_head[_ngcontent-%COMP%] {\n  width: 500px;\n  height: 250px;\n  background-color: #fff;\n  border-radius: 4px;\n  padding: 10px 0px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n}\n\n.team_section[_ngcontent-%COMP%]   .team-main[_ngcontent-%COMP%]   .team_head[_ngcontent-%COMP%]   .level-one[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.team_section[_ngcontent-%COMP%]   .team-main[_ngcontent-%COMP%]   .team_head[_ngcontent-%COMP%]   .level-one[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  background-color: blue;\n  border-top-right-radius: 30px;\n  border-bottom-right-radius: 30px;\n  padding: 6px 12px;\n  padding-right: 50px;\n  color: #fff;\n  font-size: 18px;\n  font-family: \"Poiret One\", cursive;\n}\n\n.team_section[_ngcontent-%COMP%]   .team-main[_ngcontent-%COMP%]   .team_head[_ngcontent-%COMP%]   .level-one[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 100px;\n  width: 100px;\n  border-radius: 50%;\n  margin-right: 20px;\n}\n\n.team_section[_ngcontent-%COMP%]   .team-main[_ngcontent-%COMP%]   .team_head[_ngcontent-%COMP%]   .level-two[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  padding: 0px 10px;\n  margin-top: 20px;\n  align-items: center;\n}\n\n.team_section[_ngcontent-%COMP%]   .team-main[_ngcontent-%COMP%]   .team_head[_ngcontent-%COMP%]   .level-two[_ngcontent-%COMP%]   .left-level[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.team_section[_ngcontent-%COMP%]   .team-main[_ngcontent-%COMP%]   .team_head[_ngcontent-%COMP%]   .level-two[_ngcontent-%COMP%]   .left-level[_ngcontent-%COMP%]::after {\n  content: \"\";\n  position: absolute;\n  height: 3px;\n  width: 40%;\n  background-color: #5050f3;\n  border-radius: 30px;\n  top: -15px;\n  right: 0;\n}\n\n.team_section[_ngcontent-%COMP%]   .team-main[_ngcontent-%COMP%]   .team_head[_ngcontent-%COMP%]   .level-two[_ngcontent-%COMP%]   .left-level[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  height: 3px;\n  width: 16%;\n  background-color: #5050f3;\n  border-radius: 30px;\n  top: -25px;\n  right: 0;\n}\n\n.team_section[_ngcontent-%COMP%]   .team-main[_ngcontent-%COMP%]   .team_head[_ngcontent-%COMP%]   .level-two[_ngcontent-%COMP%]   .left-level[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 16px;\n  margin-bottom: 4px;\n  font-weight: bolder;\n  color: #000;\n  font-family: \"Open Sans\", sans-serif;\n}\n\n.team_section[_ngcontent-%COMP%]   .team-main[_ngcontent-%COMP%]   .team_head[_ngcontent-%COMP%]   .level-two[_ngcontent-%COMP%]   .left-level[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  text-align: right;\n  font-size: 14px;\n  font-weight: bold;\n  color: #000;\n  font-family: \"Open Sans\", sans-serif;\n}\n\n.team_section[_ngcontent-%COMP%]   .team-main[_ngcontent-%COMP%]   .team_head[_ngcontent-%COMP%]   .level-two[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  padding: 10px 30px;\n  color: #fff;\n  background-color: #0078D4;\n  font-family: \"Poiret One\", cursive;\n  font-size: 16px;\n  border-radius: 2px;\n  letter-spacing: 1px;\n  font-weight: bold;\n  text-decoration: none;\n}\n\n.team_section[_ngcontent-%COMP%]   .team-main[_ngcontent-%COMP%]   .team-members[_ngcontent-%COMP%] {\n  flex: 1;\n}\n\n.godel-sec[_ngcontent-%COMP%] {\n  background: #000;\n  text-align: center;\n  color: #fff;\n}\n\n.godel-sec[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 500px;\n  -o-object-fit: contain;\n     object-fit: contain;\n  margin-bottom: 40px;\n}\n\n.godel-sec[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-family: \"Poiret One\", cursive;\n  font-size: 42px;\n}\n\n.godel-sec[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  max-width: 70%;\n  margin: 20px auto;\n  font-size: 15px;\n  color: #efefef;\n  line-height: 32px;\n  font-weight: 600;\n  font-family: \"Open Sans\", sans-serif;\n}\n\n.godel-sec[_ngcontent-%COMP%]   .btn-container[_ngcontent-%COMP%] {\n  margin-top: 50px;\n  display: flex;\n  justify-content: center;\n}\n\n.godel-sec[_ngcontent-%COMP%]   .btn-container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  padding: 12px 24px;\n  font-family: \"Poiret One\", cursive;\n  font-weight: bolder;\n  color: #fff;\n  font-size: 16px;\n  background: blue;\n  margin: 0px 10px;\n  border-radius: 4px;\n  text-decoration: none;\n}\n\n.godel-sec[_ngcontent-%COMP%]   .btn-container[_ngcontent-%COMP%]   .diff-btn[_ngcontent-%COMP%] {\n  background: #fff;\n  color: blue;\n}\n\n.footer-sec[_ngcontent-%COMP%] {\n  padding: 30px 100px;\n  display: flex;\n  background: #0f0f0f;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.footer-sec[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 100px;\n}\n\n.footer-sec[_ngcontent-%COMP%]   .links-sec[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 18px;\n  color: white;\n  margin: 15px 0px;\n  text-decoration: none;\n  letter-spacing: 1px;\n  font-weight: bolder;\n  font-family: \"Poiret One\", cursive;\n}\n\n.footer-sec[_ngcontent-%COMP%]   .links-sec[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: inline-block;\n  background: blue;\n  border-radius: 30px;\n  padding: 8px 12px;\n  margin-left: 5px;\n  letter-spacing: normal;\n  font-size: 14px;\n  font-family: \"Open Sans\", sans-serif;\n  font-weight: bolder;\n}\n\n.main-section[_ngcontent-%COMP%] {\n  height: 88vh;\n  width: 100%;\n  overflow: hidden;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n}\n\n.main-section[_ngcontent-%COMP%]   video[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 0;\n  top: 0;\n  -o-object-fit: cover;\n     object-fit: cover;\n  height: 100%;\n  width: 100%;\n  pointer-events: none;\n}\n\n.main-section[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  margin: auto;\n  background-color: rgba(25, 99, 251, 0.5);\n  -webkit-backdrop-filter: blur(5px);\n          backdrop-filter: blur(5px);\n  color: #fff;\n  width: 800px;\n  border-radius: 4px;\n  position: relative;\n  padding: 20px;\n}\n\n.main-section[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 34px;\n  font-weight: bolder;\n  font-family: \"Poiret One\", cursive;\n  margin-bottom: 10px;\n}\n\n.main-section[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-family: \"Open Sans\", sans-serif;\n  font-size: 16px;\n  line-height: 30px;\n  color: #fff;\n  font-weight: 500;\n}\n\n.what-section[_ngcontent-%COMP%] {\n  background: #000;\n}\n\n.bullet_points[_ngcontent-%COMP%] {\n  margin-top: 30px;\n}\n\n.bullet_points[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-family: \"Open Sans\", sans-serif;\n  font-size: 15px;\n  color: #fff;\n  font-weight: 500;\n  margin-bottom: 8px;\n  text-align: justify;\n  padding-left: 30px;\n  line-height: 30px;\n  position: relative;\n}\n\n.bullet_points[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]::after {\n  content: \"\";\n  position: absolute;\n  height: 10px;\n  width: 10px;\n  background-color: #5050f3;\n  left: 0px;\n  top: 10px;\n}\n\n.developer-sec[_ngcontent-%COMP%] {\n  background: #000;\n  position: relative;\n}\n\n.developer-sec[_ngcontent-%COMP%]   .left-box[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  flex-wrap: wrap;\n  padding-top: 30px;\n}\n\n.developer-sec[_ngcontent-%COMP%]   .left-box[_ngcontent-%COMP%]   .dev-box[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  max-width: 320px;\n  margin-bottom: 20px;\n}\n\n.developer-sec[_ngcontent-%COMP%]   .left-box[_ngcontent-%COMP%]   .dev-box[_ngcontent-%COMP%]   .img-box[_ngcontent-%COMP%] {\n  width: 100%;\n  background-color: #fff;\n  height: 200px;\n}\n\n.developer-sec[_ngcontent-%COMP%]   .left-box[_ngcontent-%COMP%]   .dev-box[_ngcontent-%COMP%]   .img-box[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: inherit;\n  width: inherit;\n  -o-object-fit: contain;\n     object-fit: contain;\n}\n\n.developer-sec[_ngcontent-%COMP%]   .left-box[_ngcontent-%COMP%]   .dev-box[_ngcontent-%COMP%]   .text-box[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 120px;\n  padding: 10px;\n  display: flex;\n  margin-right: 10px;\n  background-color: #5050f3;\n  margin-bottom: 10px;\n}\n\n.developer-sec[_ngcontent-%COMP%]   .left-box[_ngcontent-%COMP%]   .dev-box[_ngcontent-%COMP%]   .text-box[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: auto;\n  color: #fff;\n  font-family: \"Open Sans\", sans-serif;\n  font-size: 13px;\n  line-height: 20px;\n  text-align: center;\n}\n\n.right-boxx[_ngcontent-%COMP%] {\n  height: 400px;\n  width: 400px;\n  position: absolute;\n  background-image: url('investor-deck.png');\n  background-repeat: no-repeat;\n  background-size: cover;\n  right: 0px;\n  border-top-left-radius: 4px;\n  border-bottom-left-radius: 4px;\n  top: 50%;\n  z-index: 9999;\n  transform: translateY(-50%);\n  background-position: center center;\n}\n\n.right-boxx[_ngcontent-%COMP%]::after {\n  content: \"\";\n  height: 25%;\n  width: 25%;\n  border-left: 20px solid #5050f3;\n  border-bottom: 20px solid #5050f3;\n  background-color: transparent;\n  border-top-left-radius: 4px;\n  border-bottom-left-radius: 4px;\n  border-bottom-right-radius: 4px;\n  z-index: 1;\n  position: absolute;\n  bottom: -19px;\n  left: -19px;\n}\n\n.killer-apps[_ngcontent-%COMP%] {\n  background: #000;\n}\n\n.killer-points[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  font-family: \"Open Sans\", sans-serif;\n  color: #fff;\n  margin-bottom: 10px;\n}\n\n.killer-points[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  flex: 1;\n  line-height: 30px;\n}\n\n.killer-points[_ngcontent-%COMP%]   .pulse-circle[_ngcontent-%COMP%] {\n  stroke: #5050f3;\n}\n\ncircle[_ngcontent-%COMP%] {\n  fill: #5050f3;\n  transform-origin: center;\n}\n\n.pulse-circle[_ngcontent-%COMP%], .pulse-circle-2[_ngcontent-%COMP%] {\n  stroke: #5050f3;\n  stroke-width: 2px;\n  fill: none;\n  transform: translate3d(0, 0, 0);\n}\n\n.pulse-circle[_ngcontent-%COMP%] {\n  -webkit-animation: pulse 1.5s 1s cubic-bezier(0.39, 0.54, 0.41, 1.5) infinite alternate;\n          animation: pulse 1.5s 1s cubic-bezier(0.39, 0.54, 0.41, 1.5) infinite alternate;\n}\n\n.pulse-circle-2[_ngcontent-%COMP%] {\n  -webkit-animation: pulse-2 1.5s cubic-bezier(0.39, 0.54, 0.41, 1.5) infinite alternate;\n          animation: pulse-2 1.5s cubic-bezier(0.39, 0.54, 0.41, 1.5) infinite alternate;\n}\n\n@-webkit-keyframes pulse {\n  0% {\n    r: 4;\n  }\n  50% {\n    r: 16;\n  }\n  60% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 0;\n  }\n}\n\n@keyframes pulse {\n  0% {\n    r: 4;\n  }\n  50% {\n    r: 16;\n  }\n  60% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 0;\n  }\n}\n\n@-webkit-keyframes pulse-2 {\n  0%, 50% {\n    r: 4;\n  }\n  100% {\n    r: 16;\n  }\n}\n\n@keyframes pulse-2 {\n  0%, 50% {\n    r: 4;\n  }\n  100% {\n    r: 16;\n  }\n}\n\n.link-box[_ngcontent-%COMP%] {\n  width: inherit;\n  text-align: center;\n  width: 320px;\n  display: flex;\n}\n\n.link-box[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  padding: 12px 24px;\n  font-family: \"Open Sans\", sans-serif;\n  font-weight: bolder;\n  color: #fff;\n  font-size: 16px;\n  max-width: 180px;\n  background: blue;\n  margin: auto;\n  border-radius: 4px;\n  text-decoration: none;\n}\n\n@media screen and (max-width: 480px) {\n  .main-section[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n    width: 90%;\n    padding: 10px;\n  }\n  .main-section[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 24px;\n  }\n  .main-section[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    text-align: center;\n    font-size: 16px;\n    line-height: 26px;\n  }\n\n  .box-section[_ngcontent-%COMP%] {\n    padding: 50px 10px;\n  }\n\n  .heading_block[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 28px;\n  }\n  .heading_block[_ngcontent-%COMP%]::after {\n    height: 4px;\n  }\n\n  .godel-sec[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 90%;\n    margin-bottom: 30px;\n  }\n  .godel-sec[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 30px;\n  }\n  .godel-sec[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    max-width: 90%;\n  }\n\n  .team_section[_ngcontent-%COMP%]::after {\n    height: 50px;\n    width: 50px;\n    top: -30px;\n  }\n  .team_section[_ngcontent-%COMP%]   .team-main[_ngcontent-%COMP%] {\n    display: flex;\n    height: auto;\n    padding: 40px 0px;\n    flex-wrap: wrap;\n    align-items: center;\n  }\n  .team_section[_ngcontent-%COMP%]   .team-main[_ngcontent-%COMP%]   .team_head[_ngcontent-%COMP%] {\n    width: 500px;\n    height: 250px;\n    background-color: #fff;\n    border-radius: 4px;\n    padding: 10px 0px;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-around;\n  }\n  .team_section[_ngcontent-%COMP%]   .team-main[_ngcontent-%COMP%]   .team_head[_ngcontent-%COMP%]   .level-one[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n  }\n  .team_section[_ngcontent-%COMP%]   .team-main[_ngcontent-%COMP%]   .team_head[_ngcontent-%COMP%]   .level-one[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    background-color: blue;\n    border-top-right-radius: 30px;\n    border-bottom-right-radius: 30px;\n    padding: 6px 12px;\n    padding-right: 50px;\n    color: #fff;\n    font-size: 18px;\n    font-family: \"Poiret One\", cursive;\n  }\n  .team_section[_ngcontent-%COMP%]   .team-main[_ngcontent-%COMP%]   .team_head[_ngcontent-%COMP%]   .level-one[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    height: 100px;\n    width: 100px;\n    border-radius: 50%;\n    margin-right: 20px;\n  }\n  .team_section[_ngcontent-%COMP%]   .team-main[_ngcontent-%COMP%]   .team_head[_ngcontent-%COMP%]   .level-two[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: space-between;\n    padding: 0px 10px;\n    margin-top: 20px;\n    align-items: center;\n  }\n  .team_section[_ngcontent-%COMP%]   .team-main[_ngcontent-%COMP%]   .team_head[_ngcontent-%COMP%]   .level-two[_ngcontent-%COMP%]   .left-level[_ngcontent-%COMP%] {\n    position: relative;\n  }\n  .team_section[_ngcontent-%COMP%]   .team-main[_ngcontent-%COMP%]   .team_head[_ngcontent-%COMP%]   .level-two[_ngcontent-%COMP%]   .left-level[_ngcontent-%COMP%]::after {\n    content: \"\";\n    position: absolute;\n    height: 3px;\n    width: 40%;\n    background-color: #5050f3;\n    border-radius: 30px;\n    top: -15px;\n    right: 0;\n  }\n  .team_section[_ngcontent-%COMP%]   .team-main[_ngcontent-%COMP%]   .team_head[_ngcontent-%COMP%]   .level-two[_ngcontent-%COMP%]   .left-level[_ngcontent-%COMP%]::before {\n    content: \"\";\n    position: absolute;\n    height: 3px;\n    width: 16%;\n    background-color: #5050f3;\n    border-radius: 30px;\n    top: -25px;\n    right: 0;\n  }\n  .team_section[_ngcontent-%COMP%]   .team-main[_ngcontent-%COMP%]   .team_head[_ngcontent-%COMP%]   .level-two[_ngcontent-%COMP%]   .left-level[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 16px;\n    margin-bottom: 4px;\n    font-weight: bolder;\n    color: #000;\n    font-family: \"Open Sans\", sans-serif;\n  }\n  .team_section[_ngcontent-%COMP%]   .team-main[_ngcontent-%COMP%]   .team_head[_ngcontent-%COMP%]   .level-two[_ngcontent-%COMP%]   .left-level[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    text-align: right;\n    font-size: 14px;\n    font-weight: bold;\n    color: #000;\n    font-family: \"Open Sans\", sans-serif;\n  }\n  .team_section[_ngcontent-%COMP%]   .team-main[_ngcontent-%COMP%]   .team_head[_ngcontent-%COMP%]   .level-two[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    padding: 10px 30px;\n    color: #fff;\n    background-color: #0078D4;\n    font-family: \"Poiret One\", cursive;\n    font-size: 16px;\n    border-radius: 2px;\n    letter-spacing: 1px;\n    font-weight: bold;\n    text-decoration: none;\n  }\n  .team_section[_ngcontent-%COMP%]   .team-main[_ngcontent-%COMP%]   .team-members[_ngcontent-%COMP%] {\n    margin-top: 50px;\n    flex: 1;\n  }\n\n  .rm-section[_ngcontent-%COMP%]   .roadmap-block[_ngcontent-%COMP%] {\n    width: 100% !important;\n  }\n\n  .right-boxx[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  ul[_ngcontent-%COMP%] {\n    justify-content: space-around;\n    flex-wrap: wrap;\n    transform: none;\n    margin-top: 100px;\n  }\n\n  ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    height: 130px;\n    width: 130px;\n    margin: 20px 0px;\n  }\n\n  .developer-sec[_ngcontent-%COMP%]   .left-box[_ngcontent-%COMP%] {\n    justify-content: space-around;\n  }\n\n  .killer-points[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n  }\n  .killer-points[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n    height: 50px;\n    width: 50px;\n  }\n\n  .container[_ngcontent-%COMP%] {\n    height: 90vh;\n  }\n\n  .footer-sec[_ngcontent-%COMP%] {\n    padding: 30px 10px;\n    flex-wrap: wrap;\n    justify-content: space-around;\n  }\n  .footer-sec[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    height: 70px;\n    margin-bottom: 50px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXFVzZXJzXFxocFxcT25lRHJpdmVcXERlc2t0b3BcXHdvcmtcXHJldmFtcGVkLXdlYnNpdGUvc3JjXFxhcHBcXGFwcC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVFBO0VBRUMsNENBQUE7RUFDQSx5QkFBQTtBQ1JEOztBRFdBO0VBRUMsV0FBQTtFQUNBLHlCQUFBO0FDVEQ7O0FEWUE7RUFFQyxzQkFBQTtBQ1ZEOztBRGVBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0FDWko7O0FEZUE7RUFFSSxXQUFBO0VBQ0EsY0FBQTtBQ2JKOztBRG1CRTtFQUVFLHVCQUFBO0VBQ0EsV0FBQTtBQ2pCSjs7QURrQkk7RUFDRSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFFQSxzQkFBQTtBQ2pCTjs7QURrQk07RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsTUFBQTtFQUNBLFNBQUE7RUFDQSxtQkFBQTtFQUNBLE9BQUE7RUFDQSxzQkFBQTtBQ2hCUjs7QURvQk07RUFDRSxZQUFBO0FDbEJSOztBRG9CTTtFQUNFLE9BQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsNkJBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQ2xCUjs7QURtQlE7RUFFRSxXQUFBO0VBRUEsMkJBQUE7QUNuQlY7O0FEcUJRO0VBQ0Usa0NBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsK0JBQUE7QUNuQlY7O0FEcUJRO0VBQ0UsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLG9DQUFBO0FDbkJWOztBRHFCUTtFQUNSLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFD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QUNFLFlBQUE7SUFDQSxtQkFBQTtFQzNJRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGFuaW1hdGlvbi10aW1pbmc6IDI3cztcclxuJGNhcm91c2VsLWl0ZW1zOiA5O1xyXG4kYW5pbWF0aW9uLWRlbGF5LWZyYWN0aW9uOiAkYW5pbWF0aW9uLXRpbWluZyAvICRjYXJvdXNlbC1pdGVtcztcclxuJGFuaW1hdGlvbi1zdGVwcy1mcmFjdGlvbjogMTAwIC8gJGNhcm91c2VsLWl0ZW1zO1xyXG4kc2xpZGUtY2hhbmdlLXRpbWluZzogMzsgLy8gcGVyY2VudGFnZSBvZiB0b3RhbCBhbmltYXRpb24gY3ljbGVcclxuXHJcblxyXG5cclxuLmNvbnRhaW5lcjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2tcclxue1xyXG5cdGJveC1zaGFkb3c6IGluc2V0IDAgMCA2cHggcmdiYSgwLDAsMCwwLjMpO1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICNGNUY1RjU7XHJcbn1cclxuXHJcbi5jb250YWluZXI6Oi13ZWJraXQtc2Nyb2xsYmFyXHJcbntcclxuXHR3aWR0aDogMTBweDtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjRjVGNUY1O1xyXG59XHJcblxyXG4uY29udGFpbmVyOjotd2Via2l0LXNjcm9sbGJhci10aHVtYlxyXG57XHJcblx0YmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcclxufVxyXG5cclxuXHJcblxyXG4uY29udGFpbmVye1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDg4dmg7XHJcbiAgICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcclxuICAgIG92ZXJmbG93LXk6YXV0bztcclxufVxyXG5cclxuLmJveC1zZWN0aW9uXHJcbntcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZzogMTAwcHg7XHJcbn1cclxuXHJcblxyXG4vLyBSb2FkbWFwIHNlY3Rpb25cclxuXHJcbiAgLnJtLXNlY3Rpb25cclxuICB7IFxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIC5yb2FkbWFwLWJsb2Nre1xyXG4gICAgICB3aWR0aDogNTAwcHg7XHJcbiAgICAgIG1hcmdpbjogNDBweCBhdXRvO1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgXHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICY6OmFmdGVye1xyXG4gICAgICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB3aWR0aDogMTBweDtcclxuICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgYm90dG9tOiAwO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDQwcHg7XHJcbiAgICAgICAgbGVmdDogMDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xyXG4gICAgICB9XHJcblxyXG5cclxuICAgICAgLnJibG9jay1pbnNpZGU6bGFzdC1jaGlsZHtcclxuICAgICAgICBib3JkZXI6bm9uZTtcclxuICAgICAgfVxyXG4gICAgICAucmJsb2NrLWluc2lkZXtcclxuICAgICAgICBmbGV4OiAxO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDMwcHg7XHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDUwcHg7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OjMwcHg7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMzMzM7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICY6aG92ZXIgaDJ7XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgXHJcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTBweCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGgye1xyXG4gICAgICAgICAgZm9udC1mYW1pbHk6IFwiUG9pcmV0IE9uZVwiLCBjdXJzaXZlO1xyXG4gICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgdHJhbnNpdGlvbjp0cmFuc2Zvcm0gLjNzIGVhc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHB7XHJcbiAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzMzMztcclxuICAgICAgICAgIHBhZGRpbmc6MTBweDtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgICAgICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgIH1cclxuICAgICAgICAmOjphZnRlcntcclxuY29udGVudDogJyc7XHJcbnBvc2l0aW9uOiBhYnNvbHV0ZTtcclxubGVmdDogMHB4O1xyXG53aWR0aDoxNnB4O1xyXG5oZWlnaHQ6MTZweDtcclxuYm9yZGVyOjRweCBzb2xpZCByZ2IoODAsIDgwLCAyNDMpO1xyXG50b3A6IDMwcHg7XHJcbnRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMzIlKTtcclxuYm9yZGVyLXJhZGl1czogNTAlO1xyXG56LWluZGV4OiAxMTExMTtcclxuYmFja2dyb3VuZDogIzAwMDtcclxudHJhbnNpdGlvbjogYWxsIC4zcyBlYXNlO1xyXG4gICAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgfVxyXG5cclxuXHJcblxyXG4uaGVhZGluZ19ibG9ja3tcclxuICBjb2xvcjogI2ZmZjtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgaDF7XHJcbiAgICBmb250LXNpemU6IDMycHg7XHJcbiAgICBmb250LWZhbWlseTogXCJQb2lyZXQgT25lXCIsIGN1cnNpdmU7XHJcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xyXG4gIH1cclxuICAmOjphZnRlcntcclxuY29udGVudDogJyc7XHJcbnBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuaGVpZ2h0OiA1cHg7XHJcbnRvcDogLTE1cHg7XHJcbmxlZnQ6IDBweDtcclxud2lkdGg6IDUwcHg7XHJcbmJhY2tncm91bmQtY29sb3I6cmdiKDgwLCA4MCwgMjQzKTtcclxuYm9yZGVyLXJhZGl1czogMjBweDtcclxuICB9XHJcbn1cclxuXHJcbi5wYXJhX2Jsb2NrXHJcbntcclxuICBjb2xvcjogI2ZmZjtcclxuICB3aWR0aDogNTAlO1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibHVlO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XHJcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgcGFkZGluZy1ib3R0b206IDJweDtcclxufVxyXG5cclxuLmludmVzdG9yLWRlY2t7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTUsIDE1LCAxNSk7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG4gdWwge1xyXG4gICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgIHRyYW5zZm9ybTogcm90YXRlKC0yNWRlZykgc2tldygyNWRlZyk7XHJcbiAgIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XHJcbn1cclxudWwgbGkge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBsaXN0LXN0eWxlOiBub25lO1xyXG4gIHdpZHRoOiAxMjBweDtcclxuICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XHJcbiAgaGVpZ2h0OiAxMjBweDtcclxuICBtYXJnaW46IDBweCAyMHB4O1xyXG59XHJcbnVsIGxpOmJlZm9yZXtcclxuICBjb250ZW50OiAnJztcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYm90dG9tOiAtMTBweDtcclxuICBsZWZ0OiAtNXB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTBweDtcclxuICBiYWNrZ3JvdW5kOiBibHVlO1xyXG4gIHRybmFzZm9ybS1vcmlnaW46IHRvcDtcclxuICB0cmFuc2Zvcm06IHNrZXdYKC00MWRlZyk7XHJcbn1cclxudWwgbGk6YWZ0ZXJ7XHJcbiAgY29udGVudDogJyc7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDo1cHg7XHJcbiAgbGVmdDogLTlweDtcclxuICB3aWR0aDogOXB4O1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBiYWNrZ3JvdW5kOiBibHVlO1xyXG4gIHRyYXNmb3JtLW9yaWdpbjogcmlnaHQ7XHJcbiAgdHJhbnNmb3JtOiBza2V3WSgtNDlkZWcpO1xyXG59XHJcbnVsIGxpIHNwYW57XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XHJcbiAgYmFja2dyb3VuZDogYmx1ZTtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHRleHQtYWxpZ246Q2VudGVyO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGZvbnQtc2l6ZTogMThweCAhaW1wb3J0YW50O1xyXG4gIHRyYW5zaXRpb246IDEuNXMgZWFzZS1vdXQ7XHJcblxyXG59XHJcbi5iZzo6YWZ0ZXJ7XHJcbiAgY29udGVudDogJyc7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGhlaWdodDogMjVweDtcclxuICB3aWR0aDogMjVweDtcclxuICBib3R0b206IDJweDtcclxuICB6LWluZGV4OiAxMTExMTExMTtcclxuICBsZWZ0OiA1MCU7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi9hc3NldHMvaW1hZ2VzL2Rvd25sb2FkLWljb24ucG5nKTtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246ICBjZW50ZXIgY2VudGVyO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbn1cclxudWwgbGk6aG92ZXIgc3BhbiB7XHJcbiAgei1pbmRleDogMTAwMDtcclxuICB0cmFuc2l0aW9uOiAuM3M7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgYm94LXNoYWR3OiAtMXB4IDFweCAxcHggcmdiYSgwLCAwLCAwLCAuNSk7XHJcbn1cclxudWwgbGk6aG92ZXIgc3BhbjpudGgtY2hpbGQoNSl7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoNDBweCwgLTQwcHgpO1xyXG4gIG9wYWNpdHk6IDE7XHJcbn1cclxudWwgbGk6aG92ZXIgc3BhbjpudGgtY2hpbGQoNCl7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMzBweCwgLTMwcHgpO1xyXG4gIG9wYWNpdHk6IC44O1xyXG59XHJcbnVsIGxpOmhvdmVyIHNwYW46bnRoLWNoaWxkKDMpe1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDIwcHgsIC0yMHB4KTtcclxuICBvcGFjaXR5OiAuNjtcclxufVxyXG51bCBsaTpob3ZlciBzcGFuOm50aC1jaGlsZCgyKXtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgxMHB4LCAtMTBweCk7XHJcbiAgb3BhY2l0eTogLjQ7XHJcbn11bCBsaTpob3ZlciBzcGFuOm50aC1jaGlsZCgxKXtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwcHgsIDBweCk7XHJcbiAgb3BhY2l0eTogLjI7XHJcbn1cclxudWwgbGk6bnRoLWNoaWxkKDEpOmhvdmVyIHNwYW57XHJcbiAgYmFja2dyb3VuZDogI0Q2OUEzOCAhaW1wb3J0YW50O1xyXG59XHJcbnVsIGxpOm50aC1jaGlsZCgyKTpob3ZlciBzcGFue1xyXG4gIGJhY2tncm91bmQ6ICMwODU3NTQgIWltcG9ydGFudDtcclxufVxyXG51bCBsaTpudGgtY2hpbGQoMyk6aG92ZXIgc3BhbntcclxuICBiYWNrZ3JvdW5kOiAjREEyQTJBICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxyXG4ud3JhcHBlciB7XHJcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgaGVpZ2h0OiAzMDBweDtcclxuICB3aWR0aDogMTAwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4uY2Fyb3VzZWwge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXgtd2lkdGg6IDMwMHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxuLmNhcm91c2VsX19pdGVtIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmc6IDAgMTJweDtcclxuICBvcGFjaXR5OiAwO1xyXG4gIGZpbHRlcjogZHJvcC1zaGFkb3coMCAycHggMnB4ICM1NTUpO1xyXG4gIHdpbGwtY2hhbmdlOiB0cmFuc2Zvcm0sIG9wYWNpdHk7XHJcbiAgYW5pbWF0aW9uOiBjYXJvdXNlbC1hbmltYXRlLXZlcnRpY2FsICRhbmltYXRpb24tdGltaW5nIGxpbmVhciBpbmZpbml0ZTtcclxufVxyXG5cclxuQGZvciAkaSBmcm9tIDEgdGhyb3VnaCAoJGNhcm91c2VsLWl0ZW1zIC0gMSkgeyBcclxuICAuY2Fyb3VzZWxfX2l0ZW06bnRoLWNoaWxkKCN7JGl9KSB7XHJcbiAgICBhbmltYXRpb24tZGVsYXk6IGNhbGMoI3skYW5pbWF0aW9uLWRlbGF5LWZyYWN0aW9ufSAqICN7JGkgLSAyfSk7XHJcbiAgfVxyXG59XHJcblxyXG4uY2Fyb3VzZWxfX2l0ZW06bGFzdC1jaGlsZCB7XHJcbiAgYW5pbWF0aW9uLWRlbGF5OiBjYWxjKC0jeyRhbmltYXRpb24tZGVsYXktZnJhY3Rpb259ICogMik7XHJcbn1cclxuXHJcbi8vIGV4YW1wbGUgd2l0aG91dCBuZWdhdGl2ZSBkZWxheXNcclxuLy8gQGZvciAkaSBmcm9tIDEgdGhyb3VnaCAoJGNhcm91c2VsLWl0ZW1zKSB7IFxyXG4vLyAgIC5jYXJvdXNlbF9faXRlbTpudGgtY2hpbGQoI3skaX0pIHtcclxuLy8gICAgIGFuaW1hdGlvbi1kZWxheTogY2FsYygjeyRhbmltYXRpb24tZGVsYXktZnJhY3Rpb259ICogI3skaX0pO1xyXG4vLyAgIH1cclxuLy8gfVxyXG5cclxuLmNhcm91c2VsX19pdGVtLWhlYWQge1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQxLCAyNDEsIDI0MSk7XHJcbiAgd2lkdGg6IDEyMHB4O1xyXG4gIGhlaWdodDogMTIwcHg7XHJcbiAgcGFkZGluZzogNXB4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBtYXJnaW4tcmlnaHQ6IC00NXB4O1xyXG4gIGZsZXgtc2hyaW5rOiAwO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBmb250LXNpemU6IDUwcHg7XHJcbn1cclxuLmNhcm91c2VsX19pdGVtLWhlYWQgaW1ne1xyXG4gIGhlaWdodDogODAlO1xyXG4gIHdpZHRoOiA4MCU7XHJcbiAgb2JqZWN0LWZpdDogY29udGFpbjtcclxufVxyXG4uY2Fyb3VzZWxfX2l0ZW0tYm9keSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICBwYWRkaW5nOiAxNnB4IDIwcHggMTZweCA3MHB4O1xyXG59XHJcblxyXG4udGl0bGUge1xyXG4gIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxuICBjb2xvcjogYmx1ZTtcclxufVxyXG5cclxuQGtleWZyYW1lcyBjYXJvdXNlbC1hbmltYXRlLXZlcnRpY2FsIHtcclxuICAwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTAwJSkgc2NhbGUoMC41KTtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgfVxyXG4gICN7JHNsaWRlLWNoYW5nZS10aW1pbmd9JSxcclxuICAjeyRhbmltYXRpb24tc3RlcHMtZnJhY3Rpb259JSB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTAwJSkgc2NhbGUoMC43KTtcclxuICAgIG9wYWNpdHk6IC40O1xyXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcclxuICB9XHJcbiAgI3skYW5pbWF0aW9uLXN0ZXBzLWZyYWN0aW9uICsgJHNsaWRlLWNoYW5nZS10aW1pbmd9JSxcclxuICAjeyRhbmltYXRpb24tc3RlcHMtZnJhY3Rpb24gKiAyfSUge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApIHNjYWxlKDEpO1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbiAgfVxyXG4gICN7KCRhbmltYXRpb24tc3RlcHMtZnJhY3Rpb24gKiAyKSArICRzbGlkZS1jaGFuZ2UtdGltaW5nfSUsXHJcbiAgI3skYW5pbWF0aW9uLXN0ZXBzLWZyYWN0aW9uICogM30lIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTAwJSkgc2NhbGUoMC43KTtcclxuICAgIG9wYWNpdHk6IC40O1xyXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcclxuICB9XHJcbiAgI3soJGFuaW1hdGlvbi1zdGVwcy1mcmFjdGlvbiAqIDMpICsgJHNsaWRlLWNoYW5nZS10aW1pbmd9JSB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwMCUpIHNjYWxlKDAuNSk7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwMCUpIHNjYWxlKDAuNSk7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gIH1cclxufVxyXG5cclxuXHJcbi50ZWFtX3NlY3Rpb25cclxue1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxNSwgMTUsIDE1KTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgJjo6YWZ0ZXJ7XHJcbiAgICBjb250ZW50OiAnJztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICB3aWR0aDogMTAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xyXG4gICAgcmlnaHQ6IDUwcHg7XHJcbiAgICB0b3A6IC01MHB4O1xyXG4gICAgdHJhbnNmb3JtOnJvdGF0ZVooNDVkZWcpO1xyXG4gIH1cclxuXHJcblxyXG4gIC50ZWFtLW1haW57XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgaGVpZ2h0OiA0MDBweDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAudGVhbV9oZWFke1xyXG4gICAgICB3aWR0aDogNTAwcHg7XHJcbiAgICAgIGhlaWdodDogMjUwcHg7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgICAgcGFkZGluZzogMTBweCAwcHg7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgICAubGV2ZWwtb25lXHJcbiAgICAgIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgIGgye1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcclxuICAgICAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAzMHB4O1xyXG4gICAgICAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDMwcHg7XHJcbiAgICAgICAgICBwYWRkaW5nOiA2cHggMTJweDtcclxuICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDUwcHg7XHJcbiAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIlBvaXJldCBPbmVcIiwgY3Vyc2l2ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaW1ne1xyXG4gICAgICAgICAgaGVpZ2h0OiAxMDBweDtcclxuICAgICAgICAgIHdpZHRoOiAxMDBweDtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgIG1hcmdpbi1yaWdodDogMjBweDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgLmxldmVsLXR3b3tcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICBwYWRkaW5nOiAwcHggMTBweDtcclxuICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgIFxyXG5cclxuICAgICAgICAubGVmdC1sZXZlbHtcclxuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICY6OmFmdGVye1xyXG4gICAgICAgICAgICBjb250ZW50OiAnJztcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDNweDtcclxuICAgICAgICAgICAgd2lkdGg6IDQwJTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDgwLCA4MCwgMjQzKTtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMzBweDtcclxuICAgICAgICAgICAgdG9wOiAtMTVweDtcclxuICAgICAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAmOjpiZWZvcmV7XHJcbiAgICAgICAgICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIGhlaWdodDogM3B4O1xyXG4gICAgICAgICAgICB3aWR0aDogMTYlO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoODAsIDgwLCAyNDMpO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xyXG4gICAgICAgICAgICB0b3A6IC0yNXB4O1xyXG4gICAgICAgICAgICByaWdodDogMDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGgye1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDRweDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxuICAgICAgICAgICAgY29sb3I6ICMwMDA7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgcHtcclxudGV4dC1hbGlnbjogcmlnaHQ7XHJcbmZvbnQtc2l6ZTogMTRweDtcclxuZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbmNvbG9yOiAjMDAwO1xyXG5mb250LWZhbWlseTogXCJPcGVuIFNhbnNcIiwgc2Fucy1zZXJpZjtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgYXtcclxuICAgICAgICAgIHBhZGRpbmc6IDEwcHggMzBweDtcclxuICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwNzhENDtcclxuICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIlBvaXJldCBPbmVcIiwgY3Vyc2l2ZTtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC50ZWFtLW1lbWJlcnNcclxuICAgIHtcclxuICAgICAgZmxleDogMTtcclxuICAgIH1cclxuICB9XHJcbiBcclxufVxyXG5cclxuXHJcblxyXG4uZ29kZWwtc2VjXHJcbntcclxuICBpbWd7XHJcbiAgICB3aWR0aDogNTAwcHg7XHJcbiAgICBvYmplY3QtZml0OiBjb250YWluO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNDBweDtcclxuICB9XHJcbiAgYmFja2dyb3VuZDogIzAwMDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgaDF7XHJcbiAgICBmb250LWZhbWlseTogXCJQb2lyZXQgT25lXCIsIGN1cnNpdmU7XHJcbiAgICBmb250LXNpemU6IDQycHg7XHJcbiAgfVxyXG4gIHB7XHJcbiAgICBtYXgtd2lkdGg6IDcwJTtcclxuICAgIG1hcmdpbjogMjBweCBhdXRvO1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgY29sb3I6ICNlZmVmZWY7XHJcbiAgICBsaW5lLWhlaWdodDogMzJweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIiwgc2Fucy1zZXJpZjtcclxuICB9XHJcbiAgLmJ0bi1jb250YWluZXJcclxuICB7XHJcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYXtcclxuICAgICAgcGFkZGluZzogMTJweCAyNHB4O1xyXG4gICAgICBmb250LWZhbWlseTogXCJQb2lyZXQgT25lXCIsIGN1cnNpdmU7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbiAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgIGJhY2tncm91bmQ6IGJsdWU7XHJcbiAgICAgIG1hcmdpbjogMHB4IDEwcHg7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgfVxyXG4gICAgLmRpZmYtYnRue1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgICBjb2xvcjogYmx1ZTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcblxyXG4uZm9vdGVyLXNlY3tcclxuICBwYWRkaW5nOiAzMHB4IDEwMHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYmFja2dyb3VuZDogIzBmMGYwZjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBpbWd7XHJcbiAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gIH1cclxuICAubGlua3Mtc2VjXHJcbiAge1xyXG4gICAgYXtcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICBtYXJnaW46IDE1cHggMHB4O1xyXG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiBcIlBvaXJldCBPbmVcIiwgY3Vyc2l2ZTtcclxuICAgICAgc3BhbntcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgYmFja2dyb3VuZDogYmx1ZTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDhweCAxMnB4O1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCIsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuXHJcblxyXG4ubWFpbi1zZWN0aW9ue1xyXG4gIGhlaWdodDo4OHZoO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLm1haW4tc2VjdGlvbiB2aWRlb3tcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogMDtcclxuICB0b3A6IDA7XHJcbiAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG59XHJcblxyXG4ubWFpbi1zZWN0aW9uIC5jb250ZW50e1xyXG4gIG1hcmdpbjogYXV0bztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1LCA5OSwgMjUxLCAuNSk7ICBcclxuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoNXB4KTtcclxuICBjb2xvcjogI2ZmZjtcclxuICB3aWR0aDogODAwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG5cclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgcGFkZGluZzogMjBweDtcclxuICBoMXtcclxuICAgIGZvbnQtc2l6ZTogMzRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbiAgICBmb250LWZhbWlseTogXCJQb2lyZXQgT25lXCIsIGN1cnNpdmU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gIH1cclxuICBwe1xyXG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDMwcHg7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgfVxyXG4gIC8vICY6YmVmb3Jle1xyXG4gIC8vICAgY29udGVudDogJyc7XHJcbiAgLy8gICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgLy8gICB0b3A6IDA7XHJcbiAgLy8gICBsZWZ0OiAwO1xyXG4gIC8vICAgcmlnaHQ6IDA7XHJcbiAgLy8gICBib3R0b206IDA7XHJcbiAgLy8gICBib3gtc2hhZG93OiBpbnNldCAwIDAgMjAwMHB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgLjUpO1xyXG4gIC8vICAgZmlsdGVyOiBibHVyKDEwcHgpO1xyXG4gIC8vICAgYmFja2dyb3VuZDogaW5oZXJpdDtcclxuICAvLyAgfVxyXG59XHJcblxyXG5cclxuLndoYXQtc2VjdGlvblxyXG57XHJcbiAgYmFja2dyb3VuZDogIzAwMDtcclxufVxyXG5cclxuLmJ1bGxldF9wb2ludHN7XHJcbiAgbWFyZ2luLXRvcDogMzBweDtcclxuICBwe1xyXG4gICAgICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xyXG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XHJcbiAgcGFkZGluZy1sZWZ0OiAzMHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAmOjphZnRlcntcclxuICAgICAgY29udGVudDogJyc7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgaGVpZ2h0OiAxMHB4O1xyXG4gICAgICB3aWR0aDogMTBweDtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDgwLCA4MCwgMjQzKTtcclxuICAgICAgbGVmdDogMHB4O1xyXG4gICAgICB0b3A6IDEwcHg7XHJcbiAgfVxyXG4gIH1cclxufVxyXG5cclxuXHJcblxyXG4uZGV2ZWxvcGVyLXNlY3tcclxuICBiYWNrZ3JvdW5kOiAjMDAwO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAubGVmdC1ib3hcclxuICB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIHBhZGRpbmctdG9wOiAzMHB4O1xyXG4gICAgLmRldi1ib3h7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgIG1heC13aWR0aDogMzIwcHg7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbi5pbWctYm94e1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgaGVpZ2h0OiAyMDBweDtcclxuICBpbWd7XHJcbmhlaWdodDogaW5oZXJpdDtcclxud2lkdGg6IGluaGVyaXQ7XHJcbm9iamVjdC1maXQ6IGNvbnRhaW47XHJcbiAgfVxyXG59XHJcbiAgLnRleHQtYm94e1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEyMHB4O1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoODAsIDgwLCAyNDMpO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIHB7XHJcbiAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcclxuICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICBsaW5lLWhlaWdodDogMjBweDtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4gICAgfVxyXG4gICAgXHJcbiAgfVxyXG5cclxuXHJcblxyXG5cclxuLy8gLm9uZXtcclxuLy8gIGJhY2tncm91bmQtY29sb3I6IHJnYig4MCwgODAsIDI0Myk7XHJcbi8vIH1cclxuXHJcbi8vIC50d297XHJcbi8vICAgYm9yZGVyLWxlZnQ6MXB4IHNvbGlkICMyYjJiMmI7XHJcbi8vICAgYm9yZGVyLWJvdHRvbToxcHggc29saWQgIzJiMmIyYjtcclxuLy8gICBib3JkZXItcmlnaHQ6MXB4IHNvbGlkICMyYjJiMmI7XHJcbi8vIH1cclxuXHJcbi8vIC50aHJlZXtcclxuLy8gICBib3JkZXItdG9wOjFweCBzb2xpZCAjMmIyYjJiO1xyXG4vLyAgIGJvcmRlci1yaWdodDoxcHggc29saWQgIzJiMmIyYjtcclxuLy8gfVxyXG5cclxuLy8gLmZvdXJ7XHJcbi8vICAgYm9yZGVyLXRvcDoxcHggc29saWQgIzJiMmIyYjtcclxuLy8gICBib3JkZXItbGVmdDoxcHggc29saWQgIzJiMmIyYjtcclxuLy8gICBib3JkZXItcmlnaHQ6MXB4IHNvbGlkICMyYjJiMmI7XHJcbi8vIH1cclxuLy8gLmZpdmV7XHJcbi8vICAgYm9yZGVyLWxlZnQ6MXB4IHNvbGlkICMyYjJiMmI7XHJcbi8vICAgYm9yZGVyLWJvdHRvbToxcHggc29saWQgIzJiMmIyYjtcclxuLy8gfVxyXG5cclxuLy8gLnNpeHtcclxuLy8gICBib3JkZXItbGVmdDoxcHggc29saWQgIzJiMmIyYjtcclxuLy8gICBib3JkZXItdG9wOjFweCBzb2xpZCAjMmIyYjJiO1xyXG4vLyB9XHJcblxyXG5cclxuXHJcbi5yaWdodC1ib3h4e1xyXG4gIGhlaWdodDogNDAwcHg7XHJcbiAgd2lkdGg6IDQwMHB4O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vYXNzZXRzL2ltYWdlcy9pbnZlc3Rvci1kZWNrLnBuZyk7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICByaWdodDogMHB4O1xyXG4gICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA0cHg7XHJcbiAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDRweDtcclxuICB0b3A6IDUwJTtcclxuICB6LWluZGV4OiA5OTk5O1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xyXG4gICY6OmFmdGVye1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICBoZWlnaHQ6IDI1JTtcclxuICAgIHdpZHRoOiAyNSU7XHJcbiAgICBib3JkZXItbGVmdDogMjBweCBzb2xpZCByZ2IoODAsIDgwLCAyNDMpO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMjBweCBzb2xpZCByZ2IoODAsIDgwLCAyNDMpO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA0cHg7XHJcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA0cHg7XHJcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNHB4O1xyXG4gICAgei1pbmRleDogMTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogLTE5cHg7XHJcbiAgICBsZWZ0OiAtMTlweDtcclxuICB9XHJcbn1cclxuXHJcblxyXG5cclxuLmtpbGxlci1hcHBze1xyXG4gIGJhY2tncm91bmQ6ICMwMDA7XHJcbn1cclxuXHJcblxyXG4ua2lsbGVyLXBvaW50c1xyXG57XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICBwe1xyXG4gICAgZmxleDogMTtcclxuICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xyXG4gIH1cclxuXHJcbiAgLnB1bHNlLWNpcmNsZSB7XHJcbiAgICBzdHJva2U6IHJnYig4MCwgODAsIDI0Myk7XHJcbiAgfVxyXG4gIFxyXG5cclxuXHJcbn1cclxuXHJcblxyXG5cclxuXHJcbmNpcmNsZSB7XHJcbiAgZmlsbDogIHJnYig4MCwgODAsIDI0Myk7XHJcbiAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyO1xyXG59XHJcblxyXG4ucHVsc2UtY2lyY2xlLFxyXG4ucHVsc2UtY2lyY2xlLTIge1xyXG4gIHN0cm9rZTogIHJnYig4MCwgODAsIDI0Myk7XHJcbiAgc3Ryb2tlLXdpZHRoOiAycHg7XHJcbiAgZmlsbDogbm9uZTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xyXG59XHJcblxyXG4ucHVsc2UtY2lyY2xlIHtcclxuICAgIFxyXG4gIGFuaW1hdGlvbjogcHVsc2UgMS41cyAxcyBjdWJpYy1iZXppZXIoMC4zOSwgMC41NCwgMC40MSwgMS41KSBpbmZpbml0ZSBhbHRlcm5hdGU7XHJcbn1cclxuXHJcbi5wdWxzZS1jaXJjbGUtMiB7XHJcbiAgYW5pbWF0aW9uOiBwdWxzZS0yIDEuNXMgY3ViaWMtYmV6aWVyKDAuMzksIDAuNTQsIDAuNDEsIDEuNSkgaW5maW5pdGUgYWx0ZXJuYXRlO1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIHB1bHNlIHtcclxuICAwJSB7XHJcbiAgICByOiA0O1xyXG4gIH1cclxuICA1MCUge1xyXG4gICAgcjogMTY7XHJcbiAgfVxyXG4gIDYwJSB7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgfVxyXG59XHJcbkBrZXlmcmFtZXMgcHVsc2UtMiB7XHJcbiAgMCUsXHJcbiAgNTAlIHtcclxuICAgIHI6IDQ7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgcjogMTY7XHJcbiAgfVxyXG59XHJcblxyXG5cclxuLmxpbmstYm94XHJcbntcclxuICB3aWR0aDogaW5oZXJpdDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgd2lkdGg6IDMyMHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYXtcclxuICAgIHBhZGRpbmc6IDEycHggMjRweDtcclxuICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIG1heC13aWR0aDogMTgwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiBibHVlO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIH1cclxufVxyXG5cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NDgwcHgpe1xyXG5cclxuICAubWFpbi1zZWN0aW9uIC5jb250ZW50e1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBoMXtcclxuICAgICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgfVxyXG4gICAgcHtcclxuICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgbGluZS1oZWlnaHQ6IDI2cHg7XHJcbiAgICBcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5ib3gtc2VjdGlvblxyXG57XHJcbiAgICBwYWRkaW5nOiA1MHB4IDEwcHg7XHJcbn1cclxuXHJcbi5oZWFkaW5nX2Jsb2Nre1xyXG4gIFxyXG4gIGgxe1xyXG4gICAgZm9udC1zaXplOiAyOHB4O1xyXG4gIH1cclxuICAmOjphZnRlcntcclxuXHJcbmhlaWdodDogNHB4O1xyXG5cclxuICB9XHJcbn1cclxuXHJcblxyXG4uZ29kZWwtc2VjXHJcbntcclxuICBpbWd7XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuICB9XHJcblxyXG4gIGgxe1xyXG4gICBcclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICB9XHJcbiAgcHtcclxuICAgIG1heC13aWR0aDogOTAlO1xyXG4gIFxyXG4gIH1cclxuICBcclxufVxyXG5cclxuXHJcblxyXG5cclxuLnRlYW1fc2VjdGlvblxyXG57XHJcblxyXG4gICY6OmFmdGVye1xyXG4gXHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICB3aWR0aDogNTBweDtcclxuICBcclxuICAgIHRvcDogLTMwcHg7XHJcbiAgICBcclxuICB9XHJcblxyXG5cclxuICAudGVhbS1tYWlue1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIHBhZGRpbmc6NDBweCAwcHg7XHJcbiAgICBmbGV4LXdyYXA6d3JhcDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAudGVhbV9oZWFke1xyXG4gICAgICB3aWR0aDogNTAwcHg7XHJcbiAgICAgIGhlaWdodDogMjUwcHg7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgICAgcGFkZGluZzogMTBweCAwcHg7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgICAubGV2ZWwtb25lXHJcbiAgICAgIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgIGgye1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcclxuICAgICAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAzMHB4O1xyXG4gICAgICAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDMwcHg7XHJcbiAgICAgICAgICBwYWRkaW5nOiA2cHggMTJweDtcclxuICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDUwcHg7XHJcbiAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIlBvaXJldCBPbmVcIiwgY3Vyc2l2ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaW1ne1xyXG4gICAgICAgICAgaGVpZ2h0OiAxMDBweDtcclxuICAgICAgICAgIHdpZHRoOiAxMDBweDtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgIG1hcmdpbi1yaWdodDogMjBweDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgLmxldmVsLXR3b3tcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICBwYWRkaW5nOiAwcHggMTBweDtcclxuICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgIFxyXG5cclxuICAgICAgICAubGVmdC1sZXZlbHtcclxuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICY6OmFmdGVye1xyXG4gICAgICAgICAgICBjb250ZW50OiAnJztcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDNweDtcclxuICAgICAgICAgICAgd2lkdGg6IDQwJTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDgwLCA4MCwgMjQzKTtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMzBweDtcclxuICAgICAgICAgICAgdG9wOiAtMTVweDtcclxuICAgICAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAmOjpiZWZvcmV7XHJcbiAgICAgICAgICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIGhlaWdodDogM3B4O1xyXG4gICAgICAgICAgICB3aWR0aDogMTYlO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoODAsIDgwLCAyNDMpO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xyXG4gICAgICAgICAgICB0b3A6IC0yNXB4O1xyXG4gICAgICAgICAgICByaWdodDogMDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGgye1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDRweDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxuICAgICAgICAgICAgY29sb3I6ICMwMDA7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgcHtcclxudGV4dC1hbGlnbjogcmlnaHQ7XHJcbmZvbnQtc2l6ZTogMTRweDtcclxuZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbmNvbG9yOiAjMDAwO1xyXG5mb250LWZhbWlseTogXCJPcGVuIFNhbnNcIiwgc2Fucy1zZXJpZjtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgYXtcclxuICAgICAgICAgIHBhZGRpbmc6IDEwcHggMzBweDtcclxuICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwNzhENDtcclxuICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIlBvaXJldCBPbmVcIiwgY3Vyc2l2ZTtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC50ZWFtLW1lbWJlcnNcclxuICAgIHtcclxuICAgICAgbWFyZ2luLXRvcDogNTBweDtcclxuICAgICAgZmxleDogMTtcclxuICAgIH1cclxuICB9XHJcbiBcclxufVxyXG5cclxuXHJcblxyXG4vLyBSb2FkbWFwIHNlY3Rpb25cclxuXHJcbi5ybS1zZWN0aW9uXHJcbnsgXHJcblxyXG4gIC5yb2FkbWFwLWJsb2Nre1xyXG4gICAgd2lkdGg6MTAwJSFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcblxyXG5cclxuLnJpZ2h0LWJveHh7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuXHJcblxyXG5cclxuIHVsIHtcclxuICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgIGZsZXgtd3JhcDp3cmFwO1xyXG4gICB0cmFuc2Zvcm06IG5vbmU7XHJcbiAgIG1hcmdpbi10b3A6IDEwMHB4O1xyXG59XHJcbnVsIGxpe1xyXG4gIGhlaWdodDoxMzBweDtcclxuICB3aWR0aDogMTMwcHg7XHJcbiAgbWFyZ2luOiAyMHB4IDBweDtcclxufVxyXG5cclxuXHJcbi5kZXZlbG9wZXItc2Vje1xyXG5cclxuICAubGVmdC1ib3hcclxuICB7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICB9XHJcbn1cclxuXHJcblxyXG5cclxuLmtpbGxlci1wb2ludHN7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIHN2Z3tcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIHdpZHRoOiA1MHB4O1xyXG4gIH1cclxufVxyXG5cclxuLmNvbnRhaW5lcntcclxuICBoZWlnaHQ6IDkwdmg7XHJcblxyXG59XHJcblxyXG4uZm9vdGVyLXNlY3tcclxuICBwYWRkaW5nOiAzMHB4IDEwcHg7XHJcbiAgZmxleC13cmFwOndyYXA7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgaW1ne1xyXG4gICAgaGVpZ2h0OiA3MHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTo1MHB4O1xyXG4gIH1cclxuXHJcbn1cclxufSIsIi5jb250YWluZXI6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDZweCByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGNUY1RjU7XG59XG5cbi5jb250YWluZXI6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgd2lkdGg6IDEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGNUY1RjU7XG59XG5cbi5jb250YWluZXI6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcbn1cblxuLmNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDg4dmg7XG4gIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xuICBvdmVyZmxvdy15OiBhdXRvO1xufVxuXG4uYm94LXNlY3Rpb24ge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMTAwcHg7XG59XG5cbi5ybS1zZWN0aW9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gIGNvbG9yOiAjZmZmO1xufVxuLnJtLXNlY3Rpb24gLnJvYWRtYXAtYmxvY2sge1xuICB3aWR0aDogNTAwcHg7XG4gIG1hcmdpbjogNDBweCBhdXRvO1xuICBkaXNwbGF5OiBmbGV4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG4ucm0tc2VjdGlvbiAucm9hZG1hcC1ibG9jazo6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMHB4O1xuICB0b3A6IDA7XG4gIGJvdHRvbTogMDtcbiAgYm9yZGVyLXJhZGl1czogNDBweDtcbiAgbGVmdDogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMzMztcbn1cbi5ybS1zZWN0aW9uIC5yb2FkbWFwLWJsb2NrIC5yYmxvY2staW5zaWRlOmxhc3QtY2hpbGQge1xuICBib3JkZXI6IG5vbmU7XG59XG4ucm0tc2VjdGlvbiAucm9hZG1hcC1ibG9jayAucmJsb2NrLWluc2lkZSB7XG4gIGZsZXg6IDE7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBhZGRpbmctdG9wOiAzMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogNTBweDtcbiAgcGFkZGluZy1sZWZ0OiAzMHB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzMzMztcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4ucm0tc2VjdGlvbiAucm9hZG1hcC1ibG9jayAucmJsb2NrLWluc2lkZTpob3ZlciBoMiB7XG4gIGNvbG9yOiAjZmZmO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTBweCk7XG59XG4ucm0tc2VjdGlvbiAucm9hZG1hcC1ibG9jayAucmJsb2NrLWluc2lkZSBoMiB7XG4gIGZvbnQtZmFtaWx5OiBcIlBvaXJldCBPbmVcIiwgY3Vyc2l2ZTtcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBjb2xvcjogI2ZmZjtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgZWFzZTtcbn1cbi5ybS1zZWN0aW9uIC5yb2FkbWFwLWJsb2NrIC5yYmxvY2staW5zaWRlIHAge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xuICBwYWRkaW5nOiAxMHB4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiLCBzYW5zLXNlcmlmO1xufVxuLnJtLXNlY3Rpb24gLnJvYWRtYXAtYmxvY2sgLnJibG9jay1pbnNpZGU6OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwcHg7XG4gIHdpZHRoOiAxNnB4O1xuICBoZWlnaHQ6IDE2cHg7XG4gIGJvcmRlcjogNHB4IHNvbGlkICM1MDUwZjM7XG4gIHRvcDogMzBweDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0zMiUpO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHotaW5kZXg6IDExMTExO1xuICBiYWNrZ3JvdW5kOiAjMDAwO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xufVxuXG4uaGVhZGluZ19ibG9jayB7XG4gIGNvbG9yOiAjZmZmO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uaGVhZGluZ19ibG9jayBoMSB7XG4gIGZvbnQtc2l6ZTogMzJweDtcbiAgZm9udC1mYW1pbHk6IFwiUG9pcmV0IE9uZVwiLCBjdXJzaXZlO1xuICBmb250LXdlaWdodDogYm9sZGVyO1xuICBsZXR0ZXItc3BhY2luZzogMC41cHg7XG59XG4uaGVhZGluZ19ibG9jazo6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGhlaWdodDogNXB4O1xuICB0b3A6IC0xNXB4O1xuICBsZWZ0OiAwcHg7XG4gIHdpZHRoOiA1MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTA1MGYzO1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xufVxuXG4ucGFyYV9ibG9jayB7XG4gIGNvbG9yOiAjZmZmO1xuICB3aWR0aDogNTAlO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgYmx1ZTtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIiwgc2Fucy1zZXJpZjtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIHBhZGRpbmctYm90dG9tOiAycHg7XG59XG5cbi5pbnZlc3Rvci1kZWNrIHtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzBmMGYwZjtcbiAgZGlzcGxheTogZmxleDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG51bCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTI1ZGVnKSBza2V3KDI1ZGVnKTtcbiAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcbn1cblxudWwgbGkge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIHdpZHRoOiAxMjBweDtcbiAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCIsIHNhbnMtc2VyaWY7XG4gIGhlaWdodDogMTIwcHg7XG4gIG1hcmdpbjogMHB4IDIwcHg7XG59XG5cbnVsIGxpOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAtMTBweDtcbiAgbGVmdDogLTVweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTBweDtcbiAgYmFja2dyb3VuZDogYmx1ZTtcbiAgdHJuYXNmb3JtLW9yaWdpbjogdG9wO1xuICB0cmFuc2Zvcm06IHNrZXdYKC00MWRlZyk7XG59XG5cbnVsIGxpOmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDVweDtcbiAgbGVmdDogLTlweDtcbiAgd2lkdGg6IDlweDtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kOiBibHVlO1xuICB0cmFzZm9ybS1vcmlnaW46IHJpZ2h0O1xuICB0cmFuc2Zvcm06IHNrZXdZKC00OWRlZyk7XG59XG5cbnVsIGxpIHNwYW4ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kOiBibHVlO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgdGV4dC1hbGlnbjogQ2VudGVyO1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1zaXplOiAxOHB4ICFpbXBvcnRhbnQ7XG4gIHRyYW5zaXRpb246IDEuNXMgZWFzZS1vdXQ7XG59XG5cbi5iZzo6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGhlaWdodDogMjVweDtcbiAgd2lkdGg6IDI1cHg7XG4gIGJvdHRvbTogMnB4O1xuICB6LWluZGV4OiAxMTExMTExMTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi9hc3NldHMvaW1hZ2VzL2Rvd25sb2FkLWljb24ucG5nKTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cblxudWwgbGk6aG92ZXIgc3BhbiB7XG4gIHotaW5kZXg6IDEwMDA7XG4gIHRyYW5zaXRpb246IDAuM3M7XG4gIGNvbG9yOiAjZmZmO1xuICBib3gtc2hhZHc6IC0xcHggMXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuNSk7XG59XG5cbnVsIGxpOmhvdmVyIHNwYW46bnRoLWNoaWxkKDUpIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoNDBweCwgLTQwcHgpO1xuICBvcGFjaXR5OiAxO1xufVxuXG51bCBsaTpob3ZlciBzcGFuOm50aC1jaGlsZCg0KSB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDMwcHgsIC0zMHB4KTtcbiAgb3BhY2l0eTogMC44O1xufVxuXG51bCBsaTpob3ZlciBzcGFuOm50aC1jaGlsZCgzKSB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDIwcHgsIC0yMHB4KTtcbiAgb3BhY2l0eTogMC42O1xufVxuXG51bCBsaTpob3ZlciBzcGFuOm50aC1jaGlsZCgyKSB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDEwcHgsIC0xMHB4KTtcbiAgb3BhY2l0eTogMC40O1xufVxuXG51bCBsaTpob3ZlciBzcGFuOm50aC1jaGlsZCgxKSB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDBweCwgMHB4KTtcbiAgb3BhY2l0eTogMC4yO1xufVxuXG51bCBsaTpudGgtY2hpbGQoMSk6aG92ZXIgc3BhbiB7XG4gIGJhY2tncm91bmQ6ICNENjlBMzggIWltcG9ydGFudDtcbn1cblxudWwgbGk6bnRoLWNoaWxkKDIpOmhvdmVyIHNwYW4ge1xuICBiYWNrZ3JvdW5kOiAjMDg1NzU0ICFpbXBvcnRhbnQ7XG59XG5cbnVsIGxpOm50aC1jaGlsZCgzKTpob3ZlciBzcGFuIHtcbiAgYmFja2dyb3VuZDogI0RBMkEyQSAhaW1wb3J0YW50O1xufVxuXG4ud3JhcHBlciB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBoZWlnaHQ6IDMwMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5jYXJvdXNlbCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogMzAwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4uY2Fyb3VzZWxfX2l0ZW0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAwIDEycHg7XG4gIG9wYWNpdHk6IDA7XG4gIGZpbHRlcjogZHJvcC1zaGFkb3coMCAycHggMnB4ICM1NTUpO1xuICB3aWxsLWNoYW5nZTogdHJhbnNmb3JtLCBvcGFjaXR5O1xuICBhbmltYXRpb246IGNhcm91c2VsLWFuaW1hdGUtdmVydGljYWwgMjdzIGxpbmVhciBpbmZpbml0ZTtcbn1cblxuLmNhcm91c2VsX19pdGVtOm50aC1jaGlsZCgxKSB7XG4gIGFuaW1hdGlvbi1kZWxheTogY2FsYygzcyAqIC0xKTtcbn1cblxuLmNhcm91c2VsX19pdGVtOm50aC1jaGlsZCgyKSB7XG4gIGFuaW1hdGlvbi1kZWxheTogY2FsYygzcyAqIDApO1xufVxuXG4uY2Fyb3VzZWxfX2l0ZW06bnRoLWNoaWxkKDMpIHtcbiAgYW5pbWF0aW9uLWRlbGF5OiBjYWxjKDNzICogMSk7XG59XG5cbi5jYXJvdXNlbF9faXRlbTpudGgtY2hpbGQoNCkge1xuICBhbmltYXRpb24tZGVsYXk6IGNhbGMoM3MgKiAyKTtcbn1cblxuLmNhcm91c2VsX19pdGVtOm50aC1jaGlsZCg1KSB7XG4gIGFuaW1hdGlvbi1kZWxheTogY2FsYygzcyAqIDMpO1xufVxuXG4uY2Fyb3VzZWxfX2l0ZW06bnRoLWNoaWxkKDYpIHtcbiAgYW5pbWF0aW9uLWRlbGF5OiBjYWxjKDNzICogNCk7XG59XG5cbi5jYXJvdXNlbF9faXRlbTpudGgtY2hpbGQoNykge1xuICBhbmltYXRpb24tZGVsYXk6IGNhbGMoM3MgKiA1KTtcbn1cblxuLmNhcm91c2VsX19pdGVtOm50aC1jaGlsZCg4KSB7XG4gIGFuaW1hdGlvbi1kZWxheTogY2FsYygzcyAqIDYpO1xufVxuXG4uY2Fyb3VzZWxfX2l0ZW06bGFzdC1jaGlsZCB7XG4gIGFuaW1hdGlvbi1kZWxheTogY2FsYygtM3MgKiAyKTtcbn1cblxuLmNhcm91c2VsX19pdGVtLWhlYWQge1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMWYxZjE7XG4gIHdpZHRoOiAxMjBweDtcbiAgaGVpZ2h0OiAxMjBweDtcbiAgcGFkZGluZzogNXB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbi1yaWdodDogLTQ1cHg7XG4gIGZsZXgtc2hyaW5rOiAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZm9udC1zaXplOiA1MHB4O1xufVxuXG4uY2Fyb3VzZWxfX2l0ZW0taGVhZCBpbWcge1xuICBoZWlnaHQ6IDgwJTtcbiAgd2lkdGg6IDgwJTtcbiAgb2JqZWN0LWZpdDogY29udGFpbjtcbn1cblxuLmNhcm91c2VsX19pdGVtLWJvZHkge1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgcGFkZGluZzogMTZweCAyMHB4IDE2cHggNzBweDtcbn1cblxuLnRpdGxlIHtcbiAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgY29sb3I6IGJsdWU7XG59XG5cbkBrZXlmcmFtZXMgY2Fyb3VzZWwtYW5pbWF0ZS12ZXJ0aWNhbCB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTAwJSkgc2NhbGUoMC41KTtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgfVxuICAzJSwgMTEuMTExMTExMTExMSUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMDAlKSBzY2FsZSgwLjcpO1xuICAgIG9wYWNpdHk6IDAuNDtcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICB9XG4gIDE0LjExMTExMTExMTElLCAyMi4yMjIyMjIyMjIyJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApIHNjYWxlKDEpO1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgfVxuICAyNS4yMjIyMjIyMjIyJSwgMzMuMzMzMzMzMzMzMyUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTAwJSkgc2NhbGUoMC43KTtcbiAgICBvcGFjaXR5OiAwLjQ7XG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgfVxuICAzNi4zMzMzMzMzMzMzJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMDAlKSBzY2FsZSgwLjUpO1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwMCUpIHNjYWxlKDAuNSk7XG4gICAgb3BhY2l0eTogMDtcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gIH1cbn1cbi50ZWFtX3NlY3Rpb24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGYwZjBmO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4udGVhbV9zZWN0aW9uOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgd2lkdGg6IDEwMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xuICByaWdodDogNTBweDtcbiAgdG9wOiAtNTBweDtcbiAgdHJhbnNmb3JtOiByb3RhdGVaKDQ1ZGVnKTtcbn1cbi50ZWFtX3NlY3Rpb24gLnRlYW0tbWFpbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGhlaWdodDogNDAwcHg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4udGVhbV9zZWN0aW9uIC50ZWFtLW1haW4gLnRlYW1faGVhZCB7XG4gIHdpZHRoOiA1MDBweDtcbiAgaGVpZ2h0OiAyNTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBwYWRkaW5nOiAxMHB4IDBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG59XG4udGVhbV9zZWN0aW9uIC50ZWFtLW1haW4gLnRlYW1faGVhZCAubGV2ZWwtb25lIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuLnRlYW1fc2VjdGlvbiAudGVhbS1tYWluIC50ZWFtX2hlYWQgLmxldmVsLW9uZSBoMiB7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAzMHB4O1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMzBweDtcbiAgcGFkZGluZzogNnB4IDEycHg7XG4gIHBhZGRpbmctcmlnaHQ6IDUwcHg7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtZmFtaWx5OiBcIlBvaXJldCBPbmVcIiwgY3Vyc2l2ZTtcbn1cbi50ZWFtX3NlY3Rpb24gLnRlYW0tbWFpbiAudGVhbV9oZWFkIC5sZXZlbC1vbmUgaW1nIHtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgd2lkdGg6IDEwMHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIG1hcmdpbi1yaWdodDogMjBweDtcbn1cbi50ZWFtX3NlY3Rpb24gLnRlYW0tbWFpbiAudGVhbV9oZWFkIC5sZXZlbC10d28ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHBhZGRpbmc6IDBweCAxMHB4O1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLnRlYW1fc2VjdGlvbiAudGVhbS1tYWluIC50ZWFtX2hlYWQgLmxldmVsLXR3byAubGVmdC1sZXZlbCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi50ZWFtX3NlY3Rpb24gLnRlYW0tbWFpbiAudGVhbV9oZWFkIC5sZXZlbC10d28gLmxlZnQtbGV2ZWw6OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBoZWlnaHQ6IDNweDtcbiAgd2lkdGg6IDQwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzUwNTBmMztcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgdG9wOiAtMTVweDtcbiAgcmlnaHQ6IDA7XG59XG4udGVhbV9zZWN0aW9uIC50ZWFtLW1haW4gLnRlYW1faGVhZCAubGV2ZWwtdHdvIC5sZWZ0LWxldmVsOjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGhlaWdodDogM3B4O1xuICB3aWR0aDogMTYlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTA1MGYzO1xuICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICB0b3A6IC0yNXB4O1xuICByaWdodDogMDtcbn1cbi50ZWFtX3NlY3Rpb24gLnRlYW0tbWFpbiAudGVhbV9oZWFkIC5sZXZlbC10d28gLmxlZnQtbGV2ZWwgaDIge1xuICBmb250LXNpemU6IDE2cHg7XG4gIG1hcmdpbi1ib3R0b206IDRweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgY29sb3I6ICMwMDA7XG4gIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiLCBzYW5zLXNlcmlmO1xufVxuLnRlYW1fc2VjdGlvbiAudGVhbS1tYWluIC50ZWFtX2hlYWQgLmxldmVsLXR3byAubGVmdC1sZXZlbCBwIHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiAjMDAwO1xuICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIiwgc2Fucy1zZXJpZjtcbn1cbi50ZWFtX3NlY3Rpb24gLnRlYW0tbWFpbiAudGVhbV9oZWFkIC5sZXZlbC10d28gYSB7XG4gIHBhZGRpbmc6IDEwcHggMzBweDtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDc4RDQ7XG4gIGZvbnQtZmFtaWx5OiBcIlBvaXJldCBPbmVcIiwgY3Vyc2l2ZTtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG4udGVhbV9zZWN0aW9uIC50ZWFtLW1haW4gLnRlYW0tbWVtYmVycyB7XG4gIGZsZXg6IDE7XG59XG5cbi5nb2RlbC1zZWMge1xuICBiYWNrZ3JvdW5kOiAjMDAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjZmZmO1xufVxuLmdvZGVsLXNlYyBpbWcge1xuICB3aWR0aDogNTAwcHg7XG4gIG9iamVjdC1maXQ6IGNvbnRhaW47XG4gIG1hcmdpbi1ib3R0b206IDQwcHg7XG59XG4uZ29kZWwtc2VjIGgxIHtcbiAgZm9udC1mYW1pbHk6IFwiUG9pcmV0IE9uZVwiLCBjdXJzaXZlO1xuICBmb250LXNpemU6IDQycHg7XG59XG4uZ29kZWwtc2VjIHAge1xuICBtYXgtd2lkdGg6IDcwJTtcbiAgbWFyZ2luOiAyMHB4IGF1dG87XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgY29sb3I6ICNlZmVmZWY7XG4gIGxpbmUtaGVpZ2h0OiAzMnB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIiwgc2Fucy1zZXJpZjtcbn1cbi5nb2RlbC1zZWMgLmJ0bi1jb250YWluZXIge1xuICBtYXJnaW4tdG9wOiA1MHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5nb2RlbC1zZWMgLmJ0bi1jb250YWluZXIgYSB7XG4gIHBhZGRpbmc6IDEycHggMjRweDtcbiAgZm9udC1mYW1pbHk6IFwiUG9pcmV0IE9uZVwiLCBjdXJzaXZlO1xuICBmb250LXdlaWdodDogYm9sZGVyO1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBiYWNrZ3JvdW5kOiBibHVlO1xuICBtYXJnaW46IDBweCAxMHB4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbi5nb2RlbC1zZWMgLmJ0bi1jb250YWluZXIgLmRpZmYtYnRuIHtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgY29sb3I6IGJsdWU7XG59XG5cbi5mb290ZXItc2VjIHtcbiAgcGFkZGluZzogMzBweCAxMDBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYmFja2dyb3VuZDogIzBmMGYwZjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuLmZvb3Rlci1zZWMgaW1nIHtcbiAgaGVpZ2h0OiAxMDBweDtcbn1cbi5mb290ZXItc2VjIC5saW5rcy1zZWMgYSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgbWFyZ2luOiAxNXB4IDBweDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICBmb250LXdlaWdodDogYm9sZGVyO1xuICBmb250LWZhbWlseTogXCJQb2lyZXQgT25lXCIsIGN1cnNpdmU7XG59XG4uZm9vdGVyLXNlYyAubGlua3Mtc2VjIGEgc3BhbiB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgYmFja2dyb3VuZDogYmx1ZTtcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgcGFkZGluZzogOHB4IDEycHg7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG4gIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG59XG5cbi5tYWluLXNlY3Rpb24ge1xuICBoZWlnaHQ6IDg4dmg7XG4gIHdpZHRoOiAxMDAlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4ubWFpbi1zZWN0aW9uIHZpZGVvIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICB0b3A6IDA7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cblxuLm1haW4tc2VjdGlvbiAuY29udGVudCB7XG4gIG1hcmdpbjogYXV0bztcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNSwgOTksIDI1MSwgMC41KTtcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDVweCk7XG4gIGNvbG9yOiAjZmZmO1xuICB3aWR0aDogODAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nOiAyMHB4O1xufVxuLm1haW4tc2VjdGlvbiAuY29udGVudCBoMSB7XG4gIGZvbnQtc2l6ZTogMzRweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgZm9udC1mYW1pbHk6IFwiUG9pcmV0IE9uZVwiLCBjdXJzaXZlO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuLm1haW4tc2VjdGlvbiAuY29udGVudCBwIHtcbiAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG4ud2hhdC1zZWN0aW9uIHtcbiAgYmFja2dyb3VuZDogIzAwMDtcbn1cblxuLmJ1bGxldF9wb2ludHMge1xuICBtYXJnaW4tdG9wOiAzMHB4O1xufVxuLmJ1bGxldF9wb2ludHMgcCB7XG4gIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDE1cHg7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXdlaWdodDogNTAwO1xuICBtYXJnaW4tYm90dG9tOiA4cHg7XG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XG4gIHBhZGRpbmctbGVmdDogMzBweDtcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5idWxsZXRfcG9pbnRzIHA6OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBoZWlnaHQ6IDEwcHg7XG4gIHdpZHRoOiAxMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTA1MGYzO1xuICBsZWZ0OiAwcHg7XG4gIHRvcDogMTBweDtcbn1cblxuLmRldmVsb3Blci1zZWMge1xuICBiYWNrZ3JvdW5kOiAjMDAwO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uZGV2ZWxvcGVyLXNlYyAubGVmdC1ib3gge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgcGFkZGluZy10b3A6IDMwcHg7XG59XG4uZGV2ZWxvcGVyLXNlYyAubGVmdC1ib3ggLmRldi1ib3gge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBtYXgtd2lkdGg6IDMyMHB4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuLmRldmVsb3Blci1zZWMgLmxlZnQtYm94IC5kZXYtYm94IC5pbWctYm94IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGhlaWdodDogMjAwcHg7XG59XG4uZGV2ZWxvcGVyLXNlYyAubGVmdC1ib3ggLmRldi1ib3ggLmltZy1ib3ggaW1nIHtcbiAgaGVpZ2h0OiBpbmhlcml0O1xuICB3aWR0aDogaW5oZXJpdDtcbiAgb2JqZWN0LWZpdDogY29udGFpbjtcbn1cbi5kZXZlbG9wZXItc2VjIC5sZWZ0LWJveCAuZGV2LWJveCAudGV4dC1ib3gge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMjBweDtcbiAgcGFkZGluZzogMTBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTA1MGYzO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuLmRldmVsb3Blci1zZWMgLmxlZnQtYm94IC5kZXYtYm94IC50ZXh0LWJveCBwIHtcbiAgbWFyZ2luOiBhdXRvO1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnJpZ2h0LWJveHgge1xuICBoZWlnaHQ6IDQwMHB4O1xuICB3aWR0aDogNDAwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uL2Fzc2V0cy9pbWFnZXMvaW52ZXN0b3ItZGVjay5wbmcpO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICByaWdodDogMHB4O1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA0cHg7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDRweDtcbiAgdG9wOiA1MCU7XG4gIHotaW5kZXg6IDk5OTk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcbn1cbi5yaWdodC1ib3h4OjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGhlaWdodDogMjUlO1xuICB3aWR0aDogMjUlO1xuICBib3JkZXItbGVmdDogMjBweCBzb2xpZCAjNTA1MGYzO1xuICBib3JkZXItYm90dG9tOiAyMHB4IHNvbGlkICM1MDUwZjM7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA0cHg7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDRweDtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDRweDtcbiAgei1pbmRleDogMTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IC0xOXB4O1xuICBsZWZ0OiAtMTlweDtcbn1cblxuLmtpbGxlci1hcHBzIHtcbiAgYmFja2dyb3VuZDogIzAwMDtcbn1cblxuLmtpbGxlci1wb2ludHMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiLCBzYW5zLXNlcmlmO1xuICBjb2xvcjogI2ZmZjtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cbi5raWxsZXItcG9pbnRzIHAge1xuICBmbGV4OiAxO1xuICBsaW5lLWhlaWdodDogMzBweDtcbn1cbi5raWxsZXItcG9pbnRzIC5wdWxzZS1jaXJjbGUge1xuICBzdHJva2U6ICM1MDUwZjM7XG59XG5cbmNpcmNsZSB7XG4gIGZpbGw6ICM1MDUwZjM7XG4gIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlcjtcbn1cblxuLnB1bHNlLWNpcmNsZSxcbi5wdWxzZS1jaXJjbGUtMiB7XG4gIHN0cm9rZTogIzUwNTBmMztcbiAgc3Ryb2tlLXdpZHRoOiAycHg7XG4gIGZpbGw6IG5vbmU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG59XG5cbi5wdWxzZS1jaXJjbGUge1xuICBhbmltYXRpb246IHB1bHNlIDEuNXMgMXMgY3ViaWMtYmV6aWVyKDAuMzksIDAuNTQsIDAuNDEsIDEuNSkgaW5maW5pdGUgYWx0ZXJuYXRlO1xufVxuXG4ucHVsc2UtY2lyY2xlLTIge1xuICBhbmltYXRpb246IHB1bHNlLTIgMS41cyBjdWJpYy1iZXppZXIoMC4zOSwgMC41NCwgMC40MSwgMS41KSBpbmZpbml0ZSBhbHRlcm5hdGU7XG59XG5cbkBrZXlmcmFtZXMgcHVsc2Uge1xuICAwJSB7XG4gICAgcjogNDtcbiAgfVxuICA1MCUge1xuICAgIHI6IDE2O1xuICB9XG4gIDYwJSB7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICAxMDAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG59XG5Aa2V5ZnJhbWVzIHB1bHNlLTIge1xuICAwJSwgNTAlIHtcbiAgICByOiA0O1xuICB9XG4gIDEwMCUge1xuICAgIHI6IDE2O1xuICB9XG59XG4ubGluay1ib3gge1xuICB3aWR0aDogaW5oZXJpdDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aWR0aDogMzIwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4ubGluay1ib3ggYSB7XG4gIHBhZGRpbmc6IDEycHggMjRweDtcbiAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXNpemU6IDE2cHg7XG4gIG1heC13aWR0aDogMTgwcHg7XG4gIGJhY2tncm91bmQ6IGJsdWU7XG4gIG1hcmdpbjogYXV0bztcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ4MHB4KSB7XG4gIC5tYWluLXNlY3Rpb24gLmNvbnRlbnQge1xuICAgIHdpZHRoOiA5MCU7XG4gICAgcGFkZGluZzogMTBweDtcbiAgfVxuICAubWFpbi1zZWN0aW9uIC5jb250ZW50IGgxIHtcbiAgICBmb250LXNpemU6IDI0cHg7XG4gIH1cbiAgLm1haW4tc2VjdGlvbiAuY29udGVudCBwIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyNnB4O1xuICB9XG5cbiAgLmJveC1zZWN0aW9uIHtcbiAgICBwYWRkaW5nOiA1MHB4IDEwcHg7XG4gIH1cblxuICAuaGVhZGluZ19ibG9jayBoMSB7XG4gICAgZm9udC1zaXplOiAyOHB4O1xuICB9XG4gIC5oZWFkaW5nX2Jsb2NrOjphZnRlciB7XG4gICAgaGVpZ2h0OiA0cHg7XG4gIH1cblxuICAuZ29kZWwtc2VjIGltZyB7XG4gICAgd2lkdGg6IDkwJTtcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICB9XG4gIC5nb2RlbC1zZWMgaDEge1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgfVxuICAuZ29kZWwtc2VjIHAge1xuICAgIG1heC13aWR0aDogOTAlO1xuICB9XG5cbiAgLnRlYW1fc2VjdGlvbjo6YWZ0ZXIge1xuICAgIGhlaWdodDogNTBweDtcbiAgICB3aWR0aDogNTBweDtcbiAgICB0b3A6IC0zMHB4O1xuICB9XG4gIC50ZWFtX3NlY3Rpb24gLnRlYW0tbWFpbiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgcGFkZGluZzogNDBweCAwcHg7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIH1cbiAgLnRlYW1fc2VjdGlvbiAudGVhbS1tYWluIC50ZWFtX2hlYWQge1xuICAgIHdpZHRoOiA1MDBweDtcbiAgICBoZWlnaHQ6IDI1MHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIHBhZGRpbmc6IDEwcHggMHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgfVxuICAudGVhbV9zZWN0aW9uIC50ZWFtLW1haW4gLnRlYW1faGVhZCAubGV2ZWwtb25lIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICB9XG4gIC50ZWFtX3NlY3Rpb24gLnRlYW0tbWFpbiAudGVhbV9oZWFkIC5sZXZlbC1vbmUgaDIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDMwcHg7XG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDMwcHg7XG4gICAgcGFkZGluZzogNnB4IDEycHg7XG4gICAgcGFkZGluZy1yaWdodDogNTBweDtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgZm9udC1mYW1pbHk6IFwiUG9pcmV0IE9uZVwiLCBjdXJzaXZlO1xuICB9XG4gIC50ZWFtX3NlY3Rpb24gLnRlYW0tbWFpbiAudGVhbV9oZWFkIC5sZXZlbC1vbmUgaW1nIHtcbiAgICBoZWlnaHQ6IDEwMHB4O1xuICAgIHdpZHRoOiAxMDBweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICB9XG4gIC50ZWFtX3NlY3Rpb24gLnRlYW0tbWFpbiAudGVhbV9oZWFkIC5sZXZlbC10d28ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIHBhZGRpbmc6IDBweCAxMHB4O1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgfVxuICAudGVhbV9zZWN0aW9uIC50ZWFtLW1haW4gLnRlYW1faGVhZCAubGV2ZWwtdHdvIC5sZWZ0LWxldmVsIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIH1cbiAgLnRlYW1fc2VjdGlvbiAudGVhbS1tYWluIC50ZWFtX2hlYWQgLmxldmVsLXR3byAubGVmdC1sZXZlbDo6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGhlaWdodDogM3B4O1xuICAgIHdpZHRoOiA0MCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzUwNTBmMztcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICAgIHRvcDogLTE1cHg7XG4gICAgcmlnaHQ6IDA7XG4gIH1cbiAgLnRlYW1fc2VjdGlvbiAudGVhbS1tYWluIC50ZWFtX2hlYWQgLmxldmVsLXR3byAubGVmdC1sZXZlbDo6YmVmb3JlIHtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBoZWlnaHQ6IDNweDtcbiAgICB3aWR0aDogMTYlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM1MDUwZjM7XG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgICB0b3A6IC0yNXB4O1xuICAgIHJpZ2h0OiAwO1xuICB9XG4gIC50ZWFtX3NlY3Rpb24gLnRlYW0tbWFpbiAudGVhbV9oZWFkIC5sZXZlbC10d28gLmxlZnQtbGV2ZWwgaDIge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBtYXJnaW4tYm90dG9tOiA0cHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgICBjb2xvcjogIzAwMDtcbiAgICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIiwgc2Fucy1zZXJpZjtcbiAgfVxuICAudGVhbV9zZWN0aW9uIC50ZWFtLW1haW4gLnRlYW1faGVhZCAubGV2ZWwtdHdvIC5sZWZ0LWxldmVsIHAge1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBjb2xvcjogIzAwMDtcbiAgICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIiwgc2Fucy1zZXJpZjtcbiAgfVxuICAudGVhbV9zZWN0aW9uIC50ZWFtLW1haW4gLnRlYW1faGVhZCAubGV2ZWwtdHdvIGEge1xuICAgIHBhZGRpbmc6IDEwcHggMzBweDtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3OEQ0O1xuICAgIGZvbnQtZmFtaWx5OiBcIlBvaXJldCBPbmVcIiwgY3Vyc2l2ZTtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICB9XG4gIC50ZWFtX3NlY3Rpb24gLnRlYW0tbWFpbiAudGVhbS1tZW1iZXJzIHtcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xuICAgIGZsZXg6IDE7XG4gIH1cblxuICAucm0tc2VjdGlvbiAucm9hZG1hcC1ibG9jayB7XG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5yaWdodC1ib3h4IHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG5cbiAgdWwge1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICB0cmFuc2Zvcm06IG5vbmU7XG4gICAgbWFyZ2luLXRvcDogMTAwcHg7XG4gIH1cblxuICB1bCBsaSB7XG4gICAgaGVpZ2h0OiAxMzBweDtcbiAgICB3aWR0aDogMTMwcHg7XG4gICAgbWFyZ2luOiAyMHB4IDBweDtcbiAgfVxuXG4gIC5kZXZlbG9wZXItc2VjIC5sZWZ0LWJveCB7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIH1cblxuICAua2lsbGVyLXBvaW50cyB7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICB9XG4gIC5raWxsZXItcG9pbnRzIHN2ZyB7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIHdpZHRoOiA1MHB4O1xuICB9XG5cbiAgLmNvbnRhaW5lciB7XG4gICAgaGVpZ2h0OiA5MHZoO1xuICB9XG5cbiAgLmZvb3Rlci1zZWMge1xuICAgIHBhZGRpbmc6IDMwcHggMTBweDtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIH1cbiAgLmZvb3Rlci1zZWMgaW1nIHtcbiAgICBoZWlnaHQ6IDcwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogNTBweDtcbiAgfVxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");





class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


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
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\hp\OneDrive\Desktop\work\revamped-website\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map