export function Grid3({children, title}:Readonly<{
    children: React.ReactNode;
    title: string;
  }>)
  {
    return(
        <div className=" lg:mx-12 lg:mt-10 my-12">
            <div className=" text-center text-3xl mb-6">{title}</div>
            <div className="grid grid-cols-1 mx-12 gap-3 lg:grid-cols-3">{children}</div>
        </div>
    )
}