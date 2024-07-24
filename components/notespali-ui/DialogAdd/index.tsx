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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

// add notes modal

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
            <CardTitle>Add Note</CardTitle>
            <CardDescription>
              Fill out the form below to add notes
            </CardDescription>
          </CardHeader>

          <CardContent className="border-0 px-0">
            <form className="space-y-4">
              <div className="grid grid-cols-1 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">Title</Label>
                  <Input
                    id="firstName"
                    placeholder="Old is Gold 2024 Physics"
                  />
                </div>
              </div>
              <div className="space-y-2 grid grid-cols-1">
                <Label htmlFor="email">Course</Label>
                {/* <Input
                  id="email"
                  type="email"
                  placeholder="john.doe@gmail.com"
                /> */}
                <Select>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Subject" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="physics">Physics</SelectItem>
                    <SelectItem value="chemistry">Chemistry</SelectItem>
                    <SelectItem value="biology">Biology</SelectItem>
                    <SelectItem value="maths">Math</SelectItem>
                    <SelectItem value="english">English</SelectItem>
                    <SelectItem value="nepali">Nepali</SelectItem>
                    <SelectItem value="computer">Computer</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="gap-6 grid grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="grade">Grade</Label>
                  <Select>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Grade" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="XII">XII</SelectItem>
                      <SelectItem value="XI">XI</SelectItem>
                      <SelectItem value="X">X</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="year">Year</Label>
                  <Select>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Year" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="2080">2080</SelectItem>
                      <SelectItem value="2079">2079</SelectItem>
                      <SelectItem value="2078">2078</SelectItem>
                      <SelectItem value="2077">2077</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  placeholder="Write a description of the note"
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
