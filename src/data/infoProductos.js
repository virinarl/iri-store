import amigorumiWolf from '../assets/products/amigorumiWolf.jpg';
import sonajeroBear from '../assets/products/bearForBabies.jpg';
import amigorumiLion from '../assets/products/Lion.jpg';
import amigorumiBear from '../assets/products/Bear.jpg'


const misProductos = [
    {
        id: 1,
        title:'León',
        price: 400,
        pictureUrl: amigorumiLion, //acá tenía que poner pictureUrl, habías puesto picture nomás.
        stock: 5,
        descripcion: 'Roma no se hizo en un día',
    },
    {
        id: 2,
        title:'Lobo',
        price:350,
        pictureUrl: amigorumiWolf,
        stock: 4,
        descripcion: 'Más vale pájaron en mano que mil volando',
    },
    {
        id: 3,
        title:'Mordillo',
        price:150,
        pictureUrl: sonajeroBear,
        stock: 7,
        descripcion: 'Las vacas hacen mu y los gatos miu',
    },
    {
        id:4,
        title:'Oso',
        price:550,
        pictureUrl: amigorumiBear,
        stock: 2,
        descripcion: 'Y de qué color es el viento?',
    }
];

export default misProductos;