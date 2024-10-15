import { toast } from "react-toastify";

const SingleColor = ({ index, color }) => {
    const { hex, weight } = color;
    const saveToClipboard = async () => {
        if (navigator.clipboard) {
            try {
                await navigator.clipboard.writeText(`#${hex}`);
                toast.success("Color copied to clipboard", {
                    className: 'custom-toast'
                });
            } catch (error) {
                toast.error("Failed to copy to clipboard"),
                {
                    className: 'custom-toast'
                }
            }
        } else {
            toast.error("Clipboard access not available")
        }
    }
    return (
        <article onClick={saveToClipboard} className={index > 10 ? "color color-light" : "color"} style={{
            background: `#${hex}`,
            cursor: "pointer"
        }}>
            <p className="percent-value">{weight}%</p>
            <p className="color-value">#{hex}</p>
        </article>
    )
}

export default SingleColor
