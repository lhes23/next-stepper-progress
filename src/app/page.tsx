"use client"
import Stepper from "./components/Stepper"
import { useState } from "react"

export default function Home() {
  const steps = ["Step 1", "Step 2", "Step 3", "Step 4", "Step 5"]
  const [current, setCurrent] = useState<number>(0)
  return (
    <main className="">
      <Stepper current={current} steps={steps.length} />
      <button
        onClick={(e) => setCurrent((prev) => (prev === 0 ? prev : prev - 1))}
      >
        Prev
      </button>
      <button
        onClick={(e) =>
          setCurrent((prev) => (prev === steps.length - 1 ? prev : prev + 1))
        }
      >
        Next
      </button>
    </main>
  )
}
