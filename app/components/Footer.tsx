import Image from "next/image";
import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <div className="py-16 px-4 md:px-8 lg:px-22 xl:px-32 2xl:px-64 text-sm bg-light" >
      <Container>
        <Row>
          <Col>
            {/* TOP */}
            <div className="flex flex-col md:flex-row justify-between gap-24">
              {/* LEFT */}
              <div className="w-full md:w-1/2 lg:w-1/4 flex flex-col gap-8">
                <p className=" text-dark fw-bold" style={{fontSize:"15px"}}>SABJI BAZAR</p>
                <p className="m-0 font-large text-dark text-sm fw-bold">
                  Plot No. 813, Andheri,
                  Mumbai, 170089, India
                </p>
                <span className="m-0 font-large text-dark text-sm fw-bold">test@gmail.com</span>
                <span className="m-0 font-large text-dark text-sm fw-bold">+91 9999999999</span>
                {/* <div className="flex gap-6">
                  <Image src="/facebook.png" alt="" width={22} height={22} />
                  <Image src="/instagram.png" alt="" width={22} height={22} />
                  <Image src="/youtube.png" alt="" width={22} height={22} />
                  <Image src="/pinterest.png" alt="" width={22} height={22} />
                  <Image src="/x.png" alt="" width={22} height={22} />
                </div> */}
              </div>
              {/* CENTER */}
              <div className="hidden lg:flex justify-between w-1/2">
                <div className="flex flex-col gap-8">
                  <h1 className=" text-dark fw-bold" style={{fontSize:"15px"}}>LINKS</h1>
                  <div className="flex flex-col gap-4">
                    <Link href="/" className="m-0 font-large text-dark text-sm fw-bold">About</Link>
                    <Link href="/" className="m-0 font-large text-dark text-sm fw-bold">Products</Link>
                    <Link href="/" className="m-0 font-large text-dark text-sm fw-bold">Profile</Link>
                    <Link href="/admin" className="m-0 font-large text-dark text-sm fw-bold">Admin</Link>
                  </div>
                </div>
                {/* <div className="flex flex-col gap-8">
                  <h1 className=" text-dark fw-bold" style={{fontSize:"15px"}}>Navigation</h1>
                  <div className="flex flex-col gap-4">
                    <Link href="/admin" className="m-0 font-large text-dark text-sm fw-bold">Admin</Link>
                    <Link href="/orders" className="m-0 font-large text-dark text-sm fw-bold">My Orders</Link>
                    <Link href="" className="m-0 font-large text-dark text-sm fw-bold">My Account</Link>
                    <Link href="" className="m-0 font-large text-dark text-sm fw-bold">My Bookings</Link>
                  </div>
                </div> */}
                <div className="flex flex-col gap-8">
                  <h1 className=" text-dark fw-bold" style={{fontSize:"15px"}}>HELP</h1>
                  <div className="flex flex-col gap-4">
                    <Link href="/" className="m-0 font-large text-dark text-sm fw-bold">Privacy Policy</Link>
                    <Link href="/" className="m-0 font-large text-dark text-sm fw-bold">FAQ</Link>
                    <Link href="/" className="m-0 font-large text-dark text-sm fw-bold">Legal & Privacy</Link>
                    <Link href="/" className="m-0 font-large text-dark text-sm fw-bold">Terms & Conditions</Link>
                  </div>
                </div>
              </div>
              {/* RIGHT */}
              <div className="w-full md:w-1/2 lg:w-1/4 flex flex-col gap-8">
                <p className=" text-dark fw-bold" style={{fontSize:"15px"}}>SABJI BAZAR</p>
                <p className="m-0 font-large text-dark text-sm fw-bold">
                  Plot No. 813, Andheri,
                  Mumbai, 170089, India
                </p>
                <span className="m-0 font-large text-dark text-sm fw-bold">test@gmail.com</span>
                <span className="m-0 font-large text-dark text-sm fw-bold">+91 9999999999</span>
                {/* <div className="flex gap-6">
                  <Image src="/facebook.png" alt="" width={22} height={22} />
                  <Image src="/instagram.png" alt="" width={22} height={22} />
                  <Image src="/youtube.png" alt="" width={22} height={22} />
                  <Image src="/pinterest.png" alt="" width={22} height={22} />
                  <Image src="/x.png" alt="" width={22} height={22} />
                </div> */}
              </div>
            </div>
            {/* BOTTOM */}
            <hr className="text-dark" />
            <div className="flex flex-col md:flex-row items-center justify-between gap-10 mt-4">
          
              {/* <div className="m-0 font-large text-dark text-sm fw-bold">© 2024 Bhutatav</div> */}
              <div className="flex flex-col gap-4 md:flex-row">
                <div className="">
                  <span className="text-dark fw-bold font-medium mr-4">Language</span>
                  <span className="font-medium">United States | English</span>
                </div>
                {/* <div className="">
                  <span className="text-gray-500 mr-4">Currency</span>
                  {/* <span className="font-medium">₹ INR</span>
                </div> */}
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
