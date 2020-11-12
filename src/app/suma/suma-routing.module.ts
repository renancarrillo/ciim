import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SumaPage } from './suma.page';

const routes: Routes = [
  {
    path: '',
    component: SumaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SumaPageRoutingModule {}
