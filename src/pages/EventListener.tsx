// 'root'라는 ID를 가진 요소에 두 개의 클릭 이벤트 리스너를 추가합니다.
// 두 이벤트 리스너는 각각 클릭 이벤트가 발생할 때마다 특정 정보를 콘솔에 출력합니다.

document.getElementById('root')?.addEventListener('click', (e: Event) => {
  // 첫 번째 이벤트 리스너: 'root' 요소에서 클릭 이벤트가 발생하면 호출됩니다.
  // 이벤트 객체 'e'에서 isTrusted, target, bubbles 속성을 비구조화 할당으로 추출합니다.
  const {isTrusted, target, bubbles} = e;

  // 클릭 이벤트가 발생했음을 알리는 메시지를 콘솔에 출력합니다.
  // isTrusted: 이벤트가 사용자의 실제 행동(예: 마우스 클릭)으로 발생한 것인지 여부를 나타냅니다.
  // target: 이벤트가 발생한 요소를 나타냅니다.
  // bubbles: 이벤트가 버블링 단계에 있는지 여부를 나타냅니다.
  console.log('mouse click occurs', isTrusted, target, bubbles);
});

document.getElementById('root')?.addEventListener('click', (e: Event) => {
  // 두 번째 이벤트 리스너: 첫 번째와 동일한 요소에서 동일한 이벤트가 발생할 때 호출됩니다.
  // 동일하게 이벤트 객체 'e'에서 isTrusted, target, bubbles 속성을 추출합니다.
  const {isTrusted, target, bubbles} = e;

  // 클릭 이벤트가 또 발생했음을 알리는 메시지를 콘솔에 출력합니다.
  console.log('mouse click also occurs', isTrusted, target, bubbles);
});

// React 컴포넌트 'EventListener'를 정의합니다.
function EventListener() {
  // 이 컴포넌트는 단순히 "EventListener"라는 텍스트를 포함하는 <div> 요소를 반환합니다.
  return <div>EventListener</div>;
}

// 컴포넌트를 기본으로 내보냅니다. 다른 파일에서 import할 수 있습니다.
export default EventListener;
