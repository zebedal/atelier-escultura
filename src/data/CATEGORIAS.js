export const CATEGORIAS = {
    categorias: [
        {
            categoria: 'Escultura',
            filtro: 'esculturas',
            id: 1
        },
        {
            categoria: 'Pintura',
            filtro: 'pinturas',
            id: 2
        },
        {
            categoria: 'Acrílicos',
            filtro: 'acrilicos',
            id: 3
        },
        {
            categoria: 'Impressão Digital',
            filtro: 'impressao',
            id: 4
        },
        {
            categoria: 'Corte 2D e 3D',
            filtro: 'corte',
            id: 4,
            subCategorias: [
                {
                    categoria: 'Laser',
                    filtro: 'laser',
                    id: 6
                },
                {
                    categoria: 'CNC Fresa',
                    filtro: 'fresa',
                    id: 7
                },
                {
                    categoria: 'Esferovite',
                    filtro: 'esferovite',
                    id: 8
                }
            ]
        },
        {
            categoria: 'Últimos Trabalhos',
            filtro: 'ultimos',
            id: 5
        }
    ],
    activeLink: null
}
