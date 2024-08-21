import {DragEvent} from 'react'; // React의 DragEvent 타입을 임포트합니다.

function DragDrop() {
  // 드래그 시작 시 호출되는 이벤트 핸들러 함수입니다.
  const onDragStart = (e: DragEvent<HTMLElement>) => {
    console.log('onDragStart', e.dataTransfer); // 드래그 시작 시의 dataTransfer 객체를 콘솔에 출력합니다.
  };

  // 드래그 종료 시 호출되는 이벤트 핸들러 함수입니다.
  const onDragEnd = (e: DragEvent<HTMLElement>) => {
    console.log('onDragEnd', e.dataTransfer); // 드래그 종료 시의 dataTransfer 객체를 콘솔에 출력합니다.
  };

  // 드래그 오버 시 호출되는 이벤트 핸들러 함수입니다.
  // 기본 동작(브라우저가 파일을 열려는 시도)을 막기 위해 e.preventDefault()를 호출합니다.
  const onDragOver = (e: DragEvent) => e.preventDefault();

  // 드롭 시 호출되는 이벤트 핸들러 함수입니다.
  const onDrop = (e: DragEvent) => {
    e.preventDefault(); // 드래그 오버와 마찬가지로 기본 동작을 막습니다.
    console.log('onDrop', e.dataTransfer); // 드롭 시의 dataTransfer 객체를 콘솔에 출력합니다.
  };

  return (
    <div>
      <p>DragDrop</p>
      {/* 사용자가 드래그할 수 있는 영역입니다.
          draggable 속성을 설정하여 드래그 가능하도록 합니다.
          onDragStart와 onDragEnd 이벤트 핸들러를 설정하여 드래그 시작과 종료 시 동작을 처리합니다. */}
      <div draggable onDragStart={onDragStart} onDragEnd={onDragEnd}>
        <h1>Drag Me</h1>
        {/* 드롭 영역입니다.
            onDrop 이벤트 핸들러로 드롭 시 동작을 처리하고,
            onDragOver 이벤트 핸들러로 드래그 오버 시의 기본 동작을 막아줍니다. */}
        <div onDrop={onDrop} onDragOver={onDragOver}>
          <h1>Drop over Me</h1>
        </div>
      </div>
    </div>
  );
}

export default DragDrop; // 이 컴포넌트를 모듈로 내보냅니다.
