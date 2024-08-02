import { useState, useEffect } from 'react'
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import {
  ChevronDown,
  ChevronUp,
  Expand,
  Loader2,
  RotateCw,
  Search,
} from 'lucide-react'
import SimpleBar from 'simplebar-react'
import { Document, Page } from 'react-pdf'
// import { useToast } from './ui/use-toast'
import { useResizeDetector } from 'react-resize-detector'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Input } from '@/components/ui/input'
import { cn } from '@/lib/utils'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

interface PdfFullscreenProps {
  fileUrl: string
}

const PdfFullscreen = ({ fileUrl }: PdfFullscreenProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const [numPages, setNumPages] = useState<number>()
  const [currentPage, setCurrentPage] = useState(1)
  const [zoomLevel, setZoomLevel] = useState(1)

  //
  const [currPage, setCurrPage] = useState<number>(1)
  const [scale, setScale] = useState<number>(1)
  const [rotation, setRotation] = useState<number>(0)
  const [renderedScale, setRenderedScale] = useState<number | null>(null)

  const [zoomPercentage, setZoomPercentage] = useState(100)

  type TCustomPageValidator = z.infer<typeof CustomPageValidator>

  const CustomPageValidator = z.object({
    page: z
      .string()
      .refine((num) => Number(num) > 0 && Number(num) <= numPages!),
  })

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<TCustomPageValidator>({
    defaultValues: {
      page: '1',
    },
    resolver: zodResolver(CustomPageValidator),
  })

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowLeft') {
        setCurrentPage((prevPage) => Math.max(prevPage - 1, 1))
      } else if (event.key === 'ArrowRight') {
        setCurrentPage((prevPage) => Math.min(prevPage + 1, numPages))
      }
    }

    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [currentPage, numPages])

  //   const { toast } = useToast()

  const { width, ref } = useResizeDetector()

  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1))
  }

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, numPages))
  }

  const handleZoomIn = () => {
    setZoomLevel((prevZoom) => Math.min(prevZoom + 0.1, 2))
  }

  const handleZoomOut = () => {
    setZoomLevel((prevZoom) => Math.max(prevZoom - 0.1, 0.5))
  }

  const handlePageSubmit = ({ page }: TCustomPageValidator) => {
    setCurrPage(Number(page))
    setValue('page', String(page))
  }

  return (
    <Dialog
      open={isOpen}
      onOpenChange={(v) => {
        if (!v) {
          setIsOpen(v)
        }
      }}
    >
      <DialogTrigger onClick={() => setIsOpen(true)} asChild>
        <Button variant="ghost" className="gap-1.5 " aria-label="fullscreen">
          <Expand className="h-4 w-4" />
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-7xl w-full h-[90dvh] flex flex-col  ">
        {/* <div className="flex justify-between">
          <Button variant="ghost" onClick={handlePreviousPage}>
            Previous
          </Button>
          <div className="flex justify-between mt-4">
            <Button variant="ghost" onClick={handleZoomIn}>
              <ChevronUp className="h-4 w-4" />
            </Button>
            <p className="mt-4">Zoom: {zoomPercentage}%</p>
            <Button variant="ghost" onClick={handleZoomOut}>
              <ChevronDown className="h-4 w-4" />
            </Button>
          </div>
          <Button variant="ghost" onClick={handleNextPage}>
            Next
          </Button>
        </div> */}

        <div className="h-14 w-full border  border-zinc-200 flex items-center justify-between px-2">
          <div className="flex items-center gap-1.5">
            <Button
              disabled={currPage <= 1}
              onClick={() => {
                setCurrPage((prev) => (prev - 1 > 1 ? prev - 1 : 1))
                setValue('page', String(currPage - 1))
              }}
              variant="ghost"
              aria-label="previous page"
            >
              <ChevronDown className="h-4 w-4" />
            </Button>

            <div className="flex items-center gap-1.5">
              <Input
                {...register('page')}
                className={cn(
                  'w-12 h-8',
                  errors.page && 'focus-visible:ring-red-500'
                )}
                autoFocus={false}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    handleSubmit(handlePageSubmit)()
                  }
                }}
              />
              <p className="text-zinc-700 text-sm space-x-1">
                <span>/</span>
                <span>{numPages ?? 'x'}</span>
              </p>
            </div>

            <Button
              disabled={numPages === undefined || currPage === numPages}
              onClick={() => {
                setCurrPage((prev) =>
                  prev + 1 > numPages! ? numPages! : prev + 1
                )
                setValue('page', String(currPage + 1))
              }}
              variant="ghost"
              aria-label="next page"
            >
              <ChevronUp className="h-4 w-4" />
            </Button>
          </div>

          <div className="space-x-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button className="gap-1.5" aria-label="zoom" variant="ghost">
                  <Search className="h-4 w-4" />
                  {scale * 100}%
                  <ChevronDown className="h-3 w-3 opacity-50" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem onSelect={() => setScale(1)}>
                  100%
                </DropdownMenuItem>
                <DropdownMenuItem onSelect={() => setScale(1.5)}>
                  150%
                </DropdownMenuItem>
                <DropdownMenuItem onSelect={() => setScale(2)}>
                  200%
                </DropdownMenuItem>
                <DropdownMenuItem onSelect={() => setScale(2.5)}>
                  250%
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Button
              onClick={() => setRotation((prev) => prev + 90)}
              variant="ghost"
              aria-label="rotate 90 degrees"
            >
              <RotateCw className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <SimpleBar
          autoHide={false}
          className=" flex-1 border rounded-md max-h-[calc(90dvh-10rem)] mt-2 p-2"
        >
          <div ref={ref}>
            <Document
              loading={
                <div className="flex justify-center">
                  <Loader2 className="my-24 h-6 w-6 animate-spin" />
                </div>
              }
              onLoadError={() => {
                // toast({
                //   title: 'Error loading PDF',
                //   description: 'Please try again later',
                //   variant: 'destructive',
                // })
                alert('Error loading PDF')
              }}
              onLoadSuccess={({ numPages }) => setNumPages(numPages)}
              file={fileUrl}
              className="max-h-full  flex justify-center items-center"
            >
              <Page
                scale={0.5}
                width={width ? width : 1}
                pageNumber={currentPage}
                loading={
                  <div className="flex justify-center">
                    <Loader2 className="my-24 h-6 w-6 animate-spin" />
                  </div>
                }
              />
            </Document>
          </div>
        </SimpleBar>
      </DialogContent>
    </Dialog>
  )
}

export default PdfFullscreen
