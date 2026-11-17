
angular.module('ucsalApp')

.controller('LoginCtrl', function($scope, $state, AuthService) {

    $scope.usuario = {};

    $scope.entrar = function() {

        if (!$scope.usuario.matricula || !$scope.usuario.senha) {
            $scope.erro = 'Preencha todos os campos!';
            return;
        }

        var aluno = AuthService.login(
            $scope.usuario.matricula,
            $scope.usuario.senha
        );

        if (aluno) {
            $state.go('home');
        } else {
            $scope.erro = 'Matrícula ou senha inválida!';
        }

    };

});
