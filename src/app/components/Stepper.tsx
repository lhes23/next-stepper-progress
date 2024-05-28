"use client"
import React, { Fragment } from "react"
import styles from "./Stepper.module.css"

const Stepper = ({ current, steps }: { current: number; steps: number }) => {
  const active = (index: number) => (current >= index ? styles.active : "")
  const final = (index: number) => index === steps - 1
  return (
    <>
      <div className={styles.stepperWrapper}>
        {Array.from({ length: steps }).map((_, index: number) => (
          <Fragment key={index}>
            <div className={styles.step + " " + active(index)}>{index + 1}</div>
            {final(index) ? null : (
              <span className={styles.line + " " + active(index + 1)}></span>
            )}
          </Fragment>
        ))}
      </div>
    </>
  )
}

export default Stepper
