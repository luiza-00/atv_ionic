
angular.module('ucsalApp')

.service('AuthService', function() {

    var aluno = {
        matricula: '20261001',
        senha: '123456',
        nome: 'Luiza Gabriella',
        curso: 'Engenharia de Software'
    };

    this.login = function(matricula, senha) {

        if (matricula == aluno.matricula && senha == aluno.senha) {
            return aluno;
        }

        return null;
    };

});
