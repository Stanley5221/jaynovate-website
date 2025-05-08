import Image from "next/image"
import Link from "next/link"
import { Calendar, Clock, User, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { supabase } from "@/lib/supabase"

async function getBlogPost(slug: string) {
  const { data: post } = await supabase
    .from('blog_posts')
    .select('*')
    .eq('slug', slug)
    .single()

  return post
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = await getBlogPost(params.slug)

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-sky-900 mb-4">Post Not Found</h1>
          <p className="text-sky-700 mb-8">The blog post you're looking for doesn't exist.</p>
          <Button asChild>
            <Link href="/blog">Back to Blog</Link>
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={post.featured_image || "/placeholder.svg"}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="relative z-20 mx-auto max-w-7xl px-6 lg:px-8">
          <Button
            asChild
            variant="ghost"
            className="mb-8 text-white hover:text-white hover:bg-white/10"
          >
            <Link href="/blog" className="flex items-center">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Link>
          </Button>
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl drop-shadow-lg mb-6">
              {post.title}
            </h1>
            <div className="flex flex-wrap gap-4 text-white/90">
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-2" />
                <span>{new Date(post.published_at).toLocaleDateString()}</span>
              </div>
              <div className="flex items-center">
                <User className="h-4 w-4 mr-2" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-2" />
                <span>{post.read_time}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="prose prose-sky max-w-none">
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          </div>
        </div>
      </section>

      {/* Share Section */}
      <section className="py-8 bg-sky-50">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold text-sky-900">Share this article</h3>
            </div>
            <div className="flex gap-4">
              <Button variant="outline" className="border-sky-600 text-sky-600 hover:bg-sky-50">
                Twitter
              </Button>
              <Button variant="outline" className="border-sky-600 text-sky-600 hover:bg-sky-50">
                LinkedIn
              </Button>
              <Button variant="outline" className="border-sky-600 text-sky-600 hover:bg-sky-50">
                Facebook
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 