import { useState } from 'react';
import type { ProjectImage } from '../../types/project';
import { resolveAssetPath } from '../../utils/assets';

export function ImagePlaceholder({ image, onOpen }: { image: ProjectImage; onOpen?: () => void }) {
  const [hasError, setHasError] = useState(false);
  const content = (
    <>
      <span>IMAGE REQUIRED</span>
      <strong>{image.placeholderTitle}</strong>
      <p>{image.placeholderDescription}</p>
      <small>권장 비율 {image.aspectRatio}{image.isConfidential ? ' · 비식별화 필요' : ''}</small>
    </>
  );

  if (image.src?.trim() && !hasError) {
    return (
      <button type="button" className="image-placeholder has-image" onClick={onOpen}>
        <img src={resolveAssetPath(image.src)} alt={image.alt} loading="lazy" onError={() => setHasError(true)} />
        <em>{image.caption}</em>
      </button>
    );
  }

  return onOpen ? (
    <button type="button" className="image-placeholder" onClick={onOpen}>{content}</button>
  ) : (
    <div className="image-placeholder" role="img" aria-label={image.alt}>{content}</div>
  );
}
