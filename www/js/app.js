
angular.module('ucsalApp', ['ionic'])

.config(function($stateProvider, $urlRouterProvider) {

    $stateProvider

    .state('login', {
        url: '/login',
        templateUrl: 'templates/login.html',
        controller: 'LoginCtrl'
    })

    .state('home', {
        url: '/home',
        templateUrl: 'templates/noticias.html',
        controller: 'NoticiasCtrl'
    })

    .state('detalhe', {
        url: '/detalhe/:id',
        templateUrl: 'templates/noticia-detalhe.html',
        controller: 'NoticiasCtrl'
    })

    .state('financeiro', {
        url: '/financeiro',
        templateUrl: 'templates/financeiro.html',
        controller: 'FinanceiroCtrl'
    })

    .state('perfil', {
        url: '/perfil',
        templateUrl: 'templates/perfil.html',
        controller: 'PerfilCtrl'
    });

    $urlRouterProvider.otherwise('/login');

});
