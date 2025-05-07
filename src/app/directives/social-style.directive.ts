import { Directive, ElementRef, Renderer2, AfterViewInit } from '@angular/core';

@Directive({
  selector: '[appSocialStyle]'
})
export class SocialStyleDirective implements AfterViewInit {
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngAfterViewInit() {
    const host = this.el.nativeElement;
    const buttons = host.querySelectorAll('.sb-button');
    const icons = host.querySelectorAll('.sb-icon');
  
    this.renderer.setStyle(host, 'background', '#fff');
    this.renderer.setStyle(host, 'padding', '20px');
    this.renderer.setStyle(host, 'borderRadius', '12px');
    this.renderer.setStyle(host, 'display', 'flex');
    this.renderer.setStyle(host, 'justifyContent', 'center');
    this.renderer.setStyle(host, 'alignItems', 'center');
    this.renderer.setStyle(host, 'gap', '12px');
    // this.renderer.setStyle(host, 'boxShadow', '0 4px 16px rgba(0, 0, 0, 0.1)');
    this.renderer.setStyle(host, 'flexWrap', 'wrap');
  
    buttons.forEach((btn: HTMLElement) => {
      this.renderer.setStyle(btn, 'width', '60px');
      this.renderer.setStyle(btn, 'height', '60px');
    });
  
    icons.forEach((icon: HTMLElement) => {
      this.renderer.setStyle(icon, 'fontSize', '28px');
    });
  }
  
}
