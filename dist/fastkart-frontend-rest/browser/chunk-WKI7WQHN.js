import {
  RecaptchaComponent,
  RecaptchaFormsModule,
  RecaptchaModule,
  RecaptchaValueAccessorDirective
} from "./chunk-5M4G6466.js";
import {
  AlertComponent,
  AuthService,
  AuthState,
  BreadcrumbComponent,
  ButtonComponent,
  CartState,
  CustomValidators,
  ForgotPassWord,
  GetCartItems,
  Login,
  LoginWithNumber,
  NgxsModule,
  NotificationService,
  Register,
  Select,
  Select2,
  SettingState,
  SharedModule,
  Store,
  SyncCart,
  ThemeOptionState,
  TranslateModule,
  TranslatePipe,
  UpdatePassword,
  VerifyEmailOtp,
  VerifyNumberOTP,
  countryCodes
} from "./chunk-N3F36WZH.js";
import "./chunk-SEVD3V6P.js";
import {
  CheckboxControlValueAccessor,
  DefaultValueAccessor,
  FormBuilder,
  FormControl,
  FormControlDirective,
  FormControlName,
  FormGroupDirective,
  FormsModule,
  MaxLengthValidator,
  NgControlStatus,
  NgControlStatusGroup,
  NumberValueAccessor,
  PatternValidator,
  ReactiveFormsModule,
  Validators,
  ɵNgNoValidate
} from "./chunk-GFSM57H7.js";
import {
  CommonModule,
  NgIf,
  Router,
  RouterLink,
  RouterModule,
  __decorate,
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
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵpropertyInterpolate,
  ɵɵpureFunction0,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-K6HJRTD4.js";

// src/app/components/auth/login/login.component.ts
var _c0 = () => ["/auth/forgot-password"];
var _c1 = () => ["/auth/register"];
function LoginComponent_span_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 34);
    \u0275\u0275text(1, "Email is required");
    \u0275\u0275elementEnd();
  }
}
function LoginComponent_span_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 34);
    \u0275\u0275text(1, "Invalid email address");
    \u0275\u0275elementEnd();
  }
}
function LoginComponent_span_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 34);
    \u0275\u0275text(1, "Password is required");
    \u0275\u0275elementEnd();
  }
}
function LoginComponent_div_43_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 34);
    \u0275\u0275text(1, "ReCaptcha is required");
    \u0275\u0275elementEnd();
  }
}
function LoginComponent_div_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17);
    \u0275\u0275element(1, "re-captcha", 35);
    \u0275\u0275template(2, LoginComponent_div_43_span_2_Template, 2, 0, "span", 20);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", (ctx_r0.form.controls["recaptcha"] == null ? null : ctx_r0.form.controls["recaptcha"].touched) && (ctx_r0.form.controls["recaptcha"] == null ? null : ctx_r0.form.controls["recaptcha"].errors == null ? null : ctx_r0.form.controls["recaptcha"].errors["required"]));
  }
}
var LoginComponent = class _LoginComponent {
  constructor(store, router, formBuilder, authService) {
    this.store = store;
    this.router = router;
    this.formBuilder = formBuilder;
    this.authService = authService;
    this.breadcrumb = {
      title: "Log in",
      items: [{ label: "Log in", active: true }]
    };
    this.reCaptcha = true;
    this.form = this.formBuilder.group({
      email: new FormControl("", [Validators.required, Validators.email]),
      password: new FormControl("", [Validators.required]),
      recaptcha: new FormControl(null, Validators.required)
    });
    this.setting$.subscribe((setting) => {
      if (setting?.google_reCaptcha && !setting?.google_reCaptcha?.status || !setting?.google_reCaptcha) {
        this.form.removeControl("recaptcha");
        this.reCaptcha = false;
      } else {
        this.form.setControl("recaptcha", new FormControl(null, Validators.required));
        this.reCaptcha = true;
      }
    });
  }
  filterEmailCharacters(event) {
    const input = event.target;
    const value = input.value;
    const filteredValue = value.replace(/[^a-zA-Z0-9._\-+@]/g, "");
    if (value !== filteredValue) {
      input.value = filteredValue;
      this.form.get("email")?.setValue(filteredValue);
    }
  }
  submit() {
    this.form.markAllAsTouched();
    if (this.form.valid) {
      this.store.dispatch(new Login(this.form.value)).subscribe({
        complete: () => {
          let syncCartItems = [];
          this.cartItem$.subscribe((items) => {
            items.filter((item) => {
              if (item) {
                const params = {
                  id: null,
                  product: item?.product,
                  product_id: item?.product_id,
                  variation: item?.variation ? item.variation : null,
                  variation_id: item?.variation_id ? item.variation_id : null,
                  quantity: item.quantity
                };
                syncCartItems.push(params);
              }
            });
          });
          if (syncCartItems.length) {
            this.store.dispatch(new SyncCart(syncCartItems));
          } else {
            this.store.dispatch(new GetCartItems());
          }
          const redirectUrl = this.authService.redirectUrl || "/account/dashboard";
          this.router.navigateByUrl(redirectUrl);
          this.authService.redirectUrl = void 0;
        }
      });
    }
  }
  static {
    this.\u0275fac = function LoginComponent_Factory(t) {
      return new (t || _LoginComponent)(\u0275\u0275directiveInject(Store), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(AuthService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LoginComponent, selectors: [["app-login"]], decls: 61, vars: 20, consts: [[3, "breadcrumb"], [1, "auth-page"], [1, "auth-split"], [1, "auth-brand-panel"], [1, "auth-brand-inner"], ["src", "assets/images/repportlogo.png", "alt", "GROFAB", 1, "auth-logo"], [1, "auth-brand-heading"], [1, "auth-brand-sub"], [1, "auth-brand-features"], [1, "auth-feature"], [1, "ri-shield-check-line"], [1, "ri-truck-line"], [1, "ri-refresh-line"], [1, "auth-form-panel"], [1, "auth-form-inner"], [1, "auth-form-header"], [1, "auth-form", 3, "ngSubmit", "formGroup"], [1, "auth-field"], ["for", "email"], ["type", "email", "id", "email", "formControlName", "email", "placeholder", "you@example.com", "pattern", "[a-zA-Z0-9._\\-+@]+", 3, "input"], ["class", "auth-error", 4, "ngIf"], ["for", "password"], ["type", "password", "id", "password", "formControlName", "password", "placeholder", "Enter your password"], ["class", "auth-field", 4, "ngIf"], [1, "auth-options"], [1, "auth-checkbox"], ["type", "checkbox", "id", "remeberme"], [1, "auth-cb-box"], [1, "auth-forgot", 3, "routerLink"], [1, "auth-submit"], [3, "id"], [1, "ri-arrow-right-line"], [1, "auth-switch"], [3, "routerLink"], [1, "auth-error"], ["formControlName", "recaptcha"]], template: function LoginComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275element(0, "app-breadcrumb", 0);
        \u0275\u0275elementStart(1, "section", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4);
        \u0275\u0275element(5, "img", 5);
        \u0275\u0275elementStart(6, "h2", 6);
        \u0275\u0275text(7, "Where Fashion");
        \u0275\u0275element(8, "br");
        \u0275\u0275elementStart(9, "span");
        \u0275\u0275text(10, "Meets Craft");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(11, "p", 7);
        \u0275\u0275text(12, "Premium ethnic wear curated for every occasion. Crafted with tradition, worn with pride.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "div", 8)(14, "div", 9);
        \u0275\u0275element(15, "i", 10);
        \u0275\u0275text(16, " Secure checkout");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(17, "div", 9);
        \u0275\u0275element(18, "i", 11);
        \u0275\u0275text(19, " Free delivery above \u20B9999");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(20, "div", 9);
        \u0275\u0275element(21, "i", 12);
        \u0275\u0275text(22, " Easy 7-day returns");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(23, "div", 13)(24, "div", 14);
        \u0275\u0275element(25, "app-alert");
        \u0275\u0275elementStart(26, "div", 15)(27, "h1");
        \u0275\u0275text(28, "Welcome Back");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(29, "p");
        \u0275\u0275text(30, "Sign in to your account");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(31, "form", 16);
        \u0275\u0275listener("ngSubmit", function LoginComponent_Template_form_ngSubmit_31_listener() {
          return ctx.submit();
        });
        \u0275\u0275elementStart(32, "div", 17)(33, "label", 18);
        \u0275\u0275text(34, "Email Address");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(35, "input", 19);
        \u0275\u0275listener("input", function LoginComponent_Template_input_input_35_listener($event) {
          return ctx.filterEmailCharacters($event);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275template(36, LoginComponent_span_36_Template, 2, 0, "span", 20)(37, LoginComponent_span_37_Template, 2, 0, "span", 20);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(38, "div", 17)(39, "label", 21);
        \u0275\u0275text(40, "Password");
        \u0275\u0275elementEnd();
        \u0275\u0275element(41, "input", 22);
        \u0275\u0275template(42, LoginComponent_span_42_Template, 2, 0, "span", 20);
        \u0275\u0275elementEnd();
        \u0275\u0275template(43, LoginComponent_div_43_Template, 3, 1, "div", 23);
        \u0275\u0275elementStart(44, "div", 24)(45, "label", 25);
        \u0275\u0275element(46, "input", 26)(47, "span", 27);
        \u0275\u0275elementStart(48, "span");
        \u0275\u0275text(49, "Remember me");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(50, "a", 28);
        \u0275\u0275text(51, "Forgot password?");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(52, "div", 29)(53, "app-button", 30);
        \u0275\u0275text(54);
        \u0275\u0275pipe(55, "translate");
        \u0275\u0275element(56, "i", 31);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(57, "div", 32);
        \u0275\u0275text(58, " Don't have an account? ");
        \u0275\u0275elementStart(59, "a", 33);
        \u0275\u0275text(60, "Create one");
        \u0275\u0275elementEnd()()()()()();
      }
      if (rf & 2) {
        \u0275\u0275property("breadcrumb", ctx.breadcrumb);
        \u0275\u0275advance(31);
        \u0275\u0275property("formGroup", ctx.form);
        \u0275\u0275advance(4);
        \u0275\u0275classProp("error", ctx.form.controls["email"].touched && ctx.form.controls["email"].invalid);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.form.controls["email"].touched && (ctx.form.controls["email"].errors == null ? null : ctx.form.controls["email"].errors["required"]));
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.form.controls["email"].touched && (ctx.form.controls["email"].errors == null ? null : ctx.form.controls["email"].errors["email"]));
        \u0275\u0275advance(4);
        \u0275\u0275classProp("error", ctx.form.controls["password"].touched && ctx.form.controls["password"].invalid);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.form.controls["password"].touched && (ctx.form.controls["password"].errors == null ? null : ctx.form.controls["password"].errors["required"]));
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.reCaptcha);
        \u0275\u0275advance(7);
        \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(18, _c0));
        \u0275\u0275advance(3);
        \u0275\u0275classMap("auth-btn-primary");
        \u0275\u0275property("id", "login_btn");
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(55, 16, "Login"), " ");
        \u0275\u0275advance(5);
        \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(19, _c1));
      }
    }, dependencies: [NgIf, RouterLink, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, PatternValidator, FormGroupDirective, FormControlName, BreadcrumbComponent, AlertComponent, ButtonComponent, RecaptchaComponent, RecaptchaValueAccessorDirective, TranslatePipe], styles: ['\n\napp-breadcrumb[_ngcontent-%COMP%] {\n  display: none !important;\n}\n.auth-page[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n  padding: 0 !important;\n  margin: 0 !important;\n}\n.auth-split[_ngcontent-%COMP%] {\n  display: flex;\n  min-height: 100vh;\n  flex: 1;\n}\n.auth-brand-panel[_ngcontent-%COMP%] {\n  width: 42%;\n  background: #1A2518;\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  overflow: hidden;\n  flex-shrink: 0;\n}\n.auth-brand-panel[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  width: 500px;\n  height: 500px;\n  border: 1px solid rgba(201, 160, 84, 0.12);\n  border-radius: 50%;\n  top: -120px;\n  right: -120px;\n  pointer-events: none;\n}\n.auth-brand-panel[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  width: 360px;\n  height: 360px;\n  border: 1px solid rgba(201, 160, 84, 0.08);\n  border-radius: 50%;\n  bottom: -100px;\n  left: -80px;\n  pointer-events: none;\n}\n@media (max-width: 767px) {\n  .auth-brand-panel[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.auth-brand-inner[_ngcontent-%COMP%] {\n  padding: 60px 52px;\n  position: relative;\n  z-index: 1;\n  text-align: left;\n}\n.auth-logo[_ngcontent-%COMP%] {\n  height: 48px;\n  margin-bottom: 52px;\n  filter: brightness(0) invert(1);\n  display: block;\n}\n.auth-brand-heading[_ngcontent-%COMP%] {\n  font-family: "Poppins", sans-serif;\n  font-size: 38px;\n  font-weight: 700;\n  color: #fff;\n  line-height: 1.2;\n  margin-bottom: 20px;\n  letter-spacing: -0.5px;\n}\n.auth-brand-heading[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #C9A054;\n}\n.auth-brand-sub[_ngcontent-%COMP%] {\n  font-family: "Poppins", sans-serif;\n  font-size: 14px;\n  color: rgba(255, 255, 255, 0.45);\n  line-height: 1.75;\n  margin-bottom: 44px;\n  max-width: 320px;\n}\n.auth-brand-features[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n.auth-feature[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  font-family: "Poppins", sans-serif;\n  font-size: 13px;\n  color: rgba(255, 255, 255, 0.6);\n}\n.auth-feature[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: #C9A054;\n  flex-shrink: 0;\n}\n.auth-form-panel[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: #fff;\n  padding: 60px 40px;\n  overflow-y: auto;\n}\n@media (max-width: 575px) {\n  .auth-form-panel[_ngcontent-%COMP%] {\n    padding: 40px 20px;\n  }\n}\n.auth-form-inner[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 560px;\n}\n.auth-form-header[_ngcontent-%COMP%] {\n  margin-bottom: 36px;\n}\n.auth-form-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-family: "Poppins", sans-serif;\n  font-size: 32px;\n  font-weight: 700;\n  color: #1A2518;\n  margin-bottom: 8px;\n  letter-spacing: -0.3px;\n}\n.auth-form-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-family: "Poppins", sans-serif;\n  font-size: 15px;\n  color: #999;\n  margin: 0;\n}\n.auth-form[_ngcontent-%COMP%]   .auth-field[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.auth-form[_ngcontent-%COMP%]   .auth-field[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  font-family: "Poppins", sans-serif;\n  font-size: 11px;\n  font-weight: 600;\n  color: #aaa;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n  margin-bottom: 8px;\n}\n.auth-form[_ngcontent-%COMP%]   .auth-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  padding: 15px 18px;\n  font-family: "Poppins", sans-serif;\n  font-size: 15px;\n  color: #1A2518;\n  background: #faf9f6;\n  border: 1.5px solid #e8e5de;\n  border-radius: 6px;\n  outline: none;\n  transition: border-color 0.2s, background 0.2s;\n}\n.auth-form[_ngcontent-%COMP%]   .auth-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\n  color: #bbb;\n}\n.auth-form[_ngcontent-%COMP%]   .auth-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n  background: #fff;\n  border-color: #C9A054;\n  box-shadow: 0 0 0 3px rgba(201, 160, 84, 0.08);\n}\n.auth-form[_ngcontent-%COMP%]   .auth-field[_ngcontent-%COMP%]   input.error[_ngcontent-%COMP%] {\n  border-color: #e53e3e;\n  background: #fffafa;\n}\n.auth-form[_ngcontent-%COMP%]   .auth-field[_ngcontent-%COMP%]   .auth-error[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 12px;\n  color: #e53e3e;\n  margin-top: 6px;\n}\n.auth-options[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 28px;\n  flex-wrap: wrap;\n  gap: 10px;\n}\n.auth-checkbox[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  cursor: pointer;\n  font-family: "Poppins", sans-serif;\n  font-size: 13px;\n  color: #777;\n  -webkit-user-select: none;\n  user-select: none;\n}\n.auth-checkbox[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  display: none;\n}\n.auth-checkbox[_ngcontent-%COMP%]   .auth-cb-box[_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n  border: 1.5px solid #ddd;\n  border-radius: 3px;\n  background: #fff;\n  position: relative;\n  transition: all 0.2s;\n  flex-shrink: 0;\n}\n.auth-checkbox[_ngcontent-%COMP%]   .auth-cb-box[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  left: 4px;\n  top: 1px;\n  width: 5px;\n  height: 9px;\n  border: solid #fff;\n  border-width: 0 2px 2px 0;\n  transform: rotate(45deg) scale(0);\n  opacity: 0;\n  transition: all 0.15s;\n}\n.auth-checkbox[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    + .auth-cb-box[_ngcontent-%COMP%] {\n  background: #1A2518;\n  border-color: #1A2518;\n}\n.auth-checkbox[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    + .auth-cb-box[_ngcontent-%COMP%]::after {\n  opacity: 1;\n  transform: rotate(45deg) scale(1);\n}\n.auth-forgot[_ngcontent-%COMP%] {\n  font-family: "Poppins", sans-serif;\n  font-size: 13px;\n  color: #C9A054;\n  text-decoration: none;\n  font-weight: 500;\n}\n.auth-forgot[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.auth-submit[_ngcontent-%COMP%] {\n  margin-bottom: 28px;\n}\n.auth-submit[_ngcontent-%COMP%]     app-button {\n  width: 100%;\n}\n.auth-submit[_ngcontent-%COMP%]     app-button .auth-btn-primary, .auth-submit[_ngcontent-%COMP%]     app-button button {\n  width: 100%;\n  padding: 16px 20px;\n  background: #1A2518;\n  color: #fff;\n  border: none;\n  border-radius: 6px;\n  font-family: "Poppins", sans-serif;\n  font-size: 13px;\n  font-weight: 600;\n  letter-spacing: 0.8px;\n  text-transform: uppercase;\n  cursor: pointer;\n  transition: background 0.2s;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n}\n.auth-submit[_ngcontent-%COMP%]     app-button .auth-btn-primary i, .auth-submit[_ngcontent-%COMP%]     app-button button i {\n  font-size: 16px;\n}\n.auth-submit[_ngcontent-%COMP%]     app-button .auth-btn-primary:hover:not(:disabled), .auth-submit[_ngcontent-%COMP%]     app-button button:hover:not(:disabled) {\n  background: #C9A054;\n  color: #1A2518;\n}\n.auth-submit[_ngcontent-%COMP%]     app-button .auth-btn-primary:disabled, .auth-submit[_ngcontent-%COMP%]     app-button button:disabled {\n  opacity: 0.4;\n  cursor: not-allowed;\n}\n.auth-switch[_ngcontent-%COMP%] {\n  text-align: center;\n  font-family: "Poppins", sans-serif;\n  font-size: 14px;\n  color: #aaa;\n}\n.auth-switch[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #1A2518;\n  font-weight: 600;\n  text-decoration: none;\n  margin-left: 4px;\n}\n.auth-switch[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #C9A054;\n}\n/*# sourceMappingURL=login.component.css.map */'] });
  }
};
__decorate([
  Select(CartState.cartItems)
], LoginComponent.prototype, "cartItem$", void 0);
__decorate([
  Select(SettingState.setting)
], LoginComponent.prototype, "setting$", void 0);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LoginComponent, { className: "LoginComponent", filePath: "src\\app\\components\\auth\\login\\login.component.ts", lineNumber: 20 });
})();

// src/app/components/auth/forgot-password/forgot-password.component.ts
var _c02 = () => ["/auth/login"];
function ForgotPasswordComponent_span_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 30);
    \u0275\u0275text(1, "Email is required");
    \u0275\u0275elementEnd();
  }
}
function ForgotPasswordComponent_span_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 30);
    \u0275\u0275text(1, "Invalid email address");
    \u0275\u0275elementEnd();
  }
}
function ForgotPasswordComponent_div_40_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 30);
    \u0275\u0275text(1, "ReCaptcha is required");
    \u0275\u0275elementEnd();
  }
}
function ForgotPasswordComponent_div_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19);
    \u0275\u0275element(1, "re-captcha", 31);
    \u0275\u0275template(2, ForgotPasswordComponent_div_40_span_2_Template, 2, 0, "span", 22);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", (ctx_r0.form.controls["recaptcha"] == null ? null : ctx_r0.form.controls["recaptcha"].touched) && (ctx_r0.form.controls["recaptcha"] == null ? null : ctx_r0.form.controls["recaptcha"].errors == null ? null : ctx_r0.form.controls["recaptcha"].errors["required"]));
  }
}
var ForgotPasswordComponent = class _ForgotPasswordComponent {
  constructor(store, router, authService, formBuilder) {
    this.store = store;
    this.router = router;
    this.authService = authService;
    this.formBuilder = formBuilder;
    this.breadcrumb = {
      title: "Forgot Password",
      items: [{ label: "Forgot Password", active: true }]
    };
    this.reCaptcha = true;
    this.form = this.formBuilder.group({
      email: ["", [Validators.required, Validators.email]],
      recaptcha: ["", [Validators.required]]
    });
    this.setting$.subscribe((setting) => {
      if (setting?.google_reCaptcha && !setting?.google_reCaptcha?.status || !setting?.google_reCaptcha) {
        this.form.removeControl("recaptcha");
        this.reCaptcha = false;
      } else {
        this.form.setControl("recaptcha", new FormControl(null, Validators.required));
        this.reCaptcha = true;
      }
    });
  }
  filterEmailCharacters(event) {
    const input = event.target;
    const value = input.value;
    const filteredValue = value.replace(/[^a-zA-Z0-9._\-+@]/g, "");
    if (value !== filteredValue) {
      input.value = filteredValue;
      this.form.get("email")?.setValue(filteredValue);
    }
  }
  submit() {
    this.form.markAllAsTouched();
    if (this.form.valid) {
      this.store.dispatch(new ForgotPassWord(this.form.value)).subscribe({
        complete: () => {
          this.authService.otpType = "email";
          this.router.navigateByUrl("/auth/otp");
        }
      });
    }
  }
  static {
    this.\u0275fac = function ForgotPasswordComponent_Factory(t) {
      return new (t || _ForgotPasswordComponent)(\u0275\u0275directiveInject(Store), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(FormBuilder));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ForgotPasswordComponent, selectors: [["app-forgot-password"]], decls: 50, vars: 15, consts: [[3, "breadcrumb"], [1, "auth-page"], [1, "auth-split"], [1, "auth-brand-panel"], [1, "auth-brand-inner"], ["src", "assets/images/repportlogo.png", "alt", "GROFAB", 1, "auth-logo"], [1, "auth-brand-heading"], [1, "auth-brand-sub"], [1, "auth-brand-features"], [1, "auth-feature"], [1, "ri-lock-line"], [1, "ri-mail-send-line"], [1, "ri-timer-line"], [1, "auth-form-panel"], [1, "auth-form-inner"], [1, "auth-form-header"], [1, "auth-icon-circle"], [1, "ri-lock-password-line"], [1, "auth-form", 3, "ngSubmit", "formGroup"], [1, "auth-field"], ["for", "email"], ["type", "email", "id", "email", "formControlName", "email", "placeholder", "you@example.com", "pattern", "[a-zA-Z0-9._\\-+@]+", 3, "input"], ["class", "auth-error", 4, "ngIf"], ["class", "auth-field", 4, "ngIf"], [1, "auth-submit"], [3, "id"], [1, "ri-arrow-right-line"], [1, "auth-switch"], [3, "routerLink"], [1, "ri-arrow-left-line"], [1, "auth-error"], ["formControlName", "recaptcha"]], template: function ForgotPasswordComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275element(0, "app-breadcrumb", 0);
        \u0275\u0275elementStart(1, "section", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4);
        \u0275\u0275element(5, "img", 5);
        \u0275\u0275elementStart(6, "h2", 6);
        \u0275\u0275text(7, "Reset Your");
        \u0275\u0275element(8, "br");
        \u0275\u0275elementStart(9, "span");
        \u0275\u0275text(10, "Password");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(11, "p", 7);
        \u0275\u0275text(12, "Don't worry, it happens! Enter your email and we'll send you a link to reset your password.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "div", 8)(14, "div", 9);
        \u0275\u0275element(15, "i", 10);
        \u0275\u0275text(16, " Secure password reset");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(17, "div", 9);
        \u0275\u0275element(18, "i", 11);
        \u0275\u0275text(19, " Reset link via email");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(20, "div", 9);
        \u0275\u0275element(21, "i", 12);
        \u0275\u0275text(22, " Link expires in 60 min");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(23, "div", 13)(24, "div", 14);
        \u0275\u0275element(25, "app-alert");
        \u0275\u0275elementStart(26, "div", 15)(27, "div", 16);
        \u0275\u0275element(28, "i", 17);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(29, "h1");
        \u0275\u0275text(30, "Forgot Password?");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(31, "p");
        \u0275\u0275text(32, "Enter your email address and we'll send you instructions to reset your password.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(33, "form", 18);
        \u0275\u0275listener("ngSubmit", function ForgotPasswordComponent_Template_form_ngSubmit_33_listener() {
          return ctx.submit();
        });
        \u0275\u0275elementStart(34, "div", 19)(35, "label", 20);
        \u0275\u0275text(36, "Email Address");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(37, "input", 21);
        \u0275\u0275listener("input", function ForgotPasswordComponent_Template_input_input_37_listener($event) {
          return ctx.filterEmailCharacters($event);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275template(38, ForgotPasswordComponent_span_38_Template, 2, 0, "span", 22)(39, ForgotPasswordComponent_span_39_Template, 2, 0, "span", 22);
        \u0275\u0275elementEnd();
        \u0275\u0275template(40, ForgotPasswordComponent_div_40_Template, 3, 1, "div", 23);
        \u0275\u0275elementStart(41, "div", 24)(42, "app-button", 25);
        \u0275\u0275text(43);
        \u0275\u0275pipe(44, "translate");
        \u0275\u0275element(45, "i", 26);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(46, "div", 27)(47, "a", 28);
        \u0275\u0275element(48, "i", 29);
        \u0275\u0275text(49, " Back to Sign In");
        \u0275\u0275elementEnd()()()()()();
      }
      if (rf & 2) {
        \u0275\u0275property("breadcrumb", ctx.breadcrumb);
        \u0275\u0275advance(33);
        \u0275\u0275property("formGroup", ctx.form);
        \u0275\u0275advance(4);
        \u0275\u0275classProp("error", ctx.form.controls["email"].touched && ctx.form.controls["email"].invalid);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.form.controls["email"].touched && (ctx.form.controls["email"].errors == null ? null : ctx.form.controls["email"].errors["required"]));
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.form.controls["email"].touched && (ctx.form.controls["email"].errors == null ? null : ctx.form.controls["email"].errors["email"]));
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.reCaptcha);
        \u0275\u0275advance(2);
        \u0275\u0275classMap("auth-btn-primary");
        \u0275\u0275property("id", "forgot_btn");
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(44, 12, "Send Reset Link"), " ");
        \u0275\u0275advance(4);
        \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(14, _c02));
      }
    }, dependencies: [NgIf, RouterLink, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, PatternValidator, FormGroupDirective, FormControlName, BreadcrumbComponent, AlertComponent, ButtonComponent, RecaptchaComponent, RecaptchaValueAccessorDirective, TranslatePipe], styles: ['\n\napp-breadcrumb[_ngcontent-%COMP%] {\n  display: none !important;\n}\n.auth-page[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n  padding: 0 !important;\n  margin: 0 !important;\n}\n.auth-split[_ngcontent-%COMP%] {\n  display: flex;\n  min-height: 100vh;\n  flex: 1;\n}\n.auth-brand-panel[_ngcontent-%COMP%] {\n  width: 42%;\n  background: #1A2518;\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  overflow: hidden;\n  flex-shrink: 0;\n}\n.auth-brand-panel[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  width: 500px;\n  height: 500px;\n  border: 1px solid rgba(201, 160, 84, 0.12);\n  border-radius: 50%;\n  top: -120px;\n  right: -120px;\n  pointer-events: none;\n}\n.auth-brand-panel[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  width: 360px;\n  height: 360px;\n  border: 1px solid rgba(201, 160, 84, 0.08);\n  border-radius: 50%;\n  bottom: -100px;\n  left: -80px;\n  pointer-events: none;\n}\n@media (max-width: 767px) {\n  .auth-brand-panel[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.auth-brand-inner[_ngcontent-%COMP%] {\n  padding: 60px 52px;\n  position: relative;\n  z-index: 1;\n}\n.auth-logo[_ngcontent-%COMP%] {\n  height: 48px;\n  margin-bottom: 52px;\n  filter: brightness(0) invert(1);\n  display: block;\n}\n.auth-brand-heading[_ngcontent-%COMP%] {\n  font-family: "Poppins", sans-serif;\n  font-size: 38px;\n  font-weight: 700;\n  color: #fff;\n  line-height: 1.2;\n  margin-bottom: 20px;\n  letter-spacing: -0.5px;\n}\n.auth-brand-heading[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #C9A054;\n}\n.auth-brand-sub[_ngcontent-%COMP%] {\n  font-family: "Poppins", sans-serif;\n  font-size: 14px;\n  color: rgba(255, 255, 255, 0.45);\n  line-height: 1.75;\n  margin-bottom: 44px;\n  max-width: 320px;\n}\n.auth-brand-features[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n.auth-feature[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  font-family: "Poppins", sans-serif;\n  font-size: 13px;\n  color: rgba(255, 255, 255, 0.6);\n}\n.auth-feature[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: #C9A054;\n  flex-shrink: 0;\n}\n.auth-form-panel[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: #fff;\n  padding: 60px 40px;\n  overflow-y: auto;\n}\n@media (max-width: 575px) {\n  .auth-form-panel[_ngcontent-%COMP%] {\n    padding: 40px 20px;\n  }\n}\n.auth-form-inner[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 460px;\n}\n.auth-icon-circle[_ngcontent-%COMP%] {\n  width: 64px;\n  height: 64px;\n  border-radius: 50%;\n  background: rgba(201, 160, 84, 0.1);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-bottom: 24px;\n}\n.auth-icon-circle[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 28px;\n  color: #C9A054;\n}\n.auth-form-header[_ngcontent-%COMP%] {\n  margin-bottom: 36px;\n}\n.auth-form-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-family: "Poppins", sans-serif;\n  font-size: 28px;\n  font-weight: 700;\n  color: #1A2518;\n  margin-bottom: 10px;\n  letter-spacing: -0.3px;\n}\n.auth-form-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-family: "Poppins", sans-serif;\n  font-size: 14px;\n  color: #999;\n  margin: 0;\n  line-height: 1.6;\n}\n.auth-form[_ngcontent-%COMP%]   .auth-field[_ngcontent-%COMP%] {\n  margin-bottom: 22px;\n}\n.auth-form[_ngcontent-%COMP%]   .auth-field[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  font-family: "Poppins", sans-serif;\n  font-size: 11px;\n  font-weight: 600;\n  color: #aaa;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n  margin-bottom: 8px;\n}\n.auth-form[_ngcontent-%COMP%]   .auth-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  padding: 15px 18px;\n  font-family: "Poppins", sans-serif;\n  font-size: 15px;\n  color: #1A2518;\n  background: #faf9f6;\n  border: 1.5px solid #e8e5de;\n  border-radius: 6px;\n  outline: none;\n  transition: border-color 0.2s, background 0.2s;\n}\n.auth-form[_ngcontent-%COMP%]   .auth-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\n  color: #bbb;\n}\n.auth-form[_ngcontent-%COMP%]   .auth-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n  background: #fff;\n  border-color: #C9A054;\n  box-shadow: 0 0 0 3px rgba(201, 160, 84, 0.08);\n}\n.auth-form[_ngcontent-%COMP%]   .auth-field[_ngcontent-%COMP%]   input.error[_ngcontent-%COMP%] {\n  border-color: #e53e3e;\n  background: #fffafa;\n}\n.auth-form[_ngcontent-%COMP%]   .auth-field[_ngcontent-%COMP%]   .auth-error[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 12px;\n  color: #e53e3e;\n  margin-top: 6px;\n}\n.auth-submit[_ngcontent-%COMP%] {\n  margin-bottom: 28px;\n}\n.auth-submit[_ngcontent-%COMP%]     app-button {\n  width: 100%;\n}\n.auth-submit[_ngcontent-%COMP%]     app-button .auth-btn-primary, .auth-submit[_ngcontent-%COMP%]     app-button button {\n  width: 100%;\n  padding: 16px 20px;\n  background: #1A2518;\n  color: #fff;\n  border: none;\n  border-radius: 6px;\n  font-family: "Poppins", sans-serif;\n  font-size: 13px;\n  font-weight: 600;\n  letter-spacing: 0.8px;\n  text-transform: uppercase;\n  cursor: pointer;\n  transition: background 0.2s;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n}\n.auth-submit[_ngcontent-%COMP%]     app-button .auth-btn-primary i, .auth-submit[_ngcontent-%COMP%]     app-button button i {\n  font-size: 16px;\n}\n.auth-submit[_ngcontent-%COMP%]     app-button .auth-btn-primary:hover:not(:disabled), .auth-submit[_ngcontent-%COMP%]     app-button button:hover:not(:disabled) {\n  background: #C9A054;\n  color: #1A2518;\n}\n.auth-submit[_ngcontent-%COMP%]     app-button .auth-btn-primary:disabled, .auth-submit[_ngcontent-%COMP%]     app-button button:disabled {\n  opacity: 0.4;\n  cursor: not-allowed;\n}\n.auth-switch[_ngcontent-%COMP%] {\n  text-align: center;\n  font-family: "Poppins", sans-serif;\n  font-size: 14px;\n}\n.auth-switch[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #1A2518;\n  font-weight: 600;\n  text-decoration: none;\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  transition: color 0.2s;\n}\n.auth-switch[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.auth-switch[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #C9A054;\n}\n/*# sourceMappingURL=forgot-password.component.css.map */'] });
  }
};
__decorate([
  Select(ThemeOptionState.themeOptions)
], ForgotPasswordComponent.prototype, "themeOption$", void 0);
__decorate([
  Select(SettingState.setting)
], ForgotPasswordComponent.prototype, "setting$", void 0);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ForgotPasswordComponent, { className: "ForgotPasswordComponent", filePath: "src\\app\\components\\auth\\forgot-password\\forgot-password.component.ts", lineNumber: 20 });
})();

// src/app/components/auth/otp/otp.component.ts
var _c03 = () => ["/auth/login"];
function OtpComponent_span_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "We sent a code to ");
    \u0275\u0275elementStart(2, "strong");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.email);
  }
}
function OtpComponent_span_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "We sent a code to ");
    \u0275\u0275elementStart(2, "strong");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.number.phone);
  }
}
function OtpComponent_span_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 32);
    \u0275\u0275text(1, "Verification code is required");
    \u0275\u0275elementEnd();
  }
}
function OtpComponent_span_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 32);
    \u0275\u0275text(1, "Please enter a valid 5-digit code");
    \u0275\u0275elementEnd();
  }
}
var OtpComponent = class _OtpComponent {
  constructor(router, store, authService, formBuilder) {
    this.router = router;
    this.store = store;
    this.authService = authService;
    this.formBuilder = formBuilder;
    this.breadcrumb = {
      title: "OTP",
      items: [{ label: "OTP", active: true }]
    };
    this.form = this.formBuilder.group({
      otp: new FormControl("", [Validators.required, Validators.minLength(5)])
    });
  }
  ngOnInit() {
    this.otpType = this.authService.otpType;
    if (this.otpType === "email") {
      this.email = this.store.selectSnapshot((state) => state.auth.email);
      if (!this.email) {
        this.router.navigateByUrl("/auth/login");
      }
    } else if (this.otpType === "number") {
      this.number = this.store.selectSnapshot((state) => state.auth.number);
      if (!this.number.phone) {
        this.router.navigateByUrl("/auth/login");
      }
    } else {
      this.router.navigateByUrl("/auth/login");
    }
  }
  submit() {
    this.form.markAllAsTouched();
    if (this.form.valid) {
      var action;
      var value;
      if (this.otpType === "email") {
        value = {
          email: this.email,
          token: this.form.value.otp
        };
        action = new VerifyEmailOtp(value);
      }
      if (this.otpType === "number") {
        value = {
          phone: this.number.phone,
          country_code: this.number.country_code,
          token: this.form.value.otp
        };
        action = new VerifyNumberOTP(value);
      }
      this.store.dispatch(action).subscribe({
        complete: () => {
          if (this.otpType === "email") {
            this.router.navigateByUrl("/auth/update-password");
          } else {
            this.router.navigateByUrl("/account/dashboard");
          }
        }
      });
    }
  }
  resendOtp() {
    this.form.reset();
    this.router.navigateByUrl("/auth/login");
  }
  static {
    this.\u0275fac = function OtpComponent_Factory(t) {
      return new (t || _OtpComponent)(\u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(Store), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(FormBuilder));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _OtpComponent, selectors: [["app-otp"]], decls: 56, vars: 16, consts: [[3, "breadcrumb"], [1, "auth-page"], [1, "auth-split"], [1, "auth-brand-panel"], [1, "auth-brand-inner"], ["src", "assets/images/repportlogo.png", "alt", "GROFAB", 1, "auth-logo"], [1, "auth-brand-heading"], [1, "auth-brand-sub"], [1, "auth-brand-features"], [1, "auth-feature"], [1, "ri-shield-check-line"], [1, "ri-time-line"], [1, "ri-refresh-line"], [1, "auth-form-panel"], [1, "auth-form-inner"], [1, "auth-form-header"], [1, "auth-icon-circle"], [1, "ri-shield-keyhole-line"], [4, "ngIf"], [1, "auth-form", 3, "ngSubmit", "formGroup"], [1, "auth-field"], ["for", "otp"], ["type", "text", "id", "otp", "formControlName", "otp", "maxlength", "5", "placeholder", "Enter 5-digit code", "oninput", "this.value = this.value?.replace(/[^0-9.]/g, '').replace(/(\\..*)\\./g, '$1');", "onKeyPress", "if(this.value.length==5) return false;"], ["class", "auth-error", 4, "ngIf"], [1, "auth-submit"], [3, "id"], [1, "ri-arrow-right-line"], [1, "auth-resend"], ["type", "button", 1, "resend-btn", 3, "click"], [1, "auth-switch"], [3, "routerLink"], [1, "ri-arrow-left-line"], [1, "auth-error"]], template: function OtpComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275element(0, "app-breadcrumb", 0);
        \u0275\u0275elementStart(1, "section", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4);
        \u0275\u0275element(5, "img", 5);
        \u0275\u0275elementStart(6, "h2", 6);
        \u0275\u0275text(7, "Verify Your");
        \u0275\u0275element(8, "br");
        \u0275\u0275elementStart(9, "span");
        \u0275\u0275text(10, "Identity");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(11, "p", 7);
        \u0275\u0275text(12, "We've sent a verification code to your registered email or phone number.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "div", 8)(14, "div", 9);
        \u0275\u0275element(15, "i", 10);
        \u0275\u0275text(16, " Secure verification");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(17, "div", 9);
        \u0275\u0275element(18, "i", 11);
        \u0275\u0275text(19, " Code valid for 10 min");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(20, "div", 9);
        \u0275\u0275element(21, "i", 12);
        \u0275\u0275text(22, " Resend if not received");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(23, "div", 13)(24, "div", 14);
        \u0275\u0275element(25, "app-alert");
        \u0275\u0275elementStart(26, "div", 15)(27, "div", 16);
        \u0275\u0275element(28, "i", 17);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(29, "h1");
        \u0275\u0275text(30, "Enter Verification Code");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(31, "p");
        \u0275\u0275template(32, OtpComponent_span_32_Template, 4, 1, "span", 18)(33, OtpComponent_span_33_Template, 4, 1, "span", 18);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(34, "form", 19);
        \u0275\u0275listener("ngSubmit", function OtpComponent_Template_form_ngSubmit_34_listener() {
          return ctx.submit();
        });
        \u0275\u0275elementStart(35, "div", 20)(36, "label", 21);
        \u0275\u0275text(37, "Verification Code");
        \u0275\u0275elementEnd();
        \u0275\u0275element(38, "input", 22);
        \u0275\u0275template(39, OtpComponent_span_39_Template, 2, 0, "span", 23)(40, OtpComponent_span_40_Template, 2, 0, "span", 23);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(41, "div", 24)(42, "app-button", 25);
        \u0275\u0275text(43);
        \u0275\u0275pipe(44, "translate");
        \u0275\u0275element(45, "i", 26);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(46, "div", 27)(47, "p");
        \u0275\u0275text(48, "Didn't receive the code?");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(49, "button", 28);
        \u0275\u0275listener("click", function OtpComponent_Template_button_click_49_listener() {
          return ctx.resendOtp();
        });
        \u0275\u0275element(50, "i", 12);
        \u0275\u0275text(51, " Resend Code ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(52, "div", 29)(53, "a", 30);
        \u0275\u0275element(54, "i", 31);
        \u0275\u0275text(55, " Back to Sign In");
        \u0275\u0275elementEnd()()()()()();
      }
      if (rf & 2) {
        \u0275\u0275property("breadcrumb", ctx.breadcrumb);
        \u0275\u0275advance(32);
        \u0275\u0275property("ngIf", ctx.otpType === "email");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.otpType === "number");
        \u0275\u0275advance();
        \u0275\u0275property("formGroup", ctx.form);
        \u0275\u0275advance(4);
        \u0275\u0275classProp("error", ctx.form.controls["otp"].touched && ctx.form.controls["otp"].invalid);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.form.controls["otp"].touched && (ctx.form.controls["otp"].errors == null ? null : ctx.form.controls["otp"].errors["required"]));
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.form.controls["otp"].touched && (ctx.form.controls["otp"].errors == null ? null : ctx.form.controls["otp"].errors["pattern"]));
        \u0275\u0275advance(2);
        \u0275\u0275classMap("auth-btn-primary");
        \u0275\u0275property("id", "otp_validate_btn");
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(44, 13, "Validate"), " ");
        \u0275\u0275advance(10);
        \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(15, _c03));
      }
    }, dependencies: [NgIf, RouterLink, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, MaxLengthValidator, FormGroupDirective, FormControlName, BreadcrumbComponent, AlertComponent, ButtonComponent, TranslatePipe], styles: ['\n\napp-breadcrumb[_ngcontent-%COMP%] {\n  display: none !important;\n}\n.auth-page[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n  padding: 0 !important;\n  margin: 0 !important;\n}\n.auth-split[_ngcontent-%COMP%] {\n  display: flex;\n  min-height: 100vh;\n  flex: 1;\n}\n.auth-brand-panel[_ngcontent-%COMP%] {\n  width: 42%;\n  background: #1A2518;\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  overflow: hidden;\n  flex-shrink: 0;\n}\n.auth-brand-panel[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  width: 500px;\n  height: 500px;\n  border: 1px solid rgba(201, 160, 84, 0.12);\n  border-radius: 50%;\n  top: -120px;\n  right: -120px;\n}\n.auth-brand-panel[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  width: 360px;\n  height: 360px;\n  border: 1px solid rgba(201, 160, 84, 0.08);\n  border-radius: 50%;\n  bottom: -100px;\n  left: -80px;\n}\n@media (max-width: 767px) {\n  .auth-brand-panel[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.auth-brand-inner[_ngcontent-%COMP%] {\n  padding: 60px 52px;\n  position: relative;\n  z-index: 1;\n}\n.auth-logo[_ngcontent-%COMP%] {\n  height: 48px;\n  margin-bottom: 52px;\n  filter: brightness(0) invert(1);\n  display: block;\n}\n.auth-brand-heading[_ngcontent-%COMP%] {\n  font-family: "Poppins", sans-serif;\n  font-size: 38px;\n  font-weight: 700;\n  color: #fff;\n  line-height: 1.2;\n  margin-bottom: 20px;\n}\n.auth-brand-heading[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #C9A054;\n}\n.auth-brand-sub[_ngcontent-%COMP%] {\n  font-family: "Poppins", sans-serif;\n  font-size: 14px;\n  color: rgba(255, 255, 255, 0.45);\n  line-height: 1.75;\n  margin-bottom: 44px;\n  max-width: 320px;\n}\n.auth-brand-features[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n.auth-feature[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  font-family: "Poppins", sans-serif;\n  font-size: 13px;\n  color: rgba(255, 255, 255, 0.6);\n}\n.auth-feature[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: #C9A054;\n}\n.auth-form-panel[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: #fff;\n  padding: 60px 40px;\n}\n@media (max-width: 575px) {\n  .auth-form-panel[_ngcontent-%COMP%] {\n    padding: 40px 20px;\n  }\n}\n.auth-form-inner[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 460px;\n}\n.auth-icon-circle[_ngcontent-%COMP%] {\n  width: 64px;\n  height: 64px;\n  border-radius: 50%;\n  background: rgba(201, 160, 84, 0.1);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-bottom: 24px;\n}\n.auth-icon-circle[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 28px;\n  color: #C9A054;\n}\n.auth-form-header[_ngcontent-%COMP%] {\n  margin-bottom: 36px;\n}\n.auth-form-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-family: "Poppins", sans-serif;\n  font-size: 28px;\n  font-weight: 700;\n  color: #1A2518;\n  margin-bottom: 10px;\n}\n.auth-form-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-family: "Poppins", sans-serif;\n  font-size: 14px;\n  color: #999;\n  margin: 0;\n  line-height: 1.6;\n}\n.auth-form-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #1A2518;\n}\n.auth-form[_ngcontent-%COMP%]   .auth-field[_ngcontent-%COMP%] {\n  margin-bottom: 22px;\n}\n.auth-form[_ngcontent-%COMP%]   .auth-field[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  font-family: "Poppins", sans-serif;\n  font-size: 11px;\n  font-weight: 600;\n  color: #aaa;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n  margin-bottom: 8px;\n}\n.auth-form[_ngcontent-%COMP%]   .auth-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  padding: 15px 18px;\n  font-family: "Poppins", sans-serif;\n  font-size: 22px;\n  font-weight: 600;\n  letter-spacing: 10px;\n  color: #1A2518;\n  background: #faf9f6;\n  border: 1.5px solid #e8e5de;\n  border-radius: 6px;\n  outline: none;\n  text-align: center;\n  transition: border-color 0.2s;\n}\n.auth-form[_ngcontent-%COMP%]   .auth-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\n  color: #bbb;\n  font-size: 14px;\n  letter-spacing: normal;\n  font-weight: 400;\n}\n.auth-form[_ngcontent-%COMP%]   .auth-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n  background: #fff;\n  border-color: #C9A054;\n  box-shadow: 0 0 0 3px rgba(201, 160, 84, 0.08);\n}\n.auth-form[_ngcontent-%COMP%]   .auth-field[_ngcontent-%COMP%]   input.error[_ngcontent-%COMP%] {\n  border-color: #e53e3e;\n}\n.auth-form[_ngcontent-%COMP%]   .auth-field[_ngcontent-%COMP%]   .auth-error[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 12px;\n  color: #e53e3e;\n  margin-top: 6px;\n  text-align: center;\n}\n.auth-submit[_ngcontent-%COMP%] {\n  margin-bottom: 28px;\n}\n.auth-submit[_ngcontent-%COMP%]     app-button {\n  width: 100%;\n}\n.auth-submit[_ngcontent-%COMP%]     app-button .auth-btn-primary, .auth-submit[_ngcontent-%COMP%]     app-button button {\n  width: 100%;\n  padding: 16px 20px;\n  background: #1A2518;\n  color: #fff;\n  border: none;\n  border-radius: 6px;\n  font-family: "Poppins", sans-serif;\n  font-size: 13px;\n  font-weight: 600;\n  letter-spacing: 0.8px;\n  text-transform: uppercase;\n  cursor: pointer;\n  transition: background 0.2s;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n}\n.auth-submit[_ngcontent-%COMP%]     app-button .auth-btn-primary i, .auth-submit[_ngcontent-%COMP%]     app-button button i {\n  font-size: 16px;\n}\n.auth-submit[_ngcontent-%COMP%]     app-button .auth-btn-primary:hover:not(:disabled), .auth-submit[_ngcontent-%COMP%]     app-button button:hover:not(:disabled) {\n  background: #C9A054;\n  color: #1A2518;\n}\n.auth-submit[_ngcontent-%COMP%]     app-button .auth-btn-primary:disabled, .auth-submit[_ngcontent-%COMP%]     app-button button:disabled {\n  opacity: 0.4;\n}\n.auth-resend[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 24px;\n  padding-bottom: 24px;\n  border-bottom: 1px solid #f0ede8;\n}\n.auth-resend[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-family: "Poppins", sans-serif;\n  font-size: 13px;\n  color: #aaa;\n  margin-bottom: 10px;\n}\n.auth-resend[_ngcontent-%COMP%]   .resend-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  font-family: "Poppins", sans-serif;\n  font-size: 13px;\n  font-weight: 600;\n  color: #C9A054;\n  cursor: pointer;\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n}\n.auth-resend[_ngcontent-%COMP%]   .resend-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.auth-resend[_ngcontent-%COMP%]   .resend-btn[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.auth-switch[_ngcontent-%COMP%] {\n  text-align: center;\n  font-family: "Poppins", sans-serif;\n  font-size: 14px;\n}\n.auth-switch[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #1A2518;\n  font-weight: 600;\n  text-decoration: none;\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n}\n.auth-switch[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.auth-switch[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #C9A054;\n}\n/*# sourceMappingURL=otp.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(OtpComponent, { className: "OtpComponent", filePath: "src\\app\\components\\auth\\otp\\otp.component.ts", lineNumber: 15 });
})();

// src/app/components/auth/update-password/update-password.component.ts
var _c04 = () => ["/auth/login"];
function UpdatePasswordComponent_span_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 31);
    \u0275\u0275text(1, "New password is required");
    \u0275\u0275elementEnd();
  }
}
function UpdatePasswordComponent_span_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 31);
    \u0275\u0275text(1, "Confirm password is required");
    \u0275\u0275elementEnd();
  }
}
var UpdatePasswordComponent = class _UpdatePasswordComponent {
  constructor(store, formBuilder, router) {
    this.store = store;
    this.formBuilder = formBuilder;
    this.router = router;
    this.breadcrumb = {
      title: "Reset Password",
      items: [{ label: "Reset Password", active: true }]
    };
    this.email = this.store.selectSnapshot((state) => state.auth.email);
    this.token = this.store.selectSnapshot((state) => state.auth.token);
    if (!this.email && !this.token)
      this.router.navigateByUrl("/auth/login");
    this.form = this.formBuilder.group({
      newPassword: new FormControl("", [Validators.required]),
      confirmPassword: new FormControl("", [Validators.required])
    });
  }
  submit() {
    this.form.markAllAsTouched();
    if (this.form.valid) {
      this.store.dispatch(new UpdatePassword({
        email: this.email,
        token: this.token,
        password: this.form.value.newPassword,
        password_confirmation: this.form.value.confirmPassword
      })).subscribe({
        complete: () => {
          this.router.navigateByUrl("/auth/login");
        }
      });
    }
  }
  static {
    this.\u0275fac = function UpdatePasswordComponent_Factory(t) {
      return new (t || _UpdatePasswordComponent)(\u0275\u0275directiveInject(Store), \u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(Router));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _UpdatePasswordComponent, selectors: [["app-update-password"]], decls: 53, vars: 16, consts: [[3, "breadcrumb"], [1, "auth-page"], [1, "auth-split"], [1, "auth-brand-panel"], [1, "auth-brand-inner"], ["src", "assets/images/repportlogo.png", "alt", "GROFAB", 1, "auth-logo"], [1, "auth-brand-heading"], [1, "auth-brand-sub"], [1, "auth-brand-features"], [1, "auth-feature"], [1, "ri-lock-line"], [1, "ri-key-2-line"], [1, "ri-shield-check-line"], [1, "auth-form-panel"], [1, "auth-form-inner"], [1, "auth-form-header"], [1, "auth-icon-circle"], [1, "ri-lock-password-line"], [1, "auth-form", 3, "ngSubmit", "formGroup"], [1, "auth-field"], ["for", "newPassword"], ["type", "password", "id", "newPassword", "formControlName", "newPassword", "placeholder", "Enter new password"], ["class", "auth-error", 4, "ngIf"], ["for", "confirmPassword"], ["type", "password", "id", "confirmPassword", "formControlName", "confirmPassword", "placeholder", "Confirm new password"], [1, "auth-submit"], [3, "id"], [1, "ri-arrow-right-line"], [1, "auth-switch"], [3, "routerLink"], [1, "ri-arrow-left-line"], [1, "auth-error"]], template: function UpdatePasswordComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275element(0, "app-breadcrumb", 0);
        \u0275\u0275elementStart(1, "section", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4);
        \u0275\u0275element(5, "img", 5);
        \u0275\u0275elementStart(6, "h2", 6);
        \u0275\u0275text(7, "Set a New");
        \u0275\u0275element(8, "br");
        \u0275\u0275elementStart(9, "span");
        \u0275\u0275text(10, "Password");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(11, "p", 7);
        \u0275\u0275text(12, "Choose a strong password to keep your account secure.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "div", 8)(14, "div", 9);
        \u0275\u0275element(15, "i", 10);
        \u0275\u0275text(16, " Use 8+ characters");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(17, "div", 9);
        \u0275\u0275element(18, "i", 11);
        \u0275\u0275text(19, " Mix letters & numbers");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(20, "div", 9);
        \u0275\u0275element(21, "i", 12);
        \u0275\u0275text(22, " Keep it unique");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(23, "div", 13)(24, "div", 14);
        \u0275\u0275element(25, "app-alert");
        \u0275\u0275elementStart(26, "div", 15)(27, "div", 16);
        \u0275\u0275element(28, "i", 17);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(29, "h1");
        \u0275\u0275text(30, "Reset Password");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(31, "p");
        \u0275\u0275text(32, "Enter your new password below.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(33, "form", 18);
        \u0275\u0275listener("ngSubmit", function UpdatePasswordComponent_Template_form_ngSubmit_33_listener() {
          return ctx.submit();
        });
        \u0275\u0275elementStart(34, "div", 19)(35, "label", 20);
        \u0275\u0275text(36, "New Password");
        \u0275\u0275elementEnd();
        \u0275\u0275element(37, "input", 21);
        \u0275\u0275template(38, UpdatePasswordComponent_span_38_Template, 2, 0, "span", 22);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(39, "div", 19)(40, "label", 23);
        \u0275\u0275text(41, "Confirm Password");
        \u0275\u0275elementEnd();
        \u0275\u0275element(42, "input", 24);
        \u0275\u0275template(43, UpdatePasswordComponent_span_43_Template, 2, 0, "span", 22);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(44, "div", 25)(45, "app-button", 26);
        \u0275\u0275text(46);
        \u0275\u0275pipe(47, "translate");
        \u0275\u0275element(48, "i", 27);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(49, "div", 28)(50, "a", 29);
        \u0275\u0275element(51, "i", 30);
        \u0275\u0275text(52, " Back to Sign In");
        \u0275\u0275elementEnd()()()()()();
      }
      if (rf & 2) {
        \u0275\u0275property("breadcrumb", ctx.breadcrumb);
        \u0275\u0275advance(33);
        \u0275\u0275property("formGroup", ctx.form);
        \u0275\u0275advance(4);
        \u0275\u0275classProp("error", ctx.form.controls["newPassword"].touched && ctx.form.controls["newPassword"].invalid);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.form.controls["newPassword"].touched && (ctx.form.controls["newPassword"].errors == null ? null : ctx.form.controls["newPassword"].errors["required"]));
        \u0275\u0275advance(4);
        \u0275\u0275classProp("error", ctx.form.controls["confirmPassword"].touched && ctx.form.controls["confirmPassword"].invalid);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.form.controls["confirmPassword"].touched && (ctx.form.controls["confirmPassword"].errors == null ? null : ctx.form.controls["confirmPassword"].errors["required"]));
        \u0275\u0275advance(2);
        \u0275\u0275classMap("auth-btn-primary");
        \u0275\u0275property("id", "confirm_pass_btn");
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(47, 13, "Update Password"), " ");
        \u0275\u0275advance(4);
        \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(15, _c04));
      }
    }, dependencies: [NgIf, RouterLink, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, BreadcrumbComponent, AlertComponent, ButtonComponent, TranslatePipe], styles: ['\n\napp-breadcrumb[_ngcontent-%COMP%] {\n  display: none !important;\n}\n.auth-page[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n  padding: 0 !important;\n  margin: 0 !important;\n}\n.auth-split[_ngcontent-%COMP%] {\n  display: flex;\n  min-height: 100vh;\n  flex: 1;\n}\n.auth-brand-panel[_ngcontent-%COMP%] {\n  width: 42%;\n  background: #1A2518;\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  overflow: hidden;\n  flex-shrink: 0;\n}\n.auth-brand-panel[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  width: 500px;\n  height: 500px;\n  border: 1px solid rgba(201, 160, 84, 0.12);\n  border-radius: 50%;\n  top: -120px;\n  right: -120px;\n}\n.auth-brand-panel[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  width: 360px;\n  height: 360px;\n  border: 1px solid rgba(201, 160, 84, 0.08);\n  border-radius: 50%;\n  bottom: -100px;\n  left: -80px;\n}\n@media (max-width: 767px) {\n  .auth-brand-panel[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.auth-brand-inner[_ngcontent-%COMP%] {\n  padding: 60px 52px;\n  position: relative;\n  z-index: 1;\n}\n.auth-logo[_ngcontent-%COMP%] {\n  height: 48px;\n  margin-bottom: 52px;\n  filter: brightness(0) invert(1);\n  display: block;\n}\n.auth-brand-heading[_ngcontent-%COMP%] {\n  font-family: "Poppins", sans-serif;\n  font-size: 38px;\n  font-weight: 700;\n  color: #fff;\n  line-height: 1.2;\n  margin-bottom: 20px;\n}\n.auth-brand-heading[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #C9A054;\n}\n.auth-brand-sub[_ngcontent-%COMP%] {\n  font-family: "Poppins", sans-serif;\n  font-size: 14px;\n  color: rgba(255, 255, 255, 0.45);\n  line-height: 1.75;\n  margin-bottom: 44px;\n  max-width: 320px;\n}\n.auth-brand-features[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n.auth-feature[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  font-family: "Poppins", sans-serif;\n  font-size: 13px;\n  color: rgba(255, 255, 255, 0.6);\n}\n.auth-feature[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: #C9A054;\n}\n.auth-form-panel[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: #fff;\n  padding: 60px 40px;\n}\n@media (max-width: 575px) {\n  .auth-form-panel[_ngcontent-%COMP%] {\n    padding: 40px 20px;\n  }\n}\n.auth-form-inner[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 460px;\n}\n.auth-icon-circle[_ngcontent-%COMP%] {\n  width: 64px;\n  height: 64px;\n  border-radius: 50%;\n  background: rgba(201, 160, 84, 0.1);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-bottom: 24px;\n}\n.auth-icon-circle[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 28px;\n  color: #C9A054;\n}\n.auth-form-header[_ngcontent-%COMP%] {\n  margin-bottom: 36px;\n}\n.auth-form-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-family: "Poppins", sans-serif;\n  font-size: 28px;\n  font-weight: 700;\n  color: #1A2518;\n  margin-bottom: 10px;\n}\n.auth-form-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-family: "Poppins", sans-serif;\n  font-size: 14px;\n  color: #999;\n  margin: 0;\n  line-height: 1.6;\n}\n.auth-form[_ngcontent-%COMP%]   .auth-field[_ngcontent-%COMP%] {\n  margin-bottom: 22px;\n}\n.auth-form[_ngcontent-%COMP%]   .auth-field[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  font-family: "Poppins", sans-serif;\n  font-size: 11px;\n  font-weight: 600;\n  color: #aaa;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n  margin-bottom: 8px;\n}\n.auth-form[_ngcontent-%COMP%]   .auth-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  padding: 15px 18px;\n  font-family: "Poppins", sans-serif;\n  font-size: 15px;\n  color: #1A2518;\n  background: #faf9f6;\n  border: 1.5px solid #e8e5de;\n  border-radius: 6px;\n  outline: none;\n  transition: border-color 0.2s;\n}\n.auth-form[_ngcontent-%COMP%]   .auth-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\n  color: #bbb;\n}\n.auth-form[_ngcontent-%COMP%]   .auth-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n  background: #fff;\n  border-color: #C9A054;\n  box-shadow: 0 0 0 3px rgba(201, 160, 84, 0.08);\n}\n.auth-form[_ngcontent-%COMP%]   .auth-field[_ngcontent-%COMP%]   input.error[_ngcontent-%COMP%] {\n  border-color: #e53e3e;\n}\n.auth-form[_ngcontent-%COMP%]   .auth-field[_ngcontent-%COMP%]   .auth-error[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 12px;\n  color: #e53e3e;\n  margin-top: 6px;\n}\n.auth-submit[_ngcontent-%COMP%] {\n  margin-bottom: 28px;\n}\n.auth-submit[_ngcontent-%COMP%]     app-button {\n  width: 100%;\n}\n.auth-submit[_ngcontent-%COMP%]     app-button .auth-btn-primary, .auth-submit[_ngcontent-%COMP%]     app-button button {\n  width: 100%;\n  padding: 16px 20px;\n  background: #1A2518;\n  color: #fff;\n  border: none;\n  border-radius: 6px;\n  font-family: "Poppins", sans-serif;\n  font-size: 13px;\n  font-weight: 600;\n  letter-spacing: 0.8px;\n  text-transform: uppercase;\n  cursor: pointer;\n  transition: background 0.2s;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n}\n.auth-submit[_ngcontent-%COMP%]     app-button .auth-btn-primary i, .auth-submit[_ngcontent-%COMP%]     app-button button i {\n  font-size: 16px;\n}\n.auth-submit[_ngcontent-%COMP%]     app-button .auth-btn-primary:hover:not(:disabled), .auth-submit[_ngcontent-%COMP%]     app-button button:hover:not(:disabled) {\n  background: #C9A054;\n  color: #1A2518;\n}\n.auth-submit[_ngcontent-%COMP%]     app-button .auth-btn-primary:disabled, .auth-submit[_ngcontent-%COMP%]     app-button button:disabled {\n  opacity: 0.4;\n}\n.auth-switch[_ngcontent-%COMP%] {\n  text-align: center;\n  font-family: "Poppins", sans-serif;\n  font-size: 14px;\n}\n.auth-switch[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #1A2518;\n  font-weight: 600;\n  text-decoration: none;\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n}\n.auth-switch[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.auth-switch[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #C9A054;\n}\n/*# sourceMappingURL=update-password.component.css.map */'] });
  }
};
__decorate([
  Select(SettingState.setting)
], UpdatePasswordComponent.prototype, "setting$", void 0);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UpdatePasswordComponent, { className: "UpdatePasswordComponent", filePath: "src\\app\\components\\auth\\update-password\\update-password.component.ts", lineNumber: 16 });
})();

// src/app/components/auth/register/register.component.ts
var _c05 = () => ["/term-condition"];
var _c12 = () => ["/privacy-policy"];
var _c2 = () => ["/auth/login"];
function RegisterComponent_span_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 44);
    \u0275\u0275text(1, "Name is required");
    \u0275\u0275elementEnd();
  }
}
function RegisterComponent_span_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 44);
    \u0275\u0275text(1, "Only letters and spaces allowed");
    \u0275\u0275elementEnd();
  }
}
function RegisterComponent_span_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 44);
    \u0275\u0275text(1, "Email is required");
    \u0275\u0275elementEnd();
  }
}
function RegisterComponent_span_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 44);
    \u0275\u0275text(1, "Invalid email address");
    \u0275\u0275elementEnd();
  }
}
function RegisterComponent_ng_template_49_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 45);
    \u0275\u0275element(1, "div");
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const data_r2 = ctx.data;
    \u0275\u0275advance();
    \u0275\u0275classMapInterpolate1("iti-flag ", data_r2 == null ? null : data_r2.class, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r2.code);
  }
}
function RegisterComponent_span_52_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 44);
    \u0275\u0275text(1, "Phone number is required");
    \u0275\u0275elementEnd();
  }
}
function RegisterComponent_span_53_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 44);
    \u0275\u0275text(1, "Phone number must be 10 digits");
    \u0275\u0275elementEnd();
  }
}
function RegisterComponent_span_59_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 44);
    \u0275\u0275text(1, "Password is required");
    \u0275\u0275elementEnd();
  }
}
function RegisterComponent_span_64_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 44);
    \u0275\u0275text(1, "Please confirm password");
    \u0275\u0275elementEnd();
  }
}
function RegisterComponent_span_65_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 44);
    \u0275\u0275text(1, "Passwords do not match");
    \u0275\u0275elementEnd();
  }
}
function RegisterComponent_div_66_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 44);
    \u0275\u0275text(1, "ReCaptcha is required");
    \u0275\u0275elementEnd();
  }
}
function RegisterComponent_div_66_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18);
    \u0275\u0275element(1, "re-captcha", 46);
    \u0275\u0275template(2, RegisterComponent_div_66_span_2_Template, 2, 0, "span", 21);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", (ctx_r2.form.controls["recaptcha"] == null ? null : ctx_r2.form.controls["recaptcha"].touched) && (ctx_r2.form.controls["recaptcha"] == null ? null : ctx_r2.form.controls["recaptcha"].errors == null ? null : ctx_r2.form.controls["recaptcha"].errors["required"]));
  }
}
var RegisterComponent = class _RegisterComponent {
  constructor(store, router, formBuilder, notificationService) {
    this.store = store;
    this.router = router;
    this.formBuilder = formBuilder;
    this.notificationService = notificationService;
    this.breadcrumb = {
      title: "Sign In",
      items: [{ label: "Sign In", active: true }]
    };
    this.codes = countryCodes;
    this.tnc = new FormControl(false, [Validators.requiredTrue]);
    this.reCaptcha = true;
    this.form = this.formBuilder.group({
      name: new FormControl("", [Validators.required, Validators.pattern(/^[A-Za-z\s]*$/)]),
      email: new FormControl("", [Validators.required, Validators.email]),
      phone: new FormControl("", [Validators.required, Validators.pattern(/^[0-9]*$/)]),
      country_code: new FormControl("91", [Validators.required]),
      password: new FormControl("", [Validators.required]),
      password_confirmation: new FormControl("", [Validators.required]),
      recaptcha: new FormControl(null, Validators.required)
    }, { validator: CustomValidators.MatchValidator("password", "password_confirmation") });
    this.setting$.subscribe((seting) => {
      if (seting?.google_reCaptcha && !seting?.google_reCaptcha?.status || !seting?.google_reCaptcha) {
        this.form.removeControl("recaptcha");
        this.reCaptcha = false;
      } else {
        this.form.setControl("recaptcha", new FormControl(null, Validators.required));
        this.reCaptcha = true;
      }
    });
    this.form.get("country_code")?.disable();
    this.form.controls["phone"]?.valueChanges.subscribe((value) => {
      if (value && value.toString().length < 10) {
        this.form.controls["phone"].markAsTouched();
        this.form.controls["phone"].setErrors({ invalid: true });
      }
      if (value && value.toString().length > 10) {
        this.form.controls["phone"]?.setValue(+value.toString().slice(0, 10), { emitEvent: false });
      }
      if (value && value.toString().length === 10) {
        this.form.controls["phone"].setErrors(null);
      }
    });
  }
  get passwordMatchError() {
    return this.form.getError("mismatch") && this.form.get("password_confirmation")?.touched;
  }
  // Allow only letters and spaces in name field (block numbers/special characters)
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
    if (!/^[A-Za-z\s]$/.test(event.key)) {
      event.preventDefault();
    }
  }
  sanitizeNameInput(event) {
    const input = event.target;
    const sanitized = (input.value || "").replace(/[^A-Za-z\s]/g, "");
    if (sanitized !== input.value) {
      input.value = sanitized;
      this.form.controls["name"].setValue(sanitized, { emitEvent: false });
    }
  }
  sanitizeNamePaste(event) {
    const pasted = event.clipboardData?.getData("text") ?? "";
    if (/[^A-Za-z\s]/.test(pasted)) {
      event.preventDefault();
      const sanitized = pasted.replace(/[^A-Za-z\s]/g, "");
      document.execCommand("insertText", false, sanitized);
    }
  }
  filterEmailCharacters(event) {
    const input = event.target;
    const value = input.value;
    const filteredValue = value.replace(/[^a-zA-Z0-9._\-+@]/g, "");
    if (value !== filteredValue) {
      input.value = filteredValue;
      this.form.get("email")?.setValue(filteredValue);
    }
  }
  // Allow only digits in phone field (block alphabets/special characters)
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
  sanitizePhoneInput(event) {
    const input = event.target;
    const digitsOnly = (input.value || "").replace(/\D/g, "").slice(0, 10);
    if (digitsOnly !== input.value) {
      input.value = digitsOnly;
      this.form.controls["phone"].setValue(digitsOnly, { emitEvent: false });
    }
  }
  sanitizePhonePaste(event) {
    const pasted = event.clipboardData?.getData("text") ?? "";
    if (/\D/.test(pasted)) {
      event.preventDefault();
      const sanitized = pasted.replace(/\D/g, "").slice(0, 10);
      document.execCommand("insertText", false, sanitized);
    }
  }
  submit() {
    this.form.markAllAsTouched();
    if (this.tnc.invalid) {
      return;
    }
    if (this.form.valid) {
      this.store.dispatch(new Register(this.form.value)).subscribe({
        complete: () => {
          this.router.navigateByUrl("/account/dashboard");
        }
      });
    }
  }
  static {
    this.\u0275fac = function RegisterComponent_Factory(t) {
      return new (t || _RegisterComponent)(\u0275\u0275directiveInject(Store), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(NotificationService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RegisterComponent, selectors: [["app-register"]], decls: 87, vars: 42, consts: [["template", ""], [3, "breadcrumb"], [1, "auth-page"], [1, "auth-split"], [1, "auth-brand-panel"], [1, "auth-brand-inner"], ["src", "assets/images/repportlogo.png", "alt", "GROFAB", 1, "auth-logo"], [1, "auth-brand-heading"], [1, "auth-brand-sub"], [1, "auth-brand-features"], [1, "auth-feature"], [1, "ri-gift-line"], [1, "ri-heart-line"], [1, "ri-history-line"], [1, "auth-form-panel"], [1, "auth-form-inner"], [1, "auth-form-header"], [1, "auth-form", 3, "ngSubmit", "formGroup"], [1, "auth-field"], ["for", "name"], ["type", "text", "id", "name", "formControlName", "name", "placeholder", "Your full name", 3, "keydown", "input", "paste"], ["class", "auth-error", 4, "ngIf"], ["for", "email"], ["type", "email", "id", "email", "formControlName", "email", "placeholder", "you@example.com", "pattern", "[a-zA-Z0-9._\\-+@]+", 3, "input"], [1, "auth-field", "phone-field"], ["for", "phone"], [1, "phone-input-row"], ["formControlName", "country_code", 1, "country-select", 3, "data", "templates"], ["type", "tel", "id", "phone", "formControlName", "phone", "placeholder", "10-digit number", "maxlength", "10", 3, "keydown", "input", "paste"], [1, "auth-field-row"], ["for", "password"], ["type", "password", "id", "password", "formControlName", "password", "placeholder", "Create password"], ["for", "password_confirmation"], ["type", "password", "id", "password_confirmation", "formControlName", "password_confirmation", "placeholder", "Confirm password"], ["class", "auth-field", 4, "ngIf"], [1, "auth-terms"], [1, "auth-checkbox"], ["type", "checkbox", "id", "flexCheckDefault", 3, "formControl"], [1, "auth-cb-box"], [3, "routerLink"], [1, "auth-submit"], [3, "id", "disabled"], [1, "ri-arrow-right-line"], [1, "auth-switch"], [1, "auth-error"], [1, "country-opt"], ["formControlName", "recaptcha"]], template: function RegisterComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275element(0, "app-breadcrumb", 1);
        \u0275\u0275elementStart(1, "section", 2)(2, "div", 3)(3, "div", 4)(4, "div", 5);
        \u0275\u0275element(5, "img", 6);
        \u0275\u0275elementStart(6, "h2", 7);
        \u0275\u0275text(7, "Join the");
        \u0275\u0275element(8, "br");
        \u0275\u0275elementStart(9, "span");
        \u0275\u0275text(10, "GROFAB Family");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(11, "p", 8);
        \u0275\u0275text(12, "Discover premium ethnic fashion handpicked for every occasion. Create your account and unlock exclusive offers.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "div", 9)(14, "div", 10);
        \u0275\u0275element(15, "i", 11);
        \u0275\u0275text(16, " Exclusive member discounts");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(17, "div", 10);
        \u0275\u0275element(18, "i", 12);
        \u0275\u0275text(19, " Save your wishlist");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(20, "div", 10);
        \u0275\u0275element(21, "i", 13);
        \u0275\u0275text(22, " Track your orders easily");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(23, "div", 14)(24, "div", 15);
        \u0275\u0275element(25, "app-alert");
        \u0275\u0275elementStart(26, "div", 16)(27, "h1");
        \u0275\u0275text(28, "Create Account");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(29, "p");
        \u0275\u0275text(30, "Fill in your details to get started");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(31, "form", 17);
        \u0275\u0275listener("ngSubmit", function RegisterComponent_Template_form_ngSubmit_31_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.submit());
        });
        \u0275\u0275elementStart(32, "div", 18)(33, "label", 19);
        \u0275\u0275text(34, "Full Name");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(35, "input", 20);
        \u0275\u0275listener("keydown", function RegisterComponent_Template_input_keydown_35_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.allowOnlyLetters($event));
        })("input", function RegisterComponent_Template_input_input_35_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.sanitizeNameInput($event));
        })("paste", function RegisterComponent_Template_input_paste_35_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.sanitizeNamePaste($event));
        });
        \u0275\u0275elementEnd();
        \u0275\u0275template(36, RegisterComponent_span_36_Template, 2, 0, "span", 21)(37, RegisterComponent_span_37_Template, 2, 0, "span", 21);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(38, "div", 18)(39, "label", 22);
        \u0275\u0275text(40, "Email Address");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(41, "input", 23);
        \u0275\u0275listener("input", function RegisterComponent_Template_input_input_41_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.filterEmailCharacters($event));
        });
        \u0275\u0275elementEnd();
        \u0275\u0275template(42, RegisterComponent_span_42_Template, 2, 0, "span", 21)(43, RegisterComponent_span_43_Template, 2, 0, "span", 21);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(44, "div", 24)(45, "label", 25);
        \u0275\u0275text(46, "Phone Number");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(47, "div", 26)(48, "select2", 27);
        \u0275\u0275template(49, RegisterComponent_ng_template_49_Template, 4, 4, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(51, "input", 28);
        \u0275\u0275listener("keydown", function RegisterComponent_Template_input_keydown_51_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.allowOnlyDigits($event));
        })("input", function RegisterComponent_Template_input_input_51_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.sanitizePhoneInput($event));
        })("paste", function RegisterComponent_Template_input_paste_51_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.sanitizePhonePaste($event));
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275template(52, RegisterComponent_span_52_Template, 2, 0, "span", 21)(53, RegisterComponent_span_53_Template, 2, 0, "span", 21);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(54, "div", 29)(55, "div", 18)(56, "label", 30);
        \u0275\u0275text(57, "Password");
        \u0275\u0275elementEnd();
        \u0275\u0275element(58, "input", 31);
        \u0275\u0275template(59, RegisterComponent_span_59_Template, 2, 0, "span", 21);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(60, "div", 18)(61, "label", 32);
        \u0275\u0275text(62, "Confirm Password");
        \u0275\u0275elementEnd();
        \u0275\u0275element(63, "input", 33);
        \u0275\u0275template(64, RegisterComponent_span_64_Template, 2, 0, "span", 21)(65, RegisterComponent_span_65_Template, 2, 0, "span", 21);
        \u0275\u0275elementEnd()();
        \u0275\u0275template(66, RegisterComponent_div_66_Template, 3, 1, "div", 34);
        \u0275\u0275elementStart(67, "div", 35)(68, "label", 36);
        \u0275\u0275element(69, "input", 37)(70, "span", 38);
        \u0275\u0275elementStart(71, "span");
        \u0275\u0275text(72, " I agree to the ");
        \u0275\u0275elementStart(73, "a", 39);
        \u0275\u0275text(74, "Terms");
        \u0275\u0275elementEnd();
        \u0275\u0275text(75, " & ");
        \u0275\u0275elementStart(76, "a", 39);
        \u0275\u0275text(77, "Privacy Policy");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(78, "div", 40)(79, "app-button", 41);
        \u0275\u0275text(80);
        \u0275\u0275pipe(81, "translate");
        \u0275\u0275element(82, "i", 42);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(83, "div", 43);
        \u0275\u0275text(84, " Already have an account? ");
        \u0275\u0275elementStart(85, "a", 39);
        \u0275\u0275text(86, "Sign in");
        \u0275\u0275elementEnd()()()()()();
      }
      if (rf & 2) {
        const template_r4 = \u0275\u0275reference(50);
        \u0275\u0275property("breadcrumb", ctx.breadcrumb);
        \u0275\u0275advance(31);
        \u0275\u0275property("formGroup", ctx.form);
        \u0275\u0275advance(4);
        \u0275\u0275classProp("error", ctx.form.controls["name"].touched && ctx.form.controls["name"].invalid);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.form.controls["name"].touched && (ctx.form.controls["name"].errors == null ? null : ctx.form.controls["name"].errors["required"]));
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.form.controls["name"].touched && (ctx.form.controls["name"].errors == null ? null : ctx.form.controls["name"].errors["pattern"]));
        \u0275\u0275advance(4);
        \u0275\u0275classProp("error", ctx.form.controls["email"].touched && ctx.form.controls["email"].invalid);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.form.controls["email"].touched && (ctx.form.controls["email"].errors == null ? null : ctx.form.controls["email"].errors["required"]));
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.form.controls["email"].touched && (ctx.form.controls["email"].errors == null ? null : ctx.form.controls["email"].errors["email"]));
        \u0275\u0275advance(5);
        \u0275\u0275property("data", ctx.codes)("templates", template_r4);
        \u0275\u0275advance(3);
        \u0275\u0275classProp("error", ctx.form.controls["phone"].touched && ctx.form.controls["phone"].invalid);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.form.controls["phone"].touched && (ctx.form.controls["phone"].errors == null ? null : ctx.form.controls["phone"].errors["required"]));
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.form.controls["phone"].touched && (ctx.form.controls["phone"].errors == null ? null : ctx.form.controls["phone"].errors["invalid"]));
        \u0275\u0275advance(5);
        \u0275\u0275classProp("error", ctx.form.controls["password"].touched && ctx.form.controls["password"].invalid);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.form.controls["password"].touched && (ctx.form.controls["password"].errors == null ? null : ctx.form.controls["password"].errors["required"]));
        \u0275\u0275advance(4);
        \u0275\u0275classProp("error", ctx.form.controls["password_confirmation"].touched && ((ctx.form.controls["password_confirmation"].errors == null ? null : ctx.form.controls["password_confirmation"].errors["required"]) || ctx.passwordMatchError));
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.form.controls["password_confirmation"].touched && (ctx.form.controls["password_confirmation"].errors == null ? null : ctx.form.controls["password_confirmation"].errors["required"]));
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.passwordMatchError);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.reCaptcha);
        \u0275\u0275advance(3);
        \u0275\u0275property("formControl", ctx.tnc);
        \u0275\u0275advance();
        \u0275\u0275classProp("cb-error", ctx.tnc.touched && ctx.tnc.invalid);
        \u0275\u0275advance();
        \u0275\u0275classProp("text-danger", ctx.tnc.touched && ctx.tnc.invalid);
        \u0275\u0275advance(2);
        \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(39, _c05));
        \u0275\u0275advance(3);
        \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(40, _c12));
        \u0275\u0275advance(3);
        \u0275\u0275classMap("auth-btn-primary");
        \u0275\u0275property("id", "sign_up_btn")("disabled", ctx.tnc.invalid || ctx.form.invalid);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(81, 37, "Sign Up"), " ");
        \u0275\u0275advance(5);
        \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(41, _c2));
      }
    }, dependencies: [NgIf, RouterLink, \u0275NgNoValidate, DefaultValueAccessor, CheckboxControlValueAccessor, NgControlStatus, NgControlStatusGroup, MaxLengthValidator, PatternValidator, FormControlDirective, FormGroupDirective, FormControlName, BreadcrumbComponent, AlertComponent, ButtonComponent, Select2, RecaptchaComponent, RecaptchaValueAccessorDirective, TranslatePipe], styles: ['\n\napp-breadcrumb[_ngcontent-%COMP%] {\n  display: none !important;\n}\n.auth-page[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n  padding: 0 !important;\n  margin: 0 !important;\n}\n.auth-split[_ngcontent-%COMP%] {\n  display: flex;\n  min-height: 100vh;\n  flex: 1;\n}\n.auth-brand-panel[_ngcontent-%COMP%] {\n  width: 38%;\n  background: #1A2518;\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  overflow: hidden;\n  flex-shrink: 0;\n}\n.auth-brand-panel[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  width: 500px;\n  height: 500px;\n  border: 1px solid rgba(201, 160, 84, 0.12);\n  border-radius: 50%;\n  top: -120px;\n  right: -120px;\n  pointer-events: none;\n}\n.auth-brand-panel[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  width: 360px;\n  height: 360px;\n  border: 1px solid rgba(201, 160, 84, 0.08);\n  border-radius: 50%;\n  bottom: -100px;\n  left: -80px;\n  pointer-events: none;\n}\n@media (max-width: 991px) {\n  .auth-brand-panel[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.auth-brand-inner[_ngcontent-%COMP%] {\n  padding: 60px 48px;\n  position: relative;\n  z-index: 1;\n}\n.auth-logo[_ngcontent-%COMP%] {\n  height: 44px;\n  margin-bottom: 48px;\n  filter: brightness(0) invert(1);\n  display: block;\n}\n.auth-brand-heading[_ngcontent-%COMP%] {\n  font-family: "Poppins", sans-serif;\n  font-size: 34px;\n  font-weight: 700;\n  color: #fff;\n  line-height: 1.25;\n  margin-bottom: 18px;\n  letter-spacing: -0.3px;\n}\n.auth-brand-heading[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #C9A054;\n}\n.auth-brand-sub[_ngcontent-%COMP%] {\n  font-family: "Poppins", sans-serif;\n  font-size: 13px;\n  color: rgba(255, 255, 255, 0.4);\n  line-height: 1.8;\n  margin-bottom: 40px;\n  max-width: 300px;\n}\n.auth-brand-features[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n}\n.auth-feature[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  font-family: "Poppins", sans-serif;\n  font-size: 13px;\n  color: rgba(255, 255, 255, 0.55);\n}\n.auth-feature[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: #C9A054;\n  flex-shrink: 0;\n}\n.auth-form-panel[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: #fff;\n  padding: 56px 48px;\n  overflow-y: auto;\n}\n@media (max-width: 575px) {\n  .auth-form-panel[_ngcontent-%COMP%] {\n    padding: 40px 20px;\n  }\n}\n.auth-form-inner[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 480px;\n}\n.auth-form-header[_ngcontent-%COMP%] {\n  margin-bottom: 32px;\n}\n.auth-form-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-family: "Poppins", sans-serif;\n  font-size: 26px;\n  font-weight: 700;\n  color: #1A2518;\n  margin-bottom: 6px;\n  letter-spacing: -0.3px;\n}\n.auth-form-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-family: "Poppins", sans-serif;\n  font-size: 14px;\n  color: #999;\n  margin: 0;\n}\n.auth-form[_ngcontent-%COMP%]   .auth-field[_ngcontent-%COMP%] {\n  margin-bottom: 18px;\n}\n.auth-form[_ngcontent-%COMP%]   .auth-field[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  font-family: "Poppins", sans-serif;\n  font-size: 11px;\n  font-weight: 600;\n  color: #aaa;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n  margin-bottom: 8px;\n}\n.auth-form[_ngcontent-%COMP%]   .auth-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  padding: 12px 15px;\n  font-family: "Poppins", sans-serif;\n  font-size: 14px;\n  color: #1A2518;\n  background: #faf9f6;\n  border: 1.5px solid #e8e5de;\n  border-radius: 6px;\n  outline: none;\n  transition: border-color 0.2s, background 0.2s;\n}\n.auth-form[_ngcontent-%COMP%]   .auth-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\n  color: #bbb;\n}\n.auth-form[_ngcontent-%COMP%]   .auth-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n  background: #fff;\n  border-color: #C9A054;\n  box-shadow: 0 0 0 3px rgba(201, 160, 84, 0.08);\n}\n.auth-form[_ngcontent-%COMP%]   .auth-field[_ngcontent-%COMP%]   input.error[_ngcontent-%COMP%] {\n  border-color: #e53e3e;\n  background: #fffafa;\n}\n.auth-form[_ngcontent-%COMP%]   .auth-field[_ngcontent-%COMP%]   .auth-error[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 12px;\n  color: #e53e3e;\n  margin-top: 5px;\n}\n.auth-form[_ngcontent-%COMP%]   .auth-field-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 14px;\n}\n@media (max-width: 575px) {\n  .auth-form[_ngcontent-%COMP%]   .auth-field-row[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.auth-form[_ngcontent-%COMP%]   .phone-field[_ngcontent-%COMP%]   .phone-input-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n  align-items: stretch;\n}\n.auth-form[_ngcontent-%COMP%]   .phone-field[_ngcontent-%COMP%]   .country-select[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  width: 110px;\n}\n.auth-form[_ngcontent-%COMP%]   .phone-field[_ngcontent-%COMP%]   .country-select[_ngcontent-%COMP%]     .select2-container {\n  width: 100% !important;\n}\n.auth-form[_ngcontent-%COMP%]   .phone-field[_ngcontent-%COMP%]   .country-select[_ngcontent-%COMP%]     .select2-container .select2-selection {\n  height: 46px;\n  border: 1.5px solid #e8e5de !important;\n  border-radius: 6px !important;\n  background: #faf9f6 !important;\n  display: flex;\n  align-items: center;\n}\n.auth-form[_ngcontent-%COMP%]   .phone-field[_ngcontent-%COMP%]   .country-select[_ngcontent-%COMP%]     .select2-container .select2-selection:focus-within {\n  border-color: #C9A054 !important;\n  background: #fff !important;\n}\n.auth-form[_ngcontent-%COMP%]   .phone-field[_ngcontent-%COMP%]   .country-select[_ngcontent-%COMP%]     .select2-container .select2-selection__rendered {\n  padding: 0 10px !important;\n  line-height: 46px !important;\n}\n.auth-form[_ngcontent-%COMP%]   .phone-field[_ngcontent-%COMP%]   .country-opt[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 13px;\n}\n.auth-form[_ngcontent-%COMP%]   .phone-field[_ngcontent-%COMP%]   .country-opt[_ngcontent-%COMP%]   .iti-flag[_ngcontent-%COMP%] {\n  width: 18px;\n  height: 13px;\n}\n.auth-form[_ngcontent-%COMP%]   .phone-field[_ngcontent-%COMP%]   input[type=tel][_ngcontent-%COMP%] {\n  flex: 1;\n}\n.auth-form[_ngcontent-%COMP%]   .auth-terms[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n}\n.auth-checkbox[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 8px;\n  cursor: pointer;\n  font-family: "Poppins", sans-serif;\n  font-size: 13px;\n  color: #777;\n  -webkit-user-select: none;\n  user-select: none;\n  line-height: 1.5;\n}\n.auth-checkbox[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  display: none;\n}\n.auth-checkbox[_ngcontent-%COMP%]   .auth-cb-box[_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n  min-width: 18px;\n  border: 1.5px solid #ddd;\n  border-radius: 3px;\n  background: #fff;\n  position: relative;\n  transition: all 0.2s;\n  margin-top: 2px;\n}\n.auth-checkbox[_ngcontent-%COMP%]   .auth-cb-box.cb-error[_ngcontent-%COMP%] {\n  border-color: #e53e3e;\n}\n.auth-checkbox[_ngcontent-%COMP%]   .auth-cb-box[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  left: 4px;\n  top: 1px;\n  width: 5px;\n  height: 9px;\n  border: solid #fff;\n  border-width: 0 2px 2px 0;\n  transform: rotate(45deg) scale(0);\n  opacity: 0;\n  transition: all 0.15s;\n}\n.auth-checkbox[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    + .auth-cb-box[_ngcontent-%COMP%] {\n  background: #1A2518;\n  border-color: #1A2518;\n}\n.auth-checkbox[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    + .auth-cb-box[_ngcontent-%COMP%]::after {\n  opacity: 1;\n  transform: rotate(45deg) scale(1);\n}\n.auth-checkbox[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #C9A054;\n  font-weight: 600;\n  text-decoration: none;\n}\n.auth-checkbox[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.auth-submit[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n}\n.auth-submit[_ngcontent-%COMP%]     app-button {\n  width: 100%;\n}\n.auth-submit[_ngcontent-%COMP%]     app-button .auth-btn-primary, .auth-submit[_ngcontent-%COMP%]     app-button button {\n  width: 100%;\n  padding: 14px 20px;\n  background: #1A2518;\n  color: #fff;\n  border: none;\n  border-radius: 6px;\n  font-family: "Poppins", sans-serif;\n  font-size: 13px;\n  font-weight: 600;\n  letter-spacing: 0.8px;\n  text-transform: uppercase;\n  cursor: pointer;\n  transition: background 0.2s;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n}\n.auth-submit[_ngcontent-%COMP%]     app-button .auth-btn-primary i, .auth-submit[_ngcontent-%COMP%]     app-button button i {\n  font-size: 16px;\n}\n.auth-submit[_ngcontent-%COMP%]     app-button .auth-btn-primary:hover:not(:disabled), .auth-submit[_ngcontent-%COMP%]     app-button button:hover:not(:disabled) {\n  background: #C9A054;\n  color: #1A2518;\n}\n.auth-submit[_ngcontent-%COMP%]     app-button .auth-btn-primary:disabled, .auth-submit[_ngcontent-%COMP%]     app-button button:disabled {\n  opacity: 0.4;\n  cursor: not-allowed;\n}\n.auth-switch[_ngcontent-%COMP%] {\n  text-align: center;\n  font-family: "Poppins", sans-serif;\n  font-size: 14px;\n  color: #aaa;\n}\n.auth-switch[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #1A2518;\n  font-weight: 600;\n  text-decoration: none;\n  margin-left: 4px;\n}\n.auth-switch[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #C9A054;\n}\n/*# sourceMappingURL=register.component.css.map */'] });
  }
};
__decorate([
  Select(SettingState.setting)
], RegisterComponent.prototype, "setting$", void 0);
__decorate([
  Select(ThemeOptionState.themeOptions)
], RegisterComponent.prototype, "themeOption$", void 0);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RegisterComponent, { className: "RegisterComponent", filePath: "src\\app\\components\\auth\\register\\register.component.ts", lineNumber: 21 });
})();

// src/app/components/auth/login-with-number/login-with-number.component.ts
var _c06 = () => ["/auth/register"];
function LoginWithNumberComponent_div_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "phone_number_is_required"));
  }
}
function LoginWithNumberComponent_ng_template_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 26)(1, "div", 27);
    \u0275\u0275element(2, "div");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 28);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const data_r2 = ctx.data;
    \u0275\u0275advance(2);
    \u0275\u0275classMapInterpolate1("iti-flag ", data_r2 == null ? null : data_r2.class, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r2.code);
  }
}
var LoginWithNumberComponent = class _LoginWithNumberComponent {
  constructor(store, router, authService, formBuilder) {
    this.store = store;
    this.router = router;
    this.authService = authService;
    this.formBuilder = formBuilder;
    this.codes = countryCodes;
    this.breadcrumb = {
      title: "Login With Number",
      items: [{ label: "Login With Number", active: true }]
    };
    this.form = this.formBuilder.group({
      phone: new FormControl("", [Validators.required, Validators.pattern(/^[0-9]*$/)]),
      country_code: new FormControl("91", [Validators.required])
    });
  }
  submit() {
    this.form.markAllAsTouched();
    if (this.form.valid) {
      this.store.dispatch(new LoginWithNumber(this.form.value)).subscribe({
        complete: () => {
          this.authService.otpType = "number";
          this.router.navigateByUrl("/auth/otp");
        }
      });
    }
  }
  static {
    this.\u0275fac = function LoginWithNumberComponent_Factory(t) {
      return new (t || _LoginWithNumberComponent)(\u0275\u0275directiveInject(Store), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(FormBuilder));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LoginWithNumberComponent, selectors: [["app-login-with-number"]], decls: 45, vars: 29, consts: [["template", ""], [3, "breadcrumb"], [1, "log-in-section", "section-b-space"], [1, "container-fluid-lg", "w-100"], [1, "row"], [1, "col-xxl-6", "col-xl-5", "col-lg-6", "d-lg-block", "d-none", "ms-auto"], [1, "image-contain"], ["src", "assets/images/inner-page/sign-up.png", "alt", "register", 1, "img-fluid"], [1, "col-xxl-4", "col-xl-5", "col-lg-6", "col-sm-8", "mx-auto"], [1, "log-in-box"], [1, "log-in-title"], [1, "input-box"], [1, "row", "g-4", 3, "ngSubmit", "formGroup"], [1, "col-12", "phone-field"], [1, "form-floating", "log-in-form"], ["type", "number", "id", "phone", "id", "phone", "formControlName", "phone", 1, "form-control", 3, "placeholder"], ["for", "phone"], ["class", "invalid-feedback", 4, "ngIf"], ["formControlName", "country_code", 1, "custom-select", "intl-tel-input", 3, "data", "templates"], [1, "col-12"], [3, "id"], [1, "other-log-in"], [1, "sign-up-box"], [3, "routerLink"], [1, "col-xxl-7", "col-xl-6", "col-lg-6"], [1, "invalid-feedback"], [1, "country"], [1, "flag-box"], [1, "dial-code"]], template: function LoginWithNumberComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275element(0, "app-breadcrumb", 1);
        \u0275\u0275elementStart(1, "section", 2)(2, "div", 3)(3, "div", 4)(4, "div", 5)(5, "div", 6);
        \u0275\u0275element(6, "img", 7);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "div", 8);
        \u0275\u0275element(8, "app-alert");
        \u0275\u0275elementStart(9, "div", 9)(10, "div", 10)(11, "h3");
        \u0275\u0275text(12, "Welcome To GROFAB");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "h4");
        \u0275\u0275text(14);
        \u0275\u0275pipe(15, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(16, "div", 11)(17, "form", 12);
        \u0275\u0275listener("ngSubmit", function LoginWithNumberComponent_Template_form_ngSubmit_17_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.submit());
        });
        \u0275\u0275elementStart(18, "div", 13)(19, "div", 14);
        \u0275\u0275element(20, "input", 15);
        \u0275\u0275pipe(21, "translate");
        \u0275\u0275elementStart(22, "label", 16);
        \u0275\u0275text(23);
        \u0275\u0275pipe(24, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275template(25, LoginWithNumberComponent_div_25_Template, 3, 3, "div", 17);
        \u0275\u0275elementStart(26, "select2", 18);
        \u0275\u0275template(27, LoginWithNumberComponent_ng_template_27_Template, 5, 4, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(29, "div", 19)(30, "app-button", 20);
        \u0275\u0275text(31);
        \u0275\u0275pipe(32, "translate");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(33, "div", 21)(34, "h6");
        \u0275\u0275text(35);
        \u0275\u0275pipe(36, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(37, "div", 22)(38, "h4");
        \u0275\u0275text(39);
        \u0275\u0275pipe(40, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(41, "a", 23);
        \u0275\u0275text(42);
        \u0275\u0275pipe(43, "translate");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275element(44, "div", 24);
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        const template_r3 = \u0275\u0275reference(28);
        \u0275\u0275property("breadcrumb", ctx.breadcrumb);
        \u0275\u0275advance(14);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(15, 14, "login_your_account"));
        \u0275\u0275advance(3);
        \u0275\u0275property("formGroup", ctx.form);
        \u0275\u0275advance(3);
        \u0275\u0275propertyInterpolate("placeholder", \u0275\u0275pipeBind1(21, 16, "phone"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(24, 18, "phone_number"));
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.form.controls["phone"].touched && (ctx.form.controls["phone"].errors == null ? null : ctx.form.controls["phone"].errors["required"]));
        \u0275\u0275advance();
        \u0275\u0275property("data", ctx.codes)("templates", template_r3);
        \u0275\u0275advance(4);
        \u0275\u0275property("id", "send_otp_btn");
        \u0275\u0275advance();
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(32, 20, "Send Otp"));
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(36, 22, "or"));
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(40, 24, "don't_have_an_account"), "?");
        \u0275\u0275advance(2);
        \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(28, _c06));
        \u0275\u0275advance();
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(43, 26, "sign_up"));
      }
    }, dependencies: [NgIf, RouterLink, \u0275NgNoValidate, DefaultValueAccessor, NumberValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, BreadcrumbComponent, AlertComponent, ButtonComponent, Select2, TranslatePipe] });
  }
};
__decorate([
  Select(SettingState.setting)
], LoginWithNumberComponent.prototype, "setting$", void 0);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LoginWithNumberComponent, { className: "LoginWithNumberComponent", filePath: "src\\app\\components\\auth\\login-with-number\\login-with-number.component.ts", lineNumber: 19 });
})();

// src/app/components/auth/auth-routing.module.ts
var routes = [
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "forgot-password",
    component: ForgotPasswordComponent
  },
  {
    path: "otp",
    component: OtpComponent
  },
  {
    path: "update-password",
    component: UpdatePasswordComponent
  },
  {
    path: "register",
    component: RegisterComponent
  },
  {
    path: "login-with-number",
    component: LoginWithNumberComponent
  }
];
var AuthRoutingModule = class _AuthRoutingModule {
  static {
    this.\u0275fac = function AuthRoutingModule_Factory(t) {
      return new (t || _AuthRoutingModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _AuthRoutingModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forChild(routes), RouterModule] });
  }
};

// src/app/components/auth/auth.module.ts
var AuthModule = class _AuthModule {
  static {
    this.\u0275fac = function AuthModule_Factory(t) {
      return new (t || _AuthModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _AuthModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [
      CommonModule,
      AuthRoutingModule,
      FormsModule,
      ReactiveFormsModule,
      SharedModule,
      NgxsModule.forFeature([AuthState]),
      TranslateModule,
      RecaptchaModule,
      RecaptchaFormsModule
    ] });
  }
};
export {
  AuthModule
};
//# sourceMappingURL=chunk-WKI7WQHN.js.map
