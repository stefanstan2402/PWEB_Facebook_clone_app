import { Directive, forwardRef, HostListener, Renderer2, ElementRef } from "@angular/core";
import { NG_VALUE_ACCESSOR, DefaultValueAccessor } from "@angular/forms";

@Directive({
    selector: 'input[toUppercase]',
    providers: [
      {
        provide: NG_VALUE_ACCESSOR,
        multi: true,
        useExisting: forwardRef(() => UpperCaseInputDirective),
      },
    ],
  })
  export class UpperCaseInputDirective extends DefaultValueAccessor {
    @HostListener('input', ['$event']) input($event: InputEvent) {
      const target = $event.target as HTMLInputElement;
      const start = target.selectionStart;
  
      target.value = target.value.toUpperCase();
      target.setSelectionRange(start, start);
  
      this.onChange(target.value);
    }
  
    constructor(renderer: Renderer2, elementRef: ElementRef) {
      super(renderer, elementRef, false);
    }
  }