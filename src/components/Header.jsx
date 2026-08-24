import React, { useState, useEffect } from 'react';

export default function Header({ activeSection }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const openDrawer = () => {
    setIsDrawerOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeDrawer = () => {
    setIsDrawerOpen(false);
    document.body.style.overflow = 'auto';
  };

  const navLinks = [
    { id: 'hero', label: 'الرئيسية' },
    { id: 'about', label: 'عن الاستشاري' },
    { id: 'services', label: 'خدماتنا' },
    { id: 'equipment', label: 'أجهزة المركز' },
    { id: 'partners', label: 'شركاء النجاح' },
    { id: 'contact', label: 'اتصل بنا' },
  ];

  return (
    <>
      {/* Scroll Up Button */}
      <div 
        className={`scroll-top ${showScrollTop ? 'show' : ''}`} 
        id="scrollTopBtn"
        onClick={handleScrollToTop}
        style={{ cursor: 'pointer' }}
      >
        <i className="fa-solid fa-arrow-up"></i>
      </div>

      {/* Navigation Header */}
      <header className={`main-header ${isScrolled ? 'scrolled' : ''}`} id="header">
        <div className="container header-container">
          <a href="#" className="logo-area">
            <img src="/assets/logo_icon.png?v=2" alt="شعار مركز الحياة" className="logo-img" />
            <img src="/assets/logo_text_arabic.png" alt="مركز الحياة للعلاج الطبيعي" className="logo-text-img" />
          </a>
          
          {/* Desktop Navigation */}
          <nav className="nav-menu" id="navMenu">
            <ul>
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a 
                    href={`#${link.id}`} 
                    className={`nav-link ${activeSection === link.id ? 'active' : ''}`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          
          {/* Action Button */}
          <div className="header-action">
            <a href="#booking" className="btn btn-primary btn-nav">احجز موعداً</a>
            <button 
              className="mobile-nav-toggle" 
              id="menuToggle" 
              aria-label="فتح القائمة"
              onClick={openDrawer}
            >
              <i className="fa-solid fa-bars"></i>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      <div className={`mobile-nav-drawer ${isDrawerOpen ? 'open' : ''}`} id="mobileDrawer">
        <div className="drawer-header">
          <a href="#" className="logo-area" onClick={closeDrawer}>
            <img src="/assets/logo_icon.png?v=2" alt="شعار مركز الحياة" className="logo-img" />
            <img src="/assets/logo_text_arabic.png" alt="مركز الحياة للعلاج الطبيعي" className="logo-text-img" />
          </a>
          <button className="drawer-close" id="drawerClose" onClick={closeDrawer}>
            <i className="fa-solid fa-xmark"></i>
          </button>
        </div>
        <nav className="drawer-nav">
          <ul>
            {navLinks.map((link) => (
              <li key={link.id}>
                <a 
                  href={`#${link.id}`} 
                  className="drawer-link"
                  onClick={closeDrawer}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="drawer-action">
            <a href="#booking" className="btn btn-primary btn-block" onClick={closeDrawer}>
              احجز موعداً الآن
            </a>
          </div>
        </nav>
      </div>
      
      {/* Drawer Overlay */}
      <div 
        className={`drawer-overlay ${isDrawerOpen ? 'open' : ''}`} 
        id="drawerOverlay"
        onClick={closeDrawer}
      ></div>
    </>
  );
}
