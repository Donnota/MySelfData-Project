import { useState } from "react";
import { motion } from "motion/react";
import {
  Activity,
  BookOpen,
  Brain,
  ClipboardList,
  Crosshair,
  Download,
  ExternalLink,
  FileText,
  Gamepad2,
  Mail,
  MapPin,
  Phone,
  PlayCircle,
  ShieldCheck,
  Swords,
  Trophy,
  UserRound,
  Wrench,
} from "lucide-react";
import { ImageCarousel } from "./components/ImageCarousel";
import { PdfModal } from "./components/PdfModal";
import {
  awards,
  designPillars,
  designProfile,
  education,
  experiences,
  gameExperience,
  personalInfo,
  projects,
  toolSkills,
  videoCollections,
} from "./data/portfolio";

const navItems = [
  { name: "能力", href: "#method" },
  { name: "履历", href: "#experience" },
  { name: "项目", href: "#projects" },
  { name: "游戏", href: "#research" },
  { name: "联系", href: "#contact" },
];

function SectionHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mb-10 max-w-3xl">
      <p className="mb-3 font-mono text-xs font-bold uppercase tracking-[0.24em] text-amber-300">{eyebrow}</p>
      <h2 className="text-3xl font-black tracking-tight text-zinc-100 md:text-5xl">{title}</h2>
      {description && <p className="mt-4 text-base leading-7 text-zinc-400">{description}</p>}
    </div>
  );
}

function Tag({ children }: { children: string; key?: string }) {
  return (
    <span className="border border-zinc-700 bg-zinc-950 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.16em] text-zinc-300">
      {children}
    </span>
  );
}

function DynamicBackground() {
  return (
    <div className="dynamic-background" aria-hidden="true">
      <div className="dynamic-grid" />
      <div className="dynamic-scanline" />
      <div className="dynamic-orb dynamic-orb-a" />
      <div className="dynamic-orb dynamic-orb-b" />
      <div className="dynamic-node dynamic-node-a" />
      <div className="dynamic-node dynamic-node-b" />
      <div className="dynamic-node dynamic-node-c" />
    </div>
  );
}

function Navbar({ onPreview }: { onPreview: () => void }) {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-800 bg-[#090b0d]/92 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
        <a href="#" className="flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center border border-amber-400/60 bg-amber-400/10 text-amber-300">
            <Swords className="h-4 w-4" />
          </span>
          <span>
            <span className="block font-mono text-[10px] font-bold uppercase tracking-[0.24em] text-zinc-500">
              游戏策划作品集
            </span>
            <span className="text-sm font-black tracking-wide text-zinc-100">{personalInfo.realName}</span>
          </span>
        </a>

        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="text-sm font-bold text-zinc-400 transition-colors hover:text-amber-300">
              {item.name}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            onClick={onPreview}
            className="hidden border border-zinc-700 px-4 py-2 text-xs font-bold text-zinc-200 transition-colors hover:border-amber-400 hover:text-amber-300 sm:inline-flex"
          >
            预览简历
          </button>
          <a
            href={personalInfo.resumeUrl}
            download
            className="inline-flex items-center gap-2 bg-amber-400 px-4 py-2 text-xs font-black text-zinc-950 transition-colors hover:bg-amber-300"
          >
            <Download className="h-3.5 w-3.5" />
            下载
          </a>
        </div>
      </div>
    </header>
  );
}

function Hero({ onPreview }: { onPreview: () => void }) {
  return (
    <section className="relative overflow-hidden border-b border-zinc-800">
      <div className="absolute inset-0 tactical-grid opacity-40" />
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-20 md:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:py-28">
        <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }}>
          <div className="mb-8 flex flex-wrap gap-2">
            <Tag>战斗策划</Tag>
            <Tag>UE5 GAS</Tag>
            <Tag>Boss AI</Tag>
            <Tag>数值调优</Tag>
          </div>

          <p className="mb-4 font-mono text-xs font-bold uppercase tracking-[0.3em] text-amber-300">2027届在校生 / 战斗策划方向</p>
          <h1 className="max-w-4xl text-5xl font-black leading-tight tracking-[-0.04em] text-zinc-100 md:text-7xl">
            游戏战斗策划
            <br />
            作品集
          </h1>
          <p className="mt-8 max-w-2xl text-xl font-semibold leading-9 text-zinc-200">{personalInfo.headline}</p>
          <p className="mt-4 max-w-3xl text-base leading-8 text-zinc-400">{personalInfo.intro}</p>

          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 bg-zinc-100 px-5 py-3 text-sm font-black text-zinc-950 transition-colors hover:bg-amber-300"
            >
              查看项目经历
              <ClipboardList className="h-4 w-4" />
            </a>
            <button
              onClick={onPreview}
              className="inline-flex items-center gap-2 border border-zinc-700 px-5 py-3 text-sm font-bold text-zinc-200 transition-colors hover:border-amber-400 hover:text-amber-300"
            >
              简历 PDF
              <FileText className="h-4 w-4" />
            </button>
          </div>
        </motion.div>

        <motion.aside
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.08 }}
          className="border border-zinc-700 bg-zinc-950/80 p-6"
        >
          <div className="mb-6 flex items-center justify-between border-b border-zinc-800 pb-4">
            <div>
              <p className="font-mono text-xs font-bold uppercase tracking-[0.24em] text-zinc-500">个人信息</p>
              <h2 className="mt-2 text-2xl font-black text-zinc-100">{personalInfo.name}</h2>
            </div>
            <UserRound className="h-8 w-8 text-amber-300" />
          </div>

          <div className="space-y-4">
            {designProfile.map((item) => (
              <div key={item.label} className="grid grid-cols-[96px_1fr] gap-4 border-b border-zinc-900 pb-4">
                <p className="font-mono text-xs font-bold text-zinc-500">{item.label}</p>
                <p className="text-sm font-semibold leading-6 text-zinc-200">{item.value}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 grid grid-cols-2 gap-3">
            <a href={`mailto:${personalInfo.email}`} className="border border-zinc-800 p-4 transition-colors hover:border-amber-400">
              <Mail className="mb-3 h-4 w-4 text-amber-300" />
              <p className="text-xs text-zinc-500">Email</p>
              <p className="mt-1 truncate text-sm font-bold text-zinc-200">{personalInfo.email}</p>
            </a>
            <a href={`tel:${personalInfo.phone}`} className="border border-zinc-800 p-4 transition-colors hover:border-amber-400">
              <Phone className="mb-3 h-4 w-4 text-amber-300" />
              <p className="text-xs text-zinc-500">Phone</p>
              <p className="mt-1 text-sm font-bold text-zinc-200">{personalInfo.phone}</p>
            </a>
          </div>
        </motion.aside>
      </div>
    </section>
  );
}

function MethodSection() {
  const icons = [Crosshair, Swords, Brain, Activity];

  return (
    <section id="method" className="border-b border-zinc-800 py-20">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeader
          eyebrow="核心能力"
          title="核心能力"
          description="围绕战斗策划岗位，重点展示系统拆解、技能设计、怪物机制、原型实现和调优能力。"
        />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {designPillars.map((pillar, index) => {
            const Icon = icons[index];
            return (
              <article key={pillar.title} className="panel-card p-6">
                <Icon className="mb-8 h-6 w-6 text-amber-300" />
                <p className="mb-3 font-mono text-xs text-zinc-500">0{index + 1}</p>
                <h3 className="text-xl font-black text-zinc-100">{pillar.title}</h3>
                <p className="mt-4 text-sm leading-7 text-zinc-400">{pillar.detail}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function SkillSection() {
  return (
    <section className="border-b border-zinc-800 py-20">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeader eyebrow="工具掌握" title="技能工具" />
        <div className="grid gap-3 lg:grid-cols-5">
          {toolSkills.map((skill) => (
            <article key={skill.name} className="panel-card p-5">
              <div className="mb-5 flex h-12 w-12 items-center justify-center border border-zinc-700 bg-zinc-950 p-2">
                <img src={skill.icon} alt={skill.name} className="h-full w-full object-contain grayscale" />
              </div>
              <h3 className="text-base font-black text-zinc-100">{skill.name}</h3>
              <p className="mt-1 font-mono text-xs font-bold text-amber-300">{skill.level}</p>
              <p className="mt-4 text-sm leading-6 text-zinc-400">{skill.usage}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectSection() {
  return (
    <section id="projects" className="border-b border-zinc-800 py-20">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeader
          eyebrow="项目经历"
          title="项目经历"
          description="按简历结构整理项目内容：负责内容、设计目标、设计方案和验证结果。"
        />

        <div className="space-y-8">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.35 }}
              className="overflow-hidden border border-zinc-800 bg-[#0c0f12]"
            >
              <div className="border-b border-zinc-800 p-5 md:p-6">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <p className="font-mono text-xs font-bold uppercase tracking-[0.24em] text-zinc-500">
                      项目 {String(index + 1).padStart(2, "0")} / {project.type}
                    </p>
                    <div className="mt-3 flex flex-wrap items-end gap-x-4 gap-y-2">
                      <h3 className="text-3xl font-black tracking-tight text-zinc-100 md:text-4xl">{project.title}</h3>
                      <p className="pb-1 text-sm font-bold text-amber-300">{project.subtitle}</p>
                    </div>
                  </div>
                  <p className="border border-zinc-700 px-3 py-1 font-mono text-xs text-zinc-400">{project.period}</p>
                </div>
              </div>

              <div className="grid gap-0 lg:grid-cols-[minmax(380px,0.95fr)_minmax(0,1.25fr)]">
                <div className="border-b border-zinc-800 bg-zinc-950/45 p-5 md:p-6 lg:border-b-0 lg:border-r">
                  <div className={project.title.includes("龙舟消消乐") ? "mx-auto w-full max-w-[320px]" : ""}>
                    <ImageCarousel
                      images={project.images}
                      title={project.title}
                      isPortrait={project.title.includes("龙舟消消乐")}
                    />
                  </div>

                  <div className="mt-5 grid grid-cols-3 gap-3">
                    {project.metrics.map((metric) => (
                      <div key={`${project.title}-${metric.label}`} className="border border-zinc-800 bg-[#0c0f12] p-3">
                        <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-zinc-500">{metric.label}</p>
                        <p className="mt-2 text-base font-black text-zinc-100">{metric.value}</p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.focus.map((tag) => (
                      <Tag key={tag}>{tag}</Tag>
                    ))}
                  </div>
                </div>

                <div className="p-5 md:p-6">
                  <div className="grid gap-5">
                    <section className="border-l border-amber-300/70 pl-4">
                      <p className="mb-2 font-mono text-xs font-bold uppercase tracking-[0.2em] text-amber-300">设计目标</p>
                      <p className="text-sm leading-7 text-zinc-300">{project.designGoal}</p>
                    </section>

                    <section>
                      <p className="mb-3 font-mono text-xs font-bold uppercase tracking-[0.2em] text-amber-300">设计方案</p>
                      <ul className="space-y-3">
                        {project.solution.map((item) => (
                          <li key={item} className="flex gap-3 text-sm leading-7 text-zinc-400">
                            <ShieldCheck className="mt-1 h-4 w-4 flex-shrink-0 text-amber-300" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </section>

                    <section className="border border-zinc-800 bg-zinc-950/55 p-4">
                      <p className="mb-2 font-mono text-xs font-bold uppercase tracking-[0.2em] text-amber-300">验证结果</p>
                      <p className="text-sm leading-7 text-zinc-300">{project.validation}</p>
                    </section>
                  </div>

                  <div className="mt-6 flex flex-wrap gap-3 border-t border-zinc-800 pt-5">
                  <a
                    href={project.video}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 border border-zinc-700 px-4 py-2 text-sm font-bold text-zinc-200 transition-colors hover:border-amber-400 hover:text-amber-300"
                  >
                    <PlayCircle className="h-4 w-4" />
                    演示 / 页面
                  </a>
                  <a
                    href={project.downloadLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 border border-zinc-700 px-4 py-2 text-sm font-bold text-zinc-200 transition-colors hover:border-amber-400 hover:text-amber-300"
                  >
                    <ExternalLink className="h-4 w-4" />
                    下载试玩
                  </a>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ResearchSection() {
  return (
    <section id="research" className="border-b border-zinc-800 py-20">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 md:px-8 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <SectionHeader
            eyebrow="游戏经历"
            title="游戏经历"
            description={gameExperience.summary}
          />
          <div className="panel-card p-6">
            <ClockBlock />
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {gameExperience.categories.map((category) => (
            <article key={category.name} className="panel-card p-6">
              <div className="mb-5 flex items-center justify-between gap-4">
                <h3 className="text-xl font-black text-zinc-100">{category.name}</h3>
                <span className="font-mono text-xs font-bold text-amber-300">{category.hours}</span>
              </div>
              <p className="text-sm leading-7 text-zinc-400">{category.games}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ClockBlock() {
  return (
    <div className="flex items-center gap-5">
      <div className="flex h-16 w-16 items-center justify-center border border-amber-400/50 bg-amber-400/10">
        <Gamepad2 className="h-8 w-8 text-amber-300" />
      </div>
      <div>
        <p className="font-mono text-xs font-bold uppercase tracking-[0.24em] text-zinc-500">累计游玩</p>
        <p className="mt-1 text-4xl font-black tracking-tight text-zinc-100">{gameExperience.totalHours}</p>
      </div>
    </div>
  );
}

function ExperienceSection() {
  return (
    <section id="experience" className="border-b border-zinc-800 py-20">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeader eyebrow="实习教育" title="实习与教育经历" />
        <div className="grid gap-8 lg:grid-cols-[1.25fr_1fr]">
          <div className="space-y-4">
            {experiences.map((item) => (
              <article key={`${item.company}-${item.role}`} className="panel-card p-6">
                <div className="mb-5 flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <p className="font-mono text-xs font-bold text-zinc-500">{item.period}</p>
                    <h3 className="mt-2 text-2xl font-black text-zinc-100">{item.company}</h3>
                    <p className="mt-1 text-sm font-bold text-amber-300">{item.role}</p>
                  </div>
                  <Wrench className="h-5 w-5 text-zinc-500" />
                </div>
                <ul className="space-y-3">
                  {item.content.map((line) => (
                    <li key={line} className="flex gap-3 text-sm leading-7 text-zinc-400">
                      <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 bg-amber-300" />
                      <span>{line}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          <div className="space-y-4">
            {education.map((item) => (
              <article key={`${item.school}-${item.degree}`} className="panel-card p-6">
                <BookOpen className="mb-5 h-5 w-5 text-amber-300" />
                <p className="font-mono text-xs font-bold text-zinc-500">{item.period}</p>
                <h3 className="mt-2 text-xl font-black text-zinc-100">{item.school}</h3>
                <p className="mt-2 text-sm font-bold text-zinc-300">{item.degree}</p>
                {item.details && <p className="mt-4 text-sm leading-7 text-zinc-500">{item.details}</p>}
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function AwardsAndVideoSection() {
  return (
    <section className="border-b border-zinc-800 py-20">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 md:px-8 lg:grid-cols-2">
        <div>
          <SectionHeader eyebrow="获奖经历" title="获奖经历" />
          <div className="space-y-3">
            {awards.map((award) => (
              <div key={award.name} className="flex items-center justify-between gap-4 border border-zinc-800 bg-zinc-950/50 p-4">
                <div className="flex items-center gap-3">
                  <Trophy className="h-4 w-4 flex-shrink-0 text-amber-300" />
                  <p className="text-sm font-bold leading-6 text-zinc-200">{award.name}</p>
                </div>
                <p className="font-mono text-xs text-zinc-500">{award.date}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <SectionHeader eyebrow="内容输出" title="视频教程与学习记录" />
          <div className="space-y-4">
            {videoCollections.map((item) => (
              <a
                key={item.title}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block panel-card p-6 transition-colors hover:border-amber-400/70"
              >
                <div className="mb-4 flex items-center justify-between gap-4">
                  <h3 className="text-xl font-black text-zinc-100">{item.title}</h3>
                  <ExternalLink className="h-4 w-4 text-amber-300" />
                </div>
                <p className="text-sm leading-7 text-zinc-400">{item.desc}</p>
                <p className="mt-4 font-mono text-xs font-bold uppercase tracking-[0.18em] text-zinc-500">{item.stats}</p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactSection({ onPreview }: { onPreview: () => void }) {
  return (
    <section id="contact" className="py-20">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="border border-zinc-700 bg-[#0c0f12] p-8 md:p-10">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <p className="mb-3 font-mono text-xs font-bold uppercase tracking-[0.24em] text-amber-300">联系方式</p>
              <h2 className="text-3xl font-black text-zinc-100 md:text-5xl">正在寻找游戏战斗策划实习机会</h2>
              <div className="mt-6 grid gap-3 text-sm text-zinc-400 sm:grid-cols-3">
                <p className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-amber-300" />
                  {personalInfo.email}
                </p>
                <p className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-amber-300" />
                  {personalInfo.phone}
                </p>
                <p className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-amber-300" />
                  {personalInfo.location}
                </p>
              </div>
            </div>
            <div className="flex flex-wrap gap-3">
              <button
                onClick={onPreview}
                className="inline-flex items-center gap-2 border border-zinc-700 px-5 py-3 text-sm font-bold text-zinc-200 transition-colors hover:border-amber-400 hover:text-amber-300"
              >
                <FileText className="h-4 w-4" />
                预览简历
              </button>
              <a
                href={`mailto:${personalInfo.email}`}
                className="inline-flex items-center gap-2 bg-amber-400 px-5 py-3 text-sm font-black text-zinc-950 transition-colors hover:bg-amber-300"
              >
                发送邮件
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
        <footer className="flex flex-wrap items-center justify-between gap-3 py-8 text-xs text-zinc-600">
          <p>游戏战斗策划作品集 © {new Date().getFullYear()}</p>
          <p>Built with Vite / React / TypeScript</p>
        </footer>
      </div>
    </section>
  );
}

export default function App() {
  const [isPdfOpen, setIsPdfOpen] = useState(false);

  return (
    <div className="relative isolate min-h-screen overflow-hidden bg-[#090b0d] text-zinc-100 selection:bg-amber-300/30 selection:text-amber-100">
      <DynamicBackground />
      <Navbar onPreview={() => setIsPdfOpen(true)} />
      <main className="relative z-10">
        <Hero onPreview={() => setIsPdfOpen(true)} />
        <MethodSection />
        <SkillSection />
        <ExperienceSection />
        <ProjectSection />
        <ResearchSection />
        <AwardsAndVideoSection />
        <ContactSection onPreview={() => setIsPdfOpen(true)} />
      </main>
      <PdfModal isOpen={isPdfOpen} onClose={() => setIsPdfOpen(false)} url={personalInfo.resumeUrl} />
    </div>
  );
}
