import { Button as ButtonPrimitive } from '@base-ui/react/button'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

const buttonVariants = cva(
  'inline-flex min-h-11 items-center justify-center gap-2 border border-transparent px-4 text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-foreground disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground hover:bg-primary/85',
        outline:
          'border-border bg-background text-foreground hover:border-foreground',
        ghost: 'bg-transparent text-foreground hover:bg-muted',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
)

function Button({
  className,
  variant,
  ...props
}: ButtonPrimitive.Props & VariantProps<typeof buttonVariants>) {
  return (
    <ButtonPrimitive
      className={cn(buttonVariants({ variant, className }))}
      {...props}
    />
  )
}

export { Button }
