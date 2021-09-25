import React from 'react';
import Link from 'next/link';

export default function AboutPage() {
    return (
        <div>
            <h1>About this site</h1>
            <p>We love to make applications powered by <code>next.js</code> and <code>React</code> here.</p>
            <Link href="/">Click here to go back to home!</Link>
        </div>
    )
}