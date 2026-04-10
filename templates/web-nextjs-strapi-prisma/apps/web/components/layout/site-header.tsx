import { Button } from 'ui'
import { Container } from './container'

export function SiteHeader() {
  return (
    <header className="border-b border-slate-200">
      <Container>
        <div className="flex items-center justify-between py-6">
          <strong>Template Web</strong>
          <Button>Primary action</Button>
        </div>
      </Container>
    </header>
  )
}
