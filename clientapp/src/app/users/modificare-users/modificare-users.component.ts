import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { UserAddDTO, UserDTO } from 'src/api/business/lib/models';
import { ModificareBaseComponent } from 'src/app/shared/modificare.base.component';

@Component({
  selector: 'app-modificare-users',
  templateUrl: './modificare-users.component.html',
  styleUrls: ['./modificare-users.component.css']
})
export class ModificareUsersComponent extends ModificareBaseComponent implements OnInit {

  constructor(public override activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder) {
    super(activatedRoute);
  }

  // make variable thtat store id and value Admin and User for a dropdown
  public roles = [
    { id: 'Admin', value: 'Admin' },
    { id: 'User', value: 'User' }
  ];

  override async ngOnInit() {
    await this.incarcaDate('id', async () => {
      
      if (this.idEntitate != '0') {
        let user: UserDTO = null;
        await this.getData(api => api.getById5(this.idEntitate)).then(response => {
          if (response.response) {
            user = response.response;
          } else {
            this.notificationService.showError(response.errorMessage.message);
          }
        });
        this.form.patchValue(user);
      }
    });
  }

  public override InitFormGroup() {
    this.form = this.formBuilder.group({
      id: ['0'],
      name: ['', Validators.required],
      email: ['', Validators.required],
      password: [''],
      phoneNumber: ['', Validators.required],
      role: ['', Validators.required]
    });
  }

  public async salvare() {
    this.setIsLoading = true;
    
    try {
      if (this.form.invalid) {
        this.notificationService.showError('Please fill in all fields!');
        this.setIsLoading = false;
        return;
      }
      console.log(this.form);
      let user: UserAddDTO = this.form.value;

      user.name = this.form.get('name').value;
      user.email = this.form.get('email').value;
      if(this.idEntitate == '0')
        user.password = this.form.get('password').value;
      user.phoneNumber = this.form.get('phoneNumber').value;
      user.role = this.form.get('role').value;
      console.log(user.role);
      if (this.idEntitate == '0') {
        await this.postData(api => api.add5({
          body: {
            name: user.name,
            email: user.email,
            password: user.password,
            phoneNumber: user.phoneNumber,
            role: user.role
          }})).then(response => {
          console.log(response);
          if (response) {
            this.notificationService.showSuccess('User created successfully!');
            this.router.navigate(['/users']);
          } else {
            this.notificationService.showError(response.errorMessage.message);
          }
        });
      } else {
        await this.postData(api => api.update4({
        body: {
          id: this.idEntitate,
          name: user.name,
          password: user.password,
          phoneNumber: user.phoneNumber,
        }
        })).then(response => {
          if (response.response) {
            this.notificationService.showSuccess('User updated successfully!');
            this.router.navigate(['/users']);
          } else {
            this.notificationService.showError(response.errorMessage.message);
          }
        });
      }
    } catch (error) {
      this.notificationService.showError(error.message);
    }
    this.setIsLoading = false;
  }

}
