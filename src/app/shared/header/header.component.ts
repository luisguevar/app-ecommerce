import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/modules/auth-profile/_services/auth.service';
declare var $: any;
declare function initPageEcommerce([]): any;
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {


  user: any = null;

  constructor(
    public authSerive: AuthService,
    private router: Router
  ) {

  }




  ngOnInit(): void {


    this.user = this.authSerive.user;
    console.log('user: ', this.user)
  }


  async logout() {
    this.authSerive.logout();
    await this.router.navigate(["/"]);
    document.location.reload();
  }

}
