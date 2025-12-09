import React, { useState, useEffect } from 'react';

// 🪟 LoginModal 컴포넌트
const LoginModal = ({ isOpen, onClose, onLoginSuccess }) => {
    // 📝 폼 입력 상태 관리
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    // 📝 폼 제출 처리
    const handleLoginSubmit = (event) => {
        event.preventDefault(); // 기본 제출 방지

        if (username === '' || password === '') {
            alert('아이디와 비밀번호를 모두 입력해주세요.');
            return;
        }

        // --- 로그인 시도 시뮬레이션 ---
        if (username === 'user' && password === 'pass') {
            onLoginSuccess(); // 로그인 성공 시 부모 함수 호출
        } else {
            alert('아이디 또는 비밀번호가 올바르지 않습니다.');
        }

        // 시도 후 폼 필드 지우기
        setUsername('');
        setPassword('');
    };

    // 🖼️ 모달 외부 클릭 감지 (모달 닫기)
    useEffect(() => {
        const handleOutsideClick = (event) => {
            // 모달 배경 자체(login-modal div)를 클릭했을 경우 닫기
            if (isOpen && event.target.id === 'login-modal') {
                onClose();
            }
        };

        window.addEventListener('click', handleOutsideClick);

        // 컴포넌트 정리(Clean-up) 함수: 이벤트 리스너 제거
        return () => {
            window.removeEventListener('click', handleOutsideClick);
        };
    }, [isOpen, onClose]);

    //  isOpen이 false이면 아무것도 렌더링하지 않음
    if (!isOpen) return null;

    // 🖥️ 모달 UI 렌더링
    return (
        // 'flex' 스타일을 인라인으로 적용하여 모달 표시
        <div id="login-modal" className="login-modal" style={{ display: 'flex' }}>
            <div className="login-content">
                {/* 닫기 버튼 */}
                <span className="close-button" onClick={onClose}>&times;</span>
                <h2>로그인</h2>
                <form onSubmit={handleLoginSubmit}>
                    <input
                        type="text"
                        id="username"
                        placeholder="아이디"
                        required
                        value={username}
                        onChange={(e) => setUsername(e.target.value)} // 상태 업데이트
                    />
                    <input
                        type="password"
                        id="password"
                        placeholder="비밀번호"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)} // 상태 업데이트
                    />
                    <button type="submit">로그인</button>
                </form>
            </div>
        </div>
    );
};

export default LoginModal;