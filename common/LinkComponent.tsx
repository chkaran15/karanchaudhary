import Link from 'next/link';
import React from 'react'

interface LinkType{
    href:string,
    linkname:string,
    className:string,
    target?:string,
}

function LinkComponent({href,linkname,className,target}:LinkType) {
  return (
    <Link
      href={href}
      className={className}
      target={target}
    >
      {linkname}
    </Link>
  );
}

export default LinkComponent