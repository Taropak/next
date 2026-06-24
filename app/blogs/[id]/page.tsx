import React from 'react'

export default async function page({params}: { params: Promise<{ id: string }>} ) {
  const { id } = await params;
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      blog/{id}  
    </div>
  )
}
