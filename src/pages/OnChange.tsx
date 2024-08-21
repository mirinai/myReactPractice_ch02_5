import type {ChangeEvent} from 'react';

function OnChange() {
  // 'onChangeValue' 함수는 텍스트 입력 필드에서 값이 변경될 때 호출됩니다.
  const onChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
    // 이벤트 전파를 중단시켜 상위 요소로 이벤트가 전파되지 않도록 합니다.
    e.stopPropagation();

    // 기본 이벤트 동작을 취소합니다. (예: 폼 제출 시 기본 동작 방지)
    e.preventDefault();

    // 콘솔에 텍스트 입력 필드의 현재 값을 출력합니다.
    console.log('onChangeValue', e.target.value);
  };

  // 'onChangeChecked' 함수는 체크박스의 체크 상태가 변경될 때 호출됩니다.
  const onChangeChecked = (e: ChangeEvent<HTMLInputElement>) => {
    // 이벤트 전파를 중단시켜 상위 요소로 이벤트가 전파되지 않도록 합니다.
    e.stopPropagation();

    // 콘솔에 체크박스의 현재 체크 상태를 출력합니다.
    console.log('onChangeChecked', e.target.checked);
  };

  // 'onChangeFiles' 함수는 파일 입력 필드에서 파일이 선택될 때 호출됩니다.
  const onChangeFiles = (e: ChangeEvent<HTMLInputElement>) => {
    // 이벤트 전파를 중단시켜 상위 요소로 이벤트가 전파되지 않도록 합니다.
    e.stopPropagation();

    // 콘솔에 선택된 파일 리스트를 출력합니다.
    console.log('onChangeFiles', e.target.files);
  };

  //prettier-ignore 주석은 Prettier 포매터가 이 JSX 코드를 자동으로 수정하지 않도록 합니다.
  return (
    <div>
      <p>OnChange</p>

      {/* 텍스트 입력 필드. 사용자가 텍스트를 입력하면 'onChangeValue' 함수가 호출됩니다. */}
      <input
        type="text"
        onChange={onChangeValue}
        placeholder="type some text"
        defaultValue="Hello" // 기본적으로 "Hello"라는 값이 입력된 상태로 렌더링됩니다.
      />

      {/* 체크박스. 체크 상태가 변경되면 'onChangeChecked' 함수가 호출됩니다. */}
      <input
        type="checkbox"
        onChange={onChangeChecked}
        defaultChecked // 기본적으로 체크된 상태로 렌더링됩니다.
      />

      {/* 파일 입력 필드. 사용자가 파일을 선택하면 'onChangeFiles' 함수가 호출됩니다. */}
      <input
        type="file"
        onChange={onChangeFiles}
        multiple // 여러 개의 파일을 선택할 수 있습니다.
        accept="images/*" // 이미지 파일만 선택할 수 있도록 제한합니다.
      />
    </div>
  );
}

export default OnChange;
