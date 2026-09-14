import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { projects } from "@/data/portfolio";
import { ProjectPage } from "@/routes/projects.$slug";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) {
    return { title: "Project unavailable — Boaz Serem", robots: "noindex" };
  }

  return {
    title: `${project.name} — Boaz Serem`,
    description: project.summary,
    openGraph: { title: `${project.name} — Boaz Serem`, description: project.summary },
  };
}

export default async function ProjectRoute({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  if (!projects.some((project) => project.slug === slug)) {
    notFound();
  }

  return <ProjectPage slug={slug} />;
}
