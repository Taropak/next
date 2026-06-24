import React from 'react'

export default function layout({children}: {children: React.ReactNode}) {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <div className="p-3 bg-amber-300">top bar</div>
      <div className='p-5'>{children}</div>
      <div className="p-3 bg-amber-300">footer</div>
    </div>
  );
}
