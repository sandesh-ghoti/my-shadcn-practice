import { Button } from "@/components/ui/button";
import {
  SelectValue,
  SelectTrigger,
  SelectItem,
  SelectContent,
  Select,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";

export default function Component() {
  return (
    <div className="bg-[#0d253f] text-white">
      <nav className="flex items-center justify-between p-4">
        <div className="flex items-center space-x-4">
          <BarChart3Icon className="text-blue-500" />
          <span className="text-2xl font-bold">TMDB</span>
        </div>
        <div className="flex items-center space-x-4">
          <Button className="bg-blue-600 text-white">+</Button>
          <Select>
            <SelectTrigger id="language">
              <SelectValue placeholder="EN" />
            </SelectTrigger>
            <SelectContent position="popper">
              <SelectItem value="en">EN</SelectItem>
              <SelectItem value="es">ES</SelectItem>
            </SelectContent>
          </Select>
          <MicroscopeIcon className="text-blue-500" />
          <UserIcon className="text-blue-500" />
        </div>
      </nav>
      <header className="flex flex-col items-center justify-center p-8 text-center">
        <h1 className="text-6xl font-bold">Welcome.</h1>
        <p className="mt-4 text-xl">
          Millions of movies, TV shows and people to discover. Explore now.
        </p>
        <Input
          className="mt-4 w-1/2"
          placeholder="Search for a movie, tv show, person......"
          type="search"
        />
        <Button className="mt-4">Search</Button>
      </header>
      <section className="px-8 py-4">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold">Trending</h2>
          <div className="flex space-x-2">
            <Button variant="ghost">Today</Button>
            <Button variant="ghost">This Week</Button>
          </div>
        </div>
        <div className="flex overflow-x-auto py-4 space-x-4" />
      </section>
      <section className="px-8 py-4">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold">Latest Trailers</h2>
          <div className="flex space-x-2">
            <Button variant="ghost">Popular</Button>
            <Button variant="ghost">Streaming</Button>
            <Button variant="ghost">On TV</Button>
            <Button variant="ghost">For Rent</Button>
            <Button variant="ghost">In Theaters</Button>
          </div>
        </div>
        <div className="flex overflow-x-auto py-4 space-x-4" />
      </section>
    </div>
  );
}

function BarChart3Icon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 3v18h18" />
      <path d="M18 17V9" />
      <path d="M13 17V5" />
      <path d="M8 17v-3" />
    </svg>
  );
}

function MicroscopeIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 18h8" />
      <path d="M3 22h18" />
      <path d="M14 22a7 7 0 1 0 0-14h-1" />
      <path d="M9 14h2" />
      <path d="M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2Z" />
      <path d="M12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3" />
    </svg>
  );
}

function UserIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}
