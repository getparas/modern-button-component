import {
  Add,
  DocumentUpload,
  Save2,
  Trash,
  Edit,
  ArrowRight,
  Heart,
  InfoCircle,
  DocumentDownload,
  Star1,
  Flash,
  Crown,
} from "iconsax-reactjs";
import { Button } from "./components/ui";

export default function App() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl" />

        <div className="relative container mx-auto px-6 py-20">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6 shadow-lg">
              <Crown size={16} className="text-amber-500" variant="Bulk" />
              <span className="text-sm font-medium text-gray-700">
                Premium Button Collection
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent mb-6">
              Modern Button
              <br />
              <span className="text-4xl md:text-5xl">Component</span>
            </h1>

            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              A stunning, responsive button component with beautiful variants,
              smooth animations, and modern design patterns
            </p>

            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <Button
                variant="primary"
                size="lg"
                leftIcon={<Flash size={20} variant="Bulk" />}
              >
                Get Started
              </Button>
              <Button
                variant="outline"
                size="lg"
                rightIcon={<ArrowRight size={20} variant="Bulk" />}
              >
                View Documentation
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-10">
        {/* Button Variants */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Button Variants
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Choose from our carefully crafted button styles, each designed for
              different use cases and contexts
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                variant: "primary",
                label: "Primary",
                description: "Main call-to-action buttons",
              },
              {
                variant: "secondary",
                label: "Secondary",
                description: "Supporting actions",
              },
              {
                variant: "outline",
                label: "Outline",
                description: "Subtle emphasis",
              },
              {
                variant: "ghost",
                label: "Ghost",
                description: "Minimal interaction",
              },
              {
                variant: "destructive",
                label: "Destructive",
                description: "Dangerous actions",
              },
              {
                variant: "success",
                label: "Success",
                description: "Positive actions",
              },
            ].map((item) => (
              <div key={item.variant} className="group">
                <div className="bg-white/70 backdrop-blur-sm border border-white/20 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Star1
                        size={24}
                        className="text-blue-600"
                        variant="Bulk"
                      />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">
                        {item.label}
                      </h3>
                      <p className="text-sm text-gray-500 mb-4">
                        {item.description}
                      </p>
                    </div>
                    <Button variant={item.variant as any} className="w-full">
                      {item.label} Button
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Button Sizes */}
        <section className="mb-16">
          <div className="bg-white/70 backdrop-blur-sm border border-white/20 rounded-3xl p-8 shadow-lg">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Button Sizes
              </h2>
              <p className="text-gray-600">
                Perfect sizing for every interface need
              </p>
            </div>

            <div className="flex flex-wrap justify-center items-center gap-6">
              <div className="text-center space-y-3">
                <Button variant="primary" size="sm">
                  Small
                </Button>
                <p className="text-xs text-gray-500">Compact</p>
              </div>
              <div className="text-center space-y-3">
                <Button variant="primary" size="md">
                  Medium
                </Button>
                <p className="text-xs text-gray-500">Default</p>
              </div>
              <div className="text-center space-y-3">
                <Button variant="primary" size="lg">
                  Large
                </Button>
                <p className="text-xs text-gray-500">Prominent</p>
              </div>
              <div className="text-center space-y-3">
                <Button variant="primary" size="icon">
                  <Add size={20} />
                </Button>
                <p className="text-xs text-gray-500">Icon Only</p>
              </div>
            </div>
          </div>
        </section>

        {/* Button States */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-white/80 to-blue-50/80 backdrop-blur-sm border border-white/20 rounded-3xl p-8 shadow-lg">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Interactive States
              </h2>
              <p className="text-gray-600">
                Responsive feedback for every user interaction
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-8">
              <div className="text-center space-y-3">
                <Button variant="primary">Normal State</Button>
                <p className="text-sm text-gray-600">Default appearance</p>
              </div>
              <div className="text-center space-y-3">
                <Button variant="primary" disabled>
                  Disabled State
                </Button>
                <p className="text-sm text-gray-600">Inactive state</p>
              </div>
              <div className="text-center space-y-3">
                <Button variant="primary" isLoading>
                  Loading State
                </Button>
                <p className="text-sm text-gray-600">Processing feedback</p>
              </div>
            </div>
          </div>
        </section>

        {/* Action Buttons */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Action Buttons
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Real-world examples with meaningful icons and clear intent
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                variant: "destructive",
                icon: <Trash size={20} variant="Bulk" />,
                text: "Delete Item",
                bg: "from-red-50 to-pink-50",
              },
              {
                variant: "primary",
                icon: <Save2 size={20} variant="Bulk" />,
                text: "Save Changes",
                bg: "from-blue-50 to-indigo-50",
              },
              {
                variant: "success",
                icon: <Add size={20} variant="Bulk" />,
                text: "Add New",
                bg: "from-emerald-50 to-green-50",
              },
              {
                variant: "secondary",
                icon: <DocumentUpload size={20} variant="Bulk" />,
                text: "Upload File",
                bg: "from-gray-50 to-slate-50",
              },
            ].map((item, index) => (
              <div
                key={index}
                className={`bg-gradient-to-br ${item.bg} rounded-2xl p-6 border border-white/20 shadow-sm hover:shadow-md transition-all duration-300`}
              >
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-white/80 rounded-2xl flex items-center justify-center mx-auto shadow-sm">
                    {item.icon}
                  </div>
                  <Button
                    variant={item.variant as any}
                    leftIcon={item.icon}
                    className="w-full"
                  >
                    {item.text}
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Icon Combinations */}
        <section className="mb-16">
          <div className="bg-gradient-to-br from-purple-50/80 to-pink-50/80 backdrop-blur-sm border border-white/20 rounded-3xl p-8 shadow-lg">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Icon Combinations
              </h2>
              <p className="text-gray-600">
                Enhance your buttons with meaningful iconography
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="space-y-6">
                <div className="text-center">
                  <h3 className="font-semibold text-gray-900 mb-4 flex items-center justify-center gap-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    Left Icon
                  </h3>
                </div>
                <div className="space-y-4">
                  <Button
                    variant="primary"
                    leftIcon={<Edit size={18} variant="Bulk" />}
                    className="w-full"
                  >
                    Edit Profile
                  </Button>
                  <Button
                    variant="outline"
                    leftIcon={<DocumentDownload size={18} variant="Bulk" />}
                    className="w-full"
                  >
                    Download Report
                  </Button>
                </div>
              </div>

              <div className="space-y-6">
                <div className="text-center">
                  <h3 className="font-semibold text-gray-900 mb-4 flex items-center justify-center gap-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    Right Icon
                  </h3>
                </div>
                <div className="space-y-4">
                  <Button
                    variant="primary"
                    rightIcon={<ArrowRight size={18} variant="Bulk" />}
                    className="w-full"
                  >
                    Continue Setup
                  </Button>
                  <Button
                    variant="secondary"
                    rightIcon={<InfoCircle size={18} variant="Bulk" />}
                    className="w-full"
                  >
                    Learn More
                  </Button>
                </div>
              </div>

              <div className="space-y-6">
                <div className="text-center">
                  <h3 className="font-semibold text-gray-900 mb-4 flex items-center justify-center gap-2">
                    <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                    Both Sides
                  </h3>
                </div>
                <div className="space-y-4">
                  <Button
                    variant="primary"
                    leftIcon={<Heart size={18} variant="Bulk" />}
                    rightIcon={<ArrowRight size={18} variant="Bulk" />}
                    className="w-full"
                  >
                    Add to Favorites
                  </Button>
                  <Button
                    variant="success"
                    leftIcon={<Star1 size={18} variant="Bulk" />}
                    rightIcon={<Crown size={18} variant="Bulk" />}
                    className="w-full"
                  >
                    Upgrade Premium
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer CTA */}
        <section className="text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-white shadow-2xl">
            <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
              Copy the component code and start building beautiful interfaces
              with our modern button system
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                variant="secondary"
                size="lg"
                leftIcon={<DocumentDownload size={20} variant="Bulk" />}
              >
                Download Component
              </Button>
              <Button
                variant="outline"
                size="lg"
                rightIcon={<ArrowRight size={20} variant="Bulk" />}
                className="border-white/30 text-white hover:bg-white/10"
              >
                View on GitHub
              </Button>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
