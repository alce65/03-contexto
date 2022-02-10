const GENT = [
    {
        id: 1,
        name: 'Bertin Osborne',
        initial: 'B',
        status: 'Alive',
        profession: 'Youtuber',
        twitter: '@osbourne',
        picture: './assets/bertin.jpg',
        alternativeText: 'Osbourne pointing at you',
        selected: true,
    },
    {
        name: 'The Farytale',
        initial: 'F',
        status: 'RIP',
        profession: 'Influencer',
        twitter: 'pending',
        picture: './assets/fary.jpg',
        alternativeText: 'The Fary pointing at you',
        id: 2,
        selected: false,
    },
    {
        id: 3,
        name: 'Julius Churchs',
        initial: 'J',
        status: 'Alive',
        profession: 'Java developer',
        twitter: '@julius_churchs',
        picture: './assets/julio.jpg',
        alternativeText: 'Churchs pointing at you',
        selected: true,
    },
];

export function getData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(GENT);
        }, 3000);
    });
}
