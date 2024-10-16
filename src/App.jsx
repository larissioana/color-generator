import { useState } from 'react'
import ColorList from './ColorList'
import Form from './Form'
import Values from 'values.js'
import { ToastContainer, toast } from 'react-toastify'

function App() {
  const [colors, setColors] = useState(new Values("#cd9286").all(10));

  const addColor = (color) => {
    try {
      const newColors = new Values(color).all(10);
      setColors(newColors);
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100%",
      flexDirection: "column"
    }}>
      <Form addColor={addColor} />
      <ColorList colors={colors} />
      <ToastContainer position="top-center" />
    </div>
  )
}

export default App
