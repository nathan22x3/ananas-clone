/** @jsxImportSource @emotion/react */
import tw from 'twin.macro';
import promotionContent from 'public/content/promotion.content';
import Image from 'components/common/image.component';
import Link from 'next/link';

export interface PromotionProps {}

const Promotion: React.FunctionComponent<PromotionProps> = () => {
  return (
    <div
      css={tw`grid px-6 gap-y-8 w-full md:(grid-cols-2 gap-x-10) lg:(max-w-screen-xl mx-auto py-14)`}
    >
      {promotionContent.map(({ image, content, title }) => (
        <div key={title} css={tw`flex flex-col`}>
          <div css={tw`overflow-hidden h-48 lg:h-auto flex items-center`}>
            <Image src={image} alt={title} css={tw`w-full block`} />
          </div>
          <Link href="/" passHref>
            <a css={tw`text-3xl font-bold hover:text-orange pt-8 pb-1`}>{title}</a>
          </Link>
          <p css={tw`text-xl md:text-lg lg:text-base`}>{content}</p>
        </div>
      ))}
    </div>
  );
};

Promotion.defaultProps = {};

export default Promotion;
