const bdayWishes = {
  Albanian: "Gëzuar ditëlindjen",
  Bosnian: "Sretan rođendan",
  Bulgarian: "Chestit Rozhden den",
  Catalan: "Per molts anys",
  Chinese: "Shēngrì kuàilè",
  Czech: "Všechno nejlepší k narozeninám",
  Danish: "Tillykke med fødselsdagen",
  Dutch: "Fijne verjaardag",
  Filipino: "Maligayang kaarawan",
  Finnish: "Hyvää syntymäpäivää",
  French: "Bon anniversaire",
  Galician: "Feliz Aniversario",
  German: "Alles Gute zum Geburtstag",
  Greek: "Charoúmena genéthlia",
  Hawaiian: "Hauʻoli lā hānau",
  Hungarian: "Boldog születésnapot",
  Icelandic: "Til hamingju með afmælið",
  Igbo: "Ezi ncheta ọmụmụ",
  Indonesian: "Selamat ulang tahun",
  Irish: "Lá breithe shona duit",
  Italian: "Buon compleanno",
  Japanese: "お誕生日おめでとうございます",
  Kazakh: "Twğan küniñ quttı bolsın",
  Khmer: "Rikreay​ thngai​ kamnaet",
  Korean: "Saeng-il chugha",
  Kurdish: "Rojbûna te pîroz be",
  Latin: "Felix natalis",
  Lithuanian: "Su gimtadieniu",
  Luxembourgish: "Alles Guddes fir däi Gebuertsdag",
  Malay: "Selamat Hari lahir",
  Mongolian: "Төрсөн өдрийн мэнд",
  Nepali: "Janmadinakō",
  Norwegian: "Gratulerer med dagen",
  Polish: "Wszystkiego najlepszego",
  Portuguese: "Feliz Aniversário",
  Romanian: "La multi ani",
  Russian: "S dnem ​​rozhdeniya",
  Serbian: "Srećan rođendan",
  Slovenian: "Vse najboljše",
  Somali: "Dhalasho Wacan",
  Spanish: "Feliz cumpleaños",
  Swahili: "Siku ya kuzaliwa ya furaha",
  Swedish: "Grattis på födelsedagen",
  Tai: "S̄uk̄hs̄ạnt̒ wạn keid",
  Turkish: "Doğum günün kutlu olsun",
  Ukranian: "Z Dnem narodzhennya",
  Vietnamese: "Chúc mừng sinh nhật",
  Welsh: "Penblwydd hapus",
  Zulu: "Usuku olumnandi lokuzalwa",
};

const birthday = document.querySelector(".bday");
const button = document.querySelector(".btn");

button.addEventListener("click", function () {
  birthday.textContent = randomWish(bdayWishes);
});

function randomWish(obj) {
  const keys = Object.keys(obj);
  const randKey = keys[Math.floor(Math.random() * keys.length)];
  return `${randKey}: ${bdayWishes[randKey]} !`;
}
