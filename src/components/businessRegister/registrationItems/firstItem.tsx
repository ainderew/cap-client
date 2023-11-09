
//change later
interface props{
    business: any,
    setBusiness: any,
    vpassword:any,
    setVpassword: any
}

export default function FirstItem({business, setBusiness, vpassword, setVpassword}:props): React.ReactElement {
  return (
    <>
      <div>
        <p>Email</p>
        <input
          value={business.email}
          onChange={(e) => {
            setBusiness({ ...business, email: e.target.value });
          }}
          type='text'
          className='w-[20rem] rounded-[.5rem] p-[.2rem] px-[.7rem] outline outline-1 outline-[#2B99FF]'
        ></input>
      </div>
      <div>
        <p>Password</p>
        <input
          value={business.password}
          onChange={(e) => {
            setBusiness({ ...business, password: e.target.value });
          }}
          type='password'
          className='w-[20rem] rounded-[.5rem] p-[.2rem] px-[.7rem] outline outline-1 outline-[#2B99FF]'
        ></input>
      </div>
      <div>
        <p>Verify Password</p>
        <input
          value={vpassword}
          onChange={(e) => {
            setVpassword(e.target.value);
          }}
          type='password'
          className='w-[20rem] rounded-[.5rem] p-[.2rem] px-[.7rem] outline outline-1 outline-[#2B99FF]'
        ></input>
      </div>
      <div>
        <p>Business Name</p>
        <input
          value={business.name}
          onChange={(e) => {
            setBusiness({ ...business, name: e.target.value });
          }}
          type='text'
          className='w-[20rem] rounded-[.5rem] p-[.2rem] px-[.7rem] outline outline-1 outline-[#2B99FF]'
        ></input>
      </div>
    </>
  );
}
