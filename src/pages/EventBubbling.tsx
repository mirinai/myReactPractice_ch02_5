import {SyntheticEvent} from 'react';

function EventBubbling() {
  // 'onDivClick' 함수는 <div> 요소에서 클릭 이벤트가 버블링되었을 때 호출됩니다.
  const onDivClick = (e: SyntheticEvent) => {
    // 이벤트 객체 'e'에서 'isTrusted', 'target', 'bubbles', 'currentTarget' 속성을 추출합니다.
    const {isTrusted, target, bubbles, currentTarget} = e;

    // 콘솔에 <div> 요소에서 버블링된 클릭 이벤트와 관련된 정보를 출력합니다.
    // 'isTrusted': 이벤트가 실제 사용자 동작에 의해 발생했는지 여부.
    // 'target': 이벤트가 처음 발생한 요소(버튼).
    // 'bubbles': 이벤트가 버블링 중인지 여부.
    // 'currentTarget': 이벤트 핸들러가 연결된 현재 요소(<div>).
    console.log(
      'click event bubbles on <div>',
      isTrusted,
      target,
      bubbles,
      currentTarget
    );
  };

  // 'onButtonClick' 함수는 <button> 요소에서 클릭 이벤트가 발생했을 때 호출됩니다.
  const onButtonClick = (e: SyntheticEvent) => {
    // 이벤트 객체 'e'에서 'isTrusted', 'target', 'bubbles' 속성을 추출합니다.
    const {isTrusted, target, bubbles} = e;

    // 콘솔에 <button> 요소에서 시작된 클릭 이벤트와 관련된 정보를 출력합니다.
    console.log('click event starts at <button>', isTrusted, target, bubbles);
  };

  // 컴포넌트가 렌더링하는 JSX를 반환합니다.
  return (
    <div onClick={onDivClick}>
      <p>EventBubbling</p>
      {/* 'click Me' 버튼을 클릭하면 'onButtonClick' 함수가 호출됩니다. */}
      <button onClick={onButtonClick}>click Me</button>
    </div>
  );
}

export default EventBubbling;
