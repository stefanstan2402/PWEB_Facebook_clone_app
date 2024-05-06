import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { FeedbackAddDTO, FeedbackDTO } from 'src/api/business/lib/models';
import { ModificareBaseComponent } from 'src/app/shared/modificare.base.component';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent extends ModificareBaseComponent implements OnInit {

  constructor(public override activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder) {
    super(activatedRoute);
  }

  // make variable thtat store id and value Admin and User for a dropdown
  public ratingNotes = [
    { id: '1', value: '1' },
    { id: '2', value: '2' },
    { id: '3', value: '3' },
    { id: '4', value: '4' },
    { id: '5', value: '5' },
    { id: '6', value: '6' },
    { id: '7', value: '7' },
    { id: '8', value: '8' },
    { id: '9', value: '9' },
    { id: '10', value: '10' }
  ];

  public appreciationTypes = ['Complaint', 'Suggestion', 'Compliment'];

  public categories: any[] = [
    { name: 'Yes', key: true },
    { name: 'No', key: false }
  ];

  override async ngOnInit() {
    await this.incarcaDate('id', async () => {

      if (this.idEntitate != '0') {
        let feedback: FeedbackDTO = null;
        await this.getData(api => api.getById2(this.idEntitate)).then(response => {
          if (response.response) {
            feedback = response.response;
          } else {
            this.notificationService.showError(response.errorMessage.message);
          }
        });
        this.form.get('typeOfAppreciation').patchValue(feedback.typeOfAppreciation.split(','));
        this.form.get('rating').setValue(feedback.rating.toString());
        this.form.get('isUserExperienceEnjoyable').setValue(feedback.isUserExperienceEnjoyable);
        this.form.get('content').setValue(feedback.content);

      }
    });
  }

  public override InitFormGroup() {
    this.form = this.formBuilder.group({
      id: ['0'],
      content: ['', Validators.required],
      rating: ['', Validators.required],
      typeOfAppreciation: [[], Validators.required],
      isUserExperienceEnjoyable: [true, Validators.required],

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
      //log type of appreciation
      console.log(this.form.get('typeOfAppreciation').value);
      let feedback: FeedbackAddDTO = this.form.value;

      feedback.content = this.form.get('content').value;
      feedback.rating = Number(this.form.get('rating').value);
      // in this.form.get('typeOfAppreciation').value is stored an array of strings
      // concatenate all with comma
      feedback.typeOfAppreciation = this.form.get('typeOfAppreciation').value.join(',');
      feedback.isUserExperienceEnjoyable = this.form.get('isUserExperienceEnjoyable').value;

      if (this.idEntitate == '0') {
        await this.postData(api => api.add2({
          body: {
            userId: sessionStorage.getItem('$AuthIdUtilizator$'),
            content: feedback.content,
            rating: feedback.rating,
            typeOfAppreciation: feedback.typeOfAppreciation,
            isUserExperienceEnjoyable: feedback.isUserExperienceEnjoyable
          }
        })).then(response => {
          console.log(response);
          if (response) {
            this.notificationService.showSuccess('Feedback created successfully!');
            this.router.navigate(['/feedback']);
          } else {
            this.notificationService.showError(response.errorMessage.message);
          }
        });
      } else {
        await this.postData(api => api.update2({
          body: {
            id: this.idEntitate,
            userId: sessionStorage.getItem('$AuthIdUtilizator$'),
            content: feedback.content,
            rating: feedback.rating,
            typeOfAppreciation: feedback.typeOfAppreciation,
            isUserExperienceEnjoyable: feedback.isUserExperienceEnjoyable
          }
        })).then(response => {
          if (response.response) {
            this.notificationService.showSuccess('Feedback updated successfully!');
            this.router.navigate(['/feedback']);
          } else {
            this.notificationService.showError(response.errorMessage.message);
          }
        });
      }
    } catch (error) {
      // convert error.message to json
      if (error.message != null || error.message != undefined) {
        let err = JSON.parse(error.message);
        console.log(err);
        this.notificationService.showError(err.errorMessage.message);
      } else {
        this.notificationService.showError('An error occurred while saving the feedback!');
      }

    }
    this.setIsLoading = false;
  }

  onChange(option: string, event: any) {
    let selectedOptions = this.form.get('typeOfAppreciation').value as string[];
    if (event.checked) {
      selectedOptions.push(option);
    } else {
      const index = selectedOptions.indexOf(option);
      if (index !== -1) {
        selectedOptions.splice(index, 1);
      }
    }
    //remove duplicates from selectedOptions
    selectedOptions = selectedOptions.filter((value, index, self) => self.indexOf(value) === index);
    this.form.get('typeOfAppreciation').patchValue(selectedOptions);
  }

}
