import MozLogo from '@/app/ui/moz-logo';
import { ArrowRightIcon, ChartBarSquareIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { lusitana } from '@/app/ui/fonts'
import Image from 'next/image';

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col p-6">
      <div className="flex h-20 shrink-0 items-end rounded-lg bg-blue-500 p-4 md:h-52">
        <MozLogo />
      </div>
      <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
        <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10 md:w-2/5 md:px-20">
        <div
          className="h-0 w-0 border-b-[30px] border-l-[20px] border-r-[20px] border-b-blue-900 border-l-transparent border-r-transparent"
        />
          <p className={`${lusitana.className} text-xl text-gray-800 md:text-3xl md:leading-normal`}>
            <strong>Welcome to MozBoard.</strong> This is an example dashboard that does nothing significant. Built by - {' '}
            <a href="https://www.linkedin.com/in/thakur-patel/" className="text-blue-500">
              Thakur Patel
            </a>
            
          </p>
          <div className='flex flex-row gap-12'>
            <Link
              href="/login"
              className="flex items-center gap-5 self-start rounded-lg bg-blue-900 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-red-900 md:text-base"
            >
              <span>Log in</span> <ArrowRightIcon className="w-5 md:w-6" />
            </Link>
            <Link
              href="/dashboard"
              className="flex items-center gap-5 self-start rounded-lg bg-blue-100 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-red-900 md:text-base"
            >
              <span>Free Trial</span> <ChartBarSquareIcon className="w-5 md:w-6" />
            </Link>
          </div>
        </div>
        <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
          {/* Add Hero Images Here */}
          <Image
            src="/graph-home.jpeg"
            width={1000}
            height={760}
            className="hidden md:block"
            alt="Graph in desktop version"
          />
          <Image
            src="/graph-home.jpeg"
            width={560}
            height={620}
            className="block md:hidden"
            alt="Graph in mobile version"
          />
        </div>
      </div>
    </main>
  );
}
