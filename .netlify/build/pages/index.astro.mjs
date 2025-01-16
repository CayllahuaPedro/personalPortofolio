/* empty css                                 */
import { c as createComponent, r as renderTemplate, a as addAttribute, b as createAstro, m as maybeRenderHead, d as renderComponent, e as renderHead, f as renderSlot } from '../chunks/astro/server_CxQynfPu.mjs';
import { $ as $$Image } from '../chunks/_astro_assets_BfehaDlO.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro$3 = createAstro();
const $$ViewTransitions = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$ViewTransitions;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>`;
}, "C:/Users/peter/OneDrive/Documentos/code folder/personal/project/node_modules/.pnpm/astro@4.16.18_rollup@4.30.1_typescript@5.7.3/node_modules/astro/components/ViewTransitions.astro", undefined);

const $$Header = createComponent(($$result, $$props, $$slots) => {
  const navItems = [
    { name: "Home", href: "#" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" }
  ];
  return renderTemplate`${maybeRenderHead()}<header class="fixed w-full bg-white/80 dark:bg-dark/80 backdrop-blur-sm z-50"> <nav class="container mx-auto px-6 py-4"> <div class="flex items-center justify-between"> <a href="#" class="text-2xl font-bold text-primary">portfolio.dev</a> <div class="hidden md:flex items-center space-x-8"> ${navItems.map((item) => renderTemplate`<a${addAttribute(item.href, "href")} class="hover:text-primary transition-colors"> ${item.name} </a>`)} <button id="theme-toggle" class="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"> <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path> </svg> </button> </div> <button class="md:hidden" id="mobile-menu-button"> <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path> </svg> </button> </div> <!-- Mobile Menu --> <div class="md:hidden hidden" id="mobile-menu"> <div class="flex flex-col space-y-4 mt-4"> ${navItems.map((item) => renderTemplate`<a${addAttribute(item.href, "href")} class="hover:text-primary transition-colors"> ${item.name} </a>`)} </div> </div> </nav> </header> `;
}, "C:/Users/peter/OneDrive/Documentos/code folder/personal/project/src/components/Header.astro", undefined);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
  return renderTemplate`${maybeRenderHead()}<footer class="py-8 text-center text-gray-600 dark:text-gray-400"> <div class="container mx-auto px-6"> <p>&copy; ${currentYear} Pedro Sanchez. All rights reserved.</p> </div> </footer>`;
}, "C:/Users/peter/OneDrive/Documentos/code folder/personal/project/src/components/Footer.astro", undefined);

const $$Astro$2 = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Layout;
  const {
    title,
    description = "Welcome to my portfolio - Showcasing my work and experience in web development"
  } = Astro2.props;
  return renderTemplate`<html lang="en" class="scroll-smooth"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title><meta name="description"${addAttribute(description, "content")}><!-- Open Graph / Social Media --><meta property="og:type" content="website"><meta property="og:title"${addAttribute(title, "content")}><meta property="og:description"${addAttribute(description, "content")}><meta property="og:image" content="/og-image.jpg"><!-- Twitter --><meta name="twitter:card" content="summary_large_image"><meta name="twitter:title"${addAttribute(title, "content")}><meta name="twitter:description"${addAttribute(description, "content")}><meta name="twitter:image" content="/og-image.jpg">${renderComponent($$result, "ViewTransitions", $$ViewTransitions, {})}${renderHead()}</head> <body class="bg-white dark:bg-dark text-gray-900 dark:text-gray-100 transition-colors duration-300"> ${renderComponent($$result, "Header", $$Header, {})} ${renderSlot($$result, $$slots["default"])} ${renderComponent($$result, "Footer", $$Footer, {})}  </body> </html>`;
}, "C:/Users/peter/OneDrive/Documentos/code folder/personal/project/src/layouts/Layout.astro", undefined);

const $$Hero = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="min-h-screen flex items-center justify-center py-20"> <div class="container mx-auto px-6 text-center" data-aos="fade-up"> <h1 class="text-5xl md:text-7xl font-bold mb-8">
Hi, I'm <span class="text-primary">Pedro Sanchez</span> </h1> <p class="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
A passionate full-stack developer crafting beautiful and functional web experiences
</p> <div class="flex justify-center space-x-4"> <a href="#projects" class="bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary/90 transition-colors">
View My Work
</a> <a href="#contact" class="border-2 border-primary text-primary dark:text-white px-8 py-3 rounded-lg hover:bg-primary hover:text-white transition-colors">
Contact Me
</a> </div> </div> </section>`;
}, "C:/Users/peter/OneDrive/Documentos/code folder/personal/project/src/components/Hero.astro", undefined);

const Avatar = new Proxy({"src":"/_astro/avatar.Bzfbq-BP.jpeg","width":800,"height":800,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/peter/OneDrive/Documentos/code folder/personal/project/src/assets/avatar.jpeg";
							}
							
							return target[name];
						}
					});

const $$Astro$1 = createAstro();
const $$About = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$About;
  const skills = [
    "JavaScript/TypeScript",
    "React.js",
    "Next.js",
    "Node.js",
    "Astro.js",
    "Tailwind CSS",
    "Git"
  ];
  return renderTemplate`${maybeRenderHead()}<section id="about" class="py-20 bg-gray-50 dark:bg-gray-900"> <div class="container mx-auto px-6"> <h2 class="text-4xl font-bold text-center mb-16" data-aos="fade-up">
About Me
</h2> <div class="grid md:grid-cols-2 gap-12 items-center"> <div data-aos="fade-right"> ${renderComponent($$result, "Image", $$Image, { "src": Avatar, "alt": "Pedro Sanchez", "class": "rounded-lg shadow-lg w-full max-w-md mx-auto" })} </div> <div data-aos="fade-left"> <p class="text-lg mb-8 text-gray-600 dark:text-gray-400">
I'm a full-stack developer with experience building web applications
          and static pages. I'm passionate about creating elegant solutions to
          complex problems and constantly learning new technologies.
</p> <h3 class="text-2xl font-bold mb-4">Skills</h3> <div class="flex flex-wrap gap-3"> ${skills.map((skill) => renderTemplate`<span class="bg-primary/10 text-primary px-4 py-2 rounded-full"> ${skill} </span>`)} </div> </div> </div> </div> </section>`;
}, "C:/Users/peter/OneDrive/Documentos/code folder/personal/project/src/components/About.astro", undefined);

const ElethorLandingPage = new Proxy({"src":"/_astro/elethor-landing-page.DfxTLezk.jpg","width":1897,"height":899,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/peter/OneDrive/Documentos/code folder/personal/project/src/assets/elethor-landing-page.jpg";
							}
							
							return target[name];
						}
					});

const BitcompayLandingPage = new Proxy({"src":"/_astro/bitcompay-landing-page.B_4aPGHh.png","width":1901,"height":901,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/peter/OneDrive/Documentos/code folder/personal/project/src/assets/bitcompay-landing-page.png";
							}
							
							return target[name];
						}
					});

const IantechLandingPage = new Proxy({"src":"/_astro/iantech-landing-page.H3uJFkhS.png","width":1904,"height":909,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/peter/OneDrive/Documentos/code folder/personal/project/src/assets/iantech-landing-page.png";
							}
							
							return target[name];
						}
					});

const $$Astro = createAstro();
const $$Projects = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Projects;
  const projects = [
    {
      title: "Bitcompay Landing Page",
      description: "A landing page for a billing and payment processing company",
      image: BitcompayLandingPage,
      tags: ["Astro", "Tailwind CSS"],
      link: "https://bitcompay.ar/"
    },
    {
      title: "Iantech Technologies Landing Page",
      description: "A modern landing page for a tech consulting company",
      image: IantechLandingPage,
      tags: ["Astro", "Tailwind CSS", "React"],
      link: "https://www.iantech.com.ar/"
    },
    {
      title: "Elethor Landing Page",
      description: "A modern landing page for a crypto and trading app",
      image: ElethorLandingPage,
      tags: ["Astro", "Tailwind", "React"],
      link: "https://elethor.me/"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section id="projects" class="py-20"> <div class="container mx-auto px-6"> <h2 class="text-4xl font-bold text-center mb-16" data-aos="fade-up">
My Projects
</h2> <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8"> ${projects.map((project) => renderTemplate`<div class="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden" data-aos="fade-up"> ${renderComponent($$result, "Image", $$Image, { "src": project.image, "alt": project.description })} <div class="p-6"> <h3 class="text-xl font-bold mb-2">${project.title}</h3> <p class="text-gray-600 dark:text-gray-400 mb-4"> ${project.description} </p> <div class="flex flex-wrap gap-2 mb-4"> ${project.tags.map((tag) => renderTemplate`<span class="bg-primary/10 text-primary text-sm px-3 py-1 rounded-full"> ${tag} </span>`)} </div> <a${addAttribute(project.link, "href")} class="text-primary hover:underline" target="_blank" rel="noopener noreferrer">
View Project →
</a> </div> </div>`)} </div> </div> </section>`;
}, "C:/Users/peter/OneDrive/Documentos/code folder/personal/project/src/components/Projects.astro", undefined);

const $$Contact = createComponent(($$result, $$props, $$slots) => {
  const socialLinks = [
    { name: "GitHub", url: "https://github.com/CayllahuaPedro", icon: "github" },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/pedro-cayllahua", icon: "linkedin" },
    { name: "Twitter", url: "https://x.com/pacsachez", icon: "twitter" }
  ];
  return renderTemplate`${maybeRenderHead()}<section id="contact" class="py-20 bg-gray-50 dark:bg-gray-900"> <div class="container mx-auto px-6"> <h2 class="text-4xl font-bold text-center mb-16" data-aos="fade-up">
Get In Touch
</h2> <div class="grid md:grid-cols-2 gap-12"> <div data-aos="fade-right"> <h3 class="text-2xl font-bold mb-4">Contact Information</h3> <p class="text-gray-600 dark:text-gray-400 mb-8">
Feel free to reach out! I'm always open to discussing new projects,
          creative ideas, or opportunities to be part of your visions.
</p> <div class="flex space-x-4 mb-8"> ${socialLinks.map((link) => renderTemplate`<a${addAttribute(link.url, "href")} class="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors" target="_blank" rel="noopener noreferrer"> <span class="sr-only">${link.name}</span> <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"> ${link.icon === "github" && renderTemplate`<path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"></path>`} ${link.icon === "linkedin" && renderTemplate`<path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path>`} ${link.icon === "twitter" && renderTemplate`<path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"></path>`} </svg> </a>`)} </div> </div> <form class="space-y-6" data-aos="fade-left" onsubmit="event.preventDefault()"> <div> <label for="name" class="block text-sm font-medium mb-2">
Name
</label> <input type="text" id="name" name="name" required class="w-full px-4 py-2 rounded-lg border dark:border-gray-700 dark:bg-gray-800 focus:ring-2 focus:ring-primary"> </div> <div> <label for="email" class="block text-sm font-medium mb-2">
Email
</label> <input type="email" id="email" name="email" required class="w-full px-4 py-2 rounded-lg border dark:border-gray-700 dark:bg-gray-800 focus:ring-2 focus:ring-primary"> </div> <div> <label for="message" class="block text-sm font-medium mb-2">
Message
</label> <textarea id="message" name="message" rows="4" required class="w-full px-4 py-2 rounded-lg border dark:border-gray-700 dark:bg-gray-800 focus:ring-2 focus:ring-primary"></textarea> </div> <button type="submit" class="w-full bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary/90 transition-colors">
Send Message
</button> </form> </div> </div> </section>`;
}, "C:/Users/peter/OneDrive/Documentos/code folder/personal/project/src/components/Contact.astro", undefined);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Your Name - Portfolio" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main> ${renderComponent($$result2, "Hero", $$Hero, {})} ${renderComponent($$result2, "About", $$About, {})} ${renderComponent($$result2, "Projects", $$Projects, {})} ${renderComponent($$result2, "Contact", $$Contact, {})} </main> ` })}`;
}, "C:/Users/peter/OneDrive/Documentos/code folder/personal/project/src/pages/index.astro", undefined);

const $$file = "C:/Users/peter/OneDrive/Documentos/code folder/personal/project/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
