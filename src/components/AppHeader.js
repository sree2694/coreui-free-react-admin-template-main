import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {CContainer, CHeader, CHeaderBrand, CHeaderDivider, CHeaderNav, CHeaderToggler,} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import {cilMenu} from '@coreui/icons'

import {AppBreadcrumb} from './index'
import {AppHeaderDropdown} from './header/index'
import edination from '../assets/images/edination.png'

const AppHeader = () => {
  const dispatch = useDispatch()
  const sidebarShow = useSelector((state) => state.sidebarShow)

  return (
    <CHeader position="sticky" className="mb-4">
      <CContainer fluid>
        <CHeaderToggler
          className="ps-1"
          onClick={() => dispatch({type: 'set', sidebarShow: !sidebarShow})}
        >
          <CIcon icon={cilMenu} size="lg"/>
        </CHeaderToggler>
        <CHeaderBrand className="mx-auto d-md-none" to="/">
          <img src={edination} width={180} alt={edination}/>
        </CHeaderBrand>
        <CHeaderNav className="d-none d-md-flex me-auto"></CHeaderNav>

        <CHeaderNav className="ms-3">
          <AppHeaderDropdown/>
        </CHeaderNav>
      </CContainer>
      <CHeaderDivider/>
      <CContainer fluid>
        <AppBreadcrumb/>
      </CContainer>
    </CHeader>
  )
}

export default AppHeader
