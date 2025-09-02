import './style.css'

// 初始化应用
document.addEventListener('DOMContentLoaded', () => {
  const app = document.querySelector('#app');
  
  // 添加页面样式增强质感
  const style = document.createElement('style');
  style.textContent = `
    /* 全局样式 */
    body {
      background: linear-gradient(135deg, #f5f7fa 0%, #e4edf9 100%);
      min-height: 100vh;
      font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      color: #333;
      line-height: 1.6;
    }
    
    /* 增强导航栏质感 */
    .navbar {
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
      background-color: rgba(255, 255, 255, 0.95);
      backdrop-filter: blur(10px);
      border-bottom: 1px solid rgba(0, 0, 0, 0.05);
      transition: all 0.3s ease;
      position: sticky;
      top: 0;
      z-index: 1000;
    }
    
    .navbar:hover {
      box-shadow: 0 6px 25px rgba(0, 0, 0, 0.12);
    }
    
    /* 增强按钮质感 */
    button {
      transition: all 0.3s ease;
      border-radius: 8px;
      transform: translateY(0);
    }
    
    button:hover {
      transform: translateY(-2px);
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
    }
    
    button:active {
      transform: translateY(0);
    }
    
    /* View All Properties 按钮样式 */
    .view-all-btn {
      background-color: #2563eb; /* 与统计数字相同的蓝色 */
      color: white;
      transition: all 0.3s ease;
      border-radius: 8px;
      transform: translateY(0);
    }
    
    .view-all-btn:hover {
      background-color: #1d4ed8;
      transform: translateY(-2px);
      box-shadow: 0 5px 15px rgba(37, 99, 235, 0.3);
    }
    
    .view-all-btn:active {
      transform: translateY(0);
    }
    
    /* 增强卡片质感 */
    .property-card {
      transition: all 0.4s ease;
      border-radius: 12px;
      overflow: hidden;
      background-color: white;
      box-shadow: 0 8px 30px rgba(0, 0, 0, 0.08);
    }
    
    .property-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 12px 40px rgba(0, 0, 0, 0.12);
    }
    
    /* 增强表单元素 */
    input, textarea {
      background-color: white;
      border: 1px solid #e1e5e9;
      border-radius: 8px;
      padding: 12px 16px;
      font-size: 16px;
      transition: all 0.3s ease;
      box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.05);
    }
    
    input:focus, textarea:focus {
      outline: none;
      border-color: #6c757d;
      box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.1), 0 0 0 3px rgba(108, 117, 125, 0.1);
    }
    
    /* 增强标题和文本 */
    h1, h2, h3, h4, h5, h6 {
      font-weight: 600;
      letter-spacing: -0.025em;
    }
    
    /* 公司统计数字样式 */
    .stat-number {
      color: #2563eb; /* 使用蓝色作为统计数字颜色，与按钮颜色区分 */
      font-size: 2.5rem;
      font-weight: 700;
      margin-bottom: 0.5rem;
    }
    
    /* 增强页脚 */
    .footer {
      background-color: #1a1a1a;
      color: #ffffff;
      padding: 2rem 0;
    }
    
    .footer a {
      color: rgba(255, 255, 255, 0.8);
      transition: color 0.3s ease;
    }
    
    .footer a:hover {
      color: white;
    }
    
    /* 增强统计卡片 */
    .stat-card {
      transition: all 0.3s ease;
      background-color: white;
      border-radius: 12px;
      padding: 2rem;
      box-shadow: 0 8px 30px rgba(0, 0, 0, 0.08);
      border: 1px solid rgba(0, 0, 0, 0.05);
    }
    
    /* 修改统计卡片中图标颜色 */
    .stat-icon img {
      filter: invert(35%) sepia(91%) saturate(2052%) hue-rotate(211deg) brightness(87%) contrast(95%);
    }
    
    /* 修改统计卡片中标题文本颜色 */
    .stat-title {
      color: #2563eb;
    }
    
    .stat-card:hover {
      transform: translateY(-3px);
      box-shadow: 0 12px 40px rgba(0, 0, 0, 0.12);
    }
    
    /* 增加页面滚动动画 */
    @keyframes fadeInUp {
      from {
        opacity: 0;
        transform: translateY(20px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
    
    .property-card, .stat-card, h2, p {
      animation: fadeInUp 0.6s ease-out;
    }
    
    /* 增强英雄区域 */
      .hero-content {
        text-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
      }
      
      /* 添加网页底部渐变蓝色霓虹效果 */
      .neon-footer {
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 80px;
        background: linear-gradient(135deg, rgba(100, 149, 237, 0.1) 0%, rgba(72, 61, 139, 0.2) 50%, rgba(100, 149, 237, 0.1) 100%);
        filter: blur(20px);
        z-index: -1;
        animation: neonPulse 4s ease-in-out infinite;
      }
      
      @keyframes neonPulse {
        0%, 100% {
          opacity: 0.8;
          transform: translateY(0);
          box-shadow: 0 -5px 30px rgba(100, 149, 237, 0.7), 0 -8px 60px rgba(72, 61, 139, 0.5);
        }
        50% {
          opacity: 1;
          transform: translateY(-5px);
          box-shadow: 0 -5px 40px rgba(100, 149, 237, 0.9), 0 -8px 80px rgba(72, 61, 139, 0.7);
        }
      }
    
      /* 悬浮按钮样式 */
      .floating-buttons {
        position: fixed;
        bottom: 30px;
        right: 30px;
        display: flex;
        flex-direction: column;
        gap: 15px;
        z-index: 999;
      }
      
      .floating-button {
        width: 60px;
        height: 60px;
        border-radius: 50%;
        background-color: #1F2122;
        opacity: 0.3; /* 设置透明度为30% */
        backdrop-filter: blur(10px); /* 添加背景模糊效果 */
        color: white;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 20px;
        text-decoration: none;
        transition: all 0.3s ease;
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
        cursor: pointer;
      }
      
      .floating-button:hover {
        transform: translateY(-5px);
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
        background-color: #2563eb;
        opacity: 0.9; /* 悬停时增加透明度 */
      }
      
      /* 确保Font Awesome图标不改变透明度 */
      .floating-button i {
        display: flex;
        align-items: center;
        justify-content: center;
        opacity: 1; /* 确保图标完全不透明 */
        color: white; /* 明确设置图标颜色为白色 */
      }
    `;
  document.head.appendChild(style);
  
  // 添加霓虹效果元素
  const neonFooter = document.createElement('div');
  neonFooter.className = 'neon-footer';
  document.body.appendChild(neonFooter);
  
  // 添加悬浮按钮容器 - 直接添加内联弹窗功能
  const floatingButtonsContainer = document.createElement('div');
  floatingButtonsContainer.className = 'floating-buttons';
  floatingButtonsContainer.innerHTML = `
    <a href="#" class="floating-button phone-button">
      <i class="fas fa-phone-alt"></i>
    </a>
    <a href="mailto:Info@hawsonhouse.com" class="floating-button">
      <i class="fas fa-envelope"></i>
    </a>
    <div class="floating-button chat-button">
      <i class="fas fa-robot"></i>
    </div>
  `;
  document.body.appendChild(floatingButtonsContainer);
  
  // 创建弹窗元素 - 支持多种类型弹窗
  const popupContainer = document.createElement('div');
  popupContainer.className = 'popup-container';
  popupContainer.innerHTML = `
    <div class="popup-content">
      <div class="popup-header">
        <h3 id="popup-title">Call Us</h3>
        <button class="popup-close">&times;</button>
      </div>
      <!-- 电话弹窗内容 -->
      <div id="phone-content" class="popup-content-type">
        <div class="phone-number-container">
          <p id="phone-number" class="phone-number">+971 506956105</p>
          <button id="copy-button" class="copy-button">
            <i class="fas fa-copy"></i> Copy
          </button>
        </div>
        <div class="popup-actions">
          <a href="tel:+971506956105" class="call-button">
            <i class="fas fa-phone-alt"></i> Call Now
          </a>
        </div>
      </div>
      
      <!-- AI聊天弹窗内容 -->
      <div id="chat-content" class="popup-content-type" style="display: none;">
        <div class="chat-container" style="height: 400px; display: flex; flex-direction: column;">
          <!-- 聊天消息区域 -->
          <div id="chat-messages" class="chat-messages" style="flex: 1; overflow-y: auto; padding: 1rem 0;">
            <!-- 初始欢迎消息 -->
            <div class="message bot-message">
              <div class="message-content">
                <p>Hello! I'm your real estate assistant. How can I help you today? You can ask about properties, services, or contact information.</p>
              </div>
            </div>
          </div>
          
          <!-- 输入区域 -->
          <div class="chat-input-container">
            <input type="text" id="chat-input" placeholder="Type your message here..." />
            <button id="send-message" class="send-button">
              <i class="fas fa-paper-plane"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  `;
  document.body.appendChild(popupContainer);
  
  // 添加弹窗样式
  const popupStyle = document.createElement('style');
  popupStyle.textContent = `
    .popup-container {
      display: none;
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5);
      justify-content: center;
      align-items: center;
      z-index: 1000;
      backdrop-filter: blur(5px);
      animation: fadeIn 0.2s ease;
    }
    
    .popup-content {
      background-color: white;
      border-radius: 16px;
      padding: 2rem;
      width: 90%;
      max-width: 420px;
      box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
      animation: popupFadeIn 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
      border: 1px solid rgba(0, 0, 0, 0.05);
      text-align: center;
    }
    
    .popup-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 1.5rem;
      padding-bottom: 1.5rem;
      border-bottom: 1px solid #e1e5e9;
    }
    
    .popup-header h3 {
      margin: 0;
      font-size: 1.5rem;
      color: #333;
      font-weight: 600;
    }
    
    .popup-close {
      background: none;
      border: none;
      font-size: 1.8rem;
      cursor: pointer;
      color: #999;
      transition: all 0.3s ease;
      padding: 0;
      width: 36px;
      height: 36px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
    }
    
    .popup-close:hover {
      background-color: #f5f5f5;
      color: #666;
    }
    
    .phone-number-container {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 1rem;
      margin-bottom: 1.5rem;
      padding: 1rem;
      background-color: #f8f9fa;
      border-radius: 12px;
      border: 1px solid #e9ecef;
    }
    
    .phone-number {
      margin: 0;
      font-size: 1.3rem;
      font-weight: 600;
      color: #2563eb;
      letter-spacing: 0.5px;
    }
    
    .copy-button {
      background-color: #fff;
      border: 1px solid #dee2e6;
      color: #6c757d;
      padding: 0.5rem 1rem;
      border-radius: 8px;
      cursor: pointer;
      font-size: 0.9rem;
      display: flex;
      align-items: center;
      gap: 0.5rem;
      transition: all 0.3s ease;
    }
    
    .copy-button:hover {
      background-color: #6c757d;
      color: white;
      border-color: #6c757d;
    }
    
    .popup-actions {
      display: flex;
      justify-content: center;
      margin-top: 1.5rem;
    }
    
    .call-button {
      background-color: #2563eb;
      color: white;
      padding: 0.875rem 1.75rem;
      border-radius: 10px;
      text-decoration: none;
      font-weight: 500;
      display: flex;
      align-items: center;
      gap: 0.75rem;
      transition: all 0.3s ease;
      border: none;
      cursor: pointer;
      font-size: 1rem;
      width: 100%;
      max-width: 200px;
      justify-content: center;
      margin: 0 auto;
    }
    
    .call-button:hover {
      background-color: #1d4ed8;
      transform: translateY(-2px);
      box-shadow: 0 8px 20px rgba(37, 99, 235, 0.3);
    }
    
    /* AI聊天样式 */
    .chat-container {
      height: 400px;
      display: flex;
      flex-direction: column;
    }
    
    .chat-messages {
      flex: 1;
      overflow-y: auto;
      padding: 1rem 0;
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }
    
    .message {
      display: flex;
      align-items: flex-end;
      gap: 0.75rem;
      animation: messageFadeIn 0.3s ease;
    }
    
    .user-message .message-content {
      text-align: right;
      order: 1;
    }
    
    .bot-message .message-content {
      text-align: left;
      order: 2;
    }
    
    .message-content p {
      padding: 0.75rem 1rem;
      border-radius: 18px;
      margin: 0;
      font-size: 0.95rem;
      line-height: 1.5;
    }
    
    .user-message .message-content p {
      background-color: #2563eb;
      color: white;
    }
    
    .bot-message .message-content p {
      background-color: white;
      color: #333;
      border: 1px solid #e9ecef;
    }
    
    .chat-input-container {
      display: flex;
      gap: 0.5rem;
    }
    
    #chat-input {
      flex: 1;
      padding: 0.75rem 1rem;
      border: 1px solid #dee2e6;
      border-radius: 20px;
      font-size: 0.95rem;
      outline: none;
      transition: border-color 0.3s ease;
    }
    
    #chat-input:focus {
      border-color: #2563eb;
    }
    
    .send-button {
      width: 44px;
      height: 44px;
      border-radius: 50%;
      background-color: #2563eb;
      color: white;
      border: none;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.3s ease;
    }
    
    .send-button:hover {
      background-color: #1d4ed8;
      transform: translateY(-1px);
      box-shadow: 0 4px 10px rgba(37, 99, 235, 0.3);
    }
    
    @keyframes fadeIn {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }
    
    @keyframes popupFadeIn {
      from {
        opacity: 0;
        transform: translateY(-30px) scale(0.95);
      }
      to {
        opacity: 1;
        transform: translateY(0) scale(1);
      }
    }
    
    @keyframes messageFadeIn {
      from {
        opacity: 0;
        transform: translateY(10px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
    
    /* 响应式设计 */
    @media (max-width: 576px) {
      .popup-content {
        padding: 1.5rem;
        margin: 1rem;
        width: calc(100% - 2rem);
      }
      
      .phone-number-container {
        flex-direction: column;
        gap: 0.75rem;
      }
      
      .phone-number {
        font-size: 1.1rem;
      }
      
      .chat-container {
        height: 300px;
      }
      
      .message-content {
        max-width: 80%;
      }
    }
  `;
  document.head.appendChild(popupStyle);
  
  // 获取弹窗元素
  const popupTitle = document.querySelector('#popup-title');
  const popupClose = document.querySelector('.popup-close');
  const phoneButton = document.querySelector('.phone-button');
  const copyButton = document.querySelector('#copy-button');
  const chatButton = document.querySelector('.chat-button');
  const phoneContent = document.querySelector('#phone-content');
  const chatContent = document.querySelector('#chat-content');
  const chatInput = document.querySelector('#chat-input');
  const sendButton = document.querySelector('#send-message');
  const chatMessages = document.querySelector('#chat-messages');
  
  // 显示弹窗函数 - 支持电话和聊天两种类型
  function showPopup(type) {
    // 获取当前语言设置
    let currentLang = 'en';
    if (window.updateCurrentLanguage && window.currentLang) {
      currentLang = window.currentLang;
    } else {
      // 从语言按钮获取当前语言
      const languageButton = document.querySelector('.language-button');
      if (languageButton) {
        const buttonText = languageButton.textContent.toLowerCase();
        if (buttonText.includes('中文')) {
          currentLang = 'zh';
        } else if (buttonText.includes('العربية')) {
          currentLang = 'ar';
        }
      }
    }
    
    // 获取翻译对象
    const translations = {
      en: {
        callTitle: 'Call Us',
        chatTitle: 'Chat with AI Assistant'
      },
      zh: {
        callTitle: '致电我们',
        chatTitle: '与AI助手聊天'
      },
      ar: {
        callTitle: 'اتصل بنا',
        chatTitle: 'تحدث مع مساعد الذكاء الاصطناعي'
      }
    };
    
    if (type === 'phone') {
      // 显示电话弹窗
      popupTitle.textContent = translations[currentLang].callTitle || 'Call Us';
      phoneContent.style.display = 'block';
      chatContent.style.display = 'none';
    } else if (type === 'chat') {
      // 显示聊天弹窗
      popupTitle.textContent = translations[currentLang].chatTitle || 'Chat with AI Assistant';
      phoneContent.style.display = 'none';
      chatContent.style.display = 'block';
      // 清空之前的聊天内容（保留欢迎消息）
      const welcomeMessage = chatMessages.querySelector('.message.bot-message');
      if (welcomeMessage) {
        chatMessages.innerHTML = '';
        chatMessages.appendChild(welcomeMessage);
      }
      // 聚焦输入框
      setTimeout(() => {
        chatInput?.focus();
      }, 100);
    }
    
    popupContainer.style.display = 'flex';
    document.body.style.overflow = 'hidden'; // 防止背景滚动
  }
  
  // 隐藏弹窗函数
  function hidePopup() {
    popupContainer.style.display = 'none';
    document.body.style.overflow = 'auto'; // 恢复背景滚动
  }
  
  // 为关闭按钮添加点击事件
  popupClose.addEventListener('click', hidePopup);
  
  // 点击弹窗外部关闭弹窗
  popupContainer.addEventListener('click', (e) => {
    if (e.target === popupContainer) {
      hidePopup();
    }
  });
  
  // 为电话按钮添加点击事件
  if (phoneButton) {
    phoneButton.addEventListener('click', (e) => {
      e.preventDefault();
      showPopup('phone');
    });
  }
  
  // 确保Call Now按钮不调用外部软件，只在网页内显示
  const callNowButton = document.querySelector('.call-button');
  if (callNowButton) {
    callNowButton.addEventListener('click', (e) => {
      e.preventDefault();
      // 仅在控制台显示信息，不执行实际的拨打电话操作
      console.log('Call functionality is simulated within the webpage');
      // 可以添加提示消息
      alert('This is a simulated call button within the webpage');
    });
  }
  
  // 为聊天按钮添加点击事件
  if (chatButton) {
    chatButton.addEventListener('click', () => {
      showPopup('chat');
    });
  }
  
  // 添加复制功能
  if (copyButton) {
    copyButton.addEventListener('click', () => {
      const phoneNumber = document.querySelector('#phone-number').textContent;
      navigator.clipboard.writeText(phoneNumber).then(() => {
        const originalText = copyButton.innerHTML;
        copyButton.innerHTML = '<i class="fas fa-check"></i> Copied';
        copyButton.classList.add('copied');
        
        setTimeout(() => {
          copyButton.innerHTML = originalText;
          copyButton.classList.remove('copied');
        }, 2000);
      }).catch(err => {
        console.error('Failed to copy: ', err);
      });
    });
  }
  
  // 添加复制成功的样式
  const copySuccessStyle = document.createElement('style');
  copySuccessStyle.textContent = `
    .copy-button.copied {
      background-color: #28a745;
      color: white;
      border-color: #28a745;
    }
  `;
  document.head.appendChild(copySuccessStyle);
  
  // 添加AI聊天逻辑
   // 读取并解析房产项目数据
   const propertyData = [
     {
       id: 1,
       name: 'Montiva by Vida',
       type: 'Apartment',
       price: '1,910,000 AED',
       developer: 'Emaar',
       area: 'Dubai Creek Harbour, Dubai',
       handoverDate: '09-2029'
     },
     {
       id: 2,
       name: 'The Palace Villas Ostra',
       type: 'Villa',
       price: '13,130,000 AED',
       developer: 'Emaar',
       area: 'The Oasis by Emaar, Dubai',
       handoverDate: '09-2029'
     },
     {
       id: 3,
       name: 'Rosehill',
       type: 'Apartment',
       price: '1,600,000 AED',
       developer: 'Emaar',
       area: 'Dubai Hills Estate, Dubai',
       handoverDate: '06-2029'
     },
     {
       id: 4,
       name: 'Golf Hillside',
       type: 'Apartment',
       price: '2,730,000 AED',
       developer: 'Emaar',
       area: 'Dubai Hills Estate, Dubai',
       handoverDate: '12-2028'
     },
     {
       id: 5,
       name: 'Selvara',
       type: 'Villa',
       price: '6,200,000 AED',
       developer: 'Emaar',
       area: 'Grand Polo Club and Resort, Dubai',
       handoverDate: '04-2029'
     },
     {
       id: 6,
       name: 'Silva Dubai Creek Harbour',
       type: 'Apartment',
       price: '1,790,000 AED',
       developer: 'Emaar',
       area: 'Dubai Creek Harbour, Dubai',
       handoverDate: '09-2029'
     },
     {
       id: 7,
       name: 'Mamsha Palm',
       type: 'Apartment',
       price: '3,700,000 AED',
       developer: 'Aldar',
       area: 'Saadiyat Island, Abu Dhabi',
       handoverDate: '03-2028'
     },
     {
       id: 8,
       name: 'The Beach House Fahid',
       type: 'Apartment',
       price: '4,132,000 AED',
       developer: 'Aldar',
       area: 'Al Fahid, Abu Dhabi',
       handoverDate: '12-2029'
     },
     {
       id: 9,
       name: 'The Arthouse',
       type: 'Apartment | Villa',
       price: '3,300,000 AED',
       developer: 'Aldar',
       area: 'Saadiyat Island, Abu Dhabi',
       handoverDate: '06-2028'
     },
     {
       id: 10,
       name: 'Cavalli Couture',
       type: 'Apartment',
       price: '21,904,000 AED',
       developer: 'Damac',
       area: 'Al Safa, Dubai',
       handoverDate: '12-2025'
     },
     {
       id: 11,
       name: 'Damac Bay 2',
       type: 'Apartment | Duplex',
       price: '7,342,000 AED',
       developer: 'Damac',
       area: 'Dubai Harbour, Dubai',
       handoverDate: '12-2027'
     },
     {
       id: 12,
       name: 'Chelsea Residences',
       type: 'Apartment',
       price: '2,170,000 AED',
       developer: 'Damac',
       area: 'Dubai Maritime City, Dubai',
       handoverDate: '12-2029'
     },
     {
       id: 13,
       name: 'Falcon Island',
       type: 'Villa | Townhouse',
       price: '7,800,000 AED',
       developer: 'Al Hamra Real Estate',
       area: 'Al Hamra Village, Ras Al Khaimah',
       handoverDate: '01-2025'
     },
     {
       id: 14,
       name: 'Falcon Island',
       type: 'Villa | Townhouse',
       price: '1,190,000 AED',
       developer: 'Al Hamra Real Estate',
       area: 'Al Hamra Village, Ras Al Khaimah',
       handoverDate: '12-2024'
     },
     {
       id: 15,
       name: 'DWTN Residences',
       type: 'Apartment | Duplex',
       price: '1,860,000 AED',
       developer: 'Deyaar',
       area: 'Downtown Dubai, Dubai',
       handoverDate: '12-2029'
     },
     {
       id: 16,
       name: 'Ember Park Five by Deyaar',
       type: 'Apartment',
       price: '704,187 AED',
       developer: 'Deyaar',
       area: 'Dubai Production City (IMPZ), Dubai',
       handoverDate: '12-2027'
     }
   ];
   
   // 定义常见问题和多语言回答
  const faqResponses = {
    'en': {
      'hello': 'Hello! Welcome to Hawson House Properties. How can I assist you today?',
      'hi': 'Hi there! How can I help you with your real estate needs?',
      'properties': 'Browse and find your ideal property from our extensive portfolio of Dubai projects. Discover a wide range of residential and commercial properties across Dubai\'s most sought-after locations, with detailed information and specifications for each project.',
      'listings': `We have several premium property listings available:\n\n1. Montiva by Vida - Apartment - 1,910,000 AED\n2. The Palace Villas Ostra - Villa - 13,130,000 AED\n3. Rosehill - Apartment - 1,600,000 AED\n4. Golf Hillside - Apartment - 2,730,000 AED\n5. Selvara - Villa - 6,200,000 AED\n6. Silva Dubai Creek Harbour - Apartment - 1,790,000 AED\n7. Mamsha Palm - Apartment - 3,700,000 AED\n8. The Beach House Fahid - Apartment - 4,132,000 AED\n9. The Arthouse - Apartment | Villa - 3,300,000 AED\n10. Cavalli Couture - Apartment - 21,904,000 AED\n11. Damac Bay 2 - Apartment | Duplex - 7,342,000 AED\n12. Chelsea Residences - Apartment - 2,170,000 AED\n13. Falcon Island - Villa | Townhouse - 7,800,000 AED\n14. Falcon Island - Villa | Townhouse - 1,190,000 AED\n15. DWTN Residences - Apartment | Duplex - 1,860,000 AED\n16. Ember Park Five by Deyaar - Apartment - 704,187 AED`,
      'contact': 'You can contact us via phone at +971 506956105 or email at Info@hawsonhouse.com. Our team is available to assist you.',
      'email': 'Our email address is Info@hawsonhouse.com. Feel free to send us any inquiries or questions.',
      'phone': 'You can reach us by phone at +971 506956105 during our business hours.',
      'services': 'Expert Real Estate Assistance: Access our dedicated team of over 400+ expert agents ready to assist you. Professional Marketing Solutions: Achieve optimal value by listing your property with our expert marketing strategies. Market Insights for Informed Decisions: Download the latest Comprehensive Dubai Real Estate Market Report Q1 2025.',
      'buy property': 'We can help you find your perfect property. We have a wide range of residential and commercial properties across Dubai\'s most sought-after locations. Our team of expert agents is ready to assist you with personalized property solutions.',
      'sell property': 'If you\'re looking to sell your property, we can help maximize its value with our professional marketing strategies and extensive network. We offer comprehensive marketing approach, including professional photography, virtual tours, and targeted advertising campaigns.',
      'rent property': 'We have a variety of rental properties available. You can specify your requirements and budget for more tailored options.',
      'project': 'We have 16 exciting projects available across different locations in Dubai and UAE, including projects by Emaar, Aldar, Damac, Al Hamra Real Estate, and Deyaar. Would you like to know more about a specific project?',
      'location': 'Our properties are located in various prime locations including Dubai Creek Harbour, Dubai Hills Estate, Grand Polo Club and Resort, Saadiyat Island, Al Safa, Dubai Harbour, Dubai Maritime City, Al Hamra Village, Downtown Dubai, and Dubai Production City (IMPZ).',
      'price': 'Our property prices range from 704,187 AED for apartments to 21,904,000 AED for luxury properties. We have options to suit different budgets and requirements.',
      'falcon island': 'Falcon Island is a project in Al Hamra Village, Ras Al Khaimah offering Villas and Townhouses. Prices start from 1,190,000 AED with handover in December 2024, and there are also options starting from 7,800,000 AED with handover in January 2025.',
      'emaar': 'Emaar is one of the developers we work with. They have several projects in our portfolio including Montiva by Vida, The Palace Villas Ostra, Rosehill, Golf Hillside, Selvara, and Silva Dubai Creek Harbour.',
      'aldar': 'Aldar is another major developer we work with. Their projects include Mamsha Palm, The Beach House Fahid, and The Arthouse.',
      'damac': 'Damac has projects like Cavalli Couture, Damac Bay 2, and Chelsea Residences in our portfolio.',
      'deyaar': 'Deyaar has projects including DWTN Residences and Ember Park Five by Deyaar.',
      'handover date': 'Our projects have different handover dates ranging from December 2024 to December 2029. The earliest handover is Falcon Island (12-2024), and the latest is several projects with handover in 12-2029.',
      'dubai': 'We have a wide range of properties available in Dubai, including locations like Dubai Creek Harbour, Dubai Hills Estate, Dubai Harbour, Dubai Maritime City, Downtown Dubai, and Dubai Production City (IMPZ).',
      'assistant': 'I am an AI assistant here to help you with your real estate queries. I can provide information about our properties, services, and answer any questions you may have about the Dubai real estate market.',
      'general': [
        `I'm here to help with your real estate needs. Our company offers a wide range of properties across Dubai's most sought-after locations.`,
        `Thank you for your question. Please feel free to ask me about our properties, services, or any other real estate inquiries you may have.`,
        `Hawson House Properties provides comprehensive real estate solutions in Dubai and UAE. How can I assist you today?`,
        `Would you like to know more about our property listings or services? I'm here to help you find the information you need.`
      ]
    },
    'zh': {
      'hello': '您好！欢迎来到Hawson House Properties。今天我能为您提供什么帮助？',
      'hi': '您好！我能如何帮助您满足您的房地产需求？',
      'properties': '从我们丰富的迪拜项目组合中浏览并找到您理想的房产。在迪拜最受欢迎的地区发现各种住宅和商业房产，每个项目都有详细的信息和规格。',
      'listings': `我们有多个优质房产列表可供选择：\n\n1. Montiva by Vida - 公寓 - 1,910,000 迪拉姆\n2. The Palace Villas Ostra - 别墅 - 13,130,000 迪拉姆\n3. Rosehill - 公寓 - 1,600,000 迪拉姆\n4. Golf Hillside - 公寓 - 2,730,000 迪拉姆\n5. Selvara - 别墅 - 6,200,000 迪拉姆\n6. Silva Dubai Creek Harbour - 公寓 - 1,790,000 迪拉姆\n7. Mamsha Palm - 公寓 - 3,700,000 迪拉姆\n8. The Beach House Fahid - 公寓 - 4,132,000 迪拉姆\n9. The Arthouse - 公寓 | 别墅 - 3,300,000 迪拉姆\n10. Cavalli Couture - 公寓 - 21,904,000 迪拉姆\n11. Damac Bay 2 - 公寓 | 复式公寓 - 7,342,000 迪拉姆\n12. Chelsea Residences - 公寓 - 2,170,000 迪拉姆\n13. Falcon Island - 别墅 | 联排别墅 - 7,800,000 迪拉姆\n14. Falcon Island - 别墅 | 联排别墅 - 1,190,000 迪拉姆\n15. DWTN Residences - 公寓 | 复式公寓 - 1,860,000 迪拉姆\n16. Ember Park Five by Deyaar - 公寓 - 704,187 迪拉姆`,
      'contact': '您可以通过电话 +971 506956105 或电子邮件 Info@hawsonhouse.com 联系我们。我们的团队随时为您提供帮助。',
      'email': '我们的电子邮箱是 Info@hawsonhouse.com。请随时向我们发送任何咨询或问题。',
      'phone': '您可以在我们的工作时间内通过电话 +971 506956105 联系我们。',
      'services': '专家房地产协助：访问我们由400多名专家代理组成的团队，随时为您提供帮助。专业营销解决方案：通过我们的专业营销策略列出您的房产，实现最优价值。市场洞察助您明智决策：下载最新的2025年第一季度综合迪拜房地产市场报告。',
      'buy property': '我们可以帮助您找到完美的房产。我们在迪拜最受欢迎的地区拥有各种住宅和商业房产。我们的专家代理团队随时为您提供个性化的房产解决方案。',
      'sell property': '如果您想出售房产，我们可以通过专业的营销策略和广泛的网络帮助您最大化其价值。我们提供全面的营销方法，包括专业摄影、虚拟游览和有针对性的广告活动。',
      'rent property': '我们有各种租赁房产可供选择。您可以指定您的需求和预算，以获得更定制的选择。',
      'project': '我们在迪拜和阿联酋的不同地区提供16个令人兴奋的项目，包括Emaar、Aldar、Damac、Al Hamra Real Estate和Deyaar的项目。您想了解某个特定项目的更多信息吗？',
      'location': '我们的房产位于各种黄金地段，包括迪拜河港、迪拜山庄、大 polo俱乐部和度假村、萨迪亚特岛、阿尔萨法、迪拜港、迪拜海事城、阿尔哈姆拉村、迪拜市中心和迪拜生产城（IMPZ）。',
      'price': '我们的房产价格从公寓的704,187迪拉姆到豪华房产的21,904,000迪拉姆不等。我们有适合不同预算和需求的选择。',
      'falcon island': 'Falcon Island是位于拉斯海马阿尔哈姆拉村的一个项目，提供别墅和联排别墅。价格从1,190,000迪拉姆起，预计于2024年12月交付，也有从7,800,000迪拉姆起的选择，预计于2025年1月交付。',
      'emaar': 'Emaar是我们合作的开发商之一。他们在我们的投资组合中有多个项目，包括Montiva by Vida、The Palace Villas Ostra、Rosehill、Golf Hillside、Selvara和Silva Dubai Creek Harbour。',
      'aldar': 'Aldar是我们合作的另一家主要开发商。他们的项目包括Mamsha Palm、The Beach House Fahid和The Arthouse。',
      'damac': 'Damac在我们的投资组合中有Cavalli Couture、Damac Bay 2和Chelsea Residences等项目。',
      'deyaar': 'Deyaar的项目包括DWTN Residences和Ember Park Five by Deyaar。',
      'handover date': '我们的项目有不同的交付日期，从2024年12月到2029年12月不等。最早交付的是Falcon Island（12-2024），最晚的是多个项目，交付时间为12-2029。',
      'dubai': '我们在迪拜提供各种房产，包括迪拜河港、迪拜山庄、迪拜港、迪拜海事城、迪拜市中心和迪拜生产城（IMPZ）等地区。',
      'assistant': '我是一名AI助手，随时为您提供房地产咨询帮助。我可以提供关于我们房产、服务的信息，并回答您关于迪拜房地产市场的任何问题。',
      'general': [
        `我随时为您的房地产需求提供帮助。我们公司在迪拜最受欢迎的地区提供各种房产。`,
        `感谢您的提问。请随时向我咨询我们的房产、服务或任何其他房地产相关问题。`,
        `Hawson House Properties在迪拜和阿联酋提供全面的房地产解决方案。今天我能为您提供什么帮助？`,
        `您想了解我们的房产列表或服务吗？我随时为您提供您需要的信息。`
      ]
    },
    'ar': {
      'hello': 'مرحباً! مرحباً بك في Hawson House Properties. كيف يمكنني مساعدتك اليوم؟',
      'hi': 'مرحباً! كيف يمكنني مساعدتك باحتياجاتك العقارية؟',
      'properties': 'تصفح وابحث عن عقارك المثالي من مجموعة واسعة من مشاريع دبي. اكتشف مجموعة واسعة من العقارات السكنية والتجارية عبر أهم المواقع المرجوة في دبي، مع معلومات تفصيلية ومواصفات لكل مشروع.',
      'listings': `لدينا العديد من قوائم العقارات المميزة المتوفرة:\n\n1. Montiva by Vida - شقة - 1,910,000 درهم\n2. The Palace Villas Ostra - فيلا - 13,130,000 درهم\n3. Rosehill - شقة - 1,600,000 درهم\n4. Golf Hillside - شقة - 2,730,000 درهم\n5. Selvara - فيلا - 6,200,000 درهم\n6. Silva Dubai Creek Harbour - شقة - 1,790,000 درهم\n7. Mamsha Palm - شقة - 3,700,000 درهم\n8. The Beach House Fahid - شقة - 4,132,000 درهم\n9. The Arthouse - شقة | فيلا - 3,300,000 درهم\n10. Cavalli Couture - شقة - 21,904,000 درهم\n11. Damac Bay 2 - شقة | دوبلكس - 7,342,000 درهم\n12. Chelsea Residences - شقة - 2,170,000 درهم\n13. Falcon Island - فيلا | منزل نصفي - 7,800,000 درهم\n14. Falcon Island - فيلا | منزل نصفي - 1,190,000 درهم\n15. DWTN Residences - شقة | دوبلكس - 1,860,000 درهم\n16. Ember Park Five by Deyaar - شقة - 704,187 درهم`,
      'contact': 'يمكنك الاتصال بنا عبر الهاتف على +971 506956105 أو عبر البريد الإلكتروني على Info@hawsonhouse.com. فريقنا متوفر للمساعدة.',
      'email': 'عنوان البريد الإلكتروني لدينا هو Info@hawsonhouse.com. لا تتردد في إرسال أي استفسارات أو أسئلة لنا.',
      'phone': 'يمكنك التواصل معنا عبر الهاتف على +971 506956105 خلال ساعات عملنا.',
      'services': 'مساعدة عقارية متخصصة: استخدم فريقنا المخصص المكون من أكثر من 400 وكيلًا متخصصًا جاهزين للمساعدة. حلول تسويقية احترافية: حقق قيمة مثلى عن طريق تسجيل عقارك باستخدام استراتيجياتنا التسويقية المتخصصة. رؤى سوق للمقررات التفكيرية المبنية على المعرفة: حمل أحدث تقرير粽 comprehensive سوق العقارات في دبي الربع الأول لعام 2025.',
      'buy property': 'يمكننا مساعدتك في العثور على عقارك المثالي. لدينا مجموعة واسعة من العقارات السكنية والتجارية عبر أهم المواقع المرجوة في دبي. فريقنا من الوكلاء المتخصصين جاهز للمساعدة مع حلول عقارية شخصية.',
      'sell property': 'إذا كنت ترغب في بيع عقارك، يمكننا مساعدتك في زيادة قيمته إلى أقصى حد باستخدام استراتيجياتنا التسويقية المتخصصة وشبكتنا الواسعة. نحن نقدم نهجًا تسويقيًا شاملاً، بما في ذلك التصوير المحترف والجولات الافتراضية والحملات الإعلانية المستهدفة.',
      'rent property': 'لدينا مجموعة متنوعة من العقارات للإيجار المتوفرة. يمكنك تحديد متطلباتك والميزانية للحصول على خيارات أكثر تخصيصًا.',
      'project': 'لدينا 16 مشروعًا مثيرًا متاحًا عبر مواقع مختلفة في دبي والإمارات العربية المتحدة، بما في ذلك مشاريع Emaar و Aldar و Damac و Al Hamra Real Estate و Deyaar. هل ترغب في معرفة المزيد عن مشروع معين؟',
      'location': 'تقع عقاراتنا في مواقع بارزة مختلفة بما في ذلك Dubai Creek Harbour و Dubai Hills Estate و Grand Polo Club and Resort و Saadiyat Island و Al Safa و Dubai Harbour و Dubai Maritime City و Al Hamra Village و Downtown Dubai و Dubai Production City (IMPZ).',
      'price': 'تتراوح أسعار عقاراتنا من 704,187 درهم للشقق إلى 21,904,000 درهم للعقارات الفاخرة. لدينا خيارات تناسب الميزانيات والحاجات المختلفة.',
      'falcon island': 'Falcon Island هو مشروع في Al Hamra Village، راس الخيمة يوفر الفيلات والمنازل النصفيّة. تبدأ الأسعار من 1,190,000 درهم مع تسليم في ديسمبر 2024، وهناك أيضًا خيارات تبدأ من 7,800,000 درهم مع تسليم في يناير 2025.',
      'emaar': 'Emaar هو أحد المطورين الذين نعمل معهم. لديهم العديد من المشاريع في محفظتنا بما في ذلك Montiva by Vida و The Palace Villas Ostra و Rosehill و Golf Hillside و Selvara و Silva Dubai Creek Harbour.',
      'aldar': 'Aldar هو مطور رئيسي آخر نعمل معه. تشمل مشاريعهم Mamsha Palm و The Beach House Fahid و The Arthouse.',
      'damac': 'لدي Damac مشاريع مثل Cavalli Couture و Damac Bay 2 و Chelsea Residences في محفظتنا.',
      'deyaar': 'لدي Deyaar مشاريع بما في ذلك DWTN Residences و Ember Park Five by Deyaar.',
      'handover date': 'توجد للتسليم تاريخات مختلفة للمشاريع التي لدينا تراوح من ديسمبر 2024 إلى ديسمبر 2029. أسرع تاريخ تسليم هو Falcon Island (12-2024)، وأحدثها هو العديد من المشاريع مع تسليم في 12-2029.',
      'dubai': 'لدينا مجموعة واسعة من العقارات المتوفرة في دبي، بما في ذلك مواقع مثل Dubai Creek Harbour و Dubai Hills Estate و Dubai Harbour و Dubai Maritime City و Downtown Dubai و Dubai Production City (IMPZ).',
      'assistant': 'أنا مساعد ذكاء اصطناعي هنا للمساعدة في استفساراتك العقارية. يمكنني تقديم معلومات حول عقاراتنا وخدماتنا والإجابة على أي أسئلة قد تكون لديك حول سوق العقارات في دبي.',
      'general': [
        `أنا هنا للمساعدة في احتياجاتك العقارية. تقدم شركتنا مجموعة واسعة من العقارات عبر أهم المواقع المرجوة في دبي.`,
        `شكرًا على سؤالك. يرجى عدم التردد في طرح أي أسئلة حول عقاراتنا أو خدماتنا أو أي استفسارات أخرى متعلقة بالعقارات.`,
        `يوفر Hawson House Properties حلولًا شاملة للعقارات في دبي والإمارات العربية المتحدة. كيف يمكنني مساعدتك اليوم؟`,
        `هل ترغب في معرفة المزيد عن قوائم العقارات أو الخدمات الخاصة بنا؟ أنا هنا للمساعدة في العثور على المعلومات التي تحتاجها.`
      ]
    }
  };
  
  // 生成通用回复函数已被移除，现在直接从多语言FAQ对象中获取通用回复
  
  // 添加消息到聊天界面
  function addMessage(text, isUser) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${isUser ? 'user-message' : 'bot-message'}`;
    
    // 处理HTML内容（允许简单的链接）
    const contentDiv = document.createElement('div');
    contentDiv.className = 'message-content';
    
    const p = document.createElement('p');
    p.innerHTML = text; // 允许简单的HTML如链接
    contentDiv.appendChild(p);
    
    messageDiv.appendChild(contentDiv);
    chatMessages.appendChild(messageDiv);
    
    // 滚动到底部
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }
  
  // 处理用户消息
    function handleUserMessage(message) {
      if (!message.trim()) return;
      
      // 添加用户消息到聊天界面
      addMessage(message, true);
      
      // 清空输入框
      chatInput.value = '';
      
      // 模拟思考延迟
      setTimeout(() => {
        // 寻找匹配的回答
        const lowerMessage = message.toLowerCase();
        let response = null;
        
        // 获取当前语言的FAQ回复，默认使用英文
        const lang = currentLanguage || 'en';
        const faqLang = faqResponses[lang] || faqResponses.en;
        
        // 检查是否包含预算相关的问题，并尝试提取预算金额
        let budget = extractBudget(message);
        if (budget > 0) {
          // 根据当前语言生成符合预算的房产推荐
          response = generateBudgetRecommendation(budget, lang);
        }
        
        // 如果没有预算相关回复，检查常见问题关键词
        if (!response) {
          for (const keyword in faqLang) {
            if (keyword !== 'general' && lowerMessage.includes(keyword)) {
              response = faqLang[keyword];
              break;
            }
          }
        }
        
        // 如果没有匹配的回答，生成通用回复
        if (!response) {
          // 使用当前语言的通用回复
          if (faqLang.general && faqLang.general.length > 0) {
            response = faqLang.general[Math.floor(Math.random() * faqLang.general.length)];
          } else {
            // 如果当前语言没有通用回复，则使用英文通用回复
            response = faqResponses.en.general[Math.floor(Math.random() * faqResponses.en.general.length)];
          }
        }
        
        // 添加AI回复到聊天界面
        addMessage(response, false);
      }, 500 + Math.random() * 1000); // 0.5-1.5秒的延迟
    }
    
    // 从消息中提取预算金额，支持多种格式
    function extractBudget(message) {
      // 尝试匹配中文数字表述 (一百万, 一千万等)
      const chineseNumberExpressions = [
        { pattern: /一百万/, value: 1000000 },
        { pattern: /一千万/, value: 10000000 },
        { pattern: /二百万/, value: 2000000 },
        { pattern: /三百万/, value: 3000000 },
        { pattern: /四百万/, value: 4000000 },
        { pattern: /五百万/, value: 5000000 },
        { pattern: /六百万/, value: 6000000 },
        { pattern: /七百万/, value: 7000000 },
        { pattern: /八百万/, value: 8000000 },
        { pattern: /九百万/, value: 9000000 }
      ];
      
      for (const expr of chineseNumberExpressions) {
        if (expr.pattern.test(message)) {
          return expr.value;
        }
      }
      
      // 尝试匹配中文数字单位"万"
      const chineseWanMatch = message.match(/(\d+(?:,\d{3})*)万/);
      if (chineseWanMatch) {
        const num = parseInt(chineseWanMatch[1].replace(/,/g, ''));
        return num * 10000; // 1万 = 10000
      }
      
      // 尝试匹配标准数字格式（带逗号或不带逗号）
      const numberMatch = message.match(/(\d{1,3}(?:,\d{3})*|\d+)/);
      if (numberMatch) {
        return parseInt(numberMatch[1].replace(/,/g, ''));
      }
      
      return 0; // 没有找到有效预算
    }
    
    // 根据预算生成房产推荐
    function generateBudgetRecommendation(budget, lang) {
      // 解析房产价格并筛选符合预算的房产
      const affordableProperties = propertyData.filter(property => {
        // 从价格字符串中提取数字
        const price = parseInt(property.price.replace(/[^\d]/g, ''));
        return price <= budget;
      });
      
      // 根据语言生成回复
      const translations = {
        'en': {
          intro: `Based on your budget of ${budget.toLocaleString()} AED, here are the properties we recommend:\n\n`,
          noProperties: `Unfortunately, we don't have any properties within your budget of ${budget.toLocaleString()} AED at the moment.`,
          format: (property, index) => `${index}. ${property.name} - ${property.type} - ${property.price}\n   Developer: ${property.developer}\n   Location: ${property.area}\n   Handover: ${property.handoverDate}`
        },
        'zh': {
          intro: `根据您 ${budget.toLocaleString()} 迪拉姆的预算，我们推荐以下房产：\n\n`,
          noProperties: `很抱歉，目前我们没有价格在您 ${budget.toLocaleString()} 迪拉姆预算内的房产。`,
          format: (property, index) => `${index}. ${property.name} - ${property.type} - ${property.price}\n   开发商：${property.developer}\n   位置：${property.area}\n   交付日期：${property.handoverDate}`
        },
        'ar': {
          intro: `استنادًا إلى ميزانيتك البالغة ${budget.toLocaleString()} درهم، إليك العقارات التي ننصح بها:\n\n`,
          noProperties: `لسوء الحظ، אין لدينا أي عقارات ضمن ميزانيتك البالغة ${budget.toLocaleString()} درهم في الوقت الحالي.`,
          format: (property, index) => `${index}. ${property.name} - ${property.type} - ${property.price}\n   المطور: ${property.developer}\n   الموقع: ${property.area}\n   التسليم: ${property.handoverDate}`
        }
      };
      
      const t = translations[lang] || translations.en;
      
      if (affordableProperties.length === 0) {
        return t.noProperties;
      }
      
      // 生成房产列表回复
      let response = t.intro;
      affordableProperties.forEach((property, index) => {
        response += t.format(property, index + 1) + '\n\n';
      });
      
      return response.trim();
    }
  
  // 为发送按钮添加点击事件
  if (sendButton) {
    sendButton.addEventListener('click', () => {
      handleUserMessage(chatInput.value);
    });
  }
  
  // 为输入框添加回车事件
  if (chatInput) {
    chatInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        handleUserMessage(chatInput.value);
      }
    });
  }
  
  // 创建导航栏
  const header = document.createElement('header');
  header.className = 'header';
  header.innerHTML = `
    <nav class="navbar" style="display: flex; align-items: center; justify-content: space-between; padding: 1rem 2rem; background-color: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
      <div class="logo" style="display: flex; align-items: center;">
        <img src="/images_new/LOGO/1.png" alt="Logo" class="logo-image">
        <span style="margin-left: 1rem; font-size: 1.5rem; font-weight: bold; color: #333;">HAWSON HOUSE PROPERTIES</span>
      </div>
      <div class="nav-links" style="display: flex; gap: 2rem; align-items: center;">
        <a href="/index.html" style="color: #333; text-decoration: none; font-weight: 500; transition: color 0.3s ease;">Home</a>
        <a href="/public/featured-properties.html" style="color: #333; text-decoration: none; font-weight: 500; transition: color 0.3s ease;">Buy</a>
        <a href="#stats" style="color: #333; text-decoration: none; font-weight: 500; transition: color 0.3s ease;">Projects</a>
        <a href="#services" style="color: #333; text-decoration: none; font-weight: 500; transition: color 0.3s ease;">Services</a>
        <a href="#contact" style="color: #333; text-decoration: none; font-weight: 500; transition: color 0.3s ease;">Contact</a>
        
        <!-- 语言切换下拉菜单 -->
        <div class="language-selector" style="position: relative;">
          <button id="language-button" class="language-button" style="background: none; border: none; color: #333; cursor: pointer; font-weight: 500; transition: color 0.3s ease; display: inline-block;">
            English ▼
          </button>
          <div id="language-dropdown" class="language-dropdown" style="display: none; position: absolute; right: 0; top: 100%; margin-top: 0.5rem; padding: 0.5rem 0; background-color: white; border-radius: 4px; box-shadow: 0 2px 10px rgba(0,0,0,0.1); min-width: 120px; z-index: 1000;">
            <button class="language-option" data-lang="en" style="display: block; width: 100%; padding: 0.5rem 1rem; text-align: left; background: none; border: none; cursor: pointer; font-size: 0.9rem; transition: background-color 0.2s ease;">English</button>
            <button class="language-option" data-lang="zh" style="display: block; width: 100%; padding: 0.5rem 1rem; text-align: left; background: none; border: none; cursor: pointer; font-size: 0.9rem; transition: background-color 0.2s ease;">中文</button>
            <button class="language-option" data-lang="ar" style="display: block; width: 100%; padding: 0.5rem 1rem; text-align: left; background: none; border: none; cursor: pointer; font-size: 0.9rem; transition: background-color 0.2s ease;">العربية</button>
          </div>
        </div>
      </div>
    </nav>
  `;
  
  // 全局变量，跟踪当前语言
  let currentLanguage = 'en';
  
  // 更新当前语言的函数，供外部调用
  window.updateCurrentLanguage = function(lang) {
    currentLanguage = lang;
  }
  
  // 语言切换功能实现
  function initLanguageSwitcher() {
    // 确保在DOM中能找到元素
    setTimeout(() => {
      const languageButton = document.getElementById('language-button');
      const languageDropdown = document.getElementById('language-dropdown');
      const languageOptions = document.querySelectorAll('.language-option');
      
      // 检查元素是否存在
      if (!languageButton || !languageDropdown || languageOptions.length === 0) {
        console.log('Language switcher elements not found');
        return;
      }
      
      console.log('Language switcher elements found, initializing...');
      
      // 定义各语言的翻译内容
      const translations = {
        en: {
          nav: {
            home: 'Home',
            buy: 'Buy',
            projects: 'Projects',
            services: 'Services',
            contact: 'Contact'
          },
          hero: {
            title: 'Find Your Dream',
            subtitle: 'Premium real estate platform in Dubai and UAE'
          },
          footer: {
          followUs: 'Follow Us',
          facebook: 'Facebook',
          twitter: 'Twitter',
          instagram: 'Instagram',
          linkedin: 'LinkedIn',
          privacyPolicy: 'Privacy Policy',
          termsOfService: 'Terms of Service',
          cookiePolicy: 'Cookie Policy'
        },
        companyIntro: {
          title: 'The new way to find your development opportunities',
          description: 'Discover your next development project with more than 10+opportunities and professional services listed.',
          agents: 'Agents',
          listings: 'Listings',
          countries: 'Countries'
        },
        properties: {
          sectionTitle: 'Explore Our Properties',
          sectionSubtitle: 'Discover a wide range of premium properties',
          viewAllButton: 'View Featured Properties',
          apartment: 'Apartment',
          villa: 'Villa',
          townhouse: 'Townhouse',
          penthouse: 'Penthouse',
          duplex: 'Duplex',
          residentialForSale: 'Residential for Sale'
        },
        contact: {
          title: 'Get in Touch',
          description: 'Have questions? Reach out to our team for assistance.'
        },
        footer: {
          quickLinks: 'Quick Links',
          services: 'Services',
          contactUs: 'Contact Us',
          followUs: 'Follow Us',
          buyProperty: 'Buy Property',
          sellProperty: 'Sell Property',
          rentProperty: 'Rent Property',
          propertyManagement: 'Property Management',
          aboutUs: 'About Us',
          privacyPolicy: 'Privacy Policy',
          termsOfService: 'Terms of Service',
          cookiePolicy: 'Cookie Policy',
          tagline: 'Premium real estate platform in Dubai and UAE',
          social: {
            facebook: 'Facebook',
            twitter: 'Twitter',
            instagram: 'Instagram',
            linkedin: 'LinkedIn'
          }
        },
        popup: {
          callTitle: 'Call Us',
          chatTitle: 'Chat with AI Assistant',
          copyButton: 'Copy',
          copiedText: 'Copied',
          callNow: 'Call Now',
          phonePlaceholder: 'Phone Number',
          chatPlaceholder: 'Type your message here...',
          welcomeMessage: 'Hello! I\'m your real estate assistant. How can I help you today? You can ask about properties, services, or contact information.'
        },
        stats: {
          missionTitle: 'Our mission is to redefine real estate in the customer\'s favor.',
          missionSubtitle: 'Lorem ipsum dolor sit amet',
          stat1Title: 'Connect with a Specialist',
          stat1Desc: 'Expert Real Estate Assistance',
          stat1Text: 'Access our dedicated team of over 400+ expert agents ready to assist you. Our team of experienced real estate specialists is available to provide personalized assistance for all your property needs, from inquiries to closing deals.',
          stat2Title: 'List Your Property',
          stat2Desc: 'Professional Marketing Solutions',
          stat2Text: 'Achieve optimal value by listing your property with our expert marketing strategies. Maximize your property\'s exposure with our comprehensive marketing approach, including professional photography, virtual tours, and targeted advertising campaigns.',
          stat3Title: 'Download Report',
          stat3Desc: 'Market Insights for Informed Decisions',
          stat3Text: 'Download the latest Comprehensive Dubai Real Estate Market Report Q1 2025. Gain valuable insights into market trends, property values, and investment opportunities with our detailed quarterly report covering the entire Dubai real estate landscape.',
          stat4Title: 'Explore Dubai Projects',
          stat4Desc: 'Discover Your Dream Property',
          stat4Text: 'Browse and find your ideal property from our extensive portfolio of Dubai projects. Discover a wide range of residential and commercial properties across Dubai\'s most sought-after locations, with detailed information and specifications for each project.'
        },
        property: {
          developer: 'Developer',
          area: 'Area',
          handoverDate: 'Handover Date'
        },
        form: {
          fillAllFields: 'Please fill in all fields',
          validEmail: 'Please enter a valid email address',
          sending: 'Sending...',
          sendMessage: 'Send Message',
          successMessage: 'Your message has been successfully sent to Info@hawsonhouse.com',
          errorMessage: 'There was an error sending your message. Please try again later.'
        }
        },
        zh: {
          nav: {
            home: '首页',
            buy: '购买',
            projects: '项目',
            services: '服务',
            contact: '联系我们'
          },
          hero: {
            title: '寻找您的梦想',
            subtitle: '迪拜和阿联酋优质房地产平台'
          },
          footer: {
          followUs: '关注我们',
          facebook: '脸书',
          twitter: '推特',
          instagram: '照片墙',
          linkedin: '领英',
          privacyPolicy: '隐私政策',
          termsOfService: '服务条款',
          cookiePolicy: 'Cookie政策'
        },
        companyIntro: {
          title: '寻找您开发机会的新方式',
          description: '发现您的下一个开发项目，我们列出了10多个机会和专业服务。',
          agents: '代理',
          listings: '房源',
          countries: '国家'
        },
        properties: {
          sectionTitle: '探索我们的房产',
          sectionSubtitle: '发现各种优质房产',
          viewAllButton: '查看特色房产',
          apartment: '公寓',
          villa: '别墅',
          townhouse: '联排别墅',
          penthouse: '顶层公寓',
          duplex: '复式公寓',
          residentialForSale: '住宅出售'
        },
        contact: {
          title: '联系我们',
          description: '有问题吗？联系我们的团队获取帮助。'
        },
        footer: {
          quickLinks: '快速链接',
          services: '服务',
          contactUs: '联系我们',
          followUs: '关注我们',
          buyProperty: '购买房产',
          sellProperty: '出售房产',
          rentProperty: '租赁房产',
          propertyManagement: '物业管理',
          aboutUs: '关于我们',
          privacyPolicy: '隐私政策',
          termsOfService: '服务条款',
          cookiePolicy: 'Cookie政策',
          tagline: '迪拜和阿联酋的高端房地产平台',
          social: {
            facebook: '脸书',
            twitter: '推特',
            instagram: 'Instagram',
            linkedin: 'LinkedIn'
          }
        },
        popup: {
          callTitle: '致电我们',
          chatTitle: '与AI助手聊天',
          copyButton: '复制',
          copiedText: '已复制',
          callNow: '立即拨打',
          phonePlaceholder: '电话号码',
          chatPlaceholder: '在此输入您的消息...',
          welcomeMessage: '您好！我是您的房地产助手。今天我能为您提供什么帮助？您可以询问房产、服务或联系信息。'
        },
        stats: {
          missionTitle: '我们的使命是重新定义有利于客户的房地产服务。',
          missionSubtitle: '专业房地产服务',
          stat1Title: '联系专家顾问',
          stat1Desc: '专家房地产协助',
          stat1Text: '访问我们由400多名专家代理组成的团队，随时为您提供帮助。我们经验丰富的房地产专家团队可为您的所有房产需求提供个性化协助，从咨询到完成交易。',
          stat2Title: '列出您的房产',
          stat2Desc: '专业营销解决方案',
          stat2Text: '通过我们的专业营销策略列出您的房产，实现最优价值。通过我们全面的营销方法，包括专业摄影、虚拟游览和有针对性的广告活动，最大化您房产的曝光率。',
          stat3Title: '下载报告',
          stat3Desc: '市场洞察助您明智决策',
          stat3Text: '下载最新的2025年第一季度综合迪拜房地产市场报告。通过我们详细的季度报告获取有价值的市场趋势、房产价值和投资机会洞察，涵盖整个迪拜房地产景观。',
          stat4Title: '探索迪拜项目',
          stat4Desc: '发现您的梦想房产',
          stat4Text: '从我们广泛的迪拜项目组合中浏览并找到您理想的房产。在迪拜最受欢迎的位置发现各种住宅和商业房产，每个项目都有详细的信息和规格。'
        },
        property: {
          developer: '开发商',
          area: '区域',
          handoverDate: '交付日期'
        },
        form: {
          fillAllFields: '请填写所有字段',
          validEmail: '请输入有效的电子邮件地址',
          sending: '发送中...',
          sendMessage: '发送消息',
          successMessage: '您的消息已成功发送至 Info@hawsonhouse.com',
          errorMessage: '发送消息时出错。请稍后再试。'
        }
        },
        ar: {
          nav: {
            home: 'الرئيسية',
            buy: 'شراء',
            projects: 'المشاريع',
            services: 'الخدمات',
            contact: 'اتصل بنا'
          },
          hero: {
            title: 'اكتشف حلمك',
            subtitle: 'منصة عقارات رائدة في دبي والإمارات العربية المتحدة'
          },
          footer: {
          followUs: 'تابعنا',
          facebook: 'فيسبوك',
          twitter: 'تويتر',
          instagram: 'إنستجرام',
          linkedin: 'لينكدإن',
          privacyPolicy: 'سياسة الخصوصية',
          termsOfService: 'شروط الخدمة',
          cookiePolicy: 'سياسة ملفات تعريف الارتباط'
        },
        companyIntro: {
          title: 'الطريقة الجديدة للعثور على فرص التطوير الخاصة بك',
          description: 'اكتشف مشروع التطوير التالي لديك مع أكثر من 10 فرص وخدمات احترافية مدرجة.',
          agents: 'الوكلاء',
          listings: 'الوحدات العقارية',
          countries: 'الدول'
        },
        properties: {
          sectionTitle: 'استكشف عقاراتنا',
          sectionSubtitle: 'اكتشف مجموعة واسعة من العقارات العالية الجودة',
          viewAllButton: 'عرض العقارات المميزة',
          apartment: 'شقة',
          villa: 'فيلا',
          townhouse: 'منزل نصفي',
          penthouse: 'شقة علوية',
          duplex: 'دوبلكس',
          residentialForSale: 'سكني للبيع'
        },
        contact: {
          title: 'اتصل بنا',
          description: 'هل لديك أسئلة؟ اتصل بفريقنا للمساعدة.'
        },
        footer: {
          quickLinks: 'روابط سريعة',
          services: 'الخدمات',
          contactUs: 'اتصل بنا',
          followUs: 'تابعنا',
          buyProperty: 'شراء العقار',
          sellProperty: 'بيع العقار',
          rentProperty: 'إيجار العقار',
          propertyManagement: 'إدارة العقارات',
          aboutUs: 'من نحن',
          privacyPolicy: 'سياسة الخصوصية',
          termsOfService: 'شروط الخدمة',
          cookiePolicy: 'سياسة ملفات تعريف الارتباط',
          tagline: 'منصة عقارية متميزة في دبي والإمارات العربية المتحدة',
          social: {
            facebook: 'فيسبوك',
            twitter: 'تويتر',
            instagram: 'إنستجرام',
            linkedin: 'لنكيدإن'
          }
        },
        popup: {
          callTitle: 'اتصل بنا',
          chatTitle: 'تحدث مع مساعد الذكاء الاصطناعي',
          copyButton: 'نسخ',
          copiedText: 'تم النسخ',
          callNow: 'اتصل الآن',
          phonePlaceholder: 'رقم الهاتف',
          chatPlaceholder: 'اكتب رسالتك هنا...',
          welcomeMessage: 'مرحباً! أنا مساعدك العقاري. كيف يمكنني مساعدتك اليوم؟ يمكنك طرح أسئلة حول العقارات أو الخدمات أو معلومات الاتصال.'
        },
        stats: {
          missionTitle: 'مهمتنا هي إعادة تعريف العقارات لصالح العميل.',
          missionSubtitle: 'خدمات العقارات المحترفة',
          stat1Title: 'اتصل بمتخصص',
          stat1Desc: 'مساعدة عقارية متخصصة',
          stat1Text: 'استخدم فريقنا المخصص المكون من أكثر من 400 وكيلًا متخصصًا جاهزين للمساعدة. فريقنا من المتخصصين في العقارات ذوي الخبرة متوفرون لتقديم مساعدة شخصية لكل احتياجاتك العقارية، من الاستفسارات حتى إغلاق الصفقات.',
          stat2Title: 'قم بتسجيل عقارك',
          stat2Desc: 'حلول تسويقية احترافية',
          stat2Text: 'حقق قيمة مثلى عن طريق تسجيل عقارك باستخدام استراتيجياتنا التسويقية المتخصصة. عزز تعرض عقارك بمنهجتنا التسويقية الشاملة، بما في ذلك التصوير المحترف والجولات الافتراضية والحملات الإعلانية المستهدفة.',
          stat3Title: 'تحميل التقرير',
          stat3Desc: 'رؤى سوق للمقررات التفكيرية المبنية على المعرفة',
          stat3Text: 'تحميل أحدث تقرير粽 comprehensive سوق العقارات في دبي الربع الأول لعام 2025. احصل على رؤى قيمة عن اتجاهات السوق وقيم العقارات وفرص الاستثمار مع تقريرنا التفصيلي الربعي الذي يغطي كافة جوانب سوق العقارات في دبي.',
          stat4Title: 'استكشف مشاريع دبي',
          stat4Desc: 'اكتشف عقار أحلامك',
          stat4Text: 'تصفح وابحث عن عقارك المثالي من مجموعة واسعة من مشاريع دبي. اكتشف مجموعة واسعة من العقارات السكنية والتجارية عبر أهم المواقع المرجوة في دبي، مع معلومات تفصيلية ومواصفات لكل مشروع.'
        },
        property: {
          developer: 'المطور',
          area: 'المنطقة',
          handoverDate: 'تاريخ التسليم'
        },
        form: {
          fillAllFields: 'يرجى ملء جميع الحقول',
          validEmail: 'يرجى إدخال عنوان بريد إلكتروني صالح',
          sending: 'جاري الإرسال...',
          sendMessage: 'إرسال الرسالة',
          successMessage: 'تم إرسال رسالتك بنجاح إلى Info@hawsonhouse.com',
          errorMessage: 'حدث خطأ أثناء إرسال رسالتك. يرجى المحاولة لاحقًا.'
        }
        }
      };
      
      // 切换语言下拉菜单显示/隐藏
      languageButton.addEventListener('click', (e) => {
        e.stopPropagation();
        console.log('Language button clicked, toggling dropdown');
        languageDropdown.style.display = languageDropdown.style.display === 'block' ? 'none' : 'block';
      });
      
      // 点击其他区域关闭下拉菜单
      document.addEventListener('click', () => {
        if (languageDropdown.style.display === 'block') {
          languageDropdown.style.display = 'none';
        }
      });
      
      // 防止点击下拉菜单内部时关闭菜单
      languageDropdown.addEventListener('click', (e) => {
        e.stopPropagation();
      });
      
      // 添加语言选项的悬停效果
      languageOptions.forEach(option => {
        option.addEventListener('mouseenter', () => {
          option.style.backgroundColor = 'rgba(0,0,0,0.05)';
        });
        option.addEventListener('mouseleave', () => {
          option.style.backgroundColor = 'transparent';
        });
      });
      
      // 处理语言切换
      languageOptions.forEach(option => {
        option.addEventListener('click', () => {
          const lang = option.getAttribute('data-lang');
          console.log(`Language option clicked: ${lang}`);
          
          // 更新按钮显示的语言
          languageButton.textContent = option.textContent + ' ▼';
          
          // 关闭下拉菜单
          languageDropdown.style.display = 'none';
          
          // 更新当前语言变量，供表单验证使用
          if (window.updateCurrentLanguage) {
            window.updateCurrentLanguage(lang);
          }
          
          // 更新页面文本
          updatePageLanguage(lang);
        });
      });
      
      // 更新页面语言函数
      function updatePageLanguage(lang) {
        console.log(`Updating page language to: ${lang}`);
        const translationsObj = translations[lang];
        
        if (translationsObj) {
          // 更新导航栏文本
          const navLinks = document.querySelectorAll('.nav-links a');
          if (navLinks.length >= 5) {
            navLinks[0].textContent = translationsObj.nav.home;
            navLinks[1].textContent = translationsObj.nav.buy;
            navLinks[2].textContent = translationsObj.nav.projects;
            navLinks[3].textContent = translationsObj.nav.services;
            navLinks[4].textContent = translationsObj.nav.contact;
          }
          
          // 更新英雄区域文本
          const heroTitle = document.querySelector('.hero-content h1');
          const heroSubtitle = document.querySelector('.hero-content p');
          if (heroTitle && heroSubtitle) {
            heroTitle.textContent = translationsObj.hero.title;
            heroSubtitle.textContent = translationsObj.hero.subtitle;
          }
          
          // 更新公司介绍部分文本
          const companyIntroTitle = document.querySelector('.company-intro-text h2');
          const companyIntroDesc = document.querySelector('.company-intro-text p');
          const companyStatsLabels = document.querySelectorAll('.company-stat .stat-label');
          if (companyIntroTitle && companyIntroDesc) {
            companyIntroTitle.textContent = translationsObj.companyIntro.title;
            companyIntroDesc.textContent = translationsObj.companyIntro.description;
          }
          if (companyStatsLabels.length >= 3) {
            companyStatsLabels[0].textContent = translationsObj.companyIntro.agents;
            companyStatsLabels[1].textContent = translationsObj.companyIntro.listings;
            companyStatsLabels[2].textContent = translationsObj.companyIntro.countries;
          }
          
          // 更新统计数据区域文本
          const statsHeader = document.querySelector('.stats-header h2');
          const statsSubheader = document.querySelector('.stats-header p');
          const statCards = document.querySelectorAll('.stat-card');
          if (statsHeader && statsSubheader) {
            statsHeader.textContent = translationsObj.stats.missionTitle;
            statsSubheader.textContent = translationsObj.stats.missionSubtitle;
          }
          if (statCards.length >= 4) {
            // 第一个统计卡片
            const stat1Title = statCards[0].querySelector('.stat-value');
            const stat1Desc = statCards[0].querySelector('.stat-title');
            const stat1Text = statCards[0].querySelector('p');
            if (stat1Title && stat1Desc && stat1Text) {
              stat1Title.textContent = translationsObj.stats.stat1Title;
              stat1Desc.textContent = translationsObj.stats.stat1Desc;
              stat1Text.textContent = translationsObj.stats.stat1Text;
            }
            
            // 第二个统计卡片
            const stat2Title = statCards[1].querySelector('.stat-value');
            const stat2Desc = statCards[1].querySelector('.stat-title');
            const stat2Text = statCards[1].querySelector('p');
            if (stat2Title && stat2Desc && stat2Text) {
              stat2Title.textContent = translationsObj.stats.stat2Title;
              stat2Desc.textContent = translationsObj.stats.stat2Desc;
              stat2Text.textContent = translationsObj.stats.stat2Text;
            }
            
            // 第三个统计卡片
            const stat3Title = statCards[2].querySelector('.stat-value');
            const stat3Desc = statCards[2].querySelector('.stat-title');
            const stat3Text = statCards[2].querySelector('p');
            if (stat3Title && stat3Desc && stat3Text) {
              stat3Title.textContent = translationsObj.stats.stat3Title;
              stat3Desc.textContent = translationsObj.stats.stat3Desc;
              stat3Text.textContent = translationsObj.stats.stat3Text;
            }
            
            // 第四个统计卡片
            const stat4Title = statCards[3].querySelector('.stat-value');
            const stat4Desc = statCards[3].querySelector('.stat-title');
            const stat4Text = statCards[3].querySelector('p');
            if (stat4Title && stat4Desc && stat4Text) {
              stat4Title.textContent = translationsObj.stats.stat4Title;
              stat4Desc.textContent = translationsObj.stats.stat4Desc;
              stat4Text.textContent = translationsObj.stats.stat4Text;
            }
          }
          
          // 更新房产卡片中的静态文本
      const metaItems = document.querySelectorAll('.property-meta .meta-item');
      metaItems.forEach(item => {
        const text = item.textContent.trim();
        // 匹配开发商标签（中英文）并替换
        if (text.startsWith('Developer:') || text.startsWith('开发商:')) {
          item.innerHTML = item.innerHTML.replace(/^(Developer:|开发商:)/, translationsObj.property.developer + ':');
        } 
        // 匹配区域标签（中英文）并替换
        else if (text.startsWith('Area:') || text.startsWith('区域:')) {
          item.innerHTML = item.innerHTML.replace(/^(Area:|区域:)/, translationsObj.property.area + ':');
        } 
        // 匹配交付日期标签（中英文）并替换
        else if (text.startsWith('Handover Date:') || text.startsWith('交付日期:')) {
          item.innerHTML = item.innerHTML.replace(/^(Handover Date:|交付日期:)/, translationsObj.property.handoverDate + ':');
        }
      });
          
          // 更新表单相关文本
          const contactForm = document.querySelector('.contact-form');
          if (contactForm) {
            const nameInput = contactForm.querySelector('input[type="text"]');
            const emailInput = contactForm.querySelector('input[type="email"]');
            const messageInput = contactForm.querySelector('textarea');
            const submitButton = contactForm.querySelector('button[type="submit"]');
            
            if (nameInput && emailInput && messageInput && submitButton) {
              // 更新表单占位符文本
              nameInput.placeholder = lang === 'en' ? 'Your Name' : (lang === 'zh' ? '您的姓名' : 'اسمك');
              emailInput.placeholder = lang === 'en' ? 'Your Email' : (lang === 'zh' ? '您的邮箱' : 'بريدك الإلكتروني');
              messageInput.placeholder = lang === 'en' ? 'Your Message' : (lang === 'zh' ? '您的留言' : 'رسالتك');
              submitButton.textContent = translationsObj.form.sendMessage;
            }
          }
          
          // 更新房产展示区域文本
          const propertiesSectionHeader = document.querySelector('#properties .section-header');
          if (propertiesSectionHeader) {
            const propertiesTitle = propertiesSectionHeader.querySelector('h2');
            const propertiesSubtitle = propertiesSectionHeader.querySelector('p');
            const viewAllButton = propertiesSectionHeader.querySelector('.view-all-btn');
            
            if (propertiesTitle && propertiesSubtitle && viewAllButton) {
              propertiesTitle.textContent = translationsObj.properties.sectionTitle;
              propertiesSubtitle.textContent = translationsObj.properties.sectionSubtitle;
              viewAllButton.textContent = translationsObj.properties.viewAllButton;
            }
          }
          
          // 更新房产卡片中的类型和状态文本
          const propertyTypes = document.querySelectorAll('.property-type');
          const propertyStatuses = document.querySelectorAll('.property-status');
          
          // 更新房产类型
          propertyTypes.forEach(typeElement => {
            const typeText = typeElement.textContent.trim();
            // 中文类型到英文key的映射
            const chineseToKeyMap = {
              '公寓': 'apartment',
              '别墅': 'villa',
              '联排别墅': 'townhouse',
              '顶层公寓': 'penthouse',
              '复式公寓': 'duplex'
            };
            
            if (typeText.includes('|')) {
              // 处理复合类型
              const types = typeText.split('|').map(t => t.trim());
              const translatedTypes = types.map(t => {
                // 先尝试中文映射
                if (chineseToKeyMap[t]) {
                  return translationsObj.properties[chineseToKeyMap[t]];
                }
                // 再尝试直接匹配
                if (translationsObj.properties[t.toLowerCase()]) {
                  return translationsObj.properties[t.toLowerCase()];
                } else if (t.includes('Apartment')) {
                  return translationsObj.properties.apartment;
                } else if (t.includes('Villa')) {
                  return translationsObj.properties.villa;
                } else if (t.includes('Townhouse')) {
                  return translationsObj.properties.townhouse;
                } else if (t.includes('Penthouse')) {
                  return translationsObj.properties.penthouse;
                } else if (t.includes('Duplex')) {
                  return translationsObj.properties.duplex;
                }
                return t;
              });
              typeElement.textContent = translatedTypes.join(' | ');
            } else {
              // 处理单一类型
              // 先尝试中文映射
              if (chineseToKeyMap[typeText]) {
                typeElement.textContent = translationsObj.properties[chineseToKeyMap[typeText]];
              } else if (translationsObj.properties[typeText.toLowerCase()]) {
                typeElement.textContent = translationsObj.properties[typeText.toLowerCase()];
              } else if (typeText.includes('Apartment')) {
                typeElement.textContent = translationsObj.properties.apartment;
              } else if (typeText.includes('Villa')) {
                typeElement.textContent = translationsObj.properties.villa;
              } else if (typeText.includes('Townhouse')) {
                typeElement.textContent = translationsObj.properties.townhouse;
              } else if (typeText.includes('Penthouse')) {
                typeElement.textContent = translationsObj.properties.penthouse;
              } else if (typeText.includes('Duplex')) {
                typeElement.textContent = translationsObj.properties.duplex;
              }
            }
          });
          
          // 更新房产状态
          propertyStatuses.forEach(statusElement => {
            const statusText = statusElement.textContent.trim();
            if (statusText === 'Residential for Sale') {
              statusElement.textContent = translationsObj.properties.residentialForSale;
            }
          });
          
          // 更新联系区域文本
          const contactSection = document.querySelector('#contact');
          if (contactSection) {
            const contactTitle = contactSection.querySelector('h2');
            const contactDescription = contactSection.querySelector('p');
            
            if (contactTitle && contactDescription) {
              contactTitle.textContent = translationsObj.contact.title;
              contactDescription.textContent = translationsObj.contact.description;
            }
          }
          
          // 更新页脚文本
          const footer = document.querySelector('.footer');
          if (footer) {
            // 更新页脚标语
            const footerTagline = footer.querySelector('.footer-tagline');
            if (footerTagline) {
              footerTagline.textContent = translationsObj.footer.tagline;
            }
            
            // 更新页脚标题
            const quickLinksTitle = footer.querySelector('.footer-column:nth-child(1) h4');
            const servicesTitle = footer.querySelector('.footer-column:nth-child(2) h4');
            const contactUsTitle = footer.querySelector('.footer-column:nth-child(3) h4');
            const followUsTitle = footer.querySelector('.footer-social h4');
            
            if (quickLinksTitle) quickLinksTitle.textContent = translationsObj.footer.quickLinks;
            if (servicesTitle) servicesTitle.textContent = translationsObj.footer.services;
            if (contactUsTitle) contactUsTitle.textContent = translationsObj.footer.contactUs;
            if (followUsTitle) followUsTitle.textContent = translationsObj.footer.followUs;
            
            // 更新页脚链接文本
            const footerLinks = footer.querySelectorAll('.footer-links a');
            footerLinks.forEach(link => {
              const linkText = link.textContent.trim();
              if (linkText === 'Home') {
                link.textContent = translationsObj.nav.home;
              } else if (linkText === 'Properties') {
                link.textContent = translationsObj.nav.projects;
              } else if (linkText === 'About Us') {
                link.textContent = translationsObj.footer.aboutUs;
              } else if (linkText === 'Contact') {
                link.textContent = translationsObj.nav.contact;
              } else if (linkText === 'Buy Property') {
                link.textContent = translationsObj.footer.buyProperty;
              } else if (linkText === 'Sell Property') {
                link.textContent = translationsObj.footer.sellProperty;
              } else if (linkText === 'Rent Property') {
                link.textContent = translationsObj.footer.rentProperty;
              } else if (linkText === 'Property Management') {
                link.textContent = translationsObj.footer.propertyManagement;
              }
            });
            
            // 更新社交媒体链接文本
            const socialLinks = footer.querySelectorAll('.social-links a, .footer-social .social-link');
            socialLinks.forEach(link => {
              const linkText = link.textContent.trim();
              if (linkText === 'Facebook' || linkText === '脸书' || linkText === 'فيسبوك') {
                link.textContent = translationsObj.footer.social.facebook;
              } else if (linkText === 'Twitter' || linkText === '推特' || linkText === 'تويتر') {
                link.textContent = translationsObj.footer.social.twitter;
              } else if (linkText === 'Instagram' || linkText === 'Instagram' || linkText === 'إنستجرام') {
                link.textContent = translationsObj.footer.social.instagram;
              } else if (linkText === 'LinkedIn' || linkText === 'LinkedIn' || linkText === 'لينكدإن' || linkText === 'لنكيدإن') {
                link.textContent = translationsObj.footer.social.linkedin;
              }
            });
            
            // 更新底部条款文本
            const termsLinks = footer.querySelectorAll('.footer-terms a');
            termsLinks.forEach(link => {
              const linkText = link.textContent.trim();
              if (linkText === 'Privacy Policy' || linkText === '隐私政策' || linkText === 'سياسة الخصوصية') {
                link.textContent = translationsObj.footer.privacyPolicy;
              } else if (linkText === 'Terms of Service' || linkText === '服务条款' || linkText === 'شروط الخدمة') {
                link.textContent = translationsObj.footer.termsOfService;
              } else if (linkText === 'Cookie Policy' || linkText === 'Cookie政策' || linkText === 'سياسة ملفات تعريف الارتباط') {
                link.textContent = translationsObj.footer.cookiePolicy;
              }
            });
          }
          
          // 更新弹窗文本
          const popupContainer = document.querySelector('.popup-container');
          if (popupContainer) {
            const popupTitle = document.querySelector('#popup-title');
            const copyButton = document.querySelector('#copy-button');
            const callNowButton = document.querySelector('.call-button');
            const chatInput = document.querySelector('#chat-input');
            const phoneContent = document.querySelector('#phone-content');
            const chatContent = document.querySelector('#chat-content');
            
            // 更新欢迎消息
            const botWelcomeMessage = document.querySelector('.message.bot-message .message-content p');
            if (botWelcomeMessage) {
              botWelcomeMessage.textContent = translationsObj.popup.welcomeMessage;
            }
            
            // 更新按钮和输入框文本
            if (copyButton) {
              // 只更新文本部分，保留图标
              if (copyButton.innerHTML.includes('fa-copy')) {
                copyButton.innerHTML = '<i class="fas fa-copy"></i> ' + translationsObj.popup.copyButton;
              }
            }
            
            if (callNowButton) {
              // 只更新文本部分，保留图标
              if (callNowButton.innerHTML.includes('fa-phone-alt')) {
                callNowButton.innerHTML = '<i class="fas fa-phone-alt"></i> ' + translationsObj.popup.callNow;
              }
            }
            
            if (chatInput) {
              chatInput.placeholder = translationsObj.popup.chatPlaceholder;
            }
            
            // 如果弹窗当前显示，更新标题
            if (popupTitle && popupContainer.style.display !== 'none') {
              if (phoneContent && phoneContent.style.display === 'block') {
                popupTitle.textContent = translationsObj.popup.callTitle;
              } else if (chatContent && chatContent.style.display === 'block') {
                popupTitle.textContent = translationsObj.popup.chatTitle;
              }
            }
          }
        }
      }
      
      // 暴露更新页面语言函数到全局，供featured-properties.html页面使用
      window.updatePageLanguage = updatePageLanguage;
    }, 100); // 短暂延迟确保DOM元素已创建
  }
  
  // 确保在导航栏创建后初始化语言切换功能
  initLanguageSwitcher();
  
  // 创建英雄区域
  const heroSection = document.createElement('section');
  heroSection.className = 'hero';
  heroSection.innerHTML = `
    <!-- 使用标准video标签实现无进度条循环播放 -->
    <video id="hero-video" class="hero-video" autoplay muted loop playsinline>
      <source src="/videos/2.mp4" type="video/mp4">
      Your browser does not support the video tag.
    </video>
    <div id="hero-content" class="hero-content" style="opacity: 0; transition: opacity 0.8s ease-in-out;">
      <h1>Find Your Dream</h1>
      <p>Premium real estate platform in Dubai and UAE</p>
    </div>
  `;
  
  // 添加video样式
  const videoStyle = document.createElement('style');
  videoStyle.textContent = `
    .hero-video {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
      z-index: -1;
    }
  `;
  document.head.appendChild(videoStyle);

  // 添加文字内容显示/隐藏的循环逻辑
  const heroContent = heroSection.querySelector('#hero-content');
  const heroVideo = heroSection.querySelector('#hero-video');
  let fadeInTimeout;
  let fadeOutTimeout;
  
  // 显示文字函数
  function showHeroContent() {
    // 先清除可能存在的定时器
    if (fadeOutTimeout) clearTimeout(fadeOutTimeout);
    
    // 显示文字
    heroContent.style.opacity = '1';
    
    // 设置20秒后隐藏文字
    fadeOutTimeout = setTimeout(() => {
      heroContent.style.opacity = '0';
    }, 20000); // 20秒后淡出
  }
  
  // 初始显示逻辑
  if (heroVideo.readyState >= 3) {
    // 视频已加载，5秒后显示文字
    fadeInTimeout = setTimeout(showHeroContent, 5000);
  } else {
    // 视频未加载，等待加载完成后5秒显示文字
    heroVideo.addEventListener('loadeddata', () => {
      fadeInTimeout = setTimeout(showHeroContent, 5000);
    });
  }
  
  // 监听视频播放事件，确保在视频循环时重新显示文字
  heroVideo.addEventListener('timeupdate', () => {
    // 当视频接近开始（1秒内）并且文字当前是隐藏状态时，重新触发显示逻辑
    if (heroVideo.currentTime < 1 && heroContent.style.opacity === '0') {
      if (fadeInTimeout) clearTimeout(fadeInTimeout);
      fadeInTimeout = setTimeout(showHeroContent, 5000); // 视频重新开始后5秒再次显示
    }
  });
  
  // 清理函数
  function cleanupTimers() {
    if (fadeInTimeout) clearTimeout(fadeInTimeout);
    if (fadeOutTimeout) clearTimeout(fadeOutTimeout);
  }
  
  // 页面卸载时清理定时器
  window.addEventListener('beforeunload', cleanupTimers);
  
  // 创建房产展示区域
  const propertiesSection = document.createElement('section');
  propertiesSection.id = 'properties';
  propertiesSection.className = 'properties';
  propertiesSection.innerHTML = `
    <div class="section-header">
      <div class="header-content-wrapper">
        <div class="header-text">
          <h2>Explore Our Properties</h2>
          <p>Discover a wide range of premium properties</p>
        </div>
        <a href="/featured-properties.html" class="view-all-btn">View Featured Properties</a>
      </div>
    </div>
    <div class="properties-grid">
      <!-- 第一个新房产卡片 -->
      <div class="property-card">
        <div class="property-carousel">
          <button class="favorite-btn">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
            </svg>
          </button>
          <div class="carousel-slides">
            <div class="carousel-slide">
              <img src="/images_new/image/1/71.jpg" alt="Serenia Residences" />
            </div>
            <div class="carousel-slide">
              <img src="/images_new/image/1/271.jpg" alt="Serenia Residences" />
            </div>
            <div class="carousel-slide">
              <img src="/images_new/image/1/281.jpg" alt="Serenia Residences" />
            </div>
            <div class="carousel-slide">
              <img src="/images_new/image/1/291.jpg" alt="Serenia Residences" />
            </div>
            <div class="carousel-slide">
              <img src="/images_new/image/1/611.jpg" alt="Serenia Residences" />
            </div>
          </div>
          <div class="carousel-indicators">
            <button class="carousel-indicator active"></button>
            <button class="carousel-indicator"></button>
            <button class="carousel-indicator"></button>
            <button class="carousel-indicator"></button>
            <button class="carousel-indicator"></button>
          </div>
        </div>
        <div class="property-details">
          <h3>Montiva by Vida</h3>
          <p class="property-type">Apartment</p>
          <div class="property-price">1,910,000 AED</div>
          <p class="property-status">Residential for Sale</p>
          <div class="property-meta">
            <div class="meta-item">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="3" y1="9" x2="21" y2="9"></line>
                <line x1="9" y1="21" x2="9" y2="9"></line>
              </svg>
              Developer: Emaar
            </div>
            <div class="meta-item">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="2" y1="12" x2="22" y2="12"></line>
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
              </svg>
              Area: Dubai Creek Harbour, Dubai
            </div>
            <!-- Listed On removed -->
            <div class="meta-item">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="16" y1="2" x2="16" y2="6"></line>
                <line x1="8" y1="2" x2="8" y2="6"></line>
                <line x1="3" y1="10" x2="21" y2="10"></line>
              </svg>
              Handover Date: 09-2029
            </div>
          </div>
        </div>
      </div>

      <!-- 第二个新房产卡片 -->
      <div class="property-card">
        <div class="property-carousel">
          <button class="favorite-btn">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
            </svg>
          </button>
          <div class="carousel-slides">
            <div class="carousel-slide">
              <img src="/images_new/image/2/snapedit_17424527004121.jpg" alt="The Palace Villas Ostra" />
            </div>
            <div class="carousel-slide">
              <img src="/images_new/image/2/snapedit_17424527819781.jpg" alt="The Palace Villas Ostra" />
            </div>
            <div class="carousel-slide">
              <img src="/images_new/image/2/snapedit_17424529503561.jpg" alt="The Palace Villas Ostra" />
            </div>
            <div class="carousel-slide">
              <img src="/images_new/image/2/snapedit_17424530803781.jpg" alt="The Palace Villas Ostra" />
            </div>
            <div class="carousel-slide">
              <img src="/images_new/image/2/snapedit_17424532045721.jpg" alt="The Palace Villas Ostra" />
            </div>
          </div>
          <div class="carousel-indicators">
            <button class="carousel-indicator active"></button>
            <button class="carousel-indicator"></button>
            <button class="carousel-indicator"></button>
            <button class="carousel-indicator"></button>
            <button class="carousel-indicator"></button>
          </div>
        </div>
        <div class="property-details">
          <h3>The Palace Villas Ostra</h3>
          <p class="property-type">Villa</p>
          <div class="property-price">13,130,000 AED</div>
          <p class="property-status">Residential for Sale</p>
          <div class="property-meta">
            <div class="meta-item">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="3" y1="9" x2="21" y2="9"></line>
                <line x1="9" y1="21" x2="9" y2="9"></line>
              </svg>
              Developer: Emaar
            </div>
            <div class="meta-item">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="2" y1="12" x2="22" y2="12"></line>
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
              </svg>
              Area: The Oasis by Emaar, Dubai
            </div>
            <!-- Listed On removed -->
            <div class="meta-item">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="16" y1="2" x2="16" y2="6"></line>
                <line x1="8" y1="2" x2="8" y2="6"></line>
                <line x1="3" y1="10" x2="21" y2="10"></line>
              </svg>
              Handover Date: 09-2029
            </div>
          </div>
        </div>
      </div>

      <!-- 第三个新房产卡片 -->
      <div class="property-card">
        <div class="property-carousel">
          <button class="favorite-btn">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
            </svg>
          </button>
          <div class="carousel-slides">
            <div class="carousel-slide">
              <img src="/images_new/image/3/11.jpg" alt="Rosehill" />
            </div>
            <div class="carousel-slide">
              <img src="/images_new/image/3/snapedit_17521374158161.jpg" alt="Rosehill" />
            </div>
            <div class="carousel-slide">
              <img src="/images_new/image/3/snapedit_17521374465641.jpg" alt="Rosehill" />
            </div>
            <div class="carousel-slide">
              <img src="/images_new/image/3/snapedit_17521375260501.jpg" alt="Rosehill" />
            </div>
            <div class="carousel-slide">
              <img src="/images_new/image/3/snapedit_17521376417081.jpg" alt="Rosehill" />
            </div>
          </div>
          <div class="carousel-indicators">
            <button class="carousel-indicator active"></button>
            <button class="carousel-indicator"></button>
            <button class="carousel-indicator"></button>
            <button class="carousel-indicator"></button>
            <button class="carousel-indicator"></button>
          </div>
        </div>
        <div class="property-details">
          <h3>Rosehill</h3>
          <p class="property-type">Apartment</p>
          <div class="property-price">1,600,000 AED</div>
          <p class="property-status">Residential for Sale</p>
          <div class="property-meta">
            <div class="meta-item">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="3" y1="9" x2="21" y2="9"></line>
                <line x1="9" y1="21" x2="9" y2="9"></line>
              </svg>
              Developer: Emaar
            </div>
            <div class="meta-item">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="2" y1="12" x2="22" y2="12"></line>
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
              </svg>
              Area: Dubai Hills Estate, Dubai
            </div>
            <!-- Listed On removed -->
            <div class="meta-item">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="16" y1="2" x2="16" y2="6"></line>
                <line x1="8" y1="2" x2="8" y2="6"></line>
                <line x1="3" y1="10" x2="21" y2="10"></line>
              </svg>
              Handover Date: 06-2029
            </div>
          </div>
        </div>
      </div>

      <!-- 第四个新房产卡片 -->
      <div class="property-card">
        <div class="property-carousel">
          <button class="favorite-btn">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
            </svg>
          </button>
          <div class="carousel-slides">
            <div class="carousel-slide">
              <img src="/images_new/image/4/img291.jpg" alt="Golf Hillside" />
            </div>
            <div class="carousel-slide">
              <img src="/images_new/image/4/img371.jpg" alt="Golf Hillside" />
            </div>
            <div class="carousel-slide">
              <img src="/images_new/image/4/img3811.jpg" alt="Golf Hillside" />
            </div>
            <div class="carousel-slide">
              <img src="/images_new/image/4/img611.jpg" alt="Golf Hillside" />
            </div>
            <div class="carousel-slide">
              <img src="/images_new/image/4/img961.jpg" alt="Golf Hillside" />
            </div>
          </div>
          <div class="carousel-indicators">
            <button class="carousel-indicator active"></button>
            <button class="carousel-indicator"></button>
            <button class="carousel-indicator"></button>
            <button class="carousel-indicator"></button>
            <button class="carousel-indicator"></button>
          </div>
        </div>
        <div class="property-details">
          <h3>Golf Hillside</h3>
          <p class="property-type">Apartment</p>
          <div class="property-price">2,730,000 AED</div>
          <p class="property-status">Residential for Sale</p>
          <div class="property-meta">
            <div class="meta-item">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="3" y1="9" x2="21" y2="9"></line>
                <line x1="9" y1="21" x2="9" y2="9"></line>
              </svg>
              Developer: Emaar
            </div>
            <div class="meta-item">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="2" y1="12" x2="22" y2="12"></line>
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
              </svg>
              Area: Dubai Hills Estate, Dubai
            </div>
            <!-- Listed On removed -->
            <div class="meta-item">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="16" y1="2" x2="16" y2="6"></line>
                <line x1="8" y1="2" x2="8" y2="6"></line>
                <line x1="3" y1="10" x2="21" y2="10"></line>
              </svg>
              Handover Date: 12-2028
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
  
  // 创建公司使命区域（已清空内容）
  const aboutSection = document.createElement('section');
  aboutSection.id = 'about';
  aboutSection.className = 'about';
  aboutSection.innerHTML = '';
  
  // 创建统计数据区域
  const statsSection = document.createElement('section');
  statsSection.id = 'stats';
  statsSection.className = 'stats';
  statsSection.innerHTML = `
    <!-- 主题文本 -->
    <div class="stats-header">
      <h2>Our mission is to redefine real<br>estate in the customer's favor.</h2>
      <p>Lorem ipsum dolor sit amet</p>
    </div>
    
    <div class="stats-grid">
      <div class="stat-card">
        <div class="stat-icon"><img src="/icons/user-icon.svg" alt="User icon" /></div>
        <div class="stat-value">Connect with a Specialist</div>
        <div class="stat-title">Expert Real Estate Assistance</div>
        <p>Access our dedicated team of over 400+ expert agents ready to assist you. Our team of experienced real estate specialists is available to provide personalized assistance for all your property needs, from inquiries to closing deals.</p>
      </div>
      <div class="stat-card">
        <div class="stat-icon"><img src="/icons/property-icon.svg" alt="Property icon" /></div>
        <div class="stat-value">List Your Property</div>
        <div class="stat-title">Professional Marketing Solutions</div>
        <p>Achieve optimal value by listing your property with our expert marketing strategies. Maximize your property's exposure with our comprehensive marketing approach, including professional photography, virtual tours, and targeted advertising campaigns.</p>
      </div>
      <div class="stat-card">
        <div class="stat-icon"><img src="/icons/report-icon.svg" alt="Report icon" /></div>
        <div class="stat-value">Download Report</div>
        <div class="stat-title">Market Insights for Informed Decisions</div>
        <p>Download the latest Comprehensive Dubai Real Estate Market Report Q1 2025. Gain valuable insights into market trends, property values, and investment opportunities with our detailed quarterly report covering the entire Dubai real estate landscape.</p>
      </div>
      <div class="stat-card">
        <div class="stat-icon"><img src="/icons/explore-icon.svg" alt="Explore icon" /></div>
        <div class="stat-value">Explore Dubai Projects</div>
        <div class="stat-title">Discover Your Dream Property</div>
        <p>Browse and find your ideal property from our extensive portfolio of Dubai projects. Discover a wide range of residential and commercial properties across Dubai's most sought-after locations, with detailed information and specifications for each project.</p>
      </div>
    </div>
  `;
  
  // 创建联系区域
  const contactSection = document.createElement('section');
  contactSection.id = 'contact';
  contactSection.className = 'contact';
  contactSection.innerHTML = `
    <div class="contact-content">
      <h2>Get in Touch</h2>
      <p>Have questions? Reach out to our team for assistance.</p>
      <form class="contact-form">
        <input type="text" placeholder="Your Name" />
        <input type="email" placeholder="Your Email" />
        <textarea placeholder="Your Message"></textarea>
        <button type="submit" style="background-color: #1F2122; color: white; border: none; padding: 12px 24px; font-size: 16px; cursor: pointer; transition: background-color 0.3s ease;">Send Message</button>
      </form>
    </div>
  `;
  
  // 创建页脚
  const footer = document.createElement('footer');
  footer.className = 'footer';
  footer.innerHTML = `
    <div class="footer-container">
      <!-- 左侧Logo区域 -->
      <div class="footer-brand">
        <div class="footer-logo" style="display: flex; align-items: center; gap: 10px;">
          <img src="/images_new/LOGO/2.png" alt="HOUSE Logo" style="height: 40px;">
          <span style="font-size: 1.5rem; font-weight: bold; color: white;">HOUSE</span>
        </div>
        <p class="footer-tagline">Premium real estate platform in Dubai and UAE</p>
      </div>
      
      <!-- 中间链接区域 -->
      <div class="footer-links-container">
        <div class="footer-column">
          <h4>Quick Links</h4>
          <ul class="footer-links">
            <li><a href="#">Home</a></li>
            <li><a href="#properties">Properties</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        
        <div class="footer-column">
          <h4>Services</h4>
          <ul class="footer-links">
            <li><a href="#">Buy Property</a></li>
            <li><a href="#">Sell Property</a></li>
            <li><a href="#">Rent Property</a></li>
            <li><a href="#">Property Management</a></li>
          </ul>
        </div>
        
        <div class="footer-column">
          <h4>Contact Us</h4>
          <ul class="footer-links">
            <li>Info@hawsonhouse.com</li>
            <li>+971 506956105</li>
            <li>Dubai Marina, Dubai</li>
          </ul>
        </div>
      </div>
      
      <!-- 右侧社交媒体区域 -->
      <div class="footer-social">
        <h4>Follow Us</h4>
        <div class="social-links">
          <a href="#" class="social-link">Facebook</a>
          <a href="#" class="social-link">Twitter</a>
          <a href="#" class="social-link">Instagram</a>
          <a href="#" class="social-link">LinkedIn</a>
        </div>
      </div>
    </div>
    
    <!-- 底部条款区域 -->
    <div class="footer-bottom">
      <div class="footer-terms">
        <a href="#">Privacy Policy</a>
        <a href="#">Terms of Service</a>
        <a href="#">Cookie Policy</a>
      </div>
    </div>
    
    <style>
      .footer {
        background-color: #1F2122;
        color: white;
        padding: 3rem 2rem;
        position: relative;
        margin-top: 4rem;
      }
      
      .footer-container {
        max-width: 1400px;
        margin: 0 auto;
        display: grid;
        grid-template-columns: 1fr 2fr 1fr;
        gap: 3rem;
        align-items: start; /* 让所有网格项顶部对齐 */
      }
      
      /* 响应式布局调整 - 移除订阅区域后的平衡 */
      .footer-social {
        display: flex;
        flex-direction: column;
        justify-content: center;
      }
      
      .footer-brand {
        display: flex;
        flex-direction: column;
        gap: 1rem;
      }
      
      .footer-tagline {
        color: rgba(255, 255, 255, 0.7);
        font-size: 1rem;
        max-width: 300px;
      }
      
      .footer-links-container {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 2rem;
      }
      
      .footer-column h4 {
        font-size: 1.1rem;
        margin-bottom: 1rem;
        color: white;
      }
      
      .footer-links {
        list-style: none;
        display: flex;
        flex-direction: column;
        gap: 0.8rem;
      }
      
      .footer-links li a {
        color: rgba(255, 255, 255, 0.7);
        text-decoration: none;
        transition: color 0.3s ease;
      }
      
      .footer-links li a:hover {
        color: white;
      }
      
      .footer-links li {
        color: rgba(255, 255, 255, 0.7);
      }
      
      .footer-social-subscribe {
        display: flex;
        flex-direction: column;
        gap: 2rem;
      }
      
      .social-links {
        display: flex;
        gap: 1rem;
        margin-top: 1rem;
      }
      
      .social-link {
        color: rgba(255, 255, 255, 0.7);
        text-decoration: none;
        transition: color 0.3s ease;
      }
      
      .social-link:hover {
        color: white;
      }
      
      .footer-subscribe p {
        color: rgba(255, 255, 255, 0.7);
        margin-bottom: 1rem;
        font-size: 0.9rem;
      }
      
      .footer-bottom {
        max-width: 1400px;
        margin: 2rem auto 0;
        padding-top: 2rem;
        display: flex;
        justify-content: center; /* 内容居中对齐 */
        align-items: center;
      }
      
      .footer-terms {
        display: flex;
        gap: 1.5rem;
      }
      
      .footer-terms a {
        color: rgba(255, 255, 255, 0.7);
        text-decoration: none;
        font-size: 0.9rem;
        transition: color 0.3s ease;
      }
      
      .footer-terms a:hover {
        color: white;
      }
      
      @media (max-width: 992px) {
        .footer-container {
          grid-template-columns: 1fr;
          gap: 2rem;
        }
        
        .footer-links-container {
          grid-template-columns: repeat(2, 1fr);
        }
        
        .footer-bottom {
          flex-direction: column;
          gap: 1rem;
          text-align: center;
        }
      }
      
      @media (max-width: 576px) {
        .footer-links-container {
          grid-template-columns: 1fr;
        }
        
        .social-links {
          flex-wrap: wrap;
        }
        
        .subscribe-form {
          flex-direction: column;
          gap: 0.8rem;
        }
        
        .subscribe-form input {
          width: 100%;
        }
      }
    </style>
  `;
  
  // 创建公司介绍部分
  const companyIntroSection = document.createElement('section');
  companyIntroSection.id = 'company-intro';
  companyIntroSection.className = 'company-intro';
  companyIntroSection.innerHTML = `
    <div class="company-intro-content">
      <!-- 左侧16:9轮播图容器 -->
      <div class="company-intro-carousel-container">
        <div class="company-intro-carousel">
          <div class="carousel-slide" style="display: block;">
            <img src="/images_new/lunbotu/4141ab88-6dc1-4253-94d8-f4692ab7272f.png" alt="Property showcase 1">
          </div>
          <div class="carousel-slide" style="display: none;">
            <img src="/images_new/lunbotu/4c97ca9f-75a1-48b3-a48a-b1c609933793.webp" alt="Property showcase 2">
          </div>
          <div class="carousel-slide" style="display: none;">
            <img src="/images_new/lunbotu/微信图片_20250825105422.png" alt="Property showcase 3">
          </div>
        </div>
        <div class="carousel-indicators">
          <button class="carousel-indicator active"></button>
          <button class="carousel-indicator"></button>
          <button class="carousel-indicator"></button>
        </div>
      </div>
      
      <!-- 右侧文本内容 -->
      <div class="company-intro-text">
        <h2>The new way to find your<br>development opportunities</h2>
        <p>Discover your next development project with more than 10+opportunities and professional services listed.</p>
        <div class="company-stats">
          <div class="company-stat">
            <div class="stat-number">400+</div>
            <div class="stat-label">Agents</div>
          </div>
          <div class="company-stat">
            <div class="stat-number">4000+</div>
            <div class="stat-label">Listings</div>
          </div>
          <div class="company-stat">
            <div class="stat-number">80+</div>
            <div class="stat-label">Countries</div>
          </div>
        </div>
      </div>
    </div>
  `;

  // 将所有部分添加到应用中
  app.appendChild(header);
  app.appendChild(heroSection);
  app.appendChild(companyIntroSection);
  app.appendChild(propertiesSection);
  app.appendChild(aboutSection);
  app.appendChild(statsSection);
  app.appendChild(contactSection);
  app.appendChild(footer);

  // 初始化公司介绍轮播图
  function initCompanyIntroCarousel() {
    const carouselContainer = document.querySelector('.company-intro-carousel');
    const slides = carouselContainer.querySelectorAll('.carousel-slide');
    const indicators = document.querySelectorAll('.carousel-indicator');
    let currentIndex = 0;
    let intervalId;
    
    // 显示指定索引的幻灯片
    function showSlide(index) {
      // 确保索引有效
      index = ((index % slides.length) + slides.length) % slides.length;
      
      // 隐藏所有幻灯片
      slides.forEach(slide => {
        slide.style.opacity = '0';
        slide.style.zIndex = '1';
      });
      
      // 移除所有指示器的激活状态
      indicators.forEach(indicator => {
        indicator.classList.remove('active');
      });
      
      // 显示指定幻灯片
      slides[index].style.opacity = '1';
      slides[index].style.zIndex = '2';
      
      // 激活指定指示器
      indicators[index].classList.add('active');
      
      currentIndex = index;
    }
    
    // 启动自动轮播
    function startCarousel() {
      intervalId = setInterval(() => {
        const nextIndex = (currentIndex + 1) % slides.length;
        showSlide(nextIndex);
      }, 5000); // 5秒轮播一次
    }
    
    // 停止自动轮播
    function stopCarousel() {
      if (intervalId) {
        clearInterval(intervalId);
      }
    }
    
    // 为指示器添加点击事件
    indicators.forEach((indicator, index) => {
      indicator.addEventListener('click', () => {
        stopCarousel();
        showSlide(index);
        startCarousel();
      });
    });
    
    // 鼠标悬停时停止轮播，离开时继续
    carouselContainer.addEventListener('mouseenter', stopCarousel);
    carouselContainer.addEventListener('mouseleave', startCarousel);
    
    // 启动轮播
    startCarousel();
  }
  
  // 初始化房产卡片轮播
  function initPropertyCarousels() {
    // 获取所有房产卡片轮播
    const propertyCarousels = document.querySelectorAll('.property-carousel');
    
    propertyCarousels.forEach(carousel => {
      const slidesContainer = carousel.querySelector('.carousel-slides');
      const slides = carousel.querySelectorAll('.carousel-slide');
      const indicators = carousel.querySelectorAll('.carousel-indicator');
      let currentIndex = 0;
      let intervalId;
      
      // 设置第一张幻灯片为可见
      if (slides.length > 0) {
        slides.forEach(slide => {
          slide.style.opacity = '0';
          slide.style.zIndex = '1';
        });
        slides[currentIndex].style.opacity = '1';
        slides[currentIndex].style.zIndex = '2';
        
        // 设置第一张指示器为激活状态
        if (indicators.length > 0) {
          indicators[currentIndex].classList.add('active');
        }
      }
      
      // 显示指定索引的幻灯片
      function showSlide(index) {
        // 确保索引有效
        index = ((index % slides.length) + slides.length) % slides.length;
        
        // 隐藏所有幻灯片
        slides.forEach(slide => {
          slide.style.opacity = '0';
          slide.style.zIndex = '1';
        });
        
        // 移除所有指示器的激活状态
        indicators.forEach(indicator => {
          indicator.classList.remove('active');
        });
        
        // 显示指定幻灯片
        slides[index].style.opacity = '1';
        slides[index].style.zIndex = '2';
        
        // 激活指定指示器
        indicators[index].classList.add('active');
        
        currentIndex = index;
      }
      
      // 启动自动轮播
      function startCarousel() {
        intervalId = setInterval(() => {
          const nextIndex = (currentIndex + 1) % slides.length;
          showSlide(nextIndex);
        }, 3000); // 3秒轮播一次
      }
      
      // 停止自动轮播
      function stopCarousel() {
        if (intervalId) {
          clearInterval(intervalId);
        }
      }
      
      // 为指示器添加点击事件
      indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
          stopCarousel();
          showSlide(index);
          startCarousel();
        });
      });
      
      // 鼠标悬停时停止轮播，离开时继续
      carousel.addEventListener('mouseenter', stopCarousel);
      carousel.addEventListener('mouseleave', startCarousel);
      
      // 启动轮播
      startCarousel();
    });
  }
  
  // 调用公司介绍轮播图初始化函数
  initCompanyIntroCarousel();
  
  // 调用房产卡片轮播初始化函数
  initPropertyCarousels();
  
  // 实现爱心按钮点击变红和散色效果以及表单提交处理
  document.addEventListener('DOMContentLoaded', () => {
    // 定义全局当前语言变量，默认为英语
    let currentLang = 'en';
    
    // 处理联系表单提交 - 实现更接近真实的邮件发送流程
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
      contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        // 获取表单数据
        const name = contactForm.querySelector('input[type="text"]').value;
        const email = contactForm.querySelector('input[type="email"]').value;
        const message = contactForm.querySelector('textarea').value;
        
        // 获取当前语言的翻译
        const translations = {
          en: {
            fillAllFields: 'Please fill in all fields',
            validEmail: 'Please enter a valid email address',
            sending: 'Sending...',
            successMessage: 'Your message has been successfully sent to Info@hawsonhouse.com',
            errorMessage: 'There was an error sending your message. Please try again later.',
            sendMessage: 'Send Message'
          },
          zh: {
            fillAllFields: '请填写所有字段',
            validEmail: '请输入有效的电子邮件地址',
            sending: '发送中...',
            successMessage: '您的消息已成功发送至 Info@hawsonhouse.com',
            errorMessage: '发送消息时出错。请稍后再试。',
            sendMessage: '发送消息'
          },
          ar: {
            fillAllFields: 'يرجى ملء جميع الحقول',
            validEmail: 'يرجى إدخال عنوان بريد إلكتروني صالح',
            sending: 'جاري الإرسال...',
            successMessage: 'تم إرسال رسالتك بنجاح إلى Info@hawsonhouse.com',
            errorMessage: 'حدث خطأ أثناء إرسال رسالتك. يرجى المحاولة لاحقًا.',
            sendMessage: 'إرسال الرسالة'
          }
        };
        
        const t = translations[currentLang];
        
        // 简单验证
        if (!name || !email || !message) {
          alert(t.fillAllFields);
          return;
        }
        
        // 验证邮箱格式
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
          alert(t.validEmail);
          return;
        }
        
        // 在真实环境中，这里会发送AJAX请求到后端服务器
        // 后端服务器会处理邮件发送到Info@hawsonhouse.com
        try {
          // 显示加载状态
          const submitButton = contactForm.querySelector('button[type="submit"]');
          const originalButtonText = submitButton.textContent;
          submitButton.textContent = t.sending;
          submitButton.disabled = true;
          
          // 模拟API请求延迟
          await new Promise(resolve => setTimeout(resolve, 1500));
          
          // 构建表单数据对象
          const formData = {
            name: name,
            email: email,
            message: message,
            recipient: 'Info@hawsonhouse.com',
            timestamp: new Date().toISOString()
          };
          
          // 在控制台记录数据 - 在实际应用中这会发送到服务器
          console.log('Form data prepared for submission:', formData);
          console.log('This data would be sent to a backend server to be forwarded to Info@hawsonhouse.com');
          
          // 在实际项目中，这里应该是一个真实的API调用:
          /*
          const response = await fetch('/api/contact', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
          });
          
          if (!response.ok) {
            throw new Error('Failed to send message');
          }
          */
          
          // 显示成功消息
          alert(t.successMessage);
          
          // 重置表单
          contactForm.reset();
          
        } catch (error) {
          console.error('Error sending message:', error);
          alert(t.errorMessage);
        } finally {
          // 恢复按钮状态
          const submitButton = contactForm.querySelector('button[type="submit"]');
          submitButton.textContent = t.sendMessage;
          submitButton.disabled = false;
        }
      });
    }
    
    // 更新当前语言函数，供语言切换调用
    window.updateCurrentLanguage = function(lang) {
      currentLang = lang;
    };

    // 实现爱心按钮点击变红和散色效果
    // 获取所有爱心按钮
    const favoriteButtons = document.querySelectorAll('.favorite-btn');
    
    // 为每个按钮添加点击事件
    favoriteButtons.forEach(button => {
      button.addEventListener('click', (event) => {
        event.preventDefault();
        event.stopPropagation();
        
        // 切换active类
        const isActive = button.classList.toggle('active');
        
        // 如果是点击后激活，创建散色效果
        if (isActive) {
          createHeartBurstEffect(button);
        }
      });
    });
    
    // 创建散色效果函数
    function createHeartBurstEffect(button) {
      const buttonRect = button.getBoundingClientRect();
      const buttonX = buttonRect.left + buttonRect.width / 2;
      const buttonY = buttonRect.top + buttonRect.height / 2;
      
      // 创建10个粒子
      for (let i = 0; i < 10; i++) {
        const particle = document.createElement('div');
        particle.classList.add('heart-particle');
        
        // 随机位置 - 围绕按钮中心
        const angle = Math.random() * Math.PI * 2;
        const radius = Math.random() * 40 + 20;
        const x = buttonX + Math.cos(angle) * radius - window.scrollX;
        const y = buttonY + Math.sin(angle) * radius - window.scrollY;
        
        // 设置粒子位置
        particle.style.left = `${x}px`;
        particle.style.top = `${y}px`;
        particle.style.opacity = '1';
        
        // 添加到body
        document.body.appendChild(particle);
        
        // 动画结束后移除粒子
        setTimeout(() => {
          particle.remove();
        }, 1000);
      }
    }
  });

});
