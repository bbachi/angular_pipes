import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LowercasePipeComponent } from './builtin/lowercase-pipe.component';

const routes: Routes = [{
  path: 'lowercase', component: LowercasePipeComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
