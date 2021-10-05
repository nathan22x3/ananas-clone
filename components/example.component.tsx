import tw from 'twin.macro';

export interface ExampleProps {
  title: string;
}

const Example: React.FunctionComponent<ExampleProps> = (props) => {
  const { title } = props;

  return <div>{title}</div>;
};

Example.defaultProps = {};

export default Example;
