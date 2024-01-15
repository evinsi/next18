'use client';
import { Link } from '@/navigation';
import { AppPathnames } from '@/config';
import { useSelectedLayoutSegment } from 'next/navigation';
import { ComponentProps } from 'react';

export default function NavigationLink () {
    // const selectedLayoutSegment = useSelectedLayoutSegment();
    // const pathname= selectedLayoutSegment ? `/${selectedLayoutSegment}` : '/';
    // const isActive = pathname === href;    

    return (
        <div>
         <Link href="/about">About</Link>
        </div>
    );
}

