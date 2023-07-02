import services from './../Files/services.json'

const Services = () => {

    console.log(services);

    return (
        <section className="s-wrapper my-5">
            <div className="s-container paddings container-width flex flex-col items-center">
                <div className="heading-text text-center my-4 w-2/3">
                    <p className='blackText'>My Services</p>
                    <p className='primaryText'>As a MERN stack developer, My goal  is to ensure best <span>user exprience</span> with a best <span>user interface</span> that will meet the needs of users.</p>
                </div>
                <div className="service-section grid md:grid-cols-2 gap-5">
                    {
                        services.map((item, index) => <div 
                        className='p-4 hover:shadow-2xl rounded-2xl'
                        key={index}>
                            <div className="s-img flex justify-center items-center">
                                <img className='w-[200px] h-[140px]' src={item.img} alt="image" />
                            </div>
                            <div className="s-name smBlackText">
                                <span>{item.serviceName}</span>
                            </div>
                            <div className="s-details primaryText">
                                <span>{item.details}</span>
                            </div>
                        </div>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Services;