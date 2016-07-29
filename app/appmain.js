//inicio.html

(function() {


    'use strict';

	angular.module('AngularDay', [	'ui.router', 'appModule' ])





//ROUTES

	.config(function($stateProvider, $urlRouterProvider) {
   

        $urlRouterProvider.otherwise('/');
        // $urlRouterProvider

        //     .otherwise('/');
           

        $stateProvider
            .state('/', {
                url: '/',
                views: {
                     'sectionCenter@': { templateUrl: 'app/view/inicio.html',
                     controller: 'inicioCtrl'
                    }
                }
            })


     
            // .state('inicio', {
            //     url: '/inicio',
            //     views: {
            //          'sectionCenter@': {
            //             templateUrl: 'app/view/inicio.html'
            //             //,controller: 'homeCtrl'
            //         }
            //     }
            // })    
       
		    .state('contacts', {
		        url: "/contacts",
		        params: {
		            param1: null
		        },
		        views: {
                     'sectionCenter@': { templateUrl: 'app/view/uno.html'
                    }
                }
		        //templateUrl: 'http://127.0.0.1:8081/app/view/uno.html'
		    })

            //----------------------------------------------------------------------------------------------------------------------------------------
            .state('#/uno', {
                url: '#/uno',
                views: {
                    'sectionCenter@': { templateUrl: 'app/view/uno.html' },

                }
            })

            .state('dos', {
                url: 'dos',
                views: {
                    'sectionCenter@': { templateUrl: 'app/view/uno.html' },

                }
            })
           


        //----------------------------------------------------------------------------------------------------------------------------------------

      
    });








}());

