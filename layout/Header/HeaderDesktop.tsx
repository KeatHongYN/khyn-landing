import Link from "next/link";
import { useRouter } from "next/router";
import Button from "../../components/shared/Button";
import LogoKHYN from "../../assets/svg/logo-khyn.svg";

const HeaderDesktop = (): JSX.Element => {
    const router = useRouter();
    return (
        <div className="c-Header-desktop">
            <div className="c-Header-desktop__Left c-Left">
                <Link className="c-Left__Logo" href="/">
                    <LogoKHYN />
                </Link>
            </div>
            <div className="c-Header-desktop__Middle c-Middle">
                <Link
                    href="/"
                    className={`c-Link ${
                        router.asPath === "/" ? "c-Link--active" : ""
                    }`}
                >
                    Home
                </Link>
                <Link
                    href="/events"
                    className={`c-Link ${
                        router.asPath.startsWith("/events")
                            ? "c-Link--active"
                            : ""
                    }`}
                >
                    Events
                </Link>
                <Link
                    href="/about-us"
                    className={`c-Link ${
                        router.asPath === "/about-us" ? "c-Link--active" : ""
                    }`}
                >
                    About us
                </Link>
            </div>
            <div className="c-Header-desktop__Right c-Right">
                <Button
                    text="Join Us"
                    onClickFn={() => router.push("/join-us")}
                />
            </div>
        </div>
    );
};

export default HeaderDesktop;
