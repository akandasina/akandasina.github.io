// Every image you drop into src/assets/photos/ shows up in the
// "Off the keyboard" gallery automatically — no code changes needed.
// The file name becomes the caption: "golden-hour.jpg" → "Golden hour".

const files = import.meta.glob("../assets/photos/*.{jpg,jpeg,png,webp,avif,JPG,JPEG,PNG}", {
  eager: true,
  import: "default",
}) as Record<string, string>;

function caption(path: string) {
  const name = path.split("/").pop()!.replace(/\.[^.]+$/, "");
  const words = name.replace(/[-_]+/g, " ").replace(/\s+/g, " ").trim();
  // Camera-style names (DSC01822, IMG_1234) and Unsplash IDs get no caption
  if (/^(dsc|img|pxl)\s?\d+/i.test(words) || /unsplash/i.test(words)) return "";
  return words.charAt(0).toUpperCase() + words.slice(1);
}

export const photos = Object.keys(files)
  .sort()
  .map((path) => ({ src: files[path], caption: caption(path) }));
