import { Icon } from "@iconify/react";
import { useRouter } from "next/router";
import { ErrorProps } from "next/error";
import * as Sentry from "@sentry/nextjs";
import React, { useEffect } from "react";
import Button from "../../shared/Button";
import { ERROR_ENUM, ERROR_PAGE_META } from "../../../config/error";
import MainLayout from "../../../layout/MainLayout";

function Error({ statusCode }: ErrorProps): JSX.Element {
    const router = useRouter();

    let classSuffix = "";
    let header = "";
    let desc = "";
    let errorEnum = "";
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
            errorEnum = "ERROR_ENUM.SERVER_ERROR";
            break;
        }
        default: {
            classSuffix = ERROR_PAGE_META[ERROR_ENUM.GENERIC].classSuffix;
            header = ERROR_PAGE_META[ERROR_ENUM.GENERIC].header;
            desc = ERROR_PAGE_META[ERROR_ENUM.GENERIC].desc;
            errorEnum = "ERROR_ENUM.GENERIC";
        }
    }

    useEffect(() => {
        if (statusCode !== 404) {
            Sentry.withScope((scope) => {
                scope.setLevel("fatal");
                Sentry.captureException(`[App Error] ${errorEnum}`);
            });
        }
    }, []);

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

export default Error;
