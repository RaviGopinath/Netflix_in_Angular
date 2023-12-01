import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-public.layout',
  templateUrl: './public.layout.component.html',
  styleUrls: ['./public.layout.component.scss']
})
export class PublicLayoutComponent {
  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    if (localStorage.getItem("userObj") != null) {
      
      this.router.navigate(["/home"]);
    };
  }
}
