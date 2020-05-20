import { Directive, ElementRef, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit {

  @Input('appHighlight')
  color;

  defaultColor = 'yellow';

  @Input()
  time = 2000;

  constructor(private elementRef: ElementRef) {
    setTimeout( this.onMouseEnter , this.time); // this.time = 2000
  }

  ngOnInit(): void {
    setTimeout( this.onMouseEnter , this.time); // this.time = "lo que venga por input"
  }

  @HostListener('mouseenter', ['$event'])
  onMouseEnter(evento) {
    this.elementRef.nativeElement.style.backgroundColor = this.color || this.defaultColor;
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.elementRef.nativeElement.style.backgroundColor = '';
  }

}
