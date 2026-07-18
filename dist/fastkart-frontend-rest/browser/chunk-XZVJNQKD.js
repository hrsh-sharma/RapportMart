import {
  BlogModule,
  SkeletonBlogComponent
} from "./chunk-ZFGOKJO5.js";
import "./chunk-X2WTNKVX.js";
import {
  ShopModule
} from "./chunk-3R5SYHFC.js";
import {
  BrandState,
  GetBrands,
  GetStores,
  StoreState
} from "./chunk-HCC3NE3T.js";
import "./chunk-THFPXD6E.js";
import {
  AddToCompare,
  AddToWishlist,
  BlogService,
  BlogState,
  ButtonComponent,
  CarouselComponent,
  CarouselSlideDirective,
  CategoriesComponent,
  CurrencySymbolPipe,
  DeleteWishlist,
  GetBlogs,
  GetCategoryProducts,
  GetHomePage,
  GetProductByIds,
  ImageLinkComponent,
  NgbRating,
  NgbRatingConfig,
  NoDataComponent,
  ProductBoxComponent,
  ProductService,
  ProductState,
  SearchComponent,
  Select,
  SharedModule,
  SkeletonProductBoxComponent,
  Store,
  Subscription,
  ThemeOptionService,
  ThemeOptionState,
  ThemeState,
  TitleComponent,
  TranslateModule,
  TranslatePipe,
  UpdateProductBox,
  bannerSlider,
  categorySlider,
  categorySlider9,
  customOptionsItem3,
  customOptionsItem4,
  environment,
  productSlider,
  productSlider2,
  productSlider6Item,
  productSlider6ItemMargin,
  productSliderMargin,
  singleSlider
} from "./chunk-N3F36WZH.js";
import {
  SeoService
} from "./chunk-SEVD3V6P.js";
import {
  DefaultValueAccessor,
  FormControl,
  FormControlDirective,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
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
  NgStyle,
  Router,
  RouterLink,
  RouterModule,
  __decorate,
  __spreadProps,
  __spreadValues,
  forkJoin,
  ɵsetClassDebugInfo,
  ɵɵNgOnChangesFeature,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵclassMapInterpolate1,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinject,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpropertyInterpolate,
  ɵɵpropertyInterpolate1,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵpureFunction3,
  ɵɵpureFunction4,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeHtml,
  ɵɵsanitizeUrl,
  ɵɵstyleMap,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuery
} from "./chunk-K6HJRTD4.js";

// src/app/components/themes/widgets/home-banner/home-banner.component.ts
function HomeBannerComponent_div_0_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "div", 7)(2, "div", 8);
    \u0275\u0275element(3, "span", 9)(4, "span", 10)(5, "span", 11)(6, "span", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275element(7, "app-image-link", 13);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(7);
    \u0275\u0275property("image", ctx_r0.data == null ? null : ctx_r0.data.main_banner)("bgImage", true);
  }
}
function HomeBannerComponent_div_0_div_3_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16)(1, "div", 17)(2, "div", 8);
    \u0275\u0275element(3, "span", 9)(4, "span", 10)(5, "span", 11)(6, "span", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275element(7, "app-image-link", 13);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(7);
    \u0275\u0275property("image", ctx_r0.data == null ? null : ctx_r0.data.sub_banner_1)("bgImage", true);
  }
}
function HomeBannerComponent_div_0_div_3_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16)(1, "div", 17)(2, "div", 8);
    \u0275\u0275element(3, "span", 9)(4, "span", 10)(5, "span", 11)(6, "span", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275element(7, "app-image-link", 13);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(7);
    \u0275\u0275property("image", ctx_r0.data == null ? null : ctx_r0.data.sub_banner_2)("bgImage", true);
  }
}
function HomeBannerComponent_div_0_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14)(1, "div", 3);
    \u0275\u0275template(2, HomeBannerComponent_div_0_div_3_div_2_Template, 8, 2, "div", 15)(3, HomeBannerComponent_div_0_div_3_div_3_Template, 8, 2, "div", 15);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r0.data == null ? null : ctx_r0.data.sub_banner_1 == null ? null : ctx_r0.data.sub_banner_1.image_url);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.data == null ? null : ctx_r0.data.sub_banner_2 == null ? null : ctx_r0.data.sub_banner_2.image_url);
  }
}
function HomeBannerComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2)(1, "div", 3);
    \u0275\u0275template(2, HomeBannerComponent_div_0_div_2_Template, 8, 2, "div", 4)(3, HomeBannerComponent_div_0_div_3_Template, 4, 2, "div", 5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r0.data == null ? null : ctx_r0.data.main_banner == null ? null : ctx_r0.data.main_banner.image_url);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (ctx_r0.data == null ? null : ctx_r0.data.sub_banner_1 == null ? null : ctx_r0.data.sub_banner_1.image_url) && (ctx_r0.data == null ? null : ctx_r0.data.sub_banner_2 == null ? null : ctx_r0.data.sub_banner_2.image_url));
  }
}
function HomeBannerComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2)(1, "div", 3)(2, "div", 18)(3, "div", 19)(4, "div", 8);
    \u0275\u0275element(5, "span", 9)(6, "span", 10)(7, "span", 11)(8, "span", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 20);
    \u0275\u0275element(10, "app-image-link", 21);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "div", 22)(12, "div", 23)(13, "div", 8);
    \u0275\u0275element(14, "span", 9)(15, "span", 10)(16, "span", 11)(17, "span", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 20);
    \u0275\u0275element(19, "app-image-link", 21);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(20, "div", 24)(21, "div", 19)(22, "div", 8);
    \u0275\u0275element(23, "span", 9)(24, "span", 10)(25, "span", 11)(26, "span", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275element(27, "app-image-link", 21);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(10);
    \u0275\u0275property("image", ctx_r0.data == null ? null : ctx_r0.data.sub_banner_1)("bgImage", true);
    \u0275\u0275advance(9);
    \u0275\u0275property("image", ctx_r0.data == null ? null : ctx_r0.data.main_banner)("bgImage", true);
    \u0275\u0275advance(8);
    \u0275\u0275property("image", ctx_r0.data == null ? null : ctx_r0.data.sub_banner_2)("bgImage", true);
  }
}
function HomeBannerComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2)(1, "div", 3)(2, "div", 25)(3, "div", 26)(4, "div", 8);
    \u0275\u0275element(5, "span", 9)(6, "span", 10)(7, "span", 11)(8, "span", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275element(9, "app-image-link", 21);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 27)(11, "div", 28)(12, "div", 8);
    \u0275\u0275element(13, "span", 9)(14, "span", 10)(15, "span", 11)(16, "span", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275element(17, "app-image-link", 21);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(9);
    \u0275\u0275property("image", ctx_r0.data == null ? null : ctx_r0.data.main_banner)("bgImage", true);
    \u0275\u0275advance(8);
    \u0275\u0275property("image", ctx_r0.data == null ? null : ctx_r0.data.sub_banner_1)("bgImage", true);
  }
}
function HomeBannerComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2)(1, "div", 3)(2, "div", 29)(3, "div", 30)(4, "div", 8);
    \u0275\u0275element(5, "span", 9)(6, "span", 10)(7, "span", 11)(8, "span", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275element(9, "app-image-link", 21);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 31)(11, "div", 32)(12, "div", 20)(13, "div", 8);
    \u0275\u0275element(14, "span", 9)(15, "span", 10)(16, "span", 11)(17, "span", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275element(18, "app-image-link", 21);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(19, "div", 33)(20, "div", 34)(21, "div", 35)(22, "div", 36)(23, "div", 8);
    \u0275\u0275element(24, "span", 9)(25, "span", 10)(26, "span", 11)(27, "span", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275element(28, "app-image-link", 21);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "div", 35)(30, "div", 36)(31, "div", 8);
    \u0275\u0275element(32, "span", 9)(33, "span", 10)(34, "span", 11)(35, "span", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275element(36, "app-image-link", 21);
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(9);
    \u0275\u0275property("image", ctx_r0.data == null ? null : ctx_r0.data.main_banner)("bgImage", true);
    \u0275\u0275advance(9);
    \u0275\u0275property("image", ctx_r0.data == null ? null : ctx_r0.data.sub_banner_1)("bgImage", true);
    \u0275\u0275advance(10);
    \u0275\u0275property("image", ctx_r0.data == null ? null : ctx_r0.data.sub_banner_2)("bgImage", true);
    \u0275\u0275advance(8);
    \u0275\u0275property("image", ctx_r0.data == null ? null : ctx_r0.data.sub_banner_3)("bgImage", true);
  }
}
function HomeBannerComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 37)(1, "div", 38)(2, "div", 39)(3, "div", 40)(4, "div");
    \u0275\u0275element(5, "app-image-link", 21);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275property("image", ctx_r0.data == null ? null : ctx_r0.data.main_banner)("bgImage", true);
  }
}
function HomeBannerComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2)(1, "div", 3)(2, "div", 41)(3, "div", 8);
    \u0275\u0275element(4, "span", 9)(5, "span", 10)(6, "span", 11)(7, "span", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275element(8, "app-image-link", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 42)(10, "div", 8);
    \u0275\u0275element(11, "span", 9)(12, "span", 10)(13, "span", 11)(14, "span", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275element(15, "app-image-link", 21);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275classMap("home-contain furniture-contain-2");
    \u0275\u0275property("image", ctx_r0.data == null ? null : ctx_r0.data.main_banner)("bgImage", true);
    \u0275\u0275advance(7);
    \u0275\u0275classMap("home-contain h-100 home-furniture");
    \u0275\u0275property("image", ctx_r0.data == null ? null : ctx_r0.data.sub_banner_1)("bgImage", true);
  }
}
function HomeBannerComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 37)(1, "div", 3)(2, "div", 43)(3, "div", 7)(4, "div", 2)(5, "div", 8);
    \u0275\u0275element(6, "span", 9)(7, "span", 10)(8, "span", 11)(9, "span", 12);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(10, "app-image-link", 21);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(10);
    \u0275\u0275classMap("home-contain rounded-0 p-0");
    \u0275\u0275property("image", ctx_r0.data == null ? null : ctx_r0.data.main_banner)("bgImage", true);
  }
}
var HomeBannerComponent = class _HomeBannerComponent {
  constructor() {
    this.theme = "paris";
  }
  static {
    this.\u0275fac = function HomeBannerComponent_Factory(t) {
      return new (t || _HomeBannerComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HomeBannerComponent, selectors: [["app-theme-home-banner"]], inputs: { theme: "theme", data: "data" }, decls: 7, vars: 7, consts: [["class", "container-fluid-lg", 4, "ngIf"], ["class", "container-fluid p-0 ratio_30", 4, "ngIf"], [1, "container-fluid-lg"], [1, "row", "g-4"], ["class", "col-xl-8 ratio_65", 4, "ngIf"], ["class", "col-xl-4 ratio_65", 4, "ngIf"], [1, "col-xl-8", "ratio_65"], [1, "home-contain", "h-100", "skeleton-banner-xl"], [1, "skeleton-text-wrap"], [1, "placeholder", "col-7"], [1, "placeholder", "col-5"], [1, "placeholder", "col-4"], [1, "placeholder", "col-6"], [1, "b-cl", 3, "image", "bgImage"], [1, "col-xl-4", "ratio_65"], ["class", "col-xl-12 col-md-6 skeleton-banner-sm", 4, "ngIf"], [1, "col-xl-12", "col-md-6", "skeleton-banner-sm"], [1, "home-contain"], [1, "col-xxl-3", "col-lg-4", "col-sm-6", "ratio_180", "d-sm-block", "d-none", "b-top"], [1, "home-contain", "rounded", "skeleton-banner-vertical"], [1, "h-100"], [3, "image", "bgImage"], [1, "col-xxl-6", "col-lg-8", "order-xxl-0", "ratio_87"], [1, "home-contain", "rounded", "skeleton-banner-xl"], [1, "col-xxl-3", "col-xl-4", "col-sm-6", "ratio_180", "custom-ratio", "d-xxl-block", "d-lg-none", "d-sm-block", "d-none", "b-top"], [1, "col-xl-9", "col-lg-8"], [1, "home-contain", "h-100", "skeleton-banner-xl", "ratio_52"], [1, "col-xl-3", "col-lg-4", "d-lg-inline-block", "d-none", "ratio_156"], [1, "home-contain", "h-100", "skeleton-banner-vertical"], [1, "col-xxl-6", "col-md-8"], [1, "home-contain", "ratio_65", "h-100", "skeleton-banner-xl"], [1, "col-xxl-3", "col-md-4", "ratio_medium", "d-md-block", "d-none"], [1, "home-contain", "home-small", "h-100", "skeleton-banner-vertical"], [1, "col-xxl-3", "ratio_65", "d-xxl-block", "d-none"], [1, "row", "g-3"], [1, "col-xxl-12", "col-sm-6"], [1, "home-contain", "skeleton-banner-sm"], [1, "container-fluid", "p-0", "ratio_30"], [1, "row"], [1, "col-12"], [1, "slider-animate", "skeleton-banner-xl"], [1, "col-xl-9", "col-lg-8", "ratio_50_1", "skeleton-banner-xl", "b-left"], [1, "col-xl-3", "col-lg-4", "d-lg-inline-block", "d-none", "skeleton-banner-vertical"], [1, "col-12", "slider-animate"]], template: function HomeBannerComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, HomeBannerComponent_div_0_Template, 4, 2, "div", 0)(1, HomeBannerComponent_div_1_Template, 28, 6, "div", 0)(2, HomeBannerComponent_div_2_Template, 18, 4, "div", 0)(3, HomeBannerComponent_div_3_Template, 37, 8, "div", 0)(4, HomeBannerComponent_div_4_Template, 6, 2, "div", 1)(5, HomeBannerComponent_div_5_Template, 16, 8, "div", 0)(6, HomeBannerComponent_div_6_Template, 11, 4, "div", 1);
      }
      if (rf & 2) {
        \u0275\u0275property("ngIf", ctx.theme && ctx.theme == "paris");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.theme && ctx.theme == "tokyo");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.theme && ctx.theme == "osaka");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.theme && ctx.theme == "rome");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.theme && ctx.theme == "madrid");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.theme && ctx.theme == "berlin");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.theme && ctx.theme == "denver");
      }
    }, dependencies: [NgIf, ImageLinkComponent] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HomeBannerComponent, { className: "HomeBannerComponent", filePath: "src\\app\\components\\themes\\widgets\\home-banner\\home-banner.component.ts", lineNumber: 8 });
})();

// src/app/components/themes/widgets/banner/banner.component.ts
function BannerComponent_div_0_ng_container_3_ng_container_1_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 8)(1, "div", 9);
    \u0275\u0275element(2, "app-image-link", 10);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const banner_r1 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275classMap("banner-contain");
    \u0275\u0275property("image", banner_r1)("bgImage", false);
  }
}
function BannerComponent_div_0_ng_container_3_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, BannerComponent_div_0_ng_container_3_ng_container_1_ng_template_1_Template, 3, 4, "ng-template", 7);
    \u0275\u0275elementContainerEnd();
  }
}
function BannerComponent_div_0_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0, 7);
    \u0275\u0275template(1, BannerComponent_div_0_ng_container_3_ng_container_1_Template, 2, 0, "ng-container", 2);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const banner_r1 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", banner_r1 == null ? null : banner_r1.status);
  }
}
function BannerComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3)(1, "div", 4)(2, "owl-carousel-o", 5);
    \u0275\u0275template(3, BannerComponent_div_0_ng_container_3_Template, 2, 1, "ng-container", 6);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("options", ctx_r1.bannerSlider);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.banners);
  }
}
function BannerComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "div", 11);
    \u0275\u0275element(2, "app-image-link", 10);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classMap(ctx_r1.class);
    \u0275\u0275advance(2);
    \u0275\u0275classMap("banner-contain");
    \u0275\u0275property("image", ctx_r1.banners)("bgImage", false);
  }
}
function BannerComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275element(1, "app-image-link", 10);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275classMap("banner-contain");
    \u0275\u0275property("image", ctx_r1.banners)("bgImage", false);
  }
}
var BannerComponent = class _BannerComponent {
  constructor() {
    this.style = "horizontal";
    this.bannerSlider = bannerSlider;
  }
  static {
    this.\u0275fac = function BannerComponent_Factory(t) {
      return new (t || _BannerComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BannerComponent, selectors: [["app-theme-banner"]], inputs: { style: "style", class: "class", contentClass: "contentClass", banners: "banners" }, decls: 3, vars: 3, consts: [["class", "container-fluid-lg", 4, "ngIf"], [3, "class", 4, "ngIf"], [4, "ngIf"], [1, "container-fluid-lg"], [1, "banner-slider"], [3, "options"], ["carouselSlide", "", 4, "ngFor", "ngForOf"], ["carouselSlide", ""], ["href", "#"], [1, "banner-contain", "hover-effect"], [3, "image", "bgImage"], [1, "home-contain", "hover-effect"]], template: function BannerComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, BannerComponent_div_0_Template, 4, 2, "div", 0)(1, BannerComponent_div_1_Template, 3, 6, "div", 1)(2, BannerComponent_div_2_Template, 2, 4, "div", 2);
      }
      if (rf & 2) {
        \u0275\u0275property("ngIf", (ctx.banners == null ? null : ctx.banners.length) && ctx.style == "horizontal");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", (ctx.banners == null ? null : ctx.banners.image_url) && ctx.style == "vertical");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", (ctx.banners == null ? null : ctx.banners.image_url) && ctx.style == "full_width");
      }
    }, dependencies: [NgForOf, NgIf, CarouselComponent, CarouselSlideDirective, ImageLinkComponent] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BannerComponent, { className: "BannerComponent", filePath: "src\\app\\components\\themes\\widgets\\banner\\banner.component.ts", lineNumber: 9 });
})();

// src/app/components/themes/widgets/categories/categories.component.ts
var CategoriesComponent2 = class _CategoriesComponent {
  constructor() {
    this.categoryIds = [];
    this.style = "vertical";
    this.selectedCategory = new EventEmitter();
  }
  selectCategory(id) {
    this.selectedCategory.emit(id);
  }
  static {
    this.\u0275fac = function CategoriesComponent_Factory(t) {
      return new (t || _CategoriesComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CategoriesComponent, selectors: [["app-theme-categories"]], inputs: { categoryIds: "categoryIds", style: "style", title: "title", image: "image", theme: "theme", sliderOption: "sliderOption", selectedCategoryId: "selectedCategoryId" }, outputs: { selectedCategory: "selectedCategory" }, decls: 1, vars: 8, consts: [[3, "selectedCategory", "categoryIds", "image", "theme", "title", "sliderOption", "selectedCategoryId"]], template: function CategoriesComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "app-categories", 0);
        \u0275\u0275listener("selectedCategory", function CategoriesComponent_Template_app_categories_selectedCategory_0_listener($event) {
          return ctx.selectCategory($event);
        });
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275styleMap(ctx.style);
        \u0275\u0275property("categoryIds", ctx.categoryIds)("image", ctx.image)("theme", ctx.theme)("title", ctx.title)("sliderOption", ctx.sliderOption)("selectedCategoryId", ctx.selectedCategoryId);
      }
    }, dependencies: [CategoriesComponent] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CategoriesComponent2, { className: "CategoriesComponent", filePath: "src\\app\\components\\themes\\widgets\\categories\\categories.component.ts", lineNumber: 9 });
})();

// src/app/components/themes/widgets/product/product.component.ts
var _c0 = (a0, a1, a2, a3) => ({ "full_border": a0, "product_img_bg": a1, "full_bg": a2, "product_border": a3 });
var _c1 = (a0, a1, a2, a3) => [a0, a1, a2, a3];
function ProductComponent_ul_0_ng_container_1_li_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li");
    \u0275\u0275element(1, "app-skeleton-product-box");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275styleMap("vertical");
  }
}
function ProductComponent_ul_0_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, ProductComponent_ul_0_ng_container_1_li_1_Template, 2, 2, "li", 13);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r0.skeletonItems);
  }
}
function ProductComponent_ul_0_ng_template_2_li_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li");
    \u0275\u0275element(1, "app-product-box", 14);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const product_r2 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275styleMap("vertical");
    \u0275\u0275property("product", product_r2);
  }
}
function ProductComponent_ul_0_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ProductComponent_ul_0_ng_template_2_li_0_Template, 2, 3, "li", 13);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngForOf", ctx_r0.products);
  }
}
function ProductComponent_ul_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul", 11);
    \u0275\u0275template(1, ProductComponent_ul_0_ng_container_1_Template, 2, 1, "ng-container", 12)(2, ProductComponent_ul_0_ng_template_2_Template, 1, 1, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const productVertical_r3 = \u0275\u0275reference(3);
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.productService.skeletonLoader)("ngIfElse", productVertical_r3);
  }
}
function ProductComponent_div_1_ng_container_4_li_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li");
    \u0275\u0275element(1, "app-skeleton-product-box");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275styleMap("vertical");
  }
}
function ProductComponent_div_1_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, ProductComponent_div_1_ng_container_4_li_1_Template, 2, 2, "li", 13);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r0.skeletonItems);
  }
}
function ProductComponent_div_1_ng_template_5_li_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li");
    \u0275\u0275element(1, "app-product-box", 14);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const product_r4 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275styleMap("vertical");
    \u0275\u0275property("product", product_r4);
  }
}
function ProductComponent_div_1_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ProductComponent_div_1_ng_template_5_li_0_Template, 2, 3, "li", 13);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngForOf", ctx_r0.products);
  }
}
function ProductComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15)(1, "div", 16);
    \u0275\u0275element(2, "span", 17);
    \u0275\u0275elementStart(3, "ul", 18);
    \u0275\u0275template(4, ProductComponent_div_1_ng_container_4_Template, 2, 1, "ng-container", 12)(5, ProductComponent_div_1_ng_template_5_Template, 1, 1, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const productVerticalContent_r5 = \u0275\u0275reference(6);
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r0.productService.skeletonLoader)("ngIfElse", productVerticalContent_r5);
  }
}
function ProductComponent_div_2_ng_container_5_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275element(1, "app-skeleton-product-box");
    \u0275\u0275elementEnd();
  }
}
function ProductComponent_div_2_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 20);
    \u0275\u0275template(2, ProductComponent_div_2_ng_container_5_div_2_Template, 2, 0, "div", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r0.skeletonItems);
  }
}
function ProductComponent_div_2_ng_template_6_div_0_2_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25)(1, "div", 26);
    \u0275\u0275element(2, "app-product-box", 14);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const product_r6 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(2);
    \u0275\u0275styleMap("horizontal");
    \u0275\u0275classMap(ctx_r0.boxClass);
    \u0275\u0275property("product", product_r6);
  }
}
function ProductComponent_div_2_ng_template_6_div_0_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ProductComponent_div_2_ng_template_6_div_0_2_ng_template_0_Template, 3, 5, "ng-template", 24);
  }
}
function ProductComponent_div_2_ng_template_6_div_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22)(1, "owl-carousel-o", 23);
    \u0275\u0275template(2, ProductComponent_div_2_ng_template_6_div_0_2_Template, 1, 0, null, 13);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("options", ctx_r0.sliderOption);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r0.products);
  }
}
function ProductComponent_div_2_ng_template_6_ng_template_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div");
    \u0275\u0275element(2, "app-product-box", 14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const product_r7 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(2);
    \u0275\u0275styleMap("horizontal");
    \u0275\u0275classMap(ctx_r0.boxClass);
    \u0275\u0275property("product", product_r7);
  }
}
function ProductComponent_div_2_ng_template_6_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19);
    \u0275\u0275template(1, ProductComponent_div_2_ng_template_6_ng_template_1_ng_container_1_Template, 3, 5, "ng-container", 13);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction4(2, _c1, ctx_r0.showItem === 5 ? "row g-sm-4 g-3 row-cols-xl-5 row-cols-lg-4 row-cols-md-3 row-cols-2" : "", ctx_r0.showItem === 6 ? "row g-sm-4 g-3 row-cols-xl-6 row-cols-lg-5 row-cols-md-4 row-cols-2" : "", ctx_r0.showItem === 2 ? "row g-sm-4 g-3 row-cols-sm-2 row-cols-2" : "", ctx_r0.showItem === 4 ? "row g-sm-4 g-3 row-cols-xl-4 row-cols-lg-3 row-cols-md-3 row-cols-sm-2 row-cols-1" : ""));
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r0.products);
  }
}
function ProductComponent_div_2_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ProductComponent_div_2_ng_template_6_div_0_Template, 3, 2, "div", 21)(1, ProductComponent_div_2_ng_template_6_ng_template_1_Template, 2, 7, "ng-template", null, 3, \u0275\u0275templateRefExtractor);
  }
  if (rf & 2) {
    const productBox_r8 = \u0275\u0275reference(2);
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngIf", ctx_r0.slider)("ngIfElse", productBox_r8);
  }
}
function ProductComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19);
    \u0275\u0275pipe(1, "async");
    \u0275\u0275pipe(2, "async");
    \u0275\u0275pipe(3, "async");
    \u0275\u0275pipe(4, "async");
    \u0275\u0275template(5, ProductComponent_div_2_ng_container_5_Template, 3, 1, "ng-container", 12)(6, ProductComponent_div_2_ng_template_6_Template, 3, 2, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_3_0;
    const productContent_r9 = \u0275\u0275reference(7);
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classMap(!ctx_r0.productService.skeletonLoader ? ctx_r0.productStyle : "");
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction4(13, _c0, (tmp_3_0 = \u0275\u0275pipeBind1(1, 5, ctx_r0.themeOption$)) == null ? null : tmp_3_0.product == null ? null : tmp_3_0.product.full_border, (tmp_3_0 = \u0275\u0275pipeBind1(2, 7, ctx_r0.themeOption$)) == null ? null : tmp_3_0.product == null ? null : tmp_3_0.product.image_bg, (tmp_3_0 = \u0275\u0275pipeBind1(3, 9, ctx_r0.themeOption$)) == null ? null : tmp_3_0.product == null ? null : tmp_3_0.product.product_box_bg, (tmp_3_0 = \u0275\u0275pipeBind1(4, 11, ctx_r0.themeOption$)) == null ? null : tmp_3_0.product == null ? null : tmp_3_0.product.product_box_border));
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", ctx_r0.productService.skeletonLoader)("ngIfElse", productContent_r9);
  }
}
function ProductComponent_div_3_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div");
    \u0275\u0275element(2, "app-product-box", 14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const product_r10 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275styleMap("horizontal");
    \u0275\u0275classMap(ctx_r0.boxClass);
    \u0275\u0275property("product", product_r10);
  }
}
function ProductComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 27);
    \u0275\u0275template(1, ProductComponent_div_3_ng_container_1_Template, 3, 5, "ng-container", 13);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r0.products);
  }
}
function ProductComponent_div_4_div_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 30);
    \u0275\u0275element(2, "app-product-box", 14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const product_r11 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275property("product", product_r11);
  }
}
function ProductComponent_div_4_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 29);
    \u0275\u0275template(1, ProductComponent_div_4_div_1_ng_container_1_Template, 3, 1, "ng-container", 13);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r0.products);
  }
}
function ProductComponent_div_4_ng_template_2_1_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-product-box", 14);
  }
  if (rf & 2) {
    const product_r12 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("product", product_r12);
  }
}
function ProductComponent_div_4_ng_template_2_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ProductComponent_div_4_ng_template_2_1_ng_template_0_Template, 1, 1, "ng-template", 24);
  }
}
function ProductComponent_div_4_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "owl-carousel-o", 23);
    \u0275\u0275template(1, ProductComponent_div_4_ng_template_2_1_Template, 1, 0, null, 13);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("options", ctx_r0.sliderOption);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r0.products);
  }
}
function ProductComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275template(1, ProductComponent_div_4_div_1_Template, 2, 1, "div", 28)(2, ProductComponent_div_4_ng_template_2_Template, 2, 2, "ng-template", null, 4, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const sliderProduct_r13 = \u0275\u0275reference(3);
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.slider)("ngIfElse", sliderProduct_r13);
  }
}
function ProductComponent_app_no_data_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-no-data", 31);
  }
  if (rf & 2) {
    \u0275\u0275classMap("no-data-added");
    \u0275\u0275property("text", "no_product_found");
  }
}
var ProductComponent = class _ProductComponent {
  constructor(productService) {
    this.productService = productService;
    this.style = "vertical";
    this.productIds = [];
    this.productStyle = "";
    this.sliderOption = productSlider;
    this.products = [];
    this.skeletonItems = Array.from({ length: 6 }, (_, index) => index);
  }
  ngOnChanges() {
    if (Array.isArray(this.productIds) && this.productIds.length) {
      this.product$.subscribe((products) => {
        this.products = products.filter((product) => this.productIds?.includes(product.id));
      });
    }
  }
  ngOnInit() {
    this.themeOption$.subscribe((option) => {
      if (option?.product?.product_box_border || option?.product?.image_bg || option?.product?.product_box_bg) {
        this.sliderOption["margin"] = 15;
      }
    });
  }
  static {
    this.\u0275fac = function ProductComponent_Factory(t) {
      return new (t || _ProductComponent)(\u0275\u0275directiveInject(ProductService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProductComponent, selectors: [["app-theme-product"]], inputs: { style: "style", productIds: "productIds", boxClass: "boxClass", productStyle: "productStyle", layout: "layout", sliderOption: "sliderOption", slider: "slider", showItem: "showItem" }, features: [\u0275\u0275NgOnChangesFeature], decls: 6, vars: 6, consts: [["productVertical", ""], ["productVerticalContent", ""], ["productContent", ""], ["productBox", ""], ["sliderProduct", ""], ["class", "product-list border-0 p-0 sidebar-product d-flex", 4, "ngIf"], ["class", "best-selling-slider product-wrapper", 4, "ngIf"], [3, "class", "ngClass", 4, "ngIf"], ["class", "row row-cols-xxl-6 row-cols-xl-5 row-cols-lg-4 row-cols-sm-3 row-cols-2 g-sm-4 g-3 no-arrow", 4, "ngIf"], [4, "ngIf"], [3, "class", "text", 4, "ngIf"], [1, "product-list", "border-0", "p-0", "sidebar-product", "d-flex"], [4, "ngIf", "ngIfElse"], [4, "ngFor", "ngForOf"], [3, "product"], [1, "best-selling-slider", "product-wrapper"], [1, "position-relative"], [1, "border-effect"], [1, "product-list"], [3, "ngClass"], [1, "row", "row-cols-5", "m-0"], ["class", "product-box-slider", 4, "ngIf", "ngIfElse"], [1, "product-box-slider"], [3, "options"], ["carouselSlide", ""], [1, "row", "m-0"], [1, "col-12", "px-0"], [1, "row", "row-cols-xxl-6", "row-cols-xl-5", "row-cols-lg-4", "row-cols-sm-3", "row-cols-2", "g-sm-4", "g-3", "no-arrow"], ["class", "row g-4", 4, "ngIf", "ngIfElse"], [1, "row", "g-4"], [1, "col-xxl-3", "col-lg-4", "col-sm-6"], [3, "text"]], template: function ProductComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, ProductComponent_ul_0_Template, 4, 2, "ul", 5)(1, ProductComponent_div_1_Template, 7, 2, "div", 6)(2, ProductComponent_div_2_Template, 8, 18, "div", 7)(3, ProductComponent_div_3_Template, 2, 1, "div", 8)(4, ProductComponent_div_4_Template, 4, 2, "div", 9)(5, ProductComponent_app_no_data_5_Template, 1, 3, "app-no-data", 10);
      }
      if (rf & 2) {
        \u0275\u0275property("ngIf", ctx.style == "vertical" && (ctx.productService.skeletonLoader || (ctx.products == null ? null : ctx.products.length)));
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.style == "classic" && (ctx.productService.skeletonLoader || (ctx.products == null ? null : ctx.products.length)));
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.style == "horizontal" && (ctx.productService.skeletonLoader || (ctx.products == null ? null : ctx.products.length)));
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.style === "book-horizontal");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.style === "cairo");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !(ctx.products == null ? null : ctx.products.length));
      }
    }, dependencies: [NgClass, NgForOf, NgIf, CarouselComponent, CarouselSlideDirective, NoDataComponent, ProductBoxComponent, SkeletonProductBoxComponent, AsyncPipe], styles: ["\n\n.test[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100px;\n  background-color: aqua;\n  border-radius: 10px;\n}\n/*# sourceMappingURL=product.component.css.map */"] });
  }
};
__decorate([
  Select(ProductState.productByIds)
], ProductComponent.prototype, "product$", void 0);
__decorate([
  Select(ThemeOptionState.themeOptions)
], ProductComponent.prototype, "themeOption$", void 0);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProductComponent, { className: "ProductComponent", filePath: "src\\app\\components\\themes\\widgets\\product\\product.component.ts", lineNumber: 17 });
})();

// src/app/components/themes/widgets/newsletter/newsletter.component.ts
var _c02 = (a0) => ({ "background-image": a0 });
function NewsletterComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3)(1, "div", 4)(2, "div", 5)(3, "div", 3)(4, "div", 6)(5, "div", 7)(6, "div")(7, "h2");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "h4");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "form", 8)(12, "div", 9)(13, "div", 10);
    \u0275\u0275element(14, "input", 11);
    \u0275\u0275pipe(15, "translate");
    \u0275\u0275elementStart(16, "app-button", 12);
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "translate");
    \u0275\u0275elementEnd()()()()()()();
    \u0275\u0275elementStart(19, "div", 13)(20, "div", 14);
    \u0275\u0275element(21, "img", 15);
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngStyle", \u0275\u0275pureFunction1(14, _c02, "url(" + ctx_r0.storageURL + (ctx_r0.data == null ? null : ctx_r0.data.image_url) + ")"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r0.data == null ? null : ctx_r0.data.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.data == null ? null : ctx_r0.data.sub_title);
    \u0275\u0275advance(4);
    \u0275\u0275propertyInterpolate("placeholder", \u0275\u0275pipeBind1(15, 10, "enter_your_email"));
    \u0275\u0275advance(2);
    \u0275\u0275classMap("btn bg-white theme-color btn-md fw-500 submit-button");
    \u0275\u0275property("type", "submit")("spinner", true)("id", "subscribe_btn");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(18, 12, "subscribe"), " ");
  }
}
function NewsletterComponent_ng_template_2_div_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 29);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "invalid_email"), " ");
  }
}
function NewsletterComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 16)(1, "div", 17)(2, "div", 18)(3, "div", 3)(4, "div", 19)(5, "div", 20)(6, "h2");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "h5");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 21);
    \u0275\u0275element(11, "input", 22);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275element(13, "i", 23);
    \u0275\u0275elementStart(14, "app-button", 24);
    \u0275\u0275listener("click", function NewsletterComponent_ng_template_2_Template_app_button_click_14_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.submit());
    });
    \u0275\u0275elementStart(15, "span", 25);
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(18, "i", 26);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "div", 27);
    \u0275\u0275template(20, NewsletterComponent_ng_template_2_div_20_Template, 3, 3, "div", 28);
    \u0275\u0275elementEnd()()()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("ngStyle", \u0275\u0275pureFunction1(15, _c02, "url(" + ctx_r0.storageURL + (ctx_r0.data == null ? null : ctx_r0.data.image_url) + ")"));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r0.data == null ? null : ctx_r0.data.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.data == null ? null : ctx_r0.data.sub_title);
    \u0275\u0275advance(2);
    \u0275\u0275propertyInterpolate("placeholder", \u0275\u0275pipeBind1(12, 11, "enter_your_email"));
    \u0275\u0275property("formControl", ctx_r0.email);
    \u0275\u0275advance(3);
    \u0275\u0275classMap("sub-btn btn-animation");
    \u0275\u0275property("id", "subscribe")("spinner", true);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(17, 13, "subscribe"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r0.isSubmit && (ctx_r0.email.errors == null ? null : ctx_r0.email.errors["email"]));
  }
}
var NewsletterComponent = class _NewsletterComponent {
  constructor(store) {
    this.store = store;
    this.style = "basic";
    this.email = new FormControl("", [Validators.email]);
    this.isSubmit = false;
    this.storageURL = environment.storageURL;
  }
  submit() {
    this.isSubmit = true;
    if (this.email.valid) {
      this.store.dispatch(new Subscription({ email: this.email.value }));
      this.email.reset();
      this.isSubmit = false;
    }
  }
  static {
    this.\u0275fac = function NewsletterComponent_Factory(t) {
      return new (t || _NewsletterComponent)(\u0275\u0275directiveInject(Store));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NewsletterComponent, selectors: [["app-newsletter"]], inputs: { data: "data", style: "style" }, decls: 4, vars: 2, consts: [["basic", ""], [1, "container-fluid-lg"], ["class", "row", 4, "ngIf", "ngIfElse"], [1, "row"], [1, "col-12"], [1, "newsletter-box", "hover-effect", "bg-size", 3, "ngStyle"], [1, "col-xxl-8", "col-xl-7"], [1, "newsletter-detail", "p-center-left", "text-white"], [1, "row", "g-2"], [1, "col-sm-10", "col-12"], [1, "newsletter-form"], ["type", "email", "id", "email", 1, "form-control", 3, "placeholder"], [3, "type", "spinner", "id"], [1, "col-xxl-4", "col-xl-5", "d-xl-block", "d-none"], [1, "shape-box"], ["src", "assets/images/basket.png", "alt", "basket", 1, "img-fluid", "image-1"], [1, "newsletter-box", "newsletter-box-2", 3, "ngStyle"], [1, "newsletter-contain", "py-5"], [1, "container-fluid"], [1, "col-xxl-4", "col-lg-5", "col-md-7", "col-sm-9", "offset-xxl-2", "offset-md-1"], [1, "newsletter-detail"], [1, "input-box"], ["type", "email", 1, "form-control", 3, "placeholder", "formControl"], [1, "ri-mail-line", "arrow"], [3, "click", "id", "spinner"], [1, "d-sm-inline-block", "d-none"], [1, "ri-arrow-right-line", "icon"], [1, "input-box", "mt-1"], ["class", "invalid-feedback mt-1", 4, "ngIf"], [1, "invalid-feedback", "mt-1"]], template: function NewsletterComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 1);
        \u0275\u0275template(1, NewsletterComponent_div_1_Template, 22, 16, "div", 2)(2, NewsletterComponent_ng_template_2_Template, 21, 17, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        const basic_r3 = \u0275\u0275reference(3);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.style == "classic")("ngIfElse", basic_r3);
      }
    }, dependencies: [NgIf, NgStyle, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormControlDirective, NgForm, ButtonComponent, TranslatePipe] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NewsletterComponent, { className: "NewsletterComponent", filePath: "src\\app\\components\\themes\\widgets\\newsletter\\newsletter.component.ts", lineNumber: 14 });
})();

// src/app/components/themes/widgets/blog/blog.component.ts
var _c03 = (a0) => ["/blog/", a0];
var _c12 = (a0) => ({ "background-image": a0 });
function BlogComponent_ng_container_2_ng_container_1_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-skeleton-blog");
  }
}
function BlogComponent_ng_container_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0, 6);
    \u0275\u0275template(1, BlogComponent_ng_container_2_ng_container_1_ng_template_1_Template, 1, 0, "ng-template", 6);
    \u0275\u0275elementContainerEnd();
  }
}
function BlogComponent_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, BlogComponent_ng_container_2_ng_container_1_Template, 2, 0, "ng-container", 5);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r0.skeletonItems);
  }
}
function BlogComponent_ng_template_3_ng_container_0_ng_template_1_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13)(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 1, "Featured"));
  }
}
function BlogComponent_ng_template_3_ng_container_0_ng_template_1_p_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "p", 14);
  }
  if (rf & 2) {
    const blog_r2 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275property("innerHTML", blog_r2 == null ? null : blog_r2.description, \u0275\u0275sanitizeHtml);
  }
}
function BlogComponent_ng_template_3_ng_container_0_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "div", 7);
    \u0275\u0275template(2, BlogComponent_ng_template_3_ng_container_0_ng_template_1_div_2_Template, 4, 3, "div", 8);
    \u0275\u0275elementStart(3, "div", 9);
    \u0275\u0275element(4, "a", 10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "a", 11)(6, "h6");
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "h5");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(11, BlogComponent_ng_template_3_ng_container_0_ng_template_1_p_11_Template, 1, 1, "p", 12);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const blog_r2 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275classProp("sticky-blog-box", (blog_r2 == null ? null : blog_r2.is_sticky) === 1);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", blog_r2 == null ? null : blog_r2.is_featured);
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(12, _c03, blog_r2 == null ? null : blog_r2.slug))("ngStyle", \u0275\u0275pureFunction1(14, _c12, "url(" + (blog_r2.blog_thumbnail ? blog_r2 == null ? null : blog_r2.blog_thumbnail == null ? null : blog_r2.blog_thumbnail.original_url : "assets/images/product.png") + ")"));
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(16, _c03, blog_r2 == null ? null : blog_r2.slug));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(8, 9, blog_r2 == null ? null : blog_r2.created_at, "dd MMM yyyy hh:mm:a"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(blog_r2 == null ? null : blog_r2.title);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.description);
  }
}
function BlogComponent_ng_template_3_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0, 6);
    \u0275\u0275template(1, BlogComponent_ng_template_3_ng_container_0_ng_template_1_Template, 12, 18, "ng-template", 6);
    \u0275\u0275elementContainerEnd();
  }
}
function BlogComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, BlogComponent_ng_template_3_ng_container_0_Template, 2, 0, "ng-container", 5);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("ngForOf", ctx_r0.blogs);
  }
}
function BlogComponent_app_no_data_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-no-data", 15);
  }
  if (rf & 2) {
    \u0275\u0275classMap("no-data-added bg-light");
    \u0275\u0275property("text", "no_blog_found");
  }
}
var BlogComponent = class _BlogComponent {
  constructor(blogService) {
    this.blogService = blogService;
    this.blogIds = [];
    this.blogs = [];
    this.skeletonItems = Array.from({ length: 5 }, (_, index) => index);
    this.blogOption = customOptionsItem3;
  }
  ngOnChanges() {
    if (Array.isArray(this.blogIds)) {
      this.blog$.subscribe((blogs) => {
        this.blogs = blogs.data.filter((blog) => this.blogIds?.includes(blog?.id));
      });
    }
  }
  static {
    this.\u0275fac = function BlogComponent_Factory(t) {
      return new (t || _BlogComponent)(\u0275\u0275directiveInject(BlogService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BlogComponent, selectors: [["app-blog"]], inputs: { blogIds: "blogIds", sliderOption: "sliderOption", description: "description" }, features: [\u0275\u0275NgOnChangesFeature], decls: 6, vars: 4, consts: [["blogContent", ""], [1, "slider-3-blog", "ratio_65", "no-arrow", "product-wrapper"], [3, "options"], [4, "ngIf", "ngIfElse"], [3, "class", "text", 4, "ngIf"], ["carouselSlide", "", 4, "ngFor", "ngForOf"], ["carouselSlide", ""], [1, "blog-box", "ratio_65"], ["class", "blog-label-tag", 4, "ngIf"], [1, "blog-box-image"], [1, "blog-image", "bg-size", 3, "routerLink", "ngStyle"], [1, "blog-detail", 3, "routerLink"], [3, "innerHTML", 4, "ngIf"], [1, "blog-label-tag"], [3, "innerHTML"], [3, "text"]], template: function BlogComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 1)(1, "owl-carousel-o", 2);
        \u0275\u0275template(2, BlogComponent_ng_container_2_Template, 2, 1, "ng-container", 3)(3, BlogComponent_ng_template_3_Template, 1, 1, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
        \u0275\u0275elementEnd()();
        \u0275\u0275template(5, BlogComponent_app_no_data_5_Template, 1, 3, "app-no-data", 4);
      }
      if (rf & 2) {
        const blogContent_r3 = \u0275\u0275reference(4);
        \u0275\u0275advance();
        \u0275\u0275property("options", ctx.sliderOption ? ctx.sliderOption : ctx.blogOption);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.blogService.skeletonLoader)("ngIfElse", blogContent_r3);
        \u0275\u0275advance(3);
        \u0275\u0275property("ngIf", !(ctx.blogs == null ? null : ctx.blogs.length));
      }
    }, dependencies: [NgForOf, NgIf, NgStyle, RouterLink, CarouselComponent, CarouselSlideDirective, NoDataComponent, SkeletonBlogComponent, DatePipe, TranslatePipe] });
  }
};
__decorate([
  Select(BlogState.blog)
], BlogComponent.prototype, "blog$", void 0);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BlogComponent, { className: "BlogComponent", filePath: "src\\app\\components\\themes\\widgets\\blog\\blog.component.ts", lineNumber: 15 });
})();

// src/app/components/themes/widgets/brand/brand.component.ts
var _c04 = (a0) => ["/brand", a0];
function BrandComponent_div_3_img_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 8);
  }
  if (rf & 2) {
    const brand_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("src", brand_r1.brand_image.original_url, \u0275\u0275sanitizeUrl);
  }
}
function BrandComponent_div_3_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h3");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const brand_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(brand_r1.name);
  }
}
function BrandComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "a", 6);
    \u0275\u0275template(2, BrandComponent_div_3_img_2_Template, 1, 1, "img", 7)(3, BrandComponent_div_3_ng_template_3_Template, 2, 1, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const brand_r1 = ctx.$implicit;
    const name_r2 = \u0275\u0275reference(4);
    \u0275\u0275advance();
    \u0275\u0275propertyInterpolate1("href", "/brand/", brand_r1.slug, "", \u0275\u0275sanitizeUrl);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(5, _c04, brand_r1.slug));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", brand_r1.brand_image)("ngIfElse", name_r2);
  }
}
function BrandComponent_app_no_data_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-no-data", 9);
  }
  if (rf & 2) {
    \u0275\u0275classMap("no-data-added bg-light");
    \u0275\u0275property("text", "no_product_found");
  }
}
var BrandComponent = class _BrandComponent {
  ngOnInit() {
    this.brand$.subscribe((brands) => {
      this.brands = brands.data.filter((brand) => this.brandIds.includes(brand.id));
    });
  }
  static {
    this.\u0275fac = function BrandComponent_Factory(t) {
      return new (t || _BrandComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BrandComponent, selectors: [["app-brand"]], inputs: { brandIds: "brandIds" }, decls: 5, vars: 4, consts: [["name", ""], [1, "brand-section"], [1, "brand-row"], [1, "row", "row-cols-6", "justify-content-center"], [4, "ngFor", "ngForOf"], [3, "class", "text", 4, "ngIf"], [3, "href", "routerLink"], ["class", "img-fluid", 3, "src", 4, "ngIf", "ngIfElse"], [1, "img-fluid", 3, "src"], [3, "text"]], template: function BrandComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "div", 3);
        \u0275\u0275template(3, BrandComponent_div_3_Template, 5, 7, "div", 4);
        \u0275\u0275elementEnd();
        \u0275\u0275template(4, BrandComponent_app_no_data_4_Template, 1, 3, "app-no-data", 5);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275classProp("no-bg", ctx.brands.length < 6);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngForOf", ctx.brands);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !(ctx.brands == null ? null : ctx.brands.length));
      }
    }, dependencies: [NgForOf, NgIf, RouterLink, NoDataComponent] });
  }
};
__decorate([
  Select(BrandState.brand)
], BrandComponent.prototype, "brand$", void 0);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BrandComponent, { className: "BrandComponent", filePath: "src\\app\\components\\themes\\widgets\\brand\\brand.component.ts", lineNumber: 12 });
})();

// src/app/components/themes/widgets/top-seller/top-seller.component.ts
var _c05 = (a0) => ["/seller/store/", a0];
function TopSellerComponent_div_3_img_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 10);
  }
  if (rf & 2) {
    const store_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275propertyInterpolate("alt", store_r1.store_name);
    \u0275\u0275property("src", store_r1.store_logo.original_url, \u0275\u0275sanitizeUrl);
  }
}
function TopSellerComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5)(1, "a", 6);
    \u0275\u0275template(2, TopSellerComponent_div_3_img_2_Template, 1, 2, "img", 7);
    \u0275\u0275elementStart(3, "h5");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 8);
    \u0275\u0275element(6, "ngb-rating", 9);
    \u0275\u0275elementStart(7, "span");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const store_r1 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(5, _c05, store_r1.slug));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", store_r1.store_logo);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(store_r1.store_name);
    \u0275\u0275advance(2);
    \u0275\u0275property("rate", store_r1.rating_count);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("(", store_r1.reviews_count, ")");
  }
}
function TopSellerComponent_app_no_data_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-no-data", 11);
  }
  if (rf & 2) {
    \u0275\u0275classMap("no-data-added bg-light justify-content-center");
    \u0275\u0275property("text", "no_store_found");
  }
}
var TopSellerComponent = class _TopSellerComponent {
  ngOnInit() {
    this.store$.subscribe((stores) => {
      if (this.sellerIds?.length)
        this.sellers = stores.data.filter((seller) => this.sellerIds.includes(seller.id));
    });
  }
  static {
    this.\u0275fac = function TopSellerComponent_Factory(t) {
      return new (t || _TopSellerComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TopSellerComponent, selectors: [["app-top-seller"]], inputs: { sellerIds: "sellerIds" }, decls: 5, vars: 2, consts: [[1, "brand-section"], [1, "brand-row"], [1, "row", "g-sm-4", "g-3", "row-cols-xxl-6", "row-cols-lg-5", "row-cols-md-3", "row-cols-2"], ["class", "col", 4, "ngFor", "ngForOf"], [3, "class", "text", 4, "ngIf"], [1, "col"], [3, "routerLink"], ["class", "img-fluid", 3, "src", "alt", 4, "ngIf"], [1, "product-rating"], [3, "rate"], [1, "img-fluid", 3, "src", "alt"], [3, "text"]], template: function TopSellerComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2);
        \u0275\u0275template(3, TopSellerComponent_div_3_Template, 9, 7, "div", 3);
        \u0275\u0275elementEnd();
        \u0275\u0275template(4, TopSellerComponent_app_no_data_4_Template, 1, 3, "app-no-data", 4);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(3);
        \u0275\u0275property("ngForOf", ctx.sellers);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !(ctx.sellers == null ? null : ctx.sellers.length));
      }
    }, dependencies: [NgForOf, NgIf, RouterLink, NgbRating, NoDataComponent] });
  }
};
__decorate([
  Select(StoreState.store)
], TopSellerComponent.prototype, "store$", void 0);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TopSellerComponent, { className: "TopSellerComponent", filePath: "src\\app\\components\\themes\\widgets\\top-seller\\top-seller.component.ts", lineNumber: 12 });
})();

// src/app/components/themes/paris/paris.component.ts
var _c06 = () => [];
function ParisComponent_section_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 28);
    \u0275\u0275element(1, "app-theme-home-banner", 29);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("theme", "paris")("data", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.home_banner);
  }
}
function ParisComponent_div_16_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 33)(2, "div", 34)(3, "h3");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275element(5, "app-theme-product", 35);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.main_content == null ? null : ctx_r0.data.content.main_content.sidebar == null ? null : ctx_r0.data.content.main_content.sidebar.sidebar_products == null ? null : ctx_r0.data.content.main_content.sidebar.sidebar_products.title);
    \u0275\u0275advance();
    \u0275\u0275styleMap("vertical");
    \u0275\u0275property("productIds", (ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.main_content == null ? null : ctx_r0.data.content.main_content.sidebar == null ? null : ctx_r0.data.content.main_content.sidebar.sidebar_products == null ? null : ctx_r0.data.content.main_content.sidebar.sidebar_products.product_ids) || \u0275\u0275pureFunction0(4, _c06));
  }
}
function ParisComponent_div_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 30)(1, "div", 31);
    \u0275\u0275elementContainerStart(2);
    \u0275\u0275element(3, "app-theme-categories", 32);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275element(4, "app-theme-banner", 10)(5, "app-theme-banner", 10);
    \u0275\u0275template(6, ParisComponent_div_16_ng_container_6_Template, 6, 5, "ng-container", 14);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275styleMap("vertical");
    \u0275\u0275property("categoryIds", (ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.main_content == null ? null : ctx_r0.data.content.main_content.sidebar == null ? null : ctx_r0.data.content.main_content.sidebar.categories_icon_list == null ? null : ctx_r0.data.content.main_content.sidebar.categories_icon_list.category_ids) || \u0275\u0275pureFunction0(14, _c06));
    \u0275\u0275advance();
    \u0275\u0275styleMap("vertical");
    \u0275\u0275classMap("ratio_156 section-t-space");
    \u0275\u0275property("banners", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.main_content == null ? null : ctx_r0.data.content.main_content.sidebar == null ? null : ctx_r0.data.content.main_content.sidebar.left_side_banners == null ? null : ctx_r0.data.content.main_content.sidebar.left_side_banners.banner_1);
    \u0275\u0275advance();
    \u0275\u0275styleMap("vertical");
    \u0275\u0275classMap("ratio_medium section-t-space");
    \u0275\u0275property("banners", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.main_content == null ? null : ctx_r0.data.content.main_content.sidebar == null ? null : ctx_r0.data.content.main_content.sidebar.left_side_banners == null ? null : ctx_r0.data.content.main_content.sidebar.left_side_banners.banner_2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.main_content == null ? null : ctx_r0.data.content.main_content.sidebar == null ? null : ctx_r0.data.content.main_content.sidebar.sidebar_products == null ? null : ctx_r0.data.content.main_content.sidebar.sidebar_products.status);
  }
}
function ParisComponent_ng_container_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275element(1, "app-title", 36);
    \u0275\u0275elementStart(2, "div", 37);
    \u0275\u0275element(3, "app-theme-product", 38);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("title", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.main_content == null ? null : ctx_r0.data.content.main_content.section1_products == null ? null : ctx_r0.data.content.main_content.section1_products.title)("description", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.main_content == null ? null : ctx_r0.data.content.main_content.section1_products == null ? null : ctx_r0.data.content.main_content.section1_products.description);
    \u0275\u0275advance(2);
    \u0275\u0275styleMap("horizontal");
    \u0275\u0275property("productIds", (ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.main_content == null ? null : ctx_r0.data.content.main_content.section1_products == null ? null : ctx_r0.data.content.main_content.section1_products.product_ids) || \u0275\u0275pureFunction0(7, _c06))("slider", true)("sliderOption", ctx_r0.productSlider);
  }
}
function ParisComponent_ng_container_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div");
    \u0275\u0275element(2, "app-title", 36)(3, "app-theme-categories", 39);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("title", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.main_content == null ? null : ctx_r0.data.content.main_content.section2_categories_list == null ? null : ctx_r0.data.content.main_content.section2_categories_list.title)("description", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.main_content == null ? null : ctx_r0.data.content.main_content.section2_categories_list == null ? null : ctx_r0.data.content.main_content.section2_categories_list.description);
    \u0275\u0275advance();
    \u0275\u0275styleMap("horizontal");
    \u0275\u0275property("sliderOption", ctx_r0.categorySlider)("image", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.main_content == null ? null : ctx_r0.data.content.main_content.section2_categories_list == null ? null : ctx_r0.data.content.main_content.section2_categories_list.image_url)("categoryIds", (ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.main_content == null ? null : ctx_r0.data.content.main_content.section2_categories_list == null ? null : ctx_r0.data.content.main_content.section2_categories_list.category_ids) || \u0275\u0275pureFunction0(8, _c06))("theme", "paris");
  }
}
function ParisComponent_ng_container_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 40)(2, "div", 41)(3, "div", 42)(4, "div", 43);
    \u0275\u0275element(5, "app-image-link", 44);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 42)(7, "div", 43);
    \u0275\u0275element(8, "app-image-link", 44);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275property("image", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.main_content == null ? null : ctx_r0.data.content.main_content.section3_two_column_banners == null ? null : ctx_r0.data.content.main_content.section3_two_column_banners.banner_1)("bgImage", false);
    \u0275\u0275advance(3);
    \u0275\u0275property("image", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.main_content == null ? null : ctx_r0.data.content.main_content.section3_two_column_banners == null ? null : ctx_r0.data.content.main_content.section3_two_column_banners.banner_2)("bgImage", false);
  }
}
function ParisComponent_ng_container_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275element(1, "app-title", 36);
    \u0275\u0275elementStart(2, "div", 37);
    \u0275\u0275element(3, "app-theme-product", 45);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("title", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.main_content == null ? null : ctx_r0.data.content.main_content.section4_products == null ? null : ctx_r0.data.content.main_content.section4_products.title)("description", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.main_content == null ? null : ctx_r0.data.content.main_content.section4_products == null ? null : ctx_r0.data.content.main_content.section4_products.description);
    \u0275\u0275advance(2);
    \u0275\u0275styleMap("horizontal");
    \u0275\u0275property("productIds", (ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.main_content == null ? null : ctx_r0.data.content.main_content.section4_products == null ? null : ctx_r0.data.content.main_content.section4_products.product_ids) || \u0275\u0275pureFunction0(7, _c06))("sliderOption", ctx_r0.productSlider)("slider", true);
  }
}
function ParisComponent_ng_container_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275element(1, "app-title", 36);
    \u0275\u0275elementStart(2, "div", 37);
    \u0275\u0275element(3, "app-top-seller", 46);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("title", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.main_content == null ? null : ctx_r0.data.content.main_content.seller == null ? null : ctx_r0.data.content.main_content.seller.title)("description", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.main_content == null ? null : ctx_r0.data.content.main_content.seller == null ? null : ctx_r0.data.content.main_content.seller.description);
    \u0275\u0275advance(2);
    \u0275\u0275property("sellerIds", (ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.main_content == null ? null : ctx_r0.data.content.main_content.seller == null ? null : ctx_r0.data.content.main_content.seller.store_ids) || \u0275\u0275pureFunction0(3, _c06));
  }
}
function ParisComponent_ng_container_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 47);
    \u0275\u0275element(2, "app-theme-banner", 48);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275styleMap("full_width");
    \u0275\u0275property("banners", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.main_content == null ? null : ctx_r0.data.content.main_content.section5_coupons);
  }
}
function ParisComponent_ng_container_24_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 37)(1, "div", 41)(2, "div", 50)(3, "div", 43);
    \u0275\u0275element(4, "app-image-link", 44);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 51)(6, "div", 43);
    \u0275\u0275element(7, "app-image-link", 44);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275property("image", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.main_content == null ? null : ctx_r0.data.content.main_content.section6_two_column_banners == null ? null : ctx_r0.data.content.main_content.section6_two_column_banners.banner_1)("bgImage", false);
    \u0275\u0275advance(3);
    \u0275\u0275property("image", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.main_content == null ? null : ctx_r0.data.content.main_content.section6_two_column_banners == null ? null : ctx_r0.data.content.main_content.section6_two_column_banners.banner_2)("bgImage", false);
  }
}
function ParisComponent_ng_container_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, ParisComponent_ng_container_24_div_1_Template, 8, 4, "div", 49);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.main_content == null ? null : ctx_r0.data.content.main_content.section6_two_column_banners == null ? null : ctx_r0.data.content.main_content.section6_two_column_banners.status);
  }
}
function ParisComponent_ng_container_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275element(1, "app-title", 36)(2, "app-theme-product", 35);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("title", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.main_content == null ? null : ctx_r0.data.content.main_content.section7_products == null ? null : ctx_r0.data.content.main_content.section7_products.title)("description", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.main_content == null ? null : ctx_r0.data.content.main_content.section7_products == null ? null : ctx_r0.data.content.main_content.section7_products.description);
    \u0275\u0275advance();
    \u0275\u0275styleMap("classic");
    \u0275\u0275property("productIds", (ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.main_content == null ? null : ctx_r0.data.content.main_content.section7_products == null ? null : ctx_r0.data.content.main_content.section7_products.product_ids) || \u0275\u0275pureFunction0(5, _c06));
  }
}
function ParisComponent_ng_container_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 52)(2, "div", 43);
    \u0275\u0275element(3, "app-image-link", 44);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275property("image", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.main_content == null ? null : ctx_r0.data.content.main_content.section8_full_width_banner)("bgImage", false);
  }
}
function ParisComponent_ng_container_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275element(1, "app-title", 36)(2, "app-blog", 53);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("title", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.main_content == null ? null : ctx_r0.data.content.main_content.section9_featured_blogs == null ? null : ctx_r0.data.content.main_content.section9_featured_blogs.title)("description", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.main_content == null ? null : ctx_r0.data.content.main_content.section9_featured_blogs == null ? null : ctx_r0.data.content.main_content.section9_featured_blogs.description);
    \u0275\u0275advance();
    \u0275\u0275property("blogIds", (ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.main_content == null ? null : ctx_r0.data.content.main_content.section9_featured_blogs == null ? null : ctx_r0.data.content.main_content.section9_featured_blogs.blog_ids) || \u0275\u0275pureFunction0(3, _c06));
  }
}
function ParisComponent_ng_container_28_section_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 55)(1, "div", 2);
    \u0275\u0275element(2, "app-brand", 56);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("brandIds", (ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.brands == null ? null : ctx_r0.data.content.brands.brand_ids) || \u0275\u0275pureFunction0(1, _c06));
  }
}
function ParisComponent_ng_container_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, ParisComponent_ng_container_28_section_1_Template, 3, 2, "section", 54);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.brands == null ? null : ctx_r0.data.content.brands.brand_ids == null ? null : ctx_r0.data.content.brands.brand_ids.length);
  }
}
function ParisComponent_ng_container_65_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "section", 57);
    \u0275\u0275element(2, "app-newsletter", 58);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("data", (ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.news_letter) || null);
  }
}
var ParisComponent = class _ParisComponent {
  constructor(store, themeOptionService, route) {
    this.store = store;
    this.themeOptionService = themeOptionService;
    this.route = route;
    this.categorySlider = categorySlider;
    this.productSlider = productSlider;
  }
  ngOnInit() {
    if (this.data?.slug == this.slug) {
      const getProducts$ = this.store.dispatch(new GetProductByIds({
        status: 1,
        paginate: this.data?.content?.products_ids.length,
        ids: this.data?.content?.products_ids?.join(",")
      }));
      const getStore$ = this.store.dispatch(new GetStores({
        status: 1,
        ids: this.data?.content?.main_content?.seller?.store_ids?.join()
      }));
      const getBlogs$ = this.store.dispatch(new GetBlogs({
        status: 1,
        ids: this.data?.content.main_content?.section9_featured_blogs?.blog_ids?.join(",")
      }));
      const brandIds = this.data?.content?.brands?.brand_ids;
      const getBrand$ = brandIds && brandIds.length > 0 ? this.store.dispatch(new GetBrands({
        status: 1,
        ids: brandIds.join()
      })) : null;
      document.body.classList.add("skeleton-body");
      const actions = [getProducts$, getBlogs$, getStore$];
      if (getBrand$) {
        actions.push(getBrand$);
      }
      forkJoin(actions).subscribe({
        complete: () => {
          document.body.classList.remove("skeleton-body");
          this.themeOptionService.preloader = false;
        }
      });
    }
    this.route.queryParams.subscribe((params) => {
      if (this.route.snapshot.data["data"].theme_option.productBox === "digital") {
        if (this.productSlider && this.productSlider.responsive && this.productSlider.responsive["1000"]) {
          this.productSlider = __spreadProps(__spreadValues({}, this.productSlider), { items: 3, responsive: __spreadProps(__spreadValues({}, this.productSlider.responsive), {
            1e3: {
              items: 3
            }
          }) });
        }
      } else {
        if (this.productSlider && this.productSlider.responsive && this.productSlider.responsive["1000"]) {
          this.productSlider = __spreadProps(__spreadValues({}, this.productSlider), { items: 5, responsive: __spreadProps(__spreadValues({}, this.productSlider.responsive), {
            1e3: {
              items: 5
            }
          }) });
        }
      }
    });
  }
  static {
    this.\u0275fac = function ParisComponent_Factory(t) {
      return new (t || _ParisComponent)(\u0275\u0275directiveInject(Store), \u0275\u0275directiveInject(ThemeOptionService), \u0275\u0275directiveInject(ActivatedRoute));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ParisComponent, selectors: [["app-paris"]], inputs: { data: "data", slug: "slug" }, decls: 66, vars: 19, consts: [[1, "bg-effect"], [1, "homepage-title-section"], [1, "container-fluid-lg"], [1, "row"], [1, "col-12"], [1, "page-title-section", "text-center"], [1, "main-page-title"], [1, "page-description"], ["class", "home-section pt-2", 4, "ngIf"], [1, "banner-section", "ratio_60"], [3, "banners"], [1, "product-section"], [1, "row", "g-sm-4", "g-3"], ["class", "col-xxl-3 col-xl-4 d-none d-xl-block", 4, "ngIf"], [4, "ngIf"], [1, "internal-links-section", "section-b-space"], [1, "internal-links-container", "text-center"], [1, "mb-4"], [1, "row", "g-3"], [1, "col-lg-3", "col-md-6"], ["routerLink", "/page/about-us", "href", "/page/about-us", "title", "Learn More About Us", 1, "internal-link-card"], [1, "ri-information-line"], ["routerLink", "/Contact-Us", "href", "/Contact-Us", "title", "Get in Touch", 1, "internal-link-card"], [1, "ri-customer-service-line"], ["routerLink", "/page/faq", "href", "/page/faq", "title", "Frequently Asked Questions", 1, "internal-link-card"], [1, "ri-question-line"], ["routerLink", "/page/offers", "href", "/page/offers", "title", "Special Offers", 1, "internal-link-card"], [1, "ri-gift-line"], [1, "home-section", "pt-2"], [3, "theme", "data"], [1, "col-xxl-3", "col-xl-4", "d-none", "d-xl-block"], [1, "p-sticky"], [3, "categoryIds"], [1, "section-t-space"], [1, "category-menu"], [3, "productIds"], [3, "title", "description"], [1, "section-b-space"], [3, "productIds", "slider", "sliderOption"], [3, "sliderOption", "image", "categoryIds", "theme"], [1, "section-t-space", "section-b-space"], [1, "row", "g-md-4", "g-3"], [1, "col-md-6"], [1, "banner-contain", "hover-effect"], [3, "image", "bgImage"], [3, "productIds", "sliderOption", "slider"], [3, "sellerIds"], [1, "section-b-space", "ratio_12"], [1, "sale-banner", 3, "banners"], ["class", "section-b-space", 4, "ngIf"], [1, "col-xxl-8", "col-xl-12", "col-md-7"], [1, "col-xxl-4", "col-xl-12", "col-md-5"], [1, "section-b-space", "section-t-space"], [3, "blogIds"], ["class", "brand-effect", 4, "ngIf"], [1, "brand-effect"], [3, "brandIds"], [1, "newsletter-section", "section-b-space"], [3, "data"]], template: function ParisComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "section", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "h1", 6);
        \u0275\u0275text(7, "GROFAB Premium Mens and Womens Fashion Online");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "p", 7);
        \u0275\u0275text(9, "Discover new season shirts jackets suits denim and more at GROFAB. Premium quality fast shipping across India COD and easy returns.");
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275template(10, ParisComponent_section_10_Template, 2, 2, "section", 8);
        \u0275\u0275elementStart(11, "section", 9);
        \u0275\u0275element(12, "app-theme-banner", 10);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "section", 11)(14, "div", 2)(15, "div", 12);
        \u0275\u0275template(16, ParisComponent_div_16_Template, 7, 15, "div", 13);
        \u0275\u0275elementStart(17, "div");
        \u0275\u0275template(18, ParisComponent_ng_container_18_Template, 4, 8, "ng-container", 14)(19, ParisComponent_ng_container_19_Template, 4, 9, "ng-container", 14)(20, ParisComponent_ng_container_20_Template, 9, 4, "ng-container", 14)(21, ParisComponent_ng_container_21_Template, 4, 8, "ng-container", 14)(22, ParisComponent_ng_container_22_Template, 4, 4, "ng-container", 14)(23, ParisComponent_ng_container_23_Template, 3, 3, "ng-container", 14)(24, ParisComponent_ng_container_24_Template, 2, 1, "ng-container", 14)(25, ParisComponent_ng_container_25_Template, 3, 6, "ng-container", 14)(26, ParisComponent_ng_container_26_Template, 4, 2, "ng-container", 14)(27, ParisComponent_ng_container_27_Template, 3, 4, "ng-container", 14);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275template(28, ParisComponent_ng_container_28_Template, 2, 1, "ng-container", 14);
        \u0275\u0275elementStart(29, "section", 15)(30, "div", 2)(31, "div", 3)(32, "div", 4)(33, "div", 16)(34, "h3", 17);
        \u0275\u0275text(35, "Explore More");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(36, "div", 18)(37, "div", 19)(38, "a", 20);
        \u0275\u0275element(39, "i", 21);
        \u0275\u0275elementStart(40, "h5");
        \u0275\u0275text(41, "About Us");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(42, "p");
        \u0275\u0275text(43, "Discover our story and mission");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(44, "div", 19)(45, "a", 22);
        \u0275\u0275element(46, "i", 23);
        \u0275\u0275elementStart(47, "h5");
        \u0275\u0275text(48, "Contact Us");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(49, "p");
        \u0275\u0275text(50, "We're here to help you 24/7");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(51, "div", 19)(52, "a", 24);
        \u0275\u0275element(53, "i", 25);
        \u0275\u0275elementStart(54, "h5");
        \u0275\u0275text(55, "FAQ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(56, "p");
        \u0275\u0275text(57, "Find answers to common questions");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(58, "div", 19)(59, "a", 26);
        \u0275\u0275element(60, "i", 27);
        \u0275\u0275elementStart(61, "h5");
        \u0275\u0275text(62, "Offers");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(63, "p");
        \u0275\u0275text(64, "Exclusive deals and discounts");
        \u0275\u0275elementEnd()()()()()()()()();
        \u0275\u0275template(65, ParisComponent_ng_container_65_Template, 3, 1, "ng-container", 14);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(10);
        \u0275\u0275property("ngIf", ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.home_banner);
        \u0275\u0275advance(2);
        \u0275\u0275styleMap("horizontal");
        \u0275\u0275property("banners", ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.featured_banners == null ? null : ctx.data.content.featured_banners.banners);
        \u0275\u0275advance(4);
        \u0275\u0275property("ngIf", ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.main_content == null ? null : ctx.data.content.main_content.sidebar == null ? null : ctx.data.content.main_content.sidebar.status);
        \u0275\u0275advance();
        \u0275\u0275classMap((ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.main_content == null ? null : ctx.data.content.main_content.sidebar == null ? null : ctx.data.content.main_content.sidebar.status) ? "col-xxl-9 col-xl-8" : "col-xxl-12 col-xl-12");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.main_content == null ? null : ctx.data.content.main_content.section1_products == null ? null : ctx.data.content.main_content.section1_products.status);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.main_content == null ? null : ctx.data.content.main_content.section2_categories_list == null ? null : ctx.data.content.main_content.section2_categories_list.status);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.main_content == null ? null : ctx.data.content.main_content.section3_two_column_banners == null ? null : ctx.data.content.main_content.section3_two_column_banners.status);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.main_content == null ? null : ctx.data.content.main_content.section4_products == null ? null : ctx.data.content.main_content.section4_products.status);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.main_content == null ? null : ctx.data.content.main_content.seller == null ? null : ctx.data.content.main_content.seller.status);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.main_content == null ? null : ctx.data.content.main_content.section5_coupons == null ? null : ctx.data.content.main_content.section5_coupons.status);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.main_content == null ? null : ctx.data.content.main_content.section6_two_column_banners == null ? null : ctx.data.content.main_content.section6_two_column_banners.status);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.main_content == null ? null : ctx.data.content.main_content.section4_products == null ? null : ctx.data.content.main_content.section4_products.status);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.main_content == null ? null : ctx.data.content.main_content.section8_full_width_banner == null ? null : ctx.data.content.main_content.section8_full_width_banner.status);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.main_content == null ? null : ctx.data.content.main_content.section9_featured_blogs == null ? null : ctx.data.content.main_content.section9_featured_blogs.status);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.brands == null ? null : ctx.data.content.brands.status);
        \u0275\u0275advance(37);
        \u0275\u0275property("ngIf", ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.news_letter == null ? null : ctx.data.content.news_letter.status);
      }
    }, dependencies: [NgIf, RouterLink, TitleComponent, ImageLinkComponent, HomeBannerComponent, BannerComponent, CategoriesComponent2, ProductComponent, NewsletterComponent, BlogComponent, BrandComponent, TopSellerComponent], styles: ['\n\n.homepage-title-section[_ngcontent-%COMP%] {\n  padding: 3rem 0;\n  background:\n    linear-gradient(\n      135deg,\n      #f8f9fa 0%,\n      #e9ecef 100%);\n  margin-bottom: 0;\n  border-bottom: 1px solid #dee2e6;\n}\n.page-title-section[_ngcontent-%COMP%] {\n  padding: 0;\n}\n.main-page-title[_ngcontent-%COMP%] {\n  font-size: 3rem;\n  font-weight: 700;\n  color: #2c3e50;\n  margin-bottom: 1.5rem;\n  line-height: 1.2;\n  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n}\n@media (max-width: 768px) {\n  .main-page-title[_ngcontent-%COMP%] {\n    font-size: 2.2rem;\n  }\n}\n@media (max-width: 576px) {\n  .main-page-title[_ngcontent-%COMP%] {\n    font-size: 1.8rem;\n  }\n}\n.page-description[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  color: #6c757d;\n  margin: 0;\n  line-height: 1.6;\n  max-width: 700px;\n  margin: 0 auto;\n  font-weight: 400;\n}\n@media (max-width: 768px) {\n  .page-description[_ngcontent-%COMP%] {\n    font-size: 1.1rem;\n  }\n}\n.hero-section[_ngcontent-%COMP%] {\n  padding: 16px 0 0;\n}\n.hero-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1.6fr 1fr;\n  gap: 16px;\n  min-height: 420px;\n}\n.hero-card[_ngcontent-%COMP%] {\n  display: block;\n  position: relative;\n  border-radius: 12px;\n  overflow: hidden;\n  height: 100%;\n  text-decoration: none;\n  color: #fff;\n}\n.hero-card[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  inset: 0;\n  background:\n    linear-gradient(\n      to top,\n      rgba(0, 0, 0, 0.55) 0%,\n      rgba(0, 0, 0, 0.15) 40%,\n      transparent 70%);\n  z-index: 1;\n  transition: background 0.4s ease;\n}\n.hero-card[_ngcontent-%COMP%]:hover {\n  color: #fff;\n  text-decoration: none;\n}\n.hero-card[_ngcontent-%COMP%]:hover::after {\n  background:\n    linear-gradient(\n      to top,\n      rgba(0, 0, 0, 0.6) 0%,\n      rgba(0, 0, 0, 0.2) 45%,\n      transparent 75%);\n}\n.hero-card[_ngcontent-%COMP%]:hover   .hero-img[_ngcontent-%COMP%] {\n  transform: scale(1.04);\n}\n.hero-card[_ngcontent-%COMP%]:hover   .hero-cta[_ngcontent-%COMP%] {\n  gap: 10px;\n  letter-spacing: 0.8px;\n}\n.hero-card[_ngcontent-%COMP%]:hover   .hero-cta[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  transform: translateX(3px);\n}\n.hero-img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  display: block;\n  transition: transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);\n}\n.hero-overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  padding: 28px 32px;\n  z-index: 2;\n}\n.hero-badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  background: #fff;\n  color: #111;\n  font-family: "Poppins", sans-serif;\n  font-size: 11px;\n  font-weight: 600;\n  letter-spacing: 1.2px;\n  text-transform: uppercase;\n  padding: 5px 14px;\n  border-radius: 4px;\n  margin-bottom: 12px;\n}\n.hero-title[_ngcontent-%COMP%] {\n  font-family: "Poppins", sans-serif;\n  font-size: 28px;\n  font-weight: 700;\n  margin: 0 0 6px;\n  line-height: 1.2;\n  color: #fff;\n  text-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);\n}\n.hero-subtitle[_ngcontent-%COMP%] {\n  font-family: "Poppins", sans-serif;\n  font-size: 14px;\n  font-weight: 400;\n  margin: 0 0 16px;\n  color: rgba(255, 255, 255, 0.9);\n  line-height: 1.5;\n}\n.hero-cta[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  font-family: "Poppins", sans-serif;\n  font-size: 13px;\n  font-weight: 600;\n  letter-spacing: 0.5px;\n  text-transform: uppercase;\n  color: #fff;\n  border-bottom: 2px solid #fff;\n  padding-bottom: 2px;\n  transition: all 0.3s ease;\n}\n.hero-cta[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 16px;\n  transition: transform 0.3s ease;\n}\n.hero-main[_ngcontent-%COMP%]   .hero-title[_ngcontent-%COMP%] {\n  font-size: 34px;\n}\n.hero-main[_ngcontent-%COMP%]   .hero-subtitle[_ngcontent-%COMP%] {\n  font-size: 15px;\n  max-width: 400px;\n}\n@media (max-width: 991px) {\n  .hero-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr 1fr;\n    min-height: 340px;\n  }\n  .hero-main[_ngcontent-%COMP%]   .hero-title[_ngcontent-%COMP%] {\n    font-size: 26px;\n  }\n  .hero-overlay[_ngcontent-%COMP%] {\n    padding: 22px 24px;\n  }\n}\n@media (max-width: 767px) {\n  .hero-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    min-height: auto;\n    gap: 12px;\n  }\n  .hero-card[_ngcontent-%COMP%] {\n    min-height: 220px;\n  }\n  .hero-main[_ngcontent-%COMP%]   .hero-title[_ngcontent-%COMP%] {\n    font-size: 24px;\n  }\n  .hero-title[_ngcontent-%COMP%] {\n    font-size: 22px;\n  }\n  .hero-overlay[_ngcontent-%COMP%] {\n    padding: 20px;\n  }\n  .hero-badge[_ngcontent-%COMP%] {\n    font-size: 10px;\n    padding: 4px 10px;\n  }\n}\n@media (max-width: 480px) {\n  .hero-card[_ngcontent-%COMP%] {\n    min-height: 180px;\n    border-radius: 8px;\n  }\n  .hero-main[_ngcontent-%COMP%]   .hero-title[_ngcontent-%COMP%], .hero-title[_ngcontent-%COMP%] {\n    font-size: 20px;\n  }\n  .hero-subtitle[_ngcontent-%COMP%] {\n    font-size: 13px;\n    margin-bottom: 12px;\n  }\n  .hero-overlay[_ngcontent-%COMP%] {\n    padding: 16px;\n  }\n}\n/*# sourceMappingURL=paris.component.css.map */'] });
  }
};
__decorate([
  Select(ThemeOptionState.themeOptions)
], ParisComponent.prototype, "themeOption$", void 0);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ParisComponent, { className: "ParisComponent", filePath: "src\\app\\components\\themes\\paris\\paris.component.ts", lineNumber: 20 });
})();

// src/app/components/themes/widgets/four-column-product/four-column-product.component.ts
var _c07 = () => [];
function FourColumnProductComponent_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div")(2, "div", 2)(3, "h3");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275element(5, "app-theme-product", 3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r0.col ? ctx_r0.col : "col-xxl-3 col-xl-4 col-sm-6");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.data == null ? null : ctx_r0.data.product_slider_1 == null ? null : ctx_r0.data.product_slider_1.title);
    \u0275\u0275advance();
    \u0275\u0275styleMap("vertical");
    \u0275\u0275property("productIds", (ctx_r0.data == null ? null : ctx_r0.data.product_slider_1 == null ? null : ctx_r0.data.product_slider_1.product_ids) || \u0275\u0275pureFunction0(7, _c07));
  }
}
function FourColumnProductComponent_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div")(2, "div", 2)(3, "h3");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275element(5, "app-theme-product", 3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r0.col ? ctx_r0.col : "col-xxl-3 col-xl-4 col-sm-6");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.data == null ? null : ctx_r0.data.product_slider_2 == null ? null : ctx_r0.data.product_slider_2.title);
    \u0275\u0275advance();
    \u0275\u0275styleMap("vertical");
    \u0275\u0275property("productIds", (ctx_r0.data == null ? null : ctx_r0.data.product_slider_2 == null ? null : ctx_r0.data.product_slider_2.product_ids) || \u0275\u0275pureFunction0(7, _c07));
  }
}
function FourColumnProductComponent_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div")(2, "div", 2)(3, "h3");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275element(5, "app-theme-product", 3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r0.col ? ctx_r0.col : "col-xxl-3 col-xl-4 col-sm-6");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.data == null ? null : ctx_r0.data.product_slider_3 == null ? null : ctx_r0.data.product_slider_3.title);
    \u0275\u0275advance();
    \u0275\u0275styleMap("vertical");
    \u0275\u0275property("productIds", (ctx_r0.data == null ? null : ctx_r0.data.product_slider_3 == null ? null : ctx_r0.data.product_slider_3.product_ids) || \u0275\u0275pureFunction0(7, _c07));
  }
}
function FourColumnProductComponent_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div")(2, "div", 2)(3, "h3");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275element(5, "app-theme-product", 3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r0.col ? ctx_r0.col : "col-xxl-3 col-xl-4 col-sm-6");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.data == null ? null : ctx_r0.data.product_slider_4 == null ? null : ctx_r0.data.product_slider_4.title);
    \u0275\u0275advance();
    \u0275\u0275styleMap("vertical");
    \u0275\u0275property("productIds", (ctx_r0.data == null ? null : ctx_r0.data.product_slider_4 == null ? null : ctx_r0.data.product_slider_4.product_ids) || \u0275\u0275pureFunction0(7, _c07));
  }
}
var FourColumnProductComponent = class _FourColumnProductComponent {
  getProducts(ids) {
    if (Array.isArray(ids)) {
      let filteredProducts = [];
      this.product$.subscribe((products) => {
        filteredProducts = products.data.filter((product) => ids?.includes(product?.id));
      });
      return filteredProducts;
    }
    return;
  }
  static {
    this.\u0275fac = function FourColumnProductComponent_Factory(t) {
      return new (t || _FourColumnProductComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FourColumnProductComponent, selectors: [["app-four-column-product"]], inputs: { data: "data", col: "col" }, decls: 5, vars: 4, consts: [[1, "row", "g-4"], [4, "ngIf"], [1, "category-menu"], [3, "productIds"]], template: function FourColumnProductComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275template(1, FourColumnProductComponent_ng_container_1_Template, 6, 8, "ng-container", 1)(2, FourColumnProductComponent_ng_container_2_Template, 6, 8, "ng-container", 1)(3, FourColumnProductComponent_ng_container_3_Template, 6, 8, "ng-container", 1)(4, FourColumnProductComponent_ng_container_4_Template, 6, 8, "ng-container", 1);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", (ctx.data == null ? null : ctx.data.product_slider_1 == null ? null : ctx.data.product_slider_1.status) && (ctx.data == null ? null : ctx.data.product_slider_1 == null ? null : ctx.data.product_slider_1.product_ids == null ? null : ctx.data.product_slider_1.product_ids.length));
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", (ctx.data == null ? null : ctx.data.product_slider_2 == null ? null : ctx.data.product_slider_2.status) && (ctx.data == null ? null : ctx.data.product_slider_2 == null ? null : ctx.data.product_slider_2.product_ids == null ? null : ctx.data.product_slider_2.product_ids.length));
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", (ctx.data == null ? null : ctx.data.product_slider_3 == null ? null : ctx.data.product_slider_3.status) && (ctx.data == null ? null : ctx.data.product_slider_3 == null ? null : ctx.data.product_slider_3.product_ids == null ? null : ctx.data.product_slider_3.product_ids.length));
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", (ctx.data == null ? null : ctx.data.product_slider_4 == null ? null : ctx.data.product_slider_4.status) && (ctx.data == null ? null : ctx.data.product_slider_4 == null ? null : ctx.data.product_slider_4.product_ids == null ? null : ctx.data.product_slider_4.product_ids.length));
      }
    }, dependencies: [NgIf, ProductComponent] });
  }
};
__decorate([
  Select(ProductState.product)
], FourColumnProductComponent.prototype, "product$", void 0);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FourColumnProductComponent, { className: "FourColumnProductComponent", filePath: "src\\app\\components\\themes\\widgets\\four-column-product\\four-column-product.component.ts", lineNumber: 13 });
})();

// src/app/components/themes/tokyo/tokyo.component.ts
var _c08 = () => [];
function TokyoComponent_section_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section")(1, "div", 4);
    \u0275\u0275element(2, "app-theme-categories", 7);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275styleMap("horizontal");
    \u0275\u0275property("theme", "paris")("sliderOption", ctx_r0.categorySlider)("image", ctx_r0.storageURL + (ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.categories_icon_list == null ? null : ctx_r0.data.content.categories_icon_list.image_url))("categoryIds", (ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.categories_icon_list == null ? null : ctx_r0.data.content.categories_icon_list.category_ids) || \u0275\u0275pureFunction0(6, _c08));
  }
}
function TokyoComponent_section_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section")(1, "div", 4)(2, "div", 8)(3, "div", 9);
    \u0275\u0275element(4, "app-theme-banner", 10);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275styleMap("full_width");
    \u0275\u0275classMap("banner-contain hover-effect");
    \u0275\u0275property("banners", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.coupons);
  }
}
function TokyoComponent_section_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 11);
    \u0275\u0275element(1, "app-theme-banner", 10);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275styleMap("horizontal");
    \u0275\u0275property("banners", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.featured_banners == null ? null : ctx_r0.data.content.featured_banners.banners);
  }
}
function TokyoComponent_ng_container_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div");
    \u0275\u0275element(2, "app-title", 12)(3, "app-theme-product", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("title", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.main_content == null ? null : ctx_r0.data.content.main_content.section1_products == null ? null : ctx_r0.data.content.main_content.section1_products.title)("description", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.main_content == null ? null : ctx_r0.data.content.main_content.section1_products == null ? null : ctx_r0.data.content.main_content.section1_products.description)("svg", "cake");
    \u0275\u0275advance();
    \u0275\u0275styleMap("horizontal");
    \u0275\u0275property("productIds", (ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.main_content == null ? null : ctx_r0.data.content.main_content.section1_products == null ? null : ctx_r0.data.content.main_content.section1_products.product_ids) || \u0275\u0275pureFunction0(10, _c08))("slider", true)("sliderOption", ctx_r0.productSlider)("productStyle", "product-standard")("boxClass", "product-box-bg");
  }
}
function TokyoComponent_ng_container_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 14);
    \u0275\u0275element(2, "app-title", 12)(3, "app-theme-product", 15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("title", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.main_content == null ? null : ctx_r0.data.content.main_content.section2_slider_products == null ? null : ctx_r0.data.content.main_content.section2_slider_products.title)("description", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.main_content == null ? null : ctx_r0.data.content.main_content.section2_slider_products == null ? null : ctx_r0.data.content.main_content.section2_slider_products.description)("svg", "cake");
    \u0275\u0275advance();
    \u0275\u0275styleMap("classic");
    \u0275\u0275property("productIds", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.main_content == null ? null : ctx_r0.data.content.main_content.section2_slider_products == null ? null : ctx_r0.data.content.main_content.section2_slider_products.product_ids)("boxClass", "product-box-bg");
  }
}
function TokyoComponent_ng_container_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "section", 16);
    \u0275\u0275element(2, "app-title", 17)(3, "app-top-seller", 18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("title", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.main_content == null ? null : ctx_r0.data.content.main_content.seller == null ? null : ctx_r0.data.content.main_content.seller.title)("description", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.main_content == null ? null : ctx_r0.data.content.main_content.seller == null ? null : ctx_r0.data.content.main_content.seller.description);
    \u0275\u0275advance();
    \u0275\u0275property("sellerIds", (ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.main_content == null ? null : ctx_r0.data.content.main_content.seller == null ? null : ctx_r0.data.content.main_content.seller.store_ids) || \u0275\u0275pureFunction0(3, _c08));
  }
}
function TokyoComponent_ng_container_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 14);
    \u0275\u0275element(2, "app-title", 12)(3, "app-theme-product", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("title", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.main_content == null ? null : ctx_r0.data.content.main_content.section3_products == null ? null : ctx_r0.data.content.main_content.section3_products.title)("description", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.main_content == null ? null : ctx_r0.data.content.main_content.section3_products == null ? null : ctx_r0.data.content.main_content.section3_products.description)("svg", "cake");
    \u0275\u0275advance();
    \u0275\u0275styleMap("horizontal");
    \u0275\u0275property("productIds", (ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.main_content == null ? null : ctx_r0.data.content.main_content.section3_products == null ? null : ctx_r0.data.content.main_content.section3_products.product_ids) || \u0275\u0275pureFunction0(10, _c08))("slider", true)("sliderOption", ctx_r0.productSlider)("productStyle", "product-standard")("boxClass", "product-box-bg");
  }
}
function TokyoComponent_ng_container_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 14);
    \u0275\u0275element(2, "app-title", 12)(3, "app-theme-product", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("title", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.main_content == null ? null : ctx_r0.data.content.main_content.section4_products == null ? null : ctx_r0.data.content.main_content.section4_products.title)("description", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.main_content == null ? null : ctx_r0.data.content.main_content.section4_products == null ? null : ctx_r0.data.content.main_content.section4_products.description)("svg", "cake");
    \u0275\u0275advance();
    \u0275\u0275styleMap("horizontal");
    \u0275\u0275property("productIds", (ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.main_content == null ? null : ctx_r0.data.content.main_content.section4_products == null ? null : ctx_r0.data.content.main_content.section4_products.product_ids) || \u0275\u0275pureFunction0(10, _c08))("slider", true)("sliderOption", ctx_r0.productSlider)("productStyle", "product-standard")("boxClass", "product-box-bg");
  }
}
function TokyoComponent_ng_container_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 19)(2, "div", 20);
    \u0275\u0275element(3, "app-theme-banner", 10)(4, "app-theme-banner", 10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275styleMap("vertical");
    \u0275\u0275classMap("ratio_209 rounded");
    \u0275\u0275property("banners", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.main_content == null ? null : ctx_r0.data.content.main_content.sidebar == null ? null : ctx_r0.data.content.main_content.sidebar.right_side_banners == null ? null : ctx_r0.data.content.main_content.sidebar.right_side_banners.banner_1);
    \u0275\u0275advance();
    \u0275\u0275styleMap("vertical");
    \u0275\u0275classMap("ratio_125 section-t-space");
    \u0275\u0275property("banners", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.main_content == null ? null : ctx_r0.data.content.main_content.sidebar == null ? null : ctx_r0.data.content.main_content.sidebar.right_side_banners == null ? null : ctx_r0.data.content.main_content.sidebar.right_side_banners.banner_2);
  }
}
function TokyoComponent_ng_container_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "section")(2, "div", 4)(3, "div", 8)(4, "div", 21);
    \u0275\u0275element(5, "app-image-link", 22);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275classMap("home-contain hover-effect");
    \u0275\u0275property("image", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.full_width_banner)("bgImage", false);
  }
}
function TokyoComponent_ng_container_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "section", 23)(2, "div", 4);
    \u0275\u0275element(3, "app-four-column-product", 24);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275property("data", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.slider_products);
  }
}
function TokyoComponent_section_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 25)(1, "div", 4);
    \u0275\u0275element(2, "app-brand", 26);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("brandIds", (ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.brands == null ? null : ctx_r0.data.content.brands.brand_ids) || \u0275\u0275pureFunction0(1, _c08));
  }
}
function TokyoComponent_ng_container_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "section", 27);
    \u0275\u0275element(2, "app-newsletter", 24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("data", (ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.news_letter) || null);
  }
}
var TokyoComponent = class _TokyoComponent {
  constructor(store, themeOptionService, route) {
    this.store = store;
    this.themeOptionService = themeOptionService;
    this.route = route;
    this.productSlider = productSlider2;
    this.categorySlider = categorySlider9;
    this.storageURL = environment.storageURL;
  }
  ngOnInit() {
    if (this.data?.slug == this.slug) {
      const getProducts$ = this.store.dispatch(new GetProductByIds({
        status: 1,
        paginate: this.data?.content?.products_ids.length,
        ids: this.data?.content?.products_ids?.join(",")
      }));
      const getStore$ = this.store.dispatch(new GetStores({
        status: 1,
        ids: this.data?.content?.main_content?.seller?.store_ids?.join()
      }));
      const brandIds = this.data?.content?.brands?.brand_ids;
      const getBrand$ = brandIds && brandIds.length > 0 ? this.store.dispatch(new GetBrands({
        status: 1,
        ids: brandIds.join()
      })) : null;
      document.body.classList.add("skeleton-body");
      const actions = [getProducts$, getStore$];
      if (getBrand$) {
        actions.push(getBrand$);
      }
      forkJoin(actions).subscribe({
        complete: () => {
          document.body.classList.remove("skeleton-body");
          this.themeOptionService.preloader = false;
        }
      });
    }
    this.route.queryParams.subscribe((params) => {
      if (this.route.snapshot.data["data"].theme_option.productBox === "digital") {
        if (this.productSlider && this.productSlider.responsive && this.productSlider.responsive["990"]) {
          this.productSlider = __spreadProps(__spreadValues({}, this.productSlider), { items: 3, responsive: __spreadProps(__spreadValues({}, this.productSlider.responsive), {
            990: {
              items: 3
            }
          }) });
        }
      } else {
        if (this.productSlider && this.productSlider.responsive && this.productSlider.responsive["990"]) {
          this.productSlider = __spreadProps(__spreadValues({}, this.productSlider), { items: 5, responsive: __spreadProps(__spreadValues({}, this.productSlider.responsive), {
            990: {
              items: 5
            }
          }) });
        }
      }
    });
  }
  ngAfterViewChecked() {
    document.querySelector(".header-top")?.classList.add("bg-dark");
  }
  ngOnDestroy() {
    document.querySelector(".header-top")?.classList.remove("bg-dark");
  }
  static {
    this.\u0275fac = function TokyoComponent_Factory(t) {
      return new (t || _TokyoComponent)(\u0275\u0275directiveInject(Store), \u0275\u0275directiveInject(ThemeOptionService), \u0275\u0275directiveInject(ActivatedRoute));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TokyoComponent, selectors: [["app-tokyo"]], inputs: { data: "data", slug: "slug" }, decls: 19, vars: 17, consts: [[1, "home-section", "home-section-ratio", "pt-md-2", "pt-3"], [3, "theme", "data"], [4, "ngIf"], ["class", "banner-section ratio_60", 4, "ngIf"], [1, "container-fluid-lg"], [1, "row", "g-3"], ["class", "brand-effect", 4, "ngIf"], [3, "theme", "sliderOption", "image", "categoryIds"], [1, "row"], [1, "col-12", "sale-banner"], [3, "banners"], [1, "banner-section", "ratio_60"], [3, "title", "description", "svg"], [3, "productIds", "slider", "sliderOption", "productStyle", "boxClass"], [1, "section-t-space"], [3, "productIds", "boxClass"], [1, "border-brand"], [3, "title", "description"], [3, "sellerIds"], [1, "col-xxl-3", "col-xl-4", "d-none", "d-xl-block"], [1, "position-sticky", "top-0"], [1, "col-12"], [3, "image", "bgImage"], [1, "top-selling-section"], [3, "data"], [1, "brand-effect"], [3, "brandIds"], [1, "newsletter-section", "section-b-space"]], template: function TokyoComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "section", 0);
        \u0275\u0275element(1, "app-theme-home-banner", 1);
        \u0275\u0275elementEnd();
        \u0275\u0275template(2, TokyoComponent_section_2_Template, 3, 7, "section", 2)(3, TokyoComponent_section_3_Template, 5, 5, "section", 2)(4, TokyoComponent_section_4_Template, 2, 3, "section", 3);
        \u0275\u0275elementStart(5, "section")(6, "div", 4)(7, "div", 5)(8, "div");
        \u0275\u0275template(9, TokyoComponent_ng_container_9_Template, 4, 11, "ng-container", 2)(10, TokyoComponent_ng_container_10_Template, 4, 7, "ng-container", 2)(11, TokyoComponent_ng_container_11_Template, 4, 4, "ng-container", 2)(12, TokyoComponent_ng_container_12_Template, 4, 11, "ng-container", 2)(13, TokyoComponent_ng_container_13_Template, 4, 11, "ng-container", 2);
        \u0275\u0275elementEnd();
        \u0275\u0275template(14, TokyoComponent_ng_container_14_Template, 5, 10, "ng-container", 2);
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(15, TokyoComponent_ng_container_15_Template, 6, 4, "ng-container", 2)(16, TokyoComponent_ng_container_16_Template, 4, 1, "ng-container", 2)(17, TokyoComponent_section_17_Template, 3, 2, "section", 6)(18, TokyoComponent_ng_container_18_Template, 3, 1, "ng-container", 2);
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275property("theme", "tokyo")("data", ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.home_banner);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.categories_icon_list == null ? null : ctx.data.content.categories_icon_list.status);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.coupons == null ? null : ctx.data.content.coupons.status);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.featured_banners == null ? null : ctx.data.content.featured_banners.status);
        \u0275\u0275advance(4);
        \u0275\u0275classMap((ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.main_content == null ? null : ctx.data.content.main_content.sidebar == null ? null : ctx.data.content.main_content.sidebar.status) ? "col-xxl-9 col-xl-8" : "col-xxl-12 col-xl-12");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.main_content == null ? null : ctx.data.content.main_content.section1_products == null ? null : ctx.data.content.main_content.section1_products.status);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.main_content == null ? null : ctx.data.content.main_content.section2_slider_products == null ? null : ctx.data.content.main_content.section2_slider_products.status);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.main_content == null ? null : ctx.data.content.main_content.seller == null ? null : ctx.data.content.main_content.seller.status);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.main_content == null ? null : ctx.data.content.main_content.section3_products == null ? null : ctx.data.content.main_content.section3_products.status);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.main_content == null ? null : ctx.data.content.main_content.section4_products == null ? null : ctx.data.content.main_content.section4_products.status);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.main_content == null ? null : ctx.data.content.main_content.sidebar == null ? null : ctx.data.content.main_content.sidebar.status);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.full_width_banner == null ? null : ctx.data.content.full_width_banner.status);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.slider_products == null ? null : ctx.data.content.slider_products.status);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", (ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.brands == null ? null : ctx.data.content.brands.brand_ids) && (ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.brands == null ? null : ctx.data.content.brands.status));
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.news_letter == null ? null : ctx.data.content.news_letter.status);
      }
    }, dependencies: [NgIf, TitleComponent, ImageLinkComponent, HomeBannerComponent, BannerComponent, CategoriesComponent2, ProductComponent, NewsletterComponent, FourColumnProductComponent, BrandComponent, TopSellerComponent] });
  }
};
__decorate([
  Select(ThemeOptionState.themeOptions)
], TokyoComponent.prototype, "themeOption$", void 0);
__decorate([
  Select(ThemeState.activeTheme)
], TokyoComponent.prototype, "activeTheme$", void 0);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TokyoComponent, { className: "TokyoComponent", filePath: "src\\app\\components\\themes\\tokyo\\tokyo.component.ts", lineNumber: 21 });
})();

// src/app/components/themes/widgets/collection/collection .component.ts
function CollectionComponent_ng_container_2_ng_container_1_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "div", 5);
    \u0275\u0275element(2, "app-image-link", 6);
    \u0275\u0275elementStart(3, "div", 7)(4, "div")(5, "a", 8)(6, "h3", 9);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "h5");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const bundles_r1 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275property("image", bundles_r1)("bgImage", false);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(bundles_r1 == null ? null : bundles_r1.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(bundles_r1 == null ? null : bundles_r1.sub_title);
  }
}
function CollectionComponent_ng_container_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, CollectionComponent_ng_container_2_ng_container_1_ng_template_1_Template, 10, 4, "ng-template", 3);
    \u0275\u0275elementContainerEnd();
  }
}
function CollectionComponent_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0, 3);
    \u0275\u0275template(1, CollectionComponent_ng_container_2_ng_container_1_Template, 2, 0, "ng-container", 4);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const bundles_r1 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", bundles_r1 == null ? null : bundles_r1.status);
  }
}
var CollectionComponent = class _CollectionComponent {
  constructor() {
    this.bannerSlider = bannerSlider;
  }
  static {
    this.\u0275fac = function CollectionComponent_Factory(t) {
      return new (t || _CollectionComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CollectionComponent, selectors: [["app-theme-collection"]], inputs: { data: "data" }, decls: 3, vars: 2, consts: [[1, "slider-4-1", "ratio_65", "no-arrow", "product-wrapper"], [3, "options"], ["carouselSlide", "", 4, "ngFor", "ngForOf"], ["carouselSlide", ""], [4, "ngIf"], [1, "product-slider"], [1, "b-cl", 3, "image", "bgImage"], [1, "product-slider-detail"], ["href", "javascript:void(0)", 1, "d-block"], [1, "text-title"]], template: function CollectionComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "owl-carousel-o", 1);
        \u0275\u0275template(2, CollectionComponent_ng_container_2_Template, 2, 1, "ng-container", 2);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275property("options", ctx.bannerSlider);
        \u0275\u0275advance();
        \u0275\u0275property("ngForOf", ctx.data);
      }
    }, dependencies: [NgForOf, NgIf, CarouselComponent, CarouselSlideDirective, ImageLinkComponent] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CollectionComponent, { className: "CollectionComponent", filePath: "src\\app\\components\\themes\\widgets\\collection\\collection .component.ts", lineNumber: 10 });
})();

// src/app/components/themes/osaka/osaka.component.ts
var _c09 = () => [];
function OsakaComponent_section_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section")(1, "div", 7);
    \u0275\u0275element(2, "app-title", 8)(3, "app-theme-categories", 9);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("title", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.categories_icon_list == null ? null : ctx_r0.data.content.categories_icon_list.title)("description", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.categories_icon_list == null ? null : ctx_r0.data.content.categories_icon_list.description);
    \u0275\u0275advance();
    \u0275\u0275styleMap("horizontal");
    \u0275\u0275property("theme", "paris")("sliderOption", ctx_r0.categorySlider)("image", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.categories_icon_list == null ? null : ctx_r0.data.content.categories_icon_list.image_url)("categoryIds", (ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.categories_icon_list == null ? null : ctx_r0.data.content.categories_icon_list.category_ids) || \u0275\u0275pureFunction0(8, _c09));
  }
}
function OsakaComponent_section_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section")(1, "div", 10)(2, "div", 11)(3, "div", 12);
    \u0275\u0275element(4, "app-theme-banner", 13);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275styleMap("full_width");
    \u0275\u0275classMap("banner-contain hover-effect");
    \u0275\u0275property("banners", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.coupons);
  }
}
function OsakaComponent_section_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section")(1, "div", 7);
    \u0275\u0275element(2, "app-title", 8);
    \u0275\u0275elementStart(3, "div");
    \u0275\u0275element(4, "app-theme-product", 14);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("title", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.products_list_1 == null ? null : ctx_r0.data.content.products_list_1.title)("description", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.products_list_1 == null ? null : ctx_r0.data.content.products_list_1.description);
    \u0275\u0275advance(2);
    \u0275\u0275styleMap("horizontal");
    \u0275\u0275property("productIds", (ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.products_list_1 == null ? null : ctx_r0.data.content.products_list_1.product_ids) || \u0275\u0275pureFunction0(7, _c09))("slider", true)("sliderOption", ctx_r0.productSlider6Item);
  }
}
function OsakaComponent_section_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section")(1, "div", 7)(2, "div", 11)(3, "div", 12);
    \u0275\u0275element(4, "app-theme-banner", 13);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275styleMap("full_width");
    \u0275\u0275classMap("offer-box hover-effect");
    \u0275\u0275property("banners", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.offer_banner);
  }
}
function OsakaComponent_ng_container_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "section")(2, "div", 7);
    \u0275\u0275element(3, "app-title", 8)(4, "app-top-seller", 15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275property("title", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.seller == null ? null : ctx_r0.data.content.seller.title)("description", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.seller == null ? null : ctx_r0.data.content.seller.description);
    \u0275\u0275advance();
    \u0275\u0275property("sellerIds", (ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.seller == null ? null : ctx_r0.data.content.seller.store_ids) || \u0275\u0275pureFunction0(3, _c09));
  }
}
function OsakaComponent_section_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section")(1, "div", 7);
    \u0275\u0275element(2, "app-title", 8);
    \u0275\u0275elementStart(3, "div");
    \u0275\u0275element(4, "app-theme-product", 14);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("title", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.products_list_2 == null ? null : ctx_r0.data.content.products_list_2.title)("description", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.products_list_2 == null ? null : ctx_r0.data.content.products_list_2.description);
    \u0275\u0275advance(2);
    \u0275\u0275styleMap("horizontal");
    \u0275\u0275property("productIds", (ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.products_list_2 == null ? null : ctx_r0.data.content.products_list_2.product_ids) || \u0275\u0275pureFunction0(7, _c09))("slider", true)("sliderOption", ctx_r0.productSlider6Item);
  }
}
function OsakaComponent_section_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section")(1, "div", 7)(2, "div", 11)(3, "div", 12);
    \u0275\u0275element(4, "app-theme-collection", 16);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275property("data", (ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.product_bundles == null ? null : ctx_r0.data.content.product_bundles.bundles) || \u0275\u0275pureFunction0(1, _c09));
  }
}
function OsakaComponent_section_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 17)(1, "div", 7);
    \u0275\u0275element(2, "app-four-column-product", 16);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("data", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.slider_products);
  }
}
function OsakaComponent_section_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section")(1, "div", 7);
    \u0275\u0275element(2, "app-title", 8)(3, "app-blog", 18);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("title", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.featured_blogs == null ? null : ctx_r0.data.content.featured_blogs.title)("description", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.featured_blogs == null ? null : ctx_r0.data.content.featured_blogs.description);
    \u0275\u0275advance();
    \u0275\u0275property("blogIds", (ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.featured_blogs == null ? null : ctx_r0.data.content.featured_blogs.blog_ids) || \u0275\u0275pureFunction0(4, _c09))("sliderOption", ctx_r0.productSlider);
  }
}
function OsakaComponent_section_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 19)(1, "div", 7);
    \u0275\u0275element(2, "app-brand", 20);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("brandIds", (ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.brands == null ? null : ctx_r0.data.content.brands.brand_ids) || \u0275\u0275pureFunction0(1, _c09));
  }
}
function OsakaComponent_section_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 21);
    \u0275\u0275element(1, "app-newsletter", 16);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("data", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.news_letter);
  }
}
var OsakaComponent = class _OsakaComponent {
  constructor(store, route, themeOptionService) {
    this.store = store;
    this.route = route;
    this.themeOptionService = themeOptionService;
    this.categorySlider = categorySlider9;
    this.productSlider6Item = productSlider6Item;
    this.productSlider = bannerSlider;
  }
  ngOnInit() {
    if (this.data?.slug == this.slug) {
      const getProducts$ = this.store.dispatch(new GetProductByIds({
        status: 1,
        paginate: this.data?.content?.products_ids.length,
        ids: this.data?.content?.products_ids?.join(",")
      }));
      const getStore$ = this.store.dispatch(new GetStores({
        status: 1,
        ids: this.data?.content?.seller?.store_ids?.join()
      }));
      const getBlogs$ = this.store.dispatch(new GetBlogs({
        status: 1,
        ids: this.data?.content?.featured_blogs?.blog_ids?.join(",")
      }));
      const brandIds = this.data?.content?.brands?.brand_ids;
      const getBrand$ = brandIds && brandIds.length > 0 ? this.store.dispatch(new GetBrands({
        status: 1,
        ids: brandIds.join()
      })) : null;
      document.body.classList.add("skeleton-body");
      const actions = [getProducts$, getStore$, getBlogs$];
      if (getBrand$) {
        actions.push(getBrand$);
      }
      forkJoin(actions).subscribe({
        complete: () => {
          document.body.classList.remove("skeleton-body");
          this.themeOptionService.preloader = false;
        }
      });
    }
    this.route.queryParams.subscribe((params) => {
      if (this.route.snapshot.data["data"].theme_option.productBox === "digital") {
        if (this.productSlider6Item && this.productSlider6Item.responsive && this.productSlider6Item.responsive["1065"]) {
          this.productSlider6Item = __spreadProps(__spreadValues({}, this.productSlider6Item), { items: 4, responsive: __spreadProps(__spreadValues({}, this.productSlider6Item.responsive), {
            1065: {
              items: 4
            }
          }) });
        }
      } else {
        if (this.productSlider6Item && this.productSlider6Item.responsive && this.productSlider6Item.responsive["1065"]) {
          this.productSlider6Item = __spreadProps(__spreadValues({}, this.productSlider6Item), { items: 6, responsive: __spreadProps(__spreadValues({}, this.productSlider6Item.responsive), {
            1065: {
              items: 6
            }
          }) });
        }
      }
    });
  }
  static {
    this.\u0275fac = function OsakaComponent_Factory(t) {
      return new (t || _OsakaComponent)(\u0275\u0275directiveInject(Store), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(ThemeOptionService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _OsakaComponent, selectors: [["app-osaka"]], inputs: { data: "data", slug: "slug" }, decls: 14, vars: 13, consts: [[1, "bg-effect"], [1, "home-section", "pt-md-2", "pt-3"], [3, "theme", "data"], [4, "ngIf"], ["class", "top-selling-section border-box", 4, "ngIf"], ["class", "brand-effect", 4, "ngIf"], ["class", "newsletter-section section-b-space", 4, "ngIf"], [1, "container-fluid-lg"], [3, "title", "description"], [3, "theme", "sliderOption", "image", "categoryIds"], [1, "container-fluid-lg", "sale-banner"], [1, "row"], [1, "col-12"], [3, "banners"], [3, "productIds", "slider", "sliderOption"], [3, "sellerIds"], [3, "data"], [1, "top-selling-section", "border-box"], [3, "blogIds", "sliderOption"], [1, "brand-effect"], [3, "brandIds"], [1, "newsletter-section", "section-b-space"]], template: function OsakaComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "section", 1);
        \u0275\u0275element(2, "app-theme-home-banner", 2);
        \u0275\u0275elementEnd();
        \u0275\u0275template(3, OsakaComponent_section_3_Template, 4, 9, "section", 3)(4, OsakaComponent_section_4_Template, 5, 5, "section", 3)(5, OsakaComponent_section_5_Template, 5, 8, "section", 3)(6, OsakaComponent_section_6_Template, 5, 5, "section", 3)(7, OsakaComponent_ng_container_7_Template, 5, 4, "ng-container", 3)(8, OsakaComponent_section_8_Template, 5, 8, "section", 3)(9, OsakaComponent_section_9_Template, 5, 2, "section", 3)(10, OsakaComponent_section_10_Template, 3, 1, "section", 4)(11, OsakaComponent_section_11_Template, 4, 5, "section", 3)(12, OsakaComponent_section_12_Template, 3, 2, "section", 5)(13, OsakaComponent_section_13_Template, 2, 1, "section", 6);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275property("theme", "osaka")("data", ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.home_banner);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.categories_icon_list == null ? null : ctx.data.content.categories_icon_list.status);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.coupons == null ? null : ctx.data.content.coupons.status);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.products_list_1 == null ? null : ctx.data.content.products_list_1.status);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.offer_banner == null ? null : ctx.data.content.offer_banner.status);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.seller == null ? null : ctx.data.content.seller.status);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.products_list_2 == null ? null : ctx.data.content.products_list_2.status);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.product_bundles == null ? null : ctx.data.content.product_bundles.status);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.slider_products == null ? null : ctx.data.content.slider_products.status);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", (ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.featured_blogs == null ? null : ctx.data.content.featured_blogs.status) && (ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.featured_blogs == null ? null : ctx.data.content.featured_blogs.blog_ids == null ? null : ctx.data.content.featured_blogs.blog_ids.length));
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", (ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.brands == null ? null : ctx.data.content.brands.brand_ids) && (ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.brands == null ? null : ctx.data.content.brands.status));
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.news_letter == null ? null : ctx.data.content.news_letter.status);
      }
    }, dependencies: [NgIf, TitleComponent, HomeBannerComponent, BannerComponent, CategoriesComponent2, ProductComponent, NewsletterComponent, BlogComponent, CollectionComponent, FourColumnProductComponent, BrandComponent, TopSellerComponent] });
  }
};
__decorate([
  Select(ThemeOptionState.themeOptions)
], OsakaComponent.prototype, "themeOption$", void 0);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(OsakaComponent, { className: "OsakaComponent", filePath: "src\\app\\components\\themes\\osaka\\osaka.component.ts", lineNumber: 20 });
})();

// src/app/components/themes/widgets/category-product-filter/category-product-filter.component.ts
var _c010 = (a0, a1, a2, a3) => [a0, a1, a2, a3];
var _c13 = (a0, a1, a2) => [a0, a1, a2];
var _c2 = () => [];
function CategoryProductFilterComponent_app_theme_categories_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-theme-categories", 6);
    \u0275\u0275listener("selectedCategory", function CategoryProductFilterComponent_app_theme_categories_1_Template_app_theme_categories_selectedCategory_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.selectCategory($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275styleMap("filter");
    \u0275\u0275property("categoryIds", (ctx_r1.data == null ? null : ctx_r1.data.categories_products == null ? null : ctx_r1.data.categories_products.category_ids) || \u0275\u0275pureFunction0(4, _c2))("selectedCategoryId", ctx_r1.selectedCategoryId);
  }
}
function CategoryProductFilterComponent_ng_container_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div");
    \u0275\u0275element(2, "app-product-box", 7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const product_r3 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275styleMap("horizontal");
    \u0275\u0275property("product", product_r3);
  }
}
var CategoryProductFilterComponent = class _CategoryProductFilterComponent {
  constructor(store, themeOptionService) {
    this.store = store;
    this.themeOptionService = themeOptionService;
    this.grid = 3;
    this.productFilterIds = [];
  }
  ngOnChanges() {
    this.categoryProduct$.subscribe((products) => {
      this.products = products.map((product) => product).slice(0, this.grid * 2);
    });
  }
  selectCategory(id) {
    this.selectedCategoryId = id;
    this.categoryProduct$.subscribe((products) => {
      if (id) {
        this.products = products.filter((product) => product?.categories?.map((category) => category.id).includes(id)).map((product) => product).slice(0, this.grid * 2);
      } else {
        this.products = products.filter((product) => product?.categories?.map((category) => category.id)).map((product) => product).slice(0, this.grid * 2);
      }
    });
  }
  static {
    this.\u0275fac = function CategoryProductFilterComponent_Factory(t) {
      return new (t || _CategoryProductFilterComponent)(\u0275\u0275directiveInject(Store), \u0275\u0275directiveInject(ThemeOptionService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CategoryProductFilterComponent, selectors: [["app-category-product-filter"]], inputs: { data: "data", sliderOption: "sliderOption", grid: "grid" }, features: [\u0275\u0275NgOnChangesFeature], decls: 10, vars: 26, consts: [[3, "title"], [3, "categoryIds", "style", "selectedCategoryId", "selectedCategory", 4, "ngIf"], [1, "container-fluid-lg"], [3, "ngClass"], [1, "row", "g-sm-4", "g-3", 3, "ngClass"], [4, "ngFor", "ngForOf"], [3, "selectedCategory", "categoryIds", "selectedCategoryId"], [3, "product"]], template: function CategoryProductFilterComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "app-title", 0);
        \u0275\u0275template(1, CategoryProductFilterComponent_app_theme_categories_1_Template, 1, 5, "app-theme-categories", 1);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(2, "div", 2)(3, "div", 3);
        \u0275\u0275pipe(4, "async");
        \u0275\u0275pipe(5, "async");
        \u0275\u0275pipe(6, "async");
        \u0275\u0275pipe(7, "async");
        \u0275\u0275elementStart(8, "div", 4);
        \u0275\u0275template(9, CategoryProductFilterComponent_ng_container_9_Template, 3, 3, "ng-container", 5);
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        let tmp_4_0;
        \u0275\u0275styleMap("simple");
        \u0275\u0275classMap("container-fluid-lg");
        \u0275\u0275property("title", ctx.data == null ? null : ctx.data.categories_products == null ? null : ctx.data.categories_products.title);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.data == null ? null : ctx.data.categories_products == null ? null : ctx.data.categories_products.category_ids == null ? null : ctx.data.categories_products.category_ids.length);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngClass", \u0275\u0275pureFunction4(17, _c010, ((tmp_4_0 = \u0275\u0275pipeBind1(4, 9, ctx.themeOption$)) == null ? null : tmp_4_0.product == null ? null : tmp_4_0.product.full_border) ? "full_border" : "", ((tmp_4_0 = \u0275\u0275pipeBind1(5, 11, ctx.themeOption$)) == null ? null : tmp_4_0.product == null ? null : tmp_4_0.product.image_bg) ? "product_img_bg" : "", ((tmp_4_0 = \u0275\u0275pipeBind1(6, 13, ctx.themeOption$)) == null ? null : tmp_4_0.product == null ? null : tmp_4_0.product.product_box_bg) ? "full_bg" : "", ((tmp_4_0 = \u0275\u0275pipeBind1(7, 15, ctx.themeOption$)) == null ? null : tmp_4_0.product == null ? null : tmp_4_0.product.product_box_border) ? "product_border" : ""));
        \u0275\u0275advance(5);
        \u0275\u0275property("ngClass", \u0275\u0275pureFunction3(22, _c13, ctx.grid === 4 ? "row-cols-xl-4 row-cols-md-3 row-cols-2" : "", ctx.grid === 5 ? "row-cols-xl-5 row-cols-lg-4 row-cols-md-3 row-cols-2" : "", ctx.grid === 6 ? "row-cols-xxl-6 row-cols-lg-4 row-cols-md-3 row-cols-2" : ""));
        \u0275\u0275advance();
        \u0275\u0275property("ngForOf", ctx.products);
      }
    }, dependencies: [NgClass, NgForOf, NgIf, TitleComponent, ProductBoxComponent, CategoriesComponent2, AsyncPipe] });
  }
};
__decorate([
  Select(ThemeOptionState.themeOptions)
], CategoryProductFilterComponent.prototype, "themeOption$", void 0);
__decorate([
  Select(ProductState.categoryProducts)
], CategoryProductFilterComponent.prototype, "categoryProduct$", void 0);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CategoryProductFilterComponent, { className: "CategoryProductFilterComponent", filePath: "src\\app\\components\\themes\\widgets\\category-product-filter\\category-product-filter.component.ts", lineNumber: 17 });
})();

// src/app/components/themes/rome/rome.component.ts
var _c011 = (a0) => ({ "background-image": a0 });
var _c14 = () => [];
function RomeComponent_section_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 11);
    \u0275\u0275element(1, "app-theme-home-banner", 12);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("ngStyle", \u0275\u0275pureFunction1(3, _c011, "url(" + (ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.home_banner == null ? null : ctx_r0.data.content.home_banner.bg_image_url) + ")"));
    \u0275\u0275advance();
    \u0275\u0275property("theme", "rome")("data", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.home_banner);
  }
}
function RomeComponent_section_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 13)(1, "div", 14);
    \u0275\u0275element(2, "app-title", 15);
    \u0275\u0275elementStart(3, "div", 16)(4, "div", 17);
    \u0275\u0275element(5, "app-theme-categories", 18);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275styleMap("simple");
    \u0275\u0275property("title", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.categories_image_list == null ? null : ctx_r0.data.content.categories_image_list.title);
    \u0275\u0275advance(3);
    \u0275\u0275styleMap("horizontal");
    \u0275\u0275property("theme", "rome")("categoryIds", (ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.categories_image_list == null ? null : ctx_r0.data.content.categories_image_list.category_ids) || \u0275\u0275pureFunction0(8, _c14))("sliderOption", ctx_r0.categorySlider);
  }
}
function RomeComponent_section_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 19);
    \u0275\u0275element(1, "app-title", 15);
    \u0275\u0275elementStart(2, "div", 16)(3, "div", 17);
    \u0275\u0275element(4, "app-theme-banner", 20);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275styleMap("simple");
    \u0275\u0275classMap("container-fluid-lg");
    \u0275\u0275property("title", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.value_banners == null ? null : ctx_r0.data.content.value_banners.title);
    \u0275\u0275advance(3);
    \u0275\u0275styleMap("horizontal");
    \u0275\u0275property("banners", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.value_banners == null ? null : ctx_r0.data.content.value_banners.banners);
  }
}
function RomeComponent_section_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 21);
    \u0275\u0275element(1, "app-category-product-filter", 22);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("data", ctx_r0.data == null ? null : ctx_r0.data.content)("grid", ctx_r0.showProductBox);
  }
}
function RomeComponent_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "section")(2, "div", 14);
    \u0275\u0275element(3, "app-title", 15)(4, "app-top-seller", 23);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275styleMap("simple");
    \u0275\u0275property("title", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.seller == null ? null : ctx_r0.data.content.seller.title);
    \u0275\u0275advance();
    \u0275\u0275property("sellerIds", (ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.seller == null ? null : ctx_r0.data.content.seller.store_ids) || \u0275\u0275pureFunction0(4, _c14));
  }
}
function RomeComponent_section_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 24)(1, "div", 14)(2, "div", 25)(3, "div", 26);
    \u0275\u0275element(4, "app-image-link", 27);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 26);
    \u0275\u0275element(6, "app-image-link", 27);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275classMap("banner-contain-3 hover-effect");
    \u0275\u0275property("image", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.two_column_banners == null ? null : ctx_r0.data.content.two_column_banners.banner_1)("bgImage", false);
    \u0275\u0275advance(2);
    \u0275\u0275classMap("banner-contain-3 hover-effect");
    \u0275\u0275property("image", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.two_column_banners == null ? null : ctx_r0.data.content.two_column_banners.banner_2)("bgImage", false);
  }
}
function RomeComponent_section_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 28)(1, "div", 14);
    \u0275\u0275element(2, "app-four-column-product", 29);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("data", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.slider_products);
  }
}
function RomeComponent_div_8_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 31);
    \u0275\u0275element(1, "app-theme-banner", 20);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275styleMap("full_width");
    \u0275\u0275property("banners", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.full_width_banner);
  }
}
function RomeComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14);
    \u0275\u0275template(1, RomeComponent_div_8_div_1_Template, 2, 3, "div", 30);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.full_width_banner == null ? null : ctx_r0.data.content.full_width_banner.status);
  }
}
function RomeComponent_section_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 21)(1, "div", 14);
    \u0275\u0275element(2, "app-title", 15)(3, "app-theme-product", 32);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275styleMap("simple");
    \u0275\u0275property("title", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.products_list_1 == null ? null : ctx_r0.data.content.products_list_1.title);
    \u0275\u0275advance();
    \u0275\u0275styleMap("horizontal");
    \u0275\u0275property("productIds", (ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.products_list_1 == null ? null : ctx_r0.data.content.products_list_1.product_ids) || \u0275\u0275pureFunction0(10, _c14))("slider", true)("productStyle", "product-standard")("boxClass", "product-box-bg")("sliderOption", ctx_r0.productSlider6ItemMargin);
  }
}
function RomeComponent_section_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section")(1, "div", 14);
    \u0275\u0275element(2, "app-title", 15)(3, "app-blog", 33);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275styleMap("simple");
    \u0275\u0275property("title", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.featured_blogs == null ? null : ctx_r0.data.content.featured_blogs.title);
    \u0275\u0275advance();
    \u0275\u0275property("sliderOption", ctx_r0.customOptionsItem4)("blogIds", (ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.featured_blogs == null ? null : ctx_r0.data.content.featured_blogs.blog_ids) || \u0275\u0275pureFunction0(5, _c14));
  }
}
function RomeComponent_section_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 34)(1, "div", 14);
    \u0275\u0275element(2, "app-brand", 35);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("brandIds", (ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.brands == null ? null : ctx_r0.data.content.brands.brand_ids) || \u0275\u0275pureFunction0(1, _c14));
  }
}
function RomeComponent_section_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 36);
    \u0275\u0275element(1, "app-newsletter", 29);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275styleMap("classic");
    \u0275\u0275property("data", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.news_letter);
  }
}
var RomeComponent = class _RomeComponent {
  constructor(store, route, themeOptionService) {
    this.store = store;
    this.route = route;
    this.themeOptionService = themeOptionService;
    this.categorySlider = categorySlider9;
    this.productSlider6ItemMargin = productSlider6ItemMargin;
    this.customOptionsItem4 = customOptionsItem4;
    this.productFilterIds = [];
    this.showProductBox = 6;
  }
  ngOnInit() {
    if (this.data?.slug == this.slug) {
      const getProducts$ = this.store.dispatch(new GetProductByIds({
        status: 1,
        paginate: this.data?.content?.products_ids.length,
        ids: this.data?.content?.products_ids?.join(",")
      }));
      const getStore$ = this.store.dispatch(new GetStores({
        status: 1,
        ids: this.data?.content?.seller?.store_ids?.join()
      }));
      const getBlogs$ = this.store.dispatch(new GetBlogs({
        status: 1,
        ids: this.data?.content?.featured_blogs?.blog_ids?.join(",")
      }));
      const getCatProducts$ = this.store.dispatch(new GetCategoryProducts({
        category_ids: this.data?.content?.categories_products?.category_ids?.join(",")
      }));
      const brandIds = this.data?.content?.brands?.brand_ids;
      const getBrand$ = brandIds && brandIds.length > 0 ? this.store.dispatch(new GetBrands({
        status: 1,
        ids: brandIds.join()
      })) : null;
      document.body.classList.add("skeleton-body");
      const actions = [getProducts$, getBlogs$, getCatProducts$, getStore$];
      if (getBrand$) {
        actions.push(getBrand$);
      }
      forkJoin(actions).subscribe({
        complete: () => {
          document.body.classList.remove("skeleton-body");
          this.themeOptionService.preloader = false;
        }
      });
      if (this.data?.content?.categories_products && this.data?.content?.categories_products?.category_ids?.length) {
        this.selectCategory(this.data?.content?.categories_products?.category_ids[0]);
      }
    }
    this.route.queryParams.subscribe((params) => {
      if (this.route.snapshot.data["data"].theme_option.productBox === "digital") {
        if (this.productSlider6ItemMargin && this.productSlider6ItemMargin.responsive && this.productSlider6ItemMargin.responsive["1180"]) {
          this.productSlider6ItemMargin = __spreadProps(__spreadValues({}, this.productSlider6ItemMargin), { items: 4, responsive: __spreadProps(__spreadValues({}, this.productSlider6ItemMargin.responsive), {
            1180: {
              items: 4
            }
          }) });
          this.showProductBox = 4;
        }
      } else {
        if (this.productSlider6ItemMargin && this.productSlider6ItemMargin.responsive && this.productSlider6ItemMargin.responsive["1180"]) {
          this.productSlider6ItemMargin = __spreadProps(__spreadValues({}, this.productSlider6ItemMargin), { items: 6, responsive: __spreadProps(__spreadValues({}, this.productSlider6ItemMargin.responsive), {
            1180: {
              items: 6
            }
          }) });
          this.showProductBox = 6;
        }
      }
    });
  }
  selectCategory(id) {
    this.selectedCategoryId = id;
    this.categoryProduct$.subscribe((products) => {
      this.productFilterIds = products.filter((product) => product?.categories?.map((category) => category.id).includes(id))?.map((product) => product.id).slice(0, 5);
    });
  }
  static {
    this.\u0275fac = function RomeComponent_Factory(t) {
      return new (t || _RomeComponent)(\u0275\u0275directiveInject(Store), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(ThemeOptionService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RomeComponent, selectors: [["app-rome"]], inputs: { data: "data", slug: "slug" }, decls: 13, vars: 12, consts: [[1, "bg-effect"], ["class", "home-section-2 home-section-small section-b-space", 3, "ngStyle", 4, "ngIf"], ["class", "category-section-2", 4, "ngIf"], ["class", "overflow-hidden", 4, "ngIf"], ["class", "product-section", 4, "ngIf"], [4, "ngIf"], ["class", "banner-section", 4, "ngIf"], ["class", "top-selling-section border-box section-b-space", 4, "ngIf"], ["class", "container-fluid-lg", 4, "ngIf"], ["class", "brand-effect", 4, "ngIf"], ["class", "newsletter-section-2 section-b-space", 4, "ngIf"], [1, "home-section-2", "home-section-small", "section-b-space", 3, "ngStyle"], [3, "theme", "data"], [1, "category-section-2"], [1, "container-fluid-lg"], [3, "title"], [1, "row"], [1, "col-12"], [3, "theme", "categoryIds", "sliderOption"], [1, "overflow-hidden"], [3, "banners"], [1, "product-section"], [3, "data", "grid"], [3, "sellerIds"], [1, "banner-section"], [1, "row", "gy-xl-0", "gy-3"], [1, "col-lg-6"], [3, "image", "bgImage"], [1, "top-selling-section", "border-box", "section-b-space"], [3, "data"], ["class", "ratio_12", 4, "ngIf"], [1, "ratio_12"], [3, "productIds", "slider", "productStyle", "boxClass", "sliderOption"], [3, "sliderOption", "blogIds"], [1, "brand-effect"], [3, "brandIds"], [1, "newsletter-section-2", "section-b-space"]], template: function RomeComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275template(1, RomeComponent_section_1_Template, 2, 5, "section", 1)(2, RomeComponent_section_2_Template, 6, 9, "section", 2)(3, RomeComponent_section_3_Template, 5, 8, "section", 3)(4, RomeComponent_section_4_Template, 2, 2, "section", 4)(5, RomeComponent_ng_container_5_Template, 5, 5, "ng-container", 5)(6, RomeComponent_section_6_Template, 7, 8, "section", 6)(7, RomeComponent_section_7_Template, 3, 1, "section", 7)(8, RomeComponent_div_8_Template, 2, 1, "div", 8)(9, RomeComponent_section_9_Template, 4, 11, "section", 4)(10, RomeComponent_section_10_Template, 4, 6, "section", 5)(11, RomeComponent_section_11_Template, 3, 2, "section", 9)(12, RomeComponent_section_12_Template, 2, 3, "section", 10);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.home_banner);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.categories_image_list == null ? null : ctx.data.content.categories_image_list.status);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.value_banners == null ? null : ctx.data.content.value_banners.status);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", (ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.categories_products == null ? null : ctx.data.content.categories_products.status) && (ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.categories_products == null ? null : ctx.data.content.categories_products.category_ids == null ? null : ctx.data.content.categories_products.category_ids.length));
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.seller == null ? null : ctx.data.content.seller.status);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.two_column_banners == null ? null : ctx.data.content.two_column_banners.status);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.slider_products == null ? null : ctx.data.content.slider_products.status);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.full_width_banner == null ? null : ctx.data.content.full_width_banner.status);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.products_list_1 == null ? null : ctx.data.content.products_list_1.status);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.featured_blogs == null ? null : ctx.data.content.featured_blogs.status);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", (ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.brands == null ? null : ctx.data.content.brands.brand_ids) && (ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.brands == null ? null : ctx.data.content.brands.status));
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.news_letter == null ? null : ctx.data.content.news_letter.status);
      }
    }, dependencies: [NgIf, NgStyle, TitleComponent, ImageLinkComponent, HomeBannerComponent, BannerComponent, CategoriesComponent2, ProductComponent, NewsletterComponent, BlogComponent, FourColumnProductComponent, CategoryProductFilterComponent, BrandComponent, TopSellerComponent] });
  }
};
__decorate([
  Select(ProductState.categoryProducts)
], RomeComponent.prototype, "categoryProduct$", void 0);
__decorate([
  Select(ThemeOptionState.themeOptions)
], RomeComponent.prototype, "themeOption$", void 0);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RomeComponent, { className: "RomeComponent", filePath: "src\\app\\components\\themes\\rome\\rome.component.ts", lineNumber: 22 });
})();

// src/app/components/themes/widgets/wallet-offer/wallet-offer.component.ts
function WalletOfferComponent_ng_container_2_ng_container_1_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "div", 5)(2, "div", 6)(3, "div", 7);
    \u0275\u0275element(4, "img", 8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 9)(6, "h4");
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementStart(9, "input", 10);
    \u0275\u0275twoWayListener("ngModelChange", function WalletOfferComponent_ng_container_2_ng_container_1_ng_template_1_Template_input_ngModelChange_9_listener($event) {
      \u0275\u0275restoreView(_r1);
      const offer_r2 = \u0275\u0275nextContext(2).$implicit;
      \u0275\u0275twoWayBindingSet(offer_r2.coupon_code, $event) || (offer_r2.coupon_code = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "app-button", 11);
    \u0275\u0275listener("click", function WalletOfferComponent_ng_container_2_ng_container_1_ng_template_1_Template_app_button_click_10_listener() {
      \u0275\u0275restoreView(_r1);
      const offer_r2 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.copyFunction(offer_r2.coupon_code));
    });
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const offer_r2 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275property("src", ctx_r2.storageURL + offer_r2.image_url, \u0275\u0275sanitizeUrl)("alt", offer_r2.coupon_code);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(8, 11, "code"), " : ");
    \u0275\u0275advance(2);
    \u0275\u0275property("name", offer_r2.coupon_code);
    \u0275\u0275twoWayProperty("ngModel", offer_r2.coupon_code);
    \u0275\u0275advance();
    \u0275\u0275classMap("bank-coupon btn");
    \u0275\u0275property("type", "button")("id", "coupon_btn")("spinner", false);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(12, 13, "copy_code"));
  }
}
function WalletOfferComponent_ng_container_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, WalletOfferComponent_ng_container_2_ng_container_1_ng_template_1_Template, 13, 15, "ng-template", 3);
    \u0275\u0275elementContainerEnd();
  }
}
function WalletOfferComponent_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0, 3);
    \u0275\u0275template(1, WalletOfferComponent_ng_container_2_ng_container_1_Template, 2, 0, "ng-container", 4);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const offer_r2 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", offer_r2 == null ? null : offer_r2.status);
  }
}
var WalletOfferComponent = class _WalletOfferComponent {
  constructor() {
    this.customOptionsItem3 = customOptionsItem3;
    this.storageURL = environment.storageURL;
  }
  copyFunction(txt) {
    navigator.clipboard.writeText(txt);
  }
  static {
    this.\u0275fac = function WalletOfferComponent_Factory(t) {
      return new (t || _WalletOfferComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _WalletOfferComponent, selectors: [["app-wallet-offer"]], inputs: { offers: "offers" }, decls: 3, vars: 2, consts: [[1, "slider-bank-3", "arrow-slider", "slick-height"], [3, "options"], ["carouselSlide", "", 4, "ngFor", "ngForOf"], ["carouselSlide", ""], [4, "ngIf"], [1, "bank-offer"], [1, "bank-header"], [1, "bank-right", "w-100"], [1, "img-fluid", 3, "src", "alt"], [1, "bank-footer"], ["type", "text", 1, "form-control", 3, "ngModelChange", "name", "ngModel"], [3, "click", "type", "id", "spinner"]], template: function WalletOfferComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "owl-carousel-o", 1);
        \u0275\u0275template(2, WalletOfferComponent_ng_container_2_Template, 2, 1, "ng-container", 2);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275property("options", ctx.customOptionsItem3);
        \u0275\u0275advance();
        \u0275\u0275property("ngForOf", ctx.offers);
      }
    }, dependencies: [NgForOf, NgIf, DefaultValueAccessor, NgControlStatus, NgModel, CarouselComponent, CarouselSlideDirective, ButtonComponent, TranslatePipe] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(WalletOfferComponent, { className: "WalletOfferComponent", filePath: "src\\app\\components\\themes\\widgets\\wallet-offer\\wallet-offer.component.ts", lineNumber: 11 });
})();

// src/app/components/themes/widgets/deal/deal.component.ts
var _c012 = (a0) => ({ "background-image": a0 });
var _c15 = (a0) => ["/product/", a0];
var _c22 = (a0) => ({ width: a0 });
function DealComponent_div_0_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9)(1, "div", 10)(2, "div", 11);
    \u0275\u0275element(3, "img", 12);
    \u0275\u0275elementStart(4, "div", 13)(5, "h6");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r0.data == null ? null : ctx_r0.data.label);
  }
}
function DealComponent_div_0_ng_container_8_1_ng_template_0_div_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 40)(1, "ul", 41)(2, "li")(3, "div", 42)(4, "div", 43)(5, "h6");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(7, "li")(8, "div", 42)(9, "div", 44)(10, "h6");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(12, "li")(13, "div", 42)(14, "div", 45)(15, "h6");
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(17, "li")(18, "div", 42)(19, "div", 46)(20, "h6");
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    const deal_r3 = \u0275\u0275nextContext(3).$implicit;
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(deal_r3 == null ? null : deal_r3.remainingTime == null ? null : deal_r3.remainingTime.days);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(deal_r3 == null ? null : deal_r3.remainingTime == null ? null : deal_r3.remainingTime.hours);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(deal_r3 == null ? null : deal_r3.remainingTime == null ? null : deal_r3.remainingTime.minutes);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(deal_r3 == null ? null : deal_r3.remainingTime == null ? null : deal_r3.remainingTime.seconds);
  }
}
function DealComponent_div_0_ng_container_8_1_ng_template_0_ng_template_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h2", 47);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const deal_r3 = \u0275\u0275nextContext(3).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, deal_r3.remainingTime.seconds < 0 ? "offer_closed" : ""));
  }
}
function DealComponent_div_0_ng_container_8_1_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "div", 16)(2, "a", 17);
    \u0275\u0275element(3, "img", 18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "ul", 19)(5, "li", 20)(6, "a", 21);
    \u0275\u0275element(7, "i", 22);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "li", 23)(9, "a", 24);
    \u0275\u0275listener("click", function DealComponent_div_0_ng_container_8_1_ng_template_0_Template_a_click_9_listener() {
      \u0275\u0275restoreView(_r2);
      const deal_r3 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.addToWishlist(deal_r3.product));
    });
    \u0275\u0275element(10, "i");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "li", 25)(12, "a", 26);
    \u0275\u0275listener("click", function DealComponent_div_0_ng_container_8_1_ng_template_0_Template_a_click_12_listener() {
      \u0275\u0275restoreView(_r2);
      const deal_r3 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.addToCompare(deal_r3.product.id));
    });
    \u0275\u0275element(13, "i", 27);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(14, "div", 28)(15, "ul", 29);
    \u0275\u0275element(16, "ngb-rating", 30);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "a", 17)(18, "h3", 31);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "h3", 32);
    \u0275\u0275text(21);
    \u0275\u0275pipe(22, "currencySymbol");
    \u0275\u0275elementStart(23, "del", 33);
    \u0275\u0275text(24);
    \u0275\u0275pipe(25, "currencySymbol");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "div", 34);
    \u0275\u0275element(27, "div", 35);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "h5", 36);
    \u0275\u0275text(29);
    \u0275\u0275pipe(30, "translate");
    \u0275\u0275elementStart(31, "span", 37);
    \u0275\u0275text(32);
    \u0275\u0275pipe(33, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "span", 38);
    \u0275\u0275text(35);
    \u0275\u0275pipe(36, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(37, DealComponent_div_0_ng_container_8_1_ng_template_0_div_37_Template, 22, 4, "div", 39)(38, DealComponent_div_0_ng_container_8_1_ng_template_0_ng_template_38_Template, 3, 3, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const offer_close_r4 = \u0275\u0275reference(39);
    const deal_r3 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275property("src", deal_r3 == null ? null : deal_r3.product == null ? null : deal_r3.product.product_thumbnail == null ? null : deal_r3.product.product_thumbnail.original_url, \u0275\u0275sanitizeUrl)("alt", deal_r3 == null ? null : deal_r3.product == null ? null : deal_r3.product.name);
    \u0275\u0275advance(3);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(29, _c15, deal_r3 == null ? null : deal_r3.product == null ? null : deal_r3.product.slug));
    \u0275\u0275advance(4);
    \u0275\u0275classMapInterpolate1("ri-heart-", (deal_r3 == null ? null : deal_r3.product == null ? null : deal_r3.product.is_wishlist) ? "fill" : "line", "");
    \u0275\u0275classProp("theme-color", deal_r3 == null ? null : deal_r3.product == null ? null : deal_r3.product.is_wishlist);
    \u0275\u0275advance(6);
    \u0275\u0275property("rate", (deal_r3 == null ? null : deal_r3.product == null ? null : deal_r3.product.rating_count) || 0);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", deal_r3 == null ? null : deal_r3.product == null ? null : deal_r3.product.name, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(22, 19, deal_r3 == null ? null : deal_r3.product == null ? null : deal_r3.product.sale_price), "");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(25, 21, deal_r3 == null ? null : deal_r3.product == null ? null : deal_r3.product.price));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngStyle", \u0275\u0275pureFunction1(31, _c22, (deal_r3 == null ? null : deal_r3.product == null ? null : deal_r3.product.quantity) * 100 / 10 + "%"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(30, 23, "sold"), " : ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", deal_r3 == null ? null : deal_r3.product == null ? null : deal_r3.product.quantity, " ", \u0275\u0275pipeBind1(33, 25, "items"), "");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(36, 27, "hurry_up_offer_end_in"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", deal_r3.remainingTime.seconds >= 0)("ngIfElse", offer_close_r4);
  }
}
function DealComponent_div_0_ng_container_8_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, DealComponent_div_0_ng_container_8_1_ng_template_0_Template, 40, 33, "ng-template", 15);
  }
}
function DealComponent_div_0_ng_container_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, DealComponent_div_0_ng_container_8_1_Template, 1, 0, null, 14);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const deal_r3 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (deal_r3 == null ? null : deal_r3.status) && !!deal_r3.remainingTime);
  }
}
function DealComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2)(1, "div", 3)(2, "h2");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 4);
    \u0275\u0275template(5, DealComponent_div_0_div_5_Template, 7, 1, "div", 5);
    \u0275\u0275elementStart(6, "div", 6)(7, "owl-carousel-o", 7);
    \u0275\u0275template(8, DealComponent_div_0_ng_container_8_Template, 2, 1, "ng-container", 8);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("ngStyle", \u0275\u0275pureFunction1(5, _c012, "url(" + (ctx_r0.storageURL + (ctx_r0.data == null ? null : ctx_r0.data.image_url)) + ")"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.data == null ? null : ctx_r0.data.title);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r0.data == null ? null : ctx_r0.data.label);
    \u0275\u0275advance(2);
    \u0275\u0275property("options", ctx_r0.dealSlider);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r0.deals);
  }
}
var DealComponent = class _DealComponent {
  constructor(config, store) {
    this.config = config;
    this.store = store;
    this.isDeal = new EventEmitter();
    this.dealSlider = singleSlider;
    this.deals = [];
    this.storageURL = environment.storageURL;
    config.max = 5;
    config.readonly = true;
  }
  ngOnChanges(changes) {
    let dealsArray = changes["data"]?.currentValue?.deals;
    this.product$.subscribe((products) => {
      dealsArray.map((deal) => {
        deal.product = products.find((product) => product.id === deal.product_id);
      });
      this.deals = dealsArray;
      this.isDeal.emit(this.deals?.length ? true : false);
      this.startTimers();
    });
  }
  startTimers() {
    for (let counterItem of this.deals) {
      const endDate = new Date(counterItem.end_date).getTime();
      const currentTime = (/* @__PURE__ */ new Date()).getTime();
      const timeDifference = endDate - currentTime;
      if (timeDifference > 0) {
        counterItem.remainingTime = this.calculateRemainingTime(timeDifference);
        setInterval(() => {
          counterItem.remainingTime = this.calculateRemainingTime(endDate - (/* @__PURE__ */ new Date()).getTime());
        }, 1e3);
      }
    }
  }
  calculateRemainingTime(timeDifference) {
    const days = Math.floor(timeDifference / (1e3 * 60 * 60 * 24));
    const hours = Math.floor(timeDifference % (1e3 * 60 * 60 * 24) / (1e3 * 60 * 60));
    const minutes = Math.floor(timeDifference % (1e3 * 60 * 60) / (1e3 * 60));
    const seconds = Math.floor(timeDifference % (1e3 * 60) / 1e3);
    return { days, hours, minutes, seconds };
  }
  addToWishlist(product) {
    product["is_wishlist"] = !product["is_wishlist"];
    let action = product["is_wishlist"] ? new AddToWishlist({ product_id: product.id }) : new DeleteWishlist(product.id);
    if (action) {
      this.store.dispatch(action);
    }
  }
  addToCompare(id) {
    this.store.dispatch(new AddToCompare({ product_id: id }));
  }
  static {
    this.\u0275fac = function DealComponent_Factory(t) {
      return new (t || _DealComponent)(\u0275\u0275directiveInject(NgbRatingConfig), \u0275\u0275directiveInject(Store));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DealComponent, selectors: [["app-deal"]], inputs: { data: "data" }, outputs: { isDeal: "isDeal" }, features: [\u0275\u0275NgOnChangesFeature], decls: 1, vars: 1, consts: [["offer_close", ""], ["class", "product-bg-image", 3, "ngStyle", 4, "ngIf"], [1, "product-bg-image", 3, "ngStyle"], [1, "product-title", "product-warning"], [1, "product-box-4", "product-box-3", "rounded-0"], ["class", "deal-box", 4, "ngIf"], [1, "top-selling-slider", "product-arrow"], [3, "options"], [4, "ngFor", "ngForOf"], [1, "deal-box"], [1, "circle-box"], [1, "shape-circle"], ["src", "assets/images/svg/circle.svg", "alt", "circle"], [1, "shape-text"], [4, "ngIf"], ["carouselSlide", ""], [1, "product-image"], ["href", "javascript:void(0)"], [1, "img-fluid", "product-image", 3, "src", "alt"], [1, "option"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Quick View"], ["href", "javascript:void(0)", 3, "routerLink"], [1, "ri-eye-line"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Wishlist"], ["href", "javascript:void(0)", 1, "notifi-wishlist", 3, "click"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Compare"], ["href", "javascript:void(0)", 3, "click"], [1, "ri-refresh-line"], [1, "product-detail", "text-center"], [1, "product-rating", "justify-content-center"], [3, "rate"], [1, "name", "w-100", "mx-auto", "text-center"], [1, "price", "theme-color", "d-flex", "justify-content-center"], [1, "delete-price"], [1, "progress", "custom-progressbar"], ["role", "progressbar", "aria-valuenow", "0", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", 3, "ngStyle"], [1, "text-content"], [1, "text-dark"], [1, "ms-auto", "text-content"], ["class", "timer timer-2 ms-0 my-4", "id", "clockdiv-1", 4, "ngIf", "ngIfElse"], ["id", "clockdiv-1", 1, "timer", "timer-2", "ms-0", "my-4"], [1, "d-flex", "justify-content-center"], [1, "counter"], [1, "days"], [1, "hours"], [1, "minutes"], [1, "seconds"], [1, "mt-3"]], template: function DealComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, DealComponent_div_0_Template, 9, 7, "div", 1);
      }
      if (rf & 2) {
        \u0275\u0275property("ngIf", ctx.deals.length);
      }
    }, dependencies: [NgForOf, NgIf, NgStyle, RouterLink, CarouselComponent, CarouselSlideDirective, NgbRating, CurrencySymbolPipe, TranslatePipe] });
  }
};
__decorate([
  Select(ProductState.productByIds)
], DealComponent.prototype, "product$", void 0);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DealComponent, { className: "DealComponent", filePath: "src\\app\\components\\themes\\widgets\\deal\\deal.component.ts", lineNumber: 19 });
})();

// src/app/components/themes/madrid/madrid.component.ts
var _c013 = () => [];
var _c16 = () => ({});
function MadridComponent_section_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 28);
    \u0275\u0275element(1, "app-theme-home-banner", 29);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("theme", "madrid")("data", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.home_banner);
  }
}
function MadridComponent_section_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 30);
    \u0275\u0275element(1, "app-theme-banner", 31);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275styleMap("horizontal");
    \u0275\u0275property("banners", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.featured_banners == null ? null : ctx_r0.data.content.featured_banners.banners);
  }
}
function MadridComponent_section_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 32)(1, "div", 13);
    \u0275\u0275element(2, "app-title", 33)(3, "app-theme-categories", 34);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275styleMap("simple");
    \u0275\u0275property("title", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.categories_image_list == null ? null : ctx_r0.data.content.categories_image_list.title);
    \u0275\u0275advance();
    \u0275\u0275styleMap("horizontal");
    \u0275\u0275property("theme", "madrid")("sliderOption", ctx_r0.categorySlider)("categoryIds", (ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.categories_image_list == null ? null : ctx_r0.data.content.categories_image_list.category_ids) || \u0275\u0275pureFunction0(9, _c013))("image", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.categories_image_list == null ? null : ctx_r0.data.content.categories_image_list.image_url);
  }
}
function MadridComponent_section_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 35)(1, "div", 13);
    \u0275\u0275element(2, "app-title", 33)(3, "app-theme-product", 36);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275styleMap("simple");
    \u0275\u0275property("title", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.products_list_1 == null ? null : ctx_r0.data.content.products_list_1.title);
    \u0275\u0275advance();
    \u0275\u0275styleMap("horizontal");
    \u0275\u0275property("productIds", (ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.products_list_1 == null ? null : ctx_r0.data.content.products_list_1.product_ids) || \u0275\u0275pureFunction0(10, _c013))("slider", true)("productStyle", "product-standard theme-plus")("boxClass", "product-box-bg")("sliderOption", ctx_r0.productSlider6ItemMargin);
  }
}
function MadridComponent_section_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 37)(1, "div", 13);
    \u0275\u0275element(2, "app-title", 33)(3, "app-wallet-offer", 38);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275styleMap("simple");
    \u0275\u0275property("title", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.bank_wallet_offers == null ? null : ctx_r0.data.content.bank_wallet_offers.title);
    \u0275\u0275advance();
    \u0275\u0275property("offers", (ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.bank_wallet_offers == null ? null : ctx_r0.data.content.bank_wallet_offers.offers) || \u0275\u0275pureFunction0(4, _c013));
  }
}
function MadridComponent_section_5_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 44)(1, "app-deal", 45);
    \u0275\u0275listener("isDeal", function MadridComponent_section_5_div_4_Template_app_deal_isDeal_1_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.getDeals($event));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("data", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.product_with_deals == null ? null : ctx_r0.data.content.product_with_deals.deal_of_days);
  }
}
function MadridComponent_section_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 39)(1, "div", 13);
    \u0275\u0275element(2, "app-title", 33);
    \u0275\u0275elementStart(3, "div", 40);
    \u0275\u0275template(4, MadridComponent_section_5_div_4_Template, 2, 1, "div", 41);
    \u0275\u0275elementStart(5, "div", 42);
    \u0275\u0275element(6, "app-theme-product", 43);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275styleMap("simple");
    \u0275\u0275property("title", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.product_with_deals == null ? null : ctx_r0.data.content.product_with_deals.title);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", (ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.product_with_deals == null ? null : ctx_r0.data.content.product_with_deals.deal_of_days == null ? null : ctx_r0.data.content.product_with_deals.deal_of_days.status) && ctx_r0.enableDeal);
    \u0275\u0275advance();
    \u0275\u0275classMap((ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.product_with_deals == null ? null : ctx_r0.data.content.product_with_deals.deal_of_days == null ? null : ctx_r0.data.content.product_with_deals.deal_of_days.status) && ctx_r0.enableDeal ? "col-xxl-8 col-lg-12 order-lg-1" : "col-xxl-12 col-lg-12 order-lg-1");
    \u0275\u0275advance();
    \u0275\u0275styleMap("horizontal");
    \u0275\u0275property("productIds", (ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.product_with_deals == null ? null : ctx_r0.data.content.product_with_deals.products_list == null ? null : ctx_r0.data.content.product_with_deals.products_list.product_ids) || \u0275\u0275pureFunction0(14, _c013))("productStyle", "")("boxClass", "")("showItem", (ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.product_with_deals == null ? null : ctx_r0.data.content.product_with_deals.deal_of_days == null ? null : ctx_r0.data.content.product_with_deals.deal_of_days.status) && (ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.product_with_deals == null ? null : ctx_r0.data.content.product_with_deals.deal_of_days == null ? null : ctx_r0.data.content.product_with_deals.deal_of_days.deals == null ? null : ctx_r0.data.content.product_with_deals.deal_of_days.deals.length) || 0 ? ctx_r0.item : ctx_r0.item * 2)("sliderOption", ctx_r0.item >= 6 ? ctx_r0.productSlider6ItemMargin : \u0275\u0275pureFunction0(15, _c16))("slider", ctx_r0.item >= 6 ? true : false);
  }
}
function MadridComponent_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "section")(2, "div", 13);
    \u0275\u0275element(3, "app-title", 33)(4, "app-top-seller", 46);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275styleMap("simple");
    \u0275\u0275property("title", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.seller == null ? null : ctx_r0.data.content.seller.title);
    \u0275\u0275advance();
    \u0275\u0275property("sellerIds", (ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.seller == null ? null : ctx_r0.data.content.seller.store_ids) || \u0275\u0275pureFunction0(4, _c013));
  }
}
function MadridComponent_section_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 47)(1, "div", 13)(2, "div", 14)(3, "div", 15);
    \u0275\u0275element(4, "app-image-link", 48);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275classMap("offer-box hover-effect");
    \u0275\u0275property("image", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.full_width_banner)("bgImage", false);
  }
}
function MadridComponent_section_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 49)(1, "div", 13);
    \u0275\u0275element(2, "app-title", 33)(3, "app-theme-product", 36);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275styleMap("simple");
    \u0275\u0275property("title", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.products_list_2 == null ? null : ctx_r0.data.content.products_list_2.title);
    \u0275\u0275advance();
    \u0275\u0275styleMap("horizontal");
    \u0275\u0275property("productIds", (ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.products_list_2 == null ? null : ctx_r0.data.content.products_list_2.product_ids) || \u0275\u0275pureFunction0(10, _c013))("slider", true)("productStyle", "product-standard theme-plus")("boxClass", "product-box-bg")("sliderOption", ctx_r0.productSlider6ItemMargin);
  }
}
function MadridComponent_section_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 49)(1, "div", 13);
    \u0275\u0275element(2, "app-title", 33)(3, "app-theme-product", 36);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275styleMap("simple");
    \u0275\u0275property("title", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.products_list_3 == null ? null : ctx_r0.data.content.products_list_3.title);
    \u0275\u0275advance();
    \u0275\u0275styleMap("horizontal");
    \u0275\u0275property("productIds", (ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.products_list_3 == null ? null : ctx_r0.data.content.products_list_3.product_ids) || \u0275\u0275pureFunction0(10, _c013))("slider", true)("productStyle", "product-standard theme-plus")("boxClass", "product-box-bg")("sliderOption", ctx_r0.productSlider6ItemMargin);
  }
}
function MadridComponent_section_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 50)(1, "div", 13)(2, "div", 51)(3, "div", 52);
    \u0275\u0275element(4, "app-image-link", 48);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 52);
    \u0275\u0275element(6, "app-image-link", 48);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275classMap("banner-contain-3 hover-effect");
    \u0275\u0275property("image", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.two_column_banners == null ? null : ctx_r0.data.content.two_column_banners.banner_1)("bgImage", false);
    \u0275\u0275advance(2);
    \u0275\u0275classMap("banner-contain-3 hover-effect");
    \u0275\u0275property("image", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.two_column_banners == null ? null : ctx_r0.data.content.two_column_banners.banner_2)("bgImage", false);
  }
}
function MadridComponent_section_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 49)(1, "div", 13);
    \u0275\u0275element(2, "app-title", 33)(3, "app-theme-product", 36);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275styleMap("simple");
    \u0275\u0275property("title", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.products_list_4 == null ? null : ctx_r0.data.content.products_list_4.title);
    \u0275\u0275advance();
    \u0275\u0275styleMap("horizontal");
    \u0275\u0275property("productIds", (ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.products_list_4 == null ? null : ctx_r0.data.content.products_list_4.product_ids) || \u0275\u0275pureFunction0(10, _c013))("slider", true)("productStyle", "product-standard theme-plus")("boxClass", "product-box-bg")("sliderOption", ctx_r0.productSlider6ItemMargin);
  }
}
function MadridComponent_section_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 49)(1, "div", 13);
    \u0275\u0275element(2, "app-title", 33)(3, "app-theme-product", 36);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275styleMap("simple");
    \u0275\u0275property("title", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.products_list_5 == null ? null : ctx_r0.data.content.products_list_5.title);
    \u0275\u0275advance();
    \u0275\u0275styleMap("horizontal");
    \u0275\u0275property("productIds", (ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.products_list_5 == null ? null : ctx_r0.data.content.products_list_5.product_ids) || \u0275\u0275pureFunction0(10, _c013))("slider", true)("productStyle", "product-standard theme-plus")("boxClass", "product-box-bg")("sliderOption", ctx_r0.productSlider6ItemMargin);
  }
}
function MadridComponent_section_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 50)(1, "div", 13)(2, "div", 51)(3, "div", 53);
    \u0275\u0275element(4, "app-image-link", 48);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 54);
    \u0275\u0275element(6, "app-image-link", 48);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275classMap("banner-contain-3 h-100 pt-sm-5 hover-effect");
    \u0275\u0275property("image", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.delivery_banners == null ? null : ctx_r0.data.content.delivery_banners.banner_1)("bgImage", false);
    \u0275\u0275advance(2);
    \u0275\u0275classMap("banner-contain-3 pt-lg-4 h-100 hover-effect");
    \u0275\u0275property("image", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.delivery_banners == null ? null : ctx_r0.data.content.delivery_banners.banner_2)("bgImage", false);
  }
}
function MadridComponent_section_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 49)(1, "div", 13);
    \u0275\u0275element(2, "app-title", 33)(3, "app-theme-product", 36);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275styleMap("simple");
    \u0275\u0275property("title", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.products_list_6 == null ? null : ctx_r0.data.content.products_list_6.title);
    \u0275\u0275advance();
    \u0275\u0275styleMap("horizontal");
    \u0275\u0275property("productIds", (ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.products_list_6 == null ? null : ctx_r0.data.content.products_list_6.product_ids) || \u0275\u0275pureFunction0(10, _c013))("slider", true)("productStyle", "product-standard theme-plus")("boxClass", "product-box-bg")("sliderOption", ctx_r0.productSlider6ItemMargin);
  }
}
function MadridComponent_section_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 49)(1, "div", 13);
    \u0275\u0275element(2, "app-title", 33)(3, "app-theme-product", 36);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275styleMap("simple");
    \u0275\u0275property("title", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.products_list_7 == null ? null : ctx_r0.data.content.products_list_7.title);
    \u0275\u0275advance();
    \u0275\u0275styleMap("horizontal");
    \u0275\u0275property("productIds", (ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.products_list_7 == null ? null : ctx_r0.data.content.products_list_7.product_ids) || \u0275\u0275pureFunction0(10, _c013))("slider", true)("productStyle", "product-standard theme-plus")("boxClass", "product-box-bg")("sliderOption", ctx_r0.productSlider6ItemMargin);
  }
}
function MadridComponent_section_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 55)(1, "div", 13);
    \u0275\u0275element(2, "app-title", 33)(3, "app-blog", 56);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275styleMap("simple");
    \u0275\u0275property("title", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.featured_blogs == null ? null : ctx_r0.data.content.featured_blogs.title);
    \u0275\u0275advance();
    \u0275\u0275property("blogIds", (ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.featured_blogs == null ? null : ctx_r0.data.content.featured_blogs.blog_ids) || \u0275\u0275pureFunction0(5, _c013))("sliderOption", ctx_r0.customOptionsItem4);
  }
}
function MadridComponent_section_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 57)(1, "div", 13);
    \u0275\u0275element(2, "app-brand", 58);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("brandIds", (ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.brands == null ? null : ctx_r0.data.content.brands.brand_ids) || \u0275\u0275pureFunction0(1, _c013));
  }
}
var MadridComponent = class _MadridComponent {
  constructor(store, route, themeOptionService) {
    this.store = store;
    this.route = route;
    this.themeOptionService = themeOptionService;
    this.categorySlider = categorySlider9;
    this.productSlider6Item = productSlider6Item;
    this.productSlider6ItemMargin = productSlider6ItemMargin;
    this.customOptionsItem4 = customOptionsItem4;
    this.item = 2;
    this.enableDeal = true;
  }
  ngOnInit() {
    if (this.data?.slug == this.slug) {
      const getProducts$ = this.store.dispatch(new GetProductByIds({
        status: 1,
        paginate: this.data?.content?.products_ids.length,
        ids: this.data?.content?.products_ids?.join(",")
      }));
      const getStore$ = this.store.dispatch(new GetStores({
        status: 1,
        ids: this.data?.content?.seller?.store_ids?.join()
      }));
      const getBlogs$ = this.store.dispatch(new GetBlogs({
        status: 1,
        ids: this.data?.content?.featured_blogs?.blog_ids?.join(",")
      }));
      const brandIds = this.data?.content?.brands?.brand_ids;
      const getBrand$ = brandIds && brandIds.length > 0 ? this.store.dispatch(new GetBrands({
        status: 1,
        ids: brandIds.join()
      })) : null;
      document.body.classList.add("skeleton-body");
      const actions = [getProducts$, getBlogs$, getStore$];
      if (getBrand$) {
        actions.push(getBrand$);
      }
      forkJoin(actions).subscribe({
        complete: () => {
          document.body.classList.remove("skeleton-body");
          this.themeOptionService.preloader = false;
        }
      });
    }
    this.route.queryParams.subscribe((params) => {
      if (this.route.snapshot.data["data"].theme_option.productBox === "digital") {
        if (this.productSlider6ItemMargin && this.productSlider6ItemMargin.responsive && this.productSlider6ItemMargin.responsive["1180"]) {
          this.productSlider6ItemMargin = __spreadProps(__spreadValues({}, this.productSlider6ItemMargin), { items: 4, responsive: __spreadProps(__spreadValues({}, this.productSlider6ItemMargin.responsive), {
            1180: {
              items: 4
            }
          }) });
        }
        this.item = this.enableDeal ? 2 : 4;
      } else {
        if (this.productSlider6ItemMargin && this.productSlider6ItemMargin.responsive && this.productSlider6ItemMargin.responsive["1180"]) {
          this.productSlider6ItemMargin = __spreadProps(__spreadValues({}, this.productSlider6ItemMargin), { items: 6, responsive: __spreadProps(__spreadValues({}, this.productSlider6ItemMargin.responsive), {
            1180: {
              items: 6
            }
          }) });
        }
        this.item = this.enableDeal ? 4 : 6;
      }
    });
  }
  getDeals(value) {
    this.enableDeal = Boolean(value);
  }
  static {
    this.\u0275fac = function MadridComponent_Factory(t) {
      return new (t || _MadridComponent)(\u0275\u0275directiveInject(Store), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(ThemeOptionService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MadridComponent, selectors: [["app-madrid"]], inputs: { data: "data", slug: "slug" }, decls: 54, vars: 18, consts: [["class", "home-section-2 home-section-bg pt-0 overflow-hidden", 4, "ngIf"], ["class", "banner-section ratio_60", 4, "ngIf"], ["class", "category-section-3", 4, "ngIf"], ["class", "product-section-3", 4, "ngIf"], ["class", "bank-section overflow-hidden", 4, "ngIf"], ["class", "product-section product-section-3", 4, "ngIf"], [4, "ngIf"], ["class", "offer-section sale-banner", 4, "ngIf"], ["class", "product-section", 4, "ngIf"], ["class", "banner-section", 4, "ngIf"], ["class", "section-b-space", 4, "ngIf"], ["class", "brand-effect pt-0 section-b-space", 4, "ngIf"], [1, "internal-links-section", "section-b-space"], [1, "container-fluid-lg"], [1, "row"], [1, "col-12"], [1, "internal-links-container", "text-center"], [1, "mb-4"], [1, "row", "g-3"], [1, "col-lg-3", "col-md-6"], ["routerLink", "/page/about-us", "href", "/page/about-us", "title", "Learn More About Us", 1, "internal-link-card"], [1, "ri-information-line"], ["routerLink", "/Contact-Us", "href", "/Contact-Us", "title", "Get in Touch", 1, "internal-link-card"], [1, "ri-customer-service-line"], ["routerLink", "/page/faq", "href", "/page/faq", "title", "Frequently Asked Questions", 1, "internal-link-card"], [1, "ri-question-line"], ["routerLink", "/page/offers", "href", "/page/offers", "title", "Special Offers", 1, "internal-link-card"], [1, "ri-gift-line"], [1, "home-section-2", "home-section-bg", "pt-0", "overflow-hidden"], [3, "theme", "data"], [1, "banner-section", "ratio_60"], [3, "banners"], [1, "category-section-3"], [3, "title"], [3, "theme", "sliderOption", "categoryIds", "image"], [1, "product-section-3"], [3, "productIds", "slider", "productStyle", "boxClass", "sliderOption"], [1, "bank-section", "overflow-hidden"], [3, "offers"], [1, "product-section", "product-section-3"], [1, "row", "g-sm-4", "g-3"], ["class", "col-xxl-4  order-lg-2 d-xxl-block d-none", 4, "ngIf"], [1, "col-xxl-8", "col-lg-12", "order-lg-1"], [3, "productIds", "productStyle", "boxClass", "showItem", "sliderOption", "slider"], [1, "col-xxl-4", "order-lg-2", "d-xxl-block", "d-none"], [3, "isDeal", "data"], [3, "sellerIds"], [1, "offer-section", "sale-banner"], [3, "image", "bgImage"], [1, "product-section"], [1, "banner-section"], [1, "row", "gy-lg-0", "gy-3"], [1, "col-lg-6"], [1, "col-lg-8"], [1, "col-lg-4"], [1, "section-b-space"], [3, "blogIds", "sliderOption"], [1, "brand-effect", "pt-0", "section-b-space"], [3, "brandIds"]], template: function MadridComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, MadridComponent_section_0_Template, 2, 2, "section", 0)(1, MadridComponent_section_1_Template, 2, 3, "section", 1)(2, MadridComponent_section_2_Template, 4, 10, "section", 2)(3, MadridComponent_section_3_Template, 4, 11, "section", 3)(4, MadridComponent_section_4_Template, 4, 5, "section", 4)(5, MadridComponent_section_5_Template, 7, 16, "section", 5)(6, MadridComponent_ng_container_6_Template, 5, 5, "ng-container", 6)(7, MadridComponent_section_7_Template, 5, 4, "section", 7)(8, MadridComponent_section_8_Template, 4, 11, "section", 8)(9, MadridComponent_section_9_Template, 4, 11, "section", 8)(10, MadridComponent_section_10_Template, 7, 8, "section", 9)(11, MadridComponent_section_11_Template, 4, 11, "section", 8)(12, MadridComponent_section_12_Template, 4, 11, "section", 8)(13, MadridComponent_section_13_Template, 7, 8, "section", 9)(14, MadridComponent_section_14_Template, 4, 11, "section", 8)(15, MadridComponent_section_15_Template, 4, 11, "section", 8)(16, MadridComponent_section_16_Template, 4, 6, "section", 10)(17, MadridComponent_section_17_Template, 3, 2, "section", 11);
        \u0275\u0275elementStart(18, "section", 12)(19, "div", 13)(20, "div", 14)(21, "div", 15)(22, "div", 16)(23, "h3", 17);
        \u0275\u0275text(24, "Explore More");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(25, "div", 18)(26, "div", 19)(27, "a", 20);
        \u0275\u0275element(28, "i", 21);
        \u0275\u0275elementStart(29, "h5");
        \u0275\u0275text(30, "About Us");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(31, "p");
        \u0275\u0275text(32, "Discover our story and mission");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(33, "div", 19)(34, "a", 22);
        \u0275\u0275element(35, "i", 23);
        \u0275\u0275elementStart(36, "h5");
        \u0275\u0275text(37, "Contact Us");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(38, "p");
        \u0275\u0275text(39, "We're here to help you 24/7");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(40, "div", 19)(41, "a", 24);
        \u0275\u0275element(42, "i", 25);
        \u0275\u0275elementStart(43, "h5");
        \u0275\u0275text(44, "FAQ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(45, "p");
        \u0275\u0275text(46, "Find answers to common questions");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(47, "div", 19)(48, "a", 26);
        \u0275\u0275element(49, "i", 27);
        \u0275\u0275elementStart(50, "h5");
        \u0275\u0275text(51, "Offers");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(52, "p");
        \u0275\u0275text(53, "Exclusive deals and discounts");
        \u0275\u0275elementEnd()()()()()()()()();
      }
      if (rf & 2) {
        \u0275\u0275property("ngIf", ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.home_banner);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.featured_banners == null ? null : ctx.data.content.featured_banners.status);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.categories_image_list == null ? null : ctx.data.content.categories_image_list.status);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.products_list_1 == null ? null : ctx.data.content.products_list_1.status);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.bank_wallet_offers == null ? null : ctx.data.content.bank_wallet_offers.status);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", (ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.product_with_deals == null ? null : ctx.data.content.product_with_deals.deal_of_days == null ? null : ctx.data.content.product_with_deals.deal_of_days.deals == null ? null : ctx.data.content.product_with_deals.deal_of_days.deals.length) && (ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.product_with_deals == null ? null : ctx.data.content.product_with_deals.status));
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.seller == null ? null : ctx.data.content.seller.status);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.full_width_banner == null ? null : ctx.data.content.full_width_banner.status);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.products_list_2 == null ? null : ctx.data.content.products_list_2.status);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.products_list_3 == null ? null : ctx.data.content.products_list_3.status);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.two_column_banners == null ? null : ctx.data.content.two_column_banners.status);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.products_list_4 == null ? null : ctx.data.content.products_list_4.status);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.products_list_5 == null ? null : ctx.data.content.products_list_5.status);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.delivery_banners == null ? null : ctx.data.content.delivery_banners.status);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.products_list_6 == null ? null : ctx.data.content.products_list_6.status);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.products_list_7 == null ? null : ctx.data.content.products_list_7.status);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.featured_blogs == null ? null : ctx.data.content.featured_blogs.status);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", (ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.brands == null ? null : ctx.data.content.brands.brand_ids) && (ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.brands == null ? null : ctx.data.content.brands.status));
      }
    }, dependencies: [NgIf, RouterLink, TitleComponent, ImageLinkComponent, HomeBannerComponent, BannerComponent, CategoriesComponent2, ProductComponent, BlogComponent, WalletOfferComponent, DealComponent, BrandComponent, TopSellerComponent] });
  }
};
__decorate([
  Select(ThemeOptionState.themeOptions)
], MadridComponent.prototype, "themeOption$", void 0);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MadridComponent, { className: "MadridComponent", filePath: "src\\app\\components\\themes\\madrid\\madrid.component.ts", lineNumber: 20 });
})();

// src/app/components/themes/moscow/moscow.component.ts
var _c014 = () => [];
function MoscowComponent_section_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 13);
    \u0275\u0275element(1, "app-theme-home-banner", 14);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("theme", "denver")("data", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.home_banner);
  }
}
function MoscowComponent_section_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 15)(1, "div", 3);
    \u0275\u0275element(2, "app-theme-categories", 16);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275styleMap("horizontal");
    \u0275\u0275property("theme", "moscow")("sliderOption", ctx_r0.categorySlider)("categoryIds", (ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.categories_icon_list == null ? null : ctx_r0.data.content.categories_icon_list.category_ids) || \u0275\u0275pureFunction0(6, _c014))("title", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.categories_icon_list == null ? null : ctx_r0.data.content.categories_icon_list.title);
  }
}
function MoscowComponent_section_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section")(1, "div", 3)(2, "div", 8)(3, "div", 17);
    \u0275\u0275element(4, "app-theme-banner", 18);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275styleMap("full_width");
    \u0275\u0275classMap("banner-contain hover-effect");
    \u0275\u0275property("banners", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.coupons);
  }
}
function MoscowComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19)(1, "div", 20);
    \u0275\u0275element(2, "app-image-link", 21);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275classMap("banner-contain-2 hover-effect");
    \u0275\u0275property("image", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.slider_product_with_banner == null ? null : ctx_r0.data.content.slider_product_with_banner.left_side_banners == null ? null : ctx_r0.data.content.slider_product_with_banner.left_side_banners.banner_1)("bgImage", false);
  }
}
function MoscowComponent_section_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 22)(1, "div", 3);
    \u0275\u0275element(2, "app-brand", 23);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("brandIds", (ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.brands == null ? null : ctx_r0.data.content.brands.brand_ids) || \u0275\u0275pureFunction0(1, _c014));
  }
}
function MoscowComponent_ng_container_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "section", 24);
    \u0275\u0275element(2, "app-newsletter", 25);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("data", (ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.news_letter) || null);
  }
}
var MoscowComponent = class _MoscowComponent {
  constructor(store, route, themeOptionService) {
    this.store = store;
    this.route = route;
    this.themeOptionService = themeOptionService;
    this.categorySlider = categorySlider9;
    this.productSlider6Item = productSlider6Item;
  }
  ngOnInit() {
    if (this.data?.slug == this.slug) {
      const getProducts$ = this.store.dispatch(new GetProductByIds({
        status: 1,
        paginate: this.data?.content?.products_ids.length,
        ids: this.data?.content?.products_ids?.join(",")
      }));
      document.body.classList.add("skeleton-body");
      forkJoin([getProducts$]).subscribe({
        complete: () => {
          document.body.classList.remove("skeleton-body");
          this.themeOptionService.preloader = false;
        }
      });
    }
    this.route.queryParams.subscribe((params) => {
      if (this.route.snapshot.data["data"].theme_option.productBox === "digital") {
        if (this.productSlider6Item && this.productSlider6Item.responsive && this.productSlider6Item.responsive["1065"]) {
          this.productSlider6Item = __spreadProps(__spreadValues({}, this.productSlider6Item), { items: 4, responsive: __spreadProps(__spreadValues({}, this.productSlider6Item.responsive), {
            1065: {
              items: 4
            }
          }) });
        }
      } else {
        if (this.productSlider6Item && this.productSlider6Item.responsive && this.productSlider6Item.responsive["1065"]) {
          this.productSlider6Item = __spreadProps(__spreadValues({}, this.productSlider6Item), { items: 6, responsive: __spreadProps(__spreadValues({}, this.productSlider6Item.responsive), {
            1065: {
              items: 6
            }
          }) });
        }
      }
    });
  }
  static {
    this.\u0275fac = function MoscowComponent_Factory(t) {
      return new (t || _MoscowComponent)(\u0275\u0275directiveInject(Store), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(ThemeOptionService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MoscowComponent, selectors: [["app-moscow"]], inputs: { data: "data", slug: "slug" }, decls: 19, vars: 27, consts: [["class", "home-section-2 home-section-bg pt-md-0 pt-3 overflow-hidden", 4, "ngIf"], ["class", "book-category", 4, "ngIf"], [1, "product-section"], [1, "container-fluid-lg"], [3, "title"], [3, "productIds", "slider", "sliderOption"], [4, "ngIf"], [1, "top-selling-section", "no-bg-category"], [1, "row"], [3, "ngClass"], [3, "data", "col"], ["class", "col-xl-3 col-lg-4 d-lg-block d-none", 4, "ngIf"], ["class", "brand-effect", 4, "ngIf"], [1, "home-section-2", "home-section-bg", "pt-md-0", "pt-3", "overflow-hidden"], [3, "theme", "data"], [1, "book-category"], [3, "theme", "sliderOption", "categoryIds", "title"], [1, "col-12", "sale-banner"], [3, "banners"], [1, "col-xl-3", "col-lg-4", "d-lg-block", "d-none"], [1, "ratio_156"], [3, "image", "bgImage"], [1, "brand-effect"], [3, "brandIds"], [1, "newsletter-section", "section-b-space"], [3, "data"]], template: function MoscowComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, MoscowComponent_section_0_Template, 2, 2, "section", 0)(1, MoscowComponent_section_1_Template, 3, 7, "section", 1);
        \u0275\u0275elementStart(2, "section", 2)(3, "div", 3);
        \u0275\u0275element(4, "app-title", 4)(5, "app-theme-product", 5);
        \u0275\u0275elementEnd()();
        \u0275\u0275template(6, MoscowComponent_section_6_Template, 5, 5, "section", 6);
        \u0275\u0275elementStart(7, "section", 7)(8, "div", 3)(9, "div", 8)(10, "div", 9);
        \u0275\u0275element(11, "app-four-column-product", 10);
        \u0275\u0275elementEnd();
        \u0275\u0275template(12, MoscowComponent_div_12_Template, 3, 4, "div", 11);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(13, "section", 2)(14, "div", 3);
        \u0275\u0275element(15, "app-title", 4)(16, "app-theme-product", 5);
        \u0275\u0275elementEnd()();
        \u0275\u0275template(17, MoscowComponent_section_17_Template, 3, 2, "section", 12)(18, MoscowComponent_ng_container_18_Template, 3, 1, "ng-container", 6);
      }
      if (rf & 2) {
        \u0275\u0275property("ngIf", ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.home_banner);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.categories_icon_list == null ? null : ctx.data.content.categories_icon_list.status);
        \u0275\u0275advance(3);
        \u0275\u0275styleMap("simple");
        \u0275\u0275property("title", ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.products_list_1 == null ? null : ctx.data.content.products_list_1.title);
        \u0275\u0275advance();
        \u0275\u0275styleMap("horizontal");
        \u0275\u0275property("productIds", (ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.products_list_1 == null ? null : ctx.data.content.products_list_1.product_ids) || \u0275\u0275pureFunction0(25, _c014))("slider", true)("sliderOption", ctx.productSlider6Item);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.coupons == null ? null : ctx.data.content.coupons.status);
        \u0275\u0275advance(4);
        \u0275\u0275property("ngClass", (ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.slider_product_with_banner == null ? null : ctx.data.content.slider_product_with_banner.left_side_banners == null ? null : ctx.data.content.slider_product_with_banner.left_side_banners.status) ? "col-xl-9 col-lg-8" : "col-xxl-12 col-lg-12");
        \u0275\u0275advance();
        \u0275\u0275property("data", ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.slider_product_with_banner == null ? null : ctx.data.content.slider_product_with_banner.slider_products)("col", "col-xl-4 col-lg-6 col-md-4 col-sm-6");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.slider_product_with_banner == null ? null : ctx.data.content.slider_product_with_banner.left_side_banners == null ? null : ctx.data.content.slider_product_with_banner.left_side_banners.status);
        \u0275\u0275advance(3);
        \u0275\u0275styleMap("simple");
        \u0275\u0275property("title", ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.products_list_2 == null ? null : ctx.data.content.products_list_2.title);
        \u0275\u0275advance();
        \u0275\u0275styleMap("horizontal");
        \u0275\u0275property("productIds", (ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.products_list_2 == null ? null : ctx.data.content.products_list_2.product_ids) || \u0275\u0275pureFunction0(26, _c014))("slider", true)("sliderOption", ctx.productSlider6Item);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", (ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.brands == null ? null : ctx.data.content.brands.brand_ids) && (ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.brands == null ? null : ctx.data.content.brands.status));
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.news_letter == null ? null : ctx.data.content.news_letter.status);
      }
    }, dependencies: [NgClass, NgIf, TitleComponent, ImageLinkComponent, HomeBannerComponent, BannerComponent, CategoriesComponent2, ProductComponent, NewsletterComponent, FourColumnProductComponent, BrandComponent] });
  }
};
__decorate([
  Select(ThemeOptionState.themeOptions)
], MoscowComponent.prototype, "themeOption$", void 0);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MoscowComponent, { className: "MoscowComponent", filePath: "src\\app\\components\\themes\\moscow\\moscow.component.ts", lineNumber: 17 });
})();

// src/app/components/themes/widgets/service/service.component.ts
function ServiceComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "div", 4);
    \u0275\u0275element(2, "img", 5);
    \u0275\u0275elementStart(3, "div", 6)(4, "h3");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "h6", 7);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const service_r1 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("src", ctx_r1.storageURL + service_r1.image_url, \u0275\u0275sanitizeUrl)("alt", service_r1 == null ? null : service_r1.sub_title);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(service_r1 == null ? null : service_r1.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(service_r1 == null ? null : service_r1.sub_title);
  }
}
var ServiceComponent = class _ServiceComponent {
  constructor() {
    this.storageURL = environment.storageURL;
  }
  static {
    this.\u0275fac = function ServiceComponent_Factory(t) {
      return new (t || _ServiceComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ServiceComponent, selectors: [["app-service"]], inputs: { data: "data" }, decls: 4, vars: 1, consts: [[1, "service-section"], [1, "container-fluid-lg"], [1, "row", "g-3", "row-cols-xxl-5", "row-cols-lg-3", "row-cols-sm-2"], [4, "ngFor", "ngForOf"], [1, "service-contain-2"], [1, "icon-width", 3, "src", "alt"], [1, "service-detail"], [1, "text-content"]], template: function ServiceComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "section", 0)(1, "div", 1)(2, "div", 2);
        \u0275\u0275template(3, ServiceComponent_div_3_Template, 8, 4, "div", 3);
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(3);
        \u0275\u0275property("ngForOf", ctx.data);
      }
    }, dependencies: [NgForOf] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ServiceComponent, { className: "ServiceComponent", filePath: "src\\app\\components\\themes\\widgets\\service\\service.component.ts", lineNumber: 10 });
})();

// src/app/components/themes/berlin/berlin.component.ts
var _c015 = () => [];
function BerlinComponent_section_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 27);
    \u0275\u0275element(1, "app-theme-home-banner", 28);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("theme", "berlin")("data", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.home_banner);
  }
}
function BerlinComponent_app_service_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-service", 29);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("data", (ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.services_banner == null ? null : ctx_r0.data.content.services_banner.services) || \u0275\u0275pureFunction0(1, _c015));
  }
}
function BerlinComponent_section_11_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 36);
    \u0275\u0275element(1, "app-title", 37)(2, "app-theme-product", 38);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("title", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.main_content == null ? null : ctx_r0.data.content.main_content.section1_products == null ? null : ctx_r0.data.content.main_content.section1_products.title)("description", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.main_content == null ? null : ctx_r0.data.content.main_content.section1_products == null ? null : ctx_r0.data.content.main_content.section1_products.description);
    \u0275\u0275advance();
    \u0275\u0275styleMap("horizontal");
    \u0275\u0275property("productIds", (ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.main_content == null ? null : ctx_r0.data.content.main_content.section1_products == null ? null : ctx_r0.data.content.main_content.section1_products.product_ids) || \u0275\u0275pureFunction0(9, _c015))("productStyle", "product-classic")("boxClass", "product-box-bg")("sliderOption", ctx_r0.productSliderMargin)("slider", true);
  }
}
function BerlinComponent_section_11_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 36);
    \u0275\u0275element(1, "app-title", 37)(2, "app-theme-categories", 39);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("title", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.main_content == null ? null : ctx_r0.data.content.main_content.section2_categories_icon_list == null ? null : ctx_r0.data.content.main_content.section2_categories_icon_list.title)("description", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.main_content == null ? null : ctx_r0.data.content.main_content.section2_categories_icon_list == null ? null : ctx_r0.data.content.main_content.section2_categories_icon_list.description);
    \u0275\u0275advance();
    \u0275\u0275styleMap("horizontal");
    \u0275\u0275property("sliderOption", ctx_r0.categorySlider)("categoryIds", (ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.main_content == null ? null : ctx_r0.data.content.main_content.section2_categories_icon_list == null ? null : ctx_r0.data.content.main_content.section2_categories_icon_list.category_ids) || \u0275\u0275pureFunction0(7, _c015))("theme", "paris");
  }
}
function BerlinComponent_section_11_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 36)(1, "div", 40)(2, "div", 41);
    \u0275\u0275element(3, "app-image-link", 42);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 41);
    \u0275\u0275element(5, "app-image-link", 42);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275classMap("banner-contain hover-effect");
    \u0275\u0275property("image", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.main_content == null ? null : ctx_r0.data.content.main_content.section3_two_column_banners == null ? null : ctx_r0.data.content.main_content.section3_two_column_banners.banner_1)("bgImage", false);
    \u0275\u0275advance(2);
    \u0275\u0275classMap("banner-contain hover-effect");
    \u0275\u0275property("image", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.main_content == null ? null : ctx_r0.data.content.main_content.section3_two_column_banners == null ? null : ctx_r0.data.content.main_content.section3_two_column_banners.banner_2)("bgImage", false);
  }
}
function BerlinComponent_section_11_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 43);
    \u0275\u0275element(1, "app-title", 37)(2, "app-theme-product", 38);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("title", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.main_content == null ? null : ctx_r0.data.content.main_content.section4_products == null ? null : ctx_r0.data.content.main_content.section4_products.title)("description", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.main_content == null ? null : ctx_r0.data.content.main_content.section4_products == null ? null : ctx_r0.data.content.main_content.section4_products.description);
    \u0275\u0275advance();
    \u0275\u0275styleMap("horizontal");
    \u0275\u0275property("productIds", (ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.main_content == null ? null : ctx_r0.data.content.main_content.section4_products == null ? null : ctx_r0.data.content.main_content.section4_products.product_ids) || \u0275\u0275pureFunction0(9, _c015))("productStyle", "product-classic")("boxClass", "product-box-bg")("sliderOption", ctx_r0.productSliderMargin)("slider", true);
  }
}
function BerlinComponent_section_11_ng_container_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "section");
    \u0275\u0275element(2, "app-title", 44)(3, "app-top-seller", 45);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("title", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.main_content == null ? null : ctx_r0.data.content.main_content.seller == null ? null : ctx_r0.data.content.main_content.seller.title);
    \u0275\u0275advance();
    \u0275\u0275property("sellerIds", (ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.main_content == null ? null : ctx_r0.data.content.main_content.seller == null ? null : ctx_r0.data.content.main_content.seller.store_ids) || \u0275\u0275pureFunction0(2, _c015));
  }
}
function BerlinComponent_section_11_div_9_app_theme_categories_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-theme-categories", 51);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275styleMap("vertical");
    \u0275\u0275property("title", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.main_content == null ? null : ctx_r0.data.content.main_content.sidebar == null ? null : ctx_r0.data.content.main_content.sidebar.categories_icon_list == null ? null : ctx_r0.data.content.main_content.sidebar.categories_icon_list.title)("categoryIds", (ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.main_content == null ? null : ctx_r0.data.content.main_content.sidebar == null ? null : ctx_r0.data.content.main_content.sidebar.categories_icon_list == null ? null : ctx_r0.data.content.main_content.sidebar.categories_icon_list.category_ids) || \u0275\u0275pureFunction0(4, _c015));
  }
}
function BerlinComponent_section_11_div_9_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 52);
    \u0275\u0275element(1, "app-image-link", 42);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275classMap("home-contain hover-effect");
    \u0275\u0275property("image", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.main_content == null ? null : ctx_r0.data.content.main_content.sidebar == null ? null : ctx_r0.data.content.main_content.sidebar.right_side_banners == null ? null : ctx_r0.data.content.main_content.sidebar.right_side_banners.banner_1)("bgImage", false);
  }
}
function BerlinComponent_section_11_div_9_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 53)(1, "div", 54)(2, "h3");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "app-theme-product", 55);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.main_content == null ? null : ctx_r0.data.content.main_content.sidebar == null ? null : ctx_r0.data.content.main_content.sidebar.sidebar_products == null ? null : ctx_r0.data.content.main_content.sidebar.sidebar_products.title);
    \u0275\u0275advance();
    \u0275\u0275styleMap("vertical");
    \u0275\u0275property("productIds", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.main_content == null ? null : ctx_r0.data.content.main_content.sidebar == null ? null : ctx_r0.data.content.main_content.sidebar.sidebar_products == null ? null : ctx_r0.data.content.main_content.sidebar.sidebar_products.product_ids);
  }
}
function BerlinComponent_section_11_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 46)(1, "div", 47);
    \u0275\u0275template(2, BerlinComponent_section_11_div_9_app_theme_categories_2_Template, 1, 5, "app-theme-categories", 48)(3, BerlinComponent_section_11_div_9_div_3_Template, 2, 4, "div", 49)(4, BerlinComponent_section_11_div_9_div_4_Template, 5, 4, "div", 50);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.main_content == null ? null : ctx_r0.data.content.main_content.sidebar == null ? null : ctx_r0.data.content.main_content.sidebar.categories_icon_list == null ? null : ctx_r0.data.content.main_content.sidebar.categories_icon_list.status);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.main_content == null ? null : ctx_r0.data.content.main_content.sidebar == null ? null : ctx_r0.data.content.main_content.sidebar.right_side_banners == null ? null : ctx_r0.data.content.main_content.sidebar.right_side_banners.status);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.main_content == null ? null : ctx_r0.data.content.main_content.sidebar == null ? null : ctx_r0.data.content.main_content.sidebar.sidebar_products == null ? null : ctx_r0.data.content.main_content.sidebar.sidebar_products.status);
  }
}
function BerlinComponent_section_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 30)(1, "div", 1)(2, "div", 31)(3, "div", 32);
    \u0275\u0275template(4, BerlinComponent_section_11_div_4_Template, 3, 10, "div", 33)(5, BerlinComponent_section_11_div_5_Template, 3, 8, "div", 33)(6, BerlinComponent_section_11_div_6_Template, 6, 8, "div", 33)(7, BerlinComponent_section_11_div_7_Template, 3, 10, "div", 34)(8, BerlinComponent_section_11_ng_container_8_Template, 4, 3, "ng-container", 11);
    \u0275\u0275elementEnd();
    \u0275\u0275template(9, BerlinComponent_section_11_div_9_Template, 5, 3, "div", 35);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275classMap((ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.main_content == null ? null : ctx_r0.data.content.main_content.sidebar == null ? null : ctx_r0.data.content.main_content.sidebar.status) ? "col-xxl-9 col-xl-8" : "col-xxl-12 col-xl-12");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.main_content == null ? null : ctx_r0.data.content.main_content.section1_products == null ? null : ctx_r0.data.content.main_content.section1_products.status);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.main_content == null ? null : ctx_r0.data.content.main_content.section2_categories_icon_list == null ? null : ctx_r0.data.content.main_content.section2_categories_icon_list.status);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.main_content == null ? null : ctx_r0.data.content.main_content.section3_two_column_banners == null ? null : ctx_r0.data.content.main_content.section3_two_column_banners.status);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.main_content == null ? null : ctx_r0.data.content.main_content.section4_products == null ? null : ctx_r0.data.content.main_content.section4_products.status);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.main_content == null ? null : ctx_r0.data.content.main_content.seller == null ? null : ctx_r0.data.content.main_content.seller.status);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.main_content == null ? null : ctx_r0.data.content.main_content.sidebar == null ? null : ctx_r0.data.content.main_content.sidebar.status);
  }
}
function BerlinComponent_section_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 56)(1, "div", 1)(2, "div", 2)(3, "div", 3);
    \u0275\u0275element(4, "app-image-link", 42);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275classMap("home-contain hover-effect");
    \u0275\u0275property("image", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.full_width_banner)("bgImage", false);
  }
}
function BerlinComponent_section_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section")(1, "div", 1);
    \u0275\u0275element(2, "app-title", 37)(3, "app-theme-product", 55);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("title", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.product_list_1 == null ? null : ctx_r0.data.content.product_list_1.title)("description", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.product_list_1 == null ? null : ctx_r0.data.content.product_list_1.description);
    \u0275\u0275advance();
    \u0275\u0275styleMap("classic");
    \u0275\u0275property("productIds", (ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.product_list_1 == null ? null : ctx_r0.data.content.product_list_1.product_ids) || \u0275\u0275pureFunction0(5, _c015));
  }
}
function BerlinComponent_section_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 57)(1, "div", 1);
    \u0275\u0275element(2, "app-brand", 58);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("brandIds", (ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.brands == null ? null : ctx_r0.data.content.brands.brand_ids) || \u0275\u0275pureFunction0(1, _c015));
  }
}
function BerlinComponent_section_51_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 59);
    \u0275\u0275element(1, "app-newsletter", 29);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("data", (ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.news_letter) || null);
  }
}
var BerlinComponent = class _BerlinComponent {
  constructor(store, route, themeOptionService) {
    this.store = store;
    this.route = route;
    this.themeOptionService = themeOptionService;
    this.categorySlider = categorySlider;
    this.productSliderMargin = productSliderMargin;
  }
  ngOnInit() {
    if (this.data?.slug == this.slug) {
      const getProducts$ = this.store.dispatch(new GetProductByIds({
        status: 1,
        paginate: this.data?.content?.products_ids.length,
        ids: this.data?.content?.products_ids?.join(",")
      }));
      const getStore$ = this.store.dispatch(new GetStores({
        status: 1,
        ids: this.data?.content?.main_content?.seller?.store_ids?.join()
      }));
      const brandIds = this.data?.content?.brands?.brand_ids;
      const getBrand$ = brandIds && brandIds.length > 0 ? this.store.dispatch(new GetBrands({
        status: 1,
        ids: brandIds.join()
      })) : null;
      document.body.classList.add("skeleton-body");
      const actions = [getProducts$, getStore$];
      if (getBrand$) {
        actions.push(getBrand$);
      }
      forkJoin(actions).subscribe({
        complete: () => {
          document.body.classList.remove("skeleton-body");
          this.themeOptionService.preloader = false;
        }
      });
      this.route.queryParams.subscribe((params) => {
        if (this.route.snapshot.data["data"].theme_option.productBox === "digital") {
          if (this.productSliderMargin && this.productSliderMargin.responsive && this.productSliderMargin.responsive["1030"]) {
            this.productSliderMargin = __spreadProps(__spreadValues({}, this.productSliderMargin), { items: 3, responsive: __spreadProps(__spreadValues({}, this.productSliderMargin.responsive), {
              1030: {
                items: 3
              }
            }) });
          }
        } else {
          if (this.productSliderMargin && this.productSliderMargin.responsive && this.productSliderMargin.responsive["1030"]) {
            this.productSliderMargin = __spreadProps(__spreadValues({}, this.productSliderMargin), { items: 5, responsive: __spreadProps(__spreadValues({}, this.productSliderMargin.responsive), {
              1030: {
                items: 5
              }
            }) });
          }
        }
      });
    }
  }
  static {
    this.\u0275fac = function BerlinComponent_Factory(t) {
      return new (t || _BerlinComponent)(\u0275\u0275directiveInject(Store), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(ThemeOptionService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BerlinComponent, selectors: [["app-berlin"]], inputs: { data: "data", slug: "slug" }, decls: 52, vars: 7, consts: [[1, "homepage-title-section"], [1, "container-fluid-lg"], [1, "row"], [1, "col-12"], [1, "page-title-section", "text-center"], [1, "main-page-title"], [1, "page-description"], ["class", "home-section pt-2", 4, "ngIf"], [3, "data", 4, "ngIf"], ["class", "product-section", 4, "ngIf"], ["class", "banner-section", 4, "ngIf"], [4, "ngIf"], ["class", "brand-effect", 4, "ngIf"], [1, "internal-links-section", "section-b-space"], [1, "internal-links-container", "text-center"], [1, "mb-4"], [1, "row", "g-3"], [1, "col-lg-3", "col-md-6"], ["routerLink", "/page/about-us", "href", "/page/about-us", "title", "Learn More About Us", 1, "internal-link-card"], [1, "ri-information-line"], ["routerLink", "/Contact-Us", "href", "/Contact-Us", "title", "Get in Touch", 1, "internal-link-card"], [1, "ri-customer-service-line"], ["routerLink", "/page/faq", "href", "/page/faq", "title", "Frequently Asked Questions", 1, "internal-link-card"], [1, "ri-question-line"], ["routerLink", "/page/offers", "href", "/page/offers", "title", "Special Offers", 1, "internal-link-card"], [1, "ri-gift-line"], ["class", "newsletter-section section-b-space", 4, "ngIf"], [1, "home-section", "pt-2"], [3, "theme", "data"], [3, "data"], [1, "product-section"], [1, "row", "g-sm-4", "g-3"], [1, "col-xxl-9", "col-xl-8"], ["class", "section-b-space", 4, "ngIf"], ["class", "", 4, "ngIf"], ["class", "col-xxl-3 col-xl-4 d-none d-xl-block", 4, "ngIf"], [1, "section-b-space"], [3, "title", "description"], [3, "productIds", "productStyle", "boxClass", "sliderOption", "slider"], [3, "sliderOption", "categoryIds", "theme"], [1, "row", "g-md-4", "g-3"], [1, "col-xxl-6", "col-xl-12", "col-lg-6"], [3, "image", "bgImage"], [1, ""], [3, "title"], [3, "sellerIds"], [1, "col-xxl-3", "col-xl-4", "d-none", "d-xl-block"], [1, "position-sticky"], [3, "title", "categoryIds", "style", 4, "ngIf"], ["class", "ratio_156 section-t-space", 4, "ngIf"], ["class", "section-t-space", 4, "ngIf"], [3, "title", "categoryIds"], [1, "ratio_156", "section-t-space"], [1, "section-t-space"], [1, "category-menu"], [3, "productIds"], [1, "banner-section"], [1, "brand-effect"], [3, "brandIds"], [1, "newsletter-section", "section-b-space"]], template: function BerlinComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "h1", 5);
        \u0275\u0275text(6, "Premium Fashion & Lifestyle Shopping at GROFAB");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "p", 6);
        \u0275\u0275text(8, "Discover the latest trends in fashion, electronics, and lifestyle products. Quality shopping experience with GROFAB.");
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275template(9, BerlinComponent_section_9_Template, 2, 2, "section", 7)(10, BerlinComponent_app_service_10_Template, 1, 2, "app-service", 8)(11, BerlinComponent_section_11_Template, 10, 8, "section", 9)(12, BerlinComponent_section_12_Template, 5, 4, "section", 10)(13, BerlinComponent_section_13_Template, 4, 6, "section", 11)(14, BerlinComponent_section_14_Template, 3, 2, "section", 12);
        \u0275\u0275elementStart(15, "section", 13)(16, "div", 1)(17, "div", 2)(18, "div", 3)(19, "div", 14)(20, "h3", 15);
        \u0275\u0275text(21, "Explore More");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(22, "div", 16)(23, "div", 17)(24, "a", 18);
        \u0275\u0275element(25, "i", 19);
        \u0275\u0275elementStart(26, "h5");
        \u0275\u0275text(27, "About Us");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(28, "p");
        \u0275\u0275text(29, "Discover our story and mission");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(30, "div", 17)(31, "a", 20);
        \u0275\u0275element(32, "i", 21);
        \u0275\u0275elementStart(33, "h5");
        \u0275\u0275text(34, "Contact Us");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(35, "p");
        \u0275\u0275text(36, "We're here to help you 24/7");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(37, "div", 17)(38, "a", 22);
        \u0275\u0275element(39, "i", 23);
        \u0275\u0275elementStart(40, "h5");
        \u0275\u0275text(41, "FAQ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(42, "p");
        \u0275\u0275text(43, "Find answers to common questions");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(44, "div", 17)(45, "a", 24);
        \u0275\u0275element(46, "i", 25);
        \u0275\u0275elementStart(47, "h5");
        \u0275\u0275text(48, "Offers");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(49, "p");
        \u0275\u0275text(50, "Exclusive deals and discounts");
        \u0275\u0275elementEnd()()()()()()()()();
        \u0275\u0275template(51, BerlinComponent_section_51_Template, 2, 1, "section", 26);
      }
      if (rf & 2) {
        \u0275\u0275advance(9);
        \u0275\u0275property("ngIf", ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.home_banner);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.services_banner == null ? null : ctx.data.content.services_banner.status);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.main_content == null ? null : ctx.data.content.main_content.status);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.full_width_banner);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.main_content == null ? null : ctx.data.content.main_content.section4_products == null ? null : ctx.data.content.main_content.section4_products.status);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", (ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.brands == null ? null : ctx.data.content.brands.brand_ids) && (ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.brands == null ? null : ctx.data.content.brands.status));
        \u0275\u0275advance(37);
        \u0275\u0275property("ngIf", ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.news_letter == null ? null : ctx.data.content.news_letter.status);
      }
    }, dependencies: [NgIf, RouterLink, TitleComponent, ImageLinkComponent, HomeBannerComponent, CategoriesComponent2, ProductComponent, NewsletterComponent, ServiceComponent, BrandComponent, TopSellerComponent], styles: ["\n\n.homepage-title-section[_ngcontent-%COMP%] {\n  padding: 3rem 0;\n  background:\n    linear-gradient(\n      135deg,\n      #f8f9fa 0%,\n      #e9ecef 100%);\n  margin-bottom: 0;\n  border-bottom: 1px solid #dee2e6;\n}\n.page-title-section[_ngcontent-%COMP%] {\n  padding: 0;\n}\n.main-page-title[_ngcontent-%COMP%] {\n  font-size: 3rem;\n  font-weight: 700;\n  color: #2c3e50;\n  margin-bottom: 1.5rem;\n  line-height: 1.2;\n  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n}\n@media (max-width: 768px) {\n  .main-page-title[_ngcontent-%COMP%] {\n    font-size: 2.2rem;\n  }\n}\n@media (max-width: 576px) {\n  .main-page-title[_ngcontent-%COMP%] {\n    font-size: 1.8rem;\n  }\n}\n.page-description[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  color: #6c757d;\n  margin: 0;\n  line-height: 1.6;\n  max-width: 700px;\n  margin: 0 auto;\n  font-weight: 400;\n}\n@media (max-width: 768px) {\n  .page-description[_ngcontent-%COMP%] {\n    font-size: 1.1rem;\n  }\n}\n/*# sourceMappingURL=berlin.component.css.map */"] });
  }
};
__decorate([
  Select(ThemeOptionState.themeOptions)
], BerlinComponent.prototype, "themeOption$", void 0);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BerlinComponent, { className: "BerlinComponent", filePath: "src\\app\\components\\themes\\berlin\\berlin.component.ts", lineNumber: 19 });
})();

// src/app/components/themes/denver/denver.component.ts
var _c016 = ["heroSlider"];
var _c17 = ["sliderTrack"];
var _c23 = ["videoCarouselTrack"];
var _c3 = () => [];
function DenverComponent_section_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 43)(1, "div", 28)(2, "div", 44)(3, "div", 45);
    \u0275\u0275element(4, "app-theme-product", 46);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275styleMap("horizontal");
    \u0275\u0275property("productIds", ctx_r0.featuredProductIds)("slider", true)("sliderOption", ctx_r0.productSlider4Item)("productStyle", "product-solid")("boxClass", "product-box-bg");
  }
}
function DenverComponent_section_73_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 43)(1, "div", 28)(2, "div", 44)(3, "div", 45);
    \u0275\u0275element(4, "app-theme-product", 46);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275styleMap("horizontal");
    \u0275\u0275property("productIds", ctx_r0.featuredProductIds2)("slider", true)("sliderOption", ctx_r0.productSlider4Item)("productStyle", "product-solid")("boxClass", "product-box-bg");
  }
}
function DenverComponent_section_81_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section")(1, "div", 28);
    \u0275\u0275element(2, "app-theme-categories", 47);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275styleMap("horizontal");
    \u0275\u0275property("theme", "paris")("sliderOption", ctx_r0.categorySlider)("categoryIds", (ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.categories_icon_list == null ? null : ctx_r0.data.content.categories_icon_list.category_ids) || \u0275\u0275pureFunction0(6, _c3))("image", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.categories_icon_list == null ? null : ctx_r0.data.content.categories_icon_list.image_url);
  }
}
function DenverComponent_section_82_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 48)(1, "div", 28)(2, "div", 44);
    \u0275\u0275element(3, "app-title", 49);
    \u0275\u0275elementStart(4, "div", 45);
    \u0275\u0275element(5, "app-theme-product", 46);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275styleMap("simple");
    \u0275\u0275property("title", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.products_list_1 == null ? null : ctx_r0.data.content.products_list_1.title)("headingLevel", "h1");
    \u0275\u0275advance(2);
    \u0275\u0275styleMap("horizontal");
    \u0275\u0275property("productIds", (ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.products_list_1 == null ? null : ctx_r0.data.content.products_list_1.product_ids) || \u0275\u0275pureFunction0(11, _c3))("slider", true)("sliderOption", ctx_r0.productSlider6ItemMargin)("productStyle", "product-solid")("boxClass", "product-box-bg");
  }
}
function DenverComponent_div_91_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 50)(1, "div", 51);
    \u0275\u0275listener("click", function DenverComponent_div_91_Template_div_click_1_listener() {
      const i_r3 = \u0275\u0275restoreView(_r2).index;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.toggleVideoPlay(i_r3));
    });
    \u0275\u0275element(2, "video", 52);
    \u0275\u0275elementStart(3, "div", 53)(4, "span", 54);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 55);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(8, "div", 56)(9, "a", 57);
    \u0275\u0275text(10, " Shop This Look ");
    \u0275\u0275element(11, "i", 22);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const video_r4 = ctx.$implicit;
    const i_r3 = ctx.index;
    \u0275\u0275advance(2);
    \u0275\u0275property("src", video_r4.src, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(video_r4.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(i_r3 === 0 ? "New" : "Trending");
  }
}
function DenverComponent_section_92_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 48)(1, "div", 28)(2, "div");
    \u0275\u0275element(3, "app-title", 58)(4, "app-theme-product", 46);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275styleMap("simple");
    \u0275\u0275property("title", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.products_list_2 == null ? null : ctx_r0.data.content.products_list_2.title);
    \u0275\u0275advance();
    \u0275\u0275styleMap("horizontal");
    \u0275\u0275property("productIds", (ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.products_list_2 == null ? null : ctx_r0.data.content.products_list_2.product_ids) || \u0275\u0275pureFunction0(10, _c3))("slider", true)("sliderOption", ctx_r0.productSlider6ItemMargin)("productStyle", "product-solid")("boxClass", "product-box-bg");
  }
}
function DenverComponent_section_93_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 59)(1, "div", 28)(2, "div");
    \u0275\u0275element(3, "app-theme-product", 46);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275styleMap("horizontal");
    \u0275\u0275property("productIds", (ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.products_list_3 == null ? null : ctx_r0.data.content.products_list_3.product_ids) || \u0275\u0275pureFunction0(7, _c3))("slider", true)("sliderOption", ctx_r0.productSlider6ItemMargin)("productStyle", "product-solid")("boxClass", "product-box-bg");
  }
}
var DenverComponent = class _DenverComponent {
  constructor(store, route, router, themeOptionService) {
    this.store = store;
    this.route = route;
    this.router = router;
    this.themeOptionService = themeOptionService;
    this.categorySlider = categorySlider9;
    this.productSlider6ItemMargin = productSlider6ItemMargin;
    this.productSlider4Item = productSlider;
    this.featuredProductIds = [2338, 2336, 2335, 671];
    this.featuredProductIds2 = [2341, 2340, 2339, 691];
    this.currentSlide = 0;
    this.isDragging = false;
    this.startX = 0;
    this.currentX = 0;
    this.translateX = 0;
    this.heroSlides = [
      {
        image: "assets/images/VPI_2.png",
        alt: "Unstoppable Comfort Collection",
        link: "/collections",
        saleText: "",
        saleSubtext: ""
      },
      {
        image: "assets/images/Graphic_tees.png",
        alt: "Wild Style Graphic Tees",
        link: "/collections",
        saleText: "",
        saleSubtext: ""
      }
    ];
    this.currentVideoIndex = 0;
    this.videoSlides = [
      {
        src: "assets/images/video1.mp4",
        title: "Summer Lookbook",
        muted: false,
        autoplay: false,
        loop: true,
        playing: false
      },
      {
        src: "assets/images/video2.mp4",
        title: "Style Essentials",
        muted: false,
        autoplay: false,
        loop: true,
        playing: false
      }
    ];
  }
  ngAfterViewInit() {
    this.initSlider();
    this.startAutoSlide();
    this.updateVideoCarouselPosition();
  }
  ngOnDestroy() {
    this.stopAutoSlide();
  }
  // Slider Methods
  initSlider() {
    if (this.sliderTrack) {
      this.sliderTrack.nativeElement.addEventListener("mousedown", this.onDragStart.bind(this));
      this.sliderTrack.nativeElement.addEventListener("touchstart", this.onDragStart.bind(this));
      document.addEventListener("mousemove", this.onDragMove.bind(this));
      document.addEventListener("touchmove", this.onDragMove.bind(this));
      document.addEventListener("mouseup", this.onDragEnd.bind(this));
      document.addEventListener("touchend", this.onDragEnd.bind(this));
    }
  }
  startAutoSlide() {
    this.autoSlideInterval = setInterval(() => {
      if (!this.isDragging) {
        this.nextSlide();
      }
    }, 5e3);
  }
  stopAutoSlide() {
    if (this.autoSlideInterval) {
      clearInterval(this.autoSlideInterval);
    }
  }
  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.heroSlides.length;
    this.updateSliderPosition();
  }
  previousSlide() {
    this.currentSlide = this.currentSlide === 0 ? this.heroSlides.length - 1 : this.currentSlide - 1;
    this.updateSliderPosition();
  }
  goToSlide(index) {
    this.currentSlide = index;
    this.updateSliderPosition();
  }
  updateSliderPosition() {
    if (this.sliderTrack) {
      const slideWidth = this.sliderTrack.nativeElement.offsetWidth;
      this.translateX = -this.currentSlide * slideWidth;
      this.sliderTrack.nativeElement.style.transform = `translateX(${this.translateX}px)`;
    }
  }
  // Drag functionality
  onDragStart(e) {
    this.isDragging = true;
    this.stopAutoSlide();
    if (e instanceof MouseEvent) {
      this.startX = e.clientX;
    } else {
      this.startX = e.touches[0].clientX;
    }
    this.sliderTrack.nativeElement.style.transition = "none";
  }
  onDragMove(e) {
    if (!this.isDragging)
      return;
    e.preventDefault();
    if (e instanceof MouseEvent) {
      this.currentX = e.clientX;
    } else {
      this.currentX = e.touches[0].clientX;
    }
    const diffX = this.currentX - this.startX;
    const slideWidth = this.sliderTrack.nativeElement.offsetWidth;
    const newTranslateX = this.translateX + diffX;
    const maxTranslate = 0;
    const minTranslate = -(this.heroSlides.length - 1) * slideWidth;
    if (newTranslateX <= maxTranslate && newTranslateX >= minTranslate) {
      this.sliderTrack.nativeElement.style.transform = `translateX(${newTranslateX}px)`;
    }
  }
  onDragEnd(e) {
    if (!this.isDragging)
      return;
    this.isDragging = false;
    this.sliderTrack.nativeElement.style.transition = "transform 0.3s ease";
    const diffX = this.currentX - this.startX;
    const slideWidth = this.sliderTrack.nativeElement.offsetWidth;
    const threshold = slideWidth * 0.3;
    if (Math.abs(diffX) > threshold) {
      if (diffX > 0) {
        this.previousSlide();
      } else {
        this.nextSlide();
      }
    } else {
      this.updateSliderPosition();
    }
    this.startAutoSlide();
  }
  ngOnInit() {
    if (this.data?.slug == this.slug) {
      const allProductIds = [
        ...this.data?.content?.products_ids || [],
        ...this.featuredProductIds || [],
        ...this.featuredProductIds2 || []
      ];
      const uniqueProductIds = [...new Set(allProductIds)];
      const getProducts$ = this.store.dispatch(new GetProductByIds({
        status: 1,
        paginate: uniqueProductIds.length,
        ids: uniqueProductIds.join(",")
      }));
      const getStore$ = this.store.dispatch(new GetStores({
        status: 1,
        ids: this.data?.content?.seller?.store_ids?.join()
      }));
      const brandIds = this.data?.content?.brands?.brand_ids;
      const getBrand$ = brandIds && brandIds.length > 0 ? this.store.dispatch(new GetBrands({
        status: 1,
        ids: brandIds.join()
      })) : null;
      document.body.classList.add("skeleton-body");
      const actions = [getProducts$, getStore$];
      if (getBrand$) {
        actions.push(getBrand$);
      }
      forkJoin(actions).subscribe({
        complete: () => {
          document.body.classList.remove("skeleton-body");
          this.themeOptionService.preloader = false;
        }
      });
    }
    this.route.queryParams.subscribe((params) => {
      if (this.route.snapshot.data["data"].theme_option.productBox === "digital") {
        if (this.productSlider6ItemMargin && this.productSlider6ItemMargin.responsive && this.productSlider6ItemMargin.responsive["1180"]) {
          this.productSlider6ItemMargin = __spreadProps(__spreadValues({}, this.productSlider6ItemMargin), { items: 4, responsive: __spreadProps(__spreadValues({}, this.productSlider6ItemMargin.responsive), {
            1180: {
              items: 4
            }
          }) });
        }
      } else {
        if (this.productSlider6ItemMargin && this.productSlider6ItemMargin.responsive && this.productSlider6ItemMargin.responsive["1180"]) {
          this.productSlider6ItemMargin = __spreadProps(__spreadValues({}, this.productSlider6ItemMargin), { items: 6, responsive: __spreadProps(__spreadValues({}, this.productSlider6ItemMargin.responsive), {
            1180: {
              items: 6
            }
          }) });
        }
      }
    });
  }
  // Video Carousel Methods
  nextVideo() {
    this.pauseAllVideos();
    this.currentVideoIndex = (this.currentVideoIndex + 1) % this.videoSlides.length;
    this.updateVideoCarouselPosition();
  }
  previousVideo() {
    this.pauseAllVideos();
    this.currentVideoIndex = this.currentVideoIndex === 0 ? this.videoSlides.length - 1 : this.currentVideoIndex - 1;
    this.updateVideoCarouselPosition();
  }
  updateVideoCarouselPosition() {
    setTimeout(() => {
      const videoElements = document.querySelectorAll(".video-slide video");
      videoElements.forEach((video, index) => {
        if (index === this.currentVideoIndex) {
          video.muted = false;
        } else {
          video.pause();
          video.muted = true;
        }
      });
    }, 100);
  }
  pauseAllVideos() {
    const videoElements = document.querySelectorAll(".video-slide video");
    videoElements.forEach((video) => {
      video.pause();
    });
  }
  getVideoTransform(index) {
    const centerIndex = this.currentVideoIndex;
    const diff = index - centerIndex;
    const baseScale = 0.75;
    const activeScale = 1;
    const scale = index === centerIndex ? activeScale : baseScale;
    const translateX = diff * 20;
    return `translateX(${translateX}%) scale(${scale})`;
  }
  toggleVideoPlay(index) {
    const videoElements = document.querySelectorAll(".video-slide video");
    const video = videoElements[index];
    if (video.paused) {
      video.play();
      this.videoSlides[index].playing = true;
    } else {
      video.pause();
      this.videoSlides[index].playing = false;
    }
  }
  playVideo(index) {
    const videoElements = document.querySelectorAll(".video-slide video");
    const video = videoElements[index];
    video.play();
    this.videoSlides[index].playing = true;
  }
  viewVideo(index) {
    this.router.navigate(["/collections"], { queryParams: { sortBy: "asc" } });
  }
  viewAllCollections() {
    this.router.navigate(["/collections"], { queryParams: { sortBy: "asc" } });
  }
  static {
    this.\u0275fac = function DenverComponent_Factory(t) {
      return new (t || _DenverComponent)(\u0275\u0275directiveInject(Store), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ThemeOptionService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DenverComponent, selectors: [["app-denver"]], viewQuery: function DenverComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c016, 5);
        \u0275\u0275viewQuery(_c17, 5);
        \u0275\u0275viewQuery(_c23, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.heroSlider = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.sliderTrack = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.videoCarouselTrack = _t.first);
      }
    }, inputs: { data: "data", slug: "slug" }, decls: 94, vars: 7, consts: [[1, "hero-duo"], ["routerLink", "/collections", 1, "hero-duo__primary"], ["src", "assets/images/hero-banner.png", "alt", "Summer Secrets Unveiled", "loading", "eager"], [1, "hero-duo__bottom"], ["routerLink", "/collections", 1, "hero-duo__secondary"], ["src", "assets/images/hero-banner-2.png", "alt", "Elegance In Every Hue", "loading", "eager"], [1, "hero-duo__trust"], [1, "hero-trust-item"], [1, "ri-truck-line"], [1, "ri-refresh-line"], [1, "ri-shield-check-line"], ["class", "product-section featured-products-section", 4, "ngIf"], [1, "lookbook-section"], [1, "lookbook-inner"], [1, "lookbook-header"], [1, "lookbook-label"], [1, "lookbook-title"], [1, "lookbook-row"], ["href", "/collections", 1, "lookbook-card", "lookbook-card--up"], [1, "lookbook-card__img"], ["src", "assets/images/1.png", "alt", "Bestsellers", "loading", "lazy"], [1, "lookbook-card__info"], [1, "ri-arrow-right-up-line"], ["href", "/collections", 1, "lookbook-card", "lookbook-card--down"], ["src", "assets/images/2.png", "alt", "Crochet", "loading", "lazy"], ["src", "assets/images/3.png", "alt", "Co-ord Crush", "loading", "lazy"], ["src", "assets/images/4.png", "alt", "Lounge Wear", "loading", "lazy"], [1, "summer-banner"], [1, "container-fluid-lg"], ["href", "/collections", 1, "summer-banner__link"], [1, "summer-banner__frame"], ["src", "assets/images/summer.png", "alt", "Summer '24 \u2014 Unveil the Vibrance", "loading", "lazy", 1, "summer-banner__img"], [1, "summer-banner__accent", "summer-banner__accent--tl"], [1, "summer-banner__accent", "summer-banner__accent--br"], [4, "ngIf"], ["class", "product-section product-section-3", 4, "ngIf"], [1, "video-showcase"], [1, "video-showcase__header"], [1, "video-showcase__label"], [1, "video-showcase__title"], [1, "video-showcase__grid"], ["class", "video-card", 4, "ngFor", "ngForOf"], ["class", "product-section product-section-3 mt-5", 4, "ngIf"], [1, "product-section", "featured-products-section"], [1, "product-section-content"], [1, "product-list-wrapper"], [3, "productIds", "slider", "sliderOption", "productStyle", "boxClass"], [3, "theme", "sliderOption", "categoryIds", "image"], [1, "product-section", "product-section-3"], [1, "h1-text", 3, "title", "headingLevel"], [1, "video-card"], [1, "video-card__player", 3, "click"], ["muted", "", "autoplay", "", "loop", "", "playsinline", "", "preload", "auto", 3, "src"], [1, "video-card__bar"], [1, "video-card__name"], [1, "video-card__badge"], [1, "video-card__footer"], ["href", "/collections", 1, "video-card__shop"], [1, "mb-5", 3, "title"], [1, "product-section", "product-section-3", "mt-5"]], template: function DenverComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "section", 0)(1, "a", 1);
        \u0275\u0275element(2, "img", 2);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(3, "div", 3)(4, "a", 4);
        \u0275\u0275element(5, "img", 5);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "div", 6)(7, "div", 7);
        \u0275\u0275element(8, "i", 8);
        \u0275\u0275elementStart(9, "div")(10, "strong");
        \u0275\u0275text(11, "Free Delivery");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "span");
        \u0275\u0275text(13, "Orders above \u20B9999");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(14, "div", 7);
        \u0275\u0275element(15, "i", 9);
        \u0275\u0275elementStart(16, "div")(17, "strong");
        \u0275\u0275text(18, "Easy Returns");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(19, "span");
        \u0275\u0275text(20, "7-day return policy");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(21, "div", 7);
        \u0275\u0275element(22, "i", 10);
        \u0275\u0275elementStart(23, "div")(24, "strong");
        \u0275\u0275text(25, "Secure Checkout");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(26, "span");
        \u0275\u0275text(27, "100% safe payment");
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275template(28, DenverComponent_section_28_Template, 5, 7, "section", 11);
        \u0275\u0275elementStart(29, "section", 12)(30, "div", 13)(31, "div", 14)(32, "span", 15);
        \u0275\u0275text(33, "Collections");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(34, "h2", 16);
        \u0275\u0275text(35, "Shop The Edit");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(36, "div", 17)(37, "a", 18)(38, "div", 19);
        \u0275\u0275element(39, "img", 20);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(40, "div", 21)(41, "h3");
        \u0275\u0275text(42, "Bestsellers");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(43, "span");
        \u0275\u0275text(44, "Explore ");
        \u0275\u0275element(45, "i", 22);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(46, "a", 23)(47, "div", 19);
        \u0275\u0275element(48, "img", 24);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(49, "div", 21)(50, "h3");
        \u0275\u0275text(51, "Crochet");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(52, "span");
        \u0275\u0275text(53, "Explore ");
        \u0275\u0275element(54, "i", 22);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(55, "a", 18)(56, "div", 19);
        \u0275\u0275element(57, "img", 25);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(58, "div", 21)(59, "h3");
        \u0275\u0275text(60, "Co-ord Crush");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(61, "span");
        \u0275\u0275text(62, "Explore ");
        \u0275\u0275element(63, "i", 22);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(64, "a", 23)(65, "div", 19);
        \u0275\u0275element(66, "img", 26);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(67, "div", 21)(68, "h3");
        \u0275\u0275text(69, "Lounge Wear");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(70, "span");
        \u0275\u0275text(71, "Explore ");
        \u0275\u0275element(72, "i", 22);
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275template(73, DenverComponent_section_73_Template, 5, 7, "section", 11);
        \u0275\u0275elementStart(74, "section", 27)(75, "div", 28)(76, "a", 29)(77, "div", 30);
        \u0275\u0275element(78, "img", 31)(79, "div", 32)(80, "div", 33);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275template(81, DenverComponent_section_81_Template, 3, 7, "section", 34)(82, DenverComponent_section_82_Template, 6, 12, "section", 35);
        \u0275\u0275elementStart(83, "section", 36)(84, "div", 28)(85, "div", 37)(86, "span", 38);
        \u0275\u0275text(87, "Trending");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(88, "h2", 39);
        \u0275\u0275text(89, "Watch & Shop");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(90, "div", 40);
        \u0275\u0275template(91, DenverComponent_div_91_Template, 12, 3, "div", 41);
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(92, DenverComponent_section_92_Template, 5, 11, "section", 35)(93, DenverComponent_section_93_Template, 4, 8, "section", 42);
      }
      if (rf & 2) {
        \u0275\u0275advance(28);
        \u0275\u0275property("ngIf", ctx.featuredProductIds == null ? null : ctx.featuredProductIds.length);
        \u0275\u0275advance(45);
        \u0275\u0275property("ngIf", ctx.featuredProductIds2 == null ? null : ctx.featuredProductIds2.length);
        \u0275\u0275advance(8);
        \u0275\u0275property("ngIf", ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.categories_icon_list == null ? null : ctx.data.content.categories_icon_list.status);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.products_list_1 == null ? null : ctx.data.content.products_list_1.status);
        \u0275\u0275advance(9);
        \u0275\u0275property("ngForOf", ctx.videoSlides);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.products_list_2 == null ? null : ctx.data.content.products_list_2.status);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.products_list_3 == null ? null : ctx.data.content.products_list_3.status);
      }
    }, dependencies: [NgForOf, NgIf, RouterLink, TitleComponent, CategoriesComponent2, ProductComponent], styles: ['\n\n.hero-duo[_ngcontent-%COMP%] {\n  padding: 0;\n  margin: 0;\n}\n.hero-duo__primary[_ngcontent-%COMP%] {\n  display: block;\n  overflow: hidden;\n  line-height: 0;\n}\n.hero-duo__primary[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: auto;\n  display: block;\n  object-fit: cover;\n  transition: transform 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94);\n}\n.hero-duo__primary[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%] {\n  transform: scale(1.02);\n}\n.hero-duo__bottom[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 340px;\n  background: #E6E6FA;\n}\n.hero-duo__secondary[_ngcontent-%COMP%] {\n  display: block;\n  overflow: hidden;\n  line-height: 0;\n}\n.hero-duo__secondary[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  display: block;\n  object-fit: cover;\n  transition: transform 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94);\n}\n.hero-duo__secondary[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%] {\n  transform: scale(1.02);\n}\n.hero-duo__trust[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  padding: 28px 32px;\n  gap: 0;\n}\n.hero-trust-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  padding: 18px 0;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.07);\n}\n.hero-trust-item[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.hero-trust-item[_ngcontent-%COMP%]    > i[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  border-radius: 12px;\n  background: rgba(255, 255, 255, 0.7);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 20px;\n  color: #d4848b;\n  flex-shrink: 0;\n}\n.hero-trust-item[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.hero-trust-item[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 700;\n  color: #333;\n  line-height: 1.3;\n}\n.hero-trust-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 11.5px;\n  color: #666;\n  line-height: 1.4;\n  margin-top: 2px;\n}\n@media (max-width: 1199px) {\n  .hero-duo__bottom[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr 280px;\n  }\n  .hero-duo__trust[_ngcontent-%COMP%] {\n    padding: 20px 24px;\n  }\n  .hero-trust-item[_ngcontent-%COMP%] {\n    padding: 14px 0;\n    gap: 12px;\n  }\n  .hero-trust-item[_ngcontent-%COMP%]    > i[_ngcontent-%COMP%] {\n    width: 38px;\n    height: 38px;\n    font-size: 18px;\n  }\n  .hero-trust-item[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n    font-size: 12px;\n  }\n  .hero-trust-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    font-size: 11px;\n  }\n}\n@media (max-width: 767px) {\n  .hero-duo__bottom[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .hero-duo__trust[_ngcontent-%COMP%] {\n    flex-direction: row;\n    padding: 0;\n    gap: 0;\n  }\n  .hero-trust-item[_ngcontent-%COMP%] {\n    flex: 1;\n    flex-direction: column;\n    text-align: center;\n    gap: 8px;\n    padding: 16px 12px;\n    border-bottom: none;\n    border-right: 1px solid rgba(0, 0, 0, 0.07);\n  }\n  .hero-trust-item[_ngcontent-%COMP%]:last-child {\n    border-right: none;\n  }\n  .hero-trust-item[_ngcontent-%COMP%]    > i[_ngcontent-%COMP%] {\n    width: 40px;\n    height: 40px;\n  }\n}\n@media (max-width: 480px) {\n  .hero-trust-item[_ngcontent-%COMP%] {\n    padding: 14px 8px;\n  }\n  .hero-trust-item[_ngcontent-%COMP%]    > i[_ngcontent-%COMP%] {\n    width: 36px;\n    height: 36px;\n    font-size: 16px;\n    border-radius: 10px;\n  }\n  .hero-trust-item[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n    font-size: 11px;\n  }\n  .hero-trust-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    font-size: 10px;\n  }\n}\nhtml.dark[_ngcontent-%COMP%]   .hero-duo__bottom[_ngcontent-%COMP%] {\n  background: #1a1a1a;\n}\nhtml.dark[_ngcontent-%COMP%]   .hero-trust-item[_ngcontent-%COMP%] {\n  border-bottom-color: #333;\n}\nhtml.dark[_ngcontent-%COMP%]   .hero-trust-item[_ngcontent-%COMP%]    > i[_ngcontent-%COMP%] {\n  background: #252525;\n  color: #FADADD;\n}\nhtml.dark[_ngcontent-%COMP%]   .hero-trust-item[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #ddd;\n}\nhtml.dark[_ngcontent-%COMP%]   .hero-trust-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #888;\n}\n@media (max-width: 767px) {\n  html.dark[_ngcontent-%COMP%]   .hero-trust-item[_ngcontent-%COMP%] {\n    border-right-color: #333;\n  }\n}\n.lookbook-section[_ngcontent-%COMP%] {\n  background: #1A2518;\n  padding: 56px 0 64px;\n  margin: 48px 0;\n  overflow: hidden;\n}\n.lookbook-inner[_ngcontent-%COMP%] {\n  max-width: 1320px;\n  margin: 0 auto;\n  padding: 0 24px;\n}\n.lookbook-header[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 40px;\n}\n.lookbook-label[_ngcontent-%COMP%] {\n  font-family: "Poppins", sans-serif;\n  font-size: 11px;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 3px;\n  color: #C9A054;\n  display: block;\n  margin-bottom: 8px;\n}\n.lookbook-title[_ngcontent-%COMP%] {\n  font-family: "Poppins", sans-serif;\n  font-size: 32px;\n  font-weight: 700;\n  color: #fff;\n  margin: 0;\n  letter-spacing: -0.3px;\n}\n.lookbook-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 20px;\n  align-items: flex-start;\n}\n.lookbook-card[_ngcontent-%COMP%] {\n  flex: 1;\n  text-decoration: none;\n  color: #fff;\n  display: block;\n  transition: transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);\n}\n.lookbook-card--up[_ngcontent-%COMP%] {\n  margin-top: 0;\n}\n.lookbook-card--down[_ngcontent-%COMP%] {\n  margin-top: 40px;\n}\n.lookbook-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-8px);\n  color: #fff;\n  text-decoration: none;\n}\n.lookbook-card[_ngcontent-%COMP%]:hover   .lookbook-card__img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  transform: scale(1.06);\n}\n.lookbook-card[_ngcontent-%COMP%]:hover   .lookbook-card__info[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #C9A054;\n}\n.lookbook-card[_ngcontent-%COMP%]:hover   .lookbook-card__info[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  transform: translate(3px, -3px);\n}\n.lookbook-card__img[_ngcontent-%COMP%] {\n  position: relative;\n  border-radius: 10px;\n  overflow: hidden;\n  aspect-ratio: 3/4;\n  background: #2a3b28;\n}\n.lookbook-card__img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  object-position: top center;\n  display: block;\n  transition: transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);\n}\n.lookbook-card__img[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 3px;\n  background: #C9A054;\n  z-index: 2;\n  opacity: 0;\n  transition: opacity 0.3s ease;\n}\n.lookbook-card[_ngcontent-%COMP%]:hover   .lookbook-card__img[_ngcontent-%COMP%]::before {\n  opacity: 1;\n}\n.lookbook-card__info[_ngcontent-%COMP%] {\n  padding: 16px 4px 0;\n}\n.lookbook-card__info[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-family: "Poppins", sans-serif;\n  font-size: 16px;\n  font-weight: 600;\n  color: #fff;\n  margin: 0 0 4px;\n}\n.lookbook-card__info[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-family: "Poppins", sans-serif;\n  font-size: 12px;\n  font-weight: 500;\n  color: rgba(255, 255, 255, 0.5);\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  transition: color 0.3s ease;\n}\n.lookbook-card__info[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 14px;\n  transition: transform 0.3s ease;\n}\n@media (max-width: 991px) {\n  .lookbook-section[_ngcontent-%COMP%] {\n    padding: 40px 0 48px;\n    margin: 36px 0;\n  }\n  .lookbook-title[_ngcontent-%COMP%] {\n    font-size: 26px;\n  }\n  .lookbook-row[_ngcontent-%COMP%] {\n    gap: 14px;\n  }\n  .lookbook-card--down[_ngcontent-%COMP%] {\n    margin-top: 28px;\n  }\n  .lookbook-card__info[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n}\n@media (max-width: 767px) {\n  .lookbook-section[_ngcontent-%COMP%] {\n    padding: 36px 0 40px;\n    margin: 28px 0;\n  }\n  .lookbook-row[_ngcontent-%COMP%] {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    gap: 12px;\n  }\n  .lookbook-card--up[_ngcontent-%COMP%], .lookbook-card--down[_ngcontent-%COMP%] {\n    margin-top: 0;\n  }\n  .lookbook-title[_ngcontent-%COMP%] {\n    font-size: 22px;\n    margin-bottom: 0;\n  }\n  .lookbook-header[_ngcontent-%COMP%] {\n    margin-bottom: 28px;\n  }\n  .lookbook-card__info[_ngcontent-%COMP%] {\n    padding: 10px 2px 0;\n  }\n  .lookbook-card__info[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 13px;\n  }\n  .lookbook-card__info[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    font-size: 11px;\n  }\n}\n@media (max-width: 480px) {\n  .lookbook-inner[_ngcontent-%COMP%] {\n    padding: 0 16px;\n  }\n  .lookbook-row[_ngcontent-%COMP%] {\n    gap: 10px;\n  }\n  .lookbook-card__img[_ngcontent-%COMP%] {\n    border-radius: 8px;\n  }\n}\n.summer-banner[_ngcontent-%COMP%] {\n  margin: 48px 0;\n}\n.summer-banner__link[_ngcontent-%COMP%] {\n  display: block;\n  text-decoration: none;\n}\n.summer-banner__link[_ngcontent-%COMP%]:hover   .summer-banner__img[_ngcontent-%COMP%] {\n  transform: scale(1.02);\n}\n.summer-banner__link[_ngcontent-%COMP%]:hover   .summer-banner__accent--tl[_ngcontent-%COMP%] {\n  width: 80px;\n  height: 80px;\n}\n.summer-banner__link[_ngcontent-%COMP%]:hover   .summer-banner__accent--br[_ngcontent-%COMP%] {\n  width: 80px;\n  height: 80px;\n}\n.summer-banner__frame[_ngcontent-%COMP%] {\n  position: relative;\n  border-radius: 12px;\n  overflow: hidden;\n  background: #f5f0e8;\n}\n.summer-banner__img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: auto;\n  display: block;\n  transition: transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);\n}\n.summer-banner__accent[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 2;\n  pointer-events: none;\n  transition: all 0.4s ease;\n}\n.summer-banner__accent--tl[_ngcontent-%COMP%] {\n  top: 0;\n  left: 0;\n  width: 60px;\n  height: 60px;\n  border-top: 3px solid #C9A054;\n  border-left: 3px solid #C9A054;\n  border-radius: 12px 0 0 0;\n}\n.summer-banner__accent--br[_ngcontent-%COMP%] {\n  bottom: 0;\n  right: 0;\n  width: 60px;\n  height: 60px;\n  border-bottom: 3px solid #C9A054;\n  border-right: 3px solid #C9A054;\n  border-radius: 0 0 12px 0;\n}\n@media (max-width: 767px) {\n  .summer-banner[_ngcontent-%COMP%] {\n    margin: 32px 0;\n  }\n  .summer-banner__frame[_ngcontent-%COMP%] {\n    border-radius: 8px;\n  }\n  .summer-banner__accent--tl[_ngcontent-%COMP%], .summer-banner__accent--br[_ngcontent-%COMP%] {\n    width: 40px;\n    height: 40px;\n    border-width: 2px;\n  }\n}\n.product-section-3[_ngcontent-%COMP%] {\n  padding-top: 0 !important;\n}\n.product-section-3[_ngcontent-%COMP%]   .product-section-content[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.product-section-3[_ngcontent-%COMP%]   .product-list-wrapper[_ngcontent-%COMP%] {\n  margin-top: 40px;\n}\n@media (max-width: 768px) {\n  .product-section-3[_ngcontent-%COMP%]   .product-list-wrapper[_ngcontent-%COMP%] {\n    margin-top: 30px;\n  }\n}\n@media (max-width: 480px) {\n  .product-section-3[_ngcontent-%COMP%]   .product-list-wrapper[_ngcontent-%COMP%] {\n    margin-top: 24px;\n  }\n}\n.featured-products-section[_ngcontent-%COMP%]     .product-box-modern {\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n}\n.featured-products-section[_ngcontent-%COMP%]     .product-box-modern .product-badge {\n  display: none !important;\n}\n.featured-products-section[_ngcontent-%COMP%]     .product-box-modern .product-info {\n  display: flex;\n  flex-direction: column;\n  flex-grow: 1;\n  justify-content: space-between;\n}\n.featured-products-section[_ngcontent-%COMP%]     .product-box-modern .product-info .product-name-description-wrapper {\n  display: block;\n  width: 100%;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  margin-bottom: 2px;\n  line-height: 1.4;\n}\n.featured-products-section[_ngcontent-%COMP%]     .product-box-modern .product-info .product-name-description-wrapper .product-name-link {\n  display: inline;\n  margin: 0;\n  padding: 0;\n  text-decoration: none;\n  vertical-align: baseline;\n}\n.featured-products-section[_ngcontent-%COMP%]     .product-box-modern .product-info .product-name-description-wrapper .product-name-link .product-name {\n  display: inline;\n  line-height: inherit;\n  margin: 0;\n  padding: 0;\n  min-height: auto;\n  font-size: 16px;\n  font-weight: 600;\n  color: #212529;\n}\n@media (max-width: 768px) {\n  .featured-products-section[_ngcontent-%COMP%]     .product-box-modern .product-info .product-name-description-wrapper .product-name-link .product-name {\n    font-size: 15px;\n  }\n}\n.featured-products-section[_ngcontent-%COMP%]     .product-box-modern .product-info .product-name-description-wrapper .product-description {\n  display: inline;\n  margin: 0;\n  padding: 0;\n  font-size: 13px;\n  color: #6c757d;\n  line-height: inherit;\n  vertical-align: baseline;\n}\n.featured-products-section[_ngcontent-%COMP%]     .product-box-modern .product-info .product-price-section .product-price-old {\n  display: none !important;\n}\n.featured-products-section[_ngcontent-%COMP%]     .product-box-modern .product-info .product-action {\n  margin-top: auto;\n  align-self: flex-end;\n  width: 100%;\n}\n.featured-products-section[_ngcontent-%COMP%]     .owl-item, .featured-products-section[_ngcontent-%COMP%]     .row > div {\n  display: flex;\n  height: 100%;\n}\n.featured-products-section[_ngcontent-%COMP%]     .owl-item > div, .featured-products-section[_ngcontent-%COMP%]     .owl-item > *, .featured-products-section[_ngcontent-%COMP%]     .row > div > div, .featured-products-section[_ngcontent-%COMP%]     .row > div > * {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n}\n.video-showcase[_ngcontent-%COMP%] {\n  padding: 48px 0;\n}\n.video-showcase__header[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 32px;\n}\n.video-showcase__label[_ngcontent-%COMP%] {\n  font-family: "Poppins", sans-serif;\n  font-size: 11px;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 3px;\n  color: #C9A054;\n  display: block;\n  margin-bottom: 6px;\n}\n.video-showcase__title[_ngcontent-%COMP%] {\n  font-family: "Poppins", sans-serif;\n  font-size: 28px;\n  font-weight: 700;\n  color: #1A2518;\n  margin: 0;\n}\n.video-showcase__grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 20px;\n}\n.video-card[_ngcontent-%COMP%] {\n  border-radius: 12px;\n  overflow: hidden;\n  background: #f9f8f5;\n  border: 1px solid #f0ede8;\n  transition: box-shadow 0.3s ease;\n}\n.video-card[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.08);\n}\n.video-card[_ngcontent-%COMP%]:hover   .video-card__play[_ngcontent-%COMP%] {\n  transform: translate(-50%, -50%) scale(1.1);\n}\n.video-card__player[_ngcontent-%COMP%] {\n  position: relative;\n  aspect-ratio: 9/10;\n  overflow: hidden;\n  cursor: pointer;\n  background: #1A2518;\n}\n.video-card__player[_ngcontent-%COMP%]   video[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  display: block;\n}\n.video-card__play[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: 56px;\n  height: 56px;\n  border-radius: 50%;\n  background: rgba(255, 255, 255, 0.92);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 3;\n  transition: all 0.3s ease;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);\n}\n.video-card__play.hidden[_ngcontent-%COMP%] {\n  opacity: 0;\n  pointer-events: none;\n}\n.video-card__play[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 22px;\n  color: #1A2518;\n  margin-left: 3px;\n}\n.video-card__bar[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  padding: 14px 16px;\n  background:\n    linear-gradient(\n      to top,\n      rgba(0, 0, 0, 0.6) 0%,\n      transparent 100%);\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  z-index: 2;\n}\n.video-card__name[_ngcontent-%COMP%] {\n  font-family: "Poppins", sans-serif;\n  font-size: 13px;\n  font-weight: 600;\n  color: #fff;\n}\n.video-card__badge[_ngcontent-%COMP%] {\n  font-family: "Poppins", sans-serif;\n  font-size: 9px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n  color: #1A2518;\n  background: #C9A054;\n  padding: 3px 8px;\n  border-radius: 3px;\n}\n.video-card__footer[_ngcontent-%COMP%] {\n  padding: 14px 16px;\n  text-align: center;\n}\n.video-card__shop[_ngcontent-%COMP%] {\n  font-family: "Poppins", sans-serif;\n  font-size: 12px;\n  font-weight: 600;\n  color: #1A2518;\n  text-decoration: none;\n  text-transform: uppercase;\n  letter-spacing: 0.8px;\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  transition: color 0.2s ease;\n}\n.video-card__shop[_ngcontent-%COMP%]:hover {\n  color: #C9A054;\n}\n.video-card__shop[_ngcontent-%COMP%]:hover   i[_ngcontent-%COMP%] {\n  transform: translate(2px, -2px);\n}\n.video-card__shop[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 14px;\n  transition: transform 0.2s ease;\n}\n@media (max-width: 767px) {\n  .video-showcase[_ngcontent-%COMP%] {\n    padding: 32px 0;\n  }\n  .video-showcase__title[_ngcontent-%COMP%] {\n    font-size: 22px;\n  }\n  .video-showcase__grid[_ngcontent-%COMP%] {\n    gap: 14px;\n  }\n  .video-card__player[_ngcontent-%COMP%] {\n    aspect-ratio: 9/14;\n  }\n  .video-card__play[_ngcontent-%COMP%] {\n    width: 48px;\n    height: 48px;\n  }\n  .video-card__play[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    font-size: 18px;\n  }\n}\n/*# sourceMappingURL=denver.component.css.map */'] });
  }
};
__decorate([
  Select(ThemeOptionState.themeOptions)
], DenverComponent.prototype, "themeOption$", void 0);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DenverComponent, { className: "DenverComponent", filePath: "src\\app\\components\\themes\\denver\\denver.component.ts", lineNumber: 19 });
})();

// src/app/components/themes/cairo/cairo.component.ts
var _c017 = (a0) => ({ "background-image": a0 });
var _c18 = () => [];
function CairoComponent_div_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22);
    \u0275\u0275element(1, "app-box-search");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275styleMap("category_search");
  }
}
function CairoComponent_section_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 23)(1, "div", 24)(2, "div", 25)(3, "div", 26)(4, "div")(5, "div", 27)(6, "div")(7, "div", 28);
    \u0275\u0275element(8, "span", 29)(9, "span", 30);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div")(11, "div", 28);
    \u0275\u0275element(12, "span", 29)(13, "span", 30);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 31)(15, "div", 28);
    \u0275\u0275element(16, "span", 29)(17, "span", 30);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 32)(19, "div", 28);
    \u0275\u0275element(20, "span", 29)(21, "span", 30);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div", 33)(23, "div", 28);
    \u0275\u0275element(24, "span", 29)(25, "span", 30);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "div", 34)(27, "div", 28);
    \u0275\u0275element(28, "span", 29)(29, "span", 30);
    \u0275\u0275elementEnd()()();
    \u0275\u0275element(30, "app-theme-categories", 35);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(30);
    \u0275\u0275styleMap("horizontal");
    \u0275\u0275property("theme", "cairo")("sliderOption", ctx_r0.categorySlider)("categoryIds", (ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.categories_icon_list == null ? null : ctx_r0.data.content.categories_icon_list.category_ids) || \u0275\u0275pureFunction0(5, _c18));
  }
}
function CairoComponent_section_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 36)(1, "div", 24);
    \u0275\u0275element(2, "app-title", 37)(3, "app-theme-product", 38);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275styleMap("simple");
    \u0275\u0275property("title", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.products_list_1 == null ? null : ctx_r0.data.content.products_list_1.title);
    \u0275\u0275advance();
    \u0275\u0275styleMap("horizontal");
    \u0275\u0275property("productIds", (ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.products_list_1 == null ? null : ctx_r0.data.content.products_list_1.product_ids) || \u0275\u0275pureFunction0(7, _c18))("showItem", ctx_r0.showProductBox);
  }
}
function CairoComponent_section_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 39)(1, "div", 24);
    \u0275\u0275element(2, "app-title", 37)(3, "app-theme-categories", 40);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275styleMap("simple");
    \u0275\u0275property("title", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.categories_icon_list_2 == null ? null : ctx_r0.data.content.categories_icon_list_2.title);
    \u0275\u0275advance();
    \u0275\u0275styleMap("cairo_classic");
    \u0275\u0275property("categoryIds", (ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.categories_icon_list_2 == null ? null : ctx_r0.data.content.categories_icon_list_2.category_ids) || \u0275\u0275pureFunction0(7, _c18))("sliderOption", ctx_r0.categorySlider);
  }
}
function CairoComponent_section_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 41)(1, "div", 24)(2, "div", 42)(3, "div", 43)(4, "div", 44)(5, "div")(6, "h2");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "button", 45);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275element(13, "i", 46);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(14, "div", 47);
    \u0275\u0275element(15, "app-theme-product", 48);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("ngStyle", \u0275\u0275pureFunction1(11, _c017, "url(" + (ctx_r0.storageURL + (ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.slider_product == null ? null : ctx_r0.data.content.slider_product.image_url)) + ")"));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.slider_product == null ? null : ctx_r0.data.content.slider_product.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.slider_product == null ? null : ctx_r0.data.content.slider_product.description);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(12, 9, "view_all"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275styleMap("horizontal");
    \u0275\u0275property("productIds", (ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.slider_product == null ? null : ctx_r0.data.content.slider_product.product_ids) || \u0275\u0275pureFunction0(13, _c18))("slider", true)("sliderOption", ctx_r0.productSlider);
  }
}
function CairoComponent_ng_container_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "section")(2, "div", 24);
    \u0275\u0275element(3, "app-title", 37)(4, "app-top-seller", 49);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275styleMap("simple");
    \u0275\u0275property("title", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.seller == null ? null : ctx_r0.data.content.seller.title);
    \u0275\u0275advance();
    \u0275\u0275property("sellerIds", (ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.seller == null ? null : ctx_r0.data.content.seller.store_ids) || \u0275\u0275pureFunction0(4, _c18));
  }
}
function CairoComponent_section_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 36);
    \u0275\u0275element(1, "app-category-product-filter", 50);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("data", ctx_r0.data == null ? null : ctx_r0.data.content)("grid", ctx_r0.showProductBox);
  }
}
function CairoComponent_section_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 51)(1, "div", 24);
    \u0275\u0275element(2, "app-title", 37)(3, "app-blog", 52);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275styleMap("simple");
    \u0275\u0275property("title", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.featured_blogs == null ? null : ctx_r0.data.content.featured_blogs.title);
    \u0275\u0275advance();
    \u0275\u0275property("blogIds", (ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.featured_blogs == null ? null : ctx_r0.data.content.featured_blogs.blog_ids) || \u0275\u0275pureFunction0(6, _c18))("sliderOption", ctx_r0.bannerSlider)("description", true);
  }
}
function CairoComponent_section_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 53)(1, "div", 24);
    \u0275\u0275element(2, "app-brand", 54);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("brandIds", (ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.brands == null ? null : ctx_r0.data.content.brands.brand_ids) || \u0275\u0275pureFunction0(1, _c18));
  }
}
var CairoComponent = class _CairoComponent {
  constructor(store, themeOptionService, route) {
    this.store = store;
    this.themeOptionService = themeOptionService;
    this.route = route;
    this.skeletonItems = Array.from({ length: 6 }, (_, index) => index);
    this.storageURL = environment.storageURL;
    this.categorySlider = categorySlider9;
    this.productSlider = customOptionsItem3;
    this.bannerSlider = bannerSlider;
    this.showProductBox = 6;
    this.productFilterIds = [];
    this.categories = [];
  }
  ngOnInit() {
    this.themeOptionService.isDigitalProductBox = true;
    if (this.data?.slug == this.slug) {
      const getProducts$ = this.store.dispatch(new GetProductByIds({
        status: 1,
        paginate: this.data?.content?.products_ids.length,
        ids: this.data?.content?.products_ids?.join(",")
      }));
      const getStore$ = this.store.dispatch(new GetStores({
        status: 1,
        ids: this.data?.content?.seller?.store_ids?.join()
      }));
      const getBlogs$ = this.store.dispatch(new GetBlogs({
        status: 1
      }));
      const getCategoryProduct$ = this.store.dispatch(new GetCategoryProducts({
        category_ids: this.data.content?.categories_products?.category_ids?.join(",")
      }));
      const brandIds = this.data?.content?.brands?.brand_ids;
      const getBrand$ = brandIds && brandIds.length > 0 ? this.store.dispatch(new GetBrands({
        status: 1,
        ids: brandIds.join()
      })) : null;
      document.body.classList.add("skeleton-body");
      document.body.classList.add("cairo");
      const actions = [getProducts$, getStore$, getBlogs$, getCategoryProduct$];
      if (getBrand$) {
        actions.push(getBrand$);
      }
      forkJoin(actions).subscribe({
        complete: () => {
          document.body.classList.remove("skeleton-body");
          this.themeOptionService.preloader = false;
        }
      });
    }
    this.route.queryParams.subscribe((params) => {
      if (this.route.snapshot.data["data"].theme_option.productBox === "digital") {
        if (this.productSlider && this.productSlider.responsive && this.productSlider.responsive["1050"]) {
          this.productSlider = __spreadProps(__spreadValues({}, this.productSlider), { items: 3, responsive: __spreadProps(__spreadValues({}, this.productSlider.responsive), {
            1050: {
              items: 3
            }
          }) });
          this.showProductBox = 4;
        }
      } else {
        if (this.productSlider && this.productSlider.responsive && this.productSlider.responsive["1050"]) {
          this.productSlider = __spreadProps(__spreadValues({}, this.productSlider), { items: 4, responsive: __spreadProps(__spreadValues({}, this.productSlider.responsive), {
            1050: {
              items: 4
            }
          }) });
          this.showProductBox = 6;
        }
      }
    });
  }
  ngOnDestroy() {
    document.body.classList.remove("cairo");
  }
  static {
    this.\u0275fac = function CairoComponent_Factory(t) {
      return new (t || _CairoComponent)(\u0275\u0275directiveInject(Store), \u0275\u0275directiveInject(ThemeOptionService), \u0275\u0275directiveInject(ActivatedRoute));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CairoComponent, selectors: [["app-cairo"]], inputs: { data: "data", slug: "slug" }, decls: 29, vars: 14, consts: [[1, "home-search-full", "pt-0", "gradient-home"], [1, "container-fluid", "p-0"], [1, "row", "m-0"], [1, "col-12", "p-0"], [1, "slider-animate"], ["alt", "Background Image", 1, "home-contain", "rounded-0", "p-0", 3, "ngStyle"], [1, "skeleton-banner-xl"], [1, "skeleton-text-wrap"], [1, "placeholder", "col-7"], [1, "placeholder", "col-5"], [1, "placeholder", "col-4"], [1, "placeholder", "col-6"], [1, "home-detail", "p-center", "text-center", "home-overlay", "position-relative"], [1, "content"], ["class", "search-box input-group", 4, "ngIf"], ["class", "feature-category-panel pt-0", 4, "ngIf"], ["class", "product-section", 4, "ngIf"], ["class", "category-panel section-b-space m-0", 4, "ngIf"], ["class", "featured-sec section-b-space", 3, "ngStyle", 4, "ngIf"], [4, "ngIf"], ["class", "section-b-space", 4, "ngIf"], ["class", "brand-effect pt-0 section-b-space", 4, "ngIf"], [1, "search-box", "input-group"], [1, "feature-category-panel", "pt-0"], [1, "container-fluid-lg"], [1, "row", "justify-content-center"], [1, "col-sm-9", "position-relative"], [1, "category-skeleton", "feature-panel-slider", "row", "row-cols-xl-6", "row-cols-lg-5", "row-cols-md-4", "row-cols-sm-3", "row-cols-2"], [1, "cate-box"], [1, "placeholder-text"], [1, "placeholder-text", "w-75", "mt-3"], [1, "d-sm-inline-block", "d-none"], [1, "d-md-inline-block", "d-none"], [1, "d-lg-inline-block", "d-none"], [1, "d-xl-inline-block", "d-none"], [3, "theme", "sliderOption", "categoryIds"], [1, "product-section"], [3, "title"], [3, "productIds", "showItem"], [1, "category-panel", "section-b-space", "m-0"], [3, "categoryIds", "sliderOption"], [1, "featured-sec", "section-b-space", 3, "ngStyle"], [1, "row", "g-sm-4", "g-3"], [1, "col-xxl-3", "col-lg-4"], [1, "feature-title"], [1, "btn", "theme-bg-color", "text-light", "mt-sm-4", "mt-3"], ["data-feather", "arrow-right"], [1, "col-xxl-9", "col-lg-8"], [3, "productIds", "slider", "sliderOption"], [3, "sellerIds"], [3, "data", "grid"], [1, "section-b-space"], [3, "blogIds", "sliderOption", "description"], [1, "brand-effect", "pt-0", "section-b-space"], [3, "brandIds"]], template: function CairoComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div")(6, "div", 5)(7, "div", 6)(8, "div", 7);
        \u0275\u0275element(9, "span", 8)(10, "span", 9)(11, "span", 10)(12, "span", 11);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(13, "div", 12)(14, "div")(15, "div", 13)(16, "h1");
        \u0275\u0275text(17);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "h3");
        \u0275\u0275text(19);
        \u0275\u0275elementEnd();
        \u0275\u0275template(20, CairoComponent_div_20_Template, 2, 2, "div", 14);
        \u0275\u0275elementEnd()()()()()()()()()();
        \u0275\u0275template(21, CairoComponent_section_21_Template, 31, 6, "section", 15)(22, CairoComponent_section_22_Template, 4, 8, "section", 16)(23, CairoComponent_section_23_Template, 4, 8, "section", 17)(24, CairoComponent_section_24_Template, 16, 14, "section", 18)(25, CairoComponent_ng_container_25_Template, 5, 5, "ng-container", 19)(26, CairoComponent_section_26_Template, 2, 2, "section", 16)(27, CairoComponent_section_27_Template, 4, 7, "section", 20)(28, CairoComponent_section_28_Template, 3, 2, "section", 21);
      }
      if (rf & 2) {
        \u0275\u0275advance(6);
        \u0275\u0275property("ngStyle", \u0275\u0275pureFunction1(12, _c017, "url(" + (ctx.storageURL + (ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.home_banner == null ? null : ctx.data.content.home_banner.main_banner == null ? null : ctx.data.content.home_banner.main_banner.image_url)) + ")"));
        \u0275\u0275advance(11);
        \u0275\u0275textInterpolate(ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.home_banner == null ? null : ctx.data.content.home_banner.main_banner == null ? null : ctx.data.content.home_banner.main_banner.title);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.home_banner == null ? null : ctx.data.content.home_banner.main_banner == null ? null : ctx.data.content.home_banner.main_banner.sub_title);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.home_banner == null ? null : ctx.data.content.home_banner.main_banner == null ? null : ctx.data.content.home_banner.main_banner.search_enable);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.categories_icon_list == null ? null : ctx.data.content.categories_icon_list.status);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.products_list_1 == null ? null : ctx.data.content.products_list_1.status);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.categories_icon_list_2 == null ? null : ctx.data.content.categories_icon_list_2.status);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.slider_product == null ? null : ctx.data.content.slider_product.status);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.seller == null ? null : ctx.data.content.seller.status);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", (ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.categories_products == null ? null : ctx.data.content.categories_products.status) && (ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.categories_products == null ? null : ctx.data.content.categories_products.category_ids == null ? null : ctx.data.content.categories_products.category_ids.length));
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.featured_blogs == null ? null : ctx.data.content.featured_blogs.status);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", (ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.brands == null ? null : ctx.data.content.brands.brand_ids) && (ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.brands == null ? null : ctx.data.content.brands.status));
      }
    }, dependencies: [NgIf, NgStyle, TitleComponent, SearchComponent, CategoriesComponent2, ProductComponent, BlogComponent, CategoryProductFilterComponent, BrandComponent, TopSellerComponent, TranslatePipe] });
  }
};
__decorate([
  Select(ThemeOptionState.themeOptions)
], CairoComponent.prototype, "themeOption$", void 0);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CairoComponent, { className: "CairoComponent", filePath: "src\\app\\components\\themes\\cairo\\cairo.component.ts", lineNumber: 21 });
})();

// src/app/components/themes/themes.component.ts
function ThemesComponent_app_paris_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-paris", 1);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("data", ctx_r0.homePage)("slug", ctx_r0.theme);
  }
}
function ThemesComponent_app_tokyo_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-tokyo", 1);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("data", ctx_r0.homePage)("slug", ctx_r0.theme);
  }
}
function ThemesComponent_app_osaka_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-osaka", 1);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("data", ctx_r0.homePage)("slug", ctx_r0.theme);
  }
}
function ThemesComponent_app_rome_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-rome", 1);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("data", ctx_r0.homePage)("slug", ctx_r0.theme);
  }
}
function ThemesComponent_app_madrid_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-madrid", 1);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("data", ctx_r0.homePage)("slug", ctx_r0.theme);
  }
}
function ThemesComponent_app_berlin_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-berlin", 1);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("data", ctx_r0.homePage)("slug", ctx_r0.theme);
  }
}
function ThemesComponent_app_denver_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-denver", 1);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("data", ctx_r0.homePage)("slug", ctx_r0.theme);
  }
}
function ThemesComponent_app_moscow_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-moscow", 1);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("data", ctx_r0.homePage)("slug", ctx_r0.theme);
  }
}
function ThemesComponent_app_cairo_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-cairo", 1);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("data", ctx_r0.homePage)("slug", ctx_r0.theme);
  }
}
var ThemesComponent = class _ThemesComponent {
  constructor(store, route, themeOptionService, seoService) {
    this.store = store;
    this.route = route;
    this.themeOptionService = themeOptionService;
    this.seoService = seoService;
    this.route.queryParams.subscribe((params) => {
      this.themeOptionService.preloader = true;
      this.activeTheme$.subscribe((theme) => {
        this.theme = params["theme"] ? params["theme"] : theme;
        this.store.dispatch(new GetHomePage(params["theme"] ? params["theme"] : theme)).subscribe((data) => {
          this.homePage = data.theme.homePage;
          this.themeOptionService.preloader = false;
        });
      });
    });
    document.body.classList.add("home");
  }
  ngOnInit() {
    this.seoService.updateDefaultSeo();
    this.seoService.setSEOData({
      canonicalUrl: "https://GROFAB.in/",
      url: "https://GROFAB.in/",
      image: "https://GROFAB.in/assets/images/hero-banner.jpg"
    });
  }
  ngOnDestroy() {
    document.body.classList.remove("home");
  }
  static {
    this.\u0275fac = function ThemesComponent_Factory(t) {
      return new (t || _ThemesComponent)(\u0275\u0275directiveInject(Store), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(ThemeOptionService), \u0275\u0275directiveInject(SeoService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ThemesComponent, selectors: [["app-themes"]], decls: 9, vars: 9, consts: [[3, "data", "slug", 4, "ngIf"], [3, "data", "slug"]], template: function ThemesComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, ThemesComponent_app_paris_0_Template, 1, 2, "app-paris", 0)(1, ThemesComponent_app_tokyo_1_Template, 1, 2, "app-tokyo", 0)(2, ThemesComponent_app_osaka_2_Template, 1, 2, "app-osaka", 0)(3, ThemesComponent_app_rome_3_Template, 1, 2, "app-rome", 0)(4, ThemesComponent_app_madrid_4_Template, 1, 2, "app-madrid", 0)(5, ThemesComponent_app_berlin_5_Template, 1, 2, "app-berlin", 0)(6, ThemesComponent_app_denver_6_Template, 1, 2, "app-denver", 0)(7, ThemesComponent_app_moscow_7_Template, 1, 2, "app-moscow", 0)(8, ThemesComponent_app_cairo_8_Template, 1, 2, "app-cairo", 0);
      }
      if (rf & 2) {
        \u0275\u0275property("ngIf", (ctx.homePage == null ? null : ctx.homePage.slug) === "paris");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", (ctx.homePage == null ? null : ctx.homePage.slug) === "tokyo");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", (ctx.homePage == null ? null : ctx.homePage.slug) === "osaka");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", (ctx.homePage == null ? null : ctx.homePage.slug) === "rome");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", (ctx.homePage == null ? null : ctx.homePage.slug) === "madrid");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", (ctx.homePage == null ? null : ctx.homePage.slug) === "berlin");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", (ctx.homePage == null ? null : ctx.homePage.slug) === "denver");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", (ctx.homePage == null ? null : ctx.homePage.slug) === "moscow");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", (ctx.homePage == null ? null : ctx.homePage.slug) === "cairo");
      }
    }, dependencies: [NgIf, ParisComponent, TokyoComponent, OsakaComponent, RomeComponent, MadridComponent, MoscowComponent, BerlinComponent, DenverComponent, CairoComponent] });
  }
};
__decorate([
  Select(ThemeState.homePage)
], ThemesComponent.prototype, "homePage$", void 0);
__decorate([
  Select(ThemeState.activeTheme)
], ThemesComponent.prototype, "activeTheme$", void 0);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ThemesComponent, { className: "ThemesComponent", filePath: "src\\app\\components\\themes\\themes.component.ts", lineNumber: 15 });
})();

// src/app/shared/resolvers/home.resolver.ts
var HomeResolver = class _HomeResolver {
  constructor(store, themeOptionService) {
    this.store = store;
    this.themeOptionService = themeOptionService;
  }
  resolve(route) {
    this.theme = route.queryParams["theme"];
    if (this.theme === "paris" || this.theme === "tokyo") {
      this.themeOptionService.productBox = "basic";
    } else if (this.theme === "berlin" || this.theme === "denver") {
      this.themeOptionService.productBox = "standard";
    } else if (this.theme === "osaka" || this.theme === "rome") {
      this.themeOptionService.productBox = "classic";
    } else if (this.theme === "cairo") {
      this.themeOptionService.productBox = "digital";
    } else if (this.theme === "madrid" || this.theme === "moscow") {
      this.themeOptionService.productBox = "premium";
    } else {
      this.themeOption$.subscribe((theme) => {
        this.themeOptionService.productBox = theme?.product ? theme?.product?.product_box_variant : "basic";
      });
    }
    return this.store.dispatch(new UpdateProductBox(this.themeOptionService.productBox));
  }
  static {
    this.\u0275fac = function HomeResolver_Factory(t) {
      return new (t || _HomeResolver)(\u0275\u0275inject(Store), \u0275\u0275inject(ThemeOptionService));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _HomeResolver, factory: _HomeResolver.\u0275fac, providedIn: "root" });
  }
};
__decorate([
  Select(ThemeOptionState.themeOptions)
], HomeResolver.prototype, "themeOption$", void 0);

// src/app/components/themes/themes-routing.module.ts
var routes = [
  {
    path: "home",
    component: ThemesComponent
  },
  {
    path: "",
    component: ThemesComponent,
    runGuardsAndResolvers: "paramsOrQueryParamsChange",
    resolve: {
      data: HomeResolver
    }
  }
];
var ThemesRoutingModule = class _ThemesRoutingModule {
  static {
    this.\u0275fac = function ThemesRoutingModule_Factory(t) {
      return new (t || _ThemesRoutingModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _ThemesRoutingModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forChild(routes), RouterModule] });
  }
};

// src/app/components/themes/themes.module.ts
var ThemesModule = class _ThemesModule {
  static {
    this.\u0275fac = function ThemesModule_Factory(t) {
      return new (t || _ThemesModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _ThemesModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [
      CommonModule,
      ThemesRoutingModule,
      SharedModule,
      BlogModule,
      ShopModule,
      TranslateModule
    ] });
  }
};
export {
  ThemesModule
};
//# sourceMappingURL=chunk-XZVJNQKD.js.map
