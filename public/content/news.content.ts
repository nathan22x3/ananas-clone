interface NewsContentItem {
  text: string;
  href: string;
}

interface NewsContent {
  title: string;
  image: string;
  content: string;
}

const newsContent: NewsContent[] = [
  {
    title: 'vì sao là lucky luke?',
    image: '/images/news1.jpg',
    content:
      'Quay về thời điểm trước khi ngỏ lời mời, đội ngũ Ananas tìm thấy khá nhiều lí do làm chất xúc tác cho sự “liều lĩnh” này. Đó là sự cảm tính có cơ sở để nảy ra ý tưởng từ đầu. Để rồi sau đó, những lí do “hết sức hợp lí” lại liên tục xuất hiện khi các thành viên dấn thân vào tìm hiểu sâu hơn về Lucky Luke. ',
  },
  {
    title: 'URBAS CORLURAY PACK',
    image: '/images/news2.jpg',
    content:
      'Urbas Corluray Pack đem đến lựa chọn “làm mới mình” với sự kết hợp 5 gam màu mang sắc thu; phù hợp với những người trẻ năng động, mong muốn thể...',
  },
  {
    title: 'VINTAS SAIGON 1980s',
    image: '/images/news3.jpg',
    content:
      'Với bộ 5 sản phẩm, Vintas Saigon 1980s Pack đem đến một sự lựa chọn “cũ kỹ thú vị” cho những người trẻ sống giữa thời hiện đại nhưng lại yêu nét...',
  },
  {
    title: 'SNEAKER FEST VIETNAM VÀ SỰ KẾT HỢP',
    image: '/images/news3.jpg',
    content:
      'Việc sử dụng dáng giày Vulcanized High Top của Ananas trong thiết kế và cảm hứng bắt nguồn từ linh vật Peeping - đại diện cho tinh thần xuyên ...',
  },
];

export default newsContent;
