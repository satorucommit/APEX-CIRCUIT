import Link from "next/link";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  linkText?: string;
  linkHref?: string;
  className?: string;
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  linkText,
  linkHref,
  className = "",
}: SectionHeadingProps) {
  return (
    <div className={`flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 ${className}`}>
      <div>
        <div className="flex items-center gap-2 mb-2">
          <span className="inline-block w-2 h-2 bg-[#e10600]" />
          <span className="font-display text-xs md:text-sm font-bold tracking-[0.2em] text-[#e10600] uppercase">
            {eyebrow}
          </span>
        </div>
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold uppercase tracking-tight text-[#f4f4f2] m-0">
          {title}
        </h2>
        {description && (
          <p className="mt-2 text-sm sm:text-base text-[rgba(244,244,242,0.6)] max-w-2xl leading-relaxed">
            {description}
          </p>
        )}
      </div>

      {linkText && linkHref && (
        <Link
          href={linkHref}
          className="group inline-flex items-center gap-1 text-xs md:text-sm font-semibold uppercase tracking-wider text-[rgba(244,244,242,0.7)] hover:text-white transition-colors self-start md:self-end pb-1 border-b border-[rgba(255,255,255,0.15)] hover:border-[#e10600]"
        >
          <span>{linkText}</span>
          <span className="transform group-hover:translate-x-1 transition-transform text-[#e10600]">
            →
          </span>
        </Link>
      )}
    </div>
  );
}
