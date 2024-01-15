import Search from '@/app/ui/search';
import Pagination from '@/app/ui/invoices/pagination';
import Table from '@/app/ui/invoices/table';
import { CreateInvoice } from '@/app/ui/invoices/buttons';
import { waiting_for_the_Sunrise } from "@/app/ui/fonts";
import { InvoiceSkeleton } from '@/app/ui/skeletons';
import { Suspense } from 'react';

export default async function Page() {
    return (
        <div className="w-full">

            <div className="flex w-full items-center justify-between">
                <h1 className={`${waiting_for_the_Sunrise.className} text-4xl`}>Invoices</h1>
            </div>

            <div className='mt-4 flex items-center justify-between gap-2 md:mt-8'>
                <Search placeholder='Search invoices...' />
                <CreateInvoice />
            </div>

            <div className='mt-5 flex w-full justify-center'>

            </div>
            
        </div>
    );
}