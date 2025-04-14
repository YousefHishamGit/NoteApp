import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "../../../components/navbar/navbar/navbar.component";

@Component({
  selector: 'app-auth',
  imports: [RouterOutlet, NavbarComponent],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css'
})
export class AuthComponent {

}
