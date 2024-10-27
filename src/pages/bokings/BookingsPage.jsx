import { useContext, useEffect, useState } from "react";
import BokingsRow from "./BokingsRow";
import { AuthContext } from "../../provider/AuthProvider";
import Swal from "sweetalert2";
import axios from "axios";
import { Helmet } from "react-helmet-async";

const BookingsPage = () => {
  const style = {
    backgroundColor: "red",
    clipPath: "polygon(14% 86%, 84% 86%, 94% 100%, 5% 100%)",
  };

  const { user } = useContext(AuthContext);
  const [services, setservices] = useState([]);

  const url = `http://localhost:5000/bookings/${user?.email}`;
  useEffect(() => {
    axios(url, { withCredentials: true }).then((data) =>
      setservices(data.data)
    );
  }, [url]);

  const handleBookingDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/bookings/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            const remainingmy = services.filter((c) => c._id !== id);
            setservices(remainingmy);
            if (data.deleteCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
            }
          });
      }
    });
  };

  const handlebookingUpdate = (id) => {
    fetch(`http://localhost:5000/bookings/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ status: "Conform" }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Updated!",
            text: "Your booking is Conform Successfully.",
            icon: "success",
          });
        }
        const remaining = services.filter((b) => b._id !== id);
        const updatedService = services.find((service) => service._id === id);
        updatedService.status = "Conform";
        const newBooking = [updatedService, ...remaining];
        setservices(newBooking);
      });
  };

  return (
    <div className=" mb-16">
      <Helmet>
        <title>Car Servicing | My Bookings</title>
      </Helmet>
      <div className=" w-full rounded-lg relative ">
        <img
          src="https://res.cloudinary.com/dvp64j4a3/image/upload/v1729316407/Rectangle_1548_ovhlji.png"
          className="w-full h-[350px] rounded-lg"
        />
        <div className="absolute top-0 left-0 rounded-lg w-full h-full text-start flex items-center  bg-gradient-to-r from-[#151515CC] to-[rgba(21, 21, 21, 0)]">
          <div className="text-white md:w-1/2 lg:pl-12 md:pl-20 pl-5">
            <h2 className="text-4xl md:text-5xl  font-bold">All Bokings</h2>
          </div>
          <h2 className=" absolute bottom-4 -translate-x-1/2 left-1/2 z-30 text-white text-xl">
            Home/Bokings
          </h2>
          <div
            style={style}
            className="absolute bottom-0 -translate-x-1/2 h-[300px] w-[300px] left-1/2"
          ></div>
        </div>
      </div>

      {/* Booking list */}
      <section className=" mt-12 mx-auto">
        <div className="flex flex-col mt-6">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <div className="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                  <thead className="bg-gray-50 dark:bg-gray-800">
                    <tr>
                      <th
                        scope="col"
                        className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                      >
                        <span>Delete</span>
                      </th>
                      <th
                        scope="col"
                        className="py-3.5 px-4 text-sm pl-16 font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                      >
                        <span>Service Name</span>
                      </th>

                      <th
                        scope="col"
                        className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                      >
                        <button className="flex items-center gap-x-2">
                          <span>Author Name</span>
                        </button>
                      </th>

                      <th
                        scope="col"
                        className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                      >
                        Date
                      </th>

                      <th
                        scope="col"
                        className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                      >
                        Price
                      </th>

                      <th
                        scope="col"
                        className="px-12 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                      >
                        <button className="flex items-center gap-x-2">
                          <span>Status</span>

                          <svg
                            className="h-3"
                            viewBox="0 0 10 11"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M2.13347 0.0999756H2.98516L5.01902 4.79058H3.86226L3.45549 3.79907H1.63772L1.24366 4.79058H0.0996094L2.13347 0.0999756ZM2.54025 1.46012L1.96822 2.92196H3.11227L2.54025 1.46012Z"
                              fill="currentColor"
                              stroke="currentColor"
                            />
                            <path
                              d="M0.722656 9.60832L3.09974 6.78633H0.811638V5.87109H4.35819V6.78633L2.01925 9.60832H4.43446V10.5617H0.722656V9.60832Z"
                              fill="currentColor"
                              stroke="currentColor"
                            />
                            <path
                              d="M8.45558 7.25664V7.40664H8.60558H9.66065C9.72481 7.40664 9.74667 7.42274 9.75141 7.42691C9.75148 7.42808 9.75146 7.42993 9.75116 7.43262C9.75001 7.44265 9.74458 7.46304 9.72525 7.49314C9.72522 7.4932 9.72518 7.49326 9.72514 7.49332L7.86959 10.3529L7.86924 10.3534C7.83227 10.4109 7.79863 10.418 7.78568 10.418C7.77272 10.418 7.73908 10.4109 7.70211 10.3534L7.70177 10.3529L5.84621 7.49332C5.84617 7.49325 5.84612 7.49318 5.84608 7.49311C5.82677 7.46302 5.82135 7.44264 5.8202 7.43262C5.81989 7.42993 5.81987 7.42808 5.81994 7.42691C5.82469 7.42274 5.84655 7.40664 5.91071 7.40664H6.96578H7.11578V7.25664V0.633865C7.11578 0.42434 7.29014 0.249976 7.49967 0.249976H8.07169C8.28121 0.249976 8.45558 0.42434 8.45558 0.633865V7.25664Z"
                              fill="currentColor"
                              stroke="currentColor"
                            />
                          </svg>
                        </button>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
                    {services.map((data) => (
                      <BokingsRow
                        key={data._id}
                        handleBookingDelete={handleBookingDelete}
                        handlebookingUpdate={handlebookingUpdate}
                        item={data}
                      ></BokingsRow>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BookingsPage;
