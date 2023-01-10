import { nanoid } from "nanoid"
const products = [
    {
        id: nanoid(),
        name: 'Beauty Cream',
        description: 'This cream made of <fancy organic source> makes your skin silky smooth',
        price: 12.99,
        url: '/shopping-cart/pic1.jpeg'
    },
    {
        id: nanoid(),
        name: 'Hydration Kit',
        description: 'An assembly of highly effective creams and serums to keep your skin hydrated',
        price: 49.99,
        url: '/shopping-cart/pic2.jpeg'
    },
    {
        id: nanoid(),
        name: 'Leave-in Hair Conditioner',
        description: 'Our go-to leave-in conditioner for curly and wavy hair. Organic.',
        price: 16.99,
        url: '/shopping-cart/pic3.jpeg'
    },
    {
        id: nanoid(),
        name: 'Easy feet cream',
        description: 'This cream made of <fancy organic source> makes your skin silky smooth',
        price: 8.99,
        url: '/shopping-cart/pic4.jpeg'
    },
    {
        id: nanoid(),
        name: 'Next Level Peeling',
        description: 'An assembly of highly effective creams and serums to keep your skin hydrated',
        price: 7.99,
        url: '/shopping-cart/pic5.jpeg'
    },
    {
        id: nanoid(),
        name: 'Urea Serum',
        description: 'Our go-to leave-in conditioner for curly and wavy hair. Organic.',
        price: 13.99,
        url: '/shopping-cart/pic6.jpeg'
    },
]

export default products