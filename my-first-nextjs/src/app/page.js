import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h2>Hello Vercel!</h2>
      <Link href="/about">ไปยังหน้าเกี่ยวกับเรา</Link>
      <Link href="/contact">ไปยังหน้าติดต่อเรา</Link>
    </div>
  );
}
