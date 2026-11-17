
angular.module('ucsalApp')

.service('FinanceiroService', function() {

    var mensalidades = [

        // Primeiro semestre
        {
            semestre: '2026.1',
            mes: 'Janeiro',
            vencimento: '10/01/2026',
            valor: 536.00,
            pago: true,
            codigo: '11111111111111111111'
        },
        {
            semestre: '2026.1',
            mes: 'Fevereiro',
            vencimento: '10/02/2026',
            valor: 536.00,
            pago: true,
            codigo: '22222222222222222222'
        },
        {
            semestre: '2026.1',
            mes: 'Março',
            vencimento: '10/03/2026',
            valor: 536.00,
            pago: true,
            codigo: '33333333333333333333'
        },
        {
            semestre: '2026.1',
            mes: 'Abril',
            vencimento: '10/04/2026',
            valor: 536.00,
            pago: true,
            codigo: '44444444444444444444'
        },
        {
            semestre: '2026.1',
            mes: 'Maio',
            vencimento: '10/05/2026',
            valor: 536.00,
            pago: true,
            codigo: '55555555555555555555'
        },
        {
            semestre: '2026.1',
            mes: 'Junho',
            vencimento: '10/06/2026',
            valor: 536.00,
            pago: true,
            codigo: '66666666666666666666'
        },

        // Segundo semestre
        {
            semestre: '2026.2',
            mes: 'Agosto',
            vencimento: '10/08/2026',
            valor: 536.00,
            pago: true,
            codigo: '12345678901234567890'
        },
        {
            semestre: '2026.2',
            mes: 'Setembro',
            vencimento: '10/09/2026',
            valor: 536.00,
            pago: true,
            codigo: '12345678901234567891'
        },
        {
            semestre: '2026.2',
            mes: 'Outubro',
            vencimento: '10/10/2026',
            valor: 536.00,
            pago: false,
            codigo: '12345678901234567892'
        },
        {
            semestre: '2026.2',
            mes: 'Novembro',
            vencimento: '10/11/2026',
            valor: 536.00,
            pago: false,
            codigo: '12345678901234567893'
        },
        {
            semestre: '2026.2',
            mes: 'Dezembro',
            vencimento: '10/12/2026',
            valor: 536.00,
            pago: false,
            codigo: '12345678901234567894'
        }

    ];

    this.listar = function(semestre) {

        return mensalidades.filter(function(item) {
            return item.semestre == semestre;
        });

    };

});
