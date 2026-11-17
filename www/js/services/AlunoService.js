
angular.module('ucsalApp')

.service('AlunoService', function() {

    var aluno = {
        nome: 'Luiza Gabriella',
        matricula: '20261001',
        curso: 'Engenharia de Software',
        email: 'luiza@email.com',
        telefone: '(71) 99999-9999',
        endereco: 'Madre de Deus - BA'
    };

    this.buscar = function() {
        return aluno;
    };

    this.atualizar = function(dados) {
        aluno.email = dados.email;
        aluno.telefone = dados.telefone;
        aluno.endereco = dados.endereco;
    };

});
