export interface Option {
    id: string;
    title: string;
    price: number;
    image: string;
}

export interface Item {
    id: string;
    title: string;
    price: number;
    options?: Option[];
    image: string;
}

export interface RootObject {
    id: string;
    title: string;
    items: Item[];
}

export const products: RootObject[] = [
    {
        id: 'mains',
        title: 'Mains',
        items: [
            {
                id: 'hamburger',
                title: 'Hamburger',
                price: 5.2,
                image: 'hamburger.jpg',
                options: [
                    {
                        id: 'cheese',
                        title: 'Cheese',
                        price: 0.5,
                        image: 'cheese.jpg',
                    },
                ],
            },
            {
                id: 'chips',
                title: 'Chips',
                price: 3.2,
                image: 'chips.jpg',
            },
            {
                id: 'coke',
                title: 'Coke',
                price: 2.5,
                image: 'coke.jpg',
            },
        ],
    },
];
