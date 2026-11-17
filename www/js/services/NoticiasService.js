
angular.module('ucsalApp')

.service('NoticiasService', function() {

    var noticias = [
        {
            id: 1,
            titulo: 'Período de Rematrícula',
            data: '16/11/2026',
            categoria: 'Notícia',
            imagem: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600',
            resumo: 'A UCSal informa aos estudantes sobre o período de rematrícula.',
            conteudo: 'Os alunos devem ficar atentos ao calendário acadêmico para realizar a rematrícula dentro do prazo estabelecido pela universidade.'
        },
        {
            id: 2,
            titulo: 'SEMOC 2026',
            data: '20/11/2026',
            categoria: 'Evento',
            imagem: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600',
            resumo: 'Semana de Mobilização Científica da UCSal.',
            conteudo: 'A SEMOC reúne estudantes e professores em atividades acadêmicas, apresentações de trabalhos e palestras.'
        },
        {
            id: 3,
            titulo: 'Iniciação Científica',
            data: '25/11/2026',
            categoria: 'Notícia',
            imagem: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=600',
            resumo: 'Confira oportunidades de pesquisa para estudantes.',
            conteudo: 'A universidade oferece oportunidades para estudantes interessados em participar de projetos de pesquisa e desenvolver atividades científicas.'
        },
        {
            id: 4,
            titulo: 'Maratona de Programação',
            data: '30/11/2026',
            categoria: 'Evento',
            imagem: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600',
            resumo: 'Evento voltado para estudantes da área de tecnologia.',
            conteudo: 'A maratona de programação incentiva o raciocínio lógico e a resolução de problemas por meio de desafios de programação.'
        }
    ];

    this.listar = function() {
        return noticias;
    };

    this.buscar = function(id) {
        return noticias.find(function(noticia) {
            return noticia.id == id;
        });
    };

});
