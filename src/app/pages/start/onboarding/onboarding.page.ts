import { Component, Injector, OnInit, ViewChild } from '@angular/core';
// import { SwiperComponent } from 'swiper/angular';
// import { SwiperOptions } from 'swiper';
import { APP_ROUTES } from 'src/app/constants/routes.const';
import { BasePage } from 'src/app/core/base-page';

@Component({
  selector: 'app-onboarding',
  templateUrl: './onboarding.page.html',
  styleUrls: ['./onboarding.page.scss'],
})
export class OnboardingPage extends BasePage implements OnInit {
  // @ViewChild('swiper', { static: false }) swiper?: SwiperComponent;
  // isLastSlide = false;

  // swiperConfig: SwiperOptions = {
  //   pagination: { clickable: true },
  //   centeredSlides: true,
  // };

  constructor(public injector: Injector) {
    super(injector);
  }

  ngOnInit() {}

  // // Próximo slide
  // nextSlide() {
  //   if (this.swiper) {
  //     this.swiper.swiperRef.slideNext();
  //   }
  // }

  // // Verifica se está no último slide para exibir "Skip"
  // onSlideChange() {
  //   if (this.swiper) {
  //     this.isLastSlide = this.swiper.swiperRef.isEnd;
  //   }
  // }

  // Navegação para a página de login
  skip() {
    this.navigateTo([APP_ROUTES.START, APP_ROUTES.LOGIN]);
  }
}
