import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommentDTO } from 'src/api/business/lib/models';
import { AppDialogService } from 'src/app/shared/dialog.service';
import { ListaBaseComponent } from 'src/app/shared/lista.base.component';
import { ModificareCommentsComponent } from '../modificare-comments/modificare-comments.component';

@Component({
  selector: 'app-lista-comments',
  templateUrl: './lista-comments.component.html',
  styleUrls: ['./lista-comments.component.css']
})
export class ListaCommentsComponent extends ListaBaseComponent implements OnInit {

  public override source: CommentDTO[];
  public override rows: CommentDTO[] = [];
  public inputValue: string;
  public idPost: string;
  public numberOfComments: number;

  constructor(public override activatedRoute: ActivatedRoute, private dialog: AppDialogService) {
    super(activatedRoute);
  }

  override async ngOnInit() {
    await this.incarcaDate();
  }


  public override async incarcaDate() {
    this.setIsLoading = true;
    try {
      // read route
      console.log(this.activatedRoute.snapshot.url[1])
      this.idPost = this.activatedRoute.snapshot.url[1].path;
      let response = await this.getData(api => api.getCommentsForPost(this.idPost));
      let nrComments = await this.getData(api => api.getPostComments(this.idPost));
      this.numberOfComments = nrComments.response;
      if (response.errorMessage != null) {
        this.notificationService.showError(response.errorMessage.message);
      } else {
        this.source = response.response;
      }
      this.setIsLoading = false;
    } catch (error) {
      console.error(error.message);
      this.notificationService.showError(error.message);
      this.setIsLoading = false;
    }
  }

  public override async modifica(item) {
    let idUser = sessionStorage.getItem('$AuthIdUtilizator$');
    console.log(item.user.id);
    console.log(idUser);
    if (item.user.id != idUser) {
      this.notificationService.showError('You can only edit your own comments!');
      return;
    }
    const raspuns = await this.dialog.showDialog(ModificareCommentsComponent, {
      idPost: this.idPost,
      idComment: item.id
    }, {
      header: `Modifica comment`, width: '80%',
      contentStyle: { 'max-height': '80%', overflow: 'auto' },
      autoZIndex: true,
      baseZIndex: 1
    });
    if (raspuns == true) {
      await this.incarcaDate();
    }
  }

  public async adaugaComm() {
    const raspuns = await this.dialog.showDialog(ModificareCommentsComponent, {
      idPost: this.idPost,
      idComment: '0'
    }, {
      header: `Adauga comment`, width: '80%',
      contentStyle: { 'max-height': '80%', overflow: 'auto' },
      autoZIndex: true,
      baseZIndex: 1
    });
    if (raspuns == true) {
      await this.incarcaDate();
    }
  }

  public override async sterge(item: CommentDTO) {
    try {
      let idUser = sessionStorage.getItem('$AuthIdUtilizator$');
      await this.postData(api => api.deleteMethod(item.id, idUser, this.idPost)).then(response => {
        if (response.errorMessage != null) {
          this.notificationService.showError(response.errorMessage.message);
        } else {
          this.notificationService.showSuccess('Comment deleted successfully!');
        }
      });
      await this.incarcaDate();
    } catch (error) {
      let errorJson = JSON.parse(error.response.body);
      this.notificationService.showError(errorJson.errorMessage.message);
    }
  }
}
