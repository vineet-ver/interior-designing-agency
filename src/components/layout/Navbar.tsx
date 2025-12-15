"use client";

import { useEffect, useState } from "react";
import Link from 'next/link';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import MagneticButton from '@/components/ui/MagneticButton';

export function Navbar() {
    const [hidden, setHidden] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious() ?? 0;
        if (latest > previous && latest > 150) {
            setHidden(true);
        } else {
            setHidden(false);
        }
        setScrolled(latest > 50);
    });

    return (
        <motion.header
            variants={{
                visible: { y: 0 },
                hidden: { y: -100 },
            }}
            animate={hidden ? "hidden" : "visible"}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className={`fixed top-0 left-0 right-0 z-50 flex justify-center py-4 transition-all duration-300 ${scrolled ? 'pt-2' : 'pt-6'}`}
        >
            <div
                className={`
            relative flex items-center justify-between px-6 py-3 rounded-full transition-all duration-300
            ${scrolled
                        ? "bg-obsidian-950/70 border border-white/10 backdrop-blur-xl shadow-2xl w-[90%] md:w-[60%]"
                        : "bg-transparent w-full container"
                    }
        `}
            >
                {/* Logo */}
                <Link href="/" className="relative z-10 group">
                    <span className="font-display text-2xl font-bold tracking-tighter text-white group-hover:text-metallic-gold transition-colors duration-300">
                        ITSS
                        <span className="text-primary-500">.</span>
                    </span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {['Services', 'Careers', 'About', 'Contact'].map((item) => (
                        <Link key={item} href={`/${item.toLowerCase()}`} className="text-sm font-medium text-gray-300 hover:text-white transition-colors relative group">
                            {item}
                            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-metallic-gold transition-all duration-300 group-hover:w-full"></span>
                        </Link>
                    ))}
                </nav>

                {/* CTA */}
                <div className="hidden md:flex items-center gap-4">
                    <Link href="/contact">
                        <MagneticButton>
                            <button className="px-5 py-2 text-sm font-medium text-black bg-white rounded-full hover:bg-metallic-gold transition-colors duration-300">
                                Get Quote
                            </button>
                        </MagneticButton>
                    </Link>
                </div>

                {/* Mobile Toggle */}
                <button className="md:hidden text-white">
                    <Menu className="w-6 h-6" />
                </button>
            </div>
        </motion.header>
    );
}
