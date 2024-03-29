import React from "react";
import { Link } from "@reach/router";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.log("Error Boundary caught an error", error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <h1>
          There was an Error with this listing... <Link to="/">Click here</Link>{" "}
          to go back to main page
        </h1>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
