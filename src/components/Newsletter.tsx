
import React, { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import { Send } from 'lucide-react';

const Newsletter = () => {
  const { toast } = useToast();
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email.trim()) {
      toast({
        title: "Error",
        description: "Please enter your email address",
        variant: "destructive"
      });
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Success!",
        description: "You've been subscribed to our newsletter."
      });
      
      setEmail('');
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <div className="bg-neubrutalism-teal border-4 border-neubrutalism-dark shadow-brutal-xl p-6 mb-8 transform rotate-[-1deg]">
      <h3 className="text-xl font-display text-white mb-4 transform rotate-[1deg]">
        Join Our Newsletter
      </h3>
      <p className="text-white text-sm mb-4 transform rotate-[1deg]">
        Get the latest posts and updates delivered straight to your inbox.
      </p>
      
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 transform rotate-[1deg]">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your email address"
          className="neu-input flex-grow"
          required
        />
        <button 
          type="submit" 
          className="bg-neubrutalism-dark text-white border-2 border-black px-4 py-2 font-bold shadow-brutal hover:translate-y-[-2px] hover:translate-x-[-2px] active:translate-y-[2px] active:translate-x-[2px] active:shadow-none transition-all flex items-center justify-center gap-2"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Subscribing...' : (
            <>
              <span>Subscribe</span>
              <Send size={16} />
            </>
          )}
        </button>
      </form>
    </div>
  );
};

export default Newsletter;
