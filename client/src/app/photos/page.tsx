'use client'
import video from '/public/icons/video.png'
import menu from '/public/icons/menu.png'
import match from '/public/icons/match3.png'
import Slider from '../components/Slider'

export default function Page() {
  return (
   <Slider direction={'vertical'} loop={true} className ='w-full h-screen' data={[video,menu,match]} pagination={false}/>
  )
}