import tw from 'twin.macro';
import Image from 'components/common/image.component';
import newsContent from 'public/content/news.content';
import Link from 'next/link';
import Button from 'components/common/button.component';
export interface NewsProps {}

const News: React.FunctionComponent<NewsProps> = (props) => {
  return (
    <div css={tw`flex flex-col items-center pt-10 pb-20 px-4 lg:px-0`}>
      <div css={tw` max-w-7xl m-auto grid grid-cols-1 py-16 bg-white text-black lg:grid-cols-2`}>
        <section>
          <h3 css={tw`text-center uppercase`}>instagram</h3>
          <div css={tw`flex justify-center py-10 lg:hidden `}>
            <Button>
              <span css={tw`text-lg `}>muốn xem nữa</span>
            </Button>
          </div>
        </section>
        <section>
          <h3 css={tw`text-center uppercase mb-10`}>tin tức &amp; bài viết</h3>
          <div css={tw`grid grid-cols-2 gap-x-5 gap-y-7.5`}>
            {newsContent.map(({ title, image, content }) => (
              <div key={title} css={tw`text-3xl lg:text-base`}>
                <Image alt={title} src={image} css={tw`w-full`} />
                <h4 css={tw`uppercase`}>{title}</h4>
                <p css={tw`line-clamp-4`}>{content}</p>
                <Link href="/" passHref>
                  <a css={tw`text-orange`}>Đọc thêm</a>
                </Link>
              </div>
            ))}
          </div>
        </section>
      </div>
      <Button>
        <span css={tw`text-lg`}>muốn xem nữa</span>
      </Button>
    </div>
  );
};

News.defaultProps = {};

export default News;
