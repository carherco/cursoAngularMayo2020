import { Directive, ElementRef, Input, OnInit, HostListener } from '@angular/core';

@Directive({
  selector: '[appRotate]'
})
export class RotateDirective implements OnInit {

  @Input('appRotate')
  initialRotation = 0;

  @Input()
  step = 10;

  currentRotation = 0;

  constructor(private elementRef: ElementRef) { }

  ngOnInit(): void {
    this.currentRotation = +this.initialRotation;
    this.setRotation(this.currentRotation);
  }

  setRotation(angle: number) {
    const rotateStringValue = 'rotate(' + angle + 'deg)';
    this.elementRef.nativeElement.style.transform = rotateStringValue;
  }

  @HostListener('click', ['$event'])
  onClick(event: MouseEvent) {
    if (event.shiftKey) {
      this.currentRotation = this.currentRotation - this.step;
      this.setRotation(this.currentRotation);
    } else {
      this.currentRotation = this.currentRotation + +this.step;
      this.setRotation(this.currentRotation);
    }

    console.log(this.currentRotation);
  }
}
