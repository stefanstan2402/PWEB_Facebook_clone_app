import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BusinessAPIGetPageOptionalParams, EventDTO } from 'src/api/business/lib/models';
import { ListaBaseComponent } from 'src/app/shared/lista.base.component';

@Component({
  selector: 'app-lista-events',
  templateUrl: './lista-events.component.html',
  styleUrls: ['./lista-events.component.css']
})
export class ListaEventsComponent extends ListaBaseComponent implements OnInit {

  public override source: EventDTO[];
  public override rows: EventDTO[] = [];
  public paramsForPaginatedResponse: BusinessAPIGetPageOptionalParams = {
    search: null,
    page: 1,
    pageSize: 10
  };
  public inputValue: string;


  constructor(public override activatedRoute: ActivatedRoute) {
    super(activatedRoute);
  }

  override async ngOnInit() {
    await this.incarcaDate();
  }


  public override async incarcaDate() {
    this.setIsLoading = true;
    try {
      console.log(this.paramsForPaginatedResponse);
      let response = await this.getData(api => api.getPage(this.paramsForPaginatedResponse));
      if (response.errorMessage != null) {
        this.notificationService.showError(response.errorMessage.message);
      } else {
        this.source = response.response.data;
        if (this.source.length == 0) {
          this.notificationService.showWarning('No data found!');
          this.paramsForPaginatedResponse.page -= 1;
          if (this.paramsForPaginatedResponse.page < 1) {
            this.paramsForPaginatedResponse.page = 1;
          }
          await this.getData(api => api.getPage(this.paramsForPaginatedResponse)).then(response => {
            if (response.response) {
              this.source = response.response.data;
            } else {
              this.notificationService.showError(response.errorMessage.message);
            }
          });
        }
      }
      this.setIsLoading = false;
    } catch (error) {
      console.error(error.message);
      this.notificationService.showError(error.message);
      this.setIsLoading = false;
    }
  }

  public override modifica(item) {
    this.navigateToRelative(`${item?.id}`, this.activatedRoute);
  }

  public override async sterge(item: EventDTO) {
    try {
      let user = sessionStorage.getItem('$AuthIdUtilizator$');
      if (item.user.id != user) {
        this.notificationService.showError('You can only delete your own events!');
        return;
      } 
      await this.postData(api => api.delete1(item.id, user));
      this.notificationService.showSuccess('Event deleted successfully!');
      await this.incarcaDate();
    } catch (error) {
      this.notificationService.showError(error.errorMessage.message);
    }
  }

  changeRows(event) {
    this.paramsForPaginatedResponse.pageSize = event;
    this.incarcaDate();
  }

  filterTabel(inputValue) {
    console.log(inputValue);
    this.paramsForPaginatedResponse.search = inputValue;
    this.incarcaDate();
  }

  handlePageChange(event) {
    // You can access the current page number using event.page
    console.log('Current page:', event.page);
    // You can also access other pagination-related properties such as event.first and event.rows
    // You can perform any necessary actions here
  }

  previousPage() {
    this.paramsForPaginatedResponse.page = this.paramsForPaginatedResponse.page - 1;
    if (this.paramsForPaginatedResponse.page < 1) {
      this.paramsForPaginatedResponse.page = 1;
    }
    this.incarcaDate();
  }

  nextPage() {
    this.paramsForPaginatedResponse.page = this.paramsForPaginatedResponse.page + 1;
    this.incarcaDate();
  }
}
