import { Status, STATUS_LABELS } from "@/content/chapters";

interface StatusBadgeProps {
  status: Status;
  size?: "sm" | "md";
}

export default function StatusBadge({ status, size = "md" }: StatusBadgeProps) {
  const base =
    size === "sm"
      ? "inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-semibold leading-[13px] tracking-[0.04em] uppercase"
      : "inline-flex items-center px-2 py-1 rounded-[6px] text-[11px] font-semibold leading-[13px] tracking-[0.04em] uppercase";

  return <span className={`${base} status-${status}`}>{STATUS_LABELS[status]}</span>;
}
