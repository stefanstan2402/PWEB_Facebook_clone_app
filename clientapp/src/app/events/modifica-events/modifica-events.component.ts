import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { EventAddDTO, EventDTO } from 'src/api/business/lib/models';
import { ModificareBaseComponent } from 'src/app/shared/modificare.base.component';

@Component({
  selector: 'app-modifica-events',
  templateUrl: './modifica-events.component.html',
  styleUrls: ['./modifica-events.component.css']
})
export class ModificaEventsComponent extends ModificareBaseComponent implements OnInit {

  constructor(public override activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder) {
    super(activatedRoute);
  }

  override async ngOnInit() {
    await this.incarcaDate('id', async () => {
      
      if (this.idEntitate != '0') {
        let event: EventDTO = null;
        await this.getData(api => api.getById1(this.idEntitate)).then(response => {
          if (response.response) {
            event = response.response;
          } else {
            this.notificationService.showError(response.errorMessage.message);
          }
        });
        this.form.patchValue(event);
        this.form.get('date').setValue(new Date(event.date));
      }
    });
  }

  public override InitFormGroup() {
    this.form = this.formBuilder.group({
      id: ['0'],
      content: ['', Validators.required],
      title: ['', Validators.required],
      location: ['', Validators.required],
      date: [null, Validators.required],
      userId: ['', Validators.required]
    });
    this.form.get('userId').setValue(sessionStorage.getItem('$AuthIdUtilizator$'));
  }

  public async salvare() {
    this.setIsLoading = true;
    
    try {
      if (this.form.invalid) {
        this.notificationService.showError('Please fill in all fields!');
        this.setIsLoading = false;
        return;
      }
      let event: EventAddDTO = this.form.value;

      if (this.idEntitate == '0') {
        await this.postData(api => api.add1({
          body: {
            content: event.content,
            title: event.title,
            location: event.location,
            date: new Date(event.date).toString(),
            userId: event.userId
          }})).then(response => {
          if (response) {
            this.notificationService.showSuccess('Event created successfully!');
            this.router.navigate(['/events']);
          } else {
            this.notificationService.showError(response.errorMessage.message);
          }
        });
      } else {
        console.log(event);
        await this.postData(api => api.update1({
        body: {
          id: this.idEntitate,
          content: event.content,
          title: event.title,
          location: event.location,
          date: new Date(event.date).toString(),
          userId: event.userId
        }
        })).then(response => {
          if (response.response) {
            this.notificationService.showSuccess('Event updated successfully!');
            this.router.navigate(['/events']);
          } else {
            this.notificationService.showError(response.errorMessage.message);
          }
        });
      }
    } catch (error) {
      console.error(error);
      this.notificationService.showError(error);
    } 

  }

}

