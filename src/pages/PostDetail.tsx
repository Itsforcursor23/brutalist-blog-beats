
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CommentList from '@/components/CommentList';
import CommentForm from '@/components/CommentForm';
import Newsletter from '@/components/Newsletter';
import { getPostBySlug, getAllPosts } from '@/lib/mockData';
import { Calendar, Clock, User, Tag } from 'lucide-react';

const PostDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState(getPostBySlug(slug || ''));
  const [relatedPosts, setRelatedPosts] = useState(
    getAllPosts()
      .filter(p => p.category.id === post?.category.id && p.id !== post?.id)
      .slice(0, 3)
  );

  useEffect(() => {
    window.scrollTo(0, 0);
    setPost(getPostBySlug(slug || ''));
  }, [slug]);

  useEffect(() => {
    if (post) {
      setRelatedPosts(
        getAllPosts()
          .filter(p => p.category.id === post.category.id && p.id !== post.id)
          .slice(0, 3)
      );
    }
  }, [post]);

  const handleCommentAdded = () => {
    // In a real app, we would fetch the updated post
    // For now, let's just simulate a refresh
    setPost(getPostBySlug(slug || ''));
  };

  if (!post) {
    return (
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow container mx-auto px-4 py-8">
          <div className="bg-white border-4 border-neubrutalism-dark shadow-brutal p-6">
            <h2 className="text-2xl font-display mb-4">Post Not Found</h2>
            <p className="mb-4">Sorry, the post you're looking for doesn't exist.</p>
            <Link to="/" className="neu-button inline-block">
              Back to Home
            </Link>
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
        {/* Hero Section */}
        <section className="relative h-[40vh] md:h-[60vh] bg-neubrutalism-dark">
          <div className="absolute inset-0">
            <img 
              src={post.featuredImage} 
              alt={post.title} 
              className="w-full h-full object-cover opacity-60"
            />
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="container mx-auto px-4 text-center">
              <Link 
                to={`/category/${post.category.slug}`} 
                className="inline-block category-badge mb-4 animate-bounce-in"
              >
                {post.category.name}
              </Link>
              <h1 className="text-3xl md:text-5xl font-display text-white mb-4 drop-shadow-[4px_4px_0px_rgba(0,0,0,0.8)] animate-fade-in">
                {post.title}
              </h1>
              <div className="flex flex-wrap justify-center gap-4 text-white font-medium animate-fade-in" style={{animationDelay: '200ms'}}>
                <div className="flex items-center gap-2">
                  <Calendar size={18} />
                  <span>
                    {new Date(post.createdAt).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'short',
                      day: 'numeric'
                    })}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock size={18} />
                  <span>{post.readTime} min read</span>
                </div>
                <div className="flex items-center gap-2">
                  <User size={18} />
                  <span>{post.author.name}</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Content Section */}
        <section className="container mx-auto px-4 py-12">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-8/12">
              <article className="bg-white border-4 border-neubrutalism-dark shadow-brutal mb-8 p-6 md:p-8">
                <div 
                  className="prose prose-lg max-w-none prose-headings:font-display prose-headings:text-neubrutalism-dark prose-a:text-neubrutalism-teal prose-a:font-bold prose-a:no-underline hover:prose-a:underline prose-blockquote:border-neubrutalism-teal prose-blockquote:bg-neubrutalism-light/50 prose-blockquote:p-4 prose-blockquote:border-l-4 prose-blockquote:font-medium"
                  dangerouslySetInnerHTML={{ __html: post.content }}
                />
                
                <div className="border-t-2 border-dashed border-neubrutalism-gray/30 mt-8 pt-6">
                  <div className="flex items-center gap-2 mb-1">
                    <Tag size={18} />
                    <span className="font-bold">Category:</span>
                  </div>
                  <Link 
                    to={`/category/${post.category.slug}`} 
                    className="category-badge"
                  >
                    {post.category.name}
                  </Link>
                </div>
              </article>
              
              <div className="bg-white border-4 border-neubrutalism-dark shadow-brutal mb-8 p-6">
                <div className="flex items-center gap-4">
                  <img 
                    src={post.author.avatar} 
                    alt={post.author.name} 
                    className="w-16 h-16 md:w-24 md:h-24 rounded-full border-4 border-neubrutalism-dark"
                  />
                  <div>
                    <h3 className="text-xl font-bold mb-1">{post.author.name}</h3>
                    <p className="text-neubrutalism-gray">{post.author.bio}</p>
                  </div>
                </div>
              </div>
              
              <CommentList comments={post.comments} />
              <CommentForm postId={post.id} onCommentAdded={handleCommentAdded} />
            </div>
            
            <aside className="md:w-4/12">
              <Newsletter />
              
              {relatedPosts.length > 0 && (
                <div className="bg-white border-4 border-neubrutalism-dark shadow-brutal p-6 mb-8">
                  <h3 className="text-xl font-display mb-4">Related Posts</h3>
                  <div className="space-y-6">
                    {relatedPosts.map(relatedPost => (
                      <div 
                        key={relatedPost.id} 
                        className="flex gap-3 pb-4 border-b-2 border-dashed border-neubrutalism-gray/30 last:border-b-0 last:pb-0"
                      >
                        <Link 
                          to={`/post/${relatedPost.slug}`} 
                          className="flex-shrink-0"
                        >
                          <img
                            src={relatedPost.featuredImage}
                            alt={relatedPost.title}
                            className="w-20 h-20 object-cover border-2 border-neubrutalism-dark"
                          />
                        </Link>
                        <div>
                          <h4 className="font-bold mb-1 line-clamp-2">
                            <Link 
                              to={`/post/${relatedPost.slug}`}
                              className="hover:text-neubrutalism-teal transition-colors"
                            >
                              {relatedPost.title}
                            </Link>
                          </h4>
                          <div className="flex items-center text-xs text-neubrutalism-gray">
                            <Calendar size={12} className="mr-1" />
                            <span>
                              {new Date(relatedPost.createdAt).toLocaleDateString('en-US', {
                                year: 'numeric',
                                month: 'short',
                                day: 'numeric'
                              })}
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              
              <div className="bg-white border-4 border-neubrutalism-dark shadow-brutal p-6">
                <h3 className="text-xl font-display mb-4">Share This Post</h3>
                <div className="flex gap-3">
                  <a 
                    href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent(post.title)}`} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-[#1DA1F2] text-white text-center py-2 border-2 border-neubrutalism-dark shadow-brutal hover:translate-y-[-2px] transition-all"
                  >
                    Twitter
                  </a>
                  <a 
                    href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-[#4267B2] text-white text-center py-2 border-2 border-neubrutalism-dark shadow-brutal hover:translate-y-[-2px] transition-all"
                  >
                    Facebook
                  </a>
                  <a 
                    href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-[#0e76a8] text-white text-center py-2 border-2 border-neubrutalism-dark shadow-brutal hover:translate-y-[-2px] transition-all"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>
            </aside>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default PostDetail;
