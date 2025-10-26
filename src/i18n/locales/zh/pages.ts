import enTranslation from "../en/pages";
import zooFaq from "./faq";
import translation from "./translation";

const translations: typeof enTranslation = {
  lang: "zh",
  translation,
  headers: {
    default: "马来西亚国家动物园：官方网站 | 今天就计划您的访问",
    defaultDescription:
      "探索马来西亚国家动物园，这里是 5,000 多只动物的家园。计划您的访问、购买门票并了解我们的保护工作。您的冒险从这里开始！",
    aboutUs: {
      title: "关于我们的粉丝制作的国家动物园网站",
      description:
        "了解这个非官方马来西亚国家动物园网站背后的热情项目，该网站由粉丝创建，旨在展示潜在的重新设计和改进的用户体验。",
    },
    frequentAskedQuestions: {
      title: "常见问题 | 马来西亚国家动物园",
      description:
        "查找有关马来西亚国家动物园的常见问题解答，包括开放时间、票价、动物领养等。",
    },
    careers: {
      title: "在马来西亚国家动物园的职业 | 加入我们的团队",
      description:
        "探索在马来西亚国家动物园的职业机会。查找职位空缺，了解如何为我们的保护和动物福利使命做出贡献。",
    },
    contactUs: {
      title: "联系我们 | 马来西亚国家动物园",
      description:
        "与马来西亚国家动物园取得联系。查找一般查询、教育、营销和其他部门的联系信息。",
    },
    visitorInfo: {
      title: "游客信息 | 计划您的马来西亚国家动物园之旅",
      description:
        "使用我们全面的游客信息计划您对马来西亚国家动物园的访问，包括开放时间、门票、设施等。",
    },
    zooMap: {
      title: "马来西亚国家动物园地图 | 在动物园中导航",
      description:
        "下载马来西亚国家动物园官方地图，以便在动物园中导航。查找您最喜欢的动物、展览和设施的位置。",
    },
    gettingThere: {
      title: "如何前往马来西亚国家动物园 | 路线和交通",
      description:
        "查找前往马来西亚国家动物园的最佳方式。获取驾车、公共交通和乘车共享服务的路线。",
    },
    kiosksNFacilities: {
      title: "马来西亚国家动物园的食品、商店和设施",
      description:
        "探索马来西亚国家动物园提供的食品、纪念品商店和设施。从餐厅到祈祷室，我们拥有您舒适访问所需的一切。",
    },
    sitemap: {
      title: "网站地图 | 马来西亚国家动物园粉丝网站",
      description:
        "使用我们的网站地图浏览我们粉丝制作的马来西亚国家动物园网站。查找您需要的所有页面和信息。",
    },
  },
  homepage: {
    welcome: "欢迎来到 Zoo Negara Malaysia",
    introduction:
      "马来西亚国家动物园由马来西亚动物学会管理，该学会是一个非政府组织，旨在为马来西亚人民打造首个本地动物园。国家动物园于1963年11月14日正式开放，现已发展成为享誉全球的动物园。动物园内共有476个物种，包括哺乳动物、鸟类、爬行动物、两栖动物和鱼类，共计超过5137只动物。",
    introductionRemark: "摘自国家动物园网站",
    help: {
      title: "我们需要您的帮助！",
      description: "这是一个由 Walcron 创建的非关联替代马来西亚国家动物园网站。我们需要您的帮助来改进此网站，方法是贡献动物园的图像。如果您最近访问过国家动物园，请考虑与我们分享您的照片，以增强我们网站访问者的视觉体验。",
      contributeBtn: "贡献图像",
    }
  },
  aboutUs: {
    title: "关于我们",
    aboutWalcron: {
      title: "关于 Walcron",
      description:
        "我们是一对对构建可持续发展网站充满热情和兴趣的夫妇。此外，我们也非常喜欢去动物园！如果普通话翻译不正确，我们很抱歉，我们目前正在使用“Google”进行翻译。",
      desription2:
        "我们之所以创建一个与马来西亚国家动物园无关的替代网站，是因为原网站缺乏基本的网站支持。我们曾尝试联系该网站的动物园管理员，但我们的提议被礼貌地拒绝了。该动物园网站改进了：",
      descriptionSupport: [
        "语言支持马来语和普通话。",
        "支持残障用户的 ARIA。",
        "主页上没有烦人的弹出窗口。",
        "添加缺失的站点地图。",
      ],
    },
    aboutZoo: {
      title: "关于 Zoo Negara Malaysia",
      description:
        "马来西亚国家动物园由马来西亚动物学会管理，该学会是一个非政府组织，旨在为马来西亚人创建第一个本地动物园。",
      descriptionWiki: "wikipedia",
    },
    vision: {
      title: "有远见的人",
      description:
        "我们希望国家动物园能够吸收并更新该网站，以满足其需求。该网站已构建了基本的 DevOps 基础设施，因此可以自行维护。",
      descriptionSupport: [
        "站点自行构建、测试和部署。",
        "需要最少的基本 JSON/HTML 来维护它。",
        "一切都与 Github 管道集成。",
        "开源 - 任何人都可以查看和贡献。",
        "以流程为导向 - 接受变更之前进行批准/审查。",
      ],
    },
  },
  visitorInfo: {
    title: "访客信息",
    additionalInformationText: "附加信息",
    additionalInformationNotes: [
      "门票可以在动物园购买。",
      "OKU - 10% 折扣价（请出示有效的 OKU 卡）。*可能仅适用于马来西亚公民。",
      "可以安排 VIP 预订，请通过联系动物园链接与动物园管理员联系。",
      "所有价格均以马来西亚林吉特（MYR）表示。",
    ],
    openingHours: {
      title: "营业时间",
      description: "动物园每日开放时间:",
    },
    admissionTicket: {
      title: "门票",
      description: "请验证您的入场券。",
      additionalInformation: {
        important:
          "请携带您的身份护照/身份证到售票处进行验证。",
        free: "免费入场",
        freeOne: "36个月以下儿童免费入场。",
        freeTwo: "适用于 OKU/残障人士。请出示有效的 OKU 卡。*可能仅适用于马来西亚公民。",
      },
    },
    rental: {
      title: "租赁",
      facilities: [
        {
          title: "轮椅",
          description:
            "服务台 B 提供先到先得的轮椅服务。需支付租赁费和可退还的押金。",
          image: "/images/visitor-info/wheelchair.jpg",
          imageAlt: "Wheelchair",
        },
        {
          title: "婴儿推车",
          description:
            "我们新的婴儿车站现已提供婴儿车服务。该婴儿车由 Mother Care 赞助。婴儿车服务在 B 号服务台提供，先到先得。",
          image: "/images/visitor-info/stroller.jpg",
          imageAlt: "Baby Strollers",
        },
        {
          title: "储物柜",
          description:
            "售票处设有储物柜，可供存放个人物品。需支付租赁费。",
          image: "/images/visitor-info/locker.jpg",
          imageAlt: "Rental Lockers",
        },
      ],
    },
    tramRide: {
      title: "乘坐电车",
      priceTable: {
        description: "电车价格（截至 2026 年 6 月 5 日）",
        h1: "类别",
        h2: "持有 MyKad",
        h3: "没有 MyKad",
        adult: "成人",
        children: "儿童（3-12岁）",
      },
    },
    zooMap: {
      title: "Zoo Negara Malaysia 地图",
      downloadMapBtn: "下载地图",
      description: "下载地图并规划您在马来西亚国家动物园的行程。",
      info: "熊猫展览目前已关闭。",
    },
  },
  frequentAskedQuestions: {
    title: "常见问题",
    zooFaq,
  },
  careers: {
    title: "Zoo Negara - 职业",
    description:
      "请参阅国家动物园官方网站查看职位空缺：",
    officialCareerLinkText: "Official Zoo Negara career page",
    OR: "或者",
    emailToZoo: "电邮至 Zoo Negara Malaysia's HR",
  },
  contactUs: {
    title: "接触 Zoo Negara",
    description:
      "我们从国家动物园官方网站抓取了这些信息。联系方式有效期至2026年7月5日。",
    enquiry1: "如有任何疑问，请拨打总机",
    enquiry2: "询问以下部门",
    translate: {
      Administration: "行政",
      Administration_description:
        "实习计划和业务相关事宜。",
      PublicRelationsMarketing: "公共关系与营销",
      PublicRelationsMarketing_description:
        "动物收养、新闻与媒体关系、赞助和企业社会责任 (Corporate social responsibilities / CSR).",
      CustomerService: "客户服务",
      CustomerService_description:
        "公司活动、家庭日、生日、场地租赁、访客相关事宜和其他功能。",
      Education: "教育",
      Education_description:
        "旅游、教育套餐、志愿服务、研究计划和学生相关事宜。",
      ReceptionCounter: "接待处",
      ReceptionCounter_description:
        "开放时间、费率和学校优惠。",
    },
  },
  gettingThere: {
    title: "到达那里",
    address: "地址",
    car: {
      title: "驾驶",
      description: "乘坐汽车、摩托车、货车或巴士",
      instructions: [
        "动物园入口旁边有一个大型停车场。",
      ],
    },
    train: {
      title: "火车",
      description: "经由轻轨系统（Light Rail Transit System / LRT）",
      instructions: [
        "在 Kelana Jaya 线 Wangsa Maju 站下车。",
        "乘坐出租车前往国家动物园。",
        "或从吉隆坡 Wangsamaju 的 Putra LRT 站搭乘 253 路 Rapid KL 巴士。",
      ],
    },
    bus: {
      title: "公共巴士",
      description: "乘坐公共巴士",
      instructions: [
        "从格拉那再也线旺沙玛珠站 (Wangsa Maju Station) 乘坐 53 路 Rapid KL 巴士。",
        "从吉隆坡 Lebuh Ampang 出发的 Rapid KL 220 号。",
      ],
    },
    viewBtnText: "在谷歌地图中查看",
  },
  kiosksNFacilities: {
    title: "亭子和设施",
    food: {
      title: "食物",
      description:
        "除了可以做很多事情之外，您还可以在动物园享用美食。",
      restaurants: [
        {
          title: "The Wild Restaurant",
          description:
            "位于国家动物园中心的 Wild 餐厅绝对是您家庭聚餐的理想之选。Wild 餐厅提供各种美味快餐和令人垂涎的小吃，价格实惠，是您与亲朋好友欢聚的理想之选。",
        },
        {
          title: "Mane Delicious",
          description:
            "对于那些对清凉美味的甜点感兴趣的人，可以前往这家咖啡馆品尝一些著名的“Ais Kacang”或“Cendol”！",
        },
        {
          title: "Panda Cafe",
          description:
            "想吃马来西亚美食？那就来熊猫咖啡馆 (Panda Cafe) 吧！这里有美味的椰浆饭、咖喱面、炒面粉等等，保证让你大饱口福！- 暂时关闭",
        },
      ],
    },
    souvenir: {
      title: "纪念品",
      shops: [
        {
          title: "Kancil Souvenir Shop & Kyoto Enterprise",
          description:
            "想找一些真正独特的礼物吗？Kancil 纪念品商店和京都企业为您提供精美礼品！",
        },
        {
          title: "Zoovenir Shop",
          description:
            "位于大熊猫保护中心内，Savannah 正前方。想寻找独家大熊猫商品？那就来 Zoovenir 商店吧。- 暂时关闭",
        },
        {
          title: "Bee 博物馆",
          description:
            "快来参观我们的巨型蜜蜂吧！马来西亚最大的蜂蜜产地现已落户国家动物园。",
        },
      ],
    },
    facilities: {
      title: "设施",
      facilities: [
        {
          title: "祈祷室/祈祷室",
          description:
            "动物园正门附近设有一间空间宽敞的空调祈祷室。",
          image: "/images/visitor-info/surau.jpg",
          imageAlt: "Mosque",
        },
        {
          title: "免费公共无线网络",
          description:
            "您喜欢一直在线吗？我们主入口、露天剧场和大熊猫保护中心均提供免费无线网络，让您时刻保持连接。",
          image: "/images/visitor-info/freewifi.jpg",
          imageAlt: "Wifi",
        },
      ],
    },
  },
};

export default translations;
