import {
  CommonModule,
  RouterModule,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵdefineComponent,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵtext
} from "./chunk-K6HJRTD4.js";

// src/app/shipping-delevary/shipping-delevary/shipping-delevary.component.ts
var ShippingDelevaryComponent = class _ShippingDelevaryComponent {
  static {
    this.\u0275fac = function ShippingDelevaryComponent_Factory(t) {
      return new (t || _ShippingDelevaryComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ShippingDelevaryComponent, selectors: [["app-shipping-delevary"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 72, vars: 0, consts: [[1, "pol"], [1, "pol__header"], [1, "container-fluid-lg"], [1, "pol__title"], [1, "pol__sub"], [1, "pol__body"], [1, "pol__intro"], [1, "pol__section"], [1, "pol__grid"], [1, "pol__grid-card"], [1, "ri-shopping-bag-line"], [1, "ri-stack-line"], ["routerLink", "/account/order"], ["href", "mailto:info@grofabwear.com"]], template: function ShippingDelevaryComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "h1", 3);
        \u0275\u0275text(4, "Shipping & Delivery Policy");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "p", 4);
        \u0275\u0275text(6, "Last updated: March 2026");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(7, "div", 2)(8, "div", 5)(9, "p", 6);
        \u0275\u0275text(10, "We strive to deliver your orders as quickly and reliably as possible. Here's everything you need to know about our shipping process.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "div", 7)(12, "h3");
        \u0275\u0275text(13, "Delivery Timelines");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "div", 8)(15, "div", 9);
        \u0275\u0275element(16, "i", 10);
        \u0275\u0275elementStart(17, "h4");
        \u0275\u0275text(18, "Standard Orders");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(19, "p");
        \u0275\u0275text(20, "Delivered within ");
        \u0275\u0275elementStart(21, "strong");
        \u0275\u0275text(22, "7\u201312 business days");
        \u0275\u0275elementEnd();
        \u0275\u0275text(23, " across India.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(24, "div", 9);
        \u0275\u0275element(25, "i", 11);
        \u0275\u0275elementStart(26, "h4");
        \u0275\u0275text(27, "Bulk Orders");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(28, "p");
        \u0275\u0275text(29, "Delivered within ");
        \u0275\u0275elementStart(30, "strong");
        \u0275\u0275text(31, "10\u201315 business days");
        \u0275\u0275elementEnd();
        \u0275\u0275text(32, " depending on quantity and location.");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(33, "div", 7)(34, "h3");
        \u0275\u0275text(35, "Shipping Charges");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(36, "ul")(37, "li");
        \u0275\u0275text(38, "Free shipping on orders above ");
        \u0275\u0275elementStart(39, "strong");
        \u0275\u0275text(40, "\u20B9999");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(41, "li");
        \u0275\u0275text(42, "A flat shipping fee of \u20B979 applies on orders below \u20B9999");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(43, "li");
        \u0275\u0275text(44, "Charges for remote/rural areas may vary");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(45, "div", 7)(46, "h3");
        \u0275\u0275text(47, "Order Tracking");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(48, "p");
        \u0275\u0275text(49, "Once your order is dispatched, you will receive a tracking link via email and SMS. You can also track your order from the ");
        \u0275\u0275elementStart(50, "a", 12);
        \u0275\u0275text(51, "My Orders");
        \u0275\u0275elementEnd();
        \u0275\u0275text(52, " section of your account.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(53, "div", 7)(54, "h3");
        \u0275\u0275text(55, "Delivery Attempts");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(56, "p");
        \u0275\u0275text(57, "Our delivery partner will attempt delivery up to ");
        \u0275\u0275elementStart(58, "strong");
        \u0275\u0275text(59, "3 times");
        \u0275\u0275elementEnd();
        \u0275\u0275text(60, ". If all attempts fail, the order will be returned to our warehouse and a refund will be initiated after deducting shipping charges.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(61, "div", 7)(62, "h3");
        \u0275\u0275text(63, "Damaged or Missing Items");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(64, "p");
        \u0275\u0275text(65, "If your order arrives damaged or items are missing, please contact us within ");
        \u0275\u0275elementStart(66, "strong");
        \u0275\u0275text(67, "48 hours");
        \u0275\u0275elementEnd();
        \u0275\u0275text(68, " of delivery at ");
        \u0275\u0275elementStart(69, "a", 13);
        \u0275\u0275text(70, "info@grofabwear.com");
        \u0275\u0275elementEnd();
        \u0275\u0275text(71, " with photos of the package and product.");
        \u0275\u0275elementEnd()()()()();
      }
    }, dependencies: [CommonModule], styles: ["\n\n/*# sourceMappingURL=shipping-delevary.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ShippingDelevaryComponent, { className: "ShippingDelevaryComponent", filePath: "src\\app\\shipping-delevary\\shipping-delevary\\shipping-delevary.component.ts", lineNumber: 11 });
})();

// src/app/shipping-delevary/shipping-delevary-routing.module.ts
var routes = [
  { path: "", component: ShippingDelevaryComponent }
  // Root path for this module
];
var ShippingDelevaryRoutingModule = class _ShippingDelevaryRoutingModule {
  static {
    this.\u0275fac = function ShippingDelevaryRoutingModule_Factory(t) {
      return new (t || _ShippingDelevaryRoutingModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _ShippingDelevaryRoutingModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forChild(routes), RouterModule] });
  }
};

// src/app/shipping-delevary/shipping-delevary.module.ts
var ShippingDelevaryModule = class _ShippingDelevaryModule {
  static {
    this.\u0275fac = function ShippingDelevaryModule_Factory(t) {
      return new (t || _ShippingDelevaryModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _ShippingDelevaryModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [
      CommonModule,
      ShippingDelevaryRoutingModule
    ] });
  }
};
export {
  ShippingDelevaryModule
};
//# sourceMappingURL=chunk-RADICQFS.js.map
