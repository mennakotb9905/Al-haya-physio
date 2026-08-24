import React from 'react';

export default function Services() {
  const serviceItems = [
    {
      icon: 'fa-solid fa-bone',
      title: 'تأهيل العظام والمفاصل',
      desc: 'علاج وتأهيل خشونة الركبة والمفاصل، تأهيل ما بعد العمليات الجراحية كتركيب المفاصل الصناعية وإصلاح الأربطة والأوتار.',
    },
    {
      icon: 'fa-solid fa-brain',
      title: 'تأهيل الأعصاب والجلطات',
      desc: 'برامج تأهيلية متكاملة لمرضى السكتات الدماغية والجلطات، شلل الأعصاب، الشلل الرعاش (باركنسون) وإصابات الحبل الشوكي.',
    },
    {
      icon: 'fa-solid fa-person-running',
      title: 'علاج إصابات الملاعب',
      desc: 'تأهيل الرياضيين بعد تمزق الأربطة (الرباط الصليبي)، التواء الكاحل، إصابات العضلات، وإعادتهم للملاعب بكفاءة وأمان.',
    },
    {
      icon: 'fa-solid fa-align-center',
      title: 'علاج العمود الفقري والانزلاق',
      desc: 'تخفيف آلام الظهر والرقبة وعلاج الانزلاق الغضروفي (عرق النسا) بوسائل علاجية غير جراحية متقدمة وتمارين تقوية الظهر.',
    },
    {
      icon: 'fa-solid fa-dumbbell',
      title: 'الچيم الطبي والـتأهيل الحركي',
      desc: 'صالة رياضية متكاملة مجهزة بأجهزة طبية لتقوية العضلات، وتحسين التوازن، ورفع الكفاءة البدنية تحت إشراف طبي دقيق.',
    },
  ];

  return (
    <section className="services-section" id="services">
      <div className="container">
        <div className="section-header text-center">
          <span className="section-tag">خدماتنا الطبية</span>
          <h2 className="section-title">تخصصات علاجية متكاملة</h2>
          <p className="section-subtitle">نقدم خدمات تأهيلية متطورة مصممة خصيصاً لتلبية احتياجاتكم وتحقيق الشفاء التام بأسرع وقت.</p>
          <div className="section-divider mx-auto"></div>
        </div>
        
        <div className="services-grid">
          {serviceItems.map((item, idx) => (
            <div className="service-card" key={idx}>
              <div className="service-icon">
                <i className={item.icon}></i>
              </div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
              <a href="#booking" className="service-link">
                احجز موعداً <i className="fa-solid fa-arrow-left"></i>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
