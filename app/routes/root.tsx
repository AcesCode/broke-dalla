// LOCATION: app/root.tsx

import {
    Links,
    Meta,
    Outlet,
    Scripts,
    ScrollRestoration,
    isRouteErrorResponse,
    useRouteError,
} from "react-router";

export default function App() {
    return (
        <html>
            <head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width,initial-scale=1" />
                <Meta />
                <Links />
            </head>
            <body>
                <Outlet />
                <ScrollRestoration />
                <Scripts />
            </body>
        </html>
    );
}

export function ErrorBoundary() {
    const error = useRouteError();
    let message = "Oops!";
    let details = "An unexpected error occurred.";
    let stack: string | undefined;

    if (isRouteErrorResponse(error)) {
        message = error.status === 404 ? "404" : "Error";
        details = error.status === 404 ? "The requested page could not be found." : error.statusText || details;
    } else if (import.meta.env.DEV && error && error instanceof Error) {
        details = error.message;
        stack = error.stack;
    }

    return (
        <html>
            <head>
                <title>{message}</title>
                <Meta />
                <Links />
            </head>
            <body>
                <h1>{message}</h1>
                <p>{details}</p>
                {stack && (
                    <pre>
                        {stack}
                    </pre>
                )}
                <Scripts />
            </body>
        </html>
    );
}