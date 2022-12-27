import { useRouter } from "next/router";
import Button from "../../shared/Button";
import { BTN_VARIATION_ENUM } from "../../../config/enum";
import MainLayout from "../../../layout/MainLayout";
import Carousel from "../../shared/Carousel";
import SegmentedControl from "../../shared/SegmentedControl";
import SIGEventsBentoBox from "./SIGEventsBentoBox";
import {
    HOME_HERO_PIC_LIST,
    HOME_SIG_EVENTS_LIST,
    HOME_TESTIMONIAL_LIST
} from "../../../config/data";
import Testimonials from "./Testimonials";

const HomePage = () => {
    const router = useRouter();

    const formattedHomeSigEventsList = HOME_SIG_EVENTS_LIST.map((sigEvent) => ({
        ...sigEvent,
        content: (
            <SIGEventsBentoBox pictureFilePaths={sigEvent.pictureFilePaths} />
        )
    }));

    return (
        <>
            <MainLayout maxBodyWidth>
                <div className="c-Home">
                    <span className="c-Home__BG" />
                    {/* Hero */}
                    <div className="c-Home__Hero c-Hero">
                        <div className="c-Hero__Left c-Left">
                            <h1>
                                We empower youths to <b>make a difference</b> in
                                the community.
                            </h1>
                            <div className="c-Left__Btns">
                                <Button
                                    text="About us"
                                    onClickFn={() => router.push("/about-us")}
                                    arrow
                                />
                                <Button
                                    text="Upcoming Events"
                                    onClickFn={() => router.push("/events")}
                                    arrow
                                    variation={BTN_VARIATION_ENUM.PRIMARY_EMPTY}
                                />
                            </div>
                        </div>
                        <div className="c-Hero__Right c-Right">
                            <Carousel pictureList={HOME_HERO_PIC_LIST} />
                        </div>
                    </div>
                    {/* Signature Events */}
                    <div className="c-Home__Sig-events c-Sig-events">
                        <h1 className="c-Sig-events__Header">
                            Signature Events
                        </h1>
                        <SegmentedControl data={formattedHomeSigEventsList} />
                    </div>
                    {/* Testimonials */}
                    <div className="c-Home__Testimonial c-Testimonial">
                        <h1>What our Volunteers Say</h1>
                        <Testimonials testimonialList={HOME_TESTIMONIAL_LIST} />
                    </div>
                    {/* CTA */}
                    <div className="c-Home__CTA c-CTA">
                        <div className="c-CTA__Punchline c-Punchline">
                            <h2>Be part of the</h2>
                            <h1>Action.</h1>
                        </div>
                        <div className="c-CTA__Btns">
                            <Button
                                text="Join us"
                                onClickFn={() => router.push("/join-us")}
                                arrow
                            />
                            <Button
                                text="Upcoming Events"
                                onClickFn={() => router.push("/events")}
                                arrow
                                variation={BTN_VARIATION_ENUM.PRIMARY_EMPTY}
                            />
                        </div>
                    </div>
                </div>
            </MainLayout>
        </>
    );
};

export default HomePage;
