const PaidAdCheck = ({ formData, setFormData, page, setPage, x, setX }) => {
  const selectPaidAdHandler = (e) => {
    setFormData({ ...formData, paidAdCheck: e.target.value });
    setPage(page + 1);
    setX(1000);
  };

  return (
    <div className="flex flex-col justify-center items-center w-full h-full absolute top-0 left-0 p-5 lg:p-10">
      <div className="text-2xl lg:text-3xl mb-4 text-center">
        Do you currently do any paid advertising?
      </div>
      <div className="flex flex-col gap-2 w-full">
        <input
          className="w-full bg-emerald-700 rounded-sm p-2 text-xl cursor-pointer"
          type="button"
          placeholder="Yes"
          value="Yes"
          onClick={selectPaidAdHandler}
        />

        <input
          className="w-full bg-emerald-700 rounded-sm p-2 text-xl cursor-pointer"
          type="button"
          placeholder="No"
          value="No"
          onClick={selectPaidAdHandler}
        />

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
        </div>
      </div>
    </div>
  );
};

export default PaidAdCheck;
