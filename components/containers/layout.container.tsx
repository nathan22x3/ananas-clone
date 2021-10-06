import Footer from 'components/containers/footer.container';
import News from 'components/containers/news.container';

export interface LayoutProps {}

const Layout: React.FunctionComponent<LayoutProps> = (props) => {
  const { children } = props;

  return (
    <>
      {children}
      <Footer />
    </>
  );
};

Layout.defaultProps = {};

export default Layout;
