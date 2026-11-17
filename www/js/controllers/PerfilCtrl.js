
angular.module('ucsalApp')

.controller('PerfilCtrl', function($scope, AlunoService) {

    $scope.aluno = angular.copy(AlunoService.buscar());

    $scope.salvar = function() {

        AlunoService.atualizar($scope.aluno);

        $scope.mensagem = 'Dados atualizados com sucesso!';

    };

});
