
import React from 'react';
import { Comment } from '@/lib/mockData';

interface CommentListProps {
  comments: Comment[];
}

const CommentList: React.FC<CommentListProps> = ({ comments }) => {
  if (comments.length === 0) {
    return (
      <div className="bg-white border-4 border-neubrutalism-dark shadow-brutal p-6 mb-8">
        <h3 className="text-2xl font-display mb-4">Comments</h3>
        <p className="text-neubrutalism-gray">No comments yet. Be the first to comment!</p>
      </div>
    );
  }

  return (
    <div className="bg-white border-4 border-neubrutalism-dark shadow-brutal p-6 mb-8">
      <h3 className="text-2xl font-display mb-6">
        Comments ({comments.length})
      </h3>
      
      <div className="space-y-6">
        {comments.map((comment, index) => (
          <div 
            key={comment.id} 
            className={`
              flex gap-4 pb-6
              ${index < comments.length - 1 ? 'border-b-2 border-dashed border-neubrutalism-gray/30' : ''}
            `}
          >
            <div className="flex-shrink-0">
              <img
                src={comment.avatar}
                alt={comment.author}
                className="w-10 h-10 rounded-full border-2 border-neubrutalism-dark"
              />
            </div>
            
            <div className="flex-grow">
              <div className="flex flex-wrap items-baseline gap-x-2 mb-1">
                <h4 className="font-bold">{comment.author}</h4>
                <span className="text-xs text-neubrutalism-gray">
                  {new Date(comment.createdAt).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric'
                  })}
                </span>
              </div>
              
              <p className="text-neubrutalism-gray">{comment.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommentList;
