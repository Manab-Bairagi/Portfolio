import { useWindowStore } from "../store/Windows"
import WindowWrapper from "../hoc/WindowWrapper"
import WindowsControls from "../components/WindowsControls"
import { gallery, photosLinks } from "../constants"
import clsx from "clsx"
import { useState } from "react"

const Photos = () => {
    const { openWindow } = useWindowStore()
    const [activeLink, setActiveLink] = useState("Library")

    const openImage = (img) => {
        openWindow("imgfile", { name: `Photo ${img.id}`, imageUrl: img.img })
    }

    return (
        <>
            <div id="window-header">
                <WindowsControls target="photos" />
                <div className="flex-1 text-center pr-16">
                    <p className="font-bold text-[#5f6266]">Photos</p>
                </div>
            </div>
            <div className="h-[calc(100%-3.5rem)] flex bg-white">
                {/* Sidebar */}
                <div className="w-48 bg-gray-50 border-r border-gray-200 flex flex-col p-4 space-y-1">
                    {photosLinks.map((link) => (
                        <div 
                            key={link.id}
                            onClick={() => setActiveLink(link.title)}
                            className={clsx(
                                "flex items-center space-x-3 px-3 py-2 rounded-md cursor-pointer transition-colors",
                                activeLink === link.title ? "bg-blue-500 text-white" : "hover:bg-gray-200 text-gray-700"
                            )}
                        >
                            <img 
                                src={link.icon} 
                                alt={link.title} 
                                className={clsx("w-5 h-5", activeLink === link.title ? "brightness-0 invert" : "")}
                            />
                            <span className="text-sm font-medium">{link.title}</span>
                        </div>
                    ))}
                </div>

                {/* Main Content */}
                <div className="flex-1 p-6 overflow-y-auto">
                    <div className="mb-6">
                        <h2 className="text-2xl font-bold text-gray-800">{activeLink}</h2>
                        <p className="text-gray-500 text-sm">{gallery.length} Photos</p>
                    </div>
                    
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {gallery.map((photo) => (
                            <div 
                                key={photo.id} 
                                onClick={() => openImage(photo)}
                                className="aspect-square group relative overflow-hidden rounded-lg cursor-pointer shadow-sm hover:shadow-md transition-all"
                            >
                                <img 
                                    src={photo.img} 
                                    alt={`Gallery ${photo.id}`} 
                                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

const PhotosWindow = WindowWrapper(Photos, "photos")

export default PhotosWindow
