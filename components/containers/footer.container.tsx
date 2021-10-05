import Button from 'components/common/button.component';
import Link from 'next/link';
import footerContent from 'public/content/footer.content';
import AnanasStore from 'public/svg/ananas-store.svg';
import tw from 'twin.macro';

export interface FooterProps {}

const Footer: React.FunctionComponent<FooterProps> = (props) => {
  return (
    <footer css={tw`grid grid-cols-4 py-15 bg-gray-500 text-white`}>
      <section css={tw`place-self-center flex flex-col gap-y-5`}>
        <AnanasStore />
        <Button color="primary">
          <span css={tw`text-2xl`}>Tìm cửa hàng</span>
        </Button>
      </section>
      <section css={tw`col-start-2 col-span-3`}>
        <div css={tw`grid grid-cols-4`}>
          {footerContent.map(({ title, items }) => (
            <div key={title}>
              <h4 css={tw`mb-5 uppercase`}>{title}</h4>
              <ul css={tw`flex flex-col gap-y-1`}>
                {items.map(({ text, href }) => (
                  <li key={text}>
                    <Link href={href} passHref>
                      <a css={tw`text-gray-200 hover:text-orange`}>{text}</a>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </footer>
  );
};

Footer.defaultProps = {};

export default Footer;
