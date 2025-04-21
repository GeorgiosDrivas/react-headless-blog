import { Link } from "react-router-dom";

export default function LinkComponent({
  url,
  className,
  children,
}: {
  url: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <Link className={className} to={url}>
      {children}
    </Link>
  );
}
