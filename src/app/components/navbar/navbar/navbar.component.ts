
import { Component, inject, Input } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  @Input() loggedIn!: boolean ;
  private readonly router=inject(Router)
    logOut(){
    localStorage.removeItem('token')
    this.router.navigate(['/login'])
    
    
  }

}
