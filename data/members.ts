export type Member = {
  id: string;
  name: string;
  role: string;
  category: string;
  status: "Active" | "Past";
  image: string;
  school?: string;
};

export const members: Member[] = [
  {
    id: "kaski-1",
    name: "Shadananda Gautam",
    role: "President",
    category: "Kaski Executive Committee",
    status: "Active",
    image: "/team/Mr. SHADANANDA GAUTAM.webp",
    school: "Bal Kalyan High School, Pokhara-13"
  },
  {
    id: "kaski-2",
    name: "Bishnu Prasad Timilsina",
    role: "Senior Vice President",
    category: "Kaski Executive Committee",
    status: "Active",
    image: "/team/BishnuPrasadTimilsina.webp",
    school: "Tarakunj English Boarding School, Pokhara-15"
  },
  {
    id: "kaski-3",
    name: "Shree Krishna Adhikari",
    role: "Vice President",
    category: "Kaski Executive Committee",
    status: "Active",
    image: "/team/Mr. SHREE KRISHNA ADHIKARI.webp",
    school: "Harvard Academy, Pokhara-15"
  },
  {
    id: "kaski-4",
    name: "Surendraman Singh Bhandari",
    role: "Secretary",
    category: "Kaski Executive Committee",
    status: "Active",
    image: "/team/Mr. SURENDRA MANSINGH BHANDARI.webp",
    school: "Alpha Boarding School, Pokhara-16"
  },
  {
    id: "kaski-5",
    name: "Bidhan Gautam",
    role: "Treasurer",
    category: "Kaski Executive Committee",
    status: "Active",
    image: "/team/Mr. BIDHAN GAUTAM.webp",
    school: "Pokhara Learners Academy, Pokhara-07"
  },
  {
    id: "kaski-6",
    name: "Dilliram Aryal",
    role: "Joint Secretary",
    category: "Kaski Executive Committee",
    status: "Active",
    image: "/team/Mr. DILLIRAM ARYAL.webp",
    school: "Bal Prabhat Boarding School, Pokhara-09"
  },
  {
    id: "kaski-7",
    name: "Naresh Prasad Baral",
    role: "Joint Treasurer",
    category: "Kaski Executive Committee",
    status: "Active",
    image: "/team/Mr. NARESH PRASAD BARAL.webp",
    school: "Disneyland Academy, Pokhara-07"
  },
  {
    id: "kaski-8",
    name: "Kaushalya Gurung",
    role: "Member",
    category: "Kaski Executive Committee",
    status: "Active",
    image: "/team/Mrs. KOUSHALYA GURUNG.webp",
    school: "Navadeep Boarding School, Pokhara-10"
  },
  {
    id: "kaski-9",
    name: "Khim Bahadur Gurung",
    role: "Member",
    category: "Kaski Executive Committee",
    status: "Active",
    image: "/team/Mr. KHIM GURUNG.webp",
    school: "Social Public School, Pokhara-10"
  },
  {
    id: "kaski-10",
    name: "Dr. Maheshwor Parajuli",
    role: "Member",
    category: "Kaski Executive Committee",
    status: "Active",
    image: "/team/Mr. MAHESHWOR PARAJULI.webp",
    school: "Shanti Niketan Boarding School, Pokhara-05"
  },
  {
    id: "kaski-11",
    name: "Rekha Thapa Karki",
    role: "Member",
    category: "Kaski Executive Committee",
    status: "Active",
    image: "/team/Mrs. REKHA THAPA KARKI.webp",
    school: "Vibhuti Shiksha Sadan, Pokhara-10"
  },
  {
    id: "kaski-12",
    name: "Tikaram Poudel",
    role: "Member",
    category: "Kaski Executive Committee",
    status: "Active",
    image: "/team/Mr. TIKARAM POUDEL.webp",
    school: "Hill Side Boarding School, Annapurna Gaun Palika - 5"
  },
  {
    id: "kaski-13",
    name: "Bishnu GC",
    role: "Member",
    category: "Kaski Executive Committee",
    status: "Active",
    image: "/team/Mr. BISHNU G.C.webp",
    school: "Dhungesanghu Boarding School, Pokhara-15"
  },
  {
    id: "kaski-14",
    name: "Rajesh Gurung",
    role: "Member",
    category: "Kaski Executive Committee",
    status: "Active",
    image: "/team/Mr. RAJESH GURUNG.webp",
    school: "Suryodaya Boarding School, Pokhara-16"
  },
  {
    id: "69c8afc0a97c3e5107a4bf82",
    name: "Mr. Narayan Prasad Ghimire",
    role: "Advisor",
    category: "Advisor",
    status: "Active",
    image: "https://api.pabson.org.np/uploads/images/1774760632903NarayanPrasadGhimire(1).png"
  },
  {
    id: "69c8b7dc23378cf8ddd2da7c",
    name: "Mr. Tukaram Dhakal",
    role: "Academic Advisor ",
    category: "Academic Advisor",
    status: "Active",
    image: "https://api.pabson.org.np/uploads/images/1774762040716TukuramDhakal.png"
  },
  {
    id: "69c8ab4df1f128c0fc87156b",
    name: "Mr. Rajesh Khadka",
    role: "Senior Advisor",
    category: "Senior Advisor",
    status: "Active",
    image: "https://api.pabson.org.np/uploads/images/1774758733059RajeshKhadka.png"
  },
  {
    id: "69c8c099f1f128c0fc871653",
    name: "Mr. Krishna Prasad Adhikari",
    role: "President",
    category: "Central Executive Committee",
    status: "Active",
    image: "https://api.pabson.org.np/uploads/images/1774764432696KrishnaAdhikari1.png"
  },
  {
    id: "69c8a8f023378cf8ddd2d9c6",
    name: "Mr. DK Dhungana",
    role: "Chief Advisor",
    category: "Chief Advisor",
    status: "Active",
    image: "https://api.pabson.org.np/uploads/images/1783854016976CopyofI'mattendingbhaktapurpabson(3).jpg"
  },
  {
    id: "69c8ab7f6432e45a9e42a900",
    name: "Mr. Umesh Shrestha",
    role: "Senior Advisor",
    category: "Senior Advisor",
    status: "Active",
    image: "https://api.pabson.org.np/uploads/images/1774758783012UmeshShrestha.png"
  },
  {
    id: "69c8afe2f1f128c0fc8715c4",
    name: "Mr. Gopal Karki",
    role: "Advisor",
    category: "Advisor",
    status: "Active",
    image: "https://api.pabson.org.np/uploads/images/1774760856255GopalKarki(1).png"
  },
  {
    id: "69c8b8596432e45a9e42a99e",
    name: "Dr. Surendra Kumar Sitaula",
    role: "Academic Advisor ",
    category: "Academic Advisor",
    status: "Active",
    image: "https://api.pabson.org.np/uploads/images/1774763537264SurendraKumarSitaula.png"
  },
  {
    id: "69c8c1cef1f128c0fc871675",
    name: "Mr. Gopal Prasad Acharya",
    role: "Co-President",
    category: "Central Executive Committee",
    status: "Active",
    image: "https://api.pabson.org.np/uploads/images/1774764543097GopalPrasadAcharya.png"
  },
  {
    id: "69c8c6e0a97c3e5107a4c0bc",
    name: "Mr. Sumit Thapa",
    role: "President, Koshi Province",
    category: "Province President",
    status: "Active",
    image: "https://api.pabson.org.np/uploads/images/1774766441376SumitThapa1.png"
  },
  {
    id: "69c8c7f5a97c3e5107a4c0e9",
    name: "Mr. Ganesh Kumar Sah",
    role: "President, Madhesh Province",
    category: "Province President",
    status: "Active",
    image: "https://api.pabson.org.np/uploads/images/1774766485780GaneshKumarShah1.png"
  },
  {
    id: "69c8c82ea97c3e5107a4c0ec",
    name: "Mr. Murari Prakash Sanjel",
    role: "President, Bagmati Province",
    category: "Province President",
    status: "Active",
    image: "https://api.pabson.org.np/uploads/images/1774766496288MurariPrakashSanjel.png"
  },
  {
    id: "69c8c856a97c3e5107a4c0ef",
    name: "Mr. Prakash Khanal",
    role: "President, Gandaki Province",
    category: "Province President",
    status: "Active",
    image: "https://api.pabson.org.np/uploads/images/1774766506752PrakashKhanal.png"
  },
  {
    id: "69c8c894f1f128c0fc871744",
    name: "Mr. Lalhari Pandey",
    role: "President, Lumbini Province",
    category: "Province President",
    status: "Active",
    image: "https://api.pabson.org.np/uploads/images/1774766861627LalhariPandey.png"
  },
  {
    id: "69c8c8bdf1f128c0fc871747",
    name: "Mr. Nokh Bahadur Khatri",
    role: "President, Karnali Province",
    category: "Province President",
    status: "Active",
    image: "https://api.pabson.org.np/uploads/images/1774766817710NokBahadurKhatri.png"
  },
  {
    id: "69c8c8f2f1f128c0fc871753",
    name: "Mr. CB Chand",
    role: "President, Sudur Paschim Province",
    category: "Province President",
    status: "Active",
    image: "https://api.pabson.org.np/uploads/images/1774766809449C.BChand.png"
  },
  {
    id: "69c8abd0f1f128c0fc87156f",
    name: "Mr. Bhoj Bahadur Shah",
    role: "Senior Advisor",
    category: "Senior Advisor",
    status: "Active",
    image: "https://api.pabson.org.np/uploads/images/1774758864007BhojBahadurShah(1).png"
  },
  {
    id: "69c8b006f1f128c0fc8715cf",
    name: "Mr. Ishwar Bahadur Gurung",
    role: "Advisor",
    category: "Advisor",
    status: "Active",
    image: "https://api.pabson.org.np/uploads/images/1774761192073IshwarBahadurGurung(1).png"
  },
  {
    id: "69c8b8746432e45a9e42a9a1",
    name: "Mr. Basudev Neupane",
    role: "Academic Advisor ",
    category: "Academic Advisor",
    status: "Active",
    image: "https://api.pabson.org.np/uploads/images/1774763546403BasudevNeupane.png"
  },
  {
    id: "69c8c238a97c3e5107a4c008",
    name: "Mrs. Deepika Rimal Thapa",
    role: "Senior Vice President",
    category: "Central Executive Committee",
    status: "Active",
    image: "https://api.pabson.org.np/uploads/images/1774766892812DeepikaThapaRimal.png"
  },
  {
    id: "69c8ac666432e45a9e42a907",
    name: "Mr. Lachhe Bahadur K.C.",
    role: "Senior Advisor",
    category: "Senior Advisor",
    status: "Active",
    image: "https://api.pabson.org.np/uploads/images/1774759353135LaccheBahadurKC(1).png"
  },
  {
    id: "69c8b036f1f128c0fc8715e1",
    name: "Mr. Bir Bahadur Buddhathoki",
    role: "Advisor",
    category: "Advisor",
    status: "Active",
    image: "https://api.pabson.org.np/uploads/images/1774761355497Mr.BirBahadurBuddhathoki(1).png"
  },
  {
    id: "69c8b896a97c3e5107a4bfb7",
    name: "Mr. Chinu Ranabhat",
    role: "Academic Advisor ",
    category: "Academic Advisor",
    status: "Active",
    image: "https://api.pabson.org.np/uploads/images/1774763554501ChinuRanabhat.png"
  },
  {
    id: "69c8c263a97c3e5107a4c00b",
    name: "Mr. Ashish Shrestha ",
    role: "Vice President",
    category: "Central Executive Committee",
    status: "Active",
    image: "https://api.pabson.org.np/uploads/images/1774850170716AshishShrestha.png"
  },
  {
    id: "69c8ac8da97c3e5107a4bf1f",
    name: "Mr. Bijay Sambahamphe",
    role: "Senior Advisor",
    category: "Senior Advisor",
    status: "Active",
    image: "https://api.pabson.org.np/uploads/images/1774759403390BijayaSambahamphe(1).png"
  },
  {
    id: "69c8b06323378cf8ddd2da41",
    name: "Mr. Suman Gopal Acharya",
    role: "Advisor",
    category: "Advisor",
    status: "Active",
    image: "https://api.pabson.org.np/uploads/images/1774761620207SumanGopalAcharya.png"
  },
  {
    id: "69c8b90a23378cf8ddd2da88",
    name: "Mr. Gopendra Keshari Neupane",
    role: "Academic Advisor ",
    category: "Academic Advisor",
    status: "Active",
    image: "https://api.pabson.org.np/uploads/images/1774763603976gopendrakesarineupane(1).png"
  },
  {
    id: "69c8c294f1f128c0fc87167f",
    name: "Mr. Anil Kumar Jha",
    role: "Vice President",
    category: "Central Executive Committee",
    status: "Active",
    image: "https://api.pabson.org.np/uploads/images/1774766910649AnilKumarJha.jpg"
  },
  {
    id: "69c8af246432e45a9e42a956",
    name: "Mr. Tikaram Puri",
    role: "Senior Advisor",
    category: "Senior Advisor",
    status: "Active",
    image: "https://api.pabson.org.np/uploads/images/1774759780133TikaramPuri1.png"
  },
  {
    id: "69c8b08523378cf8ddd2da47",
    name: "Mr. Navraj Gurung ",
    role: "Advisor",
    category: "Advisor",
    status: "Active",
    image: "https://api.pabson.org.np/uploads/images/1774761701714NavrajGurung.png"
  },
  {
    id: "69c8b92c23378cf8ddd2da8b",
    name: "Mr. Medin Lamichhane",
    role: "Academic Advisor ",
    category: "Academic Advisor",
    status: "Active",
    image: "https://api.pabson.org.np/uploads/images/1774763629096MedinLamichhane(1).png"
  },
  {
    id: "69c8c2b4f1f128c0fc871682",
    name: "Mr. Kishor Gauttam",
    role: "Vice President",
    category: "Central Executive Committee",
    status: "Active",
    image: "https://api.pabson.org.np/uploads/images/1774767099088KishorGautam1.png"
  },
  {
    id: "69c8b0a5f1f128c0fc8715e7",
    name: "Mr. Jagbir Thapa",
    role: "Advisor",
    category: "Advisor",
    status: "Active",
    image: "https://api.pabson.org.np/uploads/images/1774761804015JagbirThapa(1).png"
  },
  {
    id: "69c8ba916432e45a9e42a9bb",
    name: "Dr.Babin Pokharel ",
    role: "Academic Advisor ",
    category: "Academic Advisor",
    status: "Active",
    image: "https://api.pabson.org.np/uploads/images/1774763650800Dr.BabinPokherel(1).png"
  },
  {
    id: "69c8c2e823378cf8ddd2dad6",
    name: "Mr. Santsohmani Neupane",
    role: "Vice President",
    category: "Central Executive Committee",
    status: "Active",
    image: "https://api.pabson.org.np/uploads/images/1774767108651SantoshManiNeupane1.png"
  },
  {
    id: "69c8c30b23378cf8ddd2dad9",
    name: "Mr. Rabins Sharma",
    role: "Vice President",
    category: "Central Executive Committee",
    status: "Active",
    image: "https://api.pabson.org.np/uploads/images/1776849962480WhatsAppImage2026-04-22at13.30.05.jpeg"
  },
  {
    id: "69c8c33c23378cf8ddd2dade",
    name: "Mrs. Sangita Silwal Ayer",
    role: "Vice President",
    category: "Central Executive Committee",
    status: "Active",
    image: "https://api.pabson.org.np/uploads/images/1774766956214SangitaSilwalAyer.png"
  },
  {
    id: "69c8c35d23378cf8ddd2dae1",
    name: "Mr. Tikaram Dhakal ",
    role: "Vice President Koshi",
    category: "Central Executive Committee",
    status: "Active",
    image: "https://api.pabson.org.np/uploads/images/1774767182072TikaramDhakal1.png"
  },
  {
    id: "69c8c3ea6432e45a9e42aa09",
    name: "Mr. Dipak Kumar Regmi ",
    role: "Vice President Madhesh",
    category: "Central Executive Committee",
    status: "Active",
    image: "https://api.pabson.org.np/uploads/images/1774766981191DipakKumarRegmi.png"
  },
  {
    id: "69c8f385f05c3a6d1c39444d",
    name: "Mr. Thakin Kumar Gurung",
    role: "Vice President Bagmati",
    category: "Central Executive Committee",
    status: "Active",
    image: "https://api.pabson.org.np/uploads/images/1774779567717ThakinKumarGurung.jpg"
  },
  {
    id: "69c8f3bcb1ac96a986f7f23b",
    name: "Mr. Prem Prasad Sharma",
    role: "Vice President Gandaki",
    category: "Central Executive Committee",
    status: "Active",
    image: "https://api.pabson.org.np/uploads/images/1774779584371PremPrasadSharma.jpg"
  },
  {
    id: "69c8f3f2f05c3a6d1c394476",
    name: "Mr. Tikaram Neupane",
    role: "Vice President lumbini",
    category: "Central Executive Committee",
    status: "Active",
    image: "https://api.pabson.org.np/uploads/images/1774779595580TikaramNeupane.png"
  },
  {
    id: "69c8f464f05c3a6d1c39447f",
    name: "Mr. Nain Singh Khatri",
    role: "Vice President Karnali",
    category: "Central Executive Committee",
    status: "Active",
    image: "https://api.pabson.org.np/uploads/images/1774779610251NainSinghKhatri.png"
  },
  {
    id: "69c8f48cf05c3a6d1c394482",
    name: "Mr. Lalitraj Pant",
    role: "Vice President Sudurpaschim",
    category: "Central Executive Committee",
    status: "Active",
    image: "https://api.pabson.org.np/uploads/images/1774779557977LalitRajPanta.png"
  },
  {
    id: "69c8f4afd77ec1d5bf01fd3e",
    name: "Mr. RB Katwal ",
    role: "General Secretary",
    category: "Central Executive Committee",
    status: "Active",
    image: "https://api.pabson.org.np/uploads/images/1774779540975image040.png"
  },
  {
    id: "69c8f4d0b1ac96a986f7f247",
    name: "Mr. Ganesh Babu Pokharel",
    role: "Treasurer",
    category: "Central Executive Committee",
    status: "Active",
    image: "https://api.pabson.org.np/uploads/images/1774779498767GaneshPokhrel.png"
  },
  {
    id: "69c8f4f7b1ac96a986f7f24a",
    name: "Mr. Bhimsen KC",
    role: "Deputy General Secretary",
    category: "Central Executive Committee",
    status: "Active",
    image: "https://api.pabson.org.np/uploads/images/1783854454141CopyofI'mattendingbhaktapurpabson(5).jpg"
  },
  {
    id: "69c8f56eb1ac96a986f7f24f",
    name: "Mr. Bhuwanlal Shrestha",
    role: "Deputy General Secretary",
    category: "Central Executive Committee",
    status: "Active",
    image: "https://api.pabson.org.np/uploads/images/1774779477798BhubanLalShrestha.png"
  },
  {
    id: "69c8f59af05c3a6d1c394487",
    name: "Mrs. Aasha Kumari Khadka",
    role: "Secretary",
    category: "Central Executive Committee",
    status: "Active",
    image: "https://api.pabson.org.np/uploads/images/1774779625348AshaKumariKhadka.png"
  },
  {
    id: "69c8f5c8f05c3a6d1c39448a",
    name: "Mr. Bishnu Neupane",
    role: "Secretary",
    category: "Central Executive Committee",
    status: "Active",
    image: "https://api.pabson.org.np/uploads/images/1774779635542BishnuNeupane.png"
  },
  {
    id: "69c8f5eeb1ac96a986f7f256",
    name: "Mr. Janak Bahadur Karki",
    role: "Secretary",
    category: "Central Executive Committee",
    status: "Active",
    image: "https://api.pabson.org.np/uploads/images/1774779647676JanakBahadurKarki.png"
  },
  {
    id: "69c8f6dcd77ec1d5bf01fd78",
    name: "Mr. Yogendra Hamal ",
    role: "Secretary",
    category: "Central Executive Committee",
    status: "Active",
    image: "https://api.pabson.org.np/uploads/images/1774779655540YogendraHamal.jpg"
  },
  {
    id: "69c8f7058cf4fcead613d7f3",
    name: "Mr. Chandra Kumar Adhikari",
    role: "Secretary",
    category: "Central Executive Committee",
    status: "Active",
    image: "https://api.pabson.org.np/uploads/images/1783854106854CopyofI'mattendingbhaktapurpabson(4).jpg"
  },
  {
    id: "69c8f78ab1ac96a986f7f280",
    name: "Mrs. Grace Shrestha",
    role: "Joint Treasurer",
    category: "Central Executive Committee",
    status: "Active",
    image: "https://api.pabson.org.np/uploads/images/1774779664005GraceShrestha.png"
  },
  {
    id: "69c8f7bfb1ac96a986f7f283",
    name: "Mr. Santosh Adhikari",
    role: "Joint Treasurer",
    category: "Central Executive Committee",
    status: "Active",
    image: "https://api.pabson.org.np/uploads/images/1774779681087SantoshAdhikari.jpg"
  },
  {
    id: "69c8f8778cf4fcead613d800",
    name: "Mr. Hira Sharma (Nepal)",
    role: "Secretariat Member",
    category: "Central Executive Committee",
    status: "Active",
    image: "https://api.pabson.org.np/uploads/images/1774780525168HiraSharma(1).png"
  },
  {
    id: "69c8f89d8cf4fcead613d803",
    name: "Mr. Khemendra Rana",
    role: "Secretariat Member",
    category: "Central Executive Committee",
    status: "Active",
    image: "https://api.pabson.org.np/uploads/images/1774780536508KhemendraRana.jpg"
  },
  {
    id: "69c8f8c38cf4fcead613d806",
    name: "Mr. Radha Krishna Maharjan",
    role: "Secretariat Member",
    category: "Central Executive Committee",
    status: "Active",
    image: "https://api.pabson.org.np/uploads/images/1774780668172RadhaKrishnaMaharjan(1).png"
  },
  {
    id: "69c8f8e48cf4fcead613d809",
    name: "Mrs. Anju Bhattarai",
    role: "Secretariat Member",
    category: "Central Executive Committee",
    status: "Active",
    image: "https://api.pabson.org.np/uploads/images/1774780756548AnjuBhattarai.png"
  },
  {
    id: "69c8f952d77ec1d5bf01fda0",
    name: "Mr. Surendra Shrestha ",
    role: "Secretariat Member",
    category: "Central Executive Committee",
    status: "Active",
    image: "https://api.pabson.org.np/uploads/images/1774779367116SurendraShrestha.png"
  },
  {
    id: "69c8fa3db1ac96a986f7f2a8",
    name: "Mr. Pralhad Prasad Khanal",
    role: "Secretariat Member",
    category: "Central Executive Committee",
    status: "Active",
    image: "https://api.pabson.org.np/uploads/images/1774779358501PrahladPrasadKhanal.jpg"
  },
  {
    id: "69c8fa5eb1ac96a986f7f2ab",
    name: "Mr. Lokendra Bahadur Khadka",
    role: "Secretariat Member",
    category: "Central Executive Committee",
    status: "Active",
    image: "https://api.pabson.org.np/uploads/images/1774779347942LokendraBahadurKhadka.jpg"
  },
  {
    id: "69c8fa7db1ac96a986f7f2ae",
    name: "Mr. Jib Prasad Guragain",
    role: "Member",
    category: "Central Executive Committee",
    status: "Active",
    image: "https://api.pabson.org.np/uploads/images/1774779336336JibPrasadGuragain.png"
  },
  {
    id: "69c8fac38cf4fcead613d829",
    name: "Mr. Bikash Karmacharya",
    role: "Member",
    category: "Central Executive Committee",
    status: "Active",
    image: "https://api.pabson.org.np/uploads/images/1774780355140BikashKarmacharya.png"
  },
  {
    id: "69c90339d77ec1d5bf01fde7",
    name: "Mr. Dinesh Bhattarai",
    role: "Member",
    category: "Central Executive Committee",
    status: "Active",
    image: "https://api.pabson.org.np/uploads/images/1774781603946DineshBhattarai.png"
  },
  {
    id: "69c90369d77ec1d5bf01fdea",
    name: "Mr. Chandra Prasad Bhattarai ",
    role: "Member",
    category: "Central Executive Committee",
    status: "Active",
    image: "https://api.pabson.org.np/uploads/images/1774781547730ChandraPrasadBhattarai.jpg"
  },
  {
    id: "69c9039ed77ec1d5bf01fdee",
    name: "Mrs. Shitala Subba",
    role: "Member",
    category: "Central Executive Committee",
    status: "Active",
    image: "https://api.pabson.org.np/uploads/images/1774781540205SheetalaSubba.jpg"
  },
  {
    id: "69c903dad77ec1d5bf01fdf1",
    name: "Mr. Shrawan Pokharel ",
    role: "Member",
    category: "Central Executive Committee",
    status: "Active",
    image: "https://api.pabson.org.np/uploads/images/1774781533299ShrawanPokharel.jpg"
  },
  {
    id: "69c9044dd77ec1d5bf01fdf4",
    name: "Mr. Chhedup Lama",
    role: "Member",
    category: "Central Executive Committee",
    status: "Active",
    image: "https://api.pabson.org.np/uploads/images/1774781517496ChedupLama.png"
  },
  {
    id: "69c9050fd77ec1d5bf01fdfe",
    name: "Mrs. Ribha Thakur Mishra",
    role: "Member",
    category: "Central Executive Committee",
    status: "Active",
    image: "https://api.pabson.org.np/uploads/images/1774781766329RibhaThakurMishra.jpg"
  },
  {
    id: "69c9053ad77ec1d5bf01fe01",
    name: "Mr. Bishwo Lal Singh ",
    role: "Member",
    category: "Central Executive Committee",
    status: "Active",
    image: "https://api.pabson.org.np/uploads/images/1774781893358BishwoLalSingh(1).png"
  },
  {
    id: "69c9fefef05c3a6d1c394771",
    name: "Mr. Karma Wangel Lama",
    role: "Member",
    category: "Central Executive Committee",
    status: "Active",
    image: "https://api.pabson.org.np/uploads/images/1774846860480KarmaWangelLama.jpg"
  },
  {
    id: "69c9ff21f05c3a6d1c394774",
    name: "Mr. Ramesh Kumar Shrestha",
    role: "Member",
    category: "Central Executive Committee",
    status: "Active",
    image: "https://api.pabson.org.np/uploads/images/1774846873312RameshKumarShrestha.jpg"
  },
  {
    id: "69c9ff48f05c3a6d1c394777",
    name: "Dr. Rammani Sapkota",
    role: "Member",
    category: "Central Executive Committee",
    status: "Active",
    image: "https://api.pabson.org.np/uploads/images/1774846880993RammaniSapkota.jpg"
  },
  {
    id: "69c9ff75f05c3a6d1c39477a",
    name: "Mr. Kirtinidhi Aryal ",
    role: "Member",
    category: "Central Executive Committee",
    status: "Active",
    image: "https://api.pabson.org.np/uploads/images/1774846901251KritinidhiAryal.jpg"
  },
  {
    id: "69c9ff94f05c3a6d1c39477d",
    name: "Mr. Sitaram Tiwari",
    role: "Member",
    category: "Central Executive Committee",
    status: "Active",
    image: "https://api.pabson.org.np/uploads/images/1774846910329ShitaramTiwari.jpg"
  },
  {
    id: "69c9ffb1f05c3a6d1c394780",
    name: "Mr. Deepak Rawat",
    role: "Member",
    category: "Central Executive Committee",
    status: "Active",
    image: "https://api.pabson.org.np/uploads/images/1774846922903DipakRawat.jpg"
  },
  {
    id: "69c9ffd1f05c3a6d1c394783",
    name: "Mr. Homkanta Gautam",
    role: "Member",
    category: "Central Executive Committee",
    status: "Active",
    image: "https://api.pabson.org.np/uploads/images/1774848129673HomkantaGautam22.png"
  },
  {
    id: "69c9fff5f05c3a6d1c394788",
    name: "Mr. Ananta Ram Sharma",
    role: "Member",
    category: "Central Executive Committee",
    status: "Active",
    image: "https://api.pabson.org.np/uploads/images/1774846945521AnantaramSharmaWagle.jpg"
  },
  {
    id: "69ca001ab1ac96a986f7fa3c",
    name: "Mr. Sundar Pandey",
    role: "Member",
    category: "Central Executive Committee",
    status: "Active",
    image: "https://api.pabson.org.np/uploads/images/1774846954232SurendraPandey.jpg"
  },
  {
    id: "69ca0045d77ec1d5bf02004b",
    name: "Mrs. Saradha Gyawali ",
    role: "Member",
    category: "Central Executive Committee",
    status: "Active",
    image: "https://api.pabson.org.np/uploads/images/1774846966745SharadaGyawali.jpg"
  },
  {
    id: "69ca0068d77ec1d5bf02004e",
    name: "Mr. Yek Raj Paudel",
    role: "Member",
    category: "Central Executive Committee",
    status: "Active",
    image: "https://api.pabson.org.np/uploads/images/1774846973852yekrajPoudel.jpg"
  },
  {
    id: "69ca0131d77ec1d5bf020051",
    name: "Mr. Resham Bahadur Budha Magar",
    role: "Member",
    category: "Central Executive Committee",
    status: "Active",
    image: "https://api.pabson.org.np/uploads/images/1774847001969ReshamBahadurBudhaMagar.jpg"
  },
  {
    id: "69ca014ed77ec1d5bf020054",
    name: "Mr. Krishna Prasad Sharma",
    role: "Member",
    category: "Central Executive Committee",
    status: "Active",
    image: "https://api.pabson.org.np/uploads/images/1774847015849KrishnaPrasadSharma.jpg"
  },
  {
    id: "69ca0175d77ec1d5bf020057",
    name: "Dr. Dal Bahadur Gurung",
    role: "Member",
    category: "Central Executive Committee",
    status: "Active",
    image: "https://api.pabson.org.np/uploads/images/1774847026304DalBahadurGurung.jpg"
  },
  {
    id: "69ca0198d77ec1d5bf02005a",
    name: "Mr. Subas Kumar Thapa",
    role: "Member",
    category: "Central Executive Committee",
    status: "Active",
    image: "https://api.pabson.org.np/uploads/images/1774847035824SuvashKumarThapa.jpg"
  },
  {
    id: "69ca01b2d77ec1d5bf02005d",
    name: "Mrs. Laxmi Kumari Shahi",
    role: "Member",
    category: "Central Executive Committee",
    status: "Active",
    image: "https://api.pabson.org.np/uploads/images/1774847045986LaxmiKumariSahi.jpg"
  },
  {
    id: "69ca01d1d77ec1d5bf020060",
    name: "Mr. Topendra Bir Shah",
    role: "Member",
    category: "Central Executive Committee",
    status: "Active",
    image: "https://api.pabson.org.np/uploads/images/1774847378168Topendrabirshah.png"
  },
  {
    id: "69ca01f8d77ec1d5bf020063",
    name: "Mr. Aamraj Bhatt",
    role: "Member",
    category: "Central Executive Committee",
    status: "Active",
    image: "https://api.pabson.org.np/uploads/images/1774847065343AamRajBhatta.jpg"
  },
  {
    id: "69ca0214d77ec1d5bf020066",
    name: "Mr. Yam Prasad Bhandari",
    role: "Member",
    category: "Central Executive Committee",
    status: "Active",
    image: "https://api.pabson.org.np/uploads/images/1774847072646YamPrasadBhandari.jpg"
  },
  {
    id: "69ca0241d77ec1d5bf020069",
    name: "Mr. Chakra Prasad Neupane ",
    role: "Member",
    category: "Central Executive Committee",
    status: "Active",
    image: "https://api.pabson.org.np/uploads/images/1774847081288ChakraPrasadNeupane.jpg"
  },
  {
    id: "69ca0284d77ec1d5bf020074",
    name: "Mr. Mahendra Adhikari",
    role: "Member",
    category: "Central Executive Committee",
    status: "Active",
    image: "https://api.pabson.org.np/uploads/images/1774847911037MahendraAdhikari.png"
  },
  {
    id: "69ca029ed77ec1d5bf020077",
    name: "Mr. Nagendra Kumar Shrestha",
    role: "Member",
    category: "Central Executive Committee",
    status: "Active",
    image: "https://api.pabson.org.np/uploads/images/1774847904185NagendraKumarShrestha.png"
  },
  {
    id: "69ca02bcd77ec1d5bf02007a",
    name: "Mr. Dip Prakash Raymajhi",
    role: "Member",
    category: "Central Executive Committee",
    status: "Active",
    image: "https://api.pabson.org.np/uploads/images/1774847898270DipPrakashRayamajhi22.png"
  },
  {
    id: "69ca02d5d77ec1d5bf02007d",
    name: "Mrs. Kalpana Karki",
    role: "Member",
    category: "Central Executive Committee",
    status: "Active",
    image: "https://api.pabson.org.np/uploads/images/1774847891945KalpanaKarki22.png"
  },
  {
    id: "69ca02f5d77ec1d5bf020080",
    name: "Mr. Gurudatta Poudel",
    role: "Member",
    category: "Central Executive Committee",
    status: "Active",
    image: "https://api.pabson.org.np/uploads/images/1774847886335GurudattaPoudel22.png"
  },
  {
    id: "69ca0319d77ec1d5bf020083",
    name: "Mr. Deepak Kumar Maharjan",
    role: "Member",
    category: "Central Executive Committee",
    status: "Active",
    image: "https://api.pabson.org.np/uploads/images/1774847878729DipakKumarMaharjan22.png"
  },
  {
    id: "69ca0338f05c3a6d1c394794",
    name: "Mr. Yagya Murti Pandey",
    role: "Member",
    category: "Central Executive Committee",
    status: "Active",
    image: "https://api.pabson.org.np/uploads/images/1774847112894yagyamurtipandey.jpg"
  },
  {
    id: "69ca0351f05c3a6d1c394797",
    name: "Mr. Dipak Kunwar",
    role: "Member",
    category: "Central Executive Committee",
    status: "Active",
    image: "https://api.pabson.org.np/uploads/images/1774847478788DipakKunwar.png"
  },
  {
    id: "69ca0370f05c3a6d1c39479a",
    name: "Mr. Asit Kumar Baidhya",
    role: "Member",
    category: "Central Executive Committee",
    status: "Active",
    image: "https://api.pabson.org.np/uploads/images/1774847872864AstitKumarBaidya22.png"
  },
];
