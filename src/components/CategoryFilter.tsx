
import React from 'react';
import { Category } from '@/lib/mockData';

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
  return (
    <div className="flex flex-wrap gap-3 mb-8">
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
            px-4 py-2 border-2 border-neubrutalism-dark font-bold text-sm transition-all
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
