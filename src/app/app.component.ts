import { DOCUMENT } from '@angular/common';
import { Component, ElementRef, Inject, Renderer2, ViewChild } from '@angular/core';
declare var jQuery: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('div') div: ElementRef;
  constructor(@Inject(DOCUMENT) private document: Document, private renderer: Renderer2) {

  }
  async openModel() {
    // this.document.body.classList.remove('modal-open');
    // // this.document.get
    // // $("#source").appendTo("#destination");
    // const modelBagroud = this.document.getElementsByClassName("modal-backdrop");
    // alert(modelBagroud)
    // this.document.body.append
    // this.renderer.appendChild(this.div.nativeElement, modelBagroud.item);
    await this.sleep(3);


    (function ($) {
      $('.modal-backdrop').appendTo('.bigform-content');
      $('body').removeClass();;
    })(jQuery);

    console.log(
      this.document.getElementsByName('.modal-backdrop').length
    );
  }

  sleep(ms) {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
  }

  title = 'modal';
}
