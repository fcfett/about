'use client'

import { FormEvent, useState } from 'react'

const INITIAL_VALUE = [
  {
    userFirstName: 'Coder',
    userLastName: 'Byte',
    userPhone: '666666666',
  },
]

export default function Form() {
  const [contactList, setContactList] = useState(INITIAL_VALUE)

  const onFormSubmit = (e: FormEvent) => {
    e.preventDefault()
    const formElement = e.target as HTMLFormElement
    const userFirstName = formElement['userFirstName']?.value
    const userLastName = formElement['userLastName']?.value
    const userPhone = formElement['userPhone']?.value

    if (userFirstName && userLastName && userPhone) {
      setContactList((list) =>
        [...list, { userFirstName, userLastName, userPhone }].sort((a, b) =>
          a.userLastName.localeCompare(b.userLastName)
        )
      )
      formElement.reset()
    }
  }

  return (
    <section className="flex flex-col gap-2 bg-lime-500 p-4">
      <h1 className="font-bold">Contact List</h1>
      <ul>
        {contactList.map(({ userFirstName, userLastName, userPhone }) => (
          <li
            key={`${userLastName}-${userPhone}`}
          >{`${userLastName}, ${userFirstName}: ${userPhone}`}</li>
        ))}
      </ul>
      <hr />
      <form
        onSubmit={onFormSubmit}
        className="flex flex-col gap-2 bg-yellow-500"
      >
        <label htmlFor="userFirstName">First Name</label>
        <input type="text" id="userFirstName" name="userFirstName" required />
        <label htmlFor="userLastName">Last Name</label>
        <input type="text" id="userLastName" name="userLastName" required />
        <label htmlFor="userPhone">Phone</label>
        <input type="text" id="userPhone" name="userPhone" required />
        <button className="bg-orange-500">Submit</button>
      </form>
    </section>
  )
}
