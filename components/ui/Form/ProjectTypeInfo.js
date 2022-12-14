const ProjectTypeInfo = ({ formData, setFormData, page, setPage, x, setX }) => {
  const selectProjectTypeHandler = (e) => {
    setFormData({ ...formData, projectType: e.target.value });
    setPage(page + 1);
    setX(1000);
  };

  return (
    <div className="flex flex-col justify-center items-center w-full h-full absolute top-0 left-0 p-5 lg:p-10">
      <div className="text-xl lg:text-2xl mb-4 text-center">
        What is your project type?
      </div>
      <div className="flex flex-col gap-2 w-full">
        <button
          className="w-full bg-emerald-700 rounded-sm p-2 text-xl cursor-pointer"
          value="Commercial"
          onClick={selectProjectTypeHandler}
        >
          🎥 Commercial
        </button>

        <button
          className="w-full bg-emerald-700 rounded-sm p-2 text-xl cursor-pointer"
          value="Retail"
          onClick={selectProjectTypeHandler}
        >
          🛍️ Retail
        </button>

        <button
          className="w-full bg-emerald-700 rounded-sm p-2 text-xl cursor-pointer"
          value="Residential"
          onClick={selectProjectTypeHandler}
        >
          🏘️ Residential
        </button>

        <button
          className="w-full bg-emerald-700 rounded-sm p-2 text-xl cursor-pointer"
          value="Multi-family"
          onClick={selectProjectTypeHandler}
        >
          🏙️ Multi-family
        </button>

        <button
          className="w-full bg-emerald-700 rounded-sm p-2 text-xl cursor-pointer"
          value="Hospitality"
          onClick={selectProjectTypeHandler}
        >
          🏨 Hospitality
        </button>

        <button
          className="w-full bg-emerald-700 rounded-sm p-2 text-xl cursor-pointer"
          value="Institutional"
          onClick={selectProjectTypeHandler}
        >
          🏦 Institutional
        </button>

        <button
          className="w-full bg-emerald-700 rounded-sm p-2 text-xl cursor-pointer"
          value="Unsure"
          onClick={selectProjectTypeHandler}
        >
          🤷‍♂️ Unsure - we&apos;ll find out during consultation
        </button>
        <div className="flex justify-center gap-20">
          <button
            className=" w-fit bg-emerald-100 text-black rounded-sm p-2 text-xl mt-10 self-center"
            onClick={() => {
              setPage(page - 1);
              setX(-1000);
            }}
          >
            Back
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
    </div>
  );
};

export default ProjectTypeInfo;
