import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserAddDTO } from 'src/api/business/lib/models';
import { NotificationService } from 'src/app/shared/notification.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public form: FormGroup;

  constructor(public activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private notificationService: NotificationService,
    private router: Router,
    private authService: AuthService) {
  }

  public async ngOnInit() {
    this.InitFormGroup();
  }

  public InitFormGroup() {
    this.form = this.formBuilder.group({
      id: ['0'],
      name: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      role: ['User']
    });
  }

  public async salvare() {

    try {
      if (this.form.invalid) {
        this.notificationService.showError('Please fill in all fields!');
        return;
      }
      console.log(this.form);
      let user: UserAddDTO = this.form.value;

      user.name = this.form.get('name').value;
      user.email = this.form.get('email').value;
      user.password = this.form.get('password').value;
      user.phoneNumber = this.form.get('phoneNumber').value;
      user.role = this.form.get('role').value;

      this.authService.registerUser(user).then(response => {
        this.notificationService.showSuccess('User registered successfully!');
        this.router.navigate(['/login']);
      });

    } catch (error) {
      this.notificationService.showError(error.message);
    }
  }

  anulare() {
    this.router.navigate(['/login']);
  }
}
