# Fastkart Multivendor Template — Single-Brand Compliance Cleanup

## Context

**Problem:** Sites built on the Fastkart multivendor Angular template ship with seller/marketplace features baked in (store listings, "sold by", vendor contact details, "Top Sellers" homepage section, etc.). If your site is also listed as a seller on another marketplace (e.g. mangalfashion.com), Google indexes both pages with the same phone/email/catalog and treats them as the same entity. Banks and payment-compliance teams flag this.

**Goal:** Make the site present as a single-brand, first-party store with zero marketplace surface — in the UI, in the HTML source, in the SEO/structured-data layer, and in network calls.

---

## Part 1 — SEO Fixes (`src/index.html` + `seo.service.ts`)

### 1.1 Add a hardcoded canonical + robots tag to `index.html`

The Fastkart template says "canonical handled dynamically by Angular" but ships with no canonical in the HTML. Search engine bots that crawl before JS loads see nothing.

Find this comment in `src/index.html`:
```html
<!-- Canonical handled dynamically by Angular -->
```

Replace with:
```html
<!-- Default canonical for homepage; overridden dynamically by Angular on inner pages -->
<link rel="canonical" href="https://YOURDOMAIN.com/" id="canonical-url">
<meta name="robots" content="index, follow">
```

> Angular's `SEOService.setCanonicalUrl()` already uses `querySelectorAll('link[rel="canonical"]')` and removes all existing ones before adding a new one — so this default gets correctly overridden on every inner page.

---

### 1.2 Add `sameAs` to Organization JSON-LD (`seo.service.ts`)

Find `setOrganizationStructuredData()`. The default object has no `sameAs`. Add it so Google's Knowledge Graph treats this as a distinct, independent entity:

```typescript
setOrganizationStructuredData(): void {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "YOUR LEGAL COMPANY NAME",
    "legalName": "YOUR LEGAL COMPANY NAME",
    "url": "https://YOURDOMAIN.com",
    "logo": "https://YOURDOMAIN.com/assets/images/logo.png",
    "email": "info@YOURDOMAIN.com",
    "sameAs": [
      "https://www.instagram.com/YOUR_REAL_HANDLE",
      "https://www.facebook.com/YOUR_REAL_PAGE",
      "https://x.com/YOUR_REAL_HANDLE"
    ],
    "address": { ... },
    "contactPoint": { ... }
  };
}
```

> ⚠️ Use REAL verified profile URLs. Generic ones (e.g. just `facebook.com`) give no benefit and can confuse Google's entity resolution.

---

### 1.3 Fix the `Offer.seller` in Product JSON-LD

Find `setProductStructuredData()`. Change the seller name from the generic brand name to the full registered legal entity name. This signals first-party selling, not a marketplace listing:

```typescript
"seller": {
  "@type": "Organization",
  "name": "YOUR LEGAL COMPANY NAME PVT LTD"
}
```

---

### 1.4 Fix footer social links

The Fastkart template ships with footer links pointing to bare domain roots (`https://www.facebook.com`, `https://www.instagram.com`). Find your footer component (usually `basic-footer.component.html`) and replace with real profile URLs:

```html
<!-- Before (template default — useless) -->
<a href="https://www.facebook.com" target="_blank">
<a href="https://www.instagram.com" target="_blank">

<!-- After (real profiles) -->
<a href="https://www.facebook.com/YOUR_PAGE" target="_blank">
<a href="https://www.instagram.com/YOUR_HANDLE" target="_blank">
```

---

## Part 2 — Code Cleanup (Delete Seller Module)

### 2.1 Delete these 5 component folders entirely

```
src/app/components/shop/seller/
src/app/components/themes/widgets/top-seller/
src/app/components/shop/product/product-details/widgets/vendor-contain/
src/app/components/shop/product/product-details/widgets/store-information/
src/app/components/shop/product/product-details/widgets/digital-product-contain/
```

---

### 2.2 Clean `shop.module.ts`

Remove the entire `// Seller` import block (all `SellerComponent`, `SellerStore*`, `SellerDetails*`, `SellerContactDetails*`, etc.) and their declarations.

Also remove these three imports and their declarations:
- `StoreInformationComponent`
- `VendorContainComponent`
- `DigitalProductContainComponent`

Also remove the **duplicate** `SkeletonSellerStoreComponent` declaration (it appears twice in the default template).

---

### 2.3 Clean `themes.module.ts`

Remove:
```typescript
import { TopSellerComponent } from './widgets/top-seller/top-seller.component';
```
And remove `TopSellerComponent` from the `declarations` array.

---

### 2.4 Remove `<app-top-seller>` blocks from all 7 theme templates

The themes that include a Top Seller section: **paris, tokyo, berlin, osaka, madrid, cairo, rome**.

Each has a block like this (the exact condition varies slightly):

```html
<!-- Top Seller start -->
<ng-container *ngIf="data?.content?.seller?.status">
  <section>
    <div class="container-fluid-lg">
      <app-title [title]="data?.content?.seller?.title"></app-title>
      <app-top-seller [sellerIds]="data?.content?.seller?.store_ids || []"></app-top-seller>
    </div>
  </section>
</ng-container>
<!-- Top Seller End -->
```

**Delete the entire block.** Do NOT use `*ngIf="false"` — the component is deleted so it will fail to compile. Replace with a single comment:

```html
<!-- Top Seller section removed: single-brand store, no third-party seller/marketplace content (compliance) -->
```

---

### 2.5 Remove `GetStores` dispatch from all theme `.ts` files

Every theme's `ngOnInit` dispatches a `GetStores` API call even after the widget is deleted. This call is still visible in the browser Network tab. Remove it from: **paris, tokyo, berlin, osaka, madrid, cairo, rome, denver**.

For each file, make 3 changes:

**① Delete the import:**
```typescript
import { GetStores } from '../../../shared/action/store.action';
```

**② Delete the dispatch block:**
```typescript
const getStore$ = this.store.dispatch(new GetStores({
  status: 1,
  ids: this.data?.content?.seller?.store_ids?.join()
}));
```

**③ Remove `getStore$` from the `forkJoin` actions array** (leave all other items untouched):

| Theme  | Before                                                          | After                                          |
|--------|-----------------------------------------------------------------|------------------------------------------------|
| paris  | `[getProducts$, getBlogs$, getStore$]`                          | `[getProducts$, getBlogs$]`                    |
| tokyo  | `[getProducts$, getStore$]`                                     | `[getProducts$]`                               |
| berlin | `[getProducts$, getStore$]`                                     | `[getProducts$]`                               |
| osaka  | `[getProducts$, getStore$, getBlogs$]`                          | `[getProducts$, getBlogs$]`                    |
| madrid | `[getProducts$, getBlogs$, getStore$]`                          | `[getProducts$, getBlogs$]`                    |
| cairo  | `[getProducts$, getStore$, getBlogs$, getCategoryProduct$]`     | `[getProducts$, getBlogs$, getCategoryProduct$]` |
| rome   | `[getProducts$, getBlogs$, getCatProducts$, getStore$]`         | `[getProducts$, getBlogs$, getCatProducts$]`   |
| denver | `[getProducts$, getStore$]`                                     | `[getProducts$]`                               |

> Do **NOT** delete `store.state.ts` or `store.action.ts` — other parts of the app may use `GetStoreBySlug` for routing. Just stop dispatching from theme components.

---

### 2.6 Remove seller links from product widgets

**`product-digital.component.html`** — remove the `<app-vendor-contain>` wrapper, keep the `vendor-detail` content inside:
```html
<!-- Delete this outer div and the app-vendor-contain line -->
<div class="vendor-box">
  <app-vendor-contain [store]="product.store!"></app-vendor-contain>
  <div class="vendor-detail">
    <p>{{product.short_description}}</p>
  </div>
</div>
```

**`sidebar/sidebar.component.html`** — delete this line entirely (do NOT use `*ngIf="false"` — causes a type error):
```html
<app-store-information [store]="product.store" *ngIf="product.store"></app-store-information>
```

**`breadcrumb-digital.component.html`** — remove the "by [store]" `<li>`:
```html
<li>
  <h6 class="content">by <a [routerLink]="['/seller/store', product.store?.slug]">
    {{product.store?.store_name}}
  </a></h6>
</li>
```

**`digital-product-box.component.html`** — replace the seller-attributed rating line with category-only:
```html
<!-- Remove this -->
<h6 *ngIf="product.store">{{ 'by' | translate }}
  <a [routerLink]="['/seller/store/', product.store.slug]">{{ product.store.store_name }}</a>
  {{ 'in' | translate }} ...
</h6>

<!-- Replace with this -->
<h6 *ngIf="product.categories.length">{{ 'in' | translate }}
  <a [routerLink]="['/collections/']" [queryParams]="{ category: product.categories[0].slug }">
    {{ product.categories[0].name }}
  </a>
</h6>
```

---

### 2.7 Keep the `/seller` redirect routes (do NOT delete them)

In `shop-routing.module.ts`, these routes must **stay**. They ensure old Google-indexed seller URLs return 301 → home instead of 404:

```typescript
{ path: 'seller/store/:slug',   redirectTo: '/', pathMatch: 'full' },
{ path: 'seller/stores',        redirectTo: '/', pathMatch: 'full' },
{ path: 'seller/become-seller', redirectTo: '/', pathMatch: 'full' },
```

---

## Part 3 — Robots & Sitemap Audit

### 3.1 Verify sitemap has NO seller URLs

Open `src/sitemap.xml` and confirm no `<loc>` contains `/seller/`.

### 3.2 Add seller disallow to `robots.txt`

Even though routes redirect, add an explicit disallow as a safety net:

```
Disallow: /seller/
```

---

## Part 4 — External Actions (Non-Code)

These cannot be done in the codebase — they must be done manually:

| # | Action | Where |
|---|--------|-------|
| 1 | **Delete or deactivate the seller store profile** on the third-party marketplace | Marketplace seller dashboard |
| 2 | **Google Search Console → Removals** → submit the third-party marketplace URL (e.g. `mangalfashion.com/seller/store/yourstore`) | search.google.com/search-console |
| 3 | **Verify/create Google Business Profile** for the company at its registered address | business.google.com |
| 4 | **Verify social profiles** (Instagram, Facebook, X) that you put in `sameAs` — they must exist and be active | Each platform |

---

## Build Verification

After all changes, always run a clean build:

```bash
npm run build
```

Expected output:
```
Application bundle generation complete. [XX seconds]
```

Pre-existing `NG8107` optional-chaining warnings are harmless — ignore them. Any `X [ERROR]` line means a component reference was missed.

---

## What NOT to Delete (Common Mistakes)

| File / Class | Why to keep |
|---|---|
| `store.state.ts`, `store.action.ts` | `GetStoreBySlug` may be used for product/brand routing |
| `Seller` interface in `theme.interface.ts` | Backend still sends this data shape |
| `/seller/*` redirect routes | Keeps old indexed URLs from 404'ing |
| `Offer.seller` in Product JSON-LD | Proves first-party selling — helps compliance |
| Terms page "no third-party seller storefronts" text | Direct compliance evidence |

---

## Quick Checklist

```
SEO
☐ Canonical tag hardcoded in index.html
☐ <meta name="robots" content="index, follow"> in index.html
☐ sameAs array in Organization JSON-LD (real profile URLs)
☐ Offer.seller = full legal entity name
☐ Footer social links = real verified profile URLs

CODE
☐ Deleted: shop/seller/ folder
☐ Deleted: themes/widgets/top-seller/ folder
☐ Deleted: vendor-contain/, store-information/, digital-product-contain/ folders
☐ shop.module.ts — all seller imports + declarations removed
☐ themes.module.ts — TopSellerComponent removed
☐ 7 theme HTML files — <app-top-seller> blocks deleted
☐ 8 theme .ts files — GetStores import + dispatch + actions[] entry removed
☐ product-digital.html — vendor-contain removed
☐ sidebar.component.html — store-information line deleted
☐ breadcrumb-digital.html — "by [store]" li removed
☐ digital-product-box.html — "by [store]" link replaced with category-only
☐ /seller/* redirect routes — kept

ROBOTS / SITEMAP
☐ sitemap.xml — no /seller/ URLs present
☐ robots.txt — Disallow: /seller/ added

EXTERNAL
☐ Seller profile deleted from third-party marketplace
☐ URL submitted for removal in Google Search Console
☐ Google Business Profile verified
☐ Real social handles added to sameAs + footer

VERIFY
☐ npm run build — "Application bundle generation complete", exit 0
```
