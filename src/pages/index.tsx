import type { NextPage } from 'next'
import { CardImage } from '../components/CardImage/CardImage'
import { CardText } from '../components/CardText/CardText'


const Home: NextPage = () => {
  return (
    <div>
      <CardText />
      <CardImage />

    </div>
  )
}

export default Home
