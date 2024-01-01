import Link from "next/link"
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "@/lib/CartContext";
import { useSession } from "next-auth/react";

export default function Header() {

  const router = useRouter();
  const { pathname } = router;

  const { cartProducts } = useContext(CartContext);

  const active = ' text-primary transition hover:text-secondary font-bold'
  const inactive = ' text-gray-500 transition hover:text-gray-500/75 font-medium';

  const {data: session} = useSession();
  return <>
  
  <header className="bg-white border-b border-primary border-opacity-30 sticky top-0 z-40">
  <div className="mx-auto flex h-16 max-w-screen-2xl items-center gap-8 px-4 sm:px-6 lg:px-8 text-lg ">
    <Link href = "Login/" className=" text-primary flex items-center gap-1" >
      <span className="sr-only">Home</span>
      <img  src= "/logo/logo.png" alt="Red Car" width="60" height="80" fill = "none" stroke-width="1.5" stroke="currentColor" data-slot="icon" viewBox = "0 0 24 24" />
    / My Shop
    </Link>

    <div className="flex flex-1 items-center justify-end md:justify-between">
      <nav aria-label="Global" className="hidden md:block">
        <ul className="flex items-center gap-6 text-sm">
          <li>
            <Link className={pathname === '/' ? active: inactive} href="/"> Home </Link>
          </li>

          <li>
            <Link className={pathname === '/products' ? active: inactive} href="/products"> Products </Link>
          </li>

          <li>
            <Link className={pathname === '/about' ? active: inactive} href="/about"> About </Link>
          </li>

          <li>
            <Link className={pathname === '/contact' ? active: inactive} href="/Contact"> Contact Us </Link>
          </li>

          <li>
            <Link className={pathname === '/upcomings' ? active: inactive} href="/upcomings"> Upcomings </Link>
          </li>
        </ul>
      </nav>

      <div className="flex items-center gap-4">
        <div className="sm:flex sm:gap-4 items-center">
        {session ? (
              <div className="sm:flex sm:gap-2 border-r border-primary pr-4">
                <div class="h-9 w-9">
                  <Link href="/settings">
                  
                  <img class="h-full w-full rounded-full object-cover object-center" src={session.user.image} alt={session.user.email} />
                  </Link>
                </div>
              </div>
            ) : (
              <div className="sm:flex sm:gap-2 border-r border-primary pr-4">
                <Link
                  className=" text-md font-medium hover:text-teal-600/75 text-text hidden md:flex"
                  href="/Login"
                >
                  Sign In
                </Link>
                <Link
                  className=" text-md font-medium text-text hidden max-md:flex md:hidden"
                  href="/"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>

                </Link>
              </div>
            )}

          <Link
            className=" group  rounded-md flex items-center text-md font-medium  transition hover:text-teal-600/75 p-2 "
            href="/cart"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
            </svg>
            <span className="ml-2 text-sm text-primary font-bold group-hover:text-text">{cartProducts.length}</span>
               <span className="sr-only">items in cart, view bag</span>
          </Link>
        </div>

        <button
          className="block rounded bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden"
        >
          <span className="sr-only">Toggle menu</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </div>
  </div>
</header>


  </>
}