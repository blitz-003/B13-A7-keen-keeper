import { FaInstagram, FaFacebook, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-emerald-900 text-white">
      <div className="w-3/4 mx-auto py-12 text-center flex flex-col gap-6">
        {/* Title */}
        <h1 className="text-xl md:text-2xl lg:text-5xl font-bold">
          KeenKeeper
        </h1>

        {/* Description */}
        <p className="text-sm md:text-base lg:text-lg text-white/90 px-2">
          Your personal shelf of meaningful connections. Browse, tend, and
          nurture the relationships that matter most
        </p>

        {/* Social Label */}
        <p className="text-lg font-medium">Social Links</p>

        {/* Social Icons */}
        <div className="flex justify-center gap-4">
          <div className="bg-white text-black p-3 rounded-full cursor-pointer hover:scale-105 transition">
            <FaInstagram />
          </div>

          <div className="bg-white text-black p-3 rounded-full cursor-pointer hover:scale-105 transition">
            <FaFacebook />
          </div>

          <div className="bg-white text-black p-3 rounded-full cursor-pointer hover:scale-105 transition">
            <FaXTwitter />
          </div>
        </div>

        {/* Divider */}
        <div className="w-full mx-auto border-t border-gray-400"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          {/* Left */}
          <p>© 2026 KeenKeeper. All rights reserved.</p>

          {/* Right */}
          <div className="flex gap-4">
            <span className="cursor-pointer hover:underline">
              Privacy Policy
            </span>
            <span className="cursor-pointer hover:underline">
              Terms of Service
            </span>
            <span className="cursor-pointer hover:underline">Cookies</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
