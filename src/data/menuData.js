import greekSalad from '../icons_assets/greek salad.jpg';
import bruschetta from '../icons_assets/bruchetta.svg';
import lemonDessert from '../icons_assets/lemon dessert.jpg';

const menuData = [
  {
    id: 1,
    title: 'Greek Salad',
    description:
      'The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.',
    price: '$12.99',
    image: greekSalad,
    alt: 'Greek Salad bowl with fresh vegetables',
  },
  {
    id: 2,
    title: 'Bruschetta',
    description:
      'Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.',
    price: '$5.99',
    image: bruschetta,
    alt: 'Bruschetta on grilled bread',
  },
  {
    id: 3,
    title: 'Lemon Dessert',
    description:
      "We only use the zest of 2 lemons inside the filling of the Lemon Meringue Pie, and 1 juiced in the pastry. It's not too sweet — a complete dessert experience.",
    price: '$5.00',
    image: lemonDessert,
    alt: 'Lemon dessert with meringue topping',
  },
];

export default menuData;
