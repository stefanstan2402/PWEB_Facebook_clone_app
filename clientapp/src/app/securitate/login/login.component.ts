import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { BusinessException } from 'src/app/shared/sharedModels';
import { NotificationService } from 'src/app/shared/notification.service';
import { LoaderService } from 'src/app/shared/loader.service';
import { LoginDTO } from 'src/api/business/lib/models';
import { Password } from 'primeng/password';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  //#region Fields
  public loading: boolean = false;


  public formLogin: FormGroup = new FormGroup({
    email: new FormControl(null, Validators.required),
    password: new FormControl(null, Validators.required)
  });

  //#endregion Fields

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService,
    private notificationService: NotificationService,
    private loadingService: LoaderService) {

  }

  ngOnInit() {
  }

  public async login(): Promise<void> {
    this.loading = true;
    if (this.formLogin.invalid) {
      this.loading = false;
      this.notificationService.showError('Please fill in all fields!');
      return;
    }
    try {
      await this.authService.login(
        this.formLogin.value.email,
        this.formLogin.value.password
      ).then(response => {
        this.loading = false;
        this.router.navigate(['/dashboard']);
      });
    } catch (e) {
      let errorMessage = e;
      this.notificationService.showError(errorMessage);
    } finally {
      this.loading = false;
      this.loadingService.setLoading(false);
    }
  }

  register() {
    this.router.navigate(['/register']);
  }

}