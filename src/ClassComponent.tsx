import {Component} from 'react';

// export default class ClassComponent extends Component {
//   render() {
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

//마지막 ClassComponent

export type ClassComponentProps = {
  href: string;
  text: string;
};
export default class ClassComponent extends Component<ClassComponentProps> {
  render() {
    const {href, text} = this.props;
    return (
      <li>
        <a href={href}>
          <p>{text}</p>
        </a>
      </li>
    );
  }
}
