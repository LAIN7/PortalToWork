import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { DetailComponent } from './detail/detail.component';
import { ResultsComponent } from './results/results.component';


const routes: Routes = [
  {path: 'results', component: ResultsComponent},
  {path: 'detail/:id', component: DetailComponent},
  {path: '**', component: SearchComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
