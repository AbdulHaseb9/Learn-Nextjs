"use client";

export default function Error({ message }) {
  return <div>you got an error{message}</div>;
}

// This is the error page that will be rendered when an error occurs during the client-side rendering.
// It receives the error message as a prop.
// It's important to note that this error page will not be rendered when the server-side rendering occurs.
// Instead, it will be shown in the browser console when an error occurs.
// This is useful for debugging purposes.
// The error page should be designed in a way that it does not expose sensitive information about the error.
// You should also make sure that the error page is accessible to users who are unable to see the server-side rendering.
