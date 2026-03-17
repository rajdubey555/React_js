import React, { useEffect, useState } from 'react'

const App = () => {

  const [Title, setTitle] = useState('')
  const [Desc, setDesc] = useState('')
  const [EditId, setEditId] = useState(null)
  const [Task, setTask] = useState([])

  useEffect(() => {
    const store = localStorage.getItem("tasks")

    if (store) {
      setTask(JSON.parse(store))
    }
  }, [])

  const submitHandler = (e) => {
    e.preventDefault()
    let updateTasks;

    if (EditId !== null) {
      updateTasks = Task.map((item) => {
        return item.id === EditId ? { ...item, Title, Desc } : item
      })
      setEditId(null)
    }
    else {
      updateTasks = [
        ...Task,
        { id: Date.now(), Title, Desc }
      ]
    }
    setTask(updateTasks)
    localStorage.setItem("tasks", JSON.stringify(updateTasks))
    setTitle('')
    setDesc('')
  }

  const Del = (id) => {
    const updateTasks = Task.filter((item) => {
      return item.id !== id
    })
    setTask(updateTasks)
    localStorage.setItem("tasks", JSON.stringify(updateTasks))
  }




  return (
    <div className='h-screen bg-white'>
      <h1 className='text-4xl font-bold text-center pt-10'>My Notes</h1>
      <form onSubmit={(e) => {
        submitHandler(e);
      }} className=' flex p-5'>
        <div className='w-1/2 bg-blue-600  mt-10 rounded-lg overflow-auto '>
          <div>
            <h1 className='text-4xl font-bold text-center pt-3 text-white'>Add Notes </h1>
          </div>
          <div className='flex  flex-col gap-5 items-center '>
            <input onChange={(e) => {
              setTitle(e.target.value)
            }}
              value={Title}
              type="text"
              placeholder='Enter Notes Heading'
              className='px-5 py-2 mt-5 border-2 text-white rounded  w-100 h-10'
            />
            <textarea onChange={(e) => {
              setDesc(e.target.value)
            }}
              value={Desc}
              type="text"
              placeholder='Enter Notes Details'
              className='px-5 py-2  w-100 h-20 border-2 rounded text-white'
            />
            <button className='bg-amber-400 text-black rounded-2xl h-10 w-50  text-xl'>Add Note</button>
          </div>
        </div>
        <div id='Notes_Area' className='bg-amber-300 h-100 w-1/2 mt-10 rounded-lg overflow-auto'>
          <div>
            <h1 className='text-4xl font-bold text-center pt-1'>Recent Notes
            </h1>
            <div>
              {Task.map((elem) => {
                return (
                  <div
                    key={elem.id}
                    className="bg-white rounded-2xl p-5 mt-5 mx-5 shadow-lg border border-gray-200 "
                  >

                    <h2 className="text-xl font-semibold text-gray-800">
                      {elem.Title}
                    </h2>

                    <p className="text-gray-600 mt-2 wrap-break-word">
                      {elem.Desc}
                    </p>

                    <button
                      onClick={() => {
                        Del(elem.id)
                      }}
                      className="mt-4 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg"
                    >
                      Delete
                    </button>

                    <button
                      type="button"
                      onClick={() => {
                        setTitle(elem.Title)
                        setDesc(elem.Desc)
                        setEditId(elem.id)
                      }}
                      className="mt-2 ml-3 bg-blue-500 text-white px-4 py-2 rounded-lg"
                    >
                      Edit
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

      </form>
    </div>
  )
}

export default App
