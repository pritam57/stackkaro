

const Footer =() =>{

    const industries=["Food delievery", "pharmacy", "real estate","finance", "e-learning"]
    const data = ['Software development', "app development", "website development", "ui/ux design", "digital marketing ", "SEO"]

    const links=["about us","why choose us", "how we work"]
    return(
      <div className="flex flex-col md:flex-col lg:flex-row justify-around items-center bg-gray-500 py-24">
      <div className="w-[400px]">
        <p>
          Stackkaroo framework is an ideal choice for an affordable web development company in India, effectively helping users showcase their apps with its beautiful design and rich core functionality.
        </p>
      </div>
      <div className="mt-[2.5rem]">
        <h1 className="font-bold mb-2 ">Industries</h1>
        {industries.map((item, index) => (
          <h1 key={index}>{item}</h1>
        ))}
      </div>
      <div className="mt-[2.5rem]">
        <h1 className="font-bold mb-2 ">Quick links</h1>
        {data.map((item, index) => (
          <h1 key={index}>{item}</h1>
        ))}
      </div>
      <div className="mt-[2.5rem]">
        <h1 className="font-bold mb-2 ">Industries</h1>
        {links.map((item, index) => (
          <h1 key={index}>{item}</h1>
        ))}
      </div>
    </div>
    
    )
}

export default Footer;