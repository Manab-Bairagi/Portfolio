import { PanelLeft, ChevronLeft, ChevronRight, Search, ShieldHalf, Share, Plus, Copy } from "lucide-react"
import WindowsControls from "../components/WindowsControls"
import WindowWrapper from "../hoc/WindowWrapper.jsx"
import { blogPosts } from "../constants"

const Safari = () => {
  return (
    <>
    <div id="window-header">
        <WindowsControls target ='safari'/>
        <PanelLeft className=" ml-10 icon"/>
        <div className="flex items-center gap-1 ml-5">
            <ChevronLeft className="icon"/>
            <ChevronRight className="icon"/>
        </div>
        <div className="flex-1 flex-center gap-3">
            <ShieldHalf className="icon"/>
            <div className="search">
                <Search className="icon"/>
                <input type="text" placeholder="Search" className="flex-1"/>
            </div>
            <div className="flex items-center gap-5">
                <Share className="icon"/>
                <Plus className="icon"/>
                <Copy className="icon"/>
            </div>
        </div>
    </div>
    <div className="blog">
        <h2>My major projects and achievements</h2>
        <div className="space-y-8">
            {blogPosts.map(({id,image,title,url,type,description})=>(
                <div key={id} className="blog-post">
                    <div className="col-span-4 md:col-span-3">
                        <img src={image} alt={title} className="w-full h-32 object-cover rounded-lg"/>
                    </div>
                    <div className="col-span-8 md:col-span-9 content">
                        <h3>{title}</h3>
                        <p>{description}</p>
                        <a 
                            href={url} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-5 py-2 mt-2 text-sm font-medium text-blue-600 transition-all duration-300 bg-blue-50/50 backdrop-blur-md border border-blue-100 rounded-full hover:bg-blue-100/80 hover:scale-105 hover:shadow-lg group-hover:shadow-blue-200/50"
                        >
                            {type === 'presentation' ? 'View Presentation' : 
                             type === 'github' ? 'View Source' : 'Visit Project'} 
                            <ChevronRight size={14} />
                        </a>
                    </div>
                </div>
            ))}
        </div>
    </div>
    </>
  )
}

const SafariWindow = WindowWrapper(Safari,'safari')

export default SafariWindow