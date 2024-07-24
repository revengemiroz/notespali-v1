'use client'

import { Button } from '@/components/ui/button'
import React, { useState } from 'react'

import DialogAdd from '@/components/notespali-ui/DialogAdd'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from '@/components/ui/select'
import { ReactHookFormDemo } from '@/components/notespali-ui/ImageUpload'
import { Dialog, DialogContent, DialogHeader } from '@/components/ui/dialog'
import { ScrollArea } from '@/components/ui/scroll-area'

function AddNotes() {
  return (
    <main className="flex flex-1 flex-col gap-4">
      <h1 className="text-lg font-semibold md:text-2xl">Add Notes</h1>
      <div className="bg-muted/40 border rounded-md h-full flex ">
        <div className="flex-1 p-4 ">
          <RightSideView />
        </div>
      </div>
    </main>
  )
}

export default AddNotes

/**
 * v0 by Vercel.
 * @see https://v0.dev/t/KCKcach3CQE
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */

function RightSideView() {
  const [showDialog, setShowDialog] = useState(false)

  return (
    <div className="border bg-white w-full grid md:grid-cols-2 gap-6 rounded-md mx-auto p-6 sm:p-8 md:p-10">
      <div className=" h-fit">
        <img
          src="https://generated.vusercontent.net/placeholder.svg"
          alt="Preview"
          width={600}
          height={400}
          className="rounded-lg object-cover w-full aspect-[3/2]"
        />
      </div>
      <div className="space-y-6">
        <div className="grid gap-2">
          <Label htmlFor="title">Title</Label>
          <Input id="title" placeholder="Enter a title" />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="description">Description</Label>
          <Textarea
            id="description"
            placeholder="Enter a description"
            rows={4}
          />
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
        <div className="grid grid-cols-2 gap-4">
          <div className="grid  gap-2">
            <Label htmlFor="class-year">Class Year</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select class year" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="2023">2023</SelectItem>
                <SelectItem value="2024">2024</SelectItem>
                <SelectItem value="2025">2025</SelectItem>
                <SelectItem value="2026">2026</SelectItem>
                <SelectItem value="2027">2027</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="class-year">Grade</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select grade" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="XII">XII</SelectItem>
                <SelectItem value="XI">XI</SelectItem>
                <SelectItem value="X">X</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="grid gap-2">
            <Label htmlFor="image">Image</Label>
            <Button
              onClick={() => setShowDialog(true)}
              variant="ghost"
              className="border"
            >
              Choose File
            </Button>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="pdf">PDF</Label>
            <Button
              onClick={() => setShowDialog(true)}
              variant="ghost"
              className="border"
            >
              Choose File
            </Button>
          </div>
        </div>
        <Button type="submit" disabled className="w-full">
          Upload Notes
        </Button>
      </div>

      <Dialog open={showDialog} onOpenChange={setShowDialog}>
        <DialogContent className="sm:max-w-[350px]">
          <ScrollArea className="min-h-72 max-h-3/5 rounded-md">
            <DialogHeader className="mb-2 font-semibold text-xl">
              Upload Files
            </DialogHeader>
            <ReactHookFormDemo type="image" />
          </ScrollArea>
        </DialogContent>
      </Dialog>
    </div>
  )
}
