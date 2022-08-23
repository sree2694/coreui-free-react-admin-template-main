import React from 'react'
import { CFooter } from '@coreui/react'

const AppFooter = () => {
  return (
    <CFooter>
      <div className="ms-auto">
        <span className="ms-1">EdiFabric &copy; 2022 </span>
        <a href="#" target="_blank" rel="noopener noreferrer">
          Privacy Policy
        </a>
        &amp;
        <a href="#" target="_blank" rel="noopener noreferrer">
          Service Terms
        </a>
      </div>
    </CFooter>
  )
}

export default React.memo(AppFooter)
