import tw from 'twin.macro';
import categoryContent from 'public/content/category.content';
import Link from 'next/link';
import Image from 'components/common/image.component';

export interface CategoryProps {}
const Category: React.FunctionComponent<CategoryProps> = () => {
  return (
    <div css={tw`py-10 max-w-screen-xl mx-auto`}>
      <h3 css={tw`text-center uppercase mb-15`}>danh mục mua hàng</h3>
      <div css={tw`grid grid-cols-3 gap-3 `}>
        {categoryContent.map(({ image, text, href, items }) => (
          <div key={text} css={tw`relative overflow-hidden h-72`}>
            <div css={tw`relative`}>
              <div css={tw`bg-black bg-opacity-30 absolute block w-full h-full`} />
              <Image src={image} alt={text} css={tw`w-full block`} />
            </div>
            <div css={tw`absolute top-12 left-5 w-11/12 text-center`}>
              <Link href={href} passHref>
                <a css={tw`text-white uppercase hover:text-orange text-2xl font-extrabold`}>
                  {text}
                </a>
              </Link>
              <ul css={tw`flex flex-col gap-y-2 mt-5`}>
                {items.map(({ title, href }) => (
                  <li key={title}>
                    <Link href={href} passHref>
                      <a css={tw`text-white hover:text-orange font-bold`}>{title}</a>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

Category.defaultProps = {};

export default Category;
