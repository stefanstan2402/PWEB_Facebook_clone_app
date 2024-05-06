import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LikeAddDTO, LikeDTO } from 'src/api/business/lib/models';
import { AppDialogService } from 'src/app/shared/dialog.service';
import { ListaBaseComponent } from 'src/app/shared/lista.base.component';

@Component({
  selector: 'app-likes',
  templateUrl: './likes.component.html',
  styleUrls: ['./likes.component.css']
})
export class LikesComponent extends ListaBaseComponent implements OnInit {

  public override source: LikeDTO[];
  public override rows: LikeDTO[] = [];
  public inputValue: string;
  public idPost: string;
  public nrLikes: number;
  public currentUserAddedLike: boolean;

  constructor(public override activatedRoute: ActivatedRoute, private dialog: AppDialogService) {
    super(activatedRoute);
  }

  override async ngOnInit() {
    await this.incarcaDate();
  }


  public override async incarcaDate() {
    this.setIsLoading = true;
    try {
      this.idPost = this.activatedRoute.snapshot.url[1].path;
      let user = sessionStorage.getItem('$AuthIdUtilizator$');
      let nrLikes = await this.getData(api => api.getPostLikes(this.idPost));
      await this.getData(api => api.getLikesForPost(this.idPost, user)).then((response) => {
        if (response.response.length > 0) {
          this.source = response.response;
        } else {
          if (response.errorMessage != null) {
            this.notificationService.showError(response.errorMessage.message);
          }
        }
      });

      // search if in source exist a combo idPost and idUser
      let found = this.source.find(element => element.post.id == this.idPost && element.user.id == user);
      if (found != null) {
        this.currentUserAddedLike = true;
      } else {
        this.currentUserAddedLike = false;
      }
      console.log(this.currentUserAddedLike);

      this.nrLikes = nrLikes.response;
      this.setIsLoading = false;
    } catch (error) {
      console.error(error.message);
      this.notificationService.showError(error.message);
      this.setIsLoading = false;
    }
  }

  public async adaugaLike() {
    let user = sessionStorage.getItem('$AuthIdUtilizator$');
    let like: LikeAddDTO = {
      postId: this.idPost,
      userId: user
    }
    
    let response = await this.getData(api => api.add3({
      body: like
    })).then((responsee) => {
      if (responsee.errorMessage != null) {
        this.notificationService.showError(responsee.errorMessage.message);
      } else {
        this.notificationService.showSuccess('Like added!');
        this.incarcaDate();
      }
    });
  }

  public async stergeLike() {
    // extract from source the id of the like
    let user = sessionStorage.getItem('$AuthIdUtilizator$');
    let found = this.source.find(element => element.post.id == this.idPost && element.user.id == user);
    if (found == null) {
      this.notificationService.showError('You cannot dislike because you did not like it!');
      return;
    }
    let idLike = found.id;
    let response = await this.getData(api => api.delete3(idLike, user, this.idPost)).then((responsee) => {
      if (responsee.errorMessage != null) {
        this.notificationService.showError(responsee.errorMessage.message);
      } else {
        this.notificationService.showSuccess('Like removed!');
        window.location.reload();
      }
    });
  }
}