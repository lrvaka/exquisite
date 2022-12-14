const ServiceInfo = ({ formData, setFormData, page, setPage, x, setX }) => {
  const selectServiceHandler = (e) => {
    setFormData({ ...formData, service: e.target.value });

    setPage(page + 1);
    setX(1000);
  };

  return (
    <div className="flex flex-col justify-center items-center w-full h-full absolute top-0 left-0 p-5 lg:p-10">
      <div className="text-xl lg:text-2xl mb-4 text-center">
        What service are you interested in?
      </div>
      <div className="flex flex-col gap-2 w-full">
        <button
          className="w-full bg-emerald-700 rounded-sm p-2 text-xl cursor-pointer"
          value="Installation"
          onClick={selectServiceHandler}
        >
          🧰 Installation
        </button>

        <button
          className="w-full bg-emerald-700 rounded-sm p-2 text-xl cursor-pointer"
          value="Refinishing"
          onClick={selectServiceHandler}
        >
          🧼 Refinishing
        </button>

        <button
          className="w-full bg-emerald-700 rounded-sm p-2 text-xl cursor-pointer"
          value="Repair"
          onClick={selectServiceHandler}
        >
          🔧 Repair
        </button>

        <button
          className="w-full bg-emerald-700 rounded-sm p-2 text-xl cursor-pointer"
          value="Maintenance"
          onClick={selectServiceHandler}
        >
          🧑‍🔧 Maintenance
        </button>

        <button
          className="w-full bg-emerald-700 rounded-sm p-2 text-xl cursor-pointer"
          value="Multiple Services"
          onClick={selectServiceHandler}
        >
          🪵 Multiple Services
        </button>

        <button
          className="w-full bg-emerald-700 rounded-sm p-2 text-xl cursor-pointer"
          value="Unsure"
          onClick={selectServiceHandler}
        >
         🤷‍♂️ Unsure - we&apos;ll find out during consultation
        </button>

        {/* <button
          className=" w-fit bg-emerald-100 text-black rounded-sm p-2 text-xl mt-10 self-center"
          onClick={() => {
            setPage(page + 1);
            setX(1000);
          }}
        >
          Next
        </button> */}
      </div>
    </div>
  );
};

export default ServiceInfo;
