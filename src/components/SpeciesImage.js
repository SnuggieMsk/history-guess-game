import React, { useState } from 'react';
import SpeciesIllustration from './SpeciesIllustration';

/**
 * Renders a species image with graceful fallback chain:
 *   1. Try /species/{id}.jpg (drop a real licensed photo here)
 *   2. Fall back to SVG illustration (always available)
 *
 * Drop real photos in public/species/{id}.jpg to override.
 * See public/species/README.md for licensing + sourcing guidance.
 */
export default function SpeciesImage({ id, alt, credit, license, scientificName }) {
  const [photoFailed, setPhotoFailed] = useState(false);
  const photoSrc = `${process.env.PUBLIC_URL}/species/${id}.jpg`;

  return (
    <figure style={{
      margin: 0,
      background: 'var(--c-surface-2)',
      border: '1px solid var(--c-border)',
      borderRadius: 6,
      overflow: 'hidden',
    }}>
      <div style={{
        background: '#fbf8f1',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: 220,
        padding: 10,
      }}>
        {!photoFailed ? (
          <img
            src={photoSrc}
            alt={alt || `${id} species photo`}
            loading="lazy"
            onError={() => setPhotoFailed(true)}
            style={{
              maxWidth: '100%',
              maxHeight: 360,
              objectFit: 'contain',
              borderRadius: 4,
            }}
          />
        ) : (
          <div style={{ width: '100%', maxWidth: 600 }}>
            <SpeciesIllustration id={id} />
          </div>
        )}
      </div>
      {(credit || license || scientificName) && (
        <figcaption style={{
          padding: '8px 14px',
          fontSize: 11,
          color: 'var(--c-text-dim)',
          background: 'var(--c-surface)',
          borderTop: '1px solid var(--c-border)',
          display: 'flex',
          gap: 12,
          flexWrap: 'wrap',
          justifyContent: 'space-between',
        }}>
          {scientificName && (
            <span style={{ fontStyle: 'italic', fontFamily: 'Georgia, serif' }}>{scientificName}</span>
          )}
          {photoFailed ? (
            <span style={{ color: 'var(--c-text-faint)' }}>
              Illustration · drop a licensed photo at <code>public/species/{id}.jpg</code> to replace
            </span>
          ) : (
            <span>
              {credit && <strong>Photo: </strong>}{credit}
              {license && <span style={{ marginLeft: 6 }}>· {license}</span>}
            </span>
          )}
        </figcaption>
      )}
    </figure>
  );
}
