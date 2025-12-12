import React, { useState } from 'react';
import LoginModal from './LoginModal';
import './LoginApp.css';

// ✅ 1. back.jpg 이미지를 import 합니다.
import mainBackgroundImage from '../imgs/back.jpg';

// 🧭 네비게이션 데이터 및 경로 정의 (외부에 정의되어 있다고 가정)
const navItems = [
    { name: "전체메뉴", path: "/LoginApp" },
    { name: "국내 · 제주", path: "/TravelApp" },
    { name: "해외여행", path: "/TravelAp" },
    { name: "여행팁", path: "/TravelTip" },
    { name: "고객센터", path: "/TravelGuide" },
];

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

    // 🗺️ 네비게이션 이동 처리 함수 (새로 추가)
    const handleNavigation = (path, e) => {
        e.preventDefault(); // 기본 <a> 태그 동작 방지

        // 현재 브라우저의 URL을 변경하여 이동합니다.
        // 실제로는 React Router의 Link나 useNavigate를 사용하는 것이 권장됩니다.
        window.location.href = path;
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
                        {/* ⭐️ 수정: navItems 배열을 map으로 순회하며 동적으로 렌더링 */}
                        {navItems.map((item) => (
                            <li key={item.name}>
                                <a
                                    href={item.path}
                                    // ⭐️ 클릭 시 handleNavigation 함수 호출
                                    onClick={(e) => handleNavigation(item.path, e)}
                                    className={`nav-item ${item.name === "전체메뉴" ? "active" : ""}`}
                                >
                                    {item.name}
                                </a>
                            </li>
                        ))}
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
                width: '100vw',
                boxSizing: 'border-box',
                height: 'calc(100vh - 123px)',
                marginTop: '60px',
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