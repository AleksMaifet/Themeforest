import { handleContainerStylesType } from '@/utills/types';

export const handleContainerStyles = (
  backgroundColor: string,
  spacing: number,
): handleContainerStylesType => ({
  display: 'flex',
  'justify-content': 'space-around',
  'align-items': 'center',
  'background-color': `${backgroundColor}`,
  padding: `${spacing}px 0`,
});
