"use client";

import { useState } from "react";
import SectionHeading from "@/components/SectionHeading";
import NewsCard from "@/components/NewsCard";
import { PageSection } from "@/components/PageTransition";
import { newsArticles } from "@/data/news";

const categories = ["ALL", "Race Report", "Technical", "Championship", "Interviews", "Paddock"] as const;

export default function NewsClient() {
  const [activeCategory, setActiveCategory] = useState<string>("ALL");

  const filteredArticles = newsArticles.filter((a) => {
    if (activeCategory === "ALL") return true;
    return a.category === activeCategory;
  });

  const featured = filteredArticles[0];
  const rest = filteredArticles.slice(1);

  return (
    <div className="pt-28 pb-24 px-6 max-w-[1280px] mx-auto w-full">
      <PageSection>
        <SectionHeading
          eyebrow="Press Room & Reports"
          title="Apex Circuit News"
          description="In-depth race debriefs, technical telemetry dissections, and exclusive interviews straight from the team motorhomes."
        />

        {/* Category Filters */}
        <div className="flex items-center gap-2 mb-8 overflow-x-auto pb-2">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                activeCategory === cat
                  ? "bg-[#e10600] text-white shadow-[0_2px_12px_rgba(225,6,0,0.3)]"
                  : "bg-[#101214] border border-[rgba(255,255,255,0.08)] text-[rgba(244,244,242,0.6)] hover:text-white hover:border-white/20"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </PageSection>

      {/* Featured Headline Story */}
      {featured && (
        <PageSection className="mb-10">
          <NewsCard article={featured} featured={true} />
        </PageSection>
      )}

      {/* Grid of Remaining Articles */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {rest.map((article, idx) => (
          <PageSection key={article.id} delay={idx * 0.04}>
            <NewsCard article={article} />
          </PageSection>
        ))}
      </div>
    </div>
  );
}
