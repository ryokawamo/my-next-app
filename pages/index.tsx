// pages/index.tsx
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <h1>Next.js デプロイ確認</h1>
      <Image src="/next.svg" alt="Next.js logo" width={180} height={38} />
    </div>
  );
}