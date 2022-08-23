import React from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CDropdown,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
} from '@coreui/react'
import {BsBoxArrowUpRight} from 'react-icons/bs'
import {IoIosAddCircle} from 'react-icons/io'

const BuildEDISpecs = () => {
  return (
    <>
      <CCard className="mb-4" style={{height: 500}}>
        <CCardHeader>
          <CButton component="upload" color="light" href="#" role="button">
            <IoIosAddCircle/>
            Import
          </CButton>

          <CDropdown>
            <CDropdownToggle color="light">-- Select EDI Model --</CDropdownToggle>
            <CDropdownMenu>
              <CDropdownItem href="#">EN_753</CDropdownItem>
              <CDropdownItem href="#">EN_754</CDropdownItem>
              <CDropdownItem href="#">EN_834</CDropdownItem>
              <CDropdownItem href="#">EN_850</CDropdownItem>
              <CDropdownItem href="#">EN_945</CDropdownItem>
              <CDropdownItem href="#">EN_B1</CDropdownItem>
              <CDropdownItem href="#">EN_CODECO_D95B</CDropdownItem>
              <CDropdownItem href="#">EN_COREOR</CDropdownItem>
              <CDropdownItem href="#">EN_INFENT</CDropdownItem>
              <CDropdownItem href="#">EN_M170</CDropdownItem>
              <CDropdownItem href="#">EN_ORDERS</CDropdownItem>
              <CDropdownItem href="#">EN_PNRGOV</CDropdownItem>
              <CDropdownItem href="#">P834</CDropdownItem>
            </CDropdownMenu>
          </CDropdown>
          <CButton component="How to import SEF files?" color="primary" href="#" role="button">
            SEF Import Guide
            <BsBoxArrowUpRight/>
          </CButton>
          <CButton component="How to modify EDI models using the OpenEDI format?" color="primary" href="#"
                   role="button">
            OpenEDI Format Guide <BsBoxArrowUpRight/>
          </CButton>
        </CCardHeader>
        <CCardBody>
        </CCardBody>
      </CCard>

    </>
  )
}

export default BuildEDISpecs
