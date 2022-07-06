import { PlusCircleIcon } from "@heroicons/react/solid";

const Bugs = () => {
  return (
    <div>
      <div className="flex justify-between items-center w-full mt-4 pb-4">
        <h1 className="text-2xl font-bold ml-8">Bugs : WorkPod App</h1>
        <button className="px-6 py-2 bg-lred text-white rounded-xl mr-8 flex-c">
          Submit Bug <PlusCircleIcon className="w-8 h-8 ml-2" />
        </button>
      </div>

      <div className="mt-4 font-main">
        <table className="border-collapse table-fixed w-full text-center border-spacing-4 bg-white">
          <thead>
            <tr>
              <th className="py-4">Bug</th>
              <th>Status</th>
              <th>Created</th>
              <th>Due</th>
              <th>Reporter</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-y-8 border-body">
              <td className="py-4">
                <div className="flex text-start font-bold cursor-pointer hover:underline">
                  <span className="text-lred mx-4">MR23</span> Create
                  Company Logo in 3 different Styles
                </div>
              </td>
              <td><span className="mx-auto bg-red-200 py-2 px-4 rounded-lg text-lred font-bold">Blocked</span></td>
              <td>03/04/20</td>
              <td>Due in 5 days</td>
              <td className="font-semibold">Ronald Patrick</td>
            </tr>

            <tr className="border-y-8 border-body">
              <td className="py-4">
                <div className="flex text-start font-bold ">
                  <span className="text-lred mx-4">MR24</span>
                  Landing Pages
                </div>
              </td>
              <td><span className="mx-auto bg-green-200 py-2 px-4 rounded-lg text-green-600 font-bold">Completed</span></td>
              <td>02/03/20</td>
              <td>Due in 1 day</td>
              <td className="font-semibold">Ronald Patrick</td>
            </tr>


          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Bugs;
