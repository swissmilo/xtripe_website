import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="min-h-screen relative overflow-hidden">
      {/* Gradient Blobs */}
      <div className="gradient-blob gradient-blob-1" />
      <div className="gradient-blob gradient-blob-2" />
      <div className="gradient-blob gradient-blob-3" />
      
      <div className="h-screen flex flex-col items-center justify-center px-6">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-[--stripe-dark] mb-4">404</h1>
          <h2 className="text-2xl font-semibold text-[--stripe-dark] mb-6">Page Not Found</h2>
          <p className="text-gray-600 mb-8 max-w-md mx-auto">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <Link 
            href="/" 
            className="px-6 py-3 bg-[--stripe-purple] text-white rounded-full font-medium hover:opacity-90 transition-opacity inline-block"
          >
            Return Home
          </Link>
        </div>
      </div>
    </main>
  );
} 