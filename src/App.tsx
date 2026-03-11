/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Gamepad2, 
  Sword, 
  ScrollText, 
  Target, 
  Cpu, 
  Code2, 
  User,
  ExternalLink, 
  Github, 
  Linkedin, 
  Mail, 
  ChevronRight,
  ChevronLeft,
  Menu,
  X,
  Layers,
  Zap,
  Trophy,
  Gamepad,
  Phone,
  Award,
  BookOpen,
  Briefcase,
  PlayCircle,
  Download,
  Box,
  Activity,
  Clock,
  Eye
} from 'lucide-react';

// import lostLandImg from './assets/LostLand.png';
// import dsc2414Img from './assets/DSC_2414.jpg';
const lostLandImg = "/assets/lostland.png";
// const dsc2414Img = "/demogame/DSC.png";

/// --- Data from Resume (可修改：个人基本信息) ---
const PERSONAL_INFO = {
  name: "打坐ing", // 可修改：姓名
  role: "游戏策划 (战斗) | 2027届硕士在读", // 可修改：职位
  email: "3142568588@qq.com", // 可修改：邮箱
  phone: "17642128621", // 可修改：电话
  location: "北京 / 朝阳", // 可修改：坐标
  resumeUrl: "/resume.pdf", // 可修改：简历 PDF 链接 (用于预览和下载)
  avatarUrl: "/gameicon/Self.png", // 可修改：个人头像/首屏大图链接
  globalBgUrl: "https://picsum.photos/seed/game-bg/1920/1080?blur=4", // 可修改：全局背景图片链接
  intro: "目前正在北邮攻读设计学硕士，意向岗位为游戏战斗策划。希望能够通过个人的设计与实现构建出一场又一场令玩家难忘的BOSS战。", // 可修改：个人简介
  summary: [ // 可修改：核心优势列表
    "掌握UE引擎开发流程，有过完整的从设计游戏框架到开发实现再到最终打包上线的实践经历",
    "对UE中GamePlay，GameplayTags，GAS框架，动画状态机，AI行为树，状态树等内容均有学习与实践经历",
    "曾于游戏公司担任派对游戏UGC玩法策划，MOBA游戏战斗策划岗位。"
  ]
};

// 可修改：软件技能列表
const SOFTWARE_SKILLS = [
  { name: "Unreal Engine", icon: "/icons/ue.svg", level: "掌握" }, // 准备替换为 public/icons/ue.svg
  { name: "Unity", icon: "/icons/unity.svg", level: "熟悉" },
  { name: "Figma", icon: "/icons/figma.svg", level: "掌握" },
  { name: "C++", icon: "/icons/cpp.svg", level: "基础" },
  { name: "Blender", icon: "/icons/blender.svg", level: "熟悉" }
];

// 可修改：游戏经历总结
const GAME_EXPERIENCE = {
  totalHours: "3000+", // 可修改：总时长
  summary: "ARPG，开放世界，MOBA，Rouglike,解密类等游戏品类均有涉猎，对动作游戏类内容接触较多，", // 可修改：总结文案
  categories: [ // 可修改：游戏品类细分
    { name: "类魂系列", hours: "500h+", games: "艾尔登法环,艾尔登法环-黑夜君临，黑暗之魂,无限机兵， 黑神话:悟空" },
    { name: "竞技对抗", hours: "700h+", games: "王者荣耀, 三角洲行动，英雄联盟手游, 皇室战争" },
    { name: "肉鸽策略", hours: "300h+", games: "杀戮尖塔, 哈迪斯,土豆兄弟，吸血鬼幸存者" },
    { name: "开放世界", hours: "600h+", games: "天国拯救, 原神, 森林, 三角洲" }
  ]
};

// 可修改：职业历程/实习经历
const EXPERIENCE = [
  {
    company: "字节跳动 - 江南工作室", // 可修改：公司名称
    role: "UGC 玩法策划", // 可修改：职位
    period: "2025年9月 - 2026年12月", // 可修改：时间段
    icon: <Zap className="w-5 h-5" />,
    content: [ // 可修改：工作内容
      "负责游戏主线关卡、核心玩法及派对地图的设计与搭建工作。",
      "参与指定主题关卡的内容设计与落地，完成主线剧情内玩法内容的整体设计与优化。",
      "产出UGC玩法地图设计*2，完成主线剧情关卡动线内容设计与配置。"
    ]
  },
  {
    company: "北京创优天地网络科技有限公司", // 可修改：公司名称
    role: "战斗策划", // 可修改：职位
    period: "2025年3月 - 2026年8月", // 可修改：时间段
    icon: <Sword className="w-5 h-5" />,
    content: [ // 可修改：工作内容
      "负责Moba游戏英雄角色设计及基于Unity行为树的AI机器人行为设计。",
      "设计10+不同定位英雄的AI行为树并最终应用到游戏内。",
      "参与讨论并设计游戏内AI大局观算法的设计与优化工作。"
    ]
  }
];

// 可修改：作品集 Demo
const DEMOS = [
  {
    title: "《陷落之地》--腾讯星跃实战营", // 可修改：项目标题
    tag: "战斗框架 Demo", // 可修改：标签
    category: "UE GAS / 类魂战斗", // 可修改：分类
    images: [
            "/gameicon/LostLand01.png",
            "/gameicon/LostLand.png",
            "/gameicon/LostLand.png"
     ], // 可修改：图片链接列表
    video: "https://www.bilibili.com/video/BV12JcXzVEsr/?spm_id_from=333.1387.homepage.video_card.click&vd_source=838b90a95a61e8bf8e67724156422195", // 可修改：B站视频链接 (例如: "https://www.bilibili.com/video/BV...")
    downloadLink: "https://pan.baidu.com/s/1_obnVQZSff_l7FXrV26EqQ?pwd=8888", // 可修改：百度网盘下载链接 (例如: "https://pan.baidu.com/s/...")
    description: "基于UE GAS框架，设计并开发一套基于“虚能”为循环资源的类魂战斗框架。包含普通小怪、精英Boss及大体型龙形Boss的AI设计与实现。", // 可修改：描述
    //awards: ["类魂", "GAS", "BOSS战"], // 可修改：奖项
    tech: ["UE5", "GAS", "行为树"] // 可修改：技术栈
  },
  {
    title: "《梗纪元-卡牌战争》--TapTap聚光灯比赛",
    tag: "策略卡牌 全流程",
    category: "肉鸽 / 词条自定义",
    images: [
      "/gameicon/taptap01.png", 
      "/gameicon/taptap02.png", 
      "/gameicon/taptap03.png"
    ],
    video: "https://www.taptap.cn/app/781253?os=pc", // 可修改：B站视频链接
    downloadLink: "https://www.taptap.cn/app/781253?os=pc", // 可修改：百度网盘下载链接
    description: "基于UE GamePlayTags实现的词条自定义配置的肉鸽卡牌游戏，玩家可自定义局内卡牌词条内容，通过组合与强化获得更强卡组。已上架TapTap。",
    awards: ["TapTap 开放试玩"],
    tech: ["UE5", "UI 设计", "系统设计"]
  },
  {
    title: "《龙舟消消乐》——途游游戏AI训练营",
    tag: "轻竞技 Demo",
    category: "AI+游戏训练营",
    images: [
      "/gameicon/longzhougame01.png",
      "/gameicon/longzhougame02.png",
      "/gameicon/longzhougame03.png",
    ],
    video: "#", // 可修改：B站视频链接
    downloadLink: "https://pan.baidu.com/s/16qPFveF8oubwh2x0-OxIDw?pwd=8888", // 可修改：百度网盘下载链接
    description: "面向用户群体设计的轻度竞技消除游戏。通过消除积攒士气并合理释放技能，争取竞赛第一名。",
    awards: ["最佳玩法奖", "最佳AI应用奖"],
    tech: ["AI 训练", "休闲游戏"]
  },
  {
    title: "《灰土大陆》—VR游戏",
    tag: "VR，RPG",
    category: "VR / RPG",
    images: [
      "/gameicon/vrgame01.png",
      "/gameicon/vrgame02.png",
      "/gameicon/vrgame03.png"
    ],
    video: "https://www.bilibili.com/video/BV1okwTe5EaY/?spm_id_from=333.337.search-card.all.click&vd_source=838b90a95a61e8bf8e67724156422195", // 可修改：B站视频链接
    downloadLink: "https://pan.baidu.com/s/1kiPzW2apb5Ri43sH2qqdUQ?pwd=8888", // 可修改：百度网盘下载链接
    description: "基于UE开发的一款角色扮演VR游戏Demo,游戏内玩家需要合理使用手中武器，战胜强敌，寻得出路",
    tech: ["UE5", "VR", "RPG"]
  },
  {
    title: "《道》——2024CiGA Game Jam",
    tag: "48hGameJam，关卡解密",
    category: "Game Jam / 解密",
    images: [
      "/gameicon/daogame01.png",
      "/gameicon/daogame02.png",
      "/gameicon/daogame03.png"
    ],
    video: "#", // 可修改：B站视频链接
    downloadLink: "https://pan.baidu.com/s/1TSLcqD0CHcrrNxmB__IETQ?pwd=8888 ", // 可修改：百度网盘下载链接
    description: "将传统文化中五行要素与推箱子要素进行结合设计的一款关卡解密类游戏",
    awards: ["优秀作品"],
    tech: ["UE5", "关卡设计", "解密"]
  }
];

// 可修改：作品集图片自动轮播间隔（毫秒）
const CAROUSEL_AUTO_PLAY_INTERVAL = 3000;

// 可修改：Demo 标题字体大小 (Tailwind 类名)
const DEMO_TITLE_FONT_SIZE = "text-2xl md:text-3xl"; 

// 可修改：教育背景
const EDUCATION = [
  {
    school: "北京邮电大学", // 可修改：学校名称
    degree: "硕士 | 设计学-AIGC游戏设计", // 可修改：学位/专业
    period: "2024 - 2027", // 可修改：时间段
  },
  {
    school: "北京邮电大学",
    degree: "本科 | 工业设计 (智能交互设计)",
    period: "2020 - 2024",
    details: "曾担任本科生党支部宣传委员，校学生会主席。院志愿者协会部门负责人。"
  }
];

// 可修改：个人获奖经历
const PERSONAL_AWARDS = [
  { name: "iF DESIGN AWARD 2024 WINNER", date: "2024.2" },
  { name: "Good Design Award 2023", date: "2023" },
  { name: "2022年北京冬奥会、冬残奥会志愿保障服务“优秀志愿者标兵”", date: "2022年4月" },
  { name: "第十六届全国大学生先进成图技术与产品信息建模创新大赛一等奖", date: "2023.8" },
  { name: "北京市大学生工程设计表达竞赛一等奖", date: "2023.4" },
  { name: "北京市大学生交通科技竞赛二等奖", date: "2022.11" },
  { name: "国家励志奖学金", date: "2020-2024" }
];

// --- Components ---

const PdfModal = ({ isOpen, onClose, url }: { isOpen: boolean, onClose: () => void, url: string }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="relative w-full max-w-5xl h-[90vh] bg-zinc-900 rounded-[40px] overflow-hidden border border-white/10"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="absolute top-6 right-6 z-10">
              <button 
                onClick={onClose}
                className="p-3 bg-black/50 hover:bg-emerald-500 text-white rounded-full transition-all"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <object 
              data={url} 
              type="application/pdf"
              className="w-full h-full border-none"
            >
              <div className="flex flex-col items-center justify-center h-full text-zinc-400 gap-4">
                <p>您的浏览器不支持直接预览 PDF。</p>
                <a 
                  href={url} 
                  download 
                  className="px-6 py-3 bg-emerald-600 text-white rounded-full hover:bg-emerald-500 transition-colors"
                >
                  点击下载简历
                </a>
              </div>
            </object>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const Navbar = ({ onPreview }: { onPreview: () => void }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'bg-zinc-950/80 backdrop-blur-xl border-b border-white/5 py-4' : 'bg-transparent py-8'}`}>
      <div className="max-w-7xl mx-auto px-8 flex justify-between items-center">
        <a href="#" className="text-xl font-display font-black tracking-tighter text-white group">
          XIAN<span className="text-emerald-500 group-hover:text-cyan-400 transition-colors">SHENG</span>
        </a>
        <div className="hidden md:flex items-center gap-6">
          {[
            { name: '关于', id: 'profile' },
            { name: '作品', id: 'demos' },
            { name: '经历', id: 'experience' },
            { name: '联系', id: 'contact' }
          ].map((item) => (
            <a key={item.id} href={`#${item.id}`} className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-400 hover:text-white transition-colors">
              {item.name}
            </a>
          ))}
          <div className="flex items-center gap-3 ml-4">
            <button 
              onClick={onPreview}
              className="px-5 py-2 bg-zinc-900 border border-white/10 text-white text-[10px] font-black uppercase tracking-widest rounded-full hover:border-emerald-500 transition-all flex items-center gap-2"
            >
              <Eye className="w-3 h-3" />
              在线预览
            </button>
            <a 
              href={PERSONAL_INFO.resumeUrl}
              download
              className="px-5 py-2 bg-white text-black text-[10px] font-black uppercase tracking-widest rounded-full hover:bg-emerald-500 hover:text-white transition-all flex items-center gap-2"
            >
              <Download className="w-3 h-3" />
              下载简历
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

const Hero = () => {
  const [avatarError, setAvatarError] = useState(false);

  return (
    <section className="relative min-h-screen flex items-center pt-28 pb-20 overflow-hidden">
      {/* Background Elements - Subtle Grid & Atmospheric Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:60px_60px]" />
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_40%,#10b98105,transparent_60%)]" />
      </div>

      <div className="max-w-7xl mx-auto px-8 w-full grid lg:grid-cols-[1.2fr_0.8fr] gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex items-center gap-4 mb-10">
            <div className="w-16 h-16 rounded-2xl overflow-hidden border-2 border-emerald-500/30 p-1 bg-zinc-900 lg:hidden shadow-lg shadow-emerald-500/20">
              <img 
                src={avatarError ? "https://picsum.photos/seed/avatar/200/200" : PERSONAL_INFO.avatarUrl} 
                alt={PERSONAL_INFO.name} 
                className="w-full h-full object-cover rounded-xl"
                onError={() => setAvatarError(true)}
              />
            </div>
            <div>
              <h2 className="text-2xl font-display font-black text-white tracking-tight">{PERSONAL_INFO.name}</h2>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                <p className="text-emerald-400 font-bold text-[10px] tracking-[0.3em] uppercase">{PERSONAL_INFO.role}</p>
              </div>
            </div>
          </div>

          <h1 className="text-6xl md:text-8xl font-display font-black text-white leading-tight mb-10 tracking-tighter">
            你好，<br />
            我是 <span className="text-gradient">打坐ing.</span>
          </h1>

          <div className="space-y-8 mb-12">
            <p className="text-xl text-zinc-300 leading-relaxed max-w-2xl font-medium">
              {PERSONAL_INFO.intro}
            </p>
            
            <p className="text-base text-zinc-500 max-w-2xl leading-relaxed">
              我在这里记录我的游戏设计之路。目前专注于 <span className="text-white font-bold">UE5 GAS</span> 架构的学习与实践，以及对 <span className="text-white font-bold">Boss AI</span> 与 <span className="text-white font-bold">动作反馈</span> 的初步探索。
            </p>

            {/* Education Quick Info */}
            <div className="grid sm:grid-cols-2 gap-6 pt-8 border-t border-white/10">
              {EDUCATION.map((edu, idx) => (
                <div key={idx} className="flex items-start gap-4 group">
                  <div className="mt-1 p-2.5 bg-zinc-900/50 rounded-xl border border-white/10 group-hover:border-emerald-500/50 transition-all duration-500">
                    <BookOpen className="w-4 h-4 text-emerald-500" />
                  </div>
                  <div>
                    <p className="text-sm font-black text-white tracking-tight">{edu.school}</p>
                    <p className="text-[11px] text-zinc-400 font-bold mt-0.5">{edu.degree}</p>
                    <p className="text-[10px] text-zinc-600 font-mono mt-1">{edu.period}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap gap-6 items-center">
            <a href="#demos" className="px-12 py-6 bg-emerald-600 text-white font-black uppercase tracking-[0.2em] text-xs rounded-2xl hover:bg-emerald-500 transition-all shadow-2xl shadow-emerald-900/40 flex items-center gap-4 group">
              浏览作品
              <PlayCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
            </a>
            <div className="flex items-center gap-4">
              <a href={`mailto:${PERSONAL_INFO.email}`} className="p-5 bg-zinc-900/50 backdrop-blur-md border border-white/10 rounded-2xl text-zinc-400 hover:text-white hover:border-emerald-500/50 transition-all" title="Email">
                <Mail className="w-6 h-6" />
              </a>
              <a href={`tel:${PERSONAL_INFO.phone}`} className="p-5 bg-zinc-900/50 backdrop-blur-md border border-white/10 rounded-2xl text-zinc-400 hover:text-white hover:border-emerald-500/50 transition-all" title="Phone">
                <Phone className="w-6 h-6" />
              </a>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="relative"
          initial={{ opacity: 0, scale: 0.9, x: 40 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="relative z-10 aspect-square rounded-[40px] overflow-hidden border border-white/5 p-1 bg-zinc-900/20 backdrop-blur-3xl shadow-2xl shadow-black/50 group">
            <img 
              src={avatarError ? "/gameicon/Self.png" : PERSONAL_INFO.avatarUrl} 
              alt={PERSONAL_INFO.name} 
              className="w-full h-full object-cover rounded-[36px] transition-all duration-1000 scale-105 group-hover:scale-100"
              referrerPolicy="no-referrer"
              onError={() => setAvatarError(true)}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          </div>
          
          {/* Floating Stats Card */}
          <motion.div 
            className="absolute -bottom-6 -left-6 glass-card p-6 rounded-[24px] z-20 border border-white/5 shadow-2xl shadow-black/50"
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-emerald-500/10 border border-emerald-500/20 rounded-xl flex items-center justify-center text-emerald-500 shadow-lg shadow-emerald-500/10">
                <Sword className="w-6 h-6" />
              </div>
              <div>
                <p className="text-[10px] font-black uppercase tracking-widest text-zinc-500">Focus</p>
                <p className="text-base font-black text-white tracking-tight">Game Design</p>
              </div>
            </div>
          </motion.div>

          {/* Background Decorative Circles */}
          <div className="absolute -top-12 -right-12 w-48 h-48 border border-emerald-500/10 rounded-full -z-10 animate-pulse" />
          <div className="absolute -bottom-24 -right-24 w-72 h-72 border border-white/5 rounded-full -z-10" />
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent" />
      </motion.div>
    </section>
  );
};

const ImageCarousel = ({ images, title, isPortrait = false }: { images: string[], title: string, isPortrait?: boolean }) => {
  const [index, setIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [errorImages, setErrorImages] = useState<Record<number, boolean>>({});

  const handleImageError = (idx: number) => {
    setErrorImages(prev => ({ ...prev, [idx]: true }));
  };

  const getImageUrl = (idx: number) => {
    if (errorImages[idx]) return "/demogame/placeholder.svg";
    return images[idx];
  };

  useEffect(() => {
    if (images.length <= 1 || isHovered) return;

    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, CAROUSEL_AUTO_PLAY_INTERVAL);

    return () => clearInterval(timer);
  }, [images.length, isHovered]);

  const containerAspect = isPortrait ? "aspect-[9/16] max-w-sm mx-auto" : "aspect-video";

  if (images.length <= 1) {
    return (
      <div className={`relative ${containerAspect} rounded-[40px] overflow-hidden border border-white/10`}>
        <img 
          src={getImageUrl(0)} 
          alt={title} 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
          onError={() => handleImageError(0)}
        />
      </div>
    );
  }

  return (
    <div 
      className={`relative ${containerAspect} rounded-[40px] overflow-hidden border border-white/10 group/carousel`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <AnimatePresence mode="wait">
        <motion.img
          key={index}
          src={getImageUrl(index)}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0 w-full h-full object-cover"
          referrerPolicy="no-referrer"
          onError={() => handleImageError(index)}
        />
      </AnimatePresence>
      
      <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/40 to-transparent pointer-events-none" />

      {/* Controls */}
      <div className="absolute inset-0 flex items-center justify-between px-4 opacity-0 group-hover/carousel:opacity-100 transition-opacity">
        <button 
          onClick={(e) => { e.stopPropagation(); setIndex((prev) => (prev - 1 + images.length) % images.length); }}
          className="p-2 bg-black/50 backdrop-blur-md rounded-full text-white hover:bg-emerald-500 transition-colors"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button 
          onClick={(e) => { e.stopPropagation(); setIndex((prev) => (prev + 1) % images.length); }}
          className="p-2 bg-black/50 backdrop-blur-md rounded-full text-white hover:bg-emerald-500 transition-colors"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5">
        {images.map((_, i) => (
          <button 
            key={i} 
            onClick={(e) => { e.stopPropagation(); setIndex(i); }}
            className={`h-1 rounded-full transition-all duration-300 ${i === index ? 'w-4 bg-emerald-500' : 'w-1 bg-white/30 hover:bg-white/50'}`}
          />
        ))}
      </div>
    </div>
  );
};

const DemoSection = ({ onPreview }: { onPreview: () => void }) => {
  return (
    <section id="demos" className="py-32 bg-transparent">
      <div className="max-w-7xl mx-auto px-8">
        <div className="mb-20">
          <h2 className="text-5xl md:text-7xl font-display font-black text-white mb-6 tracking-tighter">
            {/* 可修改：作品集区域标题 */}
            个人 <br />
            <span className="text-gradient">Demo.</span>
          </h2>
          <p className="text-zinc-400 max-w-md text-lg">
            {/* 可修改：作品集区域描述 */}
            主要Demo：战斗系统搭建、AI行为树逻辑设计、全流程游戏开发。
          </p>
        </div>

        <div className="space-y-32">
          {DEMOS.map((demo, i) => (
            <motion.div
              key={demo.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className={`group relative grid lg:grid-cols-2 gap-16 items-center`}
            >
              <div className={`relative ${i % 2 === 1 ? 'lg:order-2' : ''}`}>
                <ImageCarousel images={demo.images} title={demo.title} isPortrait={demo.title.includes("龙舟消消乐")} />
                <div className={`absolute -bottom-4 ${demo.title.includes("龙舟消消乐") ? 'left-1/2 -translate-x-1/2 w-max' : 'left-8'} flex flex-wrap gap-3 pointer-events-none`}>
                  {demo.tech.map(t => (
                    <span key={t} className="px-4 py-1.5 bg-black/80 backdrop-blur-xl text-[10px] font-black uppercase tracking-widest text-emerald-400 rounded-full border border-white/10">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className={i % 2 === 1 ? 'lg:order-1 lg:text-right' : ''}>
                <div className={`flex items-center gap-3 mb-6 ${i % 2 === 1 ? 'lg:justify-end' : ''}`}>
                  <span className="w-12 h-[1px] bg-emerald-500" />
                  {/* 可修改：Demo 分类标签 */}
                  <span className="text-[10px] font-black uppercase tracking-[0.4em] text-emerald-500">{demo.category}</span>
                </div>
                <h3 className={`${DEMO_TITLE_FONT_SIZE} font-display font-black text-white mb-6 tracking-tighter group-hover:text-emerald-400 transition-colors`}>
                  {demo.title}
                </h3>
                <p className="text-zinc-400 text-lg leading-relaxed mb-8">
                  {/* 可修改：Demo 描述 */}
                  {demo.description}
                </p>
                <div className={`flex flex-wrap gap-3 mb-10 ${i % 2 === 1 ? 'lg:justify-end' : ''}`}>
                  {demo.awards && demo.awards.map((a, j) => (
                    <div key={j} className="flex items-center gap-2 px-4 py-2 bg-zinc-900 border border-white/5 rounded-xl text-xs font-bold text-zinc-300">
                      <Trophy className="w-4 h-4 text-emerald-500" />
                      {a}
                    </div>
                  ))}
                </div>
                <div className={`flex gap-6 ${i % 2 === 1 ? 'lg:justify-end' : ''}`}>
                  <a href={demo.video} target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-white text-black text-xs font-black uppercase tracking-widest rounded-2xl hover:bg-emerald-500 hover:text-white transition-all flex items-center gap-3">
                    <PlayCircle className="w-5 h-5" />
                    观看演示
                  </a>
                  <a href={demo.downloadLink} target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-zinc-900 border border-white/10 text-white text-xs font-black uppercase tracking-widest rounded-2xl hover:border-white/30 transition-all flex items-center gap-3">
                    <Download className="w-5 h-5" />
                    下载试玩
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const PersonalDossier = () => {
  return (
    <section id="profile" className="py-32 bg-transparent border-t border-white/5">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid lg:grid-cols-[1fr_1.5fr] gap-24">
          {/* Left: Character Stats Style */}
          <div className="space-y-12">
            <div>
              <div className="flex items-center gap-4 mb-10">
              <div className="w-12 h-12 bg-emerald-500/10 rounded-2xl flex items-center justify-center text-emerald-500 border border-emerald-500/20">
                <User className="w-6 h-6" />
              </div>
              <h2 className="text-4xl font-display font-black text-white tracking-tighter uppercase">关于 <span className="text-emerald-500">我.</span></h2>
              </div>
              
              <div className="glass-card p-10 rounded-[40px] space-y-10 border border-white/10 shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 blur-3xl rounded-full -mr-16 -mt-16 group-hover:bg-emerald-500/10 transition-colors duration-700" />
                
                <div className="grid grid-cols-2 gap-8">
                  {[
                    { label: "职业", value: "战斗策划", icon: <Sword className="w-3 h-3" /> },
                    { label: "等级", value: "硕士在读", icon: <Award className="w-3 h-3" /> },
                    { label: "所属", value: "北京邮电大学", icon: <BookOpen className="w-3 h-3" /> },
                    { label: "坐标", value: "北京, 中国", icon: <Phone className="w-3 h-3" /> }
                  ].map((stat, idx) => (
                    <div key={idx} className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="text-emerald-500">{stat.icon}</span>
                        <p className="text-[10px] font-black uppercase tracking-widest text-zinc-500">{stat.label}</p>
                      </div>
                      <p className="text-white font-black tracking-tight">{stat.value}</p>
                    </div>
                  ))}
                </div>
                
                <div className="pt-10 border-t border-white/5">
                  <p className="text-[10px] font-black uppercase tracking-widest text-zinc-500 mb-6 flex items-center gap-3">
                    <ScrollText className="w-3 h-3" />
                    资质证书
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {["CET-4", "普通话二甲"].map((cert) => (
                      <span key={cert} className="px-4 py-2 bg-zinc-950/50 border border-white/10 rounded-xl text-[10px] font-black text-zinc-300 hover:border-emerald-500/50 hover:text-white transition-all cursor-default">
                        {cert}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-10 border-t border-white/5">
                  <p className="text-[10px] font-black uppercase tracking-widest text-zinc-500 mb-6 flex items-center gap-3">
                    <Activity className="w-3 h-3" />
                    社会实践
                  </p>
                  <div className="space-y-6">
                    {[
                      { title: "冬奥会志愿者保障服务", role: "分组负责人 | 优秀志愿者标兵", icon: <Trophy className="w-5 h-5" /> },
                      { title: "校学生会主席团成员", role: "分管宣传部 | 活动策划与主持", icon: <User className="w-5 h-5" /> }
                    ].map((item, idx) => (
                      <div key={idx} className="flex gap-5 group/item">
                        <div className="w-12 h-12 bg-zinc-900/50 border border-white/5 rounded-2xl flex items-center justify-center text-emerald-500 flex-shrink-0 group-hover/item:border-emerald-500/30 transition-all duration-500">
                          {item.icon}
                        </div>
                        <div>
                          <p className="text-sm font-black text-white group-hover/item:text-emerald-400 transition-colors">{item.title}</p>
                          <p className="text-[11px] text-zinc-500 font-bold mt-1">{item.role}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Detailed Advantages & Philosophy */}
          <div className="space-y-20">
            <div>
              <h3 className="text-2xl font-display font-black text-white mb-12 tracking-widest uppercase flex items-center gap-5">
                <span className="w-12 h-[2px] bg-emerald-500" />
                正在学习
              </h3>
              <div className="grid md:grid-cols-2 gap-8">
                {[
                  {
                    title: "技术探索",
                    desc: "在 UE5 GAS 架构的学习中，尝试实现从动作逻辑到 AI 行为树的完整战斗流程。",
                    icon: <Cpu className="w-7 h-7" />
                  },
                  {
                    title: "反馈调优",
                    desc: "对动作反馈、顿帧等细节保持好奇，努力在每一帧中寻找更好的物理反馈与操作手感。",
                    icon: <Sword className="w-7 h-7" />
                  },
                  {
                    title: "AI+游戏设计",
                    desc: "以设计师视角进行AI+游戏设计与开发，正在积极学习与探索",
                    icon: <Layers className="w-7 h-7" />
                  },
                  {
                    title: "玩家视角",
                    desc: "作为一名长期玩家，我习惯于站在玩家的角度去审视玩法机制，寻找那些真正动人的瞬间。",
                    icon: <Gamepad2 className="w-7 h-7" />
                  }
                ].map((item, i) => (
                  <motion.div 
                    key={i}
                    whileHover={{ y: -8, scale: 1.02 }}
                    className="p-10 bg-zinc-900/20 backdrop-blur-sm border border-white/5 rounded-[40px] hover:border-emerald-500/20 hover:bg-zinc-900/40 transition-all duration-500 group"
                  >
                    <div className="text-emerald-500/80 mb-8 group-hover:scale-110 transition-transform duration-500">{item.icon}</div>
                    <h4 className="text-xl font-black text-white mb-4 tracking-tight">{item.title}</h4>
                    <p className="text-sm text-zinc-500 leading-relaxed font-medium">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="p-16 bg-zinc-900/40 backdrop-blur-xl border border-white/5 rounded-[60px] text-white relative overflow-hidden group">
              <div className="relative z-10">
                <h3 className="text-4xl font-display font-black mb-8 tracking-tighter">一点想法.</h3>
                <p className="text-zinc-300 text-2xl leading-tight font-medium italic tracking-tight">
                  “通过自己的设计与实践，为玩家带来一场令人难忘的BOSS战！”
                </p>
              </div>
              <Gamepad2 className="absolute -bottom-16 -right-16 w-80 h-80 text-white/5 rotate-12 group-hover:rotate-0 transition-transform duration-1000" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-32 bg-transparent relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent -z-10" />
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-24">
          <div>
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full mb-8">
              <Briefcase className="w-4 h-4 text-emerald-500" />
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-emerald-400">Practice & Growth</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-display font-black text-white mb-10 tracking-tighter">
              实践 <br />
              <span className="text-gradient">成长.</span>
            </h2>
            <p className="text-zinc-500 text-xl leading-relaxed mb-12 font-medium">
              在校园与实习的交替中，我尝试将所学应用到实际项目中，在实践中慢慢成长。
            </p>
            <div className="space-y-6">
              {EDUCATION.map((edu, i) => (
                <div key={i} className="p-8 bg-zinc-900/40 backdrop-blur-md border border-white/10 rounded-[32px] hover:border-emerald-500/30 transition-all duration-500 group">
                  <div className="flex items-center gap-5 mb-5">
                    <div className="w-12 h-12 bg-emerald-500/10 rounded-2xl flex items-center justify-center text-emerald-500 border border-emerald-500/20 group-hover:scale-110 transition-transform">
                      <BookOpen className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-black text-white text-lg tracking-tight">{edu.school}</h3>
                      <p className="text-[10px] font-black uppercase tracking-widest text-zinc-500">{edu.period}</p>
                    </div>
                  </div>
                  <p className="text-sm text-zinc-300 font-bold mb-3">{edu.degree}</p>
                  <p className="text-xs text-zinc-500 leading-relaxed">{edu.details}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-16 relative">
            <div className="absolute left-[23px] top-8 bottom-8 w-[2px] bg-gradient-to-b from-emerald-500/50 via-emerald-500/20 to-transparent" />
            
            {EXPERIENCE.map((exp, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.2 }}
                className="relative pl-20 group"
              >
                <div className="absolute left-0 top-0 w-12 h-12 bg-zinc-900 border-2 border-emerald-500/30 rounded-2xl flex items-center justify-center text-emerald-500 shadow-[0_0_20px_rgba(16,185,129,0.2)] group-hover:bg-emerald-500 group-hover:text-white transition-all duration-500 z-10">
                  {exp.icon}
                </div>
                <div className="mb-6">
                  <div className="flex items-center gap-4 mb-2">
                    <span className="text-[10px] font-black uppercase tracking-[0.3em] text-emerald-500">{exp.period}</span>
                    <div className="h-[1px] flex-grow bg-white/5" />
                  </div>
                  <h3 className="text-4xl font-display font-black text-white mb-2 tracking-tighter group-hover:text-emerald-400 transition-colors">{exp.company}</h3>
                  <p className="text-emerald-500 font-black uppercase tracking-[0.2em] text-xs">{exp.role}</p>
                </div>
                <ul className="space-y-5">
                  {exp.content.map((item, j) => (
                    <li key={j} className="text-zinc-400 text-base leading-relaxed flex gap-5 group/item">
                      <span className="text-emerald-500 mt-2 w-2 h-2 rounded-full flex-shrink-0 shadow-[0_0_8px_rgba(16,185,129,0.5)] group-hover/item:scale-125 transition-transform" />
                      <span className="group-hover/item:text-zinc-200 transition-colors">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const AwardsSection = () => {
  return (
    <section id="awards" className="py-32 bg-transparent relative overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-8">
        <div className="mb-20">
          <div className="inline-flex items-center gap-3 px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full mb-8">
            <Trophy className="w-4 h-4 text-emerald-500" />
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-emerald-400">Honors & Awards</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-display font-black text-white mb-6 tracking-tighter">
            个人 <br />
            <span className="text-gradient">获奖经历.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {PERSONAL_AWARDS.map((award, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex items-center justify-between p-8 bg-zinc-900/40 backdrop-blur-md border border-white/10 rounded-[24px] hover:border-emerald-500/30 transition-all duration-500 group"
            >
              <div className="flex items-center gap-5">
                <div className="w-10 h-10 bg-emerald-500/10 rounded-xl flex items-center justify-center text-emerald-500 border border-emerald-500/20 group-hover:scale-110 transition-transform flex-shrink-0">
                  <Award className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-white text-base tracking-tight group-hover:text-emerald-400 transition-colors">{award.name}</h3>
              </div>
              <span className="text-xs font-black uppercase tracking-widest text-zinc-500 flex-shrink-0 ml-4">{award.date}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const BilibiliSection = () => {
  const [avatarError, setAvatarError] = useState(false);
  const collections = [
    {
      title: "卡牌肉鸽教程",
      desc: "基于UE引擎Gameplaytags功能从零开始制作一款类杀戮尖塔卡牌肉鸽游戏。搭配属于你的对战卡组吧",
      stats: "60视频 · 3.8w 播放",
      link: "https://www.bilibili.com/video/BV1Fb2xBpExY/?spm_id_from=333.1387.collection.video_card.click"
    },
    {
      title: "UE5 GAS 战斗系统实战",
      desc: "从零开始搭建基于 Gameplay Ability System 的动作游戏战斗框架，包含连招、受击反馈、技能特效等核心机制。",
      stats: "15 视频 · 0.6w 播放",
      link: "https://space.bilibili.com/496731599/lists/7061892?type=season"
    },
    {
      title: "UE开发小技巧",
      desc: "分享个人学习制作过程中的一些功能的实现方式",
      stats: "20+ 视频 · 1.2w 播放",
      link: "https://space.bilibili.com/496731599/lists/7061892?type=season"
    },
   
  ];

  return (
    <section id="bilibili" className="py-32 bg-transparent relative overflow-hidden border-t border-white/5">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,#10b98105,transparent_50%)]" />
      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <div className="mb-20">
          <div className="inline-flex items-center gap-3 px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full mb-8">
            <PlayCircle className="w-4 h-4 text-emerald-500" />
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-emerald-400">Bilibili Channel</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-display font-black text-white mb-6 tracking-tighter">
            视频 <br />
            <span className="text-gradient">创作合集.</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Image Layout */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative group h-full min-h-[400px]"
          >
            <div className="absolute inset-0 bg-emerald-500/20 rounded-[40px] blur-3xl group-hover:bg-emerald-500/30 transition-colors duration-700" />
            <div className="relative h-full rounded-[40px] overflow-hidden border border-white/10 bg-zinc-900/50 backdrop-blur-sm">
              <img 
                src="/gameicon/DSC_2414.png" 
                alt="Bilibili Channel Preview" 
                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent" />
              <div className="absolute bottom-10 left-10 right-10 flex flex-col sm:flex-row sm:items-end justify-between gap-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-emerald-500">
                    <img 
                      src={avatarError ? "https://picsum.photos/seed/avatar/200/200" : PERSONAL_INFO.avatarUrl} 
                      alt="Avatar" 
                      className="w-full h-full object-cover" 
                      onError={() => setAvatarError(true)}
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl font-black text-white">{PERSONAL_INFO.name}</h3>
                    <p className="text-emerald-400 font-bold text-sm tracking-widest uppercase mt-1">Bilibili UP主</p>
                  </div>
                </div>
                <a 
                  href="https://space.bilibili.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-black font-black uppercase tracking-widest text-xs rounded-full hover:bg-emerald-500 hover:text-white transition-colors"
                >
                  前往主页 <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right: Text Content Blocks */}
          <div className="space-y-6">
            {collections.map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-8 bg-zinc-900/40 backdrop-blur-md border border-white/10 rounded-[32px] hover:border-emerald-500/30 transition-all duration-500 group relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-full blur-2xl group-hover:bg-emerald-500/10 transition-colors duration-500" />
                
                <div className="flex items-start justify-between gap-4 mb-4 relative z-10">
                  <h3 className="text-2xl font-black text-white tracking-tight group-hover:text-emerald-400 transition-colors">{item.title}</h3>
                  <a 
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-emerald-500 transition-colors flex-shrink-0"
                  >
                    <PlayCircle className="w-5 h-5" />
                  </a>
                </div>
                
                <p className="text-zinc-400 text-sm leading-relaxed mb-6 relative z-10">
                  {item.desc}
                </p>
                
                <div className="flex items-center gap-4 relative z-10">
                  <div className="flex items-center gap-2 text-xs font-bold text-zinc-500 uppercase tracking-widest">
                    <Activity className="w-4 h-4 text-emerald-500" />
                    {item.stats}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Contact = ({ onPreview }: { onPreview: () => void }) => {
  return (
    <section id="contact" className="py-40 bg-transparent relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#10b98108,transparent_70%)]" />
      <div className="max-w-5xl mx-auto px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="inline-flex items-center gap-3 px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full mb-12">
            <Zap className="w-4 h-4 text-emerald-500" />
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-emerald-400">Get In Touch</span>
          </div>
          <h2 className="text-7xl md:text-[100px] font-display font-black text-white mb-12 tracking-tighter leading-tight">
            期待参与 <br />
            <span className="text-gradient">下一场“战斗”.</span>
          </h2>
          <p className="text-xl text-zinc-500 mb-20 max-w-3xl mx-auto font-medium leading-relaxed">
            我正在寻找 <span className="text-white font-bold">2026 年暑期游戏策划实习机会</span>。欢迎您随时联系我。
          </p>
          <div className="flex flex-col md:flex-row justify-center items-center gap-8">
            <a 
              href={`mailto:${PERSONAL_INFO.email}`}
              className="w-full md:w-auto px-16 py-8 bg-white text-black text-lg font-black uppercase tracking-[0.2em] rounded-[32px] hover:bg-emerald-500 hover:text-white transition-all shadow-2xl shadow-white/10 flex items-center justify-center gap-4 group"
            >
              发送邮件
              <ChevronRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
            </a>
            <div className="flex flex-col sm:flex-row gap-6 w-full md:w-auto">
              <button 
                onClick={onPreview}
                className="px-12 py-8 bg-zinc-900/50 backdrop-blur-xl border border-white/10 text-white text-lg font-black uppercase tracking-[0.2em] rounded-[32px] hover:border-emerald-500 hover:bg-zinc-900 transition-all flex items-center justify-center gap-4 group"
              >
                <Eye className="w-6 h-6 group-hover:scale-110 transition-transform" />
                在线预览
              </button>
              <a 
                href={PERSONAL_INFO.resumeUrl}
                download
                className="px-12 py-8 bg-zinc-900/50 backdrop-blur-xl border border-white/10 text-white text-lg font-black uppercase tracking-[0.2em] rounded-[32px] hover:border-white/40 hover:bg-zinc-900 transition-all flex items-center justify-center gap-4 group"
              >
                <Download className="w-6 h-6 group-hover:translate-y-1 transition-transform" />
                下载简历
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-20 bg-black/40 backdrop-blur-xl border-t border-white/5">
      <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row justify-between items-center gap-10">
        <div className="text-center md:text-left">
          {/* 可修改：页脚姓名 */}
          <p className="text-xl font-display font-black text-white mb-2 tracking-tighter">打坐ing</p>
          {/* 可修改：版权年份与文本 */}
          <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-700">Personal Portfolio © {new Date().getFullYear()}</p>
        </div>
        <div className="flex gap-10">
          <a href="#" className="text-zinc-500 hover:text-white transition-colors"><Github className="w-6 h-6" /></a>
          <a href="#" className="text-zinc-500 hover:text-white transition-colors"><Linkedin className="w-6 h-6" /></a>
          <a href="#" className="text-zinc-500 hover:text-white transition-colors"><Mail className="w-6 h-6" /></a>
        </div>
      </div>
    </footer>
  );
};

const GamerDNA = () => {
  return (
    <section className="py-32 bg-black/20 backdrop-blur-md border-t border-white/5 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,#10b98105,transparent_50%)]" />
      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <div className="grid lg:grid-cols-[1fr_1.5fr] gap-20 items-center">
          <div>
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full mb-8">
              <Activity className="w-4 h-4 text-emerald-500" />
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-emerald-400">Player Profile</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-display font-black text-white mb-8 tracking-tighter uppercase">游戏 <br /><span className="text-gradient">经历.</span></h2>
            <div className="p-10 bg-zinc-900/20 backdrop-blur-xl border border-white/5 rounded-[40px] mb-8">
              <div className="flex items-center gap-6 mb-8">
                <div className="w-16 h-16 bg-emerald-500/10 rounded-2xl flex items-center justify-center text-emerald-500 border border-emerald-500/20">
                  <Clock className="w-8 h-8" />
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-zinc-500">Playtime</p>
                  <p className="text-4xl font-black text-white tracking-tighter">{GAME_EXPERIENCE.totalHours} <span className="text-lg text-zinc-600">HRS</span></p>
                </div>
              </div>
              <p className="text-zinc-500 leading-relaxed font-medium text-lg">
                {GAME_EXPERIENCE.summary}
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {GAME_EXPERIENCE.categories.map((cat, i) => (
              <motion.div 
                key={i}
                whileHover={{ scale: 1.02, y: -5 }}
                className="p-8 bg-zinc-900/30 backdrop-blur-sm border border-white/5 rounded-[32px] hover:border-emerald-500/30 hover:bg-zinc-900/50 transition-all duration-500 group"
              >
                <div className="flex justify-between items-start mb-6">
                  <h4 className="text-xl font-black text-white uppercase tracking-tight group-hover:text-emerald-400 transition-colors">{cat.name}</h4>
                  <div className="px-3 py-1 bg-emerald-500/10 rounded-full border border-emerald-500/20">
                    <span className="text-[10px] font-black text-emerald-500 tracking-widest">{cat.hours}</span>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: "70%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, delay: i * 0.1 }}
                      className="h-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]"
                    />
                  </div>
                  <p className="text-xs text-zinc-400 leading-relaxed font-medium">
                    {cat.games}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const TechStack = () => {
  return (
    <section className="py-24 bg-black/40 backdrop-blur-md border-y border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
          <div className="text-center lg:text-left">
            <p className="text-[10px] font-black uppercase tracking-[0.4em] text-emerald-500 mb-4">Tools & Skills</p>
            <h3 className="text-4xl font-display font-black text-white tracking-tighter">技能工具栈.</h3>
          </div>
          <div className="flex flex-wrap justify-center lg:justify-end gap-6 md:gap-12">
            {SOFTWARE_SKILLS.map((skill, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -5, scale: 1.1 }}
                className="flex flex-col items-center gap-4 group"
              >
                <div className="w-20 h-20 bg-zinc-900/50 border border-white/10 rounded-3xl flex items-center justify-center text-zinc-400 group-hover:text-emerald-500 group-hover:border-emerald-500/30 group-hover:bg-zinc-900 transition-all duration-500 shadow-xl overflow-hidden p-4">
                  {typeof skill.icon === 'string' ? (
                    <img 
                      src={skill.icon} 
                      alt={skill.name} 
                      className="w-full h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500"
                      onError={(e) => {
                        // 如果图片加载失败（例如还没上传），显示一个占位符或默认图标
                        (e.target as HTMLImageElement).src = `https://via.placeholder.com/80/18181b/10b981?text=${skill.name.charAt(0)}`;
                      }}
                    />
                  ) : (
                    React.cloneElement(skill.icon as React.ReactElement, { className: "w-10 h-10" })
                  )}
                </div>
                <div className="text-center">
                  <p className="text-xs font-black text-white uppercase tracking-tight">{skill.name}</p>
                  <p className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest mt-1">{skill.level}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_50%,#10b98105,transparent_40%)]" />
    </section>
  );
};

export default function App() {
  const [isPdfOpen, setIsPdfOpen] = useState(false);

  return (
    <div className="relative min-h-screen font-sans text-white selection:bg-emerald-500/30">
      {/* Global Background Image */}
      <div className="fixed inset-0 -z-50 overflow-hidden">
        <img 
          src={PERSONAL_INFO.globalBgUrl} 
          alt="Background" 
          className="w-full h-full object-cover scale-105"
          referrerPolicy="no-referrer"
        />
        {/* Dark Overlay for Readability */}
        <div className="absolute inset-0 bg-zinc-950/80 backdrop-blur-[2px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/40 via-transparent to-zinc-950/60" />
      </div>

      <Navbar onPreview={() => setIsPdfOpen(true)} />
      <main className="relative z-10">
        <Hero />
        <TechStack />
        <DemoSection onPreview={() => setIsPdfOpen(true)} />
        <GamerDNA />
        <PersonalDossier />
        <ExperienceSection />
        <AwardsSection />
        <BilibiliSection />
        <Contact onPreview={() => setIsPdfOpen(true)} />
      </main>
      <Footer />
      
      <PdfModal 
        isOpen={isPdfOpen} 
        onClose={() => setIsPdfOpen(false)} 
        url={PERSONAL_INFO.resumeUrl} 
      />
    </div>
  );
}
