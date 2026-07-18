import { Component, ViewChild, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.scss']
})
export class LoginModalComponent {

  public modalOpen: boolean = false;
  private closeResult: string;

  @ViewChild("loginModal", { static: false }) LoginModal: TemplateRef<any>;

  constructor(private modalService: NgbModal, private router: Router) {}

  async openModal() {
    this.modalOpen = true;
    this.modalService.open(this.LoginModal, {
      ariaLabelledBy: 'Login-Modal',
      centered: true,
      windowClass: 'theme-modal text-center'
    }).result.then((result) => {
      `Result ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: ModalDismissReasons): string {
    if (reason === ModalDismissReasons.ESC) return 'by pressing ESC';
    if (reason === ModalDismissReasons.BACKDROP_CLICK) return 'by clicking on a backdrop';
    return `with: ${reason}`;
  }

  goToLogin() {
    this.modalService.dismissAll();
    this.router.navigateByUrl('/auth/login');
  }

  goToRegister() {
    this.modalService.dismissAll();
    this.router.navigateByUrl('/auth/register');
  }

  ngOnDestroy() {
    if (this.modalOpen) {
      this.modalService.dismissAll();
    }
  }
}
