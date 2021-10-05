import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss']
})
export class SearchResultComponent implements OnInit {
  movieName: string = "";
  year: string = ""
  movieList:any;
  movies:any;
  movieDetails: any;
  result: any;
  constructor(private route: ActivatedRoute, private api: ApiService) { }
  ngOnInit(): void {
    this.route.params.subscribe(param =>{
      this.result = param
      this.movieName = this.result.movieName;
      this.year =this.result.year;
      
    })
    this.getMovies()
  }
  getMovies() {
    this.api.getAllMovies(this.movieName, this?.year).subscribe((resp: any) => {
      this.movieList = resp
      this.movies = this.movieList.Search
      console.log(this.movies);
    });
  }
  getDetailsOfMovie(id: any){
    this.api.getMovieDetails(id).subscribe((resp: any) =>{
      this.movieDetails = resp
      console.log(this.movieDetails)
    })
  }

}
