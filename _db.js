let games = [
    {id: '1', title: 'Mario Kart', platform: ['Switch']},
    {id: '2', title: 'Elden Ring', platform: ['PS5', 'Xbox', 'PC']},
    {id: '3', title: 'Pokemon Scarlet', platform: ['PS5', 'Xbox', 'PC']}
]

let authors = [
    {id: '1', name: 'mario', verified: true},
    {id: '2', name: 'yoshi', verified: false},
    {id: '3', name: 'peach', verified: true}
]

let reviews = [
    {id: '1', rating: '9', content: 'lorem ipsum', author_id: '1', game_id: '1'},
    {id: '2', rating: '10', content: 'lorem ipsum', author_id: '2', game_id: '2'},
    {id: '3', rating: '3', content: 'lorem ipsum', author_id: '3', game_id: '4'},
    {id: '4', rating: '4', content: 'lorem ipsum', author_id: '2', game_id: '5'},
    {id: '5', rating: '6', content: 'lorem ipsum', author_id: '1', game_id: '1'}
]

export default {games, authors, reviews}