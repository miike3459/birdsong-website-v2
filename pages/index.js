import React from 'react';
import Link from 'next/link';

export default function HomePage() {
    return (
        <div>
            <h1>Welcome to my test app!</h1>
            <p><em>Why are you here, anyway?</em></p>
            <p>Oh well, whatever. <Link href="/about">Check out more about this app!</Link></p>
        </div>
    )
}