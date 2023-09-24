import PhonesCard from "./PhonesCard";

const Phones = ({ phones }) => {
    console.log(phones);
    return (
        <div>
            <h3 className=" text-2xl font-bold text-center mt-10">All catagorys Phones {phones.length}</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {
                    phones?.map(phone => (
                        <PhonesCard
                            key={phone.id}
                            phone={phone}
                        ></PhonesCard>
                    ))
                }
            </div>



        </div>
    );
};

export default Phones;