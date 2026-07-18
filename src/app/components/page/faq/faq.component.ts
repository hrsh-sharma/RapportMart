import { Component } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { Breadcrumb } from '../../../shared/interface/breadcrumb';
import { PageState } from '../../../shared/state/page.state';
import { GetFaqs } from '../../../shared/action/page.action';
import { FaqModel } from '../../../shared/interface/page.interface';
import { PageService } from '../../../shared/services/page.service';
import { SeoService } from '../../../shared/services/seo.service';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent {

  public breadcrumb: Breadcrumb = {
    title: "FAQ's",
    items: [{ label: "FAQ's", active: true }]
  }

  @Select(PageState.faq) faq$: Observable<FaqModel>;

  constructor(private store: Store, public pageService: PageService, private seoService: SeoService) {
    this.pageService.skeletonLoader = true;
    this.store.dispatch(new GetFaqs()).subscribe({
      complete: () => {
        this.pageService.skeletonLoader = false;
      }
    });

    this.seoService.setSEOData({
      title: 'Frequently Asked Questions (FAQ) | Rapportmart',
      description: 'Find answers to common questions about Rapportmart orders, shipping, returns, and products.',
      keywords: 'faq, frequently asked questions, help, Rapportmart support',
      canonicalUrl: 'https://rapportmart.com/faq',
      url: 'https://rapportmart.com/faq',
      type: 'website'
    });
  }

}
