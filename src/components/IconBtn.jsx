export function IconBtn({ Icon, isActive, color, ...props }) {
    return (
        <button
             className={`btn icon-btn ${isActive ? "icon-btn--active" : ""} ${color || ""}`}
             {...props}
        >
            <span>
                <Icon />
            </span>
        </button>
    )
}