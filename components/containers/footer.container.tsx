import Button from 'components/common/button.component';
import Link from 'next/link';
import footerContent from 'public/content/footer.content';
import AnanasStore from 'public/svg/ananas-store.svg';
import AnanaTextLogo from 'public/svg/ananas-text-logo.svg';
import FacebookIcon from 'public/svg/facebook-icon.svg';
import InstagramIcon from 'public/svg/instagram-icon.svg';
import YoutubeIcon from 'public/svg/youtube-icon.svg';
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
      <section css={tw`col-start-2 col-span-3 flex flex-col gap-y-7`}>
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
        <div css={tw`grid grid-cols-4`}>
          <div>
            <h4 css={tw`mb-5 uppercase`}>Ananas social</h4>
            <div css={tw`flex gap-x-1.5`}>
              <Link href="/" passHref>
                <a>
                  <FacebookIcon />
                </a>
              </Link>
              <Link href="/" passHref>
                <a>
                  <InstagramIcon />
                </a>
              </Link>
              <Link href="/" passHref>
                <a>
                  <YoutubeIcon />
                </a>
              </Link>
            </div>
          </div>
          <div>
            <h4 css={tw`mb-5 uppercase`}>Đăng ký nhận mail</h4>
            <form css={tw`flex flex-col items-start gap-2 2xl:(flex-row items-stretch)`}>
              <input
                type="text"
                placeholder="Nhập email của bạn"
                css={tw`w-48 px-4 py-2.5 outline-none text-gray-600 2xl:w-44`}
              />
              <Button>
                <span>Gửi</span>
              </Button>
            </form>
          </div>
          <div css={tw`col-span-2 flex justify-start items-center`}>
            <AnanaTextLogo />
          </div>
        </div>
        <div css={tw`grid grid-cols-4`}>
          <span css={tw`col-start-2 col-span-2 mt-8 text-gray-300`}>
            Copyright &copy; 2021 Ananas. All rights reserved.
          </span>
        </div>
      </section>
    </footer>
  );
};

Footer.defaultProps = {};

export default Footer;
