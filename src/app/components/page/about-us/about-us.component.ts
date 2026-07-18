import { Component } from '@angular/core';
import { Breadcrumb } from '../../../shared/interface/breadcrumb';

import { SeoService } from '../../../shared/services/seo.service';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent {

  public breadcrumb: Breadcrumb = {
    title: "About Us",
    items: [{ label: 'About Us', active: true }]
  }

  constructor(private seoService: SeoService) {
    this.seoService.setSEOData({
      title: 'About Rapportmart | Premium Men’s & Women’s Fashion',
      description: 'Learn more about Rapportmart, your destination for premium quality men’s and women’s clothing in India.',
      keywords: 'about rapportmart, fashion brand, quality clothing',
      canonicalUrl: 'https://rapportmart.com/about-us',
      url: 'https://rapportmart.com/about-us',
      type: 'website'
    });
  }
}
