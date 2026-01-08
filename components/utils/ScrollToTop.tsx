"use client";

import { useEffect } from "react";

export default function ScrollToTop() {
    useEffect(() => {
        // Disable default browser scroll restoration
        if (history.scrollRestoration) {
            history.scrollRestoration = "manual";
        }

        // Force scroll to top
        window.scrollTo(0, 0);
    }, []);

    return null;
}
