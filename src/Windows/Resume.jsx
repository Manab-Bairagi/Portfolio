import { Download } from "lucide-react"
import WindowsControls from "../components/WindowsControls"
import WindowWrapper from "../hoc/WindowWrapper.jsx"
import { Page, pdfjs,Document } from "react-pdf"
import "react-pdf/dist/Page/AnnotationLayer.css"
import "react-pdf/dist/Page/TextLayer.css"

pdfjs.GlobalWorkerOptions.workerSrc=new URL(
    'pdfjs-dist/build/pdf.worker.min.mjs',
    import.meta.url,
   
).toString()

const Resume = () => {
  return (
    <>
    <div id="window-header">
        <WindowsControls target ='resume'/>
        <h2>Resume.pdf</h2>
        <a href="public/files/resume.pdf" download className="cursor-pointer" title="Download Resume">
        <Download className="icon"/>
        </a>
    </div>
    <div className="h-[calc(100%-3.5rem)] overflow-y-auto w-full flex justify-center bg-gray-50 p-4">
        <Document file ="public/files/resume.pdf">
            <Page pageNumber={1} renderAnnotationLayer renderTextLayer />
        </Document>
    </div>
    </>
  )
}
const resumeWindow=WindowWrapper(Resume,"resume")
export default resumeWindow