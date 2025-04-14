
import React from 'react';
import { Category } from '@/lib/mockData';
import { useIsMobile } from '@/hooks/use-mobile';

interface CategoryFilterProps {
  categories: Category[];
  selectedCategory: string | null;
  onChange: (categoryId: string | null) => void;
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({ 
  categories, 
  selectedCategory, 
  onChange 
}) => {
  const isMobile = useIsMobile();
  
  // For mobile: render a select dropdown
  if (isMobile) {
    return (
      <div className="mb-8 animate-fade-in">
        <select 
          value={selectedCategory || ''} 
          onChange={(e) => onChange(e.target.value === '' ? null : e.target.value)}
          className="neu-input w-full p-3 font-bold"
        >
          <option value="">All Posts</option>
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>
      </div>
    );
  }
  
  // For desktop: render buttons
  return (
    <div className="flex flex-wrap gap-3 mb-8 animate-fade-in">
      <button
        onClick={() => onChange(null)}
        className={`
          px-4 py-2 border-2 border-neubrutalism-dark font-bold text-sm transition-all
          ${selectedCategory === null 
            ? 'bg-neubrutalism-dark text-white transform translate-y-[-2px] translate-x-[-2px] shadow-brutal' 
            : 'bg-white hover:bg-neubrutalism-light'}
        `}
      >
        All Posts
      </button>
      
      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => onChange(category.id)}
          className={`
            px-4 py-2 border-2 border-neubrutalism-dark font-bold text-sm transition-all hover:animate-wiggle
            ${selectedCategory === category.id 
              ? 'bg-neubrutalism-teal text-white transform translate-y-[-2px] translate-x-[-2px] shadow-brutal' 
              : 'bg-white hover:bg-neubrutalism-light'}
          `}
        >
          {category.name}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;
