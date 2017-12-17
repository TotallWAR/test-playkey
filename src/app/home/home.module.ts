import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TranslateModule} from '@ngx-translate/core';

import {CoreModule} from '../core/core.module';
import {SharedModule} from '../shared/shared.module';
import {HomeRoutingModule} from './home-routing.module';
import {HomeComponent} from './home.component';
import {ProductListComponent} from '../product-list/product-list.component';
import {ProductService} from '../product.service';
import {WishListComponent} from '../wish-list/wish-list.component';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    CoreModule,
    SharedModule,
    HomeRoutingModule
  ],
  declarations: [
    HomeComponent,
    ProductListComponent,
    WishListComponent,
  ],
  providers: [ProductService]
})
export class HomeModule {
}
