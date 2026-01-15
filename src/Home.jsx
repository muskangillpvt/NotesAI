import { Lock, Edit3, Tag, Star, CheckCircle, Shield, Zap, Search } from "lucide-react";

function Home(){
    const features = [
        {
            icon: <Edit3 className="w-8 h-8" />,
            title: "Create & Edit Notes",
            description: "Effortlessly create and edit notes with instant autosave."
        },
        {
            icon: <Tag className="w-8 h-8" />,
            title: "Smart Tags",
            description: "Organize your notes with custom tags for quick filtering"
        },
        {
            icon: <Lock className="w-8 h-8" />,
            title: "Secure notes",
            description: "Lock sensitive notes with password protection."
        },
        {
            icon: <Star className="w-8 h-8" />,
            title: "Favorites",
            description: "Mark important notes as fav for quick access"
        },
        {
            icon: <Search className="w-8 h-8" />,
            title: "Ai powered search",
            description: "Find the notes instantly with fuzzy + semantic AI seach"
        },
        {
            icon: <Zap className="w-8 h-8" />,
            title: "Fast and real time",
            description: "Enjoy instant sync using websockets and lighting fast UI"
        }
    ];
    return(
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-green-50 to-slate-100">
            <nav className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="flex justify-between items-center h-16">
                        <div className="flex items-center space-x-2">
                            <div className="bg-gradient-to-br from-green-600 to-cyan-600 p-2 rounded-lg">
                                <Edit3 className="w-6 h-6 text-white" />
                            </div>
                            <span className="text-2xl font-bold bg-gradient-to-r from-green-600 to-cyan-600 bg-clip-text text-transparent">
                                NotesAI
                            </span>
                        </div>
                        <button className="bg-gradient-to-r from-green-600 to-cyan-600 text-white px-6 py-2.5 rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all duration-200">
                            Get Started
                        </button>
                    </div>
                </div>
            </nav>
            <section className="max-w-7xl mx-auto px-4 py-20">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-8">
                        <div className="inline-flex items-center space-x-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium">
                            <CheckCircle className="w-4 h-4" />
                            <span>AI-powered notes taking</span>
                        </div>
                        <h1 className="text-5xl font-bold leading-right text-gray-900">
                            Take Smarter Notes,
                            <span className="bg-gradient-to-r from-green-600 to-cyan-600 bg-clip-text text-transparent">
                                {" "}Not Harder
                            </span>
                        </h1>
                        <p className="text-xl text-gray-600 leading-relaxed">
                            NotesAI helps you create, organize, summarize, and search notes effortlessly - powered by AI and build for productivity.
                        </p>
                        <div className="flex flex-col gap-4">
                            <button className="bg-gradient-to-r from-green-600 to-cyan-600 text-white px-8 py-6 rounded-xl font-semibold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-200">
                                Start Free
                            </button>
                            <button className="bg-white text-gray-700 px-8 py-4 rounded-xl font-semibold text-lg border-2 border-gray-200 hover:border-green-600 hover:text-green-600 transition-all duration-200">
                                Log In
                            </button>
                        </div>
                    </div>
                    <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-cyan-600 rounded-3xl blur-3xl opacity-20"></div>
                        <div className="relatie bg-white rounded-2xl shadow-2xl p-8 space-y-4">
                            <div className="flex items-center space-x-3 pb-4 border-b">
                                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                            </div>
                            <div className="space-y-3">
                                <div className="bg-gradient-to-r from-green-50 to-cyan-50 p-4 rounded-lg border-l-4 border-green-600">
                                    <div className="flex items-center justify-between mb-2">
                                        <span className="font-semibold text-gray-900">Meeting notes</span>
                                        <Tag className="w-4 h-4 text-green-600" />
                                    </div>
                                    <p className="text-sm text-gray-600">
                                        Team upates and sprint goals....
                                    </p>
                                </div>
                                <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-4 rounded-lg border-l-4 border-purple-600">
                                    <div className="flex items-center justify-between mb-2">
                                        <span className="font-semibold text-gray-900">
                                            AI Summary
                                        </span>
                                        <Zap className="w-4 h-4 text-yellow-600" />
                                    </div>
                                    <p className="text-sm text-gray-600">
                                        Automatically generated insights...
                                    </p>
                                </div>
                                <div className="bg-gradient-to-r from-emerald-50 to-teal-50 p-4 rounded-lg border-l-4 border-emerald-600">
                                    <div className="flex items-center justify-between mb-2">
                                        <span className="font-semibold text-gray-900">Personal</span>
                                        <Lock className="w-4 h-4 text-emerald-600" />
                                    </div>
                                    <p className="text-sm text-gray-600">
                                        I should change.....
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="bg-white py-20">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">
                            Features for a 
                            <span className="bg-gradient-to-r from-green-600 to-cyan-600 bg-clip-text text-transparent">
                                {" "}Smart Workflow
                            </span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Everything you need to take, organize, and analyze notes - all in one place.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {features.map((feature, index)=>(
                            <div key={index} className="group bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl border border-gray-200 hover:border-green-600 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                                <div className="bg-gradient-to-br from-green-600 to-cyan-600 w-16 h-16 rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300">
                                    {feature.icon}
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                                <p className="text-gray-600 leading-relaxed">{feature.description}</p>    
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
export default Home;