'use client'

import { useEffect, useState } from 'react'

import getEmployee from '@/app/actions/getEmployee'
import { Employee } from '@/app/domain/Employee'

export default function Page({ params }: { params: { id: string } }) {
  const [employee, setEmployee] = useState<Employee>([])

  useEffect(() => {
    getEmployee({ id: params.id }).then((response) => {
      console.log('|| Page || response:', response)
      setEmployee(response.data)
    })
  }, [params])

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Employee</h1>
      <div key={employee.id} className="flex flex-col items-center justify-center">
        <h2>{employee.first_name} {employee.last_name}</h2>
        <p>{employee.email}</p>
      </div>
    </main>
  )
}
