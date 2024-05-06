import { Directive, forwardRef, HostListener, Renderer2, ElementRef } from "@angular/core";
import { NG_VALUE_ACCESSOR, DefaultValueAccessor } from "@angular/forms";

@Directive({
    selector: 'input[firstLetterUppercase]',
    providers: [
      {
        provide: NG_VALUE_ACCESSOR,
        multi: true,
        useExisting: forwardRef(() => FirstLetterUpperCaseInputDirective),
      },
    ],
  })
  export class FirstLetterUpperCaseInputDirective extends DefaultValueAccessor {
    @HostListener('input', ['$event']) input($event: InputEvent) {
      const target = $event.target as HTMLInputElement;
      const start = target.selectionStart;
  
      let modifiedValue: string = target.value[0].toUpperCase();
      modifiedValue = modifiedValue + target.value.substring(1, target.value.length).toLowerCase();
      target.value = modifiedValue;
      target.setSelectionRange(start, start);
  
      this.onChange(target.value);
    }
  
    constructor(renderer: Renderer2, elementRef: ElementRef) {
      super(renderer, elementRef, false);
    }
  }