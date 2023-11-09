import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { config } from "../../../config";
import usePostData from "@/hooks/usePostData";
import { type Filter } from "@/utils/types/base";
import { Pagination, Spin, message } from "antd";
import { industrylist, sizelist } from "./menulists";
import BusinessDropdown from "./dropdown";
import BusinessIndustrySearch from "./searchdropdown";
import { measureMemory } from "vm";
import ValidateUserForm from "../registerValidation";
import LocationSelector from "../location/locationselector";
import PaginationController from "./paginationController";

export interface BusinessInterface {
  email: string;
  password: string;
  type: string;
  name: string;
  size: (typeof sizelist)[number];
  industry: (typeof industrylist)[number];
  location: any;
}

interface props {
  forwards: any;
  backwards: any;
  currentStep: number;
  steps: any;
}

const BusinessRegisterForm: React.FC<props> = ({
  currentStep,
  backwards,
  forwards,
  steps,
}) => {
  const handleLocationChange = (selectedlocation: any) => {
    setBusiness({ ...business, location: selectedlocation });
  };
  const router = useRouter();
  const [business, setBusiness] = useState<BusinessInterface>({
    email: "",
    password: "",
    type: "business",
    name: "",
    size: "",
    industry: "",
    location: {
      country: "",
      province: "",
      cityOrMunicipality: "",
      specifics: "",
    },
  });
  const [vpassword, setVpassword] = useState<string>("");
  const { data, loading, handlePostRequest } = usePostData(
    `${config.BACKEND_ENDPOINT}/api/register/business`
  );
  const handleRedirect = (route: string): void => {
    router.push(route).catch((err) => {
      throw err;
    });
  };

  const submitForm = (): void => {
    if (!ValidateUserForm(business, vpassword)) return;

    if (Object.values(business.location).some((value) => !value)) {
      void message.error("Empty fields");

      return;
    }

    if (!industrylist.includes(business.industry)) {
      void message.error("Please select a valid Industry");
      return;
    }
    const bodyObj: Filter = {
      ...business,
    };
    void handlePostRequest(bodyObj);
  };

  useEffect(() => {
    if (data === null) return;

    //make this as separate tsx

    if (data !== null) void router.push("/login");
  }, [data]);

  //PLEASE TRANSFER INTO DIFFERENT TSXs
  function FirstItem() {
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

  function SecondItem() {
    return (
      <>
        <div className='w-[20rem]'>
          <p>Business Size</p>
          <BusinessDropdown
            list={sizelist}
            defaultMessage='Select one . . .'
            business={business}
            setBusiness={setBusiness}
          />
        </div>
        <div className='w-[20rem]'>
          <p>Industry</p>
          <BusinessIndustrySearch
            list={industrylist}
            defaultMessage='Select one . . .'
            business={business}
            setBusiness={setBusiness}
          />
        </div>
        <div className='w-[20rem]'>
          <p>Business Location</p>
          <LocationSelector onLocationChange={handleLocationChange} />
        </div>
      </>
    );
  }

  //brett please add here picture section

  const sections = [<FirstItem />, <SecondItem />];

  return (
    <div className='grid h-full w-full grid-cols-[2fr_1fr] gap-8'>
      <section className='white-shadow flex h-full w-full flex-col justify-around gap-2 p-4 font-[400]'>
        {sections[currentStep - 1]}

        <div className='text-[.7rem] text-[#878787]'>
          <p>
            Register as{" "}
            <a
              className='cursor-pointer font-semibold text-[#2B99FF] hover:text-black'
              onClick={() => {
                handleRedirect("/register/customer");
              }}
            >
              Customer
            </a>{" "}
            instead
          </p>
        </div>

        <PaginationController
          currentStep={currentStep}
          backwards={backwards}
          forwards={forwards}
          steps={steps}
        />
      </section>

      <div className='info'>
        <div className='white-shadow flex flex-col gap-4 p-4'>
          <span className=''>Business Summary</span>
          <div className='flex flex-col gap-4 rounded-xl border-[2px] p-4'>
            <div className='flex flex-col gap-2 '>
              <span className='text-sm font-semibold text-gray-400'>
                BUSINESS NAME:{" "}
              </span>
              <span className=''>{business.name}</span>
            </div>

            <div className='flex flex-col gap-2 '>
              <span className='text-sm font-semibold text-gray-400'>
                INDUSTRY:{" "}
              </span>
              <span className=''>{business.industry}</span>
            </div>

            <div className='flex flex-col gap-2 '>
              <span className='text-sm font-semibold text-gray-400'>
                SIZE:{" "}
              </span>
              <span className=''>{business.size}</span>
            </div>

            <div className='flex flex-col gap-2 '>
              <span className='text-sm font-semibold text-gray-400'>
                LOCATION:{" "}
              </span>
              <div className='flex gap-4'>
                <div className='country flex flex-col'>
                  <span className='text-semibold text-sm text-gray-400'>
                    Country
                  </span>
                  <span className=''>{business.location.country}</span>
                </div>

                <div className='country flex flex-col'>
                  <span className='text-semibold text-sm text-gray-400'>
                    Province
                  </span>
                  <span className=''>{business.location.province}</span>
                </div>

                <div className='country flex flex-col'>
                  <span className='text-semibold text-sm text-gray-400'>
                    City
                  </span>
                  <span className=''>
                    {business.location.cityOrMunicipality}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <span className=''>
            Please review data submitted before progressing
          </span>
          <div className='mt-[1rem] font-[600]'>
            <button
              onClick={submitForm}
              className='w-full rounded-[.3rem] bg-[#2B99FF] px-[1.5rem] py-[.3rem] text-[.8rem] font-[600] text-white'
            >
              {loading ? <Spin /> : "Proceed"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessRegisterForm;
