import { RiDeleteBinLine } from "react-icons/ri";

const BokingsRow = ({ item, handleBookingDelete, handlebookingUpdate }) => {
  const { _id, name, phone, date, email, title, servicePrice, img, status } =
    item;

  return (
    <tr>
      <td className="px-4 py-4  font-medium text-gray-700 whitespace-nowrap">
        <div className="inline-flex items-center gap-x-3">
          <td className=" py-4 whitespace-nowrap">
            <div className="flex items-center ">
              <button
                onClick={() => handleBookingDelete(_id)}
                className="text-gray-500 transition-colors duration-200 dark:hover:text-red-500 text-2xl dark:text-gray-300 hover:text-red-500 focus:outline-none"
              >
                <RiDeleteBinLine />
              </button>
            </div>
          </td>
        </div>
      </td>

      <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
        <div className="flex items-center gap-x-4">
          <img className="object-cover w-20 h-16 rounded-md" src={img} />
          <div>
            <h2 className="font-medium text-xl text-gray-800 dark:text-white ">
              {title}
            </h2>
            <p className="text-sm font-normal text-gray-600 dark:text-gray-400">
              {email}
            </p>
          </div>
        </div>
      </td>

      <td className="px-4 py-4 text-md text-gray-500 dark:text-gray-300 whitespace-nowrap">
        <h1 className="font-semibold"> {name}</h1>
        <p>{phone}</p>
      </td>

      <td className="px-4 py-4 text-sm font-bold text-gray-600 dark:text-gray-300 whitespace-nowrap">
        {date}
      </td>

      <td className="px-4 py-4 font-bold text-sm text-gray-600 dark:text-gray-300 whitespace-nowrap">
        ${servicePrice}
      </td>

      {/* pending */}
      <td className=" px-4 py-4 text-sm  text-gray-700 whitespace-nowrap">
        <td className="pl-5">
          <button
            onClick={() => handlebookingUpdate(_id)}
            className="px-3 py-1 font-medium rounded-md text-white bg-[#FF3811] dark:text-gray-50"
          >
            {status === "Conform" ? <span>Conform</span> : <span>Pending</span>}
          </button>
        </td>
      </td>
    </tr>
  );
};

export default BokingsRow;
