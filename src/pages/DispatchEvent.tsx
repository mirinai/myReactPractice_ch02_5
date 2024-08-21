function DispatchEvent() {
  // 'onCallDispatchEvent' 함수는 'call DispatchEvent' 버튼이 클릭될 때 호출됩니다.
  const onCallDispatchEvent = () => {
    // 콘솔에 'onCallDispatchEvent' 메시지를 출력합니다.
    console.log('onCallDispatchEvent');

    // 'root'라는 ID를 가진 요소에 대해 'click' 이벤트를 생성하고, 이를 전파(bubbles)하도록 설정하여 이벤트를 디스패치(발생)합니다.
    // 이 디스패치는 'root' 요소와 그 부모 요소까지 이벤트가 전파될 수 있게 합니다.
    document.getElementById('root')?.dispatchEvent(new Event('click', {bubbles: true}));
  };

  // 'onCallClick' 함수는 'call click' 버튼이 클릭될 때 호출됩니다.
  const onCallClick = () => {
    // 콘솔에 'onCallClick' 메시지를 출력합니다.
    console.log('onCallClick');

    // 'root'라는 ID를 가진 요소를 직접 클릭하는 효과를 발생시킵니다.
    // 이것은 실제 사용자 클릭처럼 작동하며, 해당 요소의 'onclick' 핸들러가 실행됩니다.
    document.getElementById('root')?.click();
  };

  // 컴포넌트가 렌더링하는 JSX를 반환합니다.
  return (
    <div>
      <p>DispatchEvent</p>
      {/* 'call DispatchEvent' 버튼을 클릭하면 'onCallDispatchEvent' 함수가 호출됩니다. */}
      <button onClick={onCallDispatchEvent}>call DispatchEvent</button>

      {/* 'call click' 버튼을 클릭하면 'onCallClick' 함수가 호출됩니다. */}
      <button onClick={onCallClick}>call click</button>
    </div>
  );
}

export default DispatchEvent;
