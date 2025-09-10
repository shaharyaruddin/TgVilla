import Image from "next/image";

export default function Loading() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-[#E8E4D9] z-[990]">
      <div className="size-20 flex items-center justify-center bg-primary rounded-full animate-spin shadow-lg ">
        <Image src="/assets/logo/tg-logo-2.svg" alt="logo" width={40} height={40} className="object-contain" />
      </div>
    </div>
  );
}
