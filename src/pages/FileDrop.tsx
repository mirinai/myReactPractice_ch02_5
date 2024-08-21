import {DragEvent} from 'react'; // React의 DragEvent 타입을 임포트합니다.

function FileDrop() {
  // 드래그 오버 시 호출되는 이벤트 핸들러 함수입니다.
  const onDragOver = (e: DragEvent) => e.preventDefault();
  // e.preventDefault()는 드래그 오버 시 기본 동작(파일을 브라우저에서 열려는 시도)을 막기 위해 필요합니다.

  // 파일을 드롭할 때 호출되는 이벤트 핸들러 함수입니다.
  const onDrop = (e: DragEvent) => {
    e.preventDefault(); // 기본 동작을 막습니다.
    const files = e.dataTransfer.files; // 드롭된 파일들을 가져옵니다.

    if (files) {
      // 드롭된 파일이 있는 경우에만 실행합니다.
      for (let i = 0; i < files.length; i++) {
        // 파일의 개수만큼 반복문을 돌립니다.
        const file: File | null = files.item(i); // 각 파일을 File 객체로 가져옵니다.
        console.log(`file[${i}]: `, file); // 각 파일의 정보를 콘솔에 출력합니다.
      }
    }
  };

  return (
    <div>
      <p>FileDrop</p>
      {/* 사용자가 파일을 드롭할 수 있는 영역입니다.
          onDrop 이벤트 핸들러로 드롭 시 동작을 처리하고,
          onDragOver 이벤트 핸들러로 드래그 오버 시의 기본 동작을 막아줍니다. */}
      <div onDrop={onDrop} onDragOver={onDragOver}>
        <h1>Drop image files over Me</h1> {/* 드롭 영역에 대한 설명입니다. */}
      </div>
    </div>
  );
}

export default FileDrop; // 이 컴포넌트를 모듈로 내보냅니다.
