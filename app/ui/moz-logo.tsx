import { GlobeAltIcon } from '@heroicons/react/24/outline';
import { lusitana } from '@/app/ui/fonts'
import Image from 'next/image';

export default function MozLogo() {
  return (
    <div
      className={`${lusitana.className} flex flex-row items-center leading-none text-white`}
    >
      <Image
        src="/mozark-logo.png"
        width={48}
        height={48}
        className="hidden md:block rotate-90"
        alt="Moz Logo"
      />
      {/* <GlobeAltIcon className="h-12 w-12 rotate-[15deg]" /> */}
      <p className="text-[44px]">Moz</p>
    </div>
  );
}
