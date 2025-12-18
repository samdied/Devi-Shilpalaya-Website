import React, { useState, useMemo } from 'react';

// --- Types ---
type Category = 'Religious' | 'Custom' | 'Architecture' | 'Workshop';

interface GalleryImage {
  id: string | number;
  src: string;
  category: Category;
  alt?: string;
}

interface GalleryProps {
  images: GalleryImage[];
}

const FullGallery: React.FC<GalleryProps> = ({ images }) => {
  const [activeFilter, setActiveFilter] = useState<'All' | Category>('All');

  // --- Core Logic: Sorting and Interleaving ---
  const displayedImages = useMemo(() => {
    // 1. If a specific category is selected (not "All"), just filter normally
    if (activeFilter !== 'All') {
      return images.filter(img => img.category === activeFilter);
    }

    // 2. Logic for the "All" category:
    const categoryOrder: Category[] = ["Religious", "Custom", "Architecture", "Workshop"];
    
    // Find the specific image to pin to the top
    const featured = images.find(img => img.src.includes("Workshop-Sculpting.jpg"));
    
    // Get everything else
    const others = images.filter(img => !img.src.includes("Workshop-Sculpting.jpg"));

    // Group images by category buckets
    const groups: Record<Category, GalleryImage[]> = {
      Religious: others.filter(img => img.category === "Religious"),
      Custom: others.filter(img => img.category === "Custom"),
      Architecture: others.filter(img => img.category === "Architecture"),
      Workshop: others.filter(img => img.category === "Workshop"),
    };

    const interleaved: GalleryImage[] = [];
    const totalOthers = others.length;

    // Interleave: Religious -> Custom -> Architecture -> Workshop (Repeat)
    // We use a copy of the groups to avoid mutating the original grouped arrays
    const groupsCopy = {
      Religious: [...groups.Religious],
      Custom: [...groups.Custom],
      Architecture: [...groups.Architecture],
      Workshop: [...groups.Workshop]
    };

    while (interleaved.length < totalOthers) {
      let addedInThisRound = false;
      
      categoryOrder.forEach((cat) => {
        if (groupsCopy[cat].length > 0) {
          interleaved.push(groupsCopy[cat].shift()!);
          addedInThisRound = true;
        }
      });

      if (!addedInThisRound) break; // Safety break
    }

    // Return the featured image at index 0, followed by the interleaved list
    return featured ? [featured, ...interleaved] : interleaved;
  }, [images, activeFilter]);

  // --- Handlers ---
  const categories: ('All' | Category)[] = ['All', 'Religious', 'Custom', 'Architecture', 'Workshop'];

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      {/* Filter Navigation */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginBottom: '30px' }}>
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setActiveFilter(cat)}
            style={{
              padding: '8px 16px',
              cursor: 'pointer',
              backgroundColor: activeFilter === cat ? '#333' : '#eee',
              color: activeFilter === cat ? '#fff' : '#333',
              border: 'none',
              borderRadius: '4px',
              fontWeight: activeFilter === cat ? 'bold' : 'normal'
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Gallery Grid */}
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', 
        gap: '20px' 
      }}>
        {displayedImages.map((img) => (
          <div key={img.id} style={{ overflow: 'hidden', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
            <img 
              src={img.src} 
              alt={img.alt || img.category} 
              style={{ width: '100%', height: '250px', objectFit: 'cover', display: 'block' }} 
            />
            <div style={{ padding: '10px', backgroundColor: '#fff', fontSize: '14px', color: '#666' }}>
              {img.category} {img.src.includes("Workshop-Sculpting.jpg") && " (Featured)"}
            </div>
          </div>
        ))}
      </div>

      {/* Contact Section */}
      <footer style={{ marginTop: '50px', textAlign: 'center', borderTop: '1px solid #eee', padding: '20px' }}>
        <p>For any enquiries, please contact us at:</p>
        <a href="mailto:justsam561@gmail.com" style={{ color: '#007bff', fontWeight: 'bold', textDecoration: 'none' }}>
          justsam561@gmail.com
        </a>
      </footer>
    </div>
  );
};

export default FullGallery;
