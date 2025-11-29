import { useWindowStore } from "../store/Windows"
import WindowWrapper from "../hoc/WindowWrapper"
import WindowsControls from "../components/WindowsControls"

const ImageFile = () => {
    const { windows } = useWindowStore()
    const { data, isMaximized } = windows.imgfile

    if (!data) return null

    return (
        <>
            <div id="window-header">
                <WindowsControls target="imgfile" />
                <p className="font-bold text-[#5f6266]">{data.name}</p>
            </div>
            <div className="h-[calc(100%-3.5rem)] overflow-hidden bg-gray-100 flex items-center justify-center p-4">
                <div className={`flex items-center justify-center transition-all duration-300 ${isMaximized ? "w-full h-full" : "w-[70%] h-[70%]"}`}>
                    <img 
                        src={data.imageUrl} 
                        alt={data.name} 
                        className="w-full h-full object-contain shadow-lg rounded-md" 
                    />
                </div>
            </div>
        </>
    ) 
}

const ImageFileWindow = WindowWrapper(ImageFile, "imgfile")

export default ImageFileWindow
