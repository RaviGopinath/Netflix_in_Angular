import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  @ViewChild('eyee', { static: false }) eyee!: ElementRef;
  showPassword: boolean = false;
  eyes: boolean = true;
  public loginForm = new FormGroup({
    name: new FormControl(""),
    password: new FormControl("")
  })
  submitted = false;
  inValiduser: any = "";
  inValidpass: any = "";

  constructor(
    private route: Router,
    private render: Renderer2
  ) { }

  onSubmit() {
    this.submitted = true;
    let username = this.loginForm.value.name;
    let password = this.loginForm.value.password;
    if (this.loginForm.status == "VALID") {
      if (username == "Welcome") {
        this.inValiduser = "";
        if (password == "welcome@123") {
          this.inValidpass = "";
          localStorage.setItem("userObj", JSON.stringify(username))
          this.route.navigate(["/home"])
          this.submitted = false;
          this.loginForm.reset();
        }
        else {
          this.inValidpass = "Incorrect password";
        this.render.setStyle(this.eyee.nativeElement,"top","336px")

          this.route.navigate(["/login"])
        }
      }
      else {
        this.inValiduser = "Incorrect username"
        this.render.setStyle(this.eyee.nativeElement,"top","360px")
        this.route.navigate(["/login"])
      }
    }
    else {
      this.eyes = false;
      this.route.navigate(["/login"])
    }
  }
  usernameCheck() {
    if (this.loginForm.controls.name.status == "INVALID") {
      this.inValiduser = "";
    }
  }
  passwordCheck() {
    if (this.loginForm.controls.password.status == "INVALID") {
      this.eyes = false;
      this.inValidpass = "";
    }
    else {
      this.eyes = true;
    }
  }
}
