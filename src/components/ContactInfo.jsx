import React from 'react';

export default function ContactInfo() {
  return (
    <div className="contact-info-area" id="contact-info-container">
      <span className="section-tag">معلومات الاتصال</span>
      <h3>تفضل بزيارتنا في المركز</h3>
      <p>نسعد باستقبالكم وتقديم أفضل رعاية تأهيلية لكم ولعائلتكم.</p>
      
      <div className="contact-cards">
        <a href="tel:+201008154553" className="contact-card">
          <div className="c-icon"><i className="fa-solid fa-phone-volume"></i></div>
          <div className="c-details">
            <span>اتصل بنا هاتفياً (موبايل)</span>
            <strong className="phone-number">0100 815 4553</strong>
            <span>اضغط للاتصال المباشر</span>
          </div>
        </a>
        
        <a href="tel:+20482223403" className="contact-card">
          <div className="c-icon"><i className="fa-solid fa-phone"></i></div>
          <div className="c-details">
            <span>اتصل بنا هاتفياً (الخط الأرضي)</span>
            <strong className="phone-number">048 222 3403</strong>
            <span>اضغط للاتصال المباشر</span>
          </div>
        </a>
        
        <a href="https://maps.app.goo.gl/qMq4UcwnvvDh2XDu8?g_st=ac" target="_blank" rel="noopener noreferrer" className="contact-card">
          <div className="c-icon"><i className="fa-solid fa-location-dot"></i></div>
          <div className="c-details">
            <span>عنوان المركز</span>
            <strong>شبين الكوم - ميدان شرف - شارع حتحوت</strong>
            <span>برج بانوراما - الدور الثاني</span>
          </div>
        </a>

        <div className="contact-card">
          <div className="c-icon"><i className="fa-solid fa-clock"></i></div>
          <div className="c-details">
            <span>مواعيد العمل</span>
            <strong>السبت - الخميس: من 11:00 صباحاً حتى 9:00 مساءً</strong>
            <span style={{ fontWeight: 700, color: 'var(--accent-color)', fontSize: '0.85rem' }}>السبت والإثنين والأربعاء (رجال)</span>
            <span style={{ fontWeight: 700, color: 'var(--primary-color)', fontSize: '0.85rem' }}>الأحد والثلاثاء والخميس (سيدات)</span>
            <span>الجمعة: عطلة أسبوعية</span>
          </div>
        </div>
      </div>

      {/* Google Maps Placeholder (Premium Vector Design) */}
      <div className="map-placeholder">
        <div className="map-overlay">
          <i className="fa-solid fa-map-location-dot"></i>
          <h4>موقع المركز على الخريطة</h4>
          <p>شبين الكوم - ميدان شرف - شارع حتحوت - برج بانوراما</p>
          <a href="https://maps.app.goo.gl/qMq4UcwnvvDh2XDu8?g_st=ac" target="_blank" rel="noopener noreferrer" className="btn btn-outline btn-sm">
            <i className="fa-solid fa-location-arrow"></i> فتح في خرائط جوجل
          </a>
        </div>
      </div>
    </div>
  );
}
