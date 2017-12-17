import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {TranslateModule} from '@ngx-translate/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {AsyncLocalStorageModule} from 'angular-async-local-storage';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';

import {CoreModule} from './core/core.module';
import {SharedModule} from './shared/shared.module';
import {HomeModule} from './home/home.module';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    TranslateModule.forRoot(),
    NgbModule.forRoot(),
    CoreModule,
    SharedModule,
    HomeModule,
    AppRoutingModule,
    AsyncLocalStorageModule,
  ],
  declarations: [AppComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
