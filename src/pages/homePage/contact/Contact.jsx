const Contact = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:justify-around items-center bg-[#151515] p-16 my-20 rounded-lg text-white">
      <div className="flex gap-4 items-center">
        <img src="https://res.cloudinary.com/dvp64j4a3/image/upload/v1729274754/Group_32_ojg23n.png" />
        <div>
          <p>We are open monday-friday</p>
          <h2 className="text-2xl font-bold">7:00 am - 9:00 pm</h2>
        </div>
      </div>
      <div className="flex gap-4 items-center">
        <img src="https://res.cloudinary.com/dvp64j4a3/image/upload/v1729274758/Group_34_zpup3t.png" />
        <div>
          <p>Have a question?</p>
          <h2 className="text-2xl font-bold">+2546 251 2658</h2>
        </div>
      </div>
      <div className="flex gap-4 items-center">
        <img src="https://res.cloudinary.com/dvp64j4a3/image/upload/v1729274760/Group_35_y1kjon.png" />
        <div>
          <p>Need a repair? our address</p>
          <h2 className="text-2xl font-bold">Liza Street, New York</h2>
        </div>
      </div>
    </div>
  );
};

export default Contact;
