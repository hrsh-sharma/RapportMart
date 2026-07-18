import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Params, Route, Router } from '@angular/router';
import { Select, Store } from '@ngxs/store';
import { filter, Observable, Subscription, switchMap } from 'rxjs';
import { Breadcrumb } from '../../../shared/interface/breadcrumb';
import { ProductModel } from '../../../shared/interface/product.interface';
import { ProductState } from '../../../shared/state/product.state';
import { GetProducts } from '../../../shared/action/product.action';
import { CategoryState } from '../../../shared/state/category.state';
import { Category } from '../../../shared/interface/category.interface';
import { SeoService } from '../../../shared/services/seo.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrl: './category.component.scss'
})
export class CategoryComponent {
  @Select(ProductState.product) product$: Observable<ProductModel>;
  @Select(CategoryState.selectedCategory) category$: Observable<Category>;

  public breadcrumb: Breadcrumb = {
    title: "Category",
    items: [{ label: '', active: false }]
  };
  public layout: string = 'collection_category_slider';
  public skeleton: boolean = true;
  public category: Category;
  public filter: Params = {
    'page': 1, // Current page number
    'paginate': 40, // Display per page,
    'status': 1,
    'field': 'created_at',
    'price': '',
    'category': '',
    'tag': '',
    'sort': 'asc', // ASC, DSC
    'sortBy': 'asc',
    'rating': '',
    'attribute': ''
  };

  private queryParamsSubscription: Subscription;
  private routerEventsSubscription: Subscription;

  public totalItems: number = 0;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private store: Store,
    private seoService: SeoService) {
      this.category$.subscribe(category => {
        this.category = category;
        this.breadcrumb.title = `Category: ${this.category?.name}`;
        this.breadcrumb.items[0].label = this.category?.name;
        
        if (category) {
          this.setCategorySEO(category);
        }
      })
  }


  ngOnInit() {
    this.routerEventsSubscription = this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      switchMap(() => {
        const category = this.route.snapshot.paramMap.get('slug');
        return this.route.queryParams.pipe(
          switchMap(params => {
            this.filter = {
              page: params['page'] ? params['page'] : 1,
              paginate: 40,
              status: 1,
              category: params['page'] ? params['page'] : category,
              price: params['price'] ? params['price'] : '',
              brand: params['brand'] ? params['brand'] : '',
              tag: params['tag'] ? params['tag'] : '',
              field: params['field'] ? params['field'] : this.filter['field'],
              sortBy: params['sortBy'] ? params['sortBy'] : this.filter['sortBy'],
              rating: params['rating'] ? params['rating'] : '',
              attribute: params['attribute'] ? params['attribute'] : '',
            };
            this.store.dispatch(new GetProducts(this.filter));
            return [];
          })
        );
      })
    ).subscribe();
  }

  /**
   * Set category-specific SEO meta tags
   */
  private setCategorySEO(category: Category): void {
    const baseUrl = 'https://rapportmart.com';
    const url = `${baseUrl}/category/${category.slug}`;
    const title = `${category.name} Collection | Rapportmart`;
    const description = category.description || `Shop the latest ${category.name} collection at Rapportmart. Premium quality fashion with fast delivery.`;
    const keywords = `${category.name}, fashion, clothing, Rapportmart`;

    this.seoService.setSEOData({
      title: title,
      description: description,
      keywords: keywords,
      url: url,
      type: 'website'
    });

    this.seoService.setCollectionPageStructuredData(title, description, url);
  }
}
