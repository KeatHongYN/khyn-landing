/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/state-in-constructor */
import React, { Component, ErrorInfo, ReactNode } from "react";
import { Icon } from "@iconify/react";
import * as Sentry from "@sentry/nextjs";
import Button from "../../shared/Button";
import { DEBUG } from "../../../utils/logger";

interface Props {
    children?: ReactNode;
}

interface State {
    hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
    public state: State = {
        hasError: false
    };

    public static getDerivedStateFromError(): State {
        // Update state so the next render will show the fallback UI.
        return { hasError: true };
    }

    public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        DEBUG.error("Error Boundary:", error, errorInfo);
        Sentry.withScope((scope) => {
            scope.setLevel("fatal");
            Sentry.captureException(`[Error Boundary] ${error}`);
        });
    }

    public render() {
        if (this.state.hasError) {
            return (
                <div className="c-Error-page">
                    <span className="c-Error-page__Icon-container">
                        <Icon className="c-Error-page__Icon" icon="bxs:error" />
                    </span>
                    <h1>Something went wrong</h1>
                    <p>Oops! Something went wrong. Please try again later.</p>
                    <Button
                        text="Go to home"
                        arrow
                        onClickFn={() => window.location.replace("/")}
                    />
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
