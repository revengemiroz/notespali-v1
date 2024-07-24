/**
 * v0 by Vercel.
 * @see https://v0.dev/t/Fc8Ui20xzH4
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
} from '@/components/ui/dialog'

export default function Component({
  isShareModalOpen,
  setIsShareModalOpen,
}: {
  isShareModalOpen: boolean
  setIsShareModalOpen: (value: boolean) => void
}) {
  return (
    <Dialog open={isShareModalOpen} onOpenChange={setIsShareModalOpen}>
      <DialogContent className="sm:max-w-[425px]">
        <Card className="border-0">
          <CardHeader className="px-0">
            <CardTitle>Contact Us</CardTitle>
            <CardDescription>
              Fill out the message below and we&apos;ll get back to you as soon
              as possible.
            </CardDescription>
          </CardHeader>

          <CardContent className="border-0 px-0">
            <form className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  placeholder="How can we help you?"
                  className="min-h-[120px] max-h-[120px]"
                />
              </div>
            </form>
          </CardContent>
          <DialogFooter>
            <Button type="submit" className="w-full">
              Submit
            </Button>
          </DialogFooter>
        </Card>
      </DialogContent>
    </Dialog>
  )
}
