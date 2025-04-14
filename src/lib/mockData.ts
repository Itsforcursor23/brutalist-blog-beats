
export interface Author {
  id: string;
  name: string;
  avatar: string;
  bio: string;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
}

export interface Comment {
  id: string;
  postId: string;
  author: string;
  authorEmail: string;
  content: string;
  createdAt: string;
  avatar: string;
}

export interface Post {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  featuredImage: string;
  author: Author;
  category: Category;
  createdAt: string;
  readTime: number;
  comments: Comment[];
}

export const authors: Author[] = [
  {
    id: "1",
    name: "Alex Morgan",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop",
    bio: "Digital nomad and tech enthusiast. Writing about web development, design trends, and the future of technology."
  },
  {
    id: "2",
    name: "Sasha Lee",
    avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200&auto=format&fit=crop",
    bio: "UX designer by day, writer by night. Exploring the intersection of design, psychology, and everyday life."
  }
];

export const categories: Category[] = [
  {
    id: "1",
    name: "Design",
    slug: "design",
    description: "Articles about UI/UX design, design systems, and visual trends."
  },
  {
    id: "2",
    name: "Technology",
    slug: "technology",
    description: "The latest in tech news, programming tutorials, and digital innovation."
  },
  {
    id: "3",
    name: "Lifestyle",
    slug: "lifestyle",
    description: "Insights on remote work, productivity, and balancing the digital life."
  }
];

export const posts: Post[] = [
  {
    id: "1",
    title: "The Rise of Neubrutalism in Web Design",
    slug: "rise-neubrutalism-web-design",
    excerpt: "Exploring how the bold, raw aesthetics of neubrutalism are shaping modern web experiences and breaking design norms.",
    content: `
      <h2>What is Neubrutalism?</h2>
      <p>Neubrutalism (or neo-brutalism) is a design trend that embraces a raw, unpolished aesthetic with bold colors, sharp contrasts, and minimal styling. It's characterized by chunky elements, visible borders, and an overall "undesigned" feel that paradoxically requires careful design consideration.</p>
      
      <p>Unlike the sleek, polished interfaces that dominated the 2010s, neubrutalist websites feel intentionally crude and direct. This approach strips away unnecessary ornamentation and focuses on functionality with an expressive twist.</p>
      
      <h2>Key Elements of Neubrutalist Design</h2>
      <ul>
        <li><strong>Bold Typography:</strong> Oversized, mix-matched fonts that demand attention</li>
        <li><strong>Raw Elements:</strong> Unrefined components with hard edges and visible borders</li>
        <li><strong>High-Contrast Colors:</strong> Vibrant, sometimes clashing color combinations</li>
        <li><strong>Asymmetry:</strong> Intentionally imperfect layouts and tilted elements</li>
        <li><strong>Anti-establishment Feel:</strong> Rejection of conventional design systems</li>
      </ul>
      
      <h2>Why It's Gaining Popularity</h2>
      <p>In an era of homogenized website templates and cookie-cutter designs, neubrutalism offers a fresh, authentic alternative. It allows designers to break free from constraints and create memorable experiences that stand out in users' minds.</p>
      
      <p>The style also performs well technically - with simple shapes and minimal effects, neubrutalist sites often load quickly and work seamlessly across devices. The bold visuals create strong brand recognition, making these designs particularly effective for creative industries and startups looking to differentiate themselves.</p>
      
      <h2>Implementing Neubrutalism</h2>
      <p>To incorporate neubrutalist elements into your designs:</p>
      <ol>
        <li>Embrace imperfection and randomness</li>
        <li>Use chunky borders and exaggerated shadows</li>
        <li>Choose contrasting colors that create tension</li>
        <li>Mix unexpected typefaces for visual interest</li>
        <li>Keep interactions simple but surprising</li>
      </ol>
      
      <h2>The Future of the Trend</h2>
      <p>While some design trends come and go quickly, neubrutalism has staying power because it's more than an aesthetic choice—it's a philosophy. It represents a return to focus on content, functionality, and authentic expression. As more designers and brands grow tired of predictable interfaces, expect to see neubrutalism continue to evolve and influence the digital landscape.</p>
    `,
    featuredImage: "https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?q=80&w=1200&auto=format&fit=crop",
    author: authors[0],
    category: categories[0],
    createdAt: "2023-06-15T10:30:00Z",
    readTime: 6,
    comments: [
      {
        id: "101",
        postId: "1",
        author: "Jamie Wilson",
        authorEmail: "jamie@example.com",
        content: "Love this breakdown of neubrutalism! I've been seeing it everywhere lately and wondering about the philosophy behind it. The raw aesthetic feels so refreshing compared to the ultra-polished designs we've gotten used to.",
        createdAt: "2023-06-16T14:25:00Z",
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=100&auto=format&fit=crop"
      },
      {
        id: "102",
        postId: "1",
        author: "Taylor Kim",
        authorEmail: "taylor@example.com",
        content: "I'm implementing some of these principles in my current project. The client was hesitant at first, but now they love how their site stands out from competitors. It's all about finding that balance between raw aesthetics and usability.",
        createdAt: "2023-06-17T09:12:00Z",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&auto=format&fit=crop"
      }
    ]
  },
  {
    id: "2",
    title: "Building a React App with Neubrutalist Principles",
    slug: "react-app-neubrutalist-principles",
    excerpt: "A step-by-step guide to applying neubrutalist design to your React applications using modern CSS techniques.",
    content: `
      <h2>Setting the Stage for Neubrutalism in React</h2>
      <p>React's component-based architecture provides the perfect foundation for implementing neubrutalist design. By creating modular, reusable components with distinctive styling, you can build a cohesive neubrutalist interface that's both functional and visually striking.</p>
      
      <h2>Step 1: Establish Your Color Palette</h2>
      <p>Start by selecting bold, contrasting colors that will form the foundation of your design system. Neubrutalism often features:</p>
      <ul>
        <li>Rich blacks for text and borders</li>
        <li>Bright, almost neon accent colors</li>
        <li>Simple backgrounds (white or light colors)</li>
        <li>Occasional pops of unexpected colors</li>
      </ul>
      
      <p>In your React project, define these as CSS variables or in your styling system:</p>
      <pre>
:root {
  --nb-black: #222831;
  --nb-gray: #393E46;
  --nb-teal: #00ADB5;
  --nb-light: #EEEEEE;
}
      </pre>
      
      <h2>Step 2: Create Core Components</h2>
      <p>Build a library of basic components that embody neubrutalist principles:</p>
      
      <h3>Buttons</h3>
      <pre>
const BrutalButton = ({ children, ...props }) => {
  return (
    <button 
      className="brutal-button"
      {...props}
    >
      {children}
    </button>
  );
};

// In your CSS:
.brutal-button {
  background: var(--nb-teal);
  color: var(--nb-light);
  border: 3px solid var(--nb-black);
  box-shadow: 4px 4px 0 var(--nb-black);
  padding: 0.5rem 1rem;
  font-weight: bold;
  transform: translateY(0);
  transition: transform 0.2s, box-shadow 0.2s;
}

.brutal-button:hover {
  transform: translateY(-2px);
  box-shadow: 6px 6px 0 var(--nb-black);
}

.brutal-button:active {
  transform: translateY(2px);
  box-shadow: 2px 2px 0 var(--nb-black);
}
      </pre>
      
      <h3>Cards</h3>
      <pre>
const BrutalCard = ({ children, ...props }) => {
  return (
    <div 
      className="brutal-card"
      {...props}
    >
      {children}
    </div>
  );
};

// In your CSS:
.brutal-card {
  background: white;
  border: 3px solid var(--nb-black);
  box-shadow: 8px 8px 0 var(--nb-black);
  padding: 1.5rem;
  transform: rotate(-1deg);
  transition: transform 0.3s;
}

.brutal-card:hover {
  transform: rotate(0deg) translateY(-5px);
}
      </pre>
      
      <h2>Step 3: Typography Choices</h2>
      <p>Select typefaces that complement your neubrutalist approach:</p>
      <ul>
        <li>Chunky, bold sans-serifs for headings</li>
        <li>Monospace fonts for that raw, technical feel</li>
        <li>Clean, readable fonts for body text</li>
      </ul>
      
      <h2>Step 4: Animations and Interactions</h2>
      <p>Neubrutalist interactions should feel intentional and slightly exaggerated:</p>
      <ul>
        <li>Use CSS transforms for hover states</li>
        <li>Implement click animations that feel physical</li>
        <li>Don't be afraid of slightly janky transitions</li>
      </ul>
      
      <h2>Step 5: Layout Structure</h2>
      <p>Create layouts that embrace asymmetry and intentional misalignment:</p>
      <ul>
        <li>Use CSS Grid with uneven columns</li>
        <li>Incorporate negative margins and rotations</li>
        <li>Break the grid occasionally with oversized elements</li>
      </ul>
      
      <h2>Real-World Example</h2>
      <p>Here's how a simple blog post component might look:</p>
      <pre>
const BlogPost = ({ title, excerpt, image }) => {
  return (
    <article className="brutal-blog-post">
      <div className="post-image-container">
        <img src={image} alt={title} className="post-image" />
      </div>
      <div className="post-content">
        <h2>{title}</h2>
        <p>{excerpt}</p>
        <BrutalButton>Read More</BrutalButton>
      </div>
    </article>
  );
};

// In your CSS:
.brutal-blog-post {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  margin-bottom: 2rem;
  position: relative;
}

.post-image-container {
  border: 3px solid var(--nb-black);
  transform: rotate(1deg);
  overflow: hidden;
}

.post-image {
  width: 100%;
  height: 300px;
  object-fit: cover;
  transform: rotate(-1deg) scale(1.05);
  transition: transform 0.3s;
}

.brutal-blog-post:hover .post-image {
  transform: rotate(0) scale(1.1);
}

.post-content {
  background: white;
  border: 3px solid var(--nb-black);
  padding: 1.5rem;
  box-shadow: 6px 6px 0 var(--nb-black);
  z-index: 1;
  margin-top: -2rem;
  margin-left: 1rem;
}

@media (min-width: 768px) {
  .brutal-blog-post {
    grid-template-columns: 2fr 3fr;
  }
  
  .post-content {
    margin-top: 2rem;
    margin-left: -2rem;
  }
}
      </pre>
      
      <h2>Conclusion</h2>
      <p>Neubrutalism in React is about creating distinctive interfaces that reject the sameness of modern web design. By combining bold styling choices with thoughtful component design, you can create applications that are both functional and visually unforgettable.</p>
      
      <p>Remember that accessibility should still be a priority - make sure your color contrasts meet WCAG guidelines and that your interactive elements are properly labeled and navigable via keyboard.</p>
    `,
    featuredImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200&auto=format&fit=crop",
    author: authors[0],
    category: categories[1],
    createdAt: "2023-07-22T14:15:00Z",
    readTime: 8,
    comments: [
      {
        id: "201",
        postId: "2",
        author: "Morgan Zhang",
        authorEmail: "morgan@example.com",
        content: "This is exactly what I needed! I've been trying to implement this style in my React projects but was struggling with the right approach. The component examples are super helpful.",
        createdAt: "2023-07-23T08:45:00Z",
        avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=100&auto=format&fit=crop"
      },
      {
        id: "202",
        postId: "2",
        author: "Jordan Casey",
        authorEmail: "jordan@example.com",
        content: "I appreciate the attention to accessibility in this article. It's easy to get caught up in the visual aspects and forget about making sure everyone can use our interfaces. Great balance of style and function here.",
        createdAt: "2023-07-24T16:30:00Z",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=100&auto=format&fit=crop"
      },
      {
        id: "203",
        postId: "2",
        author: "Alex Lee",
        authorEmail: "alexl@example.com",
        content: "Just implemented some of these techniques on a client project and they loved it! The shadows and border effects really make the interface pop. One tip I'd add: use CSS custom properties for the transform values too, makes it easier to maintain consistent interactions.",
        createdAt: "2023-07-25T11:15:00Z",
        avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=100&auto=format&fit=crop"
      }
    ]
  },
  {
    id: "3",
    title: "Digital Minimalism: Finding Balance in a Connected World",
    slug: "digital-minimalism-finding-balance",
    excerpt: "Strategies for maintaining focus and well-being in an age of constant digital distraction and information overload.",
    content: `
      <h2>The Noise of the Digital Age</h2>
      <p>We live in an unprecedented era of connectivity. Our devices ping, notify, and demand our attention at all hours. Social media, news, entertainment, work communications—all compete fiercely for our limited attention. The result? A growing sense of digital fatigue that affects our focus, creativity, and well-being.</p>
      
      <p>Digital minimalism offers a thoughtful approach to technology use, asking us to be more intentional about the tools we use and how we use them.</p>
      
      <h2>Core Principles of Digital Minimalism</h2>
      
      <h3>1. Intentional Tool Selection</h3>
      <p>Digital minimalists carefully choose which technologies to incorporate into their lives. Rather than adopting tools because "everyone else is" or because they promise minor conveniences, they select only those that align with their deepest values.</p>
      
      <p>Ask yourself: Does this app/platform/tool genuinely support what matters most to me? Or is it simply a Trojan horse, offering small benefits while extracting my attention and data?</p>
      
      <h3>2. Optimization Over Maximization</h3>
      <p>The goal isn't to use technology as much as possible but as well as possible. This means configuring tools to serve your needs rather than letting their default settings determine your behavior.</p>
      
      <p>For example: Rather than accepting all notifications, customize them rigorously. Rather than scrolling mindlessly, set specific times for social media use with clear purposes.</p>
      
      <h3>3. Embracing Digital Downtime</h3>
      <p>Regular periods without screens aren't just nice—they're necessary for deep thinking, creativity, and human connection. Digital minimalists schedule tech-free times and spaces in their lives.</p>
      
      <p>Consider: Device-free meals, screen-free Sundays, no-phone walks, or a digital sunset an hour before bedtime.</p>
      
      <h2>Practical Steps Toward Digital Minimalism</h2>
      
      <h3>Perform a Digital Declutter</h3>
      <p>Take 30 days to step back from optional technologies. This isn't about permanent abandonment but creating space to reassess your relationship with these tools.</p>
      <ol>
        <li>Define "optional" (typically social media, entertainment, news sites)</li>
        <li>Take a complete break for 30 days</li>
        <li>Rediscover offline activities that bring value</li>
        <li>Reintroduce technologies selectively, with specific guidelines</li>
      </ol>
      
      <h3>Establish Technology Rules</h3>
      <p>Create personal operating procedures for your digital life:</p>
      <ul>
        <li>No devices during the first and last hour of the day</li>
        <li>Batch processing emails at set times rather than constant checking</li>
        <li>Turning off all non-essential notifications</li>
        <li>Using tools like Freedom or Focus to block distracting sites during work</li>
      </ul>
      
      <h3>Curate Information Sources</h3>
      <p>The quality of information you consume shapes your thinking:</p>
      <ul>
        <li>Subscribe to thoughtfully curated newsletters instead of endless social feeds</li>
        <li>Use RSS readers to follow specific sources rather than algorithmic recommendations</li>
        <li>Consider physical newspapers or magazines for important news</li>
        <li>Create reading systems that favor books over endless online articles</li>
      </ul>
      
      <h3>Build High-Quality Leisure Activities</h3>
      <p>Replace passive consumption with active engagement:</p>
      <ul>
        <li>Develop skills that require sustained attention (musical instruments, crafts)</li>
        <li>Join groups or clubs that meet in person</li>
        <li>Embrace physical activities without digital tracking</li>
        <li>Schedule regular completely unplugged experiences in nature</li>
      </ul>
      
      <h2>Digital Minimalism in Practice</h2>
      <p>The goal isn't digital asceticism but an intentional relationship with technology. Some examples of balanced approaches:</p>
      <ul>
        <li><strong>Social media:</strong> Using only on desktop computers during set times rather than having constant mobile access</li>
        <li><strong>Communication:</strong> Setting expectations about response times and availability with colleagues and friends</li>
        <li><strong>Content:</strong> Creating "to-read" systems for articles rather than consuming them reactively</li>
        <li><strong>Attention management:</strong> Using the "Pomodoro Technique" for focused work sessions without digital interruptions</li>
      </ul>
      
      <h2>Finding Your Balance</h2>
      <p>Digital minimalism isn't about one-size-fits-all rules but discovering what works for your specific needs and values. The key questions to continually ask yourself:</p>
      <ol>
        <li>Does this technology truly serve what I care about most?</li>
        <li>Am I using this tool, or is it using me?</li>
        <li>Is there a better way to accomplish what matters?</li>
      </ol>
      
      <p>By approaching our digital lives with intention and regularly reassessing our habits, we can harness technology's benefits while avoiding its pitfalls—staying connected without becoming entangled.</p>
    `,
    featuredImage: "https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?q=80&w=1200&auto=format&fit=crop",
    author: authors[1],
    category: categories[2],
    createdAt: "2023-08-05T09:45:00Z",
    readTime: 7,
    comments: [
      {
        id: "301",
        postId: "3",
        author: "Riley Patel",
        authorEmail: "riley@example.com",
        content: "This article couldn't have come at a better time for me. I've been feeling so overwhelmed by constant notifications and the pressure to always be available online. I'm going to try implementing some of these strategies, starting with no-phone dinners and a digital sunset routine.",
        createdAt: "2023-08-06T13:20:00Z",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=100&auto=format&fit=crop"
      },
      {
        id: "302",
        postId: "3",
        author: "Casey Jordan",
        authorEmail: "caseyj@example.com",
        content: "I did a digital declutter last year and it was transformative. The first week was tough (serious FOMO!), but after that, I started noticing how much more present I felt in my daily life. I ended up not reinstalling most social apps and now just check them occasionally via browser. Highly recommend trying the 30-day experiment!",
        createdAt: "2023-08-07T10:15:00Z",
        avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=100&auto=format&fit=crop"
      }
    ]
  },
  {
    id: "4",
    title: "Color Psychology in Interface Design",
    slug: "color-psychology-interface-design",
    excerpt: "How strategic color choices can influence user emotions, behaviors, and the overall effectiveness of digital interfaces.",
    content: `
      <h2>The Science of Color in Design</h2>
      <p>Colors are more than aesthetic choices—they're powerful psychological triggers that can influence mood, perception, and behavior. In interface design, strategic color selection can mean the difference between an engaging, effective product and one that fails to connect with users.</p>
      
      <p>Understanding the psychological impact of colors allows designers to create interfaces that not only look appealing but also guide users toward desired actions and emotional responses.</p>
      
      <h2>The Emotional Language of Colors</h2>
      
      <h3>Red: Energy and Urgency</h3>
      <p>Red increases heart rate and creates a sense of urgency. It's effective for:</p>
      <ul>
        <li>Call-to-action buttons that need immediate attention</li>
        <li>Sale announcements and limited-time offers</li>
        <li>Error messages and alerts</li>
      </ul>
      <p>However, overuse can create anxiety or aggression, so it's best used as an accent rather than a dominant color in most interfaces.</p>
      
      <h3>Blue: Trust and Stability</h3>
      <p>Blue conveys reliability, calmness, and professionalism. It's particularly effective for:</p>
      <ul>
        <li>Financial and healthcare applications</li>
        <li>Corporate websites and business tools</li>
        <li>Security-focused interfaces</li>
      </ul>
      <p>Blue is the most universally preferred color across genders and cultures, making it a safe choice for broad audiences.</p>
      
      <h3>Green: Growth and Positivity</h3>
      <p>Green suggests health, tranquility, and prosperity. It works well for:</p>
      <ul>
        <li>Confirmation messages and success states</li>
        <li>Environmental or wellness-focused applications</li>
        <li>Financial services (suggesting money or growth)</li>
      </ul>
      
      <h3>Yellow: Optimism and Caution</h3>
      <p>Yellow evokes cheerfulness and energy but can also signal caution. It's suitable for:</p>
      <ul>
        <li>Creative applications and platforms</li>
        <li>Warning notifications (when not critical)</li>
        <li>Highlighting important information</li>
      </ul>
      <p>Yellow should be used sparingly, as it can cause eye fatigue when overused.</p>
      
      <h3>Orange: Enthusiasm and Affordability</h3>
      <p>Orange combines the energy of red with the cheerfulness of yellow. It's effective for:</p>
      <ul>
        <li>Call-to-action buttons that are important but not urgent</li>
        <li>E-commerce sites targeting budget-conscious consumers</li>
        <li>Gamification elements and rewards</li>
      </ul>
      
      <h3>Purple: Luxury and Creativity</h3>
      <p>Purple conveys creativity, wisdom, and exclusivity. It works well for:</p>
      <ul>
        <li>Premium product offerings</li>
        <li>Beauty and wellness applications</li>
        <li>Creative tools and platforms</li>
      </ul>
      
      <h3>Black: Sophistication and Power</h3>
      <p>Black suggests elegance, authority, and sophistication. It's appropriate for:</p>
      <ul>
        <li>Luxury brand interfaces</li>
        <li>Photography and arts platforms</li>
        <li>Creating strong contrast and improving readability</li>
      </ul>
      
      <h3>White: Simplicity and Cleanliness</h3>
      <p>White conveys purity, simplicity, and spaciousness. It's essential for:</p>
      <ul>
        <li>Creating visual breathing room</li>
        <li>Medical and healthcare interfaces</li>
        <li>Minimalist designs focusing on content</li>
      </ul>
      
      <h2>Color in Action: Strategic Application</h2>
      
      <h3>Establishing Hierarchy</h3>
      <p>Colors create visual hierarchy, guiding users through an interface:</p>
      <ul>
        <li>Primary actions: Vibrant, contrasting colors (blue, green)</li>
        <li>Secondary actions: Neutral or subdued colors (gray, light blue)</li>
        <li>Destructive actions: Warning colors (red, orange)</li>
      </ul>
      
      <h3>Brand Alignment</h3>
      <p>Color choices should reflect brand personality:</p>
      <ul>
        <li>Traditional/trustworthy: Blues, greens, neutral tones</li>
        <li>Creative/innovative: Purples, bright colors, unusual combinations</li>
        <li>Youthful/energetic: Vibrant colors, high contrast</li>
        <li>Luxury/exclusive: Blacks, golds, deep purples</li>
      </ul>
      
      <h3>Cultural Considerations</h3>
      <p>Color meanings vary across cultures:</p>
      <ul>
        <li>White: Purity in Western cultures; mourning in some Eastern cultures</li>
        <li>Red: Danger in the West; luck and prosperity in China</li>
        <li>Purple: Royalty in Western cultures; mourning in some Latin American countries</li>
      </ul>
      <p>For global products, research cultural associations or opt for culturally neutral color schemes.</p>
      
      <h2>Color Accessibility</h2>
      <p>Inclusive design requires considering color accessibility:</p>
      <ul>
        <li>Maintain sufficient contrast ratios (WCAG recommends at least 4.5:1 for normal text)</li>
        <li>Never rely solely on color to convey information (use icons or text as well)</li>
        <li>Test designs with colorblindness simulation tools</li>
        <li>Provide high contrast modes for users with visual impairments</li>
      </ul>
      
      <h2>Building Effective Color Systems</h2>
      
      <h3>The 60-30-10 Rule</h3>
      <p>A balanced color scheme often follows this distribution:</p>
      <ul>
        <li>60% primary color (often neutral)</li>
        <li>30% secondary color</li>
        <li>10% accent color (for calls-to-action and emphasis)</li>
      </ul>
      
      <h3>Creating Color Harmony</h3>
      <p>Harmonious color combinations create cohesive interfaces:</p>
      <ul>
        <li>Monochromatic: Different shades of a single color</li>
        <li>Analogous: Colors adjacent on the color wheel</li>
        <li>Complementary: Colors opposite on the color wheel (high contrast)</li>
        <li>Triadic: Three colors equally spaced on the color wheel</li>
      </ul>
      
      <h2>Testing and Iteration</h2>
      <p>Color effectiveness should be verified through:</p>
      <ul>
        <li>A/B testing different color schemes for key metrics</li>
        <li>Heat mapping to track user attention patterns</li>
        <li>User interviews to gather qualitative feedback on emotional responses</li>
        <li>Accessibility testing across different devices and user needs</li>
      </ul>
      
      <h2>Conclusion</h2>
      <p>Strategic color use in interface design goes beyond aesthetics to influence user perception, behavior, and emotional connection. By understanding color psychology and applying it thoughtfully, designers can create interfaces that not only look beautiful but also guide users naturally toward desired actions while creating memorable brand experiences.</p>
    `,
    featuredImage: "https://images.unsplash.com/photo-1550859492-d5da9d8e45f3?q=80&w=1200&auto=format&fit=crop",
    author: authors[1],
    category: categories[0],
    createdAt: "2023-09-12T16:20:00Z",
    readTime: 9,
    comments: [
      {
        id: "401",
        postId: "4",
        author: "Dylan Murphy",
        authorEmail: "dylan@example.com",
        content: "This is such a comprehensive overview! I've been struggling with color choices in my latest project, especially finding the right balance for call-to-action buttons that stand out without being overwhelming. The section on the 60-30-10 rule is particularly helpful.",
        createdAt: "2023-09-13T11:35:00Z",
        avatar: "https://images.unsplash.com/photo-1531727991582-cfd25ce79613?q=80&w=100&auto=format&fit=crop"
      },
      {
        id: "402",
        postId: "4",
        author: "Sam Rivera",
        authorEmail: "sam@example.com",
        content: "Great article! I'd add that context matters tremendously too. A red button might work well for 'Buy Now' on a retail site but could create anxiety on a meditation app. Always consider the holistic experience when choosing your palette.",
        createdAt: "2023-09-14T09:40:00Z",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=100&auto=format&fit=crop"
      }
    ]
  }
];

export const getAllPosts = (): Post[] => {
  return posts;
};

export const getPostBySlug = (slug: string): Post | undefined => {
  return posts.find(post => post.slug === slug);
};

export const getPostsByCategory = (categorySlug: string): Post[] => {
  return posts.filter(post => post.category.slug === categorySlug);
};

export const getAllCategories = (): Category[] => {
  return categories;
};
