// LOCATION: app/routes/app._index.tsx

import { useEffect } from "react";
import { json } from "react-router"; // RR7 Import
import { useLoaderData, Form, useSubmit } from "react-router";
import { Page, Layout, Card, Text, BlockStack, Button, Badge, InlineStack, Box } from "@shopify/polaris";
import { authenticate } from "../shopify.server";
import db from "../db.server";

// 1. THE BACKEND (Loader)
export const loader = async ({ request }: any) => {
    const { session } = await authenticate.admin(request);

    // Find or Create Shop
    let shop = await db.shop.findUnique({ where: { shopDomain: session.shop } });
    if (!shop) {
        shop = await db.shop.create({
            data: {
                shopDomain: session.shop,
                tokens: 5
            }
        });
    }

    // Get Stats
    const activeNegotiations = await db.negotiation.count({
        where: {
            OR: [{ retailerId: shop.id }, { supplierId: shop.id }],
            status: "ACTIVE"
        }
    });

    return { shop, activeNegotiations };
};

// 2. THE ACTION (Handle Toggle)
export const action = async ({ request }: any) => {
    const { session } = await authenticate.admin(request);
    const formData = await request.formData();
    const mode = formData.get("mode"); // "RETAILER" or "SUPPLIER"

    await db.shop.update({
        where: { shopDomain: session.shop },
        data: {
            isRetailer: mode === "RETAILER",
            isSupplier: mode === "SUPPLIER"
        }
    });

    return { status: "success" };
};

// 3. THE UI
export default function Dashboard() {
    const { shop, activeNegotiations } = useLoaderData<typeof loader>();
    const submit = useSubmit();

    const toggleMode = () => {
        const newMode = shop.isRetailer ? "SUPPLIER" : "RETAILER";
        submit({ mode: newMode }, { method: "post" });
    };

    return (
        <Page title="Market Intelligence" fullWidth>
            <Layout>
                <Layout.Section>
                    <div className="flex justify-between items-center mb-6">
                        <Text as="h2" variant="headingMd">Monitoring opportunities across global nodes.</Text>
                        <Button onClick={toggleMode} variant="primary">
                            Switch to {shop.isRetailer ? "Selling Mode" : "Buying Mode"}
                        </Button>
                    </div>

                    {/* STAT CARDS */}
                    <div className="grid grid-cols-4 gap-4 mb-8">
                        <StatCard title="Active Negotiations" value={activeNegotiations} trend="+3" />
                        <StatCard title="Deal Tokens" value={shop.tokens} trend="-1" />
                        <StatCard title="Potential Profit" value="$12,500" trend="+14%" />
                        <StatCard title="Sourcing Efficiency" value="92%" />
                    </div>

                    {/* RECENT ACTIVITY */}
                    <Card>
                        <BlockStack gap="400">
                            <Text as="h3" variant="headingSm">AI Pattern Matches</Text>
                            <div className="p-4 bg-gray-50 rounded-md text-center text-gray-500">
                                {activeNegotiations === 0
                                    ? "No active pipes. Go to the Opportunity Feed to start."
                                    : "Negotiations in progress..."}
                            </div>
                        </BlockStack>
                    </Card>
                </Layout.Section>
            </Layout>
        </Page>
    );
}

function StatCard({ title, value, trend }: any) {
    return (
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <div className="flex justify-between items-start">
                <div className="text-gray-500 text-xs font-medium uppercase">{title}</div>
                {trend && <span className="text-green-500 text-xs font-bold">{trend}</span>}
            </div>
            <div className="mt-2 text-3xl font-bold text-gray-900">{value}</div>
        </div>
    );
}