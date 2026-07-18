import {
  ContactUs,
  CouponService,
  CouponState,
  Error404Component,
  GetCoupons,
  GetFaqs,
  GetPageBySlug,
  PageService,
  PageState
} from "./chunk-ND7R3YHP.js";
import {
  BreadcrumbComponent,
  ButtonComponent,
  GetProducts,
  NgbAccordionBody,
  NgbAccordionButton,
  NgbAccordionCollapse,
  NgbAccordionDirective,
  NgbAccordionHeader,
  NgbAccordionItem,
  NoDataComponent,
  ProductBoxComponent,
  ProductService,
  ProductState,
  Select,
  SharedModule,
  SkeletonProductBoxComponent,
  Store,
  ThemeOptionState,
  TranslateModule,
  TranslatePipe,
  productSlider6ItemMargin
} from "./chunk-N3F36WZH.js";
import {
  SeoService
} from "./chunk-SEVD3V6P.js";
import {
  DefaultValueAccessor,
  FormBuilder,
  FormControl,
  FormControlDirective,
  FormControlName,
  FormGroupDirective,
  MaxLengthValidator,
  NgControlStatus,
  NgControlStatusGroup,
  PatternValidator,
  Validators,
  ɵNgNoValidate
} from "./chunk-GFSM57H7.js";
import {
  ActivatedRoute,
  AsyncPipe,
  CommonModule,
  Meta,
  NgClass,
  NgForOf,
  NgIf,
  Router,
  RouterModule,
  __decorate,
  debounceTime,
  distinctUntilChanged,
  inject,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
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
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵpropertyInterpolate,
  ɵɵpureFunction4,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeHtml,
  ɵɵstyleMap,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-K6HJRTD4.js";

// src/app/shared/resolvers/page.resolver.ts
var PageResolver = (route, state) => {
  return inject(Store).dispatch(new GetPageBySlug(route.paramMap.get("slug")));
};

// src/app/components/page/skeleton-page/skeleton-page.component.ts
var SkeletonPageComponent = class _SkeletonPageComponent {
  static {
    this.\u0275fac = function SkeletonPageComponent_Factory(t) {
      return new (t || _SkeletonPageComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SkeletonPageComponent, selectors: [["app-skeleton-page"]], decls: 17, vars: 0, consts: [[1, "common-skeleton"], [1, "img-box"], [1, "img"], [1, "img-content"], [1, "placeholder", "col-6"], [1, "placeholder", "col-7"], [1, "placeholder", "col-10"], [1, "placeholder", "col-9"], [1, "placeholder", "col-8"], [1, "placeholder", "col-11"]], template: function SkeletonPageComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
        \u0275\u0275element(2, "div", 2);
        \u0275\u0275elementStart(3, "div", 3);
        \u0275\u0275element(4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "div", 7)(8, "div", 8)(9, "div", 4);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(10, "ul");
        \u0275\u0275element(11, "li", 8)(12, "li", 7)(13, "li", 6)(14, "li", 5)(15, "li", 7)(16, "li", 9);
        \u0275\u0275elementEnd()();
      }
    } });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SkeletonPageComponent, { className: "SkeletonPageComponent", filePath: "src\\app\\components\\page\\skeleton-page\\skeleton-page.component.ts", lineNumber: 8 });
})();

// src/app/components/page/page.component.ts
function PageComponent_app_skeleton_page_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-skeleton-page");
  }
}
function PageComponent_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 5);
    \u0275\u0275pipe(1, "async");
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("innerHTML", (tmp_2_0 = \u0275\u0275pipeBind1(1, 1, ctx_r0.selectedPage$)) == null ? null : tmp_2_0.content, \u0275\u0275sanitizeHtml);
  }
}
var PageComponent = class _PageComponent {
  constructor(meta, pageService) {
    this.meta = meta;
    this.pageService = pageService;
    this.breadcrumb = {
      title: "Page",
      items: []
    };
    this.selectedPage$.subscribe((page) => {
      this.breadcrumb.items = [];
      this.breadcrumb.title = page.title;
      this.breadcrumb.items.push({ label: "Page", active: true }, { label: page.title, active: false });
      page?.meta_title && this.meta.updateTag({ property: "og:title", content: page?.meta_title });
      page?.meta_description && this.meta.updateTag({ property: "og:description", content: page?.meta_description });
    });
  }
  static {
    this.\u0275fac = function PageComponent_Factory(t) {
      return new (t || _PageComponent)(\u0275\u0275directiveInject(Meta), \u0275\u0275directiveInject(PageService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PageComponent, selectors: [["app-pages"]], decls: 6, vars: 3, consts: [["content", ""], [3, "breadcrumb"], [1, "section-b-space", "ckeditor-content"], [1, "container"], [4, "ngIf", "ngIfElse"], [3, "innerHTML"]], template: function PageComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275element(0, "app-breadcrumb", 1);
        \u0275\u0275elementStart(1, "section", 2)(2, "div", 3);
        \u0275\u0275template(3, PageComponent_app_skeleton_page_3_Template, 1, 0, "app-skeleton-page", 4)(4, PageComponent_ng_template_4_Template, 2, 3, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        const content_r2 = \u0275\u0275reference(5);
        \u0275\u0275property("breadcrumb", ctx.breadcrumb);
        \u0275\u0275advance(3);
        \u0275\u0275property("ngIf", ctx.pageService == null ? null : ctx.pageService.skeletonLoader)("ngIfElse", content_r2);
      }
    }, dependencies: [NgIf, BreadcrumbComponent, SkeletonPageComponent, AsyncPipe] });
  }
};
__decorate([
  Select(PageState.selectedPage)
], PageComponent.prototype, "selectedPage$", void 0);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PageComponent, { className: "PageComponent", filePath: "src\\app\\components\\page\\page.component.ts", lineNumber: 15 });
})();

// src/app/components/page/faq/faq.component.ts
function FaqComponent_section_1_app_skeleton_page_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-skeleton-page");
  }
}
function FaqComponent_section_1_ng_template_3_div_12_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20)(1, "p");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const faq_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(faq_r1.description);
  }
}
function FaqComponent_section_1_ng_template_3_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14)(1, "h2", 15)(2, "button", 16);
    \u0275\u0275text(3);
    \u0275\u0275element(4, "i", 17);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 18)(6, "div", 19);
    \u0275\u0275template(7, FaqComponent_section_1_ng_template_3_div_12_ng_template_7_Template, 3, 1, "ng-template");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const faq_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    \u0275\u0275property("collapsed", i_r2 !== 0);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", faq_r1.title, " ");
  }
}
function FaqComponent_section_1_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7)(1, "div", 8)(2, "div", 9)(3, "h2");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p");
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "div", 10)(10, "div", 11)(11, "div", 12);
    \u0275\u0275template(12, FaqComponent_section_1_ng_template_3_div_12_Template, 8, 2, "div", 13);
    \u0275\u0275pipe(13, "async");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    let tmp_6_0;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 4, "frequently_asked_questions"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 6, "you_can_find_out_more_searching"));
    \u0275\u0275advance(4);
    \u0275\u0275property("closeOthers", true);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", (tmp_6_0 = \u0275\u0275pipeBind1(13, 8, ctx_r2.faq$)) == null ? null : tmp_6_0.data);
  }
}
function FaqComponent_section_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 4)(1, "div", 5);
    \u0275\u0275template(2, FaqComponent_section_1_app_skeleton_page_2_Template, 1, 0, "app-skeleton-page", 6)(3, FaqComponent_section_1_ng_template_3_Template, 14, 10, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const content_r4 = \u0275\u0275reference(4);
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r2.pageService == null ? null : ctx_r2.pageService.skeletonLoader)("ngIfElse", content_r4);
  }
}
function FaqComponent_app_no_data_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-no-data", 21);
  }
  if (rf & 2) {
    \u0275\u0275classMap("no-data-added collection-no-data");
    \u0275\u0275property("image", "assets/svg/no-product.svg")("text", "no_faq_found")("description", "inform_you_that_the_faq__currently_unavailable");
  }
}
var FaqComponent = class _FaqComponent {
  constructor(store, pageService) {
    this.store = store;
    this.pageService = pageService;
    this.breadcrumb = {
      title: "FAQ's",
      items: [{ label: "FAQ's", active: true }]
    };
    this.pageService.skeletonLoader = true;
    this.store.dispatch(new GetFaqs()).subscribe({
      complete: () => {
        this.pageService.skeletonLoader = false;
      }
    });
  }
  static {
    this.\u0275fac = function FaqComponent_Factory(t) {
      return new (t || _FaqComponent)(\u0275\u0275directiveInject(Store), \u0275\u0275directiveInject(PageService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FaqComponent, selectors: [["app-faq"]], decls: 5, vars: 7, consts: [["content", ""], [3, "breadcrumb"], ["class", "faq-box-contain section-b-space", 4, "ngIf"], [3, "class", "image", "text", "description", 4, "ngIf"], [1, "faq-box-contain", "section-b-space"], [1, "container"], [4, "ngIf", "ngIfElse"], [1, "row"], [1, "col-xl-5"], [1, "faq-contain"], [1, "col-xl-7"], [1, "faq-accordion"], ["ngbAccordion", "", 1, "accordion", 3, "closeOthers"], ["ngbAccordionItem", "", "class", "accordion-item", 3, "collapsed", 4, "ngFor", "ngForOf"], ["ngbAccordionItem", "", 1, "accordion-item", 3, "collapsed"], ["ngbAccordionHeader", "", 1, "accordion-header"], ["type", "button", "ngbAccordionButton", "", 1, "accordion-button"], [1, "ri-arrow-down-s-line"], ["ngbAccordionCollapse", "", 1, "accordion-collapse", "collapse"], ["ngbAccordionBody", ""], [1, "accordion-body"], [3, "image", "text", "description"]], template: function FaqComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275element(0, "app-breadcrumb", 1);
        \u0275\u0275template(1, FaqComponent_section_1_Template, 5, 2, "section", 2);
        \u0275\u0275pipe(2, "async");
        \u0275\u0275template(3, FaqComponent_app_no_data_3_Template, 1, 5, "app-no-data", 3);
        \u0275\u0275pipe(4, "async");
      }
      if (rf & 2) {
        let tmp_1_0;
        let tmp_2_0;
        \u0275\u0275property("breadcrumb", ctx.breadcrumb);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", (tmp_1_0 = \u0275\u0275pipeBind1(2, 3, ctx.faq$)) == null ? null : tmp_1_0.data == null ? null : tmp_1_0.data.length);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ((tmp_2_0 = \u0275\u0275pipeBind1(4, 5, ctx.faq$)) == null ? null : tmp_2_0.data == null ? null : tmp_2_0.data.length) && (ctx.pageService == null ? null : ctx.pageService.skeletonLoader));
      }
    }, dependencies: [NgForOf, NgIf, BreadcrumbComponent, NgbAccordionButton, NgbAccordionDirective, NgbAccordionItem, NgbAccordionHeader, NgbAccordionBody, NgbAccordionCollapse, NoDataComponent, SkeletonPageComponent, AsyncPipe, TranslatePipe] });
  }
};
__decorate([
  Select(PageState.faq)
], FaqComponent.prototype, "faq$", void 0);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FaqComponent, { className: "FaqComponent", filePath: "src\\app\\components\\page\\faq\\faq.component.ts", lineNumber: 15 });
})();

// src/app/components/page/contact-us/contact-us.component.ts
function ContactUsComponent_div_93_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 63);
    \u0275\u0275element(1, "i", 64);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 1, "name_is_required"));
  }
}
function ContactUsComponent_div_104_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 63);
    \u0275\u0275element(1, "i", 64);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 1, "email_is_required"));
  }
}
function ContactUsComponent_div_105_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 63);
    \u0275\u0275element(1, "i", 64);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 1, "invalid_email"));
  }
}
function ContactUsComponent_div_115_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 63);
    \u0275\u0275element(1, "i", 64);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 1, "phone_number_is_required"));
  }
}
function ContactUsComponent_div_125_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 63);
    \u0275\u0275element(1, "i", 64);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 1, "subject_is_required"));
  }
}
function ContactUsComponent_div_135_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 63);
    \u0275\u0275element(1, "i", 64);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 1, "message_is_required"));
  }
}
var ContactUsComponent = class _ContactUsComponent {
  constructor(formBuilder, store, seoService) {
    this.formBuilder = formBuilder;
    this.store = store;
    this.seoService = seoService;
    this.breadcrumb = {
      title: "Contact Us",
      items: [{ label: "Contact Us", active: true }]
    };
    this.form = this.formBuilder.group({
      name: new FormControl("", [Validators.required]),
      email: new FormControl("", [Validators.required, Validators.email]),
      phone: new FormControl("", [Validators.required]),
      subject: new FormControl("", [Validators.required]),
      message: new FormControl("", [Validators.required])
    });
  }
  ngOnInit() {
    this.seoService.setSEOData({
      title: "Contact GROFAB \u2013 We're Here to Help You 24/7",
      description: "Get in touch with GROFAB customer support. We're available 24/7 to help with orders, products, and any questions you may have.",
      keywords: "contact us, customer support, help, GROFAB contact, customer service",
      canonicalUrl: "https://grofabwear.com /Contact-Us",
      url: "https://grofabwear.com /Contact-Us",
      type: "website",
      image: "https://grofabwear.com /assets/images/contact-us.jpg"
    });
  }
  filterSpecialCharacters(event, fieldName) {
    const input = event.target;
    const value = input.value;
    const filteredValue = value.replace(/[^a-zA-Z\s]/g, "");
    if (value !== filteredValue) {
      input.value = filteredValue;
      this.form.get(fieldName)?.setValue(filteredValue);
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
  filterPhoneNumber(event) {
    const input = event.target;
    const value = input.value;
    const filteredValue = value.replace(/\D/g, "").slice(0, 10);
    if (value !== filteredValue) {
      input.value = filteredValue;
      this.form.get("phone")?.setValue(filteredValue);
    }
  }
  submit() {
    this.form.markAllAsTouched();
    if (this.form.valid) {
      this.store.dispatch(new ContactUs(this.form.value)).subscribe({
        complete: () => {
          this.form.reset();
        }
      });
    }
  }
  static {
    this.\u0275fac = function ContactUsComponent_Factory(t) {
      return new (t || _ContactUsComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(Store), \u0275\u0275directiveInject(SeoService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ContactUsComponent, selectors: [["app-contact-us"]], decls: 142, vars: 42, consts: [[3, "breadcrumb"], [1, "contact-hero-section"], [1, "container-fluid-lg"], [1, "row"], [1, "col-12"], [1, "contact-hero-content"], [1, "hero-icon-wrapper"], [1, "ri-customer-service-2-line"], [1, "hero-title"], [1, "hero-subtitle"], [1, "hero-description"], [1, "contact-main-section", "section-lg-space"], [1, "row", "g-4"], [1, "col-lg-5"], [1, "contact-info-card"], [1, "card-header-modern"], [1, "section-title"], [1, "ri-information-line"], [1, "card-body-modern"], [1, "info-item"], [1, "info-icon-wrapper"], [1, "ri-building-line"], [1, "info-content"], [1, "info-label"], [1, "info-value"], [1, "ri-file-text-line"], [1, "ri-mail-line"], ["href", "mailto:info@grofabwear.com "], [1, "ri-map-pin-line"], [1, "ri-global-line"], ["href", "https://grofabwear.com ", "target", "_blank"], [1, "col-lg-7"], [1, "contact-form-card"], [1, "ri-message-3-line"], [1, "section-subtitle"], [3, "ngSubmit", "formGroup"], [1, "contact-form-fields"], [1, "form-field-wrapper"], ["for", "fullname", 1, "form-label-modern"], [1, "ri-user-line"], [1, "input-wrapper"], ["type", "text", "id", "fullname", "formControlName", "name", "pattern", "[a-zA-Z\\s]+", 1, "form-input-modern", 3, "input", "placeholder"], [1, "ri-user-3-fill", "input-icon"], ["class", "error-message", 4, "ngIf"], [1, "form-row"], ["for", "email", 1, "form-label-modern"], ["type", "email", "id", "email", "formControlName", "email", "pattern", "[a-zA-Z0-9._\\-+@]+", 1, "form-input-modern", 3, "input", "placeholder"], [1, "ri-mail-fill", "input-icon"], ["for", "phonenumber", 1, "form-label-modern"], [1, "ri-phone-line"], ["type", "tel", "id", "phonenumber", "formControlName", "phone", "maxlength", "10", "pattern", "[0-9]{10}", 1, "form-input-modern", 3, "input", "placeholder"], [1, "ri-smartphone-line", "input-icon"], ["for", "subject", 1, "form-label-modern"], [1, "ri-file-list-line"], ["type", "text", "id", "subject", "formControlName", "subject", 1, "form-input-modern", 3, "placeholder"], [1, "ri-file-text-line", "input-icon"], ["for", "message", 1, "form-label-modern"], [1, "ri-message-2-line"], ["id", "message", "rows", "6", "formControlName", "message", 1, "form-textarea-modern", 3, "placeholder"], [1, "ri-chat-2-fill", "input-icon", "textarea-icon"], [1, "form-submit-wrapper"], ["type", "submit", 1, "btn-submit", 3, "disabled"], [1, "ri-send-plane-fill"], [1, "error-message"], [1, "ri-error-warning-line"]], template: function ContactUsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275element(0, "app-breadcrumb", 0);
        \u0275\u0275elementStart(1, "section", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "div", 6);
        \u0275\u0275element(7, "i", 7);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "h1", 8);
        \u0275\u0275text(9, "Contact Us ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "p", 9);
        \u0275\u0275text(11, "We'd love to hear from you!");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "p", 10);
        \u0275\u0275text(13, " Get in touch with our customer support team for any questions, assistance, or feedback. We're here to help you 24/7. ");
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(14, "section", 11)(15, "div", 2)(16, "div", 12)(17, "div", 13)(18, "div", 14)(19, "div", 15)(20, "h3", 16);
        \u0275\u0275element(21, "i", 17);
        \u0275\u0275text(22, " Company Information1 ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(23, "div", 18)(24, "div", 19)(25, "div", 20);
        \u0275\u0275element(26, "i", 21);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(27, "div", 22)(28, "label", 23);
        \u0275\u0275text(29, "Company Name");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(30, "p", 24);
        \u0275\u0275text(31, "GROFAB TECHLABS PRIVATE LIMITED");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(32, "div", 19)(33, "div", 20);
        \u0275\u0275element(34, "i", 25);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(35, "div", 22)(36, "label", 23);
        \u0275\u0275text(37, "GST");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(38, "p", 24);
        \u0275\u0275text(39, "09AAKCM2049Q1ZS");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(40, "div", 19)(41, "div", 20);
        \u0275\u0275element(42, "i", 26);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(43, "div", 22)(44, "label", 23);
        \u0275\u0275text(45, "Email Address");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(46, "p", 24)(47, "a", 27);
        \u0275\u0275text(48, "info@grofabwear.com ");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(49, "div", 19)(50, "div", 20);
        \u0275\u0275element(51, "i", 28);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(52, "div", 22)(53, "label", 23);
        \u0275\u0275text(54, "Registered Address");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(55, "div", 24)(56, "div");
        \u0275\u0275text(57, "GROFAB TECHLABS PRIVATE LIMITED");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(58, "div");
        \u0275\u0275text(59, "PLOT NO. 931/1, PURVI BAZAR, NEAR TAGORE SCHOOL");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(60, "div");
        \u0275\u0275text(61, "AMBALA ROAD, Sarsawa, Saharanpur, Nakur");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(62, "div");
        \u0275\u0275text(63, "Uttar Pradesh, India, 247232");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(64, "div", 19)(65, "div", 20);
        \u0275\u0275element(66, "i", 29);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(67, "div", 22)(68, "label", 23);
        \u0275\u0275text(69, "Website");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(70, "p", 24)(71, "a", 30);
        \u0275\u0275text(72, "grofabwear.com ");
        \u0275\u0275elementEnd()()()()()()();
        \u0275\u0275elementStart(73, "div", 31)(74, "div", 32)(75, "div", 15)(76, "h3", 16);
        \u0275\u0275element(77, "i", 33);
        \u0275\u0275text(78, " Get In Touch ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(79, "p", 34);
        \u0275\u0275text(80, "Fill out the form below and we'll get back to you as soon as possible.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(81, "div", 18)(82, "form", 35);
        \u0275\u0275listener("ngSubmit", function ContactUsComponent_Template_form_ngSubmit_82_listener() {
          return ctx.submit();
        });
        \u0275\u0275elementStart(83, "div", 36)(84, "div", 37)(85, "label", 38);
        \u0275\u0275element(86, "i", 39);
        \u0275\u0275text(87);
        \u0275\u0275pipe(88, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(89, "div", 40)(90, "input", 41);
        \u0275\u0275pipe(91, "translate");
        \u0275\u0275listener("input", function ContactUsComponent_Template_input_input_90_listener($event) {
          return ctx.filterSpecialCharacters($event, "name");
        });
        \u0275\u0275elementEnd();
        \u0275\u0275element(92, "i", 42);
        \u0275\u0275elementEnd();
        \u0275\u0275template(93, ContactUsComponent_div_93_Template, 5, 3, "div", 43);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(94, "div", 44)(95, "div", 37)(96, "label", 45);
        \u0275\u0275element(97, "i", 26);
        \u0275\u0275text(98);
        \u0275\u0275pipe(99, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(100, "div", 40)(101, "input", 46);
        \u0275\u0275pipe(102, "translate");
        \u0275\u0275listener("input", function ContactUsComponent_Template_input_input_101_listener($event) {
          return ctx.filterEmailCharacters($event);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275element(103, "i", 47);
        \u0275\u0275elementEnd();
        \u0275\u0275template(104, ContactUsComponent_div_104_Template, 5, 3, "div", 43)(105, ContactUsComponent_div_105_Template, 5, 3, "div", 43);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(106, "div", 37)(107, "label", 48);
        \u0275\u0275element(108, "i", 49);
        \u0275\u0275text(109);
        \u0275\u0275pipe(110, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(111, "div", 40)(112, "input", 50);
        \u0275\u0275pipe(113, "translate");
        \u0275\u0275listener("input", function ContactUsComponent_Template_input_input_112_listener($event) {
          return ctx.filterPhoneNumber($event);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275element(114, "i", 51);
        \u0275\u0275elementEnd();
        \u0275\u0275template(115, ContactUsComponent_div_115_Template, 5, 3, "div", 43);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(116, "div", 37)(117, "label", 52);
        \u0275\u0275element(118, "i", 53);
        \u0275\u0275text(119);
        \u0275\u0275pipe(120, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(121, "div", 40);
        \u0275\u0275element(122, "input", 54);
        \u0275\u0275pipe(123, "translate");
        \u0275\u0275element(124, "i", 55);
        \u0275\u0275elementEnd();
        \u0275\u0275template(125, ContactUsComponent_div_125_Template, 5, 3, "div", 43);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(126, "div", 37)(127, "label", 56);
        \u0275\u0275element(128, "i", 57);
        \u0275\u0275text(129);
        \u0275\u0275pipe(130, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(131, "div", 40);
        \u0275\u0275element(132, "textarea", 58);
        \u0275\u0275pipe(133, "translate");
        \u0275\u0275element(134, "i", 59);
        \u0275\u0275elementEnd();
        \u0275\u0275template(135, ContactUsComponent_div_135_Template, 5, 3, "div", 43);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(136, "div", 60)(137, "button", 61);
        \u0275\u0275element(138, "i", 62);
        \u0275\u0275elementStart(139, "span");
        \u0275\u0275text(140);
        \u0275\u0275pipe(141, "translate");
        \u0275\u0275elementEnd()()()()()()()()()();
      }
      if (rf & 2) {
        \u0275\u0275property("breadcrumb", ctx.breadcrumb);
        \u0275\u0275advance(82);
        \u0275\u0275property("formGroup", ctx.form);
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(88, 20, "full_name"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275propertyInterpolate("placeholder", \u0275\u0275pipeBind1(91, 22, "enter_full_name"));
        \u0275\u0275advance(3);
        \u0275\u0275property("ngIf", ctx.form.controls["name"].touched && (ctx.form.controls["name"].errors == null ? null : ctx.form.controls["name"].errors["required"]));
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(99, 24, "email_address"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275propertyInterpolate("placeholder", \u0275\u0275pipeBind1(102, 26, "enter_email_address"));
        \u0275\u0275advance(3);
        \u0275\u0275property("ngIf", ctx.form.controls["email"].touched && (ctx.form.controls["email"].errors == null ? null : ctx.form.controls["email"].errors["required"]));
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.form.controls["email"].touched && (ctx.form.controls["email"].errors == null ? null : ctx.form.controls["email"].errors["email"]));
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(110, 28, "phone_number"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275propertyInterpolate("placeholder", \u0275\u0275pipeBind1(113, 30, "enter_your_phone_number"));
        \u0275\u0275advance(3);
        \u0275\u0275property("ngIf", ctx.form.controls["phone"].touched && (ctx.form.controls["phone"].errors == null ? null : ctx.form.controls["phone"].errors["required"]));
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(120, 32, "subject"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275propertyInterpolate("placeholder", \u0275\u0275pipeBind1(123, 34, "enter_subject"));
        \u0275\u0275advance(3);
        \u0275\u0275property("ngIf", ctx.form.controls["subject"].touched && (ctx.form.controls["subject"].errors == null ? null : ctx.form.controls["subject"].errors["required"]));
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(130, 36, "message"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275propertyInterpolate("placeholder", \u0275\u0275pipeBind1(133, 38, "enter_your_message"));
        \u0275\u0275advance(3);
        \u0275\u0275property("ngIf", ctx.form.controls["message"].touched && (ctx.form.controls["message"].errors == null ? null : ctx.form.controls["message"].errors["required"]));
        \u0275\u0275advance(2);
        \u0275\u0275property("disabled", ctx.form.invalid);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(141, 40, "send_message"));
      }
    }, dependencies: [NgIf, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, MaxLengthValidator, PatternValidator, FormGroupDirective, FormControlName, BreadcrumbComponent, TranslatePipe], styles: ["\n\n.contact-hero-section[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #f8f9fa 0%,\n      #e9ecef 100%);\n  padding: 80px 0 60px;\n  margin-bottom: 60px;\n}\n.contact-hero-section[_ngcontent-%COMP%]   .contact-hero-content[_ngcontent-%COMP%] {\n  text-align: center;\n  max-width: 900px;\n  margin: 0 auto;\n}\n.contact-hero-section[_ngcontent-%COMP%]   .contact-hero-content[_ngcontent-%COMP%]   .hero-icon-wrapper[_ngcontent-%COMP%] {\n  width: 100px;\n  height: 100px;\n  border-radius: 20px;\n  background:\n    linear-gradient(\n      135deg,\n      #EA5A26 0%,\n      #ff7a4a 100%);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: white;\n  font-size: 50px;\n  margin: 0 auto 30px;\n  box-shadow: 0 8px 25px rgba(234, 90, 38, 0.3);\n}\n.contact-hero-section[_ngcontent-%COMP%]   .contact-hero-content[_ngcontent-%COMP%]   .hero-title[_ngcontent-%COMP%] {\n  color: #222;\n  font-weight: 700;\n  font-size: 48px;\n  margin-bottom: 15px;\n  line-height: 1.2;\n}\n.contact-hero-section[_ngcontent-%COMP%]   .contact-hero-content[_ngcontent-%COMP%]   .hero-subtitle[_ngcontent-%COMP%] {\n  color: #EA5A26;\n  font-size: 24px;\n  font-weight: 600;\n  margin-bottom: 25px;\n}\n.contact-hero-section[_ngcontent-%COMP%]   .contact-hero-content[_ngcontent-%COMP%]   .hero-description[_ngcontent-%COMP%] {\n  color: #6c757d;\n  font-size: 18px;\n  line-height: 1.8;\n  margin: 0;\n  max-width: 800px;\n  margin-left: auto;\n  margin-right: auto;\n}\n.contact-main-section[_ngcontent-%COMP%]   .contact-info-card[_ngcontent-%COMP%], .contact-main-section[_ngcontent-%COMP%]   .contact-form-card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 20px;\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);\n  overflow: hidden;\n  height: 100%;\n}\n.contact-main-section[_ngcontent-%COMP%]   .contact-info-card[_ngcontent-%COMP%]   .card-header-modern[_ngcontent-%COMP%], .contact-main-section[_ngcontent-%COMP%]   .contact-form-card[_ngcontent-%COMP%]   .card-header-modern[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #f8f9fa 0%,\n      #e9ecef 100%);\n  padding: 25px 30px;\n  border-bottom: 1px solid #e9ecef;\n}\n.contact-main-section[_ngcontent-%COMP%]   .contact-info-card[_ngcontent-%COMP%]   .card-header-modern[_ngcontent-%COMP%]   .section-title[_ngcontent-%COMP%], .contact-main-section[_ngcontent-%COMP%]   .contact-form-card[_ngcontent-%COMP%]   .card-header-modern[_ngcontent-%COMP%]   .section-title[_ngcontent-%COMP%] {\n  color: #222;\n  font-weight: 700;\n  font-size: 24px;\n  margin: 0 0 10px 0;\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.contact-main-section[_ngcontent-%COMP%]   .contact-info-card[_ngcontent-%COMP%]   .card-header-modern[_ngcontent-%COMP%]   .section-title[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], .contact-main-section[_ngcontent-%COMP%]   .contact-form-card[_ngcontent-%COMP%]   .card-header-modern[_ngcontent-%COMP%]   .section-title[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #EA5A26;\n  font-size: 28px;\n}\n.contact-main-section[_ngcontent-%COMP%]   .contact-info-card[_ngcontent-%COMP%]   .card-header-modern[_ngcontent-%COMP%]   .section-subtitle[_ngcontent-%COMP%], .contact-main-section[_ngcontent-%COMP%]   .contact-form-card[_ngcontent-%COMP%]   .card-header-modern[_ngcontent-%COMP%]   .section-subtitle[_ngcontent-%COMP%] {\n  color: #6c757d;\n  font-size: 15px;\n  margin: 0;\n  line-height: 1.6;\n}\n.contact-main-section[_ngcontent-%COMP%]   .contact-info-card[_ngcontent-%COMP%]   .card-body-modern[_ngcontent-%COMP%], .contact-main-section[_ngcontent-%COMP%]   .contact-form-card[_ngcontent-%COMP%]   .card-body-modern[_ngcontent-%COMP%] {\n  padding: 30px;\n}\n.contact-main-section[_ngcontent-%COMP%]   .contact-info-card[_ngcontent-%COMP%]   .info-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 15px;\n  padding: 20px 0;\n  border-bottom: 1px solid #f0f0f0;\n}\n.contact-main-section[_ngcontent-%COMP%]   .contact-info-card[_ngcontent-%COMP%]   .info-item[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n  padding-bottom: 0;\n}\n.contact-main-section[_ngcontent-%COMP%]   .contact-info-card[_ngcontent-%COMP%]   .info-item[_ngcontent-%COMP%]:first-child {\n  padding-top: 0;\n}\n.contact-main-section[_ngcontent-%COMP%]   .contact-info-card[_ngcontent-%COMP%]   .info-item[_ngcontent-%COMP%]   .info-icon-wrapper[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 50px;\n  border-radius: 12px;\n  background: rgba(234, 90, 38, 0.1);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #EA5A26;\n  font-size: 24px;\n  flex-shrink: 0;\n}\n.contact-main-section[_ngcontent-%COMP%]   .contact-info-card[_ngcontent-%COMP%]   .info-item[_ngcontent-%COMP%]   .info-content[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.contact-main-section[_ngcontent-%COMP%]   .contact-info-card[_ngcontent-%COMP%]   .info-item[_ngcontent-%COMP%]   .info-content[_ngcontent-%COMP%]   .info-label[_ngcontent-%COMP%] {\n  display: block;\n  color: #6c757d;\n  font-size: 13px;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spaGSTg: 0.5px;\n  margin-bottom: 8px;\n}\n.contact-main-section[_ngcontent-%COMP%]   .contact-info-card[_ngcontent-%COMP%]   .info-item[_ngcontent-%COMP%]   .info-content[_ngcontent-%COMP%]   .info-value[_ngcontent-%COMP%] {\n  color: #222;\n  font-size: 15px;\n  font-weight: 500;\n  margin: 0;\n  line-height: 1.6;\n}\n.contact-main-section[_ngcontent-%COMP%]   .contact-info-card[_ngcontent-%COMP%]   .info-item[_ngcontent-%COMP%]   .info-content[_ngcontent-%COMP%]   .info-value[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #EA5A26;\n  text-decoration: none;\n  transition: all 0.3s ease;\n}\n.contact-main-section[_ngcontent-%COMP%]   .contact-info-card[_ngcontent-%COMP%]   .info-item[_ngcontent-%COMP%]   .info-content[_ngcontent-%COMP%]   .info-value[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #d4491f;\n  text-decoration: underline;\n}\n.contact-main-section[_ngcontent-%COMP%]   .contact-form-card[_ngcontent-%COMP%]   .contact-form-fields[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 25px;\n}\n.contact-main-section[_ngcontent-%COMP%]   .contact-form-card[_ngcontent-%COMP%]   .contact-form-fields[_ngcontent-%COMP%]   .form-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 20px;\n}\n.contact-main-section[_ngcontent-%COMP%]   .contact-form-card[_ngcontent-%COMP%]   .contact-form-fields[_ngcontent-%COMP%]   .form-field-wrapper[_ngcontent-%COMP%]   .form-label-modern[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  color: #222;\n  font-weight: 600;\n  font-size: 14px;\n  margin-bottom: 10px;\n  text-transform: capitalize;\n}\n.contact-main-section[_ngcontent-%COMP%]   .contact-form-card[_ngcontent-%COMP%]   .contact-form-fields[_ngcontent-%COMP%]   .form-field-wrapper[_ngcontent-%COMP%]   .form-label-modern[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #EA5A26;\n  font-size: 18px;\n}\n.contact-main-section[_ngcontent-%COMP%]   .contact-form-card[_ngcontent-%COMP%]   .contact-form-fields[_ngcontent-%COMP%]   .form-field-wrapper[_ngcontent-%COMP%]   .input-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n}\n.contact-main-section[_ngcontent-%COMP%]   .contact-form-card[_ngcontent-%COMP%]   .contact-form-fields[_ngcontent-%COMP%]   .form-field-wrapper[_ngcontent-%COMP%]   .input-wrapper[_ngcontent-%COMP%]   .form-input-modern[_ngcontent-%COMP%], .contact-main-section[_ngcontent-%COMP%]   .contact-form-card[_ngcontent-%COMP%]   .contact-form-fields[_ngcontent-%COMP%]   .form-field-wrapper[_ngcontent-%COMP%]   .input-wrapper[_ngcontent-%COMP%]   .form-textarea-modern[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 14px 45px 14px 15px;\n  border: 2px solid #e9ecef;\n  border-radius: 10px;\n  font-size: 15px;\n  color: #222;\n  background: white;\n  transition: all 0.3s ease;\n}\n.contact-main-section[_ngcontent-%COMP%]   .contact-form-card[_ngcontent-%COMP%]   .contact-form-fields[_ngcontent-%COMP%]   .form-field-wrapper[_ngcontent-%COMP%]   .input-wrapper[_ngcontent-%COMP%]   .form-input-modern[_ngcontent-%COMP%]:focus, .contact-main-section[_ngcontent-%COMP%]   .contact-form-card[_ngcontent-%COMP%]   .contact-form-fields[_ngcontent-%COMP%]   .form-field-wrapper[_ngcontent-%COMP%]   .input-wrapper[_ngcontent-%COMP%]   .form-textarea-modern[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #EA5A26;\n  box-shadow: 0 0 0 3px rgba(234, 90, 38, 0.1);\n}\n.contact-main-section[_ngcontent-%COMP%]   .contact-form-card[_ngcontent-%COMP%]   .contact-form-fields[_ngcontent-%COMP%]   .form-field-wrapper[_ngcontent-%COMP%]   .input-wrapper[_ngcontent-%COMP%]   .form-input-modern[_ngcontent-%COMP%]::placeholder, .contact-main-section[_ngcontent-%COMP%]   .contact-form-card[_ngcontent-%COMP%]   .contact-form-fields[_ngcontent-%COMP%]   .form-field-wrapper[_ngcontent-%COMP%]   .input-wrapper[_ngcontent-%COMP%]   .form-textarea-modern[_ngcontent-%COMP%]::placeholder {\n  color: #adb5bd;\n}\n.contact-main-section[_ngcontent-%COMP%]   .contact-form-card[_ngcontent-%COMP%]   .contact-form-fields[_ngcontent-%COMP%]   .form-field-wrapper[_ngcontent-%COMP%]   .input-wrapper[_ngcontent-%COMP%]   .form-textarea-modern[_ngcontent-%COMP%] {\n  min-height: 150px;\n  resize: vertical;\n  padding-bottom: 14px;\n}\n.contact-main-section[_ngcontent-%COMP%]   .contact-form-card[_ngcontent-%COMP%]   .contact-form-fields[_ngcontent-%COMP%]   .form-field-wrapper[_ngcontent-%COMP%]   .input-wrapper[_ngcontent-%COMP%]   .input-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 15px;\n  top: 50%;\n  transform: translateY(-50%);\n  color: #6c757d;\n  font-size: 20px;\n  pointer-events: none;\n}\n.contact-main-section[_ngcontent-%COMP%]   .contact-form-card[_ngcontent-%COMP%]   .contact-form-fields[_ngcontent-%COMP%]   .form-field-wrapper[_ngcontent-%COMP%]   .input-wrapper[_ngcontent-%COMP%]   .input-icon.textarea-icon[_ngcontent-%COMP%] {\n  top: 20px;\n  transform: none;\n}\n.contact-main-section[_ngcontent-%COMP%]   .contact-form-card[_ngcontent-%COMP%]   .contact-form-fields[_ngcontent-%COMP%]   .form-field-wrapper[_ngcontent-%COMP%]   .error-message[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  color: #dc3545;\n  font-size: 13px;\n  font-weight: 500;\n  margin-top: 8px;\n}\n.contact-main-section[_ngcontent-%COMP%]   .contact-form-card[_ngcontent-%COMP%]   .contact-form-fields[_ngcontent-%COMP%]   .form-field-wrapper[_ngcontent-%COMP%]   .error-message[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.contact-main-section[_ngcontent-%COMP%]   .contact-form-card[_ngcontent-%COMP%]   .form-submit-wrapper[_ngcontent-%COMP%] {\n  margin-top: 30px;\n  display: flex;\n  justify-content: flex-end;\n}\n.contact-main-section[_ngcontent-%COMP%]   .contact-form-card[_ngcontent-%COMP%]   .form-submit-wrapper[_ngcontent-%COMP%]   .btn-submit[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 10px;\n  padding: 14px 32px;\n  background: #EA5A26;\n  color: white;\n  border: none;\n  border-radius: 10px;\n  font-weight: 600;\n  font-size: 16px;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  box-shadow: 0 4px 15px rgba(234, 90, 38, 0.3);\n}\n.contact-main-section[_ngcontent-%COMP%]   .contact-form-card[_ngcontent-%COMP%]   .form-submit-wrapper[_ngcontent-%COMP%]   .btn-submit[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n.contact-main-section[_ngcontent-%COMP%]   .contact-form-card[_ngcontent-%COMP%]   .form-submit-wrapper[_ngcontent-%COMP%]   .btn-submit[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #d4491f;\n  transform: translateY(-2px);\n  box-shadow: 0 6px 20px rgba(234, 90, 38, 0.4);\n}\n.contact-main-section[_ngcontent-%COMP%]   .contact-form-card[_ngcontent-%COMP%]   .form-submit-wrapper[_ngcontent-%COMP%]   .btn-submit[_ngcontent-%COMP%]:active:not(:disabled) {\n  transform: translateY(0);\n}\n.contact-main-section[_ngcontent-%COMP%]   .contact-form-card[_ngcontent-%COMP%]   .form-submit-wrapper[_ngcontent-%COMP%]   .btn-submit[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.contact-map-section[_ngcontent-%COMP%] {\n  padding: 60px 0;\n}\n.contact-map-section[_ngcontent-%COMP%]   .map-card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 20px;\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);\n  overflow: hidden;\n}\n.contact-map-section[_ngcontent-%COMP%]   .map-card[_ngcontent-%COMP%]   .map-header[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #f8f9fa 0%,\n      #e9ecef 100%);\n  padding: 25px 30px;\n  border-bottom: 1px solid #e9ecef;\n}\n.contact-map-section[_ngcontent-%COMP%]   .map-card[_ngcontent-%COMP%]   .map-header[_ngcontent-%COMP%]   .map-title[_ngcontent-%COMP%] {\n  color: #222;\n  font-weight: 700;\n  font-size: 24px;\n  margin: 0;\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.contact-map-section[_ngcontent-%COMP%]   .map-card[_ngcontent-%COMP%]   .map-header[_ngcontent-%COMP%]   .map-title[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #EA5A26;\n  font-size: 28px;\n}\n.contact-map-section[_ngcontent-%COMP%]   .map-card[_ngcontent-%COMP%]   .map-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  height: 500px;\n  overflow: hidden;\n}\n.contact-map-section[_ngcontent-%COMP%]   .map-card[_ngcontent-%COMP%]   .map-wrapper[_ngcontent-%COMP%]   .map-iframe[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  border: none;\n}\n@media (max-width: 992px) {\n  .contact-main-section[_ngcontent-%COMP%]   .contact-form-card[_ngcontent-%COMP%]   .contact-form-fields[_ngcontent-%COMP%]   .form-row[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 25px;\n  }\n}\n@media (max-width: 768px) {\n  .contact-hero-section[_ngcontent-%COMP%] {\n    padding: 60px 0 40px;\n  }\n  .contact-hero-section[_ngcontent-%COMP%]   .contact-hero-content[_ngcontent-%COMP%]   .hero-icon-wrapper[_ngcontent-%COMP%] {\n    width: 80px;\n    height: 80px;\n    font-size: 40px;\n    margin-bottom: 25px;\n  }\n  .contact-hero-section[_ngcontent-%COMP%]   .contact-hero-content[_ngcontent-%COMP%]   .hero-title[_ngcontent-%COMP%] {\n    font-size: 36px;\n  }\n  .contact-hero-section[_ngcontent-%COMP%]   .contact-hero-content[_ngcontent-%COMP%]   .hero-subtitle[_ngcontent-%COMP%] {\n    font-size: 20px;\n  }\n  .contact-hero-section[_ngcontent-%COMP%]   .contact-hero-content[_ngcontent-%COMP%]   .hero-description[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n  .contact-main-section[_ngcontent-%COMP%]   .contact-info-card[_ngcontent-%COMP%]   .card-header-modern[_ngcontent-%COMP%], .contact-main-section[_ngcontent-%COMP%]   .contact-form-card[_ngcontent-%COMP%]   .card-header-modern[_ngcontent-%COMP%] {\n    padding: 20px 25px;\n  }\n  .contact-main-section[_ngcontent-%COMP%]   .contact-info-card[_ngcontent-%COMP%]   .card-header-modern[_ngcontent-%COMP%]   .section-title[_ngcontent-%COMP%], .contact-main-section[_ngcontent-%COMP%]   .contact-form-card[_ngcontent-%COMP%]   .card-header-modern[_ngcontent-%COMP%]   .section-title[_ngcontent-%COMP%] {\n    font-size: 20px;\n  }\n  .contact-main-section[_ngcontent-%COMP%]   .contact-info-card[_ngcontent-%COMP%]   .card-header-modern[_ngcontent-%COMP%]   .section-title[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], .contact-main-section[_ngcontent-%COMP%]   .contact-form-card[_ngcontent-%COMP%]   .card-header-modern[_ngcontent-%COMP%]   .section-title[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    font-size: 24px;\n  }\n  .contact-main-section[_ngcontent-%COMP%]   .contact-info-card[_ngcontent-%COMP%]   .card-body-modern[_ngcontent-%COMP%], .contact-main-section[_ngcontent-%COMP%]   .contact-form-card[_ngcontent-%COMP%]   .card-body-modern[_ngcontent-%COMP%] {\n    padding: 25px 20px;\n  }\n  .contact-main-section[_ngcontent-%COMP%]   .contact-info-card[_ngcontent-%COMP%]   .info-item[_ngcontent-%COMP%] {\n    flex-direction: column;\n    text-align: center;\n    gap: 12px;\n    padding: 15px 0;\n  }\n  .contact-main-section[_ngcontent-%COMP%]   .contact-info-card[_ngcontent-%COMP%]   .info-item[_ngcontent-%COMP%]   .info-icon-wrapper[_ngcontent-%COMP%] {\n    margin: 0 auto;\n  }\n  .contact-main-section[_ngcontent-%COMP%]   .contact-form-card[_ngcontent-%COMP%]   .form-submit-wrapper[_ngcontent-%COMP%]   .btn-submit[_ngcontent-%COMP%] {\n    width: 100%;\n    justify-content: center;\n  }\n  .contact-map-section[_ngcontent-%COMP%] {\n    padding: 40px 0;\n  }\n  .contact-map-section[_ngcontent-%COMP%]   .map-card[_ngcontent-%COMP%]   .map-wrapper[_ngcontent-%COMP%] {\n    height: 400px;\n  }\n}\n@media (max-width: 576px) {\n  .contact-hero-section[_ngcontent-%COMP%] {\n    padding: 40px 0 30px;\n  }\n  .contact-hero-section[_ngcontent-%COMP%]   .contact-hero-content[_ngcontent-%COMP%]   .hero-icon-wrapper[_ngcontent-%COMP%] {\n    width: 70px;\n    height: 70px;\n    font-size: 35px;\n  }\n  .contact-hero-section[_ngcontent-%COMP%]   .contact-hero-content[_ngcontent-%COMP%]   .hero-title[_ngcontent-%COMP%] {\n    font-size: 28px;\n  }\n  .contact-hero-section[_ngcontent-%COMP%]   .contact-hero-content[_ngcontent-%COMP%]   .hero-subtitle[_ngcontent-%COMP%] {\n    font-size: 18px;\n  }\n  .contact-main-section[_ngcontent-%COMP%]   .contact-info-card[_ngcontent-%COMP%], .contact-main-section[_ngcontent-%COMP%]   .contact-form-card[_ngcontent-%COMP%] {\n    border-radius: 16px;\n  }\n  .contact-main-section[_ngcontent-%COMP%]   .contact-info-card[_ngcontent-%COMP%]   .card-header-modern[_ngcontent-%COMP%], .contact-main-section[_ngcontent-%COMP%]   .contact-form-card[_ngcontent-%COMP%]   .card-header-modern[_ngcontent-%COMP%] {\n    padding: 15px 20px;\n  }\n  .contact-main-section[_ngcontent-%COMP%]   .contact-info-card[_ngcontent-%COMP%]   .card-header-modern[_ngcontent-%COMP%]   .section-title[_ngcontent-%COMP%], .contact-main-section[_ngcontent-%COMP%]   .contact-form-card[_ngcontent-%COMP%]   .card-header-modern[_ngcontent-%COMP%]   .section-title[_ngcontent-%COMP%] {\n    font-size: 18px;\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 8px;\n  }\n  .contact-main-section[_ngcontent-%COMP%]   .contact-info-card[_ngcontent-%COMP%]   .card-body-modern[_ngcontent-%COMP%], .contact-main-section[_ngcontent-%COMP%]   .contact-form-card[_ngcontent-%COMP%]   .card-body-modern[_ngcontent-%COMP%] {\n    padding: 20px 15px;\n  }\n  .contact-main-section[_ngcontent-%COMP%]   .contact-form-card[_ngcontent-%COMP%]   .contact-form-fields[_ngcontent-%COMP%] {\n    gap: 20px;\n  }\n  .contact-main-section[_ngcontent-%COMP%]   .contact-form-card[_ngcontent-%COMP%]   .contact-form-fields[_ngcontent-%COMP%]   .form-field-wrapper[_ngcontent-%COMP%]   .form-label-modern[_ngcontent-%COMP%] {\n    font-size: 13px;\n  }\n  .contact-main-section[_ngcontent-%COMP%]   .contact-form-card[_ngcontent-%COMP%]   .contact-form-fields[_ngcontent-%COMP%]   .form-field-wrapper[_ngcontent-%COMP%]   .input-wrapper[_ngcontent-%COMP%]   .form-input-modern[_ngcontent-%COMP%], .contact-main-section[_ngcontent-%COMP%]   .contact-form-card[_ngcontent-%COMP%]   .contact-form-fields[_ngcontent-%COMP%]   .form-field-wrapper[_ngcontent-%COMP%]   .input-wrapper[_ngcontent-%COMP%]   .form-textarea-modern[_ngcontent-%COMP%] {\n    padding: 12px 40px 12px 12px;\n    font-size: 14px;\n  }\n  .contact-map-section[_ngcontent-%COMP%]   .map-card[_ngcontent-%COMP%] {\n    border-radius: 16px;\n  }\n  .contact-map-section[_ngcontent-%COMP%]   .map-card[_ngcontent-%COMP%]   .map-wrapper[_ngcontent-%COMP%] {\n    height: 300px;\n  }\n}\n/*# sourceMappingURL=contact-us.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ContactUsComponent, { className: "ContactUsComponent", filePath: "src\\app\\components\\page\\contact-us\\contact-us.component.ts", lineNumber: 13 });
})();

// src/app/components/page/offer/offer.component.ts
function OfferComponent_ng_container_1_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7)(1, "div", 8)(2, "div", 9)(3, "div", 10)(4, "div");
    \u0275\u0275element(5, "h5", 11);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(6, "div", 12);
    \u0275\u0275element(7, "p")(8, "p", 13)(9, "p", 14);
    \u0275\u0275elementEnd()()();
  }
}
function OfferComponent_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 3)(2, "div", 4)(3, "div", 5);
    \u0275\u0275template(4, OfferComponent_ng_container_1_div_4_Template, 10, 0, "div", 6);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", ctx_r0.skeletonItems);
  }
}
function OfferComponent_ng_template_2_div_3_a_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 20);
    \u0275\u0275listener("click", function OfferComponent_ng_template_2_div_3_a_13_Template_a_click_0_listener() {
      \u0275\u0275restoreView(_r2);
      const coupon_r3 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.copyFunction(coupon_r3.code));
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "copy_code"), " ");
  }
}
function OfferComponent_ng_template_2_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7)(1, "div", 8)(2, "div", 9)(3, "div", 10)(4, "div")(5, "h5", 11);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(7, "div", 12)(8, "p");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 17)(11, "h6", 18);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275template(13, OfferComponent_ng_template_2_div_3_a_13_Template, 3, 3, "a", 19);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const coupon_r3 = ctx.$implicit;
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(coupon_r3 == null ? null : coupon_r3.title);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(coupon_r3.description);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("#", coupon_r3 == null ? null : coupon_r3.code, "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", coupon_r3 == null ? null : coupon_r3.code);
  }
}
function OfferComponent_ng_template_2_app_no_data_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-no-data", 21);
  }
  if (rf & 2) {
    \u0275\u0275classMap("no-data-added collection-no-data");
    \u0275\u0275property("image", "assets/svg/no-product.svg")("text", "no_Offers_found")("description", "inform_you_that_the_currently_unavailable");
  }
}
function OfferComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15)(1, "div", 4)(2, "div", 5);
    \u0275\u0275template(3, OfferComponent_ng_template_2_div_3_Template, 14, 4, "div", 6);
    \u0275\u0275pipe(4, "async");
    \u0275\u0275template(5, OfferComponent_ng_template_2_app_no_data_5_Template, 1, 5, "app-no-data", 16);
    \u0275\u0275pipe(6, "async");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_2_0;
    let tmp_3_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", (tmp_2_0 = \u0275\u0275pipeBind1(4, 2, ctx_r0.coupon$)) == null ? null : tmp_2_0.data);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !((tmp_3_0 = \u0275\u0275pipeBind1(6, 4, ctx_r0.coupon$)) == null ? null : tmp_3_0.data == null ? null : tmp_3_0.data.length) && !ctx_r0.couponService.skeletonLoader);
  }
}
var OfferComponent = class _OfferComponent {
  constructor(store, couponService) {
    this.store = store;
    this.couponService = couponService;
    this.skeletonItems = Array.from({ length: 8 }, (_, index) => index);
    this.breadcrumb = {
      title: "Offer",
      items: [{ label: "Offer", active: true }]
    };
    this.store.dispatch(new GetCoupons({ status: 1 }));
  }
  copyFunction(txt) {
    navigator.clipboard.writeText(txt);
  }
  static {
    this.\u0275fac = function OfferComponent_Factory(t) {
      return new (t || _OfferComponent)(\u0275\u0275directiveInject(Store), \u0275\u0275directiveInject(CouponService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _OfferComponent, selectors: [["app-offer"]], decls: 4, vars: 3, consts: [["offerContent", ""], [3, "breadcrumb"], [4, "ngIf", "ngIfElse"], [1, "section-b-space", "section-t-space", "offer-section", "skeleton-offer"], [1, "container-fluid-lg"], [1, "row", "g-md-4", "g-3"], ["class", "col-xxl-3 col-lg-4 col-sm-6", 4, "ngFor", "ngForOf"], [1, "col-xxl-3", "col-lg-4", "col-sm-6"], [1, "coupon-box"], [1, "coupon-name"], [1, "card-name"], [1, "fw-semibold", "dark-text"], [1, "coupon-content"], [1, "long"], [1, "long", "long-s"], [1, "section-b-space", "section-t-space", "offer-section"], [3, "class", "image", "text", "description", 4, "ngIf"], [1, "coupon-apply"], [1, "coupon-code", "success-color"], ["href", "javascript:void(0)", "class", "btn theme-btn border-btn copy-btn mt-0", 3, "click", 4, "ngIf"], ["href", "javascript:void(0)", 1, "btn", "theme-btn", "border-btn", "copy-btn", "mt-0", 3, "click"], [3, "image", "text", "description"]], template: function OfferComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275element(0, "app-breadcrumb", 1);
        \u0275\u0275template(1, OfferComponent_ng_container_1_Template, 5, 1, "ng-container", 2)(2, OfferComponent_ng_template_2_Template, 7, 6, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
      }
      if (rf & 2) {
        const offerContent_r4 = \u0275\u0275reference(3);
        \u0275\u0275property("breadcrumb", ctx.breadcrumb);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.couponService == null ? null : ctx.couponService.skeletonLoader)("ngIfElse", offerContent_r4);
      }
    }, dependencies: [NgForOf, NgIf, BreadcrumbComponent, NoDataComponent, AsyncPipe, TranslatePipe] });
  }
};
__decorate([
  Select(CouponState.coupon)
], OfferComponent.prototype, "coupon$", void 0);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(OfferComponent, { className: "OfferComponent", filePath: "src\\app\\components\\page\\offer\\offer.component.ts", lineNumber: 15 });
})();

// src/app/components/page/about-us/about-us.component.ts
var AboutUsComponent = class _AboutUsComponent {
  constructor() {
    this.breadcrumb = {
      title: "About Us",
      items: [{ label: "About Us", active: true }]
    };
  }
  static {
    this.\u0275fac = function AboutUsComponent_Factory(t) {
      return new (t || _AboutUsComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AboutUsComponent, selectors: [["app-about-us"]], decls: 130, vars: 1, consts: [[3, "breadcrumb"], [1, "abt-split"], [1, "abt-split__left"], [1, "abt-split__label"], [1, "abt-split__title"], [1, "abt-split__right"], [1, "abt-split__text"], [1, "abt-split__numbers"], [1, "abt-split__num"], [1, "abt-values"], [1, "container-fluid-lg"], [1, "text-center"], [1, "abt-section-label"], [1, "abt-section-title"], [1, "abt-values__grid"], [1, "abt-value"], [1, "ri-award-line"], [1, "ri-truck-line"], [1, "ri-price-tag-3-line"], [1, "ri-shield-check-line"], [1, "ri-refresh-line"], [1, "ri-customer-service-2-line"], [1, "abt-info"], [1, "row", "justify-content-center"], [1, "col-lg-8"], [1, "abt-info__card"], [1, "abt-info__row"], [1, "abt-info__label"], [1, "abt-info__value"], ["href", "https://grofabwear.com"], ["href", "mailto:info@grofabwear.com"], [1, "abt-mission"], [1, "abt-mission__inner"], [1, "abt-section-label", "abt-section-label--light"], [1, "abt-mission__title"], [1, "abt-mission__desc"]], template: function AboutUsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275element(0, "app-breadcrumb", 0);
        \u0275\u0275elementStart(1, "section", 1)(2, "div", 2)(3, "span", 3);
        \u0275\u0275text(4, "Est. 2024");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "h1", 4);
        \u0275\u0275text(6, "We Don't Follow");
        \u0275\u0275element(7, "br");
        \u0275\u0275text(8, "Trends. We Set");
        \u0275\u0275element(9, "br");
        \u0275\u0275elementStart(10, "span");
        \u0275\u0275text(11, "Them.");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(12, "div", 5)(13, "p", 6);
        \u0275\u0275text(14, "GROFAB is a fashion-forward brand rooted in Indian heritage. We blend traditional craftsmanship with contemporary design to create clothing that makes you feel extraordinary \u2014 every single day.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "div", 7)(16, "div", 8)(17, "h3");
        \u0275\u0275text(18, "500+");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(19, "span");
        \u0275\u0275text(20, "Curated Styles");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(21, "div", 8)(22, "h3");
        \u0275\u0275text(23, "10K+");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(24, "span");
        \u0275\u0275text(25, "Happy Customers");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(26, "div", 8)(27, "h3");
        \u0275\u0275text(28, "50+");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(29, "span");
        \u0275\u0275text(30, "Cities Reached");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(31, "section", 9)(32, "div", 10)(33, "div", 11)(34, "span", 12);
        \u0275\u0275text(35, "Why GROFAB");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(36, "h2", 13);
        \u0275\u0275text(37, "What Sets Us Apart");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(38, "div", 14)(39, "div", 15);
        \u0275\u0275element(40, "i", 16);
        \u0275\u0275elementStart(41, "h4");
        \u0275\u0275text(42, "Premium Quality");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(43, "p");
        \u0275\u0275text(44, "Only the finest fabrics and trusted artisans make it into our collection.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(45, "div", 15);
        \u0275\u0275element(46, "i", 17);
        \u0275\u0275elementStart(47, "h4");
        \u0275\u0275text(48, "Pan-India Delivery");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(49, "p");
        \u0275\u0275text(50, "Fast, reliable shipping across India with real-time tracking.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(51, "div", 15);
        \u0275\u0275element(52, "i", 18);
        \u0275\u0275elementStart(53, "h4");
        \u0275\u0275text(54, "Honest Pricing");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(55, "p");
        \u0275\u0275text(56, "Premium fashion at fair prices \u2014 no hidden costs, no inflated MRPs.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(57, "div", 15);
        \u0275\u0275element(58, "i", 19);
        \u0275\u0275elementStart(59, "h4");
        \u0275\u0275text(60, "Secure Payments");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(61, "p");
        \u0275\u0275text(62, "100% secure checkout with all major payment methods supported.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(63, "div", 15);
        \u0275\u0275element(64, "i", 20);
        \u0275\u0275elementStart(65, "h4");
        \u0275\u0275text(66, "Easy Returns");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(67, "p");
        \u0275\u0275text(68, "7-day hassle-free return and exchange on all orders.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(69, "div", 15);
        \u0275\u0275element(70, "i", 21);
        \u0275\u0275elementStart(71, "h4");
        \u0275\u0275text(72, "Dedicated Support");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(73, "p");
        \u0275\u0275text(74, "Our team is here for you \u2014 before, during, and after your purchase.");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(75, "section", 22)(76, "div", 10)(77, "div", 23)(78, "div", 24)(79, "div", 11)(80, "span", 12);
        \u0275\u0275text(81, "Company Details");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(82, "h2", 13);
        \u0275\u0275text(83, "Legal & Contact Information");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(84, "div", 25)(85, "div", 26)(86, "span", 27);
        \u0275\u0275text(87, "Company Name");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(88, "span", 28);
        \u0275\u0275text(89, "GROFAB TECHLABS PRIVATE LIMITED");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(90, "div", 26)(91, "span", 27);
        \u0275\u0275text(92, "Website");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(93, "span", 28)(94, "a", 29);
        \u0275\u0275text(95, "grofabwear.com");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(96, "div", 26)(97, "span", 27);
        \u0275\u0275text(98, "Email");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(99, "span", 28)(100, "a", 30);
        \u0275\u0275text(101, "info@grofabwear.com");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(102, "div", 26)(103, "span", 27);
        \u0275\u0275text(104, "Phone");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(105, "span", 28);
        \u0275\u0275text(106, "+91 86796 07377");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(107, "div", 26)(108, "span", 27);
        \u0275\u0275text(109, "Registered Office");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(110, "span", 28);
        \u0275\u0275text(111, " PLOT NO. 931/1, PURVI BAZAR, NEAR TAGORE SCHOOL,");
        \u0275\u0275element(112, "br");
        \u0275\u0275text(113, " AMBALA ROAD, Sarsawa, Saharanpur, Nakur,");
        \u0275\u0275element(114, "br");
        \u0275\u0275text(115, " Uttar Pradesh, India, 247232 ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(116, "div", 26)(117, "span", 27);
        \u0275\u0275text(118, "CIN");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(119, "span", 28);
        \u0275\u0275text(120, "U46410UP2025PTC227819");
        \u0275\u0275elementEnd()()()()()()();
        \u0275\u0275elementStart(121, "section", 31)(122, "div", 10)(123, "div", 32)(124, "span", 33);
        \u0275\u0275text(125, "Our Mission");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(126, "h2", 34);
        \u0275\u0275text(127, "Empowering self-expression through premium, accessible fashion.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(128, "p", 35);
        \u0275\u0275text(129, "We strive to be India's most trusted ethnic fashion brand \u2014 combining heritage craftsmanship with modern convenience.");
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        \u0275\u0275property("breadcrumb", ctx.breadcrumb);
      }
    }, dependencies: [BreadcrumbComponent], styles: ['\n\n.abt-section-label[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-family: "Poppins", sans-serif;\n  font-size: 11px;\n  font-weight: 700;\n  color: #C9A054;\n  text-transform: uppercase;\n  letter-spacing: 2px;\n  margin-bottom: 10px;\n}\n.abt-section-label--light[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.5);\n}\n.abt-section-title[_ngcontent-%COMP%] {\n  font-family: "Poppins", sans-serif;\n  font-size: 28px;\n  font-weight: 700;\n  color: #1A2518;\n  margin-bottom: 20px;\n  letter-spacing: -0.3px;\n}\n@media (max-width: 575px) {\n  .abt-section-title[_ngcontent-%COMP%] {\n    font-size: 22px;\n  }\n}\n.abt-text[_ngcontent-%COMP%] {\n  font-family: "Poppins", sans-serif;\n  font-size: 14px;\n  color: #777;\n  line-height: 1.8;\n  margin-bottom: 14px;\n}\n.abt-split[_ngcontent-%COMP%] {\n  display: flex;\n  min-height: 420px;\n  padding-top: 0 !important;\n}\n@media (max-width: 991px) {\n  .abt-split[_ngcontent-%COMP%] {\n    flex-direction: column;\n    min-height: auto;\n  }\n}\n.abt-split__left[_ngcontent-%COMP%] {\n  width: 50%;\n  background: #1A2518;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  padding: 72px 64px;\n  position: relative;\n  overflow: hidden;\n}\n.abt-split__left[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  width: 400px;\n  height: 400px;\n  border: 1px solid rgba(201, 160, 84, 0.1);\n  border-radius: 50%;\n  bottom: -120px;\n  right: -100px;\n  pointer-events: none;\n}\n@media (max-width: 991px) {\n  .abt-split__left[_ngcontent-%COMP%] {\n    width: 100%;\n    padding: 48px 28px;\n  }\n}\n.abt-split__label[_ngcontent-%COMP%] {\n  font-family: "Poppins", sans-serif;\n  font-size: 11px;\n  font-weight: 700;\n  color: #C9A054;\n  text-transform: uppercase;\n  letter-spacing: 3px;\n  margin-bottom: 20px;\n}\n.abt-split__title[_ngcontent-%COMP%] {\n  font-family: "Poppins", sans-serif;\n  font-size: 42px;\n  font-weight: 800;\n  color: #fff;\n  line-height: 1.15;\n  letter-spacing: -0.5px;\n  position: relative;\n  z-index: 1;\n}\n.abt-split__title[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #C9A054;\n}\n@media (max-width: 575px) {\n  .abt-split__title[_ngcontent-%COMP%] {\n    font-size: 30px;\n  }\n}\n.abt-split__right[_ngcontent-%COMP%] {\n  width: 50%;\n  background: #faf9f6;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  padding: 72px 64px;\n}\n@media (max-width: 991px) {\n  .abt-split__right[_ngcontent-%COMP%] {\n    width: 100%;\n    padding: 40px 28px;\n  }\n}\n.abt-split__text[_ngcontent-%COMP%] {\n  font-family: "Poppins", sans-serif;\n  font-size: 15px;\n  color: #777;\n  line-height: 1.85;\n  margin-bottom: 36px;\n  max-width: 440px;\n}\n.abt-split__numbers[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 36px;\n}\n@media (max-width: 575px) {\n  .abt-split__numbers[_ngcontent-%COMP%] {\n    gap: 24px;\n  }\n}\n.abt-split__num[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-family: "Poppins", sans-serif;\n  font-size: 30px;\n  font-weight: 800;\n  color: #1A2518;\n  margin-bottom: 2px;\n  line-height: 1;\n}\n.abt-split__num[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-family: "Poppins", sans-serif;\n  font-size: 11px;\n  color: #aaa;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.abt-hero[_ngcontent-%COMP%] {\n  background: #1A2518;\n  padding: 80px 0;\n  text-align: center;\n}\n@media (max-width: 575px) {\n  .abt-hero[_ngcontent-%COMP%] {\n    padding: 50px 0;\n  }\n}\n.abt-hero__inner[_ngcontent-%COMP%] {\n  max-width: 680px;\n  margin: 0 auto;\n}\n.abt-hero__label[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-family: "Poppins", sans-serif;\n  font-size: 11px;\n  font-weight: 700;\n  color: #C9A054;\n  text-transform: uppercase;\n  letter-spacing: 3px;\n  margin-bottom: 20px;\n}\n.abt-hero__title[_ngcontent-%COMP%] {\n  font-family: "Poppins", sans-serif;\n  font-size: 40px;\n  font-weight: 700;\n  color: #fff;\n  line-height: 1.2;\n  margin-bottom: 20px;\n}\n@media (max-width: 575px) {\n  .abt-hero__title[_ngcontent-%COMP%] {\n    font-size: 28px;\n  }\n}\n.abt-hero__desc[_ngcontent-%COMP%] {\n  font-family: "Poppins", sans-serif;\n  font-size: 15px;\n  color: rgba(255, 255, 255, 0.5);\n  line-height: 1.7;\n  max-width: 520px;\n  margin: 0 auto;\n}\n.abt-story[_ngcontent-%COMP%] {\n  padding: 72px 0;\n}\n@media (max-width: 575px) {\n  .abt-story[_ngcontent-%COMP%] {\n    padding: 40px 0;\n  }\n}\n.abt-story__img-wrap[_ngcontent-%COMP%] {\n  border-radius: 12px;\n  overflow: hidden;\n  background: #f5f3ee;\n}\n.abt-story__img[_ngcontent-%COMP%] {\n  width: 100%;\n  display: block;\n}\n.abt-stats[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 32px;\n  margin-top: 28px;\n  padding-top: 24px;\n  border-top: 1px solid #f0ede8;\n}\n@media (max-width: 575px) {\n  .abt-stats[_ngcontent-%COMP%] {\n    gap: 20px;\n  }\n}\n.abt-stat__num[_ngcontent-%COMP%] {\n  font-family: "Poppins", sans-serif;\n  font-size: 28px;\n  font-weight: 700;\n  color: #1A2518;\n  margin-bottom: 2px;\n}\n.abt-stat__label[_ngcontent-%COMP%] {\n  font-family: "Poppins", sans-serif;\n  font-size: 12px;\n  color: #aaa;\n}\n.abt-values[_ngcontent-%COMP%] {\n  padding: 72px 0;\n  background: #faf9f6;\n}\n@media (max-width: 575px) {\n  .abt-values[_ngcontent-%COMP%] {\n    padding: 40px 0;\n  }\n}\n.abt-values__grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 20px;\n  margin-top: 40px;\n}\n@media (max-width: 991px) {\n  .abt-values__grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (max-width: 575px) {\n  .abt-values__grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.abt-value[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1px solid #eeebe5;\n  border-radius: 10px;\n  padding: 28px 24px;\n  transition: border-color 0.15s;\n}\n.abt-value[_ngcontent-%COMP%]:hover {\n  border-color: #C9A054;\n}\n.abt-value[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 24px;\n  color: #C9A054;\n  margin-bottom: 16px;\n  display: block;\n}\n.abt-value[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-family: "Poppins", sans-serif;\n  font-size: 15px;\n  font-weight: 700;\n  color: #1A2518;\n  margin-bottom: 8px;\n}\n.abt-value[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-family: "Poppins", sans-serif;\n  font-size: 13px;\n  color: #999;\n  line-height: 1.7;\n  margin: 0;\n}\n.abt-info[_ngcontent-%COMP%] {\n  padding: 72px 0;\n}\n@media (max-width: 575px) {\n  .abt-info[_ngcontent-%COMP%] {\n    padding: 40px 0;\n  }\n}\n.abt-info__card[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1px solid #eeebe5;\n  border-radius: 10px;\n  overflow: hidden;\n  margin-top: 32px;\n}\n.abt-info__row[_ngcontent-%COMP%] {\n  display: flex;\n  padding: 18px 28px;\n  border-bottom: 1px solid #f5f3ee;\n  gap: 16px;\n}\n.abt-info__row[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n@media (max-width: 575px) {\n  .abt-info__row[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 4px;\n    padding: 14px 18px;\n  }\n}\n.abt-info__label[_ngcontent-%COMP%] {\n  font-family: "Poppins", sans-serif;\n  font-size: 12px;\n  font-weight: 600;\n  color: #aaa;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  min-width: 180px;\n  flex-shrink: 0;\n  padding-top: 2px;\n}\n.abt-info__value[_ngcontent-%COMP%] {\n  font-family: "Poppins", sans-serif;\n  font-size: 14px;\n  color: #1A2518;\n  line-height: 1.6;\n}\n.abt-info__value[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #C9A054;\n  text-decoration: none;\n}\n.abt-info__value[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.abt-mission[_ngcontent-%COMP%] {\n  background: #1A2518;\n  padding: 72px 0;\n  text-align: center;\n}\n@media (max-width: 575px) {\n  .abt-mission[_ngcontent-%COMP%] {\n    padding: 48px 0;\n  }\n}\n.abt-mission__inner[_ngcontent-%COMP%] {\n  max-width: 640px;\n  margin: 0 auto;\n}\n.abt-mission__title[_ngcontent-%COMP%] {\n  font-family: "Poppins", sans-serif;\n  font-size: 26px;\n  font-weight: 700;\n  color: #fff;\n  line-height: 1.4;\n  margin-bottom: 16px;\n}\n@media (max-width: 575px) {\n  .abt-mission__title[_ngcontent-%COMP%] {\n    font-size: 20px;\n  }\n}\n.abt-mission__desc[_ngcontent-%COMP%] {\n  font-family: "Poppins", sans-serif;\n  font-size: 14px;\n  color: rgba(255, 255, 255, 0.45);\n  line-height: 1.7;\n  margin: 0;\n}\n/*# sourceMappingURL=about-us.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AboutUsComponent, { className: "AboutUsComponent", filePath: "src\\app\\components\\page\\about-us\\about-us.component.ts", lineNumber: 9 });
})();

// src/app/components/page/search/search.component.ts
var _c0 = (a0, a1, a2, a3) => ({ "full_border": a0, "product_img_bg": a1, "full_bg": a2, "product_border": a3 });
function SearchComponent_ng_container_26_app_skeleton_product_box_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-skeleton-product-box");
  }
}
function SearchComponent_ng_container_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, SearchComponent_ng_container_26_app_skeleton_product_box_1_Template, 1, 0, "app-skeleton-product-box", 18);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.skeletonItems);
  }
}
function SearchComponent_ng_template_27_div_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20)(1, "div", 21)(2, "div");
    \u0275\u0275element(3, "app-product-box", 22);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const product_r3 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275styleMap("horizontal");
    \u0275\u0275property("product", product_r3);
  }
}
function SearchComponent_ng_template_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, SearchComponent_ng_template_27_div_0_Template, 4, 3, "div", 19);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("ngForOf", ctx_r1.products);
  }
}
function SearchComponent_app_no_data_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-no-data", 23);
  }
  if (rf & 2) {
    \u0275\u0275classMap("no-data-added collection-no-data");
    \u0275\u0275property("image", "assets/svg/no-product.svg")("text", "Sorry Cant Find Products Looking")("description", "Please Check Misspelt Something Searching Other Way");
  }
}
var SearchComponent = class _SearchComponent {
  constructor(store, productService, route, router) {
    this.store = store;
    this.productService = productService;
    this.route = route;
    this.router = router;
    this.breadcrumb = {
      title: "Search",
      items: [{ label: "Search", active: true }]
    };
    this.search = new FormControl();
    this.totalItems = 0;
    this.gridClass = "row g-sm-4 g-3 row-cols-2 row-cols-md-3 cols-lg-4 row-cols-xxl-6 product-list-section";
    this.skeletonItems = Array.from({ length: 12 }, (_, index) => index);
    this.productSlider6ItemMargin = productSlider6ItemMargin;
    this.filter = {
      "page": 1,
      "paginate": 12,
      "status": 1,
      "search": ""
    };
    this.route.queryParams.subscribe((params) => {
      if (params["search"]) {
        this.filter["search"] = params["search"];
        this.search.patchValue(params["search"] ? params["search"] : "");
      }
      this.store.dispatch(new GetProducts(this.filter)).subscribe({
        next: (val) => {
          this.products = val.product.product.data;
        }
      });
    });
  }
  ngOnInit() {
    this.search.valueChanges.pipe(debounceTime(300), distinctUntilChanged()).subscribe((inputValue) => {
      if (inputValue.length == 0) {
        this.router.navigate([], {
          relativeTo: this.route,
          queryParams: {
            search: inputValue
          }
        });
        this.filter["search"] = inputValue;
      }
    });
    this.themeOption$.subscribe((option) => {
      if (option?.product?.product_box_variant === "digital") {
        this.gridClass = "row g-sm-4 g-3 row-custom-col-1 row-cols-1 row-cols-sm-2 cols-lg-4 row-cols-xxl-4 product-list-section";
      }
    });
  }
  searchProduct() {
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: {
        search: this.search.value
      }
    });
    this.filter["search"] = this.search.value;
  }
  static {
    this.\u0275fac = function SearchComponent_Factory(t) {
      return new (t || _SearchComponent)(\u0275\u0275directiveInject(Store), \u0275\u0275directiveInject(ProductService), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SearchComponent, selectors: [["app-search"]], decls: 30, vars: 32, consts: [["productContent", ""], [3, "breadcrumb"], [1, "search-section"], [1, "container-fluid-lg"], [1, "row"], [1, "col-xxl-6", "col-xl-8", "mx-auto"], [1, "title", "d-block", "text-center"], [1, "title-leaf"], [1, "icon-width"], [0, "xlink", "href", "../assets/svg/leaf.svg#leaf"], [1, "search-box"], [1, "input-group"], ["type", "text", 1, "form-control", 3, "formControl"], [3, "click", "type", "id", "spinner"], [1, "section-b-space"], [3, "ngClass"], [4, "ngIf", "ngIfElse"], [3, "class", "image", "text", "description", 4, "ngIf"], [4, "ngFor", "ngForOf"], ["class", "col", 4, "ngFor", "ngForOf"], [1, "col"], [1, "search-product", "product-wrapper"], [3, "product"], [3, "image", "text", "description"]], template: function SearchComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275element(0, "app-breadcrumb", 1);
        \u0275\u0275elementStart(1, "section", 2)(2, "div", 3)(3, "div", 4)(4, "div", 5)(5, "div", 6)(6, "h2");
        \u0275\u0275text(7);
        \u0275\u0275pipe(8, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "span", 7);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(10, "svg", 8);
        \u0275\u0275element(11, "use", 9);
        \u0275\u0275elementEnd()()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(12, "div", 10)(13, "div", 11);
        \u0275\u0275element(14, "input", 12);
        \u0275\u0275elementStart(15, "app-button", 13);
        \u0275\u0275listener("click", function SearchComponent_Template_app_button_click_15_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.searchProduct());
        });
        \u0275\u0275text(16);
        \u0275\u0275pipe(17, "translate");
        \u0275\u0275elementEnd()()()()()()();
        \u0275\u0275elementStart(18, "section", 14)(19, "div", 3)(20, "div", 15);
        \u0275\u0275pipe(21, "async");
        \u0275\u0275pipe(22, "async");
        \u0275\u0275pipe(23, "async");
        \u0275\u0275pipe(24, "async");
        \u0275\u0275elementStart(25, "div");
        \u0275\u0275template(26, SearchComponent_ng_container_26_Template, 2, 1, "ng-container", 16)(27, SearchComponent_ng_template_27_Template, 1, 1, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
        \u0275\u0275elementEnd()();
        \u0275\u0275template(29, SearchComponent_app_no_data_29_Template, 1, 5, "app-no-data", 17);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        let tmp_9_0;
        const productContent_r4 = \u0275\u0275reference(28);
        \u0275\u0275property("breadcrumb", ctx.breadcrumb);
        \u0275\u0275advance(7);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 15, "search_for_products"));
        \u0275\u0275advance(7);
        \u0275\u0275property("formControl", ctx.search);
        \u0275\u0275advance();
        \u0275\u0275classMap("btn theme-bg-color text-white m-0");
        \u0275\u0275property("type", "button")("id", "search-btn")("spinner", false);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(17, 17, "search"), " ");
        \u0275\u0275advance(4);
        \u0275\u0275property("ngClass", \u0275\u0275pureFunction4(27, _c0, (tmp_9_0 = \u0275\u0275pipeBind1(21, 19, ctx.themeOption$)) == null ? null : tmp_9_0.product == null ? null : tmp_9_0.product.full_border, (tmp_9_0 = \u0275\u0275pipeBind1(22, 21, ctx.themeOption$)) == null ? null : tmp_9_0.product == null ? null : tmp_9_0.product.image_bg, (tmp_9_0 = \u0275\u0275pipeBind1(23, 23, ctx.themeOption$)) == null ? null : tmp_9_0.product == null ? null : tmp_9_0.product.product_box_bg, (tmp_9_0 = \u0275\u0275pipeBind1(24, 25, ctx.themeOption$)) == null ? null : tmp_9_0.product == null ? null : tmp_9_0.product.product_box_border));
        \u0275\u0275advance(5);
        \u0275\u0275classMap(ctx.gridClass);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.productService.skeletonLoader)("ngIfElse", productContent_r4);
        \u0275\u0275advance(3);
        \u0275\u0275property("ngIf", !(ctx.products == null ? null : ctx.products.length) && !ctx.productService.skeletonLoader);
      }
    }, dependencies: [NgClass, NgForOf, NgIf, DefaultValueAccessor, NgControlStatus, FormControlDirective, BreadcrumbComponent, ButtonComponent, NoDataComponent, ProductBoxComponent, SkeletonProductBoxComponent, AsyncPipe, TranslatePipe] });
  }
};
__decorate([
  Select(ProductState.product)
], SearchComponent.prototype, "product$", void 0);
__decorate([
  Select(ThemeOptionState.themeOptions)
], SearchComponent.prototype, "themeOption$", void 0);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SearchComponent, { className: "SearchComponent", filePath: "src\\app\\components\\page\\search\\search.component.ts", lineNumber: 21 });
})();

// src/app/components/page/page-routing.module.ts
var routes = [
  {
    path: "page/about-us",
    component: AboutUsComponent
  },
  {
    path: "page/:slug",
    component: PageComponent,
    resolve: {
      data: PageResolver
    }
  },
  {
    path: "faq",
    component: FaqComponent
  },
  {
    path: "404",
    component: Error404Component
  },
  {
    path: "contact-us",
    component: ContactUsComponent
  },
  {
    path: "offers",
    component: OfferComponent
  },
  {
    path: "about-us",
    component: AboutUsComponent
  },
  {
    path: "search",
    component: SearchComponent
  }
];
var PagesRoutingModule = class _PagesRoutingModule {
  static {
    this.\u0275fac = function PagesRoutingModule_Factory(t) {
      return new (t || _PagesRoutingModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _PagesRoutingModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forChild(routes), RouterModule] });
  }
};

// src/app/components/page/page.module.ts
var PagesModule = class _PagesModule {
  static {
    this.\u0275fac = function PagesModule_Factory(t) {
      return new (t || _PagesModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _PagesModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [
      CommonModule,
      PagesRoutingModule,
      SharedModule,
      TranslateModule
    ] });
  }
};
export {
  PagesModule
};
//# sourceMappingURL=chunk-TR2C7XNY.js.map
