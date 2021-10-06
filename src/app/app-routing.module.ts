import { DetailpageComponent } from './pages/detailpage/detailpage.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { SearchResultComponent } from './components/search-result/search-result.component';
import { ImdbTop10Component } from './pages/imdb-top10/imdb-top10.component';
import { AboutComponent } from './pages/about/about.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'result/:movieName/:year', component: SearchResultComponent },
  { path: 'details/:id', component: DetailpageComponent },
  { path: 'imdb10', component: ImdbTop10Component },
  { path: 'about', component: AboutComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
