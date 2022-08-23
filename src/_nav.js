import React from 'react'
import {
  CNavGroup,
  CNavItem,
  CNavTitle} from '@coreui/react'
import {
  AiOutlineForm,
  AiOutlineInfoCircle,
  AiOutlineQuestionCircle,
  AiOutlineShoppingCart,
  BiBookOpen,
  BiDirections,
  BiTargetLock,
  BsBookmark,
  BsDownload,
  BsHeadphones,
  BsLink45Deg,
  MdOutlineAutoGraph,
  RiKey2Fill,
  SiConvertio,
} from 'react-icons/all'

const _nav = [
  {
    component: CNavItem,
    name: 'Manage API Key',
    to: '/dashboard/ManageAPIKey',
    icon: <RiKey2Fill/>,
  },
  {
    component: CNavItem,
    name: 'Analyze EDI Files',
    to: '/dashboard/AnalyzeEDIFiles',
    icon: <BiTargetLock/>,
  },
  {
    component: CNavItem,
    name: 'Convert EDI to JSON',
    to: '/dashboard/ConvertEDItoJSON',
    icon: <SiConvertio/>,
  },
  {
    component: CNavItem,
    name: 'Download EDI Specs',
    to: '/dashboard/DownloadEDISpecs',
    icon: <BsDownload/>,
  },
  {
    component: CNavItem,
    name: 'Build EDI Specs',
    to: '/dashboard/BuildEDISpecs',
    icon: <AiOutlineForm/>,
  },
  {
    component: CNavItem,
    name: 'The OpenEDI format',
    to: '/dashboard/TheOpenEDIformat',
    icon: <BsBookmark/>,
  },
  {
    component: CNavGroup,
    name: 'How To Guides',
    to: '/dashboard',
    icon: <BiDirections/>,
    badge: {
      color: 'info',
      text: '5',
    },
    items: [
      {
        component: CNavItem,
        name: 'What is Web EDI Analyzer?',
        to: '/dashboard/WebEDI',
      },
      {
        component: CNavItem,
        name: 'How to analyze and validate EDI files?',
        to: '/dashboard/ValidateEDI',
      },
      {
        component: CNavItem,
        name: 'How to convert between EDI and JSON?',
        to: '/dashboard/ConvertEDI',
      },
      {
        component: CNavItem,
        name: 'How to view and download EDI specs?',
        to: '/dashboard/ViewDownload',
      },
      {
        component: CNavItem,
        name: 'How to create and import EDI specs?',
        to: '/dashboard/CreateImport',
      },
    ]
  },

  {
    component: CNavTitle,
    name: 'Developer API',
  },
  {
    component: CNavItem,
    name: 'API Reference',
    to: '/developerAPI/reference',
    icon: <BsLink45Deg/>,
  },
  {
    component: CNavItem,
    name: 'API Docs',
    to: '/developerAPI/docs',
    icon: <AiOutlineQuestionCircle/>,
  },
  {
    component: CNavItem,
    name: 'API Status',
    to: '/developerAPI/Statusapi',
    icon: <MdOutlineAutoGraph/>,
  },

  {
    component: CNavTitle,
    name: 'Product',
  },
  {
    component: CNavItem,
    name: 'About EdiNation',
    to: '/product/about',
    icon: <AiOutlineInfoCircle/>,
  },
  {
    component: CNavItem,
    name: 'Plans & Pricing',
    to: '/product/PlansPricing',
    icon: <AiOutlineShoppingCart/>,
  },

  {
    component: CNavTitle,
    name: 'Support',
  },
  {
    component: CNavItem,
    name: 'Documentation',
    to: '/support/documentation',
    icon: <BiBookOpen/>,
  },
  {
    component: CNavItem,
    name: 'Contact Us',
    to: '/support/contactus',
    icon: <BsHeadphones/>,
  },
]

export default _nav
