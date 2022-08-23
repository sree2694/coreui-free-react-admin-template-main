import React from 'react'

const ManageAPIKey = React.lazy(() => import('./views/dashboard/ManageAPIKey/ManageAPIKey'))
const AnalyzeEDIFiles = React.lazy(() => import('./views/dashboard/AnalyzeEDIFiles/AnalyzeEDIFiles'))
const ConvertEDItoJSON = React.lazy(() => import('./views/dashboard/ConvertEDItoJSON/ConvertEDItoJSON'))
const DownloadEDISpecs = React.lazy(() => import('./views/dashboard/DownloadEDISpecs/DownloadEDISpecs'))
const BuildEDISpecs = React.lazy(() => import('./views/dashboard/BuildEDISpecs/BuildEDISpecs'))
const TheOpenEDIformat = React.lazy(() => import('./views/dashboard/TheOpenEDIformat/TheOpenEDIformat'))
//HowToGuides
const WebEDI = React.lazy(() => import('./views/dashboard/HowToGuides/WebEDI/WebEDI'))
const ValidateEDI= React.lazy(() =>  import('./views/dashboard/HowToGuides/ValidateEDI/ValidateEDI'))
const ConvertEDI= React.lazy(() =>  import('./views/dashboard/HowToGuides/ConvertEDI/ConvertEDI'))
const ViewDownload= React.lazy(() =>  import('./views/dashboard/HowToGuides/ViewDownload/ViewDownload'))
const CreateImport= React.lazy(() =>  import('./views/dashboard/HowToGuides/CreateImport/CreateImport'))

//DeveloperAPI
const Reference = React.lazy(() => import('./views/developerAPI/reference/Reference'))
const Docs = React.lazy(() =>  import('./views/developerAPI/docs/Docs'))
const Status = React.lazy(() => import('./views/developerAPI/statusapi/Statusapi'))

//Product
const About = React.lazy(() => import('./views/product/about/AboutEdiNation'))
const PlansPricing = React.lazy(() => import('./views/product/PlansPricing/PlansPricing'))

//Support
const Documentation = React.lazy(() => import('./views/support/documentation/Documentation'))
const Contactus = React.lazy(() => import('./views/support/contactus/Contactus'))

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard/ManageAPIKey', name: 'ManageAPIKey', element: ManageAPIKey },
  { path: '/dashboard/AnalyzeEDIFiles', name: 'AnalyzeEDIFiles', element: AnalyzeEDIFiles },
  { path: '/dashboard/ConvertEDItoJSON', name: 'ConvertEDItoJSON', element: ConvertEDItoJSON },
  { path: '/dashboard/DownloadEDISpecs', name: 'DownloadEDISpecs', element: DownloadEDISpecs },
  { path: '/dashboard/BuildEDISpecs', name: 'BuildEDISpecs', element: BuildEDISpecs },
  { path: '/dashboard/TheOpenEDIformat', name: 'TheOpenEDIformat', element: TheOpenEDIformat },
  { path: '/dashboard/HowToGuides', name: 'HowToGuides', exact: true },
  { path: '/dashboard/HowToGuides/WebEDI', name: 'WebEDI', element: WebEDI },
  { path: '/dashboard/HowToGuides/ValidateEDI', name: 'ValidateEDI', element: ValidateEDI },
  { path: '/dashboard/HowToGuides/ConvertEDI', name: 'ConvertEDI', element: ConvertEDI },
  { path: '/dashboard/HowToGuides/ViewDownload', name: 'ViewDownload', element: ViewDownload },
  { path: '/dashboard/HowToGuides/CreateImport', name: 'CreateAndImport', element: CreateImport },

  { path: '/developerAPI', name: 'Developer API', exact: true },
  { path: '/developerAPI/reference', name: 'API Reference', element: Reference },
  { path: '/developerAPI/docs', name: 'API Docs', element: Docs },
  { path: '/developerAPI/statusapi', name: 'API Status', element: Status },

  { path: '/product', name: 'Product', exact: true },
  { path: '/product/about', name: 'About EdiNation', element: About },
  { path: '/product/PlansPricing', name: 'Plans & Pricing', element: PlansPricing },
  { path: '/support', name: 'Support', exact: true },
  { path: '/support/documentation', name: 'Documentation', element: Documentation },
  { path: '/support/contactus', name: 'Contact Us', element: Contactus },
]

export default routes
