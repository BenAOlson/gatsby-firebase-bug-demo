import React from 'react'
// These imports cause compilation error:
import 'firebase/messaging'
// import 'firebase/analytics'
// import 'firebase/performance'

// These imports work fine:
// import 'firebase/firestore'
// import 'firebase/functions'

export const wrapRootElement = ({ element }) => <>{element}</>
