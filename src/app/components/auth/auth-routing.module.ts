import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { LoginComponent } from "./login/login.component";
import { ForgotPasswordComponent } from "./forgot-password/forgot-password.component";
import { OtpComponent } from "./otp/otp.component";
import { UpdatePasswordComponent } from "./update-password/update-password.component";
import { RegisterComponent } from "./register/register.component";
import { LoginWithNumberComponent } from "./login-with-number/login-with-number.component";
import { VerifyRegistrationOtpComponent } from "./verify-registration-otp/verify-registration-otp.component";

const routes: Routes = [
  {
    path: "login",
    component: LoginComponent,
  },
  {
    path: "forgot-password",
    component: ForgotPasswordComponent,
  },
  {
    path: "otp",
    component: OtpComponent,
  },
  {
    path: "update-password",
    component: UpdatePasswordComponent,
  },
  {
    path: "register",
    component: RegisterComponent,
  },
  {
    path: "login-with-number",
    component: LoginWithNumberComponent,
  },
  {
    path: "verify-registration-otp",
    component: VerifyRegistrationOtpComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
