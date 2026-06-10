import { useLayoutEffect, useMemo, useRef, useState } from 'react'
import { useI18n } from '../i18n/index.jsx'
import { education, projects, experience } from '../data/content.js'

// Below this container width the network stacks vertically (phones / narrow panes).
const VERTICAL_BELOW = 600

const diamond = (cx, cy, r) => `M${cx} ${cy - r} L${cx + r} ${cy} L${cx} ${cy + r} L${cx - r} ${cy} Z`

export default function NeuralMap({ onSelect }) {
  const { t } = useI18n()
  const wrapRef = useRef(null)
  const [w, setW] = useState(360)
  const [selected, setSelected] = useState(null)

  // Measure the container so the SVG can lay itself out responsively.
  useLayoutEffect(() => {
    const el = wrapRef.current
    if (!el) return
    const ro = new ResizeObserver(([entry]) => {
      const cw = entry.contentRect.width
      if (cw) setW(cw)
    })
    ro.observe(el)
    return () => ro.disconnect()
  }, [])

  const reduced =
    typeof window !== 'undefined' &&
    window.matchMedia?.('(prefers-reduced-motion: reduce)').matches

  // Build the layers. `input` = Paris-Saclay (the education that actually fed the work);
  // `hidden` = projects; `output` = experience; `next` = CentraleSupélec, a future
  // destination drawn beyond the outputs (it hasn't produced anything yet).
  const layers = useMemo(() => {
    const eduInput = education.filter((e) => e.role === 'input')
    const eduNext = education.filter((e) => e.role === 'next')
    return [
      {
        kind: 'input',
        nodes: eduInput.map((e) => ({
          key: e.id, label: e.short, title: t.education[e.id].title, target: `n-edu-${e.id}`,
        })),
      },
      {
        kind: 'hidden',
        nodes: projects.map((p) => ({
          key: p.id, label: p.short, title: t.projects[p.id].title, target: `n-proj-${p.id}`,
        })),
      },
      {
        kind: 'output',
        nodes: experience.map((x) => ({
          key: x.id, label: x.short, title: t.experience[x.id].role, target: `n-xp-${x.id}`,
        })),
      },
      {
        kind: 'next',
        nodes: eduNext.map((e) => ({
          key: e.id, label: e.short, sub: t.map.nextLabel, title: t.education[e.id].title, target: `n-edu-${e.id}`,
        })),
      },
    ]
  }, [t])

  const vertical = w < VERTICAL_BELOW
  const r = vertical ? 18 : 22

  // Position nodes, build the labelled box around each layer, and the bezier edges.
  const { width, height, positioned, edges, boxes } = useMemo(() => {
    const W = w
    let H
    const place = (li, ni, m) => {
      if (vertical) {
        const padX = 58
        const top = 58
        const gap = 122
        H = top + (layers.length - 1) * gap + 70
        const x = m === 1 ? W / 2 : padX + (W - 2 * padX) * (ni / (m - 1))
        return { x, y: top + li * gap }
      }
      const padY = 70
      const side = 86
      H = 400
      const gapX = (W - 2 * side) / (layers.length - 1)
      const y = m === 1 ? H / 2 : padY + (H - 2 * padY) * (ni / (m - 1))
      return { x: side + li * gapX, y }
    }

    const positioned = layers.map((layer, li) => ({
      ...layer,
      li,
      nodes: layer.nodes.map((n, ni) => ({ ...n, ...place(li, ni, layer.nodes.length), li })),
    }))

    // A rounded box hugging each layer's nodes, with room for a title on the top edge.
    const TITLE_SPACE = 27
    const boxes = positioned.map((layer) => {
      const xs = layer.nodes.map((n) => n.x)
      const ys = layer.nodes.map((n) => n.y)
      const hasSub = layer.nodes.some((n) => n.sub)
      const labelDrop = r + 16 + (hasSub ? 13 : 0)
      if (vertical) {
        const top = Math.min(...ys) - r - TITLE_SPACE
        const bottom = Math.max(...ys) + labelDrop + 6
        return { kind: layer.kind, x: 8, y: top, w: W - 16, h: bottom - top, tx: 20, ty: top + 15, anchor: 'start' }
      }
      const left = Math.min(...xs) - r - 18
      const right = Math.max(...xs) + r + 18
      const top = Math.min(...ys) - r - TITLE_SPACE
      const bottom = Math.max(...ys) + labelDrop + 6
      return { kind: layer.kind, x: left, y: top, w: right - left, h: bottom - top, tx: (left + right) / 2, ty: top + 15, anchor: 'middle' }
    })

    const edges = []
    for (let i = 0; i < positioned.length - 1; i++) {
      const pred = positioned[i + 1].kind === 'next'
      for (const a of positioned[i].nodes) {
        for (const b of positioned[i + 1].nodes) {
          const d = vertical
            ? `M${a.x} ${a.y} C${a.x} ${(a.y + b.y) / 2} ${b.x} ${(a.y + b.y) / 2} ${b.x} ${b.y}`
            : `M${a.x} ${a.y} C${(a.x + b.x) / 2} ${a.y} ${(a.x + b.x) / 2} ${b.y} ${b.x} ${b.y}`
          edges.push({ id: `${a.key}-${b.key}`, d, a: a.key, b: b.key, pred })
        }
      }
    }
    return { width: W, height: H, positioned, edges, boxes }
  }, [w, vertical, layers, r])

  const isLit = (e) => selected && (e.a === selected || e.b === selected)
  const activate = (node) => {
    setSelected(node.key)
    onSelect?.(node.target)
  }

  return (
    <div className="neural" ref={wrapRef}>
      <svg
        className={`net${reduced ? ' static' : ''}`}
        viewBox={`0 0 ${width} ${height}`}
        width="100%"
        height={height}
        role="group"
        aria-label={t.map.caption}
      >
        <g className="boxes">
          {boxes.map((b) => (
            <g key={`box-${b.kind}`} className={`layer-box ${b.kind}`}>
              <rect x={b.x} y={b.y} width={b.w} height={b.h} rx="12" />
              <text x={b.tx} y={b.ty} textAnchor={b.anchor} className="layer-label">
                {t.map.kinds[b.kind]}
              </text>
            </g>
          ))}
        </g>

        <g className="edges">
          {edges.map((e) => (
            <path key={e.id} d={e.d} className={`edge${e.pred ? ' pred' : ''}${isLit(e) ? ' lit' : ''}`} />
          ))}
        </g>

        {positioned.map((layer) =>
          layer.nodes.map((n) => {
            const dimmed = selected && selected !== n.key && layer.li === selectedLayer(positioned, selected)
            const lit = selected === n.key
            const labelY = n.y + r + 14
            return (
              <g
                key={n.key}
                className={`node ${layer.kind}${lit ? ' on' : ''}${dimmed ? ' dim' : ''}`}
                role="button"
                tabIndex={0}
                aria-label={`${t.map.kinds[layer.kind]} — ${n.title}`}
                onClick={() => activate(n)}
                onMouseEnter={() => setSelected(n.key)}
                onFocus={() => setSelected(n.key)}
                onKeyDown={(ev) => {
                  if (ev.key === 'Enter' || ev.key === ' ') {
                    ev.preventDefault()
                    activate(n)
                  }
                }}
              >
                <circle cx={n.x} cy={n.y} r={r + 4} className="halo" />
                {layer.kind === 'next'
                  ? <path d={diamond(n.x, n.y, r)} className="shape" />
                  : <circle cx={n.x} cy={n.y} r={r} className="shape" />}
                <text x={n.x} y={labelY} className="nlabel" textAnchor="middle">{n.label}</text>
                {n.sub && (
                  <text x={n.x} y={labelY + 13} className="nlabel sub" textAnchor="middle">{n.sub}</text>
                )}
              </g>
            )
          }),
        )}
      </svg>
      <p className="net-caption">{t.map.caption}</p>
    </div>
  )
}

// Which layer index does the currently-selected node live in?
function selectedLayer(positioned, key) {
  for (const layer of positioned) {
    if (layer.nodes.some((n) => n.key === key)) return layer.li
  }
  return -1
}
