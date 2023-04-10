const quotes = [
  {
    quoteEn : "gold is time.",
    authorEn : "jeongwoo",
    quoteKr : "금은 시간이다.",
    authorKr : "이정우"
  },
  {
    quoteEn : "ship is very safe when it is stay at port. but it's not reason of existence of the ship.",
    authorEn : "anoymous",
    quoteKr : "배는 항구에 있을 때 가장 안전하지만 그것이 배의 존재 이유는 아니다.",
    authorKr : "익명"
  },
  {
    quoteEn : "Not all the continuous functions are differentiable.",
    authorEn : "anonymous 65",
    quoteKr : "모든 연속함수가 미분 가능한 것은 아니다.",
    authorKr : "익명 65"
  },
  {
    quoteEn : "if the ship doesn't know where the port is, every wind will be contrary wind.",
    authorEn : "anonymous 22",
    quoteKr : "목표하는 항구의 방향을 모르면, 모든 바람이 역풍이다.",
    authorKr : "익명 22"
  },
  {
    quoteEn : "Not having any risks is the biggest risk.",
    authorEn : "anonymous 30",
    quoteKr : "리스크를 지지 않는 것이 가장 큰 리스크다.",
    authorKr : "익명 30"
  },
  {
    quoteEn : "Be the cool bug",
    authorEn : "anonymous 33",
    quoteKr : "냉정한 벌레가 되어라",
    authorKr : "익명 33"
  },
  {
    quoteEn : "If you feel uncomfortable, then change your posture and sit.",
    authorEn : "Lalro",
    quoteKr : "불편하면 자세를 고쳐 앉아.",
    authorKr : "랄로"
  },
  {
    quoteEn : "Dream like you'll live forever, live like you'll die tomorrow.",
    authorEn : "anonymous 50",
    quoteKr : "영원히 살 것처럼 꿈꾸고 내일 죽을 것처럼 살아라.",
    authorKr : "익명 50"
  },
  {
    quoteEn : "What's most important is not whether you can do it, but if you want to do it.",
    authorEn : "anonymous 52",
    quoteKr : "가장 중요한건 가능한 지 불가능한 지가 아니야, 하고 싶은지라고.",
    authorKr : "익명 52"
  },
  {
    quoteEn : "It's not what goes around comes around, it's just the irony of fate.",
    authorEn : "anonymous 112",
    quoteKr : "인과응보는 없고 새옹지마일지어다.",
    authorKr : "익명 112"
  }
];

const quoteEn = document.querySelector("#quoteEn");
const quoteKr = document.querySelector("#quoteKr");
const authorEn = document.querySelector("#authorEn");
const authorKr = document.querySelector("#authorKr");

const randNumm = Math.floor(Math.random()*quotes.length);
const todaysQuote = quotes[randNumm];

quoteEn.innerText = todaysQuote.quoteEn;
quoteKr.innerText = todaysQuote.quoteKr;
authorEn.innerText = todaysQuote.authorEn;
authorKr.innerText = todaysQuote.authorKr;


