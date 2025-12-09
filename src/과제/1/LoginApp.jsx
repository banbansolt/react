import React, { useState } from 'react';
import LoginModal from './LoginModal';
import './LoginApp.css';

// ✅ 1. back.jpg 이미지를 import 합니다. (경로에 따라 수정 필요할 수 있음)
import mainBackgroundImage from '../imgs/back.jpg';

const LoginApp = () => {
    // 🔑 상태 관리
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    // 🔄 로그인 모달 열기/닫기 함수
    const openLoginModal = () => setIsModalOpen(true);
    const closeLoginModal = () => setIsModalOpen(false);

    // 🔒 로그아웃 처리 함수
    const handleLogout = () => {
        const confirmLogout = window.confirm('로그아웃 하시겠습니까?');
        if (confirmLogout) {
            setIsLoggedIn(false);
            alert('로그아웃 되었습니다.');
        }
    };

    // 🎯 로그인/로그아웃 버튼 클릭 핸들러
    const handleAuthClick = () => {
        if (isLoggedIn) {
            handleLogout();
        } else {
            openLoginModal();
        }
    };

    // 🚀 로그인 성공 처리 (LoginModal에서 호출될 함수)
    const handleLoginSuccess = () => {
        setIsLoggedIn(true);
        closeLoginModal();
        alert('로그인 성공!');
    };

    return (
        <>
            {/* 🧭 헤더/네비게이터 영역 */}
                <header>
                    {/* 로그인/로그아웃 버튼 */}
                    <button className="login-button" onClick={handleAuthClick}>
                        {isLoggedIn ? '로그아웃' : '로그인'}
                    </button>

                    <div className="nav-container">
                        <ul>
                            <li><a href="#" className="nav-item active">전체메뉴</a></li>
                            <li><a href="#" className="nav-item">국내 · 제주</a></li>
                            <li><a href="#" className="nav-item">해외여행</a></li>
                            <li><a href="#" className="nav-item">여행팁</a></li>
                            <li><a href="#" className="nav-item">고객센터</a></li>
                        </ul>
                        <div className="menu-icon">☰</div>
                    </div>
                </header>

                {/* 🏖️ 메인 콘텐츠 영역 (이미지 중앙 배치) */}
                <main style={{
                    backgroundImage: `url(${mainBackgroundImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    color: 'white',
                    // ... (다른 텍스트 속성 유지) ...

                    // ✅ 가로 너비를 꽉 채우기
                    width: '100vw',
                    boxSizing: 'border-box',

                    // ✅ 높이: (100vh)에서 푸터 높이(60px)만 제외하고,
                    //          헤더 높이(60px)는 마진으로 처리합니다.
                    height: 'calc(100vh - 123px)',

                    // ✅ 수정: 네비게이션 높이(60px)만큼 아래로 내리고,
                    //          틈을 없애기 위해 1px을 위로 당겨 겹치게 만듭니다.
                    //          (이전 60px 마진에 -1px을 더하는 효과)
                    marginTop: '-70px',

                    // 푸터 마진은 유지
                    marginBottom: '60px',

                    position: 'relative',
                    margin: 0,
                    padding: 0,
                }}>
                    <h2>여행선택의 목적지</h2>
                    <p>지금 떠나고 싶은 도시를 찾아보세요</p>
                </main>

                {/* 🧩 로그인 모달 컴포넌트 */}
                <LoginModal
                    isOpen={isModalOpen}
                    onClose={closeLoginModal}
                    onLoginSuccess={handleLoginSuccess}
                />

                {/* 👣 푸터 영역 */}
                <footer>
                    © 2025 여행의 모든 것. All rights reserved.
                </footer>
        </>
    );
};

export default LoginApp;