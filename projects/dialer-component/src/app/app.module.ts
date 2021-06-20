import { Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// ...
import { DialerComponent } from '../../../../projects/dialer/src/public-api';
import { DialerModule } from '../../../../projects/dialer/src/lib/dialer.module';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { createCustomElement } from '@angular/elements';

export abstract class WebComponentModule {
  constructor(injector: Injector, component: InstanceType<any>, name: string) {
      const ngElement = createCustomElement(component, {
          injector,
      });

      customElements.define(`kalvad-${name}`, ngElement);
  }

  public ngDoBootstrap():void {}
}

@NgModule({
  imports: [
    BrowserModule,
    DialerModule,
    TranslateModule.forRoot(),
    // ...
  ],
  entryComponents: [DialerComponent]
})
export class AppModule extends WebComponentModule {

  constructor(
    readonly injector: Injector,
    readonly translateService: TranslateService,
  ) {
    super(injector, DialerComponent, 'dialer');
    this.translateService.setTranslation('en', {
      'HELLO_WORLD': 'Hello World',
    });
    this.translateService.setTranslation('fr', {
      'HELLO_WORLD': 'Bonjour Monde',
    });
    this.translateService.setTranslation('ar', {
      'HELLO_WORLD': 'مرحبا بالعالم'
    });
    this.translateService.setDefaultLang('en');
  }

}
