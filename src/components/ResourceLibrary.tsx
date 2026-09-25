import React, { useState } from 'react';
import { 
  Search, Download, Star, 
  Sparkles, X, Check, Eye, GraduationCap, 
  ArrowRight, ShieldCheck, Share2
} from 'lucide-react';
import { RESOURCE_CATALOG } from '../data/landingData';
import { ResourceCategory, ResourceItem } from '../types';

interface ResourceLibraryProps {
  onOpenTeacherPass: () => void;
}

export const ResourceLibrary: React.FC<ResourceLibraryProps> = ({
  onOpenTeacherPass
}) => {
  const [selectedCategory, setSelectedCategory] = useState<ResourceCategory>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedResource, setSelectedResource] = useState<ResourceItem | null>(null);
  const [downloadFeedback, setDownloadFeedback] = useState<string | null>(null);

  const categories: ResourceCategory[] = [
    'All',
    'TOEFL Prep',
    'Grammar & Vocab',
    'Reading & Phonics',
    'Auto-Grade Quizzes',
    'Classroom Games'
  ];

  const filteredResources = RESOURCE_CATALOG.filter((item) => {
    const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const handleDownload = (res: ResourceItem) => {
    setDownloadFeedback(res.id);
    setTimeout(() => {
      setDownloadFeedback(null);
    }, 2500);
  };

  return (
    <section id="resources" className="py-20 lg:py-28 relative bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-800/60 text-xs font-semibold text-cyan-400">
              <GraduationCap className="w-3.5 h-3.5" />
              <span>Curated Teacher Resource Vault</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Ready-to-Use Class Material
            </h2>
            <p className="text-sm sm:text-base text-slate-300">
              Download standards-aligned worksheets, TOEFL mock exam banks, and interactive games built specifically for classroom teachers.
            </p>
          </div>

          {/* Search Input */}
          <div className="w-full md:w-80 relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search by topic, prefix, TOEFL..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700/80 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition shadow-sm"
            />
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition shrink-0 cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-gradient-to-r from-cyan-500 to-indigo-600 text-white shadow-md shadow-cyan-500/20'
                  : 'bg-slate-900/80 hover:bg-slate-800 text-slate-300 border border-slate-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Resource Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredResources.map((resource) => (
            <div
              key={resource.id}
              className="group rounded-3xl p-6 bg-slate-900/60 border border-slate-800/80 hover:border-cyan-500/40 transition-all duration-300 shadow-xl flex flex-col justify-between hover:-translate-y-1"
            >
              <div>
                {/* Top badges */}
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-cyan-950 text-cyan-400 border border-cyan-800">
                    {resource.tag}
                  </span>
                  <div className="flex items-center gap-1 text-amber-400 text-xs">
                    <Star className="w-3.5 h-3.5 fill-amber-400" />
                    <span className="font-bold">{resource.rating}</span>
                    <span className="text-slate-500 text-[10px]">({(resource.downloads / 1000).toFixed(1)}k)</span>
                  </div>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-cyan-300 transition line-clamp-2 mb-2">
                  {resource.title}
                </h3>

                <p className="text-xs text-slate-400 leading-relaxed line-clamp-3 mb-4">
                  {resource.description}
                </p>

                {/* Standards tags */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {resource.standards.map((std, i) => (
                    <span 
                      key={i} 
                      className="text-[10px] px-2 py-0.5 rounded-md bg-slate-950 border border-slate-800 text-slate-300 font-mono"
                    >
                      {std}
                    </span>
                  ))}
                  <span className="text-[10px] px-2 py-0.5 rounded-md bg-slate-800/60 text-slate-400 font-sans">
                    {resource.pages} pages
                  </span>
                </div>
              </div>

              {/* Actions */}
              <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between gap-2">
                <button
                  onClick={() => setSelectedResource(resource)}
                  className="text-xs font-semibold text-slate-300 hover:text-white flex items-center gap-1.5 py-1.5 px-3 rounded-lg hover:bg-slate-800 transition cursor-pointer"
                >
                  <Eye className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Quick View</span>
                </button>

                <button
                  onClick={() => handleDownload(resource)}
                  className={`text-xs font-bold py-2 px-3.5 rounded-xl flex items-center gap-1.5 transition active:scale-95 cursor-pointer ${
                    downloadFeedback === resource.id
                      ? 'bg-emerald-600 text-white shadow-emerald-500/20'
                      : 'bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white shadow-cyan-500/20'
                  } shadow-md`}
                >
                  {downloadFeedback === resource.id ? (
                    <>
                      <Check className="w-3.5 h-3.5" />
                      <span>Ready in Downloads</span>
                    </>
                  ) : (
                    <>
                      <Download className="w-3.5 h-3.5" />
                      <span>Free Download</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-14 rounded-3xl p-6 sm:p-8 bg-gradient-to-r from-cyan-950/70 via-slate-900 to-indigo-950/70 border border-cyan-500/30 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="space-y-1">
            <h4 className="text-lg font-bold text-white flex items-center justify-center md:justify-start gap-2">
              <Sparkles className="w-4 h-4 text-cyan-400" />
              Need custom materials for your school's curriculum?
            </h4>
            <p className="text-xs sm:text-sm text-slate-300">
              Our AI Lesson Engine can synthesize customized worksheets matching your exact textbook syllabus in under 60 seconds.
            </p>
          </div>
          <button
            onClick={onOpenTeacherPass}
            className="px-6 py-3 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-bold text-xs sm:text-sm transition shadow-lg shadow-cyan-500/20 shrink-0 cursor-pointer flex items-center gap-2"
          >
            <span>Unlock Full Resource Library (2,400+ Units)</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>

      {/* Resource Detail Modal */}
      {selectedResource && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div 
            onClick={() => setSelectedResource(null)}
            className="fixed inset-0 bg-slate-950/80 backdrop-blur-md"
          />

          <div className="relative w-full max-w-2xl bg-slate-900 border border-slate-700/80 rounded-3xl p-6 sm:p-8 shadow-2xl z-10 max-h-[90vh] overflow-y-auto animate-in zoom-in-95 duration-200">
            <div className="flex items-start justify-between gap-4 mb-4">
              <div>
                <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-cyan-950 text-cyan-400 border border-cyan-800">
                  {selectedResource.category} • {selectedResource.gradeLevel}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white mt-2">
                  {selectedResource.title}
                </h3>
              </div>
              <button
                onClick={() => setSelectedResource(null)}
                className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <p className="text-sm text-slate-300 leading-relaxed mb-6">
              {selectedResource.description}
            </p>

            {/* Standards & Metadata */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6 p-4 rounded-2xl bg-slate-950 border border-slate-800 text-xs">
              <div>
                <span className="text-slate-500 block text-[10px] uppercase font-bold">Grade Level:</span>
                <span className="font-semibold text-slate-200">{selectedResource.gradeLevel}</span>
              </div>
              <div>
                <span className="text-slate-500 block text-[10px] uppercase font-bold">Standard Benchmarks:</span>
                <span className="font-semibold text-cyan-400">{selectedResource.standards.join(', ')}</span>
              </div>
              <div>
                <span className="text-slate-500 block text-[10px] uppercase font-bold">Format:</span>
                <span className="font-semibold text-slate-200">Printable PDF & Auto-Test</span>
              </div>
            </div>

            {/* Excerpt box */}
            <div className="p-4 rounded-2xl bg-slate-950/70 border border-cyan-500/20 mb-6">
              <span className="text-xs font-bold text-cyan-300 uppercase tracking-wider block mb-2">
                Sample Excerpt / Preview:
              </span>
              <p className="text-xs font-mono text-slate-300 bg-slate-900 p-3 rounded-xl border border-slate-800 leading-relaxed">
                {selectedResource.previewSnippet}
              </p>
            </div>

            {/* Modal Actions */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-slate-800">
              <div className="flex items-center gap-2 text-xs text-slate-400">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Verified Educator License • Unlimited Classroom Copies</span>
              </div>

              <div className="flex items-center gap-2 w-full sm:w-auto">
                <button
                  onClick={() => {
                    handleDownload(selectedResource);
                  }}
                  className="flex-1 sm:flex-none px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 font-bold text-xs text-white flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/20 active:scale-95 cursor-pointer"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Pack (PDF + Key)</span>
                </button>

                <button
                  onClick={() => {
                    navigator.clipboard?.writeText(window.location.href);
                    alert('Resource link copied to clipboard!');
                  }}
                  className="p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 transition"
                  title="Share with Teacher Colleague"
                >
                  <Share2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};
