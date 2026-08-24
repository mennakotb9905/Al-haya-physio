import React from 'react';

export default function MedicalStaff() {
  return (
    <section className="privacy-section" id="privacy-comfort">
      <div className="container privacy-container">
        <div className="privacy-content-area">
          <span className="section-tag">الخصوصية والراحة لمرضانا</span>
          <h2 className="privacy-title">رعاية تأهيلية بخصوصية تامة وأعلى مستويات الراحة</h2>
          <p className="privacy-text">
            نؤمن في مركز الحياة بأن سرعة الاستجابة للعلاج ترتبط ارتباطاً وثيقاً بمدى الراحة النفسية والخصوصية للمريض. لذلك، نوفر بيئة علاجية مخصصة ومريحة لجميع فئات مرضانا الكرام تحت إشراف نخبة من الأخصائيين والأخصائيات.
          </p>
          
          <div className="privacy-features">
            <div className="privacy-feature-item">
              <div className="privacy-feature-icon">
                <i className="fa-solid fa-user-doctor"></i>
              </div>
              <div className="privacy-feature-detail">
                <h4>طاقم طبي نسائي بالكامل (أخصائيات سيدات)</h4>
                <p>يتوفر بالمركز طبيبات وأخصائيات علاج طبيعي وتأهيل على أعلى مستوى لتقديم الرعاية الطبية الكاملة للسيدات والفتيات لضمان الخصوصية المطلقة.</p>
              </div>
            </div>
            
            
            <div className="privacy-feature-item" style={{ borderTopColor: 'var(--primary-color)' }}>
              <div className="privacy-feature-icon" style={{ color: 'var(--primary-color)' }}>
                <i className="fa-solid fa-calendar-check"></i>
              </div>
              <div className="privacy-feature-detail">
                <h4>تقسيم الأيام لراحة تامة</h4>
                <p>
                  نخصص أياماً كاملة حصرياً للرجال وأياماً كاملة مخصصة للسيدات لضمان الراحة التامة:
                  <br />
                  <strong>• أيام الرجال:</strong> السبت - الإثنين - الأربعاء.
                  <br />
                  <strong>• أيام السيدات:</strong> الأحد - الثلاثاء - الخميس.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
