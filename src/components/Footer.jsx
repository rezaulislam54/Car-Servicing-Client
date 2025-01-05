// import icon from "../../public/logo1.png";
// import icon from "../../public/logo2.png";
const Footer = () => {
  return (
    <div className="bg-[#151515]">
      <footer className="footer container mx-auto py-8 text-gray-200 px-6 md:px-4 lg:px-0">
        <aside className="w-[250px]">
          <img
            className="w-24 h-24"
            src="https://res.cloudinary.com/dvp64j4a3/image/upload/v1729267592/Group_2_eoqzso.png"
            // src={icon}
          />
          <p>
            Edwin Diaz is a software and web technologies engineer, a life coach
            trainer who is also a serial .
          </p>
        </aside>
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
