"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { Slider } from "@/components/ui/slider"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Calendar } from "@/components/ui/calendar"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Separator } from "@/components/ui/separator"
import { 
  Home, 
  Settings, 
  Users, 
  BarChart3, 
  Calendar as CalendarIcon,
  Palette,
  Check,
  AlertCircle,
  Info,
  ExternalLink,
  ArrowLeft,
  Globe,
  Lightbulb,
  Zap
} from "lucide-react"

export default function Dashboard() {
  const [progress, setProgress] = useState(33)
  const [date, setDate] = useState<Date | undefined>(undefined)
  const [sliderValue, setSliderValue] = useState([50])
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    setDate(new Date())
  }, [])

  if (!mounted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900 flex items-center justify-center">
        <div className="text-center space-y-4">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="text-muted-foreground">Loading Component Showcase...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900">
      {/* Header */}
      <header className="border-b bg-white/50 backdrop-blur-sm dark:bg-slate-950/50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link href="/">
                <Button variant="ghost" size="sm">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Home
                </Button>
              </Link>
              <Separator orientation="vertical" className="h-6" />
              <h1 className="text-2xl font-bold">Component Showcase</h1>
            </div>
            <Badge variant="secondary">shadcn/ui Ecosystem</Badge>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="space-y-8">
          {/* Introduction */}
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold tracking-tight">
              Complete shadcn/ui Component Library
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Explore the full ecosystem of 40+ production-ready components, all styled with 
              Tailwind CSS and built with accessibility in mind. Every component is ready to use in your project.
            </p>
          </div>

          {/* Component Grid */}
          <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-6">
            
            {/* Buttons & Actions */}
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-lg flex items-center">
                  <Zap className="h-5 w-5 mr-2 text-blue-600" />
                  Buttons & Actions
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full">Primary Button</Button>
                <Button variant="secondary" className="w-full">Secondary</Button>
                <Button variant="outline" className="w-full">Outline</Button>
                <Button variant="ghost" size="sm" className="w-full">Ghost</Button>
                <a 
                  href="https://ui.shadcn.com/docs/components/button" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-xs text-blue-600 hover:underline flex items-center"
                >
                  <ExternalLink className="h-3 w-3 mr-1" />
                  View Documentation
                </a>
              </CardContent>
            </Card>

            {/* Forms & Inputs */}
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-lg flex items-center">
                  <Settings className="h-5 w-5 mr-2 text-green-600" />
                  Forms & Inputs
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" placeholder="Enter your email" />
                </div>
                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" placeholder="Type your message..." rows={3} />
                </div>
                <div className="flex items-center space-x-2">
                  <Switch id="notifications" />
                  <Label htmlFor="notifications">Enable notifications</Label>
                </div>
                <a 
                  href="https://ui.shadcn.com/docs/components/input" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-xs text-blue-600 hover:underline flex items-center"
                >
                  <ExternalLink className="h-3 w-3 mr-1" />
                  View Documentation
                </a>
              </CardContent>
            </Card>

            {/* Data Display */}
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-lg flex items-center">
                  <BarChart3 className="h-5 w-5 mr-2 text-purple-600" />
                  Data Display
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Progress</span>
                    <span>{progress}%</span>
                  </div>
                  <Progress value={progress} className="w-full" />
                </div>
                <div className="space-y-2">
                  <Label>Value: {sliderValue[0]}</Label>
                  <Slider
                    value={sliderValue}
                    onValueChange={setSliderValue}
                    max={100}
                    step={1}
                    className="w-full"
                  />
                </div>
                <div className="flex flex-wrap gap-1">
                  <Badge variant="default">Default</Badge>
                  <Badge variant="secondary">Secondary</Badge>
                  <Badge variant="outline">Outline</Badge>
                </div>
                <a 
                  href="https://ui.shadcn.com/docs/components/progress" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-xs text-blue-600 hover:underline flex items-center"
                >
                  <ExternalLink className="h-3 w-3 mr-1" />
                  View Documentation
                </a>
              </CardContent>
            </Card>

            {/* Selection & Choice */}
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-lg flex items-center">
                  <Check className="h-5 w-5 mr-2 text-orange-600" />
                  Selection & Choice
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="space-y-2">
                  <Label>Select Option</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Choose option" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="option1">Option 1</SelectItem>
                      <SelectItem value="option2">Option 2</SelectItem>
                      <SelectItem value="option3">Option 3</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>Radio Group</Label>
                  <RadioGroup defaultValue="option1">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="option1" id="r1" />
                      <Label htmlFor="r1">Option 1</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="option2" id="r2" />
                      <Label htmlFor="r2">Option 2</Label>
                    </div>
                  </RadioGroup>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="terms" />
                  <Label htmlFor="terms">Accept terms</Label>
                </div>
                <a 
                  href="https://ui.shadcn.com/docs/components/select" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-xs text-blue-600 hover:underline flex items-center"
                >
                  <ExternalLink className="h-3 w-3 mr-1" />
                  View Documentation
                </a>
              </CardContent>
            </Card>

            {/* Dialogs & Modals */}
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-lg flex items-center">
                  <Users className="h-5 w-5 mr-2 text-red-600" />
                  Dialogs & Modals
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="outline" className="w-full">Open Dialog</Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Example Dialog</DialogTitle>
                      <DialogDescription>
                        This is an example dialog built with shadcn/ui. It includes proper 
                        accessibility features and keyboard navigation.
                      </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                      <div>
                        <Label htmlFor="dialog-name">Name</Label>
                        <Input id="dialog-name" defaultValue="John Doe" />
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
                <Alert>
                  <AlertCircle className="h-4 w-4" />
                  <AlertTitle>Note</AlertTitle>
                  <AlertDescription>
                    All modals include focus management and ARIA attributes.
                  </AlertDescription>
                </Alert>
                <a 
                  href="https://ui.shadcn.com/docs/components/dialog" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-xs text-blue-600 hover:underline flex items-center"
                >
                  <ExternalLink className="h-3 w-3 mr-1" />
                  View Documentation
                </a>
              </CardContent>
            </Card>

            {/* Calendar & Date */}
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-lg flex items-center">
                  <CalendarIcon className="h-5 w-5 mr-2 text-cyan-600" />
                  Calendar & Date
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-center">
                  {mounted ? (
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      className="rounded-md border scale-75"
                    />
                  ) : (
                    <div className="h-[200px] w-[250px] rounded-md border bg-muted/50 animate-pulse scale-75" />
                  )}
                </div>
                <a 
                  href="https://ui.shadcn.com/docs/components/calendar" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-xs text-blue-600 hover:underline flex items-center"
                >
                  <ExternalLink className="h-3 w-3 mr-1" />
                  View Documentation
                </a>
              </CardContent>
            </Card>

            {/* Navigation & Layout */}
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-lg flex items-center">
                  <Home className="h-5 w-5 mr-2 text-indigo-600" />
                  Navigation & Layout
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Tabs defaultValue="tab1" className="w-full">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="tab1">Tab 1</TabsTrigger>
                    <TabsTrigger value="tab2">Tab 2</TabsTrigger>
                    <TabsTrigger value="tab3">Tab 3</TabsTrigger>
                  </TabsList>
                  <TabsContent value="tab1" className="text-sm text-muted-foreground">
                    Content for tab 1
                  </TabsContent>
                  <TabsContent value="tab2" className="text-sm text-muted-foreground">
                    Content for tab 2
                  </TabsContent>
                  <TabsContent value="tab3" className="text-sm text-muted-foreground">
                    Content for tab 3
                  </TabsContent>
                </Tabs>
                <a 
                  href="https://ui.shadcn.com/docs/components/tabs" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-xs text-blue-600 hover:underline flex items-center"
                >
                  <ExternalLink className="h-3 w-3 mr-1" />
                  View Documentation
                </a>
              </CardContent>
            </Card>

            {/* Content & Typography */}
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-lg flex items-center">
                  <Palette className="h-5 w-5 mr-2 text-pink-600" />
                  Content & Typography
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>Typography</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-2 text-sm">
                        <h4 className="font-semibold">Heading 4</h4>
                        <p className="text-muted-foreground">
                          Beautiful typography with proper hierarchy and spacing.
                        </p>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger>Colors</AccordionTrigger>
                    <AccordionContent>
                      <div className="grid grid-cols-4 gap-2">
                        <div className="h-8 bg-primary rounded"></div>
                        <div className="h-8 bg-secondary rounded"></div>
                        <div className="h-8 bg-muted rounded"></div>
                        <div className="h-8 bg-accent rounded"></div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
                <a 
                  href="https://ui.shadcn.com/docs/components/accordion" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-xs text-blue-600 hover:underline flex items-center"
                >
                  <ExternalLink className="h-3 w-3 mr-1" />
                  View Documentation
                </a>
              </CardContent>
            </Card>

          </div>

          {/* Documentation Links */}
          <div className="text-center space-y-6 pt-8">
            <Separator />
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold flex items-center justify-center">
                <Globe className="h-6 w-6 mr-2" />
                Complete shadcn/ui Ecosystem
              </h3>
              <div className="grid md:grid-cols-4 gap-4 max-w-4xl mx-auto">
                <Card className="text-center">
                  <CardContent className="pt-6">
                    <Lightbulb className="h-8 w-8 mx-auto mb-2 text-yellow-600" />
                    <h4 className="font-semibold mb-2">Components</h4>
                    <p className="text-sm text-muted-foreground mb-3">
                      40+ production-ready components
                    </p>
                    <a 
                      href="https://ui.shadcn.com/docs/components" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <Button variant="outline" size="sm" className="w-full">
                        <ExternalLink className="h-3 w-3 mr-1" />
                        Browse All
                      </Button>
                    </a>
                  </CardContent>
                </Card>
                
                <Card className="text-center">
                  <CardContent className="pt-6">
                    <Palette className="h-8 w-8 mx-auto mb-2 text-purple-600" />
                    <h4 className="font-semibold mb-2">Themes</h4>
                    <p className="text-sm text-muted-foreground mb-3">
                      Beautiful color palettes and themes
                    </p>
                    <a 
                      href="https://ui.shadcn.com/themes" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <Button variant="outline" size="sm" className="w-full">
                        <ExternalLink className="h-3 w-3 mr-1" />
                        View Themes
                      </Button>
                    </a>
                  </CardContent>
                </Card>
                
                <Card className="text-center">
                  <CardContent className="pt-6">
                    <BarChart3 className="h-8 w-8 mx-auto mb-2 text-blue-600" />
                    <h4 className="font-semibold mb-2">Charts</h4>
                    <p className="text-sm text-muted-foreground mb-3">
                      Data visualization components
                    </p>
                    <a 
                      href="https://ui.shadcn.com/charts" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <Button variant="outline" size="sm" className="w-full">
                        <ExternalLink className="h-3 w-3 mr-1" />
                        View Charts
                      </Button>
                    </a>
                  </CardContent>
                </Card>
                
                <Card className="text-center">
                  <CardContent className="pt-6">
                    <Zap className="h-8 w-8 mx-auto mb-2 text-green-600" />
                    <h4 className="font-semibold mb-2">Blocks</h4>
                    <p className="text-sm text-muted-foreground mb-3">
                      Pre-built sections and layouts
                    </p>
                    <a 
                      href="https://ui.shadcn.com/blocks" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <Button variant="outline" size="sm" className="w-full">
                        <ExternalLink className="h-3 w-3 mr-1" />
                        View Blocks
                      </Button>
                    </a>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>

          {/* Framework Info */}
          <div className="text-center pt-8">
            <Alert className="max-w-2xl mx-auto">
              <Info className="h-4 w-4" />
              <AlertTitle>5 Day Sprint Framework Ready</AlertTitle>
              <AlertDescription>
                All components are installed and ready to use in your project. 
                Go back to <strong>Cursor Chat</strong> to start building your features!
              </AlertDescription>
            </Alert>
          </div>
        </div>
      </div>
    </div>
  )
}
