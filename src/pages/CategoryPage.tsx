
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PostCard from '@/components/PostCard';
import Newsletter from '@/components/Newsletter';
import { getPostsByCategory, getAllCategories, Category } from '@/lib/mockData';

const CategoryPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const [posts, setPosts] = useState(getPostsByCategory(slug || ''));
  const [category, setCategory] = useState<Category | undefined>(
    getAllCategories().find(cat => cat.slug === slug)
  );

  useEffect(() => {
    window.scrollTo(0, 0);
    setPosts(getPostsByCategory(slug || ''));
    setCategory(getAllCategories().find(cat => cat.slug === slug));
  }, [slug]);

  if (!category) {
    return (
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow container mx-auto px-4 py-8">
          <div className="bg-white border-4 border-neubrutalism-dark shadow-brutal p-6">
            <h2 className="text-2xl font-display mb-4">Category Not Found</h2>
            <p>Sorry, the category you're looking for doesn't exist.</p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow">
        {/* Category Header */}
        <section className="bg-neubrutalism-dark text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-display mb-4 animate-fade-in">
              {category.name}
            </h1>
            <p className="max-w-2xl mx-auto animate-fade-in" style={{animationDelay: '100ms'}}>
              {category.description}
            </p>
          </div>
        </section>
        
        {/* Posts Section */}
        <section className="container mx-auto px-4 py-12">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-8/12">
              {posts.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {posts.map((post, index) => (
                    <div key={post.id} className="animate-fade-in" style={{animationDelay: `${index * 100}ms`}}>
                      <PostCard post={post} />
                    </div>
                  ))}
                </div>
              ) : (
                <div className="bg-white border-4 border-neubrutalism-dark shadow-brutal p-6">
                  <p className="text-center text-neubrutalism-gray">
                    No posts found in this category yet.
                  </p>
                </div>
              )}
            </div>
            
            <aside className="md:w-4/12">
              <Newsletter />
              
              <div className="bg-white border-4 border-neubrutalism-dark shadow-brutal p-6 mb-8">
                <h3 className="text-xl font-display mb-4">About This Category</h3>
                <p className="text-neubrutalism-gray mb-4">
                  {category.description}
                </p>
                <div className="text-sm text-neubrutalism-gray">
                  <strong>{posts.length}</strong> posts in this category
                </div>
              </div>
              
              <div className="bg-white border-4 border-neubrutalism-dark shadow-brutal p-6">
                <h3 className="text-xl font-display mb-4">All Categories</h3>
                <ul className="space-y-2">
                  {getAllCategories().map(cat => (
                    <li key={cat.id}>
                      <a 
                        href={`/category/${cat.slug}`}
                        className={`
                          flex justify-between items-center p-2 border-2 hover:bg-neubrutalism-light transition-colors group
                          ${cat.slug === slug 
                            ? 'border-neubrutalism-teal bg-neubrutalism-light' 
                            : 'border-neubrutalism-dark'
                          }
                        `}
                      >
                        <span className="font-medium group-hover:translate-x-1 transition-transform">
                          {cat.name}
                        </span>
                        <span className={`
                          text-white text-xs px-2 py-1 rounded-sm
                          ${cat.slug === slug ? 'bg-neubrutalism-teal' : 'bg-neubrutalism-dark'}
                        `}>
                          {getPostsByCategory(cat.slug).length}
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default CategoryPage;
