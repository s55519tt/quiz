let que = document.getElementById("que");
let res = document.getElementById("res");
let pic = document.getElementById("pic");
let sei = document.getElementById("sei");
let sen = document.getElementById("sen");
let ag = document.getElementById("ag");
let bg = document.getElementById("bg");
let cg = document.getElementById("cg");
let dg = document.getElementById("dg");
let cnt = 40;
let sco = 0;
let flag = true;
//タイマー処理
let time = setInterval(() => {
  if (cnt > 0) {
    cnt--;
    res.textContent = "スコア :" + sco + "| 時間 : " + cnt + "秒";
  } else {
    res.style.color = "red";
    res.textContent = "スコア :" + sco + "| 終了";
    que.textContent =
      "時間切れ！(答えは成人男性が1日に摂取した場合となっています)";
    flag = false;
    clearInterval(time);
  }
}, 1000);
let num = 0;
let max = 12;
let name = new Array(max);
name = [
  "オレンジ",
  "バナナ",
  "トマト",
  "唐辛子",
  "コーヒー",
  "板チョコ",
  "水",
  "ブルーチーズ",
  "銀杏",
  "レントゲン",
  "さくらんぼの種",
  "歯磨き粉",
];
let a = new Array(max);
a = [
  "1000個",
  "400本",
  "2トン",
  "500本",
  "100杯",
  "25枚",
  "2L",
  "3kg",
  "10個",
  "5249枚",
  "2個",
  "6本",
];
let b = new Array(max);
b = [
  "1100個",
  "800本",
  "4トン",
  "1000本",
  "1000杯",
  "60枚",
  "4L",
  "5kg",
  "20個",
  "7143枚",
  "7個",
  "12本",
];
let c = new Array(max);
c = [
  "1200個",
  "1200本",
  "6トン",
  "1500本",
  "10000杯",
  "85枚",
  "6L",
  "8kg",
  "40個",
  "10351枚",
  "24個",
  "18本",
];
let d = new Array(max);
d = [
  "1300個",
  "1500本",
  "8トン",
  "2000本",
  "100000杯",
  "120枚",
  "8L",
  "10kg",
  "80個",
  "11974枚",
  "40個",
  "24本",
];
let seikai = new Array(max);
seikai = ["b", "a", "b", "d", "a", "c", "c", "d", "c", "b", "a", "d"];
//Aをクリックしたとき
ag.addEventListener("click", () => {
  answer("a");
});
//Bをクリックしたとき
bg.addEventListener("click", () => {
  answer("b");
});
//Cをクリックしたとき
cg.addEventListener("click", () => {
  answer("c");
});
//Dをクリックしたとき
dg.addEventListener("click", () => {
  answer("d");
});
let answer = (str) => {
  if (flag) {
    if (seikai[num] === str) {
      console.log("正解");
      sei.src = "img/maru.png";
      sco++;
      res.textContent = "スコア :" + sco + "| 時間 : " + cnt + "秒";
    } else {
      sei.src = "img/batsu.png";
    }
    num++;
    if (num < max) {
      setTimeout(() => {
        que.textContent = "問題" + (num + 1) + " " + name[num] + "の致死量";
        sen.textContent =
          "A=" + a[num] + "/B=" + b[num] + "/C=" + c[num] + "/D=" + d[num];
        sei.src = "img/syoki.png";
        pic.src = "img/pic" + num + ".png";
      }, 500);
    } else {
      clearInterval(time);
      if (sco == max) {
        que.textContent =
          "全問正解！すごいね！(答えは成人男性が1日に摂取した場合となっています)";
        pic.src = "img/clear.png";
      } else if (6 < sco) {
        que.textContent =
          "半分以上正解！やるな！(答えは成人男性が1日に摂取した場合となっています)";
      } else {
        que.textContent =
          "残念！次はもっと頑張ろう！(答えは成人男性が1日に摂取した場合となっています)";
      }
    }
  }
};
