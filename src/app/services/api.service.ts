import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class ApiService {
url: string = 'http://www.omdbapi.com/'
apiKey:string = '&apikey=9c1059c9'
searchQuery = "?s="
keyword:string =""
plots:string ="&plot=full"
idSearch:string ="?i="
yearQuery:string ="&y="
  constructor(private http: HttpClient) {
    
   }
   getAllMovies(keyword: string, year?: string){
     console.log(keyword,year)
     return this.http.get(this.url + this.searchQuery + keyword + this.apiKey + this.yearQuery + year)
   }
   getMoviesById(id: string){
     return this.http.get(this.url + this.idSearch + id + this.apiKey)
   }
   getMovieDetails(id: any){
    return this.http.get(this.url + this.idSearch + id + this.apiKey)
    }
}


