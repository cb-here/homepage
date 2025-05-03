import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-[50] mt-[24px] transition-all duration-500 ${
        isSticky ? 'sticky bg-white text-black' : 'bg-transparent text-[#e1e1e1]'
      }`}
    >
      <div className="max-w-[1440px] mx-auto flex items-center justify-between py-[8px] lg:py-[18px] px-4">
        <div className="flex-shrink-0">
          <a href="/">
            <img
              src={isSticky ? "https://res.cloudinary.com/da3yl4ysb/image/upload/v1745390380/Logo_black_0cc512501d.png" : "https://res.cloudinary.com/da3yl4ysb/image/upload/v1743138756/white_logo_e8527a2c1c.png"}
              alt="logo"
              width="133"
              height="36"
            />
          </a>
        </div>
        <div className="hidden md:flex items-center justify-end gap-[8px] tracking-[1px] text-[15px] leading-[24px]">
          {["Properties", "Blog", "About", "Contact"].map((item) => (
            <a
              key={item}
              href="/"
              className="rounded-tl-[6px] rounded-tr-[24px] rounded-br-[6px] font-bold rounded-bl-[16px] px-[12px] py-[6px] border border-transparent hover:border-[#666] hover:bg-[#ffffff1a]"
            >
              {item}
            </a>
          ))}
        </div>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        <div className="hidden md:block tracking-[1px] text-[15px] text-black">
          <a href="/contact" className="flex-shrink-0 new-btn2">Get in touch</a>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden fixed z-50 right-0 -top-10 bg-white h-screen w-full max-w-[75%]">
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-12 right-4 text-2xl text-gray-600 hover:text-black focus:outline-none"
          >
            <X className="bg-yellow-300 rounded-lg" size="32" />
          </button>

          <div className="bg-white pt-20 px-4 pb-4 flex flex-col text-black h-full justify-between">
            <div className="flex flex-col items-center gap-4 text-lg leading-[24px]">
              {["Home", "Properties", "Blog", "About", "Contact"].map((item) => (
                <a
                  key={item}
                  href="/"
                  className="inline-block rounded-tl-[6px] rounded-tr-[24px] rounded-br-[6px] rounded-bl-[16px] px-[12px] py-[6px] border border-transparent hover:border-[#666] hover:bg-[#ffffff1a]"
                >
                  {item}
                </a>
              ))}
              <a href="/contact" className="inline-block new-btn2 mt-2 text-center">
                Get in touch
              </a>
            </div>

            <div className="text-center px-10 flex flex-wrap justify-center gap-x-6 gap-y-4 pb-6">
              {[
                { name: 'Instagram', url: 'https://instagram.com' },
                { name: 'Facebook', url: 'https://facebook.com' },
                { name: 'YouTube', url: 'https://youtube.com' },
                { name: 'LinkedIn', url: 'https://linkedin.com' }
              ].map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-green-500 transition-colors px-3 py-1 text-sm md:text-base bg-green-100 rounded-2xl"
                >
                  {social.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
