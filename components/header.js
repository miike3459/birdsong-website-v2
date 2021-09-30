import React from 'react';
import Image from '../components/image';
import Link from 'next/link';
import logo from '../public/static/logo-transparent.png';

export default class SiteHeader extends React.Component {
    redirectToInvite() {
        window.location.href = "https://discord.com/oauth2/authorize?client_id=817513543049674773&permissions=403041382&scope=bot";
    }
    render () {
        return (
            <header className="site-header no-select">
                <div className="header-wrapper container flex fill">
                    <div className="logo-container">
                        <Image src={logo} alt="Logo" className="logo-img" />
                        <Link href="/">
                            <a><h2 className="logo-tagline">Birdsong</h2></a>
                        </Link>
                    </div>
                    <div className="flex">
                        <nav className="header-nav">
                            <Link href="#">
                                <a>Quickstart</a>
                            </Link>
                            <Link href="#">
                                <a>Get support</a>
                            </Link>
                            <Link href="#">
                                <a>Commands</a>
                            </Link>
                        </nav>
                        <button className="responsive-button primary-button no-select" onClick={this.redirectToInvite}>
                            Invite
                        </button>
                    </div>
                </div>
            </header>
        )
    }
}