import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { HeaderComponent, FooterComponent } from './';

@NgModule({
    imports: [HttpClientModule],
    exports: [HeaderComponent, FooterComponent],
    declarations: [HeaderComponent, FooterComponent],
    providers: [],
})
export class CoreModule { }
