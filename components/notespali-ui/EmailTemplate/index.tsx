import {
  Body,
  Button,
  Container,
  Head,
  Html,
  Preview,
  Row,
  Section,
  Text,
} from '@react-email/components'
import * as React from 'react'

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : ''

const VerificationEmail = () => {
  const previewText = 'Verify your email address'

  return (
    <Html>
      <Head />
      <Preview>{previewText}</Preview>

      <Body style={main}>
        <Container style={container}>
          <Section>
            <Row style={logoContainer}>
              <MountainIcon style={mountainIcon} />
              <Text style={srOnly}>Acme Inc</Text>
            </Row>
          </Section>

          <Section>
            <Text style={heading}>Verify Your Email</Text>
            <Text style={paragraph}>
              Please use the code below to verify your email address and
              complete your registration.
            </Text>
          </Section>

          <Section style={codeSection}>
            <Text style={verificationCode}>123456</Text>
            <Button style={button} href="#">
              Verify Email
            </Button>
          </Section>

          <Text style={footerText}>
            If you did not request this verification, you can safely ignore this
            email.
          </Text>
        </Container>
      </Body>
    </Html>
  )
}

export default VerificationEmail

const main = {
  backgroundColor: '#ffffff',
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
}

const container = {
  margin: '0 auto',
  padding: '20px 0 48px',
  width: '580px',
  maxWidth: '100%',
}

const logoContainer = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}

const mountainIcon = {
  width: '32px',
  height: '32px',
  color: '#0f172a',
}

const srOnly = {
  position: 'absolute',
  width: '1px',
  height: '1px',
  padding: '0',
  margin: '-1px',
  overflow: 'hidden',
  clip: 'rect(0, 0, 0, 0)',
  border: '0',
}

const heading = {
  fontSize: '32px',
  fontWeight: '700',
  color: '#0f172a',
  textAlign: 'center',
}

const paragraph = {
  fontSize: '16px',
  color: '#64748b',
  textAlign: 'center',
}

const codeSection = {
  backgroundColor: '#f1f5f9',
  padding: '40px 24px',
  borderRadius: '8px',
  textAlign: 'center',
}

const verificationCode = {
  fontSize: '60px',
  fontWeight: '800',
  color: '#0f172a',
}

const button = {
  backgroundColor: '#0f172a',
  borderRadius: '8px',
  color: '#fff',
  fontWeight: '500',
  fontSize: '16px',
  padding: '12px',
  textDecoration: 'none',
  display: 'inline-block',
  marginTop: '16px',
  width: '80%',
  textAlign: 'center',
}

const footerText = {
  fontSize: '14px',
  color: '#64748b',
  textAlign: 'center',
  marginTop: '24px',
}

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
