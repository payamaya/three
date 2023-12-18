import WebDesign from './WebDesign'
import Development from './Development'
import ProductDesign from './ProductDesign'
import SocialMedia from './SocialMedia'
import Illustration from './Illustration'
import { useState } from 'react'
import '../index.css'
const data = [
  'Web Design',
  'Development',
  'Illustration',
  'Product Design',
  'Social Media',
]
const Works = () => {
  const [work, setWork] = useState('Web Design')
  return (
    <div>
      <ul className='ul'>
        {data.map((item) => (
          <li key={item} onClick={() => setWork(item)}>
            {item}
          </li>
        ))}
      </ul>
      {work === 'Web Design' ? (
        <WebDesign />
      ) : work === 'Development' ? (
        <Development />
      ) : work === 'Product Design' ? (
        <ProductDesign />
      ) : work === 'Social Media' ? (
        <SocialMedia />
      ) : (
        <Illustration />
      )}
    </div>
  )
}

export default Works
