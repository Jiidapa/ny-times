import { MostPopularResponse } from '../../interfaces'

export const mostPopular: MostPopularResponse = {
    status: 'OK',
    copyright: 'Copyright (c) 2021 The New York Times Company.  All Rights Reserved.',
    num_results: 20,
    results: [
        {
            uri: 'nyt://article/0e3ba8f8-01b3-5551-8b1b-0c205ea3cc51',
            url: 'https://www.nytimes.com/2021/03/04/us/richard-barnett-pelosi-tantrum.html',
            id: 100000007636500,
            asset_id: 100000007636500,
            source: 'New York Times',
            published_date: '2021-03-04',
            updated: '2021-03-04 12:47:37',
            section: 'U.S.',
            subsection: '',
            nytdsection: 'u.s.',
            adx_keywords:
                'United States Politics and Government;Storming of the US Capitol (Jan, 2021);Barnett, Richard (1960- );Washington (DC)',
            column: null,
            byline: 'By Alan Feuer',
            type: 'Article',
            title:
                'The man who put his feet up on a desk in Pelosi’s office during the Capitol riot throws a tantrum in court.',
            abstract:
                'Richard Barnett yelled at the judge and his own lawyers that it wasn’t “fair” that he was still in jail weeks after his arrest.',
            des_facet: [
                'United States Politics and Government',
                'Storming of the US Capitol (Jan, 2021)'
            ],
            org_facet: [],
            per_facet: ['Barnett, Richard (1960- )'],
            geo_facet: ['Washington (DC)'],
            media: [
                {
                    type: 'image',
                    subtype: 'photo',
                    caption:
                        'Richard Barnett of Gravette, Ark., posed for photographs while sitting at a desk in Speaker Nancy Pelosi’s office during the siege at the Capitol.',
                    copyright: 'Jim Lo Scalzo/EPA, via Shutterstock',
                    approved_for_syndication: 1,
                    'media-metadata': [
                        {
                            url:
                                'https://static01.nyt.com/images/2021/03/04/us/politics/04new-washington-briefing-barnett/merlin_182056404_17fb14d1-410b-4a64-baa2-cd5b1acc46fa-thumbStandard.jpg',
                            format: 'Standard Thumbnail',
                            height: 75,
                            width: 75
                        },
                        {
                            url:
                                'https://static01.nyt.com/images/2021/03/04/us/politics/04new-washington-briefing-barnett/merlin_182056404_17fb14d1-410b-4a64-baa2-cd5b1acc46fa-mediumThreeByTwo210.jpg',
                            format: 'mediumThreeByTwo210',
                            height: 140,
                            width: 210
                        },
                        {
                            url:
                                'https://static01.nyt.com/images/2021/03/04/us/politics/04new-washington-briefing-barnett/merlin_182056404_17fb14d1-410b-4a64-baa2-cd5b1acc46fa-mediumThreeByTwo440.jpg',
                            format: 'mediumThreeByTwo440',
                            height: 293,
                            width: 440
                        }
                    ]
                }
            ],
            eta_id: 0
        }
    ]
}
