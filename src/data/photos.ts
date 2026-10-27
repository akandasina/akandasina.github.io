// Every image you drop into src/assets/photos/ shows up in the
// "Off the keyboard" gallery automatically — no code changes needed.
// The file name becomes the caption: "golden-hour.jpg" → "Golden hour".
// Start a name with a number ("01-golden-hour.jpg") to control the order.

const files = import.meta.glob("../assets/photos/*.{jpg,jpeg,png,webp,avif,JPG,JPEG,PNG}", {
  eager: true,
  import: "default",
}) as Record<string, string>;

function caption(path: string) {
  const name = path.split("/").pop()!.replace(/\.[^.]+$/, "");
  const words = name
    .replace(/^\d+[-_ ]+/, "") // a leading "01-" only sets the order
    .replace(/[-_]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
  // Camera-style names (DSC01822, IMG_1234) and Unsplash IDs get no caption
  if (/^(dsc|img|pxl)\s?\d+/i.test(words) || /unsplash/i.test(words)) return "";
  return words.charAt(0).toUpperCase() + words.slice(1);
}

const all = Object.keys(files)
  .sort()
  .map((path) => ({
    src: files[path],
    name: path.split("/").pop()!.replace(/\.[^.]+$/, ""),
    caption: caption(path),
  }));

export function splitPhotos(featuredName: string) {
  const featured = all.find((p) => p.name === featuredName);
  return { featured, rest: all.filter((p) => p !== featured) };
}
