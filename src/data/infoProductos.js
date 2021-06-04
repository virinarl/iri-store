import amigorumiWolf from '../assets/products/amigorumiWolf.jpg';
import sonajeroBear from '../assets/products/bearForBabies.jpg';
import amigorumiBear from '../assets/products/Bear.jpg'


const misProductos = [
    {
        id: 1,
        title:'Lobo',
        price:350,
        pictureUrl: amigorumiWolf,
        stock: 4,
        descripcion: 'Lorem ipsum dolor sit amet, consectetur.',
    },
    {
        id: 2,
        title:'Mordillo',
        price:150,
        pictureUrl: sonajeroBear,
        stock: 7,
        descripcion: 'Lorem ipsum dolor sit amet, consectetur.',
    },
    {
        id:3,
        title:'Oso',
        price:550,
        pictureUrl: amigorumiBear,
        stock: 2,
        descripcion: 'Lorem ipsum dolor sit amet, consectetur.',
    }
];

export default misProductos;