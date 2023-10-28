import { component$, useSignal,   useVisibleTask$ } from '@builder.io/qwik';
import gsap from 'gsap';

export const Header = component$(() => {
 const ref = useSignal<HTMLDivElement>();
 useVisibleTask$(()=>{
        const tl =   gsap.timeline({ id:"1",paused:true})
        tl
        .to(ref.value!,{ borderRadius:"0% 0% 100% 100% / 0% 0% 35% 35% ",scale:1.1 , height:"20vh",duration:0.3})
        .to(ref.value!,{ borderRadius:"0% 0% 100% 100% / 0% 0% 45% 45% ",scale:1.5 , height:"130vh",duration:0.5})
        .to(ref.value!,{ borderRadius:"0% 0% 0% 0% / 0% 0% 0% 0% ",scale:1 , height:"100vh",duration:0.5})
        
     
        
  
       return () => {
         tl?.kill()
       }
    })

  return <header class=" w-full fixed    overflow-clip">
   <div ref={ref}  class=" fixed  w-full h-[100px] bg-_black border text-white text-lg " >
   Trang Chủ
  </div>
   <nav class="  ">
       
  </nav>
  </header>
});

