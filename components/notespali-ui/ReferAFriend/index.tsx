/**
 * v0 by Vercel.
 * @see https://v0.dev/t/go4vB87SDhC
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { toast } from 'sonner'

function ReferAFriend({
  open,
  onOpenChange,
}: {
  open: boolean
  onOpenChange: (value: boolean) => void
}) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[400px]">
        <DialogHeader>
          <DialogTitle>Refer a Friend</DialogTitle>
          <DialogDescription>
            Share your unique referral link and earn credits when your friends
            sign up.
          </DialogDescription>
        </DialogHeader>
        <div className="grid">
          <div className="flex items-center justify-between">
            <div className="w-full">
              <p className="text-sm font-medium">Your Referral Link</p>
              <p className="text-muted-foreground bg-accent rounded-md px-4 py-2 w-full text-sm">
                https://example.com/refer/abc123
              </p>
            </div>
          </div>
        </div>
        <Button
          onClick={() => {
            navigator.clipboard.writeText('https://example.com/refer/abc123')
            toast.success('Copied to clipboard!')
          }}
          variant="outline"
          size="sm"
        >
          <CopyIcon className="mr-2 h-4 w-4" />
          Copy Link
        </Button>
      </DialogContent>
    </Dialog>
  )
}

export default ReferAFriend

function CopyIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
      <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
    </svg>
  )
}
