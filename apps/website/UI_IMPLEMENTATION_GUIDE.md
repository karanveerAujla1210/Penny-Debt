# UI Libraries Implementation Guide

## 🎯 Overview

This guide shows how to implement all UI libraries mentioned in the README across the entire website.

## 📦 Step 1: Install Missing Packages

Run the installation script:

```bash
# Windows
INSTALL_MISSING_PACKAGES.bat

# Or manually:
cd apps/website
npm install @radix-ui/react-accordion @radix-ui/react-label @radix-ui/react-dialog @radix-ui/react-dropdown-menu @radix-ui/react-tabs @radix-ui/react-tooltip @radix-ui/react-select
npm install class-variance-authority tailwind-merge @hookform/resolvers
npm install gsap lottie-react zustand
npm install tailwindcss-animate
```

## 🎨 Step 2: Update Configuration

### 2.1 Update Tailwind Config

Replace `tailwind.config.js` with `tailwind.config.enhanced.js`:

```bash
# Backup old config
copy tailwind.config.js tailwind.config.old.js

# Use enhanced config
copy tailwind.config.enhanced.js tailwind.config.js
```

### 2.2 Update CSS Imports

Add to `src/main.jsx` or `src/index.css`:

```javascript
import './styles/shadcn-globals.css';
```

## 🔄 Step 3: Replace Pages with Enhanced Versions

### 3.1 ApplyLoan Page

```bash
# Backup old version
move src\pages\ApplyLoan.jsx src\pages\ApplyLoan.old.jsx

# Use enhanced version
move src\pages\ApplyLoan.Enhanced.jsx src\pages\ApplyLoan.jsx
```

### 3.2 FAQ Page

```bash
# Backup old version
move src\pages\FAQ.jsx src\pages\FAQ.old.jsx

# Use enhanced version
move src\pages\FAQ.Enhanced.jsx src\pages\FAQ.jsx
```

## 🧩 Step 4: Create Additional UI Components

### 4.1 Dialog Component

Create `src/components/ui/dialog.jsx`:

```jsx
import * as React from "react"
import * as DialogPrimitive from "@radix-ui/react-dialog"
import { X } from "lucide-react"
import { cn } from "@/lib/utils"

const Dialog = DialogPrimitive.Root
const DialogTrigger = DialogPrimitive.Trigger
const DialogPortal = DialogPrimitive.Portal
const DialogClose = DialogPrimitive.Close

const DialogOverlay = React.forwardRef(({ className, ...props }, ref) => (
  <DialogPrimitive.Overlay
    ref={ref}
    className={cn(
      "fixed inset-0 z-50 bg-background/80 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    )}
    {...props}
  />
))
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName

const DialogContent = React.forwardRef(({ className, children, ...props }, ref) => (
  <DialogPortal>
    <DialogOverlay />
    <DialogPrimitive.Content
      ref={ref}
      className={cn(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
        className
      )}
      {...props}
    >
      {children}
      <DialogPrimitive.Close className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
        <X className="h-4 w-4" />
        <span className="sr-only">Close</span>
      </DialogPrimitive.Close>
    </DialogPrimitive.Content>
  </DialogPortal>
))
DialogContent.displayName = DialogPrimitive.Content.displayName

export { Dialog, DialogTrigger, DialogContent, DialogClose }
```

### 4.2 Tooltip Component

Create `src/components/ui/tooltip.jsx`:

```jsx
import * as React from "react"
import * as TooltipPrimitive from "@radix-ui/react-tooltip"
import { cn } from "@/lib/utils"

const TooltipProvider = TooltipPrimitive.Provider
const Tooltip = TooltipPrimitive.Root
const TooltipTrigger = TooltipPrimitive.Trigger

const TooltipContent = React.forwardRef(({ className, sideOffset = 4, ...props }, ref) => (
  <TooltipPrimitive.Content
    ref={ref}
    sideOffset={sideOffset}
    className={cn(
      "z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className
    )}
    {...props}
  />
))
TooltipContent.displayName = TooltipPrimitive.Content.displayName

export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider }
```

### 4.3 Tabs Component

Create `src/components/ui/tabs.jsx`:

```jsx
import * as React from "react"
import * as TabsPrimitive from "@radix-ui/react-tabs"
import { cn } from "@/lib/utils"

const Tabs = TabsPrimitive.Root

const TabsList = React.forwardRef(({ className, ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    className={cn(
      "inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground",
      className
    )}
    {...props}
  />
))
TabsList.displayName = TabsPrimitive.List.displayName

const TabsTrigger = React.forwardRef(({ className, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={cn(
      "inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm",
      className
    )}
    {...props}
  />
))
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName

const TabsContent = React.forwardRef(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={cn(
      "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      className
    )}
    {...props}
  />
))
TabsContent.displayName = TabsPrimitive.Content.displayName

export { Tabs, TabsList, TabsTrigger, TabsContent }
```

## 🎬 Step 5: Add GSAP Animations

Create `src/hooks/useGSAP.js`:

```javascript
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const useGSAP = (animationCallback, dependencies = []) => {
  const ref = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      animationCallback(gsap, ScrollTrigger);
    }, ref);

    return () => ctx.revert();
  }, dependencies);

  return ref;
};
```

Usage example in any page:

```jsx
import { useGSAP } from '../hooks/useGSAP';

const MyComponent = () => {
  const containerRef = useGSAP((gsap, ScrollTrigger) => {
    gsap.from('.fade-in', {
      opacity: 0,
      y: 50,
      duration: 1,
      stagger: 0.2,
      scrollTrigger: {
        trigger: '.fade-in',
        start: 'top 80%',
      }
    });
  });

  return (
    <div ref={containerRef}>
      <div className="fade-in">Content 1</div>
      <div className="fade-in">Content 2</div>
    </div>
  );
};
```

## 🎨 Step 6: Add Lottie Animations

Create `src/components/LottieAnimation.jsx`:

```jsx
import Lottie from 'lottie-react';

const LottieAnimation = ({ animationData, loop = true, autoplay = true, style }) => {
  return (
    <Lottie
      animationData={animationData}
      loop={loop}
      autoplay={autoplay}
      style={style}
    />
  );
};

export default LottieAnimation;
```

Usage:

```jsx
import LottieAnimation from '../components/LottieAnimation';
import successAnimation from '../assets/animations/success.json';

<LottieAnimation 
  animationData={successAnimation} 
  style={{ width: 200, height: 200 }}
/>
```

## 📊 Step 7: Add Recharts Visualizations

Create `src/components/DebtReductionChart.jsx`:

```jsx
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const DebtReductionChart = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="debt" stroke="#2563eb" strokeWidth={2} />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default DebtReductionChart;
```

Usage:

```jsx
const data = [
  { month: 'Jan', debt: 100000 },
  { month: 'Feb', debt: 85000 },
  { month: 'Mar', debt: 70000 },
  { month: 'Apr', debt: 55000 },
  { month: 'May', debt: 40000 },
  { month: 'Jun', debt: 25000 },
];

<DebtReductionChart data={data} />
```

## 🗂️ Step 8: Add Zustand State Management

Create `src/store/useStore.js`:

```javascript
import { create } from 'zustand';

export const useStore = create((set) => ({
  user: null,
  setUser: (user) => set({ user }),
  
  formData: {},
  setFormData: (data) => set({ formData: data }),
  
  isLoading: false,
  setLoading: (loading) => set({ isLoading: loading }),
}));
```

Usage:

```jsx
import { useStore } from '../store/useStore';

const MyComponent = () => {
  const { user, setUser } = useStore();
  
  return <div>Welcome {user?.name}</div>;
};
```

## ✅ Step 9: Update All Forms

Apply React Hook Form + Zod to:

1. ✅ ApplyLoan.jsx (Done)
2. Contact.jsx
3. Careers.jsx
4. Any other forms

Example pattern:

```jsx
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
});

const MyForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(schema)
  });

  const onSubmit = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input {...register('name')} />
      {errors.name && <span>{errors.name.message}</span>}
      <Button type="submit">Submit</Button>
    </form>
  );
};
```

## 🎯 Step 10: Component Usage Examples

### Using Accordion (FAQ, About)

```jsx
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

<Accordion type="single" collapsible>
  <AccordionItem value="item-1">
    <AccordionTrigger>Question 1?</AccordionTrigger>
    <AccordionContent>Answer 1</AccordionContent>
  </AccordionItem>
</Accordion>
```

### Using Dialog (Modals)

```jsx
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';

<Dialog>
  <DialogTrigger asChild>
    <Button>Open Modal</Button>
  </DialogTrigger>
  <DialogContent>
    <h2>Modal Content</h2>
  </DialogContent>
</Dialog>
```

### Using Tooltip (Help text)

```jsx
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

<TooltipProvider>
  <Tooltip>
    <TooltipTrigger>Hover me</TooltipTrigger>
    <TooltipContent>
      <p>Helpful information</p>
    </TooltipContent>
  </Tooltip>
</TooltipProvider>
```

### Using Tabs (Services, Pricing)

```jsx
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

<Tabs defaultValue="tab1">
  <TabsList>
    <TabsTrigger value="tab1">Tab 1</TabsTrigger>
    <TabsTrigger value="tab2">Tab 2</TabsTrigger>
  </TabsList>
  <TabsContent value="tab1">Content 1</TabsContent>
  <TabsContent value="tab2">Content 2</TabsContent>
</Tabs>
```

## 📋 Checklist

- [ ] Install all missing packages
- [ ] Update Tailwind config
- [ ] Add ShadCN CSS variables
- [ ] Replace ApplyLoan page
- [ ] Replace FAQ page
- [ ] Create Dialog component
- [ ] Create Tooltip component
- [ ] Create Tabs component
- [ ] Add GSAP animations
- [ ] Add Lottie animations
- [ ] Add Recharts visualizations
- [ ] Setup Zustand store
- [ ] Update Contact form
- [ ] Update Careers form
- [ ] Add tooltips throughout
- [ ] Add modals for quick actions
- [ ] Test all components
- [ ] Update documentation

## 🚀 Testing

After implementation, test:

1. Form validation (all forms)
2. Accordion expand/collapse
3. Modal open/close
4. Tooltip hover
5. Tab switching
6. GSAP scroll animations
7. Lottie animations
8. Chart rendering
9. State management
10. Responsive design

## 📚 Resources

- [Radix UI Docs](https://www.radix-ui.com/)
- [ShadCN UI Docs](https://ui.shadcn.com/)
- [React Hook Form](https://react-hook-form.com/)
- [Zod](https://zod.dev/)
- [GSAP](https://greensock.com/docs/)
- [Lottie](https://lottiefiles.com/)
- [Recharts](https://recharts.org/)
- [Zustand](https://zustand-demo.pmnd.rs/)

## 🎉 Result

After completing all steps, your website will have:

✅ Consistent UI components (ShadCN/Radix)
✅ Proper form validation (React Hook Form + Zod)
✅ Advanced animations (GSAP + Lottie)
✅ Data visualizations (Recharts)
✅ State management (Zustand)
✅ Better accessibility (Radix UI)
✅ Improved UX
✅ Production-ready code
