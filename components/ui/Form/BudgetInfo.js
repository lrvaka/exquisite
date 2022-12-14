const BudgetInfo = ({ formData, setFormData, page, setPage, x, setX }) => {
  const selectBudgetHandler = (e) => {
    setFormData({ ...formData, budget: e.target.value });
    setPage(page + 1);
    setX(1000);
  };

  return (
    <div className="flex flex-col justify-center items-center w-full h-full absolute top-0 left-0 p-5 lg:p-10">
      <div className="text-xl lg:text-2xl mb-4 text-center">
        What&apos;s your general budget range?
      </div>
      <div className="flex flex-col gap-2 w-full">
        <button
          className="w-full bg-emerald-700 rounded-sm p-2 text-xl cursor-pointer"
          value="Less than $10,000"
          onClick={selectBudgetHandler}
        >
          Less than $10,000
        </button>

        <button
          className="w-full bg-emerald-700 rounded-sm p-2 text-xl cursor-pointer"
          value="$10,000 - $20,000"
          onClick={selectBudgetHandler}
        >
          $10,000 - $20,000
        </button>
        <button
          className="w-full bg-emerald-700 rounded-sm p-2 text-xl cursor-pointer"
          value="$20,000 - $40,000"
          onClick={selectBudgetHandler}
        >
          $20,000 - $40,000
        </button>
        <button
          className="w-full bg-emerald-700 rounded-sm p-2 text-xl cursor-pointer"
          value=" $40,000 - $80,000"
          onClick={selectBudgetHandler}
        >
          $40,000 - $80,000
        </button>
        <button
          className="w-full bg-emerald-700 rounded-sm p-2 text-xl cursor-pointer"
          value="Greater than $80,000"
          onClick={selectBudgetHandler}
        >
          Greater than $80,000
        </button>

        <button
          className="w-full bg-emerald-700 rounded-sm p-2 text-xl cursor-pointer"
          value="Unsure"
          onClick={selectBudgetHandler}
        >
          Unsure - we&apos;ll find out during consultation
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
          <button
            className=" w-fit bg-emerald-100 text-black rounded-sm p-2 text-xl mt-10 self-center"
            onClick={() => {
              setPage(page + 1);
              setX(1000);
            }}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default BudgetInfo;
