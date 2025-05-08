import Image from "next/image"
import Link from "next/link"
import { Calendar, Clock, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { supabase } from "@/lib/supabase"

async function getBlogPosts() {
  const { data: featuredPost } = await supabase
    .from('blog_posts')
    .select('*')
    .eq('is_featured', true)
    .single()

  const { data: recentPosts } = await supabase
    .from('blog_posts')
    .select('*')
    .eq('is_featured', false)
    .order('published_at', { ascending: false })
    .limit(4)

  return { featuredPost, recentPosts }
}

export default async function BlogPage() {
  const { featuredPost, recentPosts } = await getBlogPosts()

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <video
          className="absolute inset-0 w-full h-full object-cover z-0"
          src="/videos/6.mp4"
          autoPlay
          loop
          muted
          playsInline
          poster="/images/jaynovate-light.png"
          style={{ filter: 'brightness(0.5) blur(2px)' }}
        />
        <div className="absolute inset-0 bg-black/40 z-10" />
        <div className="relative z-20 mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl drop-shadow-lg">Our Blog</h1>
          <p className="mt-6 text-lg leading-8 text-white drop-shadow">
            Insights, trends, and expertise from our data intelligence team
          </p>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="py-16 bg-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-5xl">
              <h2 className="text-2xl font-bold text-sky-900 mb-8">Featured Post</h2>
              <Card className="border-sky-100 overflow-hidden">
                <div className="relative h-[400px] w-full">
                  <Image
                    src={featuredPost.featured_image || "/placeholder.svg"}
                    alt={featuredPost.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardHeader>
                  <div className="flex flex-wrap gap-4 mb-2">
                    <div className="flex items-center text-sky-600 text-sm">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>{new Date(featuredPost.published_at).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center text-sky-600 text-sm">
                      <User className="h-4 w-4 mr-1" />
                      <span>{featuredPost.author}</span>
                    </div>
                    <div className="flex items-center text-sky-600 text-sm">
                      <Clock className="h-4 w-4 mr-1" />
                      <span>{featuredPost.read_time}</span>
                    </div>
                  </div>
                  <CardTitle className="text-2xl text-sky-900">{featuredPost.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sky-700 text-base">
                    {featuredPost.excerpt}
                  </CardDescription>
                </CardContent>
                <CardFooter>
                  <Button asChild className="bg-sky-600 hover:bg-sky-700">
                    <Link href={`/blog/${featuredPost.slug}`}>Read Full Article</Link>
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>
      )}

      {/* Recent Posts */}
      <section className="py-16 bg-sky-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-5xl">
            <h2 className="text-2xl font-bold text-sky-900 mb-8">Recent Posts</h2>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              {recentPosts?.map((post) => (
                <Card
                  key={post.id}
                  className="border-sky-100 bg-white overflow-hidden hover:shadow-md transition-shadow duration-300"
                >
                  <div className="relative h-[200px] w-full">
                    <Image
                      src={post.featured_image || "/placeholder.svg"}
                      alt={post.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex flex-wrap gap-4 mb-2">
                      <div className="flex items-center text-sky-600 text-sm">
                        <Calendar className="h-4 w-4 mr-1" />
                        <span>{new Date(post.published_at).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center text-sky-600 text-sm">
                        <Clock className="h-4 w-4 mr-1" />
                        <span>{post.read_time}</span>
                      </div>
                    </div>
                    <CardTitle className="text-xl text-sky-900">{post.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-sky-700">{post.excerpt}</CardDescription>
                  </CardContent>
                  <CardFooter>
                    <Button asChild variant="outline" className="border-sky-600 text-sky-600 hover:bg-sky-50">
                      <Link href={`/blog/${post.slug}`}>Read More</Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-5xl">
            <h2 className="text-2xl font-bold text-sky-900 mb-8">Categories</h2>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
              {[
                "Data Science",
                "Machine Learning",
                "Healthcare Analytics",
                "Retail Intelligence",
                "Big Data",
                "AI Ethics",
                "Business Intelligence",
                "Data Visualization",
              ].map((category) => (
                <Link
                  key={category}
                  href={`/blog/category/${category.toLowerCase().replace(/\s+/g, "-")}`}
                  className="bg-sky-50 hover:bg-sky-100 text-sky-800 rounded-md px-4 py-3 text-center transition-colors duration-200"
                >
                  {category}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-sky-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-sky-900">Subscribe to Our Newsletter</h2>
            <p className="mt-4 text-lg text-sky-700">
              Stay updated with the latest insights and trends in data intelligence
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <input
                type="email"
                placeholder="Enter your email"
                className="rounded-md border-sky-300 px-4 py-2 focus:border-sky-500 focus:ring-sky-500 sm:w-64"
              />
              <Button className="bg-sky-600 hover:bg-sky-700">Subscribe</Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
