import React, { useState } from 'react';



const useBolean = (defaultvalue = false) => {
    const [bolean, setBolean] = useState(false)

    const toggleBoolean = () => setBolean(!bolean)
    return [bolean, toggleBoolean]
}



export default useBolean

