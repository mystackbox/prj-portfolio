import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SkillsSetRoutingModule } from './skills-set-routing.module';
import { SkillsSetComponent } from './pages/skills-set/skills-set.component';
import { provideAnimations } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    SkillsSetComponent
  ],
  imports: [
    CommonModule,
    SkillsSetRoutingModule
  ]

})
export class SkillsSetModule { }
