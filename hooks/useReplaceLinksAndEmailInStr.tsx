import { Icon } from "@iconify/react";
import get from "lodash/get";
import {
    EMAIL_INCLUDED_REGEX,
    EMAIL_OR_HTTPS_INCLUDED_REGEX,
    HTTPS_INCLUDED_REGEX
} from "../config/constants";

const useReplaceLinksAndEmailInStr = (input = "", linkMap = {}) =>
    input.split(EMAIL_OR_HTTPS_INCLUDED_REGEX).map((str, i) => {
        if (HTTPS_INCLUDED_REGEX.test(str)) {
            return (
                <a
                    className="c-Replace-link"
                    href={str}
                    key={i}
                    rel="noopener noreferrer"
                    target="_blank"
                >
                    {linkMap ? get(linkMap, [str], str) : str}
                    <Icon
                        className="c-Replace-link__Icon"
                        icon="bx:link-external"
                    />
                </a>
            );
        }
        if (EMAIL_INCLUDED_REGEX.test(str)) {
            return (
                <a className="c-Replace-link" key={i} href={`mailto:${str}}`}>
                    {linkMap ? get(linkMap, [str], str) : str}
                    <Icon
                        className="c-Replace-link__Icon"
                        icon="material-symbols:mail"
                    />
                </a>
            );
        }
        return str;
    });

export default useReplaceLinksAndEmailInStr;
