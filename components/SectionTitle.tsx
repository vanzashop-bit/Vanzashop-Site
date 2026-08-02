type SectionTitleProps = {
  eyebrow: string;
  title: string;
  description: string;
  center?: boolean;
};

export default function SectionTitle({
  eyebrow,
  title,
  description,
  center = false,
}: SectionTitleProps) {
  return (
    <div
      className={
        center
          ? "mx-auto max-w-4xl text-center"
          : "max-w-4xl"
      }
    >
      <span className="inline-flex items-center rounded-full border border-orange-200 bg-orange-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.25em] text-orange-600">

        {eyebrow}

      </span>

      <h2 className="mt-6 text-4xl font-black leading-tight text-slate-950 sm:text-5xl">

        {title}

      </h2>

      <p className="mt-6 text-lg leading-8 text-slate-600">

        {description}

      </p>
    </div>
  );
}
