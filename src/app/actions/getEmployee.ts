'use server'

export default async function getEmployee({
  id
}: {
  id: string
}) {
  const response = await fetch(`https://reqres.in/api/users/${id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    }
  })

  console.log('|| getEmployee || response:', response)

  const result = await response.json();
  return result;
}
