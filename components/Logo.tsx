import Image from "next/image";
import Link from "next/link";

type LogoProps = {
  className?: string;
  /** Display height in pixels; width scales from the asset aspect ratio. */
  height?: number;
};

const LOGO_WIDTH = 6547;
const LOGO_HEIGHT = 1421;

export function Logo({ className = "", height = 40 }: LogoProps) {
  const width = Math.round((height / LOGO_HEIGHT) * LOGO_WIDTH);

  return (
    <Link
      href="/"
      className={`inline-flex shrink-0 items-center ${className}`}
      aria-label="Vector Talent Transformation Platform by EdMyst — home"
    >
      <Image
        src="/images/vector-logo.png"
        alt="Vector Talent Transformation Platform by EdMyst"
        width={width}
        height={height}
        priority
        className="h-auto w-auto max-w-none"
        style={{ height, width: "auto", maxHeight: height }}
      />
    </Link>
  );
}
