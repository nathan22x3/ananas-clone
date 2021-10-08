interface CategoryContent {
  image: string;
  href: string;
  text: string;
  items: Array<CategoryContentItems>;
}

interface CategoryContentItems {
  title: string;
  href: string;
}

const categoryContent: CategoryContent[] = [
  {
    image: '/images/category-1.jpg',
    href: '/',
    text: 'giày nam',
    items: [
      { title: 'New Arrivals', href: '/' },
      { title: 'Best Seller', href: '/' },
      { title: 'Sale-off', href: '/' },
    ],
  },
  {
    image: '/images/category-2.jpg',
    href: '/',
    text: 'giày nữ',
    items: [
      { title: 'New Arrivals', href: '/' },
      { title: 'Best Seller', href: '/' },
      { title: 'Sale-off', href: '/' },
    ],
  },
  {
    image: '/images/category-3.jpg',
    href: '/',
    text: 'dòng sản phẩm',
    items: [
      { title: 'Batas', href: '/' },
      { title: 'Vintas', href: '/' },
      { title: 'Urbas', href: '/' },
      { title: 'Pattas', href: '/' },
    ],
  },
];

export default categoryContent;
