"use client"
import React, { useState, useEffect } from 'react';
import { Search, ChevronDown } from 'lucide-react';

const TestimonialCard = ({ text, name, company }) => (
  <div className="bg-white p-6 rounded-lg border border-gray-200 w-96 flex-shrink-0">
    <p className="text-sm text-gray-500 mb-4">Verified Purchase</p>
    <p className="text-gray-700 mb-6 leading-relaxed">{text}</p>
    <div className="flex items-center gap-3">
      <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
        <span className="text-gray-500 text-sm">👤</span>
      </div>
      <div>
        <p className="font-semibold text-gray-900">{name}</p>
        <p className="text-sm text-gray-500">{company}</p>
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
    <div className="px-4 py-6">
      <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-sm">
        <div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center p-7 shadow-lg rounded-xl">
          {/* Search Input */}
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

          {/* Sort by */}
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

          {/* Categories */}
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

          {/* Search Button */}
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

// Reusable Report Card Cover with background image support
const ReportCardCover = ({ report }) => {
  if (report.backgroundImage) {
    return (
      <div 
        className="aspect-[3/4] bg-cover bg-center relative flex items-center justify-center p-6"
        style={{ backgroundImage: `url(${report.backgroundImage})` }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <h3 className="relative text-white font-bold text-lg text-center z-10">
        </h3>
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

// Skeleton Card for report loading
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

// Skeleton for section header
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

  const { topReports, whitepapers, marketReports } = categorizeReports();

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
    <div className="min-h-screen">
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

      {/* Loading State with Skeleton Loaders */}
      {loading ? (
        <>
          {/* Top Report Section Skeleton */}
          <section className="max-w-7xl mx-auto px-4 py-12">
            <SectionHeaderSkeleton />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
              {[...Array(4)].map((_, i) => (
                <ReportCardSkeleton key={i} />
              ))}
            </div>
          </section>

          {/* Whitepaper Section Skeleton */}
          <section className="max-w-7xl mx-auto px-4 py-12">
            <SectionHeaderSkeleton />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
              {[...Array(4)].map((_, i) => (
                <ReportCardSkeleton key={i} />
              ))}
            </div>
          </section>

          {/* Market Reports Section Skeleton */}
          <section className="max-w-7xl mx-auto px-4 py-12">
            <SectionHeaderSkeleton />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
              {[...Array(4)].map((_, i) => (
                <ReportCardSkeleton key={i} />
              ))}
            </div>
          </section>
        </>
      ) : (
        <>
          {/* Top Report Section */}
          <section className="max-w-7xl mx-auto px-4 py-12">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-3xl font-bold text-gray-900">Top Report Section</h2>
            </div>
            
            <p className="text-gray-600 mb-8 leading-relaxed">
              Explore our collection of free whitepapers and paid market intelligence reports covering the latest trends, analyses, and forecasts in the pharmaceutical and life sciences industry.
            </p>

            {topReports.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {topReports.map((report) => (
                  <div key={report._id} className="rounded-lg overflow-hidden shadow-md bg-white hover:shadow-lg transition-shadow">
                    <ReportCardCover report={report} />
                    <div className="p-4">
                      <p className="text-sm text-gray-600 mb-2 line-clamp-2">{report.description}</p>
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">{report.category}</span>
                        {report.isFree && <span className="text-xs text-green-600 font-semibold">FREE</span>}
                      </div>
                      {report.downloadUrl && (
                        <a 
                          href={report.downloadUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="block w-full text-center bg-blue-600 text-white py-2 rounded text-sm hover:bg-blue-700 transition-colors"
                        >
                          Download
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-500 text-center py-8">No reports found matching your criteria.</p>
            )}
          </section>

          {/* Whitepaper Section */}
          <section className="max-w-7xl mx-auto px-4 py-12">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-3xl font-bold text-gray-900">Whitepaper Section</h2>
            </div>
            
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
              <p className="text-gray-500 text-center py-8">No whitepapers found matching your criteria.</p>
            )}
          </section>

          {/* Market Intelligence Reports Section */}
          <section className="max-w-7xl mx-auto px-4 py-12">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-3xl font-bold text-gray-900">Market Intelligence Reports Section</h2>
            </div>
            
            <p className="text-gray-600 mb-8 leading-relaxed">
              Our premium Market Intelligence Reports offer in-depth analyses for only $10 each.
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
                        {!report.isFree && <span className="text-xs text-purple-600 font-semibold">$10</span>}
                      </div>
                      {report.downloadUrl && (
                        <a 
                          href={report.downloadUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="block w-full text-center bg-purple-600 text-white py-2 rounded text-sm hover:bg-purple-700 transition-colors"
                        >
                          {report.isFree ? 'Download' : 'Purchase & Download'}
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-500 text-center py-8">No market intelligence reports found.</p>
            )}
          </section>
        </>
      )}

      {/* Testimonials Section - remains visible even during loading */}
      <section className="max-w-7xl mx-auto px-4 py-16 overflow-hidden">
        <div className="text-center mb-4">
          <p className="text-sm text-gray-500 uppercase tracking-wider mb-2">TESTIMONIALS</p>
          <h2 className="text-4xl font-bold text-gray-900">What our customers say</h2>
        </div>

        <div className="relative mt-12 mb-8">
          <div className="flex gap-8 animate-scroll-right">
            {[...Array(2)].map((_, idx) => (
            <React.Fragment key={idx}>
  <TestimonialCard
    text="PBR exceeded our expectations by providing credible, data-driven insights into therapeutics—offering a comprehensive understanding of market dynamics that has fundamentally transformed our decision-making process."
    name="Chishamiso Mawoyo"
    company="Senior Investment Officer, IFC"
  />

  <TestimonialCard
    text="Their detailed insights into state-level dynamics and financial trends provided crucial information that streamlined our project on maternal and neonatal products in Nigeria, significantly enhancing our strategic planning."
    name="Azhee Akinrin"
    company="Consultant, Global Health and Development, Market Access Africa"
  />

  <TestimonialCard
    text="The Versus platform delivered substantial time and cost savings, enabling us to benchmark strategies effectively and navigate regulatory challenges with greater confidence."
    name="Adeyanju Adedamola"
    company="Merit Healthcare"
  />

  <TestimonialCard
    text="Partnering with PBR Life Sciences on an advanced pricing modeling project was a game-changer for Sanofi. By leveraging real-world pharmacy sales data, we developed a data-driven pricing strategy that not only boosted profitability but also ensured broader patient access to essential medicines."
    name="Tolulope Jagun"
    company="Ex Sanofi Nigeria – Country Revenue and Pricing Manager & Pricing Project Lead"
  />

  <TestimonialCard
    text="PBR's data solutions empowered us to make strategic decisions that directly impacted product launches and market segmentation. By providing detailed SKU analysis and granular market insights, PBR enabled us to successfully launch a new product in 2024. The business planning workshop further enriched our approach, offering fresh perspectives on brand penetration and competitive benchmarking that helped streamline product selection and channel prioritization."
    name="Yimika Oguns"
    company="Emzor"
  />
</React.Fragment>

            ))}
          </div>
        </div>

        <div className="relative">
          <div className="flex gap-8 animate-scroll-left">
            {[...Array(2)].map((_, idx) => (
             <React.Fragment key={idx}>
  <TestimonialCard
    text="PBR exceeded our expectations by providing credible, data-driven insights into therapeutics—offering a comprehensive understanding of market dynamics that has fundamentally transformed our decision-making process."
    name="Chishamiso Mawoyo"
    company="Senior Investment Officer, IFC"
  />

  <TestimonialCard
    text="Their detailed insights into state-level dynamics and financial trends provided crucial information that streamlined our project on maternal and neonatal products in Nigeria, significantly enhancing our strategic planning."
    name="Azhee Akinrin"
    company="Consultant, Global Health and Development, Market Access Africa"
  />

  <TestimonialCard
    text="The Versus platform delivered substantial time and cost savings, enabling us to benchmark strategies effectively and navigate regulatory challenges with greater confidence."
    name="Adeyanju Adedamola"
    company="Merit Healthcare"
  />

  <TestimonialCard
    text="Partnering with PBR Life Sciences on an advanced pricing modeling project was a game-changer for Sanofi. By leveraging real-world pharmacy sales data, we developed a data-driven pricing strategy that not only boosted profitability but also ensured broader patient access to essential medicines."
    name="Tolulope Jagun"
    company="Ex Sanofi Nigeria – Country Revenue and Pricing Manager & Pricing Project Lead"
  />

  <TestimonialCard
    text="PBR's data solutions empowered us to make strategic decisions that directly impacted product launches and market segmentation. By providing detailed SKU analysis and granular market insights, PBR enabled us to successfully launch a new product in 2024. The business planning workshop further enriched our approach, offering fresh perspectives on brand penetration and competitive benchmarking that helped streamline product selection and channel prioritization."
    name="Yimika Oguns"
    company="Emzor"
  />
</React.Fragment>

            ))}
          </div>
        </div>

        <style jsx>{`
          @keyframes scroll-right {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          @keyframes scroll-left {
            0% { transform: translateX(-50%); }
            100% { transform: translateX(0); }
          }
          .animate-scroll-right { animation: scroll-right 40s linear infinite; }
          .animate-scroll-left { animation: scroll-left 40s linear infinite; }
        `}</style>
      </section>
    </div>
  );
}