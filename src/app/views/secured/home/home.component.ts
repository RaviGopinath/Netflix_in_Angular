import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonDataService } from 'src/app/services/commonData.service';
import { HomeController } from './home.controler';
import { SearchByMovieName } from './search.pipe';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [SearchByMovieName]
})
export class HomeComponent implements OnInit {

  loading: boolean = false;
  recommed: boolean = false;
  recMovie: boolean = false;
  allMovie: boolean = false;
  all: boolean = false;
  arrLength: boolean = false;
  public arrMovieList: any = [];
  apiMovieList: any = [];
  searchText: any = "";
  singleImage: any;
  title: any;
  year: any;
  time: any;
  Released: any;
  Director: any;
  Language: any;
  Actors: any;
  constructor(
    public _commonDataService: CommonDataService,
    public router: Router,
    public modalService: NgbModal,
    public service: HomeController
  ) { }

  ngOnInit(): void {
    this.getMoviesList();
  }
  // get movie local array functionality
  getMovie() {
    this.arrMovieList = this.service.arrMovie;
  }
  // get movie api functionality
  getMoviesList() {
    this.loading = true;
    this.arrLength = false;
    this.service.getMovies().subscribe({
      next: (res: any) => {
        res.pop();
        this.apiMovieList = res;
        this.loading = false;
        this.recommed = true;
        this.all = true;
        this.listLength();
        this.getMovie();
      },
      error: (err: any) => {
        if (err.statusCode == 417) {
          Swal.fire({
            title: "Something went wrong",
            icon: "warning"
          })
        }
      }
    })
  }
  // Show local array card details
  cardDetails(i: any, content: any) {
    this.recMovie = false;
    this.allMovie = true;
    let result = this.arrMovieList.filter((item: any, index: number) => index == i);
    this.singleImage = result[0].Poster;
    this.time = result[0].Runtime;
    this.title = result[0].Title;
    this.year = result[0].Year;
    this.Released = result[0].Released;
    this.Director = result[0].Director;
    this.Actors = result[0].Actors;
    this.Language = result[0].Language;
    this.modalService.open(content)
  }
  //  // Show api array card details
  reCardDetails(i: any, content: any) {
    this.allMovie = false;
    this.recMovie = true;
    let result = this.apiMovieList.filter((item: any, index: number) => index == i);
    this.singleImage = result[0].Poster;
    this.time = result[0].Runtime;
    this.title = result[0].Title;
    this.year = result[0].Year;
    this.modalService.open(content)
  }
  // modal close
  desmiss(modal: any) {
    modal.dismiss();
  }
  // logout
  Logout() {
    this._commonDataService.removeAllSubject();
    this.router.navigate(["/login"])
  }
  // Get array lenght 
  listLength() {
    this.service.listTotal().subscribe({
      next: (res: any) => {
        if (res == 0) {
          this.arrLength = true;
        }
        else {
          this.arrLength = false;
        }

      }
    })
  }

}
