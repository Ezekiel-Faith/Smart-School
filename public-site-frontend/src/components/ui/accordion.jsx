import * as React from 'react';
import * as AccordionPrimitive from '@radix-ui/react-accordion';
// 🔁 Changed from ChevronDownIcon to ChevronRightIcon
import { ChevronRightIcon } from 'lucide-react';

import { cn } from '@/lib/utils';

function Accordion({ ...props }) {
  return <AccordionPrimitive.Root data-slot='accordion' {...props} />;
}

function AccordionItem({ className, ...props }) {
  return <AccordionPrimitive.Item data-slot='accordion-item' {...props} />;
}

function AccordionTrigger({ className, children, ...props }) {
  return (
    <AccordionPrimitive.Header className='flex'>
      <AccordionPrimitive.Trigger
        data-slot='accordion-trigger'
        className={cn(
          'focus-visible:border-ring focus-visible:ring-ring/50 flex flex-1 items-start justify-between gap-4 rounded-md py-4 text-left text-sm font-medium transition-all outline-none focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50',
          // 🔁 This rotates the ChevronRightIcon 90 degrees (to point down) when open
          '[&[data-state=open]>svg]:rotate-90',
          className
        )}
        {...props}
      >
        {children}
        {/* 🔁 Replaced down arrow icon with right arrow icon */}
        <ChevronRightIcon className='text-muted-foreground pointer-events-none size-4 shrink-0 translate-y-0.5 transition-transform duration-200' />
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  );
}

function AccordionContent({ className, children, ...props }) {
  return (
    <AccordionPrimitive.Content
      data-slot='accordion-content'
      className='data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-sm'
      {...props}
    >
      <div className={cn('pt-0 pb-4', className)}>{children}</div>
    </AccordionPrimitive.Content>
  );
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
