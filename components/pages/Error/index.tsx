import { Icon } from "@iconify/react";
import { useRouter } from "next/router";
import { ErrorProps } from "next/error";
import Button from "../../shared/Button";
import { ERROR_ENUM, ERROR_PAGE_META } from "../../../config/error";
import MainLayout from "../../../layout/MainLayout";

function Error({ statusCode }: ErrorProps): JSX.Element {
    const router = useRouter();

    let classSuffix = "";
    let header = "";
    let desc = "";
    switch (statusCode) {
        case 404: {
            classSuffix =
                ERROR_PAGE_META[ERROR_ENUM.PAGE_NOT_FOUND].classSuffix;
            header = ERROR_PAGE_META[ERROR_ENUM.PAGE_NOT_FOUND].header;
            desc = ERROR_PAGE_META[ERROR_ENUM.PAGE_NOT_FOUND].desc;
            break;
        }
        case 500: {
            classSuffix = ERROR_PAGE_META[ERROR_ENUM.SERVER_ERROR].classSuffix;
            header = ERROR_PAGE_META[ERROR_ENUM.SERVER_ERROR].header;
            desc = ERROR_PAGE_META[ERROR_ENUM.SERVER_ERROR].desc;
            break;
        }
        default: {
            classSuffix = ERROR_PAGE_META[ERROR_ENUM.GENERIC].classSuffix;
            header = ERROR_PAGE_META[ERROR_ENUM.GENERIC].header;
            desc = ERROR_PAGE_META[ERROR_ENUM.GENERIC].desc;
        }
    }

    return (
        <MainLayout title="Error - Keat Hong Youth Network" maxBodyWidth>
            <div className={`c-Error-page c-Error-page--${classSuffix}`}>
                <span className="c-Error-page__Icon-container">
                    <Icon className="c-Error-page__Icon" icon="bxs:error" />
                </span>
                <h1>{header}</h1>
                <p>{desc}</p>
                <Button
                    text="Go to home"
                    arrow
                    onClickFn={() => router.push("/")}
                />
            </div>
        </MainLayout>
    );
}

Error.getInitialProps = ({ res, err }: { res: any; err: any }) => {
    let statusCode = 404;
    if (res) {
        statusCode = res.statusCode;
    } else if (err) {
        statusCode = err.StatusCode;
    }
    return { statusCode };
};

export default Error;
