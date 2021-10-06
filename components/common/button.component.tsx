import tw, { TwStyle } from 'twin.macro';

type ButtonColor = 'default' | 'primary' | 'black';
type ButtonSize = 'md' | 'lg';

export interface ButtonProps {
  color?: ButtonColor;
  size?: ButtonSize;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const buttonColors: Record<ButtonColor, TwStyle> = {
  default: tw`bg-gray-600`,
  primary: tw`bg-orange`,
  black: tw`bg-black`,
};
const buttonSizes: Record<ButtonSize, TwStyle> = {
  md: tw`px-7.5 py-1.5`,
  lg: tw`px-12 py-5`,
};

const Button: React.FunctionComponent<ButtonProps> = (props) => {
  const { size, color, onClick, children } = props;

  return (
    <button
      css={[
        tw`uppercase font-geometric text-white`,
        buttonSizes[size as ButtonSize],
        buttonColors[color as ButtonColor],
      ]}
      {...{ onClick }}
    >
      {children}
    </button>
  );
};

Button.defaultProps = {
  color: 'default',
  size: 'md',
  onClick: () => {},
};

export default Button;
