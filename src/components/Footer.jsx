import { resourcesLinks , platformLinks , communityLinks } from "../constants"

const Footer = () => {
  return (
    <div className="py-10 mt-20 border-t border-neutral-700">
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-3">
        <div>
            <h3>Resources</h3>
            <ul className="space-y-2">
                {resourcesLinks.map((link, index)=>(
                    <li className="text-neutral-300 hover:text-white" key={index}>
                        <a href={link.href}>{link.text}</a>
                    </li>
                ))}
            </ul>
        </div>
        <div>
            <h3>Platform</h3>
            <ul className="space-y-2">
                {platformLinks.map((link, index)=>(
                    <li className="text-neutral-300 hover:text-white" key={index}>
                        <a href={link.href}>{link.text}</a>
                    </li>
                ))}
            </ul>
        </div>
        <div>
            <h3>Community</h3>
            <ul className="space-y-2">
                {communityLinks.map((link, index)=>(
                    <li className="text-neutral-300 hover:text-white" key={index}>
                        <a href={link.href}>{link.text}</a>
                    </li>
                ))}
            </ul>
        </div>
      </div>
    </div>
  )
}

export default Footer