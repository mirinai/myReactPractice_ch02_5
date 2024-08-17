import React, {Attributes, Component, ComponentClass, FunctionComponent} from 'react';
import ClassComponent from './ClassComponent';
import ArrowComponent from './ArrowComponent';

//기본함수 컴포넌트

// function App() {
//   return (
//     <ul>
//       <li>
//         <a href="http://www.google.com">
//           <p>go to google</p>
//         </a>
//       </li>
//     </ul>
//   );
// }

// export default App;

//클래스 컴포넌트로 그리고 로직 넣음
// export default class App extends Component {
//   render() {
//     const isLoading = true;
//     if (isLoading) return <p>loading</p>;
//     return (
//       <ul>
//         <li>
//           <a href="http://www.google.com">
//             <p>go to google</p>
//           </a>
//         </li>
//       </ul>
//     );
//   }
// }

//단축 평가(short circuit)로 구현
// export default class App extends Component {
//   render() {
//     const isLoading = true;
//     const children = (
//       <li>
//         <a href="http://www.google.com">
//           <p>go to google</p>
//         </a>
//       </li>
//     );

//     return (
//       <div>
//         {isLoading && <p>loading...</p>}
//         {!isLoading && <p>{children}</p>}
//       </div>
//     );
//   }
// }

//isLoading값에 따라 나누기
// export default class App extends Component {
//   render() {
//     const isLoading = true;
//     const children = isLoading ? (
//       <p>loading...</p>
//     ) : (
//       <ul>
//         <li>
//           <a href="http://www.google.com">
//             <p>go to google</p>
//           </a>
//         </li>
//       </ul>
//     );

//     return <div>{children}</div>;
//   }
// }

//ClassComponent(export로 건넨 것)로 하기
// export default class App extends Component {
//   render() {
//     return (
//       <ul>
//         <ClassComponent href="http://www.google.com" text="google" />
//         <ClassComponent href="http://www.naver.com" text="naver"></ClassComponent>
//       </ul>
//     );
//   }
// }

//function 키워드 방식 함수 컴포넌트
// export default function App() {
//   return <div style={{fontSize: '20px'}}>Hello function-keyword component!</div>;
// }

// 화살표 방식 함수 컴포넌트
// const App = () => {
//   return <div style={{fontSize: '25px'}}>function component </div>;
// };
// export default App;

//함수 컴포넌트의 타입

//-------------------------
//React.createElement 선언문(example)

// function createElement<P extends {}>(
//   type: FunctionComponent<p> | ComponentClass<P> | string,
//   props?: Attributes & P | null,
//   ...children: ReactNode[]): ReactDOM<P>;
// )
//----------------------------

export default function App() {
  return (
    <ul>
      <ClassComponent href="http://www.google.com" text="google" />
      <ArrowComponent href="http://twitter.com" text="X" />
    </ul>
  );
}
