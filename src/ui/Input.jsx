export default function Input({ value, placeholder, onChange }) {
    return (
        <input className="border bg-zinc-100 text-sm rounded-2xl px-4 py-2 outline-none w-[300px]" value={value} onChange={onChange} placeholder={placeholder} type="text" />
    )
}
