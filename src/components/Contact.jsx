import { CONTACT } from "../constants";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-20 relative">
      <h1 className="my-10 text-center text-4xl font-semibold">Contact</h1>

      <div className="flex justify-center items-center space-x-4 pb-3">
        <div className="text-center tracking-tighter">
        <a
            href="https://discord.com/users/170831626589175808"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            Discord
          </a>
        </div>

        <div className="text-center tracking-tighter">
          <a className="border-b">{CONTACT.email}</a>
        </div>

        <div className="text-center tracking-tighter">
          <a
            href="https://github.com/Swerox"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            Github
          </a>
        </div>
      </div>

      <div className="absolute bottom-4 left-4 text-sm pb-5">
        <div className="hover:underline">
          <Link to="/Impressum">Impressum</Link>
        </div>
        <div className="hover:underline">
          <Link to="/Datenschutz">Datenschutz</Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
