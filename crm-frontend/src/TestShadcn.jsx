import React from 'react';
import { Button } from '@/components/ui/button';

const TestShadcn = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-8">
      <h1 className="text-3xl font-bold mb-8">Shadcn UI Test Page</h1>
      
      <div className="space-y-4 w-full max-w-md">
        <Button className="w-full">Primary Button</Button>
        <Button variant="outline" className="w-full">Outline Button</Button>
        <Button variant="secondary" className="w-full">Secondary Button</Button>
        <Button variant="destructive" className="w-full">Destructive Button</Button>
        <Button variant="ghost" className="w-full">Ghost Button</Button>
        <Button variant="link" className="w-full">Link Button</Button>
      </div>
    </div>
  );
};

export default TestShadcn;
