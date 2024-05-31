'use client'

import { CustomInput, CustomLink, Header, NextBackButton, TitleComponent, ScrollContainer, SubmitButton } from "@/components/main"
import { CalculatorContext } from "@/context/CalculatorContext"
import { useContext, useState } from "react"

const Delivery = () => {
  const { input, setInput, setDeliverySum } = useContext(CalculatorContext)
  const [list, setList] = useState<object[]>([])

  const addTask = () => {
    if (+input.PackageDistance && +input.PackageWeight) {
      const task = { journey: +input.PackageDistance, weight: +input.PackageWeight }
      setList(prev => [...prev, task ])
      setDeliverySum((prev: any) => ({ ...prev, weight: prev.weight + task.weight, journey: prev.journey + task.journey }))
      input.PackageDistance = 0
      input.PackageWeight = 0
    }
  }

  return (
    <>
      <Header>
        <TitleComponent>Pengiriman</TitleComponent>
        <div className="flex gap-[10px] sm:gap-[30px] items-center flex-col sm:flex-row">
          <NextBackButton back="entertainment" />
          <SubmitButton className="lg:hidden" />
        </div>
      </Header>

      <ScrollContainer>
        <div className="flex gap-[20px] flex-col items-center w-full lg:items-start">
          <CustomInput
            min={0}
            name="PackageDistance"
            type="number"
            setInput={setInput}
            label='Berapa lama perjalanan kirimannya?'
            value={input.PackageDistance}
            spanContent=" km"
          />
          <CustomInput
            min={0}
            name="PackageWeight"
            type="number"
            setInput={setInput}
            label='Berapa berat kiriman Anda?'
            value={input.PackageWeight}
            spanContent=" kg"
          />

          <button onClick={addTask} className="bg-green-700 text-white rounded-lg p-[10px] hover:shadow-2xl">Tambahkan Pengiriman</button>

        </div>
        <div className="grid grid-cols-1 w-full gap-[20px]">
          <ul className="flex items-center justify-between py-[10px] text-white-600 text-center border-b-[2px] border-b-white-700">
            <li className="flex-1 text-center font-bold text-large">Nama</li>
            <li className="flex-1 text-center font-bold text-large">Jarak</li>
            <li className="flex-1 text-center font-bold text-large">Berat</li>
          </ul>
          {
            list.map((item: any, index) => (
              <ul key={index} className="flex items-center justify-between bg-green-500 p-[10px] rounded-[10px] shadow-md text-white">
                <li className="flex-1 text-center">Pengiriman {index + 1}</li>
                <li className="flex-1 text-center">{item.journey} km</li>
                <li className="flex-1 text-center">{item.weight} kg</li>
              </ul>
            ))
          } 
        </div>
        </ScrollContainer>
    </>
  )
}
// const packageAmount = (item:any, index: number, amount:string) =>{
//   const list = []
//   for(let i=0; i<+amount; i++){
//     list.push(

//   )
//   }
//   return list
// }
export default Delivery