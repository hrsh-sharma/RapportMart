import {
  SeoService
} from "./chunk-SEVD3V6P.js";
import {
  CommonModule,
  RouterModule,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵdefineComponent,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵtext
} from "./chunk-K6HJRTD4.js";

// src/app/privacy-policy/privacy-policy/privacy-policy.component.ts
var PrivacyPolicyComponent = class _PrivacyPolicyComponent {
  constructor(seoService) {
    this.seoService = seoService;
  }
  ngOnInit() {
    this.seoService.setSEOData({
      title: "Privacy Policy \u2013 How We Use Your Data | GROFAB",
      description: "Learn how GROFAB protects and uses your personal information. Read our comprehensive privacy policy to understand your rights and our data practices.",
      keywords: "privacy policy, data protection, personal information, GROFAB privacy, data usage",
      canonicalUrl: "https://GROFAB.in/privacy-policy",
      url: "https://GROFAB.in/privacy-policy",
      type: "website"
    });
  }
  static {
    this.\u0275fac = function PrivacyPolicyComponent_Factory(t) {
      return new (t || _PrivacyPolicyComponent)(\u0275\u0275directiveInject(SeoService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PrivacyPolicyComponent, selectors: [["app-privacy-policy"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 75, vars: 0, consts: [[1, "pol"], [1, "pol__header"], [1, "container-fluid-lg"], [1, "pol__title"], [1, "pol__sub"], [1, "pol__body"], [1, "pol__intro"], ["href", "https://grofabwear.com"], [1, "pol__section"], [1, "pol__contact-box"], ["href", "mailto:info@grofabwear.com"]], template: function PrivacyPolicyComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "h1", 3);
        \u0275\u0275text(4, "Privacy Policy");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "p", 4);
        \u0275\u0275text(6, "Last updated: March 2026");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(7, "div", 2)(8, "div", 5)(9, "p", 6);
        \u0275\u0275text(10, "This Privacy Policy describes how ");
        \u0275\u0275elementStart(11, "strong");
        \u0275\u0275text(12, "GROFAB TECHLABS PRIVATE LIMITED");
        \u0275\u0275elementEnd();
        \u0275\u0275text(13, ' and its affiliates (collectively "GROFAB", "we", "our", "us") collect, use, share, protect or otherwise process your personal data through ');
        \u0275\u0275elementStart(14, "a", 7);
        \u0275\u0275text(15, "grofabwear.com");
        \u0275\u0275elementEnd();
        \u0275\u0275text(16, ' (the "Platform"). By using the Platform, you agree to the terms of this Privacy Policy.');
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(17, "div", 8)(18, "h3");
        \u0275\u0275text(19, "Information We Collect");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(20, "p");
        \u0275\u0275text(21, "We collect personal data when you register, browse, or transact on our Platform. This includes your name, email address, phone number, shipping address, payment details, and browsing behaviour. You always have the option to not provide certain information by choosing not to use a particular feature.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(22, "div", 8)(23, "h3");
        \u0275\u0275text(24, "How We Use Your Data");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(25, "ul")(26, "li");
        \u0275\u0275text(27, "To process and fulfil your orders");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(28, "li");
        \u0275\u0275text(29, "To personalise your shopping experience");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(30, "li");
        \u0275\u0275text(31, "To communicate order updates, offers, and promotions");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(32, "li");
        \u0275\u0275text(33, "To detect and prevent fraud or unauthorized activity");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(34, "li");
        \u0275\u0275text(35, "To improve our Platform, products, and services");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(36, "div", 8)(37, "h3");
        \u0275\u0275text(38, "Sharing Your Information");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(39, "p");
        \u0275\u0275text(40, "We may share your data with logistics partners, payment processors, and marketing affiliates to fulfil services. We may also disclose information to comply with legal obligations or protect against fraudulent activity. We do not sell your personal data.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(41, "div", 8)(42, "h3");
        \u0275\u0275text(43, "Data Security");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(44, "p");
        \u0275\u0275text(45, "We implement industry-standard security measures to protect your personal data from unauthorized access, disclosure, or misuse. However, no method of transmission over the internet is 100% secure.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(46, "div", 8)(47, "h3");
        \u0275\u0275text(48, "Data Retention & Deletion");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(49, "p");
        \u0275\u0275text(50, "We retain your data only as long as necessary for the purposes described in this policy. You may request deletion of your account and data by writing to us. Certain data may be retained for legal compliance purposes.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(51, "div", 8)(52, "h3");
        \u0275\u0275text(53, "Your Rights");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(54, "p");
        \u0275\u0275text(55, "You may access, update, or correct your personal data through your account settings. You may withdraw consent for marketing communications at any time by contacting us.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(56, "div", 8)(57, "h3");
        \u0275\u0275text(58, "Changes to This Policy");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(59, "p");
        \u0275\u0275text(60, "We may update this Privacy Policy from time to time. Significant changes will be communicated via email or Platform notification.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(61, "div", 9)(62, "h3");
        \u0275\u0275text(63, "Grievance Officer");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(64, "p")(65, "strong");
        \u0275\u0275text(66, "GROFAB TECHLABS PRIVATE LIMITED");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(67, "p");
        \u0275\u0275text(68, "PLOT NO. 931/1, PURVI BAZAR, NEAR TAGORE SCHOOL, AMBALA ROAD, Sarsawa, Saharanpur, Nakur, Uttar Pradesh, India, 247232. CIN - U46410UP2025PTC227819");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(69, "p");
        \u0275\u0275text(70, "Email: ");
        \u0275\u0275elementStart(71, "a", 10);
        \u0275\u0275text(72, "info@grofabwear.com");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(73, "p");
        \u0275\u0275text(74, "Working Hours: Mon \u2013 Fri, 10:00 AM \u2013 5:00 PM");
        \u0275\u0275elementEnd()()()()();
      }
    }, styles: ["\n\n/*# sourceMappingURL=privacy-policy.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PrivacyPolicyComponent, { className: "PrivacyPolicyComponent", filePath: "src\\app\\privacy-policy\\privacy-policy\\privacy-policy.component.ts", lineNumber: 11 });
})();

// src/app/privacy-policy/privacy-policy-routing.module.ts
var routes = [
  { path: "", component: PrivacyPolicyComponent }
  // Root path for this module
];
var PrivacyPolicyRoutingModule = class _PrivacyPolicyRoutingModule {
  static {
    this.\u0275fac = function PrivacyPolicyRoutingModule_Factory(t) {
      return new (t || _PrivacyPolicyRoutingModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _PrivacyPolicyRoutingModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forChild(routes), RouterModule] });
  }
};

// src/app/privacy-policy/privacy-policy.module.ts
var PrivacyPolicyModule = class _PrivacyPolicyModule {
  static {
    this.\u0275fac = function PrivacyPolicyModule_Factory(t) {
      return new (t || _PrivacyPolicyModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _PrivacyPolicyModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [
      CommonModule,
      PrivacyPolicyRoutingModule
    ] });
  }
};
export {
  PrivacyPolicyModule
};
//# sourceMappingURL=chunk-FZVIUJOR.js.map
