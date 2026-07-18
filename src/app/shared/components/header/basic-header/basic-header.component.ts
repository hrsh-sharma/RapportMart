import { Component, Input, HostListener, OnDestroy } from '@angular/core';
import { Option } from '../../../interface/theme-option.interface';

@Component({
  selector: 'app-basic-header',
  templateUrl: './basic-header.component.html',
  styleUrls: ['./basic-header.component.scss']
})
export class BasicHeaderComponent implements OnDestroy {

  @Input() data: Option | null;
  @Input() logo: string | null | undefined;
  @Input() sticky: boolean | number | undefined;
  @Input() class: string | undefined;

  public stick: boolean = false;
  public active: boolean = false;
  public searchOpen: boolean = false;

  @HostListener("window:scroll", [])
  onWindowScroll() {
    let number = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    if (number >= 150 && window.innerWidth > 400) {
      this.stick = true;
    } else {
      this.stick = false;
    }
  }

  toggle(val: boolean) {
    this.active = val;
    if (val) {
      document.documentElement.style.overflow = 'hidden';
      document.body.style.overflow = 'hidden';
    } else {
      document.documentElement.style.overflow = '';
      document.body.style.overflow = '';
    }
  }

  toggleSearch() {
    this.searchOpen = !this.searchOpen;
  }

  ngOnDestroy() {
    document.documentElement.style.overflow = '';
    document.body.style.overflow = '';
  }
}
