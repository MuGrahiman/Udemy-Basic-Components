import React from 'react'
import Button from '../components/Button'
import { GoBell, GoPackage,GoBriefcase,GoGistSecret ,GoStop} from "react-icons/go"; 
function ButtonPage() {
  const handleClick = ()=>{
      
  }
  return (
    <div>
      <div>
        <Button className='mb-5' warning rounded outline >
          <GoBell />
          Click me!!
        </Button>
      </div>
      <div>
        <Button onClick={handleClick} primary>
        <GoPackage/>
          Buy Now!
        </Button>
      </div>
      <div>
        <Button secondary>
        <GoBriefcase></GoBriefcase>
          See Deal!
          </Button>
      </div>
      <div>
        <Button success rounded>
          <GoGistSecret/>
          Hide Ads!
          </Button>
      </div>
      <div>
        <Button danger outline>
          <GoStop/>
          Something!
          </Button>
      </div>

    </div>
  )
}

export default ButtonPage
