import { Component, OnInit } from '@angular/core';
import { SeoService } from '../../shared/services/seo.service';

@Component({
  selector: 'app-privacy-policy',
  standalone: true,
  imports: [],
  templateUrl: './privacy-policy.component.html',
  styleUrl: './privacy-policy.component.scss'
})
export class PrivacyPolicyComponent implements OnInit {

  constructor(private seoService: SeoService) {}

  ngOnInit() {
    // Set unique SEO data for Privacy Policy page
    this.seoService.setSEOData({
      title: 'Privacy Policy – How We Use Your Data | Rapportmart',
      description: 'Learn how Rapportmart protects and uses your personal information. Read our comprehensive privacy policy to understand your rights and our data practices.',
      keywords: 'privacy policy, data protection, personal information, Rapportmart privacy, data usage',
      canonicalUrl: 'https://Rapportmart.in/privacy-policy', // ✅ Canonical URL for SEO
      url: 'https://Rapportmart.in/privacy-policy',
      type: 'website'
    });
  }
}
