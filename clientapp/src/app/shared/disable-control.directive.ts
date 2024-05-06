import { Directive, Input, OnInit } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: '[disableControl]'
})

export class DisableControlDirective implements OnInit {

  @Input() set disableControl(condition: boolean) {
    if (this.disabled !== undefined) {
      this.toggleForm(condition);
    }
    this.disabled = condition;
  }

  constructor(private ngControl: NgControl) {
    // Atentie! In modul dezvoltare, provoaca eroarea:
    // NG0100: ExpressionChangedAfterItHasBeenCheckedError: Expression has changed after it was checked
  }

  disabled: boolean;

  ngOnInit() {
    this.toggleForm(this.disabled);
  }

  toggleForm(condition: boolean) {
    const action = condition ? 'disable' : 'enable';
    this.ngControl.control[action]();
  }
}
