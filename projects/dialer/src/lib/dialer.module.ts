import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { DialerComponent } from './dialer.component';



@NgModule({
  declarations: [
    DialerComponent,
  ],
  imports: [
    TranslateModule
  ],
  exports: [
    DialerComponent
  ]
})
export class DialerModule { }
