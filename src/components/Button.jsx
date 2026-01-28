import Link from "next/link";

export default function Button({ content, className }) {
  return (
    <Link
      href={content.to}
      className={`className="px-8 py-3 bg-sky-500 text-white font-semibold rounded-lg hover:bg-sky-600 transition-colors duration-200 shadow-sm ${className}`}
    >
      {content.label}
    </Link>
  );
}
