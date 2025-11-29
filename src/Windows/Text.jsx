import { useWindowStore } from "../store/Windows"
import WindowWrapper from "../hoc/WindowWrapper"
import WindowsControls from "../components/WindowsControls"

const TextFile = () => {
    const { windows } = useWindowStore()
    const data = windows.txtfile.data

    if (!data) return null

    return (
        <>
            <div id="window-header">
                <WindowsControls target="txtfile" />
                <p className="font-bold text-[#5f6266]">{data.name}</p>
            </div>
            <div className="h-[calc(100%-3.5rem)] overflow-y-auto bg-white p-8">
                <div className="max-w-2xl mx-auto space-y-6">
                    {data.image && (
                        <div className="w-full h-64 overflow-hidden rounded-xl shadow-md">
                            <img src={data.image} alt={data.name} className="w-full h-full object-cover" />
                        </div>
                    )}
                    
                    <div className="space-y-2">
                        <h1 className="text-3xl font-bold text-gray-800">{data.name}</h1>
                        {data.subtitle && (
                            <p className="text-lg text-gray-500 font-medium">{data.subtitle}</p>
                        )}
                    </div>

                    <div className="space-y-4">
                        {data.description && data.description.map((paragraph, index) => (
                            <p key={index} className="text-gray-600 leading-relaxed text-lg">
                                {paragraph}
                            </p>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

const TextFileWindow = WindowWrapper(TextFile, "txtfile")

export default TextFileWindow
