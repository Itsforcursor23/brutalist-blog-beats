
import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, MessageSquare } from 'lucide-react';
import { Post } from '@/lib/mockData';

interface PostCardProps {
  post: Post;
  featured?: boolean;
}

const PostCard: React.FC<PostCardProps> = ({ post, featured = false }) => {
  const formattedDate = new Date(post.createdAt).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });

  const commentCount = post.comments.length;

  if (featured) {
    return (
      <article className="bg-white border-4 border-neubrutalism-dark shadow-brutal-2xl mb-16 transform hover:translate-y-[-5px] hover:rotate-[0.5deg] transition-all duration-300 overflow-hidden">
        <div className="md:flex">
          <div className="md:w-1/2 h-[300px] md:h-auto relative">
            <img 
              src={post.featuredImage} 
              alt={post.title} 
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-[1.03]"
            />
            <div className="absolute top-4 left-4">
              <Link 
                to={`/category/${post.category.slug}`} 
                className="category-badge"
              >
                {post.category.name}
              </Link>
            </div>
          </div>
          <div className="md:w-1/2 p-6 md:p-8 flex flex-col">
            <h2 className="text-2xl md:text-3xl font-display mb-4">
              <Link to={`/post/${post.slug}`} className="hover:text-neubrutalism-teal transition-colors">
                {post.title}
              </Link>
            </h2>
            <div className="flex items-center gap-4 text-sm mb-4 text-neubrutalism-gray">
              <div className="flex items-center gap-1">
                <Calendar size={14} />
                <span>{formattedDate}</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock size={14} />
                <span>{post.readTime} min read</span>
              </div>
              <div className="flex items-center gap-1">
                <MessageSquare size={14} />
                <span>{commentCount} comment{commentCount !== 1 ? 's' : ''}</span>
              </div>
            </div>
            <p className="mb-6 text-neubrutalism-gray flex-grow">{post.excerpt}</p>
            <div className="flex justify-between items-center mt-auto">
              <div className="flex items-center gap-3">
                <img 
                  src={post.author.avatar} 
                  alt={post.author.name} 
                  className="w-10 h-10 rounded-full border-2 border-neubrutalism-dark"
                />
                <span className="font-medium">{post.author.name}</span>
              </div>
              <Link 
                to={`/post/${post.slug}`} 
                className="neu-button"
              >
                Read More
              </Link>
            </div>
          </div>
        </div>
      </article>
    );
  }

  return (
    <article className="neu-card group h-full flex flex-col">
      <div className="relative mb-4 overflow-hidden border-2 border-neubrutalism-dark">
        <Link to={`/post/${post.slug}`}>
          <img 
            src={post.featuredImage}
            alt={post.title}
            className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </Link>
        <div className="absolute top-3 left-3">
          <Link 
            to={`/category/${post.category.slug}`} 
            className="category-badge"
          >
            {post.category.name}
          </Link>
        </div>
      </div>
      
      <h3 className="text-xl font-display mb-3">
        <Link to={`/post/${post.slug}`} className="hover:text-neubrutalism-teal transition-colors">
          {post.title}
        </Link>
      </h3>
      
      <div className="flex items-center gap-4 text-xs mb-3 text-neubrutalism-gray">
        <div className="flex items-center gap-1">
          <Calendar size={12} />
          <span>{formattedDate}</span>
        </div>
        <div className="flex items-center gap-1">
          <Clock size={12} />
          <span>{post.readTime} min</span>
        </div>
      </div>
      
      <p className="text-sm text-neubrutalism-gray mb-4 flex-grow line-clamp-3">
        {post.excerpt}
      </p>
      
      <div className="flex justify-between items-center mt-auto pt-4 border-t-2 border-dashed border-neubrutalism-gray/30">
        <div className="flex items-center gap-2">
          <img 
            src={post.author.avatar} 
            alt={post.author.name} 
            className="w-8 h-8 rounded-full border-2 border-neubrutalism-dark"
          />
          <span className="text-sm font-medium">{post.author.name}</span>
        </div>
        <div className="flex items-center gap-1 text-xs">
          <MessageSquare size={12} />
          <span>{commentCount}</span>
        </div>
      </div>
    </article>
  );
};

export default PostCard;
