"use client";

export default function GoogleAdsServicesPage() {
    return (
        <main className="min-h-screen bg-white">
            {/* Header/Title Block */}
            <div className="bg-black text-white pt-32 pb-20 px-4 text-center">
                <h1 className="text-4xl md:text-6xl font-bold mb-4">Google Ads Services</h1>
                <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                    Maximize your ROI with data-driven Google Ads campaigns that convert.
                </p>
            </div>

            {/* Content Section - Placeholder */}
            <div className="max-w-4xl mx-auto px-4 py-16">
                <div className="prose prose-lg max-w-none">
                    <p className="text-gray-600 text-center mb-8">
                        Content will be added here (800 words with bullet points and FAQ)
                    </p>

                    {/* Placeholder for main content */}
                    <div className="bg-gray-50 border-2 border-dashed border-gray-300 rounded-lg p-12 text-center">
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">Content Placeholder</h2>
                        <p className="text-gray-600">
                            This section will contain 800 words of Google Ads service content including:
                        </p>
                        <ul className="text-left mt-6 space-y-2 text-gray-600">
                            <li>• Service overview</li>
                            <li>• Key benefits with bullet points</li>
                            <li>• Our approach and methodology</li>
                            <li>• FAQ section</li>
                        </ul>
                    </div>
                </div>
            </div>
        </main>
    );
}
