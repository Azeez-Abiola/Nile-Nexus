import { useEffect } from 'react'
import faviconImage from '../assets/favicon.png'

const Favicon = () => {
  useEffect(() => {
    // Remove existing favicon links
    const existingFavicons = document.querySelectorAll('link[rel*="icon"]')
    existingFavicons.forEach(link => link.remove())

    // Create new favicon link
    const link = document.createElement('link')
    link.rel = 'icon'
    link.type = 'image/png'
    link.href = faviconImage
    
    // Add to head
    document.head.appendChild(link)

    // Also create apple-touch-icon
    const appleLink = document.createElement('link')
    appleLink.rel = 'apple-touch-icon'
    appleLink.href = faviconImage
    document.head.appendChild(appleLink)

    // Cleanup function
    return () => {
      const favicons = document.querySelectorAll('link[rel*="icon"]')
      favicons.forEach(link => link.remove())
    }
  }, [])

  return null // This component doesn't render anything
}

export default Favicon
