import { Dept } from "src/models";

export const MOCK_DEPT_CONFIG: Dept[] = [
    {
        title: 'Clothing',
        inventory: [
            {
                title: 'Mock Item #1',
                description: 'Mock Description #1',
                price: 5.99
            },
            {
                title: 'Mock Item #2',
                description: 'Mock Description #2',
                price: 12.99
            },
            {
                title: 'Mock Item #3',
                description: 'Mock Description #3',
                price: 2.50
            }
        ]
    },
    {
        title: 'Accessories',
        inventory: [
            {
                title: 'Mock Item #1',
                description: 'Mock Description #1',
                price: 1.99
            },
            {
                title: 'Mock Item #2',
                description: 'Mock Description #2',
                price: 1.99
            },
            {
                title: 'Mock Item #3',
                description: 'Mock Description #3',
                price: 3.89
            }
        ]
    },
    {
        title: 'Esoterica',
        inventory: [
            {
                title: 'Mock Item #1',
                description: 'Mock Description #1',
                price: 12.99
            },
            {
                title: 'Mock Item #2',
                description: 'Mock Description #2',
                price: 3.99
            },
            {
                title: 'Mock Item #3',
                description: 'Mock Description #3',
                price: 5.89
            }
        ]
    }
];