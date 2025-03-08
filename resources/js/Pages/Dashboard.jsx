import React from "react";
import { Head } from '@inertiajs/react';



export default function Dashboard({ name }) {

    
    return (
        <div className="flex h-screen">
        {/* Sidebar */}
        <div className="w-64 dark:bg-gray-800 text-white p-6">
            <h2 className="text-2xl font-semibold mb-6">Barangay Profiling</h2>
            <ul>
                <li className="py-2 hover:bg-blue-800 rounded cursor-pointer">Home</li>
                <li className="py-2 hover:bg-blue-800 rounded cursor-pointer">Population</li>
                <li className="py-2 hover:bg-blue-800 rounded cursor-pointer">Residents</li>
                <li className="py-2 hover:bg-blue-800 rounded cursor-pointer">Services</li>
                <li className="py-2 hover:bg-blue-800 rounded cursor-pointer">Statistics</li>
                <li className="py-2 hover:bg-blue-800 rounded cursor-pointer">Logout</li>
            </ul>
        </div>

        {/* Main Content */}
        <div className="flex-1 bg-gray-100 p-6">
            {/* Top Navigation */}
            <div className="dark:bg-gray-800 text-white p-4 rounded-lg shadow-md mb-6">
                <h3 className="text-lg font-semibold">Hello {name}. Welcome to Dashboard</h3>
            </div>

            {/* Main Dashboard Content */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Card 1: Total Population */}
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h4 className="text-xl font-semibold mb-4">Total Population</h4>
                    <p className="text-gray-700">Current total population of the barangay.</p>
                    <div className="mt-4 text-3xl font-bold">12,345</div>
                </div>

                {/* Card 2: Registered Residents */}
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h4 className="text-xl font-semibold mb-4">Registered Residents</h4>
                    <p className="text-gray-700">Number of registered residents in the barangay.</p>
                    <div className="mt-4 text-3xl font-bold">10,234</div>
                </div>

                {/* Card 3: Active Services */}
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h4 className="text-xl font-semibold mb-4">Active Services</h4>
                    <p className="text-gray-700">Available services for residents.</p>
                    <div className="mt-4 text-3xl font-bold">8</div>
                </div>
            </div>

            {/* Additional Information */}
            <div className="mt-6 bg-white p-6 rounded-lg shadow-md">
                <h4 className="text-xl font-semibold mb-4">Barangay Information</h4>
                <p className="text-gray-700">This section can be used to display other information such as recent updates, news, and announcements.</p>
            </div>
        </div>
    </div>
    );
}
