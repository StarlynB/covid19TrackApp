import { Component, OnInit, } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AlertConfig } from 'ngx-bootstrap/alert';
import { UserServiceService } from 'src/app/shared/service/user-service.service';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css'],
  animations: [trigger('alertAnimation', [
    state('show', style({ opacity: 1 })),
    state('hide', style({ opacity: 0 })),
    transition('show => hide', animate('500ms ease-out')),
    transition('hide => show', animate('500ms ease-in'))
  ])
  ]
})

export class UserLoginComponent implements OnInit {
  showAlert: boolean = false;
  message: string = '';
  alertConfig: { type: string, dismissible: boolean } = { type: 'success', dismissible: true }
  alertState: string = 'hide';


  loginForm!: FormGroup;
  data: string[] | undefined

  constructor(private formBUilder: FormBuilder, private service: UserServiceService, private router: Router, private toast: ToastrService) { }
  ngOnInit(): void {
    this.loginForm = this.formBUilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  postData() {
    if (this.loginForm?.invalid) {
      return;
    }
    const savePassword = this.loginForm.get('password')?.value;

    if (savePassword) {
      const password = this.loginForm.get('password')?.value;
    }
    


    const url = 'https://reqres.in/api/login';
    const data = this.loginForm?.value;

    this.service.loginUserService(url, data).subscribe({
      next: (data: any) => {
        console.log(data)
        this.showAlertMessage('success', 'Login successful');
        this.toast.success('login successful ','Login');
        const token = data.token;
        this.service.setToken(token);
        this.service.setLoggedIn(true);
        this.router.navigate(['summary'])
      },
      error: (data: any) => {
        console.log('Missing password', data)
        this.showAlert = true;
        this.showAlertMessage('danger', 'Login failed');
        this.router.navigate(['login'])
      },
      complete: () => { console.info('Complete') }
    });
  }


  showAlertMessage(type: string, message: string) {
    this.alertConfig.type = type;
    this.message = message;
    this.showAlert = true;
    this.alertState = 'show';
    setTimeout(() => {
      this.closeAlert();
    }, 5000); //
  }

  closeAlert() {
    this.alertState = 'hide';
    setTimeout(() => {
      this.showAlert = false;
    }, 500);
  }

}
