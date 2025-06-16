import { Home, Users, Newspaper, BarChart3, Mail } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import clsx from "clsx";
import { ShoppingBag, Crown, Camera, CalendarPlus } from "lucide-react";

const links = [
  { to: "/", label: "Home", icon: Home },
  { to: "/scores", label: "Live", icon: BarChart3 },
  { to: "/fantasy", label: "Fantasy", icon: Crown },
  { to: "/merch", label: "Merch", icon: ShoppingBag },
  { to: "/gallery", label: "Gallery", icon: Camera },
  { to: "/hostmatch", label: "Host", icon: CalendarPlus },
];

export default function MobileNav() {
  const location = useLocation();

  return (
    <nav className="fixed md:hidden bottom-0 left-0 w-full h-16 z-50 bg-[#0d0d0d]/90 backdrop-blur-md border-t border-[#1a1a1a] shadow-[0_-2px_12px_#00FF6630] flex items-center justify-between px-1">
      {links.map((link) => {
        const Icon = link.icon;
        const isActive =
          location.pathname === link.to ||
          (link.to !== "/" && location.pathname.startsWith(link.to));

        return (
          <Link
            key={link.to}
            to={link.to}
            className={clsx(
              "flex flex-col items-center justify-center flex-1 h-full text-xs transition-all duration-200",
              isActive
                ? "text-[#00FF66] font-semibold shadow-[0_0_6px_#00FF66]"
                : "text-gray-400 hover:text-[#00FF66]/80 hover:shadow-[0_0_6px_#00FF66]/40"
            )}
            aria-label={link.label}
          >
            <Icon className="w-5 h-5 mb-0.5" />
            {link.label}
          </Link>
        );
      })}
    </nav>
  );
}
