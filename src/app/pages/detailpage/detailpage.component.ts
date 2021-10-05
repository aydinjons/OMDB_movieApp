import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
@Component({
  selector: 'detailpage',
  templateUrl: './detailpage.component.html',
  styleUrls: ['./detailpage.component.scss']
})
export class DetailpageComponent implements OnInit {
  movie: any;
  selectedMovie: any
  constructor(private route: ActivatedRoute, private api: ApiService) { }

  ngOnInit(): void {
   this.route.params.subscribe(param =>{
     this.movie = param
     console.log(this.movie.id);
     
   })
   this.api.getMovieDetails(this.movie.id).subscribe(resp =>{
     console.log(resp);
      this.selectedMovie = resp
     
   })
  }

}
