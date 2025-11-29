import { useWindowStore } from "../store/Windows.js"

const WindowsControls = ({target, allowMaximize = true}) => {
  const {closeWindow,minimizeWindow,maximizeWindow} = useWindowStore()
  return (
    <div id="window-controls">
      <div className="close" onClick={()=>closeWindow(target)}/>
      <div className="minimize" onClick={()=>minimizeWindow(target)}/>
      <div 
        className={`maximize ${!allowMaximize ? '!bg-gray-300 !cursor-default' : ''}`} 
        onClick={()=> allowMaximize ? maximizeWindow(target) : null}
      />
    </div>
  )
}

export default WindowsControls