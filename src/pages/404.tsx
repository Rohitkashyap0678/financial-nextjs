import React from 'react'

export default function NotFoundPage() {
  return (
    <div className="flex flex-col">
      <header className="flex w-[321px] max-w-full grow flex-col mt-24 px-5">
        <nav className="flex w-[312px] max-w-full items-start justify-between gap-5 max-md:justify-center">
          <div className="bg-green-500 self-center flex w-[90px] h-1.5 flex-col my-auto" />
          <h1 className="text-green-500 text-3xl uppercase self-center my-auto">
            SORRY <br />
          </h1>
          <div className="bg-green-500 self-center flex w-[90px] h-1.5 flex-col my-auto" />
        </nav>
        <h2 className="text-green-500 text-9xl uppercase self-center ml-0 w-[210px] mt-11 max-md:text-4xl">
          404 <br />
        </h2>
        <div className="bg-green-500 self-stretch flex w-full h-1.5 flex-col mt-10" />
        <p className="text-green-500 text-3xl uppercase self-center max-w-[326px] -ml-1.5 mt-5">
          SORRY PAGE NOT FOUND <br />
        </p>
      </header>
    </div>
  )
}
