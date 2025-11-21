import enTranslation from "../en/translation";

const translations: typeof enTranslation = {
  to: "到",
  Monday: "周一",
  Tuesday: "周二",
  Wednesday: "周三",
  Thursday: "周四",
  Friday: "星期五",
  Saturday: "周六",
  Sunday: "星期日",
  buyTicket: {
    text: "购买门票",
    alert: {
      title: "注意",
      message: "您即将跳转至官方售票网站。请确保网址以“zoonegara.my”结尾。",
      confirm: "继续"
    },
  },
  announcements: [
    "这不是动物园的官方网站。请访问官方网站 [https://zoonegara.my|zoonegara.my] 了解更多信息。",
    "熊猫馆目前仍处于关闭状态，熊猫要到 2025 年 11 月才会抵达动物园。"
  ],
  menu: {
    "mobile-home-text": "Zoo Negara",
    "visitor-info": "访客信息",
    "about-us": "关于我们",
    "opening-and-rates": "营业时间和价格",
    "getting-there": "到达那里",
    "zoo-map": "动物园地图",
    "kiosk-and-facilities": "亭子和设施",
  },
  footer: {
    lastAdmission: "最后入场时间为下午 {{time}}",
    operationHours: "营业时间",
    address: "地址",
    partners: "合作伙伴",
    maintainedInfo: "all rights reserved.",
    contactUs: "联系国家动物园",
    careers: "职业发展",
    faq: "F.A.Q",
    sitemap: "网站地图",
  },
};

export default translations;
