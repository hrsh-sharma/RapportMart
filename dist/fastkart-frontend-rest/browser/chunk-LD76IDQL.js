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

// src/app/return-exchange/return-exchange/return-exchange.component.ts
var ReturnExchangeComponent = class _ReturnExchangeComponent {
  constructor(seoService) {
    this.seoService = seoService;
  }
  ngOnInit() {
    this.seoService.setSEOData({
      title: "Easy 7-Day Return Policy \u2013 Shop Risk-Free | GROFAB",
      description: "Shop with confidence at GROFAB. Our easy 7-day return policy ensures you can shop risk-free. Learn about our simple return and exchange process.",
      keywords: "return policy, exchange policy, 7-day return, shop risk-free, GROFAB returns",
      canonicalUrl: "https://grofabwear.com /return-policy",
      url: "https://grofabwear.com /return-policy",
      type: "website"
    });
  }
  static {
    this.\u0275fac = function ReturnExchangeComponent_Factory(t) {
      return new (t || _ReturnExchangeComponent)(\u0275\u0275directiveInject(SeoService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ReturnExchangeComponent, selectors: [["app-return-exchange"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 68, vars: 0, consts: [[1, "pol"], [1, "pol__header"], [1, "container-fluid-lg"], [1, "pol__title"], [1, "pol__sub"], [1, "pol__body"], [1, "pol__intro"], [1, "pol__section"], ["routerLink", "/account/order"], ["href", "mailto:info@grofabwear.com"]], template: function ReturnExchangeComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "h1", 3);
        \u0275\u0275text(4, "Return & Exchange Policy");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "p", 4);
        \u0275\u0275text(6, "Last updated: March 2026");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(7, "div", 2)(8, "div", 5)(9, "p", 6);
        \u0275\u0275text(10, "We want you to be completely satisfied with your purchase. If something isn't right, we're here to help with easy returns and exchanges.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "div", 7)(12, "h3");
        \u0275\u0275text(13, "Return Window");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "p");
        \u0275\u0275text(15, "You may request a return or exchange within ");
        \u0275\u0275elementStart(16, "strong");
        \u0275\u0275text(17, "7 days");
        \u0275\u0275elementEnd();
        \u0275\u0275text(18, " of receiving your order. After this period, we are unable to process return requests.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(19, "div", 7)(20, "h3");
        \u0275\u0275text(21, "Conditions for Returns");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(22, "ul")(23, "li");
        \u0275\u0275text(24, "The item must be unused, unwashed, and in its original condition with all tags attached.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(25, "li");
        \u0275\u0275text(26, "The item must be in its original packaging.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(27, "li");
        \u0275\u0275text(28, "Proof of purchase (order number or invoice) is required.");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(29, "div", 7)(30, "h3");
        \u0275\u0275text(31, "Items Not Eligible for Return");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(32, "ul")(33, "li");
        \u0275\u0275text(34, "Customised or personalised products");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(35, "li");
        \u0275\u0275text(36, "Innerwear, lingerie, and swimwear (for hygiene reasons)");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(37, "li");
        \u0275\u0275text(38, "Items purchased during clearance or final sale");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(39, "li");
        \u0275\u0275text(40, "Items that are damaged due to misuse or negligence by the customer");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(41, "div", 7)(42, "h3");
        \u0275\u0275text(43, "Exchange Process");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(44, "p");
        \u0275\u0275text(45, "If you'd like a different size or colour, initiate an exchange from your ");
        \u0275\u0275elementStart(46, "a", 8);
        \u0275\u0275text(47, "My Orders");
        \u0275\u0275elementEnd();
        \u0275\u0275text(48, " page. The replacement will be shipped once we receive and verify the returned item.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(49, "div", 7)(50, "h3");
        \u0275\u0275text(51, "Refund for Returns");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(52, "p");
        \u0275\u0275text(53, "Once the returned item is received and inspected, your refund will be processed within ");
        \u0275\u0275elementStart(54, "strong");
        \u0275\u0275text(55, "5\u20137 business days");
        \u0275\u0275elementEnd();
        \u0275\u0275text(56, " to your original payment method. Shipping charges are non-refundable.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(57, "div", 7)(58, "h3");
        \u0275\u0275text(59, "Need Help?");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(60, "p");
        \u0275\u0275text(61, "Contact us at ");
        \u0275\u0275elementStart(62, "a", 9);
        \u0275\u0275text(63, "info@grofabwear.com");
        \u0275\u0275elementEnd();
        \u0275\u0275text(64, " or call ");
        \u0275\u0275elementStart(65, "strong");
        \u0275\u0275text(66, "+91 86796 07377");
        \u0275\u0275elementEnd();
        \u0275\u0275text(67, " for return or exchange assistance.");
        \u0275\u0275elementEnd()()()()();
      }
    }, dependencies: [CommonModule], styles: ["\n\n/*# sourceMappingURL=return-exchange.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ReturnExchangeComponent, { className: "ReturnExchangeComponent", filePath: "src\\app\\return-exchange\\return-exchange\\return-exchange.component.ts", lineNumber: 12 });
})();

// src/app/return-exchange/return-exchange-routing.module.ts
var routes = [
  { path: "", component: ReturnExchangeComponent }
  // Root path for this module
];
var ReturnExchangeRoutingModule = class _ReturnExchangeRoutingModule {
  static {
    this.\u0275fac = function ReturnExchangeRoutingModule_Factory(t) {
      return new (t || _ReturnExchangeRoutingModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _ReturnExchangeRoutingModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forChild(routes), RouterModule] });
  }
};

// src/app/return-exchange/return-exchange.module.ts
var ReturnExchangeModule = class _ReturnExchangeModule {
  static {
    this.\u0275fac = function ReturnExchangeModule_Factory(t) {
      return new (t || _ReturnExchangeModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _ReturnExchangeModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [
      CommonModule,
      ReturnExchangeRoutingModule
    ] });
  }
};
export {
  ReturnExchangeModule
};
//# sourceMappingURL=chunk-LD76IDQL.js.map
