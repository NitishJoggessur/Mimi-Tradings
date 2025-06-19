export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string; // Place image in public/ and use '/filename.ext'
}

// To add a product: Add an object below with name, price, description, and image (from public/)
export const listOfProducts: Product[] = [
  {
    id: 1,
    name: 'Hair and Beard Clippers',
    price: 1000,
    description: 'High-quality clippers for precise hair and beard grooming.',
    image: '/clippers.jpeg'
  },
  {
    id: 2,
    name: 'Hair Brush Blow-Dry-straightnen',
    price: 1000,
    description: 'Blow-dry and straighten your hair with this versatile brush.',
    image: '/blowstraight.jpg'
  },
  {
    id: 3,
    name: 'Hair Dryer',
    price: 1500,
    description: 'Powerful dryer for quick and efficient hair drying.',
    image: '/dryer.webp'
  },
  {
    id: 4,
    name: 'Phillips Hair Straightner',
    price: 3500,
    description: 'Smooth and style your hair with the Phillips hair straightener.',
    image: '/philips.jpg'
  },
  //Mac Cosmetics
{
    id: 5,
    name: 'Mac Lipstick',
    price: 2000,
    description: 'Luxurious lipstick with a wide range of shades.',
    image: '/maclipstick.jpeg'
  },
  {
    id: 6,
    name: 'Mac Foundation',
    price: 3000,
    description: 'Flawless foundation for a perfect complexion.',
    image: '/macfoundation.avif'
  },
  {
    id: 7,
    name: 'Mac Eyeshadow Palette',
    price: 4000,
    description: 'Versatile eyeshadow palette with vibrant colors.',
    image: '/maceyeshadow.avif'
  },
  {
    id: 8,
    name: 'Mac Blush',
    price: 2500,
    description: 'Add a pop of color to your cheeks with Mac blush.',
    image: '/macblush.webp'
}
];
