import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { PostAddDTO, PostDTO } from 'src/api/business/lib/models';
import { AppDialogService } from 'src/app/shared/dialog.service';
import { ModificareBaseComponent } from 'src/app/shared/modificare.base.component';

@Component({
  selector: 'app-modifica-postari',
  templateUrl: './modifica-postari.component.html',
  styleUrls: ['./modifica-postari.component.css']
})
export class ModificaPostariComponent extends ModificareBaseComponent implements OnInit {

  constructor(public override activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder, private dialog: AppDialogService) {
    super(activatedRoute);
  }

  public esteVizualizare = false;

  override async ngOnInit() {
    await this.incarcaDate('id', async () => {

      if (this.idEntitate != '0') {
        let post: PostDTO = null;
        await this.getData(api => api.getById4(this.idEntitate)).then(response => {
          if (response.response) {
            post = response.response;
          } else {
            this.notificationService.showError(response.errorMessage.message);
          }
        });
        this.form.patchValue(post);
        this.form.get('numeUser').setValue(post.user.name);

        if (this.activatedRoute.snapshot.url.length > 2)
          if (this.activatedRoute.snapshot.url[2].path == 'details') {
            this.form.disable();
            this.esteVizualizare = true;
            console.log(this.esteVizualizare);
          }
      }
    });
  }

  public override InitFormGroup() {
    this.form = this.formBuilder.group({
      id: ['0'],
      numeUser: [''],
      content: ['', Validators.required],
      userId: ['', Validators.required]
    });
    let idUser = sessionStorage.getItem('$AuthIdUtilizator$');
    this.form.get('userId').setValue(idUser);
    // make numeUser readonly
    this.form.get('numeUser').disable();
  }

  public async salvare() {
    this.setIsLoading = true;

    try {
      if (this.form.invalid) {
        this.notificationService.showError('Please fill in all fields!');
        this.setIsLoading = false;
        return;
      }
      let post: PostAddDTO = this.form.value;

      post.content = this.form.get('content').value;
      post.userId = this.form.get('userId').value;

      if (this.idEntitate == '0') {
        await this.postData(api => api.add4({
          body: {
            content: post.content,
            userId: post.userId
          }
        })).then(response => {
          console.log(response);
          if (response) {
            this.notificationService.showSuccess('Post created successfully!');
            this.router.navigate(['/posts']);
          } else {
            this.notificationService.showError(response.errorMessage.message);
          }
        });
      } else {
        await this.postData(api => api.update3({
          body: {
            id: this.idEntitate,
            content: post.content,
            userId: post.userId
          }
        })).then(response => {
          if (response.response) {
            this.notificationService.showSuccess('Post updated successfully!');
            this.router.navigate(['/posts']);
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

  seeComments() {
    this.router.navigate([`/comments/${this.idEntitate}`]);
  }
}
