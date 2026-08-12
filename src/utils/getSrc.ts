export const getSrc = (img: any): string => {
  if (!img) return '';
  if (typeof img === 'string') return img;
  if (typeof img === 'object') {
    if (typeof img.src === 'string') return img.src;
    if (typeof img.src === 'object' && img.src?.src) return img.src.src;
  }
  return String(img);
};
