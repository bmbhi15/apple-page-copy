import Image from "next/image";
import { navLinks, NavLink } from "../constants";
import Link from "next/link";
const NavBar = () => {
  return (
    <header>
      <nav>
        <Image src="/logo.svg" alt="apple logo" height={24} width={24} />
        <ul>
          {navLinks.map((link: NavLink) => {
            return (
              <li key={link.label}>
                <Link href="/">
                  <p>{link.label}</p>
                </Link>
              </li>
            );
          })}
        </ul>
        <div className="space-x-4">
          <button>
            <Image src="/Search.svg" alt="search icon" width={24} height={24} />
          </button>
          <button>
            <Image src="/Cart.svg" alt="cart icon" width={24} height={24} />
          </button>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
