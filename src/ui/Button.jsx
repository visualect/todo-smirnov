export default function Button({ label, action, sm = false, alt = false, green = false, red = false, blue = false, yellow = false }) {

    const decorationClasses = 'underline underline-offset-4 decoration-2'

    return (
        <button
            onClick={action ? action : null}
            className={`
                outline-none
                font-semibold
                ${sm ? 'text-xs' : 'w-min-[100px] px-4 py-2 font-semibold text-sm'}
                ${alt ? 'bg-transparent underline underline-offset-4 decoration-2' : 'bg-[#E9ECEF] border rounded-2xl'}
                ${red && 'decoration-rose-500'}
                ${green && 'decoration-emerald-500'}
                ${blue && 'decoration-indigo-500'}
            `}
        >{label}</button>
    )
}
