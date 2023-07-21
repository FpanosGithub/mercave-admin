'use client';
import { ArrowPathIcon } from '@heroicons/react/24/solid';
import { useRouter } from 'next/navigation';
import { useTransition } from 'react';

export default function RefreshButton() {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  return (
    <button
      className={`
      ${isPending ? 'cursor-not-allowed text-gray-400' : ''} 
      text-gray-800 text-xl hover:text-gray-500 rounded-md border border-slate-800 py-4 px-6 flex justify-between gap-4`}
      disabled={isPending}
      onClick={() => {
        startTransition(() => {
          router.refresh();
        });
      }}
    >
      {isPending ? 'Refreshing...' : 'Refresh'}
      {isPending && <ArrowPathIcon className='h-6 w-6 animate-spin'/>}
    </button>
  );
}