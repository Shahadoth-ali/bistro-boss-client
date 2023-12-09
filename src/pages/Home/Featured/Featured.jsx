import SharedTitle from "../../../components/SharededTitle/SharedTitle";

import featured from '../../../assets/home/featured.jpg';
import './Featured.css'


const Featured = () => {
    return (
        <div className="featured-item bg-fixed text-white pt-8 my-20">
            <SharedTitle 
            subHeading="check it out"
            heading="Featured Item"

            ></SharedTitle>

            <div className="md:flex bg-slate-500 bg-opacity-40 justify-center items-center py-20 px-36">
                <div>
                    <img src={featured} alt="" />
                </div>
                <div className="md:ml-10">
                    <p>Aug 20,2024</p>
                    <p className="uppercase">Where can i get some?</p>
                    <p>Takimata ipsum ea at tempor takimata diam accusam,
                         sit sit at aliquyam et diam, sadipscing est sed kasd 
                         et aliquyam invidunt sit ea clita, clita sit erat magna 
                         lorem sanctus lorem dolor, at no lorem dolores accusam 
                         labore clita gubergren. Dolor justo dolores sed ipsum,
                          est diam nonumy consetetur kasd..
                          </p>
                          <button className="btn btn-outline border-0 border-b-4 mt-4">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;