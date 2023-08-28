export const ComponentBody = () => {
  return (
    <section className="component_part bg-gray-100 p-[20px]">
      <div className="container-fluid mx-auto">
        <div className="componet_item flex flex-wrap justify-between px-2">
          <div className="dashboard bg-white rounded-xl w-[420px] h-[330px] mt-[18px]"></div>
          <div className="balance_trend bg-white rounded-xl w-[420px] h-[330px] mt-[18px]"></div>
          <div className="cash_flow bg-white rounded-xl w-[420px] h-[330px] mt-[18px]"></div>
          <div className="expense bg-white rounded-xl w-[420px] h-[330px] mt-[18px]"></div>
          <div className="last_record bg-white rounded-xl w-[420px] h-[330px] mt-[18px]"></div>
          <div className="add_card bg-white rounded-xl w-[420px] h-[330px] mt-[18px]"></div>
        </div>
      </div>
    </section>
  )
}
