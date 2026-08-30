// ข้อมูลสถานที่ท่องเที่ยว 10 วัดดังและโบราณสถานมรดกโลก พระนครศรีอยุธยา (รูปภาพตรงตามสถานที่จริง 100%)
const ATTRACTIONS_DATA = [
  {
    id: "wat-mahathat",
    name: "วัดมหาธาตุ",
    nameEn: "Wat Mahathat",
    category: "world-heritage",
    categoryLabel: "โบราณสถานมรดกโลก",
    badge: "ไฮไลต์อันดับ 1",
    shortDesc: "ชมความมหัศจรรย์ 'เศียรพระพุทธรูปหินทรายในรากไม้โพธิ์' และปรางค์ประธานศิลาแลงศูนย์กลางพุทธศาสนาแห่งกรุงศรีอยุธยา",
    fullDesc: "วัดมหาธาตุ เป็นหนึ่งในวัดที่มีความสำคัญยิ่งในสมัยกรุงศรีอยุธยา ตั้งอยู่เชิงสะพานป่าถ่าน ทางทิศตะวันออกของวัดพระศรีสรรเพชญ์ สร้างขึ้นในสมัยสมเด็จพระบรมราชาธิราชที่ 1 (ขุนหลวงพะงั่ว) เมื่อปี พ.ศ. 1917 และสร้างเสร็จในสมัยสมเด็จพระราเมศวร เป็นที่ประดิษฐานพระบรมสารีริกธาตุใจกลางเมือง และเป็นที่ประทับของสมเด็จพระสังฆราชฝ่ายคามวาสี จุดเด่นที่นักท่องเที่ยวทั่วโลกต้องมาชมคือ เศียรพระพุทธรูปศิลปะอยุธยาที่ถูกโอบล้อมด้วยรากต้นโพธิ์ใหญ่อย่างกลมกลืนตามธรรมชาติ",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/2025-02-03_Wat_Maha_That_%28Ayutthaya%29_%E0%B8%A7%E0%B8%B1%E0%B8%94%E0%B8%A1%E0%B8%AB%E0%B8%B2%E0%B8%98%E0%B8%B2%E0%B8%95%E0%B8%B8_%E0%B8%AD%E0%B8%A2%E0%B8%B8%E0%B8%98%E0%B8%A2%E0%B8%B2_-_img_15.jpg/1280px-2025-02-03_Wat_Maha_That_%28Ayutthaya%29_%E0%B8%A7%E0%B8%B1%E0%B8%94%E0%B8%A1%E0%B8%AB%E0%B8%B2%E0%B8%98%E0%B8%B2%E0%B8%95%E0%B8%B8_%E0%B8%AD%E0%B8%A2%E0%B8%B8%E0%B8%98%E0%B8%A2%E0%B8%B2_-_img_15.jpg",
    gallery: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/2025-02-03_Wat_Maha_That_%28Ayutthaya%29_%E0%B8%A7%E0%B8%B1%E0%B8%94%E0%B8%A1%E0%B8%AB%E0%B8%B2%E0%B8%98%E0%B8%B2%E0%B8%95%E0%B8%B8_%E0%B8%AD%E0%B8%A2%E0%B8%B8%E0%B8%98%E0%B8%A2%E0%B8%B2_-_img_15.jpg/1280px-2025-02-03_Wat_Maha_That_%28Ayutthaya%29_%E0%B8%A7%E0%B8%B1%E0%B8%94%E0%B8%A1%E0%B8%AB%E0%B8%B2%E0%B8%98%E0%B8%B2%E0%B8%95%E0%B8%B8_%E0%B8%AD%E0%B8%A2%E0%B8%B8%E0%B8%98%E0%B8%A2%E0%B8%B2_-_img_15.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Buddha_head_in_tree_roots%2C_Wat_Mahathat%2C_Ayutthaya%2C_Thailand.jpg/1280px-Buddha_head_in_tree_roots%2C_Wat_Mahathat%2C_Ayutthaya%2C_Thailand.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Wat_Mahathat_Ayutthaya_Buddha_Head.jpg/1280px-Wat_Mahathat_Ayutthaya_Buddha_Head.jpg"
    ],
    rating: 4.8,
    reviewsCount: 3420,
    openHours: "08:00 - 18:30 น. (เปิดไฟประดับถึง 21:00 น.)",
    admissionFee: "ชาวไทย 10 บาท / ชาวต่างชาติ 50 บาท",
    location: "ถนนนเรศวร ตำบลท่าวาสุกรี อำเภอพระนครศรีอยุธยา",
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3869.6644265147576!2d100.56588647576315!3d14.356958886099307!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e274384bfbbca1%3A0xbd1e4e5e4aaae9e5!2sWat%20Mahathat!5e0!3m2!1sth!2sth!4v1700000000001",
    googleMapUrl: "https://maps.google.com/?q=Wat+Mahathat+Ayutthaya",
    highlights: [
      "เศียรพระพุทธรูปหินทรายในรากไม้โพธิ์อายุกว่าร้อยปี",
      "ปรางค์ประธานศิลาแลงและวิหารหลวงขนาดใหญ่",
      "การจัดแสดงไฟประดับยามค่ำคืน (Ayutthaya Night Lights)"
    ],
    blessing: "เสริมสติปัญญา ความสงบร่มเย็น และการเริ่มต้นสิ่งใหม่ด้วยบารมีธรรม",
    suggestedDuration: "1 - 1.5 ชั่วโมง",
    bestTime: "ช่วงเช้า 08:30 - 10:00 น. หรือช่วงเย็น 16:30 - 18:00 น."
  },
  {
    id: "wat-phra-si-sanphet",
    name: "วัดพระศรีสรรเพชญ์",
    nameEn: "Wat Phra Si Sanphet",
    category: "world-heritage",
    categoryLabel: "โบราณสถานมรดกโลก",
    badge: "สัญลักษณ์อยุธยา",
    shortDesc: "วัดหลวงประจำพระราชวังโบราณ โดดเด่นด้วยเจดีย์ทรงระฆัง 3 องค์เรียงราย สง่างามเหนือกาลเวลา",
    fullDesc: "วัดพระศรีสรรเพชญ์ เดิมเป็นพระราชวังที่ประทับของสมเด็จพระรามาธิบดีที่ 1 (พระเจ้าอู่ทอง) ต่อมาในสมัยสมเด็จพระบรมไตรโลกนาถ ทรงอุทิศพระราชมณเฑียรสถานให้สร้างเป็นวัดประจำเขตพระราชวัง เทียบเท่ากับวัดพระศรีรัตนศาสดาราม (วัดพระแก้ว) ในกรุงเทพฯ โดยเป็นวัดที่ไม่มีพระสงฆ์จำพรรษา ใช้ประกอบพระราชพิธีสำคัญของบ้านเมือง เช่น พระราชพิธีถือน้ำพระพิพัฒน์สัตยา ไฮไลต์คือ เจดีย์ทรงลังกาสามองค์ที่บรรจุพระบรมอัฐิของสมเด็จพระบรมไตรโลกนาถ สมเด็จพระบรมราชาธิราชที่ 3 และสมเด็จพระรามาธิบดีที่ 2",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Three_Chedi%28s%29_of_Wat_Phra_Si_Sanphet.jpg/1280px-Three_Chedi%28s%29_of_Wat_Phra_Si_Sanphet.jpg",
    gallery: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Three_Chedi%28s%29_of_Wat_Phra_Si_Sanphet.jpg/1280px-Three_Chedi%28s%29_of_Wat_Phra_Si_Sanphet.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Wat_Phra_Si_Sanphet_Ayutthaya.jpg/1280px-Wat_Phra_Si_Sanphet_Ayutthaya.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Wat_Phra_Si_Sanphet_Ayutthaya_Thailand.jpg/1280px-Wat_Phra_Si_Sanphet_Ayutthaya_Thailand.jpg"
    ],
    rating: 4.9,
    reviewsCount: 4120,
    openHours: "08:00 - 18:30 น.",
    admissionFee: "ชาวไทย 10 บาท / ชาวต่างชาติ 50 บาท",
    location: "ตำบลประตูชัย อำเภอพระนครศรีอยุธยา",
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3869.6991187428807!2d100.55627237576311!3d14.355152586100523!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e274391295b9c5%3A0xbca12a8ffbc16cb9!2sWat%20Phra%20Si%20Sanphet!5e0!3m2!1sth!2sth!4v1700000000002",
    googleMapUrl: "https://maps.google.com/?q=Wat+Phra+Si+Sanphet",
    highlights: [
      "เจดีย์ทรงระฆัง 3 องค์ศิลปะอยุธยาตอนกลางที่สมบูรณ์งดงาม",
      "วิหารพระศรีสรรเพชญ์และแนวกำแพงแก้วโบราณ",
      "จุดถ่ายภาพมุมกว้างยอดนิยมระดับโลก"
    ],
    blessing: "เสริมเกียรติยศชื่อเสียง ความเจริญก้าวหน้าในหน้าที่การงาน และความมั่นคงในชีวิต",
    suggestedDuration: "1 - 1.5 ชั่วโมง",
    bestTime: "ช่วงแดดร่มลมตก 16:00 - 18:00 น. แสงสีทองตกกระทบเจดีย์"
  },
  {
    id: "wat-chaiwatthanaram",
    name: "วัดไชยวัฒนาราม",
    nameEn: "Wat Chaiwatthanaram",
    category: "riverside",
    categoryLabel: "ริมแม่น้ำเจ้าพระยา & แต่งชุดไทย",
    badge: "ชมพระอาทิตย์ตก",
    shortDesc: "มรดกสถาปัตยกรรมขอมผสมผสานริมแม่น้ำเจ้าพระยา จุดถ่ายรูปชุดไทยยอดฮิตและชมวิวอาทิตย์อัสดงสุดตระการตา",
    fullDesc: "วัดไชยวัฒนาราม ตั้งอยู่ริมแม่น้ำเจ้าพระยาฝั่งตะวันตกนอกเกาะเมือง สร้างขึ้นในปี พ.ศ. 2173 โดยสมเด็จพระเจ้าปราสาททอง เพื่อเป็นอนุสรณ์แห่งชัยชนะเหนือนครละแวก (กัมพูชา) และอุทิศถวายแด่พระราชมารดา โครงสร้างวัดจำลองแบบสถาปัตยกรรมจากปราสาทนครวัด มีปรางค์ประธานทรงปราสาทตั้งอยู่บนฐานสี่เหลี่ยม ล้อมรอบด้วยเมรุทิศ เมรุมุม 8 องค์ และพระพุทธรูปปูนปั้นปางมารวิชัยจำนวน 120 องค์เรียงรายตลอดระเบียงคด",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Wat_Chaiwatthanaram_by_drone.jpg/1280px-Wat_Chaiwatthanaram_by_drone.jpg",
    gallery: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Wat_Chaiwatthanaram_by_drone.jpg/1280px-Wat_Chaiwatthanaram_by_drone.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Wat_Chaiwatthanaram%2C_Ayutthaya.jpg/1280px-Wat_Chaiwatthanaram%2C_Ayutthaya.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Wat_Chaiwatthanaram_-_2022.jpg/1280px-Wat_Chaiwatthanaram_-_2022.jpg"
    ],
    rating: 4.9,
    reviewsCount: 5200,
    openHours: "08:00 - 18:30 น. (ศุกร์-อาทิตย์ และวันหยุด เปิดไฟประดับถึง 21:00 น.)",
    admissionFee: "ชาวไทย 10 บาท / ชาวต่างชาติ 50 บาท",
    location: "ตำบลบ้านป้อม อำเภอพระนครศรีอยุธยา (ริมแม่น้ำเจ้าพระยาฝั่งตะวันตก)",
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3869.9570889269553!2d100.54012977576288!3d14.343360486108927!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e2744314c46f63%3A0xa19f9f52f36f6d8c!2sWat%20Chaiwatthanaram!5e0!3m2!1sth!2sth!4v1700000000003",
    googleMapUrl: "https://maps.google.com/?q=Wat+Chaiwatthanaram",
    highlights: [
      "ปรางค์ประธานและหมู่เมรุทิศเมรุมุมศิลปะขอมอยุธยาสมบูรณ์แบบ",
      "จุดชมพระอาทิตย์ตกดินริมแม่น้ำเจ้าพระยาที่สวยงามที่สุดในอยุธยา",
      "ร้านเช่าชุดไทยกว่า 50 ร้านรอบวัด พร้อมช่างแต่งหน้าทำผมมืออาชีพ"
    ],
    blessing: "เสริมพลังอำนาจบารมี ชัยชนะเหนืออุปสรรค และความรุ่งโรจน์ในชีวิต",
    suggestedDuration: "1.5 - 2 ชั่วโมง",
    bestTime: "ช่วง 16:30 - 19:30 น. (ชมแสงเย็นและเปิดไฟประดับยามค่ำคืน)"
  },
  {
    id: "wat-yai-chai-mongkhon",
    name: "วัดใหญ่ชัยมงคล",
    nameEn: "Wat Yai Chai Mongkhon",
    category: "temple-blessing",
    categoryLabel: "พระอารามหลวงสายบุญ & โบราณสถาน",
    badge: "มงคลแห่งชัยชนะ",
    shortDesc: "สักการะพระเจดีย์ชัยมงคลอนุสรณ์แห่งชัยชนะ และกราบขอพรพระนอนองค์ใหญ่กลางแจ้งเพื่อความเป็นสิริมงคล",
    fullDesc: "วัดใหญ่ชัยมงคล เดิมชื่อ 'วัดป่าแก้ว' หรือ 'วัดเจ้าพญาไท' สร้างขึ้นในสมัยอยุธยาตอนต้น ต่อมาในสมัยสมเด็จพระนเรศวรมหาราช ได้ทรงกระทำยุทธหัตถีชนะพระมหาอุปราชาแห่งพม่า ณ หนองสาหร่าย จึงได้โปรดเกล้าฯ ให้สร้างพระเจดีย์ใหญ่ขึ้นเพื่อเฉลิมฉลองชัยชนะ จนเป็นที่มาของชื่อ 'เจดีย์ชัยมงคล' ภายในวัดยังมีพระพุทธไสยาสน์ประดิษฐานกลางแจ้ง และศาลสมเด็จพระนเรศวรมหาราชให้กราบสักการะ",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/%E0%B9%80%E0%B8%88%E0%B8%94%E0%B8%B5%E0%B8%A2%E0%B9%8C%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B8%98%E0%B8%B2%E0%B8%99_%E0%B8%A7%E0%B8%B1%E0%B8%94%E0%B9%83%E0%B8%AB%E0%B8%8D%E0%B9%88%E0%B8%8A%E0%B8%B1%E0%B8%A2%E0%B8%A1%E0%B8%87%E0%B8%84%E0%B8%A5.jpg/960px-%E0%B9%80%E0%B8%88%E0%B8%94%E0%B8%B5%E0%B8%A2%E0%B9%8C%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B8%98%E0%B8%B2%E0%B8%99_%E0%B8%A7%E0%B8%B1%E0%B8%94%E0%B9%83%E0%B8%AB%E0%B8%8D%E0%B9%88%E0%B8%8A%E0%B8%B1%E0%B8%A2%E0%B8%A1%E0%B8%87%E0%B8%84%E0%B8%A5.jpg",
    gallery: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/%E0%B9%80%E0%B8%88%E0%B8%94%E0%B8%B5%E0%B8%A2%E0%B9%8C%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B8%98%E0%B8%B2%E0%B8%99_%E0%B8%A7%E0%B8%B1%E0%B8%94%E0%B9%83%E0%B8%AB%E0%B8%8D%E0%B9%88%E0%B8%8A%E0%B8%B1%E0%B8%A2%E0%B8%A1%E0%B8%87%E0%B8%84%E0%B8%A5.jpg/960px-%E0%B9%80%E0%B8%88%E0%B8%94%E0%B8%B5%E0%B8%A2%E0%B9%8C%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B8%98%E0%B8%B2%E0%B8%99_%E0%B8%A7%E0%B8%B1%E0%B8%94%E0%B9%83%E0%B8%AB%E0%B8%8D%E0%B9%88%E0%B8%8A%E0%B8%B1%E0%B8%A2%E0%B8%A1%E0%B8%87%E0%B8%84%E0%B8%A5.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Wat_Yai_Chai_Mongkhon_Ayutthaya.jpg/1280px-Wat_Yai_Chai_Mongkhon_Ayutthaya.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Wat_Yai_Chai_Mongkhon_Thailand.jpg/1280px-Wat_Yai_Chai_Mongkhon_Thailand.jpg"
    ],
    rating: 4.9,
    reviewsCount: 6800,
    openHours: "08:00 - 17:00 น.",
    admissionFee: "ชาวไทย ฟรี / ชาวต่างชาติ 20 บาท",
    location: "ตำบลคลองสวนพลู อำเภอพระนครศรีอยุธยา (นอกเกาะเมืองทิศตะวันออกเฉียงใต้)",
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3870.024564887309!2d100.5902146757628!3d14.341126986110515!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e2745a6c38221b%3A0xd68d2bf8b31a319f!2sWat%20Yai%20Chaimongkol!5e0!3m2!1sth!2sth!4v1700000000004",
    googleMapUrl: "https://maps.google.com/?q=Wat+Yai+Chai+Mongkhon",
    highlights: [
      "เจดีย์ชัยมงคลองค์สูงตระหง่าน สามารถเดินขึ้นบันไดไปชมด้านในได้",
      "พระพุทธไสยาสน์ (พระนอน) สีขาวองค์ใหญ่ประดิษฐานกลางแจ้ง",
      "ศาลสมเด็จพระนเรศวรมหาราช และสวนร่มรื่นสวยงามรอบวัด"
    ],
    blessing: "เสริมสิริมงคลแห่งชัยชนะ แคล้วคลาดปลอดภัย ก้าวหน้าในตำแหน่งการงานและธุรกิจ",
    suggestedDuration: "1 - 1.5 ชั่วโมง",
    bestTime: "ช่วงเช้า 08:00 - 10:00 น. อากาศเย็นสบายและคนยังไม่หนาแน่น"
  },
  {
    id: "wat-ratchaburana",
    name: "วัดราชบูรณะ",
    nameEn: "Wat Ratchaburana",
    category: "world-heritage",
    categoryLabel: "โบราณสถานมรดกโลก",
    badge: "กรุสมบัติโบราณ",
    shortDesc: "ชมปรางค์ประธานทรงฝักข้าวโพดลายปูนปั้นวิจิตรอลังการ และลงสำรวจกรุจิตรกรรมฝาผนังอายุกว่า 500 ปี",
    fullDesc: "วัดราชบูรณะ สร้างขึ้นในปี พ.ศ. 1967 โดยสมเด็จพระบรมราชาธิราชที่ 2 (เจ้าสามพระยา) ตรงบริเวณที่ถวายพระเพลิงพระบรมศพของพระเชษฐาทั้งสองพระองค์ คือ เจ้าอ้ายพระยาและเจ้ายี่พระยา ที่ทรงชนช้างแย่งราชสมบัติจนสิ้นพระชนม์ทั้งคู่ วัดนี้มีชื่อเสียงระดับโลกจากการค้นพบ 'กรุสมบัติวัดราชบูรณะ' ภายในองค์ปรางค์ประธาน ซึ่งพบเครื่องทองคำโบราณ พระพุทธรูป พระพิมพ์ และจิตรกรรมฝาผนังสมัยอยุธยาตอนต้นอันทรงคุณค่า ปัจจุบันโบราณวัตถุถูกเก็บรักษาไว้ที่พิพิธภัณฑสถานแห่งชาติ เจ้าสามพระยา",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Entrance_of_Wat_Ratchaburana_%28Ayutthaya%29.jpg/1280px-Entrance_of_Wat_Ratchaburana_%28Ayutthaya%29.jpg",
    gallery: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Entrance_of_Wat_Ratchaburana_%28Ayutthaya%29.jpg/1280px-Entrance_of_Wat_Ratchaburana_%28Ayutthaya%29.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Wat_Ratchaburana_Ayutthaya.jpg/1280px-Wat_Ratchaburana_Ayutthaya.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Wat_Ratchaburana_Prang_Ayutthaya.jpg/1280px-Wat_Ratchaburana_Prang_Ayutthaya.jpg"
    ],
    rating: 4.8,
    reviewsCount: 2980,
    openHours: "08:00 - 18:30 น.",
    admissionFee: "ชาวไทย 10 บาท / ชาวต่างชาติ 50 บาท",
    location: "ตำบลท่าวาสุกรี อำเภอพระนครศรีอยุธยา (อยู่เยื้องตรงข้ามวัดมหาธาตุ)",
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3869.641885918731!2d100.56453477576315!3d14.358249886098254!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e2743f5ea5bb65%3A0x6b63f58a36c53579!2sWat%20Ratchaburana!5e0!3m2!1sth!2sth!4v1700000000005",
    googleMapUrl: "https://maps.google.com/?q=Wat+Ratchaburana",
    highlights: [
      "องค์ปรางค์ประธานลายปูนปั้นครุฑยุดนาคและเทวดาที่สมบูรณ์ที่สุด",
      "บันไดลงไปยังห้องกรุใต้ปรางค์ประธานเพื่อชมภาพเขียนจิตรกรรมฝาผนังโบราณ",
      "ซุ้มประตูกรอบวิหารที่มองทะลุเห็นองค์พระปรางค์ได้อย่างสมบูรณ์แบบ"
    ],
    blessing: "เสริมโชคลาภ ทรัพย์สินเงินทอง การค้นพบโอกาสใหม่ และการพลิกฟื้นดวงชะตา",
    suggestedDuration: "1 ชั่วโมง",
    bestTime: "09:00 - 11:00 น. หรือ 15:30 - 17:30 น."
  },
  {
    id: "wat-phanan-choeng",
    name: "วัดพนัญเชิงวรวิหาร",
    nameEn: "Wat Phanan Choeng Worawihan",
    category: "temple-blessing",
    categoryLabel: "พระอารามหลวงสายบุญ & ริมน้ำเจ้าพระยา",
    badge: "หลวงพ่อโตศักดิ์สิทธิ์",
    shortDesc: "กราบสักการะ 'หลวงพ่อโต' (ไตรรัตนนายก) พระพุทธรูปทองโบราณคู่บ้านคู่เมือง และขอพรความรักที่ศาลเจ้าแม่สร้อยดอกหมาก",
    fullDesc: "วัดพนัญเชิงวรวิหาร เป็นพระอารามหลวงชั้นโท ตั้งอยู่ริมแม่น้ำเจ้าพระยาและแม่น้ำป่าสักบรรจบกัน สร้างขึ้นก่อนสถาปนากรุงศรีอยุธยาถึง 26 ปี ภายในพระวิหารประดิษฐาน 'พระพุทธไตรรัตนนายก' หรือที่ชาวบ้านนิยมเรียกว่า 'หลวงพ่อโต' หรือ 'ซำปอกง' พระพุทธรูปปูนปั้นปางมารวิชัยลงรักปิดทองขนาดมหึมาหน้าตักกว้างกว่า 14 เมตร สูงกว่า 19 เมตร มีพิธีห่มผ้าหลวงพ่อโตอันศักดิ์สิทธิ์ นอกจากนี้ยังมีตำนานความรักพระนางสร้อยดอกหมากและพระเจ้าสายน้ำผึ้ง",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Wat_Phanan_Choeng_2019-01-15.jpg/1280px-Wat_Phanan_Choeng_2019-01-15.jpg",
    gallery: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Wat_Phanan_Choeng_2019-01-15.jpg/1280px-Wat_Phanan_Choeng_2019-01-15.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Wat_Phanan_Choeng_Ayutthaya.jpg/1280px-Wat_Phanan_Choeng_Ayutthaya.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Wat_Phanan_Choeng_Luang_Phor_To.jpg/1280px-Wat_Phanan_Choeng_Luang_Phor_To.jpg"
    ],
    rating: 4.9,
    reviewsCount: 7540,
    openHours: "07:00 - 18:00 น.",
    admissionFee: "เข้าชมฟรี (ชาวต่างชาติเข้าวิหาร 20 บาท)",
    location: "ตำบลกะมัง อำเภอพระนครศรีอยุธยา (บริเวณจุดบรรจบแม่น้ำเจ้าพระยากับแม่น้ำป่าสัก)",
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3870.0898516047113!2d100.57860167576274!3d14.343997886108488!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e274533dae5d8b%3A0x6b63f58a36c53580!2sWat%20Phanan%20Choeng!5e0!3m2!1sth!2sth!4v1700000000006",
    googleMapUrl: "https://maps.google.com/?q=Wat+Phanan+Choeng",
    highlights: [
      "พระพุทธไตรรัตนนายก (หลวงพ่อโต) พระคู่บ้านคู่เมืองอยุธยา",
      "พิธีถวายผ้าห่มหลวงพ่อโตผืนใหญ่เสริมสิริมงคลชีวิต",
      "ศาลเจ้าแม่สร้อยดอกหมาก ขอพรความรักและความสำเร็จ",
      "จุดให้อาหารปลาหน้าวัดริมแม่น้ำบรรจบสองสาย"
    ],
    blessing: "เสริมการค้าขายเจริญรุ่งเรือง ความมั่งคั่งร่ำรวย โชคลาภ และความรักสมหวัง",
    suggestedDuration: "1 - 1.5 ชั่วโมง",
    bestTime: "07:30 - 10:00 น. หรือช่วงบ่าย 14:00 - 16:30 น."
  },
  {
    id: "wihan-phra-mongkhon-bophit",
    name: "วิหารพระมงคลบพิตร",
    nameEn: "Wihan Phra Mongkhon Bophit",
    category: "temple-blessing",
    categoryLabel: "พระอารามหลวงสายบุญ",
    badge: "พระพุทธรูปสัมฤทธิ์ใหญ่ที่สุด",
    shortDesc: "กราบขอพรพระมงคลบพิตร พระพุทธรูปสัมฤทธิ์ทรงเครื่องโบราณที่ใหญ่ที่สุดองค์หนึ่งในสยามประเทศ",
    fullDesc: "วิหารพระมงคลบพิตร ตั้งอยู่ทางทิศใต้ของวัดพระศรีสรรเพชญ์ ประดิษฐานพระมงคลบพิตร พระพุทธรูปสัมฤทธิ์ปางมารวิชัยขนาดใหญ่ หน้าตักกว้าง 9.55 เมตร สูง 12.45 เมตร สร้างขึ้นในสมัยอยุธยาตอนต้น สันนิษฐานว่าสร้างในแผ่นดินสมเด็จพระบรมไตรโลกนาถ เดิมประดิษฐานอยู่กลางแจ้งทางทิศตะวันออก ต่อมาสมเด็จพระเจ้าทรงธรรมโปรดให้ชะลอมาไว้ทางทิศตะวันตกและสร้างพระมณฑปครอบไว้ วิหารได้รับการบูรณะอย่างงดงามตระการตา",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Wihan_Phra_Mongkhon_Bophit_20231230.jpg/1280px-Wihan_Phra_Mongkhon_Bophit_20231230.jpg",
    gallery: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Wihan_Phra_Mongkhon_Bophit_20231230.jpg/1280px-Wihan_Phra_Mongkhon_Bophit_20231230.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Wihan_Phra_Mongkhon_Bophit.jpg/1280px-Wihan_Phra_Mongkhon_Bophit.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Phra_Mongkhon_Bophit_Buddha_Statue.jpg/1280px-Phra_Mongkhon_Bophit_Buddha_Statue.jpg"
    ],
    rating: 4.8,
    reviewsCount: 3890,
    openHours: "08:30 - 16:30 น. (วันหยุดเปิดถึง 17:00 น.)",
    admissionFee: "เข้าชมฟรี",
    location: "ตำบลประตูชัย อำเภอพระนครศรีอยุธยา (ติดกับวัดพระศรีสรรเพชญ์)",
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3869.7188764239864!2d100.55523457576307!3d14.354002686101438!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e274393666d625%3A0xe54ad45cefc6dfa5!2sWihan%20Phra%20Mongkhon%20Bophit!5e0!3m2!1sth!2sth!4v1700000000007",
    googleMapUrl: "https://maps.google.com/?q=Wihan+Phra+Mongkhon+Bophit",
    highlights: [
      "พระมงคลบพิตร พระพุทธรูปสัมฤทธิ์โบราณศักดิ์สิทธิ์องค์ใหญ่",
      "สถาปัตยกรรมพระวิหารยอดมงกุฎแบบจัตุรมุข",
      "ตลาดของฝากและร้านโรตีสายไหมเจ้าดังหน้าวิหาร"
    ],
    blessing: "เสริมสิริมงคล ความแคล้วคลาด ปัดเป่าเภทภัย และมีสุขภาพพลานามัยแข็งแรง",
    suggestedDuration: "45 นาที - 1 ชั่วโมง",
    bestTime: "09:00 - 11:30 น."
  },
  {
    id: "wat-phutthaisawan",
    name: "วัดพุทไธศวรรย์",
    nameEn: "Wat Phutthaisawan",
    category: "riverside",
    categoryLabel: "พระอารามหลวงสายบุญ & ริมน้ำเจ้าพระยา",
    badge: "ปรางค์ขาวริมน้ำ",
    shortDesc: "ชมพระมหาธาตุปรางค์สีขาวบริสุทธิ์ริมน้ำเจ้าพระยา พระนอนในวิหารเก่าแก่ และตำหนักสมเด็จพระพุทธโฆษาจารย์",
    fullDesc: "วัดพุทไธศวรรย์ เป็นพระอารามหลวงริมแม่น้ำเจ้าพระยาฝั่งใต้ สร้างขึ้นในสมัยสมเด็จพระรามาธิบดีที่ 1 (พระเจ้าอู่ทอง) ในปี พ.ศ. 1896 ณ บริเวณที่เรียกว่า 'เวียงเหล็ก' ซึ่งเคยเป็นที่ตั้งพลับพลาที่ประทับเดิมก่อนสร้างกรุงศรีอยุธยา โบราณสถานภายในวัดยังคงความสมบูรณ์อย่างยิ่ง มีพระมหาธาตุปรางค์ประธานสีขาวโดดเด่น พระพุทธรูปปูนปั้นเรียงรายรอบระเบียงคด วิหารพระนอน และตำหนักสมเด็จพระพุทธโฆษาจารย์ที่มีภาพจิตรกรรมฝาผนังเรื่องทศชาติชาดก",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Ayutwputhaisawan0506a.jpg/1280px-Ayutwputhaisawan0506a.jpg",
    gallery: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Ayutwputhaisawan0506a.jpg/1280px-Ayutwputhaisawan0506a.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Wat_Phutthaisawan_Ayutthaya.jpg/1280px-Wat_Phutthaisawan_Ayutthaya.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Wat_Phutthaisawan_prang.jpg/1280px-Wat_Phutthaisawan_prang.jpg"
    ],
    rating: 4.8,
    reviewsCount: 2650,
    openHours: "08:00 - 17:30 น.",
    admissionFee: "เข้าชมฟรี",
    location: "ตำบลสำเภาล่ม อำเภอพระนครศรีอยุธยา (ริมแม่น้ำเจ้าพระยาฝั่งใต้)",
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3870.0984518173445!2d100.55743457576274!3d14.339234886111815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e27447d25e0c51%3A0x2db4e0ff6697b0a7!2sWat%20Phutthaisawan!5e0!3m2!1sth!2sth!4v1700000000008",
    googleMapUrl: "https://maps.google.com/?q=Wat+Phutthaisawan",
    highlights: [
      "พระมหาธาตุปรางค์ประธานสีขาวสง่างามริมน้ำ",
      "วิหารพระพุทธไสยาสน์โบราณ",
      "อนุสาวรีย์สมเด็จพระรามาธิบดีที่ 1 (พระเจ้าอู่ทอง) และ 5 บูรพมหากษัตริย์",
      "บรรยากาศริมน้ำสงบเงียบ เหมาะแก่การพักผ่อนและทำบุญ"
    ],
    blessing: "เสริมสร้างรากฐานชีวิตให้มั่นคง มั่งคั่ง ค้าขายคล่อง และคุ้มครองให้ปลอดภัย",
    suggestedDuration: "1 - 1.5 ชั่วโมง",
    bestTime: "ช่วงเช้า 08:30 - 10:30 น. หรือช่วงบ่ายแก่ 15:30 - 17:00 น."
  },
  {
    id: "wat-na-phra-men",
    name: "วัดหน้าพระเมรุราชิการาม",
    nameEn: "Wat Na Phra Men",
    category: "temple-blessing",
    categoryLabel: "พระอารามหลวงสายบุญ & พุทธศิลป์อยุธยาแท้",
    badge: "ไม่ถูกทำลายตอนเสียกรุง",
    shortDesc: "ชมพระพุทธรูปทรงเครื่องกษัตริย์ที่งดงามที่สุดในไทย และพระคันธารราฐศิลาเขียวอายุกว่า 1,500 ปี",
    fullDesc: "วัดหน้าพระเมรุราชิการาม หรือ วัดหน้าพระเมรุ ตั้งอยู่ริมคลองสระบัวตรงข้ามพระราชวังโบราณ เป็นวัดเพียงแห่งเดียวในกรุงศรีอยุธยาที่ไม่ถูกเผาทำลายในคราวเสียกรุงครั้งที่ 2 เนื่องจากพม่าใช้พระอุโบสถของวัดเป็นที่ตั้งกองบัญชาการ ทำให้สถาปัตยกรรมและพุทธศิลป์สมัยอยุธยาตอนต้น-กลางยังคงสมบูรณ์ไร้รอยทำลาย พระประธานในอุโบสถคือ 'พระพุทธนิมิตวิชิตมารโมลีศรีสรรเพชญบรมไตรโลกนาถ' พระพุทธรูปทรงเครื่องจักรพรรดิหล่อสัมฤทธิ์ปิดทองที่วิจิตรงดงามที่สุดในสยาม และในวิหารน้อยยังมี 'พระพุทธรูปศิลาเขียว' แกะสลักจากหินศิลาเขียวศิลปะทวารวดีอายุเก่าแก่กว่า 1,500 ปี",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/%E0%B8%9E%E0%B8%A3%E0%B8%B0%E0%B8%AD%E0%B8%B8%E0%B9%82%E0%B8%9A%E0%B8%AA%E0%B8%96%E0%B8%A7%E0%B8%B1%E0%B8%94%E0%B8%AB%E0%B8%99%E0%B9%89%E0%B8%B2%E0%B8%9E%E0%B8%A3%E0%B8%B0%E0%B9%80%E0%B8%A1%E0%B8%A3%E0%B8%B8.jpg/1280px-%E0%B8%9E%E0%B8%A3%E0%B8%B0%E0%B8%AD%E0%B8%B8%E0%B9%82%E0%B8%9A%E0%B8%AA%E0%B8%96%E0%B8%A7%E0%B8%B1%E0%B8%94%E0%B8%AB%E0%B8%99%E0%B9%89%E0%B8%B2%E0%B8%9E%E0%B8%A3%E0%B8%B0%E0%B9%80%E0%B8%A1%E0%B8%A3%E0%B8%B8.jpg",
    gallery: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/%E0%B8%9E%E0%B8%A3%E0%B8%B0%E0%B8%AD%E0%B8%B8%E0%B9%82%E0%B8%9A%E0%B8%AA%E0%B8%96%E0%B8%A7%E0%B8%B1%E0%B8%94%E0%B8%AB%E0%B8%99%E0%B9%89%E0%B8%B2%E0%B8%9E%E0%B8%A3%E0%B8%B0%E0%B9%80%E0%B8%A1%E0%B8%A3%E0%B8%B8.jpg/1280px-%E0%B8%9E%E0%B8%A3%E0%B8%B0%E0%B8%AD%E0%B8%B8%E0%B9%82%E0%B8%9A%E0%B8%AA%E0%B8%96%E0%B8%A7%E0%B8%B1%E0%B8%94%E0%B8%AB%E0%B8%99%E0%B9%89%E0%B8%B2%E0%B8%9E%E0%B8%A3%E0%B8%B0%E0%B9%80%E0%B8%A1%E0%B8%A3%E0%B8%B8.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Wat_Na_Phra_Men_Ayutthaya.jpg/1280px-Wat_Na_Phra_Men_Ayutthaya.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Phra_Phuttha_Nimit_Wat_Na_Phra_Men.jpg/1280px-Phra_Phuttha_Nimit_Wat_Na_Phra_Men.jpg"
    ],
    rating: 4.9,
    reviewsCount: 3120,
    openHours: "08:00 - 17:30 น.",
    admissionFee: "ชาวไทย ฟรี / ชาวต่างชาติ 20 บาท (สำหรับเข้าชมวิหารน้อย)",
    location: "ตำบลท่าวาสุกรี อำเภอพระนครศรีอยุธยา (ริมคลองสระบัว)",
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3869.4589254873527!2d100.55835467576326!3d14.36442658609355!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e274191d9b3da5%3A0x6b63f58a36c53585!2sWat%20Na%20Phra%20Men!5e0!3m2!1sth!2sth!4v1700000000009",
    googleMapUrl: "https://maps.google.com/?q=Wat+Na+Phra+Men",
    highlights: [
      "พระพุทธนิมิตวิชิตมารฯ พระพุทธรูปทรงเครื่องจักรพรรดิที่งดงามที่สุด",
      "พระคันธารราฐศิลาเขียว ศิลปะทวารวดีอายุกว่า 1,500 ปี",
      "เพดานไม้แกะสลักดาวเพดานและหน้าบันพระอุโบสถอยุธยาดั้งเดิมแท้ๆ"
    ],
    blessing: "เสริมบารมี คุ้มครองจากศัตรูหมู่มาร ชนะคดีความ และเสริมสง่าราศีในชีวิต",
    suggestedDuration: "1 ชั่วโมง",
    bestTime: "08:30 - 11:30 น. หรือ 14:00 - 16:30 น."
  },
  {
    id: "wat-maheyong",
    name: "วัดมเหยงคณ์",
    nameEn: "Wat Maheyong",
    category: "nature-peace",
    categoryLabel: "โบราณสถาน & บรรยากาศธรรมชาติสงบ",
    badge: "เจดีย์ช้างล้อม",
    shortDesc: "สัมผัสความสงบร่มรื่นท่ามกลางแมกไม้ โบราณสถานเจดีย์ช้างล้อม 80 เชือก และศูนย์ปฏิบัติธรรมชื่อดัง",
    fullDesc: "วัดมเหยงคณ์ เดิมเป็นพระอารามหลวงฝ่ายอรัญวาสี (วัดป่า) ตั้งอยู่นอกเกาะเมืองอยุธยาทางทิศตะวันออก สร้างขึ้นในสมัยสมเด็จพระบรมราชาธิราชที่ 2 (เจ้าสามพระยา) เมื่อปี พ.ศ. 1981 และได้รับการบูรณะใหญ่ในสมัยสมเด็จพระเจ้าท้ายสระ จุดเด่นของโบราณสถานคือ 'เจดีย์ประธานทรงระฆังคว่ำ' ฐานแปดเหลี่ยมที่มีช้างปูนปั้นล้อมรอบถึง 80 เชือก โอบล้อมด้วยธรรมชาติร่มรื่น สวนป่า และซากพระอุโบสถที่มีมนต์เสน่ห์ ปัจจุบันยังเป็นสำนักปฏิบัติธรรมกรรมฐานที่มีชื่อเสียงระดับประเทศ",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Wat_Maheyong%2C_Ayutthaya_0326.jpg/960px-Wat_Maheyong%2C_Ayutthaya_0326.jpg",
    gallery: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Wat_Maheyong%2C_Ayutthaya_0326.jpg/960px-Wat_Maheyong%2C_Ayutthaya_0326.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Wat_Maheyong_Ayutthaya.jpg/1280px-Wat_Maheyong_Ayutthaya.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Wat_Maheyong_ruins_Ayutthaya.jpg/1280px-Wat_Maheyong_ruins_Ayutthaya.jpg"
    ],
    rating: 4.8,
    reviewsCount: 1950,
    openHours: "08:00 - 18:00 น.",
    admissionFee: "ชาวไทย ฟรี / ชาวต่างชาติ 20 บาท",
    location: "ตำบลหันตรา อำเภอพระนครศรีอยุธยา (นอกเกาะเมืองทิศตะวันออก)",
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3869.578641926543!2d100.5982146757632!3d14.360145986096773!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e2745e69e46fd1%3A0x6b63f58a36c53590!2sWat%20Maheyong!5e0!3m2!1sth!2sth!4v1700000000010",
    googleMapUrl: "https://maps.google.com/?q=Wat+Maheyong",
    highlights: [
      "เจดีย์ช้างล้อม 80 เชือกศิลปะสุโขทัยผสมผสานอยุธยา",
      "ซากพระอุโบสถโบราณท่ามกลางร่มเงาแมกไม้ธรรมชาติ",
      "ลานปฏิบัติธรรมและสวดมนต์เจริญจิตภาวนาที่เงียบสงบ"
    ],
    blessing: "เสริมสมาธิ สติปัญญา ความสงบสุขในใจ สุขภาพจิตที่ดี และจิตใจเข้มแข็ง",
    suggestedDuration: "1 - 1.5 ชั่วโมง",
    bestTime: "ช่วงเช้า 08:00 - 10:30 น. เพื่อสัมผัสอากาศสดชื่นและเสียงนกร้อง"
  }
];

// One Day Trip Itinerary Recommendations
const ITINERARIES = [
  {
    id: "route-unesco-express",
    title: "ทริป 1 วัน มรดกโลกไฮไลต์ & ถ่ายรูปชุดไทย",
    tag: "ยอดนิยมอันดับ 1",
    summary: "เก็บครบ 5 ไฮไลต์เด็ดรอบเกาะเมือง พร้อมใส่ชุดไทยถ่ายรูปยามเย็นที่วัดไชยวัฒนาราม",
    duration: "08:30 - 19:30 น.",
    budget: "ประมาณ 300 - 600 บาท/คน",
    steps: [
      { time: "08:30 - 10:00 น.", title: "วัดใหญ่ชัยมงคล", desc: "กราบพระนอน ขอพรเจดีย์ชัยมงคลรับพลังชัยชนะแต่เช้าตรู่", placeId: "wat-yai-chai-mongkhon" },
      { time: "10:30 - 11:45 น.", title: "วัดมหาธาตุ & วัดราชบูรณะ", desc: "ชมเศียรพระในรากไม้และเดินข้ามไปสำรวจกรุโบราณวัดราชบูรณะ", placeId: "wat-mahathat" },
      { time: "12:00 - 13:30 น.", title: "พักทานอาหารกลางวัน", desc: "แวะทานก๋วยเตี๋ยวเรืออยุธยาแท้ หรือกุ้งแม่น้ำเผาริมน้ำเจ้าพระยา", placeId: null },
      { time: "14:00 - 15:30 น.", title: "วัดพระศรีสรรเพชญ์ & วิหารมงคลบพิตร", desc: "ชมเจดีย์ 3 องค์สัญลักษณ์อยุธยา และกราบพระมงคลบพิตร", placeId: "wat-phra-si-sanphet" },
      { time: "16:30 - 19:00 น.", title: "วัดไชยวัฒนาราม", desc: "เช่าชุดไทย ถ่ายรูปมุมมหาชน ชมพระอาทิตย์ตกดิน และชมไฟประดับยามค่ำคืน", placeId: "wat-chaiwatthanaram" }
    ]
  },
  {
    id: "route-blessing-nine",
    title: "ทริปสายมู ไหว้พระ 9 วัด เสริมมงคลชีวิตครบทุกมิติ",
    tag: "สายบุญ มูเตลู",
    summary: "จัดเส้นทางไหว้พระขอพรครบ 9 วัดสำคัญ ทั้งการงาน การเงิน ความรัก สุขภาพ และแคล้วคลาด",
    duration: "08:00 - 18:00 น.",
    budget: "ประมาณ 200 - 400 บาท/คน",
    steps: [
      { time: "08:00 น.", title: "วัดพนัญเชิงวรวิหาร", desc: "ห่มผ้าหลวงพ่อโต ขอพรการค้าและความมั่งคั่ง", placeId: "wat-phanan-choeng" },
      { time: "09:30 น.", title: "วัดใหญ่ชัยมงคล", desc: "ขอพรชัยชนะ ความก้าวหน้าในหน้าที่การงาน", placeId: "wat-yai-chai-mongkhon" },
      { time: "11:00 น.", title: "วัดพุทไธศวรรย์", desc: "ขอพรรากฐานชีวิตมั่นคงและคุ้มครองปลอดภัย", placeId: "wat-phutthaisawan" },
      { time: "13:30 น.", title: "วัดกษัตราธิราช & วัดหน้าพระเมรุ", desc: "กราบพระพุทธนิมิตฯ เสริมบารมีชนะอุปสรรค", placeId: "wat-na-phra-men" },
      { time: "16:00 น.", title: "วัดมเหยงคณ์", desc: "ทำสมาธิ เดินจงกรม ปิดท้ายวันด้วยจิตใจสงบเปี่ยมสุข", placeId: "wat-maheyong" }
    ]
  }
];

// Travel Tips and Guidelines
const TRAVEL_TIPS = [
  {
    category: "dress-code",
    title: "การแต่งกายเข้าชมโบราณสถานและวัด",
    icon: "fa-shirt",
    items: [
      "ควรสวมเสื้อมีแขน ไม่เปิดไหล่ หรือเสื้อเอวลอย",
      "กางเกงหรือกระโปรงควรยาวคลุมเข่า (งดกางเกงขาสั้นเหนือเข่า)",
      "งดสวมกางเกงหรือกระโปรงที่ขาดหรือบางเกินไป",
      "สามารถเช่าผ้านุ่งหรือชุดไทยเปลี่ยนได้ที่หน้าโบราณสถานสำคัญ",
      "ควรถอดรองเท้าและหมวกก่อนเดินเข้าสู่ภายในพระอุโบสถหรือพระวิหาร"
    ]
  },
  {
    category: "ticket-pass",
    title: "บัตรเข้าชมรวมโบราณสถาน (Heritage Pass)",
    icon: "fa-ticket",
    items: [
      "บัตรรายสถานที่: ชาวไทย 10 บาท / ชาวต่างชาติ 50 บาท ต่อแห่ง",
      "บัตรรวม 6 วัดมรดกโลก (ชาวไทย 40 บาท / ต่างชาติ 220 บาท) มีอายุ 30 วัน",
      "วัดที่ใช้บัตรรวมได้: วัดมหาธาตุ, วัดพระศรีสรรเพชญ์, วัดราชบูรณะ, วัดไชยวัฒนาราม, วัดพระราม, วัดมเหยงคณ์",
      "สามารถซื้อได้ที่เคาน์เตอร์จำหน่ายตั๋วของทุกวัดมรดกโลก"
    ]
  },
  {
    category: "thai-costume",
    title: "ข้อแนะนำการเช่าชุดไทยถ่ายรูป",
    icon: "fa-camera",
    items: [
      "ราคาเช่าชุดไทยอยู่ที่ประมาณ 150 - 300 บาท/คน (รวมเครื่องประดับ)",
      "บริการทำผม-แต่งหน้าเพิ่มประมาณ 50 - 150 บาท",
      "ร้านเช่าชุดส่วนใหญ่ตั้งอยู่ฝั่งตรงข้ามวัดไชยวัฒนาราม",
      "เวลาที่แสงสวยที่สุดสำหรับถ่ายรูปคือ 16:30 - 18:15 น. (Golden Hour)",
      "พกร่ม แว่นตากันแดด และน้ำดื่มระหว่างเดินถ่ายรูป"
    ]
  },
  {
    category: "transportation",
    title: "การเดินทางรอบเกาะเมืองอยุธยา",
    icon: "fa-van-shuttle",
    items: [
      "รถไฟ (สถานีกลางกรุงเทพอภิวัฒน์/หัวลำโพง -> สถานีอยุธยา) ค่าโดยสารเริ่มต้นเพียง 15 - 20 บาท",
      "รถตู้/มินิบัส จากหมอชิต 2 หรือฟิวเจอร์พาร์ครังสิต ใช้เวลาประมาณ 1 ชั่วโมง",
      "รถตุ๊กตุ๊กหน้าสั้น (เอกลักษณ์อยุธยา) เหมารอบเมือง ชมวัด ราคาประมาณ 200 - 300 บาท/ชม.",
      "เช่าจักรยาน (50 บาท/วัน) หรือ มอเตอร์ไซค์ (250-300 บาท/วัน) ขี่รับลมรอบเกาะเมือง"
    ]
  }
];
