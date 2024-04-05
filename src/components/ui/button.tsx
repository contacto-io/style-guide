import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "../../lib/utils"
import { ChevronRight, Loader2, Mail } from "lucide-react"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        primary: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        "danger-secondary":
            "bg-white text-destructive hover:bg-danger-secondary/90 border border-destructive",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-white text-primary hover:bg-secondary/80 border border-primary",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
                "link-danger": "text-destructive underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-7 rounded-md px-2",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}


const ShadButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, icon, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
        const propsMap = {
            secondary: 'secondary',
            primary: 'default',
            "danger-primary": 'destructive',
            small: 'sm',
            large: 'lg',
            icon: 'icon',
            "danger-secondary": "danger-secondary",
            link: "link",
            "link-danger": "link-danger"
        }
        if(props.loading) return <ButtonLoading />
        if(icon && (!props.children)) return <ButtonIcon variant={variant} {...props}/>
        if(icon) return <ButtonWithIcon variant={variant} {...props}/>
        console.log(propsMap[size], propsMap[props.type], props.type)
    return (
      <Comp
        className={cn(buttonVariants({ variant: variant || propsMap[props.type], size:propsMap[size], className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
ShadButton.displayName = "Button"

function ButtonWithIcon(props) {
  return (
    <ShadButton>
      <Mail className="mr-2 h-4 w-4" /> {props.children || props.label}
    </ShadButton>
  )
}

export function ButtonIcon() {
  return (
    <ShadButton size="icon">
      <ChevronRight className="h-4 w-4" />
    </ShadButton>
  )
}

export function ButtonLoading() {
  return (
    <ShadButton disabled>
      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
      Please wait
    </ShadButton>
  )
}

export { ShadButton, buttonVariants }
