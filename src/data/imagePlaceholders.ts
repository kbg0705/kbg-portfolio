import type { ProjectImage } from '../types/project';

export const makePlaceholder = (
  type: ProjectImage['type'],
  title: string,
  description: string,
  aspectRatio: ProjectImage['aspectRatio'] = '16:10',
): ProjectImage => ({
  alt: title,
  caption: description,
  type,
  aspectRatio,
  placeholderTitle: title,
  placeholderDescription: description,
});
