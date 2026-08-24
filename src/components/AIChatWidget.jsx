import React, { useState, useEffect, useRef } from 'react';

export default function AIChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      sender: 'bot',
      text: 'أهلاً بك في مركز الحياة للعلاج الطبيعي! 🌸 أنا مساعدك الذكي، كيف يمكنني مساعدتك اليوم؟ يمكنك كتابة سؤالك أو الاختيار من الأسئلة الشائعة أدناه:',
    },
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const chatMessagesEndRef = useRef(null);
  const widgetRef = useRef(null);

  // Scroll to bottom whenever messages or typing state changes
  useEffect(() => {
    if (chatMessagesEndRef.current) {
      chatMessagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isTyping]);

  // Click outside to close
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (widgetRef.current && !widgetRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  const handleToggle = (e) => {
    e.stopPropagation();
    setIsOpen(!isOpen);
  };

  const handleClose = (e) => {
    e.stopPropagation();
    setIsOpen(false);
  };

  const getBotResponse = (query) => {
    const q = query.toLowerCase();
    let reply = '';

    if (q.includes('مواعيد') || q.includes('ميعاد') || q.includes('توقيت') || q.includes('ساعة') || q.includes('شغالين')) {
      reply = 'مواعيد العمل الرسمية في مركز الحياة هي:\nمن السبت إلى الخميس: 11:00 صباحاً حتى 9:00 مساءً.\nيوم الجمعة: عطلة أسبوعية. 📅';
    } else if (q.includes('عنوان') || q.includes('مكان') || q.includes('موقع') || q.includes('شارع') || q.includes('ميدان') || q.includes('فين')) {
      reply = 'عنوان مركز الحياة بالتفصيل:\nشبين الكوم - ميدان شرف - شارع حتحوت - برج بانوراما - الدور الثاني. 📍\n\nويمكنك الضغط على كارت العنوان المعروض في الموقع لفتح الخريطة مباشرة في خرائط جوجل!';
    } else if (q.includes('حجز') || q.includes('احجز') || q.includes('موعد') || q.includes('كشف') || q.includes('استشارة')) {
      reply = 'يمكنك حجز موعد بكل سهولة عبر ملء استمارة الحجز في أسفل الموقع هنا، وسيقوم النظام فوراً بفتح محادثة واتساب لتأكيد الحجز معنا! ✍️';
    } else if (q.includes('رجال') || q.includes('سيدات') || q.includes('نساء') || q.includes('حريم') || q.includes('تقسيم') || q.includes('أيام') || q.includes('يوم')) {
      reply = 'تقسيم الأيام في مركز الحياة لضمان الخصوصية والراحة التامة:\n👤 *أيام الرجال:* السبت، الإثنين، الأربعاء.\n👩 *أيام السيدات:* الأحد، الثلاثاء، الخميس.';
    } else if (q.includes('تخصص') || q.includes('تخصصات') || q.includes('علاج') || q.includes('خدمات') || q.includes('حالات')) {
      reply = 'يقدم المركز تخصصات تأهيلية متكاملة:\n1️⃣ تأهيل العظام والمفاصل والخشونة.\n2️⃣ تأهيل الجلطات والشلل والأعصاب.\n3️⃣ علاج إصابات الملاعب والرباط الصليبي.\n4️⃣ علاج آلام العمود الفقري والانزلاق الغضروفي.\n5️⃣ الچيم الطبي والتأهيل الحركي. ⚕️';
    } else if (q.includes('سعر') || q.includes('تكلفة') || q.includes('فلوس') || q.includes('سعر الجلسة') || q.includes('بكم') || q.includes('بكام')) {
      reply = 'تختلف تكلفة الجلسات والبرامج التأهيلية بناءً على تشخيص الحالة والأجهزة الطبية المستخدمة. يسعدنا اتصالك بنا هاتفياً أو عبر واتساب على الرقم *01008154553* للاستعلام بالتفصيل! 💰';
    } else if (q.includes('منزل') || q.includes('بيت') || q.includes('البيت') || q.includes('زيارة منزلية') || q.includes('زيارات منزلية')) {
      reply = 'نعم، يوفر مركز الحياة خدمة الزيارات المنزلية المتميزة للحالات التي تجد صعوبة في الانتقال للمركز (مثل حالات الشلل، الجلطات الدماغية، وتأهيل ما بعد العمليات الكبرى). يتم تنسيق الزيارة وتجهيز الأخصائي بالأدوات اللازمة بعد التواصل معنا هاتفياً أو عبر الواتساب على الرقم *01008154553* لتقييم الحالة وتحديد المواعيد. 🏠';
    } else if (q.includes('أجيب') || q.includes('المستندات') || q.includes('أول مرة') || q.includes('أشعة') || q.includes('تحاليل') || q.includes('أوراق')) {
      reply = 'في زيارتك الأولى للمركز، يرجى إحضار:\n1️⃣ أي تقارير طبية سابقة أو أشعة (X-Ray, MRI) أو تحاليل متعلقة بالحالة.\n2️⃣ كارنيه التأمين الطبي الخاص بك وخطاب التحويل (إذا كنت متعاقداً مع إحدى جهات التأمين الطبي).\n3️⃣ ارتداء ملابس مريحة وفضفاضة تسهل الفحص والعلاج الطبيعي. 📋';
    } else if (q.includes('أطفال') || q.includes('طفل') || q.includes('شلل أطفال') || q.includes('تأهيل أطفال')) {
      reply = 'نعم، لدينا برامج متخصصة لتأهيل الأطفال، بما في ذلك حالات الشلل الدماغي للأطفال، تأخر النمو الحركي، تشوهات القوام، وغيرها من الحالات التي تتطلب علاجاً طبيعياً مكثفاً ومخصصاً للأطفال تحت إشراف طبي دقيق. 👶';
    } else if (q.includes('كم جلسة') || q.includes('مدة الجله') || q.includes('وقت الجلسة') || q.includes('مدة الجلسة') || q.includes('وقت الجلسه')) {
      reply = 'تختلف مدة الجلسة وعدد الجلسات المطلوبة بناءً على تشخيص الحالة وخطة العلاج المقررة من الاستشاري. غالباً ما تتراوح مدة الجلسة بين 45 إلى 90 دقيقة وتتضمن العلاج اليدوي، الأجهزة العلاجية، والتمارين العلاجية المخصصة. ⏱️';
    } else if (q.includes('تأمين') || q.includes('تعاقد') || q.includes('الشركات المتعاقد') || q.includes('بتروجاس') || q.includes('سكة حديد') || q.includes('فيصل') || q.includes('المحاسبات') || q.includes('نقابة')) {
      reply = 'نتعاقد مع العديد من شركات التأمين والمؤسسات الكبرى ومنها:\n- المركز الطبي لسكك حديد مصر (ERMC)\n- الأهلي للخدمات الطبية (AMC)\n- ليمتلس كير (Limitless Care)\n- جلوب ميد مصر (GlobeMed)\n- شركة بتروجاس (الغازات البترولية)\n- الرعاية الطبية لجامعة المنوفية\n- المصرية للخدمات الطبية (EGYMED)\n- لايف كير (Life Health Care)\n- نكست كير (Nextcare)\n- إيجي كير (EgyCare)\n- بنك فيصل الإسلامي المصري\n- الجهاز المركزي للمحاسبات... وغيرها الكثير! 💳';
    } else if (q.includes('تعقيم') || q.includes('نظافة') || q.includes('عدوى') || q.includes('كورونا') || q.includes('أمان')) {
      reply = 'نلتزم في مركز الحياة بأعلى معايير الجودة والسلامة الصحية ومكافحة العدوى. يتم تعقيم كافة الأجهزة والأسرة والأدوات بشكل دوري ومستمر عقب كل جلسة، ونستخدم مستلزمات أحادية الاستخدام لكل مريض لضمان بيئة علاجية آمنة وصحية تماماً. 🧼';
    } else if (q.includes('طاقم') || q.includes('دكاترة') || q.includes('أخصائي') || q.includes('دكتورة') || q.includes('مين في المركز') || q.includes('طبيب')) {
      reply = 'يعمل المركز تحت إشراف الاستشاري الدكتور *عبدالله قطب حماد* (استشاري العلاج الطبيعي والتأهيل)، ويضم طاقماً طبياً متميزاً يشمل الأخصائية الدكتورة *أشرقت ماجد العقاد* (أخصائية العلاج الطبيعي بمعهد الكبد ومتخصصة في علاج آلام الظهر والعمود الفقري وتأهيل ما بعد الجراحات والتورم الليمفاوي)، بالإضافة إلى نخبة من الأخصائيين والأخصائيات لضمان وتوفير الراحة والخصوصية التامة لجميع المرضى (رجال وسيدات). 👨‍⚕️👩‍⚕️';
    } else if (q.includes('تمارين') || q.includes('البيت') || q.includes('منزلية') || q.includes('لوحدي')) {
      reply = 'نعم! كجزء من خطتك العلاجية، سيقوم أخصائي العلاج الطبيعي بتدريبك على مجموعة من التمارين المنزلية المخصصة لتسريع تعافيك والحفاظ على التحسن الذي تحققه في الجلسات. يرجى الالتزام بالتعليمات وعدم أداء أي تمارين غير مقررة لك. 🏋️';
    } else if (q.includes('دكتور') || q.includes('عبدالله') || q.includes('عبد الله')) {
      reply = 'المركز يعمل تحت إشراف الاستشاري القدير الدكتور *عبدالله قطب حماد*، خبرة طويلة ورائدة في مجال العلاج الطبيعي والتأهيل الحركي باستخدام أحدث التقنيات الطبية العالمية. 👨‍⚕️';
    } else if (q.includes('رقم') || q.includes('تليفون') || q.includes('هاتف') || q.includes('اتصال') || q.includes('تواصل')) {
      reply = 'أرقام الاتصال الرسمية لمركز الحياة هي:\n📞 موبايل / واتساب: *01008154553*\n☎️ الخط الأرضي: *0482223403*\n\nيسعدنا تواصلك معنا في أي وقت!';
    } else {
      reply = 'أهلاً بك! 🧐 لم أفهم استفسارك بدقة.\n\nيمكنك الاختيار من الأسئلة الشائعة المقترحة، أو التواصل معنا مباشرة عبر واتساب العيادة على الرقم *01008154553*، أو عبر الخط الأرضي *0482223403* للإجابة على جميع أسئلتك فوراً!';
    }

    return reply;
  };

  const handleSendMessage = (text) => {
    if (!text.trim()) return;

    // Add User Message
    setMessages((prev) => [...prev, { sender: 'user', text }]);
    
    // Trigger Bot Typing Simulation
    setIsTyping(true);

    setTimeout(() => {
      setIsTyping(false);
      const reply = getBotResponse(text);
      setMessages((prev) => [...prev, { sender: 'bot', text: reply }]);
    }, 1000);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    handleSendMessage(inputValue);
    setInputValue('');
  };

  const quickOptions = [
    { label: '📅 مواعيد العمل', query: 'مواعيد العمل' },
    { label: '📍 عنوان المركز', query: 'عنوان المركز' },
    { label: '👥 تقسيم الأيام', query: 'أيام الرجال والسيدات' },
    { label: '⚕️ تخصصات المركز', query: 'التخصصات المتاحة' },
    { label: '✍️ طريقة الحجز', query: 'كيفية حجز موعد' },
  ];

  return (
    <div className="ai-chat-widget" id="aiChatWidget" ref={widgetRef}>
      {/* Chat Toggle Button */}
      <button 
        className="chat-toggle-btn" 
        id="chatToggleBtn" 
        aria-label="مساعد الذكاء الاصطناعي"
        onClick={handleToggle}
      >
        <span className="pulse-ring"></span>
        <i className="fa-solid fa-robot"></i>
      </button>

      {/* Chat Window */}
      <div className={`chat-window ${isOpen ? 'open' : ''}`} id="chatWindow">
        <div className="chat-header">
          <div className="chat-bot-profile">
            <img src="/assets/logo_icon_square.png" alt="شعار مركز الحياة" className="bot-avatar" />
            <div className="bot-info">
              <h4>مساعد الحياة الذكي</h4>
              <span className="bot-status">
                <span className="status-dot"></span>نشط الآن
              </span>
            </div>
          </div>
          <button className="chat-close-btn" id="chatCloseBtn" onClick={handleClose}>
            &times;
          </button>
        </div>
        
        <div className="chat-body">
          <div className="chat-messages" id="chatMessages">
            {messages.map((msg, idx) => (
              <div 
                className={`message ${msg.sender === 'user' ? 'user-msg' : 'bot-msg'}`} 
                key={idx}
              >
                <div 
                  className="msg-bubble" 
                  dangerouslySetInnerHTML={{ __html: msg.text.replace(/\n/g, '<br>') }}
                />
              </div>
            ))}

            {isTyping && (
              <div className="message bot-msg typing-msg">
                <div className="typing-indicator">
                  <span className="typing-dot"></span>
                  <span className="typing-dot"></span>
                  <span className="typing-dot"></span>
                </div>
              </div>
            )}
            <div ref={chatMessagesEndRef} />
          </div>
          
          {/* Quick Options */}
          <div className="quick-options" id="quickOptions">
            {quickOptions.map((opt, idx) => (
              <button 
                key={idx}
                className="quick-opt-btn" 
                onClick={() => handleSendMessage(opt.query)}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>
        
        <form className="chat-footer" id="chatInputForm" onSubmit={handleFormSubmit}>
          <input 
            type="text" 
            id="chatInputField" 
            placeholder="اكتب سؤالك هنا..." 
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            autoComplete="off" 
            required 
          />
          <button type="submit" className="chat-send-btn">
            <i className="fa-solid fa-paper-plane"></i>
          </button>
        </form>
      </div>
    </div>
  );
}
