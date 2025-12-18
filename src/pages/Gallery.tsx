import { useState, useMemo } from "react";
import { Layout } from "@/components/layout/Layout";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

const imageModules = import.meta.glob("@/assets/*.{png,jpg,jpeg,webp}", {
  eager: true,
  import: "default",
});

const CATEGORIES = ["Religious", "Custom", "Architecture", "Workshop"];

// 1. Process images with filenames included for sorting
const rawItems = Object.entries(imageModules).map(([path, url], index) => {
  const fileNameWithExt = path.split('/').pop() || "";
  const fileName = fileNameWithExt.split('.')[0]; 
  const parts = fileName.split('-');
  
  let category = "Religious";
  const potentialCategory = parts[0].charAt(0).toUpperCase() + parts[0].slice(1).toLowerCase();
  
  if (CATEGORIES.includes(potentialCategory)) {
    category = potentialCategory;
  }

  return {
    id: index,
    image: url as string,
    category: category,
    fileName: fileNameWithExt, // Keep this to find the sculpting image
  };
});

// 2. Logic to create the "interleaved" order
const getOrderedAllItems = () => {
  // Find the specific hero image
  const heroImage = rawItems.find(item => item.fileName === "Workshop-Sculpting.jpg");
  const others = rawItems.filter(item => item.fileName !== "Workshop-Sculpting.jpg");

  // Group the rest by category
  const stacks: Record<string, typeof rawItems> = {
    Religious: others.filter(i => i.category === "Religious"),
    Custom: others.filter(i => i.category === "Custom"),
    Architecture: others.filter(i => i.category === "Architecture"),
    Workshop: others.filter(i => i.category === "Workshop"),
  };

  const interleaved: typeof rawItems = [];
  if (heroImage) interleaved.push(heroImage);

  // The pattern you requested
  const pattern = ["Religious", "Custom", "Architecture", "Workshop"];
  
  let hasMore = true;
  let cycleIndex = 0;

  while (hasMore) {
    hasMore = false;
    for (const cat of pattern) {
      if (stacks[cat].length > 0) {
        interleaved.push(stacks[cat].shift()!);
        hasMore = true;
      }
    }
    // Safety break to prevent infinite loops if something goes wrong
    cycleIndex++;
    if (cycleIndex > 1000) break; 
  }

  return interleaved;
};

const filterTabs = ["All", ...CATEGORIES];

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState<typeof rawItems[0] | null>(null);

  // Memoize the ordered list so it doesn't recalculate every render
  const allOrderedItems = useMemo(() => getOrderedAllItems(), []);

  const filteredItems = activeCategory === "All"
    ? allOrderedItems
    : rawItems.filter((item) => item.category === activeCategory);

  return (
    <Layout>
      <section className="pt-32 pb-16 bg-charcoal text-charcoal-foreground">
        <div className="container text-center">
            <h1 className="font-heading text-5xl md:text-6xl font-semibold mb-4">
              Our <span className="text-accent italic">Masterpieces</span>
            </h1>
        </div>
      </section>

      <section className="py-12 bg-background">
        <div className="container">
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {filterTabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveCategory(tab)}
                className={cn(
                  "px-5 py-2 rounded-full text-sm font-medium transition-all",
                  activeCategory === tab
                    ? "bg-accent text-white shadow-lg"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                )}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {filteredItems.map((item) => (
              <div
                key={`${item.category}-${item.id}`}
                className="break-inside-avoid group cursor-pointer relative rounded-lg overflow-hidden"
                onClick={() => setSelectedImage(item)}
              >
                <img
                  src={item.image}
                  alt={item.category}
                  className="w-full transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-6 flex flex-col justify-end">
                  <p className="text-white text-xs font-bold uppercase tracking-widest bg-accent/80 w-fit px-2 py-1 rounded">
                    {item.category}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {selectedImage && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4" onClick={() => setSelectedImage(null)}>
          <button className="absolute top-5 right-5 text-white"><X size={32} /></button>
          <img src={selectedImage.image} className="max-w-full max-h-[90vh] object-contain" alt="Gallery preview" />
        </div>
      )}
    </Layout>
  );
};

export default Gallery;
