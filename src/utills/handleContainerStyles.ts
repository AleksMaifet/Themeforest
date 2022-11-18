import { handleContainerStylesType } from '@/utills/types';

export const handleContainerStyles = (
  spacing: number,
  backgroundColor?: string,
): handleContainerStylesType => ({
  display: 'flex',
  'justify-content': 'center',
  'align-items': 'center',
  'background-color': `${backgroundColor}`,
  padding: `${spacing}px 0`,
});
