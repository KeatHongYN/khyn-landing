import React, { Component, ErrorInfo, ReactNode } from "react";
import { Icon } from '@iconify/react';
import Button from "../../shared/Button";

interface Props {
  children?: ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(_: Error): State {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
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
          <Button text="Go to home" arrow={true} onClickFn={() => window.location.replace("/")} />
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
