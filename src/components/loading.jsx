import Image from "next/image";

export default function Loading() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-16 h-16 flex items-center justify-center bg-cyan-400 rounded-full animate-spin shadow-lg">
        <Image src="/icons/tg-logo.svg" alt="logo" width={60} height={60} className="object-contain" />
      </div>
    </div>
  );
}
