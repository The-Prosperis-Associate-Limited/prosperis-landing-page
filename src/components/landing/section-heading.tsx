import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  theme?: "light" | "dark";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  theme = "light",
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "section-heading",
        align === "center" && "section-heading--center",
        theme === "dark" && "section-heading--dark",
      )}
    >
      <p className="eyebrow">
        <span aria-hidden="true" />
        {eyebrow}
      </p>
      <h2>{title}</h2>
      {description ? (
        <p className="section-heading__copy">{description}</p>
      ) : null}
    </div>
  );
}
