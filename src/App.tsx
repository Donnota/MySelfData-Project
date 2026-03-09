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

/// --- Data from Resume (可修改：个人基本信息) ---
const PERSONAL_INFO = {
  name: "刘先胜", // 可修改：姓名
  role: "游戏策划 (战斗)", // 可修改：职位
  email: "3142568588@qq.com", // 可修改：邮箱
  phone: "17642128621", // 可修改：电话
  location: "北京 / 朝阳", // 可修改：坐标
  resumeUrl: "#", // 可修改：简历 PDF 链接 (用于预览和下载)
  avatarUrl: "https://picsum.photos/seed/liuxiansheng_hero/800/1000", // 可修改：个人头像/首屏大图链接
  intro: "你好！我是刘先胜，一名深耕于游戏战斗策划与内容设计的求职者。我热衷于通过严谨的逻辑与极致的操作反馈，在虚拟世界中构建令玩家心跳加速的战斗体验。", // 可修改：个人简介
  summary: [ // 可修改：核心优势列表
    "深耕 UE5 引擎，擅长利用 GAS 框架与行为树构建高复杂度的战斗系统与 AI 逻辑。",
    "具备工业设计背景，能够从交互逻辑与审美双重维度优化游戏内容设计。",
    "实战经验丰富，曾参与字节跳动 UGC 玩法策划及多款独立游戏 Demo 的全栈开发。"
  ]
};

// 可修改：软件技能列表
const SOFTWARE_SKILLS = [
  { name: "Unreal Engine", icon: <Cpu className="w-6 h-6" />, level: "精通" },
  { name: "Unity", icon: <Gamepad2 className="w-6 h-6" />, level: "熟练" },
  { name: "Figma", icon: <Layers className="w-6 h-6" />, level: "熟练" },
  { name: "Axure", icon: <ScrollText className="w-6 h-6" />, level: "熟练" },
  { name: "Blender", icon: <Box className="w-6 h-6" />, level: "掌握" }
];

// 可修改：游戏经历总结
const GAME_EXPERIENCE = {
  totalHours: "3000+", // 可修改：总时长
  summary: "深度的硬核玩家背景，涵盖魂类、MOBA、Roguelike 及开放世界等多种品类。擅长从玩家痛点出发，反推关卡设计与战斗逻辑。", // 可修改：总结文案
  categories: [ // 可修改：游戏品类细分
    { name: "类魂", hours: "500h+", games: "艾尔登法环 (8周目全成就), 黑暗之魂 (8周目全成就), 黑神话:悟空" },
    { name: "MOBA / 竞技", hours: "700h+", games: "王者荣耀 (荣耀王者), 英雄联盟手游 (大师), 皇室战争 (8000杯)" },
    { name: "Roguelike / 策略", hours: "300h+", games: "杀戮尖塔, 哈迪斯, 梗纪元 (自研), 盗贼遗产" },
    { name: "沉浸式 / 开放世界", hours: "600h+", games: "天国拯救, 原神 (开服玩家), 森林, 三角洲" }
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
    title: "《陷落之地》", // 可修改：项目标题
    tag: "战斗框架 Demo", // 可修改：标签
    category: "UE GAS / 类魂战斗", // 可修改：分类
    image: "https://picsum.photos/seed/fallen/1200/800", // 可修改：图片链接
    video: "#", // 可修改：视频链接
    description: "基于UE GAS框架，设计并开发一套基于“虚能”为循环资源的类魂战斗框架。包含普通小怪、精英Boss及大体型龙形Boss的AI设计。", // 可修改：描述
    awards: ["最佳玩法奖", "最佳AI应用奖"], // 可修改：奖项
    tech: ["UE5", "GAS", "行为树"] // 可修改：技术栈
  },
  {
    title: "《梗纪元-卡牌战争》",
    tag: "策略卡牌 Demo",
    category: "肉鸽 / 词条自定义",
    image: "https://picsum.photos/seed/meme/1200/800",
    video: "#",
    description: "词条自定义配置的肉鸽卡牌游戏，玩家可自定义局内卡牌词条内容，通过组合与强化获得更强卡组。已上架TapTap。",
    awards: ["TapTap 开放试玩"],
    tech: ["UE5", "UI 设计", "系统设计"]
  },
  {
    title: "《龙舟消消乐》",
    tag: "轻竞技 Demo",
    category: "AI+游戏训练营",
    image: "https://picsum.photos/seed/dragon/1200/800",
    video: "#",
    description: "面向用户群体设计的轻度竞技消除游戏。通过消除积攒士气并合理释放技能，争取竞赛第一名。",
    awards: ["最佳玩法奖", "最佳AI应用奖"],
    tech: ["AI 训练", "休闲游戏"]
  }
];

// 可修改：教育背景
const EDUCATION = [
  {
    school: "北京邮电大学", // 可修改：学校名称
    degree: "硕士 | 设计学 (产品与交互设计)", // 可修改：学位/专业
    period: "2024 - 2027", // 可修改：时间段
    details: "曾担任本科生党支部宣传委员，校学生会主席。" // 可修改：详细描述
  },
  {
    school: "北京邮电大学",
    degree: "本科 | 工业设计 (智能交互设计)",
    period: "2020 - 2024",
    details: "院志愿者协会部门负责人。"
  }
];

// 可修改：获奖荣誉
const AWARDS = [
  { name: "Red Dot: Best of the Best", icon: <Trophy className="w-4 h-4" /> }, // 可修改：奖项名称
  { name: "Good Design Award", icon: <Trophy className="w-4 h-4" /> },
  { name: "IF DESIGN AWARD", icon: <Trophy className="w-4 h-4" /> },
  { name: "国家一等奖学金", icon: <Award className="w-4 h-4" /> },
  { name: "国家励志奖学金", icon: <Award className="w-4 h-4" /> },
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
            <iframe 
              src={url} 
              className="w-full h-full border-none"
              title="Resume Preview"
            />
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
        <a href="#" className="text-2xl font-display font-black tracking-tighter text-white group">
          LIU<span className="text-emerald-500 group-hover:text-cyan-400 transition-colors">.DESIGN</span>
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
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_40%,#10b98115,transparent_60%)]" />
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-emerald-500/10 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-cyan-500/10 blur-[120px] rounded-full animate-pulse" />
      </div>

      <div className="max-w-7xl mx-auto px-8 w-full grid lg:grid-cols-[1.2fr_0.8fr] gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-3 px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full mb-10">
            <span className="w-2 h-2 bg-emerald-500 rounded-full animate-ping" />
            {/* 可修改：首屏状态标签文本 */}
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-emerald-400">寻找 2026 暑期实习</span>
          </div>
          <h1 className="text-7xl md:text-9xl font-display font-black text-white leading-[0.85] mb-10 tracking-tighter">
            战斗 <br />
            <span className="text-gradient">策划.</span>
          </h1>
          <div className="space-y-6 mb-12">
            <p className="text-2xl text-white font-bold tracking-tight">
              {PERSONAL_INFO.intro}
            </p>
            <p className="text-lg text-zinc-400 max-w-2xl leading-relaxed font-medium">
              {/* 可修改：Hero 区域描述文案 */}
              作为一名战斗策划，我专注于<span className="text-emerald-400">打击感调优</span>、<span className="text-emerald-400">技能系统架构</span>以及<span className="text-emerald-400">高挑战性 AI 设计</span>。我主张“设计服务于体验”，通过数据驱动与感官反馈的结合，定义每一帧的精彩。
            </p>
          </div>

          {/* Software Skills Tags */}
          <div className="flex flex-wrap gap-3 mb-12">
            {SOFTWARE_SKILLS.map(skill => (
              <span key={skill.name} className="px-4 py-2 bg-zinc-900 border border-white/5 rounded-xl text-xs font-bold text-zinc-300 hover:border-emerald-500/50 transition-colors">
                {skill.name}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap gap-6">
            <a href="#demos" className="px-10 py-5 bg-emerald-600 text-white font-black uppercase tracking-widest rounded-2xl hover:bg-emerald-500 transition-all shadow-2xl shadow-emerald-900/40 flex items-center gap-3 group">
              {/* 可修改：主操作按钮文本 */}
              浏览作品
              <PlayCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
            </a>
            <div className="flex items-center gap-4">
              <a href={`mailto:${PERSONAL_INFO.email}`} className="p-4 bg-zinc-900 border border-white/5 rounded-2xl text-zinc-400 hover:text-white hover:border-white/20 transition-all">
                <Mail className="w-6 h-6" />
              </a>
              <a href={`tel:${PERSONAL_INFO.phone}`} className="p-4 bg-zinc-900 border border-white/5 rounded-2xl text-zinc-400 hover:text-white hover:border-white/20 transition-all">
                <Phone className="w-6 h-6" />
              </a>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="relative hidden lg:block"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <div className="relative z-10 aspect-[4/5] rounded-[60px] overflow-hidden border border-white/10 p-2 bg-zinc-900/50 backdrop-blur-3xl glow-emerald">
            <img 
              src={PERSONAL_INFO.avatarUrl} 
              alt={PERSONAL_INFO.name} 
              className="w-full h-full object-cover rounded-[50px] grayscale hover:grayscale-0 transition-all duration-1000"
              referrerPolicy="no-referrer"
            />
          </div>
          {/* Floating Bento Card */}
          <motion.div 
            className="absolute -bottom-10 -left-10 glass-card p-8 rounded-[40px] z-20 max-w-[280px]"
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="flex items-center gap-5 mb-4">
              <div className="w-14 h-14 bg-emerald-500 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-emerald-500/40">
                <Cpu className="w-7 h-7" />
              </div>
              <div>
                {/* 可修改：悬浮卡片标题 */}
                <p className="text-[10px] font-black uppercase tracking-widest text-zinc-500">核心领域</p>
                <p className="text-xl font-black text-white">战斗 & AI</p>
              </div>
            </div>
            <p className="text-xs text-zinc-400 leading-relaxed">
              {/* 可修改：悬浮卡片描述 */}
              擅长利用 UE GAS 框架构建具有深度打击感与策略性的战斗体验。
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

const DemoSection = () => {
  return (
    <section id="demos" className="py-32 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-8">
        <div className="mb-20">
          <h2 className="text-5xl md:text-7xl font-display font-black text-white mb-6 tracking-tighter">
            {/* 可修改：作品集区域标题 */}
            精选 <br />
            <span className="text-gradient">作品.</span>
          </h2>
          <p className="text-zinc-400 max-w-md text-lg">
            {/* 可修改：作品集区域描述 */}
            核心作品展示：深度解析战斗系统、AI 逻辑及核心玩法实现。
          </p>
        </div>

        <div className="space-y-24">
          {DEMOS.map((demo, i) => (
            <motion.div
              key={demo.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className={`group relative grid lg:grid-cols-2 gap-12 items-center`}
            >
              <div className={`relative aspect-video rounded-[40px] overflow-hidden border border-white/10 ${i % 2 === 1 ? 'lg:order-2' : ''}`}>
                <img 
                  src={demo.image} 
                  alt={demo.title} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/60 to-transparent" />
                <div className="absolute bottom-8 left-8 flex flex-wrap gap-3">
                  {demo.tech.map(t => (
                    <span key={t} className="px-4 py-1.5 bg-black/60 backdrop-blur-xl text-[10px] font-black uppercase tracking-widest text-emerald-400 rounded-full border border-white/10">
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
                <h3 className="text-4xl md:text-5xl font-display font-black text-white mb-6 tracking-tighter group-hover:text-emerald-400 transition-colors">
                  {demo.title}
                </h3>
                <p className="text-zinc-400 text-lg leading-relaxed mb-8">
                  {/* 可修改：Demo 描述 */}
                  {demo.description}
                </p>
                <div className={`flex flex-wrap gap-3 mb-10 ${i % 2 === 1 ? 'lg:justify-end' : ''}`}>
                  {demo.awards.map((a, j) => (
                    <div key={j} className="flex items-center gap-2 px-4 py-2 bg-zinc-900 border border-white/5 rounded-xl text-xs font-bold text-zinc-300">
                      <Trophy className="w-4 h-4 text-emerald-500" />
                      {a}
                    </div>
                  ))}
                </div>
                <div className={`flex gap-6 ${i % 2 === 1 ? 'lg:justify-end' : ''}`}>
                  <a href={demo.video} className="px-8 py-4 bg-white text-black text-xs font-black uppercase tracking-widest rounded-2xl hover:bg-emerald-500 hover:text-white transition-all flex items-center gap-3">
                    <PlayCircle className="w-5 h-5" />
                    观看演示
                  </a>
                  <a href="#" className="px-8 py-4 bg-zinc-900 border border-white/10 text-white text-xs font-black uppercase tracking-widest rounded-2xl hover:border-white/30 transition-all flex items-center gap-3">
                    <Download className="w-5 h-5" />
                    设计文档
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
    <section id="profile" className="py-32 bg-zinc-950 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid lg:grid-cols-[1fr_1.5fr] gap-20">
          {/* Left: Character Stats Style */}
          <div className="space-y-12">
            <div>
              {/* 可修改：个人档案标题 */}
              <h2 className="text-4xl font-display font-black text-white mb-8 tracking-tighter uppercase">个人 <span className="text-emerald-500">档案.</span></h2>
              <div className="glass-card p-10 rounded-[40px] space-y-8">
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    {/* 可修改：角色属性标签 */}
                    <p className="text-[10px] font-black uppercase tracking-widest text-zinc-500 mb-1">职业</p>
                    <p className="text-white font-bold">战斗策划</p>
                  </div>
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-widest text-zinc-500 mb-1">等级</p>
                    <p className="text-white font-bold">硕士在读</p>
                  </div>
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-widest text-zinc-500 mb-1">所属</p>
                    <p className="text-white font-bold">北京邮电大学</p>
                  </div>
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-widest text-zinc-500 mb-1">坐标</p>
                    <p className="text-white font-bold">北京, 中国</p>
                  </div>
                </div>
                
                <div className="pt-8 border-t border-white/5">
                  {/* 可修改：证书部分标题 */}
                  <p className="text-[10px] font-black uppercase tracking-widest text-zinc-500 mb-4">资质证书</p>
                  <div className="flex flex-wrap gap-3">
                    {/* 可修改：具体证书名称 */}
                    <span className="px-3 py-1.5 bg-zinc-950 border border-white/10 rounded-lg text-[10px] font-bold text-zinc-300">CET-4</span>
                    <span className="px-3 py-1.5 bg-zinc-950 border border-white/10 rounded-lg text-[10px] font-bold text-zinc-300">普通话二甲</span>
                  </div>
                </div>

                <div className="pt-8 border-t border-white/5">
                  {/* 可修改：社会实践标题 */}
                  <p className="text-[10px] font-black uppercase tracking-widest text-zinc-500 mb-4">社会实践</p>
                  <div className="space-y-4">
                    <div className="flex gap-4">
                      <div className="w-10 h-10 bg-emerald-500/10 rounded-xl flex items-center justify-center text-emerald-500 flex-shrink-0">
                        <Trophy className="w-5 h-5" />
                      </div>
                      <div>
                        {/* 可修改：实践项目名称与角色 */}
                        <p className="text-xs font-bold text-white">冬奥会志愿者保障服务</p>
                        <p className="text-[10px] text-zinc-500">分组负责人 | 优秀志愿者标兵</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="w-10 h-10 bg-emerald-500/10 rounded-xl flex items-center justify-center text-emerald-500 flex-shrink-0">
                        <User className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-white">校学生会主席团成员</p>
                        <p className="text-[10px] text-zinc-500">分管宣传部 | 活动策划与主持</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Detailed Advantages & Philosophy */}
          <div className="space-y-16">
            <div>
              <h3 className="text-2xl font-display font-black text-white mb-10 tracking-widest uppercase flex items-center gap-4">
                <span className="w-8 h-[2px] bg-emerald-500" />
                {/* 可修改：优势部分标题 */}
                个人优势
              </h3>
              <div className="grid md:grid-cols-2 gap-8">
                {[
                  {
                    title: "技术实现能力", // 可修改：优势标题
                    desc: "熟练使用 UE 引擎进行玩法开发，能高效将创意转化为可运行的功能模块。", // 可修改：优势描述
                    icon: <Cpu className="w-6 h-6" />
                  },
                  {
                    title: "玩家视角洞察",
                    desc: "深入的游戏理解，能结合玩家视角与策划逻辑，快速验证和迭代功能设计。",
                    icon: <Target className="w-6 h-6" />
                  },
                  {
                    title: "持续学习自驱",
                    desc: "始终保持对行业趋势与技术发展的关注，积极提升专业水平以适应项目需求。",
                    icon: <Zap className="w-6 h-6" />
                  },
                  {
                    title: "跨学科背景",
                    desc: "工业设计与交互设计背景，具备优秀的审美能力与用户体验思维。",
                    icon: <Layers className="w-6 h-6" />
                  }
                ].map((item, i) => (
                  <motion.div 
                    key={i}
                    whileHover={{ y: -5 }}
                    className="p-8 bg-zinc-900/30 border border-white/5 rounded-[32px] hover:border-emerald-500/30 transition-all"
                  >
                    <div className="text-emerald-500 mb-6">{item.icon}</div>
                    <h4 className="text-lg font-bold text-white mb-3">{item.title}</h4>
                    <p className="text-sm text-zinc-400 leading-relaxed">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="p-12 bg-gradient-to-br from-emerald-600 to-cyan-700 rounded-[50px] text-white relative overflow-hidden">
              <div className="relative z-10">
                {/* 可修改：设计哲学标题 */}
                <h3 className="text-3xl font-display font-black mb-6 tracking-tighter">设计哲学.</h3>
                <p className="text-emerald-50 text-xl leading-relaxed font-medium italic">
                  {/* 可修改：设计哲学引用文案 */}
                  "我相信优秀的战斗设计不仅仅是数值的堆砌，更是动作、特效、音效与操作反馈的完美共振。我追求的是那种让玩家在每一帧操作中都能感受到‘掌控感’与‘打击感’的极致体验。"
                </p>
              </div>
              <Gamepad2 className="absolute -bottom-10 -right-10 w-64 h-64 text-white/10 rotate-12" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-32 bg-zinc-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-24">
          <div>
            <h2 className="text-5xl md:text-7xl font-display font-black text-white mb-10 tracking-tighter">
              {/* 可修改：历程区域标题 */}
              职业 <br />
              <span className="text-gradient">历程.</span>
            </h2>
            <p className="text-zinc-400 text-lg leading-relaxed mb-12">
              {/* 可修改：历程区域描述 */}
              从 UGC 玩法到核心战斗策划，我在不同的项目中磨练了对游戏节奏与玩家反馈的敏锐洞察。
            </p>
            <div className="space-y-6">
              {EDUCATION.map((edu, i) => (
                <div key={i} className="p-8 bg-zinc-900/50 border border-white/5 rounded-3xl">
                  <div className="flex items-center gap-4 mb-4">
                    <BookOpen className="text-emerald-500" />
                    <h3 className="font-black text-white">{edu.school}</h3>
                  </div>
                  <p className="text-sm text-zinc-400 mb-2 font-medium">{edu.degree}</p>
                  <p className="text-[10px] font-black uppercase tracking-widest text-zinc-600">{edu.period}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-12">
            {EXPERIENCE.map((exp, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative pl-12 border-l border-white/10"
              >
                <div className="absolute -left-6 top-0 w-12 h-12 bg-zinc-900 border border-white/10 rounded-2xl flex items-center justify-center text-emerald-500 shadow-2xl">
                  {exp.icon}
                </div>
                <div className="mb-4">
                  <span className="text-[10px] font-black uppercase tracking-widest text-zinc-500 mb-2 block">{exp.period}</span>
                  <h3 className="text-3xl font-display font-black text-white mb-2">{exp.company}</h3>
                  <p className="text-emerald-500 font-black uppercase tracking-widest text-xs">{exp.role}</p>
                </div>
                <ul className="space-y-4">
                  {exp.content.map((item, j) => (
                    <li key={j} className="text-zinc-400 text-sm leading-relaxed flex gap-4">
                      <span className="text-emerald-500 mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" />
                      {item}
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

const AwardsBento = () => {
  return (
    <section className="py-32 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="md:col-span-2 glass-card p-12 rounded-[50px] flex flex-col justify-between">
            <div>
              {/* 可修改：荣誉区域标题 */}
              <h3 className="text-4xl font-display font-black text-white mb-6 tracking-tighter">设计荣誉.</h3>
              <p className="text-zinc-400 text-lg max-w-md mb-10">
                {/* 可修改：荣誉区域描述 */}
                荣获多项国际设计大奖，证明了我在交互逻辑与视觉传达上的专业水准。
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              {AWARDS.map((award, i) => (
                <div key={i} className="px-6 py-3 bg-white/5 border border-white/10 rounded-2xl flex items-center gap-3 text-sm font-bold text-white">
                  {award.icon}
                  {award.name}
                </div>
              ))}
            </div>
          </div>
          <div className="bg-emerald-600 p-12 rounded-[50px] flex flex-col justify-between text-white group overflow-hidden relative">
            <div className="relative z-10">
              <Trophy className="w-16 h-16 mb-8 group-hover:scale-110 transition-transform" />
              {/* 可修改：重点荣誉标题 */}
              <h3 className="text-3xl font-display font-black leading-tight mb-4 tracking-tighter">红点奖 <br />BEST OF THE BEST.</h3>
              <p className="text-emerald-100 text-sm font-medium">顶级设计荣誉，见证创意的极致表达。</p>
            </div>
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/10 blur-3xl rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
};

const Contact = ({ onPreview }: { onPreview: () => void }) => {
  return (
    <section id="contact" className="py-32 bg-zinc-950">
      <div className="max-w-5xl mx-auto px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-6xl md:text-8xl font-display font-black text-white mb-10 tracking-tighter">
            {/* 可修改：联系区域标题 */}
            准备好一起 <br />
            <span className="text-gradient">升级了吗？</span>
          </h2>
          <p className="text-xl text-zinc-400 mb-16 max-w-2xl mx-auto font-medium">
            {/* 可修改：底部联系区域描述文案 */}
            我正在寻找 2026 年暑期游戏策划实习机会。如果你需要一位热爱战斗系统、擅长 AI 逻辑且具备扎实开发能力的策划，请随时联系我。
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <a 
              href={`mailto:${PERSONAL_INFO.email}`}
              className="px-12 py-6 bg-white text-black text-lg font-black uppercase tracking-widest rounded-[30px] hover:bg-emerald-500 hover:text-white transition-all shadow-2xl shadow-white/5"
            >
              {/* 可修改：联系按钮文本 */}
              发送邮件
            </a>
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={onPreview}
                className="px-10 py-6 bg-zinc-900 border border-white/10 text-white text-lg font-black uppercase tracking-widest rounded-[30px] hover:border-emerald-500 transition-all flex items-center justify-center gap-3"
              >
                <Eye className="w-6 h-6" />
                在线预览
              </button>
              <a 
                href={PERSONAL_INFO.resumeUrl}
                download
                className="px-10 py-6 bg-zinc-900 border border-white/10 text-white text-lg font-black uppercase tracking-widest rounded-[30px] hover:border-white/30 transition-all flex items-center justify-center gap-3"
              >
                <Download className="w-6 h-6" />
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
    <footer className="py-20 bg-zinc-950 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row justify-between items-center gap-10">
        <div className="text-center md:text-left">
          {/* 可修改：页脚姓名 */}
          <p className="text-2xl font-display font-black text-white mb-2 tracking-tighter">LIU XIANSHENG</p>
          {/* 可修改：版权年份与文本 */}
          <p className="text-xs font-bold uppercase tracking-widest text-zinc-600">Game Designer Portfolio © {new Date().getFullYear()}</p>
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
    <section className="py-32 bg-zinc-950 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid lg:grid-cols-[1fr_1.5fr] gap-20 items-center">
          <div>
            {/* 可修改：游戏基因标题 */}
            <h2 className="text-5xl md:text-7xl font-display font-black text-white mb-8 tracking-tighter uppercase">游戏 <br /><span className="text-gradient">基因.</span></h2>
            <div className="p-8 bg-zinc-900/50 border border-white/5 rounded-[40px] mb-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-emerald-500/20 rounded-2xl flex items-center justify-center text-emerald-500">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  {/* 可修改：时长统计标签 */}
                  <p className="text-[10px] font-black uppercase tracking-widest text-zinc-500">总游玩时长</p>
                  <p className="text-3xl font-black text-white">{GAME_EXPERIENCE.totalHours} 小时</p>
                </div>
              </div>
              <p className="text-zinc-400 leading-relaxed font-medium">
                {/* 可修改：游戏背景总结 */}
                {GAME_EXPERIENCE.summary}
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {GAME_EXPERIENCE.categories.map((cat, i) => (
              <motion.div 
                key={i}
                whileHover={{ scale: 1.02 }}
                className="p-8 bg-zinc-900/30 border border-white/5 rounded-[32px] hover:border-emerald-500/30 transition-all"
              >
                <div className="flex justify-between items-start mb-6">
                  {/* 可修改：游戏品类名称 */}
                  <h4 className="text-lg font-black text-white uppercase tracking-tight">{cat.name}</h4>
                  <span className="text-xs font-black text-emerald-500">{cat.hours}</span>
                </div>
                <p className="text-xs text-zinc-500 leading-relaxed">
                  {/* 可修改：具体代表作 */}
                  {cat.games}
                </p>
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
    <section className="py-24 bg-zinc-900/20 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="text-center md:text-left">
            {/* 可修改：技术栈区域标题 */}
            <h3 className="text-xs font-black uppercase tracking-[0.4em] text-zinc-500 mb-2">软件工具栈</h3>
            <p className="text-2xl font-display font-black text-white">技术栈.</p>
          </div>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            {SOFTWARE_SKILLS.map((skill) => (
              <div key={skill.name} className="flex flex-col items-center gap-4 group">
                <div className="w-16 h-16 bg-zinc-900 border border-white/5 rounded-2xl flex items-center justify-center text-zinc-500 group-hover:text-emerald-500 group-hover:border-emerald-500/5 group-hover:bg-emerald-500/5 transition-all duration-500">
                  {skill.icon}
                </div>
                <div className="text-center">
                  {/* 可修改：软件名称与熟练度 */}
                  <p className="text-[10px] font-black uppercase tracking-widest text-zinc-400 group-hover:text-white transition-colors">{skill.name}</p>
                  <p className="text-[8px] font-bold text-zinc-600 uppercase mt-1">{skill.level}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default function App() {
  const [isPdfOpen, setIsPdfOpen] = useState(false);

  return (
    <div className="bg-zinc-950 font-sans">
      <Navbar onPreview={() => setIsPdfOpen(true)} />
      <main>
        <Hero />
        <TechStack />
        <DemoSection />
        <GamerDNA />
        <PersonalDossier />
        <ExperienceSection />
        <AwardsBento />
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
