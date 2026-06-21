import { useEffect, useRef } from 'react'
import { useI18n } from '../i18n/index.jsx'

// A per-internship "mini page": description, external links and the hosted PDF
// reports. Opened from the Experience list; closed with the × button, the
// backdrop, or Escape. `entry` is one item from the `experience` data array.
export default function ReportModal({ entry, onClose }) {
  const { t } = useI18n()
  const copy = t.experience[entry.id]
  const ui = t.reportModal
  const dialogRef = useRef(null)

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)
    // lock background scroll while the modal is open
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    dialogRef.current?.focus()
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = prevOverflow
    }
  }, [onClose])

  const reports = entry.reports || []
  const links = entry.links || []

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div
        className="modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="rm-title"
        tabIndex={-1}
        ref={dialogRef}
        onClick={(e) => e.stopPropagation()}
      >
        <button className="modal-close" onClick={onClose} aria-label={ui.close}>
          ×
        </button>
        <p className="modal-org">{copy.org}</p>
        <h3 id="rm-title">{copy.role}</h3>
        {copy.summary && <p className="modal-summary">{copy.summary}</p>}

        {links.length > 0 && (
          <div className="modal-links">
            {links.map((l) => (
              <a key={l.url} href={l.url} target="_blank" rel="noopener noreferrer">
                {l.label} ↗
              </a>
            ))}
          </div>
        )}

        {reports.length > 0 && (
          <div className="modal-docs">
            <h4>{ui.documents}</h4>
            {reports.map((r) => (
              <a
                key={r.id}
                className="doc"
                href={`/${r.file}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="doc-icon">PDF</span>
                <span className="doc-label">{copy.reports?.[r.id] || r.id}</span>
                <span className="doc-go">{ui.view} →</span>
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
