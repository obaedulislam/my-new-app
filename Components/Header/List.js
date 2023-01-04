import Link from "next/link";
import React from "react";

const List = () => {
  return (
    <>
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/dashboard" className="flex items-center">
          Dashboard
        </Link>
      </li>
      <li>
        <Link href="/dashboard" className="flex items-center">
          Blog
        </Link>
      </li>
      <li>
        <Link href="/dashboard" className="flex items-center">
          About Us
        </Link>
      </li>
    </>
  );
};

export default List;
