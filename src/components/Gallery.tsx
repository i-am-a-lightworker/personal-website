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
    <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {items.map((item) => (
        <div key={item.title} className="group overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-soft">
          <div className="aspect-[4/5] overflow-hidden">
            <img src={item.image} alt={item.title} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
          </div>
          <div className="p-6">
            <p className="text-sm uppercase tracking-[0.25em] text-accent">{item.category}</p>
            <h3 className="mt-2 font-serif text-2xl font-semibold text-primary">{item.title}</h3>
          </div>
        </div>
      ))}
    </div>
  );
}
