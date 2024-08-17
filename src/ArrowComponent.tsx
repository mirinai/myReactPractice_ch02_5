import type {FC} from 'react';

//-------------------------
//React.createElement 선언문(example)

// function createElement<P extends {}>(
//   type: FunctionComponent<p> | ComponentClass<P> | string,
//   props?: Attributes & P | null,
//   ...children: ReactNode[]): ReactDOM<P>;
// )
//----------------------------

export type ArrowComponentProps = {
  href: string;
  text: string;
};

const ArrowComponent: FC<ArrowComponentProps> = props => {
  const {href, text} = props;
  return (
    <li>
      <a href={href}>
        <p>{text}</p>
      </a>
    </li>
  );
};
export default ArrowComponent;
