export type ProjectCase = {
  title: string;
  subtitle: string;
  type: string;
  period: string;
  images: string[];
  video: string;
  downloadLink: string;
  focus: string[];
  designGoal: string;
  solution: string[];
  validation: string;
  metrics: Array<{ label: string; value: string }>;
};

export type ExperienceItem = {
  company: string;
  role: string;
  period: string;
  content: string[];
};

export const personalInfo = {
  name: "打坐ing",
  realName: "刘先胜",
  role: "游戏战斗策划 | 2027届硕士在读",
  email: "3142568588@qq.com",
  phone: "17642128621",
  location: "北京 / 朝阳",
  resumeUrl: "/北京邮电大学-刘先胜-游戏策划简历.pdf",
  avatarUrl: "/gameicon/Self.webp",
  headline: "在校研究生，目标岗位为游戏战斗策划，具备商业项目上线、MOBA 战斗设计与战斗 AI 设计经验。",
  intro:
    "参与《航海王热血航线》伙伴技能相关工作，负责商业友情技、伙伴技能机制重置与技能配置；同时参与《部落命运》英雄技能、主控战斗 AI 与局内成长模块设计。",
};

export const designProfile = [
  { label: "岗位方向", value: "战斗策划 / 系统原型" },
  { label: "核心经验", value: "商业技能配置 / MOBA 英雄设计 / UE GAS" },
  { label: "关注问题", value: "伙伴技能、战斗循环、AI 决策、局内成长" },
  { label: "验证方式", value: "配置实现、测试反馈、版本验收、Demo 实装" },
];

export const designPillars = [
  {
    title: "战斗系统设计",
    detail: "资源循环、技能释放链路、攻击/防御收益、战斗节奏、战斗反馈、连携机制。",
  },
  {
    title: "技能与角色设计",
    detail: "英雄/伙伴定位、技能组结构、技能联动、机制包装、操作上限、风险收益设计。",
  },
  {
    title: "战斗 AI 与 Boss 设计",
    detail: "普通敌人行为、Boss 阶段技能、优先级决策、反制逻辑、空地双模式战斗。",
  },
  {
    title: "数值配置与协作落地",
    detail: "技能伤害、防御、费用、成长梯度、稀有度梯度拆解，能与程序、美术、动画、特效协作推进内容落地。",
  },
];

export const toolSkills = [
  { name: "Unreal Engine", icon: "/icons/ue.svg", level: "掌握", usage: "UE GAS、UE 蓝图、GameplayTags、战斗原型实现" },
  { name: "Unity", icon: "/icons/unity.svg", level: "熟悉", usage: "Unity 行为树、MOBA 英雄 AI 与主控战斗逻辑" },
  { name: "Figma", icon: "/icons/figma.svg", level: "掌握", usage: "玩法流程图、技能机制文档、UI/交互原型" },
  { name: "C++", icon: "/icons/cpp.svg", level: "基础", usage: "理解引擎逻辑、配置链路与程序协作需求" },
  { name: "Blender", icon: "/icons/blender.svg", level: "熟悉", usage: "灰盒搭建、展示资产整理与 Demo 辅助制作" },
];

export const projects: ProjectCase[] = [
  {
    title: "《虚能》",
    subtitle: "腾讯星跃训练营",
    type: "UE GAS / 类魂战斗",
    period: "2026.03 / 单人 160 小时",
    images: ["/gameicon/LostLand01.webp", "/gameicon/Lostland02.webp", "/gameicon/LostLand03.webp"],
    video:
      "https://www.bilibili.com/video/BV12JcXzVEsr/?spm_id_from=333.1387.homepage.video_card.click&vd_source=838b90a95a61e8bf8e67724156422195",
    downloadLink: "https://pan.baidu.com/s/1_obnVQZSff_l7FXrV26EqQ?pwd=8888",
    focus: ["UE GAS", "资源循环", "三层 AI", "Boss 战斗"],
    designGoal: "单人基于 UE GAS 从零搭建类魂战斗框架，覆盖角色技能、资源循环、敌人行为与 Boss 战斗逻辑。",
    solution: [
      "设计“虚能”资源循环：通过攻击/弹反积攒资源，再消耗资源释放技能与连携，形成主动进攻到扩大收益的正反馈。",
      "设计并实现普通敌人的巡逻、警觉、追击、进攻与撤退等基础战斗行为。",
      "设计人形 Boss 的优先级驱动决策、主动反制、读帧反击与大小技能组合。",
      "设计龙形 Boss 的巡航/悬停、飞行/地面双模式切换与大范围技能压制。",
    ],
    validation: "完成可试玩战斗框架并发布试玩视频，验证资源循环、敌人行为与 Boss 压力层次。",
    metrics: [
      { label: "工时", value: "160h" },
      { label: "AI 层级", value: "3类" },
      { label: "系统", value: "UE GAS" },
    ],
  },
  {
    title: "《梗纪元-卡牌战争》",
    subtitle: "Game Jam",
    type: "卡牌肉鸽 / 数值框架",
    period: "2025.10 / 策划 + 程序",
    images: ["/gameicon/TapTap01.webp", "/gameicon/TapTap02.webp", "/gameicon/TapTap03.webp"],
    video: "https://www.taptap.cn/app/781253?os=pc",
    downloadLink: "https://www.taptap.cn/app/781253?os=pc",
    focus: ["卡牌词条", "宝石强化", "数值框架", "局内构筑"],
    designGoal: "参考《杀戮尖塔》肉鸽卡牌框架，完成核心玩法设计与规则实现，构建围绕词条与强化方向的局内构筑体验。",
    solution: [
      "设计“以卡牌词条为基础的宝石强化系统”，支持玩家围绕词条与强化方向自定义构筑。",
      "拆解《杀戮尖塔》数值框架，参考 1 费攻击/防御收益、稀有度梯度、牌组构筑节奏搭建基础数值。",
      "通过卡牌费用、伤害、防御、强化词条和稀有度组合，构建不同流派的成长空间。",
    ],
    validation: "完成可试玩卡牌肉鸽原型，验证卡牌词条、费用收益和强化方向带来的策略差异。",
    metrics: [
      { label: "职责", value: "策划+程序" },
      { label: "类型", value: "卡牌肉鸽" },
      { label: "核心", value: "词条强化" },
    ],
  },
  {
    title: "《龙舟消消乐》",
    subtitle: "途游游戏 AI 训练营",
    type: "轻竞技 / AI+游戏",
    period: "休闲竞技 Demo",
    images: ["/gameicon/LongZhougame01.webp", "/gameicon/LongZhouGame02.webp", "/gameicon/LongZhougame03.webp"],
    video:
      "https://www.bilibili.com/video/BV1vDcozBEnx/?spm_id_from=333.1387.homepage.video_card.click&vd_source=838b90a95a61e8bf8e67724156422195",
    downloadLink: "https://pan.baidu.com/s/16qPFveF8oubwh2x0-OxIDw?pwd=8888",
    focus: ["轻竞技", "技能释放", "AI训练营", "节奏设计"],
    designGoal: "将消除、士气积累和技能释放串成轻竞技循环，让玩家在短局内做出明确决策。",
    solution: [
      "用消除行为积累士气，将基础操作转化为技能资源。",
      "通过技能释放时机与排名目标建立对抗压力，而不是只做单机消除。",
      "面向轻度用户控制单局理解成本，保留足够的反超空间。",
    ],
    validation: "获得训练营“最佳玩法奖”和“最佳 AI 应用奖”。",
    metrics: [
      { label: "奖项", value: "2项" },
      { label: "循环", value: "消除-技能" },
      { label: "视角", value: "轻竞技" },
    ],
  },
  {
    title: "《灰土大陆》",
    subtitle: "VR 游戏 Demo",
    type: "VR / RPG",
    period: "角色扮演 Demo",
    images: ["/gameicon/VRGame01.webp", "/gameicon/VRGame02.webp", "/gameicon/VRGame03.webp"],
    video:
      "https://www.bilibili.com/video/BV1okwTe5EaY/?spm_id_from=333.337.search-card.all.click&vd_source=838b90a95a61e8bf8e67724156422195",
    downloadLink: "https://pan.baidu.com/s/1kiPzW2apb5Ri43sH2qqdUQ?pwd=8888",
    focus: ["UE5", "VR", "RPG", "交互反馈"],
    designGoal: "验证 VR 场景下武器操作、敌人压迫和空间移动的基础 RPG 战斗体验。",
    solution: [
      "围绕手部操作和空间距离设计武器使用节奏，降低 VR 晕动与操作误差。",
      "用敌人接近、攻击预兆和空间出口组织玩家行动目标。",
      "通过场景动线引导玩家理解战斗与探索关系。",
    ],
    validation: "完成可演示 VR RPG Demo，并提供视频展示与下载试玩。",
    metrics: [
      { label: "平台", value: "VR" },
      { label: "类型", value: "RPG" },
      { label: "引擎", value: "UE5" },
    ],
  },
  {
    title: "《道》",
    subtitle: "2024 CiGA Game Jam",
    type: "Game Jam / 关卡解密",
    period: "48h 原型",
    images: ["/gameicon/Dao01.webp", "/gameicon/Dao02.webp", "/gameicon/Dao03.webp"],
    video: "https://pan.baidu.com/s/1TSLcqD0CHcrrNxmB__IETQ?pwd=8888",
    downloadLink: "https://pan.baidu.com/s/1TSLcqD0CHcrrNxmB__IETQ?pwd=8888",
    focus: ["关卡设计", "五行机制", "推箱子", "Game Jam"],
    designGoal: "在 48 小时内将五行概念转化为可操作的解谜规则，完成可玩的关卡原型。",
    solution: [
      "将传统文化元素拆成规则关系，而不是停留在美术包装。",
      "用推箱子作为低学习成本交互载体，快速建立关卡目标。",
      "通过关卡顺序逐步引入机制组合，控制 Game Jam 原型规模。",
    ],
    validation: "获得 CiGA Game Jam 优秀作品。",
    metrics: [
      { label: "周期", value: "48h" },
      { label: "奖项", value: "优秀作品" },
      { label: "机制", value: "五行" },
    ],
  },
];

export const gameExperience = {
  totalHours: "3000+",
  summary: "ARPG、开放世界、MOBA、Roguelike、解谜等品类均有涉猎，对动作游戏和战斗体验接触较多。",
  categories: [
    { name: "类魂 / 动作", hours: "500h+", games: "艾尔登法环、黑暗之魂、黑神话:悟空、无限机兵" },
    { name: "竞技对抗", hours: "700h+", games: "王者荣耀、三角洲行动、英雄联盟手游、皇室战争" },
    { name: "肉鸽策略", hours: "300h+", games: "杀戮尖塔、哈迪斯、土豆兄弟、吸血鬼幸存者" },
    { name: "开放世界", hours: "600h+", games: "天国拯救、原神、森林、三角洲行动" },
  ],
};

export const experiences: ExperienceItem[] = [
  {
    company: "ZERO 36｜《航海王热血航线》",
    role: "伙伴策划实习生",
    period: "2026.05 - 至今",
    content: [
      "负责商业友情技“世界会议薇薇&莉贝卡”从设计、配置到最终上线的全流程跟进工作，推进技能机制、配置实现、测试反馈与版本验收。",
      "负责伙伴“布鲁诺”的角色技能机制重置与配置到上线全流程工作，围绕伙伴定位、技能表现、操作节奏与实战体验完成机制调整和配置落地。",
      "负责伙伴“炽天使 鹰”的技能配置工作，配合版本需求完成技能参数、效果触发与实装表现相关配置。",
    ],
  },
  {
    company: "北京创优天地网络科技有限公司｜《部落命运》",
    role: "战斗策划",
    period: "2025.02 - 2025.08",
    content: [
      "参与/负责 10+ 5V5 MOBA 英雄角色设计，覆盖战士、坦克、射手、刺客、辅助等战斗定位，围绕英雄定位拆解技能职责、战斗距离、操作收益与团队价值。",
      "设计代表性英雄“回旋”相关技能机制，以“变身 + 命中回收”为核心构建飞镖循环，通过多技能联动形成连招路径、资源回收和持续输出节奏。",
      "参与搭建主控战斗相关 AI 行为框架，围绕移动、技能释放、目标选择、状态切换等模块拆分行为逻辑。",
      "参与设计行为树 + 效用评估驱动的 AI 大局观决策系统，使 AI 能够执行追击残血、保护高价值单位、合围、开龙判定、救援等团队协作行为。",
      "负责“天赋树”类战斗模块设计，拆解道具流派、毒雾扩散、团队增益、等级分支等机制，设计 4/8/12/16 级多条可选成长分支。",
    ],
  },
  {
    company: "字节跳动｜江南工作室",
    role: "UGC 玩法策划",
    period: "2025.09 - 2025.12",
    content: [
      "基于项目 UGC 编辑器，负责主线关卡与玩法内容设计，参与主题关卡从方案设计到地图落地的完整流程。",
      "主导“时间就是金币”等主题关卡设计，围绕关卡目标、玩家路径、资源压力与玩法节奏组织体验。",
      "将关卡体验拆分为规则目标、空间结构、节奏节点与反馈机制，为后续战斗关卡、挑战关卡与机制型玩法设计提供可迁移经验。",
    ],
  },
];

export const education = [
  {
    school: "北京邮电大学",
    degree: "硕士 | 设计学 - AIGC 游戏设计",
    period: "2024 - 2027",
  },
  {
    school: "北京邮电大学",
    degree: "本科 | 工业设计（智能交互设计）",
    period: "2020 - 2024",
    details: "曾担任本科生党支部宣传委员、校学生会主席、院志愿者协会部门负责人。",
  },
];

export const awards = [
  { name: "Red Dot: Best of the Best", date: "设计奖项" },
  { name: "Good Design Award", date: "设计奖项" },
  { name: "iF Design Award", date: "设计奖项" },
  { name: "国家一等奖学金", date: "奖学金" },
  { name: "校级优秀班级干部", date: "校园经历" },
  { name: "冬奥会优秀志愿者", date: "志愿服务" },
];

export const videoCollections = [
  {
    title: "卡牌肉鸽教程",
    desc: "基于 UE GameplayTags 从零制作类杀戮尖塔卡牌肉鸽游戏。",
    stats: "60 视频 / 3.8w 播放",
    link: "https://www.bilibili.com/video/BV1Fb2xBpExY/?spm_id_from=333.1387.collection.video_card.click",
  },
  {
    title: "UE5 GAS 战斗系统实战",
    desc: "从零搭建 Gameplay Ability System 动作游戏战斗框架。",
    stats: "15 视频 / 0.6w 播放",
    link: "https://space.bilibili.com/496731599/lists/7061892?type=season",
  },
  {
    title: "UE 开发小技巧",
    desc: "记录个人学习制作过程中的功能实现方式。",
    stats: "20+ 视频 / 1.2w 播放",
    link: "https://space.bilibili.com/496731599/lists/7061892?type=season",
  },
];
