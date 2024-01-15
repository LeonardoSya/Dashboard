import RevenueChart from '@/app/ui/dashboard/revenue-chart';
import LatestInvoices from '@/app/ui/dashboard/latest-invoices';
import { waiting_for_the_Sunrise } from '@/app/ui/fonts';
import { Suspense } from 'react';
import CardWrapper from '@/app/ui/dashboard/cards';
import {
    RevenueChartSkeleton,
    LatestInvoicesSkeleton,
    CardSkeleton,
} from '@/app/ui/skeletons';

// * Page is an async component. This allows you to use await to fetch data
export default async function Page() {

    return (
        <main>
            <h1 className={`${waiting_for_the_Sunrise.className} mb-4 text-4xl`}>
                Dashboard
            </h1>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                <Suspense fallback={<CardSkeleton />}>
                    <CardWrapper />
                </Suspense>
            </div>
            <div className='mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8'>
                <Suspense fallback={<RevenueChartSkeleton />}>
                    <RevenueChart />
                </Suspense>
                <Suspense fallback={<LatestInvoicesSkeleton />}>
                    <LatestInvoices />
                </Suspense>
            </div>
        </main>
    )
}