import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'slider-cards',
  templateUrl: './slider-cards.component.html',
  styleUrls: ['./slider-cards.component.scss']
})
export class SliderCardsComponent implements OnInit {
  imdbTop10 = ["tt2382320","tt6264654","tt11271038","tt9421570","tt0816692","tt8110232","tt9357050","tt1160419","tt4154796"];
  movies: any =[];
  movieDetails: any;
  n:number = 3;
  groups: any;
  constructor(private api: ApiService) { 

  }

  ngOnInit(): void {
    this.imdbTop10.forEach((id) => {
      this.api.getImdbTop10(id).subscribe((resp) => {
        this.movies.push(resp)
        console.log( this.groups =  this.movies.reduce((r: any[][], e: any, i: number) =>
        (i % this.n ? r[r.length - 1].push(e) : r.push([e])) && r
    , []));
        
      return this.groups =  this.movies.reduce((r: any[][], e: any, i: number) =>
        (i % this.n ? r[r.length - 1].push(e) : r.push([e])) && r
    , []); 
        console.log(this.movies);
        
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
