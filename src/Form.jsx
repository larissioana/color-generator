import React, { useState } from 'react'

const Form = ({ addColor }) => {
    const [color, setColor] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        addColor(color);
    };

    return (
        <section className="container">
            <h4>color generator</h4>
            <form className="color-form" onSubmit={handleSubmit}>
                <input type="color" className="color-input" value={color} onChange={(e) => setColor(e.target.value)} />
                <input type="text" value={color} onChange={(e) => setColor(e.target.value)} placeholder="#cd9286" className="input-color" />
                <button className="btn" type="submit">Submit</button>
            </form>
        </section>
    )
}

export default Form
