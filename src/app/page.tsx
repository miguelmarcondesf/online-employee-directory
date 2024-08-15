'use client'

import { useEffect, useState } from "react";
import Link from 'next/link'

import getEmployees from './actions/getEmployees'
import { Employee } from "./domain/Employee";

export default function Home() {
  const [employees, setEmployees] = useState<Employee>([])

  useEffect(() => {
    getEmployees().then((response) => {
      setEmployees(response.data)
    })
  }, [])

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {employees.map((employee) => (
        <div key={employee.id} className="flex flex-col items-center justify-center">
          <Link href={`/employees/${employee.id.toString()}`}>
            <h1>{employee.first_name} {employee.last_name}</h1>
            <p>{employee.email}</p>
          </Link>
        </div>
      ))
      }
    </main>
  );
}
