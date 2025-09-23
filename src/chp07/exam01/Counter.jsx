import React, {useEffect, useState} from "react";
// useState 훅을 사용하여 상태설정이 변경될 때마다 다시 Rendering이 되게 변경
function Counter() {
    const [count, setCount] = useState(0);
    //userEffect 혹은 클래스형컴포넌트에서 컴포넌트가 마운트 되었을떄, 컴포넌트가 업데이트(변경)되었으떄 자동으로 호출되는 callback메소드를
    //함수형 컴포넌트에는 존재하지 않기 떄문에 userEffect 훅을 대신 사용
    //count useState 설정이 변경될 때마다 제목표시줄의 문자열을 변경하고자 한다
    useEffect(() => {
        document.title=`총${count}번 클릭했습니다`
    //클래스형컴포넌트에서3.컴포넌트가 언마운트되었을때
        return ()=>{

        }
});

    return(
        <div>
            <p>총 {count}번 클릭했습니다.</p>
            <button onClick={()=>setCount(count+1)}>클릭하세요.</button>
        </div>
    );
}

export default Counter;