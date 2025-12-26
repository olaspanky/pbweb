// components/ReportSearchBar.jsx
import { MagnifyingGlassIcon, ChevronDownIcon } from '@heroicons/react/24/outline';

export default function ReportSearchBar() {
  return (
    <div className=" rounded-lg shadow-sm px-4 py-6">
      <div className="max-w-5xl bg-white  mx-auto">
        <div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center p-7 shadow-lg">
          {/* Search Input */}
          <div className="flex-1 relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <MagnifyingGlassIcon className="h-5 w-5 text-gray-500" />
            </div>
            <input
              type="text"
              placeholder="What are you looking for"
              className="w-full pl-12 pr-5 py-4 bg-gray-100 rounded-xl text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500 focus:bg-white transition-all"
            />
          </div>

          {/* Sort by */}
          <div className="relative">
            <button className="flex items-center justify-between gap-3 w-full sm:w-auto px-5 py-4 bg-gray-100 rounded-xl text-gray-700 hover:bg-gray-200 transition-colors whitespace-nowrap">
              <span>Sort by</span>
              <ChevronDownIcon className="h-5 w-5" />
            </button>
          </div>

          {/* Categories */}
          <div className="relative">
            <button className="flex items-center justify-between gap-3 w-full sm:w-auto px-5 py-4 bg-gray-100 rounded-xl text-gray-700 hover:bg-gray-200 transition-colors whitespace-nowrap">
              <span>Categories</span>
              <ChevronDownIcon className="h-5 w-5" />
            </button>
          </div>

          {/* Search Button */}
          <button className="px-8 py-4 bg-green-500 hover:bg-green-600 text-white font-medium rounded-xl transition-colors shadow-md hover:shadow-lg whitespace-nowrap">
            Search available reports
          </button>
        </div>
      </div>
    </div>
  );
}