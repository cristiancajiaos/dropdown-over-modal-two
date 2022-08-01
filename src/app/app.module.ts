import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { LoremIpsumComponent } from './utils/lorem-ipsum/lorem-ipsum.component';
import { BaseModalComponent } from './modals/base-modal/base-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    LoremIpsumComponent,
    BaseModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [BaseModalComponent]
})
export class AppModule { }
