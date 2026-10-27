export function SectionHead({ index, label, title }: { index: string; label: string; title: string }) {
  return (
    <div className="shead">
      <span className="label reveal">
        ({index}) {label}
      </span>
      <h2 className="shead__title reveal">{title}</h2>
    </div>
  );
}
