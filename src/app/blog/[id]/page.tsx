import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { ParticlesBackground } from '../../components/ParticlesBackground/ParticlesBackground';

interface BlogDetailPageProps {
  params: Promise<{
    id: string;
  }>;
}

// Simple blog data directly in the component for testing
const blogPosts = [
  {
    id: "1",
    title: "The Future of Web Development",
    excerpt: "Exploring the latest trends and technologies shaping the future of web development in 2024.",
    content: `
# The Future of Web Development

Web development is evolving at an unprecedented pace. As we move through 2024, several key trends are emerging that will shape the future of how we build and interact with web applications.

## Key Trends

### 1. AI-Powered Development
Artificial Intelligence is revolutionizing how developers write code. From intelligent code completion to automated testing, AI tools are becoming indispensable in the development workflow.

### 2. Edge Computing
With the rise of edge computing, applications are becoming faster and more responsive. This technology brings computation closer to users, reducing latency and improving user experience.

### 3. Progressive Web Apps (PWAs)
PWAs continue to bridge the gap between web and native applications, offering offline functionality and app-like experiences.

## Conclusion

The future of web development is bright, with new technologies constantly emerging to make development more efficient and user experiences more engaging.
    `,
    author: "John Doe",
    date: "2024-01-15",
    image: "/images/elon.jpg",
    tags: ["Web Development", "Technology", "Future"],
    readTime: "5 min read"
  },
  {
    id: "2",
    title: "Building Scalable React Applications",
    excerpt: "Best practices and patterns for creating maintainable and scalable React applications.",
    content: `
# Building Scalable React Applications

Creating scalable React applications requires careful planning and adherence to best practices. Here are some key strategies to consider.

## Component Architecture

### 1. Component Composition
Use composition over inheritance to create flexible and reusable components.

### 2. State Management
Choose the right state management solution based on your application's complexity.

### 3. Performance Optimization
Implement proper memoization and code splitting to ensure optimal performance.

## Best Practices

- Keep components small and focused
- Use TypeScript for better type safety
- Implement proper error boundaries
- Write comprehensive tests

## Conclusion

Following these practices will help you build React applications that are maintainable, performant, and scalable.
    `,
    author: "Jane Smith",
    date: "2024-01-10",
    image: "/images/elon.jpg",
    tags: ["React", "JavaScript", "Frontend"],
    readTime: "7 min read"
  },
  {
    id: "3",
    title: "The Art of Clean Code",
    excerpt: "Principles and practices for writing clean, maintainable code that your future self will thank you for.",
    content: `
# The Art of Clean Code

Clean code is not just about making code work—it's about making code readable, maintainable, and elegant.

## Core Principles

### 1. Meaningful Names
Choose names that reveal intent and make the code self-documenting.

### 2. Functions Should Do One Thing
Each function should have a single responsibility and do it well.

### 3. Comments Should Explain Why, Not What
Good code is self-explanatory. Comments should only explain the reasoning behind complex logic.

## Benefits of Clean Code

- Easier to maintain and debug
- Faster onboarding for new developers
- Reduced technical debt
- Better collaboration

## Conclusion

Investing time in writing clean code pays dividends in the long run, making your codebase more maintainable and enjoyable to work with.
    `,
    author: "Mike Johnson",
    date: "2024-01-05",
    image: "/images/elon.jpg",
    tags: ["Programming", "Best Practices", "Code Quality"],
    readTime: "6 min read"
  }
];

function getBlogPostById(id: string) {
  return blogPosts.find(post => post.id === id);
}

export default async function BlogDetailPage({ params }: BlogDetailPageProps) {
  const { id } = await params;
  const post = getBlogPostById(id);

  if (!post) {
    notFound();
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const relatedPosts = blogPosts.filter(p => p.id !== id).slice(0, 3);

  return (
    <div className="min-h-screen relative overflow-hidden">
      <ParticlesBackground />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        {/* Back Button */}
        <div className="mb-10">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors duration-300 group"
          >
            <svg
              className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Back to Blog
          </Link>
        </div>

        {/* Article Header */}
        <article className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-700/50 overflow-hidden shadow-xl">
          {/* Hero Image */}
          <div className="relative h-64 md:h-96 overflow-hidden">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/70 to-transparent" />
            <div className="absolute top-6 left-6">
              <span className="inline-flex items-center gap-1.5 bg-gray-900/90 backdrop-blur-sm text-cyan-400 px-4 py-2 rounded-lg text-sm font-medium border border-cyan-500/30">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {post.readTime}
              </span>
            </div>
          </div>

          {/* Article Content */}
          <div className="p-8 md:p-12">
            {/* Meta Information */}
            <div className="flex flex-wrap items-center gap-4 mb-8 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-cyan-500" />
                <span className="font-medium text-white">{post.author}</span>
              </div>
              <span>•</span>
              <time>{formatDate(post.date)}</time>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              {post.title}
            </h1>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-8">
              {post.tags.map((tag: string, index: number) => (
                <span
                  key={index}
                  className="px-3 py-1.5 bg-gray-800/80 border border-gray-700/50 text-cyan-400 rounded-lg text-sm font-medium hover:border-cyan-500/50 transition-colors duration-200"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Content */}
            <div className="prose prose-lg max-w-none prose-invert prose-headings:text-white prose-p:text-gray-300 prose-p:leading-relaxed prose-a:text-cyan-400 prose-a:no-underline hover:prose-a:text-cyan-300 prose-strong:text-white prose-ul:text-gray-300 prose-li:text-gray-300 prose-code:text-cyan-400">
              {post.content.split('\n').map((line, index) => {
                if (line.startsWith('#')) {
                  const level = line.match(/^#+/)?.[0].length || 0;
                  const text = line.replace(/^#+\s/, '');
                  const HeadingTag = `h${level}` as 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
                  return <HeadingTag key={index} className={level === 2 ? "text-2xl font-bold text-white mt-8 mb-4" : "text-xl font-bold text-white mt-6 mb-3"}>{text}</HeadingTag>;
                } else if (line.trim() && !line.startsWith('-') && !line.startsWith('##')) {
                  return <p key={index} className="mb-4">{line}</p>;
                }
                return null;
              })}
            </div>
          </div>
        </article>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <section className="mt-20">
            <div className="flex items-center gap-3 mb-12">
              <h2 className="text-3xl font-bold text-white">
                Related <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Articles</span>
              </h2>
              <div className="flex-1 h-px bg-gradient-to-r from-cyan-500/50 to-transparent"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPosts.map((relatedPost) => (
                <div
                  key={relatedPost.id}
                  className="group"
                >
                  <Link href={`/blog/${relatedPost.id}`} className="block">
                    <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 overflow-hidden h-full hover:shadow-[0_8px_32px_rgba(6,182,212,0.15)]">
                      <div className="relative h-40 overflow-hidden">
                        <Image
                          src={relatedPost.image}
                          alt={relatedPost.title}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent" />
                      </div>
                      <div className="p-4">
                        <h3 className="font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300 line-clamp-2 text-sm">
                          {relatedPost.title}
                        </h3>
                        <p className="text-sm text-gray-400 line-clamp-2 text-xs">
                          {relatedPost.excerpt}
                        </p>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}