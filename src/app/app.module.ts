import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CoreModule } from './core/core.module';
import { BureauComponent } from './bureau/bureau.component';
import { BureauService } from './services';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BureauComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CoreModule
  ],
  providers: [BureauService],
  bootstrap: [AppComponent]
})
export class AppModule { }
