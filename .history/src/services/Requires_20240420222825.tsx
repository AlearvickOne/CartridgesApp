import { useGetOrdersData } from '@/hooks/useGetOrdersData'
import React from 'react'

export const Requires = () => {
  return (
    <div>Requires</div>
  )
}


const getOrders = async() ={
    const {data} = await useGetOrdersData()
}