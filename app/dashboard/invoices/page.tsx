import Search from '@/app/ui/search';
import Pagination from '@/app/ui/invoices/pagination';
import Table from '@/app/ui/invoices/table';
import { CreateInvoice } from '@/app/ui/invoices/buttons';
import { waiting_for_the_Sunrise } from "@/app/ui/fonts";
import { InvoicesTableSkeleton } from '@/app/ui/skeletons';
import { fetchInvoicesPages } from '@/app/lib/data';
import { Suspense } from 'react';

export default async function Page({
    searchParams,
}: {
    searchParams?: {
        query?: string;
        page?: string;
    };
}) {
    const query = searchParams?.query || '';
    const currentPage = Number(searchParams?.page) || 1;
    // fetchInvoicesPages returns the total number of page based on the search query
    const totalPages = await fetchInvoicesPages(query);

    return (
        <div className="w-full">

            <div className="flex w-full items-center justify-between">
                <h1 className={`${waiting_for_the_Sunrise.className} text-4xl`}>Invoices</h1>
            </div>

            <div className='mt-4 flex items-center justify-between gap-2 md:mt-8'>
                <Search placeholder='Search invoices...' />
                <CreateInvoice />
            </div>

            <Suspense key={query + currentPage} fallback={<InvoicesTableSkeleton />}>
                {/* if you search for a term, you'll update the URL, which will send a new request to the server, data will be fetched on the server, and only the invoices that match your query will be returned */}
                <Table query={query} currentPage={currentPage} />
            </Suspense>

            <div className='mt-5 flex w-full justify-center'>
                <Pagination totalPages={totalPages} />
            </div>

        </div>
    );
}