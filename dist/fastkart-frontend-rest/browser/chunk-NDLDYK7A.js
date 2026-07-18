import {
  DownloadFiles,
  DownloadLicense,
  DownloadState,
  Downloads,
  GetNotification,
  GetPaymentDetails,
  GetUserTransaction,
  GetUserTransaction2,
  MarkAsReadNotification,
  NotificationState,
  PaymentDetailsState,
  PointState,
  RefundState,
  UpdatePaymentDetails,
  WalletState
} from "./chunk-ZHUSI5K3.js";
import {
  GetOrderStatus,
  OrderState,
  OrderStatusState,
  StateState
} from "./chunk-THFPXD6E.js";
import {
  AccountState,
  AddressModalComponent,
  CartService,
  ChangePasswordModalComponent,
  ConfirmationModalComponent,
  CountryState,
  CurrencySymbolPipe,
  DeleteAddress,
  DeleteModalComponent,
  DownloadInvoice,
  EditProfileModalComponent,
  GetOrders,
  GetRefund,
  LoaderState,
  Logout,
  NgbDropdown,
  NgbDropdownButtonItem,
  NgbDropdownItem,
  NgbDropdownMenu,
  NgbDropdownToggle,
  NgbTooltip,
  NoDataComponent,
  PaginationComponent,
  PayModalComponent,
  RefundModalComponent,
  Select,
  SettingState,
  SharedModule,
  Store,
  TitleCasePipe as TitleCasePipe2,
  TranslateModule,
  TranslatePipe,
  UpdateUserProfile,
  ViewOrder
} from "./chunk-N3F36WZH.js";
import "./chunk-SEVD3V6P.js";
import {
  DefaultValueAccessor,
  FormControl,
  FormControlDirective,
  FormControlName,
  FormGroup,
  FormGroupDirective,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  Validators,
  ɵNgNoValidate
} from "./chunk-GFSM57H7.js";
import {
  ActivatedRoute,
  AsyncPipe,
  CommonModule,
  DatePipe,
  EventEmitter,
  NgClass,
  NgForOf,
  NgIf,
  NgSwitch,
  NgSwitchCase,
  NgSwitchDefault,
  Router,
  RouterLink,
  RouterLinkActive,
  RouterModule,
  RouterOutlet,
  Subject,
  TitleCasePipe,
  __decorate,
  interval,
  of,
  switchMap,
  takeUntil,
  takeWhile,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵclassMapInterpolate1,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpropertyInterpolate,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtextInterpolate3,
  ɵɵtextInterpolate4,
  ɵɵviewQuery
} from "./chunk-K6HJRTD4.js";

// src/app/components/account/sidebar/sidebar.component.ts
var _c0 = ["confirmationModal"];
var _c1 = () => ["active"];
var _c2 = () => ["/account/dashboard"];
var _c3 = () => ["/account/order"];
var _c4 = () => ["/account/addresses"];
var _c5 = () => ["/account/notifications"];
function SidebarComponent_img_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 24);
    \u0275\u0275pipe(1, "async");
  }
  if (rf & 2) {
    let tmp_3_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("src", (tmp_3_0 = \u0275\u0275pipeBind1(1, 1, ctx_r1.user$)) == null ? null : tmp_3_0.profile_image == null ? null : tmp_3_0.profile_image.original_url, \u0275\u0275sanitizeUrl);
  }
}
function SidebarComponent_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "async");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_3_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", (tmp_3_0 = \u0275\u0275pipeBind1(2, 1, ctx_r1.user$)) == null ? null : tmp_3_0.name == null ? null : (tmp_3_0 = tmp_3_0.name.charAt(0)) == null ? null : (tmp_3_0 = tmp_3_0.toString()) == null ? null : tmp_3_0.toUpperCase(), " ");
  }
}
function SidebarComponent_span_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 26);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.unreadNotificationCount);
  }
}
var SidebarComponent = class _SidebarComponent {
  constructor(store) {
    this.store = store;
    this.menu = new EventEmitter();
    this.notification$.subscribe((notification) => {
      this.unreadNotificationCount = notification?.filter((item) => !item.read_at)?.length;
    });
  }
  logout() {
    this.store.dispatch(new Logout());
  }
  openMenu(value) {
    this.menu.emit(value);
  }
  uploadImage(event) {
    if (event?.target?.files) {
      let form = new FormData();
      form.append("profile_image", event.target.files[0]);
      form.append("_method", "PUT");
      this.store.dispatch(new UpdateUserProfile(form));
    } else {
      let form = new FormData();
      form.append("profile_image_id", "");
      form.append("_method", "PUT");
      this.store.dispatch(new UpdateUserProfile(form));
    }
  }
  static {
    this.\u0275fac = function SidebarComponent_Factory(t) {
      return new (t || _SidebarComponent)(\u0275\u0275directiveInject(Store));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SidebarComponent, selectors: [["app-sidebar"]], viewQuery: function SidebarComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c0, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.ConfirmationModal = _t.first);
      }
    }, inputs: { show: "show" }, outputs: { menu: "menu" }, decls: 44, vars: 44, consts: [["avatarPlaceholder", ""], ["confirmationModal", ""], [1, "sb"], [1, "sb__close", "d-lg-none", 3, "click"], [1, "ri-close-line"], [1, "sb__user"], [1, "sb__avatar"], ["alt", "profile", 3, "src", 4, "ngIf", "ngIfElse"], [1, "sb__avatar-edit"], ["type", "file", "accept", "image/*", 3, "change"], [1, "ri-camera-line"], [1, "sb__name"], [1, "sb__email"], [1, "sb__nav"], [1, "sb__link", 3, "click", "routerLinkActive", "routerLink"], [1, "ri-dashboard-line"], [1, "ri-shopping-bag-line"], [1, "ri-map-pin-line"], [1, "ri-notification-3-line"], ["class", "sb__badge", 4, "ngIf"], [1, "sb__footer"], [1, "sb__logout", 3, "click"], [1, "ri-logout-box-r-line"], [3, "confirmed"], ["alt", "profile", 3, "src"], [1, "sb__avatar-letter"], [1, "sb__badge"]], template: function SidebarComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "div", 2)(1, "button", 3);
        \u0275\u0275listener("click", function SidebarComponent_Template_button_click_1_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.openMenu(false));
        });
        \u0275\u0275element(2, "i", 4);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(3, "div", 5)(4, "div", 6);
        \u0275\u0275template(5, SidebarComponent_img_5_Template, 2, 3, "img", 7);
        \u0275\u0275pipe(6, "async");
        \u0275\u0275template(7, SidebarComponent_ng_template_7_Template, 3, 3, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
        \u0275\u0275elementStart(9, "label", 8)(10, "input", 9);
        \u0275\u0275listener("change", function SidebarComponent_Template_input_change_10_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.uploadImage($event));
        });
        \u0275\u0275elementEnd();
        \u0275\u0275element(11, "i", 10);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(12, "h4", 11);
        \u0275\u0275text(13);
        \u0275\u0275pipe(14, "async");
        \u0275\u0275pipe(15, "titleCase");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "p", 12);
        \u0275\u0275text(17);
        \u0275\u0275pipe(18, "async");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(19, "nav", 13)(20, "a", 14);
        \u0275\u0275listener("click", function SidebarComponent_Template_a_click_20_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.openMenu(false));
        });
        \u0275\u0275element(21, "i", 15);
        \u0275\u0275text(22);
        \u0275\u0275pipe(23, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(24, "a", 14);
        \u0275\u0275listener("click", function SidebarComponent_Template_a_click_24_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.openMenu(false));
        });
        \u0275\u0275element(25, "i", 16);
        \u0275\u0275text(26);
        \u0275\u0275pipe(27, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(28, "a", 14);
        \u0275\u0275listener("click", function SidebarComponent_Template_a_click_28_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.openMenu(false));
        });
        \u0275\u0275element(29, "i", 17);
        \u0275\u0275text(30);
        \u0275\u0275pipe(31, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(32, "a", 14);
        \u0275\u0275listener("click", function SidebarComponent_Template_a_click_32_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.openMenu(false));
        });
        \u0275\u0275element(33, "i", 18);
        \u0275\u0275text(34);
        \u0275\u0275pipe(35, "translate");
        \u0275\u0275template(36, SidebarComponent_span_36_Template, 2, 1, "span", 19);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(37, "div", 20)(38, "button", 21);
        \u0275\u0275listener("click", function SidebarComponent_Template_button_click_38_listener() {
          \u0275\u0275restoreView(_r1);
          const confirmationModal_r3 = \u0275\u0275reference(43);
          return \u0275\u0275resetView(confirmationModal_r3.openModal());
        });
        \u0275\u0275element(39, "i", 22);
        \u0275\u0275text(40);
        \u0275\u0275pipe(41, "translate");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(42, "app-confirmation-modal", 23, 1);
        \u0275\u0275listener("confirmed", function SidebarComponent_Template_app_confirmation_modal_confirmed_42_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.logout());
        });
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        let tmp_2_0;
        let tmp_4_0;
        let tmp_5_0;
        const avatarPlaceholder_r4 = \u0275\u0275reference(8);
        \u0275\u0275advance(5);
        \u0275\u0275property("ngIf", (tmp_2_0 = \u0275\u0275pipeBind1(6, 18, ctx.user$)) == null ? null : tmp_2_0.profile_image == null ? null : tmp_2_0.profile_image.original_url)("ngIfElse", avatarPlaceholder_r4);
        \u0275\u0275advance(8);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(15, 22, (tmp_4_0 = \u0275\u0275pipeBind1(14, 20, ctx.user$)) == null ? null : tmp_4_0.name));
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate((tmp_5_0 = \u0275\u0275pipeBind1(18, 24, ctx.user$)) == null ? null : tmp_5_0.email);
        \u0275\u0275advance(3);
        \u0275\u0275property("routerLinkActive", \u0275\u0275pureFunction0(36, _c1))("routerLink", \u0275\u0275pureFunction0(37, _c2));
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(23, 26, "Dashboard"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275property("routerLinkActive", \u0275\u0275pureFunction0(38, _c1))("routerLink", \u0275\u0275pureFunction0(39, _c3));
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(27, 28, "My Orders"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275property("routerLinkActive", \u0275\u0275pureFunction0(40, _c1))("routerLink", \u0275\u0275pureFunction0(41, _c4));
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(31, 30, "Saved Address"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275property("routerLinkActive", \u0275\u0275pureFunction0(42, _c1))("routerLink", \u0275\u0275pureFunction0(43, _c5));
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(35, 32, "Notifications"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.unreadNotificationCount);
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(41, 34, "Logout"), " ");
      }
    }, dependencies: [NgIf, RouterLink, RouterLinkActive, ConfirmationModalComponent, AsyncPipe, TitleCasePipe2, TranslatePipe], styles: ['\n\n.sb[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  padding: 0;\n}\n.sb__close[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 16px;\n  right: 16px;\n  background: none;\n  border: none;\n  font-size: 22px;\n  color: #999;\n  cursor: pointer;\n  z-index: 5;\n}\n.sb__close[_ngcontent-%COMP%]:hover {\n  color: #1A2518;\n}\n.sb__user[_ngcontent-%COMP%] {\n  padding: 32px 24px 24px;\n  text-align: center;\n  border-bottom: 1px solid #f0ede8;\n}\n.sb__avatar[_ngcontent-%COMP%] {\n  width: 72px;\n  height: 72px;\n  margin: 0 auto 14px;\n  position: relative;\n}\n.sb__avatar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 72px;\n  height: 72px;\n  border-radius: 50%;\n  object-fit: cover;\n  border: 2px solid #f0ede8;\n}\n.sb__avatar-letter[_ngcontent-%COMP%] {\n  width: 72px;\n  height: 72px;\n  border-radius: 50%;\n  background: #1A2518;\n  color: #fff;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-family: "Poppins", sans-serif;\n  font-size: 26px;\n  font-weight: 700;\n}\n.sb__avatar-edit[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0;\n  right: 0;\n  width: 26px;\n  height: 26px;\n  background: #C9A054;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  border: 2px solid #fff;\n}\n.sb__avatar-edit[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  display: none;\n}\n.sb__avatar-edit[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #fff;\n}\n.sb__name[_ngcontent-%COMP%] {\n  font-family: "Poppins", sans-serif;\n  font-size: 15px;\n  font-weight: 600;\n  color: #1A2518;\n  margin-bottom: 2px;\n}\n.sb__email[_ngcontent-%COMP%] {\n  font-family: "Poppins", sans-serif;\n  font-size: 12px;\n  color: #aaa;\n  margin: 0;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.sb__nav[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 16px 12px;\n  overflow-y: auto;\n}\n.sb__link[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 11px 16px;\n  border-radius: 6px;\n  font-family: "Poppins", sans-serif;\n  font-size: 13px;\n  font-weight: 500;\n  color: #777;\n  text-decoration: none;\n  transition: all 0.15s;\n  margin-bottom: 2px;\n}\n.sb__link[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 17px;\n  width: 20px;\n  text-align: center;\n}\n.sb__link[_ngcontent-%COMP%]:hover {\n  background: #faf9f6;\n  color: #1A2518;\n}\n.sb__link.active[_ngcontent-%COMP%] {\n  background: rgba(201, 160, 84, 0.1);\n  color: #1A2518;\n  font-weight: 600;\n}\n.sb__link.active[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #C9A054;\n}\n.sb__badge[_ngcontent-%COMP%] {\n  margin-left: auto;\n  min-width: 20px;\n  height: 20px;\n  padding: 0 6px;\n  border-radius: 10px;\n  background: #C9A054;\n  color: #fff;\n  font-size: 10px;\n  font-weight: 700;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.sb__footer[_ngcontent-%COMP%] {\n  padding: 16px 12px;\n  border-top: 1px solid #f0ede8;\n}\n.sb__logout[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  width: 100%;\n  padding: 11px 16px;\n  border-radius: 6px;\n  border: none;\n  background: none;\n  font-family: "Poppins", sans-serif;\n  font-size: 13px;\n  font-weight: 500;\n  color: #cc4444;\n  cursor: pointer;\n  transition: background 0.15s;\n}\n.sb__logout[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 17px;\n  width: 20px;\n  text-align: center;\n}\n.sb__logout[_ngcontent-%COMP%]:hover {\n  background: #fef5f5;\n}\n/*# sourceMappingURL=sidebar.component.css.map */'] });
  }
};
__decorate([
  Select(NotificationState.notification)
], SidebarComponent.prototype, "notification$", void 0);
__decorate([
  Select(AccountState.user)
], SidebarComponent.prototype, "user$", void 0);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SidebarComponent, { className: "SidebarComponent", filePath: "src\\app\\components\\account\\sidebar\\sidebar.component.ts", lineNumber: 17 });
})();

// src/app/components/account/account.component.ts
var AccountComponent = class _AccountComponent {
  constructor(store, router) {
    this.store = store;
    this.router = router;
    this.open = false;
    this.breadcrumb = {
      title: "Dashboard",
      items: [{ label: "Dashboard", active: false }]
    };
    this.store.dispatch(new GetNotification());
    this.breadcrumb.title = this.router?.url?.split("?")[0]?.split("/")?.pop();
    if (this.router?.url.includes("order/details")) {
      this.breadcrumb.title = "Order";
    }
    this.breadcrumb.items = [];
    this.breadcrumb.items.push({ label: this.breadcrumb.title, active: false });
  }
  openMenu(value) {
    this.open = value;
  }
  static {
    this.\u0275fac = function AccountComponent_Factory(t) {
      return new (t || _AccountComponent)(\u0275\u0275directiveInject(Store), \u0275\u0275directiveInject(Router));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AccountComponent, selectors: [["app-account"]], decls: 12, vars: 5, consts: [[1, "acct-page"], [1, "acct-layout"], [1, "acct-sidebar"], [3, "menu", "show"], [1, "acct-main"], [1, "acct-mobile-bar", "d-lg-none"], [1, "acct-menu-toggle", 3, "click"], [1, "ri-menu-line"], ["id", "account", 1, "acct-content"], [1, "acct-overlay", "d-lg-none", 3, "click"]], template: function AccountComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "section", 0)(1, "div", 1)(2, "aside", 2)(3, "app-sidebar", 3);
        \u0275\u0275listener("menu", function AccountComponent_Template_app_sidebar_menu_3_listener($event) {
          return ctx.openMenu($event);
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(4, "main", 4)(5, "div", 5)(6, "button", 6);
        \u0275\u0275listener("click", function AccountComponent_Template_button_click_6_listener() {
          return ctx.openMenu(true);
        });
        \u0275\u0275element(7, "i", 7);
        \u0275\u0275text(8, " Menu ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(9, "div", 8);
        \u0275\u0275element(10, "router-outlet");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(11, "div", 9);
        \u0275\u0275listener("click", function AccountComponent_Template_div_click_11_listener() {
          return ctx.openMenu(false);
        });
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275classProp("open", ctx.open);
        \u0275\u0275advance();
        \u0275\u0275property("show", ctx.open);
        \u0275\u0275advance(8);
        \u0275\u0275classProp("show", ctx.open);
      }
    }, dependencies: [RouterOutlet, SidebarComponent], styles: ['\n\n[_nghost-%COMP%]     app-breadcrumb {\n  display: none !important;\n}\n.acct-page[_ngcontent-%COMP%] {\n  padding: 0 !important;\n  margin: 0 !important;\n  background: #f8f7f4;\n}\n.acct-layout[_ngcontent-%COMP%] {\n  display: flex;\n  min-height: 60vh;\n}\n.acct-sidebar[_ngcontent-%COMP%] {\n  width: 260px;\n  background: #fff;\n  border-right: 1px solid #eee;\n  flex-shrink: 0;\n  position: sticky;\n  top: 0;\n  height: 100vh;\n  overflow-y: auto;\n}\n@media (max-width: 991px) {\n  .acct-sidebar[_ngcontent-%COMP%] {\n    position: fixed;\n    top: 0;\n    left: -280px;\n    z-index: 1050;\n    height: 100vh;\n    box-shadow: 4px 0 20px rgba(0, 0, 0, 0.1);\n    transition: left 0.3s ease;\n  }\n  .acct-sidebar.open[_ngcontent-%COMP%] {\n    left: 0;\n  }\n}\n.acct-main[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.acct-mobile-bar[_ngcontent-%COMP%] {\n  padding: 16px 20px;\n  background: #fff;\n  border-bottom: 1px solid #eee;\n}\n.acct-mobile-bar[_ngcontent-%COMP%]   .acct-menu-toggle[_ngcontent-%COMP%] {\n  background: none;\n  border: 1.5px solid #ddd;\n  border-radius: 6px;\n  padding: 8px 16px;\n  font-family: "Poppins", sans-serif;\n  font-size: 13px;\n  font-weight: 600;\n  color: #1A2518;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.acct-mobile-bar[_ngcontent-%COMP%]   .acct-menu-toggle[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.acct-mobile-bar[_ngcontent-%COMP%]   .acct-menu-toggle[_ngcontent-%COMP%]:hover {\n  border-color: #1A2518;\n}\n.acct-content[_ngcontent-%COMP%] {\n  padding: 40px 48px;\n  position: relative;\n  min-height: 400px;\n}\n@media (max-width: 1200px) {\n  .acct-content[_ngcontent-%COMP%] {\n    padding: 32px 28px;\n  }\n}\n@media (max-width: 575px) {\n  .acct-content[_ngcontent-%COMP%] {\n    padding: 24px 16px;\n  }\n}\n.acct-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.4);\n  z-index: 1040;\n  opacity: 0;\n  visibility: hidden;\n  transition: all 0.3s;\n}\n.acct-overlay.show[_ngcontent-%COMP%] {\n  opacity: 1;\n  visibility: visible;\n}\n/*# sourceMappingURL=account.component.css.map */'] });
  }
};
__decorate([
  Select(LoaderState.status)
], AccountComponent.prototype, "loadingStatus$", void 0);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AccountComponent, { className: "AccountComponent", filePath: "src\\app\\components\\account\\account.component.ts", lineNumber: 14 });
})();

// src/app/components/account/dashboard/dashboard.component.ts
var _c02 = ["profileModal"];
var _c12 = ["passwordModal"];
function DashboardComponent_div_43_span_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", ctx_r1.address.flat_no, ", ");
  }
}
function DashboardComponent_div_43_span_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", ctx_r1.address.building, ", ");
  }
}
function DashboardComponent_div_43_span_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", ctx_r1.address.road, ", ");
  }
}
function DashboardComponent_div_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 26)(1, "span", 12);
    \u0275\u0275text(2, "Default Address");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 13);
    \u0275\u0275template(4, DashboardComponent_div_43_span_4_Template, 2, 1, "span", 27)(5, DashboardComponent_div_43_span_5_Template, 2, 1, "span", 27)(6, DashboardComponent_div_43_span_6_Template, 2, 1, "span", 27);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r1.address.flat_no);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.address.building);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.address.road);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate4(" ", ctx_r1.address.street, ", ", ctx_r1.address.city, ", ", ctx_r1.address.area, " ", ctx_r1.address.pincode, " ");
  }
}
var DashboardComponent = class _DashboardComponent {
  constructor(router) {
    this.router = router;
    this.user$.subscribe((user) => {
      this.address = user?.address?.length ? user?.address?.[0] : null;
    });
  }
  navigateTo(route) {
    this.router.navigate([`/account/${route}`]);
  }
  static {
    this.\u0275fac = function DashboardComponent_Factory(t) {
      return new (t || _DashboardComponent)(\u0275\u0275directiveInject(Router));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DashboardComponent, selectors: [["app-dashboard"]], viewQuery: function DashboardComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c02, 5);
        \u0275\u0275viewQuery(_c12, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.ProfileModal = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.PasswordModal = _t.first);
      }
    }, decls: 69, vars: 20, consts: [["profileModal", ""], ["passwordModal", ""], [1, "dash"], [1, "dash__greeting"], [1, "dash__hello"], [1, "dash__sub"], [1, "dash__edit-btn", 3, "click"], [1, "ri-edit-line"], [1, "dash__card"], [1, "dash__card-title"], [1, "dash__info-grid"], [1, "dash__info"], [1, "dash__info-label"], [1, "dash__info-value"], ["href", "javascript:void(0)", 1, "dash__change-pw", 3, "click"], ["class", "dash__info dash__info--full", 4, "ngIf"], [1, "dash__section-title"], [1, "dash__actions"], [1, "dash__action", 3, "click"], [1, "dash__action-icon"], [1, "ri-shopping-bag-line"], [1, "dash__action-title"], [1, "dash__action-desc"], [1, "ri-arrow-right-s-line", "dash__action-arrow"], [1, "dash__action-icon", "dash__action-icon--teal"], [1, "ri-map-pin-line"], [1, "dash__info", "dash__info--full"], [4, "ngIf"]], template: function DashboardComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "div", 2)(1, "div", 3)(2, "div")(3, "h1", 4);
        \u0275\u0275text(4);
        \u0275\u0275pipe(5, "async");
        \u0275\u0275pipe(6, "titleCase");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "p", 5);
        \u0275\u0275text(8, "Here's what's happening with your account.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(9, "button", 6);
        \u0275\u0275listener("click", function DashboardComponent_Template_button_click_9_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.ProfileModal.openModal());
        });
        \u0275\u0275element(10, "i", 7);
        \u0275\u0275text(11, " Edit Profile ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(12, "div", 8)(13, "h3", 9);
        \u0275\u0275text(14, "Profile Information");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "div", 10)(16, "div", 11)(17, "span", 12);
        \u0275\u0275text(18, "Full Name");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(19, "span", 13);
        \u0275\u0275text(20);
        \u0275\u0275pipe(21, "async");
        \u0275\u0275pipe(22, "titleCase");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(23, "div", 11)(24, "span", 12);
        \u0275\u0275text(25, "Email");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(26, "span", 13);
        \u0275\u0275text(27);
        \u0275\u0275pipe(28, "async");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(29, "div", 11)(30, "span", 12);
        \u0275\u0275text(31, "Phone");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(32, "span", 13);
        \u0275\u0275text(33);
        \u0275\u0275pipe(34, "async");
        \u0275\u0275pipe(35, "async");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(36, "div", 11)(37, "span", 12);
        \u0275\u0275text(38, "Password");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(39, "span", 13);
        \u0275\u0275text(40, " \u25CF\u25CF\u25CF\u25CF\u25CF\u25CF\u25CF\u25CF ");
        \u0275\u0275elementStart(41, "a", 14);
        \u0275\u0275listener("click", function DashboardComponent_Template_a_click_41_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.PasswordModal.openModal());
        });
        \u0275\u0275text(42, "Change");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275template(43, DashboardComponent_div_43_Template, 8, 7, "div", 15);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(44, "h3", 16);
        \u0275\u0275text(45, "Quick Actions");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(46, "div", 17)(47, "div", 18);
        \u0275\u0275listener("click", function DashboardComponent_Template_div_click_47_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.navigateTo("order"));
        });
        \u0275\u0275elementStart(48, "div", 19);
        \u0275\u0275element(49, "i", 20);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(50, "div")(51, "h4", 21);
        \u0275\u0275text(52, "My Orders");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(53, "p", 22);
        \u0275\u0275text(54, "Track & manage orders");
        \u0275\u0275elementEnd()();
        \u0275\u0275element(55, "i", 23);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(56, "div", 18);
        \u0275\u0275listener("click", function DashboardComponent_Template_div_click_56_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.navigateTo("addresses"));
        });
        \u0275\u0275elementStart(57, "div", 24);
        \u0275\u0275element(58, "i", 25);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(59, "div")(60, "h4", 21);
        \u0275\u0275text(61, "Saved Addresses");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(62, "p", 22);
        \u0275\u0275text(63, "Manage delivery addresses");
        \u0275\u0275elementEnd()();
        \u0275\u0275element(64, "i", 23);
        \u0275\u0275elementEnd()()();
        \u0275\u0275element(65, "app-edit-profile-modal", null, 0)(67, "app-change-password-modal", null, 1);
      }
      if (rf & 2) {
        let tmp_2_0;
        let tmp_3_0;
        let tmp_4_0;
        let tmp_5_0;
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate1("Hello, ", \u0275\u0275pipeBind1(6, 8, (tmp_2_0 = \u0275\u0275pipeBind1(5, 6, ctx.user$)) == null ? null : tmp_2_0.name), "");
        \u0275\u0275advance(16);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(22, 12, (tmp_3_0 = \u0275\u0275pipeBind1(21, 10, ctx.user$)) == null ? null : tmp_3_0.name));
        \u0275\u0275advance(7);
        \u0275\u0275textInterpolate((tmp_4_0 = \u0275\u0275pipeBind1(28, 14, ctx.user$)) == null ? null : tmp_4_0.email);
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate2("", (tmp_5_0 = \u0275\u0275pipeBind1(34, 16, ctx.user$)) == null ? null : tmp_5_0.country_code, " ", (tmp_5_0 = \u0275\u0275pipeBind1(35, 18, ctx.user$)) == null ? null : tmp_5_0.phone, "");
        \u0275\u0275advance(10);
        \u0275\u0275property("ngIf", ctx.address);
      }
    }, dependencies: [NgIf, EditProfileModalComponent, ChangePasswordModalComponent, AsyncPipe, TitleCasePipe2], styles: ['\n\n.dash[_ngcontent-%COMP%] {\n  max-width: 800px;\n}\n.dash__greeting[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 16px;\n  margin-bottom: 32px;\n}\n@media (max-width: 575px) {\n  .dash__greeting[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n}\n.dash__hello[_ngcontent-%COMP%] {\n  font-family: "Poppins", sans-serif;\n  font-size: 26px;\n  font-weight: 700;\n  color: #1A2518;\n  margin-bottom: 4px;\n  letter-spacing: -0.3px;\n}\n@media (max-width: 575px) {\n  .dash__hello[_ngcontent-%COMP%] {\n    font-size: 22px;\n  }\n}\n.dash__sub[_ngcontent-%COMP%] {\n  font-family: "Poppins", sans-serif;\n  font-size: 14px;\n  color: #999;\n  margin: 0;\n}\n.dash__edit-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  padding: 9px 18px;\n  border: 1.5px solid #ddd8d0;\n  border-radius: 6px;\n  background: #fff;\n  font-family: "Poppins", sans-serif;\n  font-size: 12px;\n  font-weight: 600;\n  color: #1A2518;\n  cursor: pointer;\n  white-space: nowrap;\n  transition: all 0.2s;\n}\n.dash__edit-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.dash__edit-btn[_ngcontent-%COMP%]:hover {\n  border-color: #1A2518;\n}\n.dash__card[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 10px;\n  padding: 28px 32px;\n  margin-bottom: 36px;\n  border: 1px solid #eeebe5;\n}\n@media (max-width: 575px) {\n  .dash__card[_ngcontent-%COMP%] {\n    padding: 20px 18px;\n  }\n}\n.dash__card-title[_ngcontent-%COMP%] {\n  font-family: "Poppins", sans-serif;\n  font-size: 14px;\n  font-weight: 600;\n  color: #1A2518;\n  margin-bottom: 20px;\n  padding-bottom: 14px;\n  border-bottom: 1px solid #f0ede8;\n  text-transform: uppercase;\n  letter-spacing: 0.8px;\n}\n.dash__info-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 20px;\n}\n@media (max-width: 575px) {\n  .dash__info-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 16px;\n  }\n}\n.dash__info--full[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  padding-top: 20px;\n  border-top: 1px solid #f0ede8;\n}\n.dash__info-label[_ngcontent-%COMP%] {\n  display: block;\n  font-family: "Poppins", sans-serif;\n  font-size: 11px;\n  font-weight: 600;\n  color: #aaa;\n  text-transform: uppercase;\n  letter-spacing: 0.8px;\n  margin-bottom: 4px;\n}\n.dash__info-value[_ngcontent-%COMP%] {\n  display: block;\n  font-family: "Poppins", sans-serif;\n  font-size: 14px;\n  color: #1A2518;\n  font-weight: 500;\n  word-break: break-word;\n}\n.dash__change-pw[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #C9A054;\n  text-decoration: none;\n  font-weight: 600;\n  margin-left: 10px;\n}\n.dash__change-pw[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.dash__section-title[_ngcontent-%COMP%] {\n  font-family: "Poppins", sans-serif;\n  font-size: 14px;\n  font-weight: 600;\n  color: #1A2518;\n  margin-bottom: 16px;\n  text-transform: uppercase;\n  letter-spacing: 0.8px;\n}\n.dash__actions[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.dash__action[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  padding: 18px 22px;\n  background: #fff;\n  border: 1px solid #eeebe5;\n  border-radius: 10px;\n  cursor: pointer;\n  transition: all 0.15s;\n}\n.dash__action[_ngcontent-%COMP%]:hover {\n  border-color: #ddd;\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.04);\n}\n.dash__action[_ngcontent-%COMP%]:hover   .dash__action-arrow[_ngcontent-%COMP%] {\n  color: #1A2518;\n  transform: translateX(3px);\n}\n@media (max-width: 575px) {\n  .dash__action[_ngcontent-%COMP%] {\n    padding: 14px 16px;\n  }\n}\n.dash__action-icon[_ngcontent-%COMP%] {\n  width: 42px;\n  height: 42px;\n  border-radius: 8px;\n  background: rgba(26, 37, 24, 0.06);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.dash__action-icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 20px;\n  color: #1A2518;\n}\n.dash__action-icon--teal[_ngcontent-%COMP%] {\n  background: rgba(13, 148, 136, 0.08);\n}\n.dash__action-icon--teal[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #0d9488;\n}\n.dash__action-icon--purple[_ngcontent-%COMP%] {\n  background: rgba(124, 58, 237, 0.08);\n}\n.dash__action-icon--purple[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #7c3aed;\n}\n.dash__action-icon--amber[_ngcontent-%COMP%] {\n  background: rgba(201, 160, 84, 0.1);\n}\n.dash__action-icon--amber[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #C9A054;\n}\n.dash__action-title[_ngcontent-%COMP%] {\n  font-family: "Poppins", sans-serif;\n  font-size: 14px;\n  font-weight: 600;\n  color: #1A2518;\n  margin-bottom: 2px;\n}\n.dash__action-desc[_ngcontent-%COMP%] {\n  font-family: "Poppins", sans-serif;\n  font-size: 12px;\n  color: #aaa;\n  margin: 0;\n}\n.dash__action-arrow[_ngcontent-%COMP%] {\n  margin-left: auto;\n  font-size: 20px;\n  color: #ccc;\n  transition: all 0.15s;\n  flex-shrink: 0;\n}\n/*# sourceMappingURL=dashboard.component.css.map */'] });
  }
};
__decorate([
  Select(AccountState.user)
], DashboardComponent.prototype, "user$", void 0);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DashboardComponent, { className: "DashboardComponent", filePath: "src\\app\\components\\account\\dashboard\\dashboard.component.ts", lineNumber: 15 });
})();

// src/app/components/account/wallet/wallet.component.ts
function WalletComponent_div_5_tr_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "td");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "currencySymbol");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td")(10, "div")(11, "span");
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "titleCase");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const transaction_r1 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(3, 7, transaction_r1 == null ? null : transaction_r1.created_at, "dd MMM yyyy hh:mm:a"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 10, transaction_r1 == null ? null : transaction_r1.amount));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(transaction_r1 == null ? null : transaction_r1.detail);
    \u0275\u0275advance(2);
    \u0275\u0275classMapInterpolate1("status-", transaction_r1 == null ? null : transaction_r1.type, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(13, 12, transaction_r1 == null ? null : transaction_r1.type));
  }
}
function WalletComponent_div_5_nav_37_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "nav", 16)(1, "app-pagination", 17);
    \u0275\u0275pipe(2, "async");
    \u0275\u0275listener("setPage", function WalletComponent_div_5_nav_37_Template_app_pagination_setPage_1_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.setPaginate($event));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("total", ((tmp_2_0 = \u0275\u0275pipeBind1(2, 3, ctx_r2.wallet$)) == null ? null : tmp_2_0.transactions == null ? null : tmp_2_0.transactions.total) || 0)("currentPage", ctx_r2.filter["page"])("pageSize", ctx_r2.filter["paginate"]);
  }
}
function WalletComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4)(1, "div", 5)(2, "div", 6)(3, "div", 7)(4, "div", 8);
    \u0275\u0275element(5, "img", 9);
    \u0275\u0275elementStart(6, "div", 10)(7, "h5");
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "h3");
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "async");
    \u0275\u0275pipe(13, "async");
    \u0275\u0275pipe(14, "currencySymbol");
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(15, "div", 11)(16, "h4", 12);
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div", 13)(20, "table")(21, "tbody")(22, "tr")(23, "th");
    \u0275\u0275text(24);
    \u0275\u0275pipe(25, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "th");
    \u0275\u0275text(27);
    \u0275\u0275pipe(28, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "th");
    \u0275\u0275text(30);
    \u0275\u0275pipe(31, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "th");
    \u0275\u0275text(33);
    \u0275\u0275pipe(34, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(35, WalletComponent_div_5_tr_35_Template, 14, 14, "tr", 14);
    \u0275\u0275pipe(36, "async");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275template(37, WalletComponent_div_5_nav_37_Template, 3, 5, "nav", 15);
    \u0275\u0275pipe(38, "async");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_2_0;
    let tmp_8_0;
    let tmp_9_0;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 9, "wallet balance"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(14, 15, \u0275\u0275pipeBind1(12, 11, ctx_r2.wallet$) ? (tmp_2_0 = \u0275\u0275pipeBind1(13, 13, ctx_r2.wallet$)) == null ? null : tmp_2_0.balance : 0));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(18, 17, "transactions"));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(25, 19, "date"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(28, 21, "Amount"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(31, 23, "Remark"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(34, 25, "Status"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", (tmp_8_0 = \u0275\u0275pipeBind1(36, 27, ctx_r2.wallet$)) == null ? null : tmp_8_0.transactions == null ? null : tmp_8_0.transactions.data);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", (tmp_9_0 = \u0275\u0275pipeBind1(38, 29, ctx_r2.wallet$)) == null ? null : tmp_9_0.transactions == null ? null : tmp_9_0.transactions.data == null ? null : tmp_9_0.transactions.data.length);
  }
}
function WalletComponent_app_no_data_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-no-data", 18);
  }
  if (rf & 2) {
    \u0275\u0275classMap("no-data-added");
    \u0275\u0275property("image", "assets/svg/empty-items.svg")("text", "No Transaction Found")("description", "No Wallet Detected");
  }
}
var WalletComponent = class _WalletComponent {
  constructor(store) {
    this.store = store;
    this.filter = {
      "page": 1,
      "paginate": 10
      // Display per page,
    };
    this.store.dispatch(new GetUserTransaction(this.filter));
  }
  setPaginate(page) {
    this.filter["page"] = page;
    this.store.dispatch(new GetUserTransaction(this.filter));
  }
  static {
    this.\u0275fac = function WalletComponent_Factory(t) {
      return new (t || _WalletComponent)(\u0275\u0275directiveInject(Store));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _WalletComponent, selectors: [["app-wallet"]], decls: 9, vars: 9, consts: [[1, "title-header"], [1, "d-flex", "align-items-center"], ["class", "total-box mt-0", 4, "ngIf"], [3, "class", "image", "text", "description", 4, "ngIf"], [1, "total-box", "mt-0"], [1, "row"], [1, "col-12"], [1, "totle-contain", "wallet-bg"], [1, "wallet-point-box"], ["src", "assets/images/svg/wallet.svg", "alt", "wallet"], [1, "totle-detail"], [1, "wallet-table"], [1, "user-dashboard-title"], [1, "table-responsive"], [4, "ngFor", "ngForOf"], ["class", "custome-pagination", 4, "ngIf"], [1, "custome-pagination"], [3, "setPage", "total", "currentPage", "pageSize"], [3, "image", "text", "description"]], template: function WalletComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h5");
        \u0275\u0275text(3);
        \u0275\u0275pipe(4, "translate");
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(5, WalletComponent_div_5_Template, 39, 31, "div", 2);
        \u0275\u0275pipe(6, "async");
        \u0275\u0275template(7, WalletComponent_app_no_data_7_Template, 1, 5, "app-no-data", 3);
        \u0275\u0275pipe(8, "async");
      }
      if (rf & 2) {
        let tmp_1_0;
        let tmp_2_0;
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 3, "my wallet"));
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", (tmp_1_0 = \u0275\u0275pipeBind1(6, 5, ctx.wallet$)) == null ? null : tmp_1_0.transactions == null ? null : tmp_1_0.transactions.data == null ? null : tmp_1_0.transactions.data.length);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", !((tmp_2_0 = \u0275\u0275pipeBind1(8, 7, ctx.wallet$)) == null ? null : tmp_2_0.transactions == null ? null : tmp_2_0.transactions.data == null ? null : tmp_2_0.transactions.data.length));
      }
    }, dependencies: [NgForOf, NgIf, PaginationComponent, NoDataComponent, AsyncPipe, DatePipe, TitleCasePipe2, CurrencySymbolPipe, TranslatePipe] });
  }
};
__decorate([
  Select(WalletState.wallet)
], WalletComponent.prototype, "wallet$", void 0);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(WalletComponent, { className: "WalletComponent", filePath: "src\\app\\components\\account\\wallet\\wallet.component.ts", lineNumber: 14 });
})();

// src/app/components/account/notification/notification.component.ts
function NotificationComponent_ul_5_li_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li")(1, "h4");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h5");
    \u0275\u0275element(4, "i", 6);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "date");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const notification_r1 = ctx.$implicit;
    \u0275\u0275classProp("unread", !notification_r1.read_at);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(notification_r1 == null ? null : notification_r1.data == null ? null : notification_r1.data.message);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(6, 4, notification_r1 == null ? null : notification_r1.created_at, "dd MMM yyyy hh:mm:a"), "");
  }
}
function NotificationComponent_ul_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul", 4);
    \u0275\u0275template(1, NotificationComponent_ul_5_li_1_Template, 7, 7, "li", 5);
    \u0275\u0275pipe(2, "async");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", \u0275\u0275pipeBind1(2, 1, ctx_r1.notification$));
  }
}
function NotificationComponent_app_no_data_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-no-data", 7);
  }
  if (rf & 2) {
    \u0275\u0275classMap("no-data-added");
    \u0275\u0275property("image", "assets/svg/empty-items.svg")("text", "No Notifications Found")("description", "You Have Not Notification yet");
  }
}
var NotificationComponent = class _NotificationComponent {
  constructor(store) {
    this.store = store;
  }
  ngOnDestroy() {
    this.store.dispatch(new MarkAsReadNotification());
  }
  static {
    this.\u0275fac = function NotificationComponent_Factory(t) {
      return new (t || _NotificationComponent)(\u0275\u0275directiveInject(Store));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NotificationComponent, selectors: [["app-notification"]], decls: 9, vars: 9, consts: [[1, "title-header"], [1, "d-flex", "align-items-center"], ["class", "notification-list", 4, "ngIf"], [3, "class", "image", "text", "description", 4, "ngIf"], [1, "notification-list"], [3, "unread", 4, "ngFor", "ngForOf"], [1, "ri-time-line"], [3, "image", "text", "description"]], template: function NotificationComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h5");
        \u0275\u0275text(3);
        \u0275\u0275pipe(4, "translate");
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(5, NotificationComponent_ul_5_Template, 3, 3, "ul", 2);
        \u0275\u0275pipe(6, "async");
        \u0275\u0275template(7, NotificationComponent_app_no_data_7_Template, 1, 5, "app-no-data", 3);
        \u0275\u0275pipe(8, "async");
      }
      if (rf & 2) {
        let tmp_1_0;
        let tmp_2_0;
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 3, "Notifications"));
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", (tmp_1_0 = \u0275\u0275pipeBind1(6, 5, ctx.notification$)) == null ? null : tmp_1_0.length);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", !((tmp_2_0 = \u0275\u0275pipeBind1(8, 7, ctx.notification$)) == null ? null : tmp_2_0.length));
      }
    }, dependencies: [NgForOf, NgIf, NoDataComponent, AsyncPipe, DatePipe, TranslatePipe] });
  }
};
__decorate([
  Select(NotificationState.notification)
], NotificationComponent.prototype, "notification$", void 0);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NotificationComponent, { className: "NotificationComponent", filePath: "src\\app\\components\\account\\notification\\notification.component.ts", lineNumber: 13 });
})();

// src/app/components/account/bank-details/bank-details.component.ts
var _c03 = () => ["/account/dashboard"];
function BankDetailsComponent_div_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 44);
    \u0275\u0275element(1, "i", 45);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 1, "Only numbers are allowed"));
  }
}
function BankDetailsComponent_div_47_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 44);
    \u0275\u0275element(1, "i", 45);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 1, "Only letters and spaces are allowed"));
  }
}
function BankDetailsComponent_div_56_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 44);
    \u0275\u0275element(1, "i", 45);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 1, "Only letters and spaces are allowed"));
  }
}
function BankDetailsComponent_div_93_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 44);
    \u0275\u0275element(1, "i", 45);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 1, "Please enter a valid email address"));
  }
}
var BankDetailsComponent = class _BankDetailsComponent {
  constructor(store) {
    this.store = store;
    this.active = "bank";
    this.form = new FormGroup({
      bank_account_no: new FormControl("", [Validators.pattern(/^[0-9]*$/)]),
      bank_name: new FormControl("", [Validators.pattern(/^[A-Za-z\s]*$/)]),
      bank_holder_name: new FormControl("", [Validators.pattern(/^[A-Za-z\s]*$/)]),
      swift: new FormControl(),
      ifsc: new FormControl(),
      paypal_email: new FormControl("", [Validators.email])
    });
  }
  ngOnInit() {
    this.store.dispatch(new GetPaymentDetails());
    this.paymentDetails$.subscribe((paymentDetails) => {
      this.form.patchValue({
        bank_account_no: paymentDetails?.bank_account_no,
        bank_name: paymentDetails?.bank_name,
        bank_holder_name: paymentDetails?.bank_holder_name,
        swift: paymentDetails?.swift,
        ifsc: paymentDetails?.ifsc,
        paypal_email: paymentDetails?.paypal_email
      });
    });
  }
  submit() {
    this.form.markAllAsTouched();
    if (this.form.valid) {
      this.store.dispatch(new UpdatePaymentDetails(this.form.value));
    }
  }
  // Input guards: shared helpers
  allowOnlyDigits(event) {
    const allowedControlKeys = [
      "Backspace",
      "Delete",
      "Tab",
      "Enter",
      "Escape",
      "ArrowLeft",
      "ArrowRight",
      "Home",
      "End"
    ];
    if (allowedControlKeys.includes(event.key))
      return;
    if (event.ctrlKey || event.metaKey)
      return;
    if (!/^[0-9]$/.test(event.key)) {
      event.preventDefault();
    }
  }
  sanitizeDigitsInput(event, controlName) {
    const input = event.target;
    const digitsOnly = (input.value || "").replace(/\D/g, "");
    if (digitsOnly !== input.value) {
      input.value = digitsOnly;
      this.form.controls[controlName].setValue(digitsOnly, { emitEvent: false });
    }
  }
  sanitizeDigitsPaste(event) {
    const pasted = event.clipboardData?.getData("text") ?? "";
    if (/\D/.test(pasted)) {
      event.preventDefault();
      const sanitized = pasted.replace(/\D/g, "");
      document.execCommand("insertText", false, sanitized);
    }
  }
  allowOnlyLetters(event) {
    const allowedControlKeys = [
      "Backspace",
      "Delete",
      "Tab",
      "Enter",
      "Escape",
      "ArrowLeft",
      "ArrowRight",
      "Home",
      "End"
    ];
    if (allowedControlKeys.includes(event.key))
      return;
    if (/^[A-Za-z\s]$/.test(event.key))
      return;
    event.preventDefault();
  }
  sanitizeLettersInput(event, controlName) {
    const input = event.target;
    const sanitized = (input.value || "").replace(/[^A-Za-z\s]/g, "");
    if (sanitized !== input.value) {
      input.value = sanitized;
      this.form.controls[controlName].setValue(sanitized, { emitEvent: false });
    }
  }
  sanitizeLettersPaste(event) {
    const pasted = event.clipboardData?.getData("text") ?? "";
    if (/[^A-Za-z\s]/.test(pasted)) {
      event.preventDefault();
      const sanitized = pasted.replace(/[^A-Za-z\s]/g, "");
      document.execCommand("insertText", false, sanitized);
    }
  }
  static {
    this.\u0275fac = function BankDetailsComponent_Factory(t) {
      return new (t || _BankDetailsComponent)(\u0275\u0275directiveInject(Store));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BankDetailsComponent, selectors: [["app-bank-details"]], decls: 100, vars: 75, consts: [[1, "bank-details-page-container"], [1, "bank-details-page-header"], [1, "header-content"], [1, "header-icon-wrapper"], [1, "ri-bank-line"], [1, "header-text-content"], [1, "page-title"], [1, "page-subtitle"], [1, "btn-back-dashboard", 3, "routerLink"], [1, "ri-arrow-left-line"], [3, "ngSubmit", "formGroup"], [1, "bank-details-section"], [1, "section-header"], [1, "section-icon-wrapper"], [1, "ri-bank-card-line"], [1, "section-title"], [1, "section-subtitle"], [1, "form-fields-grid"], [1, "form-field-wrapper"], ["for", "bank_account_no", 1, "form-label-modern"], [1, "ri-numbers-line"], ["type", "text", "id", "bank_account_no", "formControlName", "bank_account_no", 1, "form-input-modern", 3, "keydown", "input", "paste", "placeholder"], ["class", "error-message", 4, "ngIf"], ["for", "bank_name", 1, "form-label-modern"], [1, "ri-building-line"], ["type", "text", "id", "bank_name", "formControlName", "bank_name", 1, "form-input-modern", 3, "keydown", "input", "paste", "placeholder"], ["for", "bank_holder_name", 1, "form-label-modern"], [1, "ri-user-line"], ["type", "text", "id", "bank_holder_name", "formControlName", "bank_holder_name", 1, "form-input-modern", 3, "keydown", "input", "paste", "placeholder"], ["for", "swift", 1, "form-label-modern"], [1, "ri-global-line"], ["type", "text", "id", "swift", "formControlName", "swift", 1, "form-input-modern", 3, "placeholder"], ["for", "ifsc", 1, "form-label-modern"], [1, "ri-file-code-line"], ["type", "text", "id", "ifsc", "formControlName", "ifsc", 1, "form-input-modern", 3, "placeholder"], [1, "paypal-details-section"], [1, "section-icon-wrapper", "paypal-icon"], [1, "ri-paypal-line"], ["for", "paypal_email", 1, "form-label-modern"], [1, "ri-mail-line"], ["type", "email", "id", "paypal_email", "formControlName", "paypal_email", 1, "form-input-modern", 3, "placeholder"], [1, "form-actions"], ["type", "submit", 1, "btn-save"], [1, "ri-save-line"], [1, "error-message"], [1, "ri-error-warning-line"]], template: function BankDetailsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
        \u0275\u0275element(4, "i", 4);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "div", 5)(6, "h4", 6);
        \u0275\u0275text(7);
        \u0275\u0275pipe(8, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "p", 7);
        \u0275\u0275text(10);
        \u0275\u0275pipe(11, "translate");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(12, "a", 8);
        \u0275\u0275element(13, "i", 9);
        \u0275\u0275elementStart(14, "span");
        \u0275\u0275text(15);
        \u0275\u0275pipe(16, "translate");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(17, "form", 10);
        \u0275\u0275listener("ngSubmit", function BankDetailsComponent_Template_form_ngSubmit_17_listener() {
          return ctx.submit();
        });
        \u0275\u0275elementStart(18, "div", 11)(19, "div", 12)(20, "div", 13);
        \u0275\u0275element(21, "i", 14);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(22, "div")(23, "h5", 15);
        \u0275\u0275text(24);
        \u0275\u0275pipe(25, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(26, "p", 16);
        \u0275\u0275text(27);
        \u0275\u0275pipe(28, "translate");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(29, "div", 17)(30, "div", 18)(31, "label", 19);
        \u0275\u0275element(32, "i", 20);
        \u0275\u0275elementStart(33, "span");
        \u0275\u0275text(34);
        \u0275\u0275pipe(35, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(36, "input", 21);
        \u0275\u0275pipe(37, "translate");
        \u0275\u0275listener("keydown", function BankDetailsComponent_Template_input_keydown_36_listener($event) {
          return ctx.allowOnlyDigits($event);
        })("input", function BankDetailsComponent_Template_input_input_36_listener($event) {
          return ctx.sanitizeDigitsInput($event, "bank_account_no");
        })("paste", function BankDetailsComponent_Template_input_paste_36_listener($event) {
          return ctx.sanitizeDigitsPaste($event);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275template(38, BankDetailsComponent_div_38_Template, 5, 3, "div", 22);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(39, "div", 18)(40, "label", 23);
        \u0275\u0275element(41, "i", 24);
        \u0275\u0275elementStart(42, "span");
        \u0275\u0275text(43);
        \u0275\u0275pipe(44, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(45, "input", 25);
        \u0275\u0275pipe(46, "translate");
        \u0275\u0275listener("keydown", function BankDetailsComponent_Template_input_keydown_45_listener($event) {
          return ctx.allowOnlyLetters($event);
        })("input", function BankDetailsComponent_Template_input_input_45_listener($event) {
          return ctx.sanitizeLettersInput($event, "bank_name");
        })("paste", function BankDetailsComponent_Template_input_paste_45_listener($event) {
          return ctx.sanitizeLettersPaste($event);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275template(47, BankDetailsComponent_div_47_Template, 5, 3, "div", 22);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(48, "div", 18)(49, "label", 26);
        \u0275\u0275element(50, "i", 27);
        \u0275\u0275elementStart(51, "span");
        \u0275\u0275text(52);
        \u0275\u0275pipe(53, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(54, "input", 28);
        \u0275\u0275pipe(55, "translate");
        \u0275\u0275listener("keydown", function BankDetailsComponent_Template_input_keydown_54_listener($event) {
          return ctx.allowOnlyLetters($event);
        })("input", function BankDetailsComponent_Template_input_input_54_listener($event) {
          return ctx.sanitizeLettersInput($event, "bank_holder_name");
        })("paste", function BankDetailsComponent_Template_input_paste_54_listener($event) {
          return ctx.sanitizeLettersPaste($event);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275template(56, BankDetailsComponent_div_56_Template, 5, 3, "div", 22);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(57, "div", 18)(58, "label", 29);
        \u0275\u0275element(59, "i", 30);
        \u0275\u0275elementStart(60, "span");
        \u0275\u0275text(61);
        \u0275\u0275pipe(62, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275element(63, "input", 31);
        \u0275\u0275pipe(64, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(65, "div", 18)(66, "label", 32);
        \u0275\u0275element(67, "i", 33);
        \u0275\u0275elementStart(68, "span");
        \u0275\u0275text(69);
        \u0275\u0275pipe(70, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275element(71, "input", 34);
        \u0275\u0275pipe(72, "translate");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(73, "div", 35)(74, "div", 12)(75, "div", 36);
        \u0275\u0275element(76, "i", 37);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(77, "div")(78, "h5", 15);
        \u0275\u0275text(79);
        \u0275\u0275pipe(80, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(81, "p", 16);
        \u0275\u0275text(82);
        \u0275\u0275pipe(83, "translate");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(84, "div", 17)(85, "div", 18)(86, "label", 38);
        \u0275\u0275element(87, "i", 39);
        \u0275\u0275elementStart(88, "span");
        \u0275\u0275text(89);
        \u0275\u0275pipe(90, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275element(91, "input", 40);
        \u0275\u0275pipe(92, "translate");
        \u0275\u0275template(93, BankDetailsComponent_div_93_Template, 5, 3, "div", 22);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(94, "div", 41)(95, "button", 42);
        \u0275\u0275element(96, "i", 43);
        \u0275\u0275elementStart(97, "span");
        \u0275\u0275text(98);
        \u0275\u0275pipe(99, "translate");
        \u0275\u0275elementEnd()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(7);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 34, "Bank Details"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(11, 36, "Manage your payment and bank information"));
        \u0275\u0275advance(2);
        \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(74, _c03));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(16, 38, "Back to Dashboard"));
        \u0275\u0275advance(2);
        \u0275\u0275property("formGroup", ctx.form);
        \u0275\u0275advance(7);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(25, 40, "Bank Details"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(28, 42, "Enter your bank account information"));
        \u0275\u0275advance(7);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(35, 44, "Bank Account No."));
        \u0275\u0275advance(2);
        \u0275\u0275classProp("is-invalid", (ctx.form == null ? null : ctx.form.controls == null ? null : ctx.form.controls["bank_account_no"] == null ? null : ctx.form.controls["bank_account_no"].touched) && (ctx.form.controls["bank_account_no"] == null ? null : ctx.form.controls["bank_account_no"].errors == null ? null : ctx.form.controls["bank_account_no"].errors["pattern"]));
        \u0275\u0275propertyInterpolate("placeholder", \u0275\u0275pipeBind1(37, 46, "Enter bank Account Number"));
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", (ctx.form == null ? null : ctx.form.controls == null ? null : ctx.form.controls["bank_account_no"] == null ? null : ctx.form.controls["bank_account_no"].touched) && (ctx.form.controls["bank_account_no"] == null ? null : ctx.form.controls["bank_account_no"].errors == null ? null : ctx.form.controls["bank_account_no"].errors["pattern"]));
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(44, 48, "Bank Name"));
        \u0275\u0275advance(2);
        \u0275\u0275classProp("is-invalid", (ctx.form == null ? null : ctx.form.controls == null ? null : ctx.form.controls["bank_name"] == null ? null : ctx.form.controls["bank_name"].touched) && (ctx.form.controls["bank_name"] == null ? null : ctx.form.controls["bank_name"].errors == null ? null : ctx.form.controls["bank_name"].errors["pattern"]));
        \u0275\u0275propertyInterpolate("placeholder", \u0275\u0275pipeBind1(46, 50, "Enter Bank Name"));
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", (ctx.form == null ? null : ctx.form.controls == null ? null : ctx.form.controls["bank_name"] == null ? null : ctx.form.controls["bank_name"].touched) && (ctx.form.controls["bank_name"] == null ? null : ctx.form.controls["bank_name"].errors == null ? null : ctx.form.controls["bank_name"].errors["pattern"]));
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(53, 52, "Holder Name"));
        \u0275\u0275advance(2);
        \u0275\u0275classProp("is-invalid", (ctx.form == null ? null : ctx.form.controls == null ? null : ctx.form.controls["bank_holder_name"] == null ? null : ctx.form.controls["bank_holder_name"].touched) && (ctx.form.controls["bank_holder_name"] == null ? null : ctx.form.controls["bank_holder_name"].errors == null ? null : ctx.form.controls["bank_holder_name"].errors["pattern"]));
        \u0275\u0275propertyInterpolate("placeholder", \u0275\u0275pipeBind1(55, 54, "Enter Bank Holder Name"));
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", (ctx.form == null ? null : ctx.form.controls == null ? null : ctx.form.controls["bank_holder_name"] == null ? null : ctx.form.controls["bank_holder_name"].touched) && (ctx.form.controls["bank_holder_name"] == null ? null : ctx.form.controls["bank_holder_name"].errors == null ? null : ctx.form.controls["bank_holder_name"].errors["pattern"]));
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(62, 56, "Swift"));
        \u0275\u0275advance(2);
        \u0275\u0275propertyInterpolate("placeholder", \u0275\u0275pipeBind1(64, 58, "Enter Swift"));
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(70, 60, "IFSC"));
        \u0275\u0275advance(2);
        \u0275\u0275propertyInterpolate("placeholder", \u0275\u0275pipeBind1(72, 62, "Enter IFSC"));
        \u0275\u0275advance(8);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(80, 64, "Paypal Details"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(83, 66, "Enter your PayPal email address"));
        \u0275\u0275advance(7);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(90, 68, "Paypal Email"));
        \u0275\u0275advance(2);
        \u0275\u0275classProp("is-invalid", (ctx.form == null ? null : ctx.form.controls == null ? null : ctx.form.controls["paypal_email"] == null ? null : ctx.form.controls["paypal_email"].touched) && (ctx.form.controls["paypal_email"] == null ? null : ctx.form.controls["paypal_email"].errors == null ? null : ctx.form.controls["paypal_email"].errors["email"]));
        \u0275\u0275propertyInterpolate("placeholder", \u0275\u0275pipeBind1(92, 70, "Enter Paypal Email"));
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", (ctx.form == null ? null : ctx.form.controls == null ? null : ctx.form.controls["paypal_email"] == null ? null : ctx.form.controls["paypal_email"].touched) && (ctx.form.controls["paypal_email"] == null ? null : ctx.form.controls["paypal_email"].errors == null ? null : ctx.form.controls["paypal_email"].errors["email"]));
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(99, 72, "Save"));
      }
    }, dependencies: [NgIf, RouterLink, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, TranslatePipe], styles: ["\n\n.bank-details-page-container[_ngcontent-%COMP%]   .bank-details-page-header[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #f8f9fa 0%,\n      #e9ecef 100%);\n  padding: 30px;\n  border-radius: 16px;\n  margin-bottom: 30px;\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  gap: 20px;\n}\n.bank-details-page-container[_ngcontent-%COMP%]   .bank-details-page-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 20px;\n  flex: 1;\n}\n.bank-details-page-container[_ngcontent-%COMP%]   .bank-details-page-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .header-icon-wrapper[_ngcontent-%COMP%] {\n  width: 60px;\n  height: 60px;\n  border-radius: 14px;\n  background:\n    linear-gradient(\n      135deg,\n      #EA5A26 0%,\n      #ff7a4a 100%);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: white;\n  font-size: 28px;\n  box-shadow: 0 4px 15px rgba(234, 90, 38, 0.3);\n}\n.bank-details-page-container[_ngcontent-%COMP%]   .bank-details-page-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .header-text-content[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%] {\n  color: #222;\n  font-weight: 700;\n  font-size: 24px;\n  margin: 0 0 5px 0;\n}\n.bank-details-page-container[_ngcontent-%COMP%]   .bank-details-page-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .header-text-content[_ngcontent-%COMP%]   .page-subtitle[_ngcontent-%COMP%] {\n  color: #6c757d;\n  font-size: 14px;\n  margin: 0;\n}\n.bank-details-page-container[_ngcontent-%COMP%]   .bank-details-page-header[_ngcontent-%COMP%]   .btn-back-dashboard[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  padding: 12px 24px;\n  background: white;\n  color: #EA5A26;\n  border: 2px solid #EA5A26;\n  border-radius: 10px;\n  text-decoration: none;\n  font-weight: 600;\n  font-size: 14px;\n  transition: all 0.3s ease;\n  box-shadow: 0 2px 8px rgba(234, 90, 38, 0.1);\n}\n.bank-details-page-container[_ngcontent-%COMP%]   .bank-details-page-header[_ngcontent-%COMP%]   .btn-back-dashboard[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.bank-details-page-container[_ngcontent-%COMP%]   .bank-details-page-header[_ngcontent-%COMP%]   .btn-back-dashboard[_ngcontent-%COMP%]:hover {\n  background: #EA5A26;\n  color: white;\n  transform: translateY(-2px);\n  box-shadow: 0 4px 12px rgba(234, 90, 38, 0.3);\n}\n.bank-details-page-container[_ngcontent-%COMP%]   .bank-details-section[_ngcontent-%COMP%], .bank-details-page-container[_ngcontent-%COMP%]   .paypal-details-section[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 16px;\n  padding: 30px;\n  margin-bottom: 30px;\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);\n}\n.bank-details-page-container[_ngcontent-%COMP%]   .bank-details-section[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%], .bank-details-page-container[_ngcontent-%COMP%]   .paypal-details-section[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 15px;\n  margin-bottom: 30px;\n  padding-bottom: 20px;\n  border-bottom: 2px solid #f0f0f0;\n}\n.bank-details-page-container[_ngcontent-%COMP%]   .bank-details-section[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%]   .section-icon-wrapper[_ngcontent-%COMP%], .bank-details-page-container[_ngcontent-%COMP%]   .paypal-details-section[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%]   .section-icon-wrapper[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 50px;\n  border-radius: 12px;\n  background:\n    linear-gradient(\n      135deg,\n      #EA5A26 0%,\n      #ff7a4a 100%);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: white;\n  font-size: 24px;\n  box-shadow: 0 4px 12px rgba(234, 90, 38, 0.25);\n}\n.bank-details-page-container[_ngcontent-%COMP%]   .bank-details-section[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%]   .section-icon-wrapper.paypal-icon[_ngcontent-%COMP%], .bank-details-page-container[_ngcontent-%COMP%]   .paypal-details-section[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%]   .section-icon-wrapper.paypal-icon[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #0070ba 0%,\n      #009cde 100%);\n  box-shadow: 0 4px 12px rgba(0, 112, 186, 0.25);\n}\n.bank-details-page-container[_ngcontent-%COMP%]   .bank-details-section[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%]   .section-title[_ngcontent-%COMP%], .bank-details-page-container[_ngcontent-%COMP%]   .paypal-details-section[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%]   .section-title[_ngcontent-%COMP%] {\n  color: #222;\n  font-weight: 700;\n  font-size: 20px;\n  margin: 0 0 5px 0;\n}\n.bank-details-page-container[_ngcontent-%COMP%]   .bank-details-section[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%]   .section-subtitle[_ngcontent-%COMP%], .bank-details-page-container[_ngcontent-%COMP%]   .paypal-details-section[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%]   .section-subtitle[_ngcontent-%COMP%] {\n  color: #6c757d;\n  font-size: 13px;\n  margin: 0;\n}\n.bank-details-page-container[_ngcontent-%COMP%]   .bank-details-section[_ngcontent-%COMP%]   .form-fields-grid[_ngcontent-%COMP%], .bank-details-page-container[_ngcontent-%COMP%]   .paypal-details-section[_ngcontent-%COMP%]   .form-fields-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n  gap: 25px;\n}\n.bank-details-page-container[_ngcontent-%COMP%]   .bank-details-section[_ngcontent-%COMP%]   .form-fields-grid[_ngcontent-%COMP%]   .form-field-wrapper[_ngcontent-%COMP%]   .form-label-modern[_ngcontent-%COMP%], .bank-details-page-container[_ngcontent-%COMP%]   .paypal-details-section[_ngcontent-%COMP%]   .form-fields-grid[_ngcontent-%COMP%]   .form-field-wrapper[_ngcontent-%COMP%]   .form-label-modern[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  color: #222;\n  font-weight: 600;\n  font-size: 14px;\n  margin-bottom: 10px;\n  text-transform: capitalize;\n}\n.bank-details-page-container[_ngcontent-%COMP%]   .bank-details-section[_ngcontent-%COMP%]   .form-fields-grid[_ngcontent-%COMP%]   .form-field-wrapper[_ngcontent-%COMP%]   .form-label-modern[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], .bank-details-page-container[_ngcontent-%COMP%]   .paypal-details-section[_ngcontent-%COMP%]   .form-fields-grid[_ngcontent-%COMP%]   .form-field-wrapper[_ngcontent-%COMP%]   .form-label-modern[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #EA5A26;\n  font-size: 18px;\n}\n.bank-details-page-container[_ngcontent-%COMP%]   .bank-details-section[_ngcontent-%COMP%]   .form-fields-grid[_ngcontent-%COMP%]   .form-field-wrapper[_ngcontent-%COMP%]   .form-input-modern[_ngcontent-%COMP%], .bank-details-page-container[_ngcontent-%COMP%]   .paypal-details-section[_ngcontent-%COMP%]   .form-fields-grid[_ngcontent-%COMP%]   .form-field-wrapper[_ngcontent-%COMP%]   .form-input-modern[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 14px 18px;\n  border: 2px solid #e9ecef;\n  border-radius: 10px;\n  font-size: 15px;\n  color: #222;\n  background: #f8f9fa;\n  transition: all 0.3s ease;\n  font-family: inherit;\n}\n.bank-details-page-container[_ngcontent-%COMP%]   .bank-details-section[_ngcontent-%COMP%]   .form-fields-grid[_ngcontent-%COMP%]   .form-field-wrapper[_ngcontent-%COMP%]   .form-input-modern[_ngcontent-%COMP%]:focus, .bank-details-page-container[_ngcontent-%COMP%]   .paypal-details-section[_ngcontent-%COMP%]   .form-fields-grid[_ngcontent-%COMP%]   .form-field-wrapper[_ngcontent-%COMP%]   .form-input-modern[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #EA5A26;\n  background: white;\n  box-shadow: 0 0 0 4px rgba(234, 90, 38, 0.1);\n}\n.bank-details-page-container[_ngcontent-%COMP%]   .bank-details-section[_ngcontent-%COMP%]   .form-fields-grid[_ngcontent-%COMP%]   .form-field-wrapper[_ngcontent-%COMP%]   .form-input-modern[_ngcontent-%COMP%]::placeholder, .bank-details-page-container[_ngcontent-%COMP%]   .paypal-details-section[_ngcontent-%COMP%]   .form-fields-grid[_ngcontent-%COMP%]   .form-field-wrapper[_ngcontent-%COMP%]   .form-input-modern[_ngcontent-%COMP%]::placeholder {\n  color: #adb5bd;\n}\n.bank-details-page-container[_ngcontent-%COMP%]   .bank-details-section[_ngcontent-%COMP%]   .form-fields-grid[_ngcontent-%COMP%]   .form-field-wrapper[_ngcontent-%COMP%]   .form-input-modern.is-invalid[_ngcontent-%COMP%], .bank-details-page-container[_ngcontent-%COMP%]   .paypal-details-section[_ngcontent-%COMP%]   .form-fields-grid[_ngcontent-%COMP%]   .form-field-wrapper[_ngcontent-%COMP%]   .form-input-modern.is-invalid[_ngcontent-%COMP%] {\n  border-color: #dc3545;\n  background: #fff5f5;\n}\n.bank-details-page-container[_ngcontent-%COMP%]   .bank-details-section[_ngcontent-%COMP%]   .form-fields-grid[_ngcontent-%COMP%]   .form-field-wrapper[_ngcontent-%COMP%]   .form-input-modern.is-invalid[_ngcontent-%COMP%]:focus, .bank-details-page-container[_ngcontent-%COMP%]   .paypal-details-section[_ngcontent-%COMP%]   .form-fields-grid[_ngcontent-%COMP%]   .form-field-wrapper[_ngcontent-%COMP%]   .form-input-modern.is-invalid[_ngcontent-%COMP%]:focus {\n  border-color: #dc3545;\n  box-shadow: 0 0 0 4px rgba(220, 53, 69, 0.1);\n}\n.bank-details-page-container[_ngcontent-%COMP%]   .bank-details-section[_ngcontent-%COMP%]   .form-fields-grid[_ngcontent-%COMP%]   .form-field-wrapper[_ngcontent-%COMP%]   .error-message[_ngcontent-%COMP%], .bank-details-page-container[_ngcontent-%COMP%]   .paypal-details-section[_ngcontent-%COMP%]   .form-fields-grid[_ngcontent-%COMP%]   .form-field-wrapper[_ngcontent-%COMP%]   .error-message[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  color: #dc3545;\n  font-size: 13px;\n  margin-top: 8px;\n  font-weight: 500;\n}\n.bank-details-page-container[_ngcontent-%COMP%]   .bank-details-section[_ngcontent-%COMP%]   .form-fields-grid[_ngcontent-%COMP%]   .form-field-wrapper[_ngcontent-%COMP%]   .error-message[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], .bank-details-page-container[_ngcontent-%COMP%]   .paypal-details-section[_ngcontent-%COMP%]   .form-fields-grid[_ngcontent-%COMP%]   .form-field-wrapper[_ngcontent-%COMP%]   .error-message[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.bank-details-page-container[_ngcontent-%COMP%]   .form-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  margin-top: 20px;\n}\n.bank-details-page-container[_ngcontent-%COMP%]   .form-actions[_ngcontent-%COMP%]   .btn-save[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  padding: 14px 32px;\n  background: #EA5A26;\n  color: white;\n  border: none;\n  border-radius: 10px;\n  font-weight: 600;\n  font-size: 15px;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  box-shadow: 0 4px 15px rgba(234, 90, 38, 0.3);\n}\n.bank-details-page-container[_ngcontent-%COMP%]   .form-actions[_ngcontent-%COMP%]   .btn-save[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.bank-details-page-container[_ngcontent-%COMP%]   .form-actions[_ngcontent-%COMP%]   .btn-save[_ngcontent-%COMP%]:hover {\n  opacity: 0.9;\n  transform: translateY(-2px);\n  box-shadow: 0 6px 20px rgba(234, 90, 38, 0.4);\n}\n.bank-details-page-container[_ngcontent-%COMP%]   .form-actions[_ngcontent-%COMP%]   .btn-save[_ngcontent-%COMP%]:active {\n  transform: translateY(0);\n}\n@media (max-width: 768px) {\n  .bank-details-page-container[_ngcontent-%COMP%]   .bank-details-page-header[_ngcontent-%COMP%] {\n    padding: 20px;\n    flex-direction: column;\n    align-items: flex-start;\n  }\n  .bank-details-page-container[_ngcontent-%COMP%]   .bank-details-page-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .bank-details-page-container[_ngcontent-%COMP%]   .bank-details-page-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .header-icon-wrapper[_ngcontent-%COMP%] {\n    width: 50px;\n    height: 50px;\n    font-size: 24px;\n  }\n  .bank-details-page-container[_ngcontent-%COMP%]   .bank-details-page-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .header-text-content[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%] {\n    font-size: 20px;\n  }\n  .bank-details-page-container[_ngcontent-%COMP%]   .bank-details-page-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .header-text-content[_ngcontent-%COMP%]   .page-subtitle[_ngcontent-%COMP%] {\n    font-size: 13px;\n  }\n  .bank-details-page-container[_ngcontent-%COMP%]   .bank-details-page-header[_ngcontent-%COMP%]   .btn-back-dashboard[_ngcontent-%COMP%] {\n    width: 100%;\n    justify-content: center;\n  }\n  .bank-details-page-container[_ngcontent-%COMP%]   .bank-details-section[_ngcontent-%COMP%], .bank-details-page-container[_ngcontent-%COMP%]   .paypal-details-section[_ngcontent-%COMP%] {\n    padding: 20px;\n  }\n  .bank-details-page-container[_ngcontent-%COMP%]   .bank-details-section[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%], .bank-details-page-container[_ngcontent-%COMP%]   .paypal-details-section[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n    text-align: left;\n  }\n  .bank-details-page-container[_ngcontent-%COMP%]   .bank-details-section[_ngcontent-%COMP%]   .form-fields-grid[_ngcontent-%COMP%], .bank-details-page-container[_ngcontent-%COMP%]   .paypal-details-section[_ngcontent-%COMP%]   .form-fields-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 20px;\n  }\n  .bank-details-page-container[_ngcontent-%COMP%]   .form-actions[_ngcontent-%COMP%]   .btn-save[_ngcontent-%COMP%] {\n    width: 100%;\n    justify-content: center;\n  }\n}\n@media (max-width: 576px) {\n  .bank-details-page-container[_ngcontent-%COMP%]   .bank-details-page-header[_ngcontent-%COMP%] {\n    padding: 15px;\n  }\n  .bank-details-page-container[_ngcontent-%COMP%]   .bank-details-page-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%] {\n    flex-direction: column;\n    text-align: center;\n    gap: 15px;\n  }\n  .bank-details-page-container[_ngcontent-%COMP%]   .bank-details-page-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .header-icon-wrapper[_ngcontent-%COMP%] {\n    margin: 0 auto;\n  }\n  .bank-details-page-container[_ngcontent-%COMP%]   .bank-details-section[_ngcontent-%COMP%], .bank-details-page-container[_ngcontent-%COMP%]   .paypal-details-section[_ngcontent-%COMP%] {\n    padding: 15px;\n  }\n}\n/*# sourceMappingURL=bank-details.component.css.map */"] });
  }
};
__decorate([
  Select(PaymentDetailsState.paymentDetails)
], BankDetailsComponent.prototype, "paymentDetails$", void 0);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BankDetailsComponent, { className: "BankDetailsComponent", filePath: "src\\app\\components\\account\\bank-details\\bank-details.component.ts", lineNumber: 14 });
})();

// src/app/components/account/point/point.component.ts
function PointComponent_div_5_tr_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "td");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "td");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td")(9, "div")(10, "span");
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "titleCase");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const transaction_r1 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(3, 7, transaction_r1 == null ? null : transaction_r1.created_at, "dd MMM yyyy hh:mm:a"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", transaction_r1 == null ? null : transaction_r1.amount, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(transaction_r1 == null ? null : transaction_r1.detail);
    \u0275\u0275advance(2);
    \u0275\u0275classMapInterpolate1("status-", transaction_r1 == null ? null : transaction_r1.type, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(12, 10, transaction_r1 == null ? null : transaction_r1.type));
  }
}
function PointComponent_div_5_nav_43_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "nav", 18)(1, "app-pagination", 19);
    \u0275\u0275pipe(2, "async");
    \u0275\u0275listener("setPage", function PointComponent_div_5_nav_43_Template_app_pagination_setPage_1_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.setPaginate($event));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("total", ((tmp_2_0 = \u0275\u0275pipeBind1(2, 3, ctx_r2.point$)) == null ? null : tmp_2_0.transactions == null ? null : tmp_2_0.transactions.total) || 0)("currentPage", ctx_r2.filter["page"])("pageSize", ctx_r2.filter["paginate"]);
  }
}
function PointComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4)(1, "div", 5)(2, "div", 6)(3, "div", 7)(4, "div", 8);
    \u0275\u0275element(5, "img", 9);
    \u0275\u0275elementStart(6, "div", 10)(7, "h5");
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "h3");
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "async");
    \u0275\u0275pipe(13, "async");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(14, "div", 11)(15, "h3", 12);
    \u0275\u0275element(16, "i", 13);
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "translate");
    \u0275\u0275pipe(19, "async");
    \u0275\u0275pipe(20, "currencySymbol");
    \u0275\u0275pipe(21, "translate");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(22, "div", 14)(23, "h4", 15);
    \u0275\u0275text(24);
    \u0275\u0275pipe(25, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "table")(27, "tbody")(28, "tr")(29, "th");
    \u0275\u0275text(30);
    \u0275\u0275pipe(31, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "th");
    \u0275\u0275text(33);
    \u0275\u0275pipe(34, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "th");
    \u0275\u0275text(36);
    \u0275\u0275pipe(37, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "th");
    \u0275\u0275text(39);
    \u0275\u0275pipe(40, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(41, PointComponent_div_5_tr_41_Template, 13, 12, "tr", 16);
    \u0275\u0275pipe(42, "async");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(43, PointComponent_div_5_nav_43_Template, 3, 5, "nav", 17);
    \u0275\u0275pipe(44, "async");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_2_0;
    let tmp_3_0;
    let tmp_9_0;
    let tmp_10_0;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 12, "Total Points"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(12, 14, ctx_r2.point$) ? (tmp_2_0 = \u0275\u0275pipeBind1(13, 16, ctx_r2.point$)) == null ? null : tmp_2_0.balance : 0);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate3(" ", \u0275\u0275pipeBind1(18, 18, "1_point"), " = ", \u0275\u0275pipeBind1(20, 22, 1 / ((tmp_3_0 = \u0275\u0275pipeBind1(19, 20, ctx_r2.setting$)) == null ? null : tmp_3_0.wallet_points == null ? null : tmp_3_0.wallet_points.point_currency_ratio)), " ", \u0275\u0275pipeBind1(21, 24, "Balance"), " ");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(25, 26, "Transactions"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(31, 28, "Date"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(34, 30, "Points"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(37, 32, "Remark"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(40, 34, "Status"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", (tmp_9_0 = \u0275\u0275pipeBind1(42, 36, ctx_r2.point$)) == null ? null : tmp_9_0.transactions == null ? null : tmp_9_0.transactions.data);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", (tmp_10_0 = \u0275\u0275pipeBind1(44, 38, ctx_r2.point$)) == null ? null : tmp_10_0.transactions == null ? null : tmp_10_0.transactions.data == null ? null : tmp_10_0.transactions.data.length);
  }
}
function PointComponent_app_no_data_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-no-data", 20);
  }
  if (rf & 2) {
    \u0275\u0275classMap("no-data-added");
    \u0275\u0275property("image", "assets/svg/empty-items.svg")("text", "no_transaction_found")("description", "You_have_not_earned_yet");
  }
}
var PointComponent = class _PointComponent {
  constructor(store) {
    this.store = store;
    this.filter = {
      "page": 1,
      "paginate": 10
      // Display per page,
    };
    this.store.dispatch(new GetUserTransaction2(this.filter));
  }
  setPaginate(page) {
    this.filter["page"] = page;
    this.store.dispatch(new GetUserTransaction2(this.filter));
  }
  static {
    this.\u0275fac = function PointComponent_Factory(t) {
      return new (t || _PointComponent)(\u0275\u0275directiveInject(Store));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PointComponent, selectors: [["app-point"]], decls: 9, vars: 9, consts: [[1, "title-header"], [1, "d-flex", "align-items-center"], ["class", "total-box mt-0", 4, "ngIf"], [3, "class", "image", "text", "description", 4, "ngIf"], [1, "total-box", "mt-0"], [1, "row"], [1, "col-12"], [1, "totle-contain", "wallet-bg"], [1, "wallet-point-box"], ["src", "assets/images/svg/coin.svg", "alt", "coin", 1, "img-fluid"], [1, "totle-detail"], [1, "point-ratio"], [1, "counter"], [1, "ri-information-line", "me-2"], [1, "wallet-table"], [1, "user-dashboard-title"], [4, "ngFor", "ngForOf"], ["class", "custome-pagination", 4, "ngIf"], [1, "custome-pagination"], [3, "setPage", "total", "currentPage", "pageSize"], [3, "image", "text", "description"]], template: function PointComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h5");
        \u0275\u0275text(3);
        \u0275\u0275pipe(4, "translate");
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(5, PointComponent_div_5_Template, 45, 40, "div", 2);
        \u0275\u0275pipe(6, "async");
        \u0275\u0275template(7, PointComponent_app_no_data_7_Template, 1, 5, "app-no-data", 3);
        \u0275\u0275pipe(8, "async");
      }
      if (rf & 2) {
        let tmp_1_0;
        let tmp_2_0;
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 3, "Points"));
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", (tmp_1_0 = \u0275\u0275pipeBind1(6, 5, ctx.point$)) == null ? null : tmp_1_0.transactions == null ? null : tmp_1_0.transactions.data == null ? null : tmp_1_0.transactions.data.length);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", !((tmp_2_0 = \u0275\u0275pipeBind1(8, 7, ctx.point$)) == null ? null : tmp_2_0.transactions == null ? null : tmp_2_0.transactions.data == null ? null : tmp_2_0.transactions.data.length));
      }
    }, dependencies: [NgForOf, NgIf, PaginationComponent, NoDataComponent, AsyncPipe, DatePipe, TitleCasePipe2, CurrencySymbolPipe, TranslatePipe] });
  }
};
__decorate([
  Select(SettingState.setting)
], PointComponent.prototype, "setting$", void 0);
__decorate([
  Select(PointState.point)
], PointComponent.prototype, "point$", void 0);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PointComponent, { className: "PointComponent", filePath: "src\\app\\components\\account\\point\\point.component.ts", lineNumber: 16 });
})();

// src/app/components/account/orders/orders.component.ts
var _c04 = (a0) => ["/account/order/details", a0];
function OrdersComponent_div_8_div_1_span_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "UPI Intent");
    \u0275\u0275elementEnd();
  }
}
function OrdersComponent_div_8_div_1_span_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Cash Free");
    \u0275\u0275elementEnd();
  }
}
function OrdersComponent_div_8_div_1_span_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "UPI App");
    \u0275\u0275elementEnd();
  }
}
function OrdersComponent_div_8_div_1_span_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "titleCase");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const order_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, order_r1 == null ? null : order_r1.payment_method));
  }
}
function OrdersComponent_div_8_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9)(1, "div", 10)(2, "div", 11)(3, "span", 12);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 13);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "span");
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "titleCase");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 14)(12, "div", 15)(13, "span", 16);
    \u0275\u0275text(14, "Amount");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "span", 17);
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "currencySymbol");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 15)(19, "span", 16);
    \u0275\u0275text(20, "Payment");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "span", 18);
    \u0275\u0275elementContainerStart(22, 19);
    \u0275\u0275template(23, OrdersComponent_div_8_div_1_span_23_Template, 2, 0, "span", 20)(24, OrdersComponent_div_8_div_1_span_24_Template, 2, 0, "span", 20)(25, OrdersComponent_div_8_div_1_span_25_Template, 2, 0, "span", 20)(26, OrdersComponent_div_8_div_1_span_26_Template, 3, 3, "span", 21);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(27, "a", 22);
    \u0275\u0275text(28, " View Details ");
    \u0275\u0275element(29, "i", 23);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const order_r1 = ctx.$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("#", order_r1.order_number, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(7, 12, order_r1 == null ? null : order_r1.created_at, "dd MMM yyyy"));
    \u0275\u0275advance(2);
    \u0275\u0275classMapInterpolate1("ord__status ord__status--", order_r1 == null ? null : order_r1.payment_status == null ? null : order_r1.payment_status.toLowerCase(), "");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(10, 15, order_r1 == null ? null : order_r1.payment_status), " ");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(17, 17, order_r1 == null ? null : order_r1.total));
    \u0275\u0275advance(6);
    \u0275\u0275property("ngSwitch", order_r1 == null ? null : order_r1.payment_method);
    \u0275\u0275advance();
    \u0275\u0275property("ngSwitchCase", "GROFAB_nabu");
    \u0275\u0275advance();
    \u0275\u0275property("ngSwitchCase", "pay_drill");
    \u0275\u0275advance();
    \u0275\u0275property("ngSwitchCase", "star_mangal");
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(19, _c04, order_r1.order_number));
  }
}
function OrdersComponent_div_8_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 24)(1, "app-pagination", 25);
    \u0275\u0275pipe(2, "async");
    \u0275\u0275listener("setPage", function OrdersComponent_div_8_div_3_Template_app_pagination_setPage_1_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.setPaginate($event));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("total", ((tmp_2_0 = \u0275\u0275pipeBind1(2, 3, ctx_r2.order$)) == null ? null : tmp_2_0.total) || 0)("currentPage", ctx_r2.filter["page"])("pageSize", ctx_r2.filter["paginate"]);
  }
}
function OrdersComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275template(1, OrdersComponent_div_8_div_1_Template, 30, 21, "div", 7);
    \u0275\u0275pipe(2, "async");
    \u0275\u0275template(3, OrdersComponent_div_8_div_3_Template, 3, 5, "div", 8);
    \u0275\u0275pipe(4, "async");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_1_0;
    let tmp_2_0;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", (tmp_1_0 = \u0275\u0275pipeBind1(2, 2, ctx_r2.order$)) == null ? null : tmp_1_0.data);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", (tmp_2_0 = \u0275\u0275pipeBind1(4, 4, ctx_r2.order$)) == null ? null : tmp_2_0.data == null ? null : tmp_2_0.data.length);
  }
}
function OrdersComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 26);
    \u0275\u0275element(1, "i", 27);
    \u0275\u0275elementStart(2, "h4");
    \u0275\u0275text(3, "No orders yet");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p");
    \u0275\u0275text(5, "Your order history will appear here.");
    \u0275\u0275elementEnd()();
  }
}
var OrdersComponent = class _OrdersComponent {
  constructor(store) {
    this.store = store;
    this.filter = {
      "page": 1,
      "paginate": 10
      // Display per page,
    };
    this.store.dispatch(new GetOrders(this.filter));
  }
  setPaginate(page) {
    this.filter["page"] = page;
    this.store.dispatch(new GetOrders(this.filter));
  }
  static {
    this.\u0275fac = function OrdersComponent_Factory(t) {
      return new (t || _OrdersComponent)(\u0275\u0275directiveInject(Store));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _OrdersComponent, selectors: [["app-orders"]], decls: 12, vars: 9, consts: [[1, "ord"], [1, "ord__header"], [1, "ord__title"], [1, "ord__sub"], ["class", "ord__list", 4, "ngIf"], ["class", "ord__empty", 4, "ngIf"], [1, "ord__list"], ["class", "ord__card", 4, "ngFor", "ngForOf"], ["class", "ord__pagination", 4, "ngIf"], [1, "ord__card"], [1, "ord__card-top"], [1, "ord__card-info"], [1, "ord__number"], [1, "ord__date"], [1, "ord__card-body"], [1, "ord__detail"], [1, "ord__detail-label"], [1, "ord__detail-value", "ord__amount"], [1, "ord__detail-value"], [3, "ngSwitch"], [4, "ngSwitchCase"], [4, "ngSwitchDefault"], [1, "ord__view-link", 3, "routerLink"], [1, "ri-arrow-right-s-line"], [1, "ord__pagination"], [3, "setPage", "total", "currentPage", "pageSize"], [1, "ord__empty"], [1, "ri-shopping-bag-line"]], template: function OrdersComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h1", 2);
        \u0275\u0275text(4);
        \u0275\u0275pipe(5, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "p", 3);
        \u0275\u0275text(7, "View and track all your orders");
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(8, OrdersComponent_div_8_Template, 5, 6, "div", 4);
        \u0275\u0275pipe(9, "async");
        \u0275\u0275template(10, OrdersComponent_div_10_Template, 6, 0, "div", 5);
        \u0275\u0275pipe(11, "async");
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        let tmp_1_0;
        let tmp_2_0;
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 3, "My Orders"));
        \u0275\u0275advance(4);
        \u0275\u0275property("ngIf", (tmp_1_0 = \u0275\u0275pipeBind1(9, 5, ctx.order$)) == null ? null : tmp_1_0.data == null ? null : tmp_1_0.data.length);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", !((tmp_2_0 = \u0275\u0275pipeBind1(11, 7, ctx.order$)) == null ? null : tmp_2_0.data == null ? null : tmp_2_0.data.length));
      }
    }, dependencies: [NgForOf, NgIf, NgSwitch, NgSwitchCase, NgSwitchDefault, RouterLink, PaginationComponent, AsyncPipe, DatePipe, TitleCasePipe2, CurrencySymbolPipe, TranslatePipe], styles: ['\n\n.ord[_ngcontent-%COMP%] {\n  max-width: 800px;\n}\n.ord__header[_ngcontent-%COMP%] {\n  margin-bottom: 28px;\n}\n.ord__title[_ngcontent-%COMP%] {\n  font-family: "Poppins", sans-serif;\n  font-size: 26px;\n  font-weight: 700;\n  color: #1A2518;\n  margin-bottom: 4px;\n}\n.ord__sub[_ngcontent-%COMP%] {\n  font-family: "Poppins", sans-serif;\n  font-size: 14px;\n  color: #999;\n  margin: 0;\n}\n.ord__list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.ord__card[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1px solid #eeebe5;\n  border-radius: 10px;\n  overflow: hidden;\n}\n.ord__card-top[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 16px 22px;\n  border-bottom: 1px solid #f5f3ee;\n  gap: 12px;\n  flex-wrap: wrap;\n}\n.ord__card-info[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n}\n.ord__number[_ngcontent-%COMP%] {\n  font-family: "Poppins", sans-serif;\n  font-size: 14px;\n  font-weight: 700;\n  color: #1A2518;\n}\n.ord__date[_ngcontent-%COMP%] {\n  font-family: "Poppins", sans-serif;\n  font-size: 12px;\n  color: #aaa;\n}\n.ord__status[_ngcontent-%COMP%] {\n  font-family: "Poppins", sans-serif;\n  font-size: 11px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  padding: 4px 12px;\n  border-radius: 4px;\n}\n.ord__status--completed[_ngcontent-%COMP%], .ord__status--delivered[_ngcontent-%COMP%], .ord__status--success[_ngcontent-%COMP%] {\n  background: rgba(22, 163, 74, 0.08);\n  color: #16a34a;\n}\n.ord__status--pending[_ngcontent-%COMP%], .ord__status--processing[_ngcontent-%COMP%] {\n  background: rgba(201, 160, 84, 0.12);\n  color: #b28738;\n}\n.ord__status--cancelled[_ngcontent-%COMP%], .ord__status--failed[_ngcontent-%COMP%] {\n  background: rgba(220, 38, 38, 0.08);\n  color: #dc2626;\n}\n.ord__card-body[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 32px;\n  padding: 16px 22px;\n}\n@media (max-width: 575px) {\n  .ord__card-body[_ngcontent-%COMP%] {\n    gap: 20px;\n  }\n}\n.ord__detail[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.ord__detail-label[_ngcontent-%COMP%] {\n  font-family: "Poppins", sans-serif;\n  font-size: 11px;\n  font-weight: 600;\n  color: #aaa;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.ord__detail-value[_ngcontent-%COMP%] {\n  font-family: "Poppins", sans-serif;\n  font-size: 14px;\n  color: #1A2518;\n  font-weight: 500;\n}\n.ord__amount[_ngcontent-%COMP%] {\n  font-weight: 700 !important;\n}\n.ord__view-link[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 4px;\n  padding: 13px 22px;\n  border-top: 1px solid #f0ede8;\n  font-family: "Poppins", sans-serif;\n  font-size: 13px;\n  font-weight: 600;\n  color: #1A2518;\n  text-decoration: none;\n  transition: all 0.15s;\n}\n.ord__view-link[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 18px;\n  transition: transform 0.15s;\n}\n.ord__view-link[_ngcontent-%COMP%]:hover {\n  background: #faf9f6;\n  color: #C9A054;\n}\n.ord__view-link[_ngcontent-%COMP%]:hover   i[_ngcontent-%COMP%] {\n  transform: translateX(3px);\n}\n.ord__pagination[_ngcontent-%COMP%] {\n  margin-top: 24px;\n  display: flex;\n  justify-content: center;\n}\n.ord__empty[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 60px 20px;\n  background: #fff;\n  border: 1px solid #eeebe5;\n  border-radius: 10px;\n}\n.ord__empty[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 48px;\n  color: #ddd;\n  margin-bottom: 16px;\n  display: block;\n}\n.ord__empty[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-family: "Poppins", sans-serif;\n  font-size: 16px;\n  font-weight: 600;\n  color: #1A2518;\n  margin-bottom: 6px;\n}\n.ord__empty[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-family: "Poppins", sans-serif;\n  font-size: 13px;\n  color: #aaa;\n  margin: 0;\n}\n/*# sourceMappingURL=orders.component.css.map */'] });
  }
};
__decorate([
  Select(OrderState.order)
], OrdersComponent.prototype, "order$", void 0);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(OrdersComponent, { className: "OrdersComponent", filePath: "src\\app\\components\\account\\orders\\orders.component.ts", lineNumber: 14 });
})();

// src/app/components/account/orders/details/details.component.ts
var _c05 = ["refundModal"];
var _c13 = ["payModal"];
var _c22 = (a0) => ({ "d-none": a0 });
var _c32 = (a0) => ["/account/order/details", a0];
function OrderDetailsComponent_div_0_a_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 26);
    \u0275\u0275listener("click", function OrderDetailsComponent_div_0_a_9_Template_a_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(2);
      const payModal_r3 = \u0275\u0275reference(4);
      return \u0275\u0275resetView(payModal_r3.openModal(ctx_r1.order));
    });
    \u0275\u0275text(1, " Pay Now ");
    \u0275\u0275elementEnd();
  }
}
function OrderDetailsComponent_div_0_a_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 27);
    \u0275\u0275listener("click", function OrderDetailsComponent_div_0_a_10_Template_a_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.download(ctx_r1.order.order_number));
    });
    \u0275\u0275element(1, "i", 28);
    \u0275\u0275text(2, " Invoice ");
    \u0275\u0275elementEnd();
  }
}
function OrderDetailsComponent_div_0_div_11_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 33);
    \u0275\u0275element(1, "div", 34);
    \u0275\u0275elementStart(2, "span", 35);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "titleCase");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const orderStatus_r5 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("active", (orderStatus_r5 == null ? null : orderStatus_r5.sequence) <= ctx_r1.order.order_status.sequence)("done", (orderStatus_r5 == null ? null : orderStatus_r5.sequence) < ctx_r1.order.order_status.sequence);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(8, _c22, (orderStatus_r5 == null ? null : orderStatus_r5.sequence) >= ctx_r1.order.order_status.sequence && (ctx_r1.order.order_status && ctx_r1.order.order_status.slug == "cancelled") || (orderStatus_r5 == null ? null : orderStatus_r5.slug) == "cancelled" || ctx_r1.order.is_digital_only && ((orderStatus_r5 == null ? null : orderStatus_r5.slug) == "shipped" || (orderStatus_r5 == null ? null : orderStatus_r5.slug) == "out-for-delivery")));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 6, orderStatus_r5 == null ? null : orderStatus_r5.name));
  }
}
function OrderDetailsComponent_div_0_div_11_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 36);
    \u0275\u0275element(1, "div", 34);
    \u0275\u0275elementStart(2, "span", 35);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "titlecase");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 1, ctx_r1.order.order_status.name.replace("_", " ")));
  }
}
function OrderDetailsComponent_div_0_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 29)(1, "h3", 17);
    \u0275\u0275text(2, "Order Tracking");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 30);
    \u0275\u0275template(4, OrderDetailsComponent_div_0_div_11_div_4_Template, 5, 10, "div", 31);
    \u0275\u0275pipe(5, "async");
    \u0275\u0275template(6, OrderDetailsComponent_div_0_div_11_div_6_Template, 5, 3, "div", 32);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_4_0;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", (tmp_4_0 = \u0275\u0275pipeBind1(5, 2, ctx_r1.orderStatus$)) == null ? null : tmp_4_0.data);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", (ctx_r1.order == null ? null : ctx_r1.order.order_status == null ? null : ctx_r1.order.order_status.slug) == "cancelled");
  }
}
function OrderDetailsComponent_div_0_div_12_div_3_a_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 46);
    \u0275\u0275listener("click", function OrderDetailsComponent_div_0_div_12_div_3_a_13_Template_a_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const product_r7 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      const refundModal_r8 = \u0275\u0275reference(2);
      return \u0275\u0275resetView(refundModal_r8.openModal(product_r7, ctx_r1.order.id));
    });
    \u0275\u0275text(1, " Refund ");
    \u0275\u0275elementEnd();
  }
}
function OrderDetailsComponent_div_0_div_12_div_3_ng_template_14_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "span", 48);
    \u0275\u0275text(2, "Non Refundable");
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
}
function OrderDetailsComponent_div_0_div_12_div_3_ng_template_14_ng_template_1_span_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 50);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "titleCase");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const product_r7 = \u0275\u0275nextContext(3).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, product_r7 == null ? null : product_r7.pivot == null ? null : product_r7.pivot.refund_status), " ");
  }
}
function OrderDetailsComponent_div_0_div_12_div_3_ng_template_14_ng_template_1_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 51);
    \u0275\u0275text(1, "Refund");
    \u0275\u0275elementEnd();
  }
}
function OrderDetailsComponent_div_0_div_12_div_3_ng_template_14_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, OrderDetailsComponent_div_0_div_12_div_3_ng_template_14_ng_template_1_span_0_Template, 3, 3, "span", 49)(1, OrderDetailsComponent_div_0_div_12_div_3_ng_template_14_ng_template_1_ng_template_1_Template, 2, 0, "ng-template", null, 4, \u0275\u0275templateRefExtractor);
  }
  if (rf & 2) {
    const disabledRefund_r9 = \u0275\u0275reference(2);
    const product_r7 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275property("ngIf", product_r7 == null ? null : product_r7.pivot == null ? null : product_r7.pivot.refund_status)("ngIfElse", disabledRefund_r9);
  }
}
function OrderDetailsComponent_div_0_div_12_div_3_ng_template_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, OrderDetailsComponent_div_0_div_12_div_3_ng_template_14_ng_container_0_Template, 3, 0, "ng-container", 47)(1, OrderDetailsComponent_div_0_div_12_div_3_ng_template_14_ng_template_1_Template, 3, 2, "ng-template", null, 3, \u0275\u0275templateRefExtractor);
  }
  if (rf & 2) {
    const refundStatus_r10 = \u0275\u0275reference(2);
    const product_r7 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("ngIf", product_r7.is_return === 0)("ngIfElse", refundStatus_r10);
  }
}
function OrderDetailsComponent_div_0_div_12_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 38);
    \u0275\u0275element(1, "img", 39);
    \u0275\u0275elementStart(2, "div", 40)(3, "h4", 41);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 42)(6, "span");
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "currencySymbol");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span", 43);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "currencySymbol");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "div", 44);
    \u0275\u0275template(13, OrderDetailsComponent_div_0_div_12_div_3_a_13_Template, 2, 0, "a", 45)(14, OrderDetailsComponent_div_0_div_12_div_3_ng_template_14_Template, 3, 2, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const product_r7 = ctx.$implicit;
    const noRefund_r11 = \u0275\u0275reference(15);
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("src", (product_r7 == null ? null : product_r7.pivot == null ? null : product_r7.pivot.variation == null ? null : product_r7.pivot.variation.variation_image) ? product_r7 == null ? null : product_r7.pivot == null ? null : product_r7.pivot.variation == null ? null : product_r7.pivot.variation.variation_image == null ? null : product_r7.pivot.variation.variation_image.original_url : (product_r7 == null ? null : product_r7.product_thumbnail) ? product_r7 == null ? null : product_r7.product_thumbnail == null ? null : product_r7.product_thumbnail.original_url : "assets/images/product.png", \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate((product_r7 == null ? null : product_r7.pivot == null ? null : product_r7.pivot.variation) ? product_r7 == null ? null : product_r7.pivot == null ? null : product_r7.pivot.variation == null ? null : product_r7.pivot.variation.name : product_r7 == null ? null : product_r7.name);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind1(8, 7, product_r7 == null ? null : product_r7.pivot == null ? null : product_r7.pivot.single_price), " x ", product_r7 == null ? null : product_r7.pivot == null ? null : product_r7.pivot.quantity, "");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(11, 9, product_r7 == null ? null : product_r7.pivot == null ? null : product_r7.pivot.subtotal));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", (product_r7 == null ? null : product_r7.is_return) === 1 && (ctx_r1.order == null ? null : ctx_r1.order.payment_status) === "COMPLETED" && (ctx_r1.order.order_status == null ? null : ctx_r1.order.order_status.slug) == "delivered" && !(product_r7 == null ? null : product_r7.pivot == null ? null : product_r7.pivot.refund_status))("ngIfElse", noRefund_r11);
  }
}
function OrderDetailsComponent_div_0_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16)(1, "h3", 17);
    \u0275\u0275text(2, "Ordered Products");
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, OrderDetailsComponent_div_0_div_12_div_3_Template, 16, 11, "div", 37);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r1.order.products);
  }
}
function OrderDetailsComponent_div_0_div_18_span_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", ctx_r1.order.billing_address.flat_no, ", ");
  }
}
function OrderDetailsComponent_div_0_div_18_span_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", ctx_r1.order.billing_address.building, ", ");
  }
}
function OrderDetailsComponent_div_0_div_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 52)(1, "span", 53);
    \u0275\u0275text(2, "Billing Address");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 54);
    \u0275\u0275template(4, OrderDetailsComponent_div_0_div_18_span_4_Template, 2, 1, "span", 55)(5, OrderDetailsComponent_div_0_div_18_span_5_Template, 2, 1, "span", 55);
    \u0275\u0275text(6);
    \u0275\u0275element(7, "br");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r1.order.billing_address.flat_no);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.order.billing_address.building);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate4(" ", ctx_r1.order.billing_address.street, ", ", ctx_r1.order.billing_address.city, ", ", ctx_r1.getStateName(ctx_r1.order.billing_address.state_id), " ", ctx_r1.order.billing_address.pincode, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("+", ctx_r1.order.billing_address.country_code, " ", ctx_r1.order.billing_address.phone, " ");
  }
}
function OrderDetailsComponent_div_0_div_19_span_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", ctx_r1.order.shipping_address.flat_no, ", ");
  }
}
function OrderDetailsComponent_div_0_div_19_span_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", ctx_r1.order.shipping_address.building, ", ");
  }
}
function OrderDetailsComponent_div_0_div_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 52)(1, "span", 53);
    \u0275\u0275text(2, "Shipping Address");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 54);
    \u0275\u0275template(4, OrderDetailsComponent_div_0_div_19_span_4_Template, 2, 1, "span", 55)(5, OrderDetailsComponent_div_0_div_19_span_5_Template, 2, 1, "span", 55);
    \u0275\u0275text(6);
    \u0275\u0275element(7, "br");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r1.order.shipping_address.flat_no);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.order.shipping_address.building);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate4(" ", ctx_r1.order.shipping_address.street, ", ", ctx_r1.order.shipping_address.city, ", ", ctx_r1.getStateName(ctx_r1.order.shipping_address.state_id), " ", ctx_r1.order.shipping_address.pincode, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("+", ctx_r1.order.shipping_address.country_code, " ", ctx_r1.order.shipping_address.phone, " ");
  }
}
function OrderDetailsComponent_div_0_div_20_span_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "UPI Intent");
    \u0275\u0275elementEnd();
  }
}
function OrderDetailsComponent_div_0_div_20_span_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Cash Free");
    \u0275\u0275elementEnd();
  }
}
function OrderDetailsComponent_div_0_div_20_span_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "UPI App");
    \u0275\u0275elementEnd();
  }
}
function OrderDetailsComponent_div_0_div_20_span_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "titleCase");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, ctx_r1.order == null ? null : ctx_r1.order.payment_method));
  }
}
function OrderDetailsComponent_div_0_div_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 52)(1, "span", 53);
    \u0275\u0275text(2, "Payment");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 54);
    \u0275\u0275elementContainerStart(4, 56);
    \u0275\u0275template(5, OrderDetailsComponent_div_0_div_20_span_5_Template, 2, 0, "span", 57)(6, OrderDetailsComponent_div_0_div_20_span_6_Template, 2, 0, "span", 57)(7, OrderDetailsComponent_div_0_div_20_span_7_Template, 2, 0, "span", 57)(8, OrderDetailsComponent_div_0_div_20_span_8_Template, 3, 3, "span", 58);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275text(9, " \u2014 ");
    \u0275\u0275elementStart(10, "span");
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "titleCase");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngSwitch", ctx_r1.order == null ? null : ctx_r1.order.payment_method);
    \u0275\u0275advance();
    \u0275\u0275property("ngSwitchCase", "GROFAB_nabu");
    \u0275\u0275advance();
    \u0275\u0275property("ngSwitchCase", "pay_drill");
    \u0275\u0275advance();
    \u0275\u0275property("ngSwitchCase", "star_mangal");
    \u0275\u0275advance(3);
    \u0275\u0275classMapInterpolate1("od__status od__status--", ctx_r1.order == null ? null : ctx_r1.order.payment_status == null ? null : ctx_r1.order.payment_status.toLowerCase(), "");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(12, 8, ctx_r1.order.payment_status));
  }
}
function OrderDetailsComponent_div_0_div_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 52)(1, "span", 53);
    \u0275\u0275text(2, "Delivery");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 54);
    \u0275\u0275text(4, "Standard | Approx 10\u201315 Days");
    \u0275\u0275elementEnd()();
  }
}
function OrderDetailsComponent_div_0_div_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22)(1, "span");
    \u0275\u0275text(2, "Shipping");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "currencySymbol");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 1, ctx_r1.order.shipping_total || 0));
  }
}
function OrderDetailsComponent_div_0_div_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 59)(1, "span");
    \u0275\u0275text(2, "Points");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "currencySymbol");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("-", \u0275\u0275pipeBind1(5, 1, ctx_r1.order.points_amount), "");
  }
}
function OrderDetailsComponent_div_0_div_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 59)(1, "span");
    \u0275\u0275text(2, "Wallet");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "currencySymbol");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("-", \u0275\u0275pipeBind1(5, 1, ctx_r1.order.wallet_balance), "");
  }
}
function OrderDetailsComponent_div_0_div_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 59)(1, "span");
    \u0275\u0275text(2, "Discount");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "currencySymbol");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("-", \u0275\u0275pipeBind1(5, 1, ctx_r1.order.coupon_total_discount), "");
  }
}
function OrderDetailsComponent_div_0_div_48_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 61)(1, "div", 62)(2, "span", 63);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 64);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 65);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "currencySymbol");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span", 50);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "titleCase");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "a", 66);
    \u0275\u0275text(14, " View ");
    \u0275\u0275element(15, "i", 67);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const sub_r12 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("#", sub_r12.order_number, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(6, 5, sub_r12.created_at, "dd MMM yyyy"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 8, sub_r12.amount));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(12, 10, sub_r12.order_status.name));
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(12, _c32, sub_r12.order_number));
  }
}
function OrderDetailsComponent_div_0_div_48_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16)(1, "h3", 17);
    \u0275\u0275text(2, "Sub Orders");
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, OrderDetailsComponent_div_0_div_48_div_3_Template, 16, 14, "div", 60);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r1.order.sub_orders);
  }
}
function OrderDetailsComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "div", 7)(2, "div")(3, "h1", 8);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 9);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 10);
    \u0275\u0275template(9, OrderDetailsComponent_div_0_a_9_Template, 2, 0, "a", 11)(10, OrderDetailsComponent_div_0_a_10_Template, 3, 0, "a", 12);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(11, OrderDetailsComponent_div_0_div_11_Template, 7, 4, "div", 13)(12, OrderDetailsComponent_div_0_div_12_Template, 4, 1, "div", 14);
    \u0275\u0275elementStart(13, "div", 15)(14, "div", 16)(15, "h3", 17);
    \u0275\u0275text(16, "Details");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div", 18);
    \u0275\u0275template(18, OrderDetailsComponent_div_0_div_18_Template, 9, 8, "div", 19)(19, OrderDetailsComponent_div_0_div_19_Template, 9, 8, "div", 19)(20, OrderDetailsComponent_div_0_div_20_Template, 13, 10, "div", 19)(21, OrderDetailsComponent_div_0_div_21_Template, 5, 0, "div", 19);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div", 20)(23, "h3", 17);
    \u0275\u0275text(24, "Summary");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "div", 21)(26, "div", 22)(27, "span");
    \u0275\u0275text(28, "Subtotal");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "span");
    \u0275\u0275text(30);
    \u0275\u0275pipe(31, "currencySymbol");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(32, OrderDetailsComponent_div_0_div_32_Template, 6, 3, "div", 23);
    \u0275\u0275elementStart(33, "div", 22)(34, "span");
    \u0275\u0275text(35, "Tax");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "span");
    \u0275\u0275text(37);
    \u0275\u0275pipe(38, "currencySymbol");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(39, OrderDetailsComponent_div_0_div_39_Template, 6, 3, "div", 24)(40, OrderDetailsComponent_div_0_div_40_Template, 6, 3, "div", 24)(41, OrderDetailsComponent_div_0_div_41_Template, 6, 3, "div", 24);
    \u0275\u0275elementStart(42, "div", 25)(43, "span");
    \u0275\u0275text(44, "Total");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "span");
    \u0275\u0275text(46);
    \u0275\u0275pipe(47, "currencySymbol");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275template(48, OrderDetailsComponent_div_0_div_48_Template, 4, 1, "div", 14);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("Order #", ctx_r1.order.order_number, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(7, 18, ctx_r1.order == null ? null : ctx_r1.order.created_at, "dd MMM yyyy, hh:mm a"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.canPayNow);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.canDownloadInvoice);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.showTracking);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.order == null ? null : ctx_r1.order.products == null ? null : ctx_r1.order.products.length);
    \u0275\u0275advance(6);
    \u0275\u0275property("ngIf", ctx_r1.order == null ? null : ctx_r1.order.billing_address);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (ctx_r1.order == null ? null : ctx_r1.order.shipping_address) && !(ctx_r1.order == null ? null : ctx_r1.order.is_digital_only));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.order == null ? null : ctx_r1.order.payment_method);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (ctx_r1.order == null ? null : ctx_r1.order.delivery_description) && !(ctx_r1.order == null ? null : ctx_r1.order.is_digital_only));
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(31, 21, ctx_r1.order.amount || 0));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !(ctx_r1.order == null ? null : ctx_r1.order.is_digital_only));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(38, 23, ctx_r1.order.tax_total || 0));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.order.points_amount != 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.order.wallet_balance != 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.order.coupon_total_discount != 0);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(47, 25, ctx_r1.order.total || 0));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.order == null ? null : ctx_r1.order.sub_orders == null ? null : ctx_r1.order.sub_orders.length);
  }
}
var OrderDetailsComponent = class _OrderDetailsComponent {
  // Computed properties for better performance
  get canDownloadInvoice() {
    return !!(this.order?.invoice_url && this.order?.payment_status === "COMPLETED" && this.isLogin);
  }
  get canPayNow() {
    return !!(this.order?.payment_status === "FAILED" || this.order?.payment_status === "PENDING") && (this.order?.order_status && this.order?.order_status?.slug != "cancelled") && this.order?.payment_method != "cod";
  }
  get showTracking() {
    return !!(this.order && !this.order?.sub_orders?.length);
  }
  constructor(store, route, cartService) {
    this.store = store;
    this.route = route;
    this.cartService = cartService;
    this.destroy$ = new Subject();
    this.pollingInterval = 15e3;
    this.loading = true;
    this.countries = [];
    this.states = [];
    this.store.dispatch(new GetOrderStatus());
    this.country$.subscribe((country) => this.countries = country.data);
    this.state$.subscribe((state) => this.states = state.data);
  }
  ngOnInit() {
    this.isLogin = !!this.store.selectSnapshot((state) => state.auth && state.auth.access_token);
    this.route.params.subscribe((params) => {
      if (params["id"]) {
        if (this.orderSubscription) {
          this.orderSubscription.unsubscribe();
        }
        const currentOrder = this.store.selectSnapshot(OrderState.selectedOrder);
        if (currentOrder && currentOrder.id === +params["id"]) {
          this.order = currentOrder;
          this.loading = false;
          this.checkPaymentStatusIfNeeded();
          this.clearPaymentDataIfNeeded();
        } else {
          this.store.dispatch(new ViewOrder(params["id"])).subscribe(() => {
            this.orderSubscription = this.store.select(OrderState.selectedOrder).pipe(takeUntil(this.destroy$)).subscribe((order) => {
              if (order) {
                this.order = order;
                this.loading = false;
                this.checkPaymentStatusIfNeeded();
                this.clearPaymentDataIfNeeded();
              }
            });
          });
        }
      }
    });
  }
  getCountryName(id) {
    return this.countries.find((country) => country.id == id)?.name;
  }
  getStateName(id) {
    return this.states.find((state) => state.id == id)?.name;
  }
  checkPaymentStatusIfNeeded() {
    if (this.order && this.order.payment_method === "GROFAB_nabu" && (this.order.payment_status === "PENDING" || this.order.payment_status === "PROCESSING") && this.order.uuid && this.order.order_status?.slug !== "delivered" && this.order.order_status?.slug !== "cancelled") {
      setTimeout(() => {
        this.checkPaymentStatus();
      }, 3e3);
    }
  }
  clearPaymentDataIfNeeded() {
    const cameFromPayment = sessionStorage.getItem("came_from_checkout_payment");
    const hasPaymentData = sessionStorage.getItem("payment_uuid") || localStorage.getItem("order_id");
    if (cameFromPayment || hasPaymentData) {
      localStorage.removeItem("order_id");
      localStorage.removeItem("payment_uuid");
      localStorage.removeItem("payment_method");
      sessionStorage.removeItem("payment_uuid");
      sessionStorage.removeItem("payment_method");
      sessionStorage.removeItem("payment_action");
      sessionStorage.removeItem("came_from_checkout_payment");
    }
  }
  checkPaymentStatus() {
    if (!this.order || !this.order.uuid)
      return;
    if (this.pollingSubscription) {
      this.pollingSubscription.unsubscribe();
    }
    let maxAttempts = 20;
    let attemptCount = 0;
    this.pollingSubscription = interval(this.pollingInterval).pipe(switchMap(() => {
      attemptCount++;
      if (this.order?.payment_status === "COMPLETED" || this.order?.payment_status === "paid") {
        return of({ status: true });
      }
      return this.cartService.checkTransectionStatusNeoKred(this.order.uuid, this.order.payment_method);
    }), takeWhile((response) => {
      if (response?.status === true || attemptCount >= maxAttempts || this.order?.order_status?.slug === "delivered" || this.order?.order_status?.slug === "cancelled") {
        if (response?.status === true && this.order?.id) {
          this.store.dispatch(new ViewOrder(this.order.id)).subscribe(() => {
            this.store.select(OrderState.selectedOrder).pipe(takeUntil(this.destroy$)).subscribe((updatedOrder) => {
              if (updatedOrder) {
                this.order = updatedOrder;
              }
            });
          });
        }
        return false;
      }
      if (attemptCount >= maxAttempts) {
        console.warn("Payment status check timeout after maximum attempts");
        return false;
      }
      return this.order?.payment_status === "PENDING";
    }, true)).subscribe({
      error: (err) => {
        console.error("Error checking payment status:", err);
        this.pollingSubscription.unsubscribe();
      }
    });
  }
  download(id) {
    this.store.dispatch(new DownloadInvoice({ order_number: id }));
  }
  ngOnDestroy() {
    if (this.pollingSubscription) {
      this.pollingSubscription.unsubscribe();
    }
    if (this.orderSubscription) {
      this.orderSubscription.unsubscribe();
    }
    this.destroy$.next();
    this.destroy$.complete();
  }
  static {
    this.\u0275fac = function OrderDetailsComponent_Factory(t) {
      return new (t || _OrderDetailsComponent)(\u0275\u0275directiveInject(Store), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(CartService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _OrderDetailsComponent, selectors: [["app-order-details"]], viewQuery: function OrderDetailsComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c05, 5);
        \u0275\u0275viewQuery(_c13, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.RefundModal = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.PayModal = _t.first);
      }
    }, decls: 5, vars: 1, consts: [["refundModal", ""], ["payModal", ""], ["noRefund", ""], ["refundStatus", ""], ["disabledRefund", ""], ["class", "od", 4, "ngIf"], [1, "od"], [1, "od__header"], [1, "od__title"], [1, "od__sub"], [1, "od__actions"], ["href", "javascript:void(0)", "class", "od__btn od__btn--pay", 3, "click", 4, "ngIf"], ["class", "od__btn od__btn--outline", "download", "", 3, "click", 4, "ngIf"], ["class", "od__card od__tracking", 4, "ngIf"], ["class", "od__card", 4, "ngIf"], [1, "od__grid"], [1, "od__card"], [1, "od__card-title"], [1, "od__details-list"], ["class", "od__detail", 4, "ngIf"], [1, "od__card", "od__summary-card"], [1, "od__summary"], [1, "od__sum-row"], ["class", "od__sum-row", 4, "ngIf"], ["class", "od__sum-row od__sum-row--discount", 4, "ngIf"], [1, "od__sum-row", "od__sum-row--total"], ["href", "javascript:void(0)", 1, "od__btn", "od__btn--pay", 3, "click"], ["download", "", 1, "od__btn", "od__btn--outline", 3, "click"], [1, "ri-download-line"], [1, "od__card", "od__tracking"], [1, "od__steps"], ["class", "od__step", 3, "active", "done", "ngClass", 4, "ngFor", "ngForOf"], ["class", "od__step active cancelled", 4, "ngIf"], [1, "od__step", 3, "ngClass"], [1, "od__step-dot"], [1, "od__step-label"], [1, "od__step", "active", "cancelled"], ["class", "od__product", 4, "ngFor", "ngForOf"], [1, "od__product"], ["alt", "product", 1, "od__product-img", 3, "src"], [1, "od__product-info"], [1, "od__product-name"], [1, "od__product-meta"], [1, "od__product-subtotal"], [1, "od__product-refund"], ["href", "javascript:void(0)", "class", "od__refund-btn", 3, "click", 4, "ngIf", "ngIfElse"], ["href", "javascript:void(0)", 1, "od__refund-btn", 3, "click"], [4, "ngIf", "ngIfElse"], [1, "od__badge", "od__badge--muted"], ["class", "od__badge od__badge--status", 4, "ngIf", "ngIfElse"], [1, "od__badge", "od__badge--status"], ["ngbTooltip", "Enable after delivery", 1, "od__badge", "od__badge--muted"], [1, "od__detail"], [1, "od__detail-label"], [1, "od__detail-value"], [4, "ngIf"], [3, "ngSwitch"], [4, "ngSwitchCase"], [4, "ngSwitchDefault"], [1, "od__sum-row", "od__sum-row--discount"], ["class", "od__sub-order", 4, "ngFor", "ngForOf"], [1, "od__sub-order"], [1, "od__sub-info"], [1, "od__sub-number"], [1, "od__sub-date"], [1, "od__sub-amount"], [1, "od__sub-link", 3, "routerLink"], [1, "ri-arrow-right-s-line"]], template: function OrderDetailsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, OrderDetailsComponent_div_0_Template, 49, 27, "div", 5);
        \u0275\u0275element(1, "app-refund-modal", null, 0)(3, "app-pay-modal", null, 1);
      }
      if (rf & 2) {
        \u0275\u0275property("ngIf", !ctx.loading && ctx.order);
      }
    }, dependencies: [NgClass, NgForOf, NgIf, NgSwitch, NgSwitchCase, NgSwitchDefault, RouterLink, NgbTooltip, RefundModalComponent, PayModalComponent, AsyncPipe, TitleCasePipe, DatePipe, TitleCasePipe2, CurrencySymbolPipe], styles: ['\n\n.od[_ngcontent-%COMP%] {\n  max-width: 900px;\n}\n.od__header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 16px;\n  margin-bottom: 28px;\n  flex-wrap: wrap;\n}\n.od__title[_ngcontent-%COMP%] {\n  font-family: "Poppins", sans-serif;\n  font-size: 24px;\n  font-weight: 700;\n  color: #1A2518;\n  margin-bottom: 2px;\n}\n.od__sub[_ngcontent-%COMP%] {\n  font-family: "Poppins", sans-serif;\n  font-size: 13px;\n  color: #999;\n  margin: 0;\n}\n.od__actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  flex-wrap: wrap;\n}\n.od__btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 9px 18px;\n  border-radius: 6px;\n  font-family: "Poppins", sans-serif;\n  font-size: 12px;\n  font-weight: 600;\n  text-decoration: none;\n  cursor: pointer;\n  transition: all 0.15s;\n}\n.od__btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.od__btn--pay[_ngcontent-%COMP%] {\n  background: #1A2518;\n  color: #fff;\n  border: none;\n}\n.od__btn--pay[_ngcontent-%COMP%]:hover {\n  background: #C9A054;\n  color: #1A2518;\n}\n.od__btn--outline[_ngcontent-%COMP%] {\n  background: #fff;\n  color: #1A2518;\n  border: 1.5px solid #ddd8d0;\n}\n.od__btn--outline[_ngcontent-%COMP%]:hover {\n  border-color: #1A2518;\n}\n.od__card[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1px solid #eeebe5;\n  border-radius: 10px;\n  padding: 24px;\n  margin-bottom: 16px;\n}\n@media (max-width: 575px) {\n  .od__card[_ngcontent-%COMP%] {\n    padding: 18px 16px;\n  }\n}\n.od__card-title[_ngcontent-%COMP%] {\n  font-family: "Poppins", sans-serif;\n  font-size: 13px;\n  font-weight: 700;\n  color: #1A2518;\n  text-transform: uppercase;\n  letter-spacing: 0.8px;\n  margin-bottom: 20px;\n  padding-bottom: 14px;\n  border-bottom: 1px solid #f0ede8;\n}\n.od__steps[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 0;\n  position: relative;\n  padding: 0 8px;\n}\n.od__steps[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: 11px;\n  left: 20px;\n  right: 20px;\n  height: 2px;\n  background: #eee;\n}\n.od__step[_ngcontent-%COMP%] {\n  flex: 1;\n  text-align: center;\n  position: relative;\n  z-index: 1;\n}\n.od__step[_ngcontent-%COMP%]   .od__step-dot[_ngcontent-%COMP%] {\n  width: 24px;\n  height: 24px;\n  border-radius: 50%;\n  background: #eee;\n  margin: 0 auto 8px;\n  border: 3px solid #fff;\n  box-shadow: 0 0 0 2px #eee;\n  transition: all 0.2s;\n}\n.od__step[_ngcontent-%COMP%]   .od__step-label[_ngcontent-%COMP%] {\n  font-family: "Poppins", sans-serif;\n  font-size: 11px;\n  font-weight: 500;\n  color: #bbb;\n  display: block;\n}\n.od__step.done[_ngcontent-%COMP%]   .od__step-dot[_ngcontent-%COMP%] {\n  background: #1A2518;\n  box-shadow: 0 0 0 2px #1A2518;\n}\n.od__step.active[_ngcontent-%COMP%]   .od__step-dot[_ngcontent-%COMP%] {\n  background: #C9A054;\n  box-shadow: 0 0 0 2px #C9A054;\n}\n.od__step.active[_ngcontent-%COMP%]   .od__step-label[_ngcontent-%COMP%], .od__step.done[_ngcontent-%COMP%]   .od__step-label[_ngcontent-%COMP%] {\n  color: #1A2518;\n  font-weight: 600;\n}\n.od__step.cancelled[_ngcontent-%COMP%]   .od__step-dot[_ngcontent-%COMP%] {\n  background: #dc2626;\n  box-shadow: 0 0 0 2px #dc2626;\n}\n.od__step.cancelled[_ngcontent-%COMP%]   .od__step-label[_ngcontent-%COMP%] {\n  color: #dc2626;\n}\n.od__product[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  padding: 16px 0;\n  border-bottom: 1px solid #f5f3ee;\n}\n.od__product[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n  padding-bottom: 0;\n}\n.od__product[_ngcontent-%COMP%]:first-child {\n  padding-top: 0;\n}\n@media (max-width: 575px) {\n  .od__product[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n  }\n}\n.od__product-img[_ngcontent-%COMP%] {\n  width: 60px;\n  height: 60px;\n  border-radius: 8px;\n  object-fit: cover;\n  background: #f5f3ee;\n  flex-shrink: 0;\n}\n.od__product-info[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.od__product-name[_ngcontent-%COMP%] {\n  font-family: "Poppins", sans-serif;\n  font-size: 14px;\n  font-weight: 600;\n  color: #1A2518;\n  margin-bottom: 4px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.od__product-meta[_ngcontent-%COMP%] {\n  font-family: "Poppins", sans-serif;\n  font-size: 13px;\n  color: #999;\n  display: flex;\n  gap: 12px;\n}\n.od__product-subtotal[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #1A2518;\n}\n.od__product-refund[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n}\n.od__refund-btn[_ngcontent-%COMP%] {\n  font-family: "Poppins", sans-serif;\n  font-size: 12px;\n  font-weight: 600;\n  color: #C9A054;\n  text-decoration: none;\n}\n.od__refund-btn[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.od__badge[_ngcontent-%COMP%] {\n  font-family: "Poppins", sans-serif;\n  font-size: 11px;\n  font-weight: 600;\n  padding: 3px 10px;\n  border-radius: 4px;\n  white-space: nowrap;\n}\n.od__badge--muted[_ngcontent-%COMP%] {\n  background: #f5f3ee;\n  color: #aaa;\n}\n.od__badge--status[_ngcontent-%COMP%] {\n  background: rgba(201, 160, 84, 0.1);\n  color: #b28738;\n}\n.od__grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 320px;\n  gap: 16px;\n  align-items: start;\n}\n@media (max-width: 991px) {\n  .od__grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.od__details-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n.od__detail[_ngcontent-%COMP%]   .od__detail-label[_ngcontent-%COMP%] {\n  display: block;\n  font-family: "Poppins", sans-serif;\n  font-size: 11px;\n  font-weight: 600;\n  color: #aaa;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  margin-bottom: 4px;\n}\n.od__detail[_ngcontent-%COMP%]   .od__detail-value[_ngcontent-%COMP%] {\n  font-family: "Poppins", sans-serif;\n  font-size: 13px;\n  color: #555;\n  line-height: 1.6;\n}\n.od__status[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-size: 11px;\n  text-transform: uppercase;\n}\n.od__status--completed[_ngcontent-%COMP%], .od__status--success[_ngcontent-%COMP%] {\n  color: #16a34a;\n}\n.od__status--pending[_ngcontent-%COMP%] {\n  color: #b28738;\n}\n.od__status--cancelled[_ngcontent-%COMP%], .od__status--failed[_ngcontent-%COMP%] {\n  color: #dc2626;\n}\n.od__summary-card[_ngcontent-%COMP%] {\n  background: #faf9f6 !important;\n}\n.od__summary[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.od__sum-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  font-family: "Poppins", sans-serif;\n  font-size: 13px;\n  color: #777;\n}\n.od__sum-row--discount[_ngcontent-%COMP%] {\n  color: #16a34a;\n}\n.od__sum-row--total[_ngcontent-%COMP%] {\n  padding-top: 14px;\n  margin-top: 4px;\n  border-top: 1.5px solid #e8e5de;\n  font-size: 15px;\n  font-weight: 700;\n  color: #1A2518;\n}\n.od__sub-order[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 14px 0;\n  border-bottom: 1px solid #f5f3ee;\n  gap: 12px;\n}\n.od__sub-order[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.od__sub-info[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  flex-wrap: wrap;\n}\n.od__sub-number[_ngcontent-%COMP%] {\n  font-family: "Poppins", sans-serif;\n  font-size: 14px;\n  font-weight: 700;\n  color: #1A2518;\n}\n.od__sub-date[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #aaa;\n}\n.od__sub-amount[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 600;\n  color: #1A2518;\n}\n.od__sub-link[_ngcontent-%COMP%] {\n  font-family: "Poppins", sans-serif;\n  font-size: 12px;\n  font-weight: 600;\n  color: #1A2518;\n  text-decoration: none;\n  display: flex;\n  align-items: center;\n  gap: 2px;\n  flex-shrink: 0;\n}\n.od__sub-link[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.od__sub-link[_ngcontent-%COMP%]:hover {\n  color: #C9A054;\n}\n/*# sourceMappingURL=details.component.css.map */'] });
  }
};
__decorate([
  Select(OrderStatusState.orderStatus)
], OrderDetailsComponent.prototype, "orderStatus$", void 0);
__decorate([
  Select(CountryState.country)
], OrderDetailsComponent.prototype, "country$", void 0);
__decorate([
  Select(StateState.state)
], OrderDetailsComponent.prototype, "state$", void 0);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(OrderDetailsComponent, { className: "OrderDetailsComponent", filePath: "src\\app\\components\\account\\orders\\details\\details.component.ts", lineNumber: 25 });
})();

// src/app/components/account/refund/refund.component.ts
function RefundComponent_div_5_tr_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "span", 9);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "td")(5, "div")(6, "span");
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "titleCase");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "td", 6);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td");
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "date");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const refund_r1 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("#", refund_r1 == null ? null : refund_r1.order == null ? null : refund_r1.order.order_number, "");
    \u0275\u0275advance(2);
    \u0275\u0275classMapInterpolate1("status-", refund_r1 == null ? null : refund_r1.status, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 7, refund_r1 == null ? null : refund_r1.status));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(refund_r1 == null ? null : refund_r1.reason);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(13, 9, refund_r1 == null ? null : refund_r1.created_at, "dd MMM yyyy"));
  }
}
function RefundComponent_div_5_nav_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "nav", 10)(1, "app-pagination", 11);
    \u0275\u0275pipe(2, "async");
    \u0275\u0275listener("setPage", function RefundComponent_div_5_nav_19_Template_app_pagination_setPage_1_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.setPaginate($event));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("total", ((tmp_2_0 = \u0275\u0275pipeBind1(2, 3, ctx_r2.refund$)) == null ? null : tmp_2_0.total) || 0)("currentPage", ctx_r2.filter["page"])("pageSize", ctx_r2.filter["paginate"]);
  }
}
function RefundComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4)(1, "div", 5)(2, "table")(3, "tbody")(4, "tr")(5, "th");
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th", 6);
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th");
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(17, RefundComponent_div_5_tr_17_Template, 14, 12, "tr", 7);
    \u0275\u0275pipe(18, "async");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(19, RefundComponent_div_5_nav_19_Template, 3, 5, "nav", 8);
    \u0275\u0275pipe(20, "async");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_5_0;
    let tmp_6_0;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 6, "Order"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(10, 8, "Status"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(13, 10, "Reason"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(16, 12, "Created At"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", (tmp_5_0 = \u0275\u0275pipeBind1(18, 14, ctx_r2.refund$)) == null ? null : tmp_5_0.data);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", (tmp_6_0 = \u0275\u0275pipeBind1(20, 16, ctx_r2.refund$)) == null ? null : tmp_6_0.data == null ? null : tmp_6_0.data.length);
  }
}
function RefundComponent_app_no_data_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-no-data", 12);
  }
  if (rf & 2) {
    \u0275\u0275classMap("no-data-added");
    \u0275\u0275property("image", "assets/svg/empty-items.svg")("text", "No Refunds Found")("description", "You Have No Refunds yet");
  }
}
var RefundComponent = class _RefundComponent {
  constructor(store) {
    this.store = store;
    this.filter = {
      "page": 1,
      "paginate": 10
      // Display per page,
    };
    this.store.dispatch(new GetRefund(this.filter));
  }
  setPaginate(page) {
    this.filter["page"] = page;
    this.store.dispatch(new GetRefund(this.filter));
  }
  static {
    this.\u0275fac = function RefundComponent_Factory(t) {
      return new (t || _RefundComponent)(\u0275\u0275directiveInject(Store));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RefundComponent, selectors: [["app-refund"]], decls: 9, vars: 9, consts: [[1, "title-header"], [1, "d-flex", "align-items-center"], ["class", "total-box mt-0", 4, "ngIf"], [3, "class", "image", "text", "description", 4, "ngIf"], [1, "total-box", "mt-0"], [1, "wallet-table", "mt-0", "refund-table"], [1, "reason-table"], [4, "ngFor", "ngForOf"], ["class", "custome-pagination", 4, "ngIf"], [1, "fw-bolder"], [1, "custome-pagination"], [3, "setPage", "total", "currentPage", "pageSize"], [3, "image", "text", "description"]], template: function RefundComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h5");
        \u0275\u0275text(3);
        \u0275\u0275pipe(4, "translate");
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(5, RefundComponent_div_5_Template, 21, 18, "div", 2);
        \u0275\u0275pipe(6, "async");
        \u0275\u0275template(7, RefundComponent_app_no_data_7_Template, 1, 5, "app-no-data", 3);
        \u0275\u0275pipe(8, "async");
      }
      if (rf & 2) {
        let tmp_1_0;
        let tmp_2_0;
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 3, "Refund"));
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", (tmp_1_0 = \u0275\u0275pipeBind1(6, 5, ctx.refund$)) == null ? null : tmp_1_0.data == null ? null : tmp_1_0.data.length);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", !((tmp_2_0 = \u0275\u0275pipeBind1(8, 7, ctx.refund$)) == null ? null : tmp_2_0.data == null ? null : tmp_2_0.data.length));
      }
    }, dependencies: [NgForOf, NgIf, PaginationComponent, NoDataComponent, AsyncPipe, DatePipe, TitleCasePipe2, TranslatePipe] });
  }
};
__decorate([
  Select(RefundState.refund)
], RefundComponent.prototype, "refund$", void 0);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RefundComponent, { className: "RefundComponent", filePath: "src\\app\\components\\account\\refund\\refund.component.ts", lineNumber: 14 });
})();

// src/app/components/account/addresses/addresses.component.ts
var _c06 = ["addressModal"];
var _c14 = ["deleteModal"];
function AddressesComponent_div_11_div_1_span_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const address_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", address_r3 == null ? null : address_r3.flat_no, ", ");
  }
}
function AddressesComponent_div_11_div_1_span_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const address_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", address_r3 == null ? null : address_r3.building, ", ");
  }
}
function AddressesComponent_div_11_div_1_span_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const address_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", address_r3 == null ? null : address_r3.road, ", ");
  }
}
function AddressesComponent_div_11_div_1_p_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 25);
    \u0275\u0275element(1, "i", 26);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const address_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" +", address_r3 == null ? null : address_r3.country_code, " ", address_r3 == null ? null : address_r3.phone, " ");
  }
}
function AddressesComponent_div_11_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 13)(1, "div", 14)(2, "div", 15)(3, "span", 16);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "p", 17);
    \u0275\u0275template(6, AddressesComponent_div_11_div_1_span_6_Template, 2, 1, "span", 18)(7, AddressesComponent_div_11_div_1_span_7_Template, 2, 1, "span", 18)(8, AddressesComponent_div_11_div_1_span_8_Template, 2, 1, "span", 18);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275template(10, AddressesComponent_div_11_div_1_p_10_Template, 3, 2, "p", 19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 20)(12, "button", 21);
    \u0275\u0275listener("click", function AddressesComponent_div_11_div_1_Template_button_click_12_listener() {
      const address_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.AddressModal.openModal(address_r3));
    });
    \u0275\u0275element(13, "i", 22);
    \u0275\u0275text(14, " Edit ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "button", 23);
    \u0275\u0275listener("click", function AddressesComponent_div_11_div_1_Template_button_click_15_listener() {
      const address_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.DeleteModal.openModal("delete", address_r3));
    });
    \u0275\u0275element(16, "i", 24);
    \u0275\u0275text(17, " Remove ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const address_r3 = ctx.$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(address_r3 == null ? null : address_r3.title);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", address_r3 == null ? null : address_r3.flat_no);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", address_r3 == null ? null : address_r3.building);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", address_r3 == null ? null : address_r3.road);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate4(" ", address_r3 == null ? null : address_r3.street, ", ", address_r3 == null ? null : address_r3.city, ", ", address_r3 == null ? null : address_r3.area, " ", address_r3 == null ? null : address_r3.pincode, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", address_r3 == null ? null : address_r3.phone);
  }
}
function AddressesComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11);
    \u0275\u0275template(1, AddressesComponent_div_11_div_1_Template, 18, 9, "div", 12);
    \u0275\u0275pipe(2, "async");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_3_0;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", (tmp_3_0 = \u0275\u0275pipeBind1(2, 1, ctx_r3.user$)) == null ? null : tmp_3_0.address);
  }
}
function AddressesComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 27);
    \u0275\u0275element(1, "i", 28);
    \u0275\u0275elementStart(2, "h4");
    \u0275\u0275text(3, "No addresses saved yet");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p");
    \u0275\u0275text(5, "Add a delivery address to get started.");
    \u0275\u0275elementEnd()();
  }
}
var AddressesComponent = class _AddressesComponent {
  constructor(store) {
    this.store = store;
  }
  delete(action, data) {
    if (action == "delete" && data)
      this.store.dispatch(new DeleteAddress(data.id));
  }
  static {
    this.\u0275fac = function AddressesComponent_Factory(t) {
      return new (t || _AddressesComponent)(\u0275\u0275directiveInject(Store));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AddressesComponent, selectors: [["app-addresses"]], viewQuery: function AddressesComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c06, 5);
        \u0275\u0275viewQuery(_c14, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.AddressModal = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.DeleteModal = _t.first);
      }
    }, decls: 19, vars: 9, consts: [["addressModal", ""], ["deleteModal", ""], [1, "addr"], [1, "addr__header"], [1, "addr__title"], [1, "addr__sub"], [1, "addr__add-btn", 3, "click"], [1, "ri-add-line"], ["class", "addr__list", 4, "ngIf"], ["class", "addr__empty", 4, "ngIf"], [3, "deleteItem"], [1, "addr__list"], ["class", "addr__card", 4, "ngFor", "ngForOf"], [1, "addr__card"], [1, "addr__card-body"], [1, "addr__card-top"], [1, "addr__label"], [1, "addr__text"], [4, "ngIf"], ["class", "addr__phone", 4, "ngIf"], [1, "addr__card-actions"], [1, "addr__btn-edit", 3, "click"], [1, "ri-edit-line"], [1, "addr__btn-delete", 3, "click"], [1, "ri-delete-bin-line"], [1, "addr__phone"], [1, "ri-phone-line"], [1, "addr__empty"], [1, "ri-map-pin-line"]], template: function AddressesComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "div", 2)(1, "div", 3)(2, "div")(3, "h1", 4);
        \u0275\u0275text(4);
        \u0275\u0275pipe(5, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "p", 5);
        \u0275\u0275text(7, "Manage your delivery addresses");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(8, "button", 6);
        \u0275\u0275listener("click", function AddressesComponent_Template_button_click_8_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.AddressModal.openModal());
        });
        \u0275\u0275element(9, "i", 7);
        \u0275\u0275text(10, " Add Address ");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(11, AddressesComponent_div_11_Template, 3, 3, "div", 8);
        \u0275\u0275pipe(12, "async");
        \u0275\u0275template(13, AddressesComponent_div_13_Template, 6, 0, "div", 9);
        \u0275\u0275pipe(14, "async");
        \u0275\u0275elementEnd();
        \u0275\u0275element(15, "address-modal", null, 0);
        \u0275\u0275elementStart(17, "app-delete-modal", 10, 1);
        \u0275\u0275listener("deleteItem", function AddressesComponent_Template_app_delete_modal_deleteItem_17_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.delete($event.actionToPerform, $event.data));
        });
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        let tmp_3_0;
        let tmp_4_0;
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 3, "Saved Address"));
        \u0275\u0275advance(7);
        \u0275\u0275property("ngIf", (tmp_3_0 = \u0275\u0275pipeBind1(12, 5, ctx.user$)) == null ? null : tmp_3_0.address == null ? null : tmp_3_0.address.length);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", !((tmp_4_0 = \u0275\u0275pipeBind1(14, 7, ctx.user$)) == null ? null : tmp_4_0.address == null ? null : tmp_4_0.address.length));
      }
    }, dependencies: [NgForOf, NgIf, DeleteModalComponent, AddressModalComponent, AsyncPipe, TranslatePipe], styles: ['\n\n.addr[_ngcontent-%COMP%] {\n  max-width: 800px;\n}\n.addr__header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 16px;\n  margin-bottom: 28px;\n}\n@media (max-width: 575px) {\n  .addr__header[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n}\n.addr__title[_ngcontent-%COMP%] {\n  font-family: "Poppins", sans-serif;\n  font-size: 26px;\n  font-weight: 700;\n  color: #1A2518;\n  margin-bottom: 4px;\n}\n.addr__sub[_ngcontent-%COMP%] {\n  font-family: "Poppins", sans-serif;\n  font-size: 14px;\n  color: #999;\n  margin: 0;\n}\n.addr__add-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  padding: 10px 20px;\n  border: none;\n  border-radius: 6px;\n  background: #1A2518;\n  font-family: "Poppins", sans-serif;\n  font-size: 13px;\n  font-weight: 600;\n  color: #fff;\n  cursor: pointer;\n  white-space: nowrap;\n  transition: background 0.2s;\n}\n.addr__add-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.addr__add-btn[_ngcontent-%COMP%]:hover {\n  background: #C9A054;\n  color: #1A2518;\n}\n.addr__list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.addr__card[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1px solid #eeebe5;\n  border-radius: 10px;\n  overflow: hidden;\n}\n.addr__card-body[_ngcontent-%COMP%] {\n  padding: 20px 24px;\n}\n@media (max-width: 575px) {\n  .addr__card-body[_ngcontent-%COMP%] {\n    padding: 16px 18px;\n  }\n}\n.addr__card-top[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n}\n.addr__label[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-family: "Poppins", sans-serif;\n  font-size: 11px;\n  font-weight: 700;\n  color: #1A2518;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n  background: rgba(201, 160, 84, 0.1);\n  padding: 3px 10px;\n  border-radius: 4px;\n}\n.addr__text[_ngcontent-%COMP%] {\n  font-family: "Poppins", sans-serif;\n  font-size: 14px;\n  color: #555;\n  line-height: 1.6;\n  margin: 0 0 8px;\n}\n.addr__phone[_ngcontent-%COMP%] {\n  font-family: "Poppins", sans-serif;\n  font-size: 13px;\n  color: #999;\n  margin: 0;\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.addr__phone[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.addr__card-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0;\n  border-top: 1px solid #f0ede8;\n}\n.addr__card-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 12px;\n  border: none;\n  background: none;\n  font-family: "Poppins", sans-serif;\n  font-size: 12px;\n  font-weight: 600;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 6px;\n  transition: background 0.15s;\n}\n.addr__card-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.addr__btn-edit[_ngcontent-%COMP%] {\n  color: #1A2518;\n  border-right: 1px solid #f0ede8 !important;\n}\n.addr__btn-edit[_ngcontent-%COMP%]:hover {\n  background: #faf9f6;\n}\n.addr__btn-delete[_ngcontent-%COMP%] {\n  color: #cc4444;\n}\n.addr__btn-delete[_ngcontent-%COMP%]:hover {\n  background: #fef5f5;\n}\n.addr__empty[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 60px 20px;\n  background: #fff;\n  border: 1px solid #eeebe5;\n  border-radius: 10px;\n}\n.addr__empty[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 48px;\n  color: #ddd;\n  margin-bottom: 16px;\n  display: block;\n}\n.addr__empty[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-family: "Poppins", sans-serif;\n  font-size: 16px;\n  font-weight: 600;\n  color: #1A2518;\n  margin-bottom: 6px;\n}\n.addr__empty[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-family: "Poppins", sans-serif;\n  font-size: 13px;\n  color: #aaa;\n  margin: 0;\n}\n/*# sourceMappingURL=addresses.component.css.map */'] });
  }
};
__decorate([
  Select(AccountState.user)
], AddressesComponent.prototype, "user$", void 0);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AddressesComponent, { className: "AddressesComponent", filePath: "src\\app\\components\\account\\addresses\\addresses.component.ts", lineNumber: 16 });
})();

// src/app/components/account/downloads/downloads.component.ts
function DownloadsComponent_div_12_tr_15_button_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 18);
    \u0275\u0275listener("click", function DownloadsComponent_div_12_tr_15_button_11_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const data_r2 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.downloadFiles(data_r2.id));
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind1(2, 2, "all_files"), " & ", \u0275\u0275pipeBind1(3, 4, "documentation"), "");
  }
}
function DownloadsComponent_div_12_tr_15_button_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 18);
    \u0275\u0275listener("click", function DownloadsComponent_div_12_tr_15_button_12_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const data_r2 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.downloadLicense(data_r2.id));
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind1(2, 2, "license_certificate"), " & ", \u0275\u0275pipeBind1(3, 4, "purchase_code"), "");
  }
}
function DownloadsComponent_div_12_tr_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275element(2, "img", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 11);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td")(6, "div", 14)(7, "button", 15);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 16);
    \u0275\u0275template(11, DownloadsComponent_div_12_tr_15_button_11_Template, 4, 6, "button", 17)(12, DownloadsComponent_div_12_tr_15_button_12_Template, 4, 6, "button", 17);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const data_r2 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275propertyInterpolate("src", data_r2.item_image, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r2.item_name);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(9, 5, "Download"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", data_r2.can_download_file);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", data_r2.can_download_license);
  }
}
function DownloadsComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8)(1, "div", 9)(2, "table", 10)(3, "thead")(4, "tr")(5, "th");
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th", 11);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th");
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(14, "tbody");
    \u0275\u0275template(15, DownloadsComponent_div_12_tr_15_Template, 13, 7, "tr", 12);
    \u0275\u0275pipe(16, "async");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    let tmp_4_0;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 4, "Image"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(10, 6, "Name"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(13, 8, "Action"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", (tmp_4_0 = \u0275\u0275pipeBind1(16, 10, ctx_r2.download$)) == null ? null : tmp_4_0.data);
  }
}
function DownloadsComponent_app_no_data_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-no-data", 19);
  }
  if (rf & 2) {
    \u0275\u0275classMap("no-data-added");
    \u0275\u0275property("image", "assets/svg/empty-items.svg")("text", "No item found")("description", "No Orders have yet");
  }
}
var DownloadsComponent = class _DownloadsComponent {
  constructor(store) {
    this.store = store;
    this.filter = {
      "page": 1,
      "paginate": 10
      // Display per page,
    };
    this.term = new FormControl("");
    this.store.dispatch(new Downloads(this.filter));
  }
  setPaginate(page) {
    this.filter["page"] = page;
    this.store.dispatch(new Downloads(this.filter));
  }
  search() {
    this.filter["search"] = this.term.value;
    ;
    this.store.dispatch(new Downloads(this.filter));
  }
  downloadFiles(id) {
    this.store.dispatch(new DownloadFiles(id));
  }
  downloadLicense(id) {
    this.store.dispatch(new DownloadLicense(id));
  }
  static {
    this.\u0275fac = function DownloadsComponent_Factory(t) {
      return new (t || _DownloadsComponent)(\u0275\u0275directiveInject(Store));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DownloadsComponent, selectors: [["app-downloads"]], decls: 16, vars: 13, consts: [[1, "title-header"], [1, "d-flex", "align-items-center"], [1, "download-detail", "dashboard-bg-box"], [1, "input-group", "download-form"], ["type", "text", 1, "form-control", 3, "placeholder", "formControl"], ["type", "button", 1, "btn", "theme-bg-color", "text-light", 3, "click"], ["class", "download-table", 4, "ngIf"], [3, "class", "image", "text", "description", 4, "ngIf"], [1, "download-table"], [1, "table-responsive"], [1, "table"], [1, "table-name"], [4, "ngFor", "ngForOf"], ["alt", "downloadable item image", 1, "img-fluid", 3, "src"], ["ngbDropdown", "", "container", "body", "placement", "bottom-end", 1, "d-inline-block"], ["type", "button", "ngbDropdownToggle", "", 1, "btn", "dropdown-toggle"], ["ngbDropdownMenu", "", 1, "download-dropdown-menu"], ["ngbDropdownItem", "", 3, "click", 4, "ngIf"], ["ngbDropdownItem", "", 3, "click"], [3, "image", "text", "description"]], template: function DownloadsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h5");
        \u0275\u0275text(3);
        \u0275\u0275pipe(4, "translate");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(5, "div", 2)(6, "form")(7, "div", 3);
        \u0275\u0275element(8, "input", 4);
        \u0275\u0275pipe(9, "translate");
        \u0275\u0275elementStart(10, "button", 5);
        \u0275\u0275listener("click", function DownloadsComponent_Template_button_click_10_listener() {
          return ctx.search();
        });
        \u0275\u0275text(11, "Search");
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(12, DownloadsComponent_div_12_Template, 17, 12, "div", 6);
        \u0275\u0275pipe(13, "async");
        \u0275\u0275elementEnd();
        \u0275\u0275template(14, DownloadsComponent_app_no_data_14_Template, 1, 5, "app-no-data", 7);
        \u0275\u0275pipe(15, "async");
      }
      if (rf & 2) {
        let tmp_3_0;
        let tmp_4_0;
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 5, "Downloads"));
        \u0275\u0275advance(5);
        \u0275\u0275propertyInterpolate("placeholder", \u0275\u0275pipeBind1(9, 7, "Search your Download"));
        \u0275\u0275property("formControl", ctx.term);
        \u0275\u0275advance(4);
        \u0275\u0275property("ngIf", (tmp_3_0 = \u0275\u0275pipeBind1(13, 9, ctx.download$)) == null ? null : tmp_3_0.data == null ? null : tmp_3_0.data.length);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", !((tmp_4_0 = \u0275\u0275pipeBind1(15, 11, ctx.download$)) == null ? null : tmp_4_0.data == null ? null : tmp_4_0.data.length));
      }
    }, dependencies: [NgForOf, NgIf, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormControlDirective, NgForm, NgbDropdown, NgbDropdownToggle, NgbDropdownMenu, NgbDropdownItem, NgbDropdownButtonItem, NoDataComponent, AsyncPipe, TranslatePipe] });
  }
};
__decorate([
  Select(DownloadState.download)
], DownloadsComponent.prototype, "download$", void 0);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DownloadsComponent, { className: "DownloadsComponent", filePath: "src\\app\\components\\account\\downloads\\downloads.component.ts", lineNumber: 15 });
})();

// src/app/components/account/account-routing.module.ts
var routes = [
  {
    path: "",
    component: AccountComponent,
    children: [
      {
        path: "dashboard",
        component: DashboardComponent
      },
      {
        path: "wallet",
        component: WalletComponent
      },
      {
        path: "notifications",
        component: NotificationComponent
      },
      {
        path: "bank-details",
        component: BankDetailsComponent
      },
      {
        path: "point",
        component: PointComponent
      },
      {
        path: "order",
        component: OrdersComponent
      },
      {
        path: "order/details/:id",
        component: OrderDetailsComponent
      },
      {
        path: "refund",
        component: RefundComponent
      },
      {
        path: "addresses",
        component: AddressesComponent
      },
      {
        path: "downloads",
        component: DownloadsComponent
      }
    ]
  }
];
var AccountRoutingModule = class _AccountRoutingModule {
  static {
    this.\u0275fac = function AccountRoutingModule_Factory(t) {
      return new (t || _AccountRoutingModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _AccountRoutingModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forChild(routes), RouterModule] });
  }
};

// src/app/components/account/account.module.ts
var AccountModule = class _AccountModule {
  static {
    this.\u0275fac = function AccountModule_Factory(t) {
      return new (t || _AccountModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _AccountModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [
      CommonModule,
      AccountRoutingModule,
      SharedModule,
      TranslateModule
    ] });
  }
};
export {
  AccountModule
};
//# sourceMappingURL=chunk-NDLDYK7A.js.map
