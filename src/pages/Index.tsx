
import React, { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PostCard from '@/components/PostCard';
import CategoryFilter from '@/components/CategoryFilter';
import Newsletter from '@/components/Newsletter';
import { getAllPosts, getAllCategories, Post } from '@/lib/mockData';

const Index = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [filteredPosts, setFilteredPosts] = useState<Post[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const categories = getAllCategories();

  useEffect(() => {
    setPosts(getAllPosts());
  }, []);

  useEffect(() => {
    if (selectedCategory) {
      const categoryPosts = posts.filter(post => post.category.id === selectedCategory);
      setFilteredPosts(categoryPosts);
    } else {
      setFilteredPosts(posts);
    }
  }, [selectedCategory, posts]);

  const handleCategoryChange = (categoryId: string | null) => {
    setSelectedCategory(categoryId);
  };

  const featuredPost = posts.length > 0 ? posts[0] : null;
  const remainingPosts = filteredPosts.filter(post => featuredPost ? post.id !== featuredPost.id : true);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="mb-16">
          <h2 className="sr-only">Featured Post</h2>
          {featuredPost && !selectedCategory && (
            <PostCard post={featuredPost} featured />
          )}
        </section>
        
        {/* Main Content */}
        <section className="mb-16">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-8/12">
              <h2 className="text-3xl font-display mb-8 relative inline-block">
                <span className="relative z-10">
                  {selectedCategory 
                    ? categories.find(cat => cat.id === selectedCategory)?.name + " Posts"
                    : "Latest Articles"}
                </span>
                <div className="absolute bottom-0 left-0 w-full h-3 bg-neubrutalism-teal -z-0"></div>
              </h2>
              
              <CategoryFilter 
                categories={categories}
                selectedCategory={selectedCategory}
                onChange={handleCategoryChange}
              />
              
              {remainingPosts.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {remainingPosts.map(post => (
                    <div key={post.id} className="animate-fade-in">
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
                <h3 className="text-xl font-display mb-4">About Me</h3>
                <div className="flex flex-col items-center text-center mb-4">
                  <img 
                    src="https://images.unsplash.com/photo-1517849845537-4d257902454a?q=80&w=200&auto=format&fit=crop" 
                    alt="Author" 
                    className="w-24 h-24 rounded-full border-4 border-neubrutalism-dark mb-4"
                  />
                  <h4 className="font-bold text-lg">Sam Morgan</h4>
                  <p className="text-neubrutalism-gray text-sm">Digital Creator & Designer</p>
                </div>
                <p className="text-neubrutalism-gray text-sm mb-4">
                  I write about design, technology, and finding balance in our digital world.
                </p>
                <a 
                  href="/about" 
                  className="block w-full text-center bg-neubrutalism-teal text-white border-2 border-neubrutalism-dark py-2 font-bold shadow-brutal hover:translate-y-[-2px] transition-all"
                >
                  Read More
                </a>
              </div>
              
              <div className="bg-white border-4 border-neubrutalism-dark shadow-brutal p-6">
                <h3 className="text-xl font-display mb-4">Categories</h3>
                <ul className="space-y-2">
                  {categories.map(category => (
                    <li key={category.id}>
                      <a 
                        href={`/category/${category.slug}`}
                        className="flex justify-between items-center p-2 border-2 border-neubrutalism-dark hover:bg-neubrutalism-light transition-colors group"
                      >
                        <span className="font-medium group-hover:translate-x-1 transition-transform">
                          {category.name}
                        </span>
                        <span className="bg-neubrutalism-teal text-white text-xs px-2 py-1 rounded-sm">
                          {posts.filter(post => post.category.id === category.id).length}
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

export default Index;
