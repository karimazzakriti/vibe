import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Code, Database, Zap, Rocket, Palette } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900">
      {/* Header */}
      <header className="border-b bg-white/50 backdrop-blur-sm dark:bg-slate-950/50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Rocket className="h-8 w-8 text-blue-600" />
              <h1 className="text-2xl font-bold">5 Day Sprint Framework</h1>
            </div>
            <Badge variant="secondary" className="text-xs">
              Created by Omar Choudhry
            </Badge>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="container mx-auto px-4 py-16">
        <div className="text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
              🎉 Framework Successfully Installed!
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Your Next.js 15 application is ready with the complete shadcn/ui ecosystem, 
              Supabase integration, and production-ready configuration.
            </p>
          </div>

          {/* Status Cards */}
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Card>
              <CardHeader className="pb-3">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <CardTitle className="text-lg">Next.js 15</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  React 19, TypeScript, App Router, and Tailwind CSS fully configured
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <div className="flex items-center space-x-2">
                  <Palette className="h-5 w-5 text-purple-600" />
                  <CardTitle className="text-lg">shadcn/ui</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  40+ components installed with complete design system and theming
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <div className="flex items-center space-x-2">
                  <Database className="h-5 w-5 text-blue-600" />
                  <CardTitle className="text-lg">Supabase</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Database, authentication, and API integration ready to use
                </CardDescription>
              </CardContent>
            </Card>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/dashboard">
              <Button size="lg" className="w-full sm:w-auto">
                <Code className="mr-2 h-5 w-5" />
                View Component Showcase
              </Button>
            </Link>
            <Link href="/menu">
              <Button variant="outline" size="lg" className="w-full sm:w-auto">
                <Zap className="mr-2 h-5 w-5" />
                View Restaurant Menu
              </Button>
            </Link>
            <a 
              href="https://5daysprint.com" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button variant="secondary" size="lg" className="w-full sm:w-auto">
                Learn Framework
              </Button>
            </a>
          </div>

          {/* Features List */}
          <div className="max-w-2xl mx-auto pt-8">
            <h3 className="text-2xl font-semibold mb-6">What's Included</h3>
            <div className="grid sm:grid-cols-2 gap-4 text-left">
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                <span>Complete shadcn/ui component library</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                <span>Supabase database integration</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                <span>TypeScript strict mode</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                <span>Vercel deployment ready</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                <span>Environment parity (localhost = production)</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                <span>Secure API key management</span>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t bg-white/50 backdrop-blur-sm dark:bg-slate-950/50 mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center text-muted-foreground">
            <p>
              Ready to build your project? Go back to{" "}
              <strong>Cursor Chat</strong> to discuss your ideas and start developing features!
            </p>
            <p className="mt-2 text-sm">
              Framework by{" "}
              <a 
                href="https://5daysprint.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Omar Choudhry
              </a>
              {" "}• Learn more at{" "}
              <a 
                href="https://5daysprint.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                5daysprint.com
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
