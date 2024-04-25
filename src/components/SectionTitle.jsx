export default function SectionTitle({ text }) {
  return (
    <div className="border-b-4 pb-3 border-b border-emerald-700 inline-block w-[260px]">
      <h2 className="text-3xl font-medium tracking-wider capitalize text-emerald-900">
        {text}
      </h2>
    </div>
  );
}
