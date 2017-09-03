export default class AppHeaderCtrl {
  constructor(navigationService) {
    'ngInject';

    this.navigationService = navigationService;
  }

  $onInit() {
    this.navItems = this.navigationService.getNav();
    this.slogan = 'A complete, yet simple, Angular 1.X skeleton using bootstrap 4, eslint, es6+ and webpack';
  }
}
