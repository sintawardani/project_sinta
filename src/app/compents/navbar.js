import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-blue-600 p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-white text-lg font-bold">
          MyApp
        </Link>
        <ul className="flex space-x-6 text-white">
          <li>
            <Link href="/" className="hover:text-gray-200">
              Dashboard
            </Link>
          </li>
          <li>
            <Link href="/room" className="hover:text-gray-200">
              Room
            </Link>
          </li>
          <li>
            <Link href="/user" className="hover:text-gray-200">
              User
            </Link>
          </li>
          <li className="relative group">
            <Link href="/transaction" className="hover:text-gray-200">
              Transaction
            </Link>
            <ul className="absolute left-0 mt-2 w-40 bg-white text-black shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <li>
                <Link href="/transaction/booking" className="block px-4 py-2 hover:bg-gray-200">
                  Booking
                </Link>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </nav>
  );
}