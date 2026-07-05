/* =========================================================================
   WEDDING CONFIG — edit everything here. No need to touch HTML/CSS/JS.
   ========================================================================= */
window.WEDDING = {
  brideName:  "Janhavi",
  groomName:  "Shubham",
  brideFull:  "Janhavi Omale",
  groomFull:  "Shubham Panchal",

  /* ISO date+time of the ceremony (used by countdown + calendar) */
  weddingISO: "2026-12-28T18:00:00+05:30",
  weddingEndISO: "2026-12-28T23:00:00+05:30",
  weddingTime: "6:00 PM onwards",

  venueName:  "Sky Banquet",
  address:    "1st Floor, Niharika Mirage, Kopra Rd, Sector 10, Kharghar, Maharashtra 410210",
  mapsLink:   "https://www.google.com/maps/dir/?api=1&destination=1st+Floor+Niharika+Mirage+Kopra+Rd+Sector+10+Kharghar+Maharashtra+410210",
  mapsQuery:  "Sky Banquet Niharika Mirage Kopra Rd Sector 10 Kharghar Maharashtra 410210", /* used for the embedded map + QR */

  phone:      "+919370285093",
  instagram:  "https://www.instagram.com/_shubham.panchal_",

  /* Gift */
  upiId:      "shubham.janhavi@upi",
  bankName:   "Shubham Panchal",
  bankAcc:    "1234 5678 9012",
  bankIfsc:   "HDFC0000123",

  /* Photos — swap these URLs for your own. Placeholders resize via ?w= */
  bridePhoto: "assets/images/bride.png",
  groomPhoto: "assets/images/groom.png",
  heroImage:  "https://images.unsplash.com/photo-1519741497674-611481863552?w=1600&q=70",

  /* Gallery images (Unsplash placeholders; masonry auto-sizes) */
  gallery: [
    "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=800&q=70",
    "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&q=70",
    "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=800&q=70",
    "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800&q=70",
    "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=800&q=70",
    "https://images.unsplash.com/photo-1529636798458-92182e662485?w=800&q=70",
    "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=800&q=70",
    "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=70",
    "https://images.unsplash.com/photo-1460978812857-470ed1c77af0?w=800&q=70"
  ],

  /* Events — add/remove freely; each renders a card */
  events: [
    { icon: "💌", key: "engagement", title: "Engagement",       date: "15 Nov 2026", time: "7:00 PM",  place: "Fiesta Banquets" },
    { icon: "🌿", key: "mehendi",    title: "Mehendi",          date: "NA", time: "NA", place: "Tharwani Residency" },
    { icon: "🌼", key: "haldi",      title: "Haldi",            date: "NA", time: "NA", place: "Tharwani Residency" },
    { icon: "🎶", key: "sangeet",    title: "Sangeet",          date: "15 Nov 2026", time: "8:00 PM",  place: "Fiesta Banquet" },
    { icon: "💍", key: "ceremony",   title: "Wedding Ceremony", date: "28 Dec 2026", time: "12:00 PM",  place: "Sky Banquet" },
    { icon: "🥂", key: "reception",  title: "Reception",        date: "28 Dec 2026", time: "2:00 PM",  place: "Sky Banquet" }
  ]
};

/* =========================================================================
   TRANSLATIONS (English / Marathi). Add keys as you add UI text.
   ========================================================================= */
window.I18N = {
  en: {
    nav_home:"Home", nav_story:"Our Story", nav_events:"Events", nav_gallery:"Gallery",
    nav_venue:"Venue", nav_contact:"Contact",
    hero_invited:"You're Invited",
    hero_date:"Monday 28 December , Navi Mumbai",
    hero_quote:"\u201CTwo hearts, one soul, together forever.\u201D",
    cd_eyebrow:"Counting the days", cd_title:"Until we say \u201CI do\u201D",
    cd_days:"Days", cd_hours:"Hours", cd_mins:"Minutes", cd_secs:"Seconds",
    cd_done:"Today is the day — thank you for celebrating with us! 🎉",
    cd_cal:"Add to Google Calendar",
    story_eyebrow:"Our Story", story_title:"How it all began",
    story_1_t:"How We Met", story_1_d:"Winter 2025",
    story_1_p:"A spilled coffee, an apology, and a conversation that never really ended. A crowded café in Pune brought two strangers to the same small table.",
    story_2_t:"First Date", story_2_d:"Winter 2025",
    story_2_p:"A long walk by the river turned into dinner, then dessert, then a promise to do it all again the very next evening.",
    story_3_t:"The Proposal", story_3_d:"Winter 2025",
    story_3_p:"Under a sky full of stars and one very nervous question, she said yes before he could finish asking.",
    story_4_t:"Wedding Day", story_4_d:"28 December 2026",
    story_4_p:"And now, surrounded by everyone we love, we begin the rest of our lives together.",
    couple_eyebrow:"The Couple", couple_title:"Meet the pair",
    couple_groom_role:"The Groom",
    couple_groom_bio:"A Software Engineer with a passion for technology, filter coffee, and long drives. Janhavi says he over plans everything including this wedding.",
    couple_bride_role:"The Bride",
    couple_bride_bio:"An Architect who sketches dreams into reality, loves exploring beautiful spaces, and finds inspiration in every corner of the world. Shubham says she can win any argument with a single raised eyebrow.",
    events_eyebrow:"Celebrations", events_title:"Wedding Events",
    gallery_eyebrow:"Memories", gallery_title:"Our Gallery",
    venue_eyebrow:"Where", venue_title:"The Venue",
    venue_addr:"1st Floor, Niharika Mirage, Kopra Rd, Sector 10, Kharghar, Maharashtra 410210",
    venue_dir:"Get Directions", venue_qr:"Scan for the map",
    gift_eyebrow:"With gratitude", gift_title:"Your Blessings",
    gift_lead:"Your presence is the greatest gift. However, if you wish to bless us further, here are the details.",
    gift_upi:"Scan to pay via UPI", gift_bank:"Bank Details",
    gift_acc_name:"Account name", gift_acc_no:"Account no.", gift_ifsc:"IFSC", gift_upi_id:"UPI ID",
    contact_eyebrow:"Say hello", contact_title:"Contact Us",
    contact_phone:"Call", contact_wa:"WhatsApp", contact_email:"Email",
    footer_date:"28 December · Navi Mumbai", footer_made:"Made with 💚 for our special day",
    ev_engagement:"Engagement", ev_mehendi:"Mehendi", ev_haldi:"Haldi",
    ev_sangeet:"Sangeet", ev_ceremony:"Wedding Ceremony", ev_reception:"Reception",
    share_copied:"Invitation link copied!"
  },
  mr: {
    nav_home:"मुख्यपृष्ठ", nav_story:"आमची कथा", nav_events:"कार्यक्रम", nav_gallery:"गॅलरी",
    nav_venue:"स्थळ", nav_contact:"संपर्क",
    hero_invited:"आपणास सप्रेम आमंत्रण",
    hero_date:"सोमवार · २८ डिसेंबर · नवी मुंबई",
    hero_quote:"\u201Cदोन हृदये, एक आत्मा, कायमचे एकत्र.\u201D",
    cd_eyebrow:"दिवस मोजत आहोत", cd_title:"आमच्या शुभविवाहापर्यंत",
    cd_days:"दिवस", cd_hours:"तास", cd_mins:"मिनिटे", cd_secs:"सेकंद",
    cd_done:"आजचा तो खास दिवस — आमच्यासोबत आनंद साजरा केल्याबद्दल धन्यवाद! 🎉",
    cd_cal:"गूगल कॅलेंडरमध्ये जोडा",
    story_eyebrow:"आमची कथा", story_title:"सुरुवात अशी झाली",
    story_1_t:"आमची भेट", story_1_d:"हिवाळा २०२५",
    story_1_p:"सांडलेली कॉफी, एक माफी आणि कधीही न संपणारी गप्पा. पुण्यातील गजबजलेल्या कॅफेने दोन अनोळखी जीवांना एका टेबलावर आणले.",
    story_2_t:"पहिली भेट", story_2_d:"हिवाळा २०२५",
    story_2_p:"नदीकाठची लांब फेरी जेवणात, मग गोडाधोडात आणि पुन्हा दुसऱ्या संध्याकाळी भेटण्याच्या वचनात बदलली.",
    story_3_t:"मागणी", story_3_d:"हिवाळा २०२५",
    story_3_p:"तारे भरलेल्या आकाशाखाली एका घाबरलेल्या प्रश्नावर, त्याचे बोलणे संपण्याआधीच तिने होकार दिला.",
    story_4_t:"विवाह दिन", story_4_d:"२८ डिसेंबर २०२६",
    story_4_p:"आणि आता, आपल्या प्रियजनांच्या साक्षीने, आम्ही आयुष्याची नवी सुरुवात करत आहोत.",
    couple_eyebrow:"वधू-वर", couple_title:"ओळख करून घ्या",
    couple_groom_role:"वर",
    couple_groom_bio:"तंत्रज्ञानाची आवड असलेला एक सॉफ्टवेअर इंजिनिअर. फिल्टर कॉफी आणि लांब ड्राइव्हचा तो मनापासून चाहता आहे. जान्हवीचं म्हणणं आहे की, तो प्रत्येक गोष्टीचं अतिशय बारकाईने नियोजन करतो अगदी या लग्नाचंही!",
    couple_bride_role:"वधू",
    couple_bride_bio:"स्वप्नांना वास्तवात उतरवणारी एक आर्किटेक्ट. सुंदर वास्तू आणि जागा शोधायला तिला खूप आवडतं, आणि जगाच्या प्रत्येक कोपऱ्यात ती प्रेरणा शोधते. शुबहमचं म्हणणं आहे की, ती फक्त भुवई उंचावून कोणताही वाद जिंकू शकते!",
    events_eyebrow:"सोहळे", events_title:"विवाह कार्यक्रम",
    gallery_eyebrow:"आठवणी", gallery_title:"आमची गॅलरी",
    venue_eyebrow:"कुठे", venue_title:"स्थळ",
    venue_addr:"सेक्टर १०, खारघर, महाराष्ट्र ४१०२१०",
    venue_dir:"दिशा मिळवा", venue_qr:"नकाशासाठी स्कॅन करा",
    gift_eyebrow:"कृतज्ञतेसह", gift_title:"आपले आशीर्वाद",
    gift_lead:"आपली उपस्थिती हीच सर्वात मोठी भेट आहे. तरीही आशीर्वाद द्यायचे असल्यास, खालील तपशील.",
    gift_upi:"UPI द्वारे पैसे भरण्यासाठी स्कॅन करा", gift_bank:"बँक तपशील",
    gift_acc_name:"खातेदार", gift_acc_no:"खाते क्र.", gift_ifsc:"IFSC", gift_upi_id:"UPI आयडी",
    contact_eyebrow:"नमस्कार", contact_title:"संपर्क करा",
    contact_phone:"कॉल", contact_wa:"व्हॉट्सअ‍ॅप", contact_email:"ईमेल",
    footer_date:"२८ डिसेंबर · नवी मुंबई", footer_made:"आमच्या खास दिवसासाठी 💚 ने बनवले",
    ev_engagement:"साखरपुडा", ev_mehendi:"मेहंदी", ev_haldi:"हळद",
    ev_sangeet:"संगीत", ev_ceremony:"विवाह सोहळा", ev_reception:"स्वागत समारंभ",
    share_copied:"आमंत्रण लिंक कॉपी झाली!"
  }
};
