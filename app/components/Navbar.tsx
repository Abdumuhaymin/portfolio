import Link from "next/link";

const Navbar = () => {
  const text = "Abdirakhmanov/s";
  return (
    <nav className="container px-4 mx-auto bg-primary text-white py-4 sticky top-0">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">
          <Link href="/">{text}</Link>
        </h1>
        <ul className="flex space-x-6">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/projects">Projects</Link>
          </li>
          <li>
            <Link href="/socials">Socials</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
