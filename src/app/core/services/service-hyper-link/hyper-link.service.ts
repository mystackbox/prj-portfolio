import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HyperLinkService {

  constructor() { }

  openSameTab(hyterLink: string) {
    window.open(hyterLink);
  }

  openNewTab(hyterLink: string) {
    window.open(hyterLink, '_blank');
  }
  
}
