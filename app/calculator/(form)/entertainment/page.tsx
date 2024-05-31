"use client"

import { CustomInput, Header, NextBackButton, ScrollContainer, TitleComponent } from "@/components/main"
import { CalculatorContext } from '@/context/CalculatorContext';
import { useContext } from 'react';

const Calculator = () => {

  const min = 0
  const { input, setInput } = useContext(CalculatorContext)

  return (
    <>
      <Header>
        <TitleComponent>Elektronik</TitleComponent>
        <NextBackButton next="delivery" back="transport" />
      </Header>
      <ScrollContainer>
        <CustomInput
          min={min}
          name="LaptopUsage"
          type="number"
          setInput={setInput}
          label='Berapa jam Anda menggunakan laptop?'
          value={input.LaptopUsage}
          spanContent=' jam'
        />
      </ScrollContainer>
    </>
  )
}

export default Calculator