import React from 'react';

export default function About() {
  return (
    <section className="about-section" id="about">
      <div className="container about-container">
        <div className="about-image-area">
          <div className="image-frame-bg"></div>
          <div className="image-frame">
            <img src="/assets/doctor_abdullah.jpg" alt="الاستشاري دكتور عبدالله قطب حماد" className="doctor-photo" />
          </div>
          <div className="doctor-badge">
            <i className="fa-solid fa-award"></i>
            <div>
              <strong>الاستشاري</strong>
              <span>عبدالله قطب حماد</span>
            </div>
          </div>
        </div>
        
        <div className="about-text-area">
          <span className="section-tag">مؤسس ومدير المركز</span>
          <h2 className="section-title">الاستشاري الدكتور عبدالله قطب حماد</h2>
          <div className="doctor-cv">
            <div className="cv-item">
              <div className="cv-icon"><i className="fa-solid fa-graduation-cap"></i></div>
              <div className="cv-detail">
                <h4>المؤهلات والخبرات الطبية</h4>
                <p>استشاري العلاج الطبيعي والتأهيل وعلاج آلام المفاصل والعمود الفقري.</p>
              </div>
            </div>
            <div className="cv-item">
              <div className="cv-icon"><i className="fa-solid fa-stethoscope"></i></div>
              <div className="cv-detail">
                <h4>التخصصات والخبرات</h4>
                <p>علاج الانزلاق الغضروفي بدون جراحة، تأهيل ما بعد جراحات العظام والمفاصل وتأهيل حالات الشلل والجلطات الدماغية.</p>
              </div>
            </div>
            <div className="cv-item">
              <div className="cv-icon"><i className="fa-solid fa-bullseye"></i></div>
              <div className="cv-detail">
                <h4>فلسفة العلاج</h4>
                <p>نؤمن بأن كل مريض هو حالة فريدة تستحق برنامجاً علاجياً متكاملاً يمزج بين العلاج اليدوي وأحدث التكنولوجيات والتدريبات التأهيلية.</p>
              </div>
            </div>
            <div className="cv-item">
              <div className="cv-icon"><i className="fa-solid fa-hand-sparkles"></i></div>
              <div className="cv-detail">
                <h4>معايير الجودة ومكافحة العدوى</h4>
                <p>نلتزم بتطبيق أعلى معايير الجودة والسلامة الصحية، من خلال التعقيم الفائق والمستمر لكافة الأجهزة والأسرة والأدوات لضمان بيئة علاجية آمنة وصحية تماماً.</p>
              </div>
            </div>
          </div>
          <a href="#booking" className="btn btn-primary">
            <i className="fa-solid fa-calendar-days"></i> احجز استشارة مع الدكتور
          </a>
        </div>
      </div>
    </section>
  );
}
