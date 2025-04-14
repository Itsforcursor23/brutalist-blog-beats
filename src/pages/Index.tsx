
import React, { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PostCard from '@/components/PostCard';
import CategoryFilter from '@/components/CategoryFilter';
import Newsletter from '@/components/Newsletter';
import { getAllPosts, getAllCategories, Post } from '@/lib/mockData';
import { Calendar, ArrowRight, Star, BookOpen, TrendingUp } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
import { Link } from 'react-router-dom';

const Index = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [filteredPosts, setFilteredPosts] = useState<Post[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const categories = getAllCategories();
  const isMobile = useIsMobile();
  
  // Get popular posts (mock implementation)
  const popularPosts = [...posts].sort((a, b) => b.comments.length - a.comments.length).slice(0, 3);
  
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
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="mb-16 bg-neubrutalism-light px-4 py-16 md:py-24">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-display mb-6 relative inline-block animate-fade-in">
              <span className="relative z-10">Brutalist Blog Beats</span>
              <div className="absolute bottom-0 left-0 w-full h-3 bg-neubrutalism-teal transform -rotate-1"></div>
            </h1>
            <p className="text-xl md:text-2xl text-neubrutalism-gray mb-8 max-w-3xl mx-auto animate-fade-in" style={{animationDelay: '200ms'}}>
              Exploring design, culture, and technology through a brutalist lens. 
              Bold ideas & raw perspectives for the modern creator.
            </p>
            <div className="flex flex-wrap justify-center gap-4 animate-fade-in" style={{animationDelay: '400ms'}}>
              <a href="#latest" className="neu-button flex items-center gap-2 group">
                Latest Articles <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#categories" className="bg-white text-neubrutalism-dark px-6 py-2 border-2 border-neubrutalism-dark font-bold shadow-brutal transition-all duration-200 hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-brutal-xl">
                Browse Categories
              </a>
            </div>
          </div>
        </section>
        
        {/* Featured Post Section */}
        <section className="mb-16 container mx-auto px-4">
          <h2 className="sr-only">Featured Post</h2>
          {featuredPost && !selectedCategory && (
            <PostCard post={featuredPost} featured />
          )}
        </section>
        
        {/* Main Content */}
        <section id="latest" className="mb-16 container mx-auto px-4 animate-fade-in" style={{animationDelay: '300ms'}}>
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
                  {remainingPosts.map((post, index) => (
                    <div key={post.id} 
                         className="animate-fade-in" 
                         style={{animationDelay: `${500 + (index * 100)}ms`}}>
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
              
              <div className="bg-white border-4 border-neubrutalism-dark shadow-brutal p-6 mb-8 animate-fade-in" style={{animationDelay: '400ms'}}>
                <h3 className="text-xl font-display mb-4">About Me</h3>
                <div className="flex flex-col items-center text-center mb-4">
                  <img 
                    src="https://images.unsplash.com/photo-1517849845537-4d257902454a?q=80&w=200&auto=format&fit=crop" 
                    alt="Author" 
                    className="w-24 h-24 rounded-full border-4 border-neubrutalism-dark mb-4 hover:animate-wiggle"
                  />
                  <h4 className="font-bold text-lg">Sam Morgan</h4>
                  <p className="text-neubrutalism-gray text-sm">Digital Creator & Designer</p>
                </div>
                <p className="text-neubrutalism-gray text-sm mb-4">
                  I write about design, technology, and finding balance in our digital world.
                </p>
                <Link 
                  to="/about" 
                  className="block w-full text-center bg-neubrutalism-teal text-white border-2 border-neubrutalism-dark py-2 font-bold shadow-brutal hover:translate-y-[-2px] transition-all"
                >
                  Read More
                </Link>
              </div>
              
              <div id="categories" className="bg-white border-4 border-neubrutalism-dark shadow-brutal p-6 animate-fade-in" style={{animationDelay: '500ms'}}>
                <h3 className="text-xl font-display mb-4">Categories</h3>
                <ul className="space-y-2">
                  {categories.map((category, index) => (
                    <li key={category.id} 
                        className="animate-fade-in" 
                        style={{animationDelay: `${600 + (index * 100)}ms`}}>
                      <Link 
                        to={`/category/${category.slug}`}
                        className="flex justify-between items-center p-2 border-2 border-neubrutalism-dark hover:bg-neubrutalism-light transition-colors group"
                      >
                        <span className="font-medium group-hover:translate-x-1 transition-transform">
                          {category.name}
                        </span>
                        <span className="bg-neubrutalism-teal text-white text-xs px-2 py-1 rounded-sm">
                          {posts.filter(post => post.category.id === category.id).length}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </section>

        {/* Popular Posts Section */}
        <section className="py-12 bg-neubrutalism-dark mb-16 animate-fade-in" style={{animationDelay: '600ms'}}>
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center gap-8 mb-8">
              <h2 className="text-3xl font-display text-white flex items-center gap-2">
                <Star className="text-neubrutalism-teal animate-wiggle" />
                <span>Popular Articles</span>
              </h2>
              <div className="h-1 flex-grow bg-neubrutalism-teal hidden md:block"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {popularPosts.map((post, index) => (
                <div key={post.id} className="bg-white border-2 border-black p-4 transform hover:translate-y-[-5px] hover:rotate-1 transition-all animate-fade-in" style={{animationDelay: `${700 + (index * 100)}ms`}}>
                  <div className="relative mb-3">
                    <Link to={`/post/${post.slug}`}>
                      <img 
                        src={post.featuredImage} 
                        alt={post.title} 
                        className="w-full h-48 object-cover"
                      />
                    </Link>
                    <div className="absolute top-2 right-2 bg-neubrutalism-teal text-white text-xs px-2 py-1 border border-black">
                      #{index + 1} Popular
                    </div>
                  </div>
                  <h3 className="text-lg font-display mb-2">
                    <Link to={`/post/${post.slug}`} className="hover:text-neubrutalism-teal transition-colors">
                      {post.title}
                    </Link>
                  </h3>
                  <div className="flex justify-between items-center text-xs text-neubrutalism-gray">
                    <div className="flex items-center gap-1">
                      <Calendar size={12} />
                      <span>
                        {new Date(post.createdAt).toLocaleDateString('en-US', {
                          month: 'short',
                          day: 'numeric'
                        })}
                      </span>
                    </div>
                    <div className="flex items-center gap-1">
                      <BookOpen size={12} />
                      <span>{post.readTime} min</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Stats Section */}
        <section className="container mx-auto px-4 mb-16 animate-fade-in" style={{animationDelay: '800ms'}}>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display mb-4 inline-block relative">
              <span className="relative z-10">Blog Stats</span>
              <div className="absolute bottom-0 left-0 w-full h-3 bg-neubrutalism-teal -z-0"></div>
            </h2>
            <p className="text-neubrutalism-gray max-w-2xl mx-auto">
              Tracking our growth and impact in the world of brutalist design and beyond.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-white border-4 border-neubrutalism-dark shadow-brutal p-6 text-center transform hover:rotate-1 transition-all hover:bg-neubrutalism-light/50">
              <div className="text-4xl font-display mb-2 text-neubrutalism-teal">
                {posts.length}
              </div>
              <div className="font-bold">Total Articles</div>
            </div>
            
            <div className="bg-white border-4 border-neubrutalism-dark shadow-brutal p-6 text-center transform hover:rotate-[-1deg] transition-all hover:bg-neubrutalism-light/50">
              <div className="text-4xl font-display mb-2 text-neubrutalism-teal">
                {categories.length}
              </div>
              <div className="font-bold">Categories</div>
            </div>
            
            <div className="bg-white border-4 border-neubrutalism-dark shadow-brutal p-6 text-center transform hover:rotate-1 transition-all hover:bg-neubrutalism-light/50">
              <div className="text-4xl font-display mb-2 text-neubrutalism-teal">
                {posts.reduce((total, post) => total + post.comments.length, 0)}
              </div>
              <div className="font-bold">Comments</div>
            </div>
            
            <div className="bg-white border-4 border-neubrutalism-dark shadow-brutal p-6 text-center transform hover:rotate-[-1deg] transition-all hover:bg-neubrutalism-light/50">
              <div className="text-4xl font-display mb-2 text-neubrutalism-teal">
                {Math.floor(Math.random() * 10000) + 5000}
              </div>
              <div className="font-bold">Monthly Readers</div>
            </div>
          </div>
        </section>
        
        {/* Call to Action */}
        <section className="py-16 bg-neubrutalism-teal mb-16 animate-fade-in" style={{animationDelay: '900ms'}}>
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-display text-white mb-6">
              Ready to join the conversation?
            </h2>
            <p className="text-xl text-white opacity-90 mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter and never miss a new article, tutorial, or design trend.
            </p>
            <a 
              href="#newsletter" 
              className="inline-block px-8 py-3 bg-white text-neubrutalism-dark font-bold border-2 border-neubrutalism-dark shadow-brutal hover:translate-y-[-2px] hover:rotate-1 transition-all"
            >
              Subscribe Now
            </a>
          </div>
        </section>

        {/* Trending Topics */}
        <section className="container mx-auto px-4 mb-16 animate-fade-in" style={{animationDelay: '1000ms'}}>
          <div className="flex flex-col md:flex-row items-center gap-6 mb-8">
            <h2 className="text-3xl font-display flex items-center gap-2">
              <TrendingUp className="text-neubrutalism-teal animate-float" />
              <span>Trending Topics</span>
            </h2>
            <div className="h-1 flex-grow bg-neubrutalism-teal hidden md:block"></div>
          </div>
          
          <div className="flex flex-wrap gap-3 justify-center">
            {Array.from({length: 8}).map((_, i) => {
              const topics = [
                "Neubrutalism", "Web Design", "UI Trends", "Typography", 
                "Digital Art", "Minimalism", "Color Theory", "UX Research"
              ];
              const sizes = ["text-sm", "text-base", "text-lg", "text-xl"];
              
              return (
                <span 
                  key={i} 
                  className={`${sizes[i % sizes.length]} px-4 py-2 bg-white border-2 border-neubrutalism-dark shadow-brutal hover:bg-neubrutalism-light transition-all hover:translate-y-[-2px] hover:rotate-[1deg] inline-block animate-fade-in`}
                  style={{animationDelay: `${1100 + (i * 100)}ms`}}
                >
                  #{topics[i]}
                </span>
              );
            })}
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
