'use client'

import { SimpleChart, CircleChart } from "@/components/main"
import { CalculatorContext } from "@/context/CalculatorContext"
import Link from "next/link"
import { useContext } from "react"

const Summary = () => {

  const { input, phoneCO2Emission, gasCO2Emission, homeCO2Emission, all, percentage } = useContext(CalculatorContext)

  const entertaiment = phoneCO2Emission(+input.LaptopUsage)
  const transport = gasCO2Emission(+input.UsedFuel, +input.DistanceDriven)
  const home = homeCO2Emission()
  const baseline = 670
  return (
    <div className="text-[#29836d] p-[40px] w-full h-full flex flex-col">
      <p className="text-[35px] font-bold text-center flex-shrink-0">Ringkasan</p>
      <div className=" md:pt-[20px] lg:pt-[30px] h-full overflow-auto flex flex-col items-center gap-[20px]">
        {
          all !== 0 ?
          <>
            <ul className="sm:text-[18px] md:text-[22px] mt-[35px] flex flex-col gap-[10px]">
          <li className="text-center lg:text-left">{home} kilogram CO2 yang dihasilkan melalui penggunaan rumah tangga {percentage(home)}</li>
          <li className="text-center lg:text-left">{transport} kilogram CO2 yang dihasilkan oleh transportasi {percentage(transport)}</li>
          <li className="text-center lg:text-left">{entertaiment} kilogram CO2 yang dihasilkan oleh hiburan {percentage(entertaiment)}</li>
        </ul>
        <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-12 lg:gap-24 my-8">
          <SimpleChart
            baseline={baseline}
            compared={all}
          />
          <CircleChart entries={[
            { name: "Dom", value: home },
            { name: "Transport", value: transport },
            { name: "Hiburan", value: entertaiment }
          ]} />
        </div>
        <p className="text-center lg:text-left font-semibold text-2xl mb-[20px]">KESELURUHAN YANG ANDA PRODUKSI {all} KILOGRAM CO2</p>
        <h2 className={`text-center lg:text-left font-extrabold text-2xl ${all >= baseline ? "text-red-600" : "text-green-600"}`}>{all >= baseline ? "ANDA TIDAK RAMAH LINGKUNGAN!" : "ANDA RAMAH LINGKUNGAN!"}</h2>
          </> :
          <div className="w-full h-full flex items-center justify-center flex-col gap-[50px] ">
            <p className="text-2xl font-medium text-center">Maaf, untuk melihat rangkumannya harap mengisi formulir terlebih dahulu</p>
            <Link href="/calculator/home" className="shadow-md text-xl hover:shadow-2xl px-[1.5rem] py-[1.2rem] bg-green-600 rounded-full text-white">Kembali ke formulir</Link>
          </div>
        }
      </div>
    </div>
  )
}

export default Summary  