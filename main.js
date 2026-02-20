
// ==========================================
// 1. DATA & TRANSLATIONS
// ==========================================

const causeData = {
  emergency: {
    images: ["assets/slide2.jpg", "assets/slide3.jpg", "assets/slide4.jpg"],
    en: {
      title: "Emergency Help for Orphan Children",
      amount: "PKR 10,000",
      desc: "In times of disaster and crisis, orphaned children are among the most vulnerable members of our communities. Without the protection and support of parents, they face overwhelming challenges — from hunger and homelessness to trauma and uncertainty about their future. Our Emergency Help for Orphan Children program is dedicated to responding quickly and compassionately, ensuring that no child is left alone in their darkest hour. We provide immediate access to safe shelter, nutritious food, clean water, medical care, and emotional support to help children recover and rebuild their lives. Beyond meeting urgent needs, we strive to restore hope, stability, and a sense of belonging. Every child deserves protection, dignity, and the opportunity to dream again — even after tragedy. Together, we stand as a source of strength and reassurance, committed to safeguarding their present and protecting their future."
    },
    ur: {
      title: "یتیم بچوں کے لیے ہنگامی امداد",
      amount: "PKR 10,000",
      desc: "آفات اور بحران کے وقت، یتیم بچے ہمارے معاشرے کے سب سے زیادہ کمزور افراد میں شامل ہوتے ہیں۔ والدین کے تحفظ اور سہارے کے بغیر، انہیں بھوک اور بے گھر ہونے سے لے کر صدمے اور مستقبل کے بارے میں بے یقینی تک بے پناہ چیلنجوں کا سامنا کرنا پڑتا ہے۔ ہمارا 'یتیم بچوں کے لیے ہنگامی امداد' پروگرام تیزی سے اور ہمدردی کے ساتھ جواب دینے کے لیے وقف ہے، اس بات کو یقینی بناتے ہوئے کہ کسی بھی بچے کو اس کی تاریک ترین گھڑی میں تنہا نہ چھوڑا جائے۔ ہم فوری طور پر محفوظ پناہ گاہ، غذائیت سے بھرپور خوراک، صاف پانی، طبی دیکھ بھال اور جذباتی مدد فراہم کرتے ہیں تاکہ بچوں کو صحت یاب ہونے اور اپنی زندگیوں کو دوبارہ تعمیر کرنے میں مدد ملے۔ فوری ضروریات کو پورا کرنے کے علاوہ، ہم امید، استحکام اور تعلق کے احساس کو بحال کرنے کی کوشش کرتے ہیں۔ ہر بچہ تحفظ، وقار اور دوبارہ خواب دیکھنے کے موقع کا مستحق ہے — یہاں تک کہ سانحے کے بعد بھی۔ ہم ایک طاقت اور یقین دہانی کے ذریعہ کے طور پر کھڑے ہیں، ان کے حال کی حفاظت اور مستقبل کو محفوظ بنانے کے لیے پرعزم ہیں۔"
    },
    tr: {
      title: "Yetim Çocuklar İçin Acil Yardım",
      amount: "PKR 10,000",
      desc: "Afet ve kriz zamanlarında, yetim çocuklar topluluklarımızın en savunmasız üyeleri arasındadır. Ebeveynlerinin koruması ve desteği olmadan, açlık ve evsizlikten travma ve gelecekleri hakkındaki belirsizliğe kadar ezici zorluklarla karşı karşıya kalırlar. 'Yetim Çocuklar İçin Acil Yardım' programımız, hiçbir çocuğun en karanlık saatinde yalnız bırakılmamasını sağlayarak hızlı ve şefkatli bir şekilde yanıt vermeye adanmıştır. Çocukların iyileşmesine ve hayatlarını yeniden inşa etmesine yardımcı olmak için güvenli barınak, besleyici gıda, temiz su, tıbbi bakım ve duygusal desteğe anında erişim sağlıyoruz. Acil ihtiyaçları karşılamanın ötesinde, umudu, istikrarı ve aidiyet duygusunu yeniden tesis etmeye çalışıyoruz. Her çocuk, trajediden sonra bile korunmayı, onuru ve yeniden hayal kurma fırsatını hak eder. Birlikte, bugünlerini korumaya ve geleceklerini güvence altına almaya kararlı bir güç ve güvence kaynağı olarak duruyoruz."
    }
  },
  health: {
    images: ["assets/slide4.jpg"],
    en: {
      title: "Medical Assistance",
      amount: "PKR 5,000",
      desc: "Access to timely and adequate healthcare is critical during emergencies and humanitarian crises. Our Medical Assistance program delivering rapid health services to vulnerable populations. We provide emergency medical treatment, medications, and maternal healthcare."
    },
    ur: {
      title: "طبی امداد",
      amount: "PKR 5,000",
      desc: "ہنگامی حالات اور انسانی بحرانوں کے دوران بروقت اور مناسب صحت کی دیکھ بھال تک رسائی بہت ضروری ہے۔ ہمارا طبی امداد کا پروگرام کمزور آبادیوں کو فوری صحت کی خدمات فراہم کرنے کے لیے ڈیزائن کیا گیا ہے۔ ہم ہنگامی طبی علاج، ادویات اور زچگی کی صحت کی دیکھ بھال فراہم کرتے ہیں۔"
    },
    tr: {
      title: "Tıbbi Yardım",
      amount: "PKR 5,000",
      desc: "Acil durumlarda ve insani krizlerde zamanında ve yeterli sağlık hizmetine erişim kritik önem taşır. Tıbbi Yardım programımız, savunmasız nüfuslara hızlı sağlık hizmetleri sunmayı amaçlamaktadır. Acil tıbbi tedavi, ilaçlar ve anne sağlığı hizmetleri sağlıyoruz."
    }
  },
  food: {
    images: ["assets/slide3.jpg"],
    en: {
      title: "Food & Livelihood",
      amount: "PKR 5,000",
      desc: "Hunger is more than an empty stomach. It is uncertainty. We believe every family deserves dignity. Through our Food & Livelihood program, we help parents put meals on the table and create opportunities that last."
    },
    ur: {
      title: "خوراک اور معاش",
      amount: "PKR 5,000",
      desc: "بھوک صرف خالی پیٹ کا نام نہیں ہے۔ یہ بے یقینی ہے۔ ہمارا ماننا ہے کہ ہر خاندان وقار کا مستحق ہے۔ ہمارے خوراک اور معاش کے پروگرام کے ذریعے، ہم والدین کی مدد کرتے ہیں کہ وہ دسترخوان پر کھانا رکھیں اور ایسے مواقع پیدا کریں جو قائم رہیں۔"
    },
    tr: {
      title: "Gıda ve Geçim Kaynağı",
      amount: "PKR 5,000",
      desc: "Açlık sadece boş bir mide değildir. Belirsizliktir. Her ailenin onuru hak ettiğine inanıyoruz. Gıda ve Geçim Kaynağı programımız aracılığıyla, ebeveynlerin sofraya yemek koymasına ve kalıcı fırsatlar yaratmasına yardımcı oluyoruz."
    }
  },
  education: {
    images: ["assets/slide1.jpg"],
    en: {
      title: "Education: The Path to Freedom",
      amount: "PKR 5,000",
      desc: "Education is the most powerful weapon which you can use to change the world. At PANAH, we believe every child has the right to learn, dream, and achieve. We help providing books, uniforms, and safe learning environments."
    },
    ur: {
      title: "تعلیم: آزادی کا راستہ",
      amount: "PKR 5,000",
      desc: "تعلیم وہ سب سے طاقتور ہتھیار ہے جسے آپ دنیا کو بدلنے کے لیے استعمال کر سکتے ہیں۔ پناہ میں، ہمارا ماننا ہے کہ ہر بچے کو سیکھنے، خواب دیکھنے اور حاصل کرنے کا حق ہے۔ ہم کتابیں، یونیفارم اور محفوظ تعلیمی ماحول فراہم کرنے میں مدد کرتے ہیں۔"
    },
    tr: {
      title: "Eğitim: Özgürlüğe Giden Yol",
      amount: "PKR 5,000",
      desc: "Eğitim, dünyayı değiştirmek için kullanabileceğiniz en güçlü silahtır. PANAH'ta, her çocuğun öğrenme, hayal etme ve başarma hakkına sahip olduğuna inanıyoruz. Kitaplar, üniformalar ve güvenli öğrenme ortamları sağlamaya yardımcı oluyoruz."
    }
  },
  water: {
    images: ["assets/slide4.jpg"],
    en: {
      title: "Clean Water for All",
      amount: "PKR 3,000",
      desc: "Water is life, yet millions suffer without it. Our Clean Water program builds wells, installs hand pumps, and provides filtration systems to remote villages. By ensuring access to safe drinking water, we protect children from deadly waterborne diseases and give families the health they need to thrive."
    },
    ur: {
      title: "سب کے لیے صاف پانی",
      amount: "PKR 3,000",
      desc: "پانی زندگی ہے، پھر بھی لاکھوں اس کے بغیر تکلیف میں ہیں۔ ہمارا کلین واٹر پروگرام کنویں تعمیر کرتا ہے، ہینڈ پمپ لگاتا ہے، اور دور دراز دیہاتوں میں فلٹریشن سسٹم فراہم کرتا ہے۔ پینے کے صاف پانی تک رسائی کو یقینی بنا کر، ہم بچوں کو پانی سے پیدا ہونے والی مہلک بیماریوں سے بچاتے ہیں اور خاندانوں کو وہ صحت دیتے ہیں جس کی انہیں ترقی کی منازل طے کرنے کی ضرورت ہے۔"
    },
    tr: {
      title: "Herkes İçin Temiz Su",
      amount: "PKR 3,000",
      desc: "Su hayattır, ancak milyonlarca insan susuzluk çekiyor. Temiz Su programımız kuyular inşa ediyor, el pompaları kuruyor ve uzak köylere filtreleme sistemleri sağlıyor. Güvenli içme suyuna erişimi sağlayarak, çocukları sudan geçen ölümcül hastalıklardan koruyor ve ailelere gelişmeleri için ihtiyaç duydukları sağlığı veriyoruz."
    }
  },
  shelter: {
    images: ["assets/slide2.jpg"],
    en: {
      title: "Shelter & Warmth",
      amount: "PKR 20,000",
      desc: "A home is more than four walls; it is safety, dignity, and a future. For families displaced by floods, war, or poverty, our Shelter program provides emergency tents, reconstructs damaged homes, and builds permanent housing for widows and orphans. We ensure no one has to sleep under the open sky."
    },
    ur: {
      title: "پناہ اور گرم جوشی",
      amount: "PKR 20,000",
      desc: "گھر چار دیواری سے بڑھ کر ہے؛ یہ تحفظ، وقار اور مستقبل ہے۔ سیلاب، جنگ یا غربت سے بے گھر ہونے والے خاندانوں کے لیے، ہمارا شیلٹر پروگرام ہنگامی خیمے فراہم کرتا ہے، تباہ شدہ گھروں کی تعمیر نو کرتا ہے، اور بیواؤں اور یتیموں کے لیے مستقل گھر تعمیر کرتا ہے۔ ہم اس بات کو یقینی بناتے ہیں کہ کسی کو کھلے آسمان تلے نہ سونا پڑے۔"
    },
    tr: {
      title: "Barınak ve Sıcaklık",
      amount: "PKR 20,000",
      desc: "Ev dört duvardan fazlasıdır; güvenlik, onur ve gelecektir. Seller, savaş veya yoksulluk nedeniyle yerinden edilen aileler için Barınak programımız acil durum çadırları sağlar, hasarlı evleri yeniden inşa eder ve dullar ve yetimler için kalıcı konutlar inşa eder. Kimsenin açık gökyüzü altında uyumak zorunda kalmamasını sağlıyoruz."
    }
  }
};

const translations = {
  en: {
    // Nav
    'nav-home': 'Home',
    'nav-about': 'About',
    'nav-activities': 'Activities',
    'nav-media': 'Media',
    'nav-contact': 'Contact',
    'nav-volunteer': 'Volunteer',

    // Buttons
    'btn-donate': 'Donate',
    'btn-sponsor': 'Sponsor',
    'btn-learn-more': 'Learn More →',
    'btn-sponsor-student': 'Sponsor a Student →',
    'btn-read-case-studies': 'Read Case Studies →',
    'btn-view-projects': 'View Projects →',
    'btn-see-impact': 'See Impact →',
    'btn-donate-package': 'Donate Package',
    'btn-donate-health': 'Donate Health',
    'btn-sponsor-now': 'Sponsor Now',
    'btn-send-whatsapp': 'Send Receipt on WhatsApp',

    // Hero
    'hero-title': 'Hope for Humanity',
    'hero-subtitle': 'Providing shelter, food, and education to those in need.',
    'hero-cta': 'Our Activities',

    // Sections
    'section-actions': 'Our Actions',
    'about-page-title': 'About Us',
    'about-page-subtitle': 'Dedicated to serving humanity with dignity and care.',
    'activities-page-title': 'Our Activities',
    'activities-page-subtitle': 'Empowering communities through action.',
    'donate-page-title': 'Support Our Cause',
    'donate-page-subtitle': 'Your donation brings hope to those in need.',

    // Cards (Short Descriptions)
    'card-emergency-title': 'Emergency Help for Orphan Children',
    'card-emergency-desc': 'Rapid response teams providing food, shelter, and medical aid in disaster zones.',
    'card-food-title': 'Food & Livelihood',
    'card-food-desc': 'Distributing ration bags and setting up community kitchens for the hungry.',
    'card-health-title': 'Medical Assistance',
    'card-health-desc': 'Providing essential medical care and support to those who need it most.',
    'card-education-title': 'Education & Future Leaders',
    'card-education-desc': 'Empowering the next generation through scholarships, school reconstruction, and learning supplies.',

    // Donation Cards
    'donate-food-title': 'Food Package',
    'donate-food-desc': 'Feeds a family of 5 for a month with essential flour, oil, sugar, and pulses.',
    'donate-medical-title': 'Medical Aid',
    'donate-medical-desc': 'Provides emergency medicines, checkups, and surgeries for critical patients.',
    'donate-orphan-title': 'Orphan Sponsorship',
    'donate-orphan-desc': 'Provides education, food, shelter, and healthcare.',

    // About Content
    'who-we-are-title': 'Who We Are: A Promise to Serve',
    'who-we-are-p1': 'PANAH UNDER CARE YARDIMLASMA was born from a simple yet powerful belief: that every human life carries equal value and deserves equal dignity.',
    'who-we-are-p2': 'We are more than just an organization; we are a movement of volunteers, professionals, and changemakers committed to healing wounds.',
    'who-we-are-p3': 'We do not see "beneficiaries"; we see brothers, sisters, and children who deserve a chance to thrive.',
    'mission-title': 'Our Mission',
    'mission-desc': 'To serve humanity with unwavering integrity, providing immediate relief in crises.',
    'vision-title': 'Our Vision',
    'vision-desc': 'A Pakistan where every child sleeps safely, every family eats with dignity, and every community thrives.',

    // Bank Transfer
    'bank-transfer-title': 'Bank Transfer',
    'bank-name-label': 'Bank Name:',
    'account-title-label': 'Account Title:',
    'account-no-label': 'Account Number:',
    'iban-label': 'IBAN:',
    'mobile-payment-label': 'EasyPaisa / JazzCash:',

    // Payment Instructions
    'payment-instr-1': '1. Please transfer the amount using one of the methods above.',
    'payment-instr-2': '2. Send a screenshot of the receipt to our WhatsApp.',
    'payment-instr-3': '3. We will confirm your donation and send a receipt.',

    // Footer
    'footer-about-title': 'About PANAH UNDER CARE YARDIMLASMA',
    'footer-about-desc': 'We are dedicated to uplifting vulnerable communities through sustainable development and emergency relief.',
    'footer-quick-links': 'Quick Links',
    'footer-contact': 'Contact Us',
    'footer-address': 'Islamabad, Pakistan',
    'footer-rights': 'All Rights Reserved.'
  },
  ur: {
    // Nav
    'nav-home': 'ہوم',
    'nav-about': 'ہمارے بارے میں',
    'nav-activities': 'سرگرمیاں',
    'nav-media': 'میڈیا',
    'nav-contact': 'رابطہ',
    'nav-volunteer': 'رضاکار بنیں',

    // Buttons
    'btn-donate': 'عطیہ کریں',
    'btn-sponsor': 'کفالت کریں',
    'btn-learn-more': 'مزید جانیں ←',
    'btn-sponsor-student': 'طالب علم کی کفالت کریں ←',
    'btn-read-case-studies': 'کیس اسٹڈیز پڑھیں ←',
    'btn-view-projects': 'پروجیکٹس دیکھیں ←',
    'btn-see-impact': 'اثرات دیکھیں ←',
    'btn-donate-package': 'پیکیج عطیہ کریں',
    'btn-donate-health': 'صحت کے لیے عطیہ کریں',
    'btn-sponsor-now': 'ابھی کفالت کریں',
    'btn-send-whatsapp': 'رسید واٹس ایپ کریں',

    // Hero
    'hero-title': 'انسانیت کی امید',
    'hero-subtitle': 'ضرورت مندوں کو پناہ، خوراک اور تعلیم فراہم کرنا۔',
    'hero-cta': 'ہماری سرگرمیاں',

    // Sections
    'section-actions': 'ہمارے اقدامات',
    'about-page-title': 'ہمارے بارے میں',
    'about-page-subtitle': 'وقار اور دیکھ بھال کے ساتھ انسانیت کی خدمت کے لیے وقف۔',
    'activities-page-title': 'ہماری سرگرمیاں',
    'activities-page-subtitle': 'عمل کے ذریعے برادریوں کو بااختیار بنانا۔',
    'donate-page-title': 'ہمارے مقصد کی حمایت کریں',
    'donate-page-subtitle': 'آپ کا عطیہ ضرورت مندوں کے لیے امید لاتا ہے۔',

    // Cards
    'card-emergency-title': 'یتیم بچوں کے لیے ہنگامی امداد',
    'card-emergency-desc': 'تباہی زدہ علاقوں میں خوراک، پناہ گاہ اور طبی امداد فراہم کرنے والی فوری رسپانس ٹیمیں۔',
    'card-food-title': 'خوراک اور معاش',
    'card-food-desc': 'راشن بیگز کی تقسیم اور بھوکوں کے لیے کمیونٹی کچن کا قیام۔',
    'card-health-title': 'طبی امداد',
    'card-health-desc': 'ضرورت مندوں کو ضروری طبی سہولیات اور مدد فراہم کرنا۔',
    'card-education-title': 'تعلیم اور مستقبل کے رہنما',
    'card-education-desc': 'اسکالرشپ، اسکولوں کی تعمیر نو اور تعلیمی سامان کے ذریعے اگلی نسل کو بااختیار بنانا۔',

    // Donation Cards
    'donate-food-title': 'فوڈ پیکیج',
    'donate-food-desc': 'آٹا، تیل، چینی اور دالوں کے ساتھ 5 افراد کے خاندان کے لیے ایک ماہ کا راشن۔',
    'donate-medical-title': 'طبی امداد',
    'donate-medical-desc': 'نازک مریضوں کے لیے ہنگامی ادویات، چیک اپ اور سرجری فراہم کرتا ہے۔',
    'donate-orphan-title': 'یتیم کی کفالت',
    'donate-orphan-desc': 'تعلیم، خوراک، رہائش اور صحت کی دیکھ بھال فراہم کرتا ہے۔',

    // About Content
    'who-we-are-title': 'ہم کون ہیں: خدمت کا وعدہ',
    'who-we-are-p1': 'پناہ انڈر کیئر یاردیملسما ایک سادہ لیکن طاقتور عقیدے سے پیدا ہوئی: کہ ہر انسانی زندگی برابر قدر رکھتی ہے اور برابر وقار کی مستحق ہے۔',
    'who-we-are-p2': 'ہم صرف ایک تنظیم سے زیادہ ہیں؛ ہم رضاکاروں، پیشہ ور افراد اور تبدیلی لانے والوں کی ایک تحریک ہیں جو زخموں کو بھرنے کے لیے پرعزم ہیں۔',
    'who-we-are-p3': 'ہم "مستحقین" کو نہیں دیکھتے؛ ہم بھائیوں، بہنوں اور بچوں کو دیکھتے ہیں جو ترقی کے موقع کے مستحق ہیں۔',
    'mission-title': 'ہمارا مشن',
    'mission-desc': 'غیر متزلزل سالمیت کے ساتھ انسانیت کی خدمت کرنا، بحرانوں میں فوری ریلیف فراہم کرنا۔',
    'vision-title': 'ہمارا وژن',
    'vision-desc': 'ایک ایسا پاکستان جہاں ہر بچہ محفوظ سوئے، ہر خاندان وقار کے ساتھ کھانا کھائے۔',

    // Bank Transfer
    'bank-transfer-title': 'بینک ٹرانسفر',
    'bank-name-label': 'بینک کا نام:',
    'account-title-label': 'اکاؤنٹ ٹائٹل:',
    'account-no-label': 'اکاؤنٹ نمبر:',
    'iban-label': 'IBAN:',
    'mobile-payment-label': 'ایزی پیسہ / جاز کیش:',

    // Payment Instructions
    'payment-instr-1': '1. براہ کرم اوپر دیے گئے طریقوں میں سے ایک کا استعمال کرکے رقم منتقل کریں۔',
    'payment-instr-2': '2. رسید کا اسکرین شاٹ ہمارے واٹس ایپ پر بھیجیں۔',
    'payment-instr-3': '3. ہم آپ کے عطیہ کی تصدیق کریں گے اور رسید بھیجیں گے۔',

    // Footer
    'footer-about-title': 'پناہ کے بارے میں',
    'footer-about-desc': 'ہم پائیدار ترقی اور ہنگامی ریلیف کے ذریعے کمزور برادریوں کی بہتری کے لیے وقف ہیں۔',
    'footer-quick-links': 'فوری روابط',
    'footer-contact': 'ہم سے رابطہ کریں',
    'footer-address': 'اسلام آباد، پاکستان',
    'footer-rights': 'تمام حقوق محفوظ ہیں۔'
  },
  tr: {
    // Nav
    'nav-home': 'Ana Sayfa',
    'nav-about': 'Hakkımızda',
    'nav-activities': 'Faaliyetler',
    'nav-media': 'Medya',
    'nav-contact': 'İletişim',
    'nav-volunteer': 'Gönüllü Ol',

    // Buttons
    'btn-donate': 'Bağış Yap',
    'btn-sponsor': 'Sponsor Ol',
    'btn-learn-more': 'Daha Fazla →',
    'btn-sponsor-student': 'Öğrenciye Sponsor Ol →',
    'btn-read-case-studies': 'Vaka Çalışmalarını Oku →',
    'btn-view-projects': 'Projeleri Görüntüle →',
    'btn-see-impact': 'Etkiyi Gör →',
    'btn-donate-package': 'Paket Bağışla',
    'btn-donate-health': 'Sağlık Bağışı',
    'btn-sponsor-now': 'Şimdi Sponsor Ol',
    'btn-send-whatsapp': 'Makbuzu WhatsApp\'tan Gönder',

    // Hero
    'hero-title': 'İnsanlık İçin Umut',
    'hero-subtitle': 'İhtiyaç sahiplerine barınak, gıda ve eğitim sağlamak.',
    'hero-cta': 'Faaliyetlerimiz',

    // Sections
    'section-actions': 'Eylemlerimiz',
    'about-page-title': 'Hakkımızda',
    'about-page-subtitle': 'İnsanlığa onur ve özenle hizmet etmeye adanmış.',
    'activities-page-title': 'Faaliyetlerimiz',
    'activities-page-subtitle': 'Eylem yoluyla toplulukları güçlendirmek.',
    'donate-page-title': 'Bize Destek Olun',
    'donate-page-subtitle': 'Bağışınız ihtiyaç sahiplerine umut getiriyor.',

    // Cards
    'card-emergency-title': 'Yetim Çocuklar İçin Acil Yardım',
    'card-emergency-desc': 'Felaket bölgelerinde gıda, barınak ve tıbbi yardım sağlayan hızlı müdahale ekipleri.',
    'card-food-title': 'Gıda ve Geçim Kaynağı',
    'card-food-desc': 'Erzak paketleri dağıtmak ve açlar için aşevleri kurmak.',
    'card-health-title': 'Tıbbi Yardım',
    'card-health-desc': 'En çok ihtiyacı olanlara temel tıbbi bakım ve destek sağlamak.',
    'card-education-title': 'Eğitim ve Geleceğin Liderleri',
    'card-education-desc': 'Burslar, okul inşası ve eğitim malzemeleri ile gelecek nesli güçlendirmek.',

    // Donation Cards
    'donate-food-title': 'Gıda Paketi',
    'donate-food-desc': '5 kişilik bir aileyi un, yağ, şeker ve bakliyat ile bir ay boyunca besler.',
    'donate-medical-title': 'Tıbbi Yardım',
    'donate-medical-desc': 'Kritik hastalar için acil ilaçlar, kontroller ve ameliyatlar sağlar.',
    'donate-orphan-title': 'Yetim Sponsorluğu',
    'donate-orphan-desc': 'Eğitim, gıda, barınak ve sağlık hizmetleri sağlar.',

    // About Content
    'who-we-are-title': 'Biz Kimiz: Hizmet Sözü',
    'who-we-are-p1': 'PANAH UNDER CARE YARDIMLASMA, basit ama güçlü bir inançtan doğdu: her insan hayatı eşit değere sahiptir ve eşit onuru hak eder.',
    'who-we-are-p2': 'Biz sadece bir organizasyondan fazlasıyız; yaraları iyileştirmeye kararlı gönüllüler, profesyoneller ve değişim yaratanların bir hareketiyiz.',
    'who-we-are-p3': '"Yararlanıcılar" görmüyoruz; gelişme şansını hak eden kardeşler ve çocuklar görüyoruz.',
    'mission-title': 'Misyonumuz',
    'mission-desc': 'Krizlerde anında yardım sağlayarak insanlığa sarsılmaz bir dürüstlükle hizmet etmek.',
    'vision-title': 'Vizyonumuz',
    'vision-desc': 'Her çocuğun güvenle uyuduğu, her ailenin onurla yemek yediği bir Pakistan.',

    // Bank Transfer
    'bank-transfer-title': 'Banka Transferi',
    'bank-name-label': 'Banka Adı:',
    'account-title-label': 'Hesap Adı:',
    'account-no-label': 'Hesap Numarası:',
    'iban-label': 'IBAN:',
    'mobile-payment-label': 'EasyPaisa / JazzCash:',

    // Payment Instructions
    'payment-instr-1': '1. Lütfen tutarı yukarıdaki yöntemlerden biriyle transfer edin.',
    'payment-instr-2': '2. Makbuzun ekran görüntüsünü WhatsApp hattımıza gönderin.',
    'payment-instr-3': '3. Bağışınızı onaylayıp makbuz göndereceğiz.',

    // Footer
    'footer-about-title': 'PANAH Hakkında',
    'footer-about-desc': 'Sürdürülebilir kalkınma ve acil yardım yoluyla savunmasız toplulukları kalkındırmaya adadık.',
    'footer-quick-links': 'Hızlı Bağlantılar',
    'footer-contact': 'Bize Ulaşın',
    'footer-address': 'İslamabad, Pakistan',
    'footer-rights': 'Tüm Hakları Saklıdır.'
  }
};

// ==========================================
// 2. MODAL LOGIC
// ==========================================

// Open Activity Modal
window.openModal = function (cause) {
  openActivityModal(cause);
}

window.openActivityModal = function (cause) {
  const modal = document.getElementById('actionModal');
  const title = document.getElementById('modalTitle');
  const gallery = document.getElementById('modalGallery');
  const desc = document.getElementById('modalDesc');
  const donateBtn = document.getElementById('modalDonateBtn');

  // Get current language
  const urlParams = new URLSearchParams(window.location.search);
  const lang = urlParams.get('lang') || 'en';

  if (causeData[cause]) {
    const parentData = causeData[cause];
    // Use selected language, fallback to English
    const data = parentData[lang] || parentData['en'];
    // Images are at the parent level
    const images = parentData.images;

    title.innerText = data.title;

    // Clear existing images
    gallery.innerHTML = '';

    // Add images to gallery
    if (images && images.length > 0) {
      images.forEach(imgSrc => {
        const img = document.createElement('img');
        img.src = imgSrc;
        gallery.appendChild(img);
      });
    }

    // Format description with simple line breaks
    desc.innerHTML = data.desc.replace(/\n/g, '<br>');

    // Handle Payment Info Display
    const paymentInfo = document.getElementById('modalPaymentInfo');
    const donateBtn = document.getElementById('modalDonateBtn');

    if (paymentInfo && donateBtn) {
      // Reset state when opening modal
      paymentInfo.style.display = 'none';
      donateBtn.style.display = 'block';

      // When clicking donate, show payment info inline
      donateBtn.onclick = function () {
        donateBtn.style.display = 'none';
        paymentInfo.style.display = 'block';
        // Optional: Scroll to bottom of modal content to ensure visibility
        const modalContent = document.querySelector('.modal-content');
        if (modalContent) {
          modalContent.scrollTop = modalContent.scrollHeight;
        }
      };
    }

    modal.style.display = 'block';
  }
}

// Close Modal
window.closeModal = function (event) {
  const modal = document.getElementById('actionModal');
  if (event.target === modal || event.target.classList.contains('close-modal')) {
    modal.style.display = 'none';
  }
}

// Payment Modal Logic
window.openPaymentModal = function (title, amount) {
  const modal = document.getElementById('paymentModal');
  const titleEl = document.getElementById('paymentTitle');
  const amountEl = document.getElementById('paymentAmount');

  if (modal && titleEl && amountEl) {
    titleEl.innerText = title;
    amountEl.innerText = amount;
    modal.style.display = 'block';
  }
}

window.closePaymentModal = function (event) {
  const modal = document.getElementById('paymentModal');
  if (event.target === modal || event.target.classList.contains('close-modal')) {
    modal.style.display = 'none';
  }
}

// ==========================================
// 3. LANGUAGE SWITCHER LOGIC
// ==========================================

window.addEventListener('DOMContentLoaded', () => {
  const urlParams = new URLSearchParams(window.location.search);
  const lang = urlParams.get('lang') || 'en'; // Default to English

  // 1. Set Direction and Text Align
  if (lang === 'ur') {
    document.body.style.direction = 'rtl';
    document.body.style.textAlign = 'right';
    const navMenu = document.querySelector('.nav-menu');
    if (navMenu) navMenu.style.flexDirection = 'row-reverse';
  } else {
    document.body.style.direction = 'ltr';
    document.body.style.textAlign = 'left';
  }

  // 2. Apply Translations via data-i18n
  if (translations[lang]) {
    const currentDict = translations[lang];
    const elements = document.querySelectorAll('[data-i18n]');

    elements.forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (currentDict[key]) {
        // Determine if we should set innerText or placeholder (if input)
        if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
          el.placeholder = currentDict[key];
        } else {
          el.innerText = currentDict[key];
        }
      }
    });
  }

  // 3. Highlight active language in topbar (Optional polish)
  const links = document.querySelectorAll('.topbar-right a');
  links.forEach(link => {
    if (link.href.includes(`lang=${lang}`)) {
      link.style.fontWeight = 'bold';
      link.style.textDecoration = 'underline';
    }
  });
});

// ==========================================
// 4. SPLASH SCREEN LOGIC
// ==========================================

// ==========================================
// 4. SPLASH SCREEN LOGIC
// ==========================================

window.addEventListener('load', () => {
  const splash = document.getElementById('splash-screen');
  if (splash) {
    setTimeout(() => {
      splash.classList.add('hidden');
      // Optional: Remove from DOM after transition to avoid z-index issues later
      setTimeout(() => {
        splash.style.display = 'none';
      }, 500); // Wait for opacity transition to finish
    }, 1000); // 1 second duration
  }

  // Also check login status
  checkLoginStatus();
});

// ==========================================
// 5. AUTHENTICATION & SPONSORSHIP LOGIC
// ==========================================

function checkLoginStatus() {
  const user = localStorage.getItem('panah_user');
  const loginBtn = document.getElementById('nav-login');
  const accountBtn = document.getElementById('nav-account');

  if (user) {
    if (loginBtn) loginBtn.style.display = 'none';
    if (accountBtn) {
      accountBtn.style.display = 'inline-block';
      accountBtn.innerText = `Logout (${JSON.parse(user).name})`;
    }
  } else {
    if (loginBtn) loginBtn.style.display = 'inline-block';
    if (accountBtn) accountBtn.style.display = 'none';
  }
}

// Handle Login
window.handleLogin = function (e) {
  e.preventDefault();
  const email = document.getElementById('email').value;
  // Mock Login - Accept any email/password
  if (email) {
    const user = { name: email.split('@')[0], email: email };
    localStorage.setItem('panah_user', JSON.stringify(user));
    alert('Login Successful!');
    window.location.href = 'index.html';
  }
}

// Handle Signup
window.handleSignup = function (e) {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;

  if (name && email) {
    const user = { name: name, email: email };
    localStorage.setItem('panah_user', JSON.stringify(user));
    alert('Account Created Successfully!');
    window.location.href = 'index.html';
  }
}

// Handle Logout
window.handleLogout = function () {
  localStorage.removeItem('panah_user');
  alert('Logged out successfully.');
  window.location.reload();
}

// Handle Sponsorship Click
window.handleSponsorship = function (childName, amount) {
  const user = localStorage.getItem('panah_user');
  if (!user) {
    alert('Please login to sponsor a child.');
    window.location.href = 'login.html';
  } else {
    // Open Payment Modal (reusing existing logic if available, else custom)
    if (window.openPaymentModal) {
      window.openPaymentModal(`Sponsor ${childName}`, amount);
    } else {
      // Fallback for independent sponsor.html page
      const modal = document.getElementById('paymentModal');
      const titleEl = document.getElementById('paymentTitle');
      const amountEl = document.getElementById('paymentAmount');
      if (modal && titleEl && amountEl) {
        titleEl.innerText = `Sponsor ${childName}`;
        amountEl.innerText = amount;
        modal.style.display = 'block';
      }
    }
  }
}
