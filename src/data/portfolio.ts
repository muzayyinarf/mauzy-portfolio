export type Project = {
  slug: string;
  title: string;
  description: string;
  overview: string;
  problem: string;
  solution: string;
  features: string[];
  stack: string[];
  status: string;
  demoUrl: string;
  githubUrl: string;
};

export const projects: Project[] = [
  {
    slug: "linkpilot",
    title: "LinkPilot",
    description:
      "Short link, link-in-bio, QR code, and simple analytics platform for creators, job seekers, and small businesses.",
    overview:
      "LinkPilot is a practical link management tool that helps users create short links, link-in-bio pages, QR codes, and track link performance through simple analytics.",
    problem:
      "Many people share multiple links across social media, CVs, job applications, and business profiles, but they do not have one simple place to manage all links and measure performance.",
    solution:
      "LinkPilot provides one dashboard to create short links, organize public profile links, generate QR codes, and view basic click analytics.",
    features: [
      "Create short links",
      "Custom slug for links",
      "Link-in-bio public profile",
      "QR code generator",
      "Basic click analytics",
      "Simple dashboard",
    ],
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL", "Analytics"],
    status: "MVP Planned",
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    slug: "applytrack",
    title: "ApplyTrack",
    description:
      "Job application tracker to organize applications, monitor hiring stages, and save interview notes in one dashboard.",
    overview:
      "ApplyTrack helps job seekers manage their job search process by tracking applications, interview stages, notes, and follow-up schedules.",
    problem:
      "Job seekers often apply to many companies but forget the application status, interview schedule, recruiter contact, and follow-up timing.",
    solution:
      "ApplyTrack keeps all job application data in one organized dashboard with clear status tracking and notes.",
    features: [
      "Add job application data",
      "Track status: Applied, Interview, Test, Offering, Rejected",
      "Save interview notes",
      "Follow-up reminder concept",
      "Application statistics",
      "Export data concept",
    ],
    stack: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Dashboard"],
    status: "MVP Planned",
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    slug: "notedrop",
    title: "NoteDrop",
    description:
      "Simple note sharing app that allows users to write notes and share them instantly through public or protected links.",
    overview:
      "NoteDrop is a lightweight note-sharing tool for creating quick notes and sharing them through public or protected links.",
    problem:
      "People often need to share short notes, instructions, meeting summaries, or code snippets quickly without sending long chat messages.",
    solution:
      "NoteDrop allows users to create a note, generate a shareable link, and optionally protect or expire the note.",
    features: [
      "Create quick notes",
      "Share notes by public link",
      "Password protected note concept",
      "Expired note concept",
      "Markdown support concept",
      "Clean reading view",
    ],
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Markdown", "Share Link"],
    status: "MVP Planned",
    demoUrl: "#",
    githubUrl: "#",
  },
];

export const skills = [
  "Flutter",
  "Dart",
  "React",
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "Laravel",
  "Node.js",
  "MySQL",
  "PostgreSQL",
  "Firebase",
  "SAP ABAP Basic",
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
