import { CalenderSearch } from "@/components/calender-search/calender-search"
import { CashData } from "@/components/cash-data/cash-data"
import { ComponentBody } from "@/components/component-body/component-body"

export default function Dashboard() {
  return (
    <>
      <CashData />
      <div className=" bg-slate-100">
        <CalenderSearch />
        <ComponentBody />
      </div>
    </>
  )
}
