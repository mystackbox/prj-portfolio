import { Injectable } from '@angular/core';
import { Meta, MetaDefinition, Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root',
})
export class TitleMetadataService {
    //Injecting services
  constructor(private _title: Title, private meta: Meta) { 
  }

  //Update the browser page title 
  updateTitle(title: string) {
    console.log("Title change to " + title);
    this._title.setTitle(`Portfolio - ${title}`);
    this.meta.updateTag({ name: 'title', content: title})
  }

  //Update all MetaTags as per route changes
  updateMetaTags(metaTags: MetaDefinition[]){
    metaTags.forEach(m=> this.meta.updateTag(m));
  }

}
