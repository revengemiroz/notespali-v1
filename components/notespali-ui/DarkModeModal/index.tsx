/**
 * v0 by Vercel.
 * @see https://v0.dev/t/c0FaUuER82Z
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Card } from '@/components/ui/card'
import {
  TooltipProvider,
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from '@/components/ui/tooltip'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Label } from '@/components/ui/label'
import { DropdownMenuItem } from '@/components/ui/dropdown-menu'

export default function Component() {
  return (
    <RadioGroup
      defaultValue="system"
      aria-label="Appearance"
      className="flex flex-col gap-1 items-center justify-center"
    >
      <DropdownMenuItem className="bg-accent cursor-pointer font-medium capitalize text-zinc-600 flex items-center gap-4 w-full">
        <Label
          htmlFor="light"
          className="flex flex-col items-center gap-2 cursor-pointer"
        >
          <RadioGroupItem id="light" value="light" className="peer sr-only" />
          <div className="w-full flex flex-row items-center gap-4">
            <div className="p-1 rounded-full bg-card text-card-foreground transition-colors peer-aria-checked:bg-primary peer-aria-checked:text-primary-foreground">
              <SunIcon className="w-4 h-4" />
            </div>
            <span className="text-xs w-full font-semibold transition-colors peer-aria-checked:text-primary">
              Light
            </span>
          </div>
        </Label>
      </DropdownMenuItem>

      <DropdownMenuItem className="w-full cursor-pointer font-medium capitalize text-zinc-600 flex items-center gap-4">
        <Label
          htmlFor="dark"
          className="flex flex-col items-center gap-2 cursor-pointer"
        >
          <RadioGroupItem id="dark" value="dark" className="peer sr-only" />
          <div className="w-full flex flex-row items-center gap-4">
            <div className="p-1 rounded-full bg-card text-card-foreground transition-colors peer-aria-checked:bg-primary peer-aria-checked:text-primary-foreground">
              <MoonIcon className="w-4 h-4" />
            </div>
            <span className="text-xs font-semibold transition-colors peer-aria-checked:text-primary">
              Dark
            </span>
          </div>
        </Label>
      </DropdownMenuItem>

      <DropdownMenuItem className="w-full cursor-pointer font-medium capitalize text-zinc-600 flex items-center gap-4">
        <Label
          htmlFor="system"
          className="flex flex-col items-center gap-2 cursor-pointer"
        >
          <RadioGroupItem id="system" value="system" className="peer sr-only" />
          <div className="w-full flex flex-row items-center gap-4">
            <div className="p-1 rounded-full bg-card text-card-foreground transition-colors peer-aria-checked:bg-primary peer-aria-checked:text-primary-foreground">
              <MonitorIcon className="w-4 h-4" />
            </div>
            <span className="text-xs font-semibold transition-colors peer-aria-checked:text-primary">
              System
            </span>
          </div>
        </Label>
      </DropdownMenuItem>
    </RadioGroup>
  )
}

function MonitorIcon(props: React.SVGProps<SVGSVGElement>): JSX.Element {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="14" x="2" y="3" rx="2" />
      <line x1="8" x2="16" y1="21" y2="21" />
      <line x1="12" x2="12" y1="17" y2="21" />
    </svg>
  )
}

function MoonIcon(props: React.SVGProps<SVGSVGElement>): JSX.Element {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
    </svg>
  )
}

function SunIcon(props: React.SVGProps<SVGSVGElement>) {
  const sunIconSize = '24'
  const sunIconViewBox = '0 0 24 24'
  const sunIconStrokeWidth = '2'

  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width={sunIconSize}
      height={sunIconSize}
      viewBox={sunIconViewBox}
      fill="none"
      stroke="currentColor"
      strokeWidth={sunIconStrokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2" />
      <path d="M12 20v2" />
      <path d="M4.93 4.93L5.34 5.34" />
      <path d="M17.66 17.66L17.26 17.26" />
      <path d="M2 12h2" />
      <path d="M20 12h2" />
      <path d="M6.34 17.66L5.74 17.26" />
      <path d="M19.07 4.93L18.67 5.34" />
    </svg>
  )
}
