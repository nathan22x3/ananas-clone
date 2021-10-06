interface BestSellerContent {
  href: string;
  name: string;
  color: string;
  price: number;
}

const bestSellerContent: BestSellerContent[] = [
  {
    href: '/images/best-seller-1.jpg',
    name: 'Baseball Cap - Be Positive',
    color: 'Pink',
    price: 275000,
  },
  {
    href: '/images/best-seller-2.jpg',
    name: 'Vintas The New Military - High Top',
    color: 'Capulet Olive',
    price: 495000,
  },
  {
    href: '/images/best-seller-3.jpg',
    name: 'Basic Tee - Ananas Typo',
    color: 'White Asparagus',
    price: 249000,
  },
  {
    href: '/images/best-seller-4.jpg',
    name: 'Basas Bumper Gum - Slip On',
    color: 'Offwhite/Gum',
    price: 450000,
  },
];

export default bestSellerContent;
