import React from 'react';
import { Icon } from '@iconify/react';
import { PILL_META, PILL_VARIATION_ENUM } from '../../../config/constants';
import { PillProps } from './types';

const Pill = ({
    text,
    iconID,
    variation = PILL_VARIATION_ENUM.GRADIENT_IG
}: PillProps): JSX.Element => {

    const classSuffix = PILL_META[variation].classSuffix;

    return (
        <div className={`c-Pill c-Pill__${classSuffix}`}>
            {iconID && <Icon className="c-Pill__Icon" icon={iconID} />}
            <p>{text}</p>
        </div>
    )
}

export default Pill;