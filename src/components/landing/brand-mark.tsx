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
      aria-label="The Prosperis Associates Limited"
    >
      <span className="brand-mark__symbol" aria-hidden="true">
        <span>P</span>
      </span>
      <span className="brand-mark__word">
        PROSPERIS ASSOCIATES <small>LIMITED</small>
      </span>
    </span>
  );
}
