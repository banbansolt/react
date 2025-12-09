import React, { useState, useEffect } from 'react';
import './TravelAp.css'; // CSS 파일 불러오기

// ⭐️ 수정 완료: 경로를 '../imgs/'로 변경합니다.
// (TravelAp.jsx가 있는 src/과제/2/ 에서 src/과제/imgs/ 로 이동)
import img1 from '../imgs/travel7.jpg'; // 강원도
import img2 from '../imgs/travel6.jpg';   // 제주도
import img3 from '../imgs/travel5.jpg'; // 경상도
import img4 from '../imgs/travel8.jpg';     // 서울 & 근교


// 여행 카드 데이터 정의
const travelData = [
    // ✅ import한 이미지 변수를 사용
    { city: "파리, 프랑스", img: img1, description: "낭만의 도시, 파리에서 예술과 역사 속으로" },
    { city: "도쿄, 일본", img: img2, description: "전통과 현대가 공존하는 도시 도쿄." },
    { city: "영국, 런던", img: img3, description: "역사와 전통이 살아 숨 쉬는 도시, 런던." },
    { city: "미국, 워싱턴", img: img4, description: "미국의 수도, 워싱턴에서 정치와 문화를 경험하세요." },
];

// 모달 컴포넌트 분리 (생략)
const ApplicationModal = ({ isOpen, onClose, onConfirm, selectedCity }) => {
    const [name, setName] = useState('');
    const [date, setDate] = useState('');
    const [days, setDays] = useState('');

    const handleConfirm = () => {
        if (name.trim() === "" || date.trim() === "" || days.trim() === "") {
            alert("이름, 여행 희망 날짜, 여행 기간을 모두 입력해주세요.");
            return;
        }
        onConfirm(name, date, days);
        setName('');
        setDate('');
        setDays('');
    };

    const handleClose = () => {
        onClose();
        setName('');
        setDate('');
        setDays('');
        alert("여행 신청이 취소되었습니다.");
    };

    if (!isOpen) return null;

    return (
        <div id="applicationModal" className="modal" style={{ display: isOpen ? 'flex' : 'none' }}>
            <div className="modal-content">
                <h2 id="modalCityName">{selectedCity} 여행 신청</h2>
                <p>여행 신청을 위해 정보를 입력해주세요.</p>
                <label htmlFor="applicantName">이름:</label>
                <input type="text" id="applicantName" placeholder="이름을 입력하세요" value={name} onChange={(e) => setName(e.target.value)} />

                <label htmlFor="travelDate">여행 희망 날짜:</label>
                <input type="date" id="travelDate" value={date} onChange={(e) => setDate(e.target.value)} />

                <label htmlFor="travelDays">여행 기간 (일):</label>
                <input type="number" id="travelDays" placeholder="예: 3" min="1" value={days} onChange={(e) => setDays(e.target.value)} />

                <div className="modal-buttons">
                    <button className="confirm" onClick={handleConfirm}>신청</button>
                    <button className="cancel" onClick={handleClose}>취소</button>
                </div>
            </div>
        </div>
    );
};

// 메인 컴포넌트
const TravelAp = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedCity, setSelectedCity] = useState('');

    const handleCardClick = (city) => {
        setSelectedCity(city);
        setIsModalOpen(true);
    };

    const handleConfirmApplication = (name, date, days) => {
        alert(`[${selectedCity} 여행 신청 완료]\n이름: ${name}\n날짜: ${date}\n기간: ${days}일\n담당자가 곧 연락드릴 것입니다.`);
        setIsModalOpen(false);
    };

    const handleCancelApplication = () => {
        setIsModalOpen(false);
    };

    useEffect(() => {
        const handleOutsideClick = (event) => {
            const modalElement = document.getElementById('applicationModal');
            if (modalElement && event.target === modalElement) {
                handleCancelApplication();
                alert("여행 신청이 취소되었습니다.");
            }
        };

        window.addEventListener('click', handleOutsideClick);
        return () => window.removeEventListener('click', handleOutsideClick);
    }, []);

    return (
        <>
            {/* 🧭 헤더/네비게이터 영역 */}
            <header>
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

            {/* 🏖️ 메인 콘텐츠 영역: Hero 섹션 */}
            <main
                style={{
                    backgroundImage: `url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    color: 'white',
                    width: '100vw',
                    boxSizing: 'border-box',
                    height: 'calc(100vh - 10px)',
                    marginTop: '0',
                    marginBottom: '0',
                    position: 'relative',
                    margin: 0,
                    padding: 0,
                }}
            >
                <h1>여행의 모든 것</h1>
                <p>지금 떠나고 싶은 도시를 찾아보세요!</p>
            </main>

            {/* 카드를 동적으로 렌더링 */}
            <section className="cards">
                {travelData.map((item, index) => (
                    <div className="card" key={index} data-city={item.city} onClick={() => handleCardClick(item.city)}>
                        {/* item.img는 이제 import된 이미지 파일 경로입니다. */}
                        <img src={item.img} alt={item.city} />
                        <div className="card-content">
                            <h3>{item.city}</h3>
                            <p>{item.description}</p>
                        </div>
                    </div>
                ))}
            </section>

            {/* 모달 */}
            <ApplicationModal
                isOpen={isModalOpen}
                onClose={handleCancelApplication}
                onConfirm={handleConfirmApplication}
                selectedCity={selectedCity}
            />
        </>
    );
};
export default TravelAp;