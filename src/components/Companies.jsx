import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const TAGS = [
    {
        src: "https://images.crunchbase.com/image/upload/c_pad,h_170,w_170,f_auto,b_white,q_auto:eco,dpr_1/qhojo4dzbzgbu362o7kn",
    },
    {
        src: "https://images.crunchbase.com/image/upload/c_pad,h_170,w_170,f_auto,b_white,q_auto:eco,dpr_1/wqbrxlktqg1sag58yrts",
    },
    {
        src: "https://images.crunchbase.com/image/upload/c_pad,h_170,w_170,f_auto,b_white,q_auto:eco,dpr_1/qaxczo3oha5mz6nnjwfo",
    },
    {
        src: "https://media.glassdoor.com/sql/4400757/kontext-india-squarelogo-1627049424043.png",
    },
    {
        src: "https://images.crunchbase.com/image/upload/c_pad,h_170,w_170,f_auto,b_white,q_auto:eco,dpr_1/cheeov1jruvldqq7uufs",
    },
    {
        src: "https://images.crunchbase.com/image/upload/c_pad,h_170,w_170,f_auto,b_white,q_auto:eco,dpr_1/e8kisuoetemicyoeznxz",
    },
    {
        src: "https://images.crunchbase.com/image/upload/c_pad,h_170,w_170,f_auto,b_white,q_auto:eco,dpr_1/zfvkuf2k98lacoqpqdiw",
    },
    {
        src: "https://images.crunchbase.com/image/upload/c_pad,h_170,w_170,f_auto,b_white,q_auto:eco,dpr_1/luqdr3bawm8ifyxuuoq0",
    },
    {
        src: "https://media.licdn.com/dms/image/v2/C510BAQHFm1-64M66tg/company-logo_200_200/company-logo_200_200/0/1630622942788/hypothizerai_logo?e=1739404800&v=beta&t=f--9ky_6QIkStlYrdmM8VnkpXNqZh4ljyPyFQ2uI_Zc",
    },
    {
        src: "https://images.crunchbase.com/image/upload/c_pad,h_170,w_170,f_auto,b_white,q_auto:eco,dpr_1/v1397752992/74769b9ae07299a83ba081cd99930ab9.png",
    },
    {
        src: "https://kmiteservices.com/images/logo1.png",
    },
    {
        src: "https://images.crunchbase.com/image/upload/c_pad,h_170,w_170,f_auto,b_white,q_auto:eco,dpr_1/v1446411369/gmaliteiulna4pefluib.jpg",
    },
    {
        src: "https://bookface-images.s3.amazonaws.com/logos/58b19639becbd4d495b7ca39c2b95bb42d24d8ed.png?1588366041",
    },
    {
        src: "https://media.licdn.com/dms/image/v2/C4E0BAQGgV2CDFA_SAA/company-logo_200_200/company-logo_200_200/0/1631303859833?e=1739404800&v=beta&t=oKT8YVp5NgRISqchUIf86jkJSCIMos2mNpprH907YXM",
    },
];
const AnimatedPills = () => {
    const containerRef = useRef(null);
    const pillsRef = useRef([]);

    useEffect(() => {
        gsap.fromTo(
            pillsRef.current,
            {
                x: -100, // Starting position off-screen to the left
                opacity: 0, // Hidden initially
            },
            {
                x: 0,
                opacity: 1,
                stagger: 0.2, // Adds a slight delay between each pill’s animation
                duration: 1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 80%", // Starts when the container reaches 80% of viewport height
                    toggleActions: "play none none reverse", // Plays on scroll in, reverses on scroll out
                },
            }
        );
    }, []);

    return (
        <div
            ref={containerRef}
            className="flex gap-8 flex-wrap company-logos mt-16 justify-center items-center"
        >
            {TAGS.map((c, index) => (
                <img
                    alt="Accel"
                    src={c.src}
                    ref={(el) => (pillsRef.current[index] = el)}
                />
            ))}

            <p className="text-gray-500 italic mb-2  caveat-new text-2xl">
                ... and hoping to work with many more!
            </p>
        </div>
    );
};

export default AnimatedPills;
