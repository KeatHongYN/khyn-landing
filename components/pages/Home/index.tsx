import { useRouter } from 'next/router';
import Button from '../../shared/Button';
import { BTN_VARIATION_ENUM } from '../../../config/constants';
import MainLayout from '../../../layout/MainLayout';
import { DEBUG } from '../../../utils/logger';

export default function HomePage() {
  const router = useRouter();
  return (
    <>
      <MainLayout>
        <div className="c-Home">
          {/* Hero */}
          <div className="c-Home__Hero c-Hero">
            <div className="c-Hero__Left c-Left">
              <h1>We empower youths to <b>make a difference</b> in the community.</h1>
              <div className="c-Left__Btns">
                <Button text="About us" onClickFn={() => router.push("/about-us")} arrow />
                <Button text="Upcoming Events" onClickFn={() => router.push("/events")} arrow variation={BTN_VARIATION_ENUM.PRIMARY_EMPTY} />
              </div>
            </div>
            <div className="c-Hero__Right c-Right">
              <h1>Hero carousell</h1>
            </div>
          </div>
          {/* Signature Events */}
          <div className="c-Home__Sig-events c-Sig-events">
            <h1>Signature Events</h1>
          </div>
          {/* Testimonials */}
          <div className="c-Home__Testimonials c-Testimonials">
            <h1>What our Volunteers Say</h1>
          </div>
          {/* CTA */}
          <div className="c-Home__CTA c-CTA">
            <div className="c-CTA__Punchline c-Punchline">
              <h2>Be part of the</h2>
              <h1>Action.</h1>
            </div>
            <div className="c-CTA__Btns">
              <Button text="Join us" onClickFn={() => router.push("/join-us")} arrow />
              <Button text="Upcoming Events" onClickFn={() => router.push("/events")} arrow variation={BTN_VARIATION_ENUM.PRIMARY_EMPTY} />
            </div>
          </div>
        </div>
      </MainLayout>
    </>
  );
};
