import {SyntheticEvent} from 'react';

function ReactOnClick() {
  // 'onclick' 함수는 버튼이 클릭될 때 호출됩니다.
  const onclick = (e: SyntheticEvent) => {
    // 이벤트 객체 'e'에서 'isTrusted', 'target', 'bubbles' 속성을 추출합니다.
    const {isTrusted, target, bubbles} = e;

    // 콘솔에 클릭 이벤트 발생과 관련된 정보를 출력합니다.
    // 'isTrusted': 이벤트가 실제 사용자의 행동으로 발생했는지 여부를 나타냅니다.
    // 'target': 이벤트가 발생한 요소를 참조합니다.
    // 'bubbles': 이벤트가 버블링 단계를 통해 전파되고 있는지 여부를 나타냅니다.
    console.log('mouse click occurs on <button>', isTrusted, target, bubbles);
  };

  // 컴포넌트가 렌더링하는 JSX를 반환합니다.
  return (
    <div>
      <p>ReactOnClick</p>
      {/* 'Click Me' 버튼이 클릭되면 'onclick' 함수가 호출됩니다. */}
      <button onClick={onclick}>Click Me</button>
    </div>
  );
}

export default ReactOnClick;
