interface FooterContentItem {
  text: string;
  href: string;
}

interface FooterContent {
  title: string;
  items: Array<FooterContentItem>;
}

const footerContent: FooterContent[] = [
  {
    title: 'Sản phẩm',
    items: [
      { text: 'Giày Nam', href: '/' },
      { text: 'Giày Nữ', href: '/' },
      { text: 'Thời trang & Phụ kiện', href: '/' },
      { text: 'Sale-off', href: '/' },
    ],
  },
  {
    title: 'Về công ty',
    items: [
      { text: 'Dứa tuyển dụng', href: '/' },
      { text: 'Liên hệ nhượng quyền', href: '/' },
      { text: 'Về Ananas', href: '/' },
    ],
  },
  {
    title: 'Hỗ trợ',
    items: [
      { text: 'FAQs', href: '/' },
      { text: 'Bảo mật thông tin', href: '/' },
      { text: 'Chính sách chung', href: '/' },
      { text: 'Tra cứu đơn hàng', href: '/' },
    ],
  },
  {
    title: 'Liên hệ',
    items: [
      { text: 'Email góp ý', href: '/' },
      { text: 'Hotline: 0963 429 749', href: '/' },
    ],
  },
];

export default footerContent;
