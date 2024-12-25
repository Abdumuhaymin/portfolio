import { FaLinkedin, FaGithub, FaTwitter, FaInstagram } from "react-icons/fa";

const Socials = () => {
  const socialLinks = [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/abdumuhaymin-abdurahmonov-95844a2a8/",
      icon: <FaLinkedin className="text-blue-600" />,
    },
    {
      name: "GitHub",
      url: "https://github.com/Abdumuhaymin",
      icon: <FaGithub className="text-white" />,
    },
    {
      name: "X",
      url: "https://x.com/Abdumuhaym",
      icon: <FaTwitter className="text-blue-400" />,
    },
    {
      name: "Instagram",
      url: "https://instagram.com/sal1movcc",
      icon: <FaInstagram className="text-pink-500" />,
    },
  ];

  return (
    <div className="min-h-screen bg-primary text-white flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-6">Social Links</h1>
        <ul className="space-y-4">
          {socialLinks.map((link, index) => (
            <li key={index}>
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-4 hover:text-blue-300 transition"
              >
                {link.icon}
                <span>{link.name}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Socials;
