"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const isActive = (p) => pathname === p;

  return (
    <header className="border-b bg-white/80 backdrop-blur">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="font-bold text-lg">? AngularJS Fun Lab</Link>
        <nav className="flex items-center gap-4">
          <Link className={`hover:underline ${isActive("/") ? "font-semibold" : ""}`} href="/">Home</Link>
          <Link className={`hover:underline ${isActive("/js") ? "font-semibold" : ""}`} href="/js">JavaScript</Link>
          <Link className={`hover:underline ${isActive("/angularjs") ? "font-semibold" : ""}`} href="/angularjs">AngularJS</Link>
          <a className="text-sm text-gray-500 hover:text-gray-700" href="https://angularjs.org/" target="_blank" rel="noreferrer">Docs ?</a>
        </nav>
      </div>
    </header>
  );
}
