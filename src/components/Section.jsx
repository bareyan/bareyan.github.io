import { useReveal } from '../useReveal.js'

// A bordered section with a lowercase mono heading and scroll-reveal.
export default function Section({ id, title, children }) {
  const [ref, shown] = useReveal()
  return (
    <section id={id} ref={ref} className={`reveal${shown ? ' shown' : ''}`}>
      <h2>{title}</h2>
      {children}
    </section>
  )
}
