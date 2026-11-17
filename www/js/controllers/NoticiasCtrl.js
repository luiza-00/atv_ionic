
angular.module('ucsalApp')

.controller('NoticiasCtrl', function($scope, $state, $stateParams, NoticiasService) {

    $scope.noticias = NoticiasService.listar();

    $scope.noticia = NoticiasService.buscar($stateParams.id);

    $scope.abrirNoticia = function(id) {
        $state.go('detalhe', {id: id});
    };

});
