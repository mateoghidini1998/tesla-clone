import { useRef, useEffect } from 'react'
import './App.css'
import Header from './components/Header'
import Section from './components/Section';
import data from './data/media.json'

function App() {
  const videoRef = useRef();
  const sectionRefs = useRef([]);
  const currentSectionIndex = useRef(0);

  const handleVideoLoop = () => {
    videoRef.current.currentTime = 0;
    videoRef.current.play();
  }

  const addToRefs = (el) => {
    if (el && !sectionRefs.current.includes(el) && el.tagName !== 'VIDEO') {
      sectionRefs.current.push(el);
    }
  };

  useEffect(() => {
    const handleScroll = (e) => {
      // Determine scroll direction
      const deltaY = e.deltaY;
      if (deltaY < 0) {
        // Scrolling up
        if (currentSectionIndex.current > 0) {
          currentSectionIndex.current--;
          sectionRefs.current[currentSectionIndex.current].scrollIntoView({
            behavior: 'smooth',
            block: 'end', // Scroll to the end of the previous section for a slower effect
          });
        }
      } else if (deltaY > 0) {
        // Scrolling down
        if (currentSectionIndex.current < sectionRefs.current.length - 1) {
          currentSectionIndex.current++;
          sectionRefs.current[currentSectionIndex.current].scrollIntoView({
            behavior: 'smooth',
            block: 'start', // Scroll to the start of the next section for a slower effect
          });
        }
      }
    };

    window.addEventListener('wheel', handleScroll);

    return () => {
      window.removeEventListener('wheel', handleScroll);
    };
  }, []);

  return (
    <>
      <main className='relative h-screen'> 
        <Header />
        {data.sections.map((section, index) => (
          <Section
          ref={(el) => addToRefs(el)}
          key={index}
          title={section.title}
          price={section.price}
          description={section.description}
          mediaType={section.mediaType}
          mediaUrl={section.mediaUrl}
          priceDescription={section.priceDescription}
          link={section.link}
          handleVideoLoop={handleVideoLoop}
          videoRef={videoRef}
          textColor={section.textColor}
          muted
          />
        ))}
         
      </main>

    </>
  )
}

export default App
