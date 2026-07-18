import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { VerifyRegistrationOtp } from '../../../shared/action/auth.action';
import { Breadcrumb } from '../../../shared/interface/breadcrumb';
import { NotificationService } from '../../../shared/services/notification.service';

@Component({
  selector: 'app-verify-registration-otp',
  templateUrl: './verify-registration-otp.component.html',
  styleUrls: ['./verify-registration-otp.component.scss']
})
export class VerifyRegistrationOtpComponent implements OnInit {

  public form: FormGroup;
  public email: string;

  public breadcrumb: Breadcrumb = {
    title: "Verify Account",
    items: [{ label: 'Verify Account', active: true }]
  }

  constructor(
    public router: Router,
    public store: Store,
    public formBuilder: FormBuilder,
    private notificationService: NotificationService
  ) {
    this.form = this.formBuilder.group({
      otp: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(6), Validators.pattern(/^[0-9]{6}$/)]),
    });
  }

  ngOnInit() {
    this.email = this.store.selectSnapshot((state: any) => state.auth.email);
    if (!this.email) {
      this.router.navigateByUrl('/auth/register');
    }
  }

  submit() {
    this.form.markAllAsTouched();
    if (this.form.valid) {
      const payload = {
        email: this.email,
        otp: this.form.value.otp
      };
      this.store.dispatch(new VerifyRegistrationOtp(payload)).subscribe({
        complete: () => {
          this.notificationService.showSuccess('Account verified successfully! Please sign in.');
          this.router.navigateByUrl('/auth/login');
        }
      });
    }
  }
}
