// (function() {


//     'use strict';

    
    angular.module("routerApp").config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/');
    
    $stateProvider
        .state('/', {
            url: '/',
            templateUrl: 'vistas/inicio.html'
        })
        
        // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
        .state('/', {
                url: '/',
                views: {
                     'sectionCenter@': {
                        templateUrl: 'http://127.0.0.1:8080/__APP/ejemplos/4-Navegacion/vistas/inicio.html',
                        controller: 'inicioCtrl'
                    }
                }
            })
         .state('galeria', {
                url: '/galeria',
                views: {
                    'sectionCenter@': { templateUrl: 'vistas/galeria.html' }

                }
            })
            
        
	});




// });        