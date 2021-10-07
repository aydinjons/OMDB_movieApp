import { Component, OnInit } from "@angular/core";
import { of } from "rxjs";
import { ApiService } from "src/app/services/api.service";
import { LocalstorageService } from "src/app/services/localstorage.service";

@Component({
  selector: "slider-cards",
  templateUrl: "./slider-cards.component.html",
  styleUrls: ["./slider-cards.component.scss"],
})
export class SliderCardsComponent implements OnInit {
  imdbTop10 = [
    "tt2382320",
    "tt6264654",
    "tt11271038",
    "tt9421570",
    "tt0816692",
    "tt8110232",
    "tt9357050",
    "tt1160419",
    "tt4154796",
  ];
  movies: any = [];
  movieDetails: any;
  n: number = 3;
  groups: any;
  moviesInLocalstorage: any = [];
  key: any;
  localStrogaeList:any =[]
  uniqueLocalStorage:any =[]
  constructor(
    private api: ApiService,
    private localStorage: LocalstorageService
  ) {}

  ngOnInit(): void {
    this.imdbTop10.forEach((id) => {
      this.api.getMoviesById(id).subscribe((resp) => {
        this.movies.push(resp);
        return (this.groups = this.movies.reduce(
          (r: any[][], e: any, i: number) =>
            (i % this.n ? r[r.length - 1].push(e) : r.push([e])) && r,
          []
        ));
      });
    });
  }
  getDetailsOfMovie(id: any) {
    this.api.getMovieDetails(id).subscribe((resp: any) => {
      this.movieDetails = resp;
      console.log(this.movieDetails);
    });
  }
  addToWatchList( id: any) {
    if (typeof(Storage) !== "undefined") {
      this.localStrogaeList.push(id);   
       this.uniqueLocalStorage = this.localStrogaeList.filter((item: any, pos: any) =>{
         return this.localStrogaeList.indexOf(item)== pos; 
      });
      this.localStorage.setItem("data", JSON.stringify(this.uniqueLocalStorage));
        console.log(this.uniqueLocalStorage)
      
   } else {  
     alert("This Browser not supported this action")
   } 

  }
}


