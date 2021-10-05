import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { ToastService } from "src/app/services/toast-service.service";

@Component({
  selector: "search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.scss"],
})
export class SearchComponent implements OnInit {
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    public toastService: ToastService
  ) {}
  movieName: string = "";
  year: string = "";
  dangerYear: string =
    "Please type year in 'yyyy' format or click 'Search' button to ignore this filter" ;
  dangerName: string = "Search: Please type at least 3 characters";
  ngOnInit(): void {}

  onKeydownMain(event: any) {
    if (!event.shiftKey && event.key === "Enter") {
      event.preventDefault();
      if (this.movieName.split("").length < 3) {
        console.log(this.movieName.split("").length < 3);
        this.toastService.show(this.dangerName, {
          classname: "bg-danger text-light",
          delay: 5000,
        });
      }
      if (this.year.split("").length < 4) {
        this.toastService.show(this.dangerYear, {
          classname: "bg-danger text-light",
          delay: 5000,
        });
      } else {
        this.router.navigate([`../result/${this.movieName}/${this.year}`], {
          relativeTo: this.route,
        });
      }

    }
  }
  go(){
    this.router.navigate([`../result/${this.movieName}/${this.year}`], {
      relativeTo: this.route,
    });   
  }
}
