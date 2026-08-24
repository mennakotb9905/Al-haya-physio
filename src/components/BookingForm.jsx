import React, { useState } from 'react';

export default function BookingForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    age: '',
    gender: '',
    service: '',
    otherService: '',
    message: '',
  });
  const [showToast, setShowToast] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    try {
      const { name, phone, age, gender, service, otherService, message } = formData;

      const serviceLabels = {
        ortho: 'تأهيل العظام والمفاصل',
        neuro: 'تأهيل الأعصاب والجلطات',
        sports: 'علاج إصابات الملاعب',
        spine: 'علاج العمود الفقري والانزلاق',
        gym: 'الچيم الطبي والتأهيل الحركي',
        other: 'أخرى',
      };
      
      let serviceText = serviceLabels[service] || 'غير محدد';
      if (service === 'other') {
        serviceText = `أخرى (${otherService.trim()})`;
      }
      const detailMessage = message.trim() || 'لا توجد ملاحظات إضافية';

      // Auto date generation in Arabic locale
      const today = new Date();
      const dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
      const todayFormatted = today.toLocaleDateString('ar-EG', dateOptions);

      // Format WhatsApp Message with clean text and no emojis
      const waMessage = `*طلب حجز موعد جديد*
*مركز الحياة للعلاج الطبيعي*
━━━━━━━━━━━━━━━━

*الاسم بالكامل:*
${name.trim()}

*رقم الهاتف:*
${phone.trim()}

*العمر (السن):*
${age} سنة

*الجنس:*
${gender}

*التخصص المطلوب:*
${serviceText}

*تاريخ التقديم:*
${todayFormatted}

*تفاصيل الحالة:*
${detailMessage}

━━━━━━━━━━━━━━━━`;

      // Encode message and create WhatsApp URL
      const encodedText = encodeURIComponent(waMessage);
      const whatsappUrl = `https://wa.me/201008154553?text=${encodedText}`;

      // Show Success Toast & reset form
      setShowToast(true);
      setFormData({
        name: '',
        phone: '',
        age: '',
        gender: '',
        service: '',
        otherService: '',
        message: '',
      });

      // Open WhatsApp link in a new window/tab
      window.open(whatsappUrl, '_blank');

      // Hide toast automatically after 10 seconds
      setTimeout(() => {
        setShowToast(false);
      }, 10000);

    } catch (err) {
      alert("حدث خطأ أثناء معالجة البيانات: " + err.message);
    }
  };

  const closeToast = () => {
    setShowToast(false);
  };

  return (
    <div className="booking-form-area" id="contact">
      <span className="section-tag">احجز الآن</span>
      <h3>طلب موعد واستشارة طبية</h3>
      <p>قم بملء الاستمارة أدناه وسيتواصل معك موظف الاستقبال لتأكيد موعدك.</p>
      
      <div className="booking-days-notice" style={{
        backgroundColor: 'var(--accent-light)',
        color: 'var(--primary-color)',
        padding: '12px 18px',
        borderRadius: 'var(--border-radius-md)',
        fontSize: '0.9rem',
        fontWeight: 700,
        marginBottom: '20px',
        borderRight: '4px solid var(--accent-color)',
        display: 'flex',
        flexDirection: 'column',
        gap: '4px',
        textAlign: 'right',
      }}>
        <span><i className="fa-solid fa-person" style={{ color: 'var(--primary-color)' }}></i> أيام الرجال: السبت، الإثنين، الأربعاء</span>
        <span><i className="fa-solid fa-person-dress" style={{ color: 'var(--accent-color)' }}></i> أيام السيدات: الأحد، الثلاثاء، الخميس</span>
      </div>
      
      <form id="appointmentForm" className="booking-form" onSubmit={handleSubmit}>
        <div className="form-grid">
          <div className="form-group">
            <label htmlFor="name"><i className="fa-solid fa-user"></i> الاسم بالكامل</label>
            <input 
              type="text" 
              id="name" 
              name="name" 
              placeholder="أدخل اسمك الثلاثي" 
              value={formData.name}
              onChange={handleChange}
              required 
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone"><i className="fa-solid fa-phone"></i> رقم الهاتف المحمول</label>
            <input 
              type="tel" 
              id="phone" 
              name="phone" 
              placeholder="مثال: 010XXXXXXXX" 
              value={formData.phone}
              onChange={handleChange}
              required 
            />
          </div>
          <div className="form-group">
            <label htmlFor="age"><i className="fa-solid fa-cake-candles"></i> العمر (السن)</label>
            <input 
              type="number" 
              id="age" 
              name="age" 
              placeholder="مثال: 30" 
              min="1" 
              max="120" 
              value={formData.age}
              onChange={handleChange}
              required 
            />
          </div>
          <div className="form-group">
            <label htmlFor="gender"><i className="fa-solid fa-venus-mars"></i> الجنس</label>
            <select 
              id="gender" 
              name="gender" 
              value={formData.gender}
              onChange={handleChange}
              required
            >
              <option value="" disabled>اختر الجنس...</option>
              <option value="ذكر">ذكر</option>
              <option value="أنثى">أنثى</option>
            </select>
          </div>
          <div className="form-group form-group-full">
            <label htmlFor="service"><i className="fa-solid fa-stethoscope"></i> التخصص المطلوب</label>
            <select 
              id="service" 
              name="service" 
              value={formData.service}
              onChange={handleChange}
              required
            >
              <option value="" disabled>اختر التخصص...</option>
              <option value="ortho">تأهيل العظام والمفاصل</option>
              <option value="neuro">تأهيل الأعصاب والجلطات</option>
              <option value="sports">علاج إصابات الملاعب</option>
              <option value="spine">علاج العمود الفقري والانزلاق</option>
              <option value="gym">الچيم الطبي والتأهيل الحركي</option>
              <option value="other">أخرى...</option>
            </select>
          </div>
          {formData.service === 'other' && (
            <div className="form-group form-group-full" style={{ animation: 'fadeIn 0.3s ease' }}>
              <label htmlFor="otherService"><i className="fa-solid fa-pen-clip"></i> اكتب التخصص أو الشكوى</label>
              <input 
                type="text" 
                id="otherService" 
                name="otherService" 
                placeholder="اكتب التخصص أو الحالة المرضية التي ترغب في علاجها..." 
                value={formData.otherService}
                onChange={handleChange}
                required 
              />
            </div>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="message"><i className="fa-solid fa-comment-medical"></i> تفاصيل أو ملاحظات عن الحالة</label>
          <textarea 
            id="message" 
            name="message" 
            rows="4" 
            placeholder="اكتب نبذة مختصرة عن شكواك أو ما تعاني منه..."
            value={formData.message}
            onChange={handleChange}
          ></textarea>
        </div>
        <button type="submit" className="btn btn-accent btn-block btn-lg">
          <span className="btn-text">إرسال طلب الحجز</span> <i className="fa-solid fa-paper-plane"></i>
        </button>
      </form>
      
      {/* Success Modal / Toast */}
      <div className={`toast-success ${showToast ? 'show' : ''}`} id="successToast">
        <div className="toast-icon"><i className="fa-solid fa-circle-check"></i></div>
        <div className="toast-content">
          <h4>تم فتح واتساب لتأكيد الحجز!</h4>
          <p>يرجى إرسال الرسالة الجاهزة في المحادثة، وسيرد عليك موظف الاستقبال لتأكيد موعدك.</p>
        </div>
        <button className="toast-close" onClick={closeToast}>&times;</button>
      </div>
    </div>
  );
}
