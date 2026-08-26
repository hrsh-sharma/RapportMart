import { Component, Input, HostListener, ElementRef, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngxs/store';
import { Option } from '../../../../shared/interface/theme-option.interface';
import { Footer } from '../../../../shared/interface/theme.interface';
import { Subscription } from '../../../../shared/action/subscription.action';

@Component({
  selector: 'app-basic-footer',
  templateUrl: './basic-footer.component.html',
  styleUrls: ['./basic-footer.component.scss']
})
export class BasicFooterComponent {

  @Input() data: Option | null;
  @Input() footer: Footer;

  public email = new FormControl('', [Validators.email]);
  public isSubmitting: boolean = false;
  public showBackToTop: boolean = false;

  // Support form state
  public supportEmail = new FormControl('', [Validators.required, Validators.email]);
  public supportMessage = new FormControl('', [Validators.required]);
  public showSupportForm: boolean = false;
  public supportSubmitted: boolean = false;
  public isSupportSubmitting: boolean = false;

  public active: { [key: string]: boolean } = {
    collections: false,
    useful_link: false,
    help_center: false
  };

  public showSocialActions: boolean = false;

  constructor(private store: Store) {
    // Open all tabs by default on mobile
    this.checkMobileAndOpenTabs();
  }

  checkMobileAndOpenTabs() {
    // Check if mobile or tablet on initialization
    if (window.innerWidth <= 1024) {
      this.active['collections'] = true;
      this.active['useful_link'] = true;
    }

    // Listen for window resize to handle orientation changes
    window.addEventListener('resize', () => {
      if (window.innerWidth <= 1024) {
        this.active['collections'] = true;
        this.active['useful_link'] = true;
      } else {
        // Keep collapsed on desktop unless user has manually expanded
        // Only reset if they were auto-opened
        if (this.active['collections'] && this.active['useful_link']) {
          this.active['collections'] = false;
          this.active['useful_link'] = false;
        }
      }
    });
  }

  toggle(value: string) {
    this.active[value] = !this.active[value];
  }

  submitNewsletter() {
    if (this.email.valid && this.email.value) {
      this.isSubmitting = true;
      this.store.dispatch(new Subscription({ email: this.email.value }))
        .subscribe({
          next: () => {
            this.email.reset();
            this.isSubmitting = false;
          },
          error: () => {
            this.isSubmitting = false;
          }
        });
    } else {
      this.email.markAsTouched();
    }
  }

  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  toggleSupportForm() {
    this.showSupportForm = !this.showSupportForm;
    if (!this.showSupportForm) {
      this.resetSupportForm();
    }
  }

  submitSupportForm() {
    this.supportEmail.markAsTouched();
    this.supportMessage.markAsTouched();
    if (this.supportEmail.invalid || this.supportMessage.invalid) return;

    this.isSupportSubmitting = true;
    // Simulate async submission (replace with real API call if needed)
    setTimeout(() => {
      this.isSupportSubmitting = false;
      this.supportSubmitted = true;
    }, 1200);
  }

  resetSupportForm() {
    this.supportEmail.reset();
    this.supportMessage.reset();
    this.supportSubmitted = false;
    this.isSupportSubmitting = false;
  }

  toggleSocialActions() {
    this.showSocialActions = !this.showSocialActions;
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    this.showBackToTop = scrollPosition > 300;
  }
}
