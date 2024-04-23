export default function SectionTitle({ text }) {
  return (
    <div className="border-b border-gray-200 pb-5 border-b border-emerald-400 ">
      <h2 className="text-3xl font-medium tracking-wider capitalize text-emerald-900">
        {text}
      </h2>
    </div>
  );
}
