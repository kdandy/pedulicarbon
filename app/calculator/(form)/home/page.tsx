'use client'

import { CustomInput, Header, NextBackButton, ScrollContainer, TitleComponent } from "@/components/main"
import { useContext } from 'react';
import { CalculatorContext } from "@/context/CalculatorContext";
const Calculator = () => {
  const min = 0
  const { input, setInput } = useContext(CalculatorContext)


  return (
    <>
      <Header>  
        <TitleComponent>Dom</TitleComponent>
        <NextBackButton next="transport" />
      </Header>
      <ScrollContainer>
        <CustomInput
          min={min}
          name="EnergyUse"
          type="number"
          setInput={setInput}
          label='Berapa banyak energi yang Anda gunakan?'
          value={input.EnergyUse}
          spanContent=' kwH'
        />
        <CustomInput
          min={min}
          name="CoalUse"
          type="number"
          setInput={setInput}
          label='Berapa banyak batubara yang Anda gunakan?'
          value={input.CoalUse}
          spanContent=' kg'
        />
        <CustomInput
          min={min}
          name="WoodUse"
          type="number"
          setInput={setInput}
          label='Berapa banyak kayu bakar yang Anda gunakan?'
          value={input.WoodUse}
          spanContent=' kg'
        />
        <CustomInput
          min={min}
          name="HotWater"
          type="number"
          setInput={setInput}
          label='Berapa banyak air panas yang Anda gunakan?'
          value={input.HotWater}
          spanContent=' m3'
        />
        <CustomInput
          min={min}
          name="GasUse"
          type="number"
          setInput={setInput}
          label='Berapa banyak bahan bakar yang Anda gunakan?'
          value={input.GasUse}
          spanContent='kg'
        />
        </ScrollContainer>
    </>
  )
}

export default Calculator