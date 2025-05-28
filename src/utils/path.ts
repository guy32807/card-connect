export function getBasePath() {
  return process.env.NODE_ENV === 'production' ? '/card-connect' : '';
}

export function getImagePath(src: string) {
  const basePath = getBasePath();
  return src.startsWith('/') ? `${basePath}${src}` : src;
}