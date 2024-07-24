'use client'

import * as React from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { z } from 'zod'

import { getErrorMessage } from '@/lib/handle-error'
import { useUploadFile } from '@/hooks/use-upload-file'
import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { FileUploader } from '@/components/notespali-ui/file-uploader'

import { UploadedFilesCard } from './uploaded-files-card'

const schema = z.object({
  images: z.array(z.instanceof(File)),
})

type Schema = z.infer<typeof schema>

export function ReactHookFormDemo({ type }: { type: string }) {
  const [loading, setLoading] = React.useState(false)
  const { uploadFiles, progresses, uploadedFiles, isUploading } = useUploadFile(
    'imageUploader',
    { defaultUploadedFiles: [] }
  )
  const form = useForm<Schema>({
    resolver: zodResolver(schema),
    defaultValues: {
      images: [],
    },
  })

  const hasImages = form.getValues('images').length > 0

  function onSubmit(input: Schema) {
    setLoading(true)

    toast.promise(uploadFiles(input.images), {
      loading: 'Uploading images...',
      success: () => {
        form.reset()
        setLoading(false)
        return 'Images uploaded'
      },
      error: (err) => {
        setLoading(false)
        return getErrorMessage(err)
      },
    })
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex w-full flex-col gap-6"
      >
        <FormField
          control={form.control}
          name="images"
          render={({ field }) => (
            <div className="space-y-6">
              <FormItem className="w-full">
                <FormControl>
                  <FileUploader
                    value={field.value}
                    onValueChange={field.onChange}
                    maxFiles={1}
                    maxSize={10 * 1024 * 1024}
                    progresses={progresses}
                    type={type}
                    // pass the onUpload function here for direct upload
                    // onUpload={uploadFiles}
                    disabled={isUploading}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
              {/* {uploadedFiles.length > 0 ? (
                <UploadedFilesCard uploadedFiles={uploadedFiles} />
              ) : null} */}
            </div>
          )}
        />
        <Button className="w-full" disabled={!hasImages || loading}>
          Upload
        </Button>
      </form>
    </Form>
  )
}
