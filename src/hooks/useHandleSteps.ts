import { useState } from 'react'

interface handleStepsReturn {
  currentStep: number
  backwards: () => void
  forwards: () => void
  steps: steps[]
}

interface steps {
  title: string
  description: string
}

const description = ''
export default function useHandleSteps (): handleStepsReturn {
  const [currentStep, setCurrentStep] = useState<number>(1)

  const steps: steps[] = [
    {
      title: 'Login Info',
      description
    },
    {
      title: 'Additional Info',
      description
    },
    {
      title: 'Photo',
      description
    }
  ]

  function backwards (): void {
    if (currentStep === 1) return
    setCurrentStep((prev) => prev -= 1)
  }
  function forwards (): void {
    if (currentStep === 3) return
    setCurrentStep(prev => prev += 1)
  }
  return {
    currentStep,
    backwards,
    forwards,
    steps
  }
}
