'use client'
import { useRouter } from "next/navigation"
import { useSelectedLayoutSegment } from 'next/navigation'
import Link from "next/link"
import clsx from "clsx"

const tabs = [
  {name:'Home',href:'/'},
  {name:'Select',href:'select'},
  {name:'Left Join',href:'join'},
  {name:'Rote Handler',href:'route_handler'},
  {name:'Fetch Azure',href:'fetch_azure'},
]

export default function Tabs() {
  const segment = useSelectedLayoutSegment()

  const router = useRouter()
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    console.log(event.target.value);
    const href = tabs.find((tab)=>(tab.name === event.target.value))?.href
    router.push(href || '')
  };
  
  return (
    <div className="pl-4 mb-10 shadow">
      <div className="sm:hidden py-2 -mb-2">
        <label htmlFor="tabs" className="sr-only">
          Select a tab
        </label>
        {/* Use an "onChange" listener to redirect the user to the selected tab URL. */}
        <select
          id="tabs"
          name="tabs"
          className="block h-9 w-56 pl-2 rounded-md border bg-slate-700 text-slate-400 border-gray-300 focus:border-green-500 focus:outline-none focus:ring-green-500"
          defaultValue={(tabs as any).find((tab:any) => (tab.href === segment))?.name || 0}
          onChange={handleChange}>
          {tabs.map((tab) => (
            <option key={tab.name}>{tab.name}</option>
          ))}
        </select>
      </div>
      <div className="hidden sm:block">
        <div className="">
          <nav className="-mb-2 flex space-x-8" aria-label="Tabs">
            {tabs.map((tab) => (
              <Link
                key={tab.name}
                href={tab.href}
                className={
                  clsx(
                    'whitespace-nowrap border-b-2 py-4 px-1',
                    {'border-green-700 text-emerald-700 font-semibold':(tab.href===segment)},
                    {'border-transparent text-gray-500 font-medium hover:border-gray-300 hover:text-gray-700':!(tab.href===segment)},
                  )
                }
                aria-current={(tab.href===segment) ? 'page' : undefined}
              >
                {tab.name}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </div>
  )
}
