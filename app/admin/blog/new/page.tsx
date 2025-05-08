'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { supabase } from '@/lib/supabase'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { ImageUpload } from '@/components/ui/image-upload'
import type { BlogPost } from '@/lib/supabase'

export default function NewBlogPost() {
  const router = useRouter()
  const [saving, setSaving] = useState(false)
  const [formData, setFormData] = useState<Partial<BlogPost>>({
    title: '',
    slug: '',
    content: '',
    excerpt: '',
    featured_image: '',
    author: '',
    read_time: '',
    category: '',
    is_featured: false,
    published_at: new Date().toISOString()
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSaving(true)

    try {
      const { error } = await supabase
        .from('blog_posts')
        .insert([formData])

      if (error) throw error

      router.push('/admin/blog')
      router.refresh()
    } catch (error) {
      console.error('Error creating post:', error)
      alert('Error creating post')
    } finally {
      setSaving(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-8">Create New Blog Post</h1>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <Label htmlFor="title">Title</Label>
          <Input
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <Label htmlFor="slug">Slug</Label>
          <Input
            id="slug"
            name="slug"
            value={formData.slug}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <Label htmlFor="content">Content</Label>
          <Textarea
            id="content"
            name="content"
            value={formData.content}
            onChange={handleChange}
            required
            className="min-h-[300px]"
          />
        </div>

        <div>
          <Label htmlFor="excerpt">Excerpt</Label>
          <Textarea
            id="excerpt"
            name="excerpt"
            value={formData.excerpt}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <Label>Featured Image</Label>
          <ImageUpload
            onImageUploaded={(url) => setFormData(prev => ({ ...prev, featured_image: url }))}
          />
        </div>

        <div>
          <Label htmlFor="author">Author</Label>
          <Input
            id="author"
            name="author"
            value={formData.author}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <Label htmlFor="read_time">Read Time</Label>
          <Input
            id="read_time"
            name="read_time"
            value={formData.read_time}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <Label htmlFor="category">Category</Label>
          <Select
            value={formData.category}
            onValueChange={(value) => handleSelectChange('category', value)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select a category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Data Science">Data Science</SelectItem>
              <SelectItem value="Machine Learning">Machine Learning</SelectItem>
              <SelectItem value="Healthcare Analytics">Healthcare Analytics</SelectItem>
              <SelectItem value="Retail Intelligence">Retail Intelligence</SelectItem>
              <SelectItem value="Big Data">Big Data</SelectItem>
              <SelectItem value="AI Ethics">AI Ethics</SelectItem>
              <SelectItem value="Business Intelligence">Business Intelligence</SelectItem>
              <SelectItem value="Data Visualization">Data Visualization</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="flex items-center space-x-2">
          <input
            type="checkbox"
            id="is_featured"
            checked={formData.is_featured}
            onChange={(e) => setFormData(prev => ({ ...prev, is_featured: e.target.checked }))}
            className="h-4 w-4"
            aria-label="Feature this post"
          />
          <Label htmlFor="is_featured">Feature this post</Label>
        </div>

        <div className="flex space-x-4">
          <Button type="submit" disabled={saving}>
            {saving ? 'Creating...' : 'Create Post'}
          </Button>
          <Button
            type="button"
            variant="outline"
            onClick={() => router.push('/admin/blog')}
          >
            Cancel
          </Button>
        </div>
      </form>
    </div>
  )
} 