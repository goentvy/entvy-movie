import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui";
import { Link } from "react-router-dom";

function AppHeader() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
        setScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <header
                className={cn(
                    "sticky top-0 z-50 transition-all duration-300 shadow-sm border-b-2",
                    scrolled ? "h-12" : "h-20"
                )}
                >
                <div className="container mx-auto flex items-center justify-between h-full px-4">
                    <Link to="/" className="text-lg font-bold">
                    Entvy.Movie
                    </Link>
                    <Button variant="outline" size="sm">
                        Contact
                    </Button>
                </div>
            </header>
        </>
    );
}

export { AppHeader };