
import React, { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import { Comment } from '@/lib/mockData';

interface CommentFormProps {
  postId: string;
  onCommentAdded: () => void;
}

const CommentForm: React.FC<CommentFormProps> = ({ postId, onCommentAdded }) => {
  const { toast } = useToast();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [comment, setComment] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name.trim() || !email.trim() || !comment.trim()) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive"
      });
      return;
    }
    
    setIsSubmitting(true);
    
    // Create a new comment object
    const newComment: Comment = {
      id: `comment-${Date.now()}`,
      postId,
      author: name,
      avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${name}`,
      content: comment,
      createdAt: new Date().toISOString(),
    };
    
    // Simulate API call
    setTimeout(() => {
      // Find the post in localStorage or create initial storage
      const storedComments = localStorage.getItem('blog-comments');
      const commentsMap = storedComments ? JSON.parse(storedComments) : {};
      
      // Update or initialize comments array for this post
      const postComments = commentsMap[postId] || [];
      commentsMap[postId] = [newComment, ...postComments];
      
      // Save back to localStorage
      localStorage.setItem('blog-comments', JSON.stringify(commentsMap));
      
      toast({
        title: "Comment submitted!",
        description: "Your comment has been added to this post."
      });
      
      setName('');
      setEmail('');
      setComment('');
      setIsSubmitting(false);
      onCommentAdded();
    }, 1000);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white border-4 border-neubrutalism-dark shadow-brutal p-6 mb-8 animate-fade-in">
      <h3 className="text-2xl font-display mb-4">Leave a Comment</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div>
          <label htmlFor="name" className="block mb-2 font-bold">
            Name
          </label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="neu-input"
            required
          />
        </div>
        
        <div>
          <label htmlFor="email" className="block mb-2 font-bold">
            Email
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="neu-input"
            required
          />
        </div>
      </div>
      
      <div className="mb-4">
        <label htmlFor="comment" className="block mb-2 font-bold">
          Comment
        </label>
        <textarea
          id="comment"
          rows={5}
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          className="neu-input resize-none"
          required
        />
      </div>
      
      <button 
        type="submit" 
        className="neu-button hover:animate-wiggle"
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Submitting...' : 'Post Comment'}
      </button>
    </form>
  );
};

export default CommentForm;
