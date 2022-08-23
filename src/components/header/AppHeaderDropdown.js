import React from 'react'
import {
  CDropdown,
  CDropdownDivider,
  CDropdownHeader,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CHeaderNav,
  CInputGroupText,
  CNavItem,
  CNavLink,
} from '@coreui/react'
import {cilDelete, cilFullscreen, cilReload, cilSave, cilSettings,} from '@coreui/icons'
import CIcon from '@coreui/icons-react'

const AppHeaderDropdown = () => {
  return (
    <>
      <CHeaderNav>
        <CNavItem>
          <CNavLink href="#">
            <CIcon icon={cilFullscreen} size="lg"/>
          </CNavLink>
        </CNavItem>
      </CHeaderNav>
      <CDropdown variant="nav-item">
        <CDropdownToggle size="lg" className="py-0" caret={false}>
          <CNavLink href="#">
          <CIcon icon={cilSettings} size="lg"/>
          </CNavLink>
        </CDropdownToggle>
        <CDropdownMenu className="pt-0" placement="bottom-end">
          <CDropdownHeader className="bg-light fw-semibold py-2">Settings</CDropdownHeader>
          <CDropdownToggle size="lg" className="py-0">
            --No Read Models--
          </CDropdownToggle>
          <CDropdownItem href="#">
            <CIcon icon={cilReload} className="me-2"/>
            <CIcon icon={cilSave} className="me-2"/>
            <CIcon icon={cilDelete} className="me-2"/>
          </CDropdownItem>
          <CDropdownDivider/>
          <CInputGroupText href='#'>Syntax set</CInputGroupText>
          <CDropdownItem href="#">
            <CIcon icon={cilSave} className="me-2"/>
            <CIcon icon={cilDelete} className="me-2"/>
          </CDropdownItem>
          <CDropdownDivider/>
          <CDropdownItem href="#">
            X12 ACK
          </CDropdownItem>
          <CDropdownItem href="#">
            <CIcon icon={cilSave} className="me-2"/>
          </CDropdownItem>
          <CDropdownDivider/>
          <CDropdownItem href="#">
            EDI file format
          </CDropdownItem>
          <CDropdownItem href="#">
            <CIcon icon={cilSave} className="me-2"/>
            <CIcon icon={cilDelete} className="me-2"/>
          </CDropdownItem>
          <CDropdownDivider/>
          <CDropdownItem href="#">
            Skip x-edination-loop-seq
          </CDropdownItem>
          <CDropdownItem href="#">
            <CIcon icon={cilSave} className="me-2"/>
          </CDropdownItem>
          <CDropdownDivider/>
        </CDropdownMenu>
      </CDropdown>
    </>
  )
}
export default AppHeaderDropdown
