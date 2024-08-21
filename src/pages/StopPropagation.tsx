import {SyntheticEvent} from 'react'; // React의 SyntheticEvent 타입을 임포트합니다.

function StopPropagation() {
  // <div> 요소에서 클릭 이벤트가 발생할 때 호출되는 이벤트 핸들러입니다.
  const onDivClick = (e: SyntheticEvent) => {
    console.log('click event bubbles on <div>'); // 클릭 이벤트가 버블링되어 <div>에 도달했을 때 콘솔에 메시지를 출력합니다.
  };

  // <button> 요소에서 클릭 이벤트가 발생할 때 호출되는 이벤트 핸들러입니다.
  const onButtonClick = (e: SyntheticEvent) => {
    console.log(`mouse click occurs on <button> and call stopPropagation`);
    // 버튼에서 클릭 이벤트가 발생했을 때 콘솔에 메시지를 출력합니다.
    e.stopPropagation(); // 이벤트의 전파(버블링)를 중단합니다. 따라서 이 이벤트는 부모 요소인 <div>로 전파되지 않습니다.
  };

  return (
    <div onClick={onDivClick}>
      <p>StopPropagation</p>
      {/* <button> 요소를 클릭하면 onButtonClick이 호출되고, 이벤트 전파가 중단됩니다. 
          이로 인해 <div>의 onClick 핸들러는 호출되지 않습니다. */}
      <button onClick={onButtonClick}>Click Me and stop event propagation</button>
    </div>
  );
}

export default StopPropagation; // 이 컴포넌트를 모듈로 내보냅니다.
