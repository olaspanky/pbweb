"use client";
import React, { useState, useEffect } from 'react';
import { Search, ChevronDown } from 'lucide-react';
import tst from "../../../public/images/assets/tst.png";
import Image from 'next/image';
import WhitepapersMatter from '@/components/WhitepapersMatter';

const NewTestimonialCard = ({ rating = 4, text, name, company }) => (
  <div className="bg-white rounded-2xl shadow-lg overflow-hidden max-w-sm mx-auto hover:shadow-xl transition-shadow duration-300 flex flex-col">
    
    {/* Top content - reduced padding */}
    <div className="p-6 flex-1 relative z-10">
      <div className="flex items-center gap-1 mb-4">
        {[...Array(rating)].map((_, i) => (
          <svg
            key={`filled-${i}`}
            className="w-5 h-5 text-green-500"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}

        {[...Array(5 - rating)].map((_, i) => (
          <svg
            key={`empty-${i}`}
            className="w-5 h-5 text-gray-300"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}

        <span className="ml-2 text-lg font-bold text-gray-800">
          {rating}/5
        </span>
      </div>

      <p className="text-gray-700 text-lg leading-relaxed">{text}</p>
    </div>

    {/* Image section */}
    <div className="relative w-full">
      {/* Background image */}
      <Image
        src={tst}
        alt="Mesh"
        width={500}
        height={80}
        className="w-full h-auto mt-[-20px]"
      />

      {/* Overlay content */}
      <div className="absolute bottom-4 left-6 z-10 text-white p-3">
        <p className="text-base font-bold">{name}</p>
        <p className="text-sm opacity-90">{company}</p>
      </div>
    </div>
  </div>
);

const ReportSearchBar = ({ onSearch, onSort, onCategoryFilter, categories }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSort, setSelectedSort] = useState('newest');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [showSortDropdown, setShowSortDropdown] = useState(false);
  const [showCategoryDropdown, setShowCategoryDropdown] = useState(false);

  const sortOptions = [
    { value: 'newest', label: 'Latest' },
    { value: 'oldest', label: 'Oldest' },
    { value: 'rating', label: 'Highest Rating' },
    { value: 'title', label: 'A-Z' }
  ];

  const handleSearch = () => {
    onSearch(searchQuery.trim());
  };

  const handleSortSelect = (value) => {
    setSelectedSort(value);
    onSort(value);
    setShowSortDropdown(false);
  };

  const handleCategorySelect = (value) => {
    setSelectedCategory(value);
    onCategoryFilter(value);
    setShowCategoryDropdown(false);
  };

  return (
    <div className="px-4 py-6 z-99 mt-[-20] ">
      <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-sm">
        <div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center p-7 shadow-lg rounded-xl">
          <div className="flex-1 relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-500" />
            </div>
            <input
              type="text"
              placeholder="What are you looking for"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
              className="w-full pl-12 pr-5 py-4 bg-gray-100 rounded-xl text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500 focus:bg-white transition-all"
            />
          </div>

          <div className="relative">
            <button 
              onClick={() => {
                setShowSortDropdown(!showSortDropdown);
                setShowCategoryDropdown(false);
              }}
              className="flex items-center justify-between gap-3 w-full sm:w-auto px-5 py-4 bg-gray-100 rounded-xl text-gray-700 hover:bg-gray-200 transition-colors whitespace-nowrap"
            >
              <span>{sortOptions.find(o => o.value === selectedSort)?.label || 'Sort by'}</span>
              <ChevronDown className="h-5 w-5" />
            </button>
            {showSortDropdown && (
              <div className="absolute top-full mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 z-50">
                {sortOptions.map((option) => (
                  <button
                    key={option.value}
                    onClick={() => handleSortSelect(option.value)}
                    className={`w-full text-left px-4 py-3 hover:bg-gray-100 transition-colors first:rounded-t-lg last:rounded-b-lg ${
                      selectedSort === option.value ? 'bg-green-50 text-green-700' : 'text-gray-700'
                    }`}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="relative">
            <button 
              onClick={() => {
                setShowCategoryDropdown(!showCategoryDropdown);
                setShowSortDropdown(false);
              }}
              className="flex items-center justify-between gap-3 w-full sm:w-auto px-5 py-4 bg-gray-100 rounded-xl text-gray-700 hover:bg-gray-200 transition-colors whitespace-nowrap"
            >
              <span>{selectedCategory === 'all' ? 'Categories' : selectedCategory}</span>
              <ChevronDown className="h-5 w-5" />
            </button>
            {showCategoryDropdown && (
              <div className="absolute top-full mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-200 z-50 max-h-64 overflow-y-auto">
                <button
                  onClick={() => handleCategorySelect('all')}
                  className={`w-full text-left px-4 py-3 hover:bg-gray-100 transition-colors first:rounded-t-lg ${
                    selectedCategory === 'all' ? 'bg-green-50 text-green-700' : 'text-gray-700'
                  }`}
                >
                  All Categories
                </button>
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => handleCategorySelect(category)}
                    className={`w-full text-left px-4 py-3 hover:bg-gray-100 transition-colors last:rounded-b-lg ${
                      selectedCategory === category ? 'bg-green-50 text-green-700' : 'text-gray-700'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            )}
          </div>

          <button 
            onClick={handleSearch}
            className="px-8 py-4 bg-green-500 hover:bg-green-600 text-white font-medium rounded-xl transition-colors shadow-md hover:shadow-lg whitespace-nowrap"
          >
            Search available reports
          </button>
        </div>
      </div>
    </div>
  );
};

const ReportCardCover = ({ report }) => {
  if (report.backgroundImage) {
    return (
      <div 
        className="aspect-[3/4] bg-cover bg-center relative flex items-center justify-center p-6"
        style={{ backgroundImage: `url(${report.backgroundImage})` }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
      </div>
    );
  }

  if (report.isFree || report.category?.toLowerCase().includes('white')) {
    return (
      <div className="aspect-[3/4] bg-gradient-to-br from-green-500 to-green-700 flex items-center justify-center p-6">
        <h3 className="text-white font-bold text-lg text-center">{report.title}</h3>
      </div>
    );
  }

  return (
    <div className="aspect-[3/4] bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center p-6">
      <h3 className="text-white font-bold text-lg text-center">{report.title}</h3>
    </div>
  );
};

const ReportCardSkeleton = () => (
  <div className="rounded-lg overflow-hidden shadow-md bg-white animate-pulse">
    <div className="aspect-[3/4] bg-gray-300"></div>
    <div className="p-4 space-y-3">
      <div className="h-4 bg-gray-300 rounded w-3/4"></div>
      <div className="h-3 bg-gray-300 rounded w-full"></div>
      <div className="h-3 bg-gray-300 rounded w-5/6"></div>
      <div className="flex justify-between items-center mt-4">
        <div className="h-5 bg-gray-300 rounded w-24"></div>
        <div className="h-5 bg-gray-300 rounded w-16"></div>
      </div>
      <div className="mt-4 h-10 bg-gray-300 rounded"></div>
    </div>
  </div>
);

const SectionHeaderSkeleton = () => (
  <div className="space-y-4 animate-pulse">
    <div className="h-8 bg-gray-300 rounded w-64"></div>
    <div className="h-4 bg-gray-300 rounded w-full"></div>
    <div className="h-4 bg-gray-300 rounded w-3/4"></div>
  </div>
);

export default function ReportsPage() {
  const [allReports, setAllReports] = useState([]);
  const [filteredReports, setFilteredReports] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('newest');
  const [categoryFilter, setCategoryFilter] = useState('all');

  useEffect(() => {
    fetchReports();
  }, []);

  useEffect(() => {
    applyFilters();
  }, [allReports, searchQuery, sortBy, categoryFilter]);

  const fetchReports = async () => {
    try {
      setLoading(true);
      const response = await fetch('https://cms.pbr.com.ng/api/reports');
      if (!response.ok) throw new Error('Failed to fetch reports');
      const data = await response.json();
      setAllReports(data);
      setFilteredReports(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const applyFilters = () => {
    let filtered = [...allReports];

    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase().trim();
      filtered = filtered.filter(report => 
        report.title?.toLowerCase().includes(query) ||
        report.description?.toLowerCase().includes(query)
      );
    }

    if (categoryFilter !== 'all') {
      const filterLower = categoryFilter.toLowerCase().trim();
      filtered = filtered.filter(report => 
        report.category?.toLowerCase().includes(filterLower)
      );
    }

    filtered = [...filtered].sort((a, b) => {
      switch (sortBy) {
        case 'newest':
          return new Date(b.createdAt) - new Date(a.createdAt);
        case 'oldest':
          return new Date(a.createdAt) - new Date(b.createdAt);
        case 'rating':
          return (b.rating || 0) - (a.rating || 0);
        case 'title':
          return a.title.localeCompare(b.title);
        default:
          return 0;
      }
    });

    setFilteredReports(filtered);
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const handleSort = (sortValue) => {
    setSortBy(sortValue);
  };

  const handleCategoryFilter = (category) => {
    setCategoryFilter(category);
  };

  const getUniqueCategories = () => {
    const cats = [...new Set(allReports.map(r => r.category).filter(Boolean))];
    return cats.sort();
  };

  const categorizeReports = () => {
    const topReports = filteredReports.slice(0, 4);
    const whitepapers = filteredReports
      .filter(r => r.category?.toLowerCase().includes('white') && r.isFree)
      .slice(0, 4);
    const marketReports = filteredReports
      .filter(r => !r.category?.toLowerCase().includes('white') || !r.isFree)
      .slice(0, 4);

    return { topReports, whitepapers, marketReports };
  };

  const { whitepapers, marketReports } = categorizeReports();

  const clearFilters = () => {
    setSearchQuery('');
    setCategoryFilter('all');
    setSortBy('newest');
  };

  if (error) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-600 mb-4">Error: {error}</p>
          <button 
            onClick={fetchReports}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen ">
      <ReportSearchBar 
        onSearch={handleSearch}
        onSort={handleSort}
        onCategoryFilter={handleCategoryFilter}
        categories={getUniqueCategories()}
      />

      {(searchQuery || categoryFilter !== 'all') && (
        <div className="max-w-7xl mx-auto px-4 py-4">
          <p className="text-gray-600">
            Found {filteredReports.length} report{filteredReports.length !== 1 ? 's' : ''}
            {searchQuery && ` for "${searchQuery}"`}
            {categoryFilter !== 'all' && ` in ${categoryFilter}`}
            <button 
              onClick={clearFilters}
              className="ml-4 text-blue-600 hover:underline text-sm"
            >
              Clear filters
            </button>
          </p>
        </div>
      )}

      {loading ? (
        <>
          <section className="max-w-7xl mx-auto px-4 py-12">
            <SectionHeaderSkeleton />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
              {[...Array(4)].map((_, i) => <ReportCardSkeleton key={i} />)}
            </div>
          </section>
          <section className="max-w-7xl mx-auto px-4 py-12">
            <SectionHeaderSkeleton />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
              {[...Array(4)].map((_, i) => <ReportCardSkeleton key={i} />)}
            </div>
          </section>
        </>
      ) : (
        <>

        <WhitepapersMatter />
          {/* Whitepaper Section */}
          <section className="max-w-7xl mx-auto px-4 py-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Whitepaper Section</h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Access our free whitepapers to stay informed on critical industry topics.
            </p>

            {whitepapers.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {whitepapers.map((report) => (
                  <div key={report._id} className="rounded-lg overflow-hidden shadow-md bg-white hover:shadow-lg transition-shadow">
                    <ReportCardCover report={report} />
                    <div className="p-4">
                      <p className="text-sm text-gray-600 mb-2 line-clamp-2">{report.description}</p>
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">{report.category}</span>
                        <span className="text-xs text-green-600 font-semibold">FREE</span>
                      </div>
                      {report.downloadUrl && (
                        <a 
                          href={report.downloadUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="block w-full text-center bg-green-600 text-white py-2 rounded text-sm hover:bg-green-700 transition-colors"
                        >
                          Download
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-500 text-center py-8">No whitepapers found.</p>
            )}
          </section>

          {/* Market Intelligence Reports Section */}
          <section className="max-w-7xl mx-auto px-4 py-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Market Intelligence Reports Section</h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Our premium Market Intelligence Reports offer in-depth analysis.
            </p>

            {marketReports.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {marketReports.map((report) => (
                  <div key={report._id} className="rounded-lg overflow-hidden shadow-md bg-white hover:shadow-lg transition-shadow">
                    <ReportCardCover report={report} />
                    <div className="p-4">
                      <p className="text-sm text-gray-600 mb-2 line-clamp-2">{report.description}</p>
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-xs bg-purple-100 text-purple-800 px-2 py-1 rounded">{report.category}</span>
                        {!report.isFree && <span className="text-xs text-green-600 font-semibold">$10</span>}
                      </div>
                      {report.downloadUrl && (
                        <a 
                          href={report.downloadUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="block w-full text-center bg-green-600 text-white py-2 rounded text-sm hover:bg-purple-700 transition-colors"
                        >
                          {report.isFree ? 'Download' : 'Purchase & Download'}
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-500 text-center py-8">No market reports found.</p>
            )}
          </section>
        </>
      )}

      {/* Static Testimonials Section - Reduced padding and spacing */}
      <section className="max-w-7xl mx-auto px-4 py-16 bg-[#FAFBFF]">
        <div className="text-center mb-12">
          <p className="text-sm text-gray-500 uppercase tracking-wider mb-2">TESTIMONIALS</p>
          <h2 className="text-3xl font-bold text-gray-900">What our customers say</h2>
        </div>

        {/* Smaller cards with reduced gap */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <NewTestimonialCard
            rating={4}
            text="Their detailed insights into state-level dynamics and financial trends provided crucial information that streamlined our project on maternal and neonatal products in Nigeria, significantly enhancing our strategic planning."
            name="Azhee Akinrin"
            company="consultant, Global Health and Development, Market Access Africa"          />

          <NewTestimonialCard
            rating={5}
            text="PBR exceeded our expectations by providing credible, data-driven insights into therapeutics—offering a comprehensive understanding of market dynamics that has fundamentally transformed our decision-making process."
          name="Chishamiso Mawoyo"
            company="Senior Investment Officer, IFC"  />

          <NewTestimonialCard
            rating={4}
            text="The Versus platform delivered substantial time and cost savings, enabling us to benchmark strategies effectively and navigate regulatory challenges with greater confidence."
          name="Adeyanju Adedamola"
            company="Merit Healthcare"  />
        </div>
      </section>
    </div>
  );
}