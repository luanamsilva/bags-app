import Image from "next/image"
import Link from "next/link"
import CartButton from "./cartButton"
import UserNav from "./userNav"

export default function Header(){
  return(
    <header className="stick top-0 z-10 shadow bg-logo  text-gray-100">
      <div className="container flex items-center justify-between ">
      <Link href={'/'} className="flex items-center justify-center text-xl gap-2">
            <Image
              src="/logo.jpeg"
              width={90}
              height={90}
              alt="logo"
            />
            <span className="hidden sm:inline-block">Ponto de Luz</span>
          </Link>
           <div className="flex gap-4">
            <CartButton/>
          <UserNav/>
          </div>
      </div>
    
    </header>
  )
}