import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SkillsSetComponent } from './pages/skills-set/skills-set.component';

const routes: Routes = [{ path: '', component: SkillsSetComponent,
    data: {
            title: 'Skills',
            metaTags: [
              { name: 'short-desc', content: 'angular front-end developer' },
              { name: 'page-desc', content: 'front-end development skills set' },
            ]
        }
 }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SkillsSetRoutingModule { }
