import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SkillsSetRoutingModule } from './skills-set-routing.module';
import { SkillsSetComponent } from './pages/skills-set/skills-set.component';


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
