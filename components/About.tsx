import Comonhaeder from "./Comonhaeder";

const About = () => {
    return (
        <div
            style={{
                backgroundImage: `url('https://media.licdn.com/dms/image/v2/D4D0BAQGVza1jEoDdJw/company-logo_200_200/company-logo_200_200/0/1689403977727?e=2147483647&v=beta&t=YLnZZbjFQdkejVkepM8WWtTXmDQX1yrrbTbILCN9KlI')`,
                backgroundSize: 'cover',
                backgroundRepeat: "no-repeat", 
                height: '100vh',
                backgroundPosition: 'center',
                padding: '20px', 
                color: "black", 
            }}
        >
            <Comonhaeder />
            <div className="flex md:flex-row  justify-around font-fantasy">
  <div className="w-[50px]">
    <h1 className="text-center text-[50px] my-20 ">Let Us Introduce Ourselves</h1>
  </div>
  <div className="w-[200px] hidden md:block">
    <h1 className="text-[25px] font-bold my-32 ">We take pride in being one of the top 10 web development companies in India.</h1>
  </div>
</div>
<p className="text-[15px] w-[900px] mx-auto mt-[230px] mb-[50px]">
  Stackkaroo is one of the top web development companies in India that focuses on providing custom web application development services to their clients. Since the beginning of its foundation, Stackkaroo has worked hard to serve its clients the best custom web app development services. Today Stackkaroo stands among the top software development companies in India with some eminent partners who have trusted Stackkaroo in its initial days and encouraged it to come such a long way.
</p>
</div>
    );
};

export default About;
