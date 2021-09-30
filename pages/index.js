import React from 'react';
import addBasePath from '../util/path';
import SiteHeader from '../components/header';
import ContentCard from '../components/content_card';
import Testimonial from '../components/testimonial';

const testimonials = [
    /* All testimonials are included with the explicit permission of those mentioned. Some names may be anonymized
       for privacy reasons. Do not PR these. If you would like to submit a testimonial, please send a private message
       to miike#3459 on Discord. */
    {
        name: "abrahamlin",
        role: "Moderator, Unexpected Friends (22k members)",
        avatar_url: "static/avatars/abrahamlin.png",
        content: `Birdsong has been an integral part of my server for the past six months now. Its numerous 
        capabilities have allowed us to seamlessly manage all member rule infractions and punishments. Birdsong's 
        comprehensive and easy-to-learn nature makes it an ideal bot for any server with a high member and moderator 
        count.`
    },
    {
        name: "Vilhu",
        role: "Discord Partner, owner of r/teenagers (60k members)",
        avatar_url: "static/avatars/vilhu.png",
        content: `We've been using a punishment system based on infraction points for years in my community, 
        r/teenagers. It's been a perfect solution for us: it's easy to use, straightforward and most importantly, 
        extremely fair for our users. Birdsong brings out the best in it - it's fast, easy to use and configure 
        according to your own needs.`
    }
]

function redirectToSetup() {
    window.location.href = addBasePath("setup");
}

class HomePage extends React.Component {
    static pageTitle = "Home";
    render() {
        return (
            <div>
                <SiteHeader/>
                <div className="container padded">
                    <div className="tagline">
                        <h1 className="tagline-header">Take control of your server.</h1>
                        <p className="tagline-description">
                            Enforce your rules with grace using Birdsong's infraction-point moderation system,
                            recommended
                            by the Discord Moderator Academy.
                        </p>
                        <button className="responsive-button secondary-button no-select" onClick={redirectToSetup}>
                            Get started in five minutes
                        </button>
                    </div>

                    <div className="talking-points flex">
                        <ContentCard title="Easy to use">
                            Configuration takes less than five minutes. Moderators don't need to waste time checking
                            logs
                            to crack down on offenders. An intuitive syntax and functionality makes us a good choice for
                            moderators from all backgrounds.
                        </ContentCard>
                        <ContentCard title="Performant">
                            Never worry about slow responses and downtime. While other modbots struggle under pressure,
                            with our solid infrastructure, we're a reliable service made for active servers with a need
                            for
                            speed.
                        </ContentCard>
                        <ContentCard title="Effective">
                            Members are given infraction points for rules they break; these points add up and Birdsong
                            gives them appropriate punishments. Accumulating infraction systems are shown to discourage
                            repeat offenders across the board.
                        </ContentCard>
                    </div>

                    <div className="tagline-med">
                        <h2 className="tagline-header-med">Who's talking about us?</h2>
                    </div>

                    <div className="testimonials">
                        {testimonials.map((data, i) => {
                            return <Testimonial
                                name={data.name} role={data.role} img={data.avatar_url}
                                key={i}>{data.content}</Testimonial>
                        })}
                    </div>
                </div>
            </div>
        )
    }
}

export default HomePage;