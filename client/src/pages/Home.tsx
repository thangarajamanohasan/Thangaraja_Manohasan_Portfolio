import React, { useState, useEffect } from "react";
import { Figma } from "lucide-react";
import { motion } from "framer-motion";
import {
  Code,
  Server,
  Database,
  Layers,
  Cpu,
  Terminal,
  Briefcase,
  GraduationCap,
  Mail,
  Phone,
  MapPin,
  Globe,
  ExternalLink,
  Github,
  Linkedin,
  Facebook,
  Instagram,
  MessageSquare,
  Send,
  Check,
  Sun,
  Moon,
  Share2,
  Menu,
  X,
  ArrowRight,
  ShieldCheck,
  Wrench,
  Laptop,
  Award,
  User,
  Sparkles,
  Star,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("all");
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    toast.info(darkMode ? "Switched to Light Mode" : "Switched to Dark Mode");
  };

  const handleDownloadResume = () => {
    const link = document.createElement("a");

    link.href = "/Thangaraja_Manohasan_Resume.pdf";

    link.download = "Thangaraja_Manohasan_Resume.pdf";

    document.body.appendChild(link);

    link.click();

    document.body.removeChild(link);

    toast.success("Resume downloaded successfully!");
  };

  const handleShareContact = () => {
    const contactInfo = `Thangaraja Manohasan (Mano)
Web Developer | IT Professional | Digital Solutions Creator
Email: donalmano2743@gmail.com
WhatsApp: +94 75 562 7129
LinkedIn: linkedin.com/in/thangaraja-manohasan-973871312/
GitHub: github.com/thangarajamanohasan
Portfolio: Modern Minimal Tech Portfolio`;

    if (navigator.clipboard) {
      navigator.clipboard
        .writeText(contactInfo)
        .then(() => {
          toast.success("Contact information copied to clipboard!");
        })
        .catch(() => {
          fallbackCopyText(contactInfo);
        });
    } else {
      fallbackCopyText(contactInfo);
    }
  };


  const [reviews, setReviews] = useState<
    {
      id: number;
      name: string;
      email: string;
      rating: number;
      message: string;
      date: string;
    }[]
  >([]);

  const [reviewForm, setReviewForm] = useState({
    name: "",
    email: "",
    rating: 5,
    message: "",
  });

  const [isReviewSubmitting, setIsReviewSubmitting] = useState(false);

  useEffect(() => {
    const savedReviews = localStorage.getItem("manoPortfolioReviews");

    if (savedReviews) {
      setReviews(JSON.parse(savedReviews));
    }
  }, []);


  const handleReviewSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (
      !reviewForm.name.trim() ||
      !reviewForm.email.trim() ||
      !reviewForm.message.trim()
    ) {
      toast.error("Please complete all required fields.");
      return;
    }

    setIsReviewSubmitting(true);

    const newReview = {
      id: Date.now(),
      name: reviewForm.name.trim(),
      email: reviewForm.email.trim(),
      rating: reviewForm.rating,
      message: reviewForm.message.trim(),
      date: new Date().toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
      }),
    };

    const updatedReviews = [newReview, ...reviews];

    setReviews(updatedReviews);

    localStorage.setItem(
      "manoPortfolioReviews",
      JSON.stringify(updatedReviews)
    );

    setReviewForm({
      name: "",
      email: "",
      rating: 5,
      message: "",
    });

    setIsReviewSubmitting(false);

    toast.success("Thank you! Your review has been submitted.");
  };

  const fallbackCopyText = (text: string) => {
    const textArea = document.createElement("textarea");
    textArea.value = text;
    textArea.style.position = "fixed";
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    try {
      document.execCommand("copy");
      toast.success("Contact information copied to clipboard!");
    } catch (err) {
      toast.error("Failed to copy contact info.");
    }
    document.body.removeChild(textArea);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const mailBody = `
Name: ${contactForm.name}

Email: ${contactForm.email}

Subject: ${contactForm.subject}

Message:
${contactForm.message}
`;

    const mailtoLink = `mailto:donalmano2743@gmail.com?subject=${encodeURIComponent(
      contactForm.subject
    )}&body=${encodeURIComponent(mailBody)}`;

    window.location.href = mailtoLink;
  };

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      {/* Navigation Bar */}
      <header className="sticky top-0 z-50 bg-background/90 backdrop-blur-md border-b border-border shadow-xs">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center text-white font-bold text-xl shadow-md group-hover:scale-105 transition-transform duration-200 justify-center">
              M
            </div>
            <div>
              <span className="font-bold text-lg tracking-tight font-heading">
                Thangaraja Manohasan
              </span>
              <span className="block text-xs text-muted-foreground">
                Mano | Web Developer
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 font-medium text-sm">
            <a
              href="#about"
              className="text-muted-foreground hover:text-blue-600 transition-colors"
            >
              About
            </a>
            <a
              href="#skills"
              className="text-muted-foreground hover:text-blue-600 transition-colors"
            >
              Skills
            </a>
            <a
              href="#education"
              className="text-muted-foreground hover:text-blue-600 transition-colors"
            >
              Education
            </a>
            <a
              href="#experience"
              className="text-muted-foreground hover:text-blue-600 transition-colors"
            >
              Experience
            </a>
            <a
              href="#projects"
              className="text-muted-foreground hover:text-blue-600 transition-colors"
            >
              Projects
            </a>
            <a
              href="#services"
              className="text-muted-foreground hover:text-blue-600 transition-colors"
            >
              Services
            </a>
            <a
              href="#contact"
              className="text-muted-foreground hover:text-blue-600 transition-colors"
            >
              Contact
            </a>
          </nav>

          {/* Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={handleShareContact}
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg border border-border text-xs font-semibold hover:bg-secondary transition-colors"
              title="Copy and Share Contact Info"
            >
              <Share2 className="w-3.5 h-3.5 text-blue-600" />
              <span>Share Contact</span>
            </button>
            <button
              onClick={toggleDarkMode}
              className="p-2.5 rounded-lg border border-border hover:bg-secondary transition-colors text-muted-foreground hover:text-foreground"
              aria-label="Toggle Theme"
            >
              {darkMode ? (
                <Sun className="w-4 h-4 text-amber-400" />
              ) : (
                <Moon className="w-4 h-4 text-blue-600" />
              )}
            </button>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600 text-white text-xs font-semibold hover:bg-blue-700 shadow-sm transition-all"
            >
              Hire Me
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg border border-border"
              aria-label="Toggle Theme"
            >
              {darkMode ? (
                <Sun className="w-4 h-4 text-amber-400" />
              ) : (
                <Moon className="w-4 h-4 text-blue-600" />
              )}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg border border-border"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-b border-border bg-card px-4 py-4 space-y-3">
            <nav className="flex flex-col space-y-2 text-sm font-medium">
              <a
                href="#about"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-md hover:bg-secondary"
              >
                About
              </a>
              <a
                href="#skills"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-md hover:bg-secondary"
              >
                Skills
              </a>
              <a
                href="#education"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-md hover:bg-secondary"
              >
                Education
              </a>
              <a
                href="#experience"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-md hover:bg-secondary"
              >
                Experience
              </a>
              <a
                href="#projects"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-md hover:bg-secondary"
              >
                Projects
              </a>
              <a
                href="#services"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-md hover:bg-secondary"
              >
                Services
              </a>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-md hover:bg-secondary"
              >
                Contact
              </a>
            </nav>
            <div className="pt-2 flex flex-col gap-2">
              <button
                onClick={() => {
                  handleShareContact();
                  setMobileMenuOpen(false);
                }}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg border border-border text-xs font-semibold hover:bg-secondary"
              >
                <Share2 className="w-4 h-4 text-blue-600" />
                <span>Share Contact Info</span>
              </button>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-blue-600 text-white text-xs font-semibold hover:bg-blue-700"
              >
                Hire Me
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 lg:py-32 bg-gradient-to-b from-background via-secondary/30 to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 dark:bg-blue-950/50 border border-blue-200 dark:border-blue-800 text-blue-700 dark:text-blue-300 text-xs font-semibold tracking-wide">
                <Sparkles className="w-3.5 h-3.5 text-blue-600" />
                <span>Available for Freelance & Professional Projects</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight font-heading leading-tight">
                Hello, I'm <br />
                <span className="text-blue-600 dark:text-blue-400">
                  Thangaraja Manohasan
                </span>
                <span className="block text-2xl sm:text-3xl lg:text-4xl font-semibold mt-2 text-muted-foreground">
                  (Mano) — Web Developer & Digital Solutions Creator
                </span>
              </h1>
              <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto lg:mx-0 leading-relaxed font-sans">
                I am a passionate Web Developer, IT Professional, and HND IT
                student specializing in creating modern websites, web
                applications, database-driven systems, and robust digital
                solutions that solve real-world problems.
              </p>
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
                <a
                  href="#projects"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-blue-600 text-white font-semibold text-sm hover:bg-blue-700 shadow-md hover:shadow-lg transition-all"
                >
                  <span>View Projects</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
                <button
                  onClick={handleDownloadResume}
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900 dark:bg-slate-800 text-white font-semibold text-sm hover:bg-slate-800 dark:hover:bg-slate-700 shadow-md transition-all"
                >
                  <Award className="w-4 h-4 text-blue-400" />
                  <span>Download Resume</span>
                </button>
                <button
                  onClick={handleShareContact}
                  className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl border border-blue-200 dark:border-blue-800 bg-blue-50/50 dark:bg-blue-950/20 text-blue-700 dark:text-blue-300 font-semibold text-sm hover:bg-blue-100/50 transition-all"
                >
                  <Share2 className="w-4 h-4" />
                  <span>Share Contact</span>
                </button>
              </div>

              {/* Quick stats / badges */}
              <div className="pt-8 grid grid-cols-3 gap-4 border-t border-border max-w-lg mx-auto lg:mx-0">
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-blue-600 font-heading">
                    HND IT
                  </div>
                  <div className="text-xs text-muted-foreground font-medium">
                    SLIATE Student
                  </div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-blue-600 font-heading">
                    NVQ 04
                  </div>
                  <div className="text-xs text-muted-foreground font-medium">
                    ICT Technician
                  </div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-blue-600 font-heading">
                    WebCraft
                  </div>
                  <div className="text-xs text-muted-foreground font-medium">
                    Startup Business Partner
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Animated Tech Radar Sci-Fi Ring Profile Container */}
            <div className="lg:col-span-5 flex justify-center items-center">
              <div className="relative w-80 h-80 sm:w-96 sm:h-96 flex items-center justify-center animate-float">
                {/* Outer Rotating Segmented Tech Ring 1 */}
                <div className="absolute inset-0 rounded-full border-2 border-dashed border-blue-500/40 animate-[spin_20s_linear_infinite]"></div>

                {/* Middle Rotating Tech Ring 2 with partial borders mimicking reference image */}
                <div
                  className="absolute inset-4 rounded-full border-4 border-solid border-slate-900/80 dark:border-blue-400/60 border-t-transparent border-r-transparent animate-[spin_15s_linear_infinite_reverse]"
                  style={{ clipPath: "polygon(0 0, 100% 0, 100% 80%, 0 80%)" }}
                ></div>
                <div className="absolute inset-8 rounded-full border-2 border-solid border-blue-600/50 border-b-transparent border-l-transparent animate-[spin_10s_linear_infinite]"></div>

                {/* Inner Pulsing Glow Ring */}
                <div className="absolute inset-12 rounded-full bg-gradient-to-tr from-blue-600/20 to-indigo-600/20 blur-md animate-pulse"></div>

                {/* Central Round Profile Image / Avatar Container */}
                <div className="relative z-10 w-48 h-48 sm:w-56 sm:h-56 rounded-full p-2 bg-gradient-to-tr from-blue-600 to-indigo-600 shadow-2xl flex items-center justify-center">
                  <div className="w-full h-full rounded-full overflow-hidden border-4 border-card relative">
                    <img
                      src="/profile.png"
                      alt="Thangaraja Manohasan"
                      className="w-full h-full object-cover rounded-full transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                </div>

                {/* Floating Orbiting Tech Badges */}
                <div className="absolute top-2 left-12 px-3 py-1 rounded-full bg-card border border-border shadow-md text-[11px] font-semibold text-blue-600 animate-bounce">
                  Full Stack
                </div>
                <div className="absolute bottom-6 right-8 px-3 py-1 rounded-full bg-card border border-border shadow-md text-[11px] font-semibold text-indigo-600">
                  SLIATE HND IT
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <motion.section
        id="about"
        className="py-20 bg-card border-y border-border"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
            <h2 className="text-xs font-bold tracking-widest text-blue-600 uppercase font-heading">
              Professional Profile
            </h2>
            <h3 className="text-3xl sm:text-4xl font-extrabold tracking-tight font-heading">
              About Me & Career Vision
            </h3>
            <p className="text-muted-foreground text-base">
              Combining technical precision with creative digital craftsmanship
              to deliver exceptional web solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 space-y-6">
              <div className="p-6 rounded-2xl bg-secondary/50 border border-border space-y-4">
                <h4 className="font-bold text-lg font-heading flex items-center gap-2">
                  <User className="w-5 h-5 text-blue-600" /> Quick Personal
                  Details
                </h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between py-1.5 border-b border-border/60">
                    <span className="text-muted-foreground">Full Name</span>
                    <span className="font-medium">Thangaraja Manohasan</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-border/60">
                    <span className="text-muted-foreground">
                      Preferred Name
                    </span>
                    <span className="font-medium">Mano</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-border/60">
                    <span className="text-muted-foreground">Date of Birth</span>
                    <span className="font-medium">27 January 2005</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-border/60">
                    <span className="text-muted-foreground">Location</span>
                    <span className="font-medium">Sri Lanka</span>
                  </div>
                  <div className="flex justify-between py-1.5">
                    <span className="text-muted-foreground">
                      Primary Institution
                    </span>
                    <span className="font-medium">SLIATE (HND IT)</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-6">
              <div className="p-4 rounded-xl bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-900 text-blue-900 dark:text-blue-200 font-medium text-sm sm:text-base italic">
                "A young Web Developer and IT professional who creates
                real-world digital solutions through modern web technologies,
                database systems, and innovative software development."
              </div>
              <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                I am a passionate Web Developer, IT Professional, and HND IT
                student specializing in creating modern websites, web
                applications, database-driven systems, and digital solutions. I
                focus on converting ideas into practical digital products by
                combining frontend development, backend architecture, database
                management, UI/UX design, system analysis, and business
                automation.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl border border-border bg-background space-y-2">
                  <div className="flex items-center gap-2 font-bold font-heading text-blue-600">
                    <Briefcase className="w-4 h-4" /> Professional Identity
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Experienced in building business websites, portfolio
                    websites, landing pages, web apps, management systems, and
                    providing technical IT support.
                  </p>
                </div>
                <div className="p-4 rounded-xl border border-border bg-background space-y-2">
                  <div className="flex items-center gap-2 font-bold font-heading text-blue-600">
                    <Sparkles className="w-4 h-4" /> Career Vision
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    To become a skilled Full Stack Web Developer and IT
                    professional by developing innovative software solutions and
                    solving real-world challenges.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Technical Skill Set */}
      <motion.section
        id="skills"
        className="py-20 bg-card border-y border-border"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
            <h2 className="text-xs font-bold tracking-widest text-blue-600 uppercase font-heading">
              Expertise & Stack
            </h2>
            <h3 className="text-3xl sm:text-4xl font-extrabold tracking-tight font-heading">
              Technical Skill Set
            </h3>
            <p className="text-muted-foreground text-base">
              A comprehensive toolkit covering modern frontend, backend systems,
              database administration, and hardware troubleshooting.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Frontend Development */}

            <Card className="border border-border bg-card shadow-xs hover:shadow-md transition-shadow">
              <CardContent className="p-6 space-y-4">
                <div className="w-12 h-12 rounded-xl bg-blue-600/10 text-blue-600 flex items-center justify-center">
                  <Code className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-bold font-heading">
                  Frontend Development
                </h4>
                <p className="text-xs text-muted-foreground">
                  Building responsive, animated, and user-centric interfaces.
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {[
                    "HTML5",
                    "CSS3",
                    "JavaScript",
                    "Bootstrap 5",
                    "Tailwind CSS",
                    "Responsive Design",
                    "UI/UX Design",
                    "Animation Interfaces",
                  ].map((skill, idx) => (
                    <Badge
                      key={idx}
                      variant="secondary"
                      className="bg-secondary text-foreground text-xs font-medium"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Backend Development */}
            <Card className="border border-border bg-card shadow-xs hover:shadow-md transition-shadow">
              <CardContent className="p-6 space-y-4">
                <div className="w-12 h-12 rounded-xl bg-blue-600/10 text-blue-600 flex items-center justify-center">
                  <Server className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-bold font-heading">
                  Backend & Database
                </h4>
                <p className="text-xs text-muted-foreground">
                  Developing secure server-side logic and relational data
                  systems.
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {[
                    "PHP",
                    "Core PHP",
                    "MySQL",
                    "MariaDB",
                    "Database Design",
                    "CRUD Systems",
                    "Authentication",
                    "Admin Dashboards",
                  ].map((skill, idx) => (
                    <Badge
                      key={idx}
                      variant="secondary"
                      className="bg-secondary text-foreground text-xs font-medium"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Programming & Tools */}
            <Card className="border border-border bg-card shadow-xs hover:shadow-md transition-shadow">
              <CardContent className="p-6 space-y-4">
                <div className="w-12 h-12 rounded-xl bg-blue-600/10 text-blue-600 flex items-center justify-center">
                  <Terminal className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-bold font-heading">
                  Programming & Tools
                </h4>
                <p className="text-xs text-muted-foreground">
                  Languages and professional development environments.
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {[
                    "JavaScript",
                    "PHP",
                    "C# (WinForms)",
                    "SQL",
                    "Git",
                    "GitHub",
                    "VS Code",
                    "Visual Studio",
                    "XAMPP",
                    "Figma",
                    "Photoshop",
                  ].map((skill, idx) => (
                    <Badge
                      key={idx}
                      variant="secondary"
                      className="bg-secondary text-foreground text-xs font-medium"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Libraries & APIs */}
            <Card className="border border-border bg-card shadow-xs hover:shadow-md transition-shadow">
              <CardContent className="p-6 space-y-4">
                <div className="w-12 h-12 rounded-xl bg-blue-600/10 text-blue-600 flex items-center justify-center">
                  <Layers className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-bold font-heading">
                  Libraries & APIs
                </h4>
                <p className="text-xs text-muted-foreground">
                  Integrating external services and interactive UI libraries.
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {[
                    "AOS",
                    "Swiper.js",
                    "Chart.js",
                    "PHPMailer",
                    "Stripe API",
                    "Google Maps API",
                    "Weather API",
                    "VirusTotal API",
                  ].map((skill, idx) => (
                    <Badge
                      key={idx}
                      variant="secondary"
                      className="bg-secondary text-foreground text-xs font-medium"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Hardware & IT Support */}
            <Card className="border border-border bg-card shadow-xs hover:shadow-md transition-shadow">
              <CardContent className="p-6 space-y-4">
                <div className="w-12 h-12 rounded-xl bg-blue-600/10 text-blue-600 flex items-center justify-center">
                  <Cpu className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-bold font-heading">
                  Hardware & Support
                </h4>
                <p className="text-xs text-muted-foreground">
                  Computer systems, peripheral maintenance, and networking.
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {[
                    "Hardware Maintenance",
                    "Printer Troubleshooting",
                    "Peripheral Support",
                    "System Diagnosis",
                    "Basic Networking",
                    "Cloud Operations",
                  ].map((skill, idx) => (
                    <Badge
                      key={idx}
                      variant="secondary"
                      className="bg-secondary text-foreground text-xs font-medium"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Languages & Soft Skills */}
            <Card className="border border-border bg-card shadow-xs hover:shadow-md transition-shadow">
              <CardContent className="p-6 space-y-4">
                <div className="w-12 h-12 rounded-xl bg-blue-600/10 text-blue-600 flex items-center justify-center">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-bold font-heading">
                  Languages & Strengths
                </h4>
                <p className="text-xs text-muted-foreground">
                  Communication capabilities and professional mindset.
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {[
                    "Tamil (Native)",
                    "English (Fluent)",
                    "Sinhala (Conversational)",
                    "Quick Learning",
                    "Problem Solving",
                    "Leadership",
                    "Team Collaboration",
                  ].map((skill, idx) => (
                    <Badge
                      key={idx}
                      variant="secondary"
                      className="bg-secondary text-foreground text-xs font-medium"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </motion.section>

      {/* Education & Certifications */}
      <motion.section
        id="education"
        className="py-20 bg-card border-y border-border"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
            <h2 className="text-xs font-bold tracking-widest text-blue-600 uppercase font-heading">
              Academic Journey
            </h2>
            <h3 className="text-3xl sm:text-4xl font-extrabold tracking-tight font-heading">
              Education & Certifications
            </h3>
            <p className="text-muted-foreground text-base">
              Continuous academic progression and vocational technical
              certifications.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Education Timeline */}
            <div className="space-y-6">
              <h4 className="text-xl font-bold font-heading flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-blue-600" /> Academic
                Qualifications
              </h4>
              <div className="space-y-6 border-l-2 border-border pl-6 ml-2">
                <div className="relative space-y-2">
                  <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-blue-600 border-4 border-card"></div>
                  <span className="text-xs font-bold px-2.5 py-1 rounded-md bg-blue-50 dark:bg-blue-950 text-blue-700 dark:text-blue-300">
                    Present
                  </span>
                  <h5 className="font-bold text-lg font-heading">
                    Higher National Diploma in IT (HND IT)
                  </h5>
                  <p className="text-sm font-medium text-muted-foreground">
                    Sri Lanka Institute of Advanced Technological Education
                    (SLIATE)
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Focus areas: Software Development, Web Technologies,
                    Database Management, System Analysis & Design, Application
                    Development.
                  </p>
                </div>

                <div className="relative space-y-2">
                  <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-blue-600 border-4 border-card"></div>
                  <span className="text-xs font-bold px-2.5 py-1 rounded-md bg-secondary text-muted-foreground">
                    2023 / 2024
                  </span>
                  <h5 className="font-bold text-lg font-heading">
                    G.C.E Advanced Level Qualified
                  </h5>
                  <p className="text-sm font-medium text-muted-foreground">
                    CP/N/Talawakelle Tamil Maha Vidyalaya (National School)
                  </p>
                </div>

                <div className="relative space-y-2">
                  <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-blue-600 border-4 border-card"></div>
                  <span className="text-xs font-bold px-2.5 py-1 rounded-md bg-secondary text-muted-foreground">
                    2020
                  </span>
                  <h5 className="font-bold text-lg font-heading">
                    G.C.E Ordinary Level Qualified
                  </h5>
                  <p className="text-sm font-medium text-muted-foreground">
                    CP/N/Talawakelle Tamil Maha Vidyalaya (National School)
                  </p>
                </div>
              </div>
            </div>

            {/* Professional Certifications */}
            <div className="space-y-6">
              <h4 className="text-xl font-bold font-heading flex items-center gap-2">
                <Award className="w-5 h-5 text-blue-600" /> Professional
                Certifications
              </h4>
              <div className="space-y-6">
                <div className="p-6 rounded-2xl bg-secondary/50 border border-border space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold px-2.5 py-1 rounded-md bg-blue-600 text-white">
                      Feb 2024 – Aug 2024
                    </span>
                    <span className="text-xs text-muted-foreground font-medium">
                      Thondaman Vocational Training Centre
                    </span>
                  </div>
                  <h5 className="font-bold text-lg font-heading">
                    NVQ Level 04 – ICT Technician
                  </h5>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Completed comprehensive modules covering Computer
                    Applications, Word Processing, Spreadsheets, Cloud
                    Computing, Relational Databases using SQL, System Analysis &
                    Design, Desktop Application Development, Web Development,
                    and Hardware & Peripherals.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-secondary/50 border border-border space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold px-2.5 py-1 rounded-md bg-blue-600 text-white">
                      04 Months
                    </span>
                    <span className="text-xs text-muted-foreground font-medium">
                      Orion International Campus
                    </span>
                  </div>
                  <h5 className="font-bold text-lg font-heading">
                    Web Development Certification
                  </h5>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Completed specialized online course covering Web
                    Introduction, HTML, CSS, Domain Setup, Hosting, and
                    WordPress fundamentals.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Professional Experience & Training */}
      <motion.section
        id="experience"
        className="py-20 bg-card border-y border-border"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
            <h2 className="text-xs font-bold tracking-widest text-blue-600 uppercase font-heading">
              Career History
            </h2>
            <h3 className="text-3xl sm:text-4xl font-extrabold tracking-tight font-heading">
              Professional Experience & Training
            </h3>
            <p className="text-muted-foreground text-base">
              Real-world industry practice, technical training workshops, and
              startup development.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border border-border bg-card shadow-xs hover:shadow-md transition-shadow">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold px-2.5 py-1 rounded-md bg-blue-50 dark:bg-blue-950 text-blue-700 dark:text-blue-300">
                    2024 - Present
                  </span>
                  <Briefcase className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h4 className="text-xl font-bold font-heading">
                    Web Developer & Partner
                  </h4>
                  <p className="text-xs font-semibold text-blue-600">
                    WebCraft Creations Startup Business Partner{" "}
                  </p>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Leading web development, UI implementation, database
                  architecture, client requirement analysis, and digital
                  solutions creation for businesses.
                </p>
              </CardContent>
            </Card>

            <Card className="border border-border bg-card shadow-xs hover:shadow-md transition-shadow">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold px-2.5 py-1 rounded-md bg-blue-50 dark:bg-blue-950 text-blue-700 dark:text-blue-300">
                    Recent
                  </span>
                  <Wrench className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h4 className="text-xl font-bold font-heading">
                    Technical Workshop Trainer
                  </h4>
                  <p className="text-xs font-semibold text-blue-600">
                    Thondaman Vocational Training Centre
                  </p>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Conducted one-day specialized technical workshops for the last
                  06 batches covering computer system networks, hardware
                  components, cloud computing, and digital communication
                  services.
                </p>
              </CardContent>
            </Card>

            <Card className="border border-border bg-card shadow-xs hover:shadow-md transition-shadow">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold px-2.5 py-1 rounded-md bg-blue-50 dark:bg-blue-950 text-blue-700 dark:text-blue-300">
                    06 Months
                  </span>
                  <Laptop className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h4 className="text-xl font-bold font-heading">
                    IT Support Trainee
                  </h4>
                  <p className="text-xs font-semibold text-blue-600">
                    Rechal Printers
                  </p>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Gained hands-on industrial training in printer maintenance,
                  hardware troubleshooting, computer support, customer
                  assistance, and technical problem solving.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </motion.section>

      {/* Major Projects Section */}
      <motion.section
        id="projects"
        className="py-20 bg-card border-y border-border"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
            <h2 className="text-xs font-bold tracking-widest text-blue-600 uppercase font-heading">
              Portfolio Work
            </h2>
            <h3 className="text-3xl sm:text-4xl font-extrabold tracking-tight font-heading">
              Major Projects & Solutions
            </h3>
            <p className="text-muted-foreground text-base">
              Explore real-world software applications, business platforms, and
              automation systems developed by Mano.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project 1 */}
            <Card className="border border-border bg-background shadow-xs hover:shadow-md transition-all flex flex-col justify-between">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <Badge
                    variant="outline"
                    className="text-blue-600 border-blue-200 bg-blue-50 dark:bg-blue-950"
                  >
                    Startup Project
                  </Badge>
                  <Globe className="w-5 h-5 text-blue-600" />
                </div>
                <h4 className="text-xl font-bold font-heading">
                  WebCraft Creations Agency
                </h4>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Digital solutions agency platform featuring client management,
                  service request system, payment integration, invoice
                  generation, and custom customer dashboard.
                </p>
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {["HTML", "CSS", "JS" ].map(
                    (t, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] px-2 py-0.5 rounded bg-secondary font-medium"
                      >
                        {t}
                      </span>
                    )
                  )}
                </div>

                <div className="flex items-center gap-3 pt-3 border-t border-border mt-2">
                  <a
                    href="https://github.com/thangarajamanohasan/WebCraft_Creations.git"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-muted-foreground hover:text-blue-600 transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    <span>Repository</span>
                  </a>

                  <a
                    href="https://web-craft-creations.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 hover:text-blue-700 transition-colors ml-auto"
                  >
                    <span>Live Demo</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </CardContent>
            </Card>

            {/* Project 2 */}
            <Card className="border border-border bg-background shadow-xs hover:shadow-md transition-all flex flex-col justify-between">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <Badge
                    variant="outline"
                    className="text-blue-600 border-blue-200 bg-blue-50 dark:bg-blue-950"
                  >
                    Real Business System
                  </Badge>
                  <Globe className="w-5 h-5 text-blue-600" />
                </div>
                <h4 className="text-xl font-bold font-heading">
                  Tea Trails Community Tours
                </h4>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Tourism management system offering room, package, and vehicle
                  bookings, customer reviews, admin management dashboards,
                  availability checking, and WhatsApp confirmation.
                </p>
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {["PHP", "MySQL", "Tailwind CSS", "WhatsApp API"].map(
                    (t, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] px-2 py-0.5 rounded bg-secondary font-medium"
                      >
                        {t}
                      </span>
                    )
                  )}
                </div>

                <div className="flex items-center gap-3 pt-3 border-t border-border mt-2">
                  <a
                    href="https://github.com/thangarajamanohasan/WebCraft_Creations.git"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-muted-foreground hover:text-blue-600 transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    <span>Repository</span>
                  </a>


                </div>
              </CardContent>
            </Card>

            {/* Project 3 */}
            <Card className="border border-border bg-background shadow-xs hover:shadow-md transition-all flex flex-col justify-between">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <Badge
                    variant="outline"
                    className="text-blue-600 border-blue-200 bg-blue-50 dark:bg-blue-950"
                  >
                    Frontend Web Development
                  </Badge>
                  <Globe className="w-5 h-5 text-blue-600" />
                </div>
                <h4 className="text-xl font-bold font-heading">
                  Personal Portfolio
                </h4>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  A modern, responsive personal portfolio website built with
                  React, TypeScript, Tailwind CSS, and Vite to showcase my
                  skills, projects, certifications, and professional profile. It
                  demonstrates component-based development, responsive design,
                  and modern UI/UX principles.
                </p>
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {["React", "TypeScript", "Tailwind CSS", "Vite"].map(
                    (t, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] px-2 py-0.5 rounded bg-secondary font-medium"
                      >
                        {t}
                      </span>
                    )
                  )}
                </div>

                <div className="flex items-center gap-3 pt-3 border-t border-border mt-2">
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-muted-foreground hover:text-blue-600 transition-colors"
                  >

                    <span>What you're looking at right now!
                    </span>
                  </a>


                </div>
              </CardContent>
            </Card>

            <Card className="border border-border bg-background shadow-xs hover:shadow-md transition-all flex flex-col justify-between">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <Badge
                    variant="outline"
                    className="text-blue-600 border-blue-200 bg-blue-50 dark:bg-blue-950"
                  >
                    UI/UX Design
                  </Badge>
                  <Figma className="w-5 h-5 text-blue-600" />
                </div>

                <h4 className="text-xl font-bold font-heading">
                  Food Ordering System Wireframe
                </h4>

                <p className="text-xs text-muted-foreground leading-relaxed">
                  Professional food ordering application wireframe designed in Figma,
                  featuring an intuitive user flow, modern mobile-first interface, and a
                  seamless ordering experience from menu browsing to checkout.
                </p>

                <div className="flex flex-wrap gap-1.5 pt-2">
                  {["Figma", "Wireframe", "UI/UX", "Prototype"].map((t, idx) => (
                    <span
                      key={idx}
                      className="text-[10px] px-2 py-0.5 rounded bg-secondary font-medium"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-3 pt-3 border-t border-border mt-2">
                  <a
                    href="https://www.figma.com/design/1GUqiUDRNYHJRuSfrUa6w3/GourmetDash?node-id=0-1&t=gYhEPn37qwijRzx6-1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-muted-foreground hover:text-blue-600 transition-colors"
                  >
                    <Figma className="w-4 h-4" />
                    <span>View Design</span>
                  </a>
                </div>
              </CardContent>
            </Card>



            {/* Project 4 */}
            <Card className="border border-border bg-background shadow-xs hover:shadow-md transition-all flex flex-col justify-between">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <Badge
                    variant="outline"
                    className="text-blue-600 border-blue-200 bg-blue-50 dark:bg-blue-950"
                  >
                    Automation Project
                  </Badge>
                  <Terminal className="w-5 h-5 text-blue-600" />
                </div>
                <h4 className="text-xl font-bold font-heading">
                  Student QR Attendance System
                </h4>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Digital attendance solution allowing quick QR code attendance
                  marking, student identification, digital tracking, and
                  automated workflow.
                </p>
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {["HTML", "CSS", "JavaScript", "QR Scanner API"].map(
                    (t, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] px-2 py-0.5 rounded bg-secondary font-medium"
                      >
                        {t}
                      </span>
                    )
                  )}
                </div>

                <div className="flex items-center gap-3 pt-3 border-t border-border mt-2">
                  <a
                    href="https://github.com/thangarajamanohasan/StudentQRAttendance.git"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-muted-foreground hover:text-blue-600 transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    <span>Repository</span>
                  </a>

                  <a
                    href="https://student-qr-attendance.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 hover:text-blue-700 transition-colors ml-auto"
                  >
                    <span>Live Demo</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </CardContent>
            </Card>

            {/* Project 5 */}
            <Card className="border border-border bg-background shadow-xs hover:shadow-md transition-all flex flex-col justify-between">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <Badge
                    variant="outline"
                    className="text-blue-600 border-blue-200 bg-blue-50 dark:bg-blue-950"
                  >
                    Desktop Development
                  </Badge>
                  <Cpu className="w-5 h-5 text-blue-600" />
                </div>
                <h4 className="text-xl font-bold font-heading">
                  C# Student Management System
                </h4>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Robust desktop application built with Windows Forms and SQL
                  Server for student registration, database management, and
                  record handling.
                </p>
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {["C#", "Windows Forms", "SQL Server", ".NET"].map(
                    (t, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] px-2 py-0.5 rounded bg-secondary font-medium"
                      >
                        {t}
                      </span>
                    )
                  )}
                </div>

                <div className="flex items-center gap-3 pt-3 border-t border-border mt-2">
                  <a
                    href="https://github.com/thangarajamanohasan/C-Student-Management-System.git"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-muted-foreground hover:text-blue-600 transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    <span>Repository</span>
                  </a>
                </div>
              </CardContent>
            </Card>

          </div>
        </div>
      </motion.section>

      {/* Services Section */}
      <motion.section
        id="services"
        className="py-20 bg-card border-y border-border"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
            <h2 className="text-xs font-bold tracking-widest text-blue-600 uppercase font-heading">
              What I Offer
            </h2>
            <h3 className="text-3xl sm:text-4xl font-extrabold tracking-tight font-heading">
              Professional Services
            </h3>
            <p className="text-muted-foreground text-base">
              Delivering high-quality digital solutions tailored to business and
              personal needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-6 rounded-2xl bg-card border border-border shadow-xs space-y-4">
              <div className="w-12 h-12 rounded-xl bg-blue-600/10 text-blue-600 flex items-center justify-center font-bold">
                01
              </div>
              <h4 className="text-lg font-bold font-heading">
                Website Development
              </h4>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Modern responsive websites, landing pages, and business
                portfolios designed for high performance and engagement.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-card border border-border shadow-xs space-y-4">
              <div className="w-12 h-12 rounded-xl bg-blue-600/10 text-blue-600 flex items-center justify-center font-bold">
                02
              </div>
              <h4 className="text-lg font-bold font-heading">
                Web Applications
              </h4>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Custom business systems, booking platforms, and database-driven
                admin dashboards with secure authentication.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-card border border-border shadow-xs space-y-4">
              <div className="w-12 h-12 rounded-xl bg-blue-600/10 text-blue-600 flex items-center justify-center font-bold">
                03
              </div>
              <h4 className="text-lg font-bold font-heading">UI/UX Design</h4>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Professional user interfaces, wireframes, and interactive
                prototypes built using Figma and modern design principles.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-card border border-border shadow-xs space-y-4">
              <div className="w-12 h-12 rounded-xl bg-blue-600/10 text-blue-600 flex items-center justify-center font-bold">
                04
              </div>
              <h4 className="text-lg font-bold font-heading">
                IT Support & Solutions
              </h4>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Hardware troubleshooting, printer maintenance, system diagnosis,
                networking basics, and technical training.
              </p>
            </div>
          </div>
        </div>
      </motion.section>


  
     


      {/* Contact Section */}
      <motion.section
        id="contact"
        className="py-20 bg-card border-y border-border"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
            <h2 className="text-xs font-bold tracking-widest text-blue-600 uppercase font-heading">
              Get In Touch
            </h2>
            <h3 className="text-3xl sm:text-4xl font-extrabold tracking-tight font-heading">
              Let's Build Something Together
            </h3>
            <p className="text-muted-foreground text-base">
              Ready to start your next project or looking for professional IT
              support? Reach out today.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left: Contact Info */}
            <div className="lg:col-span-5 space-y-6">
              <div className="p-8 rounded-2xl bg-secondary/50 border border-border space-y-6">
                <h4 className="text-xl font-bold font-heading">
                  Contact Information
                </h4>

                <div className="space-y-4 text-sm">
                  <a
                    href="mailto:donalmano2743@gmail.com"
                    className="flex items-center gap-3 p-3 rounded-xl bg-background hover:bg-blue-50 dark:hover:bg-blue-950/30 transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-blue-600/10 text-blue-600 flex items-center justify-center group-hover:scale-105 transition-transform">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="block text-xs text-muted-foreground">
                        Email
                      </span>
                      <span className="font-semibold text-foreground">
                        donalmano2743@gmail.com
                      </span>
                    </div>
                  </a>

                  <a
                    href="https://wa.me/94755627129"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-xl bg-background hover:bg-blue-50 dark:hover:bg-blue-950/30 transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-blue-600/10 text-blue-600 flex items-center justify-center group-hover:scale-105 transition-transform">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="block text-xs text-muted-foreground">
                        WhatsApp
                      </span>
                      <span className="font-semibold text-foreground">
                        +94 75 562 7129
                      </span>
                    </div>
                  </a>

                  <div className="flex items-center gap-3 p-3 rounded-xl bg-background">
                    <div className="w-10 h-10 rounded-lg bg-blue-600/10 text-blue-600 flex items-center justify-center">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="block text-xs text-muted-foreground">
                        Location
                      </span>
                      <span className="font-semibold text-foreground">
                        Sri Lanka
                      </span>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-border space-y-3">
                  <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                    Online Profiles
                  </span>
                  <div className="flex flex-wrap gap-2">
                    <a
                      href="https://linkedin.com/in/thangaraja-manohasan-973871312/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-lg bg-background border border-border text-muted-foreground hover:text-blue-600 hover:border-blue-600 transition-colors"
                      title="LinkedIn"
                    >
                      <Linkedin className="w-4 h-4" />
                    </a>
                    <a
                      href="https://github.com/thangarajamanohasan"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-lg bg-background border border-border text-muted-foreground hover:text-blue-600 hover:border-blue-600 transition-colors"
                      title="GitHub"
                    >
                      <Github className="w-4 h-4" />
                    </a>

                    {/* Facebook */}
                    <a
                      href="https://facebook.com/Thangaraja Manohasan"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-lg bg-background border border-border text-muted-foreground hover:text-blue-600 hover:border-blue-600 transition-colors"
                      title="Facebook"
                    >
                      <Facebook className="w-4 h-4" />
                    </a>

                    {/* Instagram */}
                    <a
                      href="https://instagram.com/thangarajamanohasan"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-lg bg-background border border-border text-muted-foreground hover:text-pink-600 hover:border-pink-600 transition-colors"
                      title="Instagram"
                    >
                      <Instagram className="w-4 h-4" />
                    </a>
                    <button
                      onClick={handleShareContact}
                      className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-blue-600 text-white text-xs font-semibold hover:bg-blue-700 transition-colors ml-auto"
                    >
                      <Share2 className="w-3.5 h-3.5" /> Share Contact
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Contact Form */}
            <div className="lg:col-span-7">
              <form
                onSubmit={handleSubmit}
                className="p-8 rounded-2xl bg-secondary/50 border border-border space-y-6"
              >
                <h4 className="text-xl font-bold font-heading">
                  Send a Message
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-muted-foreground">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={contactForm.name}
                      onChange={e =>
                        setContactForm({ ...contactForm, name: e.target.value })
                      }
                      placeholder="John Doe"
                      className="w-full px-4 py-3 rounded-xl border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-muted-foreground">
                      Your Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={contactForm.email}
                      onChange={e =>
                        setContactForm({
                          ...contactForm,
                          email: e.target.value,
                        })
                      }
                      placeholder="john@example.com"
                      className="w-full px-4 py-3 rounded-xl border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-semibold text-muted-foreground">
                    Service
                  </label>
                  <select
                    value={contactForm.subject}
                    onChange={e =>
                      setContactForm({
                        ...contactForm,
                        subject: e.target.value,
                      })
                    }
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 appearance-none"
                  >
                    <option value="" disabled>
                      Select a service
                    </option>
                    <option value="Web Development">Web Development</option>
                    <option value="UI/UX Design">UI/UX Design</option>
                    <option value="Web Application">Web Application</option>
                    <option value="IT Support Solutions">
                      IT Support Solutions
                    </option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-semibold text-muted-foreground">
                    Message *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={contactForm.message}
                    onChange={e =>
                      setContactForm({
                        ...contactForm,
                        message: e.target.value,
                      })
                    }
                    placeholder="Write your message here..."
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 rounded-xl bg-blue-600 text-white font-semibold text-sm hover:bg-blue-700 transition-colors shadow-md disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>Sending...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="py-8 bg-background border-t border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <p className="text-sm font-medium text-foreground">
              © 2026 Thangaraja Manohasan
            </p>
            <p className="text-xs text-muted-foreground">
              Software Developer • PHP Developer • UI/UX Designer
            </p>
          </div>

          <div className="text-center sm:text-right">
            <p className="text-xs text-muted-foreground">
              Building scalable, user-focused digital experiences.
            </p>
            <p className="text-xs text-muted-foreground">
              Designed & Developed by Mano.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
