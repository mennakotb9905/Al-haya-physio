import React from 'react';

export default function Footer() {
  return (
    <footer className="main-footer">
      <div className="container footer-container">
        <div className="footer-col brand-col">
          <a href="#" className="logo-area">
            <img src="./assets/logo_icon.png?v=2" alt="شعار مركز الحياة" className="logo-img" />
            <img src="./assets/logo_text_arabic.png" alt="مركز الحياة للعلاج الطبيعي" className="logo-text-img" />
          </a>
          <p className="footer-desc">
            تحت إشراف الاستشاري د. عبدالله قطب حماد. ريادة في مجال العلاج الطبيعي والتأهيل الحركي باستخدام أحدث المعدات الطبية العالمية وأجود البرامج العلاجية والرياضية.
          </p>
          <div className="social-links">
            <a href="https://www.facebook.com/share/1H79gpp1Md/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <i className="fa-brands fa-facebook-f"></i>
            </a>
            <a href="https://wa.me/201008154553" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
              <i className="fa-brands fa-whatsapp"></i>
            </a>
            <a href="tel:+201008154553" aria-label="Phone">
              <i className="fa-solid fa-phone"></i>
            </a>
          </div>
        </div>
        
        <div className="footer-col links-col">
          <h4>روابط سريعة</h4>
          <ul>
            <li>
              <a href="#hero">
                <i className="fa-solid fa-chevron-left"></i> الرئيسية
              </a>
            </li>
            <li>
              <a href="#about">
                <i className="fa-solid fa-chevron-left"></i> عن الاستشاري
              </a>
            </li>
            <li>
              <a href="#services">
                <i className="fa-solid fa-chevron-left"></i> خدماتنا الطبية
              </a>
            </li>
            <li>
              <a href="#equipment">
                <i className="fa-solid fa-chevron-left"></i> الأجهزة المتطورة
              </a>
            </li>
            <li>
              <a href="#partners">
                <i className="fa-solid fa-chevron-left"></i> شركاء النجاح
              </a>
            </li>
          </ul>
        </div>
        
        <div className="footer-col contact-col">
          <h4>تواصل معنا</h4>
          <ul className="contact-list">
            <li>
              <i className="fa-solid fa-mobile-screen-button"></i>
              <a href="tel:+201008154553" className="phone-number">0100 815 4553 (موبايل)</a>
            </li>
            <li>
              <i className="fa-solid fa-phone"></i>
              <a href="tel:+20482223403" className="phone-number">048 222 3403 (أرضي)</a>
            </li>
            <li>
              <i className="fa-solid fa-envelope"></i>
              <a href="https://mail.google.com/mail/?view=cm&fs=1&to=abdullahhammad570@gmail.com" target="_blank" rel="noopener noreferrer">
                abdullahhammad570@gmail.com
              </a>
            </li>
            <li>
              <i className="fa-solid fa-location-dot"></i>
              <a href="https://maps.app.goo.gl/qMq4UcwnvvDh2XDu8?g_st=ac" target="_blank" rel="noopener noreferrer">
                شبين الكوم، ميدان شرف، شارع حتحوت، برج بانوراما - الدور الثاني
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
