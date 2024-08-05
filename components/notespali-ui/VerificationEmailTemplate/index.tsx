/**
 * v0 by Vercel.
 * @see https://v0.dev/t/iVlv9jsdszO
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Button } from '@/components/ui/button'

function verificationEmailTemplate() {
  return (
    <div className="flex min-h-[100dvh] flex-col items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-md space-y-6 text-center">
        <div className="flex items-center justify-center">
          <MountainIcon className="h-8 w-8 text-primary" />
          <span className="sr-only">Acme Inc</span>
        </div>
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight text-foreground">
            Verify Your Email
          </h1>
          <p className="text-muted-foreground">
            Please use the code below to verify your email address and complete
            your registration.
          </p>
        </div>
        <div className="rounded-lg border bg-muted p-8">
          <div className="flex flex-col items-center justify-center gap-4">
            <div className="text-6xl font-bold tracking-tighter text-primary">
              123456
            </div>
            <Button type="button" className="w-full">
              Verify Email
            </Button>
          </div>
        </div>
        <p className="text-sm text-muted-foreground">
          If you did not request this verification, you can safely ignore this
          email.
        </p>
      </div>
    </div>
  )
}

export default verificationEmailTemplate

function MountainIcon(props: React.SVGAttributes<SVGSVGElement>) {
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
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  )
}
