// LOCATION: app/routes/app.feed.tsx

import { json } from "react-router";
import { useLoaderData, Form, Link } from "react-router";
import { Page, Layout, Card, Text, Button, Badge } from "@shopify/polaris";
import { authenticate } from "../shopify.server";
import db from "../db.server";

export const loader = async ({ request }: any) => {
    await authenticate.admin(request);

    // Fetch "Blind" Products from other shops
    // In a real app, we filter out the current user's own products
    const opportunities = await db.product.findMany({
        where: { isBlindListed: true },
        take: 10,
        include: { shop: true }
    });

    return { opportunities };
};

export default function OpportunityFeed() {
    const { opportunities } = useLoaderData<typeof loader>();

    return (
        <Page title="Opportunity Feed" fullWidth>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {opportunities.length === 0 ? (
                    <div className="col-span-3 text-center p-10">
                        <Text as="p" variant="bodyMd">No opportunities found. Be the first to list a product!</Text>
                    </div>
                ) : (
                    opportunities.map((opp: any) => (
                        <OpportunityCard key={opp.id} product={opp} />
                    ))
                )}
            </div>
        </Page>
    );
}

function OpportunityCard({ product }: any) {
    return (
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
            {/* BLURRED IMAGE AREA */}
            <div className="h-48 bg-gray-200 relative overflow-hidden group">
                <div className="absolute inset-0 flex items-center justify-center z-10">
                    <Badge tone="magic">98% Match</Badge>
                </div>
                {/* CSS Blur Filter */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20 backdrop-blur-md" />
            </div>

            <div className="p-5">
                <div className="flex justify-between items-start mb-2">
                    <h3 className="font-bold text-lg text-gray-900">{product.title}</h3>
                    <span className="text-xs font-mono bg-gray-100 px-2 py-1 rounded">
                        {product.shop.nicheCategory || "General"}
                    </span>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
                    <div>
                        <p className="text-gray-500 text-xs">MARGIN</p>
                        <p className="font-bold text-green-600">~40%</p>
                    </div>
                    <div>
                        <p className="text-gray-500 text-xs">ORIGIN</p>
                        <p className="font-bold text-gray-900">USA</p>
                    </div>
                </div>

                <Link to={`/app/negotiation/new?productId=${product.id}`} className="no-underline">
                    <button className="w-full py-3 bg-amber-100 text-amber-900 font-bold rounded-lg border border-amber-200 hover:bg-amber-200 transition-colors flex items-center justify-center gap-2">
                        <span>Reveal & Negotiate</span>
                        <span className="text-xs bg-amber-300 px-2 py-0.5 rounded-full text-amber-900">1 Token</span>
                    </button>
                </Link>
            </div>
        </div>
    );
}