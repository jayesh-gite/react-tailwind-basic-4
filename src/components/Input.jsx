export default function Input({ label, invalid, ...props }) {
  let labelClases = "block mb-2 text-xs font-bold tracking-wide uppercase mt-2";
  let inputClasses = "w-full px-3 py-2 leading-tight border rounded shadow";
  if (invalid) {
    labelClases += " text-red-500";
    inputClasses += " test-red-500 bg-red-100 border-red-300";
  } else {
    labelClases += " text-stone-400";
    inputClasses += " text-stone-700 bg-stone-400";
  }
  return (
    <p>
      <label className={labelClases}>{label}</label>
      <input className={inputClasses} {...props} />
    </p>
  );
}
