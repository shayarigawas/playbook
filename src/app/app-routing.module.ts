import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlaybookComponent } from './playbook/playbook.component';

const routes: Routes = [{
  "path": "", "redirectTo": "playbook", "pathMatch":"full"
}, {
  "path": "playbook", "component": PlaybookComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
