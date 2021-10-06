import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'watchlist-cards',
  templateUrl: './watchlist-cards.component.html',
  styleUrls: ['./watchlist-cards.component.scss']
})
export class WatchlistCardsComponent implements OnInit {
  list = ["tt0372784", "tt0137523","tt0111161"];
  watchList: any =[];
  movieDetails: any;
  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.list.forEach((id) => {
      this.api.getImdbTop10(id).subscribe((resp: any) => {
        this.watchList.push(resp)    
      });
    });
  }
  getDetailsOfMovie(id: any){
    this.api.getMovieDetails(id).subscribe((resp: any) =>{
      this.movieDetails = resp
      console.log(this.movieDetails)
    })
  }
}
