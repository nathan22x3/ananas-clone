import Image from 'components/common/image.component';
import Link from 'next/link';
import bestSellerContent from 'public/content/best-seller.content';
import tw from 'twin.macro';

export interface BestSellerProps {}

const BestSeller: React.FunctionComponent<BestSellerProps> = () => {
  return (
    <div css={tw`py-4 max-w-screen-xl mx-auto`}>
      <div css={tw`-mx-10`}>
        <h3 css={tw`text-center uppercase mb-10`}>best seller</h3>
        <div css={tw`grid grid-cols-4 gap-x-5`}>
          {bestSellerContent.map(({ href, color, name, price }) => (
            <div key={name} css={tw`flex flex-col items-center gap-y-2`}>
              <Image alt={name} src={href} css={tw`w-full`} />
              <Link href="/" passHref>
                <a css={tw`font-extrabold hover:text-orange`}>{name}</a>
              </Link>
              <p>{color}</p>
              <p css={tw`font-extrabold`}>{price} VND</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

BestSeller.defaultProps = {};

export default BestSeller;
