import { Home, Users, Newspaper, BarChart3, Mail } from "lucide-react";
import { ShoppingBag, Gauge, Crown, Camera, CalendarPlus } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import clsx from "clsx";
import logo from "../../image/logo.png"
const links = [
  { to: "/", label: "Home", icon: Home },
  { to: "/scores", label: "Live Scores", icon: BarChart3 },
  { to: "/fantasy", label: "Fantasy League", icon: Crown },
  { to: "/merch", label: "Merch", icon: ShoppingBag },
  { to: "/gallery", label: "Gallery", icon: Camera },
  { to: "/hostmatch", label: "Host Match", icon: CalendarPlus }
];

export default function SidebarNav() {
  const location = useLocation();

  return (
    <aside className="hidden md:flex flex-col bg-[#0d0d0d]/80 backdrop-blur-lg border-r border-[#1a1a1a] shadow-[0_0_30px_#00FF6630] h-screen w-20 py-6 fixed top-0 left-0 z-50 items-center gap-2">
      <div className="mb-8">
        <Link to="/" className="flex items-center justify-center">
          <img src={logo} alt="Logo" className="w-8 h-8" />
        </Link>
      </div>

      <nav className="flex-1 flex flex-col gap-2">
        {links.map((link) => {
          const Icon = link.icon;
          const isActive =
            location.pathname === link.to ||
            (link.to !== "/" && location.pathname.startsWith(link.to));

          return (
            <Link
              key={link.to}
              to={link.to}
              title={link.label}
              className={clsx(
                "flex items-center justify-center w-12 h-12 rounded-xl group transition-all duration-200",
                isActive
                  ? "bg-[#00FF66] text-black shadow-[0_0_12px_#00FF66]"
                  : "text-gray-400 hover:bg-[#00FF6610] hover:shadow-[0_0_8px_#00FF66]"
              )}
            >
              <Icon className="w-6 h-6" />
              <span className="sr-only">{link.label}</span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
