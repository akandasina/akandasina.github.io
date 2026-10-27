const words = [
  "Flutter",
  "Firebase",
  "Google Earth Engine",
  "Python",
  "React",
  "Satellite data",
  "Climate",
  "Food rescue",
];

export function Marquee() {
  const row = (hidden: boolean) => (
    <div className="marquee__row" aria-hidden={hidden}>
      {words.map((w) => (
        <span key={w}>
          {w}
          <i aria-hidden="true">✳</i>
        </span>
      ))}
    </div>
  );

  return (
    <div className="marquee invert" role="presentation">
      <div className="marquee__track">
        {row(false)}
        {row(true)}
      </div>
    </div>
  );
}
