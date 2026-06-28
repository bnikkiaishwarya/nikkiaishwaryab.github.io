import { createFileRoute } from "@tanstack/react-router";
import folderIconAsset from "@/assets/folder-icon-new.png.asset.json";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import {
  Battery,
  Wifi,
  Search,
  SlidersHorizontal,
  Folder,
  FileText,
  Trash2,
  AlignLeft,
  AlignCenter,
  AlignRight,
  ChevronLeft,
  ChevronRight,
  Clock,
  Users,
  Monitor,
  LayoutGrid,
  Download,
  Share,
  Tag,
  MoreHorizontal,
  Rows3,
  Columns3,
  AppWindow,
  Calendar as CalendarIcon,
  ChevronDown,
  RefreshCw,
  Star,
  Shield,
  Loader,
  Printer,
  PanelLeft,
  SquarePen,
  CaseSensitive,
  ListChecks,
  Table as TableIcon,
  Paperclip,
  Sparkles,
  Upload,
} from "lucide-react";
import FinderIcon from "@/assets/finder-v2.png.asset.json";
import SafariIcon from "@/assets/safari-v2.png.asset.json";
import ChromeIcon from "@/assets/chrome-v2.png.asset.json";
import polarBear404 from "@/assets/404-polar-bear.png.asset.json";
import DatesIcon from "@/assets/dates-new.png.asset.json";

import MailIcon from "@/assets/mail.png.asset.json";
import NotesIcon from "@/assets/notes-v3.png.asset.json";
import PagesIcon from "@/assets/pages-v2.png.asset.json";
import PreviewIcon from "@/assets/preview.png.asset.json";
import TrashIcon from "@/assets/trash-can-new.png.asset.json";
import PhotosIcon from "@/assets/photos.png.asset.json";
import MessagesIcon from "@/assets/messages.png.asset.json";
import ExpensePhoto1 from "@/assets/expense-photo-1.png.asset.json";
import ExpensePhoto2 from "@/assets/expense-photo-2.png.asset.json";
import ExpensePhoto3 from "@/assets/expense-photo-3.png.asset.json";
import ExpensePhoto4 from "@/assets/expense-photo-4.png.asset.json";
import MindPhoto1 from "@/assets/mind-photo-1.png.asset.json";
import MindPhoto2 from "@/assets/mind-photo-2.png.asset.json";
import MindPhoto3 from "@/assets/mind-photo-3.png.asset.json";
import MindPhoto4 from "@/assets/mind-photo-4.png.asset.json";
import NexusPhoto1 from "@/assets/nexus-photo-1.png.asset.json";
import NexusPhoto2 from "@/assets/nexus-photo-2.png.asset.json";
import NexusPhoto3 from "@/assets/nexus-photo-3.png.asset.json";
import NexusPhoto4 from "@/assets/nexus-photo-4.png.asset.json";
import EatoPhoto1 from "@/assets/eato-photo-1.png.asset.json";
import EatoPhoto2 from "@/assets/eato-photo-2.png.asset.json";
import EatoPhoto3 from "@/assets/eato-photo-3.png.asset.json";
import EatoPhoto4 from "@/assets/eato-photo-4.png.asset.json";
import VisaPhoto1 from "@/assets/visa-photo-1.png.asset.json";
import VisaPhoto2 from "@/assets/visa-photo-2.png.asset.json";
import VisaPhoto3 from "@/assets/visa-photo-3.png.asset.json";
import VisaPhoto4 from "@/assets/visa-photo-4.png.asset.json";
import resumeAsset from "@/assets/resume.pdf.asset.json";
import resumePage1 from "@/assets/resume-page-1.png.asset.json";
import resumePage2 from "@/assets/resume-page-2.png.asset.json";
import memojiAvatar from "@/assets/memoji-avatar.png.asset.json";
import expenseTrackerCaseStudyPage from "@/assets/expense-tracker-case-study-page.jpg.asset.json";
import theMindCaseStudyPage from "@/assets/the-mind-case-study-page.jpg.asset.json";
import visaProcessCaseStudyPage from "@/assets/visa-process-case-study-page.jpg.asset.json";
import nexusAiCaseStudyPage from "@/assets/nexus-ai-case-study-page.jpg.asset.json";
import eatoCaseStudyPage from "@/assets/eato-case-study-page.jpg.asset.json";
import macosWallpaper from "@/assets/wallpaper-colorful.jpg.asset.json";
import claudeTemplatesCaseStudyPage from "@/assets/claude-templates-case-study-page.jpg.asset.json";

import brightnessIcon from "@/assets/brightness-and-contrast.png.asset.json";


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Nikki Aishwarya's Portfolio — Desktop" },
      { name: "description", content: "A playful macOS desktop-inspired portfolio." },
    ],
  }),
  component: Index,
});

function useClock() {
  const [now, setNow] = useState<Date | null>(null);
  useEffect(() => {
    setNow(new Date());
    const id = setInterval(() => setNow(new Date()), 1000 * 30);
    return () => clearInterval(id);
  }, []);
  if (!now) return "";
  const day = now.toLocaleDateString(undefined, { weekday: "long", month: "short", day: "numeric" });
  const time = now.toLocaleTimeString(undefined, { hour: "numeric", minute: "2-digit" });
  return `${day}  ${time}`;
}

function MenuBar({
  onOpenResume,
  onOpenContact,
  isDark,
  onToggleTheme,
}: {
  onOpenResume?: () => void;
  onOpenContact?: () => void;
  isDark: boolean;
  onToggleTheme: () => void;
}) {
  const stamp = useClock();
  return (
    <div className="fixed top-0 inset-x-0 z-50 h-7 bg-white/60 dark:bg-black/55 backdrop-blur-xl border-b border-black/10 dark:border-white/10 flex items-center px-3 text-[13px] text-black/90 dark:text-white/90 select-none">
      <img src={memojiAvatar.url} alt="Avatar" className="w-5 h-5 mr-3 rounded-full object-cover" />
      <span className="font-semibold underline underline-offset-2 decoration-1">Nikki Aishwarya's Portfolio</span>
      <span
        className="ml-5 hover:bg-black/5 dark:hover:bg-white/10 px-2 py-0.5 rounded cursor-pointer"
        onClick={onOpenContact}
      >
        Contact
      </span>
      <span
        className="ml-1 hover:bg-black/5 dark:hover:bg-white/10 px-2 py-0.5 rounded cursor-pointer"
        onClick={onOpenResume}
      >
        Resume
      </span>
      <div className="ml-auto flex items-center gap-3 text-black/85 dark:text-white/90">
        {/* Stack / layers logo */}
        <svg viewBox="0 0 24 24" className="w-[18px] h-[18px]" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <path d="M12 3l9 5-9 5-9-5 9-5z" />
          <path d="M3 13l9 5 9-5" />
          <path d="M3 17l9 5 9-5" />
        </svg>
        {/* Battery (filled) */}
        <svg viewBox="0 0 26 12" className="w-[24px] h-[12px]" aria-hidden>
          <rect x="0.5" y="0.5" width="22" height="11" rx="2.5" fill="none" stroke="currentColor" strokeWidth="1" />
          <rect x="2" y="2" width="19" height="8" rx="1.2" fill="currentColor" />
          <rect x="23.5" y="4" width="2" height="4" rx="0.6" fill="currentColor" />
        </svg>
        <Wifi className="w-[16px] h-[16px]" strokeWidth={2} />
        <Search className="w-[15px] h-[15px]" strokeWidth={2} />
        {/* Control center */}
        <button
          type="button"
          onClick={onToggleTheme}
          title={isDark ? "Switch to light mode" : "Switch to dark mode"}
          aria-label="Control center"
          className="inline-flex items-center justify-center"
        >
          <svg viewBox="0 0 22 16" className="w-[20px] h-[14px]" aria-hidden>
            <rect x="0.5" y="0.5" width="21" height="6.5" rx="3.25" fill="none" stroke="currentColor" strokeWidth="1" />
            <circle cx="5" cy="3.75" r="1.8" fill="currentColor" />
            <rect x="0.5" y="9" width="21" height="6.5" rx="3.25" fill="none" stroke="currentColor" strokeWidth="1" />
            <circle cx="17" cy="12.25" r="1.8" fill="currentColor" />
          </svg>
        </button>
        {/* Siri orb */}
        <span
          aria-label="Siri"
          className="w-[15px] h-[15px] rounded-full"
          style={{
            background:
              "radial-gradient(circle at 30% 30%, #ffffff 0%, #b5e3ff 18%, #6aa8ff 38%, #8a5cff 60%, #ff5ea8 82%, #ffb86b 100%)",
          }}
        />
        <span className="ml-2 tabular-nums">{stamp}</span>
      </div>
    </div>
  );
}

function StickyNote() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [dragging, setDragging] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const handleMouseDown = (e: React.MouseEvent) => {
    setDragging(true);
    setOffset({ x: e.clientX - pos.x, y: e.clientY - pos.y });
  };

  useEffect(() => {
    if (!dragging) return;
    const onMove = (e: MouseEvent) => setPos({ x: e.clientX - offset.x, y: e.clientY - offset.y });
    const onUp = () => setDragging(false);
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseup", onUp);
    return () => { window.removeEventListener("mousemove", onMove); window.removeEventListener("mouseup", onUp); };
  }, [dragging, offset]);

  return (
    <div
      className="absolute top-20 left-6 z-10 w-[240px] font-sans select-none"
      style={{ filter: "drop-shadow(0 2px 8px rgba(0,0,0,0.25))", transform: `translate(${pos.x}px, ${pos.y}px)` }}
    >
      {/* macOS Stickies title bar — drag handle */}
      <div
        className="h-7 flex items-center justify-between px-2 cursor-move"
        style={{ background: "#e8d84a" }}
        onMouseDown={handleMouseDown}
      >
        <div className="flex gap-[3px] opacity-30">
          <span className="w-[3px] h-[3px] rounded-full bg-black" />
          <span className="w-[3px] h-[3px] rounded-full bg-black" />
          <span className="w-[3px] h-[3px] rounded-full bg-black" />
        </div>
        <div className="flex items-center gap-1.5">
          <span className="w-[13px] h-[13px] border border-black/30 flex items-center justify-center" style={{ background: "#e8d84a" }}>
            <span className="w-[7px] h-px bg-black/50" />
          </span>
          <span className="w-[13px] h-[13px] border border-black/30 flex items-center justify-center" style={{ background: "#e8d84a" }}>
            <span className="w-[7px] h-[7px] border border-black/50" />
          </span>
        </div>
      </div>

      {/* Body */}
      <div
        className="px-4 pt-3 pb-5 text-[12.5px] text-black/80 leading-[1.75]"
        style={{ background: "#fef9a8" }}
      >
        <p className="font-bold text-[13px] text-black mb-1.5">To do:</p>
        <ul className="space-y-0">
          <li className="line-through opacity-35">Learn a new framework</li>
          <li>Land my dream design job</li>
          <li>Drink water (actually)</li>
          <li>Finish that side project</li>
          <li>Build a banger playlist</li>
          <li className="line-through opacity-35">Get good at making pasta</li>
          <li>World domination 🌍</li>
          <li>Travel somewhere new</li>
        </ul>
      </div>
    </div>
  );
}


function PinkStickyNote() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [dragging, setDragging] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const handleMouseDown = (e: React.MouseEvent) => {
    setDragging(true);
    setOffset({ x: e.clientX - pos.x, y: e.clientY - pos.y });
  };

  useEffect(() => {
    if (!dragging) return;
    const onMove = (e: MouseEvent) => setPos({ x: e.clientX - offset.x, y: e.clientY - offset.y });
    const onUp = () => setDragging(false);
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseup", onUp);
    return () => { window.removeEventListener("mousemove", onMove); window.removeEventListener("mouseup", onUp); };
  }, [dragging, offset]);

  return (
    <div
      className="absolute left-6 z-10 w-[280px] font-sans select-none"
      style={{
        top: "calc(80px + 260px)",
        filter: "drop-shadow(0 2px 8px rgba(0,0,0,0.22))",
        transform: `translate(${pos.x}px, ${pos.y}px) rotate(1deg)`,
      }}
    >
      {/* macOS Stickies title bar — pink */}
      <div
        className="h-7 flex items-center justify-between px-2 cursor-move"
        style={{ background: "#f4a0b8" }}
        onMouseDown={handleMouseDown}
      >
        <div className="flex gap-[3px] opacity-30">
          <span className="w-[3px] h-[3px] rounded-full bg-black" />
          <span className="w-[3px] h-[3px] rounded-full bg-black" />
          <span className="w-[3px] h-[3px] rounded-full bg-black" />
        </div>
        <div className="flex items-center gap-1.5">
          <span className="w-[13px] h-[13px] border border-black/25 flex items-center justify-center" style={{ background: "#f4a0b8" }}>
            <span className="w-[7px] h-px bg-black/50" />
          </span>
          <span className="w-[13px] h-[13px] border border-black/25 flex items-center justify-center" style={{ background: "#f4a0b8" }}>
            <span className="w-[7px] h-[7px] border border-black/50" />
          </span>
        </div>
      </div>

      {/* Body */}
      <div
        className="px-4 pt-3 pb-4 text-[12.5px] text-black/80 leading-[1.75]"
        style={{ background: "#ffd6e7" }}
      >
        <p className="font-bold text-[13px] text-black mb-2">Claude Templates 🤖</p>
        <p className="text-[11.5px] text-black/50 uppercase tracking-wide mb-2">Live projects ↓</p>
        <ul className="space-y-1.5">
          <li>
            <a href="https://halcom.netlify.app" target="_blank" rel="noopener noreferrer"
               className="text-[#c0006a] underline underline-offset-2 hover:text-[#e0008a] break-all">
              halcom.netlify.app
            </a>
          </li>
          <li>
            <a href="https://theblooom.netlify.app" target="_blank" rel="noopener noreferrer"
               className="text-[#c0006a] underline underline-offset-2 hover:text-[#e0008a] break-all">
              theblooom.netlify.app
            </a>
          </li>
          <li>
            <a href="https://theauraos.netlify.app" target="_blank" rel="noopener noreferrer"
               className="text-[#c0006a] underline underline-offset-2 hover:text-[#e0008a] break-all">
              theauraos.netlify.app
            </a>
          </li>
          <li className="flex items-start gap-1.5">
            <a href="https://portfoliodesign3d.netlify.app" target="_blank" rel="noopener noreferrer"
               className="text-[#c0006a] underline underline-offset-2 hover:text-[#e0008a] break-all">
              portfoliodesign3d.netlify.app
            </a>
            <span className="shrink-0 text-[10px] bg-[#f4a0b8] text-black/70 px-1 py-0.5 rounded font-medium mt-0.5">
              fav ♥
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}

function DesktopFolder({
  label,
  className,
  variant = "folder",
  labelClassName,
  onClick,
}: {
  label: string;
  className?: string;
  variant?: "folder" | "file" | "trash";
  labelClassName?: string;
  onClick?: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`flex flex-col items-center w-24 h-20 ${className ?? ""}`}
    >
      <div className="h-12 w-full flex items-center justify-center">
        {variant === "folder" && (
          <img src={folderIconAsset.url} alt="" className="w-12 h-12 object-contain" draggable={false} />
        )}
        {variant === "file" && (
          <FileText className="w-12 h-12 text-neutral-400" fill="#fff" strokeWidth={1} />
        )}
        {variant === "trash" && (
          <div className="w-12 h-12 rounded-md bg-neutral-300/60 border border-neutral-400/60 flex items-center justify-center">
            <Trash2 className="w-6 h-6 text-neutral-600" strokeWidth={1.5} />
          </div>
        )}
      </div>
      <span
        className={`h-8 w-full flex items-center justify-center text-[13px] px-1 rounded text-center leading-tight line-clamp-2 ${
          labelClassName ?? "text-black/90 dark:text-white"
        }`}
      >
        {label}
      </span>
    </button>
  );
}

function AboutMeWindow({ onClose }: { onClose: () => void }) {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [dragging, setDragging] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const handleMouseDown = (e: React.MouseEvent) => {
    setDragging(true);
    setOffset({ x: e.clientX - pos.x, y: e.clientY - pos.y });
  };

  useEffect(() => {
    if (!dragging) return;
    const handleMouseMove = (e: MouseEvent) => {
      setPos({ x: e.clientX - offset.x, y: e.clientY - offset.y });
    };
    const handleMouseUp = () => setDragging(false);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [dragging, offset]);

  return (
    <div
      className="absolute top-20 left-1/2 z-40 w-[min(560px,92vw)] bg-white rounded-[20px] border border-black/10 overflow-hidden font-sans cursor-default select-none"
      style={{
        transform: `translate3d(calc(-50% + ${pos.x}px), ${pos.y}px, 0)`,
      }}
    >
      {/* Title bar */}
      <div
        className="relative h-10 flex items-center px-3 border-b border-black/10 bg-gradient-to-b from-white to-neutral-100 cursor-move"
        onMouseDown={handleMouseDown}
      >
        <div className="flex items-center gap-2">
          <button
            onClick={onClose}
            aria-label="Close"
            className="w-3.5 h-3.5 rounded-full bg-[#ff5f57] hover:brightness-90"
          />
          <span className="w-3.5 h-3.5 rounded-full bg-[#febc2e]" />
          <span className="w-3.5 h-3.5 rounded-full bg-[#28c840]" />
        </div>
        <span className="absolute left-1/2 -translate-x-1/2 text-[13px] font-semibold text-black/80">
          aboutme.txt
        </span>
        <div className="ml-auto flex items-center gap-3 text-neutral-400">
          <AlignLeft className="w-4 h-4" />
          <AlignCenter className="w-4 h-4" />
          <AlignRight className="w-4 h-4 text-neutral-700" />
        </div>
      </div>

      {/* Body */}
      <div className="px-10 py-10 text-[13px] leading-[1.55] text-black space-y-5 select-text">
        <p>
          Hi! I&rsquo;m <span className="font-bold">Nikki Aishwarya</span>, a designer with a sharp eye for detail and a soft spot for bold, human-centered ideas. I craft intuitive products and interfaces that simplify complexity&mdash;whether it&rsquo;s streamlining workflows, visualizing data, or making technology feel less&hellip; techy.
        </p>
        <p>
          Currently working as a Senior UI/UX Designer at Programming.com, leading projects focused on creating intuitive, accessible, and visually engaging digital experiences. Collaborating closely with developers and product teams to deliver innovative solutions that enhance user satisfaction.
        </p>
      </div>
    </div>
  );
}

type Testimonial = {
  id: string;
  name: string;
  role: string;
  date: string;
  group: string;
  preview: string;
  body: string[];
};

const TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    name: "Priya Menon",
    role: "Product Manager, Programming.com",
    date: "12 June 2026 at 3:20 PM",
    group: "Previous 7 Days",
    preview: "Nikki has an incredible eye for detail…",
    body: [
      "Nikki has an incredible eye for detail and a rare ability to translate fuzzy product ideas into beautiful, usable interfaces.",
      "Every handoff felt thoughtful—annotated, structured, and ready for engineering. Working with her raised the bar for our whole team.",
    ],
  },
  {
    id: "t2",
    name: "Arjun Rao",
    role: "Engineering Lead",
    date: "9 June 2026 at 11:02 AM",
    group: "Previous 7 Days",
    preview: "One of the most collaborative designers…",
    body: [
      "One of the most collaborative designers I've shipped product with. Nikki sweats the details others miss, but she's also pragmatic when timelines get tight.",
      "Our NPS went up two quarters in a row after her redesign of the onboarding flow.",
    ],
  },
  {
    id: "t3",
    name: "Sara Lin",
    role: "Founder, Northwind Labs",
    date: "22 May 2026 at 6:14 PM",
    group: "Previous 30 Days",
    preview: "She redesigned our dashboard end-to-end…",
    body: [
      "She redesigned our analytics dashboard end-to-end in six weeks. Clean, fast, and—most importantly—our customers actually use it now.",
      "Highly recommend Nikki for anything that needs both craft and clarity.",
    ],
  },
  {
    id: "t4",
    name: "Daniel Becker",
    role: "Design Director, Fintrail",
    date: "4 May 2026 at 9:48 AM",
    group: "Previous 30 Days",
    preview: "Brings systems thinking to every project…",
    body: [
      "Nikki brings real systems thinking to every project. She'll start with one screen and quietly leave you with a token library, motion guidelines, and a happier engineering team.",
      "A genuine multiplier on any design org.",
    ],
  },
  {
    id: "t5",
    name: "Meera Iyer",
    role: "UX Researcher",
    date: "18 April 2026 at 2:30 PM",
    group: "April",
    preview: "Translates research into design beautifully…",
    body: [
      "Nikki is the rare designer who actually reads the research deck. She turns insights into design decisions you can defend in any room.",
    ],
  },
  {
    id: "t6",
    name: "Tom Alvarez",
    role: "CEO, Eato",
    date: "27 November 2025 at 10:11 AM",
    group: "2025",
    preview: "Took our brand from forgettable to iconic…",
    body: [
      "Nikki took our brand from forgettable to iconic in a single sprint. Our app store rating jumped from 3.9 to 4.7 after her redesign.",
      "If you can hire her, hire her.",
    ],
  },
];

function NotesWindow({ onClose }: { onClose: () => void }) {
  const STORAGE_KEY = "notes:lastActiveId";
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [dragging, setDragging] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [query, setQuery] = useState("");
  const [activeId, setActiveId] = useState<string>(TESTIMONIALS[0].id);

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (stored && TESTIMONIALS.some((t) => t.id === stored)) {
        setActiveId(stored);
      }
    } catch {
      /* ignore */
    }
  }, []);

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, activeId);
    } catch {
      /* ignore */
    }
  }, [activeId]);

  const handleMouseDown = (e: React.MouseEvent) => {
    setDragging(true);
    setOffset({ x: e.clientX - pos.x, y: e.clientY - pos.y });
  };

  useEffect(() => {
    if (!dragging) return;
    const move = (e: MouseEvent) => setPos({ x: e.clientX - offset.x, y: e.clientY - offset.y });
    const up = () => setDragging(false);
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseup", up);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseup", up);
    };
  }, [dragging, offset]);

  const q = query.trim().toLowerCase();
  const filtered = q
    ? TESTIMONIALS.filter((t) =>
        [t.name, t.role, t.preview, ...t.body].join(" ").toLowerCase().includes(q),
      )
    : TESTIMONIALS;

  const active =
    filtered.find((t) => t.id === activeId) ??
    TESTIMONIALS.find((t) => t.id === activeId) ??
    filtered[0] ??
    TESTIMONIALS[0];

  const groups = filtered.reduce<Record<string, Testimonial[]>>((acc, t) => {
    (acc[t.group] ||= []).push(t);
    return acc;
  }, {});
  const groupOrder = ["Previous 7 Days", "Previous 30 Days", "April", "2025"].filter(
    (g) => groups[g],
  );

  const PillBtn = ({
    children,
    onClick,
    ariaLabel,
  }: {
    children: React.ReactNode;
    onClick?: () => void;
    ariaLabel?: string;
  }) => (
    <button
      onClick={onClick}
      aria-label={ariaLabel}
      className="w-8 h-8 grid place-items-center rounded-full bg-white border border-black/10 text-black/70 hover:bg-neutral-50"
    >
      {children}
    </button>
  );

  return (
    <div
      className="absolute top-16 left-1/2 z-40 w-[min(960px,94vw)] h-[min(640px,82vh)] bg-white rounded-[20px] border border-black/10 overflow-hidden font-sans cursor-default select-none flex flex-col"
      style={{ transform: `translate3d(calc(-50% + ${pos.x}px), ${pos.y}px, 0)` }}
    >
      {/* Title bar — reference design */}
      <div
        className="relative h-14 flex items-center gap-3 px-3 border-b border-black/10 bg-neutral-100/80 cursor-move shrink-0"
        onMouseDown={handleMouseDown}
      >
        {/* Traffic lights */}
        <div className="flex items-center gap-2 pr-1">
          <button
            onClick={onClose}
            aria-label="Close"
            className="w-3.5 h-3.5 rounded-full bg-[#ff5f57] hover:brightness-90"
          />
          <span className="w-3.5 h-3.5 rounded-full bg-[#febc2e]" />
          <span className="w-3.5 h-3.5 rounded-full bg-[#28c840]" />
        </div>

        {/* Sidebar toggle */}
        <PillBtn ariaLabel="Toggle sidebar">
          <PanelLeft className="w-4 h-4" />
        </PillBtn>

        {/* Title block */}
        <div className="flex flex-col leading-tight min-w-[90px]">
          <span className="text-[13px] font-semibold text-black/85">Notes</span>
          <span className="text-[13px] text-black/50">{TESTIMONIALS.length} notes</span>
        </div>

        {/* More + Compose pill group */}
        <div className="flex items-center gap-2 ml-2">
          <PillBtn ariaLabel="More">
            <MoreHorizontal className="w-4 h-4" />
          </PillBtn>
          <div className="h-5 w-px bg-black/15" />
          <PillBtn ariaLabel="New note">
            <SquarePen className="w-4 h-4" />
          </PillBtn>
        </div>

        {/* Formatting cluster */}
        <div className="flex items-center gap-1 ml-2 px-3 h-8 rounded-full bg-white border border-black/10 text-black/70">
          <CaseSensitive className="w-4 h-4" />
          <span className="w-3" />
          <ListChecks className="w-4 h-4" />
          <span className="w-3" />
          <TableIcon className="w-4 h-4" />
          <span className="w-3" />
          <Paperclip className="w-4 h-4" />
          <span className="w-3" />
          <Sparkles className="w-4 h-4" />
        </div>

        {/* Right cluster */}
        <div className="ml-auto flex items-center gap-2">
          <PillBtn ariaLabel="Share">
            <Upload className="w-4 h-4" />
          </PillBtn>
          <PillBtn ariaLabel="More options">
            <MoreHorizontal className="w-4 h-4" />
          </PillBtn>
          <PillBtn ariaLabel="Search">
            <Search className="w-4 h-4" />
          </PillBtn>
        </div>
      </div>

      {/* Body */}
      <div className="flex flex-1 min-h-0">
        {/* Sidebar */}
        <aside className="w-[280px] border-r border-black/10 bg-neutral-50/80 overflow-y-auto py-3 flex flex-col">
          {/* Search */}
          <div className="px-3 pb-3 shrink-0">
            <div className="flex items-center gap-2 px-2.5 h-8 rounded-md bg-neutral-200/70 border border-black/5">
              <Search className="w-3.5 h-3.5 text-black/50" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search"
                className="flex-1 bg-transparent text-[13px] text-black placeholder:text-black/40 outline-none"
              />
            </div>
          </div>

          {groupOrder.length === 0 && (
            <div className="px-4 text-[13px] text-black/40">No notes found.</div>
          )}

          {groupOrder.map((g) => (
            <div key={g} className="mb-4">
              <div className="px-4 pb-1 text-[13px] font-bold text-black/90">{g}</div>
              <div className="border-t border-black/10 mx-3" />
              <ul className="mt-1">
                {groups[g].map((t) => {
                  const isActive = t.id === activeId;
                  return (
                    <li key={t.id}>
                      <button
                        onClick={() => setActiveId(t.id)}
                        className={`w-full text-left px-3 py-2 mx-1 rounded-md transition-colors ${
                          isActive ? "bg-neutral-300/70" : "hover:bg-neutral-200/60"
                        }`}
                      >
                        <div className="text-[13px] font-semibold text-black truncate">
                          {t.name}
                        </div>
                        <div className="text-[13px] text-black/60 truncate">
                          <span className="text-black/80 mr-1">{t.role.split(",")[0]}</span>
                          {t.preview}
                        </div>
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </aside>

        {/* Detail */}
        <section className="flex-1 overflow-y-auto px-12 py-10 select-text">
          <div className="text-center text-[13px] text-black/50 mb-6">{active.date}</div>
          <h2 className="text-[13px] font-bold text-black mb-1">{active.name}</h2>
          <p className="text-[13px] text-black/60 mb-6">{active.role}</p>
          <div className="space-y-4 text-[13px] leading-[1.6] text-black">
            {active.body.map((p, i) => (
              <p key={i}>&ldquo;{p}&rdquo;</p>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

function MailWindow({ onClose }: { onClose: () => void }) {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [dragging, setDragging] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [from, setFrom] = useState("");
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const RECIPIENT = "bnikkiaishwarya@gmail.com";

  const handleMouseDown = (e: React.MouseEvent) => {
    setDragging(true);
    setOffset({ x: e.clientX - pos.x, y: e.clientY - pos.y });
  };

  useEffect(() => {
    if (!dragging) return;
    const mm = (e: MouseEvent) => setPos({ x: e.clientX - offset.x, y: e.clientY - offset.y });
    const mu = () => setDragging(false);
    window.addEventListener("mousemove", mm);
    window.addEventListener("mouseup", mu);
    return () => {
      window.removeEventListener("mousemove", mm);
      window.removeEventListener("mouseup", mu);
    };
  }, [dragging, offset]);

  const handleSend = async () => {
    if (!subject.trim() && !body.trim()) return;
    setStatus("sending");
    try {
      const fd = new FormData();
      fd.append("_subject", subject || "(no subject)");
      fd.append("message", body);
      if (from.trim()) fd.append("_replyto", from.trim());
      fd.append("_captcha", "false");
      fd.append("_template", "table");
      const res = await fetch(`https://formsubmit.co/ajax/${RECIPIENT}`, {
        method: "POST",
        body: fd,
      });
      if (!res.ok) throw new Error("Failed");
      setStatus("sent");
      setFrom("");
      setSubject("");
      setBody("");
      setTimeout(() => {
        setStatus("idle");
        onClose();
      }, 1400);
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 2000);
    }
  };

  const sending = status === "sending";
  const sent = status === "sent";
  const error = status === "error";

  return (
    <div
      className="absolute top-16 left-1/2 z-40 w-[min(720px,94vw)] bg-white rounded-[20px] border border-black/10 overflow-hidden font-sans select-none"
      style={{ transform: `translate3d(calc(-50% + ${pos.x}px), ${pos.y}px, 0)` }}
    >
      {/* Title bar */}
      <div
        className="relative h-11 flex items-center px-3 border-b border-black/10 bg-gradient-to-b from-neutral-50 to-neutral-100 cursor-move"
        onMouseDown={handleMouseDown}
      >
        <div className="flex items-center gap-2">
          <button onClick={onClose} aria-label="Close" className="w-3.5 h-3.5 rounded-full bg-[#ff5f57] hover:brightness-90" />
          <span className="w-3.5 h-3.5 rounded-full bg-[#febc2e]" />
          <span className="w-3.5 h-3.5 rounded-full bg-[#28c840]" />
        </div>
        <span className="absolute left-1/2 -translate-x-1/2 text-[13px] font-semibold text-black/80">
          New Message
        </span>
        <button
          onClick={handleSend}
          className="ml-auto px-3 py-1 rounded-full bg-blue-500 hover:bg-blue-600 text-white text-[13px] font-semibold disabled:opacity-50"
          disabled={sending || sent}
        >
          {sent ? "Sent ✓" : sending ? "Sending…" : error ? "Retry" : "Send"}
        </button>
      </div>

      {/* Success banner */}
      {sent && (
        <div className="px-5 py-2.5 bg-green-50 border-b border-green-200 flex items-center gap-2">
          <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center">
            <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <span className="text-[13px] text-green-700 font-medium">Message sent successfully!</span>
        </div>
      )}

      {/* Error banner */}
      {error && (
        <div className="px-5 py-2.5 bg-red-50 border-b border-red-200 flex items-center gap-2">
          <div className="w-5 h-5 rounded-full bg-red-500 flex items-center justify-center">
            <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </div>
          <span className="text-[13px] text-red-700 font-medium">Failed to send. Please check your connection and retry.</span>
        </div>
      )}

      {/* From */}
      <div className="px-5 pt-3 text-[13px] text-black border-b border-black/10">
        <div className="flex items-center gap-3 py-2">
          <span className="w-16 text-neutral-500">From:</span>
          <input
            type="email"
            value={from}
            onChange={(e) => setFrom(e.target.value)}
            placeholder="your@email.com"
            className="flex-1 bg-transparent outline-none"
          />
        </div>
      </div>

      {/* Subject */}
      <div className="px-5 text-[13px] text-black border-b border-black/10">
        <div className="flex items-center gap-3 py-2">
          <span className="w-16 text-neutral-500">Subject:</span>
          <input
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            placeholder="Subject"
            className="flex-1 bg-transparent outline-none"
          />
        </div>
      </div>

      {/* Body */}
      <div className="px-5 py-4">
        <textarea
          value={body}
          onChange={(e) => setBody(e.target.value)}
          placeholder="Write your message…"
          className="w-full h-72 resize-none bg-transparent outline-none text-[13px] leading-relaxed text-black"
        />
      </div>
    </div>
  );
}

type TicBoard = (null | "X" | "O")[];

function checkWinner(b: TicBoard): "X" | "O" | "draw" | null {
  const lines = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
  for (const [a, bb, c] of lines) {
    if (b[a] && b[a] === b[bb] && b[a] === b[c]) return b[a] as "X" | "O";
  }
  if (b.every(Boolean)) return "draw";
  return null;
}

function bestMove(b: TicBoard, mark: "X" | "O"): number {
  const opp: "X" | "O" = mark === "O" ? "X" : "O";
  const empty = b.map((v, i) => v === null ? i : -1).filter(i => i >= 0);
  // win
  for (const i of empty) { const t = [...b]; t[i] = mark; if (checkWinner(t) === mark) return i; }
  // block
  for (const i of empty) { const t = [...b]; t[i] = opp; if (checkWinner(t) === opp) return i; }
  // center
  if (b[4] === null) return 4;
  // corner
  const corners = [0, 2, 6, 8].filter(i => b[i] === null);
  if (corners.length) return corners[Math.floor(Math.random() * corners.length)];
  return empty[Math.floor(Math.random() * empty.length)];
}

function TicTacToe() {
  const [board, setBoard] = useState<TicBoard>(Array(9).fill(null));
  const [thinking, setThinking] = useState(false);
  const winner = checkWinner(board);
  const playerTurn = board.filter(Boolean).length % 2 === 0 && !winner;

  const handleClick = (i: number) => {
    if (board[i] || winner || thinking) return;
    const next = [...board];
    next[i] = "X";
    setBoard(next);
    const w = checkWinner(next);
    if (w || next.every(Boolean)) return;
    setThinking(true);
    setTimeout(() => {
      const move = bestMove(next, "O");
      const after = [...next];
      after[move] = "O";
      setBoard(after);
      setThinking(false);
    }, 420);
  };

  const reset = () => { setBoard(Array(9).fill(null)); setThinking(false); };

  const lines = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
  const winLine = lines.find(([a, b, c]) => board[a] && board[a] === board[b] && board[a] === board[c]);

  const statusMsg = winner === "draw"
    ? "It's a draw! 🤝"
    : winner === "X"
    ? "You win! 🎉"
    : winner === "O"
    ? "I win! 🤖"
    : thinking
    ? "Thinking…"
    : playerTurn
    ? "Your turn — you're X"
    : "";

  return (
    <div className="flex flex-col items-center gap-6 py-10 px-8 select-none">
      <div className="text-center">
        <h1 className="text-2xl font-bold text-neutral-800 mb-1">Tic-Tac-Toe</h1>
        <p className="text-[13px] text-neutral-500">You are <span className="font-semibold text-neutral-700">X</span> · Computer is <span className="font-semibold text-neutral-700">O</span></p>
      </div>

      {/* Status */}
      <div className="h-7 flex items-center">
        <span className={`text-[14px] font-medium transition-all ${winner === "X" ? "text-green-600" : winner === "O" ? "text-red-500" : winner === "draw" ? "text-neutral-500" : "text-neutral-600"}`}>
          {statusMsg}
        </span>
      </div>

      {/* Board */}
      <div className="relative grid grid-cols-3 gap-2">
        {board.map((cell, i) => {
          const isWinCell = winLine?.includes(i);
          return (
            <button
              key={i}
              onClick={() => handleClick(i)}
              disabled={!!cell || !!winner || thinking}
              className={`w-20 h-20 rounded-xl text-3xl font-bold transition-all flex items-center justify-center
                ${!cell && !winner && !thinking ? "hover:bg-neutral-200 cursor-pointer" : "cursor-default"}
                ${isWinCell ? (winner === "X" ? "bg-green-100 text-green-600" : "bg-red-100 text-red-500") : "bg-white border border-neutral-200 text-neutral-800"}
              `}
            >
              {cell}
            </button>
          );
        })}
      </div>

      {/* Restart */}
      <button
        onClick={reset}
        className="mt-2 px-5 py-2 rounded-lg bg-neutral-800 text-white text-[13px] font-medium hover:bg-neutral-700 active:scale-95 transition-all"
      >
        New Game
      </button>
    </div>
  );
}

function SafariWindow({ onClose }: { onClose: () => void }) {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [dragging, setDragging] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const handleMouseDown = (e: React.MouseEvent) => {
    setDragging(true);
    setOffset({ x: e.clientX - pos.x, y: e.clientY - pos.y });
  };

  useEffect(() => {
    if (!dragging) return;
    const mm = (e: MouseEvent) => setPos({ x: e.clientX - offset.x, y: e.clientY - offset.y });
    const mu = () => setDragging(false);
    window.addEventListener("mousemove", mm);
    window.addEventListener("mouseup", mu);
    return () => {
      window.removeEventListener("mousemove", mm);
      window.removeEventListener("mouseup", mu);
    };
  }, [dragging, offset]);

  return (
    <div
      className="absolute top-12 left-1/2 z-40 w-[min(900px,94vw)] h-[min(600px,80vh)] bg-[#f6f6f6] rounded-[20px] border border-black/10 overflow-hidden font-sans select-none flex flex-col"
      style={{ transform: `translate3d(calc(-50% + ${pos.x}px), ${pos.y}px, 0)` }}
    >
      {/* Title bar */}
      <div
        className="relative h-10 flex items-center px-3 border-b border-black/10 bg-[#e8e8e8] cursor-move"
        onMouseDown={handleMouseDown}
      >
        <div className="flex items-center gap-2">
          <button onClick={onClose} aria-label="Close" className="w-3.5 h-3.5 rounded-full bg-[#ff5f57] hover:brightness-90" />
          <span className="w-3.5 h-3.5 rounded-full bg-[#febc2e]" />
          <span className="w-3.5 h-3.5 rounded-full bg-[#28c840]" />
        </div>
      </div>

      {/* Toolbar */}
      <div className="h-10 flex items-center px-3 gap-3 bg-[#f6f6f6] border-b border-black/10">
        <div className="flex items-center gap-1">
          <button className="p-1 rounded hover:bg-black/10"><ChevronLeft className="w-4 h-4 text-black/60" /></button>
          <button className="p-1 rounded hover:bg-black/10"><ChevronRight className="w-4 h-4 text-black/30" /></button>
        </div>
        <div className="flex items-center gap-2 flex-1 max-w-lg mx-auto bg-[#e3e3e3] rounded-lg px-3 py-1.5 text-[13px] text-black/70">
          <Shield className="w-3.5 h-3.5 text-black/40" />
          <span className="flex-1 text-center">arcade.nikki.design</span>
          <RefreshCw className="w-3.5 h-3.5 text-black/40" />
        </div>
        <div className="flex items-center gap-1">
          <button className="p-1 rounded hover:bg-black/10"><Share className="w-4 h-4 text-black/60" /></button>
          <button className="p-1 rounded hover:bg-black/10 text-black/60 text-[13px] leading-none">+</button>
          <button className="p-1 rounded hover:bg-black/10"><LayoutGrid className="w-4 h-4 text-black/60" /></button>
        </div>
      </div>

      {/* Tab bar */}
      <div className="h-8 flex items-center px-3 bg-[#f6f6f6] border-b border-black/10">
        <div className="flex items-center gap-2 bg-white rounded-t-md px-3 py-1 border-t border-x border-black/10 -mb-[1px] text-[13px] text-black/80">
          <div className="w-4 h-4 rounded-full bg-neutral-700 flex items-center justify-center text-[8px] text-white font-bold">✕○</div>
          Tic-Tac-Toe
        </div>
        <div className="ml-auto flex items-center gap-1 text-[13px] text-neutral-500 px-2">
          <Star className="w-3 h-3" /> Start Page
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto bg-white flex items-center justify-center">
        <TicTacToe />
      </div>
    </div>
  );
}

function ChromeWindow({ onClose }: { onClose: () => void }) {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [dragging, setDragging] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const handleMouseDown = (e: React.MouseEvent) => {
    setDragging(true);
    setOffset({ x: e.clientX - pos.x, y: e.clientY - pos.y });
  };

  useEffect(() => {
    if (!dragging) return;
    const mm = (e: MouseEvent) => setPos({ x: e.clientX - offset.x, y: e.clientY - offset.y });
    const mu = () => setDragging(false);
    window.addEventListener("mousemove", mm);
    window.addEventListener("mouseup", mu);
    return () => {
      window.removeEventListener("mousemove", mm);
      window.removeEventListener("mouseup", mu);
    };
  }, [dragging, offset]);

  return (
    <div
      className="absolute top-10 left-1/2 z-40 w-[min(960px,95vw)] h-[min(680px,85vh)] bg-white rounded-[20px] border border-black/10 overflow-hidden font-sans select-none flex flex-col"
      style={{ transform: `translate3d(calc(-50% + ${pos.x}px), ${pos.y}px, 0)` }}
    >
      {/* Title bar / tab strip */}
      <div
        className="relative h-10 flex items-center px-2 bg-[#dfe1e5] cursor-move"
        onMouseDown={handleMouseDown}
      >
        <div className="flex items-center gap-2 pr-3">
          <button onClick={onClose} aria-label="Close" className="w-3.5 h-3.5 rounded-full bg-[#ff5f57] hover:brightness-90" />
          <span className="w-3.5 h-3.5 rounded-full bg-[#febc2e]" />
          <span className="w-3.5 h-3.5 rounded-full bg-[#28c840]" />
        </div>
        <div className="flex items-center gap-1 bg-white rounded-t-lg px-3 py-1.5 border-t border-x border-black/10 -mb-[1px] text-[13px] text-black/80 min-w-[180px]">
          <div className="w-3.5 h-3.5 rounded-full bg-neutral-300 flex items-center justify-center text-[13px] text-white font-bold">?</div>
          <span className="truncate max-w-[140px]">Error 404 (Not Found)</span>
          <button onClick={onClose} className="ml-1 text-neutral-400 hover:text-black text-[13px]">×</button>
        </div>
        <div className="ml-2 text-[13px] text-neutral-400 leading-none">+</div>
      </div>

      {/* Address bar */}
      <div className="h-9 flex items-center px-3 gap-2 bg-[#f1f3f4] border-b border-black/10">
        <div className="flex items-center gap-1 text-black/40">
          <ChevronLeft className="w-4 h-4" />
          <ChevronRight className="w-4 h-4" />
          <RefreshCw className="w-3.5 h-3.5" />
        </div>
        <div className="flex items-center gap-2 flex-1 bg-white rounded-full px-3 py-1 text-[13px] text-black/70 border border-black/10">
          <Shield className="w-3.5 h-3.5 text-[#1e8e3e]" />
          <span className="flex-1 text-center truncate">b3multimedia.ie/how-to-customize-404-error-page/</span>
          <Star className="w-3.5 h-3.5 text-black/30" />
        </div>
        <div className="flex items-center gap-1 text-black/40">
          <Share className="w-4 h-4" />
          <LayoutGrid className="w-4 h-4" />
          <MoreHorizontal className="w-4 h-4" />
        </div>
      </div>

      {/* Browser viewport — 404 page */}
      <div className="flex-1 overflow-auto bg-[#a8d8ea] relative">
        <div className="max-w-4xl mx-auto px-8 py-10 min-h-full flex flex-col items-center">
          {/* Social icons */}
          <div className="flex items-center gap-3 self-start mb-8">
            <div className="w-10 h-10 rounded-full bg-[#3b5998] flex items-center justify-center text-white text-[13px] font-bold">f</div>
            <div className="w-10 h-10 rounded-full bg-[#1da1f2] flex items-center justify-center text-white">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </div>
            <div className="w-10 h-10 rounded-full bg-[#bd081c] flex items-center justify-center text-white">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.361-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z"/></svg>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-10 w-full">
            {/* Text content */}
            <div className="flex flex-col items-start gap-4 max-w-md">
              <h1 className="text-[13px] font-bold text-[#2c3e50] leading-none">Oops!</h1>
              <h2 className="text-[13px] text-[#00bcd4] font-medium">Where are we?</h2>
              <p className="text-[13px] text-[#546e7a] leading-relaxed">
                The page you are looking for was moved, removed, renamed or might never existed.
              </p>
              <button
                onClick={onClose}
                className="px-6 py-2.5 bg-[#00a8e8] hover:bg-[#0097d1] text-white text-[13px] font-medium rounded transition-colors"
              >
                Go Home
              </button>
            </div>

            {/* Illustration */}
            <div className="flex-shrink-0 max-w-md w-full">
              <img
                src={polarBear404.url}
                alt="Sleeping polar bear with penguins illustration"
                className="w-full h-auto object-contain"
                width={1024}
                height={768}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function PreviewWindow({ onClose }: { onClose: () => void }) {
  const pages = [resumePage1.url, resumePage2.url];
  const resumeDownloadUrl = "/api/public/download-resume";
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [dragging, setDragging] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [loadedCount, setLoadedCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [printMode, setPrintMode] = useState(false);
  const [thumbnailsOpen, setThumbnailsOpen] = useState(true);
  const allLoaded = loadedCount >= pages.length;
  const pageRefs = useRef<(HTMLImageElement | null)[]>([]);
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const handleMouseDown = (e: React.MouseEvent) => {
    setDragging(true);
    setOffset({ x: e.clientX - pos.x, y: e.clientY - pos.y });
  };

  useEffect(() => {
    if (!dragging) return;
    const mm = (e: MouseEvent) => setPos({ x: e.clientX - offset.x, y: e.clientY - offset.y });
    const mu = () => setDragging(false);
    window.addEventListener("mousemove", mm);
    window.addEventListener("mouseup", mu);
    return () => {
      window.removeEventListener("mousemove", mm);
      window.removeEventListener("mouseup", mu);
    };
  }, [dragging, offset]);

  useEffect(() => {
    if (!printMode) return;
    const resetPrintMode = () => setPrintMode(false);
    window.addEventListener("afterprint", resetPrintMode);
    return () => window.removeEventListener("afterprint", resetPrintMode);
  }, [printMode]);

  const scrollToPage = (idx: number) => {
    pageRefs.current[idx]?.scrollIntoView({ behavior: "smooth", block: "start" });
    setCurrentPage(idx + 1);
  };

  const onScroll = () => {
    const container = scrollRef.current;
    if (!container) return;
    const containerTop = container.getBoundingClientRect().top;
    let active = 1;
    pageRefs.current.forEach((el, idx) => {
      if (!el) return;
      const top = el.getBoundingClientRect().top - containerTop;
      if (top <= 80) active = idx + 1;
    });
    setCurrentPage(active);
  };

  const handlePrint = () => {
    setPrintMode(true);
    requestAnimationFrame(() => requestAnimationFrame(() => window.print()));
  };

  const ToolbarIcon = ({ children, onClick, title }: { children: React.ReactNode; onClick?: () => void; title?: string }) => (
    <button onClick={onClick} title={title} className="w-8 h-8 flex items-center justify-center rounded-md text-white/95 hover:bg-white/15 transition-colors">
      {children}
    </button>
  );

  return (
    <>
      {printMode && (
        <>
          <style>{`
            @media print {
              body * { visibility: hidden !important; }
              .resume-print-area, .resume-print-area * { visibility: visible !important; }
              .resume-print-area { position: absolute !important; inset: 0 auto auto 0 !important; width: 100% !important; background: white !important; }
              .resume-print-page { break-after: page; page-break-after: always; margin: 0 !important; }
              .resume-print-page:last-child { break-after: auto; page-break-after: auto; }
              .resume-print-page img { display: block !important; width: 100% !important; height: auto !important; box-: none !important; }
            }
          `}</style>
          <div className="resume-print-area fixed left-[-9999px] top-0 bg-white">
            {pages.map((url, idx) => (
              <div key={idx} className="resume-print-page">
                <img src={url} alt={`Resume page ${idx + 1}`} />
              </div>
            ))}
          </div>
        </>
      )}
      <div
        className="absolute top-8 left-1/2 z-40 w-[min(1200px,96vw)] h-[min(820px,94vh)] bg-[#ededed] rounded-[20px] ring-1 ring-black/10 overflow-hidden font-sans select-none flex flex-col"
        style={{ transform: `translate3d(calc(-50% + ${pos.x}px), ${pos.y}px, 0)` }}
      >
        {/* macOS Preview-style title bar */}
        <div
          className="h-14 flex items-center px-4 gap-3 bg-gradient-to-b from-[#f5f5f5] to-[#e6e6e6] border-b border-black/10 cursor-move shrink-0"
          onMouseDown={handleMouseDown}
        >
          {/* Traffic lights */}
          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              aria-label="Close"
              className="w-3 h-3 rounded-full bg-[#ff5f57] ring-1 ring-black/10 hover:brightness-95"
            />
            <span className="w-3 h-3 rounded-full bg-[#febc2e] ring-1 ring-black/10" />
            <span className="w-3 h-3 rounded-full bg-[#28c840] ring-1 ring-black/10" />
          </div>

          {/* Sidebar toggle */}
          <button
            onClick={() => setThumbnailsOpen((v) => !v)}
            className={`ml-3 flex items-center justify-center w-9 h-7 rounded-md ring-1 ring-black/10 text-black/60 transition-colors ${thumbnailsOpen ? "bg-white" : "bg-white/70 hover:bg-white"}`}
            aria-label="Toggle thumbnails"
            title="Toggle thumbnails"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M9 5v14"/></svg>
          </button>

          {/* Title block */}
          <div className="flex-1 flex flex-col items-center justify-center min-w-0 px-2 pointer-events-none">
            <span className="text-[13px] font-semibold text-black/80 truncate max-w-full">
              Nikki_Aishwarya_Bhaskaran.pdf
            </span>
            <span className="text-[13px] text-black/50 mt-0.5">
              Page {currentPage} of {pages.length}
            </span>
          </div>

          {/* Zoom group */}
          <div className="flex items-center gap-1 bg-white/70 ring-1 ring-black/10 rounded-md px-1 h-7 text-black/60">
            <span className="px-1.5 text-[13px]">🔍−</span>
            <span className="w-px h-4 bg-black/10" />
            <span className="px-1.5 text-[13px]">🔍</span>
            <span className="w-px h-4 bg-black/10" />
            <span className="px-1.5 text-[13px]">🔍+</span>
          </div>

          {/* Markup / rotate */}
          <div className="hidden sm:flex items-center gap-1 ml-1">
            <span className="flex items-center justify-center w-7 h-7 rounded-md bg-white/70 ring-1 ring-black/10 text-black/60 text-[13px]">✎</span>
            <span className="flex items-center justify-center w-7 h-7 rounded-md bg-white/70 ring-1 ring-black/10 text-black/60 text-[13px]">↺</span>
          </div>

          {/* Annotate (green) */}
          <span className="flex items-center justify-center w-8 h-7 rounded-md bg-[#34c759] text-white">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 1 1 3 3L7 19l-4 1 1-4 12.5-12.5z"/></svg>
          </span>

          {/* Print */}
          <button
            onClick={handlePrint}
            aria-label="Print"
            title="Print PDF"
            className="flex items-center justify-center w-8 h-7 rounded-md bg-white/70 ring-1 ring-black/10 text-black/60 hover:bg-white"
          >
            <Printer className="w-[14px] h-[14px]" />
          </button>

          {/* Download */}
          <a
            href={resumeDownloadUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Download"
            title="Download PDF"
            className="flex items-center justify-center w-8 h-7 rounded-md bg-white/70 ring-1 ring-black/10 text-black/60 hover:bg-white"
          >
            <Download className="w-[14px] h-[14px]" />
          </a>

          {/* Search */}
          <div className="hidden md:flex items-center gap-1.5 h-7 px-2 rounded-md bg-white/70 ring-1 ring-black/10 text-black/40 text-[13px] w-44">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg>
            Search
          </div>
        </div>

        {/* Body */}
        <div className="flex-1 flex overflow-hidden">
          {thumbnailsOpen && (
            <div className="w-44 bg-[#e2e2e2] border-r border-black/10 overflow-y-auto p-2 flex flex-col gap-2 shrink-0">
              {pages.map((url, idx) => (
                <button
                  key={idx}
                  onClick={() => scrollToPage(idx)}
                  className={`group flex flex-col items-center gap-1 p-1.5 rounded-lg transition-colors ${
                    currentPage === idx + 1 ? "bg-white/80" : "hover:bg-white/60"
                  }`}
                >
                  <img
                    src={url}
                    alt={`Page ${idx + 1}`}
                    className={`w-full rounded bg-white ${
                      currentPage === idx + 1 ? "ring-2 ring-[#4caf50]" : ""
                    }`}
                    draggable={false}
                    loading="lazy"
                  />
                  <span className={`text-[13px] ${currentPage === idx + 1 ? "text-black/80 font-medium" : "text-black/50 group-hover:text-black/80"}`}>
                    {idx + 1}
                  </span>
                </button>
              ))}
            </div>
          )}

          {/* Main viewer */}
          <div
            ref={scrollRef}
            onScroll={onScroll}
            className="flex-1 overflow-auto bg-[#ededed] px-6 py-6 relative"
          >
            {!allLoaded && (
              <div className="absolute inset-0 flex flex-col items-center justify-center z-10 bg-[#ededed]">
                <Loader className="w-8 h-8 text-neutral-600 animate-spin mb-3" />
                <span className="text-[13px] text-neutral-700">Loading resume…</span>
              </div>
            )}
            <div className="flex flex-col items-center gap-6">
              {pages.map((url, idx) => (
                <img
                  key={idx}
                  ref={(el) => { pageRefs.current[idx] = el; }}
                  src={url}
                  alt={`Resume page ${idx + 1}`}
                  className="mx-auto block w-full max-w-[1000px] bg-white)]"
                  draggable={false}
                  onLoad={() => setLoadedCount((c) => c + 1)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

type ProjectKey = "Project 01" | "Project 02" | "Project 03" | "Project 04";

const PROJECTS: Record<ProjectKey, { title: string; subtitle: string; caseStudyUrl: string; videoFile: string }> = {
  "Project 01": {
    title: "Lumen (Project 01)",
    subtitle: "Smart Lighting Companion App",
    caseStudyUrl: "https://www.figma.com/",
    videoFile: "lumen.mov",
  },
  "Project 02": {
    title: "Simplingo (Project 02)",
    subtitle: "Gen AI Language Modifier Tool",
    caseStudyUrl: "https://www.figma.com/",
    videoFile: "simplingo.mov",
  },
  "Project 03": {
    title: "Wayfarer (Project 03)",
    subtitle: "Travel Itinerary Planner",
    caseStudyUrl: "https://www.figma.com/",
    videoFile: "wayfarer.mov",
  },
  "Project 04": {
    title: "Cadence (Project 04)",
    subtitle: "Daily Habits & Wellness Tracker",
    caseStudyUrl: "https://www.figma.com/",
    videoFile: "cadence.mov",
  },
};

function ProjectWindow({ initial, onClose }: { initial: ProjectKey; onClose: () => void }) {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [dragging, setDragging] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [active, setActive] = useState<ProjectKey>(initial);

  const handleMouseDown = (e: React.MouseEvent) => {
    setDragging(true);
    setOffset({ x: e.clientX - pos.x, y: e.clientY - pos.y });
  };

  useEffect(() => {
    if (!dragging) return;
    const onMove = (e: MouseEvent) => setPos({ x: e.clientX - offset.x, y: e.clientY - offset.y });
    const onUp = () => setDragging(false);
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseup", onUp);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseup", onUp);
    };
  }, [dragging, offset]);

  const project = PROJECTS[active];
  const projectKeys = Object.keys(PROJECTS) as ProjectKey[];

  return (
    <div
      className="absolute top-12 left-1/2 z-50 w-[min(1000px,94vw)] h-[min(620px,84vh)] bg-white rounded-[20px] border border-black/10 overflow-hidden font-sans select-none flex"
      style={{ transform: `translate3d(calc(-50% + ${pos.x}px), ${pos.y}px, 0)` }}
    >
      {/* Sidebar */}
      <div className="w-56 bg-[#eef2f5] border-r border-black/10 flex flex-col">
        <div
          className="h-11 flex items-center px-3 gap-2 cursor-move border-b border-black/5"
          onMouseDown={handleMouseDown}
        >
          <button onClick={onClose} aria-label="Close" className="w-3 h-3 rounded-full bg-[#ff5f57] hover:brightness-90" />
          <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
          <span className="w-3 h-3 rounded-full bg-[#28c840]" />
        </div>
        <div className="flex-1 overflow-y-auto px-2 py-3 text-[13px] text-black/80">
          <p className="text-[13px] uppercase tracking-wide text-black/40 mt-1 mb-1 px-2">Section Header</p>
          {["Work", "About Me", "Resume", "Trash"].map((label) => (
            <div key={label} className="flex items-center gap-2 px-2 py-1.5 rounded hover:bg-black/5">
              <AlignLeft className="w-4 h-4 text-black/60" /> {label}
            </div>
          ))}
          <p className="text-[13px] uppercase tracking-wide text-black/40 mt-4 mb-1 px-2">Section Header</p>
          {projectKeys.map((p) => (
            <button
              key={p}
              onClick={() => setActive(p)}
              className={`w-full text-left flex items-center gap-2 px-2 py-1.5 rounded ${active === p ? "bg-black/10 font-medium" : "hover:bg-black/5"}`}
            >
              <AlignLeft className="w-4 h-4 text-black/60" /> {p}
            </button>
          ))}
        </div>
      </div>

      {/* Main area */}
      <div className="flex-1 flex flex-col bg-white">
        <div
          className="px-8 py-5 border-b border-black/10 cursor-move"
          onMouseDown={handleMouseDown}
        >
          <h2 className="text-[13px] font-bold text-black/90 leading-tight">{project.title}</h2>
          <p className="text-[13px] text-black/55">{project.subtitle}</p>
        </div>

        <div className="flex-1 overflow-y-auto p-10">
          <div className="flex flex-wrap gap-x-16 gap-y-10">
            <button
              onClick={() => window.open(project.caseStudyUrl, "_blank", "noopener,noreferrer")}
              className="flex flex-col items-center gap-2 w-32"
              title="Open in Safari"
            >
              <img src={folderIconAsset.url} alt="" className="w-12 h-12 object-contain" draggable={false} />
              <span className="text-[13px] text-black/85 text-center leading-tight rounded px-1">
                Full case study.fig
              </span>
            </button>

            <div className="flex flex-col items-center gap-2 w-32 mt-10">
              <div className="w-16 h-20 bg-white border border-black/15 rounded-sm flex items-center justify-center text-[13px] text-black/40 p-1 text-center leading-tight overflow-hidden">
                <span>Here&rsquo;s the gist. Short summary of the project.</span>
              </div>
              <span className="text-[13px] text-black/85 text-center leading-tight px-1">
                TL;DR.txt
              </span>
            </div>

            <div className="flex flex-col items-center gap-2 w-32">
              <div className="w-24 h-24 rounded-2xl bg-gradient-to-b from-neutral-700 to-neutral-900 flex items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-white/95 flex items-center justify-center">
                  <div className="w-0 h-0 border-y-[7px] border-y-transparent border-l-[10px] border-l-neutral-700 ml-1" />
                </div>
              </div>
              <span className="text-[13px] text-black/85 text-center leading-tight px-1">
                {project.videoFile}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const FOLDER_CASE_STUDIES: Record<string, { pdf: string; thumb: string; pages?: string[] }> = {
  "Expense Tracker": {
    pdf: "/case-studies/expense-tracker.pdf",
    thumb: "/case-studies/thumbs/expense-tracker.jpg",
    pages: ["/assets/expense-tracker-page-1.png"],
  },
  "The Mind": {
    pdf: "/case-studies/the-mind.pdf",
    thumb: "/case-studies/thumbs/the-mind.jpg",
    pages: ["/assets/the-mind-page-1.png"],
  },

  "VisaProcess": {
    pdf: "/case-studies/visa-process.pdf",
    thumb: "/case-studies/thumbs/visa-process.jpg",
    pages: ["/assets/visa-process-page-1.png"],
  },
  "Eato": { pdf: "/case-studies/eato.pdf", thumb: "/case-studies/thumbs/eato.jpg", pages: ["/assets/eato-page-1.png"] },
  "Nexus AI": { pdf: "/case-studies/nexus-ai.pdf", thumb: "/case-studies/thumbs/nexus-ai.jpg", pages: ["/assets/nexus-ai-page-1.png"] },

};

function FinderWindow({ onClose, initialFolder = null }: { onClose: () => void; initialFolder?: string | null }) {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [dragging, setDragging] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [openFolder, setOpenFolder] = useState<string | null>(initialFolder);
  const [pdfViewer, setPdfViewer] = useState<{ url: string; name: string; pages?: string[] } | null>(null);

  const handleMouseDown = (e: React.MouseEvent) => {
    setDragging(true);
    setOffset({ x: e.clientX - pos.x, y: e.clientY - pos.y });
  };

  useEffect(() => {
    if (!dragging) return;
    const onMove = (e: MouseEvent) => setPos({ x: e.clientX - offset.x, y: e.clientY - offset.y });
    const onUp = () => setDragging(false);
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseup", onUp);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseup", onUp);
    };
  }, [dragging, offset]);

  const folders = Object.keys(FOLDER_CASE_STUDIES);
  const sidebar = [
    { icon: Clock, label: "Recents" },
    { icon: Users, label: "Shared" },
  ];
  const favourites = [
    { icon: FileText, label: "Documents" },
    { icon: Monitor, label: "Desktop" },
    { icon: AppWindow, label: "Applications" },
    { icon: Download, label: "Downloads", active: true },
  ];
  const tags = [
    { color: "#ef4444", label: "Red" },
    { color: "#f97316", label: "Orange" },
    { color: "#eab308", label: "Yellow" },
  ];

  const headerTitle = openFolder ?? "Downloads";

  return (
    <div
      className="absolute top-16 left-1/2 z-40 w-[min(900px,94vw)] h-[min(560px,80vh)] bg-white text-black/90 rounded-[20px] border border-black/10 overflow-hidden font-sans select-none flex"
      style={{ transform: `translate3d(calc(-50% + ${pos.x}px), ${pos.y}px, 0)` }}
    >
      {/* Sidebar */}
      <div className="w-56 bg-[#f0f0f0] border-r border-black/10 flex flex-col">
        <div
          className="h-11 flex items-center px-3 gap-2 cursor-move border-b border-black/5"
          onMouseDown={handleMouseDown}
        >
          <button onClick={onClose} aria-label="Close" className="w-3 h-3 rounded-full bg-[#ff5f57] hover:brightness-90" />
          <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
          <span className="w-3 h-3 rounded-full bg-[#28c840]" />
        </div>
        <div className="flex-1 overflow-y-auto px-2 py-3 text-[13px] text-black/85">
          {sidebar.map((s) => (
            <div key={s.label} className="flex items-center gap-2 px-2 py-1.5 rounded hover:bg-black/5">
              <s.icon className="w-4 h-4 text-black/60" /> {s.label}
            </div>
          ))}
          <p className="text-[12px] uppercase tracking-wide text-black/40 mt-3 mb-1 px-2">Favourites</p>
          {favourites.map((f) => (
            <div
              key={f.label}
              className={`flex items-center gap-2 px-2 py-1.5 rounded ${f.active ? "bg-black/10 text-[#34c759] font-medium" : "hover:bg-black/5"}`}
            >
              <f.icon className={`w-4 h-4 ${f.active ? "text-[#34c759]" : "text-black/60"}`} /> {f.label}
            </div>
          ))}
          <p className="text-[12px] uppercase tracking-wide text-black/40 mt-3 mb-1 px-2">Locations</p>
          <p className="text-[12px] uppercase tracking-wide text-black/40 mt-3 mb-1 px-2">Tags</p>
          {tags.map((t) => (
            <div key={t.label} className="flex items-center gap-2 px-2 py-1.5 rounded hover:bg-black/5">
              <span className="w-3 h-3 rounded-full" style={{ background: t.color }} /> {t.label}
            </div>
          ))}
        </div>
      </div>

      {/* Main area */}
      <div className="flex-1 flex flex-col bg-white">
        {/* Toolbar */}
        <div
          className="h-11 flex items-center px-3 gap-3 border-b border-black/10 cursor-move"
          onMouseDown={handleMouseDown}
        >
          <div className="flex items-center gap-1 bg-black/10 rounded-full px-1.5 py-1">
            <button
              onClick={() => setOpenFolder(null)}
              disabled={openFolder === null}
              aria-label="Back"
              className="disabled:opacity-40"
            >
              <ChevronLeft className="w-4 h-4 text-black/80" />
            </button>
            <ChevronRight className="w-4 h-4 text-black/40" />
          </div>
          <span className="text-[15px] font-semibold text-black/95">
            {headerTitle}
          </span>
          <div className="ml-auto flex items-center gap-2 text-black/70">
            <div className="flex items-center gap-1 bg-black/10 rounded-md p-1">
              <LayoutGrid className="w-4 h-4 bg-black/20 rounded p-0.5" />
              <Rows3 className="w-4 h-4" />
              <Columns3 className="w-4 h-4" />
              <AppWindow className="w-4 h-4" />
            </div>
            <div className="flex items-center gap-1 bg-black/10 rounded-md px-1.5 py-1">
              <LayoutGrid className="w-4 h-4" />
              <ChevronDown className="w-3 h-3" />
            </div>
            <button className="bg-black/10 rounded-md p-1.5"><Share className="w-4 h-4" /></button>
            <button className="bg-black/10 rounded-md p-1.5"><Tag className="w-4 h-4" /></button>
            <button className="bg-black/10 rounded-md p-1.5"><MoreHorizontal className="w-4 h-4" /></button>
            <button className="bg-black/10 rounded-md p-1.5"><Search className="w-4 h-4" /></button>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-8 bg-white">
          {openFolder === null ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {folders.map((name) => (
                <DesktopFolder key={name} label={name} labelClassName="text-black/90" onClick={() => setOpenFolder(name)} />
              ))}
            </div>
          ) : (
            <div className="flex items-start justify-start gap-8 flex-wrap">
              <button
                onClick={() => {
                  const caseStudy = FOLDER_CASE_STUDIES[openFolder];
                  setPdfViewer({
                    url: caseStudy.pdf,
                    name: `case study.pdf`,
                    pages: caseStudy.pages,
                  });
                }}
                className="flex flex-col items-center gap-3 group"
                title="Open case study"
              >
                <div
                  className="relative w-24 h-36 bg-white)] overflow-hidden transition-transform group-hover:scale-[1.03]"
                  style={{
                    clipPath:
                      "polygon(0 0, calc(100% - 14px) 0, 100% 14px, 100% 100%, 0 100%)",
                  }}
                >
                  <img
                    src={FOLDER_CASE_STUDIES[openFolder].thumb}
                    alt={`${openFolder} case study preview`}
                    className="w-full h-full object-cover object-top"
                    loading="lazy"
                  />
                  <div
                    className="absolute top-0 right-0 w-[14px] h-[14px] bg-[#d8d8d8]"
                    style={{ clipPath: "polygon(0 0, 100% 100%, 0 100%)" }}
                  />
                </div>
                <span className="text-[13px] text-black/90 text-center leading-tight max-w-[110px] truncate px-1">
                  case study.pdf
                </span>
              </button>
            </div>
          )}
        </div>
      </div>

      <PdfViewerPortal pdfViewer={pdfViewer} onClose={() => setPdfViewer(null)} />
    </div>
  );
}

type CaseStudyDoc = {
  title: string;
  role: string;
  meta: string;
  summary: string;
  competencies: { label: string; items: string }[];
  sections: { heading: string; subheading?: string; period?: string; bullets: string[] }[];
};

const CASE_STUDIES: Record<string, CaseStudyDoc> = {
  "The Mind": {
    title: "THE MIND",
    role: "Mindfulness & Meditation App — Case Study",
    meta: "Mobile App · iOS & Android · 12 weeks · Lead Product Designer",
    summary:
      "The Mind is a guided meditation and journaling companion built to help busy professionals build a daily mindfulness habit. The product blends ambient soundscapes, structured breathwork, and lightweight mood journaling into a single calming interface. Across the pilot cohort, daily active sessions increased by 42% and 7-day retention rose from 18% to 31%.",
    competencies: [
      { label: "Research", items: "User interviews | Diary studies | Competitive audit | Persona definition" },
      { label: "Design", items: "Information architecture | Wireframes | High-fidelity UI | Prototyping" },
      { label: "Systems", items: "Component library | Motion guidelines | Accessibility (WCAG AA)" },
      { label: "Tools", items: "Figma | ProtoPie | Lottie | Notion | Maze" },
    ],
    sections: [
      {
        heading: "Problem",
        bullets: [
          "Existing meditation apps overwhelm new users with hundreds of unrelated tracks and no clear daily ritual.",
          "Habit formation was the #1 unmet need surfaced across 14 user interviews — users wanted gentle structure, not a content library.",
          "Heavy onboarding flows dropped 62% of first-time users before their first session.",
        ],
      },
      {
        heading: "Approach",
        period: "Discovery → Concept → Validation",
        bullets: [
          "Ran 14 in-depth interviews and a 2-week diary study to map emotional triggers across the day.",
          "Synthesized findings into three personas and a Jobs-to-Be-Done framework focused on the 'wind-down' moment.",
          "Co-designed a 3-minute daily 'core ritual' with users, validated through 4 rounds of clickable prototypes.",
        ],
      },
      {
        heading: "Solution",
        bullets: [
          "Single-tap home screen that surfaces today's recommended ritual based on time of day and recent mood entries.",
          "Adaptive breathing visualizer that responds to session length and ambient soundscape choice.",
          "End-of-session reflection card that writes directly into a private journal stream with weekly summaries.",
        ],
      },
      {
        heading: "Impact",
        bullets: [
          "42% lift in daily active sessions across the pilot cohort.",
          "7-day retention improved from 18% to 31% within the first release cycle.",
          "Onboarding completion increased from 38% to 79% after collapsing it to a 3-step flow.",
        ],
      },
    ],
  },
  "Expense Tracker": {
    title: "EXPENSE TRACKER",
    role: "Personal Finance Companion — Case Study",
    meta: "Mobile App · iOS · 10 weeks · Product Designer",
    summary:
      "A lightweight expense tracker that helps freelancers and students see exactly where their money is going without the friction of traditional budgeting apps. The product replaced multi-step manual entry with smart receipt capture and automated category suggestions, cutting average logging time from 47 seconds to 9 seconds per entry.",
    competencies: [
      { label: "Research", items: "Contextual inquiry | Survey design | Task analysis | Usability testing" },
      { label: "Design", items: "Flow mapping | Visual design | Micro-interactions | Data visualization" },
      { label: "Delivery", items: "Design tokens | Developer handoff | QA support | A/B test design" },
      { label: "Tools", items: "Figma | Principle | Mixpanel | Dovetail" },
    ],
    sections: [
      {
        heading: "Problem",
        bullets: [
          "Users abandoned existing finance apps within 9 days because manual entry felt punishing.",
          "Category systems were rigid and rarely matched how people actually thought about their spending.",
          "Weekly summaries buried the one insight users wanted: 'am I overspending this week?'",
        ],
      },
      {
        heading: "Approach",
        period: "Research → Prototype → Test",
        bullets: [
          "Ran 22 unmoderated tests on competitor flows to baseline entry time and friction points.",
          "Prototyped three smart-capture concepts (camera, voice, share-sheet) and tested with 18 participants.",
          "Iterated the dashboard four times to land on a single 'this week vs. last week' glance card.",
        ],
      },
      {
        heading: "Solution",
        bullets: [
          "Receipt camera with on-device OCR that pre-fills amount, merchant, and category suggestion.",
          "Editable category chips that learn from each correction and personalize over time.",
          "Glance dashboard with one chart, one number, and one nudge — nothing else above the fold.",
        ],
      },
      {
        heading: "Impact",
        bullets: [
          "Average logging time dropped from 47s to 9s per entry.",
          "Weekly retention improved by 28% after the dashboard redesign.",
          "App store rating moved from 3.6 to 4.7 stars across 480 reviews in the first quarter.",
        ],
      },
    ],
  },
  "Nexus AI": {
    title: "NEXUS AI",
    role: "AI Workspace Assistant — Case Study",
    meta: "Web App · Desktop-first · 14 weeks · Lead Product Designer",
    summary:
      "Nexus AI is an in-context assistant that lives inside knowledge workers' existing tools and surfaces the right document, person, or answer without breaking flow. The product reduced average context-switching time from 6.2 minutes to 1.4 minutes per task across a 60-person pilot at an enterprise SaaS customer.",
    competencies: [
      { label: "Research", items: "Stakeholder workshops | Field studies | Jobs-to-Be-Done | Concept testing" },
      { label: "Design", items: "Conversational UI | Command palette patterns | Empty states | Error recovery" },
      { label: "Systems", items: "Design system contribution | Token governance | Multi-product parity" },
      { label: "Tools", items: "Figma | FigJam | Storybook | Linear" },
    ],
    sections: [
      {
        heading: "Problem",
        bullets: [
          "Knowledge workers spent 38% of their day searching across disconnected tools for context.",
          "Existing AI assistants felt like a chat window bolted onto the side — disconnected from real work.",
          "Trust was the blocker: users would not act on AI suggestions without visible provenance.",
        ],
      },
      {
        heading: "Approach",
        period: "Workshops → Concepts → Pilot",
        bullets: [
          "Facilitated four cross-functional workshops to map the high-friction handoffs in a typical workday.",
          "Designed and tested three assistant surfaces (command palette, sidebar, inline) with 12 users.",
          "Ran a 6-week pilot with a 60-person enterprise team and instrumented every suggestion.",
        ],
      },
      {
        heading: "Solution",
        bullets: [
          "Universal command palette that triggers from anywhere with a single keystroke.",
          "Every AI answer carries inline source chips — click to verify, hover to preview.",
          "Quiet mode that suppresses suggestions during deep-work blocks detected from calendar context.",
        ],
      },
      {
        heading: "Impact",
        bullets: [
          "Context-switching time dropped from 6.2 to 1.4 minutes per task on average.",
          "78% of pilot users acted on at least one AI suggestion per day by week three.",
          "Net promoter score for the assistant landed at +52 against an internal target of +30.",
        ],
      },
    ],
  },
  "Eato": {
    title: "EATO",
    role: "Restaurant Discovery & Ordering — Case Study",
    meta: "Mobile App · iOS & Android · 16 weeks · Senior Product Designer",
    summary:
      "Eato helps urban diners find nearby restaurants that match their mood, dietary needs, and price range, then handles ordering and pickup in a single flow. Average time from app open to placed order dropped from 4 minutes 20 seconds to 1 minute 35 seconds after the redesign.",
    competencies: [
      { label: "Research", items: "Field observation | Intercept interviews | Survey design | A/B testing" },
      { label: "Design", items: "Map-first UX | List/grid hybrids | Checkout flows | Empty & error states" },
      { label: "Delivery", items: "Cross-platform spec | Accessibility audits | Analytics instrumentation" },
      { label: "Tools", items: "Figma | Mapbox Studio | Amplitude | UserTesting" },
    ],
    sections: [
      {
        heading: "Problem",
        bullets: [
          "Users opened the app knowing they were hungry but spent minutes scrolling without committing.",
          "Filters were buried three taps deep and rarely used despite being the most-requested feature.",
          "Checkout abandonment hit 41% because address, tip, and pickup-time decisions all stacked on one screen.",
        ],
      },
      {
        heading: "Approach",
        period: "Observation → Iteration → Launch",
        bullets: [
          "Shadowed 9 users through real ordering sessions in their homes and offices.",
          "Prototyped a 'mood-first' entry point that replaces categories with situational prompts.",
          "Split checkout into three lightweight steps and A/B tested against the legacy flow.",
        ],
      },
      {
        heading: "Solution",
        bullets: [
          "Mood-driven home screen ('quick lunch', 'date night', 'comfort food') as the primary entry.",
          "Always-visible filter bar with smart defaults based on time of day and order history.",
          "Three-step checkout with persistent summary and one-tap repeat-order shortcut.",
        ],
      },
      {
        heading: "Impact",
        bullets: [
          "Time-to-order dropped from 4:20 to 1:35 on average across the pilot region.",
          "Checkout completion rose from 59% to 84% after the multi-step redesign.",
          "Weekly active orders per user increased by 1.9× in the three months post-launch.",
        ],
      },
    ],
  },
  "VisaProcess": {
    title: "VISAPROCESS",
    role: "Visa Application Workflow — Case Study",
    meta: "Web App · Desktop & Tablet · 18 weeks · Product Designer",
    summary:
      "VisaProcess replaces a fragmented document-and-email visa application workflow with a guided, status-aware portal for applicants and case managers. End-to-end submission time dropped from 11 days to 3 days, and applicant support tickets fell by 56%.",
    competencies: [
      { label: "Research", items: "Stakeholder interviews | Document analysis | Service blueprinting" },
      { label: "Design", items: "Form architecture | Status dashboards | Document upload patterns" },
      { label: "Delivery", items: "Multi-role spec | Compliance review | Localization-ready components" },
      { label: "Tools", items: "Figma | FigJam | Confluence | Jira" },
    ],
    sections: [
      {
        heading: "Problem",
        bullets: [
          "Applicants did not know what was happening to their case once it was submitted.",
          "Case managers juggled 6+ tools to assemble one application package.",
          "Re-work rate hit 34% because documents were rejected for fixable reasons no one explained up front.",
        ],
      },
      {
        heading: "Approach",
        period: "Service Mapping → Co-Design → Rollout",
        bullets: [
          "Mapped the full service blueprint across applicant, case manager, and reviewer touchpoints.",
          "Co-designed the document checklist with three case managers to surface the real rejection reasons.",
          "Piloted the portal with one consulate over six weeks before broader rollout.",
        ],
      },
      {
        heading: "Solution",
        bullets: [
          "Linear application flow with inline document requirements written in plain language.",
          "Live status timeline visible to both applicant and case manager, with predicted next steps.",
          "Reviewer console that batches similar cases and pre-flags missing or low-quality documents.",
        ],
      },
      {
        heading: "Impact",
        bullets: [
          "Submission time dropped from 11 days to 3 days end-to-end.",
          "Applicant support tickets fell by 56% in the first quarter after rollout.",
          "Re-work rate on submitted documents dropped from 34% to 8%.",
        ],
      },
    ],
  },
};

function CaseStudyPortal({ name, onClose }: { name: string | null; onClose: () => void }) {
  if (!name) return null;
  const doc = CASE_STUDIES[name];
  if (!doc) return null;
  if (typeof document === "undefined") return null;

  return createPortal(
    <div
      className="fixed inset-0 z-[9999] bg-black/70 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="window-invert relative bg-white rounded-[20px] overflow-hidden w-[min(900px,96vw)] h-[min(880px,94vh)] flex flex-col ring-1 ring-black/10"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Title bar */}
        <div className="h-10 flex items-center px-3 gap-2 bg-gradient-to-b from-[#f5f5f5] to-[#e6e6e6] border-b border-black/10 shrink-0">
          <button
            onClick={onClose}
            aria-label="Close"
            className="w-3 h-3 rounded-full bg-[#ff5f57] ring-1 ring-black/10 hover:brightness-95"
          />
          <span className="w-3 h-3 rounded-full bg-[#febc2e] ring-1 ring-black/10" />
          <span className="w-3 h-3 rounded-full bg-[#28c840] ring-1 ring-black/10" />
          <div className="flex-1 text-center text-[13px] font-semibold text-black/70 truncate">
            {name} — Case Study.pdf
          </div>
          <div className="w-12" />
        </div>

        {/* Document body */}
        <div className="flex-1 overflow-y-auto bg-[#e0e0e0] px-6 py-8">
          <article className="mx-auto w-full max-w-[760px] bg-white)] px-12 py-10 text-black font-sans text-[13px] leading-relaxed">
            {/* Header */}
            <header className="text-center mb-5">
              <h1 className="text-[13px] font-bold tracking-wide text-black">
                {doc.title}
              </h1>
              <p className="text-[13px] text-black/80 mt-1">{doc.role}</p>
              <p className="text-[13px] text-black/60 mt-1">{doc.meta}</p>
            </header>

            <hr className="border-black/30 mb-5" />

            {/* Summary */}
            <section className="mb-5">
              <h2 className="text-[13px] font-bold uppercase tracking-wide mb-2">
                Project Summary
              </h2>
              <p className="text-[13px] text-black/85">{doc.summary}</p>
            </section>

            {/* Competencies */}
            <section className="mb-5">
              <h2 className="text-[13px] font-bold uppercase tracking-wide mb-2">
                Core Competencies
              </h2>
              <ul className="space-y-1.5">
                {doc.competencies.map((c) => (
                  <li key={c.label} className="text-[13px] text-black/85">
                    <span className="font-semibold">{c.label}:</span> {c.items}
                  </li>
                ))}
              </ul>
            </section>

            {/* Process sections */}
            <section>
              <h2 className="text-[13px] font-bold uppercase tracking-wide mb-3">
                Process & Outcomes
              </h2>
              <div className="space-y-5">
                {doc.sections.map((s) => (
                  <div key={s.heading}>
                    <div className="flex items-baseline justify-between gap-3 mb-1">
                      <h3 className="text-[13px] font-bold text-black">
                        {s.heading}
                        {s.subheading ? (
                          <span className="font-normal text-black/70"> — {s.subheading}</span>
                        ) : null}
                      </h3>
                      {s.period && (
                        <span className="text-[13px] text-black/55 shrink-0">{s.period}</span>
                      )}
                    </div>
                    <ul className="space-y-1 pl-4">
                      {s.bullets.map((b, i) => (
                        <li
                          key={i}
                          className="text-[13px] text-black/85 list-disc marker:text-black/50"
                        >
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>
          </article>
        </div>
      </div>
    </div>,
    document.body
  );
}

function PdfViewerPortal({
  pdfViewer,
  onClose,
}: {
  pdfViewer: { url: string; name: string; pages?: string[] } | null;
  onClose: () => void;
}) {
  const [thumbnailsOpen, setThumbnailsOpen] = useState(true);
  const scrollRef = useRef<HTMLDivElement>(null);
  const pageRefs = useRef<(HTMLImageElement | null)[]>([]);

  if (!pdfViewer) return null;
  if (typeof document === "undefined") return null;

  return createPortal(
    <div
      className="fixed inset-0 z-[9999] bg-black/70 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="window-invert bg-[#ededed] rounded-[20px] overflow-hidden w-[min(1200px,96vw)] h-[min(820px,94vh)] flex flex-col ring-1 ring-black/10"
        onClick={(e) => e.stopPropagation()}
      >
        {/* macOS Preview-style title bar */}
        <div className="h-14 flex items-center px-4 gap-3 bg-gradient-to-b from-[#f5f5f5] to-[#e6e6e6] border-b border-black/10">
          {/* Traffic lights */}
          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              aria-label="Close"
              className="w-3 h-3 rounded-full bg-[#ff5f57] ring-1 ring-black/10 hover:brightness-95"
            />
            <span className="w-3 h-3 rounded-full bg-[#febc2e] ring-1 ring-black/10" />
            <span className="w-3 h-3 rounded-full bg-[#28c840] ring-1 ring-black/10" />
          </div>

          {/* Sidebar toggle */}
          <button
            onClick={() => setThumbnailsOpen((v) => !v)}
            className={`ml-3 flex items-center justify-center w-9 h-7 rounded-md ring-1 ring-black/10 text-black/60 transition-colors ${thumbnailsOpen ? "bg-white" : "bg-white/70 hover:bg-white"}`}
            aria-label="Toggle thumbnails"
            title="Toggle thumbnails"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M9 5v14"/></svg>
          </button>

          {/* Title block */}
          <div className="flex-1 flex flex-col items-center justify-center min-w-0 px-2">
            <span className="text-[13px] font-semibold text-black/80 truncate max-w-full">
              {pdfViewer.name}
            </span>
            <span className="text-[13px] text-black/50 mt-0.5">
              {pdfViewer.pages ? `${pdfViewer.pages.length} page${pdfViewer.pages.length > 1 ? "s" : ""}` : "1 page"}
            </span>
          </div>

          {/* Zoom group */}
          <div className="flex items-center gap-1 bg-white/70 ring-1 ring-black/10 rounded-md px-1 h-7 text-black/60">
            <span className="px-1.5 text-[13px]">🔍−</span>
            <span className="w-px h-4 bg-black/10" />
            <span className="px-1.5 text-[13px]">🔍</span>
            <span className="w-px h-4 bg-black/10" />
            <span className="px-1.5 text-[13px]">🔍+</span>
          </div>

          {/* Markup / rotate / edit icons */}
          <div className="hidden sm:flex items-center gap-1 ml-1">
            <span className="flex items-center justify-center w-7 h-7 rounded-md bg-white/70 ring-1 ring-black/10 text-black/60 text-[13px]">✎</span>
            <span className="flex items-center justify-center w-7 h-7 rounded-md bg-white/70 ring-1 ring-black/10 text-black/60 text-[13px]">↺</span>
          </div>

          {/* Annotate (green) */}
          <span className="flex items-center justify-center w-8 h-7 rounded-md bg-[#34c759] text-white">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 1 1 3 3L7 19l-4 1 1-4 12.5-12.5z"/></svg>
          </span>

          {/* Download (share) */}
          <a
            href={pdfViewer.url}
            download
            aria-label="Download"
            className="flex items-center justify-center w-8 h-7 rounded-md bg-white/70 ring-1 ring-black/10 text-black/60 hover:bg-white"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M12 3v12"/><path d="M7 10l5 5 5-5"/><path d="M5 21h14"/></svg>
          </a>

          {/* Search */}
          <div className="hidden md:flex items-center gap-1.5 h-7 px-2 rounded-md bg-white/70 ring-1 ring-black/10 text-black/40 text-[13px] w-44">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg>
            Search
          </div>
        </div>

        <div className="flex-1 flex overflow-hidden">
          {thumbnailsOpen && pdfViewer.pages && (
            <div className="w-44 bg-[#e2e2e2] border-r border-black/10 overflow-y-auto p-2 flex flex-col gap-2 shrink-0">
              {pdfViewer.pages.map((pageUrl, idx) => (
                <button
                  key={pageUrl}
                  onClick={() => {
                    pageRefs.current[idx]?.scrollIntoView({ behavior: "smooth", block: "start" });
                  }}
                  className="group flex flex-col items-center gap-1 p-1.5 rounded-lg hover:bg-white/60 transition-colors"
                >
                  <img
                    src={pageUrl}
                    alt={`Page ${idx + 1}`}
                    className="w-full rounded bg-white"
                    draggable={false}
                    loading="lazy"
                  />
                  <span className="text-[13px] text-black/50 group-hover:text-black/80">{idx + 1}</span>
                </button>
              ))}
            </div>
          )}

          {pdfViewer.pages ? (
            <div className="flex-1 overflow-auto bg-[#ededed] px-6 py-6" ref={scrollRef}>
              {pdfViewer.pages.map((pageUrl, index) => (
                <img
                  key={pageUrl}
                  ref={(el) => { pageRefs.current[index] = el; }}
                  src={pageUrl}
                  alt={`${pdfViewer.name} page ${index + 1}`}
                  className="mx-auto block w-full max-w-[1000px] bg-white)]"
                  draggable={false}
                />
              ))}
            </div>
          ) : (
            <iframe
              src={pdfViewer.url}
              title={pdfViewer.name}
              className="flex-1 w-full bg-neutral-200"
            />
          )}
        </div>
      </div>
    </div>,
    document.body
  );
}

const DOCK_APPS: { name: string; src?: string; color?: string }[] = [
  { name: "Finder", src: FinderIcon.url },
  { name: "Safari", src: SafariIcon.url },
  { name: "Chrome", src: ChromeIcon.url },
  { name: "Mail", src: MailIcon.url },
  { name: "Calendar", src: DatesIcon.url },
  { name: "Notes", src: NotesIcon.url },
  { name: "PDF", src: PreviewIcon.url },
  { name: "Photos", src: PhotosIcon.url },
  { name: "Messages", src: MessagesIcon.url },
  { name: "Trash", src: TrashIcon.url },
];

function Dock({ onOpen }: { onOpen: (name: string) => void }) {
  const [apps, setApps] = useState(DOCK_APPS);
  const dragIndex = useRef<number | null>(null);
  const [overIndex, setOverIndex] = useState<number | null>(null);
  const [hoveredApp, setHoveredApp] = useState<string | null>(null);

  const handleDragStart = (i: number) => (e: React.DragEvent) => {
    dragIndex.current = i;
    e.dataTransfer.effectAllowed = "move";
    // Some browsers require data to initiate drag
    try { e.dataTransfer.setData("text/plain", String(i)); } catch {}
  };

  const handleDragOver = (i: number) => (e: React.DragEvent) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = "move";
    if (overIndex !== i) setOverIndex(i);
  };

  const handleDrop = (i: number) => (e: React.DragEvent) => {
    e.preventDefault();
    const from = dragIndex.current;
    dragIndex.current = null;
    setOverIndex(null);
    if (from === null || from === i) return;
    setApps((prev) => {
      const next = [...prev];
      const [moved] = next.splice(from, 1);
      next.splice(i, 0, moved);
      return next;
    });
  };

  const handleDragEnd = () => {
    dragIndex.current = null;
    setOverIndex(null);
  };

  return (
    <div className="fixed bottom-2 left-1/2 -translate-x-1/2 z-50 max-w-[95vw] overflow-visible">
      <div className="absolute -top-10 left-1/2 -translate-x-1/2 px-2.5 py-1 rounded-md bg-black/75 backdrop-blur-sm text-white text-[13px] whitespace-nowrap pointer-events-none z-[80] transition-all duration-150 opacity-0 data-[visible=true]:opacity-100 data-[visible=true]:-translate-y-1" data-visible={Boolean(hoveredApp)}>
        {hoveredApp}
      </div>
      <div className="flex items-center gap-1 sm:gap-1.5 md:gap-2 px-2 py-1.5 sm:px-3 sm:py-2 md:px-4 md:py-2.5 rounded-2xl bg-white/40 dark:bg-black/40 backdrop-blur-xl border border-white/60 dark:border-white/15)] overflow-visible">
        {apps.map((app, i) => (
          <button
            key={app.name}
            draggable
            onDragStart={handleDragStart(i)}
            onDragOver={handleDragOver(i)}
            onDrop={handleDrop(i)}
            onDragEnd={handleDragEnd}
            onClick={app.name === "PDF" ? undefined : () => onOpen(app.name)}
            onMouseEnter={() => setHoveredApp(app.name)}
            onMouseLeave={() => setHoveredApp(null)}
            onFocus={() => setHoveredApp(app.name)}
            onBlur={() => setHoveredApp(null)}
            className={`relative shrink-0 w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 transition-all hover:-translate-y-2 hover:scale-110 focus-visible:-translate-y-2 focus-visible:scale-110 overflow-visible ${app.name === "PDF" ? "cursor-default" : "cursor-grab active:cursor-grabbing"} ${overIndex === i ? "scale-110" : ""}`}
            aria-label={app.name}
            title={app.name}
          >
            {app.src && (
              <img src={app.src} alt="" draggable={false} className="w-full h-full object-contain pointer-events-none" />
            )}
          </button>
        ))}
      </div>
    </div>
  );
}


function MessagesWindow({ onClose }: { onClose: () => void }) {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [dragging, setDragging] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [activeContact, setActiveContact] = useState("Design Identity");

  const handleMouseDown = (e: React.MouseEvent) => {
    setDragging(true);
    setOffset({ x: e.clientX - pos.x, y: e.clientY - pos.y });
  };

  useEffect(() => {
    if (!dragging) return;
    const move = (e: MouseEvent) => setPos({ x: e.clientX - offset.x, y: e.clientY - offset.y });
    const up = () => setDragging(false);
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseup", up);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseup", up);
    };
  }, [dragging, offset]);

  const conversations: Record<string, { question: string; answer: string; time: string; emoji?: string }> = {
    "Design Identity": {
      question: "What kind of designer are you?",
      answer: "One who balances precision with playfulness. I'm obsessed with clean, intuitive interfaces but also love throwing in unexpected, quirky details.",
      time: "9:41 AM",
      emoji: "💖",
    },
    "Design Inspiration": {
      question: "What inspires your design style?",
      answer: "A mix of bold visual storytelling and functional simplicity. I'm drawn to unconventional layouts, color theory experiments, and user-centric accessibility.",
      time: "9:38 AM",
    },
    "Design Process": {
      question: "What's your design process like?",
      answer: "Messy but methodical. I start with rapid ideation, test often, and iterate obsessively. User feedback is my North Star.",
      time: "9:10 AM",
      emoji: "⭐",
    },
    "Creative Blocks": {
      question: "How do you handle creative blocks?",
      answer: "Step away. Doodle nonsense. Scroll through chaotic, experimental sites. Then come back with a fresh perspective.",
      time: "9:01 AM",
    },
    "Favorite Projects": {
      question: "Favorite kind of project to work on?",
      answer: "Anything that blends visual storytelling with problem-solving—from playful UI concepts to in-depth UX research.",
      time: "8:47 AM",
      emoji: "💖",
    },
    "Collaboration": {
      question: "What makes you a good collaborator?",
      answer: "I'm curious, open-minded, and thrive on feedback. I believe the best ideas come from shared brainpower.",
      time: "8:30 AM",
    },
  };

  const contacts = Object.entries(conversations).map(([name, c]) => ({
    name,
    time: c.time,
    preview: c.answer,
  }));

  const current = conversations[activeContact];

  return (
    <div className="fixed inset-0 z-40 flex items-center justify-center p-4 pointer-events-none">
      <div
        className="pointer-events-auto w-[min(900px,96vw)] h-[min(640px,85vh)] rounded-[20px] bg-white overflow-hidden flex flex-col"
        style={{ transform: `translate(${pos.x}px, ${pos.y}px)` }}
      >
        {/* Title bar */}
        <div
          className="flex items-center gap-2 px-3 py-2 bg-neutral-100/90 border-b border-neutral-200 shrink-0 cursor-move"
          onMouseDown={handleMouseDown}
        >
          <button onClick={onClose} className="w-3 h-3 rounded-full bg-red-500 hover:opacity-80" aria-label="Close" />
          <span className="w-3 h-3 rounded-full bg-yellow-400" />
          <span className="w-3 h-3 rounded-full bg-green-500" />
          <span className="ml-2 text-[13px] font-medium text-neutral-700">Messages</span>
        </div>

        {/* Body */}
        <div className="flex flex-1 min-h-0">
          {/* Sidebar */}
          <div className="w-64 bg-neutral-50 border-r border-neutral-200 flex flex-col shrink-0">
            {/* Search + compose */}
            <div className="px-3 py-2.5 flex items-center gap-2">
              <div className="flex-1 bg-neutral-200/60 rounded-md flex items-center gap-1.5 px-2 py-1">
                <Search className="w-3.5 h-3.5 text-neutral-500" />
                <span className="text-[13px] text-neutral-500">Search</span>
              </div>
              <button className="p-1 rounded hover:bg-neutral-200/60">
                <SquarePen className="w-4 h-4 text-neutral-600" />
              </button>
            </div>
            {/* Contact list */}
            <div className="flex-1 overflow-y-auto">
              {contacts.map((c) => {
                const isSelected = c.name === activeContact;
                return (
                  <button
                    key={c.name}
                    onClick={() => setActiveContact(c.name)}
                    className={`w-full text-left px-3 py-2.5 flex items-start gap-2.5 transition-colors ${
                      isSelected ? "bg-blue-500" : "hover:bg-neutral-200/40"
                    }`}
                  >
                    <div className={`w-9 h-9 rounded-full flex items-center justify-center text-[13px] font-bold shrink-0 ${
                      isSelected ? "bg-white/20 text-white" : "bg-gradient-to-br from-blue-400 to-purple-500 text-white"
                    }`}>
                      {c.name.split(" ").map((n) => n[0]).join("")}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-baseline justify-between">
                        <span className={`text-[13px] font-semibold truncate ${isSelected ? "text-white" : "text-neutral-900"}`}>
                          {c.name}
                        </span>
                        <span className={`text-[13px] shrink-0 ml-1 ${isSelected ? "text-white/80" : "text-neutral-500"}`}>
                          {c.time}
                        </span>
                      </div>
                      <p className={`text-[13px] truncate ${isSelected ? "text-white/80" : "text-neutral-500"}`}>
                        {c.preview}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Conversation */}
          <div className="flex-1 flex flex-col min-w-0 bg-white">
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-2.5 border-b border-neutral-200 shrink-0">
              <span className="text-[13px] font-semibold text-neutral-700">To: {activeContact}</span>
              <button className="text-[13px] text-blue-600 hover:underline">Details</button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto px-6 py-6 space-y-3">
              <div className="text-center text-[13px] text-neutral-400 mb-3">Today, {current.time}</div>
              {/* Question (received) */}
              <div className="flex justify-start">
                <div className="relative max-w-[75%] px-4 py-2.5 rounded-3xl text-[13px] font-medium leading-snug bg-neutral-900 text-blue-400 rounded-bl-md">
                  {current.question}
                  {current.emoji && (
                    <span className="absolute -top-2 -right-1 text-[13px]">{current.emoji}</span>
                  )}
                </div>
              </div>
              {/* Answer (sent) */}
              <div className="flex justify-end">
                <div className="max-w-[75%] px-4 py-2.5 rounded-3xl text-[13px] leading-snug bg-blue-500 text-white rounded-br-md">
                  {current.answer}
                </div>
              </div>
              <div className="text-right text-[13px] text-neutral-400 mt-1">Delivered</div>
            </div>

            {/* Input bar */}
            <div className="border-t border-neutral-200 px-4 py-2.5 flex items-center gap-2 shrink-0">
              <button className="text-neutral-400 hover:text-neutral-600">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/></svg>
              </button>
              <div className="flex-1 bg-white border border-neutral-300 rounded-full px-4 py-1.5 text-[13px] text-neutral-400">
                iMessage
              </div>
              <button className="text-neutral-400 hover:text-neutral-600">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" y1="19" x2="12" y2="23"/><line x1="8" y1="23" x2="16" y2="23"/></svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ComingSoonWindow({ title, iconUrl, onClose }: { title: string; iconUrl: string; onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-40 flex items-center justify-center p-4 pointer-events-none">
      <div className="pointer-events-auto w-[min(420px,92vw)] rounded-[20px] bg-white/95 backdrop-blur-xl border border-neutral-300 overflow-hidden">
        <div className="flex items-center gap-2 px-3 py-2 bg-neutral-100 border-b border-neutral-200">
          <button onClick={onClose} className="w-3 h-3 rounded-full bg-red-500 hover:opacity-80" aria-label="Close" />
          <span className="w-3 h-3 rounded-full bg-yellow-400" />
          <span className="w-3 h-3 rounded-full bg-green-500" />
          <span className="ml-2 text-[13px] font-medium text-neutral-700">{title}</span>
        </div>
        <div className="flex flex-col items-center justify-center px-6 py-10 text-center">
          <img src={iconUrl} alt={title} className="w-20 h-20 mb-4 rounded-2xl" />
          <h3 className="text-[13px] font-semibold text-neutral-800">{title}</h3>
          <p className="mt-2 text-[13px] text-neutral-500">Coming soon.</p>
        </div>
      </div>
    </div>
  );
}

function CalendarWindow({ onClose }: { onClose: () => void }) {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [dragging, setDragging] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [currentDate, setCurrentDate] = useState(new Date());
  const [view, setView] = useState<"Day" | "Week" | "Month" | "Year">("Month");

  const handleMouseDown = (e: React.MouseEvent) => {
    setDragging(true);
    setOffset({ x: e.clientX - pos.x, y: e.clientY - pos.y });
  };

  useEffect(() => {
    if (!dragging) return;
    const move = (e: MouseEvent) => setPos({ x: e.clientX - offset.x, y: e.clientY - offset.y });
    const up = () => setDragging(false);
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseup", up);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseup", up);
    };
  }, [dragging, offset]);

  const today = new Date();
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  const monthName = currentDate.toLocaleDateString("en-US", { month: "long", year: "numeric" });

  const firstDayOfMonth = new Date(year, month, 1);
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const startDayOfWeek = firstDayOfMonth.getDay();

  const calendarDays: { date: number; isCurrentMonth: boolean; fullDate: Date }[] = [];

  const prevMonthDays = new Date(year, month, 0).getDate();
  for (let i = startDayOfWeek - 1; i >= 0; i--) {
    calendarDays.push({
      date: prevMonthDays - i,
      isCurrentMonth: false,
      fullDate: new Date(year, month - 1, prevMonthDays - i),
    });
  }

  for (let i = 1; i <= daysInMonth; i++) {
    calendarDays.push({
      date: i,
      isCurrentMonth: true,
      fullDate: new Date(year, month, i),
    });
  }

  const remaining = 42 - calendarDays.length;
  for (let i = 1; i <= remaining; i++) {
    calendarDays.push({
      date: i,
      isCurrentMonth: false,
      fullDate: new Date(year, month + 1, i),
    });
  }

  const isToday = (d: Date) =>
    d.getDate() === today.getDate() &&
    d.getMonth() === today.getMonth() &&
    d.getFullYear() === today.getFullYear();

  const events: { day: number; label: string; color: string }[] = [
    { day: 14, label: "🎁 's 35th Birthd...", color: "bg-[#e8e8ed] text-black/70" },
    { day: 26, label: "★ Muharram", color: "bg-[#cce3ff] text-[#007aff]" },
  ];

  const goToToday = () => setCurrentDate(new Date());
  const prevMonth = () => setCurrentDate(new Date(year, month - 1, 1));
  const nextMonth = () => setCurrentDate(new Date(year, month + 1, 1));

  return (
    <div
      className="absolute top-12 left-1/2 z-40 w-[min(960px,94vw)] h-[min(640px,80vh)] bg-white text-black/90 rounded-[20px] border border-black/10 overflow-hidden font-sans select-none flex flex-col"
      style={{ transform: `translate3d(calc(-50% + ${pos.x}px), ${pos.y}px, 0)` }}
    >
      <div
        className="h-12 flex items-center px-3 gap-3 border-b border-black/10 cursor-move shrink-0 bg-neutral-100/80"
        onMouseDown={handleMouseDown}
      >
        <button onClick={onClose} aria-label="Close" className="w-3 h-3 rounded-full bg-[#ff5f57] hover:brightness-90" />
        <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
        <span className="w-3 h-3 rounded-full bg-[#28c840]" />

        <div className="flex items-center gap-1 ml-2">
          <button className="p-1.5 rounded-md bg-white border border-black/10 hover:bg-neutral-50">
            <CalendarIcon className="w-4 h-4 text-black/80" />
          </button>
          <button className="p-1.5 rounded-md hover:bg-black/5">
            <ListChecks className="w-4 h-4 text-black/50" />
          </button>
        </div>

        <button className="ml-1 w-7 h-7 rounded-full bg-white border border-black/10 hover:bg-neutral-50 flex items-center justify-center text-black/80 text-xl leading-none">+</button>

        <div className="ml-auto flex items-center bg-neutral-200/80 rounded-lg p-0.5">
          {(["Day", "Week", "Month", "Year"] as const).map((v) => (
            <button
              key={v}
              onClick={() => setView(v)}
              className={`px-3 py-1 text-[13px] rounded-md transition-colors ${view === v ? "bg-white text-black" : "text-black/70 hover:text-black"}`}
            >
              {v}
            </button>
          ))}
        </div>

        <button className="ml-3 p-1.5 rounded-md hover:bg-black/5">
          <Search className="w-4 h-4 text-black/80" />
        </button>
      </div>

      <div className="flex items-center justify-between px-5 py-4 shrink-0">
        <h2 className="text-3xl font-semibold text-black/95">{monthName}</h2>
        <div className="flex items-center gap-2">
          <button onClick={goToToday} className="px-3 py-1 rounded-md bg-neutral-200/80 hover:bg-neutral-300/80 text-[13px] text-black/90">Today</button>
          <button onClick={prevMonth} className="p-1.5 rounded-md hover:bg-black/5 text-black/60">
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button onClick={nextMonth} className="p-1.5 rounded-md hover:bg-black/5 text-black/60">
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-7 px-5 pb-2 shrink-0">
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
          <div key={day} className="text-center text-[13px] text-black/50 font-medium py-1">
            {day}
          </div>
        ))}
      </div>

      <div className="flex-1 grid grid-cols-7 grid-rows-6 px-5 pb-5 min-h-0">
        {calendarDays.map((day, idx) => {
          const event = events.find((e) => e.day === day.date && day.isCurrentMonth);
          const todayMark = isToday(day.fullDate);
          return (
            <div
              key={idx}
              className={`relative border-r border-b border-black/10 p-1.5 min-h-0 overflow-hidden ${day.isCurrentMonth ? "bg-white text-black/90" : "bg-neutral-50 text-black/30"}`}
            >
              <div className="flex items-start justify-between">
                <span className={`text-[13px] w-7 h-7 flex items-center justify-center rounded-full ${todayMark ? "bg-[#ff3b30] text-white font-semibold" : ""}`}>
                  {day.date}
                </span>
              </div>
              {event && (
                <div className={`mt-1.5 px-1.5 py-0.5 rounded text-[11px] truncate ${event.color}`}>
                  {event.label}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

function PhotosWindow({ onClose }: { onClose: () => void }) {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [dragging, setDragging] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [tab, setTab] = useState<"Years" | "Months" | "All Photos">("All Photos");
  const [activeNav, setActiveNav] = useState("Library");

  const handleMouseDown = (e: React.MouseEvent) => {
    setDragging(true);
    setOffset({ x: e.clientX - pos.x, y: e.clientY - pos.y });
  };

  useEffect(() => {
    if (!dragging) return;
    const move = (e: MouseEvent) => setPos({ x: e.clientX - offset.x, y: e.clientY - offset.y });
    const up = () => setDragging(false);
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseup", up);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseup", up);
    };
  }, [dragging, offset]);

  const sidebarSections: { heading?: string; items: { label: string; icon: React.ReactNode; locked?: boolean }[] }[] = [
    {
      items: [
        { label: "Library", icon: <span className="w-4 h-4 rounded-sm bg-gradient-to-br from-emerald-400 to-emerald-600 inline-block" /> },
        { label: "Collections", icon: <span className="w-4 h-4 rounded-sm border-2 border-neutral-500 inline-block" /> },
      ],
    },
    {
      heading: "Pinned",
      items: [
        { label: "Favourites", icon: <span className="text-pink-500">♥</span> },
        { label: "Recently Saved", icon: <span className="text-violet-500">⤓</span> },
        { label: "Map", icon: <span className="text-blue-500">◉</span> },
        { label: "Videos", icon: <span className="text-neutral-600">▶</span> },
        { label: "Screenshots", icon: <span className="text-neutral-600">▣</span> },
        { label: "People", icon: <span className="text-neutral-600">☻</span> },
        { label: "Recently Delet…", icon: <span className="text-neutral-600">🗑</span>, locked: true },
      ],
    },
    {
      heading: "Albums",
      items: [{ label: "All Albums", icon: <span className="text-neutral-600">▦</span> }],
    },
    {
      heading: "Sharing",
      items: [
        { label: "Shared Albums", icon: <span className="text-neutral-600">▦</span> },
        { label: "Activity", icon: <span className="text-neutral-600">💬</span> },
      ],
    },
    {
      heading: "Media Types",
      items: [
        { label: "Videos", icon: <span className="text-neutral-600">▶</span> },
        { label: "Selfies", icon: <span className="text-neutral-600">☻</span> },
        { label: "Live Photos", icon: <span className="text-neutral-600">◎</span> },
        { label: "Portrait", icon: <span className="text-neutral-600">f</span> },
        { label: "Panoramas", icon: <span className="text-neutral-600">▭</span> },
      ],
    },
  ];

  const tileRows: { w: string; h: string }[][] = [
    [
      { w: "w-[18%]", h: "h-40" },
      { w: "w-[18%]", h: "h-40" },
      { w: "w-[18%]", h: "h-40" },
      { w: "w-[18%]", h: "h-40" },
      { w: "w-[18%]", h: "h-40" },
    ],
    [
      { w: "w-[18%]", h: "h-44" },
      { w: "w-[24%]", h: "h-44" },
      { w: "w-[18%]", h: "h-44" },
      { w: "w-[16%]", h: "h-44" },
      { w: "w-[16%]", h: "h-44" },
    ],
    [
      { w: "w-[16%]", h: "h-48" },
      { w: "w-[20%]", h: "h-48" },
      { w: "w-[18%]", h: "h-48" },
      { w: "w-[20%]", h: "h-48" },
      { w: "w-[18%]", h: "h-48" },
    ],
  ];

  return (
    <div
      className="absolute top-12 left-1/2 z-40 w-[min(1100px,94vw)] h-[min(720px,86vh)] bg-white rounded-[20px] border border-black/10 overflow-hidden font-sans cursor-default select-none flex flex-col"
      style={{ transform: `translate3d(calc(-50% + ${pos.x}px), ${pos.y}px, 0)` }}
    >
      <div
        className="h-12 flex items-center gap-3 px-3 border-b border-black/10 bg-neutral-50 cursor-move shrink-0"
        onMouseDown={handleMouseDown}
      >
        <div className="flex items-center gap-2">
          <button onClick={onClose} className="w-3 h-3 rounded-full bg-red-500 hover:opacity-80" aria-label="Close" />
          <span className="w-3 h-3 rounded-full bg-yellow-400" />
          <span className="w-3 h-3 rounded-full bg-green-500" />
        </div>
        <button className="ml-2 w-7 h-7 grid place-items-center rounded hover:bg-black/5 text-neutral-600" aria-label="Toggle sidebar">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="3" y="4" width="18" height="16" rx="2"/><line x1="9" y1="4" x2="9" y2="20"/></svg>
        </button>

        <div className="flex-1 flex items-center justify-between gap-3 pl-2">
          <div className="min-w-[180px]">
            <div className="text-[13px] font-semibold text-neutral-900 leading-tight">Library</div>
            <div className="text-[13px] text-neutral-500 leading-tight">10 Oct 2015 – 13 May 2022</div>
          </div>

          <div className="flex items-center gap-1 bg-neutral-200/70 rounded-full px-1 py-1">
            <button className="w-7 h-7 grid place-items-center rounded-full bg-white text-neutral-700">−</button>
            <button className="w-7 h-7 grid place-items-center rounded-full bg-white text-neutral-700">+</button>
          </div>

          <div className="flex items-center bg-neutral-200/70 rounded-full p-0.5 text-[13px] font-medium">
            {(["Years", "Months", "All Photos"] as const).map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className={`px-4 py-1.5 rounded-full transition ${tab === t ? "bg-white text-neutral-900" : "text-neutral-600"}`}
              >
                {t}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-1 bg-neutral-200/70 rounded-full px-1 py-1">
            <button className="w-7 h-7 grid place-items-center rounded-full bg-white text-neutral-700" aria-label="Layout">▦</button>
            <button className="w-7 h-7 grid place-items-center rounded-full bg-white text-neutral-700" aria-label="Filter">≡</button>
            <button className="w-7 h-7 grid place-items-center rounded-full bg-white text-neutral-700" aria-label="More">⋯</button>
          </div>

          <div className="flex items-center gap-1 bg-neutral-200/70 rounded-full px-1 py-1">
            <button className="w-7 h-7 grid place-items-center rounded-full bg-white text-neutral-700" aria-label="Info">ⓘ</button>
            <button className="w-7 h-7 grid place-items-center rounded-full bg-white text-neutral-700" aria-label="Share">↑</button>
            <button className="w-7 h-7 grid place-items-center rounded-full bg-white text-neutral-700" aria-label="Favorite">♡</button>
            <button className="w-7 h-7 grid place-items-center rounded-full bg-white text-neutral-700" aria-label="Rotate">⟳</button>
          </div>

          <button className="w-8 h-8 grid place-items-center rounded-full text-neutral-700" aria-label="Search">🔍</button>
        </div>
      </div>

      <div className="flex-1 flex min-h-0">
        <aside className="w-56 shrink-0 bg-[#fbf3df] border-r border-black/10 overflow-y-auto py-3 text-[13px] text-neutral-800">
          {sidebarSections.map((section, i) => (
            <div key={i} className="px-2 mb-3">
              {section.heading && (
                <div className="px-3 pt-2 pb-1 text-[13px] font-semibold text-neutral-500 uppercase tracking-wide">{section.heading}</div>
              )}
              {section.items.map((it) => {
                const isActive = activeNav === it.label;
                return (
                  <button
                    key={it.label}
                    onClick={() => setActiveNav(it.label)}
                    className={`w-full flex items-center gap-2 px-3 py-1.5 rounded-md text-left ${isActive ? "bg-emerald-100/80 text-emerald-900 font-medium" : "hover:bg-black/5"}`}
                  >
                    <span className="w-5 grid place-items-center text-[13px]">{it.icon}</span>
                    <span className="flex-1 truncate">{it.label}</span>
                    {it.locked && <span className="text-neutral-400 text-[13px]">🔒</span>}
                  </button>
                );
              })}
            </div>
          ))}
        </aside>

        <div className="flex-1 overflow-y-auto bg-white p-6 space-y-10">
          <section>
            <h2 className="text-[13px] font-semibold text-neutral-900 mb-4">Expense Tracker</h2>
            <div className="grid grid-cols-2 gap-4">
              {[ExpensePhoto1, ExpensePhoto2, ExpensePhoto3, ExpensePhoto4].map((img, i) => (
                <div key={i} className="rounded-lg overflow-hidden bg-neutral-100 border border-neutral-200 aspect-[16/10]">
                  <img src={img.url} alt={`Expense Tracker ${i + 1}`} className="w-full h-full object-cover block" />
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-[13px] font-semibold text-neutral-900 mb-4">The Mind</h2>
            <div className="grid grid-cols-2 gap-4">
              {[MindPhoto1, MindPhoto2, MindPhoto3, MindPhoto4].map((img, i) => (
                <div key={i} className="rounded-lg overflow-hidden bg-neutral-100 border border-neutral-200 aspect-[16/10]">
                  <img src={img.url} alt={`The Mind ${i + 1}`} className="w-full h-full object-cover block" />
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-[13px] font-semibold text-neutral-900 mb-4">Nexus AI</h2>
            <div className="grid grid-cols-2 gap-4">
              {[NexusPhoto1, NexusPhoto2, NexusPhoto3, NexusPhoto4].map((img, i) => (
                <div key={i} className="rounded-lg overflow-hidden bg-neutral-100 border border-neutral-200 aspect-[16/10]">
                  <img src={img.url} alt={`Nexus AI ${i + 1}`} className="w-full h-full object-cover block" />
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-[13px] font-semibold text-neutral-900 mb-4">Eato</h2>
            <div className="grid grid-cols-2 gap-4">
              {[EatoPhoto1, EatoPhoto2, EatoPhoto3, EatoPhoto4].map((img, i) => (
                <div key={i} className="rounded-lg overflow-hidden bg-neutral-100 border border-neutral-200 aspect-[16/10]">
                  <img src={img.url} alt={`Eato ${i + 1}`} className="w-full h-full object-cover block" />
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-[13px] font-semibold text-neutral-900 mb-4">Visa Process</h2>
            <div className="grid grid-cols-2 gap-4">
              {[VisaPhoto1, VisaPhoto2, VisaPhoto3, VisaPhoto4].map((img, i) => (
                <div key={i} className="rounded-lg overflow-hidden bg-neutral-100 border border-neutral-200 aspect-[16/10]">
                  <img src={img.url} alt={`Visa Process ${i + 1}`} className="w-full h-full object-cover block" />
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

function Index() {
  const [aboutOpen, setAboutOpen] = useState(false);
  const [filesOpen, setFilesOpen] = useState(false);
  const [projectOpen, setProjectOpen] = useState<ProjectKey | null>(null);
  const [mailOpen, setMailOpen] = useState(false);
  const [safariOpen, setSafariOpen] = useState(false);
  const [chromeOpen, setChromeOpen] = useState(false);
  const [previewOpen, setPreviewOpen] = useState(false);
  const [notesOpen, setNotesOpen] = useState(false);
  const [photosOpen, setPhotosOpen] = useState(false);
  const [messagesOpen, setMessagesOpen] = useState(false);
  const [calendarOpen, setCalendarOpen] = useState(false);
  const [pdfViewer, setPdfViewer] = useState<{ url: string; name: string; pages?: string[] } | null>(null);

  const [caseStudyOpen, setCaseStudyOpen] = useState<string | null>(null);
  const [finderInitialFolder, setFinderInitialFolder] = useState<string | null>(null);

  const openCaseStudy = (name: string) => {
    if (!FOLDER_CASE_STUDIES[name]) return;
    setFinderInitialFolder(name);
    setFilesOpen(true);
  };

  // Configurable day/night schedule (local time, 24h). Dark from NIGHT_START until DAY_START.
  const DAY_START_HOUR = 7;   // 07:00 → switch to light
  const NIGHT_START_HOUR = 19; // 19:00 → switch to dark
  const isNightTime = () => {
    const h = new Date().getHours();
    return h >= NIGHT_START_HOUR || h < DAY_START_HOUR;
  };

  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem("portfolio-theme");
    if (saved === "dark") setIsDark(true);
    else if (saved === "light") setIsDark(false);
    else setIsDark(isNightTime());
  }, []);

  useEffect(() => {
    if (typeof document === "undefined") return;
    document.documentElement.classList.toggle("dark", isDark);
  }, [isDark]);

  // Auto-switch on schedule when no manual override is set
  useEffect(() => {
    if (typeof window === "undefined") return;
    const tick = () => {
      const saved = localStorage.getItem("portfolio-theme");
      if (saved === "dark" || saved === "light") return; // manual override active
      setIsDark(isNightTime());
    };
    tick();
    const id = window.setInterval(tick, 60_000);
    return () => window.clearInterval(id);
  }, []);

  const handleToggleTheme = () => {
    setIsDark((v) => {
      const next = !v;
      localStorage.setItem("portfolio-theme", next ? "dark" : "light");
      return next;
    });
  };

  return (
    <div
      className={`${mounted && isDark ? "dark " : ""}relative min-h-screen w-full overflow-hidden font-sans bg-cover bg-center bg-no-repeat text-[13px]`}
      style={{
        backgroundImage: `url(${macosWallpaper.url})`,
      }}
    >
      {/* Dark mode wallpaper overlay */}
      {mounted && isDark && (
        <div className="pointer-events-none absolute inset-0 bg-black/55 z-0" aria-hidden />
      )}
      <MenuBar
        onOpenResume={() => setPreviewOpen(true)}
        onOpenContact={() => setMailOpen(true)}
        isDark={mounted ? isDark : false}
        onToggleTheme={handleToggleTheme}
      />

      <main className="relative pt-7 min-h-screen">

        <StickyNote />
        <PinkStickyNote />


        {/* Desktop icons — two-column grid */}
        <div className="absolute right-3 top-16 flex flex-row items-start gap-1 z-10 max-h-[calc(100svh-6rem)] overflow-y-auto [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <div className="flex flex-col items-center gap-1">
            <DesktopFolder label="Project 01 (The Mind)" onClick={() => openCaseStudy("The Mind")} />
            <DesktopFolder label="Project 03 (Nexus AI)" onClick={() => openCaseStudy("Nexus AI")} />
            <DesktopFolder label="Project 05 (Eato)" onClick={() => openCaseStudy("Eato")} />
          </div>
          <div className="flex flex-col items-center gap-1">
            <DesktopFolder label="Project 02" onClick={() => openCaseStudy("Expense Tracker")} />
            <DesktopFolder label="About Me" onClick={() => setAboutOpen(true)} />
          </div>
        </div>

        <div className="window-invert pointer-events-none absolute inset-0 z-20 [&>*]:pointer-events-auto">
          {aboutOpen && <AboutMeWindow onClose={() => setAboutOpen(false)} />}
          {filesOpen && <FinderWindow initialFolder={finderInitialFolder} onClose={() => { setFilesOpen(false); setFinderInitialFolder(null); }} />}
          {projectOpen && <ProjectWindow initial={projectOpen} onClose={() => setProjectOpen(null)} />}
          {mailOpen && <MailWindow onClose={() => setMailOpen(false)} />}
          {safariOpen && <SafariWindow onClose={() => setSafariOpen(false)} />}
          {chromeOpen && <ChromeWindow onClose={() => setChromeOpen(false)} />}
          {previewOpen && <PreviewWindow onClose={() => setPreviewOpen(false)} />}
          {notesOpen && <NotesWindow onClose={() => setNotesOpen(false)} />}
          {photosOpen && <PhotosWindow onClose={() => setPhotosOpen(false)} />}
          {messagesOpen && <MessagesWindow onClose={() => setMessagesOpen(false)} />}
          {calendarOpen && <CalendarWindow onClose={() => setCalendarOpen(false)} />}
          <PdfViewerPortal pdfViewer={pdfViewer} onClose={() => setPdfViewer(null)} />
          <CaseStudyPortal name={caseStudyOpen} onClose={() => setCaseStudyOpen(null)} />
        </div>

      </main>

      <Dock onOpen={(name) => {
        if (name === "Notes") setNotesOpen(true);
        if (name === "Finder") setFilesOpen(true);
        if (name === "Mail") setMailOpen(true);
        if (name === "Safari") setSafariOpen(true);
        if (name === "Chrome") setChromeOpen(true);
        if (name === "PDF" || name === "Preview") setPreviewOpen(true);
        if (name === "Photos") setPhotosOpen(true);
        if (name === "Messages") setMessagesOpen(true);
        if (name === "Calendar") setCalendarOpen(true);
      }} />
    </div>
  );
}
