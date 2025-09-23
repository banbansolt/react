import React, {useState} from "react";
// useState 훅을 사용하여 상태설정이 변경될 때마다 다시 Rendering이 되게 변경
function Counter() {
    const [count, setCount] = useState(0);

    return(
        <div>
            <p>총 {count}번 클릭했습니다.</p>
            <button onClick={()=>setCount(count+1)}>클릭하세요.</button>
        </div>
    );
}

export default Counter;