import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import NewsCard from "@/components/NewsCard";
import { PageSection } from "@/components/PageTransition";
import { newsArticles } from "@/data/news";

interface NewsDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return newsArticles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: NewsDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = newsArticles.find((a) => a.slug === slug);
  if (!article) return { title: "Article Not Found | Apex Circuit" };

  return {
    title: `${article.title} | Apex Circuit News`,
    description: article.excerpt,
  };
}

export default async function NewsDetailPage({ params }: NewsDetailPageProps) {
  const { slug } = await params;
  const article = newsArticles.find((a) => a.slug === slug);

  if (!article) {
    notFound();
  }

  const related = newsArticles.filter((a) => a.id !== article.id).slice(0, 3);

  return (
    <div className="pt-24 pb-24 px-6 max-w-[880px] mx-auto w-full">
      {/* Back Link */}
      <PageSection>
        <Link
          href="/news"
          className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[rgba(244,244,242,0.5)] hover:text-white mb-8 transition-colors"
        >
          <span>←</span>
          <span>Back to Newsroom</span>
        </Link>
      </PageSection>

      {/* Article Header */}
      <PageSection>
        <div className="flex items-center gap-3 mb-4">
          <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#e10600]/15 text-[#e10600] border border-[#e10600]/30">
            {article.category}
          </span>
          <span className="text-xs text-[rgba(244,244,242,0.4)] font-mono">
            {article.date} • {article.readTime}
          </span>
        </div>

        <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold uppercase tracking-tight text-[#f4f4f2] leading-[1.1] m-0">
          {article.title}
        </h1>

        <div className="mt-4 pb-6 border-b border-[rgba(255,255,255,0.08)] flex items-center justify-between text-xs text-[rgba(244,244,242,0.5)]">
          <span>By <strong className="text-white">{article.author}</strong></span>
          <span>Apex Circuit Editorial</span>
        </div>
      </PageSection>

      {/* Hero Image */}
      <PageSection className="mt-8">
        <div className="relative aspect-video w-full rounded-2xl overflow-hidden border border-[rgba(255,255,255,0.08)] bg-[#17191c]">
          <Image
            src={article.imageUrl}
            alt={article.title}
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="mt-2 text-right text-[11px] text-[rgba(244,244,242,0.4)]">
          Apex Circuit Paddock Media Service
        </div>
      </PageSection>

      {/* Article Body: Generous line height single-column layout */}
      <PageSection className="mt-10">
        <article className="prose prose-invert max-w-none text-base sm:text-lg text-[rgba(244,244,242,0.82)] leading-[1.8] flex flex-col gap-6">
          <p className="text-lg sm:text-xl font-medium text-white leading-relaxed pb-4 border-b border-[rgba(255,255,255,0.06)]">
            {article.excerpt}
          </p>

          {article.content.map((paragraph, index) => (
            <p key={index} className="text-base sm:text-[17px] leading-[1.85]">
              {paragraph}
            </p>
          ))}
        </article>
      </PageSection>

      {/* Related Stories */}
      <PageSection className="mt-20 pt-10 border-t border-[rgba(255,255,255,0.08)]">
        <div className="flex items-center gap-2 mb-6">
          <span className="w-2 h-2 bg-[#e10600]" />
          <h3 className="font-display text-xl font-bold uppercase tracking-wider text-white m-0">
            More From The Paddock
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {related.map((item) => (
            <NewsCard key={item.id} article={item} />
          ))}
        </div>
      </PageSection>
    </div>
  );
}
