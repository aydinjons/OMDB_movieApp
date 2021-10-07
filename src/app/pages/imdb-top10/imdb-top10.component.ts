import { Component, OnInit } from "@angular/core";
import { ApiService } from "src/app/services/api.service";

@Component({
  selector: "app-imdb-top10",
  templateUrl: "./imdb-top10.component.html",
  styleUrls: ["./imdb-top10.component.scss"],
})
export class ImdbTop10Component implements OnInit {
  imdbTop10 = ["tt0372784", "tt0103776","tt0111161","tt0133093","tt10295212","tt0816692","tt0087843","tt6751668","tt1160419","tt4154796"];
  topResult: any =[];
  movieDetails: any;

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.imdbTop10.forEach((id) => {
      this.api.getMoviesById(id).subscribe((resp) => {
        this.topResult.push(resp) 
        console.log(this.topResult);
        
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
