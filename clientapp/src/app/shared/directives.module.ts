import { NgModule } from '@angular/core';
import { UpperCaseInputDirective } from './uppercase.directive';
import { FirstLetterUpperCaseInputDirective } from './firstLetterUppercase.directive';

@NgModule({
  imports: [],
  declarations: [ UpperCaseInputDirective, FirstLetterUpperCaseInputDirective ],
  exports: [ UpperCaseInputDirective, FirstLetterUpperCaseInputDirective ]
})
export class DirectivesModule { }