import { BiSolidBriefcase, BiSolidPhone, BiLogoGmail, BiSolidTime } from "react-icons/bi";
import { BiLogoFacebook, BiLogoInstagram, BiLogoTwitter, BiLogoWhatsapp } from "react-icons/bi";

function Footer() {
  return (
    <footer className="button  flex flex-col items-center text-light dark:text-dark">
      
      {/* Social Media Section */}
      <div className="w-full flex flex-col md:flex-row items-center justify-between py-6 px-8">
        <span className="text-center text-lg font-semibold">Follow Us</span>
        <div className="flex space-x-4 mt-2 md:mt-0">
          <a href="#" className="w-6 text-light hover:text-blue-400 transition-all duration-200">
            <BiLogoTwitter size={26} />
          </a>
          <a href="#" className="w-6 text-light hover:text-blue-600 transition-all duration-200">
            <BiLogoFacebook size={26} />
          </a>
          <a href="#" className="w-6 text-light hover:text-pink-500 transition-all duration-200">
            <BiLogoInstagram size={26} />
          </a>
          <a href="#" className="w-6 text-light hover:text-green-500 transition-all duration-200">
            <BiLogoWhatsapp size={26} />
          </a>
        </div>
      </div>

      {/* Footer Links Section */}
      <div className="w-full mt-10 border-t border-light py-6 px-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Customer Service */}
        <div>
          <h3 className="text-lg font-semibold">Customer Service</h3>
          <ul className="mt-2 space-y-2">
            <li><a href="#" className="text-sm hover:text-neutral-400 transition">Customer Support</a></li>
            <li><a href="#" className="text-sm hover:text-neutral-400 transition">Help Center</a></li>
          </ul>
        </div>

        {/* Inquiry */}
        <div>
          <h3 className="text-lg font-semibold">Inquiry</h3>
          <ul className="mt-2 space-y-2">
            <li><a href="#" className="text-sm hover:text-neutral-400 transition">Ship</a></li>
            <li><a href="#" className="text-sm hover:text-neutral-400 transition">Get Quote</a></li>
            <li><a href="#" className="text-sm hover:text-neutral-400 transition">Track</a></li>
          </ul>
        </div>

        {/* Contact Us */}
        <div>
          <h3 className="text-lg font-semibold">Contact Us</h3>
          <ul className="mt-2 space-y-3">
            <li className="flex items-center space-x-2">
              <BiSolidPhone size={20} />
              <span className="text-sm">+254 000 000 777 / +254 000 000 888</span>
            </li>
            <li className="flex items-center space-x-2">
              <BiLogoGmail size={20} />
              <span className="text-sm">ke.info@dashdelivery.com</span>
            </li>
            <li className="flex items-center space-x-2">
              <BiSolidTime size={20} />
              <span className="text-sm">Mon-Fri 8:00am-6:00pm, Sat 8:00am-2:00pm</span>
            </li>
          </ul>
        </div>

      </div>

      {/* Copyright Section */}
      <div className="w-full mt-10 border-t border-light py-6 px-8 flex items-center justify-center text-center">
        <span>&copy; 2025 DashDelivery. All rights reserved.</span>
      </div>

    </footer>
  );
}

export default Footer;
