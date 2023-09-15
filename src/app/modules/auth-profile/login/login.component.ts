import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  email: any = null;
  password: any = null;

  constructor(

    private router: Router,
    public authService: AuthService
  ) {

  }
  ngOnInit(): void {
    console.log('LOGIN');
    if (this.authService.user && this.authService.token) {
      this.router.navigate(["/"]);
    }
  }

  login() {
    if (!this.email || !this.password) {
      alert("NECESITAS COLOCAR EMAIL O CONTRASEÑA")
      return;
    }
    this.authService.login(this.email, this.password).subscribe(async (resp: any) => {
      console.log('respuesta: ', resp);

      if (!resp.error && resp) {
        //SE EJECEUTÓ CORRECTAMENTE Y VOLVER AL HOME CON USUARIO AUTH

        await this.router.navigate(["/"]);
        document.location.reload();
      } else {
        if (resp.error.error == 'Unauthorized') {
          alert('CREDENCIALES INCORRECTAS');
          return;
        }
      }
    })
  }


}
