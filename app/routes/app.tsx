// LOCATION: app/routes/app.tsx

import { Link, Outlet, useLoaderData, useRouteError } from "react-router";
import { boundary } from "@shopify/shopify-app-remix/server";
import { AppProvider } from "@shopify/shopify-app-remix/react";
import { NavMenu } from "@shopify/app-bridge-react";
import polarisStyles from "@shopify/polaris/build/esm/styles.css?url";
import { authenticate } from "../shopify.server";

export const links = () => [{ rel: "stylesheet", href: polarisStyles }];

export const loader = async ({ request }) => {
    await authenticate.admin(request);
    return { apiKey: process.env.SHOPIFY_API_KEY || "" };
};

export default function App() {
    const { apiKey } = useLoaderData();

    return (
        <AppProvider isEmbeddedApp apiKey={apiKey}>
            <NavMenu>
                <Link to="/app" rel="home">Dashboard</Link>
                <Link to="/app/feed">Opportunity Feed</Link>
                <Link to="/app/pipes">Active Pipes</Link>
            </NavMenu>
            <Outlet />
        </AppProvider>
    );
}

// React Router v7 Error Boundary
export function ErrorBoundary() {
    return boundary.error(useRouteError());
}

export const headers = (headersArgs) => {
    return boundary.headers(headersArgs);
};