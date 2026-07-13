type GalleryItem = {
  title: string;
  category: string;
  image: string;
};

type GalleryProps = {
  items: GalleryItem[];
};

export function Gallery({ items }: GalleryProps) {
  return (
    <div className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
      {items.map((item, index) => (
        <div key={item.title} className={`gallery-card group relative overflow-hidden rounded-[32px] shadow-soft ${index === 1 ? 'sm:row-span-2' : ''}`}>
          <div className="relative h-full min-h-[320px] overflow-hidden">
            <img src={item.image} alt={item.title} className="h-full w-full object-cover transition duration-700 group-hover:scale-110" />
            <div className="absolute inset-0 bg-slate-950/20 opacity-0 transition duration-500 group-hover:opacity-100" />
            <div className="absolute bottom-0 left-0 right-0 p-6 opacity-0 transition duration-500 group-hover:opacity-100">
              <p className="text-sm uppercase tracking-[0.25em] text-slate-200">{item.category}</p>
              <h3 className="mt-2 font-serif text-2xl font-semibold text-white">{item.title}</h3>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
