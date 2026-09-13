"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { NewsArticle } from "@/data/news";

interface NewsCardProps {
  article: NewsArticle;
  featured?: boolean;
}

export default function NewsCard({ article, featured = false }: NewsCardProps) {
  if (featured) {
    return (
      <motion.div
        whileHover={{ y: -3 }}
        className="group relative overflow-hidden rounded-xl bg-[#101214] border border-[rgba(255,255,255,0.08)] hover:border-[#e10600]/50 transition-all grid grid-cols-1 lg:grid-cols-12 gap-0"
      >
        <div className="lg:col-span-7 relative min-h-[280px] lg:min-h-[380px] overflow-hidden">
          <Image
            src={article.imageUrl}
            alt={article.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#101214] via-transparent to-transparent lg:hidden" />
        </div>

        <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="px-2.5 py-0.5 rounded text-[11px] font-bold uppercase tracking-wider bg-[#e10600]/15 text-[#e10600] border border-[#e10600]/30">
                {article.category}
              </span>
              <span className="text-xs text-[rgba(244,244,242,0.4)]">
                {article.date} • {article.readTime}
              </span>
            </div>

            <h3 className="font-display text-2xl sm:text-3xl font-bold uppercase tracking-tight text-[#f4f4f2] group-hover:text-white transition-colors leading-tight">
              {article.title}
            </h3>

            <p className="mt-3 text-sm text-[rgba(244,244,242,0.6)] leading-relaxed line-clamp-3">
              {article.excerpt}
            </p>
          </div>

          <div className="mt-6 pt-4 border-t border-[rgba(255,255,255,0.06)] flex items-center justify-between">
            <span className="text-xs text-[rgba(244,244,242,0.4)]">
              By {article.author}
            </span>
            <Link
              href={`/news/${article.slug}`}
              className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#e10600] group-hover:text-white transition-colors"
            >
              <span>Read Story</span>
              <span>→</span>
            </Link>
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      whileHover={{ y: -4 }}
      className="group flex flex-col overflow-hidden rounded-xl bg-[#101214] border border-[rgba(255,255,255,0.08)] hover:border-[#e10600]/50 transition-all"
    >
      <div className="relative aspect-video w-full overflow-hidden bg-[#17191c]">
        <Image
          src={article.imageUrl}
          alt={article.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-3 left-3">
          <span className="px-2.5 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-[#101214]/80 backdrop-blur-md text-[#f5a623] border border-white/10">
            {article.category}
          </span>
        </div>
      </div>

      <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
        <div>
          <div className="text-xs text-[rgba(244,244,242,0.4)] mb-2 font-mono">
            {article.date} • {article.readTime}
          </div>

          <h3 className="font-display text-lg sm:text-xl font-bold uppercase tracking-tight text-[#f4f4f2] group-hover:text-white transition-colors leading-snug line-clamp-2">
            {article.title}
          </h3>

          <p className="mt-2 text-xs sm:text-sm text-[rgba(244,244,242,0.55)] leading-relaxed line-clamp-2">
            {article.excerpt}
          </p>
        </div>

        <div className="mt-5 pt-3 border-t border-[rgba(255,255,255,0.06)] flex items-center justify-between">
          <span className="text-[11px] text-[rgba(244,244,242,0.4)] truncate max-w-[160px]">
            {article.author.split(",")[0]}
          </span>
          <Link
            href={`/news/${article.slug}`}
            className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-[#e10600] group-hover:text-white transition-colors"
          >
            <span>Read</span>
            <span>→</span>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
