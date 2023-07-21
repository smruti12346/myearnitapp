import React from "react";
import Link from "next/link";

function Navigation({ lang = false }) {
  return (
    <>
      <ul className="text-center">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About us</Link>
        </li>
        <li>
          <Link href="/knowledge-base">Knowledge Base</Link>
        </li>
        <li>
          <Link href="/task-app-for-autism">Task App For Autism</Link>
        </li>
        <li>
          <Link href="/faqs">FAQs</Link>
        </li>
        <li>
          <Link href="https://myearnitapp.com/blog/">Blog</Link>
        </li>
        {/* <li>
          <Link href="#">Contact</Link>
        </li> */}

        {/* <li>
          <Link href="privacy-terms">Privacy & Terms</Link>
        </li> */}
      </ul>
    </>
  );
}

export default Navigation;
