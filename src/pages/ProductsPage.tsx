import { useState } from 'react';
import { products } from '../data/products';
import type { product } from '../data/products';
import ProjectCard from '../components/ProjectCard';

type Category = 'all' | product['category'];

const CATEGORIES: { value: Category; label: string }[] = [
  { value: 'all', label: 'Tất Cả' },
  { value: 'architecture', label: 'Kiến Trúc' },
  { value: 'interior', label: 'Nội Thất' },
  { value: 'landscape', label: 'Cảnh Quan' },
];

export default function ProjectsPage() {
  const [active, setActive] = useState<Category>('all');

  const filtered = active === 'all' ? products : products.filter((p) => p.category === active);

  return (
    <div>
      <section className="max-w-7xl mx-auto px-6 pt-14 pb-8">
        <p className="text-xs tracking-[0.4em] uppercase text-stone-400 mb-3">
          architecture · interior · furniture
        </p>
        <h1 className="text-4xl md:text-6xl font-light text-stone-900 leading-tight max-w-2xl">
          SẢN PHẨM
        </h1>
      </section>

      {/* Filter tabs */}
      <section className="max-w-7xl mx-auto px-6 mb-8">
        <div className="flex gap-6 border-b border-stone-200">
          {CATEGORIES.map(({ value, label }) => (
            <button
              key={value}
              onClick={() => setActive(value)}
              className={`text-sm tracking-widest uppercase pb-3 border-b-2 transition-all duration-200 -mb-px ${
                active === value
                  ? 'border-stone-900 text-stone-900'
                  : 'border-transparent text-stone-400 hover:text-stone-700'
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      </section>

      {/* Masonry grid */}
      <section className="max-w-7xl mx-auto px-6 pb-16">
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {filtered.map((project) => (
            <div key={project.id} className="break-inside-avoid">
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
