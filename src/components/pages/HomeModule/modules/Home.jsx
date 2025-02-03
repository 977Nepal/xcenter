import React from 'react'

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center px-6">
        <h1 className="text-9xl font-bold text-blue-600">Form Builder</h1>
        <h2 className="text-3xl font-semibold text-gray-800 mt-20">Form Builder</h2>
        <p className="text-lg text-gray-600 mt-4 max-w-[900px]">
        With the form builder, users will experience smooth interactions and instant feedback. Upon adding or deleting a field, a quick notification like 'Field added to your form!' or 'Field deleted successfully.' will keep them informed. Once changes are saved, a friendly 'Changes saved!' message will confirm their actions. When sharing a form, the user will get notified with 'Form sharing link copied!' and 'Form saved successfully!' will appear after saving the form. 
        </p>
        <a
            href="/dashboard"
            className="mt-10 px-6 py-3 text-white bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 transition-all"
        >
            Go To Dashboard
        </a>
    </div>
    )
}

export default Home