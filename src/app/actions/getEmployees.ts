'use server'
 
export default async function getEmployees() {
  const response = await fetch(`https://reqres.in/api/users`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    }
  })

  console.log('|| getEmployees || response:', response)

  const result = await response.json();
  return result;
}
