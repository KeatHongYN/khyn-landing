import { Icon } from '@iconify/react';
import React, { useEffect, useState } from 'react';
import ExternalLinkButton from '../../../shared/Button/ExternalLinkButton';
import Pill from '../../../shared/Pill';
import MainLayout from '../../../../layout/MainLayout';
import ImgPlaceholder from '../../../../assets/img/partner-jpjc.png';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { DEBUG } from '../../../../utils/logger';
import Button from '../../../shared/Button';

const ViewEventPage = (): JSX.Element => {
    const router = useRouter();
    const { eventId } = router.query;
    DEBUG.log(eventId);
    const [event, setEvent] = useState(null);
    const [loading, setLoading] = useState(false);

    return (
        <MainLayout title="View Event - Keat Hong Youth Network">
            <div className="c-View-event">
                <div className="c-View-event__Top">
                    <Breadcrumbs separator=">" className="l-Breadcrumb">
                        <Link href="/">Home</Link>
                        <Link href="/events">Events</Link>
                        <h2>View Event</h2>
                    </Breadcrumbs>
                </div>

                <div className="c-View-event__Middle c-Middle">
                    <div className="c-Middle__Pic">
                        <Image priority src={"https://picsum.photos/seed/picsum/200/200"} alt="Event poster" fill />
                    </div>

                    <div className="c-Middle__Info c-Info">
                        <h1>Sunday Funday</h1>
                        <span className="c-Info__Pill">
                            <Pill text="Volunteers Needed" />
                        </span>
                        <span className="c-Info__Location c-Location">
                            <Icon className="c-Location__Icon" icon="akar-icons:location" />
                            <p>Keat Hong CC, Level 1, Lam Soon Auditorium</p>
                        </span>
                        <div className="c-Info__ c-Date-and-time">
                            <span className="c-Date-and-time__Date c-Date">
                                <Icon className="c-Date__Icon" icon="akar-icons:calendar" />
                                <p>-</p>
                            </span>
                            <span className="c-Date-and-time__Time c-Time">
                                <Icon className="c-Time__Icon" icon="bx:time-five" />
                                <p>-</p>
                            </span>
                        </div>
                        <div className="c-Info__Price">
                            <h2>S$10.00+</h2>
                            <p>View the full prices on the event&apos;s page/form</p>
                        </div>

                        <ExternalLinkButton href="https://github.com/KeatHongYN" text="Find out more" />
                    </div>
                </div>

                <div className="c-View-event__Desc">
                    <h2>Event Description</h2>
                    <p>The admin has not added any description.</p>
                </div>

                <hr />

                <div className="c-View-event__View-all-events">
                    <Button text="Back to all events" onClickFn={() => router.push("/")} arrow />
                </div>
            </div>
        </MainLayout>
    );
};

export default ViewEventPage;