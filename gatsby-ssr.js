/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

// You can delete this file if you're not using it
import React from 'react'
// These imports cause compilation error:
import 'firebase/messaging'
// import 'firebase/analytics'
// import 'firebase/performance'

// These imports work fine:
// import 'firebase/firestore'
// import 'firebase/functions'

export const wrapRootElement = ({ element }) => <>{element}</>
