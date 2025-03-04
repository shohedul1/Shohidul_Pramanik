"use client";

import * as React from "react";
import { useSpring, animated, config } from "@react-spring/web";

export default function BagroundAnimation() {
    const [{ background }] = useSpring(
        () => ({
            from: { background: "var(--step0)" },
            to: [
                { background: "var(--step0)" },
                { background: "var(--step1)" },
                { background: "var(--step2)" },
                { background: "var(--step3)" },
                { background: "var(--step4)" },
            ],
            config: config.molasses,
            loop: { reverse: true },
        }),
        []
    );

    return (
        <div className="relative flex h-screen items-center justify-center">
            <div className="relative flex gap-4">
                <div className="w-20 h-20 bg-gray-300 rounded-md" />
                <div className="w-20 h-20 bg-gray-400 rounded-md" />
                <animated.div className="w-20 h-20 rounded-md" style={{ background }} />
            </div>
            <animated.div className="absolute inset-0 -z-10" style={{ background }} />
        </div>
    );
}

