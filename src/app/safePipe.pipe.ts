import { Injectable, Pipe } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

// tslint:disable-next-line: use-pipe-transform-interface
@Pipe({
  name: 'safe'
})

@Injectable()
export class SafePipe {

  constructor(private sanitizer: DomSanitizer) { }


  transform(url) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

}
