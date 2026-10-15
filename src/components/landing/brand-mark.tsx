import { cn } from "@/lib/utils";

export function BrandMark({
  inverse = false,
  className,
}: {
  inverse?: boolean;
  className?: string;
}) {
  return (
    <span
      className={cn("brand-mark", inverse && "brand-mark--inverse", className)}
      aria-label="Prosperis Group"
    >
      <span className="brand-mark__symbol" aria-hidden="true">
        <span>P</span>
      </span>
      <span className="brand-mark__word">
        PROSPERIS <small>GROUP</small>
      </span>
    </span>
  );
}
