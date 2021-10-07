import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { DetailpageComponent } from './pages/detailpage/detailpage.component';
import { ProfilepageComponent } from './pages/profilepage/profilepage.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SearchComponent } from './components/search/search.component';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from './services/api.service';
import { FormsModule } from '@angular/forms';
import { SearchResultComponent } from './components/search-result/search-result.component';
import { ToastService } from './services/toast-service.service';
import { ToastsContainer } from './components/search/toasts-container.component';
import { ImdbTop10Component } from './pages/imdb-top10/imdb-top10.component';
import { SliderCardsComponent } from './components/slider-cards/slider-cards.component';
import {CarouselModule} from 'primeng/carousel';
import { WatchlistCardsComponent } from './components/watchlist-cards/watchlist-cards.component';
import { FooterComponent } from './components/footer/footer.component';
import { AboutComponent } from './pages/about/about.component';
import { MywatchButtonComponent } from './components/mywatch-button/mywatch-button.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    DetailpageComponent,
    ProfilepageComponent,
    NavbarComponent,
    SearchComponent,
    SearchResultComponent,
    ToastsContainer,
    ImdbTop10Component,
    SliderCardsComponent,
    WatchlistCardsComponent,
    FooterComponent,
    AboutComponent,
    MywatchButtonComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    CarouselModule,
    FontAwesomeModule,

 

    
  ],
  providers: [ApiService, ToastService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
