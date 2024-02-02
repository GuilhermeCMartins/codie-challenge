export default function extractIdFromUrl(url: string): string {
  const urlObject = new URL(url);
  const extractedId = urlObject.pathname.split("/").filter(Boolean).pop();

  return extractedId || "";
}
