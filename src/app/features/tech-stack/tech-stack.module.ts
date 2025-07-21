import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TechStackRoutingModule } from './tech-stack-routing.module';
import { TechStackComponent } from './pages/tech-stack/tech-stack.component';


@NgModule({
  declarations: [
    TechStackComponent
  ],
  imports: [
    CommonModule,
    TechStackRoutingModule
  ]
})
export class TechStackModule { }
