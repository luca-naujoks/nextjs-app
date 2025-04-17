export function PageHeadding({
  label,
  size,
}: {
  label: string;
  size?: string;
}) {
  return (
    <h1 className={`${size ? size : "text-6xl"} font-semibold`}>{label}</h1>
  );
}
