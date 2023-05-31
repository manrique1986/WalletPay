import EmptyCard from "../empty-card";

const CardInputStep3 = ({ color, dataForm, setDataForm }) => {
  const handleChange = (e) => {
    setDataForm({
      ...dataForm,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <div className="my-[56px]">
        <EmptyCard color={color} dataForm={dataForm} />
      </div>
      <div className="flex flex-col">
        <label
          className="font-semibold text-xs leading-[15px] text-[#39528D] pl-2"
          htmlFor="vencimiento"
        >
          Fecha de vencimiento
        </label>
        <input
          name="vencimiento"
          onChange={handleChange}
          className="w-[272px] h-[30px] focus:outline-none border-b-2 border-[#39528D] bg-[#ECEBF6] font-medium text-base leading-[20px] [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
          id="vencimiento"
          type="text"
        />
      </div>
    </>
  );
};

export default CardInputStep3;