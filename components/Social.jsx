import Link from "next/link"
import {FaLinkedinIn, FaTwitter, FaFacebook, FaGithub, FaInstagram} from 'react-icons/fa'

const social =[
    // {icon: <FaGithub/>, path:'https://github.com/Shamiun'},
    {icon: <FaLinkedinIn />, path: 'https://www.linkedin.com/in/md-rafie-raihan-b135b5374'},
    {icon: <FaTwitter />, path: 'https://x.com/idprafies'},
    {icon: <FaFacebook />, path: 'https://www.facebook.com/Rafieraiha'},
    {icon: <FaInstagram/>, path: 'https://www.instagram.com/re.rafi_'},
]
const Social = ({containerStyles, iconStyles}) => {
  return (
    <div className={containerStyles}>
        {social.map((item, index)=>{
            return <Link key={index} href={item.path} className={iconStyles}>{item.icon}</Link>
        })}
    </div>
  )
}

export default Social