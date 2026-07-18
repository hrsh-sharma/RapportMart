import {
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  MaxLengthValidator,
  NgControlStatus,
  NgControlStatusGroup,
  PatternValidator,
  ReactiveFormsModule,
  Validators,
  ɵNgNoValidate
} from "./chunk-GFSM57H7.js";
import {
  CommonModule,
  NgIf,
  RouterModule,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵproperty,
  ɵɵtemplate,
  ɵɵtext
} from "./chunk-K6HJRTD4.js";

// src/app/contact-us/contact-us.component.ts
function ContactUsComponent_span_65_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 31);
    \u0275\u0275text(1, "Only letters and spaces allowed");
    \u0275\u0275elementEnd();
  }
}
function ContactUsComponent_span_71_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 31);
    \u0275\u0275text(1, "Enter a valid email");
    \u0275\u0275elementEnd();
  }
}
function ContactUsComponent_span_76_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 31);
    \u0275\u0275text(1, "Must be 10 digits");
    \u0275\u0275elementEnd();
  }
}
function ContactUsComponent_span_81_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 31);
    \u0275\u0275text(1, "Message is required");
    \u0275\u0275elementEnd();
  }
}
var ContactUsComponent = class _ContactUsComponent {
  constructor(fb) {
    this.fb = fb;
    this.contactForm = this.fb.group({
      name: ["", [Validators.required, Validators.pattern("^[A-Za-z ]+$")]],
      email: ["", [Validators.required, Validators.email]],
      phone: ["", [Validators.required, Validators.pattern("^[0-9]{10}$")]],
      message: ["", Validators.required]
    });
  }
  filterSpecialCharacters(event, fieldName) {
    const input = event.target;
    const value = input.value;
    const filteredValue = value.replace(/[^a-zA-Z\s]/g, "");
    if (value !== filteredValue) {
      input.value = filteredValue;
      this.contactForm.get(fieldName)?.setValue(filteredValue);
    }
  }
  filterEmailCharacters(event) {
    const input = event.target;
    const value = input.value;
    const filteredValue = value.replace(/[^a-zA-Z0-9._\-+@]/g, "");
    if (value !== filteredValue) {
      input.value = filteredValue;
      this.contactForm.get("email")?.setValue(filteredValue);
    }
  }
  filterPhoneNumber(event) {
    const input = event.target;
    const value = input.value;
    const filteredValue = value.replace(/\D/g, "").slice(0, 10);
    if (value !== filteredValue) {
      input.value = filteredValue;
      this.contactForm.get("phone")?.setValue(filteredValue);
    }
  }
  onSubmit() {
    if (this.contactForm.valid) {
      console.log("Form submitted", this.contactForm.value);
      alert("Form submitted successfully!");
      this.contactForm.reset();
    } else {
      alert("Please fill all fields correctly before submitting.");
    }
  }
  static {
    this.\u0275fac = function ContactUsComponent_Factory(t) {
      return new (t || _ContactUsComponent)(\u0275\u0275directiveInject(FormBuilder));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ContactUsComponent, selectors: [["app-contact-us"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 85, vars: 14, consts: [[1, "ct"], [1, "ct__split"], [1, "ct__info"], [1, "ct__info-inner"], [1, "ct__label"], [1, "ct__heading"], [1, "ct__desc"], [1, "ct__details"], [1, "ct__detail"], [1, "ri-mail-line"], [1, "ct__detail-label"], ["href", "mailto:info@grofabwear.com"], [1, "ri-phone-line"], ["href", "tel:+918679607377"], [1, "ri-map-pin-line"], [1, "ri-time-line"], [1, "ri-information-line"], [1, "ct__form-panel"], [1, "ct__form-inner"], [1, "ct__form-title"], [1, "ct__form-sub"], [1, "ct__form", 3, "ngSubmit", "formGroup"], [1, "ct__field"], ["type", "text", "formControlName", "name", "placeholder", "Your name", "pattern", "[a-zA-Z\\s]+", 3, "input"], ["class", "ct__error", 4, "ngIf"], [1, "ct__field-row"], ["type", "email", "formControlName", "email", "placeholder", "you@example.com", "pattern", "[a-zA-Z0-9._\\-+@]+", 3, "input"], ["type", "tel", "formControlName", "phone", "placeholder", "10-digit number", "maxlength", "10", "pattern", "[0-9]{10}", 3, "input"], ["formControlName", "message", "placeholder", "How can we help you?", "rows", "5"], ["type", "submit", 1, "ct__submit", 3, "disabled"], [1, "ri-arrow-right-line"], [1, "ct__error"]], template: function ContactUsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "span", 4);
        \u0275\u0275text(5, "Get In Touch");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "h1", 5);
        \u0275\u0275text(7, "We'd Love to");
        \u0275\u0275element(8, "br");
        \u0275\u0275text(9, "Hear From ");
        \u0275\u0275elementStart(10, "span");
        \u0275\u0275text(11, "You");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(12, "p", 6);
        \u0275\u0275text(13, "Have a question, feedback, or just want to say hello? Reach out to us through any of the channels below.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "div", 7)(15, "div", 8);
        \u0275\u0275element(16, "i", 9);
        \u0275\u0275elementStart(17, "div")(18, "span", 10);
        \u0275\u0275text(19, "Email");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(20, "a", 11);
        \u0275\u0275text(21, "info@grofabwear.com");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(22, "div", 8);
        \u0275\u0275element(23, "i", 12);
        \u0275\u0275elementStart(24, "div")(25, "span", 10);
        \u0275\u0275text(26, "Phone");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(27, "a", 13);
        \u0275\u0275text(28, "+91 86796 07377");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(29, "div", 8);
        \u0275\u0275element(30, "i", 14);
        \u0275\u0275elementStart(31, "div")(32, "span", 10);
        \u0275\u0275text(33, "Office");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(34, "span");
        \u0275\u0275text(35, "PLOT NO. 931/1, PURVI BAZAR, NEAR TAGORE SCHOOL,");
        \u0275\u0275element(36, "br");
        \u0275\u0275text(37, "AMBALA ROAD, Sarsawa, Saharanpur, Nakur,");
        \u0275\u0275element(38, "br");
        \u0275\u0275text(39, "Uttar Pradesh, India, 247232");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(40, "div", 8);
        \u0275\u0275element(41, "i", 15);
        \u0275\u0275elementStart(42, "div")(43, "span", 10);
        \u0275\u0275text(44, "Working Hours");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(45, "span");
        \u0275\u0275text(46, "Mon \u2013 Sat, 10:00 AM \u2013 7:00 PM");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(47, "div", 8);
        \u0275\u0275element(48, "i", 16);
        \u0275\u0275elementStart(49, "div")(50, "span", 10);
        \u0275\u0275text(51, "CIN");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(52, "span");
        \u0275\u0275text(53, "U46410UP2025PTC227819");
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(54, "div", 17)(55, "div", 18)(56, "h2", 19);
        \u0275\u0275text(57, "Send us a Message");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(58, "p", 20);
        \u0275\u0275text(59, "Fill out the form and our team will get back to you within 24 hours.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(60, "form", 21);
        \u0275\u0275listener("ngSubmit", function ContactUsComponent_Template_form_ngSubmit_60_listener() {
          return ctx.onSubmit();
        });
        \u0275\u0275elementStart(61, "div", 22)(62, "label");
        \u0275\u0275text(63, "Full Name");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(64, "input", 23);
        \u0275\u0275listener("input", function ContactUsComponent_Template_input_input_64_listener($event) {
          return ctx.filterSpecialCharacters($event, "name");
        });
        \u0275\u0275elementEnd();
        \u0275\u0275template(65, ContactUsComponent_span_65_Template, 2, 0, "span", 24);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(66, "div", 25)(67, "div", 22)(68, "label");
        \u0275\u0275text(69, "Email");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(70, "input", 26);
        \u0275\u0275listener("input", function ContactUsComponent_Template_input_input_70_listener($event) {
          return ctx.filterEmailCharacters($event);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275template(71, ContactUsComponent_span_71_Template, 2, 0, "span", 24);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(72, "div", 22)(73, "label");
        \u0275\u0275text(74, "Phone");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(75, "input", 27);
        \u0275\u0275listener("input", function ContactUsComponent_Template_input_input_75_listener($event) {
          return ctx.filterPhoneNumber($event);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275template(76, ContactUsComponent_span_76_Template, 2, 0, "span", 24);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(77, "div", 22)(78, "label");
        \u0275\u0275text(79, "Message");
        \u0275\u0275elementEnd();
        \u0275\u0275element(80, "textarea", 28);
        \u0275\u0275template(81, ContactUsComponent_span_81_Template, 2, 0, "span", 24);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(82, "button", 29);
        \u0275\u0275text(83, " Send Message ");
        \u0275\u0275element(84, "i", 30);
        \u0275\u0275elementEnd()()()()()();
      }
      if (rf & 2) {
        let tmp_1_0;
        let tmp_2_0;
        let tmp_3_0;
        let tmp_4_0;
        let tmp_5_0;
        let tmp_6_0;
        let tmp_7_0;
        let tmp_8_0;
        \u0275\u0275advance(60);
        \u0275\u0275property("formGroup", ctx.contactForm);
        \u0275\u0275advance(4);
        \u0275\u0275classProp("error", ((tmp_1_0 = ctx.contactForm.get("name")) == null ? null : tmp_1_0.invalid) && ((tmp_1_0 = ctx.contactForm.get("name")) == null ? null : tmp_1_0.touched));
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ((tmp_2_0 = ctx.contactForm.get("name")) == null ? null : tmp_2_0.invalid) && ((tmp_2_0 = ctx.contactForm.get("name")) == null ? null : tmp_2_0.touched));
        \u0275\u0275advance(5);
        \u0275\u0275classProp("error", ((tmp_3_0 = ctx.contactForm.get("email")) == null ? null : tmp_3_0.invalid) && ((tmp_3_0 = ctx.contactForm.get("email")) == null ? null : tmp_3_0.touched));
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ((tmp_4_0 = ctx.contactForm.get("email")) == null ? null : tmp_4_0.invalid) && ((tmp_4_0 = ctx.contactForm.get("email")) == null ? null : tmp_4_0.touched));
        \u0275\u0275advance(4);
        \u0275\u0275classProp("error", ((tmp_5_0 = ctx.contactForm.get("phone")) == null ? null : tmp_5_0.invalid) && ((tmp_5_0 = ctx.contactForm.get("phone")) == null ? null : tmp_5_0.touched));
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ((tmp_6_0 = ctx.contactForm.get("phone")) == null ? null : tmp_6_0.invalid) && ((tmp_6_0 = ctx.contactForm.get("phone")) == null ? null : tmp_6_0.touched));
        \u0275\u0275advance(4);
        \u0275\u0275classProp("error", ((tmp_7_0 = ctx.contactForm.get("message")) == null ? null : tmp_7_0.invalid) && ((tmp_7_0 = ctx.contactForm.get("message")) == null ? null : tmp_7_0.touched));
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ((tmp_8_0 = ctx.contactForm.get("message")) == null ? null : tmp_8_0.invalid) && ((tmp_8_0 = ctx.contactForm.get("message")) == null ? null : tmp_8_0.touched));
        \u0275\u0275advance();
        \u0275\u0275property("disabled", ctx.contactForm.invalid);
      }
    }, dependencies: [CommonModule, NgIf, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, MaxLengthValidator, PatternValidator, FormGroupDirective, FormControlName], styles: ['\n\n.ct[_ngcontent-%COMP%] {\n  padding: 0 !important;\n  margin: 0 !important;\n}\n.ct__split[_ngcontent-%COMP%] {\n  display: flex;\n  min-height: calc(100vh - 80px);\n}\n@media (max-width: 991px) {\n  .ct__split[_ngcontent-%COMP%] {\n    flex-direction: column;\n    min-height: auto;\n  }\n}\n.ct__info[_ngcontent-%COMP%] {\n  width: 42%;\n  background: #1A2518;\n  display: flex;\n  align-items: center;\n  position: relative;\n  overflow: hidden;\n  flex-shrink: 0;\n}\n.ct__info[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  width: 450px;\n  height: 450px;\n  border: 1px solid rgba(201, 160, 84, 0.1);\n  border-radius: 50%;\n  bottom: -140px;\n  right: -100px;\n  pointer-events: none;\n}\n@media (max-width: 991px) {\n  .ct__info[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n.ct__info-inner[_ngcontent-%COMP%] {\n  padding: 64px 56px;\n  position: relative;\n  z-index: 1;\n}\n@media (max-width: 575px) {\n  .ct__info-inner[_ngcontent-%COMP%] {\n    padding: 40px 24px;\n  }\n}\n.ct__label[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-family: "Poppins", sans-serif;\n  font-size: 11px;\n  font-weight: 700;\n  color: #C9A054;\n  text-transform: uppercase;\n  letter-spacing: 3px;\n  margin-bottom: 20px;\n}\n.ct__heading[_ngcontent-%COMP%] {\n  font-family: "Poppins", sans-serif;\n  font-size: 36px;\n  font-weight: 800;\n  color: #fff;\n  line-height: 1.2;\n  margin-bottom: 18px;\n}\n.ct__heading[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #C9A054;\n}\n@media (max-width: 575px) {\n  .ct__heading[_ngcontent-%COMP%] {\n    font-size: 28px;\n  }\n}\n.ct__desc[_ngcontent-%COMP%] {\n  font-family: "Poppins", sans-serif;\n  font-size: 14px;\n  color: rgba(255, 255, 255, 0.45);\n  line-height: 1.75;\n  margin-bottom: 40px;\n  max-width: 360px;\n}\n.ct__details[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 24px;\n}\n.ct__detail[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 14px;\n}\n.ct__detail[_ngcontent-%COMP%]    > i[_ngcontent-%COMP%] {\n  font-size: 18px;\n  color: #C9A054;\n  margin-top: 2px;\n  flex-shrink: 0;\n}\n.ct__detail[_ngcontent-%COMP%]   .ct__detail-label[_ngcontent-%COMP%] {\n  display: block;\n  font-family: "Poppins", sans-serif;\n  font-size: 10px;\n  font-weight: 700;\n  color: rgba(255, 255, 255, 0.35);\n  text-transform: uppercase;\n  letter-spacing: 1px;\n  margin-bottom: 3px;\n}\n.ct__detail[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .ct__detail[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font-family: "Poppins", sans-serif;\n  font-size: 14px;\n  color: rgba(255, 255, 255, 0.75);\n  text-decoration: none;\n  line-height: 1.5;\n}\n.ct__detail[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #C9A054;\n}\n.ct__form-panel[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: #fff;\n  padding: 64px 56px;\n}\n@media (max-width: 575px) {\n  .ct__form-panel[_ngcontent-%COMP%] {\n    padding: 40px 24px;\n  }\n}\n.ct__form-inner[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 520px;\n}\n.ct__form-title[_ngcontent-%COMP%] {\n  font-family: "Poppins", sans-serif;\n  font-size: 24px;\n  font-weight: 700;\n  color: #1A2518;\n  margin-bottom: 6px;\n}\n.ct__form-sub[_ngcontent-%COMP%] {\n  font-family: "Poppins", sans-serif;\n  font-size: 13px;\n  color: #999;\n  margin-bottom: 32px;\n}\n.ct__form[_ngcontent-%COMP%]   .ct__field[_ngcontent-%COMP%] {\n  margin-bottom: 18px;\n}\n.ct__form[_ngcontent-%COMP%]   .ct__field[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  font-family: "Poppins", sans-serif;\n  font-size: 11px;\n  font-weight: 600;\n  color: #aaa;\n  text-transform: uppercase;\n  letter-spacing: 0.8px;\n  margin-bottom: 7px;\n}\n.ct__form[_ngcontent-%COMP%]   .ct__field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .ct__form[_ngcontent-%COMP%]   .ct__field[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  padding: 13px 16px;\n  font-family: "Poppins", sans-serif;\n  font-size: 14px;\n  color: #1A2518;\n  background: #faf9f6;\n  border: 1.5px solid #e8e5de;\n  border-radius: 6px;\n  outline: none;\n  transition: border-color 0.2s;\n  resize: vertical;\n}\n.ct__form[_ngcontent-%COMP%]   .ct__field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder, .ct__form[_ngcontent-%COMP%]   .ct__field[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]::placeholder {\n  color: #bbb;\n}\n.ct__form[_ngcontent-%COMP%]   .ct__field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, .ct__form[_ngcontent-%COMP%]   .ct__field[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus {\n  background: #fff;\n  border-color: #C9A054;\n  box-shadow: 0 0 0 3px rgba(201, 160, 84, 0.08);\n}\n.ct__form[_ngcontent-%COMP%]   .ct__field[_ngcontent-%COMP%]   input.error[_ngcontent-%COMP%], .ct__form[_ngcontent-%COMP%]   .ct__field[_ngcontent-%COMP%]   textarea.error[_ngcontent-%COMP%] {\n  border-color: #e53e3e;\n  background: #fffafa;\n}\n.ct__form[_ngcontent-%COMP%]   .ct__field[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  min-height: 100px;\n}\n.ct__form[_ngcontent-%COMP%]   .ct__field[_ngcontent-%COMP%]   .ct__error[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 12px;\n  color: #e53e3e;\n  margin-top: 4px;\n}\n.ct__form[_ngcontent-%COMP%]   .ct__field-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 14px;\n}\n@media (max-width: 575px) {\n  .ct__form[_ngcontent-%COMP%]   .ct__field-row[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.ct__submit[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  width: 100%;\n  padding: 14px;\n  background: #1A2518;\n  color: #fff;\n  border: none;\n  border-radius: 6px;\n  font-family: "Poppins", sans-serif;\n  font-size: 13px;\n  font-weight: 600;\n  letter-spacing: 0.8px;\n  text-transform: uppercase;\n  cursor: pointer;\n  transition: background 0.2s;\n  margin-top: 8px;\n}\n.ct__submit[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.ct__submit[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #C9A054;\n  color: #1A2518;\n}\n.ct__submit[_ngcontent-%COMP%]:disabled {\n  opacity: 0.4;\n  cursor: not-allowed;\n}\n/*# sourceMappingURL=contact-us.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ContactUsComponent, { className: "ContactUsComponent", filePath: "src\\app\\contact-us\\contact-us.component.ts", lineNumber: 12 });
})();

// src/app/contact-us/contact-us-routing.module.ts
var routes = [
  { path: "", component: ContactUsComponent }
];
var ContactUsRoutingModule = class _ContactUsRoutingModule {
  static {
    this.\u0275fac = function ContactUsRoutingModule_Factory(t) {
      return new (t || _ContactUsRoutingModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _ContactUsRoutingModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forChild(routes), RouterModule] });
  }
};

// src/app/contact-us/contact-us.module.ts
var ContactUsModule = class _ContactUsModule {
  static {
    this.\u0275fac = function ContactUsModule_Factory(t) {
      return new (t || _ContactUsModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _ContactUsModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [
      CommonModule,
      ContactUsRoutingModule
    ] });
  }
};
export {
  ContactUsModule
};
//# sourceMappingURL=chunk-WDUZ7LTG.js.map
