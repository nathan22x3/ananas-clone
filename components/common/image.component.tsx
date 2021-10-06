import NextImage from 'next/image';
import tw, { css } from 'twin.macro';

export interface ImageProps {
  src: string;
  alt?: string;
  width?: number;
  title?: string;
  [key: string]: any;
}

const Image: React.FunctionComponent<ImageProps> = (props) => {
  const { alt, title, width, src, ...others } = props;
  return (
    <div
      css={[
        tw`flex items-center h-auto`,
        width
          ? css`
              width: ${width}px;
            `
          : tw`w-full`,
        css`
          & > div {
            all: unset !important;
            display: flex !important;
            align-items: center;
          }
        `,
      ]}
      {...others}
    >
      <NextImage
        layout="fill"
        css={[
          css`
            all: unset !important;
            width: 100% !important;
          `,
        ]}
        {...{ src, alt, title }}
      />
    </div>
  );
};

Image.defaultProps = {
  alt: '',
  title: '',
  width: 75,
};

export default Image;
