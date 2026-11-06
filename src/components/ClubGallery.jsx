import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Camera, Plus, MapPin, Calendar, Users, X, Filter, ZoomIn, CheckCircle2, Image as ImageIcon, Sparkles } from 'lucide-react';
import { initialGalleryPhotos } from '../data/galleryData';

export default function ClubGallery() {
  const [photos, setPhotos] = useState(() => {
    const saved = localStorage.getItem('aiforge_college_gallery_v2');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          return parsed;
        }
      } catch (e) {
        return initialGalleryPhotos;
      }
    }
    return initialGalleryPhotos;
  });

  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [addSuccess, setAddSuccess] = useState(false);

  // New photo form state
  const [formData, setFormData] = useState({
    title: '',
    category: 'Workshops',
    venue: 'Veltech Campus',
    date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
    caption: '',
    attendees: '',
    imageUrl: '',
    tags: 'Veltech AI'
  });

  useEffect(() => {
    localStorage.setItem('aiforge_college_gallery_v2', JSON.stringify(photos));
  }, [photos]);

  const categories = ["All", "Hackathons", "Workshops", "Demos & Labs", "Inauguration"];

  const filteredPhotos = activeCategory === "All"
    ? photos
    : photos.filter(p => p.category === activeCategory);

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData(prev => ({ ...prev, imageUrl: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAddPhotoSubmit = (e) => {
    e.preventDefault();
    if (!formData.title || !formData.imageUrl) {
      alert("Please provide at least a title and an image (upload file or URL)!");
      return;
    }

    const newPhoto = {
      id: `real-evt-${Date.now()}`,
      title: formData.title,
      category: formData.category,
      date: formData.date,
      venue: formData.venue,
      image: formData.imageUrl,
      caption: formData.caption || "College AI Forge event session at Veltech University.",
      attendees: formData.attendees ? Number(formData.attendees) : null,
      tags: formData.tags.split(',').map(t => t.trim()).filter(Boolean)
    };

    setPhotos([newPhoto, ...photos]);
    setAddSuccess(true);
    setTimeout(() => {
      setAddSuccess(false);
      setIsAddModalOpen(false);
      setFormData({
        title: '',
        category: 'Workshops',
        venue: 'Veltech Campus',
        date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
        caption: '',
        attendees: '',
        imageUrl: '',
        tags: 'Veltech AI'
      });
    }, 1200);
  };

  return (
    <section id="gallery" className="py-24 bg-[#090714] text-white relative overflow-hidden border-t border-[#231b40]/60">
      
      {/* Ambient background glows */}
      <div className="absolute top-1/3 -left-32 w-96 h-96 bg-[#8b5cf6]/15 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-[#ff6b4a]/15 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 pb-8 border-b border-[#231b40]/80">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#ff6b4a]/15 border border-[#ff6b4a]/30 text-xs font-mono text-[#ff8566] font-bold uppercase tracking-wider mb-2">
              <Camera className="w-3.5 h-3.5" /> Real Campus Events & Milestones
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
              Club Gallery & <span className="bg-gradient-to-r from-[#c084fc] via-[#8b5cf6] to-[#ff6b4a] bg-clip-text text-transparent">Event Photos</span>
            </h2>
            <p className="mt-3 text-sm sm:text-base text-zinc-400 max-w-2xl font-sans">
              Real photos and archives from our hackathons, workshops, and college sessions at Veltech University.
            </p>
          </div>

          {/* Action: Add Photo Button */}
          <button
            onClick={() => setIsAddModalOpen(true)}
            className="self-start md:self-auto inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#8b5cf6] via-[#a855f7] to-[#ff6b4a] hover:from-[#7c3aed] hover:to-[#ff5533] text-white font-bold text-xs uppercase tracking-wider shadow-[0_0_25px_rgba(255,107,74,0.4)] transition-all transform hover:scale-105 active:scale-95 cursor-pointer"
          >
            <Plus className="w-4 h-4" />
            Add Event Photo
          </button>
        </div>

        {/* Category Filters (Only if photos exist) */}
        {photos.length > 0 && (
          <div className="flex flex-wrap items-center gap-2 mb-10">
            <span className="text-xs font-mono text-zinc-500 mr-2 flex items-center gap-1.5">
              <Filter className="w-3.5 h-3.5 text-[#8b5cf6]" /> Filter:
            </span>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-mono font-semibold transition-all cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-gradient-to-r from-[#8b5cf6] to-[#ff6b4a] text-white shadow-[0_0_20px_rgba(255,107,74,0.35)]'
                    : 'bg-[#120e24] text-zinc-400 border border-white/10 hover:border-[#8b5cf6]/50 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
            <span className="ml-auto text-xs font-mono text-zinc-500">
              Showing {filteredPhotos.length} {filteredPhotos.length === 1 ? 'photo' : 'photos'}
            </span>
          </div>
        )}

        {/* Gallery Grid or Clean Empty State */}
        {filteredPhotos.length === 0 ? (
          <div className="text-center py-20 px-6 rounded-3xl bg-[#120e24]/60 border border-dashed border-[#8b5cf6]/30 max-w-2xl mx-auto backdrop-blur-xl">
            <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-[#8b5cf6]/10 border border-[#8b5cf6]/30 flex items-center justify-center text-[#ff6b4a]">
              <Camera className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-extrabold text-white">No Event Photos Added Yet</h3>
            <p className="text-sm text-zinc-400 mt-2 max-w-md mx-auto leading-relaxed">
              This gallery is ready for your real club photos and college events that happened at Veltech University. Click below to add your first picture.
            </p>
            <button
              onClick={() => setIsAddModalOpen(true)}
              className="mt-6 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#8b5cf6] to-[#ff6b4a] text-white font-bold text-xs uppercase tracking-wider shadow-lg hover:scale-105 active:scale-95 transition-all cursor-pointer"
            >
              <Plus className="w-4 h-4" />
              Add Your First Club Photo
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence>
              {filteredPhotos.map((photo) => (
                <motion.div
                  key={photo.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  onClick={() => setSelectedPhoto(photo)}
                  className="group relative rounded-3xl bg-[#120e24]/90 border border-[#231b40] hover:border-[#8b5cf6]/60 p-4 transition-all duration-300 hover:shadow-[0_0_30px_rgba(139,92,246,0.25)] cursor-pointer flex flex-col justify-between overflow-hidden"
                >
                  {/* Photo Image Frame */}
                  <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden bg-[#090714] mb-4">
                    <img
                      src={photo.image}
                      alt={photo.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#090714] via-transparent to-transparent opacity-70" />

                    {/* Top Badge: Category */}
                    <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-[10px] font-mono font-bold uppercase tracking-wider text-white">
                      {photo.category}
                    </div>

                    {/* Zoom Icon on Hover */}
                    <div className="absolute bottom-3 right-3 w-8 h-8 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <ZoomIn className="w-4 h-4 text-[#ff6b4a]" />
                    </div>
                  </div>

                  {/* Details */}
                  <div>
                    <h3 className="text-lg font-bold text-white group-hover:text-[#ff6b4a] transition-colors leading-snug">
                      {photo.title}
                    </h3>

                    <div className="flex flex-wrap items-center gap-y-1 gap-x-3 text-xs font-mono text-zinc-400 mt-2">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3 text-[#8b5cf6]" /> {photo.date}
                      </span>
                      {photo.venue && (
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3 h-3 text-[#ff6b4a]" /> {photo.venue}
                        </span>
                      )}
                    </div>

                    {photo.caption && (
                      <p className="text-xs text-zinc-400 mt-2.5 line-clamp-2 leading-relaxed">
                        {photo.caption}
                      </p>
                    )}

                    {/* Tags */}
                    {photo.tags && photo.tags.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 mt-3 pt-3 border-t border-white/5">
                        {photo.tags.map((t, idx) => (
                          <span key={idx} className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-[#161033] border border-white/5 text-zinc-300">
                            #{t}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        )}

      </div>

      {/* Lightbox Modal (Click to View Photo) */}
      <AnimatePresence>
        {selectedPhoto && (
          <div
            onClick={() => setSelectedPhoto(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-xl"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.92 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-3xl bg-[#120e24] border border-[#8b5cf6]/50 rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(139,92,246,0.4)] max-h-[92vh] overflow-y-auto"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedPhoto(null)}
                className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-black/60 text-white hover:bg-[#ff6b4a] flex items-center justify-center transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Full Image */}
              <div className="relative w-full aspect-[16/10] bg-black">
                <img
                  src={selectedPhoto.image}
                  alt={selectedPhoto.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Information */}
              <div className="p-6 sm:p-8 space-y-4">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-[#8b5cf6]/20 text-[#c084fc] border border-[#8b5cf6]/40 uppercase tracking-wider">
                    {selectedPhoto.category}
                  </span>
                  {selectedPhoto.attendees && (
                    <span className="text-xs font-mono text-zinc-400 flex items-center gap-1">
                      <Users className="w-3.5 h-3.5 text-[#ff6b4a]" /> {selectedPhoto.attendees} Students Participated
                    </span>
                  )}
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                  {selectedPhoto.title}
                </h3>

                <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-zinc-300">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-4 h-4 text-[#8b5cf6]" /> {selectedPhoto.date}
                  </span>
                  {selectedPhoto.venue && (
                    <span className="flex items-center gap-1.5">
                      <MapPin className="w-4 h-4 text-[#ff6b4a]" /> {selectedPhoto.venue}
                    </span>
                  )}
                </div>

                {selectedPhoto.caption && (
                  <p className="text-sm text-zinc-300 leading-relaxed font-sans">
                    {selectedPhoto.caption}
                  </p>
                )}

                {selectedPhoto.tags && selectedPhoto.tags.length > 0 && (
                  <div className="pt-4 border-t border-white/10 flex flex-wrap gap-2">
                    {selectedPhoto.tags.map((t, i) => (
                      <span key={i} className="text-xs font-mono px-2.5 py-1 rounded-lg bg-[#161033] border border-white/10 text-zinc-200">
                        #{t}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Add Event Photo Modal */}
      <AnimatePresence>
        {isAddModalOpen && (
          <div
            onClick={() => setIsAddModalOpen(false)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-xl"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-xl bg-[#120e24] border border-[#8b5cf6]/50 rounded-3xl p-6 sm:p-8 shadow-[0_0_60px_rgba(139,92,246,0.35)] max-h-[90vh] overflow-y-auto"
            >
              <button
                onClick={() => setIsAddModalOpen(false)}
                className="absolute top-5 right-5 w-8 h-8 rounded-full bg-white/10 hover:bg-[#ff6b4a] hover:text-white flex items-center justify-center text-white transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              {addSuccess ? (
                <div className="text-center py-10">
                  <div className="w-16 h-16 bg-[#ff6b4a]/20 text-[#ff6b4a] rounded-full flex items-center justify-center mx-auto mb-4 border border-[#ff6b4a]/40 shadow-[0_0_25px_rgba(255,107,74,0.5)]">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-extrabold text-white">Event Photo Added!</h3>
                  <p className="text-xs font-mono text-zinc-400 mt-2">Saved into your college club gallery.</p>
                </div>
              ) : (
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Camera className="w-5 h-5 text-[#ff6b4a]" />
                    <span className="font-mono text-xs uppercase tracking-widest text-[#ff6b4a] font-bold">
                      Veltech AI Forge Archives
                    </span>
                  </div>

                  <h3 className="text-2xl font-extrabold text-white">
                    Add College Club Event Photo
                  </h3>
                  <p className="text-xs text-zinc-400 mt-1 font-sans">
                    Upload your campus workshop or hackathon moments to feature them in the gallery.
                  </p>

                  <form onSubmit={handleAddPhotoSubmit} className="mt-6 space-y-4">
                    <div>
                      <label className="block text-xs font-mono text-zinc-300 mb-1 font-semibold">Event Title *</label>
                      <input
                        type="text"
                        required
                        value={formData.title}
                        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                        placeholder="e.g. AI Prompt Engineering Bootcamp"
                        className="w-full px-4 py-2.5 rounded-xl bg-[#090714] border border-white/10 text-white text-sm focus:outline-none focus:border-[#8b5cf6]"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-mono text-zinc-300 mb-1 font-semibold">Category</label>
                        <select
                          value={formData.category}
                          onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-xl bg-[#090714] border border-white/10 text-white text-sm focus:outline-none focus:border-[#8b5cf6]"
                        >
                          <option>Workshops</option>
                          <option>Hackathons</option>
                          <option>Demos & Labs</option>
                          <option>Inauguration</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-mono text-zinc-300 mb-1 font-semibold">Date</label>
                        <input
                          type="text"
                          value={formData.date}
                          onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                          placeholder="e.g. Nov 06, 2026"
                          className="w-full px-4 py-2.5 rounded-xl bg-[#090714] border border-white/10 text-white text-sm focus:outline-none focus:border-[#8b5cf6]"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-mono text-zinc-300 mb-1 font-semibold">College Venue</label>
                        <input
                          type="text"
                          value={formData.venue}
                          onChange={(e) => setFormData({ ...formData, venue: e.target.value })}
                          placeholder="e.g. Veltech Lab 304"
                          className="w-full px-4 py-2.5 rounded-xl bg-[#090714] border border-white/10 text-white text-sm focus:outline-none focus:border-[#8b5cf6]"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-mono text-zinc-300 mb-1 font-semibold">Attendees Count (Optional)</label>
                        <input
                          type="number"
                          value={formData.attendees}
                          onChange={(e) => setFormData({ ...formData, attendees: e.target.value })}
                          placeholder="e.g. 50"
                          className="w-full px-4 py-2.5 rounded-xl bg-[#090714] border border-white/10 text-white text-sm focus:outline-none focus:border-[#8b5cf6]"
                        />
                      </div>
                    </div>

                    {/* Image Options: Upload File OR URL */}
                    <div>
                      <label className="block text-xs font-mono text-zinc-300 mb-1 font-semibold">
                        Choose Photo (Upload File or Paste Image URL) *
                      </label>
                      <div className="flex flex-col sm:flex-row gap-2">
                        <label className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#161033] border border-dashed border-[#8b5cf6]/50 hover:border-[#8b5cf6] text-xs font-mono text-zinc-300 hover:text-white cursor-pointer transition-all">
                          <ImageIcon className="w-4 h-4 text-[#8b5cf6]" />
                          <span>Upload Image File</span>
                          <input
                            type="file"
                            accept="image/*"
                            onChange={handleFileUpload}
                            className="hidden"
                          />
                        </label>
                        <input
                          type="text"
                          value={formData.imageUrl.startsWith('data:') ? '(Image file loaded)' : formData.imageUrl}
                          onChange={(e) => setFormData({ ...formData, imageUrl: e.target.value })}
                          placeholder="Or paste image URL"
                          className="flex-1 px-4 py-2.5 rounded-xl bg-[#090714] border border-white/10 text-white text-xs focus:outline-none focus:border-[#8b5cf6]"
                        />
                      </div>
                    </div>

                    {formData.imageUrl && (
                      <div className="relative h-28 w-full rounded-xl overflow-hidden border border-white/15 bg-black">
                        <img
                          src={formData.imageUrl}
                          alt="Preview"
                          className="w-full h-full object-cover"
                        />
                        <span className="absolute bottom-1 right-2 px-2 py-0.5 rounded bg-black/70 text-[10px] font-mono text-white">
                          Image Preview
                        </span>
                      </div>
                    )}

                    <div>
                      <label className="block text-xs font-mono text-zinc-300 mb-1 font-semibold">Event Caption / Description</label>
                      <textarea
                        rows="2"
                        value={formData.caption}
                        onChange={(e) => setFormData({ ...formData, caption: e.target.value })}
                        placeholder="What happened in this session?"
                        className="w-full px-4 py-2 rounded-xl bg-[#090714] border border-white/10 text-white text-xs focus:outline-none focus:border-[#8b5cf6]"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full mt-4 py-3 rounded-xl bg-gradient-to-r from-[#8b5cf6] via-[#a855f7] to-[#ff6b4a] hover:from-[#7c3aed] hover:to-[#ff5533] text-white font-bold text-xs uppercase tracking-wider shadow-[0_0_25px_rgba(255,107,74,0.45)] transition-all cursor-pointer active:scale-95"
                    >
                      Publish Event to Gallery
                    </button>
                  </form>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}
