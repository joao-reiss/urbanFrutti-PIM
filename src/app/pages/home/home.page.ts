import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import '../../services/fakeData.json';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private route:Router,
    private fBuilder: FormBuilder,
  ) {

    this.fGroup = this.fBuilder.group({
      email: [this.User.email, Validators.compose([
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(25)
      ])],
      password: [this.User.password, Validators.compose([
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(45),
      ])]
  });

  }

  public fGroup: FormGroup;

  goToCadastro(){
    this.route.navigateByUrl('/cadastro');
  }
    public User: any = [
      {
      "id": null,
      "email": null,
      "password": null
      }
    ];


  login()
  {
    this.route.navigateByUrl('/tabs/tab1');

    console.log(this.fGroup.value)
    console.log(this.User)

  }


}
