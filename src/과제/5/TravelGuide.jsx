import React, { useState } from 'react';
import './TravelGuide.css'; // CSS 파일 임포트

const ContactInfo = () => (
    <section className="contact-info">
        <h2>고객센터 연락처</h2>
        <p>📞 전화: 1600-0000 (평일 09:00 ~ 18:00)</p>
        <p>📧 이메일: help@naver.com</p>
        <p>🏢 주소: 서울시 폴리텍 인공지능능 123</p>
    </section>
);

const InquiryForm = () => {
    // 폼 상태 관리
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault(); // 페이지 새로고침 방지

        const { name, email, message } = formData;

        // 유효성 검사
        if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
            alert('모든 필수 정보를 입력해주세요.');
            return;
        }

        // 문의 처리 로직 (원래 jQuery의 기능 대체)
        alert('문의가 완료되었습니다!');

        // 폼 리셋
        setFormData({ name: '', email: '', message: '' });

        // 원본 코드의 페이지 이동 로직 (필요하면 주석 해제)
        // window.location.href = '숙제.html';
    };

    return (
        <section className="contact-box">
            <h2>1:1 문의</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">이름</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="이름을 입력하세요"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />

                <label htmlFor="email">이메일</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="답변 받을 이메일"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />

                <label htmlFor="message">문의 내용</label>
                <textarea
                    id="message"
                    name="message"
                    rows="5"
                    placeholder="문의하실 내용을 적어주세요."
                    value={formData.message}
                    onChange={handleChange}
                    required
                ></textarea>

                <button type="submit">문의하기</button>
            </form>
        </section>
    );
};

const TravelGuide = () => {
    return (
        <>
            <header>
                <h1>고객센터</h1>

            </header>

            <div className="container">
                <InquiryForm />

                <ContactInfo />
            </div>
        </>
    );
};

export default TravelGuide;