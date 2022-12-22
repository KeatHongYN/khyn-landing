import { Icon } from "@iconify/react";
import { useRouter } from "next/router";
import Button from "../../shared/Button";
import { ERROR_PAGE_ENUM, ERROR_PAGE_META } from "../../../config/constants";
import MainLayout from "../../../layout/MainLayout";
import { ErrorProps } from "next/error";

const Error = ({ statusCode }: ErrorProps): JSX.Element => {
    const router = useRouter();

    let classSuffix = ""
    let header = ""
    let desc = ""
    switch(statusCode) {
        case 404: {
            classSuffix = ERROR_PAGE_META[ERROR_PAGE_ENUM.PAGE_NOT_FOUND].classSuffix;
            header = ERROR_PAGE_META[ERROR_PAGE_ENUM.PAGE_NOT_FOUND].header;
            desc = ERROR_PAGE_META[ERROR_PAGE_ENUM.PAGE_NOT_FOUND].desc;
            break;
        }
        case 500: {
            classSuffix = ERROR_PAGE_META[ERROR_PAGE_ENUM.SERVER_ERROR].classSuffix;
            header = ERROR_PAGE_META[ERROR_PAGE_ENUM.SERVER_ERROR].header;
            desc = ERROR_PAGE_META[ERROR_PAGE_ENUM.SERVER_ERROR].desc;
            break;
        }
        default: {
            classSuffix = ERROR_PAGE_META[ERROR_PAGE_ENUM.GENERIC].classSuffix;
            header = ERROR_PAGE_META[ERROR_PAGE_ENUM.GENERIC].header;
            desc = ERROR_PAGE_META[ERROR_PAGE_ENUM.GENERIC].desc;
        }
    };

    return (
        <MainLayout
            title="Error - Keat Hong Youth Network"
            maxBodyWidth
        >
            <div className={`c-Error-page c-Error-page--${classSuffix}`}>
                <span className="c-Error-page__Icon-container">
                    <Icon className="c-Error-page__Icon" icon="bxs:error" />
                </span>
                <h1>{header}</h1>
                <p>{desc}</p>
                <Button text="Go to home" arrow={true} onClickFn={() => router.push("/")} />
            </div>
        </MainLayout>
    )
};

Error.getInitialProps = ({ res, err }: { res: any, err: any }) => {
    const statusCode = res ? res.statusCode : err ? err.statusCode : 404
    return { statusCode };
};

export default Error;