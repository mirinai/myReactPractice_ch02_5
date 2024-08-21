// 'root'라는 ID를 가진 요소를 가져와 rootDiv 변수에 저장합니다.
const rootDiv = document.getElementById('root');

// rootDiv가 존재하는지 확인합니다.
if (rootDiv) {
  // 첫 번째 클릭 이벤트 핸들러를 rootDiv에 설정합니다.
  rootDiv.onclick = (e: Event) => {
    // 클릭 이벤트가 발생했을 때, 이벤트 객체에서 isTrusted, target, bubbles 속성을 추출합니다.
    const {isTrusted, target, bubbles} = e;

    // 클릭 이벤트가 발생했음을 알리는 메시지를 콘솔에 출력합니다.
    console.log('mouse click occurs on rootDiv', isTrusted, target, bubbles);
  };

  // 두 번째 클릭 이벤트 핸들러를 rootDiv에 설정합니다.
  rootDiv.onclick = (e: Event) => {
    const {isTrusted, target, bubbles} = e;

    // 클릭 이벤트가 발생했음을 알리는 또 다른 메시지를 콘솔에 출력합니다.
    // prettier-ignore 주석은 코드 포매터(prettier)가 이 줄의 코드를 자동으로 수정하지 않도록 방지합니다.
    console.log('mouse click also occurs on rootDiv', isTrusted, target, bubbles);
  };
}

// React 컴포넌트 'OnClick'을 정의합니다.
function OnClick() {
  // 이 컴포넌트는 단순히 "OnClick"이라는 텍스트를 포함하는 <div> 요소를 반환합니다.
  return <div>OnClick</div>;
}

// 컴포넌트를 기본으로 내보냅니다. 다른 파일에서 import할 수 있습니다.
export default OnClick;
