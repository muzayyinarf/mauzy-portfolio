export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  readingTime: string;
  content: string[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "mulai-belajar-nextjs-untuk-portfolio",
    title: "Mulai Belajar Next.js untuk Membuat Portfolio Developer",
    excerpt:
      "Catatan awal belajar Next.js, TypeScript, dan Tailwind CSS untuk membangun portfolio pribadi.",
    date: "2026-06-06",
    category: "Web Development",
    readingTime: "4 min read",
    content: [
      "Saya mulai belajar Next.js karena ingin membangun portfolio developer yang lebih profesional dan mudah dikembangkan.",
      "Dengan Next.js, saya bisa membuat halaman portfolio, project detail, resume online, dan blog dalam satu website.",
      "Untuk tahap awal, saya fokus memahami struktur folder, component, styling dengan Tailwind CSS, dan cara membuat halaman.",
      "Target saya bukan langsung membuat website sempurna, tetapi membangun versi pertama yang rapi, bisa online, dan mudah ditingkatkan.",
    ],
  },
  {
    slug: "kenapa-developer-perlu-portfolio",
    title: "Kenapa Developer Perlu Portfolio?",
    excerpt:
      "Portfolio membantu HR dan recruiter melihat skill, cara berpikir, dan bukti project secara langsung.",
    date: "2026-06-06",
    category: "Career",
    readingTime: "3 min read",
    content: [
      "Portfolio bukan hanya tempat menaruh CV, tetapi juga bukti nyata bahwa seorang developer bisa membangun sesuatu.",
      "Dengan portfolio, recruiter bisa melihat project, tech stack, problem yang diselesaikan, dan cara developer menjelaskan pekerjaannya.",
      "Bagi saya, portfolio juga menjadi tempat untuk mencatat proses belajar dan perkembangan skill dari waktu ke waktu.",
      "Website portfolio yang baik sebaiknya sederhana, cepat dibuka, mobile friendly, dan punya project yang mudah dipahami.",
    ],
  },
  {
    slug: "ide-project-linkpilot",
    title: "Ide Project: LinkPilot",
    excerpt:
      "LinkPilot adalah ide tools untuk short link, link-in-bio, QR code, dan analytics sederhana.",
    date: "2026-06-06",
    category: "Project",
    readingTime: "5 min read",
    content: [
      "LinkPilot dibuat dari ide sederhana: banyak orang butuh satu tempat untuk mengatur link penting mereka.",
      "Fitur awal yang ingin dibuat adalah short link, custom slug, QR code generator, dan analytics klik sederhana.",
      "Project ini cocok untuk portfolio karena mudah dipahami, berguna sehari-hari, dan bisa dikembangkan menjadi aplikasi fullstack.",
      "Untuk MVP, saya akan mulai dari tampilan UI dulu, lalu lanjut ke logic short link, database, dan dashboard analytics.",
    ],
  },
];

export function getBlogPostBySlug(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}
