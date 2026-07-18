import { Component } from '@angular/core';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { PageState } from '../../shared/state/page.state';
import { Page } from '../../shared/interface/page.interface';
import { Breadcrumb } from '../../shared/interface/breadcrumb';
import { PageService } from '../../shared/services/page.service';
import { SeoService } from '../../shared/services/seo.service';

@Component({
  selector: 'app-pages',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent {

  @Select(PageState.selectedPage) selectedPage$: Observable<Page>;

  public breadcrumb: Breadcrumb = {
    title: "Page",
    items: []
  }

  constructor(public pageService: PageService, private seoService: SeoService){
    this.selectedPage$.subscribe(page =>{
      this.breadcrumb.items = [];
      this.breadcrumb.title = page.title;
      this.breadcrumb.items.push({ label: 'Page', active: true }, { label: page.title, active: false });
      
      if (page) {
        this.seoService.setSEOData({
          title: page.meta_title || `${page.title} | Rapportmart`,
          description: page.meta_description || `Read our ${page.title} at Rapportmart.`,
          url: `https://rapportmart.com/${page.slug}`,
          canonicalUrl: `https://rapportmart.com/${page.slug}`,
          type: 'website'
        });
      }
    });
  }

}
