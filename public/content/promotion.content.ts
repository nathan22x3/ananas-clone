interface PromotionContent {
  title: string;
  image: string;
  content: string;
}

const promotionContent: PromotionContent[] = [
  {
    title: 'BÌNH MỚI RƯỢU "MỚI"',
    image: '/images/collection-1.jpg',
    content:
      'Vẫn kế thừa vẻ tối giản, nguyên bản đã được định hướng bởi cái tên, Basas mới trở lại với những cải tiến đáng giá chắc chắn sẽ đem đến một trải nghiệm thú vị như hành trình chúng tôi làm ra nó.',
  },
  {
    title: 'OUTLET SALE',
    image: '/images/banner_sale-off-1.jpg',
    content:
      'Danh mục những  sản phẩm bán tại "giá tốt hơn" chỉ được bán kênh online - Online Only, chúng đã từng làm mưa làm gió một thời gian và hiện đang rơi vào tình trạng bể size, bể số.',
  },
];

export default promotionContent;
