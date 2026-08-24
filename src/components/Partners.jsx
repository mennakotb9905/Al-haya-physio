import React from 'react';

export default function Partners() {
  const partnersList = [
    { src: '/assets/companies/877.jpg', alt: 'المركز الطبي لسكك حديد مصر (ERMC)' },
    { src: '/assets/companies/ahly.jfif', alt: 'الأهلي للخدمات الطبية (AMC)' },
    { src: '/assets/companies/cairo.jfif', alt: 'ليمتلس كير (Limitless Care)' },
    { src: '/assets/companies/globmed.webp', alt: 'جلوب ميد مصر (GlobeMed)' },
    { src: '/assets/companies/images (2).jfif', alt: 'شركة بتروجاس (الغازات البترولية)' },
    { src: '/assets/companies/images.jfif', alt: 'الرعاية الطبية لجامعة المنوفية' },
    { src: '/assets/companies/Img_logo.jpg', alt: 'المصرية للخدمات الطبية (EGYMED)' },
    { src: '/assets/companies/life care.jfif', alt: 'لايف كير (Life Health Care)' },
    { src: '/assets/companies/medright.png', alt: 'ميدرايت للخدمات الطبية (MedRight)' },
    { src: '/assets/companies/next care.png', alt: 'نكست كير (Nextcare)' },
    { src: '/assets/companies/omega.jfif', alt: 'أوميجا كير (Omega Care)' },
    { src: '/assets/companies/smart.png', alt: 'سمارت للخدمات الطبية (Smart Care)' },
    { src: '/assets/companies/unnamed (1).jpg', alt: 'إيجي كير للخدمات الطبية (EgyCare)' },
    { src: '/assets/companies/unnamed.jpg', alt: 'العربي للتأمين (ElAraby Insurance)' },
    { src: '/assets/companies/wadi elneel.jfif', alt: 'شركة وادي النيل (Wadi El-Neel)' },
    { src: '/assets/companies/الجهاز-المركزي-للمحاسبات.jpg', alt: 'الجهاز المركزي للمحاسبات' },
    { src: '/assets/companies/بنك_فيصل_الاسلامي_المصري.png', alt: 'بنك فيصل الإسلامي المصري' },
    { src: '/assets/companies/ةثيه لخمي.jfif', alt: 'ميدي جولد للخدمات الطبية (MediGold)' },
  ];

  // We render the list twice to create a seamless infinite scroll loop, matching the old duplication script.
  const marqueeItems = [...partnersList, ...partnersList];

  return (
    <section className="partners-section" id="partners">
      <div className="container">
        <div className="section-header text-center">
          <span className="section-tag">شركاء النجاح</span>
          <h2 className="section-title">الجهات والشركات المتعاقد معها</h2>
          <p className="section-subtitle">
            لتسهيل تقديم الخدمة الطبية لمرضانا الكرام، نتعاون مع كبرى شركات التأمين الطبي والمؤسسات الحكومية والخاصة بمصر.
          </p>
          <div className="section-divider mx-auto"></div>
        </div>

        {/* Auto Scrolling Marquee Container */}
        <div className="marquee-wrapper">
          <div className="marquee" id="partnersMarquee">
            {marqueeItems.map((partner, idx) => (
              <div className="partner-logo-card" key={idx}>
                <img src={partner.src} alt={partner.alt} />
                <span>{partner.alt}</span>
              </div>
            ))}
          </div>
        </div>
        
        <p className="partners-note text-center">
          * تيسيراً على مرضانا الكرام، نقوم بعمل واستخراج الموافقات الطبية إما عن طريق البريد الإلكتروني أو عبر النظام الإلكتروني (Online System).
        </p>
      </div>
    </section>
  );
}
