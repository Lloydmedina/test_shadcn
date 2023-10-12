'use client'
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="">Test Portfolio</h1>
      <Avatar>
      <AvatarImage src="/me.jpg" />
      <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    </main>
  )
}
