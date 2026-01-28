import Link from "next/link";

export default function Button({ content, className }) {
  return (
    <Link
      href={content.to}
      className={`p-4 bg-brand-light-blue text-grey-0 text-center rounded-lg font-semibold inline-block ${className}`}
    >
      {content.label}
    </Link>
  );
}
