import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-dialer',
  template: `
<div>
    {{ 'HELLO_WORLD' | translate }}
</div>
  `,
  styles: [
  ]
})
export class DialerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
