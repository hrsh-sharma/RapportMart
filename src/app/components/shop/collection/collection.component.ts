import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store, Select } from '@ngxs/store';
import { Observable, combineLatest } from 'rxjs';
import { Params } from '../../../shared/interface/core.interface';
import { Breadcrumb } from '../../../shared/interface/breadcrumb';
import { ProductModel } from '../../../shared/interface/product.interface';
import { GetProducts } from '../../../shared/action/product.action';
import { ProductState } from '../../../shared/state/product.state';
import { ThemeOptionState } from '../../../shared/state/theme-option.state';
import { Option } from '../../../shared/interface/theme-option.interface';
import { Title, Meta } from '@angular/platform-browser';
import { SeoService } from '../../../shared/services/seo.service';
 
@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.scss']
})
export class CollectionComponent {

  @Select(ProductState.product) product$: Observable<ProductModel>;
  @Select(ThemeOptionState.themeOptions) themeOptions$: Observable<Option>;

  public breadcrumb: Breadcrumb = {
    title: "Collections",
    items: [{ label: 'Collections', active: false }]
  };
  public layout: string = 'collection_category_slider';
  public skeleton: boolean = true;

  public filter: Params = {
    'page': 1, // Current page number
    'paginate': 40,
    'status': 1,
    'field': 'created_at',
    'price': '',
    'category': '',
    'tag': '',
    'sort': 'asc', // ASC, DSC
    'sortBy': 'asc',
    'rating': '',
    'attribute': '',
    store_id: 29,
  };

  public totalItems: number = 0;

  constructor(private route: ActivatedRoute,
    private store: Store,
    private seoService: SeoService) {

    // Combine route params (for category in path) and query params (for other filters)
    combineLatest([this.route.params, this.route.queryParams]).subscribe(([routeParams, queryParams]) => {
      // Category comes from path param (/collections/sarees) or fallback to query param
      const category = routeParams['category'] || queryParams['category'] || '';

      this.filter = {
        'page': queryParams['page'] ? queryParams['page'] : 1,
        'paginate': 40,
        'status': 1,
        'price': queryParams['price'] ? queryParams['price'] : '',
        'brand': queryParams['brand'] ? queryParams['brand'] : '',
        'category': category,
        'tag': queryParams['tag'] ? queryParams['tag'] : '',
        'field': queryParams['field'] ? queryParams['field'] : this.filter['field'],
        'sortBy': queryParams['sortBy'] ? queryParams['sortBy'] : this.filter['sortBy'],
        'rating': queryParams['rating'] ? queryParams['rating'] : '',
        'attribute': queryParams['attribute'] ? queryParams['attribute'] : '',
        store_id: 29,
      }

      this.store.dispatch(new GetProducts(this.filter));

      // Params For Demo Purpose only
      if(queryParams['layout']) {
        this.layout = queryParams['layout'];
      } else {
        // Get Collection Layout
        this.themeOptions$.subscribe(option => {
          this.layout = option?.collection && option?.collection?.collection_layout
            ? option?.collection?.collection_layout : 'collection_category_slider';
        });
      }

      this.filter['layout'] = this.layout;

      // Set SEO meta tags and breadcrumb based on category
      if (category) {
        this.setCategorySEO(category);
      } else {
        this.setDefaultSEO();
      }
    });
    this.product$.subscribe(product => this.totalItems = product?.total);
  }

  /**
   * Set category-specific SEO meta tags
   */
  private setCategorySEO(category: string): void {
    const categoryLower = category.toLowerCase();
    const baseUrl = 'https://rapportmart.com';
    const url = `${baseUrl}/collections/${categoryLower}`;
    let title = '';
    let description = '';
    let keywords = '';
    
    switch (categoryLower) {
      case 'activewear':
        title = 'Activewear Collection | Gym Wear, Sportswear & Fitness Clothes | Rapportmart';
        description = 'Shop premium activewear and sportswear at Rapportmart. Find high-quality gym wear, fitness clothes, yoga pants, sports bras, and athletic wear for men & women.';
        keywords = 'activewear, gym wear, sportswear, fitness clothes, workout clothes, yoga pants, sports bras, athletic wear, Rapportmart';
        break;

      case 'men':
        title = 'Mens Clothing Collection | Rapportmart';
        description = 'Explore mens shirts jackets suits jeans and more at Rapportmart. New arrivals fast PAN India delivery COD and easy 7 day returns.';
        keywords = 'men\'s clothes, men\'s fashion, men\'s clothing, men\'s apparel, men\'s shirts, Rapportmart';
        break;

      case 'women':
        title = 'Women\'s Clothing Collection | Rapportmart';
        description = 'Explore stunning women\'s clothing and fashion at Rapportmart. Shop trendy women\'s fashion including dresses, tops, jeans, and more.';
        keywords = 'women\'s clothes, women\'s fashion, women\'s clothing, women\'s apparel, Rapportmart';
        break;

      default:
        title = `${category.charAt(0).toUpperCase() + category.slice(1)} Collection | Rapportmart`;
        description = `Shop ${category} collection at Rapportmart. Discover trendy fashion, quality clothing, and stylish apparel.`;
        keywords = `${category}, fashion, clothing, apparel, Rapportmart`;
        break;
    }

    this.seoService.setSEOData({
      title: title,
      description: description,
      keywords: keywords,
      url: url,
      type: 'website'
    });

    this.seoService.setCollectionPageStructuredData(title, description, url);
    
    // Update breadcrumb
    this.breadcrumb.title = `${category.charAt(0).toUpperCase() + category.slice(1)} Collection`;
    this.breadcrumb.items = [
      { label: 'Home', active: false },
      { label: 'Collections', active: false },
      { label: category.charAt(0).toUpperCase() + category.slice(1), active: true }
    ];
  }

  /**
   * Set default SEO meta tags for collections page
   */
  private setDefaultSEO(): void {
    const title = 'Shop Collections | Activewear, Men\'s & Women\'s Fashion | Rapportmart';
    const description = 'Explore our curated collections at Rapportmart. Shop activewear, men\'s clothing, women\'s fashion, and more.';
    const keywords = 'collections, activewear, men\'s clothes, women\'s clothes, fashion collections, Rapportmart';
    const url = 'https://rapportmart.com/collections';

    this.seoService.setSEOData({
      title: title,
      description: description,
      keywords: keywords,
      url: url,
      type: 'website'
    });

    this.seoService.setCollectionPageStructuredData(title, description, url);
    
    // Reset breadcrumb to default
    this.breadcrumb.title = 'Collections';
    this.breadcrumb.items = [
      { label: 'Home', active: false },
      { label: 'Collections', active: true }
    ];
  }


}
