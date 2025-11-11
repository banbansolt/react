import React, {useState} from "react";

function SignUp(){
    const[name,setName]=useState("");
    const[email,setEmail]=useState("");
    const[pw,setPw]=useState("");
    const[gender,setGender]=useState("male");
    const[interest,setInterest]=useState("");

    const handleSubmit=()=>{
        alert(`입력된 성명: ${name}
        입력된 이메일: ${email}
        입력된 비밀번호: ${pw}
        입력된 성별: ${gender}
        입력된 관심사: ${interest}`)
    }

    return(
        <div>
            <h2>회원가입</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    성명:
                    <input type={"text"} value={name} onChange={(event)=>{
                        setName(event.target.value);
                    }} required/>       {/*required - 성명을 필수적으로 작성해야됨*/}
                </label>

                <label>
                    이메일:
                    <input type={"email"} value={email} onChange={(event)=>{
                        setEmail(event.target.value);
                    }} required/>       {/*required - 성명을 필수적으로 작성해야됨*/}
                </label>

                <label>
                    비밀번호:
                    <input type={"password"} value={pw} onChange={(event)=>{
                        setPw(event.target.value);
                    }} required/>       {/*required - 성명을 필수적으로 작성해야됨*/}
                </label>

                <label>
                    성별:
                    <select value={gender} onChange={(event)=>{}}>
                        <option value="male">male</option>
                        <option value="female">female</option>
                    </select>
                </label>

                <label>
                    관심사:
                    <textarea value={interest} onChange={(event)=>{
                        setInterest(event.target.value);
                    }}/>
                </label>
                <br/>
                <button type={"submit"}>가입하기</button>
            </form>
        </div>
    );
}

export default SignUp;