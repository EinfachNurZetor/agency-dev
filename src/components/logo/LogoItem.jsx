import Link from "next/link";
import Logo from "../../../public/assets/imgs/logo/nunosoft/dark.svg";
import Image from "next/image";

export default function LogoItem() {
  return (
    <>
      <div className="header__logo-2">
        <Link href={"/"}>
          <Image priority width={200} src={Logo} alt="Site Logo" />
        </Link>
      </div>
    </>
  );
}
