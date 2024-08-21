import type {ChangeEvent} from 'react'; // React의 ChangeEvent 타입을 임포트합니다.

function FileInput() {
  // 파일이 선택되었을 때 호출되는 이벤트 핸들러 함수입니다.
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const files: FileList | null = e.target.files; // 선택된 파일들을 가져옵니다. FileList는 선택된 파일들의 리스트입니다.
    if (files) {
      // 파일이 하나 이상 선택되었을 때만 실행됩니다.
      for (let i = 0; i < files.length; i++) {
        // 선택된 파일들의 수만큼 반복문을 돌립니다.
        const file: File | null = files.item(i); // 각 파일을 File 객체로 가져옵니다. 또는 files[i]로도 접근할 수 있습니다.
        console.log(`file[${i}]: `, file); // 각 파일의 정보를 콘솔에 출력합니다.
      }
    }
  };

  return (
    <div>
      <p>FileInput</p>
      {/* 사용자가 파일을 선택할 수 있는 input 요소입니다. 
          onChange 이벤트 핸들러가 등록되어 있으며, multiple 속성을 사용하여 여러 파일을 선택할 수 있도록 합니다.
          accept 속성은 "image/*"로 설정되어 있어 이미지 파일만 선택할 수 있습니다. */}
      <input type="file" onChange={onChange} multiple accept="image/*" />
    </div>
  );
}

export default FileInput; // 이 컴포넌트를 모듈로 내보냅니다.
