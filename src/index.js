import angular from 'angular';
import uiRouter from '@uirouter/angularjs';

import common from 'common';
import modules from 'modules';

angular.module('ngEs6App', [uiRouter, common.name, modules.name]).config(($locationProvider) => {
  'ngInject';

  $locationProvider.html5Mode(true);
});
