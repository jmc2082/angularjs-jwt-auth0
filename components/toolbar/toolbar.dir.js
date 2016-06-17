/**
 * Created by jmackey on 6/17/16.
 */
(function() {

    'use strict';

    angular
        .module('authApp')
        .directive('toolbar', toolbar);

    function toolbar() {
        return {
            templateUrl:    'components/toolbar/toolbar.tpl.html',
            controller:     toolbarController,
            controllerAs:   'toolbar'
        }
    }

    function toolbarController() {
        
    }

})();