import { Component, OnInit } from '@angular/core';
import { LoginService } from '../service/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  datosUsuario: any = {};
  constructor(
    private loginService : LoginService,
    private router:Router
  ) { }

  ngOnInit(): void {
  }

  login() {

    this.loginService.login(this.datosUsuario).subscribe(usuario => {
      
      if(usuario)
        this.router.navigate(['/menu']);
      else
        alert("Usuario y/o contraseña erroneos")
    })
    
  }

}
