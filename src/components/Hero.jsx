import React from 'react';

export default function Hero() {
  return (
    <section className="hero-section" id="hero">
      <div className="hero-background"></div>
      <div className="container hero-container">
        <div className="hero-content">
          <span className="hero-tag">شعارنا الأمل ورسالتنا الحكمة في العلاج</span>
          <h1 className="hero-title">استعد حيويتك ونشاطك بدون ألم</h1>
          <p className="hero-desc">
            مرحباً بكم في مركز الحياة للعلاج الطبيعي والتأهيل. نعتمد على الخبرة العملية والسريرية العميقة، وأحدث ما توصلت إليه التكنولوجيا الطبية العالمية لنقدم لكم رعاية متكاملة تعيدكم إلى نمط حياتكم الصحي.
          </p>
          <div className="hero-btns">
            <a href="#booking" className="btn btn-accent btn-lg">
              <i className="fa-solid fa-calendar-check"></i> احجز استشارتك الآن
            </a>
            <a href="#services" className="btn btn-outline btn-lg">استكشف خدماتنا</a>
          </div>
          
          {/* Quick features */}
          <div className="hero-features">
            <div className="hero-feature-item">
              <i className="fa-solid fa-user-doctor"></i>
              <span>إشراف طبي استشاري</span>
            </div>
            <div className="hero-feature-item">
              <i className="fa-solid fa-microscope"></i>
              <span>أحدث أجهزة التأهيل</span>
            </div>
            <div className="hero-feature-item">
              <i className="fa-solid fa-hand-holding-heart"></i>
              <span>رعاية متكاملة وفردية</span>
            </div>
          </div>
        </div>
        
        <div className="hero-visual">
          <div className="hero-card-glow"></div>
          <div className="hero-card">
            <img src="/assets/logo_transparent.png?v=15.0" alt="مركز الحياة" className="hero-main-logo" />
            <div className="hero-card-info">
              <span className="badge">
                <i className="fa-solid fa-circle-check"></i> مركز معتمد
              </span>
              <h3>أفضل التقنيات الطبية</h3>
              <p>علاج مخصص وتأهيل مكثف لحالات العظام والأعصاب والعمود الفقري.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
