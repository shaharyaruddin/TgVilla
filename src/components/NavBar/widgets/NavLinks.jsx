"use client";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavLinks = ({ href, name ,onClick}) => {
  const pathname = usePathname();
  return (
    <li onClick={onClick} className={clsx(' cursor-pointer text-white capitalize text-[1rem] max-xl:text-sm ',pathname === href ?'text-app-yellow!':'')}>
      <Link href={href}>{name}</Link>
      {/* underline */}
      <div className={clsx("w-full bg-app-yellow h-0.5 rounded-full",pathname === href ?'opacity-100':'opacity-0')}></div>
    </li>
  );
};

export default NavLinks;
