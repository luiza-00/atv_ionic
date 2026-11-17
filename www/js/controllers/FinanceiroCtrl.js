
angular.module('ucsalApp')

.controller('FinanceiroCtrl', function($scope, FinanceiroService) {

    $scope.semestre = '2026.2';

    $scope.mensalidades = FinanceiroService.listar($scope.semestre);

    $scope.alterarSemestre = function() {
        $scope.mensalidades = FinanceiroService.listar($scope.semestre);
    };

    $scope.copiarCodigo = function(codigo) {
        navigator.clipboard.writeText(codigo);
        $scope.mensagem = 'Código de barras copiado!';
    };

});
