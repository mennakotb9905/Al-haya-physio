import React, { useState } from 'react';

export default function Equipment() {
  const [activeTab, setActiveTab] = useState('shockwave');

  return (
    <section className="equipment-section" id="equipment">
      <div className="container">
        <div className="section-header text-center">
          <span className="section-tag">التجهيزات الطبية</span>
          <h2 className="section-title">أحدث الأجهزة الطبية والتأهيلية عالمياً</h2>
          <p className="section-subtitle">نستعين بأفضل التكنولوجيات الطبية لضمان دقة العلاج وسرعة الاستجابة والشفاء التام لحالاتكم.</p>
          <div className="section-divider mx-auto"></div>
        </div>

        {/* Tab Buttons */}
        <div className="equipment-tabs">
          <button 
            className={`tab-btn ${activeTab === 'shockwave' ? 'active' : ''}`}
            onClick={() => setActiveTab('shockwave')}
          >
            <i className="fa-solid fa-bolt-lightning"></i> الموجات التصادمية (Shockwave)
          </button>
          <button 
            className={`tab-btn ${activeTab === 'cpm' ? 'active' : ''}`}
            onClick={() => setActiveTab('cpm')}
          >
            <i className="fa-solid fa-rotate"></i> أجهزة تحريك المفاصل (CPM)
          </button>
          <button 
            className={`tab-btn ${activeTab === 'lumbar_traction' ? 'active' : ''}`}
            onClick={() => setActiveTab('lumbar_traction')}
          >
            <i className="fa-solid fa-arrows-up-down"></i> شد الفقرات القَطَنية (Traction)
          </button>
          <button 
            className={`tab-btn ${activeTab === 'laser_therapy' ? 'active' : ''}`}
            onClick={() => setActiveTab('laser_therapy')}
          >
            <i className="fa-solid fa-sun"></i> الليزر العلاجي (Laser)
          </button>
          <button 
            className={`tab-btn ${activeTab === 'dynatron_432' ? 'active' : ''}`}
            onClick={() => setActiveTab('dynatron_432')}
          >
            <i className="fa-solid fa-bolt"></i> العلاج الكهربائي (Electrotherapy)
          </button>
          <button 
            className={`tab-btn ${activeTab === 'gym' ? 'active' : ''}`}
            onClick={() => setActiveTab('gym')}
          >
            <i className="fa-solid fa-dumbbell"></i> الصالة الرياضية والچيم الطبي
          </button>
        </div>

        {/* Tab Content */}
        <div className="tab-content-container">
          {/* Shockwave Tab */}
          <div className={`tab-pane ${activeTab === 'shockwave' ? 'active' : ''}`} id="shockwave">
            <div className="eq-details">
              <div className="eq-image-box">
                <img src="./assets/shockwave_banner.png?v=2" alt="جهاز الموجات التصادمية" className="eq-img" />
                <span className="eq-badge">Shockwave Therapy</span>
              </div>
              <div className="eq-info-box">
                <h3>علاج الألم بالموجات التصادمية (Shockwave Therapy)</h3>
                <p className="eq-desc">
                  يعتبر علاج الألم بالموجات التصادمية من أحدث الطرق غير الجراحية الفعالة في التخلص من الآلام المزمنة للجهاز العضلي والحركي. يعمل الجهاز على إرسال نبضات صوتية عالية الطاقة للمناطق المصابة لتحفيز الدورة الدموية وتسريع عملية التئام الأنسجة.
                </p>
                <ul className="eq-benefits">
                  <li><i className="fa-solid fa-circle-check"></i> فعال جداً لعلاج الشوكة العظمية (ألم كعب القدم).</li>
                  <li><i className="fa-solid fa-circle-check"></i> علاج التهابات الأوتار المزمنة وتكلسات الكتف.</li>
                  <li><i className="fa-solid fa-circle-check"></i> بديل آمن وفعال للتدخل الجراحي وحقن الكورتيزون.</li>
                  <li><i className="fa-solid fa-circle-check"></i> نتائج ملموسة تظهر من الجلسات الأولى للعلاج.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* CPM Tab */}
          <div className={`tab-pane ${activeTab === 'cpm' ? 'active' : ''}`} id="cpm">
            {/* Device 1: Knee CPM */}
            <div className="eq-details" style={{ marginBottom: '50px', borderBottom: '1px solid rgba(25, 49, 67, 0.08)', paddingBottom: '50px' }}>
              <div className="eq-image-box">
                <img src="./assets/cpm_knee_banner.png?v=2" alt="جهاز تحريك مفصل الركبة CPM" className="eq-img" />
                <span className="eq-badge">Knee CPM</span>
              </div>
              <div className="eq-info-box">
                <h3>جهاز CPM للركبة والفخذ (Knee CPM)</h3>
                <p className="eq-desc">
                  يستخدم لتحسين المدى الحركي لمفصل الركبة بشكل آلي وتدريجي بعد عمليات تغيير المفصل أو إعادة بناء الرباط الصليبي، مما يعيد الحركة للمفصل دون أدنى مجهود من المريض لتفادي المضاعفات.
                </p>
                <ul className="eq-benefits">
                  <li><i className="fa-solid fa-circle-check"></i> فعال جداً بعد عمليات تغيير مفصل الركبة بالكامل.</li>
                  <li><i className="fa-solid fa-circle-check"></i> أساسي في مرحلة تأهيل حالات إعادة بناء الرباط الصليبي.</li>
                  <li><i className="fa-solid fa-circle-check"></i> حركة سلبية آمنة ومريحة للمريض دون بذل جهد عضلي.</li>
                  <li><i className="fa-solid fa-circle-check"></i> يمنع تماماً تيبس المفصل والتصاق الأنسجة المحيطة به.</li>
                </ul>
              </div>
            </div>

            {/* Device 2: Arm/Shoulder CPM */}
            <div className="eq-details">
              <div className="eq-image-box">
                <img src="./assets/cpm_arm_banner.png?v=2" alt="جهاز تحريك مفصل الكتف والذراع CPM" className="eq-img" />
                <span className="eq-badge">Shoulder CPM</span>
              </div>
              <div className="eq-info-box">
                <h3>جهاز CPM للكتف والمرفق (Shoulder & Elbow CPM)</h3>
                <p className="eq-desc">
                  يساعد في استعادة الحركة الطبيعية لمفاصل الكتف، الذراع، والمرفق، ويمنع التجمد والتيبس بعد الجراحات الدقيقة أو الكسور المعقدة.
                </p>
                <ul className="eq-benefits">
                  <li><i className="fa-solid fa-circle-check"></i> يعيد الحركة الطبيعية لمفاصل الكتف، الذراع، والمرفق.</li>
                  <li><i className="fa-solid fa-circle-check"></i> أساسي لتفادي حالة "الكتف المتجمد" بعد جراحات الأوتار.</li>
                  <li><i className="fa-solid fa-circle-check"></i> يقلل التورم ويسرع من عملية التعافي بشكل آمن تماماً.</li>
                  <li><i className="fa-solid fa-circle-check"></i> يمنح حركة دقيقة ومضبوطة مسبقاً بما يناسب حالة المريض.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Gym Tab */}
          <div className={`tab-pane ${activeTab === 'gym' ? 'active' : ''}`} id="gym">
            {/* Top Info Row */}
            <div className="eq-details" style={{ marginBottom: '40px', borderBottom: '1px solid rgba(25, 49, 67, 0.08)', paddingBottom: '40px' }}>
              <div className="gym-intro-text" style={{ gridColumn: 'span 2' }}>
                <h3 style={{ fontSize: '1.8rem', color: 'var(--primary-color)', marginBottom: '15px' }}>صالة التأهيل والتمارين العلاجية (الچيم الطبي)</h3>
                <p className="eq-desc" style={{ fontSize: '1.05rem', lineHeight: '1.8', color: 'var(--text-dark)', marginBottom: '25px' }}>
                  تضم صالتنا الرياضية الطبية أحدث الأجهزة والمعدات المصممة خصيصاً لأغراض العلاج الطبيعي والتأهيل الحركي، حيث يتم تدريب وتأهيل المرضى تحت إشراف طبي مباشر لتطبيق برامج علاجية مخصصة لكل حالة لضمان استعادة كامل النشاط الحركي بأمان وفعالية.
                </p>
                <div className="gym-features-list" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.95rem' }}>
                    <i className="fa-solid fa-circle-check" style={{ color: 'var(--accent-color)', fontSize: '1.2rem' }}></i> إشراف طبي مباشر ومستمر أثناء ممارسة التمارين.
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.95rem' }}>
                    <i className="fa-solid fa-circle-check" style={{ color: 'var(--accent-color)', fontSize: '1.2rem' }}></i> برامج مخصصة لتقوية العضلات بعد الجراحات والكسور.
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.95rem' }}>
                    <i className="fa-solid fa-circle-check" style={{ color: 'var(--accent-color)', fontSize: '1.2rem' }}></i> أجهزة متخصصة لا تسبب أي إجهاد أو ضغط زائد على المفاصل.
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.95rem' }}>
                    <i className="fa-solid fa-circle-check" style={{ color: 'var(--accent-color)', fontSize: '1.2rem' }}></i> تقييم ومتابعة دورية لقياس مدى تحسن القوة والتوازن.
                  </div>
                </div>
              </div>
            </div>

            {/* Equipment Cards Grid */}
            <h4 style={{ fontSize: '1.4rem', color: 'var(--primary-color)', marginBottom: '25px', textAlign: 'center', position: 'relative' }}>
              معدات وأجهزة الچيم الطبي والتأهيل الحركي
            </h4>
            
            <div className="gym-equipment-grid">
              {/* Card 1: Treadmill */}
              <div className="gym-eq-card">
                <div className="gym-eq-img-wrapper">
                  <img src="./assets/gym/unnamed.png" alt="جهاز السير الطبي" />
                </div>
                <div className="gym-eq-content">
                  <h5>جهاز السير الطبي (Treadmill)</h5>
                  <p>لإعادة تأهيل المشي وتحسين اللياقة القلبية والتنفسية وقوة التحمل بشكل تدريجي تحت الملاحظة.</p>
                </div>
              </div>
              
              {/* Card 2: Bike */}
              <div className="gym-eq-card">
                <div className="gym-eq-img-wrapper">
                  <img src="./assets/gym/upright-exercise-bike.jpg" alt="الدراجة الطبية المتخصصة" />
                </div>
                <div className="gym-eq-content">
                  <h5>الدراجة الطبية (Rehab Bike)</h5>
                  <p>لتحسين مدى حركة مفصلي الركبة والفخذ وتقوية العضلات المحيطة بهما دون التسبب في أي ضغط زائد على الغضاريف.</p>
                </div>
              </div>
              
              {/* Card 3: Multi Gym */}
              <div className="gym-eq-card">
                <div className="gym-eq-img-wrapper">
                  <img src="./assets/gym/1847e322-8b4a-4b26-9dc0-15c04d1ed695-thumbnail-1000x1000-70.jpeg" alt="جهاز التأهيل الحركي المتكامل" />
                </div>
                <div className="gym-eq-content">
                  <h5>جهاز التأهيل الحركي (Multi-Gym)</h5>
                  <p>لتمارين المقاومة الطبية والتأهيل الحركي وتقوية عضلات الظهر، الذراعين، والأطراف السفلية لزيادة القوة العضلية.</p>
                </div>
              </div>
              
              {/* Card 4: Balance */}
              <div className="gym-eq-card">
                <div className="gym-eq-img-wrapper">
                  <img src="./assets/gym/images (4).jfif" alt="أدوات التوازن والتأهيل الحركي" />
                </div>
                <div className="gym-eq-content">
                  <h5>أدوات التوازن والتأهيل (Balance Tools)</h5>
                  <p>لتحسين التوافق العضلي العصبي واستعادة الثبات الحركي ومنع حالات السقوط المتكرر لدى كبار السن وحالات الأعصاب.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Lumbar Traction Tab */}
          <div className={`tab-pane ${activeTab === 'lumbar_traction' ? 'active' : ''}`} id="lumbar_traction">
            <div className="eq-details">
              <div className="eq-image-box">
                <img src="./assets/lumbar_traction.jpg" alt="جهاز شد الفقرات القطنية Lumbar Traction" className="eq-img" />
                <span className="eq-badge">Lumbar Traction</span>
              </div>
              <div className="eq-info-box">
                <h3>جهاز شد الفقرات القَطَنية (Lumbar Traction)</h3>
                <p className="eq-desc">
                  يعمل على شد أسفل الظهر بقوة ومدة يتم التحكم فيها بدقة لتخفيف آلام الظهر وتقليل الضغط على الفقرات والأعصاب.
                </p>
                <ul className="eq-benefits">
                  <li><i className="fa-solid fa-circle-check"></i> يقلل الضغط بشكل فعال على الفقرات والأعصاب المضغوطة.</li>
                  <li><i className="fa-solid fa-circle-check"></i> يساعد في تخفيف آلام أسفل الظهر الحادة والمزمنة وعلاج عرق النسا.</li>
                  <li><i className="fa-solid fa-circle-check"></i> يعمل على شد الظهر بشكل آلي وتدريجي آمن ومريح تماماً للمريض.</li>
                  <li><i className="fa-solid fa-circle-check"></i> يحسن مرونة العمود الفقري ويسهل الحركة الطبيعية للمريض.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Laser Therapy Tab */}
          <div className={`tab-pane ${activeTab === 'laser_therapy' ? 'active' : ''}`} id="laser_therapy">
            <div className="eq-details">
              <div className="eq-image-box">
                <img src="./assets/laser_therapy.png" alt="جهاز الليزر العلاجي LightForce" className="eq-img" />
                <span className="eq-badge">LightForce Laser</span>
              </div>
              <div className="eq-info-box">
                <h3>جهاز الليزر العلاجي للأنسجة العميقة (LightForce Therapy Laser)</h3>
                <p className="eq-desc">
                  يعتمد الجهاز على تقنية العلاج بالليزر عالي الطاقة (Deep-Tissue Laser Therapy) لاختراق الأنسجة العميقة وتحفيز عمليات الشفاء الطبيعية وتقليل الألم والالتهابات بشكل سريع وفعال.
                </p>
                <ul className="eq-benefits">
                  <li><i className="fa-solid fa-circle-check"></i> يخترق الأنسجة العميقة لتخفيف آلام العضلات والمفاصل بشكل فوري.</li>
                  <li><i className="fa-solid fa-circle-check"></i> يقلل الالتهابات والتورم حول الأوتار والأربطة المصابة بشكل فعال.</li>
                  <li><i className="fa-solid fa-circle-check"></i> يحفز خلايا الجسم ويسرع من عملية التئام الأنسجة ذاتياً وبأمان.</li>
                  <li><i className="fa-solid fa-circle-check"></i> ممتاز لعلاج آلام الرقبة والظهر، التهابات الأوتار، والإصابات الرياضية.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Electrotherapy (Dynatron 432) Tab */}
          <div className={`tab-pane ${activeTab === 'dynatron_432' ? 'active' : ''}`} id="dynatron_432">
            <div className="eq-details">
              <div className="eq-image-box">
                <img src="./assets/dynatron_432.png" alt="جهاز العلاج الكهربائي Dynatron 432" className="eq-img" />
                <span className="eq-badge">Dynatron 432</span>
              </div>
              <div className="eq-info-box">
                <h3>جهاز العلاج الكهربائي (Dynatron 432 Electrotherapy)</h3>
                <p className="eq-desc">
                  يعتبر جهاز Dynatron 432 من الأجهزة الرائدة في مجال العلاج الكهربائي، حيث يستخدم تيارات كهربائية علاجية متعددة لتحفيز الأعصاب والعضلات وتخفيف الألم وتحسين الأداء الحركي.
                </p>
                <ul className="eq-benefits">
                  <li><i className="fa-solid fa-circle-check"></i> يستخدم تيارات علاجية متطورة لتسكين الآلام المفصلية والعضلية.</li>
                  <li><i className="fa-solid fa-circle-check"></i> يساعد في ارتخاء التشنجات العضلية وتحفيز العضلات الضعيفة.</li>
                  <li><i className="fa-solid fa-circle-check"></i> ينشط الدورة الدموية في الأنسجة المصابة لتسريع عملية التعافي الحركي.</li>
                  <li><i className="fa-solid fa-circle-check"></i> يحتوي على قنوات تحفيز متعددة تمنح الأخصائي تحكماً كاملاً ونتاجاً دقيقاً.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
