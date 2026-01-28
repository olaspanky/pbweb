import Link from "next/link";

export default function Button({ content, className }) {
  return (
    <Link
      href={content.to}
      className={`px-8 py-3 bg-sky-500 text-xl  text-grey-0 text-center rounded-lg font-semibold inline-block ${className}`}
    >
      {content.label}
    </Link>
  );
}
