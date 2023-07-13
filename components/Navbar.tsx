import Link from "next/link";
import { FaGithub } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center px-3 py-2 rounded-lg bg-mSky text-mBlack">
      <div>
        <Link href="/" className="text-2xl font-bold text-mDarkGreen">
          Todo<span className="text-mRed">App</span>
        </Link>
      </div>
      <div className="flex items-center">
        <Link
          className="text-xl mx-2 font-semibold hover:bg-mDarkGreen hover:text-mWhite px-2 py-1 rounded-xl"
          href="/about"
        >
          About
        </Link>
        <Link
          className="text-xl mx-2 font-semibold hover:bg-mDarkGreen hover:text-mWhite px-2 py-1 rounded-xl"
          href="#github"
        >
          <FaGithub />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
