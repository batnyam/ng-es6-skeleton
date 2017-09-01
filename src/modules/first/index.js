import angular from 'angular';
import uiRouter from '@uirouter/angularjs';

import ContentService from 'common/services/content';
import FirstComponent from './component';

export default angular
  .module('app.modules.firstModule', [uiRouter])
  .config(($stateProvider, $urlRouterProvider) => {
    'ngInject';

    $urlRouterProvider.otherwise('/');

    $stateProvider.state('first', {
      url: '/',
      component: 'firstModule',
      resolve: {
        content: (ContentService) => {
          'ngInject';

          return ContentService.getContent('first');
        },
      },
    });
  })
  .component('firstModule', FirstComponent)
  .factory('ContentService', ContentService);
