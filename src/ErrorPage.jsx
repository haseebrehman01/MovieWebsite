import { NavLink, useNavigate, useRouteError } from "react-router-dom";

function ErrorPage() {
  // Get the error object from React Router (contains status, statusText, etc.)
  const error = useRouteError();

  // Hook to programmatically navigate
  const navigate = useNavigate();

  // Function to go back to the previous page
  const GoBack = () => {
    navigate(-1);
  };

  // Render different UIs based on error status
  if (error?.status === 404) {
    return (
      <section className="error-section">
        <div id="error-text">
          {/* Error illustration */}
          <figure>
            <img
              src="https://cdn.dribbble.com/users/722246/screenshots/3066818/404-page.gif"
              alt="404 page"
              style={{ width: "70%" }}
            />
          </figure>

          {/* Error message */}
          <div className="text-center">
            <p className="p-a">The page you were looking for could not be found</p>
            <p className="p-b">... Back to previous page</p>
          </div>
        </div>

        {/* Navigation buttons */}
        <div className="btn-div">
          <NavLink to="/" className="btn">
            Go Back To Home Screen
          </NavLink>
          <button className="btn" onClick={GoBack}>
            Go back
          </button>
        </div>
      </section>
    );
  }

  // Handle 500 (Internal Server Error)
  if (error?.status === 500) {
    return (
      <section className="error-section text-center">
        <h1>500 - Internal Server Error</h1>
        <p>Something went wrong on our side. Please try again later.</p>
        <div className="btn-div" style={{ marginTop: "10px" }}>
          <NavLink to="/" className="btn">
            Go Back To Home
          </NavLink>
        </div>
      </section>
    );
  }

  // Handle 403 (Forbidden)
  if (error?.status === 403) {
    return (
      <section className="error-section text-center">
        <h1>403 - Forbidden</h1>
        <p>You don’t have permission to access this page.</p>
        <div className="btn-div" style={{ marginTop: "10px" }}>
          <NavLink to="/" className="btn">
            Go Back To Home
          </NavLink>
        </div>
      </section>
    );
  }

  // Default / fallback error message for unexpected cases
  console.error(error); // log for debugging
  return (
    <section className="error-section text-center">
      <h1>⚠️ Oops! Something went wrong</h1>
      <p>{error?.statusText || "An unexpected error occurred."}</p>
      <div className="btn-div" style={{ marginTop: "10px" }}>
        <NavLink to="/" className="btn">
          Go Back To Home Screen
        </NavLink>
        <button className="btn" onClick={GoBack}>
          Go back
        </button>
      </div>
    </section>
  );
}

export default ErrorPage;
