import { Component, Input, ViewChild } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { AddToWishlist, DeleteWishlist } from '../../../../../action/wishlist.action';
import { AddToCompare } from '../../../../../action/compare.action';
import { ProductDetailModalComponent } from '../../../modal/product-detail-modal/product-detail-modal.component';
import { VariationModalComponent } from '../../../modal/variation-modal/variation-modal.component';
import { Product } from '../../../../../interface/product.interface';
import { WishlistState } from '../../../../../state/wishlist.state';
import { LoginModalComponent } from '../../../modal/login-modal/login-modal.component';

@Component({
  selector: 'app-product-hover-action',
  templateUrl: './product-hover-action.component.html',
  styleUrl: './product-hover-action.component.scss'
})
export class ProductHoverActionComponent {

  @Input() product: Product;
  @Input() hideAction: string[];

  @ViewChild("productDetailModal") productDetailModal: ProductDetailModalComponent;
  @ViewChild("variationModal") VariationModal: VariationModalComponent;
  @ViewChild("loginModal") loginModal: LoginModalComponent;

  @Select(WishlistState.wishlistIds) wishlistIds$: Observable<number[]>;

  constructor(private store: Store){}

  get isAuthenticated(): boolean {
    return !!this.store.selectSnapshot((state: any) => state.auth && state.auth.access_token);
  }

  openQuickView(){
    if (!this.isAuthenticated) { this.loginModal?.openModal(); return; }
    this.productDetailModal.openModal();
  }

  addToWishlist(product: Product){
    if (!this.isAuthenticated) { this.loginModal?.openModal(); return; }
    product['is_wishlist'] = !product['is_wishlist'];
    let action = product['is_wishlist']? new AddToWishlist({ product_id: product.id }) : new DeleteWishlist(product.id);
    if(action){
      this.store.dispatch(action);
    }
  }

  addToCompare(id: number){
    this.store.dispatch(new AddToCompare({ product_id: id }));
  }
}
