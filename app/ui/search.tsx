'use client';  // this is a client component, which means you can use event listeners and hooks.

import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';

export default function Search({ placeholder }: { placeholder: string }) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  // use debounce to reduce the number of requests sent to your database, thus saving resources.
  const handleSearch = useDebouncedCallback((term: string) => {
    console.log(`Search...${term}`);

    // <Search> is a Client Component, so Fuse the useSearchParams() hook to access the params from the client
    // If you want to read the params from the client, use the useSearchParams() hook as this avoids having to go back to the server
    const params = new URLSearchParams(searchParams);
    params.set('page', '1');

    if (term) {
      params.set('query', term);  // set the params string based on the user's input
    } else {
      params.delete('query');  // if the input is empty, delete it
    }
    replace(`${pathname}?${params.toString()}`);  // replace the current URL with the new params but not reload current page
  }, 300);

  return (
    <div className="relative flex flex-1 flex-shrink-0">
      <label htmlFor="search" className="sr-only">
        Search
      </label>
      <input
        className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
        placeholder={placeholder}
        onChange={(e) => {
          handleSearch(e.target.value);
        }}
        // pass a defaultValue to input by reading from `searchParams`
        defaultValue={searchParams.get('query')?.toString()}
      />
      <MagnifyingGlassIcon className="absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
    </div>
  );
}
