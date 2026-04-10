import { Button } from 'ui'
import { Container } from '../layout/container'

export function HomeHeroSection() {
  return (
    <section>
      <Container>
        <div className="py-20">
          <p className="text-sm uppercase tracking-[0.16em] text-slate-500">Replace this section with the first real Figma-driven page.</p>
          <h1 className="mt-3 max-w-4xl text-5xl font-semibold leading-tight">
            Web stack starter with shared UI and CMS boundary
          </h1>
          <div className="mt-6">
            <Button>Start implementation</Button>
          </div>
        </div>
      </Container>
    </section>
  )
}
