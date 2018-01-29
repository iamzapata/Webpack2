import small from '../assets/images/small.jpeg'
import '../styles/main.css'

export default () => {
  const smallImage = document.createElement('img')
  smallImage.src = small

  document.body.appendChild(smallImage)
}