"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Skeleton } from "@/components/ui/skeleton"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { ArrowLeft, Leaf, Wheat, Fish, AlertCircle, RefreshCw } from "lucide-react"
import type { MenuItem, MenuCategory } from "@/types/menu"

// Helper functions
const formatPrice = (price: number) => `$${price.toFixed(2)}`

const groupItemsByCategory = (items: MenuItem[]): MenuCategory[] => {
  const grouped = items.reduce((acc, item) => {
    const category = item.category
    if (!acc[category]) {
      acc[category] = []
    }
    acc[category].push(item)
    return acc
  }, {} as Record<string, MenuItem[]>)

  return Object.entries(grouped).map(([name, items]) => ({
    name,
    items,
    description: getCategoryDescription(name)
  }))
}

const getCategoryDescription = (category: string): string => {
  const descriptions: Record<string, string> = {
    'Create Your Own': 'Build your perfect fire-grilled meal exactly how you want it',
    'Street Sides': 'Authentic Mediterranean sides and small plates',
    'Drinks': 'Refreshing beverages to complement your meal',
    'Signature Mains': "Chef's specialty dishes showcasing authentic Middle Eastern flavors",
    'Desserts': 'Traditional sweets to complete your dining experience'
  }
  return descriptions[category] || 'Delicious options to enhance your meal'
}

const getDietaryBadges = (item: MenuItem) => {
  const badges = []
  if (item.is_vegan) badges.push('vegan')
  if (item.is_gluten_free) badges.push('gluten-free')
  if (item.is_halal) badges.push('halal')
  return badges
}

const getDietaryIcon = (dietary: string) => {
  switch (dietary) {
    case "vegetarian":
      return <Leaf className="h-3 w-3" />
    case "vegan":
      return <Leaf className="h-3 w-3" />
    case "gluten-free":
      return <Wheat className="h-3 w-3" />
    case "halal":
      return <Fish className="h-3 w-3" />
    default:
      return null
  }
}

const getDietaryColor = (dietary: string) => {
  switch (dietary) {
    case "vegetarian":
      return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
    case "vegan":
      return "bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-300"
    case "gluten-free":
      return "bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-300"
    case "halal":
      return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300"
    default:
      return "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300"
  }
}

// Loading skeleton component
const MenuItemSkeleton = () => (
  <Card>
    <CardHeader>
      <div className="flex justify-between items-start mb-2">
        <Skeleton className="h-5 w-32" />
        <Skeleton className="h-5 w-16" />
      </div>
      <div className="flex gap-2">
        <Skeleton className="h-4 w-16" />
        <Skeleton className="h-4 w-20" />
      </div>
    </CardHeader>
    <CardContent>
      <Skeleton className="h-4 w-full mb-2" />
      <Skeleton className="h-4 w-3/4" />
    </CardContent>
  </Card>
)

const CategorySkeleton = () => (
  <section>
    <div className="mb-8">
      <Skeleton className="h-8 w-48 mb-2" />
      <Skeleton className="h-4 w-64 mb-4" />
      <Separator />
    </div>
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {Array.from({ length: 6 }).map((_, i) => (
        <MenuItemSkeleton key={i} />
      ))}
    </div>
  </section>
)

export default function MenuPage() {
  const [menuItems, setMenuItems] = useState<MenuItem[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [retryCount, setRetryCount] = useState(0)

  const fetchMenuItems = async () => {
    try {
      setLoading(true)
      setError(null)
      
      const response = await fetch('/api/menu', {
        cache: 'no-store',
        headers: {
          'Cache-Control': 'no-cache'
        }
      })
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      
      const data = await response.json()
      
      if (!data.success) {
        throw new Error(data.error || 'Failed to fetch menu items')
      }
      
      setMenuItems(data.data || [])
    } catch (err) {
      console.error('Error fetching menu:', err)
      setError(err instanceof Error ? err.message : 'Failed to load menu')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchMenuItems()
  }, [retryCount])

  const handleRetry = () => {
    setRetryCount(prev => prev + 1)
  }

  const menuCategories = groupItemsByCategory(menuItems)

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900">
      {/* Header */}
      <header className="border-b bg-white/50 backdrop-blur-sm dark:bg-slate-950/50 sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/">
              <Button variant="ghost" size="sm" className="hover:bg-white/80 dark:hover:bg-slate-800/80">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Button>
            </Link>
            <h1 className="text-2xl font-bold">Zaha Street Grill</h1>
            <div className="w-[120px]" /> {/* Spacer for center alignment */}
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Zaha Street Grill Menu
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Authentic Middle Eastern cuisine with fire-grilled specialties, fresh ingredients, 
            and traditional flavors that transport you to the bustling streets of the Levant.
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            <Badge variant="secondary" className="flex items-center gap-1">
              <Leaf className="h-3 w-3" />
              Vegan Options
            </Badge>
            <Badge variant="secondary" className="flex items-center gap-1">
              <Wheat className="h-3 w-3" />
              Gluten-Free Available
            </Badge>
            <Badge variant="secondary" className="flex items-center gap-1">
              <Fish className="h-3 w-3" />
              Halal Certified
            </Badge>
          </div>
        </div>

        {/* Error State */}
        {error && (
          <Alert variant="destructive" className="mb-8">
            <AlertCircle className="h-4 w-4" />
            <AlertDescription className="flex items-center justify-between w-full">
              <span>Failed to load menu: {error}</span>
              <Button 
                variant="outline" 
                size="sm" 
                onClick={handleRetry}
                className="ml-4"
              >
                <RefreshCw className="h-3 w-3 mr-1" />
                Retry
              </Button>
            </AlertDescription>
          </Alert>
        )}

        {/* Loading State */}
        {loading && (
          <div className="space-y-16">
            {Array.from({ length: 4 }).map((_, i) => (
              <CategorySkeleton key={i} />
            ))}
          </div>
        )}

        {/* Menu Sections */}
        {!loading && !error && (
          <div className="space-y-16">
            {menuCategories.length === 0 ? (
              <div className="text-center py-16">
                <h3 className="text-2xl font-semibold mb-4">No menu items available</h3>
                <p className="text-muted-foreground mb-6">Please check back later or contact us for assistance.</p>
                <Button onClick={handleRetry}>
                  <RefreshCw className="h-4 w-4 mr-2" />
                  Try Again
                </Button>
              </div>
            ) : (
              menuCategories.map((category) => {
                const getGridCols = () => {
                  if (category.name === 'Signature Mains') return 'md:grid-cols-2'
                  if (category.name === 'Desserts') return 'md:grid-cols-2 lg:grid-cols-4'
                  return 'md:grid-cols-2 lg:grid-cols-3'
                }

                return (
                  <section key={category.name}>
                    <div className="mb-8">
                      <h3 className="text-3xl font-bold mb-2">{category.name}</h3>
                      <p className="text-muted-foreground">{category.description}</p>
                      <Separator className="mt-4" />
                    </div>
                    <div className={`grid ${getGridCols()} gap-6`}>
                      {category.items.map((item) => {
                        const dietaryBadges = getDietaryBadges(item)
                        
                        return (
                          <Card key={item.id} className="hover:shadow-lg transition-shadow duration-300">
                            <CardHeader>
                              <div className="flex justify-between items-start mb-2">
                                <CardTitle className="text-lg leading-tight">{item.name}</CardTitle>
                                <span className="text-lg font-semibold text-primary shrink-0 ml-2">
                                  {formatPrice(item.price)}
                                </span>
                              </div>
                              {dietaryBadges.length > 0 && (
                                <div className="flex flex-wrap gap-1">
                                  {dietaryBadges.map((diet) => (
                                    <Badge 
                                      key={diet} 
                                      variant="secondary" 
                                      size="sm"
                                      className={`text-xs ${getDietaryColor(diet)}`}
                                    >
                                      {getDietaryIcon(diet)}
                                      <span className="ml-1 capitalize">{diet.replace('-', ' ')}</span>
                                    </Badge>
                                  ))}
                                </div>
                              )}
                            </CardHeader>
                            <CardContent>
                              <CardDescription className="text-sm leading-relaxed">
                                {item.description}
                              </CardDescription>
                            </CardContent>
                          </Card>
                        )
                      })}
                    </div>
                  </section>
                )
              })
            )}
          </div>
        )}

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <Card className="max-w-2xl mx-auto bg-gradient-to-r from-slate-100 to-slate-50 dark:from-slate-800 dark:to-slate-900 border-2">
            <CardContent className="pt-6">
              <h4 className="text-2xl font-bold mb-4">Ready to Order?</h4>
              <p className="text-muted-foreground mb-6">
                Experience authentic Middle Eastern flavors with our fire-grilled specialties. 
                Visit us today or order online for pickup and delivery.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  Order Online
                </Button>
                <Button variant="outline" size="lg">
                  Find Location
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t bg-white/50 backdrop-blur-sm dark:bg-slate-950/50 mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center text-muted-foreground">
            <p className="mb-2">
              <strong>Zaha Street Grill</strong> • Authentic Middle Eastern Cuisine
            </p>
            <p className="text-sm">
              All prices subject to change • Please inform us of any allergies or dietary restrictions • Halal certified
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}