import { FaFacebookF, FaLinkedinIn, FaGithub, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="mt-120 container mx-auto border-t border-purple-100 bg-white/40 backdrop-blur-sm ">
      <div className="container mx-auto px-6 py-12">

        {/* Top Section */}
        <div className="grid md:grid-cols-3 gap-10">

          {/* About */}
          <div>
            <h2 className="text-2xl font-bold text-purple-900">
              SkillSphere
            </h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              A modern online learning platform where learners can explore
              courses, watch lessons, and enroll in skill-based programs such
              as Web Development, Design, Marketing, and more.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">
              Contact Info
            </h3>

            <div className="space-y-2 text-gray-600">
              <p>Email: support@skillsphere.com</p>
              <p>Phone: +880 1234-567890</p>
              <p>Dhaka, Bangladesh</p>
            </div>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-lg font-semibold mb-4">
              Follow Us
            </h3>

            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-purple-100 hover:bg-purple-900 hover:text-white transition flex items-center justify-center"
              >
                <FaFacebookF />
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-full bg-purple-100 hover:bg-purple-900 hover:text-white transition flex items-center justify-center"
              >
                <FaLinkedinIn />
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-full bg-purple-100 hover:bg-purple-900 hover:text-white transition flex items-center justify-center"
              >
                <FaGithub />
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-full bg-purple-100 hover:bg-purple-900 hover:text-white transition flex items-center justify-center"
              >
                <FaYoutube />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-10 pt-6 border-t border-purple-100 flex flex-col md:flex-row justify-between items-center gap-4">

          <p className="text-gray-500 text-sm">
            © 2026 SkillSphere. All rights reserved.
          </p>

          <div className="flex gap-6 text-sm">
            <a href="#" className="hover:text-purple-500 transition">
              Terms & Conditions
            </a>

            <a href="#" className="hover:text-purple-500 transition">
              Privacy Policy
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;