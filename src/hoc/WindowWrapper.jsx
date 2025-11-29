import { useGSAP } from "@gsap/react"
import { useWindowStore } from "../store/Windows.js"
import { useLayoutEffect, useRef } from "react"
import gsap from "gsap"
import { Draggable } from "gsap/Draggable"

const WindowWrapper = (Component, windowKey) => {
    const Wrapped =(props)=>{
        const {focusWindow,windows}=useWindowStore()
        const {isOpen,zIndex,isMaximized} =windows[windowKey]
        const ref = useRef(null)

        useGSAP(()=>{
            const el = ref.current
            if(!el || !isOpen) return

            el.style.display = "block"

            gsap.fromTo(el,{scale:0.8,opacity:0,y:40},{scale:1,opacity:1,y:0,duration:0.4,ease:"power3.out"})
        },[isOpen])

        useGSAP(() =>{
            const el = ref.current
            if(!el) return

            const [instance] = Draggable.create(el,{ 
                onPress:()=>focusWindow(windowKey),
                disabled: isMaximized 
            })
            
            if(isMaximized){
                instance.disable()
                gsap.to(el,{
                    width:"100vw",
                    height:"100vh",
                    top:35,
                    left:30,
                    x:0,
                    y:0,
                    duration:0.2,
                    ease:"power2.inOut"
                })
            }else{
                instance.enable()
                const { width, height } = windows[windowKey].size || { width: "auto", height: "auto" }
                gsap.to(el,{
                    width,
                    height,
                    duration:0.2,
                    ease:"power2.inOut"
                })
            }

            return ()=>instance.kill()
        },[isOpen,isMaximized])

        useLayoutEffect(()=>{
            const el = ref.current
            if(!el) return
            el.style.display = isOpen ? "block" : "none"
        },[isOpen])

        return(<section 
        id={windowKey} 
        ref={ref} 
        style={{zIndex}}
        className={`window ${isMaximized ? "!fixed !inset-0 !w-screen !h-screen !rounded-none" : ""}`}
        >
            <Component {...props}/>
        </section>
        )
    }

    Wrapped.displayName = `WindowWrapper(${Component.displayName || Component.name || "Component"})`
    return Wrapped
}

export default WindowWrapper