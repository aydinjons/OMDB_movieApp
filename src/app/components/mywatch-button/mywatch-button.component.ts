import { Component, OnInit, AfterViewInit } from "@angular/core";
import { ApiService } from "src/app/services/api.service";
import { LocalstorageService } from "src/app/services/localstorage.service";

@Component({
  selector: "mywatch-button",
  templateUrl: "./mywatch-button.component.html",
  styleUrls: ["./mywatch-button.component.scss"],
})
export class MywatchButtonComponent implements OnInit {
  public isCollapsed = true;
  movies: any = [];
  uniqueMovies: any = [];
  groups: any;
  getMoviesFromLocalStorage: any = [];
  LocStorMovies: any = [];
  constructor(
    private localStorage: LocalstorageService,
    private api: ApiService
  ) {
    setTimeout( () =>{
        this.getMoviesFromLocalStorage = this.localStorage.getItem("data");
        this.LocStorMovies = JSON.parse(this.getMoviesFromLocalStorage);
        
        this.getMoviesFromLocalStor()
        console.log(this.LocStorMovies);
    }, 1000);
  }

  ngOnInit(): void {
    this.localStorage.watchStorage().subscribe((data: string) => {
      this.getMoviesFromLocalStorage = this.localStorage.getItem("data");
      this.LocStorMovies = JSON.parse(this.getMoviesFromLocalStorage);
      console.log(this.LocStorMovies);
      this.getMoviesFromLocalStor();
    });

  }
  getMoviesFromLocalStor() {
    this.LocStorMovies.forEach((id: any) => {
      this.api.getMoviesById(id).subscribe((resp) => {
        this.movies.push(resp);
      });
    });
    console.log(this.movies);
  }
  listMovies() {
    this.uniqueMovies = this.movies.filter(
      (v: any, i: any, a: any[]) =>
        a.findIndex((t) => JSON.stringify(t) === JSON.stringify(v)) === i
    );

    console.log(this.uniqueMovies);
  }
}
