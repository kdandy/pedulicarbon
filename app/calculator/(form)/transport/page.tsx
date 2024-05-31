'use client'

import { CustomInput, Header, NextBackButton, TitleComponent, ScrollContainer } from "@/components/main"
import { useContext } from 'react';
import { CalculatorContext } from '@/context/CalculatorContext';

const Calculator = () => {
  const { input, setInput } = useContext(CalculatorContext)
  const min = 0

  return (
    <>
      <Header>
        <TitleComponent>Kendaraan</TitleComponent>
        <NextBackButton back="home" next="entertainment" />
      </Header>
      <ScrollContainer  >
        <CustomInput
          min={min}
          name="UsedFuel"
          type="number"
          setInput={setInput}
          label='Berapa rata-rata konsumsi bahan bakar Anda per 100 km?'
          value={input.UsedFuel}
          spanContent=" l / 100km"
        />

        <CustomInput
          min={min}
          name="DistanceDriven"
          type="number"
          setInput={setInput}
          label='Berapa kilometer yang telah Anda tempuh?'
          value={input.DistanceDriven}
          spanContent=" km"
        />
      </ScrollContainer >
    </>
  )
}

export default Calculator