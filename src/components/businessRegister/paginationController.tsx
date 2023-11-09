

interface props {
    forwards: any;
    backwards: any;
    currentStep: number;
    steps: any;
  }


function PaginationController({backwards, steps, currentStep, forwards}:props): React.ReactElement {
  return (
    <div className='flex items-center justify-center gap-2'>
      <button onClick={backwards} className=''>
        Back
      </button>
      {steps.map((_: any, index: number) => {
        return (
          <div
            className={`h-2 w-2 rounded-full bg-gray-400 ${
              index === currentStep - 1 && "!bg-primary"
            }`}
          ></div>
        );
      })}
      <button onClick={forwards} className=''>
        Next
      </button>
    </div>
  );
}


export default PaginationController;