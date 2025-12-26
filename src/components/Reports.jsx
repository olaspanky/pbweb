import useSWR from 'swr';
import { Star, Download, FileText } from 'lucide-react';

const fetcher = (url) => fetch(url).then((res) => res.json());

const SkeletonLoader = () => (
  <div className="max-w-4xl mx-auto">
    <div className="group relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl overflow-hidden shadow-2xl animate-pulse">
      <div className="grid md:grid-cols-2 gap-0">
        {/* Left side skeleton */}
        <div className="p-12 flex flex-col justify-center space-y-6">
          <div className="h-8 bg-gray-700 rounded w-40"></div>
          <div className="h-12 bg-gray-700 rounded w-11/12"></div>
          <div className="space-y-3">
            <div className="h-4 bg-gray-700 rounded w-full"></div>
            <div className="h-4 bg-gray-700 rounded w-5/6"></div>
            <div className="h-4 bg-gray-700 rounded w-10/12"></div>
            <div className="h-4 bg-gray-700 rounded w-8/12"></div>
          </div>
          <div className="flex items-center gap-2 pt-4">
            <div className="h-5 bg-gray-700 rounded w-32"></div>
          </div>
          <div className="h-14 bg-gray-700 rounded-full w-56"></div>
        </div>

        {/* Right side skeleton - now with realistic cover placeholder */}
        <div className="bg-gradient-to-br from-teal-600/20 to-blue-600/20 p-12 flex items-center justify-center relative overflow-hidden">
          {/* Decorative blur circles */}
          <div className="absolute top-10 right-10 w-32 h-32 bg-teal-500/10 rounded-full"></div>
          <div className="absolute bottom-10 left-10 w-40 h-40 bg-blue-500/10 rounded-full"></div>

          {/* Main placeholder mimicking the real cover */}
          <div className="relative z-10 w-64 h-96 bg-gray-700/50 backdrop-blur-sm rounded-2xl border border-gray-600/30 flex items-center justify-center">
            <div className="text-center space-y-6">
              <div className="w-40 h-24 bg-gray-600 rounded-xl mx-auto"></div>
              <div className="h-16 bg-gray-600 rounded w-32 mx-auto"></div>
              <div className="h-6 bg-gray-600 rounded w-48 mx-auto"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default function ImpactReportSection() {
  const { data, error, isLoading } = useSWR(
    'https://cms.pbr.com.ng/api/reports',
    fetcher
  );

  const impactReport = data?.find(
    (report) => report.category === 'Impact Report' && report.isFree
  );

  const renderStars = (rating) => {
    return (
      <div className="flex items-center gap-1">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-5 h-5 ${
              i < Math.floor(rating || 0)
                ? 'fill-yellow-400 text-yellow-400'
                : 'text-gray-600'
            }`}
          />
        ))}
        <span className="ml-3 text-sm text-gray-400">82 reviews</span>
      </div>
    );
  };

  // Loading state with skeleton
  if (isLoading) {
    return (
      <section className="py-20 text-black bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-black">
              Navigating Africa's Healthcare Evolution
            </h2>
            <p className="text-lg text-black max-w-4xl mx-auto">
              Gain from 200% revenue-backed insights across 10,958 SKUs and
              Sub-Saharan Africa's dynamic pharmaceutical landscape.
            </p>
          </div>
          <SkeletonLoader />
        </div>
      </section>
    );
  }

  // Error or no report found
  if (error || !impactReport) {
    return null;
  }

  return (
    <section className="py-20 text-white bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-black">
            Navigating Africa's Healthcare Evolution
          </h2>
          <p className="text-lg text-black max-w-4xl mx-auto">
            Gain from 200% revenue-backed insights across 10,958 SKUs and
            Sub-Saharan Africa's dynamic pharmaceutical landscape.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="group relative bg-[#1A3A7B] rounded-3xl overflow-hidden shadow-2xl hover:shadow-teal-500/20 transition-all duration-500">
            <div className="grid md:grid-cols-2 gap-0">
              {/* Left side - Content */}
              <div className="p-12 flex flex-col justify-center space-y-6">
              

                <h3 className="text-3xl md:text-4xl font-bold text-white leading-tight">
                  {impactReport.title.replace(/^PBR - /, '')}
                </h3>

                <p className="text-gray-300 leading-relaxed text-base">
                  {impactReport.description}
                </p>

                <div className="pt-2">
                  {impactReport.rating && renderStars(impactReport.rating)}
                </div>

                <a
                  href={impactReport.downloadUrl || '#'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/btn inline-flex items-center justify-center gap-3 bg-gradient-to-r from-teal-500 to-blue-500 text-white font-bold px-8 py-4 rounded-full hover:from-teal-400 hover:to-blue-400 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-teal-500/50 w-fit"
                >
                  <Download className="w-5 h-5 group-hover/btn:animate-bounce" />
                  Download Report
                </a>
              </div>

              {/* Right side - Image Cover (with fallback) */}
              <div className="bg-gradient-to-br from-teal-600/30 to-blue-600/30  flex items-center justify-center relative overflow-hidden">
                {/* Decorative circles */}
            

                {/* Use backgroundImage if available, otherwise fallback to decorative design */}
                {impactReport.backgroundImage ? (
                  <div
                    className="relative z-10 w-full max-w-md aspect-[3/4] bg-cover bg-cover  shadow-2xl border border-white/20 group-hover:scale-105 transition-transform duration-500"
                    style={{ backgroundImage: `url(${impactReport.backgroundImage})` }}
                  >
                    <div className="absolute inset-0 bg-black/30 rounded-2xl"></div>
                  </div>
                ) : (
                  /* Original decorative fallback */
                  <div className="relative z-10 w-64 h-64 bg-white/5 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-white/10 group-hover:border-teal-500/50 transition-all duration-500 group-hover:scale-105">
                    <div className="text-center">
                      <div className="w-32 h-20 bg-white rounded-xl flex items-center justify-center mb-6 mx-auto shadow-lg">
                        <span className="text-4xl font-bold text-teal-600">pbr</span>
                      </div>
                      <div className="text-6xl font-bold text-white/80 mb-2">2024</div>
                      <div className="text-sm uppercase tracking-widest text-teal-400">Impact Report</div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}