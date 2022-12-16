import React from 'react';
import { Icon } from '@iconify/react';
import Pill from '../Pill';
import { EventListItemProps } from './types';
import { useRouter } from 'next/router';
import Image from 'next/image';

const EventListItem = ({
  eventId,
  title,
  location,
  date,
  time,
  volunteersNeeded,
  image,
  price
}: EventListItemProps): JSX.Element => {

  const router = useRouter();

  return (
    <div className="c-Event-list-item" onClick={() => router.push(`/events/${eventId}`)}>
      <div className="c-Event-list-item__Img c-Img">
        {
          image ? <Image blurDataURL="URL" placeholder='blur' src={image} alt="Event poster" width={200} height={200} /> : <NoImage />
        }
      </div>
      <div className="c-Event-list-item__Desc c-Desc">
        <h1>{title}</h1>
        <span className="c-Desc__Location c-Location">
          <Icon className="c-Location__Icon" icon="akar-icons:location" />
          <p>{location ? location : "-"}</p>
        </span>
        <div className="c-Desc__Date-and-time c-Date-and-time">
          <span className="c-Date-and-time__Date c-Date">
            <Icon className="c-Date__Icon" icon="akar-icons:calendar" />
            <p>{date ? date : "-"}</p>
          </span>
          <span className="c-Date-and-time__Time c-Time">
            <Icon className="c-Time__Icon" icon="bx:time-five" />
            <p>{time ? time : "-"}</p>
          </span>
        </div>
        <div className='c-Desc__Bottom c-Bottom'>
          {volunteersNeeded ? <Pill text="Volunteers Needed" /> : null}
          <h2>{price}</h2>
        </div>
      </div>
    </div>
  );
};

const NoImage = (): JSX.Element => {
  return (
    <div className="c-No-image">
      <Icon className="c-No-image__Icon" icon="carbon:no-image" />
      <p>No image</p>
    </div>
  );
};

export default EventListItem;