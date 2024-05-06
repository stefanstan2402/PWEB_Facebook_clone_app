import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { CommentAddDTO, CommentDTO } from 'src/api/business/lib/models';
import { ModificareBaseComponent } from 'src/app/shared/modificare.base.component';

@Component({
  selector: 'app-modificare-comments',
  templateUrl: './modificare-comments.component.html',
  styleUrls: ['./modificare-comments.component.css']
})
export class ModificareCommentsComponent extends ModificareBaseComponent implements OnInit {

  constructor(public override activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder, private dialogRef: DynamicDialogRef,
    private dialogConfig: DynamicDialogConfig,) {
    super(activatedRoute);
  }
  public idPost: string;
  public idComment: string;

  override async ngOnInit() {

    this.idPost = this.dialogConfig.data.idPost;
    this.idComment = this.dialogConfig.data.idComment;
    console.log(this.idComment)

    this.InitFormGroup();

    if (this.idComment != '0') {
      let comment: CommentDTO = null;
      await this.getData(api => api.getById(this.idComment)).then(response => {
        if (response.response) {
          comment = response.response;
        } else {
          this.notificationService.showError(response.errorMessage.message);
        }
      });
      this.form.patchValue(comment);
      this.form.get('id').setValue(this.idComment);
    }

    this.form.get('postId').setValue(this.idPost);
    this.form.get('userId').setValue(sessionStorage.getItem('$AuthIdUtilizator$'));
  }

  public override InitFormGroup() {
    this.form = this.formBuilder.group({
      id: ['0'],
      content: ['', Validators.required],
      postId: ['', Validators.required],
      userId: ['', Validators.required]
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
      let comment: CommentAddDTO = this.form.value;

      comment.content = this.form.get('content').value;
      comment.postId = this.idPost;
      comment.userId = sessionStorage.getItem('$AuthIdUtilizator$');

      if (this.idComment == '0') {
        await this.postData(api => api.add({
          body: {
            content: comment.content,
            postId: comment.postId,
            userId: comment.userId
          }
        })).then(response => {
          if (response) {
            this.notificationService.showSuccess('Comment created successfully!');
            this.dialogRef.close(true);
          } else {
            this.notificationService.showError(response.errorMessage.message);
          }
        });
      } else {
        await this.postData(api => api.update({
          body: {
            id: this.idComment,
            content: comment.content,
            postId: comment.postId,
            userId: comment.userId
          }
        })).then(response => {
          if (response.response) {
            this.notificationService.showSuccess('Comment updated successfully!');
            this.dialogRef.close(true);
          } else {
            this.notificationService.showError(response.errorMessage.message);
          }
        });
      }
    } catch (error) {
      this.notificationService.showError(error.errorMessage.message);
    }
    this.setIsLoading = false;
  }

  exit() {
    this.dialogRef.close(false);
  }

}

