import React, {useState} from "react";

//custom hook(사용자 정의 훅):useState hook을 사용
function useCounter(initialValue) {
    //컴포넌트가 마운트되었을 떄, 업데이트 되었을 때
    const [count, setCount] = useState(initialValue);

    const increaseCount = () => setCount((count) => count +1);
    const decreaseCount = () => setCount((count) => Math.max(count - 1, 0));
    //컴포넌트가 언마운트되었을때
    return [count, increaseCount, decreaseCount]

}
export default useCounter;