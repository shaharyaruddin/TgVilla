import Image from "next/image";

export default function Loading() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-16 h-16 flex items-center justify-center bg-primary rounded-full animate-spin shadow-lg">
        <Image src="/assets/logo/tg-logo-2.svg" alt="logo" width={60} height={60} className="object-contain" />
      </div>
    </div>
  );
}
