import { useState } from 'react';
import { Github, ArrowRight, BarChart, Code, Cpu, Globe, Edit2, UserCheck } from 'lucide-react';
import Spline from '@splinetool/react-spline';
import { AnimatedBackground } from './components/AnimatedBackground';
import { StatCard } from './components/StatCard';
import { AnimatedLogo } from './components/AnimatedLogo';
import { SkillCard } from './components/SkillCard';
import { ProjectCard } from './components/ProjectCard';
import geslord from './assets/geslord.webp';
import hackinghr from './assets/hackinghr.webp';
import kitcase from './assets/kitcase.webp';
import universidad from './assets/universidad.webp';
import cesarMember from './assets/cesar-member.jpg';

function App() {
  // const [currentTestimonial, setCurrentTestimonial] = useState(2);
  const [loading, setLoading] = useState(true)

  const stats = [
    { value: '6+', label: 'YEARS OF EXPERIENCE' },
    { value: '40+', label: 'PROJECTS DELIVERED' },
    { value: '40+', label: 'TECH SKILLS & LEARNING' },
    { value: '1000+', label: 'CONTRIBUTIONS' },
  ];

  const projects = [
    {
      title: 'Hacking HR',
      description: 'Delivered 20+ products within Hacking HR, including the full development of The AIx Summit. Projects ranged from dashboards and complex flows to Stripe integrations, chatbots, and admin panels, with a strong focus on UX, SEO, and scalability. Successfully reduced server costs by 50% and optimized internal workflows.',
      tags: ['Fullstack', 'React', 'Next.js', 'SaaS', 'Stripe', 'SEO', 'Optimization', 'AWS', 'Redis', 'Tailwind', 'Figma', ],
      date: '2022 - In Progress',
      status: 'CURRENT POSITION',
      image: hackinghr,
      url: 'https://theaixsummit.com/',
      url2: 'https://beta-app.hackinghrlab.io/'
    },
    {
      title: 'Geslord',
      description: 'SaaS platform with integrated payments, dashboards, and user management features. Took initiative to advance new projects independently, implementing features from UI to backend integration and ensuring high-quality delivery.',
      tags: ['Fullstack', 'SaaS', 'Node.js', 'Vue3', 'Integrations', 'Astro', 'Digital Ocean', 'Docker'],
      date: '2023 - In Progress',
      status: 'IN PROGRESS',
      image: geslord,
      url: 'https://geslord.com/'
    },
    // {
    //   title: 'Chess Robot / Computer Vision',
    //   description: 'Developed a robotic chess solver leveraging computer vision and robotics competitions. Designed and implemented algorithms for piece recognition, move calculation, and robotic actuation, integrating hardware and software components for real-time performance.',
    //   tags: ['Robotics', 'Computer Vision', 'AI', 'Hardware', 'Fullstack'],
    //   date: '2025',
    //   status: 'IN PROGRESS',
    //   image: '/api/placeholder/600/400',
    // },
    {
      title: 'University Projects',
      description: 'A collection of innovative academic projects ranging from an MVP platform to connect students with professors, to a Hackathon-winning MVP, robotics and computer vision systems, sensor-based motion detection arms, and interactive interface experiments — all focused on merging technology, creativity, and practical problem-solving.',
      tags: ['Robotics', 'Computer Vision', 'AI', 'Hardware', 'Fullstack'],
      date: '2024',
      status: 'COMPLETED',
      image: universidad,
      url: 'https://cesarmc-port.github.io/PrepaUnet/',
    },
    {
      title: 'KitCase / Social Media',
      description: 'Kitcase is a social network designed to facilitate the sharing and understanding of scientific documents. Users can upload and explore PDF articles through optimized viewers, discover relevant research, and engage in discussions focused on the findings. The goal is to enhance collective knowledge and make academic reading more accessible and collaborative.',
      tags: ['Robotics', 'Computer Vision', 'AI', 'Hardware', 'Fullstack'],
      date: '2021',
      status: 'COMPLETED',
      image: kitcase
    },
    
  ];

  // const testimonials = [
  //   {
  //     text: "César is an extremely committed and creative developer. His ability to manage full projects and technical vision has been key to our growth.",
  //     author: 'Tech Lead at Hacking HR',
  //     image: 'https://i.pinimg.com/736x/d0/7c/49/d07c49daf805a6ac87f0eea9219b0aa0.jpg',
  //   },
  //   {
  //     text: "I'm confident my data is safe with this developer. I can't say that about other providers.",
  //     author: 'Dan, CTO at SecureNet',
  //     image: 'https://i.pinimg.com/736x/85/02/f9/8502f933d53e85928d80a057118b23f8.jpg',
  //   },
  //   {
  //     text: "I know it's cliche, but we were lost before we found this developer. Can't thank you guys enough!",
  //     author: 'Stephanie, COO at InnovateCo',
  //     image: 'https://i.pravatar.cc/150?img=3',
  //   },
  //   {
  //     text: "The products make planning for the future seamless. Can't recommend them enough!",
  //     author: 'Marie, CFO at FuturePlanning',
  //     image: 'https://i.pinimg.com/1200x/75/1b/9a/751b9a98a29c605f70ef79db4d8d830d.jpg',
  //   },
  //   {
  //     text: "If I could give 11 stars, I'd give 12.",
  //     author: 'Andre, Head of Design at CreativeSolutions',
  //     image: 'https://i.pinimg.com/1200x/fd/95/c6/fd95c6691dde3badcb885ec90bfb434d.jpg',
  //   },
  //   {
  //     text: "SO SO SO HAPPY WE FOUND YOU GUYS!!!! I'd bet you've saved me 100 hours so far.",
  //     author: 'Jeremy, Product Manager at TimeWise',
  //     image: 'https://i.pinimg.com/1200x/9c/3f/e2/9c3fe2ebba4bfb6cf764dd134cc59393.jpg',
  //   },
  //   {
  //     text: "Took some convincing, but now that we're working together, we're never going back.",
  //     author: 'Pam, Marketing Director at BrandBuilders',
  //     image: 'https://i.pinimg.com/736x/0c/bc/be/0cbcbe2f76be27e6ebff714a88f51a12.jpg',
  //   },
  //   {
  //     text: "I would be lost without the in-depth analytics. The ROI is EASILY 100X for us.",
  //     author: 'Daniel, Data Scientist at AnalyticsPro',
  //     image: 'https://i.pinimg.com/736x/fe/28/df/fe28dfd986cf67d2749123215264b5d4.jpg',
  //   },
  //   {
  //     text: "It's just the best. Period.",
  //     author: 'Fernando, UX Designer at UserFirst',
  //     image: 'https://i.pinimg.com/736x/37/b5/19/37b5190c8d742c432bf324c36aea9652.jpg',
  //   },
  //   {
  //     text: 'I switched 5 years ago and never looked back.',
  //     author: 'Andy, DevOps Engineer at CloudMasters',
  //     image: 'https://i.pinimg.com/1200x/17/3f/f2/173ff21047fa18aa7808c9108746e849.jpg',
  //   },
  //   {
  //     text: "I've been searching for a solution like this for YEARS. So glad I finally found one!",
  //     author: 'Pete, Sales Director at RevenueRockets',
  //     image: 'https://i.pinimg.com/1200x/2b/a0/0e/2ba00e6ae36c1369eaee848fa8ec5736.jpg',
  //   },
  //   {
  //     text: "It's so simple and intuitive, we got the team up to speed in 10 minutes.",
  //     author: 'Marina, HR Manager at TalentForge',
  //     image: 'https://i.pinimg.com/1200x/a4/70/95/a470951ac14a056414ddd454c2ae7735.jpg',
  //   },
  //   {
  //     text: "Customer support is unparalleled. They're always there when we need them.",
  //     author: 'Olivia, Customer Success Manager at ClientCare',
  //     image: 'https://i.pinimg.com/736x/5c/65/12/5c6512d83e3cf41831b4f40ad7dac62c.jpg',
  //   },
  //   {
  //     text: "The efficiency gains we've seen since implementing this are off the charts!",
  //     author: 'Raj, Operations Manager at StreamlineSolutions',
  //     image: 'https://i.pinimg.com/736x/cf/87/9f/cf879fae9c6d19fec30dbc1d069ab2e4.jpg',
  //   },
  //   {
  //     text: "This has revolutionized how we handle our workflow. It's a game-changer!",
  //     author: 'Lila, Workflow Specialist at ProcessPro',
  //     image: 'https://i.pinimg.com/736x/7f/a0/a8/7fa0a8cfc2557ac9c961ff879306da51.jpg',
  //   },
  //   {
  //     text: "The scalability of this solution is impressive. It grows with our business seamlessly.",
  //     author: 'Trevor, Scaling Officer at GrowthGurus',
  //     image: 'https://i.pinimg.com/736x/7e/f3/8e/7ef38e36475e40e8dd8a34cbf5ee9acb.jpg',
  //   },
  //   {
  //     text: "I appreciate how this developer continually innovates. They're always one step ahead.",
  //     author: 'Naomi, Innovation Lead at FutureTech',
  //     image: 'https://i.pinimg.com/736x/6b/22/4b/6b224bb76fcb2c3a842bcdc04be9d336.jpg',
  //   },
  //   {
  //     text: "The ROI we've seen is incredible. It's paid for itself many times over.",
  //     author: 'Victor, Finance Analyst at ProfitPeak',
  //     image: 'https://i.pinimg.com/736x/8e/69/06/8e6906941f1ac05eda7ab5ba948e0aae.jpg',
  //   },
  //   {
  //     text: "The platform is so robust, yet easy to use. It's the perfect balance.",
  //     author: 'Yuki, Tech Lead at BalancedTech',
  //     image: 'https://i.pinimg.com/736x/f1/53/0b/f1530b991ef2f9b1e7f0e0348d39232b.jpg',
  //   },
  //   {
  //     text: "We've tried many solutions, but this stands out in terms of reliability and performance.",
  //     author: 'Zoe, Performance Manager at ReliableSystems',
  //     image: 'https://i.pinimg.com/736x/f9/a3/a7/f9a3a7332fe51f3dc25a71fe7cb81b7f.jpg',
  //   },
  // ];

  const splineEnv = () => {
    try{
      return <div style={{ position: "absolute", left:'0px',top:'0px', width: "100%", height: "calc(100vh - 60px)", background:'transparent' }}>
        {loading && <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", zIndex: 20, transition: "opacity 400ms ease, visibility 400ms", height:'50%' }} >
          <div style={{ textAlign: "center", fontFamily: "system-ui, sans-serif", transform:'scale(2)' }}>
            <div style={{ width: 56, height: 56, borderRadius: "50%", border: "5px solid rgba(255,255,255,0.9)", borderTopColor: "transparent", animation: "spin 0.9s linear infinite", margin: "0 auto 12px" }} />
            <div style={{ fontSize: 16 }}>Cargando escena...</div>
          </div>
        </div>}
        <Spline 
          scene="https://prod.spline.design/F-4Fk3mEduOC-3us/scene.splinecode" 
          style={{position:'absolute',left:'0px',top:'0px',width:'100%',height:'calc(100vh - 60px)',zIndex:'5'}} 
          onLoad={() => setLoading(false)}
        />
      </div>
    }catch(er){
      console.log(er)
      return <div style={{position:'absolute',left:'0px',top:'0px',width:'100%',height:'calc(100vh - 60px)', background:'white'}} ></div>
    }
  }

  return (
    <div className="no-scrollbar portfolio-container relative size-full snap-y snap-mandatory overflow-y-scroll">
      <main className="before:border-border after:border-border relative z-10 min-h-screen snap-start before:absolute before:top-0 before:left-0 before:h-full before:w-12 before:border-r before:bg-[linear-gradient(-135deg,_#1a1a1a_25%,_transparent_25%,_transparent_50%,_#1a1a1a_50%,_#1a1a1a_75%,_transparent_75%,_transparent)] before:bg-[length:5px_5px] after:absolute after:top-0 after:right-0 after:h-full after:w-12 after:border-l after:bg-[linear-gradient(135deg,_#1a1a1a_25%,_transparent_25%,_transparent_50%,_#1a1a1a_50%,_#1a1a1a_75%,_transparent_75%,_transparent)] after:bg-[length:5px_5px] max-md:before:hidden max-md:after:hidden md:px-12 bg-[#0a0a0a] text-white">
        {/* Header */}
        <nav className="w-full border-b border-gray-800 px-4 py-2.5 md:px-8 backdrop-blur-sm bg-[#0a0a0a]/90 sticky top-0 z-50" id="home">
          <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 opacity-0 animate-slide-in-left">
            <AnimatedLogo
              text="<César/>"
              className="border-2 border-white px-4 py-2 font-mono text-sm hover:bg-white hover:text-black transition-all duration-300 cursor-pointer"
            />
          </div>

          <div className="flex items-center gap-8 opacity-0 animate-fade-in animation-delay-200">
            <a href="#home" className="hover:text-gray-400 transition-all duration-300 hover:scale-110 relative group">
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#about" className="hover:text-gray-400 transition-all duration-300 hover:scale-110 relative group">
              About
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#projects" className="hover:text-gray-400 transition-all duration-300 hover:scale-110 relative group">
              Projects
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
            </a>
          </div>

          <div className="flex items-center gap-4 opacity-0 animate-slide-in-right animation-delay-300">
            <a href="https://github.com/CesarMC-Port" target="_blank" rel="noopener noreferrer" className="p-2 hover:bg-gray-800 rounded transition-all duration-300 hover:scale-110 hover:rotate-12">
              <Github size={20} />
            </a>
            <a href="https://www.linkedin.com/in/cesar-alejandro-mora-contreras-0118a51bb" target="_blank" rel="noopener noreferrer" className="p-2 hover:bg-gray-800 rounded transition-all duration-300 hover:scale-110">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
            </a>
          </div>
          </div>
        </nav>

        <div className="min-h-[calc(100vh-4rem)] md:px-8">
          <div className="min-h-[calc(100vh-4rem)] md:border-r md:border-l border-gray-800">

            {/* Hero Section */}
            <section 
              className="relative z-10 px-4 pb-6 md:px-8 md:pb-14 lg:px-20 py-12 md:py-20 overflow-hidden" 
              style={{height:'calc(100vh - 60px)', background:'radial-gradient( circle at center, #d5d5d5 0%, rgb(101 101 101) 20%, #1d1d1d 55%, #000 100% )'}}
            >
              <AnimatedBackground />
              {splineEnv()}

              {/* Stats Section */}
              <div className="absolute z-10 container mx-auto px-6 py-20 pb-6 bottom-0 left-0">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
                  {stats.map((stat, index) => (
                    <StatCard
                      key={index}
                      value={stat.value}
                      label={stat.label}
                      index={index}
                    />
                  ))}
                </div>
              </div>
            </section>

            {/* Skills Section with 3D Cards */}
            <section className="relative w-full border-b border-gray-800">
              <div className="bg-[#0a0a0a] absolute top-0 left-0 z-20 rounded-br-md border-r border-b border-gray-800 px-4 py-2 font-mono text-xs tracking-wider uppercase">
                TECH STACK
              </div>

              <div className="container mx-auto px-6 py-20 pt-24">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {/* --- Frontend --- */}
                  <SkillCard
                    icon={Code}
                    title="Frontend Development"
                    skills={[
                      'JavaScript',
                      'TypeScript',
                      'React',
                      'Next.js',
                      'Vue.js',
                      'Nuxt',
                      'AngularJS',
                      'Vite',
                      'Tailwind CSS',
                      'Bootstrap',
                      'UX/UI Design',
                      'Figma'
                    ]}
                  />

                  {/* --- Backend --- */}
                  <SkillCard
                    icon={Cpu}
                    title="Backend Development"
                    skills={[
                      'Node.js',
                      'Express',
                      'FastAPI',
                      'Flask',
                      'NestJS',
                      'PostgreSQL',
                      'MySQL',
                      'SQLite',
                      'MongoDB',
                      'Redis',
                      'Sequelize',
                      'GraphQL',
                      'Apollo',
                      'REST APIs'
                    ]}
                  />

                  {/* --- DevOps & Cloud --- */}
                  <SkillCard
                    icon={Globe}
                    title="DevOps & Cloud"
                    skills={[
                      'Docker',
                      'Nginx',
                      'AWS',
                      'Vercel',
                      'Linux',
                      'Ubuntu',
                      'Git',
                      'CI/CD',
                      'PowerShell',
                      'VSCode',
                      'Digital Ocean',
                      'Clouflare'
                    ]}
                  />

                  {/* --- AI, Data & Automation --- */}
                  <SkillCard
                    icon={BarChart}
                    title="AI, Data & Automation"
                    skills={[
                      'Python',
                      // 'PyTorch',
                      // 'TensorFlow',
                      'YOLOv8',
                      'Data Processing',
                      'Automation Scripts'
                    ]}
                  />

                  {/* --- 3D, CAD & Engineering --- */}
                  <SkillCard
                    icon={Edit2}
                    title="3D Design & CAD"
                    skills={[
                      'AutoCAD',
                      'SolidWorks',
                      'Inventor',
                      'Onshape',
                      'Blender'
                    ]}
                  />

                  {/* --- Methodologies & Product --- */}
                  <SkillCard
                    icon={UserCheck}
                    title="Product & Methodologies"
                    skills={[
                      'SCRUM / Kanban',
                      'System Design',
                      'Project Planning',
                    ]}
                  />
                </div>
              </div>
            </section>

            {/* Projects Section */}
            <section id="projects" className="relative w-full border-b border-gray-800">
              <div className="bg-[#0a0a0a] absolute top-0 left-0 z-20 rounded-br-md border-r border-b border-gray-800 px-4 py-2 font-mono text-xs tracking-wider uppercase">
                PROJECTS
              </div>
              <div className="space-y-6 p-6">
                {projects.map((project:any, index) => (
                  <ProjectCard
                    key={index}
                    project={project}
                    index={index}
                  />
                ))}
              </div>

            </section>

            {/* About Section */}
            <section id="about" className="relative w-full border-b border-gray-800 overflow-hidden">
              <div className="bg-[#0a0a0a] absolute top-0 left-0 z-20 rounded-br-md border-r border-b border-gray-800 px-4 py-2 font-mono text-xs tracking-wider uppercase">
                ABOUT
              </div>
              <div className="flex items-center lg:h-[97.5vh]">
                {/* Left side - Content */}
                <div className="relative flex-[0.6] px-4 py-20 md:px-12 lg:py-12">
                  <div className="max-w-3xl">
                    <h2 className="text-3xl font-bold md:text-5xl lg:text-6xl opacity-0 animate-fade-in-up mb-6">
                      Bringing ideas to life
                    </h2>

                    <div className="flex items-center gap-2 mb-8 opacity-0 animate-fade-in animation-delay-200">
                      <div className="h-1 bg-white" style={{width: '60px'}}></div>
                      <div className="h-1 bg-white/60" style={{width: '30px'}}></div>
                      <div className="h-1 bg-white/30" style={{width: '15px'}}></div>
                    </div>

                    {/* Robot image for mobile/tablet */}
                    <div className="pointer-events-none overflow-hidden select-none absolute top-6 -right-8 z-5 w-64 font-mono text-white max-md:scale-x-[-1] md:top-8 md:right-4 lg:hidden animate-float">
                      <div className="relative">
                        <div className="text-8xl">🤖</div>
                        <div className="pointer-events-auto absolute top-[40.95%] left-[51.35%] flex aspect-[446/278] w-[36%] -translate-x-1/2 -translate-y-1/2 items-center justify-center overflow-hidden rounded-[12%/18%]">
                          <div className="max-md:scale-x-[-1] text-sm">Hey👋</div>
                        </div>
                      </div>
                    </div>

                    {/* Content paragraphs */}
                    <div className="space-y-6 text-white/70 text-base md:text-lg leading-relaxed opacity-0 animate-fade-in animation-delay-300">
                      <div className="group relative border-l-2 border-white/20 pl-6 transition-all duration-300 hover:border-white">
                        <div className="absolute -left-1.5 top-2 h-3 w-3 rotate-45 border-2 border-white/40 bg-[#0a0a0a] transition-all duration-300 group-hover:border-white"></div>
                        <p>
                          I began my career in <span className="text-white font-medium">mechanical design</span>, which gave me a strong foundation in building products. Later, I explored <span className="text-white font-medium">UI/UX design</span> and interface creation, which led me to transition into <span className="text-white font-medium">full-stack development</span>.
                        </p>
                      </div>

                      <div className="group relative border-l-2 border-white/20 pl-6 transition-all duration-300 hover:border-white">
                        <div className="absolute -left-1.5 top-2 h-3 w-3 rotate-45 border-2 border-white/40 bg-[#0a0a0a] transition-all duration-300 group-hover:border-white"></div>
                        <p>
                          I have often worked as the <span className="text-white font-medium">sole developer</span> in small teams, managing projects <span className="text-white font-medium">end-to-end</span>: interface design, feature integration, testing, deployment, and maintenance.
                        </p>
                      </div>

                      <div className="group relative border-l-2 border-white/20 pl-6 transition-all duration-300 hover:border-white">
                        <div className="absolute -left-1.5 top-2 h-3 w-3 rotate-45 border-2 border-white/40 bg-[#0a0a0a] transition-all duration-300 group-hover:border-white"></div>
                        <p>
                          I love learning constantly, and as a hobby, I explore <span className="text-white font-medium">hardware, robotics, and computer vision</span>.
                        </p>
                      </div>

                      <div className="group relative border-l-2 border-white/20 pl-6 transition-all duration-300 hover:border-white">
                        <div className="absolute -left-1.5 top-2 h-3 w-3 rotate-45 border-2 border-white/40 bg-[#0a0a0a] transition-all duration-300 group-hover:border-white"></div>
                        <p>
                          My focus is on building <span className="text-white font-medium">scalable, efficient, and high-impact products</span>, always seeking innovative solutions.
                        </p>
                      </div>
                    </div>

                    {/* CTA */}
                    <div className="mt-10 opacity-0 animate-fade-in animation-delay-500">
                      <a
                        href="https://wa.me/584247224217"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm transition-all duration-300 bg-white text-black hover:bg-white/90 hover:scale-105 h-12 px-8 border-2 border-white font-medium"
                      >
                        Let's Work Together
                        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Right side - Profile Card */}
                <div className="relative hidden h-full items-center justify-center border-l border-gray-800 md:w-1/2 lg:flex flex-1">
                  <Spline
                    scene="https://prod.spline.design/nZnebrOuVZIkRVi3/scene.splinecode" 
                    style={{position:'absolute',left:'0px',top:'70px',width:'100%',height:'100%',zIndex:'5'}} 
                  />
                  <div className="absolute inset-0 size-full">
                    <div className="before:bg-gray-800 after:bg-gray-800 relative h-full w-full before:absolute before:top-1/2 before:left-0 before:h-0.5 before:w-full after:absolute after:top-0 after:left-1/2 after:h-full after:w-0.5"></div>
                  </div>
                  <div className="relative py-4" style={{transform: 'rotate(-2deg) translateY(-30px)'}}>
                    <div className="sticky top-8 h-auto w-80">
                      <div className="absolute -inset-2 bg-white/5 rotate-3 blur-sm"></div>
                      <div className="absolute -inset-1 bg-white/10 rotate-1"></div>
                      <div className="bg-[#0a0a0a] relative border-2 border-white p-8 shadow-2xl shadow-white/10">
                        <div className="absolute -top-1 -left-1 h-8 w-8 border-t-2 border-l-2 border-white"></div>
                        <div className="absolute -top-1 -right-1 h-8 w-8 border-t-2 border-r-2 border-white"></div>
                        <div className="absolute -bottom-1 -left-1 h-8 w-8 border-b-2 border-l-2 border-white"></div>
                        <div className="absolute -bottom-1 -right-1 h-8 w-8 border-b-2 border-r-2 border-white"></div>

                        <div className="text-center">
                          <div className="bg-[#0a0a0a] mb-6 overflow-hidden border-0 p-2 relative group">
                            <div className="absolute inset-0 bg-white/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                            <img src={cesarMember}></img>
                          </div>

                          <h3 className="text-3xl font-bold mb-2">Cesar Mora</h3>
                          <p className="text-white/60 mb-1 font-mono text-sm uppercase tracking-wider">Full-Stack Developer</p>

                          <div className="flex items-center justify-center gap-2 my-4">
                            <div className="h-px flex-1 bg-white/20"></div>
                            <div className="h-2 w-2 rotate-45 border border-white/40"></div>
                            <div className="h-px flex-1 bg-white/20"></div>
                          </div>

                          <div className="flex flex-wrap justify-center gap-2 mb-6">
                            <span className="inline-flex items-center justify-center border px-3 py-1.5 text-xs font-medium font-mono border-green-500/40 bg-green-500/10">
                              <div className="mr-1.5 h-2 w-2 animate-pulse rounded-full bg-green-500"></div>
                              AVAILABLE
                            </span>
                            <span className="inline-flex items-center justify-center border px-3 py-1.5 text-xs font-medium font-mono border-white/20 bg-white/5">
                              6+ YEARS
                            </span>
                          </div>

                          <div className="space-y-3 text-left">
                            <div className="flex items-center justify-between text-sm">
                              <span className="text-white/60 font-mono text-xs">FRONTEND</span>
                              <div className="flex gap-1">
                                {[...Array(5)].map((_, i) => (
                                  <div key={i} className="h-1.5 w-6 border border-white/40 bg-white"></div>
                                ))}
                              </div>
                            </div>
                            <div className="flex items-center justify-between text-sm">
                              <span className="text-white/60 font-mono text-xs">DESIGN</span>
                              <div className="flex gap-1">
                                {[...Array(5)].map((_, i) => (
                                  <div key={i} className="h-1.5 w-6 border border-white/40 bg-white"></div>
                                ))}
                              </div>
                            </div>
                            <div className="flex items-center justify-between text-sm">
                              <span className="text-white/60 font-mono text-xs">BACKEND</span>
                              <div className="flex gap-1">
                                {[...Array(4)].map((_, i) => (
                                  <div key={i} className="h-1.5 w-6 border border-white/40 bg-white"></div>
                                ))}
                                <div className="h-1.5 w-6 border border-white/40"></div>
                              </div>
                            </div>
                            <div className="flex items-center justify-between text-sm">
                              <span className="text-white/60 font-mono text-xs">DEVOPS</span>
                              <div className="flex gap-1">
                                {[...Array(3)].map((_, i) => (
                                  <div key={i} className="h-1.5 w-6 border border-white/40 bg-white"></div>
                                ))}
                                <div className="h-1.5 w-6 border border-white/40"></div>
                                <div className="h-1.5 w-6 border border-white/40"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Testimonials Section */}
            {/* <section id="testimonials" className="relative w-full border-b border-gray-800 h-[600px] overflow-hidden">
              <div className="bg-[#0a0a0a] absolute top-0 left-0 z-20 rounded-br-md border-r border-b border-gray-800 px-4 py-2 font-mono text-xs tracking-wider uppercase">
                TESTIMONIALS
              </div>

              <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,.06)_1px,transparent_1px)] [mask-image:linear-gradient(to_bottom,black,transparent_85%)] bg-[size:18px_18px]"></div>
              </div>

              {testimonials.map((testimonial, index) => {
                const totalCards = testimonials.length;
                const offset = (index - currentTestimonial) * 243.333;
                const isCenter = index === currentTestimonial;
                const alternateY = index % 2 === 0 ? -15 : 15;
                const alternateRotate = index % 2 === 0 ? -2.5 : 2.5;

                return (
                  <div
                    key={index}
                    className={`absolute top-1/2 left-1/2 cursor-pointer border-2 p-8 transition-all duration-500 ease-in-out ${
                      isCenter
                        ? 'bg-white text-black border-white z-10'
                        : 'bg-gray-900 text-white border-gray-800 hover:border-gray-700 z-0'
                    }`}
                    style={{
                      width: '365px',
                      height: '365px',
                      clipPath: 'polygon(50px 0%, calc(100% - 50px) 0%, 100% 50px, 100% 100%, calc(100% - 50px) 100%, 50px 100%, 0px 100%, 0px 0px)',
                      transform: `translate(-50%, -50%) translateX(${offset}px) translateY(${isCenter ? -65 : alternateY}px) rotate(${isCenter ? 0 : alternateRotate}deg)`,
                      boxShadow: isCenter ? '0px 8px 0px 4px rgba(128, 128, 128, 0.3)' : 'transparent 0px 0px 0px 0px'
                    }}
                  >
                    <span
                      className="bg-gray-800 absolute block origin-top-right rotate-45"
                      style={{
                        right: '-2px',
                        top: '48px',
                        width: '70.71067811865476px',
                        height: '2px'
                      }}
                    ></span>

                    <img
                      src={testimonial.image}
                      alt={testimonial.author}
                      className="bg-gray-800 mb-4 h-14 w-12 object-cover object-top"
                      style={{boxShadow: '3px 3px 0px #0a0a0a'}}
                    />

                    <h3 className={`text-base font-medium sm:text-xl ${isCenter ? 'text-black' : 'text-white'}`}>
                      "{testimonial.text}"
                    </h3>

                    <p className={`absolute right-8 bottom-8 left-8 mt-2 text-sm italic ${
                      isCenter ? 'text-black/80' : 'text-white/60'
                    }`}>
                      - {testimonial.author}
                    </p>
                  </div>
                );
              })}

              <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2 z-20">
                <button
                  onClick={() => setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
                  className="flex h-14 w-14 items-center justify-center text-2xl transition-colors bg-[#0a0a0a] border-gray-800 hover:bg-white hover:text-black border-2 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft />
                </button>
                <button
                  onClick={() => setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)}
                  className="flex h-14 w-14 items-center justify-center text-2xl transition-colors bg-[#0a0a0a] border-gray-800 hover:bg-white hover:text-black border-2 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none"
                  aria-label="Next testimonial"
                >
                  <ChevronRight />
                </button>
              </div>
            </section> */}

            {/* Footer */}
            <footer className="border-t border-gray-800 px-4 py-3.5 md:px-8">
              <div className="text-white/70 flex flex-col items-center justify-between gap-3 text-sm md:flex-row">
                <div className="inline-flex items-center gap-2 opacity-0 animate-fade-in animation-delay-200">
                  <span>© 2025 César Mora. All rights reserved.</span>
                </div>
                <div className="inline-flex items-center gap-4 opacity-0 animate-fade-in animation-delay-600">
                  <a href="#home" className="hover:bg-white/5 rounded-md border border-gray-800 px-2 py-1 transition-all duration-300 hover:scale-110 hover:-translate-y-1">
                    Back to top
                  </a>
                </div>
              </div>
            </footer>

          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
