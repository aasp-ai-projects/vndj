export default function Home() {
    return (
        <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
            <div className="container mx-auto px-4 py-16">
                <div className="text-center">
                    <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                        Welcome to{' '}
                        <span className="text-blue-600">vndj</span>
                    </h1>
                    <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                        Your Next.js project is ready! Start building amazing web applications with modern tools and best practices.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors">
                            Get Started
                        </button>
                        <button className="border border-gray-300 hover:border-gray-400 text-gray-700 font-semibold py-3 px-6 rounded-lg transition-colors">
                            Learn More
                        </button>
                    </div>
                </div>

                <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="bg-white p-6 rounded-xl shadow-sm">
                        <h3 className="text-lg font-semibold text-gray-900 mb-3">⚡ Fast Development</h3>
                        <p className="text-gray-600">
                            Built with Next.js 15 and the latest React features for optimal performance.
                        </p>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-sm">
                        <h3 className="text-lg font-semibold text-gray-900 mb-3">🎨 Beautiful Design</h3>
                        <p className="text-gray-600">
                            Styled with Tailwind CSS for rapid UI development and consistent design.
                        </p>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-sm">
                        <h3 className="text-lg font-semibold text-gray-900 mb-3">🔧 TypeScript Ready</h3>
                        <p className="text-gray-600">
                            Full TypeScript support for better development experience and code quality.
                        </p>
                    </div>
                </div>
            </div>
        </main>
    );
}