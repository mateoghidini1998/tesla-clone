import './App.css'
import Header from './components/Header'

function App() {

  return (
    <>
    <main className='relative'> 
      <Header/>
      <div className="w-full h-full">
        <video className="w-full max-h-screen object-cover" preload="auto" playsinline="" data-autoplay-desktop="true" data-autoplay-portrait="true" data-autoplay-mobile="true" data-play-on-hover="false" muted="" loop="" poster="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Model-3-Main-Hero-Desktop-Poster-NA.jpg" data-poster-desktop="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Model-3-Main-Hero-Desktop-Poster-NA.jpg" data-poster-portrait="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Model-3-Main-Hero-Desktop-Poster-NA.jpg" data-poster-mobile="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Model-3-Main-Hero-Mobile-Poster-NA.jpg	" data-src-desktop="https://digitalassets.tesla.com/tesla-contents/video/upload/Model-3-Main-Hero-Video-Desktop-NA.mp4" data-src-portrait="https://digitalassets.tesla.com/tesla-contents/video/upload/Model-3-Main-Hero-Video-Desktop-NA.mp4" data-src-mobile="https://digitalassets.tesla.com/tesla-contents/video/upload/Model-3-Main-Hero-Video-Mobile-NA.mp4" data-src="https://digitalassets.tesla.com/tesla-contents/video/upload/Model-3-Main-Hero-Video-Desktop-NA.mp4" data-object-fit="true" src="https://digitalassets.tesla.com/tesla-contents/video/upload/Model-3-Main-Hero-Video-Desktop-NA.mp4" data-loaded="true" autoPlay></video>
      </div>
    </main>
    </>
  )
}

export default App